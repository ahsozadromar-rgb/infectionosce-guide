import React, { useState } from 'react';
import { HelpCircle, Search, Copy, Check } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function QuestionsSection() {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Structured questions with highlighted key medical terms (purple text only, no frames)
  const questionsList = [
    {
      rawText: 'patterns of fever and how to distinguish between them?',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">patterns of fever</span> and how to distinguish between them?
        </span>
      )
    },
    {
      rawText: 'difference between chill and rigor, and which of them is sign and which is symptom?',
      rendered: (
        <span>
          difference between <span className="text-purple-600 dark:text-purple-400 font-black font-inter">chill and rigor</span>, and which of them is <span className="text-purple-600 dark:text-purple-400 font-black font-inter">sign</span> and which is <span className="text-purple-600 dark:text-purple-400 font-black font-inter">symptom</span>?
        </span>
      )
    },
    {
      rawText: 'fever+ rash or purpura or papule or vesicle',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">fever+ rash</span> or <span className="text-purple-600 dark:text-purple-400 font-black font-inter">purpura</span> or <span className="text-purple-600 dark:text-purple-400 font-black font-inter">papule</span> or <span className="text-purple-600 dark:text-purple-400 font-black font-inter">vesicle</span>
        </span>
      )
    },
    {
      rawText: "lymph node distribution across the body what is them. where is them, to (x) node is one of any group of nodes....cervical, transverse, waldyer's ring,...etc",
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">lymph node distribution</span> across the body what is them. where is them, to (x) node is one of any group of nodes....<span className="text-purple-600 dark:text-purple-400 font-black font-inter">cervical</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">transverse</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">waldyer's ring</span>,...etc
        </span>
      )
    },
    {
      rawText: 'signs of meningeal irritation',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">signs of meningeal irritation</span>
        </span>
      )
    },
    {
      rawText: 'infectious infective endocarditis',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">infectious infective endocarditis</span>
        </span>
      )
    },
    {
      rawText: 'rash and its types, puprura, eccymosis, petichiea, blanching, non blanching, how to distinguish between each, patch',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">rash and its types</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">puprura</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">eccymosis</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">petichiea</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">blanching</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">non blanching</span>, how to distinguish between each, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">patch</span>
        </span>
      )
    },
    {
      rawText: 'difference between airborne, droplet, contact infection',
      rendered: (
        <span>
          difference between <span className="text-purple-600 dark:text-purple-400 font-black font-inter">airborne</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">droplet</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">contact infection</span>
        </span>
      )
    },
    {
      rawText: 'meaning of N-95 mask symbol?',
      rendered: (
        <span>
          meaning of <span className="text-purple-600 dark:text-purple-400 font-black font-inter">N-95 mask</span> symbol?
        </span>
      )
    },
    {
      rawText: 'important scores: gcs, sofa, curb65 and so on...important hints about each',
      rendered: (
        <span>
          important scores: <span className="text-purple-600 dark:text-purple-400 font-black font-inter">gcs</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">sofa</span>, <span className="text-purple-600 dark:text-purple-400 font-black font-inter">curb65</span> and so on...important hints about each
        </span>
      )
    },
    {
      rawText: 'qsofa scale points..',
      rendered: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black font-inter">qsofa scale points</span>..
        </span>
      )
    },
    {
      rawText: 'meningitis- brucella- rabies- pneumonia- tb- typhoid fever- fever- jaundice with fever- jaundice with rash- h.pylori',
      rendered: (
        <span className="flex flex-wrap gap-2 items-center">
          {['meningitis', 'brucella', 'rabies', 'pneumonia', 'tb', 'typhoid fever', 'fever', 'jaundice with fever', 'jaundice with rash', 'h.pylori'].map((t, idx) => (
            <span key={idx} className="text-purple-600 dark:text-purple-400 font-black font-inter text-xs sm:text-sm">
              {idx > 0 && <span className="text-slate-400 dark:text-slate-600 mx-1">•</span>}
              {t}
            </span>
          ))}
        </span>
      )
    },
    {
      rawText: 'any infections have vaccines especially rabies and tetanus',
      rendered: (
        <span>
          any infections have <span className="text-purple-600 dark:text-purple-400 font-black font-inter">vaccines</span> especially <span className="text-purple-600 dark:text-purple-400 font-black font-inter">rabies and tetanus</span>
        </span>
      )
    }
  ];

  const filteredQuestions = questionsList.filter(item => 
    item.rawText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (text, idx) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section 
      id="questions-section" 
      className="scroll-mt-24 rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-5"
    >
      {/* Title & Description */}
      <div className="pb-3 border-b border-purple-200/60 dark:border-purple-800/40 space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
          <span>اسئلة</span>
        </h2>
        <p className="text-sm sm:text-base font-bold text-purple-700 dark:text-purple-300">
          دي الاسئلة الي الدكتور نبه عليها في المراجعة
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-2.5">
        {filteredQuestions.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-800/50 border border-purple-100 dark:border-purple-900/40 hover:border-purple-300 dark:hover:border-purple-700 transition-colors shadow-sm"
          >
            {/* Copy Button on the RIGHT (1st child in RTL) */}
            <button
              onClick={() => handleCopy(item.rawText, idx)}
              className="p-2 rounded-xl text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100/60 dark:hover:bg-purple-950/40 transition-colors shrink-0 mt-0.5"
              title="نسخ السؤال"
            >
              {copiedIdx === idx ? (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>

            {/* Question Text in English with Purple Highlighted Terms (Middle) */}
            <div className="flex-1 text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 font-inter leading-relaxed select-text text-left ltr" dir="ltr">
              {item.rendered}
            </div>

            {/* Number Badge on the LEFT (3rd child in RTL) */}
            <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              {idx + 1}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
