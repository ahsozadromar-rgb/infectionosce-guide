import React from 'react';
import { 
  Headphones, 
  FileText, 
  Video,
  ExternalLink
} from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function PrioritiesAndOsceSection({ onOpenLecturePage }) {
  // Ordered primary topics (Strict user list)
  const primaryTopics = [
    'Meningitis',
    'TB',
    'FUO',
    'Rabies',
    'Brucellosis',
    'Pneumonia',
    'Typhoid',
    'Fever with jaundice',
    'Fever with rash',
    'Fever with Lymphadenopathy',
    'H.pylori'
  ];

  // مواضيع هتنزل على قد الكلمتين الي الدكتور قالهم
  const shortSummaryTopics = [
    'Tetanus',
    'HBV',
    'VHE'
  ];

  // Extended topics for "لو خلصت وباقي وقت"
  const extendedTopics = [
    'Encephalitis',
    'Hepatitis',
    'Types of Jaundice',
    'L.N Examination (Lymphadenopathy)',
    'GCS'
  ];

  // OSCE Details list with highlighted terms (purple text only, no frames)
  const osceDetailsList = [
    (
      <span>
        موعد الامتحان: <span className="text-purple-600 dark:text-purple-400 font-black">يوم الاربع الساعة 8</span>
      </span>
    ),
    (
      <span>
        مكان الامتحان: كله في <span className="text-purple-600 dark:text-purple-400 font-black">السيد جلال</span> المبنى الي فيه الطوارئ <span className="text-purple-600 dark:text-purple-400 font-black">الدور الرابع قسم الجهاز الهضمي</span>
      </span>
    ),
    (
      <span>
        كل طالب هيدخل <span className="text-purple-600 dark:text-purple-400 font-black">لجنتين</span> اللجنة فيها <span className="text-purple-600 dark:text-purple-400 font-black">دكتور واحد وحالة واحدة</span>
      </span>
    ),
    (
      <span>
        الامتحان هيبقى فيه من <span className="text-purple-600 dark:text-purple-400 font-black font-inter">6 الى 10</span> حالات مختلفة كلهم من ال <span className="text-purple-600 dark:text-purple-400 font-black font-inter">Most Common</span> في المنهج
      </span>
    ),
    (
      <span>
        الامتحان <span className="text-purple-600 dark:text-purple-400 font-black">30 درجة</span> كل طالب هيمتحن على <span className="text-purple-600 dark:text-purple-400 font-black">حالتين</span> الواحدة ب<span className="text-purple-600 dark:text-purple-400 font-black">15 درجة</span>
      </span>
    ),
    (
      <span>
        الامتحان عبارة عن <span className="text-purple-600 dark:text-purple-400 font-black font-inter">Case Scenario</span> يعني ورقة مكتوب فيها ال <span className="text-purple-600 dark:text-purple-400 font-black font-inter">case</span> هتجاوب شفوي وبعديها الدكتور يسألك
      </span>
    )
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      
      {/* ============================================================ */}
      {/* 1- هتعمل ايه */}
      {/* ============================================================ */}
      <section 
        id="priorities-section" 
        className="scroll-mt-24 rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-6"
      >
        {/* Section Heading */}
        <div className="pb-3 border-b border-purple-200/60 dark:border-purple-800/40">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
            <span>1- هتعمل ايه</span>
          </h2>
        </div>

        {/* Step 1: مع رقم 1 في فريم بنفسجي */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-black font-inter text-sm shadow-sm flex items-center justify-center shrink-0">
              1
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
              هتسمع تسجيل محاضرة الدكتور وتذاكر ملف المراجعة او تسمع الفيديو
            </p>
          </div>

          {/* 3 Compact Cards */}
          <div className="flex flex-wrap items-center gap-2.5 pr-10 pt-1">
            
            {/* بطاقة التسجيل (تفتح صفحة منفصلة) */}
            <button
              onClick={() => {
                playClickSound();
                if (onOpenLecturePage) onOpenLecturePage();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-purple-300 dark:border-purple-700 bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-bold shadow-sm shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all"
              title="فتح صفحة تسجيل المراجعة والتفريغ"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>التسجيل</span>
            </button>

            {/* بطاقة الملف - ينقل المستخدم لرابط تليجرام */}
            <a
              href="https://t.me/dromarbooks/169?comment=3130"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-slate-800/80 hover:bg-purple-100 dark:hover:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all"
              title="فتح ملف المراجعة على تليجرام"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>الملف</span>
            </a>

            {/* بطاقة الفيديو - ينقل المستخدم لرابط تليجرام */}
            <a
              href="https://t.me/dromarbooks/169?comment=3125"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-slate-800/80 hover:bg-purple-100 dark:hover:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all"
              title="مشاهدة الفيديو على تليجرام"
            >
              <Video className="w-3.5 h-3.5" />
              <span>الفيديو</span>
            </a>

          </div>
        </div>

        {/* Step 2: مع رقم 2 في فريم بنفسجي والمواضيع الموسعة */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-purple-600 text-white font-black font-inter text-sm shadow-sm flex items-center justify-center shrink-0">
              2
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
              هتذاكر المواضيع دي
            </p>
          </div>

          {/* Topics List under each other */}
          <div className="space-y-1.5 pr-10">
            {primaryTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-purple-50/70 dark:bg-slate-800/60 border border-purple-100 dark:border-purple-900/40 text-slate-900 dark:text-slate-100 font-extrabold text-sm sm:text-base font-inter"
              >
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0"></span>
                {topic === 'TB' ? (
                  <a
                    href="https://t.me/dromarbooks/169?comment=3132"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border border-purple-400 dark:border-purple-600 bg-purple-100/90 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 font-black hover:bg-purple-200 dark:hover:bg-purple-900 shadow-xs transition-all"
                    title="فتح ملف TB الخاص بالدكتور على تليجرام"
                  >
                    <span>TB</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  </a>
                ) : (
                  <span>{topic}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* مواضيع هتنزل على قد الكلمتين الي الدكتور قالهم */}
        <div className="space-y-3 pt-3">
          <div className="relative flex items-center justify-center my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-200 dark:border-purple-800" />
            </div>
            <div className="relative px-4 py-1 rounded-full bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-300 font-extrabold text-xs sm:text-sm shadow-sm">
              ● مواضيع هتنزل على قد الكلمتين الي الدكتور قالهم
            </div>
          </div>

          <div className="space-y-1.5 pr-2">
            {shortSummaryTopics.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-purple-50/50 dark:bg-slate-800/50 border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold font-inter"
              >
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* لو خلصت وباقي وقت (مطابق للشكل في Screenshot 113623 بدون أيقونة) */}
        <div className="space-y-3 pt-3">
          <div className="relative flex items-center justify-center my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-200 dark:border-purple-800" />
            </div>
            <div className="relative px-4 py-1 rounded-full bg-white dark:bg-slate-900 border border-purple-300 dark:border-purple-700 text-purple-800 dark:text-purple-300 font-extrabold text-xs sm:text-sm shadow-sm">
              ● لو خلصت وباقي وقت
            </div>
          </div>

          <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 pr-2">
            ادخل على دول
          </p>

          <div className="space-y-1.5 pr-2">
            {extendedTopics.map((item, idx) => {
              const isLn = item.includes('L.N Examination');
              if (isLn) {
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold font-inter"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                    <span className="inline-flex items-center flex-wrap gap-1.5" dir="ltr">
                      <a
                        href="https://t.me/dromarbooks/169?comment=3133"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClickSound}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border border-purple-400 dark:border-purple-600 bg-purple-100/90 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 font-black hover:bg-purple-200 dark:hover:bg-purple-900 shadow-xs transition-all"
                        title="فتح ملف وشرح L.N Examination على تليجرام"
                      >
                        <span>L.N Examination</span>
                        <ExternalLink className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      </a>
                      <span>(Lymphadenopathy)</span>
                    </span>
                  </div>
                );
              }
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold font-inter select-text"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* لو مشترك مع هاشم */}
        <div className="space-y-2.5 pt-3 border-t border-purple-100 dark:border-purple-900/30">
          <h3 className="text-sm sm:text-base font-extrabold text-purple-900 dark:text-purple-300">
            ● لو مشترك مع هاشم
          </h3>
          <div className="space-y-2 pr-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>اسمع فيديوهات المراجعة</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>اسمع فيديو العملي وذاكر ملف العملي</span>
            </div>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>دي</span>
              {/* فريم مطابق لـ Screenshot 122418 */}
              <a
                href="https://t.me/c/3510212703/179"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-extrabold text-xs sm:text-sm hover:scale-105 transition-all shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>الرسالة المثبتة</span>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ============================================================ */}
      {/* 2- تفاصيل الاوسكي */}
      {/* ============================================================ */}
      <section 
        id="osce-details-section" 
        className="scroll-mt-24 rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-5"
      >
        {/* Section Heading */}
        <div className="pb-3 border-b border-purple-200/60 dark:border-purple-800/40">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
            <span>2- تفاصيل الاوسكي</span>
          </h2>
        </div>

        {/* Details List */}
        <div className="space-y-3">
          {osceDetailsList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-800/50 border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-1.5 shrink-0"></span>
              <p className="leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
