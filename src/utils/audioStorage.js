// IndexedDB Storage for offline audio caching - Version 3 (MP3 only)
const DB_NAME = 'InfectionOsceAudioDB_v3';
const DB_VERSION = 1;
const STORE_NAME = 'audio_blobs';

let dbPromise = null;

// Cleanup old databases if they exist
if (typeof window !== 'undefined' && window.indexedDB) {
  try {
    window.indexedDB.deleteDatabase('InfectionOsceAudioDB');
    window.indexedDB.deleteDatabase('InfectionOsceAudioDB_v2');
  } catch (e) {
    console.debug('Old DB cleanup error:', e);
  }
}

function getDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      resolve(null);
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    request.onerror = (event) => {
      console.warn('IndexedDB error:', event.target.error);
      resolve(null);
    };
  });
  return dbPromise;
}

// Get single cached blob (only if valid audio/mpeg)
export async function getCachedTrackBlob(trackId) {
  try {
    const db = await getDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(trackId);
      req.onsuccess = () => {
        if (req.result && req.result.blob && req.result.blob.size > 1000) {
          resolve(req.result.blob);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    console.warn('getCachedTrackBlob failed', e);
    return null;
  }
}

// Save track blob
export async function saveTrackBlob(trackId, blob) {
  try {
    const db = await getDB();
    if (!db) return false;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({
        id: trackId,
        blob,
        size: blob.size,
        format: 'mp3',
        timestamp: Date.now()
      });
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (e) {
    console.warn('saveTrackBlob failed', e);
    return false;
  }
}

// Get list of all cached track IDs
export async function getAllCachedTrackIds() {
  try {
    const db = await getDB();
    if (!db) return [];
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAllKeys();
      req.onsuccess = () => {
        resolve(req.result || []);
      };
      req.onerror = () => resolve([]);
    });
  } catch (e) {
    console.warn('getAllCachedTrackIds failed', e);
    return [];
  }
}

// Download and cache a single track
export async function downloadAndCacheTrack(track, onProgress) {
  try {
    const response = await fetch(track.audioUrl, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const contentLength = response.headers.get('content-length');
    const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
    
    if (!response.body || !totalBytes) {
      const rawBlob = await response.blob();
      const mp3Blob = new Blob([rawBlob], { type: 'audio/mpeg' });
      await saveTrackBlob(track.id, mp3Blob);
      if (onProgress) onProgress(100);
      return URL.createObjectURL(mp3Blob);
    }

    const reader = response.body.getReader();
    const chunks = [];
    let receivedBytes = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      receivedBytes += value.length;
      if (onProgress && totalBytes > 0) {
        onProgress(Math.round((receivedBytes / totalBytes) * 100));
      }
    }

    const blob = new Blob(chunks, { type: 'audio/mpeg' });
    await saveTrackBlob(track.id, blob);
    return URL.createObjectURL(blob);
  } catch (err) {
    console.error(`Failed to cache track ${track.id}:`, err);
    throw err;
  }
}

// Clear all offline storage
export async function clearAllCachedAudio() {
  try {
    const db = await getDB();
    if (!db) return;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch (e) {
    console.warn('clearAllCachedAudio failed', e);
  }
}
