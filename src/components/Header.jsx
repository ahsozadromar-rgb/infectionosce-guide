import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Moon, 
  Sun, 
  Home, 
  Menu, 
  X,
  FileQuestion,
  AlertTriangle,
  HelpCircle,
  FileText,
  ListOrdered
} from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export default function Header({
  darkMode,
  setDarkMode,
  soundEnabled,
  setSoundEnabled,
  activeSection,
  setActiveSection,
  onGoHome
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'priorities-section', label: 'هتعمل ايه', icon: ListOrdered },
    { id: 'osce-details-section', label: 'تفاصيل الاوسكي', icon: FileText },
    { id: 'notes-section', label: 'ملاحظات وتنبيهات', icon: AlertTriangle },
    { id: 'questions-section', label: 'اسئلة', icon: HelpCircle },
    { id: 'selftest-section', label: 'اختبر نفسك', icon: FileQuestion },
  ];

  const handleNavClick = (id) => {
    playClickSound();
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (onGoHome) onGoHome();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHomeClick = () => {
    playClickSound();
    if (onGoHome) onGoHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-purple-200/60 dark:border-purple-900/40 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Home */}
        <div 
          onClick={handleHomeClick}
          className="flex items-center gap-3 cursor-pointer group"
          title="الرئيسية | Infection OSCE"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-violet-500 text-white flex items-center justify-center shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            <Home className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white font-inter">
              Infection OSCE
            </span>
          </div>
        </div>

        {/* Center Nav Pill Container (Matching Screenshot 113136) */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-purple-50/80 dark:bg-purple-950/50 border border-purple-200/70 dark:border-purple-800/60 shadow-inner">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Sound & Theme) */}
        <div className="flex items-center gap-2">
          
          {/* Sound Toggle */}
          <button
            onClick={() => {
              playClickSound();
              setSoundEnabled(!soundEnabled);
            }}
            className="p-2.5 rounded-full bg-purple-50 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors shadow-sm"
            title={soundEnabled ? 'كتم الصوت' : 'تشغيل الصوت'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-purple-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              playClickSound();
              setDarkMode(!darkMode);
            }}
            className="p-2.5 rounded-full bg-purple-50 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors shadow-sm"
            title={darkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
            aria-label="Theme Toggle"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-purple-50 dark:bg-slate-900 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 bg-white/95 dark:bg-slate-950/95 border-b border-purple-200/80 dark:border-purple-900/70 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-purple-100/60 dark:hover:bg-purple-900/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
