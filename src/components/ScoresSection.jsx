import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Activity, 
  Thermometer, 
  ShieldAlert, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Lightbulb, 
  RotateCcw, 
  Sparkles, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  Award,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { scoresData } from '../data/scoresData';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export default function ScoresSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // key: `${catId}_${qId}` -> selectedOptionId
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSummaryTable, setShowSummaryTable] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeCategory = scoresData[activeCategoryIndex] || scoresData[0];
  const questions = activeCategory.questions || [];
  const currentQuestion = questions[currentQuestionIndex] || questions[0];

  const currentAnswerKey = `${activeCategory.id}_${currentQuestion.id}`;
  const userSelected = selectedAnswers[currentAnswerKey] || null;
  const isAnswered = Boolean(userSelected);
  const isCorrect = userSelected === currentQuestion.correctAnswer;

  // Track progress per category
  const getCategoryStats = (catId) => {
    const cat = scoresData.find(c => c.id === catId);
    if (!cat) return { answered: 0, correct: 0, total: 10 };
    let answered = 0;
    let correct = 0;
    cat.questions.forEach(q => {
      const ans = selectedAnswers[`${cat.id}_${q.id}`];
      if (ans) {
        answered++;
        if (ans === q.correctAnswer) correct++;
      }
    });
    return { answered, correct, total: cat.questions.length };
  };

  const currentStats = getCategoryStats(activeCategory.id);

  // Switch category
  const handleSelectCategory = (index) => {
    playClickSound();
    setActiveCategoryIndex(index);
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
  };

  // Switch question
  const handleNext = () => {
    playClickSound();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    playClickSound();
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(false);
    }
  };

  // Option clicked
  const handleSelectOption = (optionId) => {
    if (userSelected) return; // already answered
    playClickSound();
    const isAnsCorrect = optionId === currentQuestion.correctAnswer;
    if (isAnsCorrect) {
      playSuccessSound();
    }

    setSelectedAnswers(prev => ({
      ...prev,
      [currentAnswerKey]: optionId
    }));
    setShowExplanation(true);

    // Check if category complete
    const updatedStats = { ...currentStats };
    if (isAnsCorrect) updatedStats.correct++;
    updatedStats.answered++;

    if (updatedStats.correct === questions.length) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Toggle hint / explanation
  const handleToggleExplanation = () => {
    playClickSound();
    setShowExplanation(prev => !prev);
  };

  // Copy question text
  const handleCopyQuestion = () => {
    playClickSound();
    const fullText = `${currentQuestion.caseTitle}\n${currentQuestion.scenario}\n` +
      currentQuestion.options.map(o => `${o.id}) ${o.text}`).join('\n') +
      `\nالإجابة الصحيحة: ${currentQuestion.correctAnswer}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Reset category
  const handleResetCategory = () => {
    playClickSound();
    setSelectedAnswers(prev => {
      const copy = { ...prev };
      questions.forEach(q => {
        delete copy[`${activeCategory.id}_${q.id}`];
      });
      return copy;
    });
    setShowExplanation(false);
  };

  // Category Icon helper
  const renderCategoryIcon = (id, className = "w-5 h-5") => {
    switch (id) {
      case 'gcs':
        return <Brain className={className} />;
      case 'qsofa':
        return <Zap className={className} />;
      case 'sofa':
        return <Activity className={className} />;
      case 'curb65':
        return <Thermometer className={className} />;
      case 'child_pugh':
        return <ShieldAlert className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  return (
    <section id="scores-section" className="space-y-6 pt-6">
      
      {/* Section Header */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 border-2 border-purple-300 dark:border-purple-800 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-3 h-8 rounded-full bg-purple-600 inline-block"></span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-cairo">
            Score
          </h2>
        </div>
      </div>

      {/* Category Navigation Pills & Review Score Rules Button Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-800/60 shadow-sm">
        
        {/* The 5 Scores Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2 flex-1">
          {scoresData.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            const stats = getCategoryStats(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex-1 sm:flex-none justify-center ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:text-purple-600'
                }`}
              >
                {renderCategoryIcon(cat.id, "w-4 h-4")}
                <span>{cat.shortName}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive 
                    ? 'bg-purple-800 text-white' 
                    : 'bg-purple-100 dark:bg-slate-800 text-purple-700 dark:text-purple-400'
                }`}>
                  {stats.correct}/{stats.total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Review Score Rules & Table Button in this bar */}
        <button
          onClick={() => {
            playClickSound();
            setShowSummaryTable(prev => !prev);
          }}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer shrink-0"
        >
          <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>{showSummaryTable ? 'إخفاء جدول السكور' : 'مراجعة جدول وقواعد السكور'}</span>
          {showSummaryTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {/* Summary Table Cheat Sheet (Appears when toggled) */}
      {showSummaryTable && (
        <div className="p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-2 border-purple-300 dark:border-purple-800 shadow-xl space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-900">
            <div className="flex items-center gap-2">
              {renderCategoryIcon(activeCategory.id, "w-6 h-6 text-purple-600 dark:text-purple-400")}
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-cairo">
                جدول وقواعد: {activeCategory.name}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {activeCategory.summary.purpose}
          </p>

          {/* Conditional tables based on activeCategory.id */}
          {activeCategory.id === 'gcs' && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {activeCategory.summary.categories.map((cat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-800/60 border border-purple-200 dark:border-purple-800/60 space-y-2">
                    <h4 className="font-bold text-sm text-purple-800 dark:text-purple-300 border-b border-purple-200 dark:border-purple-700 pb-1 font-mono">
                      {cat.name}
                    </h4>
                    <div className="space-y-1.5 text-xs">
                      {cat.items.map((it, i) => (
                        <div key={i} className="flex justify-between items-center py-0.5">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{it.label}</span>
                          <span className="font-mono font-bold text-purple-700 dark:text-purple-400 px-2 py-0.5 bg-white dark:bg-slate-900 rounded-md border border-purple-200 dark:border-purple-800">{it.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interpretation & Red Flags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {activeCategory.summary.interpretation.map((inter, idx) => (
                  <div key={idx} className={`p-3 rounded-2xl border text-center ${
                    inter.alert 
                      ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 font-bold' 
                      : 'bg-purple-50/50 dark:bg-slate-800/40 border-purple-200 dark:border-purple-800 text-slate-800 dark:text-slate-200'
                  }`}>
                    <div className="font-mono font-black text-sm">{inter.range}</div>
                    <div className="text-xs mt-0.5">{inter.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300 mb-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>تنبيهات هامة للأوسكي (Red Flags & Notes):</span>
                </div>
                {activeCategory.summary.keyNotes.map((note, idx) => (
                  <p key={idx} className="leading-relaxed">• {note}</p>
                ))}
              </div>
            </div>
          )}

          {activeCategory.id === 'qsofa' && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeCategory.summary.criteriaList.map((crit, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 dark:bg-slate-800/60 border border-amber-200 dark:border-amber-800/60 text-center space-y-1">
                    <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-mono font-bold flex items-center justify-center mx-auto text-sm">
                      {crit.key}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white pt-1">{crit.name}</h4>
                    <p className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 bg-white dark:bg-slate-900 py-1 px-2 rounded-lg border border-amber-200 dark:border-amber-800">{crit.rule}</p>
                    <span className="text-[11px] text-slate-500 font-bold block pt-1">{crit.points}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-xs font-bold leading-relaxed">
                ⚡ {activeCategory.summary.scoringRule}
              </div>
            </div>
          )}

          {activeCategory.id === 'sofa' && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeCategory.summary.organSystems.map((org, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/60 border border-emerald-200 dark:border-emerald-800/60 text-right space-y-1">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                      {idx + 1}. {org.system}
                    </span>
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-medium">{org.param}</p>
                    <span className="text-[10px] text-slate-500 font-mono block">{org.scale}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold">
                🏥 {activeCategory.summary.sepsisDefinition}
              </div>
            </div>
          )}

          {activeCategory.id === 'curb65' && (
            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {activeCategory.summary.criteriaList.map((crit, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-rose-50/50 dark:bg-slate-800/60 border border-rose-200 dark:border-rose-800/60 text-center space-y-1">
                    <span className="w-7 h-7 rounded-full bg-rose-600 text-white font-mono font-bold flex items-center justify-center mx-auto text-xs">
                      {crit.key}
                    </span>
                    <h5 className="font-bold text-xs text-slate-900 dark:text-white pt-1">{crit.name}</h5>
                    <p className="text-[11px] font-mono text-rose-700 dark:text-rose-400 font-bold">{crit.rule}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeCategory.summary.mortalityRiskAndManagement.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 space-y-1 text-center">
                    <div className="font-mono font-bold text-sm text-purple-700 dark:text-purple-300">{m.score}</div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">{m.risk} • {m.mortality}</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 font-bold bg-purple-50 dark:bg-purple-950/60 py-1 px-2 rounded-lg">{m.management}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory.id === 'child_pugh' && (
            <div className="space-y-4 pt-2">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right border-collapse">
                  <thead>
                    <tr className="bg-purple-100 dark:bg-purple-950/80 text-purple-900 dark:text-purple-200">
                      <th className="p-2.5 rounded-r-xl">المعيار (Parameter)</th>
                      <th className="p-2.5">1 نقطة</th>
                      <th className="p-2.5">2 نقطة</th>
                      <th className="p-2.5 rounded-l-xl">3 نقاط</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 dark:divide-purple-900/50">
                    {activeCategory.summary.scoringTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-purple-50/40 dark:hover:bg-purple-950/20">
                        <td className="p-2.5 font-bold text-slate-800 dark:text-slate-200">{row.param}</td>
                        <td className="p-2.5 font-mono text-purple-700 dark:text-purple-400">{row.p1}</td>
                        <td className="p-2.5 font-mono text-purple-700 dark:text-purple-400">{row.p2}</td>
                        <td className="p-2.5 font-mono text-purple-700 dark:text-purple-400">{row.p3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeCategory.summary.classes.map((cls, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-indigo-50/50 dark:bg-slate-800/60 border border-indigo-200 dark:border-indigo-800 text-center space-y-1">
                    <span className="font-bold text-sm text-indigo-700 dark:text-indigo-300 font-mono">{cls.class}</span>
                    <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">{cls.points}</div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">{cls.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* The Clinical Question Card (Exact Replica of Screenshot 2026-11-25 025626.png) */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-200/90 dark:border-purple-800 shadow-xl space-y-6 relative">
        
        {/* Top Header of the Question Card: Matching Screenshot 2 */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-100 dark:border-purple-900/50">
          
          {/* Right: Case Title with Underline */}
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-xl font-black text-slate-900 dark:text-white font-cairo">
              {currentQuestion.caseTitle}
            </h3>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 inline-block"></span>
            <span className="text-xs text-purple-600 dark:text-purple-400 font-bold hidden sm:inline">
              {activeCategory.shortName}
            </span>
          </div>

          {/* Left: Navigation Counter & Icons (Screenshot 2: Navigation, Lightbulb, Share/Copy) */}
          <div className="flex items-center gap-2 sm:gap-3 text-slate-600 dark:text-slate-400" dir="ltr">
            
            {/* Copy / Share Button */}
            <button
              onClick={handleCopyQuestion}
              className="p-2 rounded-xl hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-500 hover:text-purple-600 transition-colors cursor-pointer"
              title="نسخ السؤال"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Lightbulb Hint Button */}
            <button
              onClick={handleToggleExplanation}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                showExplanation 
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400' 
                  : 'hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-500 hover:text-amber-500'
              }`}
              title="إظهار تفاصيل الحساب والشرح"
            >
              <Lightbulb className="w-4 h-4" />
            </button>

            {/* Nav Arrows & Question Counter: e.g. "1 من 10" */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="p-1 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300 transition-colors"
                title="السابق"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 min-w-[50px] text-center">
                {currentQuestionIndex + 1} من {questions.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className="p-1 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-slate-600 dark:text-slate-300 transition-colors"
                title="التالي"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Question Scenario Text: Arabic description with English Medical Terms */}
        <div className="py-2 text-right">
          <p className="text-base sm:text-lg md:text-xl font-bold font-cairo text-slate-900 dark:text-slate-100 leading-relaxed select-text">
            {currentQuestion.scenario}
          </p>
        </div>

        {/* Choices List: Matching Screenshot 2 (Circle letter on the right, choice text on the left) */}
        <div className="space-y-3 pt-2">
          {currentQuestion.options.map((option) => {
            const isSelected = userSelected === option.id;
            const isCorrectOption = option.id === currentQuestion.correctAnswer;
            
            // Determine card appearance
            let cardClasses = 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 hover:bg-purple-50/30';
            let circleClasses = 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300';
            
            if (isAnswered) {
              if (isCorrectOption) {
                // Correct answer always highlighted in green
                cardClasses = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 dark:border-emerald-500 ring-2 ring-emerald-400/30';
                circleClasses = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrectOption) {
                // Wrong selected answer in red
                cardClasses = 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 dark:border-rose-500 ring-2 ring-rose-400/30';
                circleClasses = 'bg-rose-600 text-white border-rose-600';
              } else {
                cardClasses = 'opacity-50 bg-slate-50/30 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                disabled={isAnswered}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer select-none text-right active:scale-[0.99] ${cardClasses}`}
              >
                {/* Choice Text (Left) */}
                <span className={`text-sm sm:text-base font-extrabold font-inter ${
                  isAnswered && isCorrectOption 
                    ? 'text-emerald-900 dark:text-emerald-100 font-black' 
                    : isAnswered && isSelected && !isCorrectOption
                    ? 'text-rose-900 dark:text-rose-100'
                    : 'text-slate-800 dark:text-slate-200'
                }`}>
                  {option.text}
                </span>

                {/* Choice Letter Circle (Right: A, B, C, D matching Screenshot 2) */}
                <div className="flex items-center gap-2">
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border font-mono shrink-0 transition-all ${circleClasses}`}>
                    {option.id}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Calculation & Explanation Box (Appears when answered or lightbulb clicked) */}
        {(showExplanation || isAnswered) && (
          <div className="p-5 sm:p-6 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border-2 border-purple-200 dark:border-purple-800/80 space-y-4 animate-fadeIn text-right">
            
            <div className="flex items-center justify-between border-b border-purple-200 dark:border-purple-800 pb-2">
              <div className="flex items-center gap-2 text-purple-900 dark:text-purple-200 font-extrabold text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>طريقة الحساب والتفصيل الإكلينيكي:</span>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                isCorrect 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
              }`}>
                الإجابة الصحيحة: {currentQuestion.correctAnswer}
              </span>
            </div>

            {/* Step-by-step scoring items */}
            {currentQuestion.breakdown && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentQuestion.breakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900 flex items-center justify-between gap-2 shadow-2xs">
                    <div className="text-right">
                      <span className="text-xs font-bold text-purple-800 dark:text-purple-300 block">{item.label}</span>
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">{item.desc}</span>
                    </div>
                    <span className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      +{item.points}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Total calculated & Classification */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-purple-200/60 dark:border-purple-900/40">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">المجموع المحسوب:</span>
                <span className="font-mono font-extrabold text-sm text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg border border-purple-200 dark:border-purple-800">
                  {currentQuestion.totalCalculated}
                </span>
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {currentQuestion.classification}
              </div>
            </div>

            {/* Clinical Note / Red Flag */}
            {currentQuestion.clinicalNote && (
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs leading-relaxed font-medium">
                💡 <span className="font-bold">ملحوظة الأوسكي: </span>{currentQuestion.clinicalNote}
              </div>
            )}

          </div>
        )}

        {/* Card Footer: Navigation Buttons & Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-purple-100 dark:border-purple-900/50">
          
          {/* Status & Reset */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              أتقنت <span className="font-bold text-purple-700 dark:text-purple-400 font-mono">{currentStats.correct}</span> من أصل <span className="font-bold font-mono">{questions.length}</span> حالات
            </span>
            {currentStats.answered > 0 && (
              <button
                onClick={handleResetCategory}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-500 transition-colors p-1"
                title="إعادة تعيين حالات هذا السكور"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة</span>
              </button>
            )}
          </div>

          {/* Previous / Next Action Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white disabled:opacity-40 disabled:cursor-not-allowed text-xs sm:text-sm font-bold shadow-md shadow-purple-600/30 transition-all cursor-pointer"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
