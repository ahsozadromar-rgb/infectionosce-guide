import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  RotateCcw, 
  Play, 
  Pause, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Check, 
  Undo2, 
  LayoutGrid, 
  ClipboardList,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { casesData as initialCasesData } from '../data/casesData';
import { 
  playClickSound, 
  playSuccessSound, 
  playCelebrationSound,
  playTimerTickSound,
  playTimerEndSound
} from '../utils/soundEffects';

export default function CaseSolverPage({ caseId, onBackToSelfTest, onOpenCase }) {
  // All cases (base + custom created)
  const [allCases] = useState(() => {
    const savedCustom = localStorage.getItem('infection_osce_ai_cases');
    if (savedCustom) {
      try {
        const parsed = JSON.parse(savedCustom);
        return [...initialCasesData, ...parsed];
      } catch (e) {
        return initialCasesData;
      }
    }
    return initialCasesData;
  });

  // Find target case by ID (fallback to first case)
  const numericId = parseInt(caseId, 10) || 1;
  const currentCase = allCases.find(c => c.id === numericId) || allCases[0];

  // Solved state persisted in localStorage
  const [solvedIds, setSolvedIds] = useState(() => {
    const saved = localStorage.getItem('infection_osce_solved_cases');
    if (saved) {
      try {
        return new Set(JSON.parse(saved));
      } catch (e) {
        return new Set();
      }
    }
    return new Set();
  });

  // Per-question reveal map: { [index]: boolean }
  const [revealedMap, setRevealedMap] = useState({});
  const [timeLeft, setTimeLeft] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const timerRef = useRef(null);

  // Quick grid modal state
  const [showGridModal, setShowGridModal] = useState(false);

  const questions = currentCase?.questions?.length
    ? currentCase.questions
    : [{ q: 'لا توجد أسئلة لهذه الحالة حالياً.', a: 'يرجى مراجعة ملفات الأوسكي.' }];

  const isCaseSolved = solvedIds.has(currentCase?.id);
  const allRevealed = questions.every((_, idx) => Boolean(revealedMap[idx]));

  // Reset revealed answers & timer whenever active case changes
  useEffect(() => {
    setRevealedMap({});
    setTimeLeft(90);
    setIsTimerRunning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentCase?.id]);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (showGridModal) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [showGridModal]);

  // 90-Second Countdown Timer Engine
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            // Reveal all covered answers automatically when timer ends
            const allOpen = {};
            questions.forEach((_, i) => {
              allOpen[i] = true;
            });
            setRevealedMap(allOpen);
            playTimerEndSound();
            return 0;
          }
          if (prev <= 10) {
            playTimerTickSound();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, timeLeft, questions.length]);

  const toggleTimer = () => {
    playClickSound();
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    playClickSound();
    setTimeLeft(90);
    setIsTimerRunning(true);
    setRevealedMap({});
  };

  const toggleQuestionAnswer = (idx) => {
    playClickSound();
    setRevealedMap((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleAllAnswers = () => {
    playClickSound();
    if (allRevealed) {
      setRevealedMap({});
    } else {
      const next = {};
      questions.forEach((_, i) => {
        next[i] = true;
      });
      setRevealedMap(next);
    }
  };

  // Mark Case as Solved
  const markCaseSolved = (id) => {
    const updated = new Set(solvedIds);
    updated.add(id);
    setSolvedIds(updated);
    localStorage.setItem('infection_osce_solved_cases', JSON.stringify([...updated]));
    playCelebrationSound();
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Toggle Solved Status (Undo if browsing)
  const toggleSolvedStatus = (id) => {
    playClickSound();
    const updated = new Set(solvedIds);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
      playSuccessSound();
    }
    setSolvedIds(updated);
    localStorage.setItem('infection_osce_solved_cases', JSON.stringify([...updated]));
  };

  // Navigate to Adjacent Case
  const navigateToCase = (newId) => {
    playClickSound();
    if (onOpenCase) {
      onOpenCase(newId);
    }
  };

  // Prev / Next Case IDs
  const currentIndexInAll = allCases.findIndex(c => c.id === currentCase?.id);
  const prevCase = currentIndexInAll > 0 ? allCases[currentIndexInAll - 1] : null;
  const nextCase = currentIndexInAll < allCases.length - 1 ? allCases[currentIndexInAll + 1] : null;

  return (
    <div className="min-h-screen pb-16 space-y-6">
      
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-purple-200/80 dark:border-purple-800/60">
        
        {/* Title & Case Meta on the RIGHT */}
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm font-inter flex items-center justify-center shadow-sm">
              {currentCase.id}
            </span>
            <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-cairo">
              {currentCase.title}
            </h1>
          </div>
          {currentCase.category && (
            <p className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300 mt-1">
              التصنيف: {currentCase.category}
            </p>
          )}
        </div>

        {/* Action Controls on the LEFT */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Solved / Undo Toggle Button */}
          <button
            onClick={() => toggleSolvedStatus(currentCase.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-extrabold shadow-sm transition-all active:scale-95 ${
              isCaseSolved
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-200'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-50'
            }`}
            title="تحديد أو إلغاء حالة الحل"
          >
            {isCaseSolved ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>تم الحل ✓ (تراجع؟)</span>
              </>
            ) : (
              <>
                <Undo2 className="w-4 h-4 text-purple-600" />
                <span>تحديد كـ محلولة</span>
              </>
            )}
          </button>

          {/* Quick Grid Selector Button (Icon + Number only) */}
          <button
            onClick={() => { playClickSound(); setShowGridModal(true); }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-purple-50 dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-extrabold hover:bg-purple-100 dark:hover:bg-purple-950/60 shadow-sm transition-all active:scale-95"
            title="عرض جميع الحالات"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="font-inter">({allCases.length})</span>
          </button>

          {/* Back to Self Test Section Button */}
          <button
            onClick={() => {
              playClickSound();
              if (onBackToSelfTest) onBackToSelfTest();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-extrabold text-xs sm:text-sm hover:bg-purple-50 dark:hover:bg-purple-950/60 shadow-sm transition-all active:scale-95"
          >
            <span>العودة لقسم اختبر نفسك</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Main Interactive Case Solver Page Content */}
      <div className="space-y-6">
        
        {/* 1. Case Scenario Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-purple-100 dark:border-purple-900/40">
            <div className="flex items-center gap-2 text-purple-900 dark:text-purple-200 font-black text-sm sm:text-base">
              <ClipboardList className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="font-inter">Case Scenario</span>
            </div>
            
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              {currentCase.category}
            </span>
          </div>

          <div 
            className="p-4 sm:p-5 rounded-2xl bg-purple-50/60 dark:bg-slate-800/60 border border-purple-200/80 dark:border-purple-800/60 leading-relaxed font-sans text-sm sm:text-base text-slate-800 dark:text-slate-100 select-text whitespace-pre-line text-left"
            dir="ltr"
          >
            {currentCase.scenario}
          </div>
        </div>

        {/* 2. All Questions Stacked Underneath Each Other with Covered Answers & 90s Timer */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md space-y-6">
          
          {/* Questions Header & Countdown Timer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-purple-100 dark:border-purple-900/40">
            
            {/* Questions Count Badge + Reveal All Toggle */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-xl bg-purple-600 text-white font-black text-xs sm:text-sm shadow-sm">
                أسئلة الحالة ({questions.length})
              </span>

              <button
                onClick={toggleAllAnswers}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 text-xs font-extrabold hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
              >
                {allRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{allRevealed ? 'إخفاء جميع الإجابات' : 'كشف جميع الإجابات'}</span>
              </button>
            </div>

            {/* Timer Controls & Display */}
            <div className="flex items-center gap-2.5">
              <div 
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl border font-mono font-bold text-sm sm:text-base transition-all ${
                  timeLeft <= 15
                    ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-700 text-rose-600 dark:text-rose-400 animate-pulse'
                    : 'bg-purple-50 dark:bg-slate-800 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>{Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
              </div>

              <button
                onClick={toggleTimer}
                className="p-2.5 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition-colors"
                title={isTimerRunning ? 'إيقاف العداد' : 'تشغيل العداد'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={resetTimer}
                className="p-2.5 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 transition-colors"
                title="إعادة ضبط العداد إلى 90 ثانية"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* All Questions Stacked Vertically */}
          <div className="space-y-6">
            {questions.map((qItem, idx) => {
              const isRevealed = Boolean(revealedMap[idx]);
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-purple-50/35 dark:bg-slate-800/40 border border-purple-200/80 dark:border-purple-800/60 space-y-3.5"
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-600 text-white font-black text-xs shrink-0">
                      سؤال {idx + 1}
                    </span>

                    <button
                      onClick={() => toggleQuestionAnswer(idx)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline shrink-0"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? 'إخفاء الإجابة' : 'كشف الإجابة'}</span>
                    </button>
                  </div>

                  {/* Question Text */}
                  <div dir="ltr">
                    <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-sans leading-relaxed select-text text-left">
                      {qItem.q}
                    </h3>
                  </div>

                  {/* Covered Model Answer Box */}
                  <div 
                    onClick={!isRevealed ? () => toggleQuestionAnswer(idx) : undefined}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all relative overflow-hidden min-h-[84px] flex items-center ${
                      isRevealed
                        ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-slate-800 dark:text-slate-100'
                        : 'bg-white/80 dark:bg-slate-900/60 border-purple-200 dark:border-purple-800 cursor-pointer hover:border-purple-400'
                    }`}
                  >
                    <p 
                      className={`w-full text-xs sm:text-sm leading-relaxed font-sans select-text whitespace-pre-line text-left ${
                        isRevealed ? 'filter-none' : 'filter blur-md select-none opacity-35'
                      }`}
                      dir="ltr"
                    >
                      {qItem.a}
                    </p>

                    {!isRevealed && (
                      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-white/75 dark:bg-slate-900/75 backdrop-blur-xs px-4 py-3 text-center">
                        <div className="p-2 rounded-full bg-purple-600 text-white shadow-md shadow-purple-600/30 shrink-0">
                          <Eye className="w-4 h-4" />
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white font-cairo">
                            الإجابة مخفية للتدريب الذاتي
                          </p>
                          <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300">
                            اضغط هنا لكشف الإجابة الآن
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Complete Case Action */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                markCaseSolved(currentCase.id);
                if (nextCase) {
                  navigateToCase(nextCase.id);
                }
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-black shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{nextCase ? 'إنهاء الحالة والانتقال للتالية' : 'إنهاء الحالة وتحديدها كمحلولة'}</span>
              {nextCase && <ArrowLeft className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* 3. Bottom Case Navigation Bar:
            - RIGHT (first in RTL): عرض الحالة التالية
            - CENTER (if available): الحالة السابقة
            - LEFT (last in RTL): عرض جميع الحالات
        */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-purple-200 dark:border-purple-800 shadow-md">
          
          {/* RIGHT: عرض الحالة التالية */}
          {nextCase ? (
            <button
              onClick={() => navigateToCase(nextCase.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              <span>عرض الحالة التالية (حالة {nextCase.id})</span>
            </button>
          ) : (
            <div />
          )}

          {/* CENTER: الحالة السابقة (إن وجدت) */}
          {prevCase && (
            <button
              onClick={() => navigateToCase(prevCase.id)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 font-bold text-xs sm:text-sm hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all"
            >
              <span>الحالة السابقة (حالة {prevCase.id})</span>
            </button>
          )}

          {/* LEFT: عرض جميع الحالات */}
          <button
            onClick={() => { playClickSound(); setShowGridModal(true); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-slate-800 text-purple-800 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/50 font-extrabold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
            title="عرض جميع الحالات"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>عرض جميع الحالات</span>
          </button>

        </div>

      </div>

      {/* Grid Modal rendered via Portal to document.body with z-[9999] so it NEVER overlaps Footer/Header */}
      {showGridModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowGridModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-300 dark:border-purple-800 shadow-2xl p-5 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-900/40 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-600 text-white">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-cairo">
                    عرض جميع الحالات ({allCases.length} حالة)
                  </h3>
                  <p className="text-xs text-purple-700 dark:text-purple-300 font-bold">
                    اضغط على أي رقم للانتقال للحالة فوراً (الأخضر = تم حلها)
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowGridModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid of All Case Numbers */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2 pb-2">
                {allCases.map((c) => {
                  const isSolved = solvedIds.has(c.id);
                  const isCurrent = c.id === currentCase.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setShowGridModal(false);
                        navigateToCase(c.id);
                      }}
                      className={`h-11 rounded-xl text-xs sm:text-sm font-black font-inter transition-all flex flex-col items-center justify-center relative shadow-xs active:scale-95 ${
                        isCurrent
                          ? 'ring-2 ring-purple-600 ring-offset-2 ring-offset-white dark:ring-offset-slate-900'
                          : ''
                      } ${
                        isSolved
                          ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                          : 'bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/50'
                      }`}
                    >
                      <span>{c.id}</span>
                      {isSolved && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-0.5"></span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-purple-100 dark:border-purple-900/40 text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-emerald-600 inline-block"></span>
                  <span>تم الحل ({solvedIds.size})</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-md bg-purple-100 dark:bg-slate-800 border border-purple-300 inline-block"></span>
                  <span>متبقية ({allCases.length - solvedIds.size})</span>
                </span>
              </div>

              <button
                onClick={() => setShowGridModal(false)}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 font-bold"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
