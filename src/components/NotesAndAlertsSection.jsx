import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function NotesAndAlertsSection() {
  const notesList = [
    {
      type: 'direct_questions',
      mainText: (
        <span>
          الاسئلة بتبقى <span className="text-purple-600 dark:text-purple-400 font-black">مباشرة</span> بس لازم تذاكر عشان تعرف تتكلم / أمثلة :
        </span>
      ),
      subItems: [
        'Most Probable Diagnosis',
        'Name of Organism',
        'Investigations',
        'Line of TTT'
      ]
    },
    {
      type: 'tb',
      mainText: (
        <span>
          <span className="text-purple-600 dark:text-purple-400 font-black">د محمد غريب</span> إللي شرح المراجعة وال <span className="text-purple-600 dark:text-purple-400 font-black font-inter">TB</span> قبلا هيبقى موجود في لجنة من اللجان كممتحن يعني لازم تذاكر{' '}
          <a
            href="https://t.me/dromarbooks/169?comment=3132"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg border-2 border-purple-400 dark:border-purple-600 bg-purple-100/90 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 font-black hover:bg-purple-200 dark:hover:bg-purple-900 shadow-xs transition-all active:scale-95"
            title="فتح ملف TB الخاص بالدكتور على تليجرام"
          >
            <span>TB من ملفه</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>{' '}
          كويس
        </span>
      )
    },
    {
      type: 'text',
      mainText: (
        <span>
          هتروح ب<span className="text-purple-600 dark:text-purple-400 font-black">البالطو والسماعة</span>
        </span>
      )
    },
    {
      type: 'ln',
      mainText: (
        <span>
          لو نزلت حالة <span className="text-purple-600 dark:text-purple-400 font-black font-inter">L.N</span> ممكن يكون جانبه بيشنت ويقولك{' '}
          <a
            href="https://t.me/dromarbooks/169?comment=3133"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg border-2 border-purple-400 dark:border-purple-600 bg-purple-100/90 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 font-black font-inter hover:bg-purple-200 dark:hover:bg-purple-900 shadow-xs transition-all active:scale-95"
            title="فتح ملف وشرح Examine L.Node على تليجرام"
          >
            <span>(Examine L.Node)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>{' '}
          ويسألك في كل نظري الـ <span className="text-purple-600 dark:text-purple-400 font-black font-inter">Lymphadenopathy</span>
        </span>
      )
    },
    {
      type: 'text',
      mainText: (
        <div className="space-y-1.5">
          <p>
            المواضيع الاربعة <span className="text-purple-600 dark:text-purple-400 font-black font-inter">(Tetanus - HBV - H pylori - VHE)</span> مش هتنزل case لكن الدكتور ممكن يسألك فيهم <span className="text-purple-600 dark:text-purple-400 font-black">على قد الكلمتين</span> الي قالهم في المراجعة
          </p>
          <p>
            والمواضيع دي <span className="text-purple-600 dark:text-purple-400 font-black font-inter">(FUO - Fever with jaundice - Fever with rash - Fever with Lymphadenopathy)</span> غالبا <span className="text-purple-600 dark:text-purple-400 font-black">سؤال جوا case او سؤال شفوي</span> من الدكتور
          </p>
        </div>
      )
    },
    {
      type: 'text',
      mainText: (
        <span>
          اللجان بعضها بتدخل <span className="text-purple-600 dark:text-purple-400 font-black">بالترتيب</span> وبعضها <span className="text-purple-600 dark:text-purple-400 font-black">مش لازم</span>
        </span>
      )
    }
  ];

  return (
    <section 
      id="notes-section" 
      className="scroll-mt-24 rounded-3xl p-5 sm:p-6 bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/60 shadow-md backdrop-blur-md space-y-4"
    >
      {/* Title */}
      <div className="pb-3 border-b border-purple-200/60 dark:border-purple-800/40">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <span className="w-2.5 h-6 rounded-full bg-purple-600 inline-block"></span>
          <span>3- ملاحظات وتنبيهات</span>
        </h2>
      </div>

      {/* List items matching Screenshot 114534 */}
      <div className="space-y-3">
        {notesList.map((note, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-4 rounded-2xl bg-purple-50/50 dark:bg-slate-800/50 border border-purple-100 dark:border-purple-900/40 text-slate-800 dark:text-slate-100 text-sm sm:text-base font-bold shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2 shrink-0"></span>
            <div className="space-y-2 flex-1">
              <div className="leading-relaxed">{note.mainText}</div>
              
              {/* Optional sub-items */}
              {note.subItems && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pr-2">
                  {note.subItems.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200/80 dark:border-purple-800/60 text-purple-800 dark:text-purple-300 font-extrabold text-xs sm:text-sm font-inter"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Interactive Frame linking to resource */}
              {note.frame && (
                <div className="pt-1.5">
                  <a
                    href={note.frame.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-purple-300 dark:border-purple-700 bg-purple-100/90 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 text-xs sm:text-sm font-black hover:bg-purple-200 dark:hover:bg-purple-900 shadow-sm transition-all hover:scale-102 active:scale-95"
                  >
                    <note.frame.icon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>{note.frame.text}</span>
                  </a>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
