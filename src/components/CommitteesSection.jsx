import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  User, 
  Building2, 
  Calendar, 
  Copy, 
  Check, 
  MapPin, 
  Award, 
  Filter, 
  ChevronDown 
} from 'lucide-react';
import { studentsData } from '../data/studentsData';
import { playClickSound } from '../utils/soundEffects';

// Helper to normalize Arabic strings for forgiving search
function normalizeArabic(str) {
  if (!str) return '';
  return str
    .toString()
    .replace(/[\u064B-\u065F\u0670]/g, '') // Tashkeel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[\u06CC]/g, 'ي')
    .replace(/[\u06BE]/g, 'ه')
    .replace(/[-_\s]+/g, '')
    .trim()
    .toLowerCase();
}

export default function CommitteesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedCommittee, setSelectedCommittee] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const [locationModalStudent, setLocationModalStudent] = useState(null);

  // Unique committees list for dropdown
  const allCommittees = useMemo(() => {
    const comms = Array.from(new Set(studentsData.map(s => s.committee)));
    return comms;
  }, []);

  // Filter students based on search and filters
  const filteredStudents = useMemo(() => {
    const qNorm = normalizeArabic(searchQuery);

    return studentsData.filter(s => {
      // Group filter
      if (selectedGroup !== 'all' && s.group !== selectedGroup) {
        return false;
      }

      // Committee filter
      if (selectedCommittee !== 'all' && s.committee !== selectedCommittee) {
        return false;
      }

      // Search query (matches name or seating number)
      if (qNorm) {
        const nameNorm = normalizeArabic(s.name);
        const seatingNorm = normalizeArabic(s.seating);
        const commNorm = normalizeArabic(s.committee);
        return nameNorm.includes(qNorm) || seatingNorm.includes(qNorm) || commNorm.includes(qNorm);
      }

      return true;
    });
  }, [searchQuery, selectedGroup, selectedCommittee]);

  // Handle Copy Student Info
  const handleCopy = (student) => {
    playClickSound();
    const infoText = `بيانات الطالب - باطنة أوسكي:
الاسم: ${student.name}
رقم الجلوس: ${student.seating}
رقم اللجنة: ${student.committee}
المستشفى: ${student.hospital}
موعد الامتحان: ${student.examDate} (${student.examTime})
المكان: ${student.locationDetails}`;

    navigator.clipboard.writeText(infoText).then(() => {
      setCopiedId(student.id);
      setTimeout(() => setCopiedId(null), 2200);
    }).catch(() => {
      // Fallback
    });
  };

  const handleClearSearch = () => {
    playClickSound();
    setSearchQuery('');
  };

  return (
    <section 
      id="committees-section"
      className="scroll-mt-24 rounded-3xl p-5 sm:p-7 bg-white/95 dark:bg-slate-900/90 border border-red-200/80 dark:border-red-900/60 shadow-md backdrop-blur-md space-y-6"
    >
      {/* Title & Subtitle */}
      <div className="pb-4 border-b border-red-200/60 dark:border-red-800/40 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-red-600 inline-block"></span>
            <span>اعرف لجنتك</span>
          </h2>

          {/* Results Badge */}
          <div className="px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-xs sm:text-sm font-extrabold text-red-700 dark:text-red-300">
            النتائج: {filteredStudents.length} طالب
          </div>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
          اكتب اسمك او رقم جلوسك علشان تعرف انت هتمتحن في انهي لجنة ورقم لجنتك ومكان الامتحان
        </p>
      </div>

      {/* Search Input Box */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(24);
          }}
          placeholder="اكتب اسمك أو رقم جلوسك..."
          className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white dark:bg-slate-800/80 border-2 border-red-200 dark:border-red-900/60 focus:border-red-500 dark:focus:border-red-500 text-slate-900 dark:text-white placeholder-slate-400 font-bold text-sm sm:text-base outline-hidden shadow-xs transition-all"
        />
        <Search className="w-5 h-5 text-red-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white absolute left-4 top-1/2 -translate-y-1/2 transition-colors"
            title="مسح البحث"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        
        {/* Group Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 ml-1">
            <Filter className="w-4 h-4 text-red-500" />
            <span>تصفية:</span>
          </div>

          {/* All */}
          <button
            onClick={() => { playClickSound(); setSelectedGroup('all'); setSelectedCommittee('all'); setVisibleCount(24); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              selectedGroup === 'all' && selectedCommittee === 'all'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-red-200/60 dark:border-red-900/40 hover:bg-red-100 dark:hover:bg-slate-700'
            }`}
          >
            الكل ({studentsData.length} طالب)
          </button>

          {/* 4th Year */}
          <button
            onClick={() => { playClickSound(); setSelectedGroup('الفرقة الرابعة'); setSelectedCommittee('all'); setVisibleCount(24); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              selectedGroup === 'الفرقة الرابعة' && selectedCommittee === 'all'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-red-200/60 dark:border-red-900/40 hover:bg-red-100 dark:hover:bg-slate-700'
            }`}
          >
            الفرقة الرابعة (385)
          </button>

          {/* Excuses */}
          <button
            onClick={() => { playClickSound(); setSelectedGroup('أعذار'); setSelectedCommittee('all'); setVisibleCount(24); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              selectedGroup === 'أعذار'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-red-200/60 dark:border-red-900/40 hover:bg-red-100 dark:hover:bg-slate-700'
            }`}
          >
            لجنة الأعذار (19)
          </button>

          {/* Repeats */}
          <button
            onClick={() => { playClickSound(); setSelectedGroup('باقون للإعادة'); setSelectedCommittee('all'); setVisibleCount(24); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
              selectedGroup === 'باقون للإعادة'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-red-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-red-200/60 dark:border-red-900/40 hover:bg-red-100 dark:hover:bg-slate-700'
            }`}
          >
            لجنة الرسوب (8)
          </button>
        </div>

        {/* Specific Committee Dropdown Filter */}
        <div className="relative">
          <select
            value={selectedCommittee}
            onChange={(e) => {
              playClickSound();
              setSelectedCommittee(e.target.value);
              setSelectedGroup('all');
              setVisibleCount(24);
            }}
            className="appearance-none pr-3 pl-8 py-1.5 rounded-xl bg-red-50 dark:bg-slate-800 border border-red-200 dark:border-red-800 text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 focus:outline-hidden cursor-pointer"
          >
            <option value="all">كل اللجان ({allCommittees.length} لجنة)</option>
            {allCommittees.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

      </div>

      {/* Cards Grid */}
      {filteredStudents.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-red-50/50 dark:bg-slate-800/40 border border-red-100 dark:border-red-900/40 text-slate-600 dark:text-slate-400 font-bold">
          لا يوجد طالب مطابق لهذا الاسم أو رقم الجلوس، تأكد من كتابة الاسم أو رقم الجلوس بشكل صحيح.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.slice(0, visibleCount).map((student) => (
            <div
              key={student.id}
              className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-slate-800/90 border border-red-100 dark:border-red-900/40 hover:border-red-300 dark:hover:border-red-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-3.5"
            >
              {/* Card Header: Group Badge + Seating Number */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                  {student.group}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white font-inter shadow-xs tracking-wider">
                  # {student.seating}
                </span>
              </div>

              {/* Student Name */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <div className="p-1.5 rounded-full bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 mt-0.5 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {student.name}
                </h3>
              </div>

              {/* PROMINENT COMMITTEE DISPLAY (User requested: "اهم حاجة لازم تبان هي رقم اللجنة فخليها مميزة في البطاقات") */}
              <div className="p-3 rounded-2xl bg-gradient-to-r from-red-50 via-purple-50 to-indigo-50 dark:from-red-950/40 dark:via-purple-950/40 dark:to-indigo-950/40 border-2 border-red-300 dark:border-red-800 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400">اللجنة الامتحانية</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">رقم اللجنة:</span>
                  </div>
                </div>

                <span className="text-base sm:text-lg font-black text-red-700 dark:text-red-300 px-3 py-1 rounded-xl bg-white dark:bg-slate-900 border border-red-200 dark:border-red-700 shadow-xs">
                  {student.committee}
                </span>
              </div>

              {/* Info Details Grid: Hospital & Exam Date */}
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 pt-0.5">
                {/* Hospital */}
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400">المستشفى:</span>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200">{student.hospital}</span>
                  </div>
                </div>

                {/* Exam Date */}
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400">يوم الامتحان:</span>
                    <span className="text-xs font-black text-red-600 dark:text-red-400">{student.examDate}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleCopy(student)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                    copiedId === student.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-50 dark:bg-slate-700/80 text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-slate-700 active:scale-95'
                  }`}
                  title="نسخ بيانات الطالب بالكامل"
                >
                  {copiedId === student.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>نسخ بياناتي</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => { playClickSound(); setLocationModalStudent(student); }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  title="عرض تفاصيل المكان"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>الموقع</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Show More Button if results exceed visibleCount */}
      {filteredStudents.length > visibleCount && (
        <div className="text-center pt-2">
          <button
            onClick={() => { playClickSound(); setVisibleCount(prev => prev + 36); }}
            className="px-6 py-2.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all hover:scale-102 active:scale-95"
          >
            عرض المزيد ({filteredStudents.length - visibleCount} طالب متبقي)
          </button>
        </div>
      )}

      {/* Location Details Modal */}
      {locationModalStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl p-6 bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-black text-slate-900 dark:text-white">تفاصيل ومكان الامتحان</h3>
              </div>
              <button
                onClick={() => setLocationModalStudent(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-sm font-bold text-slate-700 dark:text-slate-300">
              <p className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-slate-500">الطالب:</span>
                <span className="font-black text-slate-900 dark:text-white">{locationModalStudent.name}</span>
              </p>
              <p className="flex items-center justify-between p-3 rounded-xl bg-red-50/70 dark:bg-red-950/40 border border-red-200/60 dark:border-red-900/60">
                <span className="text-red-700 dark:text-red-300">رقم اللجنة:</span>
                <span className="font-black text-red-600 dark:text-red-400 text-base">{locationModalStudent.committee}</span>
              </p>
              <p className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-slate-500">المستشفى:</span>
                <span className="font-black text-slate-900 dark:text-white">{locationModalStudent.hospital}</span>
              </p>
              <p className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <span className="text-slate-500">الموعد:</span>
                <span className="font-black text-red-600">{locationModalStudent.examDate} - {locationModalStudent.examTime}</span>
              </p>
              <div className="p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200 text-xs sm:text-sm font-bold leading-relaxed">
                📍 {locationModalStudent.locationDetails}
              </div>
            </div>

            <button
              onClick={() => setLocationModalStudent(null)}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-sm transition-all"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
