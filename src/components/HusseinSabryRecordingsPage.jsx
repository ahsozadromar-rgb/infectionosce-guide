import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ArrowLeft,
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Clock,
  Headphones,
  SkipForward,
  SkipBack,
  Download,
  CheckCircle2,
  HardDrive,
  Trash2,
  Loader2,
  Gauge,
  Zap,
  Mic2
} from 'lucide-react';
import { husseinSabryRecordings } from '../data/husseinSabryData';
import { 
  getCachedTrackBlob, 
  getAllCachedTrackIds, 
  downloadAndCacheTrack, 
  clearAllCachedAudio 
} from '../utils/audioStorage';
import { playClickSound } from '../utils/soundEffects';

export default function HusseinSabryRecordingsPage({ onBackToHome, initialTrackId = 1 }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    const idx = husseinSabryRecordings.findIndex(r => r.id === initialTrackId);
    return idx >= 0 ? idx : 0;
  });

  const activeTrack = husseinSabryRecordings[currentTrackIndex] || husseinSabryRecordings[0];

  const audioRef = useRef(null);
  const activeBlobUrlRef = useRef(null);
  const progressTrackRef = useRef(null);
  const speedTrackRef = useRef(null);
  const volumeTrackRef = useRef(null);
  const isDraggingProgressRef = useRef(false);
  const isDraggingSpeedRef = useRef(false);
  const isDraggingVolumeRef = useRef(false);

  const [currentAudioSrc, setCurrentAudioSrc] = useState(activeTrack.audioUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(activeTrack.durationSeconds || 240);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playbackRateRef = useRef(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const preservesPitchRef = useRef(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  // Offline caching states
  const [cachedTrackIds, setCachedTrackIds] = useState(new Set());
  const [isDownloadingAll, setIsDownloadingAll] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ current: 0, total: 11, trackTitle: '' });
  const [downloadingTrackId, setDownloadingTrackId] = useState(null);

  // Load cached tracks on mount
  useEffect(() => {
    let isMounted = true;
    getAllCachedTrackIds().then(ids => {
      if (isMounted) {
        setCachedTrackIds(new Set(ids));
      }
    });
    return () => { isMounted = false; };
  }, []);

  // Apply playback rate & pitch mode directly to audio element
  const applyPlaybackRateToAudio = useCallback((rate, pitch = preservesPitchRef.current) => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.playbackRate = rate;
      audio.defaultPlaybackRate = rate;
    } catch (e) {
      console.warn('PlaybackRate set error:', e);
    }
    try {
      if ('preservesPitch' in audio) audio.preservesPitch = pitch;
      if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = pitch;
      if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = pitch;
    } catch (e) {}
  }, []);

  // Keep strictly synced with rate and pitch changes
  useEffect(() => {
    playbackRateRef.current = playbackRate;
    preservesPitchRef.current = preservesPitch;
    applyPlaybackRateToAudio(playbackRate, preservesPitch);
  }, [playbackRate, preservesPitch, applyPlaybackRateToAudio]);

  // Update speed
  const changeSpeed = (rate, shouldPlaySound = true) => {
    if (shouldPlaySound) playClickSound();
    const clamped = Math.round(Math.max(0.5, Math.min(3.0, rate)) * 100) / 100;
    playbackRateRef.current = clamped;
    setPlaybackRate(clamped);
    applyPlaybackRateToAudio(clamped, preservesPitchRef.current);
  };

  const cycleSpeed = () => {
    const presets = [0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
    const currentIdx = presets.findIndex((p) => Math.abs(p - playbackRateRef.current) < 0.05);
    const nextRate = presets[(currentIdx + 1) % presets.length];
    changeSpeed(nextRate, true);
  };

  // Toggle pitch preservation
  const togglePreservesPitch = () => {
    playClickSound();
    const nextPitch = !preservesPitch;
    setPreservesPitch(nextPitch);
    preservesPitchRef.current = nextPitch;
    applyPlaybackRateToAudio(playbackRateRef.current, nextPitch);
  };

  // Sync volume & mute
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Load audio source
  const loadAudioSource = useCallback(async (track, shouldPlay = false) => {
    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
      activeBlobUrlRef.current = null;
    }

    try {
      const cachedBlob = await getCachedTrackBlob(track.id);
      let targetSrc = track.audioUrl;

      if (cachedBlob) {
        const blobUrl = URL.createObjectURL(cachedBlob);
        activeBlobUrlRef.current = blobUrl;
        targetSrc = blobUrl;
      }

      setCurrentAudioSrc(targetSrc);

      const audio = audioRef.current;
      if (audio) {
        audio.src = targetSrc;
        audio.load();
        applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);

        if (shouldPlay) {
          audio.play().then(() => {
            applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
            setIsPlaying(true);
          }).catch(err => {
            console.log('Play on track switch error:', err);
            setIsPlaying(false);
          });
        } else {
          setIsPlaying(false);
        }
      }
    } catch (e) {
      console.error('loadAudioSource error:', e);
    }
  }, [applyPlaybackRateToAudio]);

  // Handle track selection
  const selectTrack = (index, shouldPlay = true) => {
    playClickSound();
    if (index < 0 || index >= husseinSabryRecordings.length) return;
    setCurrentTrackIndex(index);
    const targetTrack = husseinSabryRecordings[index];
    setCurrentTime(0);
    setDuration(targetTrack.durationSeconds);
    loadAudioSource(targetTrack, shouldPlay);
  };

  // Initial track load on mount
  useEffect(() => {
    loadAudioSource(activeTrack, false);
  }, []);

  // Sync audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const enforce = () => {
      applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
    };

    const onTimeUpdate = () => {
      if (!isDraggingProgressRef.current) {
        setCurrentTime(audio.currentTime);
      }
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
      enforce();
    };

    const onPlay = () => {
      setIsPlaying(true);
      enforce();
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      setIsPlaying(false);
      // Auto-advance to next track
      if (currentTrackIndex < husseinSabryRecordings.length - 1) {
        selectTrack(currentTrackIndex + 1, true);
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('canplay', enforce);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('playing', enforce);
    audio.addEventListener('seeked', enforce);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('canplay', enforce);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('playing', enforce);
      audio.removeEventListener('seeked', enforce);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentTrackIndex, applyPlaybackRateToAudio]);

  // Spacebar toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const togglePlayPause = () => {
    playClickSound();
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
      audio.play().then(() => {
        applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
        setIsPlaying(true);
      }).catch(e => console.log('Playback error:', e));
    }
  };

  const skipTime = (seconds) => {
    playClickSound();
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), duration);
    applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
  };

  const updateProgressFromClientX = (clientX) => {
    const track = progressTrackRef.current;
    if (!track || !duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const newTime = ratio * duration;
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      applyPlaybackRateToAudio(playbackRateRef.current, preservesPitchRef.current);
    }
  };

  const updateSpeedFromClientX = (clientX) => {
    const track = speedTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = 0.5 + ratio * (3.0 - 0.5);
    const snapped = Math.round(raw * 4) / 4;
    changeSpeed(snapped, false);
  };

  const updateVolumeFromClientX = (clientX) => {
    const track = volumeTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const snapped = Math.round(ratio * 20) / 20;
    handleVolumeChange(snapped);
  };

  const toggleMute = () => {
    playClickSound();
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleVolumeChange = (newVol) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  // Download a single track to IndexedDB
  const handleDownloadSingleTrack = async (e, track) => {
    e.stopPropagation();
    playClickSound();
    if (cachedTrackIds.has(track.id) || downloadingTrackId === track.id) return;

    setDownloadingTrackId(track.id);
    try {
      await downloadAndCacheTrack(track);
      setCachedTrackIds(prev => new Set([...prev, track.id]));
      if (track.id === activeTrack.id) {
        const wasPlaying = isPlaying;
        const currentPos = currentTime;
        await loadAudioSource(track, false);
        if (audioRef.current) {
          audioRef.current.currentTime = currentPos;
          if (wasPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
          }
        }
      }
    } catch (err) {
      console.error('Download single failed:', err);
      alert('حدث خطأ أثناء تحميل التسجيل، يرجى المحاولة مرة أخرى.');
    } finally {
      setDownloadingTrackId(null);
    }
  };

  // Download ALL 11 tracks for offline usage
  const handleDownloadAllTracks = async () => {
    playClickSound();
    if (isDownloadingAll) return;
    setIsDownloadingAll(true);

    const uncached = husseinSabryRecordings.filter(r => !cachedTrackIds.has(r.id));
    if (uncached.length === 0) {
      setIsDownloadingAll(false);
      return;
    }

    try {
      let count = 0;
      for (const track of uncached) {
        count++;
        setDownloadProgress({
          current: count,
          total: uncached.length,
          trackTitle: track.title
        });
        await downloadAndCacheTrack(track);
        setCachedTrackIds(prev => new Set([...prev, track.id]));
      }
      await loadAudioSource(activeTrack, isPlaying);
    } catch (err) {
      console.error('Download all failed:', err);
      alert('حدث انقطاع في الشبكة أثناء التحميل، تم حفظ التسجيلات المكتملة.');
    } finally {
      setIsDownloadingAll(false);
    }
  };

  // Clear offline storage
  const handleClearCache = async () => {
    playClickSound();
    if (window.confirm('هل تريد حذف التسجيلات المحفوظة من ذاكرة المتصفح؟')) {
      await clearAllCachedAudio();
      setCachedTrackIds(new Set());
      await loadAudioSource(activeTrack, false);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const speedPercent = ((playbackRate - 0.5) / (3.0 - 0.5)) * 100;
  const volumePercent = isMuted ? 0 : volume * 100;
  const allCached = husseinSabryRecordings.every(r => cachedTrackIds.has(r.id));

  return (
    <div className="min-h-screen pb-16 space-y-6">
      
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentAudioSrc}
        preload="auto"
      />

      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-purple-200/80 dark:border-purple-800/60">
        
        {/* Title on the RIGHT */}
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
            <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-cairo">
              تسجيلات د. حسين صبري
            </h1>
            <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              v3.4 - MP3 48kHz
            </span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">
            مراجعة الانفكشن والعملي والأوسكي (11 تسجيل صوتي ستيريو فائق السرعة)
          </p>
        </div>

        {/* Back Button on the LEFT */}
        <button
          onClick={() => {
            playClickSound();
            if (onBackToHome) onBackToHome();
          }}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-extrabold text-sm sm:text-base hover:bg-purple-50 dark:hover:bg-purple-950/60 shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <span>العودة للرئيسية</span>
          <ArrowLeft className="w-5 h-5" />
        </button>

      </div>

      {/* Offline Storage Download Banner (Persistent in Browser) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-purple-50 via-violet-50 to-purple-100/60 dark:from-purple-950/40 dark:via-slate-900 dark:to-purple-900/30 border border-purple-300 dark:border-purple-800 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-black text-purple-950 dark:text-purple-100">
                  الحفظ والاستماع بدون إنترنت (Offline Mode)
                </h3>
                {allCached ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>جميع التسجيلات محفوظة بالجهاز (11/11)</span>
                  </span>
                ) : (
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-200/60 dark:bg-purple-900/60 px-2 py-0.5 rounded-full">
                    {cachedTrackIds.size} من 11 مسجلة في المتصفح
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                عند تحميل التسجيلات يتم تخزينها في متصفحك بشكل دائم، ولن يطلب منك تحميلها مرة أخرى حتى لو أغلقت الموقع وفتحته لاحقاً.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            {!allCached && (
              <button
                onClick={handleDownloadAllTracks}
                disabled={isDownloadingAll}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-purple-600/30 transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
              >
                {isDownloadingAll ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>جاري تحميل {downloadProgress.current} من {downloadProgress.total}...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>تحميل الكل للاستماع بدون نت</span>
                  </>
                )}
              </button>
            )}

            {cachedTrackIds.size > 0 && !isDownloadingAll && (
              <button
                onClick={handleClearCache}
                className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-slate-500 hover:text-red-600 hover:border-red-300 dark:hover:border-red-800 transition-colors shadow-xs cursor-pointer"
                title="حذف التسجيلات من ذاكرة الجهاز لتفريغ المساحة"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Progress Bar during bulk download */}
        {isDownloadingAll && (
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-purple-800 dark:text-purple-300">
              <span>{downloadProgress.trackTitle}</span>
              <span>{Math.round((downloadProgress.current / downloadProgress.total) * 100)}%</span>
            </div>
            <div className="w-full h-2 bg-purple-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 transition-all duration-300 rounded-full"
                style={{ width: `${(downloadProgress.current / downloadProgress.total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Active Track Title & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 rounded-2xl bg-purple-50/80 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-800/70 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
            {activeTrack.id}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-extrabold text-purple-950 dark:text-purple-100">
                {activeTrack.title}
              </h2>
              {cachedTrackIds.has(activeTrack.id) && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>يعمل من الذاكرة المحلية</span>
                </span>
              )}
            </div>
            <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">
              {activeTrack.subtitle} • المدة: {activeTrack.durationStr} • الحجم: {activeTrack.sizeMb}
            </p>
          </div>
        </div>

        {/* Quick Prev / Next Track buttons */}
        <div className="flex items-center gap-2" dir="ltr">
          <button
            onClick={() => selectTrack(currentTrackIndex - 1, true)}
            disabled={currentTrackIndex === 0}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              currentTrackIndex === 0
                ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                : 'bg-white dark:bg-slate-900 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-950/50 active:scale-95 cursor-pointer'
            }`}
            title="التسجيل السابق"
          >
            <SkipBack className="w-4 h-4" />
            <span className="hidden sm:inline">السابق</span>
          </button>

          <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 px-1">
            {currentTrackIndex + 1} / {husseinSabryRecordings.length}
          </span>

          <button
            onClick={() => selectTrack(currentTrackIndex + 1, true)}
            disabled={currentTrackIndex === husseinSabryRecordings.length - 1}
            className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              currentTrackIndex === husseinSabryRecordings.length - 1
                ? 'opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400'
                : 'bg-white dark:bg-slate-900 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-950/50 active:scale-95 cursor-pointer'
            }`}
            title="التسجيل التالي"
          >
            <span className="hidden sm:inline">التالي</span>
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Main Audio Player Console (Exact match to Screenshot 2026-11-24 232731.png) */}
      {/* ============================================================ */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md space-y-5">
        
        {/* Scrubber & Time Display */}
        <div className="space-y-2" dir="ltr">
          
          {/* Time Labels */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-700 dark:text-slate-300 font-inter">
            
            {/* Elapsed time on the LEFT */}
            <div className="flex items-center text-left">
              <span className="text-purple-700 dark:text-purple-300 font-bold font-mono text-sm sm:text-base">
                {formatTime(currentTime)}
              </span>
            </div>

            {/* Percentage in center */}
            <span className="text-xs font-bold font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
              {Math.round(progressPercent) || 0}%
            </span>

            {/* Total time on the RIGHT */}
            <div className="flex items-center text-right">
              <span className="text-slate-900 dark:text-white font-bold font-mono text-sm sm:text-base">
                {formatTime(duration)}
              </span>
            </div>

          </div>

          {/* LTR Progress Bar: Direct Pointer-Capture Scrubber */}
          <div
            ref={progressTrackRef}
            role="slider"
            aria-label="تقديم / تأخير التسجيل"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration || 100)}
            aria-valuenow={Math.round(currentTime)}
            tabIndex={0}
            dir="ltr"
            onPointerDown={(e) => {
              isDraggingProgressRef.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              updateProgressFromClientX(e.clientX);
            }}
            onPointerMove={(e) => {
              if (isDraggingProgressRef.current) {
                updateProgressFromClientX(e.clientX);
              }
            }}
            onPointerUp={(e) => {
              isDraggingProgressRef.current = false;
              if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                e.currentTarget.releasePointerCapture(e.pointerId);
              }
            }}
            onPointerCancel={() => {
              isDraggingProgressRef.current = false;
            }}
            className="relative w-full h-7 flex items-center cursor-pointer touch-none select-none"
            title="تقديم / تأخير التسجيل"
          >
            {/* Background Track */}
            <div className="w-full h-2.5 bg-purple-100 dark:bg-slate-800 rounded-full overflow-hidden pointer-events-none">
              {/* Vibrant Purple Filled Track */}
              <div 
                className="h-full bg-gradient-to-r from-purple-700 via-purple-600 to-violet-500 rounded-full"
                style={{ width: `${Math.max(0, Math.min(100, progressPercent))}%` }}
              />
            </div>

            {/* Thumb Indicator */}
            <div 
              className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-purple-700 border-2 border-white dark:border-slate-900 rounded-full shadow-md pointer-events-none -translate-x-1/2"
              style={{ left: `${Math.max(0, Math.min(100, progressPercent))}%` }}
            />
          </div>

        </div>

        {/* Playback Controls Row:
            - Volume on the LEFT
            - Main Controls in the EXACT CENTER (-5s, Play/Pause, +5s)
            - Speed on the RIGHT
        */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 pt-1" dir="ltr">
          
          {/* 1. Volume Controller Pill on the LEFT */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/95 dark:bg-slate-800 shadow-sm shrink-0">
            <button
              type="button"
              onClick={toggleMute}
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 transition-colors cursor-pointer"
              title={isMuted ? 'إلغاء الكتم' : 'كتم الصوت'}
            >
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <div
              ref={volumeTrackRef}
              role="slider"
              aria-label="مستوى الصوت"
              aria-valuemin={0}
              aria-valuemax={1}
              aria-valuenow={isMuted ? 0 : volume}
              tabIndex={0}
              onPointerDown={(e) => {
                isDraggingVolumeRef.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                updateVolumeFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (isDraggingVolumeRef.current) {
                  updateVolumeFromClientX(e.clientX);
                }
              }}
              onPointerUp={(e) => {
                isDraggingVolumeRef.current = false;
                if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
              onPointerCancel={() => {
                isDraggingVolumeRef.current = false;
              }}
              className="relative w-20 sm:w-24 h-7 flex items-center cursor-pointer touch-none select-none"
              title="اسحب لتعديل مستوى الصوت"
            >
              <div className="w-full h-2 bg-purple-100 dark:bg-slate-700 rounded-full overflow-hidden pointer-events-none">
                <div 
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${Math.max(0, Math.min(100, volumePercent))}%` }}
                />
              </div>
              <div 
                className="absolute w-3.5 h-3.5 bg-purple-600 border-2 border-white dark:border-slate-900 rounded-full shadow-md pointer-events-none -translate-x-1/2"
                style={{ left: `${Math.max(0, Math.min(100, volumePercent))}%` }}
              />
            </div>
          </div>

          {/* 2. Main Playback Controls in the EXACT CENTER: -5s, Play/Pause, +5s */}
          <div className="flex items-center justify-center gap-3 flex-1">
            
            {/* Skip -5s */}
            <button
              onClick={() => skipTime(-5)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs sm:text-sm font-black transition-all active:scale-95 cursor-pointer"
              title="تأخير 5 ثواني"
            >
              <RotateCcw className="w-4 h-4" />
              <span>5s-</span>
            </button>

            {/* Big Play / Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-purple-700 to-violet-500 hover:from-purple-600 hover:to-violet-400 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 active:scale-95 transition-all cursor-pointer"
              title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل التسجيل'}
            >
              {isPlaying ? <Pause className="w-6 h-6 sm:w-7 sm:h-7" /> : <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 fill-current" />}
            </button>

            {/* Skip +5s */}
            <button
              onClick={() => skipTime(5)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs sm:text-sm font-black transition-all active:scale-95 cursor-pointer"
              title="تقديم 5 ثواني"
            >
              <span>+5s</span>
              <RotateCw className="w-4 h-4" />
            </button>

          </div>

          {/* 3. Speed Controller Pill on the RIGHT */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/95 dark:bg-slate-800 shadow-sm shrink-0">
            {/* Clickable Speed Badge to cycle presets */}
            <button
              type="button"
              onClick={cycleSpeed}
              className="px-2 py-0.5 rounded-lg bg-purple-100 dark:bg-purple-950/70 hover:bg-purple-200 dark:hover:bg-purple-900 text-purple-800 dark:text-purple-300 font-mono font-bold text-xs min-w-[46px] text-center transition-colors cursor-pointer"
              title="اضغط لتبديل السرعة"
            >
              {playbackRate.toFixed(playbackRate % 1 === 0 ? 1 : 2)}x
            </button>
            
            {/* Direct Pointer-Capture Speed Slider */}
            <div
              ref={speedTrackRef}
              role="slider"
              aria-label="تعديل سرعة التسجيل"
              aria-valuemin={0.5}
              aria-valuemax={3.0}
              aria-valuenow={playbackRate}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  changeSpeed(playbackRate + 0.25, true);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  changeSpeed(playbackRate - 0.25, true);
                }
              }}
              onPointerDown={(e) => {
                isDraggingSpeedRef.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                updateSpeedFromClientX(e.clientX);
              }}
              onPointerMove={(e) => {
                if (isDraggingSpeedRef.current) {
                  updateSpeedFromClientX(e.clientX);
                }
              }}
              onPointerUp={(e) => {
                isDraggingSpeedRef.current = false;
                if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                  e.currentTarget.releasePointerCapture(e.pointerId);
                }
              }}
              onPointerCancel={() => {
                isDraggingSpeedRef.current = false;
              }}
              className="relative w-24 sm:w-28 h-7 flex items-center cursor-pointer touch-none select-none"
              title="اسحب لتعديل السرعة"
            >
              <div className="w-full h-2 bg-purple-100 dark:bg-slate-700 rounded-full overflow-hidden pointer-events-none">
                <div 
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${Math.max(0, Math.min(100, speedPercent))}%` }}
                />
              </div>
              <div 
                className="absolute w-4 h-4 bg-purple-600 border-2 border-white dark:border-slate-900 rounded-full shadow-md pointer-events-none -translate-x-1/2"
                style={{ left: `${Math.max(0, Math.min(100, speedPercent))}%` }}
              />
            </div>
          </div>

        </div>

        {/* Speed Controls: Direct Presets + Pitch Mode Switch */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-purple-100 dark:border-purple-800/40">
          
          {/* Quick Speed Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">سرعات مباشرة:</span>
            {[0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3].map((preset) => {
              const isActive = Math.abs(playbackRate - preset) < 0.05;
              return (
                <button
                  key={preset}
                  onClick={() => changeSpeed(preset, true)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all active:scale-95 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md ring-2 ring-purple-400/50 scale-105'
                      : 'bg-purple-50 dark:bg-slate-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200 dark:border-purple-800'
                  }`}
                >
                  {preset}x
                </button>
              );
            })}
          </div>

          {/* Mode Switch & Applied Speed Badge */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Pitch Mode Toggle Button */}
            <button
              onClick={togglePreservesPitch}
              className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 border cursor-pointer active:scale-95 ${
                preservesPitch
                  ? 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-700'
                  : 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700 shadow-xs'
              }`}
              title="اضغط للتبديل بين التسريع المباشر السريع أو الحفاظ على نبرة الصوت الطبيعية"
            >
              {preservesPitch ? (
                <>
                  <Mic2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>نبرة طبيعية (معالجة)</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>تسريع فوري ومباشر ⚡</span>
                </>
              )}
            </button>

            {/* Current Speed Badge */}
            <div className="flex items-center gap-1 text-xs font-bold text-purple-800 dark:text-purple-200 bg-purple-100/90 dark:bg-purple-950/90 px-3 py-1 rounded-xl border border-purple-300 dark:border-purple-800">
              <Gauge className="w-3.5 h-3.5 text-purple-600" />
              <span>السرعة: </span>
              <span className="font-mono font-black text-purple-900 dark:text-purple-100">{playbackRate.toFixed(playbackRate % 1 === 0 ? 1 : 2)}x</span>
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* Recordings Playlist (11 Tracks) */}
      {/* ============================================================ */}
      <div className="rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-purple-200/60 dark:border-purple-800/40">
          <div className="flex items-center gap-2">
            <Headphones className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              قائمة التسجيلات الصوتية (11 تسجيل)
            </h3>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            اضغط على أي تسجيل لتشغيله مباشرة
          </span>
        </div>

        {/* Tracks Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {husseinSabryRecordings.map((track, idx) => {
            const isCurrent = idx === currentTrackIndex;
            const isCached = cachedTrackIds.has(track.id);
            const isDownloadingThis = downloadingTrackId === track.id;

            return (
              <div
                key={track.id}
                onClick={() => selectTrack(idx, true)}
                className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer select-none active:scale-[0.99] ${
                  isCurrent
                    ? 'bg-purple-100/80 dark:bg-purple-950/70 border-purple-500 dark:border-purple-600 shadow-md ring-2 ring-purple-400/40'
                    : 'bg-purple-50/40 dark:bg-slate-800/40 border-purple-100 dark:border-purple-900/30 hover:bg-purple-50 dark:hover:bg-slate-800/80 hover:border-purple-300'
                }`}
              >
                {/* Left: Track Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all shadow-xs shrink-0 ${
                    isCurrent
                      ? 'bg-purple-600 text-white'
                      : 'bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300'
                  }`}>
                    {isCurrent && isPlaying ? (
                      <span className="flex items-end justify-center gap-0.5 h-4 w-4">
                        <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-3"></span>
                        <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s] h-4"></span>
                        <span className="w-1 bg-white rounded-full animate-bounce h-2"></span>
                      </span>
                    ) : (
                      track.id
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className={`text-sm sm:text-base font-extrabold truncate ${
                        isCurrent 
                          ? 'text-purple-950 dark:text-purple-100 font-black' 
                          : 'text-slate-800 dark:text-slate-200'
                      }`}>
                        {track.title}
                      </h4>
                      {isCached && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="محفوظ في جهازك للاستماع أوفلاين" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-purple-500" />
                        {track.durationStr}
                      </span>
                      <span>•</span>
                      <span>{track.sizeMb}</span>
                      {isCached && (
                        <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-800">
                          أوفلاين ✓
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Play / Download Action Buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Individual Download Button */}
                  {!isCached && (
                    <button
                      onClick={(e) => handleDownloadSingleTrack(e, track)}
                      disabled={isDownloadingThis}
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950/70 transition-all shadow-xs active:scale-95 cursor-pointer"
                      title="تحميل وحفظ التسجيل في المتصفح للاستماع بدون نت"
                    >
                      {isDownloadingThis ? (
                        <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {/* Play / Pause button */}
                  {isCurrent ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause();
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-extrabold shadow-sm hover:bg-purple-700 transition-all active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{isPlaying ? 'إيقاف' : 'تشغيل'}</span>
                    </button>
                  ) : (
                    <button
                      className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/60 transition-all shadow-xs cursor-pointer"
                      title="تشغيل"
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
