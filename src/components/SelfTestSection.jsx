import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  FileQuestion, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  Play, 
  Pause, 
  Eye, 
  EyeOff, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  PlusCircle, 
  Layers,
  LayoutGrid,
  Check,
  AlertCircle,
  Undo2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { casesData as initialCasesData } from '../data/casesData';
import { 
  playClickSound, 
  playCheckSound, 
  playSuccessSound, 
  playCelebrationSound,
  playTimerTickSound,
  playTimerEndSound
} from '../utils/soundEffects';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export default function SelfTestSection({ selectedTopicFilter, onClearTopicFilter, onOpenCase }) {
  // All cases state (149 base + any custom AI generated)
  const [allCases, setAllCases] = useState(() => {
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

  // Solved cases ID set persisted in localStorage
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

  // Display count (defaults to all available cases)
  const [displayCount, setDisplayCount] = useState(allCases.length || initialCasesData.length);

  // Status Filter: 'all' | 'solved' | 'unsolved'
  const [statusFilter, setStatusFilter] = useState('all');

  // Topic category filter
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Grid index modal state
  const [showGridModal, setShowGridModal] = useState(false);

  // Extra cases generator modal state
  const [showAiModal, setShowAiModal] = useState(false);
  const [casesCountInput, setCasesCountInput] = useState(allCases.length.toString() || initialCasesData.length.toString());
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiGenError, setAiGenError] = useState('');
  const [aiGenSuccess, setAiGenSuccess] = useState('');

  // Sync external topic filter from Section 1 if passed
  useEffect(() => {
    if (selectedTopicFilter && selectedTopicFilter !== 'all') {
      const topicMap = {
        'tb': 'Tuberculosis (TB)',
        'meningitis': 'Meningitis & CNS',
        'cns': 'Meningitis & CNS',
        'chest': 'Tuberculosis (TB)',
        'rabies': 'Rabies & Animal Exposure',
        'brucellosis': 'Brucellosis',
        'fuo': 'Fever of Unknown Origin (FUO)',
        'hepatitis': 'Hepatitis & Jaundice',
        'ln': 'Lymphadenopathy & Spleen',
        'gcs': 'Sepsis & ICU Scores',
      };
      const cat = topicMap[selectedTopicFilter.toLowerCase()] || 'All';
      setActiveCategory(cat);
    }
  }, [selectedTopicFilter]);

  // Persist solved IDs in localStorage
  const saveSolved = (newSet) => {
    setSolvedIds(newSet);
    localStorage.setItem('infection_osce_solved_cases', JSON.stringify(Array.from(newSet)));
  };

  const toggleCaseSolved = (id, e) => {
    if (e) e.stopPropagation();
    playCheckSound();
    const newSet = new Set(solvedIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    saveSolved(newSet);
  };

  // Sync solved state when returning from dedicated case page
  useEffect(() => {
    const syncSolved = () => {
      const saved = localStorage.getItem('infection_osce_solved_cases');
      if (saved) {
        try {
          setSolvedIds(new Set(JSON.parse(saved)));
        } catch (e) {}
      }
    };
    window.addEventListener('focus', syncSolved);
    window.addEventListener('storage', syncSolved);
    syncSolved();
    return () => {
      window.removeEventListener('focus', syncSolved);
      window.removeEventListener('storage', syncSolved);
    };
  }, []);

  // Open case on dedicated page
  const handleOpenCase = (c) => {
    playClickSound();
    setShowGridModal(false);
    if (onOpenCase) {
      onOpenCase(c.id);
    }
  };

  // Categories list
  const categories = [
    'All',
    'Meningitis & CNS',
    'Tuberculosis (TB)',
    'Hepatitis & Jaundice',
    'Brucellosis',
    'Rabies & Animal Exposure',
    'Fever of Unknown Origin (FUO)',
    'Lymphadenopathy & Spleen',
    'Malaria & Vector-Borne',
    'Typhoid & Diarrheal Illnesses',
    'Sepsis & ICU Scores',
    'Other Infections & Parasites'
  ];

  // Filtering logic
  const filteredCases = allCases.filter(c => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory;
    const matchSearch = !searchQuery.trim() || 
      c.id.toString() === searchQuery.trim() ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.scenario.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.topic && c.topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchStatus = 
      statusFilter === 'all' ? true :
      statusFilter === 'solved' ? solvedIds.has(c.id) :
      !solvedIds.has(c.id);

    return matchCat && matchSearch && matchStatus;
  });

  const displayedCases = filteredCases.slice(0, displayCount);

  // Gemini AI Generation Handler for extra cases
  const handleGenerateCases = async () => {
    playClickSound();
    setAiGenError('');
    setAiGenSuccess('');
    const count = parseInt(casesCountInput, 10);
    if (isNaN(count) || count < 1) {
      setAiGenError('يرجى إدخال رقم صحيح للحالات.');
      return;
    }

    if (count <= allCases.length) {
      setDisplayCount(count);
      setAiGenSuccess(`تم تحديد عرض ${count} حالة من بنك الحالات المعتمد بنجاح.`);
      setTimeout(() => setShowAiModal(false), 1500);
      return;
    }

    if (!GEMINI_API_KEY) {
      setAiGenError('يرجى إعداد مفتاح VITE_GEMINI_API_KEY في متغيرات البيئة لتوليد حالات إضافية.');
      return;
    }

    const extraNeeded = count - allCases.length;
    setIsGenerating(true);

    try {
      const prompt = `You are an expert infectious disease clinical OSCE professor.
Generate ${extraNeeded} distinct high-yield clinical OSCE examination cases based on the Egyptian medical curriculum and Dr. Mohamed Gharib's infectious disease revision syllabus.
Topics: TB, Meningitis, Rabies, Brucellosis, FUO, Hepatitis, Lymphadenopathy, Sepsis, Malaria, Typhoid.
Start ID from ${allCases.length + 1}.

Respond ONLY with valid JSON array of objects without markdown fences:
[
  {
    "id": ${allCases.length + 1},
    "category": "Meningitis & CNS",
    "topic": "Acute Meningitis",
    "title": "حالة: التهاب السحايا الحاد",
    "scenario": "Detailed clinical case scenario in English and Arabic.",
    "questions": [
      {
        "q": "1. What is the most probable diagnosis?",
        "a": "Acute Bacterial Meningitis."
      },
      {
        "q": "2. What is the causative organism and CSF findings?",
        "a": "Neisseria meningitidis or Streptococcus pneumoniae. High neutrophils, elevated protein, low glucose."
      },
      {
        "q": "3. What is the treatment protocol?",
        "a": "IV Ceftriaxone + IV Vancomycin + Dexamethasone."
      }
    ]
  }
]`;

      let response = null;
      for (const modelName of ['gemini-3.5-flash', 'gemini-3.5-flash-lite']) {
        response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.7,
                responseMimeType: "application/json"
              }
            })
          }
        );
        if (response.ok) break;
      }

      if (!response || !response.ok) {
        throw new Error(`API Error: ${response?.status || 'Unknown'}`);
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) throw new Error('No content returned from Gemini.');

      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const newGeneratedCases = JSON.parse(cleanJson);

      const updatedAllCases = [...allCases, ...newGeneratedCases];
      setAllCases(updatedAllCases);
      setDisplayCount(count);

      const existingAi = JSON.parse(localStorage.getItem('infection_osce_ai_cases') || '[]');
      localStorage.setItem('infection_osce_ai_cases', JSON.stringify([...existingAi, ...newGeneratedCases]));

      playSuccessSound();
      setAiGenSuccess(`تم توليد ${newGeneratedCases.length} حالة جديدة بنجاح بالذكاء الاصطناعي! المجموع المعروض الآن: ${count} حالة.`);
      setTimeout(() => setShowAiModal(false), 2000);
    } catch (err) {
      console.error(err);
      setAiGenError(`حدث خطأ أثناء التوليد: ${err.message}. يرجى المحاولة مرة أخرى.`);
    } finally {
      setIsGenerating(false);
    }
  };

  const solvedCount = Array.from(solvedIds).filter(id => allCases.some(c => c.id === id)).length;
  const progressPercent = Math.round((solvedCount / allCases.length) * 100) || 0;

  return (
    <section 
      id="selftest-section" 
      className="scroll-mt-24 rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-5"
    >
      
      {/* Title & Description Directly Below */}
      <div className="pb-3 border-b border-purple-200/60 dark:border-purple-800/40 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
            <span>4- اختبر نفسك</span>
          </h2>

          {/* Quick Stats Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-700 dark:text-purple-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>تم حل: {solvedCount} من {allCases.length} ({progressPercent}%)</span>
          </div>
        </div>
        
        {/* Direct Description Points (Exact User Wording) */}
        <div className="space-y-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
          <p className="leading-relaxed">
            ● كل ال cases دي من السنوات السابقة وملفات الحل الي حليناها قبل ال end module والاجابات مطابقة للمحاضرات والمنهج
          </p>
          <p className="leading-relaxed">
            ● كل بطاقة فيها case ولو خلصتهم كلهم تقدر تعمل case لنفسك هتتعمل بناءا على ملفات المحاضرات والمنهج
          </p>
          <p className="leading-relaxed">
            ● وكل ال cases الي موجودة والي هتتعمل مصدر اجابتها محاضرات ومحتوى المنهج من ال ai
          </p>
        </div>
      </div>

      {/* Controls Bar: Status Filter + Topics Dropdown + Quick Grid Button + Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-1">
        
        {/* Status Buttons & Topic Dropdown */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Status Buttons */}
          <div className="inline-flex items-center p-1 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200/80 dark:border-purple-800/80 text-xs font-bold">
            <button
              onClick={() => { playClickSound(); setStatusFilter('all'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                statusFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-purple-700'
              }`}
            >
              الكل ({allCases.length})
            </button>
            <button
              onClick={() => { playClickSound(); setStatusFilter('solved'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                statusFilter === 'solved'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-emerald-700'
              }`}
            >
              تم حلها ({solvedCount})
            </button>
            <button
              onClick={() => { playClickSound(); setStatusFilter('unsolved'); }}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                statusFilter === 'unsolved'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-amber-700'
              }`}
            >
              لم تحل بعد ({Math.max(0, allCases.length - solvedCount)})
            </button>
          </div>

          {/* Topics Dropdown */}
          <div className="relative">
            <select
              value={activeCategory}
              onChange={(e) => {
                playClickSound();
                setActiveCategory(e.target.value);
              }}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-purple-200/90 dark:border-purple-800/80 text-xs sm:text-sm font-extrabold text-purple-900 dark:text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm cursor-pointer"
            >
              <option value="All">جميع المواضيع ({allCases.length})</option>
              {categories.filter(c => c !== 'All').map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>



        </div>

        {/* Search & Create Extra Cases Button */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Quick Search */}
          <div className="relative flex-1 sm:w-56">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث برقم الحالة أو الكلمة..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-800 border border-purple-200/80 dark:border-purple-800 text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Button: إنشاء حالات إضافية (No AI icon) */}
          <button
            onClick={() => {
              playClickSound();
              setCasesCountInput((allCases.length + 5).toString());
              setAiGenError('');
              setAiGenSuccess('');
              setShowAiModal(true);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold shadow-sm shadow-purple-600/30 active:scale-95 transition-all shrink-0"
            title="إنشاء حالات إضافية"
          >
            <PlusCircle className="w-4 h-4" />
            <span>إنشاء حالات إضافية</span>
          </button>

        </div>

      </div>

      {/* Grid of Square Numbered Cards */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2.5 sm:gap-3 pt-3">
        {displayedCases.map((c) => {
          const isSolved = solvedIds.has(c.id);
          const isAiGenerated = c.id > initialCasesData.length;
          return (
            <button
              key={c.id}
              onClick={() => handleOpenCase(c)}
              className={`aspect-square flex flex-col items-center justify-center rounded-2xl border-2 transition-all p-2 relative shadow-sm hover:scale-105 active:scale-95 group ${
                isSolved
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-800 dark:text-emerald-300 shadow-emerald-500/15'
                  : isAiGenerated
                  ? 'bg-violet-500/10 border-violet-400 text-violet-700 dark:text-violet-300 hover:border-violet-500'
                  : 'bg-white dark:bg-slate-900 border-purple-200/90 dark:border-purple-800/80 text-purple-950 dark:text-purple-100 hover:border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-950/40'
              }`}
              title={`حالة رقم ${c.id}: ${c.title}`}
            >
              {/* Solved Check Badge */}
              {isSolved && (
                <span className="absolute top-1.5 left-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              )}
              
              {/* Case Number in Large Font */}
              <span className="text-xl sm:text-2xl font-black font-inter tracking-tight">
                {c.id}
              </span>
            </button>
          );
        })}
      </div>

      {/* Modal 1: Quick Cases Grid Navigation Drawer */}
      {showGridModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowGridModal(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-800 p-5 sm:p-7 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Grid Header */}
            <div className="flex items-center justify-between pb-4 border-b border-purple-100 dark:border-purple-800/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-purple-600 text-white shadow-md">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    فهرس وشبكة الحالات السريرية ({allCases.length} حالة)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    اضغط على رقم أي حالة للانتقال المباشر إليها وبدء الحل فوراً
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowGridModal(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="إغلاق الشبكة"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Status Legend & Progress Bar */}
            <div className="p-3.5 rounded-2xl bg-purple-50/80 dark:bg-slate-800/60 border border-purple-200/80 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span>تم حلها ({solvedCount})</span>
                </span>
                <span className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300">
                  <span className="w-3 h-3 rounded-full bg-purple-200 dark:bg-purple-900 inline-block"></span>
                  <span>لم تحل بعد ({Math.max(0, allCases.length - solvedCount)})</span>
                </span>
              </div>
              <span className="text-purple-800 dark:text-purple-200 font-extrabold">
                نسبة الإنجاز: {progressPercent}%
              </span>
            </div>

            {/* Grid of All 149 Numbers */}
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-2 max-h-[55vh] overflow-y-auto p-2">
              {allCases.map((c) => {
                const isSolved = solvedIds.has(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => handleOpenCase(c)}
                    className={`aspect-square flex items-center justify-center rounded-xl font-inter font-black text-sm sm:text-base transition-all hover:scale-110 active:scale-95 shadow-sm border ${
                      isSolved
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-emerald-600/20'
                        : 'bg-purple-50 dark:bg-slate-800 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-700/80 hover:bg-purple-600 hover:text-white'
                    }`}
                    title={`حالة ${c.id}: ${c.title}`}
                  >
                    {c.id}
                  </button>
                );
              })}
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* Modal 2: إنشاء حالات إضافية (Portal with z-[9999], no AI icons) */}
      {showAiModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => !isGenerating && setShowAiModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-800 p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-800/60">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-purple-600" />
                <span>إنشاء حالات إضافية</span>
              </h3>
              <button 
                onClick={() => setShowAiModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                حدد إجمالي عدد الحالات المطلوبة:
              </label>
              <input
                type="number"
                min="1"
                max="250"
                value={casesCountInput}
                onChange={(e) => setCasesCountInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-purple-300 dark:border-purple-700 bg-purple-50/50 dark:bg-slate-800 text-slate-900 dark:text-white font-black font-inter text-lg text-center focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                • الحالات المتاحة حالياً: <strong>{allCases.length} حالة</strong> من السنوات السابقة وملفات الحل.<br />
                • إذا حددت رقماً أكبر (مثلاً {allCases.length + 5}): سيتم إنشاء الحالات الإضافية بناءً على ملفات المحاضرات والمنهج.
              </p>
            </div>

            {aiGenError && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs font-bold text-rose-600 dark:text-rose-400">
                {aiGenError}
              </div>
            )}

            {aiGenSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {aiGenSuccess}
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowAiModal(false)}
                disabled={isGenerating}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                إلغاء
              </button>
              <button
                onClick={handleGenerateCases}
                disabled={isGenerating}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-extrabold shadow-md active:scale-95 disabled:opacity-60"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>جاري إنشاء الحالات...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>إنشاء وعرض الحالات</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
