// IndexedDB Storage for offline audio caching
const DB_NAME = 'InfectionOsceAudioDB';
const DB_VERSION = 1;
const STORE_NAME = 'audio_blobs';

let dbPromise = null;

function getDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
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

// Get single cached blob
export async function getCachedTrackBlob(trackId) {
  try {
    const db = await getDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(trackId);
      req.onsuccess = () => {
        if (req.result && req.result.blob) {
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
    const response = await fetch(track.audioUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const contentLength = response.headers.get('content-length');
    const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
    
    if (!response.body || !totalBytes) {
      const blob = await response.blob();
      await saveTrackBlob(track.id, blob);
      if (onProgress) onProgress(100);
      return URL.createObjectURL(blob);
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
