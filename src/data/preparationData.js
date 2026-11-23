// Preparation & Priorities Data
export const preparationData = {
  "title": "هتعمل ايه",
  "subtitle": "خطة العمل وترتيب أولويات المذاكرة والتحضير لاوسكي الانفكشن",
  "cards": [
    {
      "id": "recording",
      "title": "تسجيل محاضرة المراجعة",
      "type": "audio_modal",
      "badge": "مهم جداً للجان",
      "desc": "تسجيل كامل (80 دقيقة) لشرح د. محمد غريب للمراجعة الإكلينيكية والـ TB مع مشغل متقدم وتفريغ نصي شامل لكل كلمة وسلايد.",
      "icon": "Headphones",
      "link": "#audio-player",
      "highlight": true,
      "actionText": "فتح التسجيل والتفريغ النصي"
    },
    {
      "id": "file",
      "title": "ملف المراجعة والعملي",
      "type": "external_link",
      "badge": "سلايدات الدكتور + هواري",
      "desc": "تحميل وتصفح ملف باوربوينت مراجعة د. غريب (94 سلايد) وملف العملي لهواري ومذكرات الفحص الإكلينيكي.",
      "icon": "FileText",
      "link": "/docs/Infectious_module_clinical_revision.pptx",
      "highlight": false,
      "actionText": "تحميل ملف المراجعة PPTX"
    },
    {
      "id": "video",
      "title": "فيديو الشرح",
      "type": "external_link",
      "badge": "مرئي وتطبيقي",
      "desc": "فيديوهات الفحص السريري وتكنيكات فحص الطحال والرقبة والعقد اللمفاوية بالفيديو التوضيحي.",
      "icon": "Video",
      "link": "https://youtube.com",
      "highlight": false,
      "actionText": "مشاهدة الفيديو"
    }
  ],
  "coreTopics": [
    {
      "name": "TB",
      "ar": "الدرن والسل الرئوي وخارج الرئة",
      "badge": "لجنة د. غريب",
      "priority": "Top 1"
    },
    {
      "name": "Meningitis",
      "ar": "التهاب السحايا الحاد والدرني والعلل العصبية",
      "badge": "فحص الرقبة والـ CSF",
      "priority": "Top 2"
    },
    {
      "name": "Rabies",
      "ar": "داء الكلب (السعار) وعضات الحيوانات و PEP",
      "badge": "فئات التعرض والمصل",
      "priority": "Top 3"
    },
    {
      "name": "Brucellosis",
      "ar": "الحمى المالطية والمتموجة والمفاصل",
      "badge": "حليب خام ورايت",
      "priority": "Top 4"
    },
    {
      "name": "FUO",
      "ar": "الحمى مجهولة السبب وخوارزمية الفحوصات",
      "badge": "المعايير والتشخيص",
      "priority": "Top 5"
    }
  ],
  "extendedTopics": [
    {
      "name": "CNS Infection",
      "details": "Meningitis & Encephalitis (Herpes, Enterovirus, Listeria)"
    },
    {
      "name": "Chest Infection",
      "details": "Tuberculosis (TB) & Pneumonia (CURB-65)"
    },
    {
      "name": "Hepatitis & Types of Jaundice",
      "details": "HAV, HBV, HCV, HEV in pregnancy, Pre/Hepatic/Post-hepatic"
    },
    {
      "name": "FUO",
      "details": "Fever of Unknown Origin & Systematic Workup"
    },
    {
      "name": "L.N Examination",
      "details": "Lymphadenopathy techniques, Waldeyer's ring, Virchow's node"
    },
    {
      "name": "Brucellosis",
      "details": "Undulating fever, Sacroiliitis, 6-week Doxycycline + Rifampin"
    },
    {
      "name": "Rabies",
      "details": "Cat I/II/III exposures, RIG infiltration, Vaccine schedule"
    },
    {
      "name": "GCS & ICU Scores",
      "details": "Glasgow Coma Scale (<=8 intubate), qSOFA, SOFA"
    }
  ]
};
