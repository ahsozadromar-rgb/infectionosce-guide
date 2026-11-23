import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft,
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Download, 
  FileText, 
  Search, 
  MessageSquare,
  Lightbulb,
  CheckCircle2,
  Columns,
  Maximize2,
  Clock,
  Layers,
  HelpCircle,
  Stethoscope,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { lectureTranscriptData } from '../data/lectureTranscriptData';
import { playClickSound } from '../utils/soundEffects';

export default function AudioLecturePage({ onBackToHome }) {
  const audioRef = useRef(null);
  const progressTrackRef = useRef(null);
  const speedTrackRef = useRef(null);
  const volumeTrackRef = useRef(null);
  const isDraggingProgressRef = useRef(false);
  const isDraggingSpeedRef = useRef(false);
  const isDraggingVolumeRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(lectureTranscriptData.metadata?.durationSeconds || 4823);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playbackRateRef = useRef(1);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('both'); // 'both', 'transcript', 'analysis'

  const applyPlaybackRateToAudio = (audio, rate) => {
    if (!audio) return;
    try {
      audio.playbackRate = rate;
      if (audio.paused) {
        audio.defaultPlaybackRate = rate;
      }
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

  // Sync audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if ('preservesPitch' in audio) audio.preservesPitch = true;
    if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
    if ('mozPreservesPitch' in audio) audio.mozPreservesPitch = true;

    const enforceRate = () => {
      const target = playbackRateRef.current;
      if (Math.abs(audio.playbackRate - target) > 0.001) {
        audio.playbackRate = target;
      }
    };

    const onTimeUpdate = () => {
      if (!isDraggingProgressRef.current) {
        setCurrentTime(audio.currentTime);
      }
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      if ('preservesPitch' in audio) audio.preservesPitch = true;
      if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
      enforceRate();
    };

    const onPlay = () => {
      setIsPlaying(true);
      enforceRate();
    };

    const onPause = () => {
      setIsPlaying(false);
    };

    const onEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('canplay', enforceRate);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('playing', enforceRate);
    audio.addEventListener('seeked', enforceRate);
    audio.addEventListener('ratechange', enforceRate);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('canplay', enforceRate);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('playing', enforceRate);
      audio.removeEventListener('seeked', enforceRate);
      audio.removeEventListener('ratechange', enforceRate);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  // Keyboard shortcut: Space to toggle play/pause
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
    const clamped = Math.round(Math.max(0.5, Math.min(2.5, rate)) * 100) / 100;
    playbackRateRef.current = clamped;
    setPlaybackRate(clamped);
    applyPlaybackRateToAudio(audioRef.current, clamped);
  };

  const cycleSpeed = () => {
    playClickSound();
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
    const snapped = Math.round(raw * 4) / 4; // 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5
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

  const jumpToTime = (seconds) => {
    playClickSound();
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seconds;
      applyPlaybackRateToAudio(audio, playbackRateRef.current);
      if (audio.paused) {
        audio.play().then(() => {
          applyPlaybackRateToAudio(audio, playbackRateRef.current);
          setIsPlaying(true);
        }).catch(e => console.log(e));
      }
    }
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
    if (isNaN(seconds)) return '00:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Sections data from lecture
  const chapters = lectureTranscriptData.chapters || [];

  // Filter items based on search query
  const filteredChapters = chapters.filter(ch => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleAr = (ch.titleAr || '').toLowerCase();
    const spoken = (ch.spokenTranscript || '').toLowerCase();
    const analysis = (ch.doctorAnalysis || '').toLowerCase();
    const notes = (ch.highYieldNotes || []).join(' ').toLowerCase();
    return titleAr.includes(q) || spoken.includes(q) || analysis.includes(q) || notes.includes(q);
  });

  // Calculate audio progress percentage
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  // Speed slider percentage (from 0.5 to 2.5)
  const speedPercent = ((playbackRate - 0.5) / (2.5 - 0.5)) * 100;

  return (
    <div className="min-h-screen pb-16 space-y-6">
      
      {/* Hidden Native Audio Element */}
      <audio
        ref={audioRef}
        src={lectureTranscriptData.metadata?.audioUrl || '/audio/infection_revision_lecture.mp3'}
        preload="auto"
      />

      {/* Top Navigation Bar: Title on the RIGHT, Back button on the LEFT, No doctor name, No duration subtitle */}
      <div className="flex items-center justify-between pb-4 border-b border-purple-200/80 dark:border-purple-800/60">
        
        {/* Title on the RIGHT */}
        <div className="text-right">
          <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white font-cairo">
            تسجيل محاضرة مراجعة الانفكشن
          </h1>
        </div>

        {/* Back Button on the LEFT */}
        <button
          onClick={() => {
            playClickSound();
            if (onBackToHome) onBackToHome();
          }}
          className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-extrabold text-sm sm:text-base hover:bg-purple-50 dark:hover:bg-purple-950/60 shadow-sm transition-all active:scale-95"
        >
          <span>العودة للرئيسية</span>
          <ArrowLeft className="w-5 h-5" />
        </button>

      </div>

      {/* Main Audio Player Console */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md space-y-5">
        
        {/* Scrubber & Time Display */}
        <div className="space-y-2">
          
          {/* Time Labels: الوقت اللي خلص على اليسار والوقت الكلي على اليمين وبدون نصوص */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-extrabold text-slate-700 dark:text-slate-300 font-inter">
            
            {/* الوقت الكلي على اليمين */}
            <div className="flex items-center text-right">
              <span className="text-slate-900 dark:text-white font-bold font-mono text-sm sm:text-base">
                {formatTime(duration)}
              </span>
            </div>

            {/* النسبة المئوية في المنتصف */}
            <span className="text-xs font-bold font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
              {Math.round(progressPercent) || 0}%
            </span>

            {/* الوقت اللي خلص على اليسار */}
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
              {/* Vibrant Purple Filled Track (الجزء اللي خلص) */}
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
            
            {/* Direct Pointer-Capture Speed Slider (works seamlessly with mouse & touch) */}
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
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs sm:text-sm font-black transition-all active:scale-95"
              title="تأخير 5 ثواني"
            >
              <RotateCcw className="w-4 h-4" />
              <span>5s-</span>
            </button>

            {/* Big Play / Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-purple-700 to-violet-500 hover:from-purple-600 hover:to-violet-400 text-white flex items-center justify-center shadow-lg shadow-purple-600/40 active:scale-95 transition-all"
              title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل التسجيل'}
            >
              {isPlaying ? <Pause className="w-6 h-6 sm:w-7 sm:h-7" /> : <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5 fill-current" />}
            </button>

            {/* Skip +5s */}
            <button
              onClick={() => skipTime(5)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs sm:text-sm font-black transition-all active:scale-95"
              title="تقديم 5 ثواني"
            >
              <span>+5s</span>
              <RotateCw className="w-4 h-4" />
            </button>

          </div>

          {/* 3. Volume Controller Pill on the LEFT (styled matching speed slider) */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border-2 border-purple-300 dark:border-purple-700 bg-white/95 dark:bg-slate-800 shadow-sm shrink-0" dir="ltr">
            <button
              type="button"
              onClick={toggleMute}
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100 transition-colors p-0.5"
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

      {/* البطاقة الكبيرة: تفريغ وتحليل المحاضرة الشامل
          تستبدل الـ 94 شريحة ببطاقة واحدة كبيرة تضم قسمين رئيسيين:
          1. قسم نص كلام الدكتور (المستخرج حرفياً بدون أي إضافة أو حذف أو تغيير)
          2. قسم تحليل كلام الدكتور (أهم المواضيع ونقاط التركيز والأسئلة المتوقعة في الأوسكي)
      */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-purple-300 dark:border-purple-800 shadow-xl space-y-6 backdrop-blur-md">
        
        {/* Card Header & Display Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-5 border-b border-purple-200/80 dark:border-purple-800/60">
          
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-3 h-7 rounded-full bg-purple-600 inline-block"></span>
              <span>تفريغ وتحليل محاضرة مراجعة الانفكشن السريرية</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              بطاقة شاملة تضم تفريغ نص كلام الدكتور حرفياً، مع قسم التحليل السريري وأهم الأسئلة المتوقعة في لجان الأوسكي.
            </p>
          </div>

          {/* Quick View Filter & Search Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* View Mode Switcher */}
            <div className="flex items-center p-1 rounded-2xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-xs font-bold">
              <button
                onClick={() => { playClickSound(); setViewMode('both'); }}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  viewMode === 'both'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                }`}
                title="عرض القسمين معاً جنباً إلى جنب"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>القسمين معاً</span>
              </button>

              <button
                onClick={() => { playClickSound(); setViewMode('transcript'); }}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  viewMode === 'transcript'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                }`}
                title="عرض نص كلام الدكتور فقط"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>نص كلام الدكتور</span>
              </button>

              <button
                onClick={() => { playClickSound(); setViewMode('analysis'); }}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  viewMode === 'analysis'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-900/40'
                }`}
                title="عرض تحليل كلام الدكتور والأسئلة المتوقعة"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>تحليل كلام الدكتور</span>
              </button>
            </div>

            {/* Live Search */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في نص أو تحليل المحاضرة..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* The Two Main Sections Inside the Big Card */}
        <div className={`grid gap-6 ${viewMode === 'both' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
          
          {/* ========================================================= */}
          {/* القسم الأول: نص كلام الدكتور (المستخرج حرفياً بدون أي إضافة أو تعديل أو حذف) */}
          {/* ========================================================= */}
          {(viewMode === 'both' || viewMode === 'transcript') && (
            <div className="space-y-4 rounded-3xl p-5 sm:p-6 bg-purple-50/40 dark:bg-slate-800/40 border-2 border-purple-200/80 dark:border-purple-900/60 shadow-sm">
              
              {/* Section Header */}
              <div className="flex items-center justify-between pb-3 border-b border-purple-200/60 dark:border-purple-800/50">
                <div className="flex items-center gap-2 text-purple-900 dark:text-purple-200">
                  <div className="p-2 rounded-xl bg-purple-600 text-white shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-cairo">
                      قسم نص كلام الدكتور (المستخرج حرفياً)
                    </h3>
                    <p className="text-[11px] text-purple-700 dark:text-purple-400 font-bold">
                      الكلام المستخرج كما نطق به الدكتور تماماً دون أي زيادة أو تعديل أو نقصان
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  تفريغ حرفي 100%
                </span>
              </div>

              {/* Spoken Chapters Flow */}
              <div className="space-y-5 max-h-[1100px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredChapters.map((ch, idx) => (
                  <div 
                    key={ch.id || idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-purple-200/70 dark:border-purple-800/60 space-y-3 hover:border-purple-400 dark:hover:border-purple-700 transition-all shadow-xs"
                  >
                    {/* Chapter Title & Audio Jump Button */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-purple-100 dark:border-purple-900/40">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => jumpToTime(ch.timeSeconds)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-inter shadow-xs active:scale-95 transition-all"
                          title="تشغيل الصوت من هذه النقطة"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{ch.timestamp}</span>
                        </button>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white font-cairo">
                          {ch.titleAr}
                        </h4>
                      </div>
                      
                      <span className="text-[10px] font-bold text-gray-500 font-inter">
                        {ch.slides}
                      </span>
                    </div>

                    {/* Verbatim Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-cairo select-text whitespace-pre-line text-justify">
                      {ch.spokenTranscript}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ========================================================= */}
          {/* القسم الثاني: تحليل كلام الدكتور وأهم النقاط والأسئلة المتوقعة في الأوسكي */}
          {/* ========================================================= */}
          {(viewMode === 'both' || viewMode === 'analysis') && (
            <div className="space-y-4 rounded-3xl p-5 sm:p-6 bg-amber-50/30 dark:bg-slate-800/40 border-2 border-amber-200/80 dark:border-amber-900/60 shadow-sm">
              
              {/* Section Header */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-200/60 dark:border-amber-800/50">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200">
                  <div className="p-2 rounded-xl bg-amber-500 text-white shadow-sm">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-cairo">
                      قسم تحليل كلام الدكتور والأسئلة المتوقعة
                    </h3>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 font-bold">
                      تحليل شامل لأولويات المذاكرة، مفاتيح التشخيص السريعة، وأهم سيناريوهات الأوسكي
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  أهم أسئلة الأوسكي
                </span>
              </div>

              {/* Analysis & Expected Questions Content Flow */}
              <div className="space-y-5 max-h-[1100px] overflow-y-auto pr-2 custom-scrollbar">
                
                {/* 1. أسئلة ولجان الأوسكي المتوقعة والسيناريوهات الأكيدة */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-800/60 space-y-3">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-black text-xs sm:text-sm border-b border-amber-100 dark:border-amber-900/40 pb-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>أهم سيناريوهات ولجان الأوسكي المتوقعة من كلام الدكتور:</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    
                    {/* السؤال 1 */}
                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-1">
                      <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                        1. لجنة فك شفرة تحاليل فيروس B (Hepatitis B Serology):
                      </strong>
                      <p className="leading-relaxed">
                        • تحليل <strong>HBsAg (+):</strong> معناه المريض عنده إصابة حالية بالفيروس.<br/>
                        • تحليل <strong>Anti-HBc IgM:</strong> يدل على إصابة حادة (Acute Infection) أو فترة النافذة (Window Period).<br/>
                        • تحليل <strong>Anti-HBc IgG:</strong> يدل على إصابة قديمة أو مزمنة (Chronic / Past exposure).<br/>
                        • تحليل <strong>Anti-HBs (+):</strong> يدل على التعافي والمناعة (Immunity). لو وجد بمفرده فهو تطعيم، ولو مع IgG فهو تعافي طبيعي بعد عدوى قديمة.<br/>
                        • <strong>سؤال النافذة (Window Period):</strong> الـ HBsAg اختفى والـ Anti-HBs لسه مظهرش، الماركر الوحيد الإيجابي هو <strong>Anti-HBc IgM</strong>.
                      </p>
                    </div>

                    {/* السؤال 2 */}
                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-1">
                      <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                        2. لجنة تفسير نتائج بذل النخاع الشوكي (CSF Analysis in Meningitis):
                      </strong>
                      <p className="leading-relaxed">
                        • <strong>Bacterial Meningitis:</strong> عكر (Turbid/Purulent)، خلايا بيضاء بالآلاف معظمها Polymorphs (Neutrophils)، جلوكوز منخفض جداً (&lt;40 mg/dl أو &lt;40% من سكر الدم)، بروتين عالي جداً (&gt;100).<br/>
                        • <strong>Viral Meningitis / Encephalitis:</strong> رائق (Clear)، خلايا بالمئات معظمها Lymphocytes، جلوكوز طبيعي، بروتين طبيعي أو ارتفاع طفيف.<br/>
                        • <strong>TB Meningitis:</strong> مثل الكوبويب (Cobweb coagulum)، خلايا ليمفاوية، جلوكوز منخفض جداً، بروتين مرتفع للغاية.<br/>
                        • <strong>العلاج الفوري التجريبي:</strong> Ceftriaxone + Vancomycin فوراً دون انتظار نتيجة المزرعة، وإضافة Dexamethasone قبل أو مع أول جرعة مضاد.
                      </p>
                    </div>

                    {/* السؤال 3 */}
                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-1">
                      <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                        3. لجنة الحمى والطفح الجلدي (Fever with Rash):
                      </strong>
                      <p className="leading-relaxed">
                        • <strong>طفح الفرفرية النزفية (Petechial / Purpuric Rash):</strong> طوارئ قصوى في Meningococcal Meningitis (Neisseria meningitidis). علامة زجاجية إيجابية (Non-blanching under glass pressure).<br/>
                        • <strong>بقع الورد (Rose Spots):</strong> بقع وردية خفيفة على البطن تختفي بالضغط، تظهر في الأسبوع الثاني من حمى التيفود (Typhoid fever).
                      </p>
                    </div>

                    {/* السؤال 4 */}
                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-1">
                      <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                        4. بروتوكول عضة الحيوان والسعار (Rabies Post-Exposure Prophylaxis):
                      </strong>
                      <p className="leading-relaxed">
                        • <strong>Category I (لمس أو لعق لجلد سليم):</strong> لا علاج، فقط غسيل بالماء والصابون.<br/>
                        • <strong>Category II (خدش بسيط بدون نزيف):</strong> لقاح السعار فوراً في الأيام (0, 3, 7, 14, 28).<br/>
                        • <strong>Category III (عضة نافذة مع نزيف أو لعق لأغشية مخاطية):</strong> لقاح السعار + المصل المناعي (Rabies Immunoglobulin RIG) يُحقن نصفه حول الجرح والباقي عضلياً. <strong>ممنوع خياطة الجرح فوراً</strong>!
                      </p>
                    </div>

                    {/* السؤال 5 */}
                    <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 space-y-1">
                      <strong className="text-amber-900 dark:text-amber-200 font-bold block">
                        5. مقاييس الخطورة الحتمية (Clinical Scores):
                      </strong>
                      <p className="leading-relaxed">
                        • <strong>CURB-65 لشدة الالتهاب الرئوي:</strong> Confusion (1), Urea &gt; 7 (1), Resp &ge; 30 (1), BP &lt; 90/60 (1), Age &ge; 65 (1). درجة 0-1 علاج منزلي، 2 حجز بالمستشفى، 3 فأكثر عناية مركزة (ICU).<br/>
                        • <strong>مقياس غلاسكو GCS:</strong> من 3 إلى 15. القاعدة الذهبية: لو GCS &le; 8 يجب تركيب أنبوبة حنجرية فوراً (Intubation) لحماية مجرى التنفس.
                      </p>
                    </div>

                  </div>
                </div>

                {/* 2. التحليل السريري التفصيلي لكل جزء من المحاضرة */}
                {filteredChapters.map((ch, idx) => (
                  <div 
                    key={ch.id || idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-amber-200/70 dark:border-amber-800/60 space-y-3 hover:border-amber-400 dark:hover:border-amber-700 transition-all shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-amber-100 dark:border-amber-900/40">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => jumpToTime(ch.timeSeconds)}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold font-inter shadow-xs active:scale-95 transition-all"
                          title="تشغيل الصوت من هذه النقطة"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>{ch.timestamp}</span>
                        </button>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white font-cairo">
                          تحليل: {ch.titleAr}
                        </h4>
                      </div>
                      
                      <span className="text-[10px] font-bold text-gray-500 font-inter">
                        {ch.slides}
                      </span>
                    </div>

                    {/* Doctor Clinical Analysis Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-cairo select-text whitespace-pre-line text-justify">
                      {ch.doctorAnalysis}
                    </p>

                    {/* High Yield Key Takeaways */}
                    {ch.highYieldNotes && ch.highYieldNotes.length > 0 && (
                      <div className="pt-2 border-t border-amber-100 dark:border-amber-900/30 space-y-1.5">
                        <span className="text-[11px] font-black text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>تجميعات ومعادلات الأوسكي في هذا الجزء:</span>
                        </span>
                        <ul className="space-y-1 pr-1">
                          {ch.highYieldNotes.map((note, nIdx) => (
                            <li key={nIdx} className="flex items-start gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                              <span className="leading-relaxed">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
