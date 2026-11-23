# Infection OSCE Guide — دليل أوسكي الأمراض المعدية

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-7e22ce?style=for-the-badge&logo=vercel)](https://infection-osce-omarabdelaty.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-9333ea?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

An interactive Arabic/English clinical OSCE revision and self-assessment web platform for **Infectious Diseases** medical students (Al-Azhar Faculty of Medicine — Batch 60), created by **Dr. Omar Abdel-Aty**.

🌐 **Live Site:** [https://infection-osce-omarabdelaty.vercel.app](https://infection-osce-omarabdelaty.vercel.app)

---

## ✨ Key Features

- **Structured Study Roadmap (`1- هتعمل ايه`)**: Prioritized study checklist of high-yield infectious disease topics (`Meningitis`, `TB`, `FUO`, `Rabies`, `Brucellosis`, `Pneumonia`, `Typhoid`, `Fever with jaundice`, `Fever with rash`, `Fever with Lymphadenopathy`, `H. pylori`) with direct links to clinical reference files and revision videos.
- **OSCE Exam Overview & Alerts (`2- تفاصيل الاوسكي` & `3- ملاحظات وتنبيهات`)**: Exam schedule, venue, station distribution, high-yield examiner tips, and clinical examination reminders.
- **Interactive Audio Revision Console (`AudioLecturePage`)**:
  - Custom pointer-capture audio player with smooth seeking, variable playback speed (`0.5x`–`2.5x`), volume control, and `±5s` skip buttons.
  - Synchronized **Verbatim Lecture Transcript** alongside **Clinical Analysis & High-Yield OSCE Pearls** (explaining concepts in Arabic while strictly preserving medical English terminology).
- **143 Verified Clinical OSCE Cases (`4- اختبر نفسك`)**:
  - Dedicated interactive case solver page with **705 progressive oral OSCE questions & curriculum-verified model answers** covering 11 infectious disease categories.
  - Built-in **90-second OSCE station countdown timer**, covered answers for active recall, quick 143-case switcher grid modal, search/category filters, and persistent progress tracking via `localStorage`.
- **High-Yield Oral Questions Bank (`اسئلة`)**: One-click copyable examiner questions with highlighted key clinical terms.
- **Bilingual RTL/LTR Experience**: Full Dark & Light mode support, subtle sound effects toggle, responsive mobile-first design, and SEO metadata (`sitemap.xml`, `robots.txt`, Schema.org `EducationalWebSite`).

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS 3 (RTL Arabic/English layout with Cairo, Amiri, and Inter fonts)
- **Icons & Feedback:** Lucide React, Canvas Confetti, Web Audio API
- **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Local Development
```bash
# 1. Clone the repository
git clone https://github.com/ahsozadromar-rgb/infection-osce-guide.git
cd infection-osce-guide

# 2. Install dependencies
npm install

# 3. (Optional) Configure environment variables for extra case generation
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```text
infection-osce-guide/
├── public/
│   ├── assets/              # UI graphics & medical icons
│   ├── audio/               # Revision lecture audio track
│   ├── docs/                # Clinical reference files
│   ├── robots.txt           # Search engine crawling rules
│   └── sitemap.xml          # XML sitemap
├── src/
│   ├── components/
│   │   ├── AudioLecturePage.jsx
│   │   ├── BackgroundIcons.jsx
│   │   ├── CaseSolverPage.jsx
│   │   ├── DoctorFixedAvatar.jsx
│   │   ├── Header.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── NotesAndAlertsSection.jsx
│   │   ├── PrioritiesAndOsceSection.jsx
│   │   ├── QuestionsSection.jsx
│   │   ├── SelfTestSection.jsx
│   │   └── SocialFooter.jsx
│   ├── data/
│   │   ├── casesData.js              # 143 verified OSCE cases & 705 Q&As
│   │   └── lectureTranscriptData.js  # Verbatim lecture transcript & analysis
│   ├── utils/
│   │   └── soundEffects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── LICENSE
├── package.json
└── README.md
```

---

## 📄 License

This project is open source and licensed under the [MIT License](LICENSE).
