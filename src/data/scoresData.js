// Important Medical Scores Data for Infection OSCE
// Based on official OSCE sheets: GCS, qSOFA, SOFA, CURB-65, Child-Turcotte-Pugh (CTP)

export const scoresData = [
  {
    id: 'gcs',
    shortName: 'GCS',
    name: 'Glasgow Coma Scale (GCS)',
    badge: '10 حالات',
    subtitle: 'تقييم درجة الوعي والتدهور العصبي وقرار تأمين مجرى الهواء (Intubation)',
    icon: 'Brain',
    color: 'purple',
    summary: {
      purpose: 'Assess consciousness, monitor neurological status, detect clinical deterioration, guide airway and ICU decisions.',
      totalScore: 15,
      categories: [
        {
          name: '(E) Eye Opening (1-4)',
          items: [
            { label: 'Spontaneous', score: 4 },
            { label: 'To speech / sound', score: 3 },
            { label: 'To pain / pressure', score: 2 },
            { label: 'No response', score: 1 },
          ]
        },
        {
          name: '(V) Verbal Response (1-5)',
          items: [
            { label: 'Oriented', score: 5 },
            { label: 'Confused conversation', score: 4 },
            { label: 'Inappropriate words', score: 3 },
            { label: 'Incomprehensible sounds', score: 2 },
            { label: 'No response', score: 1 },
          ]
        },
        {
          name: '(M) Motor Response (1-6)',
          items: [
            { label: 'Obeys commands', score: 6 },
            { label: 'Localizes pain', score: 5 },
            { label: 'Withdraws from pain', score: 4 },
            { label: 'Abnormal flexion (Decorticate)', score: 3 },
            { label: 'Abnormal extension (Decerebrate)', score: 2 },
            { label: 'No response', score: 1 },
          ]
        }
      ],
      interpretation: [
        { range: '13 – 15', label: 'Mild Impairment' },
        { range: '9 – 12', label: 'Moderate Impairment' },
        { range: '≤ 8', label: 'Severe Coma (Secure Airway → Intubation)', alert: true },
      ],
      keyNotes: [
        'GCS is NOT a diagnostic tool, but a severity and monitoring tool.',
        'Motor score is the strongest predictor of clinical outcome (assess motor first if time is limited).',
        'Document components individually (e.g. E4V5M6 = 15) and reassess regularly.',
        'Causes of ↓ GCS: Meningitis, Encephalitis, Severe Sepsis / Septic shock, Cerebral malaria, Hypoglycemia.',
        'Red Flags: Rapid fall in GCS / GCS ≤ 8 / Fever → Urgent ICU / neuroimaging / IV antibiotics.'
      ]
    },
    questions: [
      {
        id: 1,
        caseTitle: 'GCS – Case 1',
        scenario: 'مريض يفتح عينيه تلقائيًا (Spontaneous)، ويتحدث بصورة طبيعية (Oriented)، وينفذ الأوامر (Obeys commands). احسب GCS.',
        options: [
          { id: 'A', text: '12' },
          { id: 'B', text: '15' },
          { id: 'C', text: '13' },
          { id: 'D', text: '14' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'تلقائياً (Spontaneous)', points: 4 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'طبيعي ومدرك (Oriented)', points: 5 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'ينفذ الأوامر (Obeys commands)', points: 6 }
        ],
        totalCalculated: '4 + 5 + 6 = 15',
        classification: 'درجة طبيعية تماماً (Normal / Mild: 13-15)',
        clinicalNote: 'الدرجة 15 هي الدرجة القصوى في مقياس غلاسكو للغيبوبة.'
      },
      {
        id: 2,
        caseTitle: 'GCS – Case 2',
        scenario: 'مريض اشتباه التهاب سحائي، يفتح عينيه عند مناداته بالاسم (To speech)، كلامه مشوش وغير مترابط (Confused)، ولكنه يحدد مكان الألم بدقة ويبعد يد الفاحص (Localizes pain). احسب GCS.',
        options: [
          { id: 'A', text: '10' },
          { id: 'B', text: '12' },
          { id: 'C', text: '14' },
          { id: 'D', text: '11' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'عند النداء والكلام (To speech)', points: 3 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'مشوش وغير مدرك للزمان والمكان (Confused)', points: 4 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'يحدد موضع الألم (Localizes pain)', points: 5 }
        ],
        totalCalculated: '3 + 4 + 5 = 12',
        classification: 'تدهور متوسط (Moderate Impairment: 9-12)',
        clinicalNote: 'يتطلب مراقبة عصبية لصيقة كل ساعة وإعادة تقييم مستمرة.'
      },
      {
        id: 3,
        caseTitle: 'GCS – Case 3',
        scenario: 'مريض سيبسيس متدهور، يفتح عينيه فقط عند التنبيه المؤلم (To pain)، ويصدر أصوات تأوه غير مفهومة (Incomprehensible sounds)، ويسحب طرفه مبتعداً عن الألم (Withdraws from pain). احسب GCS وما التصنيف؟',
        options: [
          { id: 'A', text: '8 (Severe Coma)' },
          { id: 'B', text: '9 (Moderate Impairment)' },
          { id: 'C', text: '7 (Severe Coma)' },
          { id: 'D', text: '10 (Moderate Impairment)' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'عند التنبيه المؤلم (To pain)', points: 2 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'أصوات غير مفهومة (Incomprehensible)', points: 2 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'يسحب طرفه مبتعداً (Withdraws from pain)', points: 4 }
        ],
        totalCalculated: '2 + 2 + 4 = 8',
        classification: 'غيبوبة شديدة (Severe Coma: ≤ 8)',
        clinicalNote: 'قاعدة ذهبية: GCS ≤ 8 يستوجب تأمين مجرى الهواء بالأنبوبة الحنجرية (Intubation) ودخول العناية المركزة فوراً.'
      },
      {
        id: 4,
        caseTitle: 'GCS – Case 4',
        scenario: 'مريض ملاريا مخية (Cerebral Malaria)، لا يفتح عينيه نهائياً للمؤثرات (No eye opening)، ولا يصدر أي صوت (No verbal response)، وعند فحص الألم يظهر وضع التيبس الانبساطي غير الطبيعي (Decerebrate extension). احسب GCS.',
        options: [
          { id: 'A', text: '3' },
          { id: 'B', text: '4' },
          { id: 'C', text: '5' },
          { id: 'D', text: '6' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'لا استجابة نهائياً (No response)', points: 1 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'لا استجابة نهائياً (No response)', points: 1 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'تيبس انبساطي (Decerebrate extension)', points: 2 }
        ],
        totalCalculated: '1 + 1 + 2 = 4',
        classification: 'غيبوبة عميقة شديدة (Severe Coma)',
        clinicalNote: 'وضع Decerebrate (امتداد غير طبيعي) يعطي نقطتين ويشير إلى تأثر جذع الدماغ.'
      },
      {
        id: 5,
        caseTitle: 'GCS – Case 5',
        scenario: 'مريض يفتح عينيه استجابة للصوت (To speech)، يلفظ كلمات عشوائية غير مناسبة للسياق (Inappropriate words)، ويسحب يده عند التنبيه المؤلم (Withdraws from pain). احسب GCS.',
        options: [
          { id: 'A', text: '9' },
          { id: 'B', text: '10' },
          { id: 'C', text: '11' },
          { id: 'D', text: '12' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'استجابة للصوت (To speech)', points: 3 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'كلمات غير مناسبة (Inappropriate words)', points: 3 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'سحب الطرف (Withdraws from pain)', points: 4 }
        ],
        totalCalculated: '3 + 3 + 4 = 10',
        classification: 'تدهور متوسط (Moderate Impairment: 9-12)',
        clinicalNote: 'الفرق بين Inappropriate words (3 نقاط) و Incomprehensible sounds (نقطتان).'
      },
      {
        id: 6,
        caseTitle: 'GCS – Case 6',
        scenario: 'مريض في غيبوبة عميقة نتيجة صدمة تسممية، لا يستجيب بفتح العين نهائياً (1)، ولا يصدر أي صوت (1)، ولا يوجد أي استجابة حركية (1). ما هي درجة GCS وما دلالتها؟',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '3' },
          { id: 'D', text: '5' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'لا استجابة إطلاقاً', points: 1 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'لا استجابة إطلاقاً', points: 1 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'لا استجابة إطلاقاً', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 = 3',
        classification: 'أدنى درجة ممكنة في المقياس (Lowest Possible GCS)',
        clinicalNote: 'لا توجد درجة صفر في مقياس GCS؛ أقل مجموع ممكن هو 3 وأعلى مجموع هو 15.'
      },
      {
        id: 7,
        caseTitle: 'GCS – Case 7',
        scenario: 'مريض يفتح عينيه تلقائياً (Spontaneous)، لكنه مشوش في الزمان والمكان (Confused)، وينفذ الأوامر الحركية بطريقة صحيحة وسريعة (Obeys commands). احسب GCS.',
        options: [
          { id: 'A', text: '13' },
          { id: 'B', text: '14' },
          { id: 'C', text: '15' },
          { id: 'D', text: '12' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'تلقائياً (Spontaneous)', points: 4 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'كلام مشوش (Confused)', points: 4 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'ينفذ الأوامر (Obeys commands)', points: 6 }
        ],
        totalCalculated: '4 + 4 + 6 = 14',
        classification: 'تدهور طفيف (Mild Impairment: 13-15)',
        clinicalNote: 'أي نقص عن 15 يُعد GCS < 15 وهو معيار إيجابي في qSOFA.'
      },
      {
        id: 8,
        caseTitle: 'GCS – Case 8',
        scenario: 'مريض مصاب بالتهاب الدماغ (Encephalitis)، يفتح عينيه للألم فقط (To pain)، لا يتحدث ولا يصدر صوتاً (No verbal response)، وعند الألم يثني ذراعيه بشكل غير طبيعي وضع الانثناء الدماغي (Decorticate flexion). احسب GCS.',
        options: [
          { id: 'A', text: '6' },
          { id: 'B', text: '7' },
          { id: 'C', text: '8' },
          { id: 'D', text: '5' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'للألم فقط (To pain)', points: 2 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'لا صوت (No response)', points: 1 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'انثناء غير طبيعي (Decorticate flexion)', points: 3 }
        ],
        totalCalculated: '2 + 1 + 3 = 6',
        classification: 'غيبوبة شديدة (Severe Coma: ≤ 8)',
        clinicalNote: 'وضع Decorticate (انثناء غير طبيعي) يعطي 3 نقاط، بينما Decerebrate يعطي نقطتين.'
      },
      {
        id: 9,
        caseTitle: 'GCS – Case 9',
        scenario: 'مريض مسن مصاب بعدوى صدرية، يفتح عينيه بالنداء (To speech)، يستخدم كلمات غير ملائمة (Inappropriate words)، ويحدد مكان الألم ويدفع الفاحص (Localizes pain). احسب GCS.',
        options: [
          { id: 'A', text: '10' },
          { id: 'B', text: '11' },
          { id: 'C', text: '12' },
          { id: 'D', text: '9' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'فتح العينين (Eye)', desc: 'بالنداء (To speech)', points: 3 },
          { label: 'الاستجابة اللفظية (Verbal)', desc: 'كلمات غير ملائمة (Inappropriate words)', points: 3 },
          { label: 'الاستجابة الحركية (Motor)', desc: 'تحديد موضع الألم (Localizes pain)', points: 5 }
        ],
        totalCalculated: '3 + 3 + 5 = 11',
        classification: 'تدهور متوسط (Moderate Impairment: 9-12)',
        clinicalNote: 'الاستجابة الحركية هي المؤشر الأقوى للإنذار السريري (Strongest predictor of outcome).'
      },
      {
        id: 10,
        caseTitle: 'GCS – Case 10',
        scenario: 'أي من درجات GCS التالية تمثل علامة حمراء حرجة (Red Flag) تستوجب حجز العناية المركزة وتأمين مجرى الهواء بالأنبوبة الحنجرية (Intubation) فوراً؟',
        options: [
          { id: 'A', text: 'GCS = 11' },
          { id: 'B', text: 'GCS ≤ 8' },
          { id: 'C', text: 'GCS = 13' },
          { id: 'D', text: 'GCS = 10' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'العلامة الحرجة (Red Flag)', desc: 'GCS ≤ 8 أو تدهور سريع مفاجئ مع حمى', points: 8 }
        ],
        totalCalculated: 'GCS ≤ 8',
        classification: 'مؤشر فوري للـ Intubation وتأمين التنفس',
        clinicalNote: 'المريض يفقد القدرة على حماية مجرى الهواء الانعكاسي (Reflex airway protection) عند GCS ≤ 8.'
      }
    ]
  },
  {
    id: 'qsofa',
    shortName: 'qSOFA',
    name: 'quick SOFA (qSOFA)',
    badge: '10 حالات',
    subtitle: 'الفحص السريري السريع عند سرير المريض لكشف خطورة الإنتان والتدهور الحاد بدون تحاليل',
    icon: 'Zap',
    color: 'amber',
    summary: {
      purpose: 'Quick sepsis assessment + Screening at bedside. No laboratory tests needed.',
      criteriaCount: 3,
      criteriaList: [
        { key: 'A', name: 'Altered Mentation', rule: 'GCS < 15', points: '1 point' },
        { key: 'B', name: 'Blood Pressure (SBP)', rule: 'SBP ≤ 100 mmHg', points: '1 point' },
        { key: 'R', name: 'Respiratory Rate', rule: 'RR ≥ 22 / min', points: '1 point' }
      ],
      scoringRule: 'qSOFA ≥ 2 points → High risk of poor outcome / prolonged ICU stay or in-hospital mortality → Consider urgent intervention / Sepsis bundle.',
      keyNotes: [
        'qSOFA does NOT require laboratory investigations (unlike SOFA).',
        'Used as a quick bedside screening tool for patients outside the ICU.',
        'Mnemonic: "A - B - R" (Altered mentation, Blood pressure, Respiratory rate).'
      ]
    },
    questions: [
      {
        id: 1,
        caseTitle: 'qSOFA – Case 1',
        scenario: 'مريض اشتباه عدوى مسالك بولية، واعي تماماً (GCS = 15)، ضغط الدم 90/60 mmHg، ومعدل التنفس 24/min. احسب سكور qSOFA وما هو التقييم؟',
        options: [
          { id: 'A', text: '1 (Low risk)' },
          { id: 'B', text: '2 (High risk – تدخّل عاجل)' },
          { id: 'C', text: '3 (High risk)' },
          { id: 'D', text: '0 (Low risk)' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الوعي (Altered Mentation)', desc: 'GCS = 15 (طبيعي)', points: 0 },
          { label: 'ضغط الدم الانقباضي (SBP)', desc: '90 mmHg (≤ 100 mmHg)', points: 1 },
          { label: 'معدل التنفس (Resp Rate)', desc: '24 / min (≥ 22 / min)', points: 1 }
        ],
        totalCalculated: '0 + 1 + 1 = 2',
        classification: 'إيجابي عالي الخطورة (qSOFA ≥ 2: High Risk)',
        clinicalNote: 'qSOFA ≥ 2 يمثل إنذاراً مبكراً لوجود إنتان أو صدمة تسممية محتملة تستلزم سوائل ومضادات حيوية عاجلة.'
      },
      {
        id: 2,
        caseTitle: 'qSOFA – Case 2',
        scenario: 'مريضة حرارتها 39°C، واعية تماماً (GCS 15)، ضغط الدم 120/80 mmHg، ومعدل التنفس 20/min. احسب qSOFA.',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'الوعي (Mentation)', desc: 'GCS 15 (طبيعي)', points: 0 },
          { label: 'الضغط (SBP)', desc: '120 mmHg (> 100)', points: 0 },
          { label: 'التنفس (RR)', desc: '20 / min (< 22)', points: 0 }
        ],
        totalCalculated: '0 + 0 + 0 = 0',
        classification: 'سلبي (Low risk of poor outcome: 0 points)',
        clinicalNote: 'الحمى بحد ذاتها ليست جزءاً من حساب qSOFA (qSOFA يعتمد فقط على الوعي، والضغط، والتنفس).'
      },
      {
        id: 3,
        caseTitle: 'qSOFA – Case 3',
        scenario: 'مريض التهاب رئوي حاد، مشوش الذهن (GCS 13)، ضغط الدم 95/55 mmHg، ومعدل التنفس 26/min. كم تبلغ قيمة qSOFA؟',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'الوعي (Altered Mentation)', desc: 'GCS = 13 (< 15)', points: 1 },
          { label: 'الضغط (SBP)', desc: '95 mmHg (≤ 100)', points: 1 },
          { label: 'التنفس (RR)', desc: '26 / min (≥ 22)', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 = 3',
        classification: 'الدرجة القصوى (Score 3: Very High Risk)',
        clinicalNote: 'المريض حقق جميع معايير qSOFA الثلاثة، مما يستدعي تدخلاً إنعاشياً سريعاً ونقل فوري للعناية.'
      },
      {
        id: 4,
        caseTitle: 'qSOFA – Case 4',
        scenario: 'مريض بقسم الباطنة يعاني من حمى، ضغط دمه 115/70 mmHg، ومعدل التنفس 25/min، ودرجة وعيه طبيعية تماماً (GCS 15). احسب qSOFA.',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الوعي (Mentation)', desc: 'GCS 15 (طبيعي)', points: 0 },
          { label: 'الضغط (SBP)', desc: '115 mmHg (> 100)', points: 0 },
          { label: 'التنفس (RR)', desc: '25 / min (≥ 22)', points: 1 }
        ],
        totalCalculated: '0 + 0 + 1 = 1',
        classification: 'نقطة واحدة فقط (Low/Intermediate risk: 1 point)',
        clinicalNote: 'يحتاج المريض إلى إعادة تقييم سريري مستمر تحسباً لتدهور الضغط أو الوعي.'
      },
      {
        id: 5,
        caseTitle: 'qSOFA – Case 5',
        scenario: 'مريض التهاب كبدي حاد وتسمم دموي، يظهر تغيراً في درجة الوعي (GCS = 12)، ضغط الدم 100/60 mmHg، والتنفس 18/min. احسب qSOFA.',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '0' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الوعي (Altered Mentation)', desc: 'GCS 12 (< 15)', points: 1 },
          { label: 'الضغط (SBP)', desc: '100 mmHg (≤ 100 يحقق الشرط)', points: 1 },
          { label: 'التنفس (RR)', desc: '18 / min (< 22)', points: 0 }
        ],
        totalCalculated: '1 + 1 + 0 = 2',
        classification: 'إيجابي عالي الخطورة (qSOFA ≥ 2)',
        clinicalNote: 'لاحظ أن ضغط الدم الانقباضي 100 mmHg يحقق الشرط لأنه (≤ 100).'
      },
      {
        id: 6,
        caseTitle: 'qSOFA – Case 6',
        scenario: 'مريض يعاني من التهاب النسيج الخلوي (Cellulitis)، واعي تماماً (GCS 15)، ضغط الدم 85/50 mmHg، ومعدل التنفس 18/min. احسب qSOFA.',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الوعي (Mentation)', desc: 'GCS 15 (طبيعي)', points: 0 },
          { label: 'الضغط (SBP)', desc: '85 mmHg (≤ 100)', points: 1 },
          { label: 'التنفس (RR)', desc: '18 / min (< 22)', points: 0 }
        ],
        totalCalculated: '0 + 1 + 0 = 1',
        classification: 'نقطة واحدة (1 Point)',
        clinicalNote: 'رغم أن qSOFA = 1، فإن انخفاض ضغط الدم الشديد يستوجب إعطاء سوائل وريدية فورية وتقييم سبب الهبوط.'
      },
      {
        id: 7,
        caseTitle: 'qSOFA – Case 7',
        scenario: 'مريض مسن يعاني من ارتباك وتشوش ذهني حاد جديد (GCS 13)، وضغط دمه 130/80 mmHg، ومعدل التنفس 23/min. احسب qSOFA وما القرار المناسب؟',
        options: [
          { id: 'A', text: '1 – علاج منزلي' },
          { id: 'B', text: '2 – خطورة عالية وتدخّل عاجل (High risk)' },
          { id: 'C', text: '3 – رعاية مركزة حتمية' },
          { id: 'D', text: '0 – لا توجد خطورة' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الوعي (Mentation)', desc: 'GCS 13 (< 15)', points: 1 },
          { label: 'الضغط (SBP)', desc: '130 mmHg (> 100)', points: 0 },
          { label: 'التنفس (RR)', desc: '23 / min (≥ 22)', points: 1 }
        ],
        totalCalculated: '1 + 0 + 1 = 2',
        classification: 'مرتفع الخطورة (qSOFA ≥ 2)',
        clinicalNote: 'تشوش الوعي مع زيادة سرعة التنفس يُعد دلالة مبكرة على نقص الأكسجة أو تسمم الدم.'
      },
      {
        id: 8,
        caseTitle: 'qSOFA – Case 8',
        scenario: 'ما هي المعايير السريرية الثلاثة (3 Simple Parameters) التي يعتمد عليها مقياس qSOFA بدون الحاجة لأي تحاليل مخبرية؟',
        options: [
          { id: 'A', text: 'معدل النبض، ودرجة الحرارة، وكرات الدم البيضاء' },
          { id: 'B', text: 'الوعي GCS < 15، والضغط SBP ≤ 100 mmHg، والتنفس RR ≥ 22/min' },
          { id: 'C', text: 'نسبة اليوريا، والارتباك، والعمر ≥ 65' },
          { id: 'D', text: 'الصفائح الدموية، والبيليروبين، والكرياتينين' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'A - Altered Mentation', desc: 'GCS < 15', points: 1 },
          { label: 'B - Blood Pressure', desc: 'SBP ≤ 100 mmHg', points: 1 },
          { label: 'R - Respiratory Rate', desc: 'RR ≥ 22 / min', points: 1 }
        ],
        totalCalculated: 'A - B - R',
        classification: 'معايير سريرية سريعة عند السرير (Bedside Clinical Criteria)',
        clinicalNote: 'ميزة qSOFA الأساسية أنه لا يتطلب الانتظار لنتائج تحاليل الدم المعملية.'
      },
      {
        id: 9,
        caseTitle: 'qSOFA – Case 9',
        scenario: 'مريض عدوى بالمرارة، ضغط الدم 100/70 mmHg، معدل التنفس 22/min، وGCS = 14. احسب qSOFA بدقة.',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '0' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'الوعي (GCS)', desc: '14 (< 15 يحقق الشرط)', points: 1 },
          { label: 'الضغط (SBP)', desc: '100 mmHg (≤ 100 يحقق الشرط)', points: 1 },
          { label: 'التنفس (RR)', desc: '22 / min (≥ 22 يحقق الشرط)', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 = 3',
        classification: 'الحد الأقصى للنقاط (3 Points)',
        clinicalNote: 'انتبه لحدود المعايير: التنفس 22 يُحسب نقطة، والضغط 100 يُحسب نقطة، وGCS 14 يُحسب نقطة.'
      },
      {
        id: 10,
        caseTitle: 'qSOFA – Case 10',
        scenario: 'متى يعتبر مقياس qSOFA إيجابياً ومؤشراً قوياً على زيادة خطر الوفاة أو الإقامة الطويلة بالعناية المركزة؟',
        options: [
          { id: 'A', text: 'qSOFA ≥ 1' },
          { id: 'B', text: 'qSOFA ≥ 2' },
          { id: 'C', text: 'qSOFA ≥ 3' },
          { id: 'D', text: 'qSOFA ≥ 4' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الحد الفاصل (Cutoff)', desc: 'نقطتان فأكثر (qSOFA ≥ 2)', points: 2 }
        ],
        totalCalculated: 'qSOFA ≥ 2 Points',
        classification: 'مؤشر عالي الخطورة (High risk of poor outcome)',
        clinicalNote: 'عند وجود qSOFA ≥ 2 يجب التفكير فوراً في الإنتان (Sepsis) وتقييم SOFA الكامل وفحص حمض اللاكتيك.'
      }
    ]
  },
  {
    id: 'sofa',
    shortName: 'SOFA',
    name: 'SOFA (Sequential Organ Failure Assessment)',
    badge: '10 حالات',
    subtitle: 'تقييم درجة القصور العضوي والإنذار ونسبة الوفيات في حالات الإنتان بالعناية المركزة',
    icon: 'Activity',
    color: 'emerald',
    summary: {
      purpose: 'Assess degree of organ dysfunction, prognosis & mortality in severe sepsis.',
      organCount: 6,
      organSystems: [
        { system: 'Respiratory', param: 'PaO2 / FiO2 ratio', scale: '1 to 4 points' },
        { system: 'Coagulation', param: 'Platelet count', scale: '1 to 4 points' },
        { system: 'Liver', param: 'Bilirubin level', scale: '1 to 4 points' },
        { system: 'CVS (Cardiovascular)', param: 'Mean arterial pressure / need for vasopressors', scale: '1 to 4 points' },
        { system: 'CNS (Neurological)', param: 'Glasgow Coma Scale (GCS)', scale: '1 to 4 points' },
        { system: 'Renal', param: 'Creatinine level or urine output', scale: '1 to 4 points' },
      ],
      sepsisDefinition: 'SOFA increase ≥ 2 points in a patient with infection defines Sepsis (Sepsis-3).',
      keyNotes: [
        'Requires laboratory values (unlike qSOFA) and used mainly in ICU settings.',
        'Assesses 6 organ systems, each from 0 to 4 points (Total max score = 24).',
        'Acute increase of ≥ 2 points indicates sepsis-induced organ dysfunction and significantly increased mortality.'
      ]
    },
    questions: [
      {
        id: 1,
        caseTitle: 'SOFA – Case 1',
        scenario: 'ما هو التعريف الإكلينيكي المعتمد لمتلازمة الإنتان (Sepsis-3) باستخدام مقياس SOFA في مريض مصاب بعدوى؟',
        options: [
          { id: 'A', text: 'زيادة نقاط SOFA بمقدار نقطة واحدة على الأقل' },
          { id: 'B', text: 'زيادة نقاط SOFA الحادة بمقدار نقطتين أو أكثر (SOFA increase ≥ 2)' },
          { id: 'C', text: 'زيادة نقاط SOFA بمقدار 4 نقاط أو أكثر' },
          { id: 'D', text: 'إيجابية مزرعة الدم فقط بدون علاقة بنقاط SOFA' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'تعريف Sepsis-3', desc: 'تغير حاد في SOFA بمقدار نقطتين فأكثر ناتج عن عدوى', points: 2 }
        ],
        totalCalculated: 'Δ SOFA ≥ 2 Points',
        classification: 'التعريف المعتمد للإنتان وتدهور الأعضاء (Sepsis definition)',
        clinicalNote: 'زيادة SOFA نقطتين تعكس تدهوراً حاداً في وظائف الأعضاء مع ارتفاع ملحوظ في معدل الوفيات داخل المستشفى.'
      },
      {
        id: 2,
        caseTitle: 'SOFA – Case 2',
        scenario: 'كم عدد الأجهزة العضوية (Organ systems) التي يتم تقييمها في مقياس SOFA الكامل؟',
        options: [
          { id: 'A', text: '3 أجهزة' },
          { id: 'B', text: '4 أجهزة' },
          { id: 'C', text: '5 أجهزة' },
          { id: 'D', text: '6 أجهزة' }
        ],
        correctAnswer: 'D',
        breakdown: [
          { label: 'الأجهزة الستة', desc: 'التنفس، والتجلط، والكبد، والدورة الدموية، والجهاز العصبي، والكلى', points: 6 }
        ],
        totalCalculated: '6 Organ Systems (كل جهاز من 0 إلى 4 نقاط)',
        classification: 'مقياس شامل للأجهزة الحيوية',
        clinicalNote: 'الدرجة القصوى للمقياس تبلغ 24 نقطة (6 أجهزة × 4 نقاط لكل جهاز).'
      },
      {
        id: 3,
        caseTitle: 'SOFA – Case 3',
        scenario: 'أي من المتغيرات السريرية التالية يُستخدم لتقييم الجهاز العصبي المركزي (CNS) ضمن نقاط مقياس SOFA؟',
        options: [
          { id: 'A', text: 'رد الفعل الحدقي (Pupillary reflex)' },
          { id: 'B', text: 'مقياس غلاسكو للغيبوبة (Glasgow Coma Scale - GCS)' },
          { id: 'C', text: 'رسم المخ الكهربائي (EEG)' },
          { id: 'D', text: 'فحص الأعصاب القحفية' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'تقييم الجهاز العصبي', desc: 'درجة GCS من 15 إلى 3', points: 1 }
        ],
        totalCalculated: 'CNS Parameter = GCS',
        classification: 'العنصر العصبي في SOFA',
        clinicalNote: 'إذا كان GCS 13-14 يأخذ نقطة، 10-12 نقطتين، 6-9 ثلاث نقاط، وأقل من 6 أربع نقاط.'
      },
      {
        id: 4,
        caseTitle: 'SOFA – Case 4',
        scenario: 'أي من الفحوصات المعملية التالية يُستخدم لتقييم اعتلال نظام التجلط (Coagulation dysfunction) في مقياس SOFA؟',
        options: [
          { id: 'A', text: 'زمن البروثرومبين (PT / INR)' },
          { id: 'B', text: 'عدد الصفائح الدموية (Platelet count)' },
          { id: 'C', text: 'مستوى الفيبرينوجين (Fibrinogen)' },
          { id: 'D', text: 'فحص دي دايمر (D-dimer)' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'تقييم التجلط في SOFA', desc: 'عدد الصفائح الدموية (Platelets)', points: 1 }
        ],
        totalCalculated: 'Platelet Count Parameter',
        classification: 'عنصر التجلط (Coagulation)',
        clinicalNote: 'يُحسب التدهور بنقص الصفائح (< 150k نقطة، < 100k نقطتان، < 50k ثلاث نقاط، < 20k أربع نقاط).'
      },
      {
        id: 5,
        caseTitle: 'SOFA – Case 5',
        scenario: 'ما هو المؤشر الدقيق المستخدم لتقييم كفاءة الجهاز التنفسي (Respiratory system) في حساب SOFA؟',
        options: [
          { id: 'A', text: 'معدل التنفس بالدقيقة (Respiratory rate)' },
          { id: 'B', text: 'نسبة الأكسجين الشرياني إلى الأكسجين المستنشق (PaO2 / FiO2 ratio)' },
          { id: 'C', text: 'وجود ارتشاحات بأشعة الصدر' },
          { id: 'D', text: 'نسبة تشبع الأكسجين بنبض الإصبع (SpO2 فقط)' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'مؤشر الجهاز التنفسي', desc: 'نسبة PaO2 / FiO2 المقاسة بغازات الدم الشرياني (ABG)', points: 1 }
        ],
        totalCalculated: 'PaO2 / FiO2 Ratio',
        classification: 'تقييم تبادل الغازات الرئوي',
        clinicalNote: 'PaO2/FiO2 < 400 نقطة، < 300 نقطتان، < 200 مع تنفس صناعي 3 نقاط، < 100 مع تنفس صناعي 4 نقاط.'
      },
      {
        id: 6,
        caseTitle: 'SOFA – Case 6',
        scenario: 'في مقياس SOFA، يتم تقييم وظائف الكبد (Liver) عبر أي من التحاليل المعملية التالية؟',
        options: [
          { id: 'A', text: 'إنزيمات الكبد (ALT / AST)' },
          { id: 'B', text: 'مستوى البيليروبين الكلي في الدم (Serum Bilirubin)' },
          { id: 'C', text: 'إنزيم الفوسفاتاز القلوي (Alkaline Phosphatase)' },
          { id: 'D', text: 'الألبومين في الدم' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'تقييم وظائف الكبد', desc: 'نسبة البيليروبين بالدم (Bilirubin mg/dL)', points: 1 }
        ],
        totalCalculated: 'Serum Bilirubin Parameter',
        classification: 'عنصر الكبد في SOFA',
        clinicalNote: 'البيليروبين 1.2-1.9 نقطة، 2.0-5.9 نقطتان، 6.0-11.9 ثلاث نقاط، ≥ 12.0 أربع نقاط.'
      },
      {
        id: 7,
        caseTitle: 'SOFA – Case 7',
        scenario: 'ما هو الفرق الجوهري الأساسي بين مقياس qSOFA ومقياس SOFA الكامل؟',
        options: [
          { id: 'A', text: 'qSOFA يتطلب تحاليل معملية دقيقة، بينما SOFA سريري فقط' },
          { id: 'B', text: 'qSOFA فحص سريري سريع لا يتطلب أي تحاليل معملية، بينما SOFA يتطلب فحوصات مخبرية ويُستخدم بالعناية' },
          { id: 'C', text: 'SOFA يقيّم 3 أجهزة فقط، بينما qSOFA يقيّم 6 أجهزة' },
          { id: 'D', text: 'لا يوجد أي فرق بينهما' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'qSOFA', desc: 'سريري سريع عند سرير المريض (Bedside)، بدون معامل، 3 معايير', points: 0 },
          { label: 'SOFA الكامل', desc: 'شامل، يتطلب غازات دم وتحاليل كبد وكلى وتجلط، 6 أجهزة بالعناية', points: 0 }
        ],
        totalCalculated: 'Clinical Bedside vs Comprehensive ICU Lab-based',
        classification: 'فارق جوهري بامتحان الأوسكي',
        clinicalNote: 'qSOFA للمسح السريع (Screening) و SOFA لتأكيد الإنتان وتحديد شدة الفشل العضوي (Severity & Mortality).'
      },
      {
        id: 8,
        caseTitle: 'SOFA – Case 8',
        scenario: 'مريض في العناية المركزة مصاب بذات الرئة، حدث له انخفاض بالصفائح وارتفاع بالبيليروبين والكرياتينين، فزاد مجموع نقاط SOFA من 1 إلى 4 (+3 points). ما هو التشخيص؟',
        options: [
          { id: 'A', text: 'عدوى موضعية بسيطة غير مقلقة' },
          { id: 'B', text: 'إنتان وتدهور بالأعضاء (Sepsis)' },
          { id: 'C', text: 'صدمة حساسية دوائية معزولة' },
          { id: 'D', text: 'فشل كلوي حاد معزول' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'الزيادة في النقاط', desc: 'زاد SOFA بمقدار 3 نقاط (≥ 2 نقاط في وجود عدوى)', points: 3 }
        ],
        totalCalculated: 'Δ SOFA = +3 (≥ 2) → Sepsis',
        classification: 'إنتان مثبت بمعايير Sepsis-3',
        clinicalNote: 'الزيادة بمقدار نقطتين فأكثر في مريض لديه عدوى تعني تشخيص الإنتان (Sepsis) رسمياً.'
      },
      {
        id: 9,
        caseTitle: 'SOFA – Case 9',
        scenario: 'لتقييم الجهاز البولي والكلوي (Renal system) في مقياس SOFA، يعتمد المقياس على:',
        options: [
          { id: 'A', text: 'مستوى الكرياتينين في المصل أو كمية إخراج البول (Creatinine or Urine output)' },
          { id: 'B', text: 'مستوى نيتروجين اليوريا في الدم (BUN فقط)' },
          { id: 'C', text: 'شريط فحص البول لوجود البروتين' },
          { id: 'D', text: 'أشعة السونار على الكليتين' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'تقييم الكلى في SOFA', desc: 'Creatinine (mg/dL) أو Urine output (mL/day)', points: 1 }
        ],
        totalCalculated: 'Creatinine or Urine Output',
        classification: 'عنصر الكلى في SOFA',
        clinicalNote: 'الكرياتينين 1.2-1.9 نقطة، 2.0-3.4 نقطتان، 3.5-4.9 أو بول < 500 مل/يوم 3 نقاط، ≥ 5.0 أو بول < 200 مل/يوم 4 نقاط.'
      },
      {
        id: 10,
        caseTitle: 'SOFA – Case 10',
        scenario: 'لتقييم الجهاز الدوري والقلب (Cardiovascular system) في SOFA، يعتمد المقياس على:',
        options: [
          { id: 'A', text: 'تغيرات رسم القلب الكهربائي (ECG)' },
          { id: 'B', text: 'مستوى إنزيم التروبونين في الدم' },
          { id: 'C', text: 'متوسط الضغط الشرياني (MAP) والحاجة للأدوية الرافعة للضغط (Vasopressors)' },
          { id: 'D', text: 'معدل ضربات القلب فقط' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'تقييم الدورة الدموية', desc: 'MAP < 70 mmHg أو الحاجة للدوبامين، النورأدرينالين، الأدرينالين', points: 1 }
        ],
        totalCalculated: 'MAP & Vasopressor Requirement',
        classification: 'عنصر القلب والأوعية الدموية في SOFA',
        clinicalNote: 'الحاجة لأدوية مثل Norepinephrine بأي جرعة ترفع نقاط SOFA للقلب إلى 3 أو 4 نقاط.'
      }
    ]
  },
  {
    id: 'curb65',
    shortName: 'CURB-65',
    name: 'CURB-65 Score for Pneumonia',
    badge: '10 حالات',
    subtitle: 'تقييم شدة الالتهاب الرئوي المكتسب من المجتمع (CAP) ونسبة الوفيات وقرار مكان العلاج (منزل / عنبر / عناية)',
    icon: 'Thermometer',
    color: 'rose',
    summary: {
      purpose: 'Stratify mortality risk and guide hospitalization decision in Community-Acquired Pneumonia (CAP).',
      criteriaCount: 5,
      criteriaList: [
        { key: 'C', name: 'Confusion', rule: 'New mental confusion (AMTS ≤ 8 or disorientation)', points: '1 point' },
        { key: 'U', name: 'Urea', rule: 'Serum Urea > 7 mmol/L (> 20 mg/dL)', points: '1 point' },
        { key: 'R', name: 'Respiratory Rate', rule: 'RR ≥ 30 / min', points: '1 point' },
        { key: 'B', name: 'Blood Pressure', rule: 'SBP < 90 mmHg OR DBP ≤ 60 mmHg', points: '1 point' },
        { key: '65', name: 'Age ≥ 65', rule: 'Patient age 65 years or older', points: '1 point' },
      ],
      mortalityRiskAndManagement: [
        { score: '0 – 1 Points', risk: 'Low Risk', mortality: '< 3%', management: 'Outpatient treatment (علاج بالمنزل)' },
        { score: '2 Points', risk: 'Intermediate Risk', mortality: '~ 7%', management: 'Short-term hospital admission (حجز بالمستشفى / عنبر)' },
        { score: '3 – 5 Points', risk: 'High Risk', mortality: '14 – 28%', management: 'Urgent hospitalization / Consider ICU for 4-5 (حجز عاجل / عناية مركزة)' },
      ],
      keyNotes: [
        'Mnemonic: CURB-65 (Confusion, Urea, Respiratory rate, Blood pressure, 65 years age).',
        'Blood pressure is positive if EITHER SBP < 90 OR DBP ≤ 60 mmHg.',
        'Score 3 and above has up to 28% mortality and requires immediate inpatient admission with ICU consideration.'
      ]
    },
    questions: [
      {
        id: 1,
        caseTitle: 'CURB-65 – Case 1',
        scenario: 'مريض عمره 70 سنة، مصاب بذات الرئة (Pneumonia)، واعي تماماً بدون ارتباك، اليوريا 5 mmol/L، معدل التنفس 22/min، وضغط الدم 130/80 mmHg. احسب CURB-65 وما هو القرار الطبي؟',
        options: [
          { id: 'A', text: '1 – علاج منزلي خارجي (Outpatient)' },
          { id: 'B', text: '2 – حجز بالمستشفى' },
          { id: 'C', text: '3 – رعاية مركزة عاجلة' },
          { id: 'D', text: '0 – تصريح للمنزل' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'C - Confusion', desc: 'لا يوجد (واعي تماماً)', points: 0 },
          { label: 'U - Urea', desc: '5 mmol/L (طبيعي ≤ 7)', points: 0 },
          { label: 'R - Resp Rate', desc: '22 / min (< 30)', points: 0 },
          { label: 'B - Blood Pressure', desc: '130/80 mmHg (طبيعي)', points: 0 },
          { label: '65 - Age ≥ 65', desc: 'عمره 70 سنة (≥ 65)', points: 1 }
        ],
        totalCalculated: '0 + 0 + 0 + 0 + 1 = 1',
        classification: 'خطورة منخفضة (Low Risk: < 3% Mortality)',
        clinicalNote: 'الدرجة 0-1 تدار كعلاج خارجي بالمنزل (Outpatient) بمضادات حيوية فموية.'
      },
      {
        id: 2,
        caseTitle: 'CURB-65 – Case 2',
        scenario: 'مريض عمره 58 سنة، يعاني من كحة وسخونة، مشوش ومرتبك (Confusion)، اليوريا 9 mmol/L، معدل التنفس 34/min، وضغط الدم 85/55 mmHg. احسب CURB-65.',
        options: [
          { id: 'A', text: '2' },
          { id: 'B', text: '3' },
          { id: 'C', text: '4' },
          { id: 'D', text: '5' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'C - Confusion', desc: 'مشوش ومرتبك', points: 1 },
          { label: 'U - Urea', desc: '9 mmol/L (> 7)', points: 1 },
          { label: 'R - Resp Rate', desc: '34 / min (≥ 30)', points: 1 },
          { label: 'B - Blood Pressure', desc: '85/55 mmHg (SBP < 90 و DBP ≤ 60)', points: 1 },
          { label: '65 - Age ≥ 65', desc: 'عمره 58 سنة (< 65)', points: 0 }
        ],
        totalCalculated: '1 + 1 + 1 + 1 + 0 = 4',
        classification: 'خطورة عالية جداً (High Risk: Score 4)',
        clinicalNote: 'الدرجة 4 تعني خطورة وفاة مرتفعة (تصل إلى 28%) وتتطلب تقييماً فورياً لدخول العناية المركزة (ICU).'
      },
      {
        id: 3,
        caseTitle: 'CURB-65 – Case 3',
        scenario: 'سيدة عمرها 68 سنة، واعية تماماً، اليوريا 8.5 mmol/L، معدل التنفس 24/min، ضغط الدم 110/70 mmHg. احسب CURB-65 وما خطة العلاج الموصى بها؟',
        options: [
          { id: 'A', text: '1 – علاج منزلي' },
          { id: 'B', text: '2 – حجز بالمستشفى (Short-term hospital admission)' },
          { id: 'C', text: '3 – رعاية مركزة عاجلة' },
          { id: 'D', text: '4 – رعاية مركزة' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'C - Confusion', desc: 'لا يوجد ارتباك', points: 0 },
          { label: 'U - Urea', desc: '8.5 mmol/L (> 7)', points: 1 },
          { label: 'R - Resp Rate', desc: '24 / min (< 30)', points: 0 },
          { label: 'B - Blood Pressure', desc: '110/70 mmHg (طبيعي)', points: 0 },
          { label: '65 - Age ≥ 65', desc: 'عمرها 68 سنة (≥ 65)', points: 1 }
        ],
        totalCalculated: '0 + 1 + 0 + 0 + 1 = 2',
        classification: 'خطورة متوسطة (Intermediate Risk: ~ 7% Mortality)',
        clinicalNote: 'الدرجة 2 تستوجب الحجز بالمستشفى (عنبر داخلي أو ملاحظة قصيرة) مع علاج وريدي.'
      },
      {
        id: 4,
        caseTitle: 'CURB-65 – Case 4',
        scenario: 'شاب عمره 32 سنة، لا يعاني من تشوش، اليوريا طبيعية (4 mmol/L)، معدل التنفس 20/min، وضغط الدم 120/80 mmHg. ما هو سكور CURB-65؟',
        options: [
          { id: 'A', text: '0' },
          { id: 'B', text: '1' },
          { id: 'C', text: '2' },
          { id: 'D', text: '3' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'C', desc: 'لا تشوش', points: 0 },
          { label: 'U', desc: 'اليوريا 4 (≤ 7)', points: 0 },
          { label: 'R', desc: 'التنفس 20 (< 30)', points: 0 },
          { label: 'B', desc: 'الضغط طبيعي', points: 0 },
          { label: '65', desc: 'العمر 32 (< 65)', points: 0 }
        ],
        totalCalculated: '0 + 0 + 0 + 0 + 0 = 0',
        classification: 'خطورة متدنية جداً (Score 0: Mortality < 1%)',
        clinicalNote: 'علاج خارجي آمن في المنزل مع التنبيه على علامات التدهور.'
      },
      {
        id: 5,
        caseTitle: 'CURB-65 – Case 5',
        scenario: 'مريض عمره 66 سنة، مشوش (Confusion)، اليوريا 10 mmol/L، معدل التنفس 32/min، وضغط الدم 80/50 mmHg. احسب CURB-65 وما نسبة الوفيات المتوقعة؟',
        options: [
          { id: 'A', text: '3 نقاط (7% وفيات)' },
          { id: 'B', text: '4 نقاط (14% وفيات)' },
          { id: 'C', text: '5 نقاط (14 – 28% وفيات / High Risk)' },
          { id: 'D', text: '2 نقطة (3% وفيات)' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'C - Confusion', desc: 'ارتباك وتشوش', points: 1 },
          { label: 'U - Urea', desc: '10 mmol/L (> 7)', points: 1 },
          { label: 'R - Resp Rate', desc: '32 / min (≥ 30)', points: 1 },
          { label: 'B - Blood Pressure', desc: '80/50 mmHg (منخفض)', points: 1 },
          { label: '65 - Age ≥ 65', desc: 'عمره 66 سنة (≥ 65)', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 + 1 + 1 = 5',
        classification: 'الحد الأقصى للخطورة (Score 5: Mortality 14-28%)',
        clinicalNote: 'تحقق جميع المعايير الخمسة؛ يستدعي دخولاً عاجلاً للعناية المركزة (ICU).'
      },
      {
        id: 6,
        caseTitle: 'CURB-65 – Case 6',
        scenario: 'مريض عمره 60 سنة، واعي تماماً، اليوريا 11 mmol/L، معدل التنفس 31/min، وضغط الدم 125/80 mmHg. احسب CURB-65.',
        options: [
          { id: 'A', text: '1' },
          { id: 'B', text: '2' },
          { id: 'C', text: '3' },
          { id: 'D', text: '4' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'C', desc: 'واعي تماماً', points: 0 },
          { label: 'U', desc: '11 mmol/L (> 7)', points: 1 },
          { label: 'R', desc: '31 / min (≥ 30)', points: 1 },
          { label: 'B', desc: 'الضغط طبيعي', points: 0 },
          { label: '65', desc: 'العمر 60 (< 65)', points: 0 }
        ],
        totalCalculated: '0 + 1 + 1 + 0 + 0 = 2',
        classification: 'خطورة متوسطة (Score 2: Hospital Admission)',
        clinicalNote: 'حتى لو كان المريض أقل من 65 سنة، فإن وجود اليوريا المرتفعة مع سرعة التنفس يعطي نقطتين ويستوجب الحجز.'
      },
      {
        id: 7,
        caseTitle: 'CURB-65 – Case 7',
        scenario: 'ما هو الحد الفاصل لمستوى اليوريا في الدم (Serum Urea) ليُحسب نقطة في سكور CURB-65؟',
        options: [
          { id: 'A', text: '> 5 mmol/L' },
          { id: 'B', text: '> 7 mmol/L (أكثر من 20 mg/dL)' },
          { id: 'C', text: '> 10 mmol/L' },
          { id: 'D', text: '> 15 mmol/L' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'Urea Cutoff', desc: '> 7 mmol/L (أو > 20 mg/dL بمقاييس BUN)', points: 1 }
        ],
        totalCalculated: 'Serum Urea > 7 mmol/L (20 mg/dL)',
        classification: 'قيمة معملية محورية في CURB-65',
        clinicalNote: 'ارتفاع اليوريا يعكس الجفاف الشديد أو القصور الكلوي المصاحب للإنتان الرئوي.'
      },
      {
        id: 8,
        caseTitle: 'CURB-65 – Case 8',
        scenario: 'مريض عمره 72 سنة، مصاب بذات الرئة، ضغط دمه 88/58 mmHg، والتنفس 24/min، واعي تماماً واليوريا 6 mmol/L. احسب CURB-65 وما القرار؟',
        options: [
          { id: 'A', text: '1 – علاج منزلي' },
          { id: 'B', text: '2 – حجز بالمستشفى (Hospital admission)' },
          { id: 'C', text: '3 – عناية مركزة' },
          { id: 'D', text: '0 – تصريح للمنزل' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'C', desc: 'واعي تماماً', points: 0 },
          { label: 'U', desc: 'اليوريا 6 (≤ 7)', points: 0 },
          { label: 'R', desc: 'التنفس 24 (< 30)', points: 0 },
          { label: 'B', desc: '88/58 mmHg (SBP < 90 و DBP ≤ 60 كلاهما يحقق الشرط)', points: 1 },
          { label: '65', desc: 'العمر 72 (≥ 65)', points: 1 }
        ],
        totalCalculated: '0 + 0 + 0 + 1 + 1 = 2',
        classification: 'درجتان (Score 2: Hospital admission)',
        clinicalNote: 'الضغط الانبساطي ≤ 60 أو الانقباضي < 90 يحسب نقطة الضغط (B).'
      },
      {
        id: 9,
        caseTitle: 'CURB-65 – Case 9',
        scenario: 'ما هو الحد الفاصل لمعدل التنفس (Respiratory rate) وضغط الدم (BP) في سكور CURB-65؟',
        options: [
          { id: 'A', text: 'التنفس ≥ 22 والضغط الانقباضي ≤ 100' },
          { id: 'B', text: 'التنفس ≥ 30/min والضغط SBP < 90 أو DBP ≤ 60 mmHg' },
          { id: 'C', text: 'التنفس ≥ 20 والضغط SBP < 100' },
          { id: 'D', text: 'التنفس ≥ 25 والضغط SBP < 90' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'معيار التنفس (R)', desc: 'RR ≥ 30 / min', points: 1 },
          { label: 'معيار ضغط الدم (B)', desc: 'SBP < 90 mmHg أو DBP ≤ 60 mmHg', points: 1 }
        ],
        totalCalculated: 'RR ≥ 30 / min & SBP < 90 or DBP ≤ 60',
        classification: 'حدود هامة للتفريق بين CURB-65 و qSOFA',
        clinicalNote: 'لاحظ أن التنفس في qSOFA يبدأ من 22، بينما في CURB-65 يبدأ من 30.'
      },
      {
        id: 10,
        caseTitle: 'CURB-65 – Case 10',
        scenario: 'مريض سجل 3 نقاط في مقياس CURB-65. ما هو التصنيف الإكلينيكي ومكان العلاج الموصى به؟',
        options: [
          { id: 'A', text: 'خطورة منخفضة وعلاج خارجي (Outpatient)' },
          { id: 'B', text: 'خطورة متوسطة وملاحظة قصيرة' },
          { id: 'C', text: 'خطورة عالية ونسبة وفيات 14 – 28% وحجز عاجل بالمستشفى / ICU' },
          { id: 'D', text: 'علاج بدون مضادات حيوية' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'النقاط', desc: 'Score 3', points: 3 },
          { label: 'نسبة الوفيات', desc: '14 – 28% Mortality', points: 0 },
          { label: 'التصرف الطبي', desc: 'Urgent hospitalization / Consider ICU', points: 0 }
        ],
        totalCalculated: 'Score 3 – 5: High Risk',
        classification: 'التهاب رئوي شديد عالي الخطورة (Severe CAP)',
        clinicalNote: 'المرضى الحاصلون على 3 نقاط أو أكثر يمثلون أعلى نسب الوفيات في ذات الرئة ويحتاجون مضادات واسعة المدى وريدياً.'
      }
    ]
  },
  {
    id: 'child_pugh',
    shortName: 'Child-Pugh',
    name: 'Child-Turcotte-Pugh (CTP) Score',
    badge: '10 حالات',
    subtitle: 'تقييم درجة وشدة تليف وفشل الكبد وتحديد الفئات (Class A, B, C) وقرار زراعة الكبد',
    icon: 'ShieldAlert',
    color: 'indigo',
    summary: {
      purpose: 'Assess severity and prognosis of Chronic Liver Disease and Cirrhosis.',
      parametersCount: 5,
      scoringTable: [
        { param: 'Hepatic Encephalopathy', p1: 'None', p2: 'Mild (Grade 1-2)', p3: 'Marked (Grade 3-4)' },
        { param: 'Ascites', p1: 'None', p2: 'Mild (slight / controlled)', p3: 'Marked (moderate to severe / tense)' },
        { param: 'Serum Bilirubin (mg/dL)', p1: '< 2', p2: '2 – 3', p3: '> 3' },
        { param: 'Serum Albumin (g/dL)', p1: '> 3.5', p2: '2.8 – 3.5 (or 3 – 3.5)', p3: '< 2.8 (or < 3)' },
        { param: 'INR', p1: '< 1.7', p2: '1.7 – 2.3', p3: '> 2.3' },
      ],
      classes: [
        { class: 'Class A', points: '< 7 Points (5 – 6)', desc: 'Well-compensated disease, 1-year survival ~ 100%' },
        { class: 'Class B', points: '7 – 9 Points', desc: 'Significant functional compromise, 1-year survival ~ 80%' },
        { class: 'Class C', points: '10 – 15 Points (≥ 10)', desc: 'Decompensated disease, poor prognosis, transplant evaluation' },
      ],
      keyNotes: [
        '5 Parameters each scored from 1 to 3 points (Minimum score = 5, Maximum score = 15).',
        'Mnemonic: "Pour Another Beer At Eleven" (PT/INR, Ascites, Bilirubin, Albumin, Encephalopathy).',
        'Class C (> 10 points) indicates end-stage decompensated liver disease.'
      ]
    },
    questions: [
      {
        id: 1,
        caseTitle: 'Child-Pugh – Case 1',
        scenario: 'مريض تليف كبدي، لا يعاني من غيبوبة كبدية (None)، لا يوجد استسقاء (No ascites)، البيليروبين 1.5 mg/dL، الألبومين 3.8 g/dL، وINR = 1.4. احسب نقاط Child-Pugh وما هو التصنيف؟',
        options: [
          { id: 'A', text: '5 نقاط – Class A' },
          { id: 'B', text: '6 نقاط – Class B' },
          { id: 'C', text: '7 نقاط – Class B' },
          { id: 'D', text: '8 نقاط – Class C' }
        ],
        correctAnswer: 'A',
        breakdown: [
          { label: 'اعتلال دماغي (Encephalopathy)', desc: 'لا يوجد (None)', points: 1 },
          { label: 'استسقاء (Ascites)', desc: 'لا يوجد (None)', points: 1 },
          { label: 'بيليروبين (Bilirubin)', desc: '1.5 mg/dL (< 2)', points: 1 },
          { label: 'ألبومين (Albumin)', desc: '3.8 g/dL (> 3.5)', points: 1 },
          { label: 'سيولة الدم (INR)', desc: '1.4 (< 1.7)', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 + 1 + 1 = 5',
        classification: 'Class A (5-6 نقاط: كبد متكافئ تماماً)',
        clinicalNote: 'الدرجة 5 هي أقل مجموع ممكن في سكور Child-Pugh، وتمثل أفضل إنذار سريري.'
      },
      {
        id: 2,
        caseTitle: 'Child-Pugh – Case 2',
        scenario: 'مريض تليف كبدي يعاني من استسقاء بسيط (Mild ascites)، لا يوجد اعتلال دماغي كبدي (None)، البيليروبين 2.4 mg/dL، الألبومين 3.2 g/dL، وINR = 1.8. احسب سكور Child-Pugh وما تصنيفه؟',
        options: [
          { id: 'A', text: '7 نقاط – Class B' },
          { id: 'B', text: '8 نقاط – Class B' },
          { id: 'C', text: '9 نقاط – Class B' },
          { id: 'D', text: '10 نقاط – Class C' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'اعتلال دماغي (Encephalopathy)', desc: 'لا يوجد (None)', points: 1 },
          { label: 'استسقاء (Ascites)', desc: 'بسيط (Mild)', points: 2 },
          { label: 'بيليروبين (Bilirubin)', desc: '2.4 mg/dL (2 – 3)', points: 2 },
          { label: 'ألبومين (Albumin)', desc: '3.2 g/dL (3 – 3.5)', points: 2 },
          { label: 'سيولة الدم (INR)', desc: '1.8 (1.7 – 2.3)', points: 2 }
        ],
        totalCalculated: '1 + 2 + 2 + 2 + 2 = 9',
        classification: 'Class B (7 – 9 نقاط: تأثر وظيفي ملحوظ)',
        clinicalNote: 'Class B يمثل مرحلة متوسطة تتطلب علاج مدرات البول ومتابعة لصيقة للدوالي والوظائف.'
      },
      {
        id: 3,
        caseTitle: 'Child-Pugh – Case 3',
        scenario: 'مريض تليف كبدي متقدم، يعاني من اعتلال دماغي كبدي شديد درجة 3-4 (Marked)، استسقاء شديد متوتر (Marked ascites)، بيليروبين 4.2 mg/dL، ألبومين 2.2 g/dL، وINR = 2.6. احسب النقاط والدرجة.',
        options: [
          { id: 'A', text: '11 نقطة – Class B' },
          { id: 'B', text: '13 نقطة – Class C' },
          { id: 'C', text: '15 نقطة – Class C' },
          { id: 'D', text: '10 نقاط – Class B' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'اعتلال دماغي (Encephalopathy)', desc: 'شديد درجة 3-4 (Marked)', points: 3 },
          { label: 'استسقاء (Ascites)', desc: 'شديد متوتر (Marked)', points: 3 },
          { label: 'بيليروبين (Bilirubin)', desc: '4.2 mg/dL (> 3)', points: 3 },
          { label: 'ألبومين (Albumin)', desc: '2.2 g/dL (< 3)', points: 3 },
          { label: 'سيولة الدم (INR)', desc: '2.6 (> 2.3)', points: 3 }
        ],
        totalCalculated: '3 + 3 + 3 + 3 + 3 = 15',
        classification: 'الحد الأقصى للنقاط (Score 15: Class C)',
        clinicalNote: '15 نقطة هي أقصى درجة تدهور كبدي (Decompensated end-stage)، ويكون المريض مرشحاً عاجلاً لزراعة الكبد.'
      },
      {
        id: 4,
        caseTitle: 'Child-Pugh – Case 4',
        scenario: 'مريضة تليف كبدي بدون استسقاء (1)، بدون غيبوبة كبدية (1)، البيليروبين 1.8 mg/dL (1)، الألبومين 3.1 g/dL (2)، وINR = 1.5 (1). احسب نقاط المقياس وتصنيفها.',
        options: [
          { id: 'A', text: '5 نقاط – Class A' },
          { id: 'B', text: '6 نقاط – Class A' },
          { id: 'C', text: '7 نقاط – Class B' },
          { id: 'D', text: '8 نقاط – Class B' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'Encephalopathy', desc: 'None', points: 1 },
          { label: 'Ascites', desc: 'None', points: 1 },
          { label: 'Bilirubin', desc: '1.8 mg/dL (< 2)', points: 1 },
          { label: 'Albumin', desc: '3.1 g/dL (3 – 3.5)', points: 2 },
          { label: 'INR', desc: '1.5 (< 1.7)', points: 1 }
        ],
        totalCalculated: '1 + 1 + 1 + 2 + 1 = 6',
        classification: 'Class A (6 نقاط: < 7 Points)',
        clinicalNote: 'Class A يمثل مرحلة الكبد المتكافئ جراحياً ووظيفياً.'
      },
      {
        id: 5,
        caseTitle: 'Child-Pugh – Case 5',
        scenario: 'مريض تليف كبدي لديه اعتلال دماغي بسيط درجة 1-2 (Mild)، لا يوجد استسقاء (None)، البيليروبين 2.5 mg/dL، الألبومين 2.9 g/dL، وINR = 1.9. احسب النقاط بدقة.',
        options: [
          { id: 'A', text: '8 نقاط – Class B' },
          { id: 'B', text: '9 نقاط – Class B' },
          { id: 'C', text: '10 نقاط – Class C' },
          { id: 'D', text: '11 نقاط – Class C' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'Encephalopathy', desc: 'Mild (Grade 1-2)', points: 2 },
          { label: 'Ascites', desc: 'None', points: 1 },
          { label: 'Bilirubin', desc: '2.5 mg/dL (2 – 3)', points: 2 },
          { label: 'Albumin', desc: '2.9 g/dL (< 3)', points: 3 },
          { label: 'INR', desc: '1.9 (1.7 – 2.3)', points: 2 }
        ],
        totalCalculated: '2 + 1 + 2 + 3 + 2 = 10',
        classification: 'Class C (10 نقاط: ≥ 10 Points)',
        clinicalNote: 'بمجرد وصول المريض إلى 10 نقاط يدخل في تصنيف Class C غير المتكافئ.'
      },
      {
        id: 6,
        caseTitle: 'Child-Pugh – Case 6',
        scenario: 'مريض تليف كبدي سجل 8 نقاط على مقياس Child-Turcotte-Pugh. يندرج هذا المريض تحت أي فئة؟',
        options: [
          { id: 'A', text: 'Class A' },
          { id: 'B', text: 'Class B' },
          { id: 'C', text: 'Class C' },
          { id: 'D', text: 'Class D' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'تقسيم الفئات', desc: 'Class A: < 7 | Class B: 7 – 9 | Class C: ≥ 10', points: 8 }
        ],
        totalCalculated: '8 Points = Class B',
        classification: 'الفئة B (Class B)',
        clinicalNote: 'Class B يشمل المرضى الحاصلين على 7 إلى 9 نقاط.'
      },
      {
        id: 7,
        caseTitle: 'Child-Pugh – Case 7',
        scenario: 'ما هي المعايير الخمسة (5 Parameters) المعتمدة في حساب سكور Child-Pugh لتقييم شدة اعتلال الكبد؟',
        options: [
          { id: 'A', text: 'إنزيمات ALT و AST، والبيليروبين، والألبومين، واليوريا' },
          { id: 'B', text: 'الاعتلال الدماغي، والاستسقاء، والبيليروبين، والألبومين، والسيولة INR' },
          { id: 'C', text: 'الصفائح الدموية، والكرياتينين، وGCS، وضغط الدم، والتنفس' },
          { id: 'D', text: 'العمر، والارتباك، والضغط، واليوريا، ومعدل التنفس' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'معايير Child-Pugh الخمسة', desc: 'Encephalopathy, Ascites, Bilirubin, Albumin, INR / PT', points: 5 }
        ],
        totalCalculated: '2 Clinical + 3 Laboratory Parameters',
        classification: 'المعايير الخمسة الكلاسيكية',
        clinicalNote: 'المقياس يجمع بين معيارين سريريين (الغيبوبة والاستسقاء) وثلاثة معايير معملية (البيليروبين والألبومين وINR).'
      },
      {
        id: 8,
        caseTitle: 'Child-Pugh – Case 8',
        scenario: 'مريض لديه استسقاء بسيط (Mild = 2)، بدون اعتلال دماغي (None = 1)، بيليروبين 1.6 mg/dL (< 2 = 1)، ألبومين 3.6 g/dL (> 3.5 = 1)، وINR = 1.6 (< 1.7 = 1). كم يبلغ مجموع النقاط؟',
        options: [
          { id: 'A', text: '5 نقاط' },
          { id: 'B', text: '6 نقاط' },
          { id: 'C', text: '7 نقاط' },
          { id: 'D', text: '8 نقاط' }
        ],
        correctAnswer: 'B',
        breakdown: [
          { label: 'Ascites', desc: 'Mild', points: 2 },
          { label: 'Encephalopathy', desc: 'None', points: 1 },
          { label: 'Bilirubin', desc: '< 2 mg/dL', points: 1 },
          { label: 'Albumin', desc: '> 3.5 g/dL', points: 1 },
          { label: 'INR', desc: '< 1.7', points: 1 }
        ],
        totalCalculated: '2 + 1 + 1 + 1 + 1 = 6',
        classification: 'Class A (6 نقاط)',
        clinicalNote: 'وجود استسقاء بسيط أضاف نقطة واحدة فوق المجموع الأدنى ليصبح 6 نقاط (Class A).'
      },
      {
        id: 9,
        caseTitle: 'Child-Pugh – Case 9',
        scenario: 'مريض تليف كبدي لديه: استسقاء شديد (Marked = 3)، اعتلال دماغي بسيط درجة 2 (Mild = 2)، بيليروبين 2.8 mg/dL (2 – 3 = 2)، ألبومين 2.7 g/dL (< 3 = 3)، وINR = 2.0 (1.7 – 2.3 = 2). ما مجموع النقاط والفئة؟',
        options: [
          { id: 'A', text: '9 نقاط – Class B' },
          { id: 'B', text: '10 نقاط – Class B' },
          { id: 'C', text: '12 نقطة – Class C' },
          { id: 'D', text: '14 نقطة – Class C' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'Ascites', desc: 'Marked', points: 3 },
          { label: 'Encephalopathy', desc: 'Mild (Grade 2)', points: 2 },
          { label: 'Bilirubin', desc: '2.8 mg/dL', points: 2 },
          { label: 'Albumin', desc: '2.7 g/dL (< 3)', points: 3 },
          { label: 'INR', desc: '2.0 (1.7 – 2.3)', points: 2 }
        ],
        totalCalculated: '3 + 2 + 2 + 3 + 2 = 12',
        classification: 'Class C (12 نقطة)',
        clinicalNote: 'درجة 12 تقع في منتصف تصنيف Class C وتشير إلى تدهور كبدي غير متكافئ مصحوب باستسقاء متوتر.'
      },
      {
        id: 10,
        caseTitle: 'Child-Pugh – Case 10',
        scenario: 'أي من الفئات التالية في مقياس Child-Pugh تعبر عن تدهور وفشل وظائف الكبد الشديد غير المتكافئ (Decompensated liver disease) وتتطلب مجموع نقاط 10 فأكثر؟',
        options: [
          { id: 'A', text: 'Class A' },
          { id: 'B', text: 'Class B' },
          { id: 'C', text: 'Class C' },
          { id: 'D', text: 'Stage 1' }
        ],
        correctAnswer: 'C',
        breakdown: [
          { label: 'فئة التدهور الحاد (Decompensated)', desc: 'Class C (10 – 15 نقطة)', points: 10 }
        ],
        totalCalculated: 'Class C: ≥ 10 Points',
        classification: 'فشل كبدي غير متكافئ (Decompensated Cirrhosis)',
        clinicalNote: 'مرضى Class C يحتاجون تقييماً فورياً لزراعة الكبد، وتبلغ نسبة البقاء على قيد الحياة لمدة عام حوالي 45-50% بدون زراعة.'
      }
    ]
  }
];
