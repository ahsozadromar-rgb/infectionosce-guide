import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import { husseinSabryRecordings } from '../data/husseinSabryData';
import { playClickSound } from '../utils/soundEffects';

export default function HusseinSabryRecordingsPage({ onBackToHome, initialTrackId = 1 }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
    const idx = husseinSabryRecordings.findIndex(r => r.id === initialTrackId);
    return idx >= 0 ? idx : 0;
  });

  const activeTrack = husseinSabryRecordings[currentTrackIndex] || husseinSabryRecordings[0];

  const audioRef = useRef(null);
  const progressTrackRef = useRef(null);
  const speedTrackRef = useRef(null);
  const volumeTrackRef = useRef(null);
  const isDraggingProgressRef = useRef(false);
  const isDraggingSpeedRef = useRef(false);
  const isDraggingVolumeRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(activeTrack.durationSeconds || 240);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playbackRateRef = useRef(1);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const applyPlaybackRateToAudio = (audio, rate) => {
    if (!audio) return;
    try {
      audio.playbackRate = rate;
      audio.defaultPlaybackRate = rate;
    } catch (e) {
      console.log('PlaybackRate error:', e);
    }
  };

  // Keep ref and audio element strictly synced with playbackRate
  useEffect(() => {
    playbackRateRef.current = playbackRate;
    applyPlaybackRateToAudio(audioRef.current, playbackRate);
  }, [playbackRate]);

  // Keep audio element strictly synced with volume & mute
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Switch to a specific track
  const selectTrack = (index, autoPlay = true) => {
    playClickSound();
    if (index < 0 || index >= husseinSabryRecordings.length) return;
    setCurrentTrackIndex(index);
    const targetTrack = husseinSabryRecordings[index];
    setCurrentTime(0);
    setDuration(targetTrack.durationSeconds || 240);

    const audio = audioRef.current;
    if (audio) {
      audio.src = targetTrack.audioUrl;
      audio.load();
      applyPlaybackRateToAudio(audio, playbackRateRef.current);
      if (autoPlay) {
        audio.play().then(() => {
          applyPlaybackRateToAudio(audio, playbackRateRef.current);
          setIsPlaying(true);
        }).catch(err => {
          console.log('Autoplay error:', err);
          setIsPlaying(false);
        });
      } else {
        setIsPlaying(false);
      }
    }
  };

  // Sync audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const enforceRate = () => {
      applyPlaybackRateToAudio(audio, playbackRateRef.current);
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
      enforceRate();
    };

    const onPlay = () => {
      setIsPlaying(true);
      enforceRate();
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => {
      setIsPlaying(false);
      // Auto-advance to next track if available
      if (currentTrackIndex < husseinSabryRecordings.length - 1) {
        selectTrack(currentTrackIndex + 1, true);
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('canplay', enforceRate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('playing', enforceRate);
    audio.addEventListener('seeked', enforceRate);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('canplay', enforceRate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('playing', enforceRate);
      audio.removeEventListener('seeked', enforceRate);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, [currentTrackIndex]);

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
      applyPlaybackRateToAudio(audio, playbackRateRef.current);
      audio.play().then(() => {
        applyPlaybackRateToAudio(audio, playbackRateRef.current);
        setIsPlaying(true);
      }).catch(e => console.log('Playback error:', e));
    }
  };

  const skipTime = (seconds) => {
    playClickSound();
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), duration);
    applyPlaybackRateToAudio(audio, playbackRateRef.current);
  };

  const changeSpeed = (rate) => {
    playClickSound();
    const clamped = Math.round(Math.max(0.5, Math.min(2.5, rate)) * 100) / 100;
    playbackRateRef.current = clamped;
    setPlaybackRate(clamped);
    applyPlaybackRateToAudio(audioRef.current, clamped);
  };

  const cycleSpeed = () => {
    const presets = [0.75, 1, 1.25, 1.5, 1.75, 2, 2.5];
    const currentIdx = presets.findIndex((p) => Math.abs(p - playbackRateRef.current) < 0.05);
    const nextRate = presets[(currentIdx + 1) % presets.length];
    changeSpeed(nextRate);
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
      applyPlaybackRateToAudio(audioRef.current, playbackRateRef.current);
    }
  };

  const updateSpeedFromClientX = (clientX) => {
    const track = speedTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const raw = 0.5 + ratio * (2.5 - 0.5);
    const snapped = Math.round(raw * 4) / 4;
    changeSpeed(snapped);
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
  const speedPercent = ((playbackRate - 0.5) / (2.5 - 0.5)) * 100;

  return (
    <div className="min-h-screen pb-16 space-y-6">
      
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={activeTrack.audioUrl}
        preload="auto"
      />

      {/* Top Navigation Bar: Title on the RIGHT, Back button on the LEFT */}
      <div className="flex items-center justify-between pb-4 border-b border-purple-200/80 dark:border-purple-800/60">
        
        {/* Title on the RIGHT */}
        <div className="text-right">
          <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-cairo">
            تسجيلات د. حسين صبري
          </h1>
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

      {/* Main Audio Player Console (Exact match to AudioLecturePage.jsx) */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md space-y-5">
        
        {/* Scrubber & Time Display */}
        <div className="space-y-2">
          
          {/* Time Labels */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-700 dark:text-slate-300 font-inter">
            
            {/* Total time on the RIGHT */}
            <div className="flex items-center text-right">
              <span className="text-slate-900 dark:text-white font-bold font-mono text-sm sm:text-base">
                {formatTime(duration)}
              </span>
            </div>

            {/* Percentage in center */}
            <span className="text-xs font-bold font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
              {Math.round(progressPercent) || 0}%
            </span>

            {/* Elapsed time on the LEFT */}
            <div className="flex items-center text-left">
              <span className="text-purple-700 dark:text-purple-300 font-bold font-mono text-sm sm:text-base">
                {formatTime(currentTime)}
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
            - Speed on the RIGHT
            - Main Controls in the EXACT CENTER (-5s, Play/Pause, +5s)
            - Volume Pill on the LEFT with matching slider
        */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-4 pt-1">
          
          {/* 1. Speed Controller Pill on the RIGHT */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/95 dark:bg-slate-800 shadow-sm shrink-0" dir="ltr">
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
              aria-valuemax={2.5}
              aria-valuenow={playbackRate}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  changeSpeed(playbackRate + 0.25);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  changeSpeed(playbackRate - 0.25);
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
              title="اسحب أو اضغط لتعديل سرعة التسجيل"
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

          {/* 2. Main Playback Controls in the EXACT CENTER: -5s, Play/Pause, +5s */}
          <div className="flex items-center justify-center gap-3 flex-1" dir="ltr">
            
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

          {/* 3. Volume Controller Pill on the LEFT */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/95 dark:bg-slate-800 shadow-sm shrink-0" dir="ltr">
            <button
              type="button"
              onClick={toggleMute}
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors p-0.5 cursor-pointer"
              title={isMuted || volume === 0 ? 'إلغاء الكتم' : 'كتم الصوت'}
            >
              {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            {/* Direct Pointer-Capture Volume Slider */}
            <div
              ref={volumeTrackRef}
              role="slider"
              aria-label="تعديل مستوى الصوت"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round((isMuted ? 0 : volume) * 100)}
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
              className="relative w-24 sm:w-28 h-7 flex items-center cursor-pointer touch-none select-none"
              title="اسحب أو اضغط لتعديل مستوى الصوت"
            >
              <div className="w-full h-2 bg-purple-100 dark:bg-slate-700 rounded-full overflow-hidden pointer-events-none">
                <div 
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                />
              </div>
              <div 
                className="absolute w-4 h-4 bg-purple-600 border-2 border-white dark:border-slate-900 rounded-full shadow-md pointer-events-none -translate-x-1/2"
                style={{ left: `${(isMuted ? 0 : volume) * 100}%` }}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Recordings Card: Only the 11 tracks, exactly as requested */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-purple-300 dark:border-purple-800 shadow-xl space-y-6 backdrop-blur-md">
        
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-purple-200/80 dark:border-purple-800/60">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-7 rounded-full bg-purple-600 inline-block"></span>
              <span>تسجيلات د. حسين صبري (11 تسجيل)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              اختر أي تسجيل من القائمة أدناه ليتم تشغيله بالمشغل أعلاه مباشرة
            </p>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700">
            التسجيل النشط الآن: {activeTrack.title}
          </span>
        </div>

        {/* The 11 Recordings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {husseinSabryRecordings.map((track, idx) => {
            const isCurrent = idx === currentTrackIndex;
            return (
              <div
                key={track.id}
                onClick={() => selectTrack(idx, true)}
                className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer select-none active:scale-[0.99] ${
                  isCurrent
                    ? 'bg-purple-100/90 dark:bg-purple-950/80 border-purple-600 dark:border-purple-500 shadow-md ring-2 ring-purple-400/40'
                    : 'bg-purple-50/30 dark:bg-slate-800/40 border-purple-100 dark:border-purple-900/30 hover:bg-purple-50 dark:hover:bg-slate-800/80 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                {/* Track Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-base transition-all shadow-xs shrink-0 ${
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
                    <h3 className={`text-sm sm:text-base font-extrabold truncate ${
                      isCurrent 
                        ? 'text-purple-950 dark:text-purple-100 font-black' 
                        : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {track.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1 font-mono font-bold text-purple-600 dark:text-purple-400">
                        <Clock className="w-3.5 h-3.5" />
                        {track.durationStr}
                      </span>
                      <span>•</span>
                      <span>{track.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Play / Status Button */}
                <div className="shrink-0 mr-2">
                  {isCurrent ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause();
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-black shadow-sm hover:bg-purple-700 transition-all active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      <span>{isPlaying ? 'إيقاف' : 'تشغيل'}</span>
                    </button>
                  ) : (
                    <button
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 hover:bg-purple-100/70 dark:hover:bg-purple-950/60 transition-all shadow-xs cursor-pointer"
                      title="تشغيل هذا التسجيل"
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
