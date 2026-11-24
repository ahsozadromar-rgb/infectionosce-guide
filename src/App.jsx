import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BackgroundIcons from './components/BackgroundIcons';
import DoctorFixedAvatar from './components/DoctorFixedAvatar';
import HeroBanner from './components/HeroBanner';
import PrioritiesAndOsceSection from './components/PrioritiesAndOsceSection';
import NotesAndAlertsSection from './components/NotesAndAlertsSection';
import CommitteesSection from './components/CommitteesSection';
import QuestionsSection from './components/QuestionsSection';
import SelfTestSection from './components/SelfTestSection';
import AudioLecturePage from './components/AudioLecturePage';
import HusseinSabryRecordingsPage from './components/HusseinSabryRecordingsPage';
import CaseSolverPage from './components/CaseSolverPage';
import SocialFooter from './components/SocialFooter';
import { getSoundEnabled, setSoundEnabled as saveSoundSetting, playClickSound } from './utils/soundEffects';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('infection_osce_dark_mode');
    return saved !== null ? saved === 'true' : true;
  });

  // Sound state
  const [soundEnabled, setSoundEnabled] = useState(() => getSoundEnabled());

  // Page View: 'home' | 'lecture' | 'hussein-sabry' | 'case'
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#lecture') return 'lecture';
    if (hash === '#hussein-sabry') return 'hussein-sabry';
    if (hash.startsWith('#case-')) return 'case';
    return 'home';
  });

  // Active Case ID for case solver page
  const [currentCaseId, setCurrentCaseId] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#case-')) {
      return parseInt(hash.replace('#case-', ''), 10) || 1;
    }
    return 1;
  });

  // Active section tracking & scroll
  const [activeSection, setActiveSection] = useState('priorities-section');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync hash changes (Browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#lecture') {
        setCurrentPage('lecture');
      } else if (hash === '#hussein-sabry') {
        setCurrentPage('hussein-sabry');
      } else if (hash.startsWith('#case-')) {
        const id = parseInt(hash.replace('#case-', ''), 10) || 1;
        setCurrentCaseId(id);
        setCurrentPage('case');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('infection_osce_dark_mode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  // Sync sound settings
  useEffect(() => {
    saveSoundSetting(soundEnabled);
  }, [soundEnabled]);

  // Track scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLecturePage = () => {
    setCurrentPage('lecture');
    window.location.hash = 'lecture';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openHusseinSabryPage = () => {
    playClickSound();
    setCurrentPage('hussein-sabry');
    window.location.hash = 'hussein-sabry';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCasePage = (id) => {
    playClickSound();
    setCurrentCaseId(id);
    setCurrentPage('case');
    window.location.hash = `case-${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToSelfTest = () => {
    setCurrentPage('home');
    window.location.hash = 'selftest-section';
    setTimeout(() => {
      const el = document.getElementById('selftest-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 selection:bg-purple-600 selection:text-white">
      
      {/* Background Ambience */}
      <BackgroundIcons />

      {/* Ambient Doctor Fixed Avatar (bottom right) */}
      <DoctorFixedAvatar />

      {/* Sticky Header Bar */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onGoHome={backToHome}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-4 pb-12">
        {currentPage === 'lecture' ? (
          /* Dedicated Separate Page for Audio Lecture and Full Transcript */
          <AudioLecturePage onBackToHome={backToHome} />
        ) : currentPage === 'hussein-sabry' ? (
          /* Dedicated Separate Page for Dr. Hussein Sabry Recordings */
          <HusseinSabryRecordingsPage onBackToHome={backToHome} />
        ) : currentPage === 'case' ? (
          /* Dedicated Separate Page for Case Solver (Not a modal!) */
          <CaseSolverPage 
            caseId={currentCaseId} 
            onBackToSelfTest={backToSelfTest} 
            onOpenCase={openCasePage} 
          />
        ) : (
          /* Home Page Sections */
          <div className="space-y-8 sm:space-y-12">
            
            {/* Hero Section */}
            <HeroBanner />

            {/* Sections 1 & 2: 1- هتعمل ايه & 2- تفاصيل الاوسكي */}
            <PrioritiesAndOsceSection 
              onOpenLecturePage={openLecturePage}
              onOpenHusseinSabry={openHusseinSabryPage}
            />

            {/* Section 3: 3- ملاحظات وتنبيهات */}
            <NotesAndAlertsSection />

            {/* Section: اعرف لجنتك */}
            <CommitteesSection />

            {/* Section: اسئلة */}
            <QuestionsSection />

            {/* Section 4: 4- اختبر نفسك (ينقل للصفحة المنفصلة عند النقر) */}
            <SelfTestSection onOpenCase={openCasePage} />

          </div>
        )}
      </main>

      {/* Social Footer */}
      <SocialFooter />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/40 hover:-translate-y-1 transition-all animate-fadeIn"
          title="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
