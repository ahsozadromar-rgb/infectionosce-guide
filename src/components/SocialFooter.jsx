import React from 'react';
import { playClickSound } from '../utils/soundEffects';

// Monochrome SVG Icons styled for Purple / Violet Theme
const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <rect width="20" height="15" x="2" y="4.5" rx="4" />
    <polygon points="10 9 15 12 10 15" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <path d="M19 12a7 7 0 1 0-7 7c2.5 0 4.5-1 5.5-2.5M12 8a4 4 0 1 0 0 8c1.5 0 2.5-.7 2.8-2M15 12c0-3-1.5-4-3-4"/>
  </svg>
);

const TwitterBirdIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5 2.592 2.592 0 0 1-2.59-2.5 2.592 2.592 0 0 1 2.59-2.5c.34 0 .66.06.96.17V9.88a5.77 5.77 0 0 0-.96-.08A5.78 5.78 0 0 0 4 15.58a5.78 5.78 0 0 0 5.78 5.78 5.78 5.78 0 0 0 5.78-5.78V8.92a7.48 7.48 0 0 0 4.44 1.48V7.27a4.29 4.29 0 0 1-3.4-1.45z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <path d="M6 16.5a3.5 3.5 0 0 1 .5-6.96A5 5 0 0 1 16 8.5a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
    <line x1="8" y1="12" x2="8" y2="16.5"/>
    <line x1="11" y1="10" x2="11" y2="16.5"/>
    <line x1="14" y1="11" x2="14" y2="16.5"/>
  </svg>
);

const SarahahIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <rect width="18" height="18" x="3" y="3" rx="4" />
    <path d="M8.5 10c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2 0 1.5-1.5 2-2.5 2.5S10 13.5 10 15h4.5" />
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-[1.75]" viewBox="0 0 24 24">
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);

const socialLinks = [
  {
    name: 'YouTube',
    title: 'قناة اليوتيوب الطبية',
    url: 'https://www.youtube.com/channel/UCqF9IG00R9btCDWXnlIHlVQ',
    icon: YoutubeIcon
  },
  {
    name: 'Facebook 1',
    title: 'الصفحة الرسمية 1',
    url: 'https://www.facebook.com/Dr.OmarAbdelAty/',
    icon: FacebookIcon
  },
  {
    name: 'Facebook 2',
    title: 'الصفحة الرسمية 2',
    url: 'https://www.facebook.com/@Dr.omarabdelaty95',
    icon: FacebookIcon
  },
  {
    name: 'Instagram',
    title: 'حساب الإنستغرام',
    url: 'https://www.instagram.com/dr.omarabdelaty/',
    icon: InstagramIcon
  },
  {
    name: 'Threads',
    title: 'ثريدز',
    url: 'https://www.threads.net/@dr.omarabdelaty',
    icon: ThreadsIcon
  },
  {
    name: 'Twitter / X',
    title: 'منصة X / تويتر',
    url: 'https://twitter.com/Dr_OmarAbdelAty',
    icon: TwitterBirdIcon
  },
  {
    name: 'TikTok',
    title: 'تيك توك',
    url: 'https://www.tiktok.com/@dr_omarabdelaty?lang=ar',
    icon: TikTokIcon
  },
  {
    name: 'SoundCloud',
    title: 'ساوند كلاود (تسجيلات صوتية)',
    url: 'https://soundcloud.com/omar-abdel-aty-800109992',
    icon: SoundCloudIcon
  },
  {
    name: 'Sarahah',
    title: 'صارحني (استفسارات الطلاب)',
    url: 'https://sarahah.pro/omarabdelaty',
    icon: SarahahIcon
  },
  {
    name: 'Telegram',
    title: 'قناة وجروب التليجرام والمذكرات',
    url: 'https://telegram.me/dromarbooks',
    icon: TelegramIcon
  }
];

export default function SocialFooter() {
  return (
    <footer className="relative z-10 py-10 px-4 mt-12 text-center">
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Calligraphy Card */}
        <div className="inline-flex items-center justify-center relative overflow-hidden rounded-[26px] px-10 sm:px-14 py-3.5 sm:py-4 bg-white/95 dark:bg-slate-900/90 border border-purple-200 dark:border-purple-900/50 shadow-[0_4px_25px_rgba(147,51,234,0.1)] backdrop-blur-md">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-violet-500/10 to-transparent pointer-events-none" />

          <p
            dir="rtl"
            lang="ar"
            className="font-amiri text-2xl sm:text-3xl text-purple-950 dark:text-purple-200 font-normal select-none tracking-wide relative z-10"
            style={{ textShadow: '0 0 16px rgba(168, 85, 247, 0.4)' }}
          >
            بالتوفيق إن شاء الله
          </p>
        </div>

        {/* Unified Social Pill Container */}
        <div>
          <div className="inline-flex items-center justify-center gap-3 sm:gap-5 px-6 py-2.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-purple-200/80 dark:border-purple-900/40 shadow-sm backdrop-blur-md flex-wrap">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClickSound()}
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:scale-125 p-1 flex items-center justify-center"
                  title={item.title}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright Line */}
        <div className="pt-1">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-inter">
            © 2026 • Dr. Omar Abdel-Aty • Infection OSCE
          </p>
        </div>

      </div>
    </footer>
  );
}
