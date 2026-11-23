// Verified Infectious Diseases Clinical OSCE Bank (143 Cleaned Cases)
// Hawari Oral OSCE Question Structure & Curriculum-Verified Model Answers

export const casesData = [
  {
    "id": 1,
    "title": "حالة 1: Acute Bacterial (Pyogenic) Meningitis",
    "topic": "Acute Bacterial Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 22-year-old student presents with fever, severe headache, and neck stiffness. Lumbar puncture shows 1,800 leukocytes/microliter, predominantly neutrophils, elevated protein, and a CSF-to-blood glucose ratio of 0.20.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is your differential diagnosis, and which clinical and CSF findings justify your choice?",
        "a": "- Most likely diagnosis: Acute Bacterial (Pyogenic / Septic) Meningitis.\n- Differential diagnosis: Viral (aseptic) meningitis, viral encephalitis (e.g., HSV), tuberculous meningitis, cryptococcal meningitis, subarachnoid hemorrhage, and brain abscess.\n- Justifying features in this case:\n  * Classic clinical triad/features: acute fever, severe headache, and neck stiffness in a 22-year-old student (high risk for Neisseria meningitidis in dormitories/campuses and Streptococcus pneumoniae).\n  * Diagnostic pyogenic CSF profile: marked leukocytosis (1,800 WBCs/µL) with neutrophil predominance, elevated protein, and severe hypoglycorrhachia (CSF-to-blood glucose ratio 0.20; normal >= 0.60, bacterial < 0.40)."
      },
      {
        "q": "2. What are the classical bedside signs of meningeal irritation (and how do you exclude functional neck rigidity), and what are the most common bacterial pathogens by age group?",
        "a": "- Classical signs of meningeal irritation (low sensitivity 20–30%, high specificity 85–95%):\n  * Nuchal rigidity: resistance to passive neck flexion with preserved lateral rotation. To exclude functional neck rigidity, place the patient's head beyond the bed edge — in true meningitis the neck remains stiff/straight, whereas in functional rigidity it drops with gravity.\n  * Kernig's sign: flex hip and knee to 90°, then passively extend the knee — pain/hamstring spasm prevents extension beyond 135°.\n  * Brudzinski's neck sign: passive neck flexion triggers involuntary flexion of hips and knees.\n- Most common bacterial pathogens by age group:\n  * All ages / Adults: Streptococcus pneumoniae (#1 overall) and Neisseria meningitidis (especially young adults/students).\n  * Neonates (< 1 month): Group B Streptococcus (S. agalactiae), Escherichia coli, and Listeria monocytogenes.\n  * Infants & children: S. pneumoniae, N. meningitidis, and Haemophilus influenzae type b (in unvaccinated children).\n  * Adults > 50 years, pregnant women, or immunocompromised: S. pneumoniae, N. meningitidis, plus Listeria monocytogenes and Gram-negative bacilli."
      },
      {
        "q": "3. How do CSF findings distinguish bacterial from viral and tuberculous meningitis, and when is brain CT mandatory BEFORE lumbar puncture?",
        "a": "- CSF Comparison:\n  * Bacterial (Septic): Cloudy/turbid, high opening pressure (> 180 mmH2O), WBC > 1,000/µL (PMN predominant), high protein (> 150 mg/dL), low glucose (< 40 mg/dL or CSF/serum ratio < 0.40).\n  * Viral (Aseptic): Clear, normal/mildly elevated pressure, WBC 10–500/µL (lymphocytes), normal or mildly elevated protein (50–100 mg/dL), normal glucose (> 45 mg/dL).\n  * Tuberculous (TB): Opalescent/cloudy with fibrin cobweb pellicle on standing, lymphocytic pleocytosis (100–500/µL), very high protein, low glucose.\n- Additional CSF tests: Gram stain, aerobic bacterial culture & sensitivity, multiplex PCR (BioFire), plus 2 sets of blood cultures.\n- Indications for CT Brain BEFORE LP (to rule out mass effect/herniation risk):\n  * Focal neurological deficits (excluding isolated cranial nerve palsy).\n  * Papilledema or signs of raised ICP.\n  * New-onset seizures.\n  * Altered mental status / GCS < 10.\n  * Immunocompromised state or history of CNS disease/mass."
      },
      {
        "q": "4. What is the immediate and definitive antimicrobial management protocol for this 22-year-old patient?",
        "a": "- Golden OSCE Rule: EMPIRICAL IV ANTIBIOTICS MUST NEVER BE DELAYED while waiting for Lumbar Puncture or CT Brain (draw blood cultures and start IV antibiotics + dexamethasone immediately).\n- Empirical IV regimen (immunocompetent adult < 50 years):\n  * IV Ceftriaxone 2 g every 12 hours (or Cefotaxime 2 g IV q4–6h).\n  * PLUS IV Vancomycin 15–20 mg/kg every 8–12 hours (covers penicillin/cephalosporin-resistant S. pneumoniae).\n  * Note: Add IV Ampicillin 2 g every 4 hours ONLY if age > 50, pregnant, alcoholic, or immunocompromised (covers Listeria monocytogenes).\n- Adjunctive Corticosteroid:\n  * IV Dexamethasone 10 mg every 6 hours for 4 days, administered 15–20 minutes BEFORE or WITH the first antibiotic dose (reduces cerebral edema, hearing loss, and mortality, particularly in pneumococcal meningitis).\n- Supportive care: IV fluids, antipyretics, airway protection if GCS <= 8, and de-escalate antibiotics based on CSF culture/sensitivity (duration: 7 days for N. meningitidis, 10–14 days for S. pneumoniae)."
      },
      {
        "q": "5. What red-flag complications must you monitor for, what isolation precautions are required, and what chemoprophylaxis is given to close contacts?",
        "a": "- Red-flag complications:\n  * Neurological: cerebral edema/herniation, seizures, cranial nerve palsies (sensorineural deafness), hydrocephalus, venous sinus thrombosis, SIADH.\n  * Systemic (especially N. meningitidis): non-blanching petechial/purpuric rash, septic shock, DIC, and Waterhouse-Friderichsen syndrome (bilateral adrenal hemorrhage).\n- Infection Prevention & Control (IPC):\n  * Strict Droplet Isolation (private room, surgical mask, gloves, gown) for the first 24 hours of effective antibiotic therapy.\n- Close-contact chemoprophylaxis (for N. meningitidis within 24 hours of index case):\n  * Rifampicin 600 mg PO every 12 hours for 2 days (orange-red secretions; avoid in pregnancy), OR\n  * Ciprofloxacin 500 mg PO single dose (non-pregnant adults), OR\n  * Ceftriaxone 250 mg IM single dose (drug of choice in pregnant women).\n- Vaccination: Quadrivalent meningococcal conjugate vaccine (MenACWY) and pneumococcal vaccines for high-risk groups and college students."
      }
    ]
  },
  {
    "id": 2,
    "title": "حالة 2: Acute Hepatitis A Virus (HAV) Infection",
    "topic": "Acute Hepatitis A",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 19-year-old develops malaise, anorexia, dark urine, and jaundice after a documented hepatitis A exposure. ALT is 1,850 U/L.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of acute hepatocellular jaundice, and which findings support your diagnosis?",
        "a": "- Most likely diagnosis: Acute Hepatitis A Virus (HAV) infection.\n- Differential diagnosis of acute hepatitis (ALT > 1,000 U/L):\n  * Other hepatotropic viruses: Acute HBV, acute HCV, acute HEV, HDV co-infection.\n  * Non-hepatotropic viruses: EBV, CMV, HSV, Dengue.\n  * Non-infectious causes: Acetaminophen (paracetamol) toxicity, idiosyncratic drug-induced liver injury (DILI), ischemic hepatitis (shock liver), acute autoimmune hepatitis, acute Wilson disease, Budd-Chiari syndrome.\n- Justifying features in this case:\n  * Documented HAV exposure followed by classic prodromal symptoms (malaise, anorexia) progressing to icteric phase (dark urine, jaundice) with marked hepatocellular injury (ALT 1,850 U/L, > 15x ULN)."
      },
      {
        "q": "2. What is the mode of transmission and incubation period of HAV, and how does its natural history differ from HBV, HCV, HDV, and HEV?",
        "a": "- Transmission: Fecal-oral route (contaminated food, raw shellfish, unsafe drinking water, or close personal contact with an infected person).\n- Incubation period: 15–50 days (average 28–30 days); peak viral shedding in stool occurs during the 2 weeks BEFORE jaundice appears.\n- Chronicity comparison across hepatotropic viruses:\n  * HAV: Strictly acute and self-limited; NEVER causes chronic hepatitis or a chronic carrier state.\n  * HEV: Usually acute (fecal-oral), high risk of fulminant hepatic failure (20–40%) in 3rd-trimester pregnancy; chronicity only rarely in severely immunosuppressed patients.\n  * HBV, HCV, and HDV (requires HBV): Cause chronic viral hepatitis (> 6 months) leading to cirrhosis and hepatocellular carcinoma (HCC)."
      },
      {
        "q": "3. Which specific serologic test confirms acute HAV, and what baseline laboratory workup should be ordered?",
        "a": "- Confirmatory test for Acute HAV:\n  * Serum IgM anti-HAV antibody — positive at onset of symptoms and persists for 3–6 months.\n  * Note: IgG anti-HAV alone (with negative IgM) indicates past resolved infection or vaccine-induced lifelong immunity.\n- Essential baseline & prognostic workup:\n  * Complete liver panel: ALT, AST (typically ALT > AST > 1,000 U/L), total & direct bilirubin, ALP, GGT, and serum albumin.\n  * Coagulation profile (PT/INR): THE MOST CRITICAL prognostic marker — INR > 1.5 with any hepatic encephalopathy defines Acute Liver Failure (ALF).\n  * Screen for other viral hepatitides (HBsAg, IgM anti-HBc, anti-HCV) if exposure history is unclear, plus CBC, renal function, and blood glucose.\n  * Abdominal ultrasound: excludes biliary obstruction; liver biopsy is NOT indicated in routine acute viral hepatitis."
      },
      {
        "q": "4. What is the clinical management plan for this patient?",
        "a": "- Specific antiviral therapy: None required — HAV is self-limited and typically resolves completely within 2–4 weeks (biochemical normalization within 2–3 months).\n- Supportive management:\n  * Adequate rest, oral hydration (or IV fluids if persistent vomiting), antiemetics if needed, and balanced caloric nutrition.\n  * STRICTLY AVOID hepatotoxic medications (especially acetaminophen/paracetamol, NSAIDs, herbal supplements), sedatives, and alcohol until LFTs normalize.\n- Monitoring & hospital admission criteria:\n  * Monitor clinical status, mental state, bilirubin, and PT/INR.\n  * Admit immediately if unable to maintain oral intake, persistent vomiting, INR > 1.5, hypoglycemia, or any confusion/asterixis (impending ALF -> early referral to a liver transplant center)."
      },
      {
        "q": "5. What are the possible complications of HAV, and what preventive and post-exposure prophylaxis (PEP) measures are recommended for contacts?",
        "a": "- Complications (uncommon):\n  * Acute Liver Failure (ALF): occurs in < 0.5% of cases (higher risk in elderly > 50 years or patients with underlying chronic liver disease/HBV/HCV).\n  * Prolonged cholestatic hepatitis (pruritus and jaundice lasting months) or relapsing hepatitis (biphasic course).\n- Primary prevention:\n  * Safe water supply, handwashing with soap and water, proper sanitation/food hygiene, and inactivated Hepatitis A vaccine (2 doses 6 months apart).\n- Post-Exposure Prophylaxis (PEP) for close/household contacts (must be given within 2 weeks of exposure):\n  * Healthy unvaccinated individuals aged 1–40 years (and > 40 years per updated CDC): single dose of inactivated HAV vaccine.\n  * Infants < 12 months, immunocompromised patients, or patients with chronic liver disease: Intramuscular Hepatitis A Immune Globulin (IG, 0.1 mL/kg) +/- HAV vaccine."
      }
    ]
  },
  {
    "id": 3,
    "title": "حالة 3: Urinary Schistosomiasis (Schistosoma haematobium)",
    "topic": "Urinary Schistosomiasis",
    "category": "Other Infections & Parasites",
    "scenario": "A 15-year-old who frequently swims in freshwater in an endemic region presents with terminal hematuria. Urine microscopy identifies large eggs with a conspicuous terminal spine.",
    "questions": [
      {
        "q": "1. What is the exact diagnosis and causative organism, what is the differential diagnosis of terminal hematuria, and which features confirm your diagnosis?",
        "a": "- Exact diagnosis: Urinary Schistosomiasis (Vesical Bilharziasis) caused by the trematode blood fluke Schistosoma haematobium.\n- Differential diagnosis of terminal hematuria / sterile pyuria:\n  * Genitourinary tuberculosis (sterile pyuria, acid urine), bacterial cystitis, urinary tract calculi, bladder carcinoma, trauma, and glomerulonephritis.\n- Justifying features in this case:\n  * Epidemiological exposure: frequent swimming in freshwater in an endemic region.\n  * Classic clinical hallmark: painless terminal hematuria (bleeding at the end of micturition as bladder wall contracts over ulcerated submucosal egg granulomas).\n  * Pathognomonic microscopy: large oval ova (110–170 µm) with a conspicuous TERMINAL spine in urine."
      },
      {
        "q": "2. Outline the life cycle, intermediate host, and morphological differences between S. haematobium and S. mansoni.",
        "a": "- Life cycle & transmission:\n  * Infective stage: Fork-tailed cercariae released by infected freshwater snails penetrate intact human skin during swimming/wading (causing transient pruritic 'swimmer's itch').\n  * Larvae (schistosomula) migrate via blood -> lungs -> portal venous system -> mature into paired adult worms -> migrate to the vesical/pelvic venous plexus (S. haematobium) where females lay eggs.\n  * Eggs traverse the bladder wall via enzymatic proteolysis and host granulomatous inflammation to exit in urine; in freshwater, miracidia hatch and infect the snail host.\n- Key comparison (Egyptian endemic species):\n  * S. haematobium: Intermediate host = Bulinus truncatus snail | Adult habitat = Vesical venous plexus | Egg = TERMINAL spine (found in urine) | Disease = Urinary bilharziasis.\n  * S. mansoni: Intermediate host = Biomphalaria alexandrina snail | Adult habitat = Inferior mesenteric veins | Egg = LATERAL spine (found in stool) | Disease = Intestinal & hepatosplenic schistosomiasis (periportal 'pipestem' fibrosis, Egyptian splenomegaly)."
      },
      {
        "q": "3. What are the optimal diagnostic investigations and expected imaging findings in urinary schistosomiasis?",
        "a": "- Gold-standard parasitological confirmation:\n  * Urine microscopy (filtration or centrifugation/sedimentation) collected at MIDDAY (10:00 AM – 2:00 PM) or after brief physical exercise — peak egg excretion time; demonstrates oval eggs with a terminal spine.\n  * Check egg viability (miracidial hatching test or flame-cell movement) to confirm active infection vs dead calcified ova.\n- Supportive laboratory tests:\n  * Urinalysis: microscopic/gross hematuria, leukocyturia/eosinophiluria, proteinuria.\n  * CBC: peripheral eosinophilia (marked in acute Katayama fever), iron-deficiency anemia.\n  * Serology (ELISA) or Circulating Anodic/Cathodic Antigen (CAA/CCA) in urine/serum for low-intensity infections.\n- Imaging & endoscopy:\n  * Pelvic Ultrasound (first-line imaging): irregular bladder wall thickening, polypoid lesions, and hydroureter/hydronephrosis.\n  * Plain KUB X-ray / CT: classic linear 'eggshell' calcification of the urinary bladder wall.\n  * Cystoscopy (if persistent hematuria or suspected malignancy): 'sandy patches' (calcified submucosal egg granulomas), bilharzial ulcers/polyps, and biopsy to exclude bladder cancer."
      },
      {
        "q": "4. What is the first-line antiparasitic treatment (drug, exact dose, mechanism, and follow-up)?",
        "a": "- Drug of choice: Oral Praziquantel.\n- Exact dose for S. haematobium (and S. mansoni):\n  * 40 mg/kg orally as a single dose (or divided into two 20 mg/kg doses taken 4–6 hours apart with food to minimize GI upset).\n- Mechanism of action:\n  * Increases calcium ion (Ca2+) permeability across the adult worm's tegument -> rapid spastic paralysis and vacuolation/disruption of the tegument -> exposes worm antigens to host immune destruction.\n- Important clinical notes & follow-up:\n  * Praziquantel kills adult worms but is less active against immature schistosomula — in acute infection, repeat the dose 4–6 weeks later once larvae mature.\n  * Perform follow-up urine microscopy at 6–12 weeks post-treatment to confirm eradication of viable ova."
      },
      {
        "q": "5. What are the chronic complications of untreated urinary schistosomiasis, and how is the disease prevented?",
        "a": "- Chronic urological & systemic complications:\n  * Chronic granulomatous cystitis, bladder wall fibrosis ('contracted bladder'), and calcification.\n  * Lower ureteric stricture -> obstructive uropathy (hydroureter, hydronephrosis, chronic kidney disease).\n  * Secondary bacterial UTIs and chronic urinary Salmonella Typhi carrier state (Salmonella adheres to the schistosome tegument).\n  * Squamous Cell Carcinoma (SCC) of the urinary bladder (strongly linked to chronic S. haematobium irritation and nitrosamines).\n  * Female/male genital schistosomiasis (cervical lesions, hemospermia, infertility, increased HIV susceptibility).\n- Prevention & control:\n  * Health education: avoid swimming or wading in stagnant/infested freshwater canals.\n  * Sanitation & clean water supply to stop urine/stool contamination of water.\n  * Snail control (molluscicides, environmental canal clearing) and periodic mass drug administration (MDA) with Praziquantel in endemic communities."
      }
    ]
  },
  {
    "id": 4,
    "title": "حالة 4: Acute Ascending Cholangitis",
    "topic": "Acute Cholangitis",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 61-year-old woman presents with fever, right-upper-quadrant pain and jaundice. Alkaline phosphatase and bilirubin are elevated, and ultrasonography shows a dilated common bile duct with a stone.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of fever with jaundice, and which findings in this case confirm it?",
        "a": "- Most likely diagnosis: Acute Ascending Cholangitis (secondary to choledocholithiasis).\n- Differential diagnosis of fever with jaundice and RUQ pain:\n  * Acute calculous cholecystitis (typically normal/mildly elevated bilirubin and non-dilated CBD), pyogenic or amebic liver abscess, acute viral hepatitis, acute alcoholic hepatitis, leptospirosis (Weil's disease), and Mirizzi syndrome.\n- Justifying features in this case:\n  * Complete Charcot's triad (fever + RUQ pain + jaundice).\n  * Cholestatic laboratory pattern (elevated ALP and bilirubin).\n  * Confirmatory ultrasonography showing extrahepatic biliary obstruction (dilated common bile duct with an impacted stone)."
      },
      {
        "q": "2. Define Charcot's triad and Reynolds' pentad, and name the most common causative organisms.",
        "a": "- Clinical syndromes:\n  * Charcot's Triad (classic acute cholangitis): Fever/rigors + Right-upper-quadrant (RUQ) pain + Jaundice (high specificity, present in ~50–70% of cases).\n  * Reynolds' Pentad (severe/suppurative obstructive cholangitis — life-threatening emergency): Charcot's triad PLUS Hypotension (septic shock) PLUS Altered mental status (confusion/DCL).\n- Pathogenesis & causative pathogens (ascending polymicrobial enteric bacteria behind biliary obstruction -> elevated intraductal pressure forces bacteria into hepatic sinusoids -> bacteremia/sepsis):\n  * Gram-negative bacilli (most common): Escherichia coli (#1), Klebsiella pneumoniae, Enterobacter spp., Pseudomonas aeruginosa (in prior instrumentation/stents).\n  * Gram-positive cocci: Enterococcus spp.\n  * Anaerobes (especially elderly, severe disease, or prior biliary-enteric surgery): Bacteroides fragilis and Clostridium spp."
      },
      {
        "q": "3. What diagnostic laboratory tests and imaging studies are required to stage severity and guide intervention?",
        "a": "- Laboratory workup (Tokyo Guidelines criteria):\n  * Systemic inflammation: CBC (leukocytosis > 10,000 or < 4,000/µL), elevated CRP and procalcitonin.\n  * Cholestasis/liver panel: marked direct (conjugated) hyperbilirubinemia, markedly elevated ALP and GGT, mild-to-moderate AST/ALT elevation.\n  * Organ dysfunction / severity markers: serum creatinine, coagulation profile (PT/INR), platelets, serum lactate, ABG, and serum lipase/amylase (to rule out concomitant gallstone pancreatitis).\n  * Microbiological: 2 sets of blood cultures BEFORE antibiotics (and bile culture during ERCP).\n- Imaging:\n  * Abdominal Ultrasound (1st-line): confirms biliary ductal dilatation (CBD > 6–7 mm) and gallstones/CBD stone.\n  * MRCP or Endoscopic Ultrasound (EUS): if ultrasound is inconclusive for the cause/level of obstruction.\n  * ERCP: gold-standard diagnostic AND therapeutic modality for biliary decompression."
      },
      {
        "q": "4. What is the immediate medical resuscitation and definitive biliary management protocol?",
        "a": "- Step 1 — Immediate resuscitation & stabilization:\n  * NPO (nil per os), aggressive IV isotonic crystalloid hydration, correction of electrolytes and coagulopathy (Vitamin K if prolonged INR), analgesics, and ICU monitoring/vasopressors (Norepinephrine) if hypotensive.\n- Step 2 — Urgent empirical broad-spectrum IV antibiotics (covering enteric Gram-negatives + anaerobes; start within 1 hour if septic):\n  * IV Piperacillin-Tazobactam 4.5 g q6–8h, OR\n  * IV Ceftriaxone 2 g daily (or Cefepime 2 g q8–12h) PLUS IV Metronidazole 500 mg q8h, OR\n  * IV Meropenem 1 g q8h (or Imipenem) for severe septic shock or suspected ESBL/healthcare-associated infection.\n  * Total antibiotic duration: typically 4–7 days AFTER successful biliary source control.\n- Step 3 — Definitive source control (Urgent Biliary Decompression):\n  * ERCP with endoscopic sphincterotomy, stone extraction, and/or plastic stent placement.\n  * Timing: EMERGENT (< 12–24 hours) for severe cholangitis (Reynolds' pentad/organ failure) or failure to respond to antibiotics; URGENT (within 24–48 hours) for mild-moderate cases.\n  * Alternative if ERCP fails or anatomy precludes it: Percutaneous Transhepatic Biliary Drainage (PTBD)."
      },
      {
        "q": "5. What serious complications can occur, and what definitive preventive step is required after acute recovery?",
        "a": "- Acute complications:\n  * Gram-negative septic shock and bacteremia (mortality > 50% if severe and undrained).\n  * Pyogenic liver abscess (multiple microabscesses), acute kidney injury (hepatorenal/septic), DIC, and gallstone pancreatitis.\n- Definitive secondary prevention:\n  * Perform interval laparoscopic cholecystectomy once acute cholangitis resolves (often during the same admission if stable) to prevent recurrent choledocholithiasis and cholangitis."
      }
    ]
  },
  {
    "id": 5,
    "title": "حالة 5: Helicobacter pylori-Associated Uninvestigated Dyspepsia",
    "topic": "Helicobacter pylori Dyspepsia",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 29-year-old man has recurrent epigastric discomfort. He has no weight loss, dysphagia, gastrointestinal bleeding, anemia, or family history of gastric cancer, and takes no NSAIDs.",
    "questions": [
      {
        "q": "1. What is the most appropriate initial clinical strategy in this 29-year-old patient, and why?",
        "a": "- Most appropriate initial strategy: Non-invasive 'Test-and-Treat' for Helicobacter pylori (using a Urea Breath Test or H. pylori Stool Antigen test), followed by eradication therapy if positive.\n- Clinical justification:\n  * Patient is young (age < 55–60 years), takes no NSAIDs, and has NO alarm (red-flag) features.\n  * Upper GI endoscopy (EGD) is NOT indicated initially in young patients with uncomplicated uninvestigated dyspepsia because the probability of malignancy is extremely low and test-and-treat is cost-effective and curative for H. pylori-related ulcer/gastritis.\n  * If H. pylori testing is negative, start an empirical 4–8 week trial of a Proton Pump Inhibitor (PPI)."
      },
      {
        "q": "2. Which 'alarm features' would mandate immediate upper GI endoscopy (EGD) instead of test-and-treat, and what virulence factors enable H. pylori to colonize the stomach?",
        "a": "- Alarm (Red-Flag) Features mandating immediate EGD:\n  * New-onset dyspepsia at age >= 55–60 years.\n  * Unintentional weight loss.\n  * Progressive dysphagia or odynophagia.\n  * Overt GI bleeding (hematemesis/melena) or unexplained iron-deficiency anemia.\n  * Persistent vomiting, palpable abdominal mass, or left supraclavicular lymphadenopathy (Virchow's node / Troisier sign).\n  * Family history of upper GI malignancy in a first-degree relative.\n- Key H. pylori microbiological & virulence factors:\n  * Curved, microaerophilic, Gram-negative rod with multiple polar flagella (motility through gastric mucus).\n  * Urease enzyme (most important for survival): hydrolyzes urea into ammonia (NH3) + CO2, creating an alkaline microenvironment that neutralizes gastric acid.\n  * Cytotoxins CagA and VacA: induce mucosal inflammation, epithelial injury, ulcerogenesis, and carcinogenic pathways."
      },
      {
        "q": "3. Compare non-invasive and invasive diagnostic tests for H. pylori, and state the essential medication washout rule before testing.",
        "a": "- Non-invasive tests (preferred in this patient):\n  * 13C- or 14C-Urea Breath Test (UBT): detects active urease activity; sensitivity/specificity > 95% (ideal for initial diagnosis AND test-of-cure).\n  * H. pylori Stool Antigen Test (monoclonal ELISA): detects active infection (~94% sensitive/specific; ideal for diagnosis and test-of-cure).\n  * Serum IgG Serology: NOT recommended for active diagnosis or test-of-cure because antibodies remain positive for years after eradication.\n- Invasive tests (only when EGD is indicated):\n  * Rapid Urease Test (CLO test) on gastric antral biopsy, Histopathology (Giemsa/Warthin-Starry stain), and Culture with antibiotic susceptibility testing (for refractory cases).\n- CRITICAL Pre-Test Washout Rule (to prevent false-negative UBT, stool antigen, or biopsy results):\n  * Stop PPIs for at least 2 weeks prior to testing (H2 blockers or antacids may be substituted if needed).\n  * Stop Antibiotics and Bismuth compounds for at least 4 weeks prior to testing."
      },
      {
        "q": "4. If H. pylori testing is positive, what is the recommended first-line eradication regimen and how do you confirm cure?",
        "a": "- Preferred First-Line Therapy (especially in high clarithromycin-resistance regions > 15% such as Egypt): 14-day Bismuth Quadruple Therapy:\n  * PPI standard dose twice daily (e.g., Omeprazole 20 mg or Esomeprazole 40 mg bid) + Bismuth subsalicylate (or bismuth subcitrate) qid + Tetracycline 500 mg qid + Metronidazole 500 mg tid–qid for 14 days.\n- Alternative First-Line (if Bismuth unavailable): 14-day Concomitant Non-Bismuth Quadruple Therapy (PPI bid + Clarithromycin 500 mg bid + Amoxicillin 1 g bid + Metronidazole 500 mg bid).\n  * Note: Standard 14-day Clarithromycin Triple Therapy (PPI + Clarithromycin 500 mg bid + Amoxicillin 1 g bid) is only recommended where local clarithromycin resistance is < 15% and no prior macrolide exposure.\n- Mandatory Test-of-Cure:\n  * Confirm eradication with UBT or Stool Antigen test at least 4 weeks AFTER finishing antibiotics AND at least 2 weeks off PPIs."
      },
      {
        "q": "5. What are the major long-term complications of untreated H. pylori infection?",
        "a": "- Peptic Ulcer Disease (PUD): accounts for ~90% of duodenal ulcers and ~70–80% of non-NSAID gastric ulcers (risk of hemorrhage, perforation, and gastric outlet obstruction).\n- Chronic active gastritis progressing to chronic atrophic gastritis and intestinal metaplasia.\n- Gastric Adenocarcinoma (WHO Group 1 carcinogen; chronic inflammation and CagA+ strains).\n- Gastric MALT (Mucosa-Associated Lymphoid Tissue) Lymphoma: low-grade B-cell lymphoma that often achieves complete remission solely with H. pylori eradication.\n- Extragastric associations: unexplained iron-deficiency anemia and immune thrombocytopenia (ITP)."
      }
    ]
  },
  {
    "id": 6,
    "title": "حالة 6: Brucellosis (Malta Fever / Undulant Fever)",
    "topic": "Brucellosis",
    "category": "Brucellosis",
    "scenario": "A 34-year-old goat farmer reports three weeks of intermittent fever, night sweats, fatigue, and back pain. He regularly drinks unpasteurized goat milk. Examination shows mild hepatosplenomegaly.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is your differential diagnosis, and which clinical and exposure clues justify it?",
        "a": "- Most likely diagnosis: Brucellosis (Malta Fever / Undulant Fever) with suspected osteoarticular involvement (sacroiliitis or spondylitis).\n- Differential diagnosis: Tuberculosis (especially spinal TB / Pott's disease), enteric/typhoid fever, infective endocarditis, visceral leishmaniasis (Kala-Azar), malaria, and lymphoma.\n- Justifying features in this case:\n  * High-risk occupation & ingestion history: goat farmer drinking unpasteurized goat milk.\n  * Classic clinical triad/picture: prolonged 3-week undulating/intermittent fever, drenching malodorous night sweats, fatigue, back pain (osteoarticular tropism), and mild hepatosplenomegaly."
      },
      {
        "q": "2. What are the causative Brucella species, their animal reservoirs, and the main modes of transmission?",
        "a": "- Causative organism: Small, aerobic, intracellular, Gram-negative coccobacilli (Brucella spp.):\n  * Brucella melitensis (goats and sheep) — MOST COMMON and MOST VIRULENT species in Egypt and worldwide (likely organism in this goat farmer).\n  * Brucella abortus (cattle).\n  * Brucella suis (pigs).\n  * Brucella canis (dogs).\n- Modes of transmission:\n  * Ingestion of unpasteurized milk, soft cheeses, or raw dairy products (most common in general population).\n  * Direct percutaneous contact with infected animal blood, aborted fetuses, placenta, or secretions through skin abrasions (farmers, shepherds, butchers, veterinarians).\n  * Inhalation of infectious aerosols (abattoir and microbiology laboratory workers — Biosafety Level 3 hazard)."
      },
      {
        "q": "3. What are the definitive and serologic investigations required, and what OSCE pitfalls apply to the Standard Tube Agglutination (STA / Wright) test?",
        "a": "- Gold Standard (Direct isolation):\n  * Blood culture (using automated BACTEC or Castaneda biphasic medium; inform lab to incubate up to 2–4 weeks and use BSL-3 precautions) or Bone Marrow culture (highest sensitivity, even after prior antibiotics).\n- Most Common Diagnostic Test — Serology (Standard Tube Agglutination / STA / Wright test):\n  * Measures total IgM + IgG agglutinating antibodies; becomes positive after 1–2 weeks of illness.\n  * Positive diagnostic cutoff: titer >= 1:160 in non-endemic areas, >= 1:320 in endemic areas (such as Egypt), OR a >= 4-fold rise between acute and convalescent sera 2–4 weeks apart.\n  * Screening test: Rose Bengal plate agglutination test (rapid, high sensitivity).\n  * 2-Mercaptoethanol (2-ME) test: destroys IgM so persistent titer reflects IgG (active/chronic disease or relapse).\n  * OSCE Pitfalls of STA: False-negative due to Prozone phenomenon (excess antibodies at low dilutions -> always perform serial dilutions!) or blocking antibodies (detect with Coombs test); cross-reactivity with Yersinia enterocolitica, Francisella tularensis, and Vibrio cholerae.\n- Focal workup for back pain: MRI of the lumbosacral spine (gold standard to detect brucellar spondylodiscitis/epidural abscess) and sacroiliac joint imaging; CBC typically shows mild anemia and leukopenia/lymphocytosis."
      },
      {
        "q": "4. What is the core OSCE treatment principle and exact first-line antibiotic regimens for uncomplicated vs focal (spondylitis) brucellosis?",
        "a": "- Core Hawari OSCE Principle: ALWAYS use COMBINATION THERAPY with INTRACELLULAR-PENETRATING DRUGS for a LONG DURATION (>= 6 weeks) to eradicate intracellular bacilli inside macrophages and prevent relapse (monotherapy causes high relapse rates).\n- First-line regimens for uncomplicated adult brucellosis (6 weeks):\n  * Regimen A (Oral preferred in outpatients): Doxycycline 100 mg PO twice daily for 6 weeks PLUS Rifampicin 600–900 mg PO once daily for 6 weeks.\n  * Regimen B (Lower relapse rate): Doxycycline 100 mg PO twice daily for 6 weeks PLUS Gentamicin 5 mg/kg IV/IM daily for 7–10 days (or Streptomycin 1 g IM daily for 2–3 weeks).\n- If Brucellar Spondylitis is confirmed on spine MRI:\n  * Triple therapy (Doxycycline + Rifampicin + Gentamicin/Streptomycin initially) for a prolonged duration of at least 3 months (12 weeks) until clinical and radiological resolution."
      },
      {
        "q": "5. What are the major organ complications of brucellosis, how is treatment modified in pregnancy and children < 8 years, and how is it prevented?",
        "a": "- Major complications:\n  * Osteoarticular (MOST COMMON, 20–60%): sacroiliitis, lumbar spondylitis/vertebral osteomyelitis, peripheral arthritis.\n  * Genitourinary: epididymo-orchitis (most common focal male complication after bone/joint).\n  * Cardiovascular: infective endocarditis (rare < 2%, affects aortic valve, but is the LEADING CAUSE OF DEATH in brucellosis).\n  * Neurobrucellosis: lymphocytic meningitis, encephalitis, cranial nerve palsies.\n  * Hematologic/hepatic: pancytopenia/hypersplenism, granulomatous hepatitis.\n- Special populations (Doxycycline is contraindicated):\n  * Pregnancy: Rifampicin 600–900 mg/day +/- TMP-SMX (avoid TMP-SMX in 1st trimester and near term) for 6 weeks.\n  * Children < 8 years: Oral TMP-SMX + Rifampicin for 6 weeks.\n- Prevention: Pasteurization/boiling of all milk and dairy products, vaccination of livestock (Rev-1 for goats/sheep; S19/RB51 for cattle), and protective gloves/goggles for farmers, butchers, and veterinarians (no licensed human vaccine)."
      }
    ]
  },
  {
    "id": 7,
    "title": "حالة 7: Infectious Mononucleosis (Epstein-Barr Virus)",
    "topic": "Infectious Mononucleosis (EBV)",
    "category": "Lymphadenopathy & Spleen",
    "scenario": "A 19-year-old student has fever, marked fatigue, and exudative pharyngitis. Examination reveals bilateral posterior cervical lymphadenopathy and splenomegaly. The blood film shows atypical lymphocytes.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of mononucleosis-like syndrome, and which findings support your diagnosis?",
        "a": "- Most likely diagnosis: Infectious Mononucleosis (IMN) caused by Epstein-Barr Virus (EBV / Human Herpesvirus 4).\n- Differential diagnosis of IMN-like syndrome / exudative pharyngitis with lymphadenopathy:\n  * Acute HIV seroconversion syndrome (crucial to exclude in sexually active young adults).\n  * Cytomegalovirus (CMV) mononucleosis (typically less pharyngitis/lymphadenopathy, heterophile-negative).\n  * Acute Toxoplasmosis, Group A Beta-Hemolytic Streptococcal (GAS) pharyngitis, Diphtheria, secondary syphilis, and acute leukemia/lymphoma.\n- Justifying features in this case:\n  * Classic clinical triad in a young adult (19-year-old student): fever, exudative pharyngitis, and bilateral posterior cervical lymphadenopathy.\n  * Marked fatigue, splenomegaly, and > 10% atypical lymphocytes on peripheral blood smear."
      },
      {
        "q": "2. Describe the pathogenesis of atypical lymphocytes, mode of transmission, and characteristic lymph node examination findings.",
        "a": "- Transmission: Close contact with infected oral secretions/saliva ('kissing disease'), sharing drinks/utensils; incubation period 4–6 weeks.\n- Pathogenesis & cellular biology:\n  * EBV infects oropharyngeal epithelial cells and B-lymphocytes via the CD21 (CR2) surface receptor.\n  * The 'atypical lymphocytes' (Downey cells) seen on blood smear are NOT infected B-cells — they are large, reactive cytotoxic CD8+ T-lymphocytes proliferating to destroy EBV-infected B-cells.\n- Lymph node & spleen exam pearls (per Hawari Practical):\n  * Generalized or symmetrical bilateral posterior cervical (and classically epitrochlear) lymphadenopathy — soft-to-firm, discrete, mobile, mildly tender (unlike matted TB nodes or hard fixed malignant nodes).\n  * Splenomegaly occurs in ~50% of patients (peaks in weeks 2–3); palpate gently from right iliac fossa toward left costal margin to avoid iatrogenic rupture."
      },
      {
        "q": "3. What diagnostic laboratory tests confirm primary EBV infection and distinguish it from heterophile-negative mimics?",
        "a": "- Initial blood tests:\n  * CBC & peripheral blood film: absolute lymphocytosis (> 50% lymphocytes) with > 10% atypical lymphocytes (Downey cells); mild thrombocytopenia.\n  * Liver function tests: mild-to-moderate transient transaminitis (AST/ALT 2–3x ULN in > 80%).\n- Screening serology:\n  * Heterophile Antibody Test (Monospot / Paul-Bunnell test): detects IgM antibodies agglutinating sheep/horse RBCs. High specificity, but may be FALSE-NEGATIVE in the first week of illness (repeat if negative early) and is negative in CMV, HIV, and Toxoplasmosis.\n- Gold-Standard Specific EBV Serology Panel:\n  * Acute primary EBV: Anti-VCA IgM POSITIVE + Anti-VCA IgG POSITIVE + Anti-EBNA IgG NEGATIVE (EBNA appears only 6–12 weeks later).\n  * Past resolved EBV: Anti-VCA IgM negative + Anti-VCA IgG positive + Anti-EBNA IgG positive.\n- Exclude co-infections/mimics: Rapid Strep antigen test/throat swab (GAS) and 4th-gen HIV Ag/Ab (+/- HIV RNA) if risk factors exist."
      },
      {
        "q": "4. What is the management plan, and what TWO critical OSCE 'Do-Not-Do' rules must you tell this patient?",
        "a": "- Supportive management (self-limited over 2–4 weeks; fatigue may persist longer):\n  * Rest, adequate oral hydration, warm saline gargles, and analgesics/antipyretics (paracetamol or NSAIDs).\n  * Antivirals (Acyclovir) have NO proven clinical benefit in uncomplicated IMN.\n- Critical OSCE Rule #1 — AVOID AMPICILLIN / AMOXICILLIN:\n  * Giving ampicillin or amoxicillin precipitates a widespread, pruritic, copper-colored maculopapular rash in 80–90% of EBV patients (non-IgE immune phenomenon).\n- Critical OSCE Rule #2 — STRICTLY AVOID CONTACT SPORTS / STRENUOUS ACTIVITY:\n  * Restrict contact sports, heavy lifting, and abdominal trauma for at least 3–4 weeks (or until splenomegaly completely resolves on exam/ultrasound) to prevent fatal splenic rupture.\n- Corticosteroids (e.g., Prednisone): NOT for routine use; reserved ONLY for severe complications (impending upper airway obstruction from massive tonsillar hypertrophy, autoimmune hemolytic anemia, or severe thrombocytopenia)."
      },
      {
        "q": "5. What are the acute and long-term complications of EBV infection?",
        "a": "- Acute life-threatening complications:\n  * Splenic rupture (0.1–0.5%, typically weeks 2–3; presents with acute LUQ pain, left shoulder-tip pain [Kehr's sign], and hemorrhagic shock).\n  * Upper airway obstruction from severe tonsillar/Waldeyer's ring hypertrophy.\n- Hematologic & systemic complications:\n  * Autoimmune hemolytic anemia (cold agglutinins — anti-i), immune thrombocytopenia, neutropenia, acute hepatitis, myocarditis, Guillain-Barré syndrome, and encephalitis.\n- Long-term EBV-associated malignancies:\n  * Endemic Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, primary CNS lymphoma (in AIDS), and post-transplant lymphoproliferative disorder (PTLD)."
      }
    ]
  },
  {
    "id": 8,
    "title": "حالة 8: Hepatic Encephalopathy Precipitated by Urinary Tract Infection",
    "topic": "Hepatic Encephalopathy (Infection-Precipitated)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 58-year-old man with cirrhosis develops fever and disorientation during a urinary tract infection. Examination reveals asterixis without meningism or a focal neurological deficit.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of fever with disturbed conscious level (DCL) in cirrhosis, and which clues support it?",
        "a": "- Most likely diagnosis: Overt Hepatic Encephalopathy (HE, West Haven Grade II) precipitated by a Urinary Tract Infection (UTI) in a patient with decompensated cirrhosis.\n- Differential diagnosis of fever + DCL in a cirrhotic patient:\n  * Spontaneous Bacterial Peritonitis (SBP) causing HE/sepsis (must exclude if ascites present).\n  * Bacterial meningitis or viral encephalitis (less likely without meningism/focal signs, but keep high vigilance).\n  * Intracranial/subdural hemorrhage (due to cirrhotic coagulopathy/thrombocytopenia).\n  * Metabolic mimics: hypoglycemia, hyponatremia, uremia, septic encephalopathy, Wernicke encephalopathy, or sedative/alcohol intoxication.\n- Justifying features in this case:\n  * Known cirrhosis + identified infectious precipitant (UTI with fever) + disorientation + asterixis (flapping tremor) with absence of meningeal irritation or focal neurological deficits."
      },
      {
        "q": "2. How do you clinically grade Hepatic Encephalopathy and assess overall severity in this patient, and what are the common precipitants of HE?",
        "a": "- West Haven Grading of Hepatic Encephalopathy:\n  * Grade I: Trivial lack of awareness, euphoria/anxiety, inverted sleep-wake cycle.\n  * Grade II (THIS PATIENT): Lethargy, disorientation to time, asterixis (flapping tremor), slurred speech, inappropriate behavior.\n  * Grade III: Somnolence to semi-stupor, responsive to stimuli, gross disorientation, bizarre behavior.\n  * Grade IV: Coma (unresponsive to painful stimuli).\n- Bedside severity scores (per Hawari Practical):\n  * Glasgow Coma Scale (GCS): document E+V+M components serially; GCS <= 8 mandates endotracheal intubation for airway protection.\n  * Child-Turcotte-Pugh (CTP) Score (5 parameters, 1–3 pts each): Encephalopathy, Ascites, Serum Albumin, Serum Bilirubin, INR (Class A < 7, B 7–9, C >= 10).\n  * qSOFA screen (RR >= 22, SBP <= 100, GCS < 15) to detect concomitant sepsis.\n- Common precipitants of HE (always search & treat!):\n  * Infections (UTI, SBP, pneumonia, cellulitis — most common trigger), GI bleeding (variceal/ulcer), constipation, hypokalemia & metabolic alkalosis, diuretic overuse/dehydration, sedatives/benzodiazepines, and high protein load."
      },
      {
        "q": "3. What urgent diagnostic investigations must be performed immediately?",
        "a": "- Infection source workup:\n  * Urinalysis (pyuria, nitrites, leukocyte esterase) and Urine Culture & sensitivity.\n  * Two sets of Blood Cultures.\n  * Diagnostic Paracentesis if any ascites is present on exam/ultrasound (ascitic PMN >= 250 cells/mm³ diagnoses SBP).\n  * Chest X-ray to exclude occult pneumonia.\n- Metabolic & hepatic workup:\n  * Immediate fingerstick/random blood glucose (exclude hypoglycemia!).\n  * CBC, comprehensive LFTs (bilirubin, ALT/AST, albumin), PT/INR, renal function (creatinine/urea), serum electrolytes (Na+, K+), and ABG.\n  * Note on Serum Ammonia: elevated ammonia supports HE, but normal ammonia should prompt search for alternative diagnoses and serial ammonia levels are NOT used to guide treatment.\n- Neuroimaging:\n  * Non-contrast CT brain is indicated if there is history of head trauma, focal neurological deficit, severe coagulopathy, or failure to improve with HE therapy."
      },
      {
        "q": "4. What is the immediate multi-pronged management protocol for infection-precipitated Hepatic Encephalopathy?",
        "a": "- 1. Treat the Precipitating Infection Immediately:\n  * Start empirical IV antibiotics for complicated UTI in cirrhosis (e.g., IV Ceftriaxone 1–2 g daily, or IV Piperacillin-Tazobactam / Carbapenem if septic shock or healthcare-associated/ESBL risk), then de-escalate per urine/blood culture results.\n- 2. Ammonia-Lowering Therapy:\n  * Lactulose (First-line): 30 mL (20 g) PO or via NG tube every 1–2 hours until bowel movement occurs, then titrate (typically 15–30 mL 2–4 times daily) to achieve 2–3 soft stools/day (acidifies colonic lumen converting NH3 -> non-absorbable NH4+ and exerts cathartic effect). Give as retention enema (300 mL lactulose in 700 mL water) if Grade III–IV or aspiration risk.\n  * Rifaximin 550 mg PO twice daily (non-absorbable oral antibiotic reducing ammonia-producing gut bacteria; add to lactulose for refractory HE or secondary prophylaxis).\n- 3. Supportive & Metabolic Correction:\n  * Correct hypokalemia (which increases renal ammonia genesis) and dehydration with cautious IV fluids; correct hypoglycemia.\n  * Hold diuretics temporarily and STRICTLY AVOID sedatives/benzodiazepines, opioids, and nephrotoxic drugs (NSAIDs/aminoglycosides).\n  * Do NOT restrict dietary protein (provide 1.2–1.5 g/kg/day once able to eat to prevent sarcopenia); protect airway if GCS <= 8."
      },
      {
        "q": "5. What is the post-discharge secondary prophylaxis and long-term prognosis for this patient?",
        "a": "- Secondary prophylaxis (mandatory after any overt HE episode):\n  * Continue lifelong maintenance Lactulose (titrated to 2–3 soft stools/day) PLUS Rifaximin 550 mg PO twice daily (reduces HE recurrence and hospitalization by > 50%).\n  * Educate patient and family on medication adherence, preventing constipation, and early recognition of confusion/infection.\n- Prognosis & long-term planning:\n  * Development of overt HE signifies decompensated cirrhosis with reduced 1-year survival (~40–50% without transplant).\n  * Calculate MELD-Na and Child-Pugh scores and refer for Liver Transplantation evaluation, plus maintain 6-monthly HCC ultrasound surveillance and variceal screening."
      }
    ]
  },
  {
    "id": 9,
    "title": "حالة 9: Hepatitis B Post-Exposure Prophylaxis (Needlestick Injury)",
    "topic": "Hepatitis B Post-Exposure Prophylaxis",
    "category": "Hepatitis & Jaundice",
    "scenario": "An unvaccinated medical intern sustains a needlestick from a patient known to be HBsAg-positive.",
    "questions": [
      {
        "q": "1. What are the exact immediate first-aid and administrative reporting steps following this needlestick injury?",
        "a": "- Immediate local wound care:\n  * Immediately wash the puncture site thoroughly with soap and water.\n  * DO NOT squeeze, milk, or scrub the wound, and DO NOT apply caustic agents (e.g., bleach) — expressing fluid does not reduce viral transmission and causes tissue trauma.\n  * If mucous membranes (eyes/mouth) were splashed, flush copiously with water or normal saline.\n- Immediate reporting & risk documentation:\n  * Report immediately to the hospital Infection Control Team / Occupational Health Clinic to log the Exposure Code (EC 1–3) and initiate urgent PEP within hours."
      },
      {
        "q": "2. What is the exact Hepatitis B Post-Exposure Prophylaxis (PEP) protocol for this unvaccinated intern exposed to an HBsAg-positive source?",
        "a": "- Dual Passive + Active Immunoprophylaxis (MUST be initiated as soon as possible, ideally within 24 hours, and up to 7 days after percutaneous exposure):\n  * 1. Hepatitis B Immune Globulin (HBIG): 1 dose (0.06 mL/kg IM) immediately — provides immediate passive anti-HBs neutralizing antibodies.\n  * 2. Recombinant Hepatitis B Vaccine: 1st dose (20 µg IM in the deltoid) immediately, administered at a DIFFERENT anatomical site from HBIG (e.g., opposite deltoid muscles) so HBIG does not neutralize the vaccine.\n  * 3. Complete the full 3-dose HepB vaccination series (standard schedule: 0, 1, and 6 months)."
      },
      {
        "q": "3. How does HBV PEP management change depending on the healthcare worker's prior vaccination and anti-HBs titer status?",
        "a": "- Per CDC / Al-Azhar PEP guidelines for an HBsAg-positive (or unknown) source:\n  * 1. Fully vaccinated WITH documented protective anti-HBs >= 10 mIU/mL: NO PEP required (no HBIG, no vaccine, source testing unnecessary).\n  * 2. Fully vaccinated with UNKNOWN anti-HBs titer: Test HCP's anti-HBs immediately — if >= 10 mIU/mL, no PEP; if < 10 mIU/mL, give 1 dose HBIG + 1 HepB vaccine booster (and complete revaccination/retest).\n  * 3. Known Vaccine Non-Responder (completed TWO full 3-dose HepB vaccine series with persistent anti-HBs < 10 mIU/mL): Give TWO doses of HBIG (1st dose immediately, 2nd dose 1 month later).\n  * 4. Unvaccinated or incompletely vaccinated (THIS INTERN): Give 1 dose HBIG + initiate/complete the 3-dose HepB vaccine series."
      },
      {
        "q": "4. What follow-up serologic testing is required for HBV, and what other bloodborne pathogens must be assessed in this needlestick?",
        "a": "- HBV follow-up testing:\n  * Check baseline intern serology (HBsAg, anti-HBs, total anti-HBc) to confirm susceptibility.\n  * Perform quantitative anti-HBs testing 1–2 months AFTER the final (3rd) HepB vaccine dose (and at least 6 months after HBIG so passive antibodies don't cause false positives) to confirm protective immunity (>= 10 mIU/mL); if < 10 mIU/mL, revaccinate.\n- Concurrent screening for HIV & HCV:\n  * HIV: Test source patient rapidly (if unknown) and intern at baseline; if source is HIV-positive, start 3-drug HIV PEP within 2 hours (max 72 hours) for 28 days.\n  * HCV: Test source for anti-HCV (and HCV RNA if positive); test intern at baseline and follow up with HCV RNA at 3–6 weeks and anti-HCV at 4–6 months — remember there is NO vaccine and NO PEP for HCV, but acute/chronic infection is > 95% curable with oral Direct-Acting Antivirals (DAAs)."
      },
      {
        "q": "5. Compare the percutaneous transmission risk of HBV, HCV, and HIV after a needlestick, and state key primary prevention measures for medical students/interns.",
        "a": "- Bloodborne transmission risk after a single needlestick ('Rule of 3s'):\n  * HBV: ~6–30% (highest infectivity — up to 30% if source is HBeAg-positive; up to 6% if HBeAg-negative).\n  * HCV: ~1.8–3%.\n  * HIV: ~0.3% (0.09% for mucous membrane splash).\n- Primary IPC prevention:\n  * Mandatory pre-clinical completion of the 3-dose Hepatitis B vaccine series with documented post-vaccination anti-HBs >= 10 mIU/mL for all medical students and healthcare personnel.\n  * Standard precautions: NEVER recap used needles, dispose of sharps immediately into rigid puncture-resistant containers, use safety-engineered needles, and wear gloves/eye protection."
      }
    ]
  },
  {
    "id": 10,
    "title": "حالة 10: Visceral Leishmaniasis (Kala-Azar)",
    "topic": "Visceral Leishmaniasis (Kala-Azar)",
    "category": "Lymphadenopathy & Spleen",
    "scenario": "A 27-year-old man who has lived in Sudan develops prolonged fever, marked weight loss, and massive splenomegaly with hepatomegaly. Investigations show pancytopenia, high total protein, and low albumin.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of massive splenomegaly with fever, and which findings in this case are classic?",
        "a": "- Most likely diagnosis: Visceral Leishmaniasis (Kala-Azar).\n- Differential diagnosis of massive (huge) splenomegaly (per Hawari Practical):\n  * Infectious/parasitic: Visceral leishmaniasis (Kala-Azar), hyperreactive malarial splenomegaly (tropical splenomegaly syndrome), Egyptian/bilharzial splenomegaly (S. mansoni with portal hypertension/hypersplenism), disseminated TB/histoplasmosis.\n  * Hematologic/neoplastic: Chronic myeloid leukemia (CML), myelofibrosis, polycythemia rubra vera, thalassemia major, hairy cell leukemia/lymphoma.\n- Justifying features in this case:\n  * Geographic epidemiology: residence in Sudan (East Africa — one of the world's highest-burden foci alongside India and Brazil).\n  * Clinical hallmark: prolonged fever, cachexia/weight loss, and massive splenomegaly with hepatomegaly.\n  * Classic lab signature: pancytopenia (hypersplenism + bone marrow macrophage infiltration) AND marked polyclonal hypergammaglobulinemia causing high total protein with low albumin (reversed A/G ratio)."
      },
      {
        "q": "2. Name the causative parasite, insect vector, life-cycle stages, and the meaning of 'Kala-Azar'.",
        "a": "- Causative organism: Intracellular protozoan parasite of the Leishmania donovani complex (L. donovani in Sudan & India; L. infantum in the Mediterranean/Middle East; L. chagasi in Latin America).\n- Vector & transmission:\n  * Bite of an infected female sandfly (Phlebotomus species in the Old World; Lutzomyia in the New World).\n- Two morphological stages:\n  * Promastigote (infective flagellated elongated stage): lives in the midgut/proboscis of the female sandfly and is injected into human skin.\n  * Amastigote (diagnostic non-flagellated ovoid stage, 2–4 µm, with nucleus + rod-shaped kinetoplast — Leishman-Donovan / LD bodies): multiplies inside human reticuloendothelial macrophages of the spleen, liver (Kupffer cells), bone marrow, and lymph nodes.\n- Origin of 'Kala-Azar': Means 'Black Fever' due to dry, rough, grayish-dark hyperpigmentation of the skin (hands, feet, abdomen, face) seen in chronic disease."
      },
      {
        "q": "3. What are the confirmatory parasitological and serological investigations (and their relative safety/sensitivity)?",
        "a": "- Gold-Standard Parasitological Confirmation (Giemsa-stained microscopy showing intracellular amastigotes / LD bodies inside macrophages):\n  * Splenic aspirate: highest sensitivity (> 95%), BUT carries risk of fatal splenic hemorrhage — strictly contraindicated if severe thrombocytopenia, coagulopathy/low prothrombin, or uncooperative patient.\n  * Bone marrow aspirate (most commonly performed safely in hospital practice): sensitivity ~60–85%; also confirms hypercellular marrow/infiltration.\n  * Lymph node aspirate (useful in Sudan) or buffy-coat smear (in HIV co-infection); culture on Novy-MacNeal-Nicolle (NNN) medium grows promastigotes.\n- Non-invasive Serology & Molecular Tests:\n  * rK39 rapid immunochromatographic dipstick / ELISA (high sensitivity in immunocompetent patients; lower sensitivity in East Africa/HIV).\n  * Direct Agglutination Test (DAT) and PCR on peripheral blood/bone marrow (highest sensitivity in HIV co-infection).\n  * Aldehyde (Formol-gel) test: non-specific screening clue reflecting severe hypergammaglobulinemia."
      },
      {
        "q": "4. What is the first-line and alternative antiparasitic treatment for Visceral Leishmaniasis?",
        "a": "- First-line drug of choice (WHO / highest efficacy, lowest toxicity):\n  * IV Liposomal Amphotericin B (AmBisome): 3 mg/kg/day IV on days 1–5, 14, and 21 (total 21 mg/kg in immunocompetent; higher total dose 40 mg/kg in HIV-co-infected patients).\n- Regional / Alternative regimens:\n  * East Africa / Sudan standard combination (WHO): Sodium Stibogluconate (pentavalent antimonial, 20 mg/kg/day IM/IV) PLUS Paromomycin (15 mg/kg/day IM) for 17 days (monitor ECG QTc, pancreas/amylase, and LFTs for antimonial toxicity).\n  * Oral Miltefosine (2.5 mg/kg/day for 28 days): effective oral agent (teratogenic — strictly contraindicated in pregnancy!).\n- Supportive therapy: Nutritional rehabilitation, packed RBC/platelet transfusion for severe cytopenias/bleeding, and prompt treatment of intercurrent bacterial infections; screen for HIV co-infection."
      },
      {
        "q": "5. What are the major complications (including post-treatment skin sequelae) and preventive measures?",
        "a": "- Complications (untreated Kala-Azar is > 90% fatal within 2 years):\n  * Life-threatening secondary bacterial infections (pneumonia, dysentery, sepsis, cancrum oris/noma) due to profound leukopenia.\n  * Severe mucosal/GI hemorrhage due to thrombocytopenia and impaired hepatic prothrombin synthesis.\n  * Post-Kala-Azar Dermal Leishmaniasis (PKDL): macular, papular, or nodular skin rash appearing months to years after apparent cure (very common in Sudan [~50%] and India); skin lesions harbor amastigotes and serve as an important human reservoir for sandflies.\n  * Frequent relapse in HIV co-infection (requires secondary prophylaxis + ART).\n- Prevention:\n  * Sandfly bite protection: fine-mesh insecticide-treated bed nets, insect repellents, protective clothing, indoor residual spraying, and early diagnosis/treatment of active cases and PKDL (no licensed human vaccine)."
      }
    ]
  },
  {
    "id": 11,
    "title": "حالة 11: Cryptococcal Meningitis in HIV/AIDS (DD: Tuberculous Meningitis)",
    "topic": "Cryptococcal Meningitis (HIV)",
    "category": "Meningitis & CNS",
    "scenario": "A 40-year-old IV drug user complains of fever and headache over the past 10 days. On physical examination, his neck is stiff, and his lungs and skin are clear. He has a mild disturbed conscious level. He has been tested for HIV and is found to be positive. A lumbar puncture revealed high protein, low glucose, and lymphocytosis.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the critical differential diagnosis in this HIV-positive patient, and which features justify your choice?",
        "a": "- Most likely diagnosis: Cryptococcal Meningoencephalitis (Cryptococcus neoformans) in advanced HIV/AIDS (typically CD4 < 100 cells/µL).\n- Critical Differential Diagnosis (MUST actively exclude concurrently):\n  * Tuberculous Meningitis (TBM) — produces an almost identical subacute lymphocytic CSF with high protein and low glucose in HIV/IVDU patients!\n  * Neurosyphilis, CNS toxoplasmosis (usually focal deficits + ring-enhancing brain lesions), Primary CNS lymphoma, PML, and HIV aseptic meningitis.\n- Justifying features in this case:\n  * Newly diagnosed HIV-positive IV drug user with subacute 10-day progression of fever, headache, neck stiffness, and disturbed consciousness.\n  * Classic CSF triad for fungal/TB meningitis: lymphocytic pleocytosis, elevated protein, and low glucose (note: in profound AIDS, CSF WBCs may even be deceptively low < 20/µL)."
      },
      {
        "q": "2. What is the causative organism, environmental source, and pathogenesis of raised intracranial pressure in Cryptococcal meningitis?",
        "a": "- Causative organism: Cryptococcus neoformans — an encapsulated budding yeast (found worldwide in soil contaminated by pigeon/bird droppings and eucalyptus trees).\n- Pathogenesis:\n  * Acquired via inhalation of aerosolized basidiospores/yeast cells -> asymptomatic or mild pulmonary focus -> silent hematogenous dissemination to the CNS in hosts with impaired cell-mediated immunity (HIV CD4 < 100/µL, steroids, transplant).\n  * Thick polysaccharide glucuronoxylomannan (GXM) capsule resists phagocytosis and sheds polysaccharide into the arachnoid villi, mechanically obstructing CSF reabsorption -> causes severe, communicating raised intracranial pressure (ICP > 25 cmH2O) that leads to papilledema, cranial nerve VI palsy, blindness, and brainstem herniation."
      },
      {
        "q": "3. Which definitive CSF tests confirm Cryptococcal meningitis and simultaneously exclude Tuberculous meningitis?",
        "a": "- Specific tests for Cryptococcus neoformans:\n  * 1. CSF Cryptococcal Capsular Antigen (CrAg) by Lateral Flow Assay (LFA) or latex agglutination: GOLD STANDARD rapid test (> 95–99% sensitive and specific; also test serum CrAg).\n  * 2. India Ink stain of centrifuged CSF sediment: reveals round budding yeasts surrounded by a clear refractile halo (capsule) in ~70–85% of HIV patients.\n  * 3. Fungal culture on Sabouraud dextrose agar (and blood cultures) + document CSF opening pressure (typically markedly elevated > 25 cmH2O).\n  * 4. Special tissue stains if biopsied: Mucicarmine (stains capsule red) or Gomori Methenamine Silver (GMS).\n- Mandatory concurrent tests to rule out TBM and stage HIV:\n  * CSF Ziehl-Neelsen (AFB) smear, CSF GeneXpert MTB/RIF Ultra, and mycobacterial culture.\n  * CD4+ T-cell count, quantitative HIV RNA viral load, and brain MRI/CT (if focal deficits or poor response)."
      },
      {
        "q": "4. Outline the 3-phase antifungal regimen, ICP management, and the critical timing rule for starting Antiretroviral Therapy (ART).",
        "a": "- 3-Phase Antifungal Therapy (WHO / IDSA / Al-Azhar Fungal Lecture):\n  * 1. Induction Phase (at least 2 weeks): IV Liposomal Amphotericin B (3–4 mg/kg/day; or Amphotericin B deoxycholate 0.7–1.0 mg/kg/day) PLUS Oral Flucytosine (100 mg/kg/day divided q6h) [if flucytosine is unavailable, combine Amphotericin B + High-dose Fluconazole 800–1200 mg/day].\n  * 2. Consolidation Phase (8 weeks, after clinical improvement & CSF sterilization): Oral Fluconazole 400–800 mg once daily.\n  * 3. Maintenance / Secondary Prophylaxis: Oral Fluconazole 200 mg once daily indefinitely (until CD4 > 100–200 cells/µL and undetectable HIV viral load sustained for >= 3–6 months on ART).\n- Aggressive ICP Management (Life-Saving!):\n  * If opening pressure >= 25 cmH2O with symptoms, perform DAILY therapeutic lumbar punctures removing 20–30 mL CSF to reduce pressure by 50% or to < 20 cmH2O (acetazolamide and steroids are NOT effective and steroids increase mortality!).\n- CRITICAL ART Timing Rule:\n  * DELAY initiating ART for 4–6 weeks AFTER starting antifungal therapy — starting ART early precipitates fatal CNS Immune Reconstitution Inflammatory Syndrome (CNS-IRIS)."
      },
      {
        "q": "5. What major drug toxicities and disease complications require close hospital monitoring?",
        "a": "- Disease complications:\n  * Refractory raised ICP -> irreversible optic atrophy/blindness, cranial nerve palsies (especially CN VI), coma, and herniation.\n  * Paradoxical CNS-IRIS after ART initiation.\n- Antifungal toxicities to monitor daily:\n  * Amphotericin B: dose-limiting nephrotoxicity (pre-hydrate with 1 L 0.9% NaCl before infusion), severe hypokalemia and hypomagnesemia (supplement K+ and Mg2+ proactively), infusion-related rigors/fever, and normocytic anemia.\n  * Flucytosine: dose-dependent bone marrow suppression (neutropenia, thrombocytopenia) and hepatotoxicity — monitor CBC and LFTs closely."
      }
    ]
  },
  {
    "id": 12,
    "title": "حالة 12: Viral (Aseptic) Meningitis",
    "topic": "Viral (Aseptic) Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 65-year-old patient with nuchal rigidity and headache undergoes lumbar puncture. CSF contains a markedly increased number of lymphocytes, normal protein, and a normal glucose level.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the single most common causative organism group, and which CSF findings justify your choice?",
        "a": "- Most likely diagnosis: Viral (Aseptic) Meningitis.\n- Most common causative organisms:\n  * Non-polio Enteroviruses (Coxsackievirus and Echovirus) — account for > 80% of all viral meningitis cases (especially summer/autumn).\n  * Other viral causes: Herpes Simplex Virus type 2 (HSV-2 — classic cause of recurrent benign lymphocytic 'Mollaret' meningitis), Varicella-Zoster Virus (VZV), Mumps virus, Arboviruses (e.g., West Nile virus — important in elderly > 60 yrs), and acute HIV seroconversion.\n- Justifying CSF features in this case:\n  * Marked lymphocytic pleocytosis WITH completely NORMAL protein and NORMAL glucose — the hallmark CSF profile of viral meningitis (ruling against untreated bacterial or tuberculous meningitis)."
      },
      {
        "q": "2. Contrast the classic CSF parameters of Viral (Aseptic) vs Bacterial (Septic) vs Tuberculous meningitis.",
        "a": "- Viral (Aseptic) Meningitis:\n  * Appearance: Clear | Opening pressure: Normal or mildly elevated (< 180 mmH2O).\n  * Cells: 10–500 WBCs/µL, predominantly lymphocytes (early < 24h may briefly show neutrophils).\n  * Protein: Normal or mildly elevated (50–100 mg/dL) | Glucose: NORMAL (> 45 mg/dL; CSF/serum ratio >= 0.6).\n- Bacterial (Septic) Meningitis:\n  * Appearance: Cloudy/purulent | Pressure: High (> 180–200 mmH2O).\n  * Cells: > 1,000 WBCs/µL, predominantly neutrophils (PMNs).\n  * Protein: Markedly elevated (> 150 mg/dL) | Glucose: LOW (< 40 mg/dL; ratio < 0.4).\n- Tuberculous Meningitis:\n  * Appearance: Opalescent/cloudy with cobweb coagulum | Pressure: High.\n  * Cells: 100–500 WBCs/µL, predominantly lymphocytes.\n  * Protein: Very high (100–500 mg/dL) | Glucose: LOW (< 40 mg/dL)."
      },
      {
        "q": "3. Which confirmatory CSF and blood investigations should be sent?",
        "a": "- Specific viral identification:\n  * CSF Multiplex Meningitis/Encephalitis PCR Panel: Enterovirus RT-PCR, HSV-1 & HSV-2 PCR, and VZV PCR (rapid gold standard).\n  * Arbovirus IgM serology (e.g., West Nile virus CSF/serum IgM) in older adults during mosquito season.\n  * 4th-generation HIV Ag/Ab + HIV RNA if clinically indicated.\n- Mandatory exclusion of bacterial mimics:\n  * CSF Gram stain and aerobic bacterial culture (negative in aseptic meningitis).\n  * Simultaneous paired serum glucose (to confirm true normal CSF-to-serum ratio) and 2 sets of blood cultures.\n- Neuroimaging (MRI brain): indicated if any altered consciousness, seizures, or focal neurological signs appear (which would shift diagnosis to Encephalitis)."
      },
      {
        "q": "4. What is the management strategy for viral meningitis, and what critical age-specific OSCE safety precaution applies to this 65-year-old patient?",
        "a": "- Definitive management of uncomplicated enteroviral meningitis:\n  * Self-limited illness resolving spontaneously within 7–14 days.\n  * Supportive therapy: analgesics (paracetamol/NSAIDs) for headache, antipyretics, antiemetics, quiet darkened room for photophobia, and IV/oral hydration.\n- Critical OSCE Safety Precaution in a 65-year-old patient:\n  * Never withhold empirical therapy if clinical severity or diagnostic uncertainty exists (e.g., early partially treated bacterial meningitis or Listeria monocytogenes in age > 50): initiate empirical IV Ceftriaxone + Vancomycin + Ampicillin (for Listeria) while awaiting 48-hour negative CSF cultures and positive viral PCR, then safely discontinue antibiotics.\n  * If HSV-2 meningitis is severe/immunocompromised (or if any encephalopathy suggests HSV encephalitis), administer IV Acyclovir 10 mg/kg q8h."
      },
      {
        "q": "5. Besides viruses, what are the important non-viral causes of 'aseptic' (culture-negative lymphocytic) meningitis?",
        "a": "- Infectious non-viral causes:\n  * Partially treated bacterial meningitis (prior oral antibiotics before LP).\n  * Tuberculous meningitis (early stage), fungal meningitis (Cryptococcus), spirochetal (Neurosyphilis, Leptospirosis, Lyme disease), Rickettsial, and parameningeal suppurative foci (sinusitis, mastoiditis, epidural/brain abscess).\n- Non-infectious causes:\n  * Drug-induced aseptic meningitis (NSAIDs, TMP-SMX, IVIG, metronidazole, azathioprine).\n  * Autoimmune/inflammatory: SLE, Behçet's disease, neurosarcoidosis.\n  * Neoplastic: leptomeningeal carcinomatosis or lymphoma (crucial in a 65-year-old if symptoms persist -> send CSF cytology)."
      }
    ]
  },
  {
    "id": 13,
    "title": "حالة 13: Pseudomonas aeruginosa Septic Shock (ICU Nosocomial Sepsis)",
    "topic": "Pseudomonas Septic Shock",
    "category": "Sepsis & ICU Scores",
    "scenario": "A 60-year-old ICU patient developed septic shock due to Pseudomonas aeruginosa infection.",
    "questions": [
      {
        "q": "1. Define Sepsis and Septic Shock (Sepsis-3 criteria), and explain the bedside difference between qSOFA and SOFA scores.",
        "a": "- Sepsis (Sepsis-3): Life-threatening organ dysfunction caused by a dysregulated host response to infection, operationalized as an acute increase in SOFA score >= 2 points.\n- Septic Shock: A subset of sepsis with profound circulatory and cellular/metabolic abnormalities requiring:\n  * Vasopressors to maintain Mean Arterial Pressure (MAP) >= 65 mmHg, AND\n  * Serum Lactate > 2 mmol/L (> 18 mg/dL), DESPITE adequate IV fluid resuscitation (carries > 40% hospital mortality).\n- qSOFA vs SOFA (per Hawari Practical):\n  * qSOFA (rapid bedside screening, NO labs needed — 1 pt each, >= 2 = high mortality risk): 'A' Altered mentation (GCS < 15), 'B' Systolic BP <= 100 mmHg, 'R' Respiratory Rate >= 22/min.\n  * SOFA (ICU organ dysfunction/prognosis score — 0–4 pts across 6 organ systems, REQUIRES labs): Respiratory (PaO2/FiO2), Coagulation (Platelets), Liver (Bilirubin), CVS (MAP/vasopressors), CNS (GCS), Renal (Creatinine/urine output)."
      },
      {
        "q": "2. Why is Pseudomonas aeruginosa a feared ICU pathogen, what are its risk factors, and what is its pathognomonic skin lesion?",
        "a": "- Microbiological profile: Non-lactose-fermenting, oxidase-positive, obligate aerobic Gram-negative bacillus producing blue-green pyocyanin pigment and grape-like odor; notorious for intrinsic and acquired multidrug resistance (efflux pumps, porin loss, AmpC beta-lactamases, carbapenemases, and biofilm formation on devices).\n- Major ICU risk factors:\n  * Prolonged ICU stay (> 48 hours), endotracheal intubation/mechanical ventilation (VAP), indwelling central venous catheters (CLABSI) or urinary catheters (CAUTI), prior broad-spectrum antibiotic exposure, neutropenia, severe burns, and structural lung disease (bronchiectasis/cystic fibrosis).\n- Pathognomonic cutaneous sign of Pseudomonas bacteremia:\n  * Ecthyma gangrenosum: rapidly evolving painless erythematous macules/vesicles that ulcerate into dark necrotic black eschars with a surrounding erythematous halo (caused by bacterial invasion of cutaneous venules/perivascular necrosis)."
      },
      {
        "q": "3. What urgent diagnostic investigations must be performed as part of the Surviving Sepsis Campaign Hour-1 Bundle?",
        "a": "- Microbiological sampling (BEFORE antibiotics, provided it causes ZERO delay > 45 minutes):\n  * At least TWO sets of blood cultures (aerobic + anaerobic, drawn peripherally and from any indwelling central line > 48h old to check differential time to positivity).\n  * Targeted site cultures for source identification: endotracheal aspirate/BAL (if ventilated), urine culture, wound/catheter-tip culture.\n- Biomarkers & Organ-Dysfunction / SOFA Labs:\n  * Baseline Serum Lactate (repeat within 2–4 hours if > 2 mmol/L to monitor lactate clearance).\n  * CBC with differential, coagulation profile (PT/INR, aPTT, D-dimer, fibrinogen for DIC), serum creatinine/electrolytes, bilirubin/LFTs, ABG (PaO2/FiO2 ratio, metabolic/lactic acidosis), and Procalcitonin.\n- Bedside imaging: Portable Chest X-ray and focused abdominal/line ultrasound to identify drainable infectious foci."
      },
      {
        "q": "4. Outline the immediate Hour-1 hemodynamic resuscitation, empirical dual antipseudomonal therapy, and source control protocol.",
        "a": "- 1. Hemodynamic Resuscitation (Hour-1 Bundle):\n  * Rapid IV balanced crystalloid (Ringer's lactate or 0.9% NaCl) 30 mL/kg within the first 3 hours for hypotension or lactate >= 4 mmol/L.\n  * First-line Vasopressor: IV Norepinephrine titrated to maintain MAP >= 65 mmHg (add Vasopressin 0.03 units/min or Epinephrine if MAP remains < 65).\n  * Refractory septic shock: IV Hydrocortisone 200 mg/day (50 mg q6h).\n- 2. Empirical Dual Antipseudomonal IV Antibiotics (start WITHIN 1 HOUR in septic shock to maximize coverage against MDR strains):\n  * Backbone Antipseudomonal Beta-lactam: IV Piperacillin-Tazobactam 4.5 g q6h, OR Cefepime 2 g q8h, OR Ceftazidime 2 g q8h, OR Meropenem 1 g q8h (preferred if ESBL/prior resistance).\n  * PLUS a Second Antipseudomonal Agent from a different class: IV Amikacin 15–20 mg/kg daily (or Gentamicin) OR IV Ciprofloxacin 400 mg q8h.\n  * Note: For confirmed carbapenem-resistant P. aeruginosa (CRPA), escalate to Ceftolozane-Tazobactam, Ceftazidime-Avibactam, or Colistin-based regimens; de-escalate to single targeted therapy once susceptibilities return (typical duration 7–14 days).\n- 3. Urgent Source Control:\n  * Immediately remove/replace infected central venous or urinary catheters and surgically drain any abscess or necrotic tissue."
      },
      {
        "q": "5. What ICU complications should you anticipate, and what Infection Prevention & Control (IPC) measures prevent Pseudomonas outbreaks?",
        "a": "- Major ICU complications:\n  * Acute Respiratory Distress Syndrome (ARDS — lung-protective ventilation 6 mL/kg IBW), Acute Kidney Injury (requiring RRT if severe), Disseminated Intravascular Coagulation (DIC), stress ulcer GI bleeding, septic cardiomyopathy, and Multi-Organ Dysfunction Syndrome (MODS).\n- Hospital IPC & Prevention:\n  * Strict 5-moments hand hygiene and Contact Precautions (gloves + gown + dedicated equipment) for MDR/carbapenem-resistant Pseudomonas.\n  * Implement ICU care bundles: VAP bundle (head-of-bed 30–45°, oral hygiene, daily sedation vacation), CLABSI bundle (maximal sterile barrier, daily review for early line removal), CAUTI bundle, and rigorous Antimicrobial Stewardship."
      }
    ]
  },
  {
    "id": 14,
    "title": "حالة 14: HIV/AIDS Assessment, Opportunistic Infections & ART",
    "topic": "HIV / AIDS",
    "category": "Other Infections & Parasites",
    "scenario": "A 45-year-old man is diagnosed with AIDS.",
    "questions": [
      {
        "q": "1. What are the exact criteria defining AIDS (WHO Stage 4 / CDC Stage 3 HIV), and list the hallmark AIDS-defining opportunistic conditions?",
        "a": "- Diagnostic Definition of AIDS (either criterion suffices):\n  * 1. CD4+ T-lymphocyte count < 200 cells/µL (or CD4 percentage < 14%), OR\n  * 2. Diagnosis of ANY AIDS-defining opportunistic infection or malignancy regardless of CD4 count.\n- Hallmark AIDS-Defining Conditions (per Al-Azhar HIV Lecture):\n  * Fungal: Pneumocystis jirovecii pneumonia (PCP), Esophageal candidiasis, Cryptococcal meningitis, Disseminated histoplasmosis.\n  * Bacterial/Mycobacterial: Active Tuberculosis (pulmonary or extrapulmonary), Disseminated Mycobacterium avium complex (MAC), recurrent bacterial pneumonia/Salmonella septicemia.\n  * Parasitic: Cerebral toxoplasmosis, chronic intestinal cryptosporidiosis (> 1 month).\n  * Viral: CMV retinitis/colitis/esophagitis, Progressive Multifocal Leukoencephalopathy (PML — JC virus), chronic mucocutaneous HSV (> 1 month).\n  * Malignancies & Syndromes: Kaposi sarcoma (HHV-8), Primary CNS lymphoma / Burkitt lymphoma (EBV), invasive cervical cancer (HPV), HIV wasting syndrome, and HIV-associated dementia."
      },
      {
        "q": "2. How is HIV infection confirmed diagnostically, and what comprehensive baseline laboratory workup must be ordered at diagnosis?",
        "a": "- Diagnostic confirmation algorithm (note window periods):\n  * Step 1 Screening: 4th-generation HIV-1/2 Antigen/Antibody combination immunoassay (detects p24 antigen + HIV-1/2 antibodies; window period ~18–45 days).\n  * Step 2 Confirmation: HIV-1/HIV-2 antibody differentiation assay; if indeterminate or acute seroconversion suspected, perform quantitative HIV-1 RNA Nucleic Acid Test (NAT — shortest window period 10–33 days).\n- Mandatory Baseline Workup after AIDS diagnosis:\n  * Immunologic & virologic staging: CD4+ T-cell count (guides OI prophylaxis) and baseline quantitative HIV-1 RNA viral load (+/- HIV genotypic drug-resistance testing).\n  * Co-infection screening (HIGH YIELD in Egypt): Active TB exclusion (symptom screen + CXR + sputum GeneXpert/TST/IGRA), Hepatitis B panel (HBsAg, anti-HBs, anti-HBc — essential because TDF/3TC treats both HIV and HBV), Hepatitis C (anti-HCV + HCV RNA), Syphilis (VDRL/TPHA), Toxoplasma IgG, and Serum Cryptococcal Antigen (CrAg if CD4 < 100/µL).\n  * Organ baseline: CBC, renal function (eGFR/creatinine/urinalysis before TDF), LFTs, fasting lipid profile, and blood glucose."
      },
      {
        "q": "3. Outline the CD4-guided primary chemoprophylaxis protocol against opportunistic infections in AIDS.",
        "a": "- CD4 < 200 cells/µL — Pneumocystis jirovecii Pneumonia (PCP) Prophylaxis:\n  * First-line: Oral Trimethoprim-Sulfamethoxazole (TMP-SMX) 1 double-strength tablet (160/800 mg) once daily (or 3x/week); Alternative: Dapsone 100 mg daily (check G6PD) or Atovaquone.\n- CD4 < 100 cells/µL + Positive Toxoplasma IgG — Cerebral Toxoplasmosis Prophylaxis:\n  * First-line: Oral TMP-SMX 1 double-strength tablet (160/800 mg) once daily (protects against BOTH PCP and Toxoplasmosis).\n  * Also perform Serum CrAg screening (give pre-emptive Fluconazole if positive after ruling out meningitis).\n- CD4 < 50 cells/µL — Mycobacterium avium complex (MAC):\n  * Routine primary prophylaxis is NOT needed if ART is started immediately; if ART is delayed, give Oral Azithromycin 1,200 mg once weekly.\n- Latent TB (positive TST >= 5 mm or IGRA after ruling out active TB): Isoniazid + Pyridoxine for 6–9 months (or 3HP).\n- Stopping rule: Primary PCP/Toxoplasma prophylaxis may be safely stopped once CD4 > 200 cells/µL sustained for >= 3 months on ART."
      },
      {
        "q": "4. What is the preferred first-line Antiretroviral Therapy (ART) regimen, its goals, and when should ART initiation be briefly delayed?",
        "a": "- Preferred First-Line ART Regimen (WHO & Egyptian National AIDS Program — 2 NRTIs + 1 INSTI):\n  * Tenofovir Disoproxil Fumarate (TDF 300 mg) + Lamivudine (3TC 300 mg) or Emtricitabine (FTC 200 mg) + Dolutegravir (DTG 50 mg) once daily as a single fixed-dose combination pill.\n- Core Goals of ART:\n  * Achieve maximal, durable viral suppression (HIV RNA < 50 copies/mL).\n  * Restore CD4+ T-cell count and immune function, reducing opportunistic infections, morbidity, and mortality.\n  * Prevent onward transmission ('Undetectable = Untransmittable' / U=U).\n- Timing & IRIS Precaution:\n  * Start ART immediately/same week for ALL HIV patients regardless of CD4 count.\n  * Critical exceptions to prevent fatal CNS Immune Reconstitution Inflammatory Syndrome (IRIS): DELAY ART by 4–6 weeks in Cryptococcal meningitis and by ~2 weeks in TB meningitis (and 2 weeks in pulmonary TB with CD4 < 50)."
      },
      {
        "q": "5. What vaccinations are recommended vs contraindicated in AIDS, and what counseling prevents HIV transmission?",
        "a": "- Recommended Inactivated/Recombinant Vaccines:\n  * Hepatitis B vaccine (if anti-HBs negative; double-dose schedule often used in low CD4), Pneumococcal conjugate vaccine (PCV20 or PCV15 + PPSV23), Annual inactivated Influenza vaccine, Tdap, Hepatitis A (if non-immune), and Meningococcal vaccine.\n- STRICTLY CONTRAINDICATED Vaccines when CD4 < 200 cells/µL (Live Attenuated):\n  * BCG, MMR, Varicella/Zoster live vaccine, Yellow Fever vaccine, and Oral Polio/Typhoid vaccines.\n- Transmission prevention & supportive care:\n  * Lifelong daily ART adherence (U=U), consistent condom use, Pre-Exposure Prophylaxis (PrEP: TDF/FTC) for HIV-negative sexual partners (discordant couples), no sharing of needles/razors, and screening for cardiovascular/metabolic comorbidities and drug-drug interactions."
      }
    ]
  },
  {
    "id": 15,
    "title": "حالة 15: Congenital Toxoplasmosis (Classic Sabin's Triad)",
    "topic": "Congenital Toxoplasmosis",
    "category": "Other Infections & Parasites",
    "scenario": "A neonate presents with chorioretinitis, hydrocephalus, and intracranial calcifications.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is this classic triad called, and how does it differ from Congenital CMV infection?",
        "a": "- Most likely diagnosis: Congenital Toxoplasmosis caused by transplacental transmission of Toxoplasma gondii.\n- Classic Triad (Sabin's Triad / Tetrad with convulsions):\n  * 1. Chorioretinitis (macular/retinal scarring — most common manifestation).\n  * 2. Hydrocephalus (obstructive ventriculomegaly).\n  * 3. Diffuse Intracranial Calcifications (scattered throughout cerebral cortex and basal ganglia).\n- High-Yield TORCH Differentiation vs Congenital Cytomegalovirus (CMV):\n  * Congenital Toxoplasmosis: DIFFUSE intracranial calcifications + HYDROCEPHALUS + severe chorioretinitis.\n  * Congenital CMV: PERIVENTRICULAR calcifications + MICROCEPHALY + sensorineural hearing loss + petechial 'blueberry muffin' rash + hepatosplenomegaly.\n  * Other TORCH DD: Congenital Rubella (cataracts, PDA, deafness), Congenital Syphilis (snuffles, periostitis), Congenital HSV, and Zika virus."
      },
      {
        "q": "2. Describe the causative parasite, maternal modes of transmission, and the inverse relationship between gestational age and fetal severity.",
        "a": "- Causative organism: Obligate intracellular protozoan Toxoplasma gondii.\n  * Definitive host: Domestic and wild cats (sexual cycle occurs in feline intestine shedding infectious oocysts in cat feces).\n  * Intermediate hosts: Humans, sheep, cattle, pigs, birds (harbor invasive tachyzoites during acute infection and dormant tissue cysts containing bradyzoites in muscle/brain).\n- Maternal acquisition routes:\n  * Ingestion of sporulated oocysts from cat-feces-contaminated soil, unwashed raw vegetables/fruits, or unfiltered water.\n  * Ingestion of viable tissue cysts in raw or undercooked meat (lamb, beef, pork).\n- Crucial Obstetrical Rule (per Prof. Naser Toxoplasmosis Lecture):\n  * Transplacental transmission rate INCREASES with gestational age: ~15% in 1st trimester -> ~30% in 2nd trimester -> ~60% in 3rd trimester.\n  * Severity of fetal injury is INVERSELY proportional to gestational age: 1st-trimester infection causes the most devastating CNS/ocular defects or miscarriage (+++), whereas 3rd-trimester infections are often asymptomatic at birth (~85% appear normal at birth but can relapse later)."
      },
      {
        "q": "3. How is congenital toxoplasmosis diagnosed prenatally and confirmed in the neonate?",
        "a": "- Maternal & Prenatal Diagnosis:\n  * Maternal Toxoplasma serology (IgM + IgG + IgG Avidity test: LOW IgG avidity indicates recent acute infection within the past 3–4 months; HIGH avidity excludes recent infection).\n  * Amniocentesis at >= 18 weeks' gestation (and >= 4 weeks after maternal infection) for T. gondii PCR on amniotic fluid (gold standard prenatal test) + serial fetal ultrasonography.\n- Neonatal Confirmation:\n  * Infant Toxoplasma-specific IgM and IgA antibodies (do NOT cross the placenta — positive in neonate confirms congenital infection; note maternal IgG crosses placenta passively).\n  * Serial infant IgG monitoring: persistent or rising IgG beyond 12 months of age confirms infection.\n  * T. gondii PCR of neonatal blood, CSF, and urine.\n  * Comprehensive staging: Cranial Ultrasound / CT brain (diffuse calcifications & hydrocephalus), dilated ophthalmologic fundoscopy (chorioretinitis), auditory brainstem response (hearing test), CBC, and LFTs."
      },
      {
        "q": "4. Compare the treatment of acute toxoplasmosis in pregnancy (before vs after fetal infection) with the treatment of this affected neonate.",
        "a": "- Maternal Acute Infection During Pregnancy:\n  * 1. Suspected maternal infection (< 18 weeks or before confirmed fetal infection): Oral Spiramycin 3 g/day (1 g tid) until delivery or amniocentesis results — concentrates in the placenta and reduces vertical transmission by ~60%.\n  * 2. Confirmed Fetal Infection (positive amniotic PCR or acquisition >= 18 weeks): Switch to Oral Pyrimethamine + Sulfadiazine + Folinic Acid (Leucovorin) to treat the fetus in utero. (STRICT RULE: NEVER use Pyrimethamine in the 1st trimester due to teratogenicity!).\n- Definitive Treatment of the Affected Neonate (12-Month Course):\n  * Oral Pyrimethamine (loading 2 mg/kg/day x 2 days, then 1 mg/kg/day x 2–6 months, then 3x/week) PLUS Oral Sulfadiazine (100 mg/kg/day divided bid) PLUS Folinic Acid (Leucovorin 10 mg 3x/week to prevent folate-deficiency bone marrow suppression) for 12 months.\n  * Adjunctive Prednisone (1 mg/kg/day) if active macular chorioretinitis or CSF protein > 1 g/dL.\n  * Neurosurgical evaluation for ventriculoperitoneal (VP) shunt if progressive obstructive hydrocephalus is present."
      },
      {
        "q": "5. What long-term sequelae require follow-up, and how can pregnant women prevent primary toxoplasmosis?",
        "a": "- Long-term sequelae (even in infants asymptomatic at birth):\n  * Late reactivating ocular chorioretinitis in adolescence/20s leading to progressive vision loss or blindness.\n  * Seizures/epilepsy, developmental delay/intellectual disability, motor deficits/cerebral palsy, microcephaly, and sensorineural hearing loss.\n- Primary Prevention in Pregnancy (High-Yield Patient Counseling):\n  * Cook all meats thoroughly to internal temperature >= 66°C (or freeze to -20°C before cooking); avoid raw/undercooked meats.\n  * Wash fruits and vegetables thoroughly and wash hands/knives after handling raw meat or gardening/soil.\n  * Avoid cleaning cat litter boxes during pregnancy (or delegate to another person; keep domestic cats indoors and do not feed them raw meat)."
      }
    ]
  },
  {
    "id": 16,
    "title": "حالة 16: Herpes Simplex Virus (HSV-1) Encephalitis",
    "topic": "HSV Encephalitis",
    "category": "Meningitis & CNS",
    "scenario": "A 38-year-old woman presents with high-grade fever, confusion, and seizures. MRI shows temporal lobe involvement.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the differential diagnosis of fever with confusion and seizures, and which features confirm it?",
        "a": "- Most likely diagnosis: Herpes Simplex Virus (HSV-1) Encephalitis — the most common cause of sporadic, fatal viral encephalitis in immunocompetent adults.\n- Differential diagnosis of fever + altered mental status + seizures:\n  * Acute bacterial meningitis, brain abscess / subdural empyema, autoimmune encephalitis (especially anti-NMDA receptor encephalitis — classic mimic in young women), other viral encephalitides (VZV, arboviruses/West Nile, enteroviruses), tuberculous meningoencephalitis, cerebral malaria, and CNS vasculitis/status epilepticus.\n- Justifying features in this case:\n  * Classic clinical triad of viral encephalitis: high-grade fever, acute encephalopathy/confusion, and seizures.\n  * Pathognomonic neuroimaging clue: selective Temporal Lobe involvement on Brain MRI."
      },
      {
        "q": "2. How does Encephalitis differ clinically from Meningitis, and what is the pathogenesis of HSV-1 temporal lobe tropism?",
        "a": "- Clinical distinction (Encephalitis vs Meningitis):\n  * Meningitis (leptomeningeal inflammation): headache, fever, neck stiffness, photophobia — mental status is typically preserved early.\n  * Encephalitis (brain parenchymal inflammation): EARLY altered level of consciousness (confusion, lethargy, coma), bizarre behavior/personality changes, memory loss, aphasia, focal neurological deficits, and focal/generalized seizures (may coexist as meningoencephalitis).\n- Pathogenesis of HSV-1 Encephalitis:\n  * > 90% of adult cases are caused by HSV-1 (HSV-2 predominates in neonates via vertical transmission).\n  * Following latent persistence in the trigeminal/dorsal root ganglia, viral reactivation (or primary infection) spreads retrogradely along olfactory or trigeminal nerve fibers to the medial temporal lobe, insular cortex, and inferior frontal lobe, causing acute asymmetric hemorrhagic necrotizing encephalitis."
      },
      {
        "q": "3. What are the definitive CSF, MRI, and EEG findings in HSV-1 Encephalitis?",
        "a": "- 1. Gold-Standard Confirmatory Test — CSF HSV-1/2 DNA PCR:\n  * Sensitivity > 95%, specificity > 99%.\n  * Clinical pearl: CSF PCR can occasionally be FALSE-NEGATIVE in the first 24–48 hours of illness — if clinical/MRI suspicion remains high, continue IV Acyclovir and repeat LP/PCR in 3–7 days.\n- 2. Routine CSF Profile:\n  * Lymphocytic pleocytosis (10–500 cells/µL), moderately elevated protein (0.5–1.5 g/L), NORMAL glucose, and frequently elevated RBCs (erythrocytes) or xanthochromia in a non-traumatic tap due to hemorrhagic temporal lobe necrosis.\n- 3. Brain MRI (Most Sensitive Imaging — superior to CT):\n  * T2-weighted / FLAIR / DWI hyperintensity, cortical swelling, and possible hemorrhage involving unilateral or asymmetric bilateral medial temporal lobes, insula, and inferior frontal lobes.\n- 4. Electroencephalogram (EEG):\n  * Focal temporal slow waves and classic Periodic Lateralized Epileptiform Discharges (PLEDs)."
      },
      {
        "q": "4. What is the immediate life-saving antiviral regimen and supportive ICU management?",
        "a": "- Golden OSCE Emergency Rule:\n  * Start EMPIRICAL IV Acyclovir IMMEDIATELY upon clinical suspicion of viral encephalitis — NEVER delay for MRI or CSF PCR results (early treatment slashes mortality from > 70% down to ~15–20%).\n- Specific Antiviral Regimen:\n  * IV Acyclovir 10 mg/kg every 8 hours (30 mg/kg/day) infused slowly over 1 hour for 14–21 days (14 days minimum; 21 days in immunocompromised or persistent CSF PCR positivity).\n  * Crucial nephroprotection: maintain vigorous IV hydration and monitor serum creatinine daily to prevent Acyclovir crystal-induced obstructive nephropathy.\n  * Note: Also administer empirical IV Ceftriaxone + Vancomycin until bacterial meningitis is excluded by CSF analysis/cultures.\n- ICU & Neurological Supportive Care:\n  * Serial GCS monitoring (intubate immediately if GCS <= 8 or status epilepticus).\n  * Antiepileptic therapy (e.g., IV Levetiracetam or Phenytoin) for seizure control, antipyretics, correction of hyponatremia (SIADH), and ICP management (head elevation 30°, mannitol/hypertonic saline if severe cerebral edema)."
      },
      {
        "q": "5. What is the prognosis and what long-term neuropsychiatric sequelae affect survivors of HSV-1 Encephalitis?",
        "a": "- Prognosis:\n  * Untreated mortality exceeds 70%; even with timely IV Acyclovir, mortality remains ~15–30%, with poorer outcomes in older age, low GCS (< 6) at presentation, and treatment delay > 48 hours.\n- Long-term Post-Encephalitic Sequelae (common in up to 50% of survivors due to limbic/temporal destruction):\n  * Severe anterograde/retrograde amnesia and cognitive disability.\n  * Dysphasia/aphasia and persistent epilepsy.\n  * Personality and neuropsychiatric changes (post-encephalitic syndrome: behavioral disinhibition, agitation, hypomania, or Kluver-Bucy-like hyperorality/hyperphagia)."
      }
    ]
  },
  {
    "id": 17,
    "title": "حالة 17: Urosepsis (Escherichia coli)",
    "topic": "Urosepsis",
    "category": "Sepsis & ICU Scores",
    "scenario": "A 60-year-old febrile patient developed sepsis following a urinary tract infection.",
    "questions": [
      {
        "q": "1. What is the most common causative organism of urosepsis, and what other uropathogens must be considered in complicated or catheterized elderly patients?",
        "a": "- Most common causative organism: Uropathogenic Escherichia coli (UPEC) — responsible for ~70–80% of community-acquired UTIs and ~50% of urosepsis cases.\n- Other important uropathogens in complicated/elderly/catheterized patients:\n  * Gram-negative Enterobacterales: Klebsiella pneumoniae, Proteus mirabilis (urease-positive -> struvite stones), Enterobacter spp., Serratia spp.\n  * Non-fermenting Gram-negative: Pseudomonas aeruginosa (catheterized, prior antibiotics, urologic instrumentation).\n  * Gram-positive cocci: Enterococcus faecalis/faecium and Staphylococcus saprophyticus (young women) or S. aureus (hematogenous seeding)."
      },
      {
        "q": "2. What is the primary route of infection, what risk factors predispose a 60-year-old to urosepsis, and which bedside scores assess severity?",
        "a": "- Route of entry: Ascending infection (most common) — fecal/perineal flora colonize urethra -> bladder (cystitis) -> ascend ureters to renal pelvis/parenchyma (acute pyelonephritis) -> invade renal vasculature causing bacteremia and urosepsis.\n- Predisposing factors for complicated UTI / urosepsis in a 60-year-old:\n  * Urinary tract obstruction (nephrolithiasis, benign prostatic hyperplasia [BPH], strictures, pelvic malignancy — highest risk for rapid septic shock!).\n  * Indwelling Foley catheter or recent urologic instrumentation.\n  * Diabetes mellitus, chronic kidney disease, neurogenic bladder, and immunosuppression.\n- Bedside clinical & severity assessment (per Hawari Practical):\n  * Examine for fever with rigors, costovertebral angle (CVA) tenderness, suprapubic tenderness, and hemodynamic instability.\n  * Apply qSOFA (RR >= 22, SBP <= 100, GCS < 15; >= 2 = high risk) and SOFA score (acute increase >= 2 points defines Sepsis)."
      },
      {
        "q": "3. What urgent microbiological, laboratory, and imaging investigations are required?",
        "a": "- Microbiological confirmation (BEFORE first antibiotic dose, without delaying therapy):\n  * Two sets of Blood Cultures (positive in ~20–40% of urosepsis).\n  * Clean-catch midstream Urine Culture (or fresh catheter-port sample; replace old catheter first if > 1–2 weeks old) with full antimicrobial susceptibility testing.\n  * Urinalysis & dipstick: microscopic pyuria (> 10 WBCs/HPF), bacteriuria, WBC casts (diagnostic of pyelonephritis), positive leukocyte esterase and nitrites.\n- Sepsis & organ-function labs:\n  * Serum Lactate, CBC (leukocytosis/left shift or thrombocytopenia), serum creatinine/urea/electrolytes, LFTs, coagulation/DIC screen, CRP/procalcitonin, and ABG.\n- Urgent Urinary Tract Imaging (MANDATORY in urosepsis!):\n  * Urgent Renal & Pelvic Ultrasound (or non-contrast CT KUB) to immediately rule out obstructive uropathy (stone/hydronephrosis), emphysematous pyelonephritis, or renal/perinephric abscess."
      },
      {
        "q": "4. What is the immediate Sepsis Hour-1 resuscitation, empirical IV antibiotic regimen, and source-control priority?",
        "a": "- 1. Immediate Hemodynamic Resuscitation (Hour-1 Bundle):\n  * IV isotonic crystalloid 30 mL/kg within 3 hours for hypotension or lactate >= 4 mmol/L.\n  * IV Norepinephrine if MAP remains < 65 mmHg despite fluids.\n- 2. Empirical Broad-Spectrum IV Antibiotics (start within 1 hour; tailor to local ESBL/Pseudomonas risk):\n  * Community-acquired without septic shock/ESBL risk: IV Ceftriaxone 1–2 g once daily (or IV Ciprofloxacin 400 mg q12h / Levofloxacin 750 mg daily if local fluoroquinolone resistance < 10%).\n  * Septic shock, catheterized, recent antibiotics, or high ESBL risk: IV Carbapenem (Meropenem 1 g q8h or Imipenem/Cilastatin 500 mg–1 g q6–8h) OR IV Piperacillin-Tazobactam 4.5 g q6–8h OR IV Cefepime 2 g q8h.\n  * Duration: continue IV until afebrile and clinically stable for 24–48 hours, then step down to targeted oral therapy for a total of 10–14 days (7–10 days if prompt source control).\n- 3. Emergent Urological Source Control (CRITICAL):\n  * An obstructed, infected kidney ('pus under pressure') is a urologic emergency — antibiotics alone will fail! Perform immediate decompression via ureteral double-J (DJ) stent or percutaneous nephrostomy; remove/replace any indwelling Foley catheter."
      },
      {
        "q": "5. What severe complications of urosepsis must be monitored, and how are hospital CAUTIs prevented?",
        "a": "- Serious complications:\n  * Septic shock and multi-organ failure (mortality 20–40%), Acute Kidney Injury (AKI), renal or perinephric abscess, emphysematous pyelonephritis (gas-forming necrotizing infection in diabetics), renal papillary necrosis, and DIC.\n- Prevention of Catheter-Associated UTI (CAUTI) & Urosepsis:\n  * Strictly limit urinary catheter placement to clear medical indications, use aseptic closed-drainage insertion, keep drainage bag below bladder level, review catheter necessity daily for earliest removal, and definitively treat underlying BPH or urinary stones."
      }
    ]
  },
  {
    "id": 18,
    "title": "حالة 18: Tuberculous Meningitis (TBM)",
    "topic": "Tuberculous Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 43-year-old Asian man presents with headache and neck stiffness. CT brain is normal, and a lumbar puncture shows cloudy CSF with glucose 3.3 mmol/L, protein 0.7 g/L, and WBC count 100/mm³ (70% lymphocytes).",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is your differential diagnosis, and which epidemiological and CSF clues support your choice?",
        "a": "- Most likely diagnosis: Tuberculous Meningitis (TBM) caused by Mycobacterium tuberculosis.\n- Differential diagnosis of lymphocytic meningitis with elevated protein:\n  * Viral (aseptic) meningitis (typically clear CSF and normal glucose), Cryptococcal meningitis (especially in HIV/immunocompromised), partially treated bacterial meningitis, Neurosyphilis, Brucellar neurobrucellosis, and leptomeningeal malignancy.\n- Justifying features in this case:\n  * Epidemiology: 43-year-old man from Asia (high TB-endemic region).\n  * Clinical presentation: headache and neck stiffness (TBM classically evolves subacutely over 1–3 weeks with basilar meningeal involvement).\n  * CSF pattern: cloudy appearance (often forms a classic fibrin 'cobweb' pellicle on standing), lymphocytic predominance (100 WBCs/mm³, 70% lymphocytes), elevated protein (0.7 g/L; normal < 0.45 g/L), and reduced/borderline glucose (3.3 mmol/L, especially if low relative to simultaneous serum glucose)."
      },
      {
        "q": "2. Explain the pathogenesis of Tuberculous Meningitis and its characteristic clinical stages (BMRC grading).",
        "a": "- Pathogenesis:\n  * Hematogenous dissemination of M. tuberculosis during primary infection or reactivation seeds small subpial/subependymal tubercles (Rich foci) in the cortex or meninges.\n  * Rupture of a Rich focus into the subarachnoid space releases bacilli and triggers a dense, gelatinous basilar exudate around the brainstem, optic chiasm, cranial nerves (CN III, IV, VI, VII), and basal cisterns -> causes obliterative endarteritis (strokes) and CSF outflow obstruction (hydrocephalus).\n- BMRC Clinical Staging (predicts prognosis):\n  * Stage I: Conscious, oriented (GCS 15), no focal neurological deficits (fever, headache, meningism).\n  * Stage II: Mildly altered consciousness (GCS 11–14) OR focal neurological signs (e.g., cranial nerve palsy, hemiparesis).\n  * Stage III: Severe coma (GCS <= 10), seizures, stupor, or severe hemiplegia/paraplegia."
      },
      {
        "q": "3. What specific CSF microbiological, molecular, and neuroimaging tests confirm Tuberculous Meningitis?",
        "a": "- Direct CSF Microbiological & Molecular Tests (draw a LARGE volume of CSF >= 6–10 mL to maximize yield):\n  * 1. CSF GeneXpert MTB/RIF Ultra (NAAT): rapid (< 2 hours) detection of M. tuberculosis DNA AND rifampicin resistance (first-line rapid diagnostic).\n  * 2. CSF Ziehl-Neelsen (Acid-Fast Bacilli / AFB) smear: high specificity, bright red rods, though low sensitivity (~20–40%) due to paucibacillary CSF.\n  * 3. Mycobacterial Culture (Gold Standard for sensitivity & drug susceptibility): Liquid MGIT (1–3 weeks) and solid Löwenstein-Jensen medium (4–8 weeks).\n  * 4. CSF Adenosine Deaminase (ADA): elevated (> 10 U/L) supports TBM.\n- Neuroimaging & Extracranial TB Search:\n  * Contrast-Enhanced Brain MRI (much more sensitive than plain CT, which can be normal early!): classic triad of basilar meningeal enhancement, communicating/obstructive hydrocephalus, and basal ganglia infarcts (+/- tuberculomas).\n  * Chest X-ray (miliary or apical TB in ~30–50%), sputum AFB/GeneXpert, and mandatory HIV screening."
      },
      {
        "q": "4. What is the exact anti-TB drug regimen, total duration, and mandatory adjunctive corticosteroid therapy for TB Meningitis?",
        "a": "- Golden Rule: NEVER wait for mycobacterial culture confirmation to start anti-TB therapy when TBM is clinically suspected (delay dramatically worsens mortality and disability).\n- Prolonged Multi-Drug Anti-TB Regimen (Total duration: 9–12 MONTHS — longer than the 6-month pulmonary TB regimen, per Hawari Practical & Al-Azhar TB Lecture):\n  * Intensive Phase (2 months): 4 drugs (HRZE) — Isoniazid (H) + Rifampicin (R) + Pyrazinamide (Z) + Ethambutol (E) [Note: add Pyridoxine / Vitamin B6 25–50 mg/day to prevent INH peripheral neuropathy].\n  * Continuation Phase (7–10 months): 2 drugs (HR) — Isoniazid + Rifampicin (total 9–12 months under Directly Observed Therapy / DOT).\n- MANDATORY Adjunctive Systemic Corticosteroids (Proven to reduce mortality and neurological sequelae in ALL TBM patients!):\n  * IV Dexamethasone (0.3–0.4 mg/kg/day initially) or Oral Prednisolone tapered gradually over 6–8 weeks — reduces basilar exudative inflammation, vasculitis, and cerebral edema."
      },
      {
        "q": "5. What major neurological complications and first-line anti-TB drug toxicities must be monitored?",
        "a": "- Major neurological complications of TBM (per Al-Azhar Fever with DCL lecture):\n  * Obstructive/communicating hydrocephalus (may require ventriculoperitoneal shunt or external ventricular drain).\n  * Cranial nerve palsies (especially CN VI, III, II -> optic atrophy and blindness in ~5%).\n  * Ischemic strokes (hemiplegia/paraplegia from endarteritis of lenticulostriate arteries), seizures, SIADH (hyponatremia), and spinal arachnoiditis.\n- First-line Anti-TB Drug Toxicities to monitor:\n  * Isoniazid (H): hepatotoxicity, peripheral neuropathy (prevent with Pyridoxine).\n  * Rifampicin (R): hepatotoxicity, orange-red discoloration of urine/tears, potent CYP450 inducer.\n  * Pyrazinamide (Z): hepatotoxicity, hyperuricemia/gout.\n  * Ethambutol (E): retrobulbar optic neuritis (red-green color blindness, decreased visual acuity — baseline & monthly vision checks).\n- Prevention: BCG vaccine at birth (specifically protects infants against severe disseminated miliary TB and TBM)."
      }
    ]
  },
  {
    "id": 19,
    "title": "حالة 19: Active Hepatitis B Virus (HBV) Infection (Serology Interpretation)",
    "topic": "Hepatitis B Virus (HBV) Infection",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 42-year-old dentist is reviewed in the medical clinic complaining of persistent lethargy. Routine blood tests show abnormal liver function tests, and a hepatitis screen shows HBsAg positive and total anti-HBc positive.",
    "questions": [
      {
        "q": "1. What do these serological results demonstrate, and which single additional test distinguishes acute from chronic HBV infection?",
        "a": "- Interpretation: Current ACTIVE Hepatitis B Virus (HBV) infection (either acute or chronic; persistent lethargy + abnormal LFTs in an occupationally exposed 42-year-old dentist strongly favors Chronic Active Hepatitis B).\n- Crucial differentiating marker — IgM anti-HBc (and duration of HBsAg):\n  * Acute HBV infection: HBsAg POSITIVE + IgM anti-HBc POSITIVE (appears early; persists < 6 months).\n  * Chronic HBV infection: HBsAg POSITIVE persisting > 6 months + Total (IgG) anti-HBc POSITIVE + IgM anti-HBc NEGATIVE + anti-HBs NEGATIVE.\n  * Clinical pearl: IgM anti-HBc can occasionally reappear at low titers during severe acute flares/reactivation of chronic HBV."
      },
      {
        "q": "2. Interpret ALL major Hepatitis B serological profiles tested in OSCE exams.",
        "a": "- Core HBV Serology Pattern Recognition (per Al-Azhar Chronic Hepatitis Lecture):\n  * HBsAg (-) | Total anti-HBc (-) | anti-HBs (-): Susceptible (never infected, unvaccinated -> vaccinate!).\n  * HBsAg (-) | Total anti-HBc (-) | anti-HBs (+): Immune due to Hepatitis B Vaccination (vaccine contains HBsAg only, so anti-HBc is NEVER produced).\n  * HBsAg (-) | Total anti-HBc (+) | anti-HBs (+): Immune due to Resolved Natural Infection.\n  * HBsAg (+) | IgM anti-HBc (+) | anti-HBs (-): Acute HBV Infection.\n  * HBsAg (+) | Total anti-HBc (+) | IgM anti-HBc (-) | anti-HBs (-): Chronic HBV Infection (HBsAg > 6 months).\n  * HBsAg (-) | IgM anti-HBc (+) | anti-HBs (-): 'Window Period' of acute HBV (HBsAg has cleared before anti-HBs rises).\n  * HBsAg (-) | Total anti-HBc (+) | anti-HBs (-): Isolated Core Antibody (resolved infection with waned anti-HBs, occult HBV, or false positive -> check HBV DNA)."
      },
      {
        "q": "3. What additional virologic, biochemical, co-infection, and fibrosis assessments are required for this dentist?",
        "a": "- Virologic & replicative assessment:\n  * HBeAg and anti-HBe: determines high-infectivity/replicative status (HBeAg+) vs HBeAg-negative chronic hepatitis.\n  * Quantitative HBV DNA PCR (IU/mL): directly measures viral replication and guides antiviral treatment decisions.\n- Liver injury, synthetic function & fibrosis staging:\n  * Full LFT panel (ALT, AST, ALP, GGT, total/direct bilirubin, albumin) and PT/INR + CBC (platelets).\n  * Non-invasive fibrosis assessment (preferred first): FIB-4 index, APRI score, and Transient Elastography (FibroScan) — remember normal ALT does NOT exclude significant fibrosis!\n  * Baseline Abdominal Ultrasound (assess liver parenchyma, portal hypertension/splenomegaly, and screen for HCC).\n- Mandatory Co-infection Screening:\n  * Anti-HDV antibody (reflex HDV RNA — HDV requires HBsAg and accelerates cirrhosis!), Anti-HCV, HIV 4th-gen Ag/Ab, and IgG anti-HAV (vaccinate against HAV if non-immune)."
      },
      {
        "q": "4. What are the indications for antiviral therapy in Chronic HBV, the first-line drugs, and the expected treatment endpoints?",
        "a": "- Main indications for starting antiviral therapy (WHO / EASL 2025):\n  * ANY patient with cirrhosis and detectable HBV DNA (regardless of ALT level).\n  * Non-cirrhotic chronic HBV with elevated ALT (> ULN) AND elevated HBV DNA (>= 2,000 IU/mL) OR evidence of significant fibrosis (>= F2 on FibroScan/FIB-4) or necroinflammation.\n  * High-risk groups (e.g., family history of HCC, extrahepatic manifestations, or before starting chemotherapy/immunosuppression/anti-CD20 to prevent fatal HBV reactivation).\n- First-line Antiviral Agents (Oral Nucleos(t)ide Analogues with high barrier to resistance):\n  * Entecavir (0.5 mg PO daily), OR\n  * Tenofovir Disoproxil Fumarate (TDF 300 mg PO daily), OR\n  * Tenofovir Alafenamide (TAF 25 mg PO daily — preferred if renal impairment or osteoporosis).\n- Treatment endpoints:\n  * Ideal endpoint (rarely achieved): HBsAg loss with anti-HBs seroconversion.\n  * Realistic endpoints: undetectable HBV DNA, ALT normalization, and in HBeAg+ patients, HBeAg loss/anti-HBe seroconversion (continue >= 6–12 months after seroconversion); in HBeAg-negative disease or cirrhosis, therapy is generally indefinite."
      },
      {
        "q": "5. What are the hepatic/extrahepatic complications, HCC surveillance protocol, and occupational implications for this dentist?",
        "a": "- Complications of Chronic HBV:\n  * Hepatic: progressive fibrosis -> cirrhosis -> portal hypertension, hepatic decompensation (ascites, variceal bleeding, HE), and Hepatocellular Carcinoma (HCC — UNIQUE TO HBV: can develop directly via viral DNA integration even WITHOUT cirrhosis!).\n  * Extrahepatic immune-complex manifestations: Polyarteritis Nodosa (PAN) and Membranous/Membranoproliferative Glomerulonephritis.\n- HCC Surveillance:\n  * Abdominal Ultrasound (+/- serum AFP) every 6 months in all cirrhotic HBV patients and high-risk non-cirrhotic patients (e.g., age > 40 men, Asian/African ethnicity, family history of HCC).\n- Occupational & Public Health Measures:\n  * Dentists perform exposure-prone invasive procedures: infected HCWs must follow occupational health guidelines — antiviral suppression to maintain HBV DNA below threshold (typically < 200–1,000 IU/mL) is required to safely continue exposure-prone dental procedures.\n  * Screen and vaccinate household and sexual contacts; avoid alcohol and hepatotoxins."
      }
    ]
  },
  {
    "id": 20,
    "title": "حالة 20: HIV Post-Exposure Prophylaxis (Occupational Needlestick)",
    "topic": "HIV Post-Exposure Prophylaxis (PEP)",
    "category": "Other Infections & Parasites",
    "scenario": "A health care assistant sustains a needlestick injury while taking blood from a patient known to be HIV-positive.",
    "questions": [
      {
        "q": "1. Following immediate wound washing, what are the exact urgent assessment and reporting steps for this HIV needlestick exposure?",
        "a": "- Confirm proper first-aid wound care:\n  * Wash exposed skin thoroughly with soap and water WITHOUT scrubbing, squeezing, or applying caustic agents/bleach.\n- Immediate Reporting & Risk Stratification (per Al-Azhar PEP Lecture):\n  * Immediately notify the hospital Infection Control Team and the local HIV Governorate Focal Point (National AIDS Program).\n  * Determine Exposure Code (EC 1–3): percutaneous hollow-bore venipuncture needle visibly contaminated with blood from an intravenous draw = high-risk Exposure Code 3 (EC 3).\n  * Determine Source Code (SC 1 vs SC 2): assess source patient's HIV viral load, CD4 count, clinical stage (asymptomatic low VL = SC 1; symptomatic AIDS/high VL = SC 2), and current ART/resistance history."
      },
      {
        "q": "2. What is the exact timing window, preferred 3-drug antiretroviral PEP regimen, and required duration?",
        "a": "- Critical Timing Window:\n  * Initiate antiretroviral Post-Exposure Prophylaxis (PEP) as an emergency — IDEALLY within 1–2 hours of injury, and NO LATER than 72 hours post-exposure (efficacy drops sharply after 72 hours).\n- Preferred 3-Drug HIV PEP Regimen (WHO / CDC — 2 NRTIs + 1 Integrase Inhibitor [INSTI]):\n  * Tenofovir Disoproxil Fumarate (TDF 300 mg) + Emtricitabine (FTC 200 mg) [or Lamivudine 3TC 300 mg] once daily\n  * PLUS Dolutegravir (DTG 50 mg once daily) [Alternative 3rd drug: Raltegravir 400 mg twice daily].\n  * Note: Always tailor regimen if the source patient is known to harbor drug-resistant HIV.\n- Mandatory Duration:\n  * Continuous daily therapy for 28 DAYS (4 weeks)."
      },
      {
        "q": "3. Outline the baseline and follow-up laboratory testing protocol for this healthcare assistant.",
        "a": "- Baseline Testing (Time Zero — do NOT delay 1st PEP dose while awaiting lab results!):\n  * 4th-generation HIV-1/2 Ag/Ab combo test (to confirm HCW is HIV-negative at baseline).\n  * Baseline safety labs: CBC, renal function (serum creatinine/eGFR before TDF), LFTs, and urine pregnancy test (if female of childbearing age).\n  * Concurrent bloodborne pathogen screening of both source and HCW: Hepatitis B (HBsAg, anti-HBs — give HBIG/vaccine if unvaccinated & source HBsAg+) and Hepatitis C (anti-HCV + HCV RNA if positive).\n- Follow-up Testing Schedule (per Al-Azhar PEP & CDC protocol):\n  * Toxicity check at 2 weeks: repeat CBC, creatinine, and LFTs.\n  * Serial HIV 4th-generation Ag/Ab testing at: 4–6 weeks (1 month) AND 12 weeks (3 months) post-exposure (extend to 6 months ONLY if HCV co-transmission occurred, which can delay HIV seroconversion)."
      },
      {
        "q": "4. Which body fluids transmit HIV vs which do not, and what factors increase percutaneous transmission risk?",
        "a": "- Average percutaneous transmission risk from an HIV-positive needlestick: ~0.3% (mucous membrane exposure ~0.09%).\n- Factors significantly increasing transmission risk:\n  * Deep puncture injury, hollow-bore needle previously inside a vein/artery, visible blood on the needle, and high source HIV viral load / advanced AIDS.\n- Body fluids KNOWN to transmit HIV:\n  * Blood, semen, vaginal/cervical secretions, breast milk, CSF, pleural, peritoneal, pericardial, synovial, and amniotic fluids.\n- Body fluids that DO NOT transmit HIV (unless visibly contaminated with blood):\n  * Saliva, tears, sweat, urine, feces, vomitus, and non-bloody respiratory secretions."
      },
      {
        "q": "5. What counseling is required during the 28-day PEP course, and how are occupational needlesticks prevented?",
        "a": "- Counseling during the 3-month follow-up window:\n  * Emphasize strict adherence to all 28 days of PEP and manage mild GI side effects proactively.\n  * Advise barrier contraception (condoms), refraining from blood/tissue/organ donation, and discussing temporary avoidance of breastfeeding until follow-up HIV tests confirm negative status.\n  * Instruct HCW to report immediately if symptoms of Acute Retroviral Syndrome occur (fever, rash, pharyngitis, lymphadenopathy, myalgia).\n- Primary Occupational IPC Prevention:\n  * Universal/standard precautions for all blood draws, NEVER recap used needles, dispose directly into puncture-resistant sharps boxes immediately at point of care, and use safety-engineered retractable needles."
      }
    ]
  },
  {
    "id": 21,
    "title": "حالة 21: Imported Malaria (Plasmodium falciparum — Returning Traveler)",
    "topic": "Malaria",
    "category": "Malaria & Vector-Borne",
    "scenario": "A 29-year-old woman presents with fever 2 weeks after returning from Kenya.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and most dangerous Plasmodium species in Kenya, and what is your differential diagnosis for fever in a returning traveler?",
        "a": "- Most likely diagnosis: Imported Malaria — MUST assume chloroquine-resistant Plasmodium falciparum until proven otherwise (P. falciparum accounts for > 90–99% of malaria in Kenya / East Africa and classically presents 7–14 days after exposure).\n- Differential diagnosis of fever 2 weeks after returning from East Africa:\n  * Enteric (Typhoid/Paratyphoid) fever (incubation 7–18 days).\n  * Arboviruses: Dengue fever, Chikungunya, Rift Valley fever, Yellow fever, and Viral Hemorrhagic Fevers (Ebola/Marburg/CCHF).\n  * Leptospirosis, Rickettsial spotted fevers (African tick bite fever), acute HIV seroconversion, acute Hepatitis A/E, and acute Schistosomiasis (Katayama fever)."
      },
      {
        "q": "2. Outline the malaria life cycle, vector, classic paroxysm stages, and fever periodicity across Plasmodium species.",
        "a": "- Vector & Life Cycle:\n  * Transmitted by the bite of an infected female Anopheles mosquito (feeds dusk-to-dawn) injecting sporozoites -> liver schizogony (5–21 days; P. vivax & P. ovale form dormant hepatic HYPNOZOITES causing late relapses months to years later) -> merozoites invade RBCs (erythrocytic schizogony) -> cyclic RBC rupture releases hemozoin pigment & GPI toxins triggering intense cytokine-mediated fever.\n- Classic Malarial Paroxysm (3 stages):\n  * 1. Cold stage (1–2 hours): intense shivering/rigors and peripheral vasoconstriction.\n  * 2. Hot stage (2–6 hours): high fever (40–41°C), headache, tachycardia, flushed dry skin.\n  * 3. Sweating stage (2–4 hours): profuse diaphoresis and rapid defervescence (note: early P. falciparum fever is often irregular/continuous rather than classic periodic!).\n- Periodicity by species:\n  * 48 hours (Tertian): P. falciparum (malignant tertian — infects RBCs of ALL ages -> high parasitemia & microvascular cytoadherence via PfEMP1), P. vivax & P. ovale (benign tertian — infect reticulocytes).\n  * 72 hours (Quartan): P. malariae (infects old RBCs; linked to nephrotic syndrome).\n  * 24 hours (Quotidian): P. knowlesi (Southeast Asia, simian malaria, severe hyperparasitemia)."
      },
      {
        "q": "3. What is the gold-standard diagnostic investigation, what specific microscopic clues identify P. falciparum, and what complementary tests are used?",
        "a": "- 1. Gold Standard — Giemsa-Stained Thick and Thin Peripheral Blood Smears:\n  * Thick smear: examines larger blood volume -> HIGHEST SENSITIVITY to detect parasites (screening).\n  * Thin smear: preserved RBC morphology -> used for SPECIES IDENTIFICATION and quantification of % PARASITEMIA.\n  * CRITICAL OSCE RULE: A single negative blood smear does NOT exclude malaria — repeat thick & thin smears every 12–24 hours for at least 3 consecutive negative sets!\n  * Pathognomonic P. falciparum thin-smear features: delicate 'headphone' ring-form trophozoites with DOUBLE chromatin dots, multiple rings inside a single normal-sized RBC (appliqué/accolé forms), and crescent/banana-shaped gametocytes.\n- 2. Rapid Diagnostic Tests (RDTs): immunochromatographic detection of PfHRP-2 (specific for P. falciparum) and parasite LDH (pLDH); complements microscopy rapidly.\n- 3. Baseline severity labs: CBC (thrombocytopenia is very common + hemolytic anemia), random blood glucose (hypoglycemia!), RFTs, LFTs/bilirubin, ABG/lactate, and coagulation screen."
      },
      {
        "q": "4. State the criteria defining Severe Malaria and the exact antimalarial treatment protocols for Uncomplicated vs Severe P. falciparum and Relapsing (P. vivax/ovale) malaria.",
        "a": "- Criteria for Severe Malaria (>= 1 criterion = medical emergency requiring ICU & parenteral therapy):\n  * Impaired consciousness/coma (Cerebral malaria) or repeated seizures; Severe anemia (Hb < 7 g/dL); Acute Kidney Injury / Blackwater fever (hemoglobinuria); ARDS/pulmonary edema; Shock/circulatory collapse; DIC/spontaneous bleeding; Metabolic acidosis (lactate > 5 mmol/L); Hypoglycemia (< 40 mg/dL); Jaundice with organ dysfunction; Hyperparasitemia >= 5%.\n- Treatment of Uncomplicated Chloroquine-Resistant P. falciparum (Kenya):\n  * First-line Oral Artemisinin-based Combination Therapy (ACT): Artemether-Lumefantrine (Coartem) for 3 days (6 doses) OR Atovaquone-Proguanil (Malarone) for 3 days (or Dihydroartemisinin-Piperaquine).\n  * Admit for 12–24h observation and repeat blood smears every 12–24h to document falling parasitemia.\n- Treatment of Severe / Complicated Malaria (including in pregnancy!):\n  * IMMEDIATE IV Artesunate 2.4 mg/kg at 0, 12, and 24 hours, then once daily until the patient can tolerate a full 3-day oral ACT course (monitor for delayed post-artesunate hemolytic anemia at weeks 1–4).\n- Anti-Relapse / Radical Cure for P. vivax or P. ovale:\n  * Add Oral Primaquine (15–30 mg base daily for 14 days) or single-dose Tafenoquine to eradicate hepatic hypnozoites — MANDATORY G6PD deficiency testing and pregnancy exclusion BEFORE giving Primaquine/Tafenoquine (risk of severe acute hemolysis!)."
      },
      {
        "q": "5. What chemoprophylaxis and vector-avoidance measures prevent malaria for future travelers to Kenya?",
        "a": "- Travel Chemoprophylaxis for Chloroquine-Resistant Areas (Kenya / Sub-Saharan Africa):\n  * Atovaquone-Proguanil (Malarone 250/100 mg): 1 tablet daily starting 1–2 days before travel, daily during stay, and for 7 days after leaving.\n  * OR Doxycycline 100 mg: 1 tablet daily starting 1–2 days before, daily during stay, and for 28 days after leaving (avoid in pregnancy & children < 8 yrs; warn about photosensitivity & pill esophagitis).\n  * OR Mefloquine 250 mg: 1 tablet weekly starting >= 2 weeks before, weekly during stay, and for 4 weeks after leaving (safe in pregnancy; avoid in neuropsychiatric illness or SE Asia).\n- Personal Vector Protection:\n  * Permethrin-treated bed nets, DEET/picaridin insect repellents, long-sleeved light-colored clothing from dusk to dawn, and screened/air-conditioned rooms.\n- Endemic Pediatric Vaccination: WHO-recommended RTS,S/AS01 (Mosquirix) and R21/Matrix-M vaccines for children in moderate-to-high transmission Sub-Saharan Africa."
      }
    ]
  },
  {
    "id": 22,
    "title": "حالة 22: Staphylococcal Food Poisoning (Preformed Enterotoxin)",
    "topic": "Staphylococcal Food Poisoning",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 29-year-old woman develops severe vomiting four hours after having lunch at a local restaurant.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the causative pathogen/mechanism, and why is the 4-hour incubation period the decisive diagnostic clue?",
        "a": "- Most likely diagnosis: Staphylococcal Food Poisoning (preformed Staphylococcus aureus enterotoxin gastroenteritis).\n- Mechanism:\n  * Caused by ingesting PREFORMED, HEAT-STABLE enterotoxins (e.g., SEA–SEE) already produced by S. aureus multiplying in improperly refrigerated food (classically cream-filled pastries, mayonnaise/potato salads, meats, and dairy contaminated by infected food handlers' hands/skin lesions) — NOT by active bacterial invasion of the gut.\n- Decisive Incubation Clue (30 minutes to 6–8 hours):\n  * Because the toxin is already preformed before ingestion, symptoms begin abruptly within 1–6 hours (4 hours in this patient) with severe, projectile nausea and vomiting, abdominal cramps, mild watery diarrhea, and typically NO fever.\n  * Main short-incubation differential: Emetic Bacillus cereus syndrome (1–6 hours, preformed cereulide toxin, classically linked to reheated fried rice/pasta)."
      },
      {
        "q": "2. Compare incubation periods and hallmark clinical patterns of the major foodborne poisoning pathogens.",
        "a": "- Incubation Period Guide (per Prof. Sabry Al-Ghannam Al-Azhar Food Poisoning Lecture):\n  * 30 min – 8 hours (Abrupt vomiting, afebrile): Staphylococcus aureus enterotoxin; Emetic Bacillus cereus (reheated rice).\n  * 6 – 24 hours (Abdominal cramps & watery diarrhea): Clostridium perfringens (bulk-cooked meat/gravy); Diarrheal Bacillus cereus.\n  * 12 – 48 hours (Vomiting + watery diarrhea, outbreaks): Norovirus.\n  * 6 hours – 6 days (Diarrhea, cramps, +/- fever): Non-typhoidal Salmonella (poultry, eggs); Vibrio parahaemolyticus (seafood).\n  * 1 – 10 days (Inflammatory / BLOODY diarrhea): Campylobacter jejuni (poultry/raw milk -> Guillain-Barré), Shigella, and Shiga toxin-producing E. coli / STEC O157:H7 (severe cramps, bloody stools -> HUS; AVOID antibiotics!).\n  * 12 – 72 hours (Neurological emergency — afebrile, diplopia, ptosis, dysphagia, descending flaccid paralysis): Clostridium botulinum (improperly canned/preserved foods or salted fish [feseekh])."
      },
      {
        "q": "3. Are stool cultures or laboratory investigations routinely needed in this patient, and when ARE investigations indicated?",
        "a": "- In this healthy 29-year-old with classic short-incubation afebrile vomiting:\n  * Routine stool microscopy, stool cultures, or toxin testing are NOT indicated — diagnosis is purely clinical and symptoms resolve spontaneously within 24–48 hours.\n- Indications for targeted investigations in foodborne illness:\n  * Serum electrolytes (Na+, K+) and renal function (creatinine/urea) ONLY if severe dehydration, persistent intractable vomiting, or IV fluid resuscitation is required.\n  * Stool culture / multiplex GI PCR / ova & parasites ONLY if: bloody diarrhea, high fever (> 38.5°C), severe abdominal pain, prolonged illness (> 7 days), immunocompromised/elderly host, or suspected restaurant outbreak.\n  * Public health action: ask whether other restaurant companions are ill — multiple linked cases require notifying local public health authorities for outbreak investigation."
      },
      {
        "q": "4. What is the cornerstone of management, and why are antibiotics strictly NOT indicated?",
        "a": "- Cornerstone of Management — REHYDRATION & Supportive Care:\n  * Assess hemodynamic status and hydration (vital signs, orthostasis, mucous membranes, urine output).\n  * Mild-to-moderate dehydration: Oral Rehydration Solution (ORS) given in small, frequent sips once vomiting subsides; resume light diet as tolerated.\n  * Severe dehydration, hypotension, or inability to tolerate oral fluids due to persistent vomiting: Isotonic IV fluid resuscitation (0.9% NaCl or Ringer's lactate) with electrolyte replacement.\n  * Symptomatic Antiemetic (e.g., IV/oral Ondansetron) may be used to control severe vomiting and facilitate oral rehydration.\n- CRITICAL OSCE ANTIBIOTIC RULE:\n  * ANTIBIOTICS ARE NOT INDICATED and provide ZERO benefit because the illness is mediated by a preformed bacterial toxin rather than replicating invasive bacteria (and antibiotics risk disrupting gut flora/inducing C. difficile)."
      },
      {
        "q": "5. What red-flag symptoms mandate urgent escalation, and what are the 4 practical food-safety rules to prevent Staphylococcal food poisoning?",
        "a": "- Red-flag warning signs requiring urgent hospital assessment:\n  * Hypotension/shock, oliguria/anuria (prerenal AKI), altered mental status, bloody stools, high fever, severe localized abdominal pain (exclude appendicitis/ischemia), or any cranial nerve/neurological weakness (diplopia, ptosis, dysphagia -> emergent botulism!).\n- CDC / WHO Four Practical Steps to Prevent Food Poisoning:\n  * 1. CLEAN: Thorough handwashing and surface sanitation; exclude food handlers with purulent skin lesions/boils or nasal/hand infections.\n  * 2. SEPARATE: Keep raw meat/poultry separate from ready-to-eat foods to prevent cross-contamination.\n  * 3. COOK: Cook foods thoroughly to safe internal temperatures (OSCE PEARL: S. aureus enterotoxin is HEAT-STABLE — reheating contaminated food kills the bacteria but DOES NOT destroy preformed toxin!).\n  * 4. CHILL: Refrigerate perishable foods promptly (< 4°C) and never leave cooked/cream foods at room temperature for > 2 hours (the single most important measure to stop S. aureus toxin synthesis)."
      }
    ]
  },
  {
    "id": 23,
    "title": "حالة 23: Esophageal Candidiasis (Candida albicans)",
    "topic": "Esophageal Candidiasis",
    "category": "Other Infections & Parasites",
    "scenario": "A 54-year-old neutropenic man undergoing cancer chemotherapy presents with difficult, painful swallowing. Endoscopy of the esophagus reveals multiple white plaques with no ulceration.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, the most common causative organism, and how does endoscopic appearance differentiate infectious causes of esophagitis?",
        "a": "- Most likely diagnosis: Esophageal Candidiasis (Candida esophagitis).\n- Most common causative organism: Candida albicans (~80–90% of mucosal cases); non-albicans species (C. glabrata, C. krusei, C. tropicalis, C. parapsilosis) occur more often after prior azole exposure or chemotherapy.\n- Classic Endoscopic Differential Diagnosis of Infectious Esophagitis:\n  * Candida esophagitis: multiple discrete or confluent adherent creamy-white/yellow pseudomembranous plaques with erythematous friable mucosa and NO deep ulceration.\n  * Herpes Simplex Virus (HSV) esophagitis: multiple small, well-circumscribed, punched-out 'volcano' ulcers.\n  * Cytomegalovirus (CMV) esophagitis: single or few large, deep, longitudinal/linear ulcers (usually in distal esophagus).\n  * Non-infectious DD: chemotherapy-induced mucositis, pill esophagitis, radiation esophagitis, GERD."
      },
      {
        "q": "2. What host risk factors predispose to esophageal candidiasis, and what is the pathogenesis of mucosal invasion?",
        "a": "- Major risk factors (per Prof. Diaa El-Tibi Al-Azhar Fungal Lecture):\n  * Cancer chemotherapy and Neutropenia (THIS PATIENT — double hit of cytotoxic mucosal damage + impaired neutrophil defense).\n  * HIV/AIDS (AIDS-defining illness, typically CD4 < 100 cells/µL).\n  * Prolonged broad-spectrum antibiotic therapy (eliminates competing bacterial flora, promoting fungal overgrowth).\n  * Systemic or inhaled corticosteroids, hematologic malignancies, diabetes mellitus, and organ transplantation.\n- Pathogenesis:\n  * Candida spp. are normal commensals of the oral cavity and GI tract. Immunosuppression and chemotherapy-induced mucositis allow fungal overgrowth and transformation from yeast to tissue-invasive pseudohyphae that adhere to and penetrate the esophageal squamous epithelium."
      },
      {
        "q": "3. What confirmatory microbiological and histological findings are expected from endoscopic brushings/biopsies?",
        "a": "- Direct microscopy & histopathology (endoscopic brushings or biopsy):\n  * Wet smear (KOH preparation), Periodic Acid-Schiff (PAS), or Gomori Methenamine Silver (GMS) stain: demonstrates budding yeast cells AND PSEUDOHYPHAE (elongated branching chains with constrictions at the septa) invading squamous epithelium.\n  * High-Yield Microbiology Pearl: Candida yeast cells and pseudohyphae are the ONLY fungi that stain GRAM-POSITIVE on Gram stain!\n- Culture & additional tests:\n  * Fungal culture on Sabouraud dextrose agar with species identification and antifungal susceptibility testing (essential in neutropenic/chemotherapy patients who may harbor azole-resistant C. glabrata or C. krusei).\n  * Obtain peripheral & central-line blood cultures if the patient is febrile (to exclude candidemia/disseminated candidiasis)."
      },
      {
        "q": "4. What is the first-line systemic antifungal therapy, why are topical agents inadequate, and what are the alternatives for refractory or severe neutropenic cases?",
        "a": "- Crucial OSCE Rule: Esophageal candidiasis ALWAYS requires SYSTEMIC antifungal therapy — topical agents (nystatin swish-and-swallow or clotrimazole troches) ONLY treat oral thrush and are INEFFECTIVE for esophageal disease!\n- First-line therapy (14–21 days):\n  * Oral Fluconazole: 400 mg loading dose on day 1, followed by 200–400 mg once daily (or IV Fluconazole if unable to swallow orally).\n- Alternatives for severe neutropenia, prior azole prophylaxis, or Fluconazole-refractory disease (e.g., C. krusei / C. glabrata):\n  * IV Echinocandin (preferred in severe/refractory neutropenic cases): Caspofungin (70 mg IV load, then 50 mg IV daily), Micafungin (150 mg IV daily), or Anidulafungin.\n  * OR IV Liposomal Amphotericin B (3–5 mg/kg/day) / Amphotericin B deoxycholate (0.5–0.7 mg/kg/day), OR Oral Voriconazole / Posaconazole / Itraconazole solution."
      },
      {
        "q": "5. What serious complications must be monitored in this neutropenic cancer patient?",
        "a": "- Systemic fungal dissemination:\n  * Candidemia and Deeply Invasive Candidiasis (occurs when Candida crosses chemotherapy-damaged GI mucosa or colonizes indwelling chemo ports/central lines) -> can seed liver/spleen (hepatosplenic candidiasis upon neutrophil recovery), kidneys, heart valves (endocarditis), or eyes (Candida endophthalmitis -> mandatory dilated fundoscopy if blood cultures grow Candida).\n- Local esophageal complications (rare): severe dehydration/malnutrition from odynophagia, esophageal ulceration/bleeding, stricture, or perforation.\n- Febrile Neutropenia emergency: monitor temperature closely — any fever >= 38.3°C (or >= 38.0°C x 1h) with ANC < 500/µL demands immediate empirical IV antipseudomonal antibiotics (Cefepime, Piperacillin-Tazobactam, or Meropenem)."
      }
    ]
  },
  {
    "id": 24,
    "title": "حالة 24: Rhino-Orbital-Cerebral Mucormycosis (Black Fungus)",
    "topic": "Rhino-Orbital-Cerebral Mucormycosis",
    "category": "Other Infections & Parasites",
    "scenario": "A 62-year-old man with uncontrolled diabetes presents with facial pain, swelling around the eye, black nasal discharge, and fever for 5 days. On examination, there is periorbital edema and necrotic nasal mucosa.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is your differential diagnosis, and which red-flag clinical findings in this case make it a surgical emergency?",
        "a": "- Most likely diagnosis: Acute Invasive Rhino-Orbital-Cerebral Mucormycosis ('Black Fungus' / Zygomycosis).\n- Differential diagnosis:\n  * Invasive sinonasal aspergillosis, severe bacterial orbital cellulitis / cavernous sinus thrombosis, necrotizing bacterial sinusitis, and sinonasal NK/T-cell lymphoma (lethal midline granuloma).\n- Red-flag justifying features in this case:\n  * Uncontrolled diabetes mellitus (classic #1 risk factor, especially with ketoacidosis).\n  * Rapid 5-day progression of fever, facial/sinus pain, periorbital edema, black nasal discharge, and necrotic black nasal mucosa (eschar — hallmark of fungal angioinvasion)."
      },
      {
        "q": "2. Name the causative fungal genera, major predisposing risk factors, and why uncontrolled diabetes/DKA uniquely fuels Mucorales growth.",
        "a": "- Causative organisms (Order Mucorales — ubiquitous environmental molds acquired by inhaling sporangiospores):\n  * Rhizopus spp. (most common, ~70%), Mucor, Rhizomucor, Lichtheimia (Absidia), and Cunninghamella.\n- Major predisposing risk factors (per Al-Azhar Fungal Lecture):\n  * Uncontrolled Diabetes Mellitus — especially Diabetic Ketoacidosis (DKA).\n  * Prolonged high-dose systemic corticosteroids (notably post-COVID-19 mucormycosis).\n  * Hematologic malignancies, prolonged neutropenia, solid-organ/HSCT transplantation.\n  * Iron overload and Deferoxamine chelation therapy (deferoxamine acts as a siderophore delivering iron directly to Mucorales!).\n- Why DKA uniquely promotes Mucormycosis:\n  * Hyperglycemia + acidosis impairs neutrophil chemotaxis/killing, liberates free iron from transferrin (low pH), and provides ketones that Rhizopus utilizes via its ketone reductase enzyme -> rapid hyphal angioinvasion of blood vessels -> vascular thrombosis -> ischemic hemorrhagic infarction and sharply demarcated black necrotic eschar on nasal turbinates or hard palate (respecting midline)."
      },
      {
        "q": "3. What are the definitive histopathological findings (compared with Aspergillus) and essential preoperative imaging studies?",
        "a": "- 1. Urgent Tissue Biopsy / Scraping of Necrotic Nasal Mucosa (Gold Standard — fungal cultures are frequently FALSE-NEGATIVE, so direct microscopy/histopathology is decisive!):\n  * KOH wet mount, H&E, PAS, or GMS stain shows: BROAD, ribbon-like, NON-SEPTATE (pauciseptate) hyphae of uneven diameter branching at RIGHT ANGLES (90°), invading blood vessel walls (angioinvasion + thrombosis).\n  * High-Yield OSCE Contrast vs Aspergillus: Aspergillus has NARROW, uniform, SEPTATE hyphae branching at ACUTE angles (45°).\n- 2. Urgent Cross-Sectional Imaging (to map disease extent before emergency surgery):\n  * Contrast-enhanced CT of paranasal sinuses & orbits: mucosal thickening, sinus opacification, bony wall erosion.\n  * Contrast-enhanced MRI of orbits & brain (most sensitive for soft-tissue/vascular spread): non-enhancing necrotic turbinates ('black turbinate sign'), orbital apex invasion, cavernous sinus thrombosis, and cerebral infarction/abscess.\n- Metabolic labs: RBS, HbA1c, ABG, serum/urine ketones (rule out DKA), CBC, renal function, and electrolytes."
      },
      {
        "q": "4. Outline the mandatory THREE-PILLAR emergency management protocol, including exact antifungal drugs and which azoles are INEFFECTIVE.",
        "a": "- Survival depends on executing ALL THREE PILLARS IMMEDIATELY (never delay for culture!):\n  * Pillar 1 — Aggressive, Urgent Surgical Debridement: immediate endoscopic/open resection of ALL necrotic sinonasal, palatal, and orbital tissue (repeated debridements as necessary) because antifungals cannot penetrate thrombosed necrotic tissue.\n  * Pillar 2 — Immediate High-Dose IV Antifungal Therapy:\n    - First-line: IV Liposomal Amphotericin B 5–10 mg/kg/day (10 mg/kg/day if CNS involvement; or Amphotericin B deoxycholate 1.0–1.5 mg/kg/day if liposomal is unavailable) for several weeks until clinical & radiologic stabilization.\n    - Step-down / Salvage Oral Therapy: Posaconazole or Isavuconazole (continue for months until complete resolution and reversal of immunosuppression).\n    - CRITICAL OSCE PITFALL: Voriconazole, Fluconazole, Itraconazole, and Echinocandins have ZERO clinically reliable activity against Mucorales — NEVER give Voriconazole empirically if Mucormycosis is suspected!\n  * Pillar 3 — Rapid Reversal of Predisposing Factors: aggressive glycemic & DKA correction with IV insulin + fluids, immediately taper/stop corticosteroids and immunosuppressants, and discontinue deferoxamine."
      },
      {
        "q": "5. What devastating neurological/orbital complications carry high mortality in Rhino-Orbital-Cerebral Mucormycosis?",
        "a": "- Rapid contiguous vascular and perineural spread leads to:\n  * Orbital apex syndrome: proptosis, chemosis, complete ophthalmoplegia (CN III, IV, VI palsies), facial numbness (CN V1/V2), and irreversible blindness (central retinal artery occlusion).\n  * Hard palate necrosis/perforation (black palatal eschar).\n  * Cavernous sinus thrombosis, internal carotid artery thrombosis/mycotic aneurysm -> massive ischemic stroke.\n  * Frontal lobe brain abscess, meningoencephalitis, and death (overall mortality 40–80%, rising > 80% once intracranial invasion occurs)."
      }
    ]
  },
  {
    "id": 25,
    "title": "حالة 25: Pneumocystis jirovecii Pneumonia (PCP) in HIV/AIDS",
    "topic": "Pneumocystis jirovecii Pneumonia (PCP)",
    "category": "Other Infections & Parasites",
    "scenario": "A 41-year-old HIV-infected man who refused antiretroviral therapy is diagnosed with Pneumocystis jirovecii pneumonia.",
    "questions": [
      {
        "q": "1. How is Pneumocystis jirovecii classified microbiologically, at what CD4 threshold does it classically occur, and what is its classic clinical presentation?",
        "a": "- Microbiological classification (per Al-Azhar Fungal Lecture):\n  * Atypical opportunistic extracellular FUNGUS (formerly P. carinii).\n  * Unique cell-membrane pearl: unlike other fungi, Pneumocystis LACKS ERGOSTEROL in its membrane — therefore it is completely RESISTANT to azoles (fluconazole/voriconazole) and amphotericin B!\n- Immunological threshold:\n  * Classic AIDS-defining opportunistic infection occurring almost exclusively when CD4+ T-cell count falls BELOW 200 cells/µL (also occurs with high-dose chronic steroids, chemotherapy, or organ transplant).\n- Classic clinical presentation:\n  * Subacute onset (over days to weeks) of progressive exertional dyspnea, low-grade fever, dry non-productive cough, and severe hypoxemia (marked O2 desaturation on walking) with paradoxically NORMAL or minimal crackles on chest auscultation."
      },
      {
        "q": "2. What are the characteristic radiological, biochemical, and definitive microbiological diagnostic findings of PCP?",
        "a": "- Imaging:\n  * Chest X-ray: bilateral diffuse symmetric perihilar interstitial/alveolar infiltrates ('bat-wing' pattern; may appear normal in up to 10–20% early).\n  * Chest HRCT (much more sensitive): diffuse bilateral ground-glass opacities (GGOs) with subpleural sparing +/- thin-walled cysts/pneumatoceles.\n- Supportive Laboratory Clues:\n  * Markedly elevated serum Lactate Dehydrogenase (LDH > 500 U/L — sensitive marker of alveolar injury), elevated serum 1,3-beta-D-glucan, and ABG showing hypoxemia with a widened A-a oxygen gradient.\n- Definitive Microbiological Diagnosis (Pneumocystis CANNOT be grown on routine culture!):\n  * Preferred specimen: Fiberoptic Bronchoscopy with Bronchoalveolar Lavage (BAL — gold standard, > 90% sensitivity) or Induced Sputum (good yield in HIV due to high organism burden).\n  * Diagnostic Stains & Molecular Tests: Gomori Methenamine Silver (GMS) or Toluidine blue staining cyst walls (classic cup-shaped / 'crushed ping-pong ball' cysts in foamy alveolar exudate), Direct Fluorescent Antibody (DFA — highest microscopic sensitivity), or BAL PCR."
      },
      {
        "q": "3. Outline the first-line and alternative antimicrobial regimens for PCP, and state the EXACT ABG criteria mandating adjunctive corticosteroids.",
        "a": "- First-Line Treatment (Total Duration: 21 DAYS):\n  * High-dose Trimethoprim-Sulfamethoxazole (TMP-SMX / Co-trimoxazole): 15–20 mg/kg/day of the TMP component (75–100 mg/kg/day SMX) divided every 6–8 hours, IV for moderate-to-severe disease (switch to oral once clinically improving) or PO for mild disease.\n- Alternative Regimens (if severe sulfa allergy, G6PD hemolysis, or treatment failure):\n  * Moderate-to-severe: IV Pentamidine (4 mg/kg once daily — monitor for hypoglycemia/pancreatitis/nephrotoxicity/QTc) OR IV/PO Clindamycin (600 mg q8h) PLUS Oral Primaquine (30 mg base daily — check G6PD!).\n  * Mild-to-moderate: Oral Atovaquone (750 mg twice daily with fatty meal) OR Trimethoprim + Dapsone (check G6PD!).\n- MANDATORY Adjunctive Corticosteroids (Life-saving in moderate-to-severe PCP!):\n  * Exact ABG Indications (on room air): PaO2 < 70 mmHg OR Alveolar-arterial (A-a) gradient >= 35 mmHg (or SpO2 < 92%).\n  * Regimen: Oral Prednisone 40 mg bid x 5 days -> 40 mg daily x 5 days -> 20 mg daily x 11 days (or IV Methylprednisolone at 75% dose) — started as early as possible (within 72h) to blunt fatal alveolar inflammation caused by dying organisms."
      },
      {
        "q": "4. What is the secondary prophylaxis regimen after finishing 21-day therapy, when can it be discontinued, and when should ART be initiated?",
        "a": "- Secondary Prophylaxis (MANDATORY immediately after completing the 21-day acute course):\n  * First-line: Oral TMP-SMX 1 double-strength tablet (160/800 mg) once daily (or 1 single-strength tablet daily / 1 DS tablet 3x/week) — also covers Toxoplasmosis when given daily.\n  * Alternatives: Oral Dapsone 100 mg daily (check G6PD) or Oral Atovaquone 1,500 mg daily.\n- Safe Discontinuation Criteria:\n  * May discontinue secondary prophylaxis ONLY after the patient takes ART and achieves a sustained CD4+ count > 200 cells/µL for at least 3 months.\n- Timing of Antiretroviral Therapy (ART):\n  * Counsel patient strongly on life-saving ART (e.g., TDF + 3TC/FTC + Dolutegravir) and initiate within 2 weeks of starting PCP treatment (early ART significantly improves survival and reduces subsequent opportunistic infections)."
      },
      {
        "q": "5. What acute pulmonary complications of PCP and major side effects of high-dose TMP-SMX require monitoring?",
        "a": "- Pulmonary complications:\n  * Spontaneous Pneumothorax (due to rupture of subpleural pneumatoceles — suspect with sudden pleuritic chest pain & acute desaturation!), acute respiratory failure / ARDS requiring ICU ventilation, and respiratory IRIS after starting ART.\n- High-dose TMP-SMX toxicities (especially common in HIV patients):\n  * Cutaneous hypersensitivity (maculopapular rash, fever, Stevens-Johnson syndrome/TEN).\n  * Hyperkalemia (trimethoprim blocks ENaC channels in distal renal tubule like amiloride).\n  * Bone marrow suppression (neutropenia, thrombocytopenia, megaloblastic anemia), elevated serum creatinine (pseudo-elevation by blocking tubular secretion OR true interstitial nephritis), and hepatotoxicity."
      }
    ]
  },
  {
    "id": 26,
    "title": "حالة 26: Esophageal Candidiasis in Febrile Neutropenia (Antifungal & Species Approach)",
    "topic": "Esophageal Candidiasis (Neutropenic Host)",
    "category": "Other Infections & Parasites",
    "scenario": "A 54-year-old neutropenic man undergoing cancer chemotherapy presents with difficult and painful swallowing. Endoscopy of the esophagus reveals multiple white plaques with no ulceration.",
    "questions": [
      {
        "q": "1. What is the clinical diagnosis, why does endoscopic scraping help confirm it, and how do Candida plaques differ from viral esophagitis?",
        "a": "- Clinical diagnosis: Pseudomembranous Esophageal Candidiasis (most commonly Candida albicans) complicating chemotherapy-induced neutropenia.\n- Endoscopic hallmark:\n  * Raised, creamy-white, adherent plaques coating the esophageal mucosa without deep ulceration; scraping the plaques reveals an erythematous, friable bleeding mucosal base.\n- Viral esophagitis comparison:\n  * HSV esophagitis: multiple discrete, small, well-demarcated punched-out ('volcano') ulcers with raised edges.\n  * CMV esophagitis: large, deep, longitudinal/linear ulcers (usually distal esophagus).\n  * Note: Absence of oral thrush does NOT rule out esophageal candidiasis."
      },
      {
        "q": "2. How do laboratory staining and culture distinguish true Candida infection from benign colonization, and why is species identification vital in cancer patients?",
        "a": "- Distinguishing true invasive infection from commensal colonization:\n  * Candida is a normal GI commensal; isolating it from a superficial throat swab alone can reflect colonization.\n  * Demonstration of budding yeasts WITH PSEUDOHYPHAE actively invading esophageal epithelial cells on biopsy histology (PAS/GMS stain) or endoscopic brushings (KOH wet smear / Gram-positive stain) confirms true mucosal infection.\n- Importance of species identification (Chromogenic agar / MALDI-TOF / culture):\n  * Chemotherapy patients often receive prophylactic azoles, selecting for non-albicans species:\n    - Candida krusei: INTRINSICALLY resistant to Fluconazole.\n    - Candida glabrata: frequently dose-dependent or resistant to Fluconazole.\n    - Candida parapsilosis: may show higher echinocandin MICs and strongly associates with vascular catheters."
      },
      {
        "q": "3. Compare first-line antifungal therapy for uncomplicated esophageal candidiasis vs fluconazole-refractory disease in a neutropenic host.",
        "a": "- Uncomplicated Esophageal Candidiasis (azole-naive patient):\n  * Systemic Oral or IV Fluconazole: 400 mg loading dose, then 200–400 mg daily for 14–21 days (systemic therapy is mandatory — topical nystatin/clotrimazole fails to clear esophageal lesions).\n- Fluconazole-Refractory Disease or Prior Azole Prophylaxis (suspected C. krusei / C. glabrata):\n  * IV Echinocandin (1st-line parenteral choice — fungicidal against Candida including azole-resistant strains): Caspofungin (70 mg IV day 1, then 50 mg IV daily), Micafungin (150 mg IV daily), or Anidulafungin (200 mg load, then 100 mg daily).\n  * Alternatives: Oral/IV Voriconazole (200 mg bid), Posaconazole, Itraconazole oral solution, or IV Liposomal Amphotericin B (3–5 mg/kg/day)."
      },
      {
        "q": "4. If this neutropenic patient develops persistent fever and positive blood cultures (Candidemia / Deeply Invasive Candidiasis), what is the mandatory treatment and source-control protocol?",
        "a": "- Immediate Antifungal Escalation (per IDSA & Al-Azhar Fungal Lecture):\n  * First-line modern therapy for neutropenic candidemia: IV Echinocandin (Caspofungin, Micafungin, or Anidulafungin) OR IV Liposomal Amphotericin B (or Amphotericin B deoxycholate 0.5–0.7 mg/kg/day).\n- Mandatory Duration Rule in Neutropenia:\n  * Continue systemic antifungal therapy for at least 14 DAYS AFTER the first documented negative follow-up blood culture, resolution of clinical symptoms, AND recovery from neutropenia (ANC > 500/µL) — relapse is common if stopped while still neutropenic.\n- Mandatory Source Control & Metastatic Screening:\n  * Promptly remove/replace indwelling central venous catheters/chemo ports whenever feasible.\n  * Perform a dilated ophthalmologic examination (once neutrophils recover) to exclude Candida chorioretinitis/endophthalmitis, and abdominal CT if persistent fever after neutrophil recovery suggests chronic disseminated (hepatosplenic) candidiasis."
      },
      {
        "q": "5. What preventive strategies reduce mucosal and invasive Candida infections in neutropenic chemotherapy patients?",
        "a": "- Targeted antifungal prophylaxis (e.g., oral Fluconazole or Posaconazole) during anticipated prolonged profound neutropenia (e.g., acute myeloid leukemia induction or allogeneic HSCT).\n- Judicious antimicrobial stewardship (avoid unnecessary prolonged broad-spectrum antibiotics and unnecessary systemic steroids).\n- Meticulous oral mucositis hygiene, strict aseptic central-line insertion/maintenance bundles, and early diagnostic endoscopy if odynophagia fails to respond within 3–5 days of empirical fluconazole."
      }
    ]
  },
  {
    "id": 27,
    "title": "حالة 27: Measles (Rubeola)",
    "topic": "Measles (Rubeola)",
    "category": "Other Infections & Parasites",
    "scenario": "A 16-year-old male presents to his general practitioner with cough, rhinorrhea, sore throat, fever, and a rash. His vital signs are HR 94 bpm, BP 120/80 mmHg, RR 18/min, SpO2 97%, and temperature 39.2°C. Examination reveals a maculopapular rash on his face, serous conjunctival discharge, and small white lesions on the buccal mucosa.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the pathognomonic mucosal sign described here, and what is your differential diagnosis?",
        "a": "- Most likely diagnosis: Measles (Rubeola).\n- Pathognomonic Sign:\n  * Koplik spots: small, bluish-white specks ('grains of sand') on a bright erythematous base located on the buccal mucosa opposite the upper 2nd molar teeth (appear 1–2 days before the skin rash and fade rapidly within 24–48h of rash onset).\n- Justifying clinical features:\n  * Classic prodrome of high fever (39.2°C) + the '3 Cs': Cough, Coryza (rhinorrhea), and Conjunctivitis (serous ocular discharge), followed by a facial maculopapular rash.\n- Differential diagnosis of fever with maculopapular rash:\n  * Rubella (milder fever, posterior auricular/suboccipital lymphadenopathy, palatal Forchheimer spots), Scarlet fever (sandpaper rash, strawberry tongue), Roseola infantum (HHV-6), Infectious mononucleosis (EBV), Dengue, Kawasaki disease, and drug eruption."
      },
      {
        "q": "2. Name the causative virus, describe the characteristic progression of the measles rash, and define the contagious period.",
        "a": "- Causative agent: Measles virus — an enveloped, single-stranded RNA Paramyxovirus (genus Morbillivirus); incubation period 10–14 days.\n- Characteristic Rash Progression:\n  * Erythematous, blanching maculopapular rash begins on the face and behind the ears (at the hairline) -> spreads cephalocaudally (head-to-trunk-to-extremities) over 3 days, becoming confluent over the face and upper trunk -> fades in the same order of appearance after 4–7 days, leaving temporary brownish staining and fine branny desquamation.\n- Infectious (Contagious) Period:\n  * Extremely contagious (R0 = 12–18) via airborne aerosols; patient is infectious from 4 DAYS BEFORE to 4 DAYS AFTER the onset of the rash."
      },
      {
        "q": "3. Which laboratory investigations confirm acute Measles infection?",
        "a": "- 1. Serum Measles-Specific IgM Antibody (ELISA): most widely used confirmatory test (positive in > 90% from day 3 to day 28 after rash onset; if drawn in first 72 hours and negative, repeat after 72h).\n- 2. Measles Virus RNA by RT-PCR: from nasopharyngeal/throat swab or urine specimen (highest sensitivity during the first 3 days of rash; also allows viral genotyping for public health surveillance).\n- 3. Paired acute and convalescent serum IgG demonstrating a >= 4-fold rise (used retrospectively if IgM equivocal).\n- Routine labs: CBC typically shows leukopenia and lymphopenia (transient measles-induced immunosuppression)."
      },
      {
        "q": "4. What is the clinical management plan, including the mandatory WHO Vitamin A supplementation protocol?",
        "a": "- Antiviral therapy: No specific licensed antiviral drug — mainstay is supportive care (hydration, antipyretics [paracetamol/ibuprofen], soothing eye care, nutritional support, and targeted antibiotics ONLY for documented secondary bacterial infections such as otitis media or bacterial pneumonia).\n- MANDATORY WHO Vitamin A Protocol (proven to cut measles mortality and corneal blindness by ~50%, given to ALL acute measles cases):\n  * Administer orally ONCE DAILY for 2 consecutive days:\n    - Age >= 12 months and adults (THIS 16-YEAR-OLD): 200,000 IU orally once daily x 2 days.\n    - Infants 6–11 months: 100,000 IU daily x 2 days.\n    - Infants < 6 months: 50,000 IU daily x 2 days.\n  * Give a 3rd age-specific dose 2–4 weeks later if clinical signs of vitamin A deficiency (xerophthalmia/Bitot spots) are present."
      },
      {
        "q": "5. What are the acute and late neurological complications, mandatory IPC isolation precautions, and Post-Exposure Prophylaxis (PEP) for contacts?",
        "a": "- Major Complications:\n  * Respiratory: Secondary bacterial pneumonia (LEADING CAUSE OF DEATH in measles), giant-cell (Hecht) pneumonia in immunocompromised, croup/laryngotracheobronchitis, and acute otitis media.\n  * GI & Ocular: severe diarrhea/dehydration and keratoconjunctivitis/corneal ulceration (vitamin A deficiency).\n  * Neurological: Acute post-infectious demyelinating encephalomyelitis (~1 in 1,000) and rare, universally fatal late Subacute Sclerosing Panencephalitis (SSPE — progressive cognitive decline, myoclonus, coma 7–10 years after primary measles).\n- Mandatory IPC Isolation (per Hawari Practical Airborne vs Droplet Table):\n  * STRICT AIRBORNE PRECAUTIONS: Negative-pressure airborne infection isolation room + N95 respirator (plus eye protection, gloves, gown) for 4 days AFTER rash onset (or duration of illness if immunocompromised); immediately notify public health authorities.\n- Prevention & Contact PEP:\n  * Active immunity: 2 doses of live attenuated MMR vaccine (12–15 months & 4–6 years; ~97% effective).\n  * PEP for susceptible contacts: MMR vaccine within 72 hours of exposure (immunocompetent >= 6 months), OR Immune Globulin (IG) within 6 days for high-risk contacts who cannot receive live vaccine (pregnant women, infants < 6 months, severely immunocompromised)."
      }
    ]
  },
  {
    "id": 28,
    "title": "حالة 28: Urinary Tract Infection (Acute Cystitis) in Pregnancy",
    "topic": "UTI in Pregnancy",
    "category": "Other Infections & Parasites",
    "scenario": "A 30-year-old woman at 12 weeks' gestation presents complaining of dysuria.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what critical upper-tract condition must be actively excluded, and what is the most common causative pathogen?",
        "a": "- Most likely diagnosis: Acute Uncomplicated Cystitis (lower UTI) in the 1st trimester of pregnancy.\n- Critical condition to actively exclude on history & exam:\n  * Acute Pyelonephritis (upper UTI): ask specifically about fever, chills/rigors, nausea/vomiting, and flank/back pain, and examine for costovertebral angle (CVA) tenderness — pyelonephritis in pregnancy is a high-risk emergency requiring immediate inpatient IV antibiotics!\n  * Also exclude vulvovaginitis/cervicitis (ask about vaginal discharge or itching).\n- Most common causative organism:\n  * Escherichia coli (~70–85% of cases), followed by Klebsiella pneumoniae, Proteus mirabilis, Enterobacter spp., Staphylococcus saprophyticus, and Group B Streptococcus (GBS — detecting GBS bacteriuria at any time in pregnancy mandates intrapartum IV penicillin prophylaxis during labor!)."
      },
      {
        "q": "2. Why does pregnancy predispose to UTIs and pyelonephritis, and why is Asymptomatic Bacteriuria ALWAYS treated in pregnant women?",
        "a": "- Physiological & anatomical risk factors in pregnancy:\n  * Progesterone induces smooth muscle relaxation of the renal pelvis and ureters -> physiologic hydroureter/hydronephrosis and urinary stasis.\n  * Progressive mechanical compression of the ureters and bladder by the enlarging gravid uterus -> incomplete bladder emptying and vesicoureteral reflux.\n  * Glycosuria and aminoaciduria of pregnancy promote bacterial proliferation.\n- Golden Obstetrical Rule on Asymptomatic Bacteriuria (ASB, >= 10^5 CFU/mL):\n  * Unlike non-pregnant women, ALL pregnant women undergo routine urine culture screening at their first prenatal visit (12–16 weeks), and ASB MUST ALWAYS BE TREATED — untreated ASB progresses to acute pyelonephritis in 20–40% of pregnant women and significantly increases the risk of preterm labor and low birth weight."
      },
      {
        "q": "3. What diagnostic investigations are mandatory before and after treating a UTI in pregnancy?",
        "a": "- Pre-treatment investigations (MANDATORY in ALL pregnant UTIs):\n  * 1. Clean-catch midstream Urinalysis & dipstick: microscopic pyuria (> 10 WBCs/HPF), positive leukocyte esterase and nitrites, +/- microscopic hematuria.\n  * 2. Midstream Urine Culture & Antimicrobial Susceptibility Testing BEFORE initiating antibiotics (mandatory in pregnancy to confirm organism, detect GBS, and tailor safe antibiotics — unlike non-pregnant uncomplicated cystitis).\n- Post-treatment follow-up:\n  * Perform a mandatory 'Test-of-Cure' urine culture 1–2 weeks AFTER completing antibiotics to confirm bacterial eradication, followed by periodic surveillance cultures through pregnancy."
      },
      {
        "q": "4. Which oral antibiotics are SAFE at 12 weeks' gestation (1st trimester), and which common UTI antibiotics are STRICTLY CONTRAINDICATED in pregnancy?",
        "a": "- Safe First-Line Oral Antibiotics for Acute Cystitis at 12 Weeks' Gestation (1st Trimester):\n  * Cephalexin 500 mg PO every 6–12 hours for 5–7 days (or Cefuroxime / Cefpodoxime).\n  * Amoxicillin-Clavulanate 625 mg PO every 8–12 hours for 5–7 days (or Amoxicillin if culture confirms susceptibility).\n  * Fosfomycin trometamol 3 g PO as a single dose.\n  * Note on Nitrofurantoin (100 mg PO bid x 5–7 days): excellent choice in the 2nd and early 3rd trimesters, but avoid in the 1st trimester when safe beta-lactam alternatives exist, and STRICTLY AVOID near term (>= 38 weeks / during labor) due to risk of neonatal hemolytic anemia (G6PD deficiency).\n- STRICTLY CONTRAINDICATED UTI Antibiotics in Pregnancy:\n  * Fluoroquinolones (Ciprofloxacin, Levofloxacin, Ofloxacin): contraindicated throughout ALL trimesters (fetal cartilage/arthropathy risk).\n  * Tetracyclines / Doxycycline: permanent fetal tooth discoloration and inhibition of bone growth.\n  * Trimethoprim-Sulfamethoxazole (TMP-SMX): AVOID in 1st trimester (trimethoprim is a folate antagonist -> neural tube defects/cardiac anomalies) AND AVOID in late 3rd trimester (sulfonamides displace bilirubin -> neonatal kernicterus)."
      },
      {
        "q": "5. What maternal/fetal complications occur if UTI is inadequately treated, and how is Acute Pyelonephritis in pregnancy managed?",
        "a": "- Complications of untreated/complicated UTI in pregnancy:\n  * Maternal: Acute pyelonephritis, Gram-negative urosepsis, Acute Respiratory Distress Syndrome (ARDS — pregnant women with pyelonephritis are uniquely vulnerable to endotoxin-induced alveolar capillary leak), and maternal anemia.\n  * Fetal: Preterm labor and premature delivery, low birth weight, and perinatal mortality.\n- Inpatient Management if Acute Pyelonephritis Develops in Pregnancy (per Al-Azhar UTI Lecture):\n  * MANDATORY hospital admission for IV fluid hydration, antipyretics, and fetal monitoring.\n  * Empirical IV Beta-lactam: IV Ceftriaxone 1–2 g once daily (or IV Cefepime / Ampicillin + Gentamicin; avoid fluoroquinolones!) continued until afebrile and symptom-free for 24–48 hours.\n  * Step down to culture-guided safe oral antibiotics to complete a total 14-day course, followed by suppressive prophylaxis if recurrent."
      }
    ]
  },
  {
    "id": 29,
    "title": "حالة 29: Epstein-Barr Virus (EBV) — Ampicillin-Induced Rash",
    "topic": "EBV Infectious Mononucleosis (Ampicillin Rash)",
    "category": "Lymphadenopathy & Spleen",
    "scenario": "A 20-year-old presents with a sore throat and develops a diffuse rash after administration of ampicillin.",
    "questions": [
      {
        "q": "1. What is the most likely causative infectious agent, why did ampicillin trigger this diffuse rash, and does this represent a true lifelong penicillin allergy?",
        "a": "- Most likely causative infectious agent: Epstein-Barr Virus (EBV / Human Herpesvirus 4) causing Infectious Mononucleosis (misdiagnosed initially as bacterial streptococcal pharyngitis and treated with ampicillin).\n- Pathophysiology of the Ampicillin Rash:\n  * Aminopenicillins (Ampicillin and Amoxicillin) precipitate a characteristic diffuse, copper-colored, pruritic maculopapular rash in 80–90% of patients with acute EBV infection, typically appearing 5–10 days after starting the antibiotic (thought to reflect transient viral-induced T-cell hyperactivation and immune-complex deposition).\n- Critical OSCE Allergy Pearl:\n  * This is a TRANSIENT, virus-specific drug-interaction phenomenon — NOT a true IgE-mediated Type I penicillin anaphylaxis! Once EBV resolves, the patient can usually tolerate penicillins safely and should NOT automatically be mislabeled with a permanent beta-lactam allergy (unless true urticaria, angioedema, or bronchospasm occurred)."
      },
      {
        "q": "2. What classic clinical triad and specific physical examination findings should you look for to confirm your bedside suspicion?",
        "a": "- Classic Clinical Triad of Infectious Mononucleosis:\n  * 1. Fever (usually low-to-moderate grade).\n  * 2. Exudative Pharyngitis / Tonsillitis (gray-white tonsillar exudates mimicking Group A Strep).\n  * 3. Lymphadenopathy — characteristically symmetrical bilateral POSTERIOR CERVICAL lymph nodes (plus epitrochlear and generalized lymphadenopathy).\n- Additional High-Yield Bedside Findings:\n  * Severe fatigue/malaise, palatal petechiae (at junction of hard and soft palate), bilateral upper eyelid/periorbital edema (Hoagland sign), and mild-to-moderate splenomegaly (~50% of patients; hepatomegaly ~10–15%)."
      },
      {
        "q": "3. What diagnostic tests confirm acute EBV infection and rule out key infectious mimics of pharyngitis and rash?",
        "a": "- Hematologic & Screening Tests:\n  * CBC & Peripheral Blood Film: lymphocytosis (> 50% of WBCs) with > 10% atypical lymphocytes (Downey cells — large reactive CD8+ cytotoxic T-cells).\n  * Heterophile Antibody Test (Monospot / Paul-Bunnell): rapid screening test (~85% sensitive after week 1; may be false-negative during the first week of illness).\n  * Liver Function Tests: mild transient transaminitis (AST/ALT elevation in > 80%).\n- Gold-Standard Specific EBV Serology:\n  * Acute primary EBV: VCA-IgM POSITIVE + VCA-IgG POSITIVE + EBNA-IgG NEGATIVE.\n- Rule Out Key Mimics:\n  * Rapid Antigen Detection Test (RADT) / throat swab culture to exclude Group A Streptococcal (GAS) pharyngitis/scarlet fever (note: ~10–30% may carry GAS concurrently).\n  * 4th-generation HIV Ag/Ab + HIV RNA if risk factors exist (acute HIV seroconversion causes fever, sore throat, lymphadenopathy, and diffuse rash — heterophile-negative!)."
      },
      {
        "q": "4. What is the immediate management of the ampicillin rash and overall EBV infection?",
        "a": "- 1. Management of the Drug Rash:\n  * Immediately discontinue Ampicillin/Amoxicillin.\n  * Reassure the patient that the rash is benign and self-limiting (resolves over 1–2 weeks); relieve itching with oral antihistamines (e.g., cetirizine/loratadine) and soothing emollients.\n- 2. General Supportive Management of EBV:\n  * Adequate rest, oral fluids, warm saline gargles, and paracetamol or NSAIDs for fever and throat pain.\n  * Antivirals (Acyclovir) are NOT effective for uncomplicated EBV mononucleosis.\n- 3. Crucial Safety & Corticosteroid Rules:\n  * STRICTLY PROHIBIT contact sports, heavy lifting, and vigorous abdominal exertion for at least 3–4 weeks (and until splenomegaly resolves) to prevent fatal splenic rupture.\n  * Corticosteroids (e.g., Prednisone) are reserved ONLY for severe complications: impending upper airway obstruction from massive tonsillar swelling, autoimmune hemolytic anemia, or severe immune thrombocytopenia."
      },
      {
        "q": "5. What serious acute complications and long-term oncogenic associations are linked to EBV?",
        "a": "- Acute complications:\n  * Splenic rupture (highest risk weeks 2–3; presents with abrupt severe LUQ pain, left shoulder pain [Kehr's sign], and hypovolemic shock — surgical emergency).\n  * Upper airway obstruction due to severe tonsillar hypertrophy.\n  * Autoimmune hemolytic anemia (cold agglutinins), thrombocytopenia, hepatitis, myocarditis, and neurological sequelae (Guillain-Barré syndrome, aseptic meningitis, Bell's palsy).\n- Long-term EBV-associated malignancies (oncogenic latency in B-cells/epithelial cells):\n  * Endemic Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, primary CNS lymphoma (in AIDS), and post-transplant lymphoproliferative disorder (PTLD)."
      }
    ]
  },
  {
    "id": 30,
    "title": "حالة 30: Rhino-Orbital Mucormycosis",
    "topic": "Rhino-Orbital Mucormycosis",
    "category": "Other Infections & Parasites",
    "scenario": "A 79-year-old male with a 20-year history of diabetes mellitus has recently developed dementia, making it difficult for him to control his diabetes independently. He develops a necrotic lesion starting from the nose and creeping toward the eye, threatening loss of his eye.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features in this case justify your choice?",
        "a": "Most likely diagnosis: Rhino-orbital Mucormycosis (الفطر الأسود / Black Fungus).\n- Justifying features: Elderly patient with a 20-year history of poorly controlled diabetes mellitus (worsened by dementia preventing self-management), presenting with a rapidly progressive destructive lesion starting in the nasal cavity and extending into the orbit, threatening vision/eye loss.\n- Key differential diagnoses: Invasive sino-orbital Aspergillosis, bacterial orbital cellulitis, cavernous sinus thrombosis, and sinonasal malignancy (e.g., NK/T-cell lymphoma)."
      },
      {
        "q": "2. What are the causative fungi and key pathophysiological mechanisms explaining this rapid spread?",
        "a": "- Causative organisms: Ubiquitous filamentous molds of the order Mucorales — primarily Rhizopus, Rhizomucor, Mucor, and Cunninghamella species.\n- Pathophysiology: Inhaled spores germinate in the nasal mucosa/paranasal sinuses of susceptible hosts (uncontrolled DM, DKA, hematologic malignancy, organ transplant, or deferoxamine iron-chelation therapy).\n- Hallmark mechanism: Direct fungal angioinvasion of blood vessels -> thrombosis -> ischemic and hemorrhagic tissue necrosis (black eschar on nasal turbinates or hard palate respecting the midline) with rapid contiguous extension across tissue planes into the orbit and brain."
      },
      {
        "q": "3. What are the essential confirmatory investigations and expected findings?",
        "a": "1. Urgent Nasal Endoscopy & Deep Tissue Biopsy (Gold Standard): Histopathology (H&E, GMS, PAS) and KOH wet mount demonstrate broad, ribbon-like, non-septate (pauciseptate) hyphae of uneven diameter branching at 90-degree (right) angles with prominent vascular invasion and necrosis. (Note: Fungal cultures are frequently negative and should not delay treatment.)\n2. Urgent Imaging: Contrast-enhanced CT and/or MRI of the paranasal sinuses, orbits, and brain to define exact bony, orbital, cavernous sinus, and intracranial extension prior to surgery.\n3. Metabolic Workup: Blood glucose, HbA1c, ABG, serum ketones, renal function, and electrolytes."
      },
      {
        "q": "4. What is the immediate and definitive management protocol for this patient?",
        "a": "Rhino-orbital mucormycosis is a medical-surgical emergency requiring a 3-pillar approach immediately:\n1. Systemic Antifungal Therapy (Drug of Choice): IV Liposomal Amphotericin B (5 mg/kg/day; up to 10 mg/kg/day if CNS involved) OR maximal tolerated dose of IV Amphotericin B deoxycholate (1.0–1.5 mg/kg/day) until clinical and radiological progression is halted (typical prolonged course 10–12 weeks, with oral step-down to Posaconazole or Isavuconazole). Note: Voriconazole and echinocandins have NO activity against Mucorales.\n2. Urgent Extensive Surgical Debridement: Repeated surgical resection of all necrotic nasal, sinus, and orbital tissue (including orbital exenteration if necessary to prevent fatal intracranial spread).\n3. Reversal of Predisposing Factors: Strict glycemic control (insulin therapy), correction of any ketoacidosis, and reduction/cessation of immunosuppressive agents if possible."
      },
      {
        "q": "5. What are the major complications and prognostic red flags to monitor?",
        "a": "- Ocular & Cranial Complications: Proptosis, chemosis, ophthalmoplegia (CN III, IV, VI palsies), retinal artery thrombosis, and permanent blindness.\n- Intracranial Extension: Cavernous sinus thrombosis, internal carotid artery thrombosis/stroke, brain abscess, obtundation, and coma.\n- Drug Toxicity Monitoring: Monitor serum creatinine, potassium, and magnesium closely during Amphotericin B therapy (nephrotoxicity, hypokalemia, hypomagnesemia, infusion reactions)."
      }
    ]
  },
  {
    "id": 31,
    "title": "حالة 31: Giardiasis (Giardia lamblia)",
    "topic": "Giardiasis",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 6-year-old boy and his parents present with a 4-day history of oily, foul-smelling diarrhea after a camping trip.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features justify your choice?",
        "a": "Most likely diagnosis: Giardiasis (Giardia lamblia / Giardia intestinalis / Giardia duodenalis infection).\n- Justifying features: Classic shared exposure among family members on a camping trip (drinking untreated freshwater streams/lakes), presenting with oily, foul-smelling, greasy, floating stools (steatorrhea / fat malabsorption) without gross blood.\n- Key differential diagnoses: Cryptosporidiosis (watery diarrhea), Cyclosporiasis, viral gastroenteritis (Norovirus), and non-infectious malabsorption (e.g., celiac disease)."
      },
      {
        "q": "2. How is the organism transmitted and how does it cause oily, foul-smelling diarrhea?",
        "a": "- Causative organism: Giardia lamblia, a flagellated intestinal protozoan with two stages: infective hardy cysts and pear-shaped binucleated trophozoites.\n- Mode of transmission: Fecal-oral ingestion of cysts in contaminated stream/surface water (camping), food, or person-to-person (daycare centers). Cysts are resistant to routine chlorination.\n- Pathophysiology: Trophozoites attach to the brush border of the duodenum and upper jejunum via a ventral sucking disc (without invading the mucosa), causing villous blunting, disaccharidase deficiency (secondary lactose intolerance), and fat malabsorption -> bulky, greasy, foul-smelling stools (steatorrhea), bloating, flatulence, and weight loss."
      },
      {
        "q": "3. What are the confirmatory diagnostic investigations and expected findings?",
        "a": "1. Stool Antigen Detection (ELISA / Direct Fluorescent Antibody) or Multiplex Stool NAAT/PCR: Most sensitive and specific first-line diagnostic tests.\n2. Stool Microscopy (Ova & Parasites): Identifies oval cysts (4 nuclei, median bodies) or motile pear-shaped trophozoites ('falling-leaf' motility, 2 nuclei giving a 'smiling face' appearance). Because cyst shedding is intermittent, 3 separate stool specimens over several days increase sensitivity.\n3. Duodenal aspirate or String test (Entero-Test): Rarely needed if stool tests remain negative despite high clinical suspicion."
      },
      {
        "q": "4. What is the first-line antimicrobial treatment and supportive management for this boy and his parents?",
        "a": "1. First-line Antiprotozoal Regimens (treat all symptomatic family members):\n- Metronidazole: Children -> 15 mg/kg/day PO divided every 8 hours for 5–7 days; Adults -> 250 mg PO three times daily for 5–7 days.\n- OR Tinidazole (preferred single-dose option where available): Children ≥3 years -> 50 mg/kg PO single dose (max 2 g); Adults -> 2 g PO single dose.\n- Alternative (especially in children): Nitazoxanide PO twice daily for 3 days.\n2. Supportive Care: Oral Rehydration Solution (WHO ORS) to replace fluid/electrolyte losses and temporary avoidance of dairy products if secondary lactose intolerance develops.\n3. Pregnancy Pearl: If a pregnant woman is infected in the 1st trimester, Paromomycin (non-absorbable aminoglycoside) is preferred."
      },
      {
        "q": "5. How can Giardiasis be prevented during camping trips and in the household?",
        "a": "- Safe Water Treatment: Boil surface/stream water for at least 1 minute (or use filters with pore size ≤1 micron) — routine chlorination alone does NOT reliably kill Giardia cysts.\n- Hygiene & IPC: Strict handwashing with soap and water after toileting and before handling food; avoid swimming in pools/lakes for at least 2 weeks after diarrhea resolves; treat symptomatic household contacts simultaneously to prevent reinfection."
      }
    ]
  },
  {
    "id": 32,
    "title": "حالة 32: Staphylococcal Food Poisoning",
    "topic": "Staphylococcal Food Poisoning",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 29-year-old woman develops severe vomiting four hours after having a meal at a local restaurant.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features justify your choice?",
        "a": "Most likely diagnosis: Staphylococcal Food Poisoning (preformed Staphylococcus aureus enterotoxin).\n- Justifying features: Very short incubation period (4 hours; classic range 1–6 hours, typically 1–4 hours) after a restaurant meal, dominated by abrupt, severe vomiting rather than fever or bloody diarrhea.\n- Key differential diagnoses: Emetic Bacillus cereus food poisoning (1–6 hours, classically linked to reheated fried rice), Norovirus (12–48 hours), Clostridium perfringens (6–24 hours, cramps & watery diarrhea without prominent vomiting), and non-infectious chemical/mushroom poisoning."
      },
      {
        "q": "2. What is the mechanism of illness and how do foods typically become contaminated?",
        "a": "- Mechanism: Ingestion of preformed, heat-stable staphylococcal enterotoxins (not active bacterial invasion of the gut). The toxin directly stimulates vagal afferents in the GI mucosa and the medullary vomiting center, explaining the rapid onset of severe vomiting.\n- Contamination source: Infected food handlers (nasal carriage or purulent skin lesions/paronychia on hands) contaminating protein-rich or cream-filled foods (pastries, mayonnaise salads, meats, dairy) left unrefrigerated at room temperature, allowing S. aureus to multiply and produce heat-stable enterotoxin. Reheating kills the bacteria but does NOT destroy the toxin."
      },
      {
        "q": "3. Are laboratory investigations routinely indicated in this patient?",
        "a": "- Uncomplicated healthy adult: Routine stool cultures or toxin testing are NOT needed, as the illness is clinical and self-limited (typically resolves within 24–48 hours).\n- When to investigate: Check serum electrolytes and renal function (urea/creatinine) ONLY if severe dehydration, persistent intractable vomiting, or hemodynamic instability occurs. Stool or leftover food testing is reserved for public health outbreak investigations if multiple restaurant patrons are affected."
      },
      {
        "q": "4. What is the immediate and definitive management of this patient?",
        "a": "1. Rehydration (Cornerstone of Management): Assess hydration status and vital signs. Give reduced-osmolarity WHO Oral Rehydration Solution (ORS) in small, frequent sips once vomiting settles; administer IV isotonic crystalloids (Normal Saline or Lactated Ringer's) if she has severe dehydration, hypotension, or cannot tolerate oral fluids.\n2. Symptomatic Relief: An antiemetic (e.g., Ondansetron) may be used to control severe vomiting and facilitate oral rehydration.\n3. CRITICAL OSCE RULE — NO Antibiotics: Antibiotics are NOT indicated because the illness is mediated by a preformed toxin, not bacterial infection, and resolves spontaneously within 24–48 hours."
      },
      {
        "q": "5. What red flags would change your management and what are the four food-safety prevention rules?",
        "a": "- Red Flags Requiring Escalation: Hypotension/shock, oliguria, bloody diarrhea, high fever, severe focal abdominal pain, or neurological symptoms (diplopia, ptosis, dysphagia -> suspect Botulism).\n- Prevention (CDC Four Steps): CLEAN (hand hygiene and excluding food handlers with open skin infections), SEPARATE (avoid cross-contamination), COOK thoroughly, and CHILL (prompt refrigeration <4°C so bacteria cannot multiply and form toxin). Notify public health authorities if a restaurant cluster/outbreak is suspected."
      }
    ]
  },
  {
    "id": 33,
    "title": "حالة 33: Chloroquine-Resistant Plasmodium vivax Malaria",
    "topic": "Chloroquine-Resistant Plasmodium vivax Malaria",
    "category": "Malaria & Vector-Borne",
    "scenario": "A 23-year-old student returns from India and develops Plasmodium vivax malaria resistant to chloroquine.",
    "questions": [
      {
        "q": "1. What is the clinical problem and why is geographic travel history to India important here?",
        "a": "Diagnosis: Uncomplicated Chloroquine-Resistant Plasmodium vivax Malaria (Benign Tertian Malaria).\n- Geographic relevance: India (along with Indonesia, Papua New Guinea, Ethiopia, and Pakistan) accounts for a major proportion of global P. vivax cases, and chloroquine-resistant P. vivax strains have emerged in parts of South/Southeast Asia and Oceania.\n- Clinical hallmark: Paroxysms of chills, high fever, and profuse sweating occurring every 48 hours (tertian periodicity), headache, myalgia, anemia, and splenomegaly."
      },
      {
        "q": "2. Why do P. vivax infections cause late relapses, and what distinguishes its life cycle from P. falciparum?",
        "a": "- Hypnozoite Formation: Both P. vivax and P. ovale form dormant hepatic exo-erythrocytic stages called hypnozoites that persist in hepatocytes and reactivate weeks to months (up to 1+ year) after the initial mosquito bite, causing true relapses.\n- RBC Tropism: P. vivax preferentially invades young reticulocytes via the Duffy blood group antigen (most West Africans are Duffy-negative, explaining low P. vivax prevalence there). In contrast, P. falciparum invades RBCs of all ages, causes microvascular sequestration (PfEMP1), and has NO hypnozoite stage."
      },
      {
        "q": "3. How is P. vivax malaria confirmed and differentiated from other Plasmodium species?",
        "a": "1. Thick & Thin Peripheral Blood Smears (Gold Standard): Thick film detects parasitemia with high sensitivity; Thin film confirms species and % parasitemia. P. vivax shows enlarged infected reticulocytes, Schüffner's stippling (dots), single-chromatin-dot rings, and characteristic amoeboid trophozoites.\n2. Rapid Diagnostic Tests (RDTs): Detect Plasmodium lactate dehydrogenase (pLDH) or aldolase (note: HRP-2 is specific only to P. falciparum).\n3. Pre-treatment Mandatory Lab Test: Quantitative **G6PD enzyme activity test** MUST be performed before starting anti-relapse therapy (Primaquine or Tafenoquine), plus a pregnancy test in females of childbearing potential."
      },
      {
        "q": "4. What is the most appropriate initial and radical-cure management for chloroquine-resistant P. vivax?",
        "a": "Treatment requires TWO components — a Blood Schizonticide (clinical cure) PLUS a Tissue Hypnozoiticide (radical cure / anti-relapse):\n1. Initial Blood Schizonticide (for Chloroquine-Resistant P. vivax):\n- First-line: Artemisinin-based Combination Therapy (ACT) — e.g., **Artemether-Lumefantrine** (Coartem: 80/480 mg PO at 0, 8, 24, 36, 48, and 60 hours for 3 days) OR Dihydroartemisinin-Piperaquine.\n- Alternatives: Atovaquone-Proguanil (Malarone), Quinine sulfate plus Doxycycline, or Mefloquine.\n2. Anti-Relapse / Radical Cure (after confirming normal G6PD status):\n- **Primaquine phosphate** (15–30 mg base PO once daily for 14 days) to eradicate dormant liver hypnozoites and prevent relapse (alternative: single-dose Tafenoquine 300 mg in patients ≥16 years with normal G6PD, though typically paired with chloroquine)."
      },
      {
        "q": "5. What happens if Primaquine is given to a G6PD-deficient patient, and how do you monitor response?",
        "a": "- G6PD Toxicity: Primaquine (and Tafenoquine) triggers acute oxidative **intravascular hemolytic anemia** and **methemoglobinemia** in G6PD-deficient patients. In mild-to-moderate G6PD deficiency, a supervised weekly Primaquine regimen (0.75 mg base/kg once weekly for 8 weeks) may be considered under specialist guidance; in severe deficiency or pregnancy, Primaquine is strictly contraindicated.\n- Monitoring & Prevention: Repeat blood smears every 12–24 hours until negative to confirm parasite clearance; counsel on future travel chemoprophylaxis (Atovaquone-Proguanil or Doxycycline) and insecticide-treated bed nets / DEET repellent."
      }
    ]
  },
  {
    "id": 34,
    "title": "حالة 34: Rabies Post-Exposure Prophylaxis (Dog Bite)",
    "topic": "Rabies Post-Exposure Prophylaxis",
    "category": "Rabies & Animal Exposure",
    "scenario": "An 18-year-old man is bitten by a forest dog.",
    "questions": [
      {
        "q": "1. What life-threatening infection must be immediately prevented in this patient, and how is this exposure classified?",
        "a": "Target infection: Rabies (Lyssavirus encephalomyelitis), which is virtually 100% fatal once clinical neurological symptoms develop.\n- WHO Exposure Classification: A transdermal bite from a wild/stray forest dog (high-risk reservoir whose observation is impossible) constitutes a **Category III (severe) exposure**, mandating immediate combined wound care, passive immunization (RIG), and active rabies vaccination."
      },
      {
        "q": "2. Is there a viremia in rabies? Explain its pathogenesis and classic histopathological hallmark.",
        "a": "- NO Viremia (Classic Hawari OSCE question!): Rabies virus does NOT enter the bloodstream.\n- Pathogenesis: After inoculation into skeletal muscle via saliva, the bullet-shaped single-stranded RNA Lyssavirus binds nicotinic acetylcholine receptors at the neuromuscular junction, enters peripheral motor/sensory nerves, and travels via **retrograde axonal transport** to the dorsal root ganglia, spinal cord, and brain (limbic system/brainstem), then spreads centrifugally along autonomic nerves to the salivary glands.\n- Histopathological Hallmark: **Negri bodies** — eosinophilic intracytoplasmic viral inclusion bodies found classically in hippocampal pyramidal neurons (Ammon's horn) and cerebellar Purkinje cells."
      },
      {
        "q": "3. What clinical manifestations appear if prophylaxis is missed and rabies develops?",
        "a": "Incubation period is typically 1–3 months (shorter with bites on the face/neck or rich nerve supply):\n1. Prodromal phase: Fever, malaise, anxiety, and **paresthesia/itching/pain at the healed bite site** (early diagnostic clue).\n2. Acute Neurological Phase: Either **Furious (encephalitic) rabies** (~80% — agitation, hyperexcitability, autonomic instability, hypersalivation, and painful laryngopharyngeal spasms causing **hydrophobia** and **aerophobia**) OR **Paralytic (dumb) rabies** (~20% — ascending flaccid paralysis mimicking Guillain-Barré).\n3. Coma & Death: Respiratory/cardiac arrest within days."
      },
      {
        "q": "4. Outline the exact immediate Post-Exposure Prophylaxis (PEP) protocol for this previously unimmunized man.",
        "a": "1. Immediate Wound Care (First and Most Crucial Step): Wash and flush the wound thoroughly with soap and running water for **at least 15 minutes**, then irrigate with a virucidal agent (**povidone-iodine** or 70% ethanol). Avoid primary suturing of the wound whenever possible (if closure is unavoidable, infiltrate RIG first). Assess Tetanus vaccination status and give wound antibiotics (e.g., Amoxicillin-Clavulanate) for secondary bacterial infection (Pasteurella/Capnocytophaga).\n2. Passive Immunization — Rabies Immunoglobulin (RIG): Give **Human RIG (20 IU/kg)** (or Equine RIG 40 IU/kg) on Day 0. Infiltrate the **full calculated dose directly in and around the bite wound(s)**; inject any remaining volume IM at an anatomical site distant from the vaccine.\n3. Active Immunization — Rabies Vaccine: Administer **HDCV or PCECV 1.0 mL IM in the deltoid muscle** (NEVER in the gluteal region — causes lower neutralizing antibody titers!) on **Days 0, 3, 7, and 14** (add a 5th dose on Day 28 if immunocompromised)."
      },
      {
        "q": "5. How would your PEP regimen differ if this patient had already been fully vaccinated against rabies previously?",
        "a": "- Wound Care: Same immediate thorough washing with soap and water + povidone-iodine.\n- RIG: **Do NOT administer RIG** (pre-existing memory B-cells mount a rapid anamnestic response, and RIG may blunt it).\n- Vaccine Booster Schedule: Only **2 booster doses** of HDCV or PCECV (1.0 mL IM in the deltoid) on **Days 0 and 3**."
      }
    ]
  },
  {
    "id": 35,
    "title": "حالة 35: Occupational HIV Post-Exposure Prophylaxis (Needle-Stick Injury)",
    "topic": "Occupational HIV Post-Exposure Prophylaxis",
    "category": "Other Infections & Parasites",
    "scenario": "A 23-year-old health care assistant sustained a needle-stick injury on Friday afternoon from a known HIV-positive case and presents on Monday morning.",
    "questions": [
      {
        "q": "1. Is this healthcare worker still eligible for HIV Post-Exposure Prophylaxis (PEP) on Monday morning, and what is the transmission risk?",
        "a": "- Eligibility: **YES — START PEP IMMEDIATELY!** From Friday afternoon to Monday morning is approximately 60–66 hours, which is STILL within the **72-hour window** for initiating HIV PEP (ideally started within 2 hours, and effective up to 72 hours post-exposure).\n- Transmission Risk: Average risk of HIV transmission after a single percutaneous needle-stick exposure from an HIV-positive source is approximately **0.3%** (3 per 1,000 exposures; compared to ~0.09% for mucous membrane exposure, ~1.8–3% for HCV, and up to 30% for HBV in unvaccinated HCWs). Risk increases with deep injury, hollow-bore needle visibly contaminated with blood, and high source viral load."
      },
      {
        "q": "2. How do you classify this exposure using the Exposure Code (EC) and Source Code (SC) system?",
        "a": "Per the Al-Azhar PEP protocol:\n- Exposure Code (EC): Percutaneous superficial injury = **EC 2**; deep puncture with a large-bore/hollow needle visibly contaminated with blood or used IV/IA = **EC 3**.\n- Source Code (SC): Known HIV-positive source — clinically asymptomatic with high CD4 and low viral load = **SC 1 (low risk)**; clinically symptomatic, low CD4, or high viral load = **SC 2 (high risk)**.\n- Action: Any percutaneous exposure (EC 2 or EC 3) from an HIV-positive source (SC 1 or SC 2) mandates a full **28-day course of HIV PEP**."
      },
      {
        "q": "3. What immediate first-aid, reporting, and baseline laboratory steps must be performed?",
        "a": "1. Local Wound First Aid: Wash the puncture site gently with soap and water without scrubbing; do NOT squeeze/milk the wound and do NOT apply caustic antiseptics (bleach).\n2. Reporting: Report immediately to the Hospital Infection Control (IPC) team and the governorate HIV focal point.\n3. Baseline Serologic Evaluation:\n- Exposed HCW: Baseline 4th-generation HIV Ag/Ab combo test (to prove negative baseline status), anti-HBs titer (verify HBV immunity ≥10 mIU/mL), anti-HCV, CBC, liver and renal function tests (prior to starting ARVs), and pregnancy test if female.\n- Source Patient: Review HIV viral load, CD4 count, current ART/resistance history, and test for HBsAg and anti-HCV."
      },
      {
        "q": "4. What is the recommended HIV PEP antiretroviral regimen and exact duration?",
        "a": "- Preferred 3-Drug ARV Regimen (WHO / CDC / National AIDS Program): **2 NRTIs + 1 Integrase Strand Transfer Inhibitor (INSTI)**:\n  - **Tenofovir Disoproxil Fumarate (TDF 300 mg) + Emtricitabine (FTC 200 mg)** [or Lamivudine 3TC 300 mg] once daily **PLUS Dolutegravir (DTG 50 mg)** once daily (alternative INSTI: Raltegravir 400 mg BID).\n- Duration: **28 days (4 full weeks)** of uninterrupted daily therapy.\n- Counseling: Advise safe sexual practices (condoms), avoid blood/organ donation, and monitor for medication side effects/adherence."
      },
      {
        "q": "5. What is the post-exposure follow-up testing schedule, and how should HBV/HCV co-exposure be handled?",
        "a": "- HIV Follow-up Testing Protocol: Baseline (**Day 0**), **1 month (4–6 weeks)**, and **3 months (12 weeks)** using 4th-generation Ag/Ab assay (extend to 6 months if the source is co-infected with HCV and HCW seroconverts to HCV).\n- HBV Co-Exposure: If HCW is unvaccinated or anti-HBs <10 mIU/mL and source is HBsAg+, give **HBIG + HepB vaccine** within 24 hours.\n- HCV Co-Exposure: **No vaccine and no PEP exist for HCV**; monitor exposed HCW with HCV RNA PCR at 4–6 weeks and anti-HCV/LFTs at 3–6 months, and treat with curative DAAs if acute infection develops."
      }
    ]
  },
  {
    "id": 36,
    "title": "حالة 36: Infectious Mononucleosis (EBV) & Splenic Rupture",
    "topic": "Infectious Mononucleosis (EBV)",
    "category": "Lymphadenopathy & Spleen",
    "scenario": "A 22-year-old man presents with fatigue and sore throat for two weeks. The likely diagnosis is infectious mononucleosis.",
    "questions": [
      {
        "q": "1. What is the most serious acute life-threatening complication he is at risk of, and when does it typically occur?",
        "a": "Most critical life-threatening complication: **Splenic rupture** (occurring in ~0.1–0.5% of cases due to rapid lymphoid infiltration and stretching of the splenic capsule).\n- Peak risk window: Usually occurs between **weeks 2 and 4** of illness (matching this patient's 2-week presentation), often triggered by minor abdominal trauma or contact sports, though spontaneous rupture can occur.\n- Red flag signs: Sudden severe left upper quadrant (LUQ) pain, Kehr's sign (referred left shoulder tip pain), tachycardia, and hemorrhagic shock -> requires urgent surgical/CT evaluation."
      },
      {
        "q": "2. What is the causative agent, classic clinical triad, and key lymph node/spleen examination findings?",
        "a": "- Causative Agent: **Epstein-Barr Virus (EBV / Human Herpesvirus-4)**, transmitted via oropharyngeal secretions/saliva ('kissing disease'), which infects B-lymphocytes via CD21 receptors.\n- Classic Triad: Prolonged **fever**, exudative **pharyngitis/tonsillitis**, and **generalized lymphadenopathy** (classically prominent **posterior cervical** and **epitrochlear** lymph nodes — soft, mobile, tender).\n- Additional signs: **Splenomegaly** (~50% of patients), mild hepatomegaly/transaminitis, palatal petechiae, and periorbital edema."
      },
      {
        "q": "3. What diagnostic investigations confirm EBV Infectious Mononucleosis?",
        "a": "1. Complete Blood Count (CBC) & Blood Film: Relative and absolute **lymphocytosis (>50% lymphocytes)** with **>10% atypical lymphocytes (Downey cells)** — these are activated cytotoxic CD8+ T-cells reacting against EBV-infected B-cells.\n2. **Monospot (Heterophile Antibody / Paul-Bunnell) Test**: Rapid screening test (sensitivity ~85%, specificity >95%; may be false-negative during the 1st week or in children <4 years).\n3. Specific EBV Serology (if Monospot is negative): **Anti-VCA IgM (+)** indicates acute primary infection; **Anti-EBNA IgG (+)** appears months later and indicates past resolved infection.\n4. Differential for Heterophile-Negative Mononucleosis: CMV, acute HIV seroconversion, Toxoplasma gondii, HHV-6."
      },
      {
        "q": "4. What is the management plan and what critical medication must be strictly avoided?",
        "a": "1. Supportive Management (Mainstay): Adequate rest, oral hydration, and analgesics/antipyretics (Paracetamol or NSAIDs). Antivirals (Acyclovir) have no clinical benefit in uncomplicated EBV.\n2. Activity Restriction: **Strictly avoid contact sports, heavy lifting, and strenuous physical activity for at least 3–4 weeks** (and until splenomegaly completely resolves) to prevent splenic rupture.\n3. CRITICAL OSCE RULE: **NEVER prescribe Ampicillin or Amoxicillin** (often mistakenly given for presumed streptococcal tonsillitis) — it triggers a widespread, pruritic **maculopapular (morbilliform) drug rash in 80–90%** of EBV patients.\n4. Corticosteroids: Reserved ONLY for severe complications such as impending **upper airway obstruction** from massive tonsillar hypertrophy, severe autoimmune hemolytic anemia, or profound thrombocytopenia."
      },
      {
        "q": "5. What other systemic complications can follow EBV infection?",
        "a": "- Acute Complications: Upper airway obstruction (tonsillar enlargement), autoimmune hemolytic anemia (cold agglutinins), thrombocytopenia, mild hepatitis, myocarditis, and neurological sequelae (Guillain-Barré syndrome, aseptic meningitis, Bell's palsy).\n- Long-term Oncogenic Associations: Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, and post-transplant lymphoproliferative disorder (PTLD)."
      }
    ]
  },
  {
    "id": 37,
    "title": "حالة 37: Leptospirosis",
    "topic": "Leptospirosis",
    "category": "Other Infections & Parasites",
    "scenario": "A 44-year-old farmer presents with headache, fever, myalgia, nausea, oliguria, and subconjunctival hemorrhage.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features justify your choice?",
        "a": "Most likely diagnosis: **Severe Leptospirosis** (progressing toward **Weil's disease / hepato-renal hemorrhagic syndrome**).\n- Justifying features: High-risk occupational exposure (**farmer** working in mud/freshwater contaminated with rodent urine) + abrupt febrile illness with headache, severe myalgia (classically calves/lower back), **subconjunctival hemorrhage / conjunctival suffusion** (pathognomonic ocular clue without purulent discharge), and **oliguria** (acute kidney injury).\n- Key differential diagnoses: Dengue fever, Malaria, Viral Hemorrhagic Fevers (Hantavirus / RVF), Typhoid fever, and Acute Viral Hepatitis."
      },
      {
        "q": "2. Describe the causative organism, animal reservoirs, and classic biphasic clinical course.",
        "a": "- Causative Organism: **Leptospira** species (tightly coiled, thin, obligate aerobic **spirochetes** with hooked ends and periplasmic flagella; too thin for routine Gram stain — visualized by **dark-field microscopy** or **silver stain**).\n- Reservoir & Transmission: Carried asymptomatically in renal tubules of **rodents (rats)**, livestock, and dogs; shed in urine into water/soil; enters humans through abraded/water-softened skin or mucous membranes.\n- Biphasic Course (IP 5–14 days):\n  1. **Leptospiremic (septicemic) phase (Days 1–7)**: High fever, rigors, severe calf/lumbar myalgia, conjunctival suffusion, headache; organisms present in blood and CSF.\n  2. **Immune phase (Day 6–10 onward)**: Antibodies clear blood, organisms persist in kidneys; aseptic meningitis, uveitis, and severe multi-organ complications (Weil's disease, pulmonary hemorrhage syndrome)."
      },
      {
        "q": "3. How does the choice of confirmatory diagnostic test depend on the day of illness?",
        "a": "Do NOT wait for lab results before starting antibiotics!\n1. **Days 1–7 (Leptospiremic phase)**: **Blood PCR** (rapid detection of leptospiral DNA) or blood culture on special **EMJH medium** (slow, takes weeks).\n2. **After Day 5–7 (Immune phase)**: Serology — **IgM ELISA** (screening) and **Microscopic Agglutination Test (MAT — Gold Standard reference test)** demonstrating a **≥4-fold rise in titer** between paired acute and convalescent sera.\n3. **Week 2 onward**: **Urine PCR or culture** (organisms shed in urine for weeks).\n4. Supportive Labs: Neutrophilic leukocytosis, thrombocytopenia, elevated serum creatinine with **hypokalemia**, elevated CK (myositis), elevated bilirubin with only **modestly elevated ALT/AST**, and urinalysis showing proteinuria/hematuria/casts."
      },
      {
        "q": "4. What is the immediate antimicrobial and supportive management for this farmer?",
        "a": "Because this patient has **oliguria (AKI)** and **hemorrhagic manifestations**, he has **SEVERE Leptospirosis** requiring urgent hospital admission and parenteral antibiotics:\n1. **First-line IV Antibiotics (Start immediately)**: **IV Penicillin G 1.5 million units every 6 hours** (Drug of Choice) OR **IV Ceftriaxone 1 g every 24 hours** for **5–7 days** (alternatives: IV Ampicillin or IV Cefotaxime).\n   *(For mild/anicteric outpatient cases: Oral **Doxycycline 100 mg twice daily** for 7 days; Azithromycin or Amoxicillin in pregnancy/children.)*\n2. Supportive Care: Careful IV fluid and electrolyte management (correct hypokalemia), monitor urine output, renal replacement therapy (hemodialysis) if uremic/oliguric AKI progresses, and respiratory/ICU support if pulmonary hemorrhage develops.\n3. **OSCE Alert**: Monitor closely for **Jarisch-Herxheimer reaction** (sudden fever, rigors, hypotension) after the first antibiotic dose."
      },
      {
        "q": "5. What preventive measures and chemoprophylaxis are recommended for high-risk farmers?",
        "a": "- Personal & Environmental Control: Wear waterproof boots, gloves, and protective clothing; cover skin cuts; avoid wading barefoot in floodwater; rodent control and improved drainage/sanitation; vaccinate livestock/dogs.\n- Short-Term Chemoprophylaxis: **Oral Doxycycline 200 mg once weekly** (started 1–2 days before exposure) for individuals with unavoidable short-term high-risk flood or agricultural exposure."
      }
    ]
  },
  {
    "id": 38,
    "title": "حالة 38: Brucellosis (Undulant / Malta Fever)",
    "topic": "Brucellosis",
    "category": "Brucellosis",
    "scenario": "A 30-year-old veterinarian presents with malaise, chills, sweats, fatigue, and intermittent fever.",
    "questions": [
      {
        "q": "1. What is the most likely etiologic agent and which clinical features justify your choice?",
        "a": "Most likely etiologic agent: **Brucella species** — causing **Brucellosis** (Undulant Fever / Malta Fever / Mediterranean Fever).\n- Justifying features: Classic high-risk occupation (**veterinarian** exposed to livestock animals, birth products, and aerosols) presenting with systemic constitutional symptoms — malaise, fatigue, chills, profuse **sweating** (classically foul/wet-hay odor), and **intermittent/undulating fever**.\n- Key differential diagnoses: Tuberculosis, Enteric (Typhoid) fever, Q fever (Coxiella burnetii), Infective Endocarditis, and Lymphoma."
      },
      {
        "q": "2. Which Brucella species infect humans, what are their animal reservoirs, and what is the most common mode of transmission?",
        "a": "- Causative Organism: Small, aerobic, Gram-negative, facultative intracellular coccobacilli (virulence factor: LPS endotoxin A & M; survives inside reticuloendothelial macrophages -> granuloma formation, hepatosplenomegaly, lymphadenopathy).\n- Main Species & Reservoirs:\n  1. **Brucella melitensis** (Goats & Sheep) — **most common and most severe** human pathogen in Egypt/Middle East.\n  2. **Brucella abortus** (Cattle).\n  3. **Brucella suis** (Pigs — prolonged, suppurative, destructive lesions).\n  4. **Brucella canis** (Dogs).\n- Modes of Transmission: **Ingestion of unpasteurized milk or dairy products** (most common globally) AND **direct occupational contact** through abraded skin, conjunctiva, or inhalation of aerosols in veterinarians, farmers, butchers, and lab technicians."
      },
      {
        "q": "3. What are the confirmatory diagnostic investigations, and what makes STA positive?",
        "a": "1. **Direct Isolation (Gold Standard / Most Accurate)**: **Bone marrow culture (>90% sensitivity — highest yield)** or **Blood culture** using **Castaneda's biphasic medium** (requires prolonged incubation up to 4–6 weeks; alert lab due to biohazard aerosol risk).\n2. **Serology (Most Commonly Used — Standard Tube Agglutination / STA / Wright / Malta Test)**: Detects anti-Brucella antibodies (primarily IgM/IgG); positive at a single titer **≥1:160** (or **≥1:320** in endemic areas like Egypt) OR a **≥4-fold rise** in paired sera taken 2 weeks apart. Note: Beware of the **Prozone phenomenon** (false-negative at low dilutions due to excess blocking antibodies — overcome by serial dilution).\n3. Supportive Labs: Mild anemia, leukopenia/normal WBC with relative lymphocytosis, mildly elevated transaminases, and relative bradycardia."
      },
      {
        "q": "4. What is the definitive treatment strategy and exact age-based drug regimens?",
        "a": "Core Hawari OSCE Principle: **Combination therapy with intracellular-penetrating antibiotics for a LONG duration (at least 6 weeks)** to prevent relapse!\n- **Adults & Children ≥8 years**:\n  - **Doxycycline 100 mg PO twice daily + Rifampicin 600–900 mg PO once daily for 6 weeks** (WHO oral regimen); OR\n  - **Doxycycline 100 mg PO BID (6 weeks) + Streptomycin 1 g IM daily (first 2–3 weeks)** [or Gentamicin IV/IM for 7–14 days — lowest relapse rate, preferred in spondylitis].\n- **Children <8 years**: **Cotrimoxazole (TMP-SMX) + Rifampicin for 6 weeks** (avoid Doxycycline due to tooth staining).\n- **Pregnancy**: **Rifampicin 600–900 mg daily ± TMP-SMX** for 6 weeks (strictly avoid Doxycycline and Streptomycin)."
      },
      {
        "q": "5. What are the most common and most fatal complications of Brucellosis?",
        "a": "- **Osteoarticular (MOST COMMON complication, 20–60%)**: **Sacroiliitis**, lumbar **spondylitis** (vertebral osteomyelitis/discitis — mimics Pott's disease), and peripheral septic arthritis.\n- **Genitourinary**: Unilateral **epididymo-orchitis** in males.\n- **Cardiovascular (MOST FATAL complication)**: **Infective endocarditis** (usually aortic valve — requires triple therapy + valve surgery).\n- **Neurobrucellosis**: Chronic lymphocytic meningitis, cranial nerve palsies (requires Doxycycline + Rifampicin + Ceftriaxone/TMP-SMX for 3–6 months)."
      }
    ]
  },
  {
    "id": 39,
    "title": "حالة 39: Pneumocystis jirovecii Pneumonia (PCP) in HIV",
    "topic": "Pneumocystis jirovecii Pneumonia (PCP)",
    "category": "Other Infections & Parasites",
    "scenario": "A 41-year-old HIV-infected male who refused antiretroviral therapy (ART) is diagnosed with Pneumocystis jirovecii infection.",
    "questions": [
      {
        "q": "1. What is the clinical significance of Pneumocystis jirovecii infection in an HIV-positive patient?",
        "a": "- **AIDS-Defining Opportunistic Infection**: Pneumocystis jirovecii pneumonia (PCP) indicates severe cell-mediated immunosuppression with a **CD4+ T-cell count < 200 cells/µL**.\n- Typical Presentation: Subacute onset (over 1–3 weeks) of progressive exertional **dyspnea**, **dry non-productive cough**, low-grade fever, and disproportionate hypoxemia (oxygen desaturation on walking), often with a deceptively clear chest auscultation early on.\n- Key DD in HIV with CD4 <200 & pulmonary infiltrates: Pulmonary TB, bacterial community-acquired pneumonia, Cryptococcal pneumonia, and pulmonary Kaposi sarcoma."
      },
      {
        "q": "2. Why do standard antifungal agents like Fluconazole or Amphotericin B fail against Pneumocystis jirovecii?",
        "a": "- Unique Fungal Biology: Although classified as an atypical opportunistic fungus (developmental stages: trophic form, precyst, and cyst containing up to 8 intracystic bodies), **Pneumocystis jirovecii LACKS ergosterol** in its cell membrane (uses cholesterol instead).\n- Therapeutic Implication: Antifungals that target ergosterol synthesis or bind ergosterol (azoles, Amphotericin B) are completely ineffective!\n- Histopathology: Organisms attach extracellularly to type I pneumocytes, filling alveoli with characteristic **foamy, eosinophilic, vacuolated (honeycomb) exudates** causing impaired gas diffusion."
      },
      {
        "q": "3. What investigations confirm PCP and assess its severity?",
        "a": "1. **Definitive Microbiological Specimen**: **Fiberoptic Bronchoscopy with Bronchoalveolar Lavage (BAL)** (mainstay, >90% sensitivity) or **induced sputum** (organism burden is high in HIV patients).\n2. **Specific Staining & Molecular Tests**: **Gomori Methenamine Silver (GMS)** or toluidine blue (stains cyst walls black/cup-shaped), **Wright-Giemsa** (stains nuclei of trophic & intracystic forms), **Direct Immunofluorescence (DFA)**, or **PCR** (highest sensitivity).\n3. **Chest Imaging**: CXR/HRCT shows diffuse **bilateral symmetrical perihilar interstitial / ground-glass opacities ('bat-wing' appearance)**; thin-walled cysts (pneumatoceles) predispose to spontaneous pneumothorax.\n4. **Adjunctive & Severity Labs**: Markedly elevated **serum LDH**, elevated serum **(1,3)-β-D-glucan**, **ABG** (to check PaO2 and A-a gradient for steroid indication), and CD4 count + HIV viral load."
      },
      {
        "q": "4. What is the exact first-line treatment, steroid threshold, and alternative regimens for PCP?",
        "a": "1. **First-Line Drug of Choice (for 21 days)**: **High-dose Trimethoprim-Sulfamethoxazole (TMP-SMX)** — **15–20 mg/kg/day of TMP component** (75–100 mg/kg/day SMX) divided every 6–8 hours (IV for moderate-to-severe disease, PO for mild disease).\n2. **Adjunctive Systemic Corticosteroids (CRITICAL OSCE RULE)**: Indicated in moderate-to-severe PCP when **PaO2 < 70 mmHg on room air OR Alveolar-arterial (A-a) gradient ≥ 35 mmHg** -> **Prednisone 40 mg PO BID x 5 days**, then 40 mg daily x 5 days, then 20 mg daily x 11 days (total 21 days; IV Methylprednisolone if unable to take PO) to prevent paradoxical inflammatory lung injury.\n3. **Alternative Regimens (if sulfa allergy or G6PD deficiency)**:\n   - Moderate-to-severe: **IV/PO Clindamycin + PO Primaquine** (check G6PD first!) OR **IV Pentamidine** (3–4 mg/kg/day — monitor for hypoglycemia/pancreatitis/nephrotoxicity).\n   - Mild-to-moderate: **Oral Atovaquone** 750 mg BID with meals OR Dapsone + Trimethoprim."
      },
      {
        "q": "5. When should ART be initiated, and what secondary prophylaxis is required after recovery?",
        "a": "- **ART Initiation**: Counsel the patient empathetically and initiate first-line **ART** (e.g., TDF + FTC/3TC + Dolutegravir) **within 2 weeks** of starting PCP treatment (improves survival and immune reconstitution).\n- **Secondary PCP Prophylaxis**: Start immediately upon completing the 21-day acute course using **TMP-SMX 1 double-strength (160/800 mg) tablet PO once daily** (or 3x/week; alternative: Dapsone or Atovaquone). Continue until **CD4 count rises > 200 cells/µL for at least 3 consecutive months** on ART."
      }
    ]
  },
  {
    "id": 40,
    "title": "حالة 40: Meningococcal Meningitis (Neisseria meningitidis)",
    "topic": "Meningococcal Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 55-year-old diabetic man presents with headache, fever, photophobia, neck stiffness, and a non-blanching rash.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism and which clinical features justify your choice?",
        "a": "Most likely causative organism: **Neisseria meningitidis** (Meningococcal meningitis with meningococcemia).\n- Justifying features: Classic acute meningeal triad (**fever, headache, neck stiffness**) + **photophobia** + **non-blanching petechial/purpuric rash** (medical emergency strongly pathognomonic of meningococcal septicemia and microvascular thrombosis/DIC).\n- Critical Host Consideration: Because he is **55 years old (>50) and diabetic**, empiric therapy MUST ALSO cover **Streptococcus pneumoniae** and **Listeria monocytogenes** until microbiological confirmation!"
      },
      {
        "q": "2. How do you clinically distinguish a blanching vs. non-blanching rash, and what are the classical signs of meningeal irritation?",
        "a": "- **Blanching vs. Non-Blanching Rash (Glass Tumbler Test)**: Press a clear glass firmly against the rash. **Erythema/maculopapular viral rash** fades/blanches under pressure; **Petechiae (<2–3 mm) and Purpura (3–10 mm)** represent extravasated RBCs into dermis and **DO NOT BLANCH** under pressure -> urgent red flag for meningococcemia.\n- **Signs of Meningeal Irritation**:\n  1. **Nuchal rigidity**: Painful resistance to passive neck flexion (differentiate from functional stiffness by placing head over edge of bed).\n  2. **Kernig's sign**: With hip and knee flexed 90°, inability to extend knee beyond 135° due to hamstring spasm.\n  3. **Brudzinski's neck sign**: Passive neck flexion induces involuntary flexion of hips and knees.\n  *(Note: Kernig's & Brudzinski's have low sensitivity 20–30% but high specificity 85–95%.)*"
      },
      {
        "q": "3. What diagnostic investigations are required and what CSF profile is expected?",
        "a": "1. **Blood Cultures** (2 sets) + CBC, coagulation profile (PT/INR, aPTT, D-dimer, fibrinogen for DIC), glucose, renal function, lactate.\n2. **Lumbar Puncture (LP) & CSF Analysis** (perform immediately if no CT-first FAILS criteria; if delayed, NEVER delay antibiotics!):\n   - Opening pressure: **High (>180 mmH2O)**; Appearance: **Turbid/cloudy**.\n   - Cells: Markedly elevated **PMNs / Neutrophils** (1,000–10,000/µL).\n   - Protein: **High (>150 mg/dL)**.\n   - Glucose: **Low (<40 mg/dL; CSF-to-serum glucose ratio <0.40)**.\n   - Microbiology: **Gram stain** showing **Gram-negative kidney-bean intracellular diplococci**, CSF culture, and **meningitis multiplex PCR**."
      },
      {
        "q": "4. What is the immediate empiric management protocol for this 55-year-old diabetic man?",
        "a": "**GOLDEN HAWARI OSCE RULE: NEVER delay empiric IV antibiotics for Lumbar Puncture or CT brain!**\n1. **Empiric IV Antibiotics (start immediately after blood cultures)**:\n   - **IV Ceftriaxone 2 g every 12 hours** (covers N. meningitidis & S. pneumoniae)\n   - **PLUS IV Vancomycin 15–20 mg/kg every 8–12 hours** (covers penicillin/cephalosporin-resistant S. pneumoniae)\n   - **PLUS IV Ampicillin 2 g every 4 hours** (MANDATORY here because patient is **>50 years old and diabetic** -> covers **Listeria monocytogenes**!).\n   *(Once N. meningitidis is confirmed, de-escalate to IV Ceftriaxone 2 g q12h for 7 days.)*\n2. **Adjunctive IV Dexamethasone**: **10 mg IV every 6 hours for 4 days**, given **15–20 minutes before or concurrently with** the first antibiotic dose to reduce neurological sequelae.\n3. Supportive ICU Care: IV fluid resuscitation, vasopressors if septic shock, glycemic control."
      },
      {
        "q": "5. What life-threatening complication is associated with meningococcemia, and what IPC & contact prophylaxis measures are mandatory?",
        "a": "- **Complications**: Fulminant septic shock, **Disseminated Intravascular Coagulation (DIC)**, purpura fulminans/digital gangrene, and **Waterhouse-Friderichsen syndrome** (bilateral adrenal hemorrhage causing refractory shock).\n- **Infection Control (IPC)**: Immediate **Droplet Precautions** (private room, surgical mask, gloves, gown) for the first **24 hours** after initiating effective antibiotic therapy.\n- **Close Contact Chemoprophylaxis** (household contacts & HCWs with unprotected airway/droplet exposure — start within 24 hours):\n  - **Rifampicin** 600 mg PO every 12 hours for 2 days (Drug of Choice in Egyptian curriculum; avoid in pregnancy), OR\n  - **Ciprofloxacin** 500 mg PO single dose (adults, non-pregnant), OR\n  - **Ceftriaxone** 250 mg IM single dose (safe in pregnancy)."
      }
    ]
  },
  {
    "id": 41,
    "title": "حالة 41: Dengue Fever",
    "topic": "Dengue Fever",
    "category": "Malaria & Vector-Borne",
    "scenario": "A 30-year-old man returned from Saudi Arabia with fever, joint pain, myalgia, and retro-orbital headache.",
    "questions": [
      {
        "q": "1. What is the most probable diagnosis and which clinical clues justify your choice?",
        "a": "Most probable diagnosis: **Dengue Fever** ('Breakbone Fever').\n- Justifying features: Recent travel to an endemic area (**Saudi Arabia**, particularly Western/Red Sea regions like Jeddah/Makkah where Aedes mosquitoes are endemic) + classic acute febrile triad of **severe myalgia and arthralgia (joint pain)** + **retro-orbital headache**.\n- Key differential diagnoses: Chikungunya (more prominent symmetric polyarthralgia), Malaria (must always be excluded in febrile travelers!), Rift Valley Fever, Leptospirosis, Enteric (Typhoid) fever, and Zika virus."
      },
      {
        "q": "2. What is the vector, viral classification, and mechanism behind Severe Dengue (DHF/DSS)?",
        "a": "- Causative Virus & Vector: **Dengue virus** (family Flaviviridae, 4 distinct serotypes **DEN-1, DEN-2, DEN-3, DEN-4**), transmitted by daytime-biting female **Aedes aegypti** (and Aedes albopictus) mosquitoes. Incubation period: **3–14 days** (typically 4–8 days).\n- Pathogenesis of Severe Dengue — **Antibody-Dependent Enhancement (ADE)**: Primary infection confers lifelong immunity to the same serotype only. Subsequent secondary infection with a **different (heterologous) serotype** leads to non-neutralizing cross-reactive antibodies binding the virus and enhancing Fc-receptor-mediated macrophage uptake -> massive viral replication, cytokine storm, **endothelial capillary leak (plasma leakage)**, thrombocytopenia, and hemorrhage."
      },
      {
        "q": "3. How is Dengue classified according to the WHO 2009 guidelines, and what are the warning signs?",
        "a": "WHO 2009 Classification:\n1. **Dengue without warning signs**: Fever + ≥2 of nausea/vomiting, rash (maculopapular/erythematous), aches/pains (retro-orbital/myalgia), leukopenia, positive tourniquet test.\n2. **Dengue WITH Warning Signs** (usually appear around defervescence — critical phase, days 3–7): **Abdominal pain/tenderness**, **persistent vomiting**, **clinical fluid accumulation** (ascites/pleural effusion), **mucosal bleeding**, **lethargy/restlessness**, **liver enlargement >2 cm**, and **rising hematocrit with rapid fall in platelets**.\n3. **Severe Dengue**: Severe plasma leakage (Dengue Shock Syndrome with narrow pulse pressure <20 mmHg, or fluid accumulation with respiratory distress), severe bleeding, or severe organ involvement (AST/ALT ≥1000 U/L, impaired consciousness, myocarditis)."
      },
      {
        "q": "4. What diagnostic investigations confirm Dengue and monitor for progression to severe disease?",
        "a": "1. **Specific Virological Tests (by Day of Illness)**:\n   - **Days 1–5 (Acute Febrile Phase)**: **Dengue NS1 antigen ELISA/rapid test** OR **Dengue RT-PCR** (most specific early test).\n   - **After Day 5**: **Dengue IgM ELISA** (note: possible cross-reactivity with other flaviviruses).\n2. **Essential Monitoring Labs**: Serial **CBC** (classic triad: **leukopenia**, **thrombocytopenia [<100,000/µL]**, and **rising hematocrit [≥20% rise = hemoconcentration/plasma leakage]**), LFTs (AST > ALT), and coagulation profile.\n3. **Mandatory Parallel Test**: Always perform a **malaria blood film/RDT** to exclude co-existing malaria in returning travelers."
      },
      {
        "q": "5. What is the management protocol and which common antipyretics must be strictly avoided?",
        "a": "1. **No Licensed Specific Antiviral**: Management is strictly **supportive** with close monitoring during the critical phase (days 3–7 around defervescence).\n2. **Fluid Management**: Aggressive oral hydration for uncomplicated dengue; carefully titrated **IV isotonic crystalloids (Normal Saline or Ringer's Lactate)** for warning signs or shock, guided by serial hematocrit and urine output (avoid fluid overload during recovery phase).\n3. **Fever & Pain Control — CRITICAL OSCE RULE**: Use **Paracetamol (Acetaminophen)** ONLY. **STRICTLY AVOID Aspirin and NSAIDs (Ibuprofen, Diclofenac, Ketorolac)** because they impair platelet function, worsen GI/mucosal hemorrhage, and carry a risk of Reye's syndrome.\n4. **Prevention**: Mosquito bite avoidance (daytime DEET repellent, screens, eliminating standing water). Licensed vaccines: **TAK-003 (Qdenga)** (WHO-prequalified 2024, regardless of prior infection) and **Dengvaxia** (restricted ONLY to individuals with confirmed prior dengue infection due to ADE risk)."
      }
    ]
  },
  {
    "id": 42,
    "title": "حالة 42: Viral (Aseptic) Meningitis",
    "topic": "Viral (Aseptic) Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 68-year-old man complains of fever and headache for the last 24 hours. He feels generally unwell and prefers to lie in a dark room. A lumbar puncture reveals normal protein, normal glucose, and lymphocytosis.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical and CSF findings justify your choice?",
        "a": "Most likely diagnosis: **Viral (Aseptic) Meningitis**.\n- Justifying clinical features: Acute onset (24 hours) of fever, headache, and **photophobia** (prefers lying in a dark room) without altered mental status, seizures, or focal neurological deficits (arguing against encephalitis).\n- Justifying CSF profile: **Lymphocytic pleocytosis**, **normal CSF protein**, and **normal CSF glucose** — the textbook triad of viral/aseptic meningitis."
      },
      {
        "q": "2. What are the most common causative viruses, and how does this CSF profile compare with Bacterial and Tuberculous meningitis?",
        "a": "- Most Common Viral Causes: **Enteroviruses** (Coxsackieviruses & Echoviruses — #1 overall cause of aseptic meningitis), followed by **HSV-2** (classic cause of recurrent benign Mollaret meningitis), **VZV**, **Mumps**, **Arboviruses** (West Nile), and **acute HIV seroconversion**.\n- **CSF Comparison Table (Al-Azhar Exam Gold Standard)**:\n  - **Viral (Aseptic)**: Clear, pressure normal/<180 mmH2O, **Lymphocytes**, **Normal (or mildly raised 50–100 mg/dL) protein**, **Normal glucose (>40 mg/dL; ratio >0.5)**.\n  - **Acute Bacterial**: Turbid, high pressure (>180), **High PMNs (neutrophils)**, **High protein (>150 mg/dL)**, **Low glucose (<40 mg/dL; ratio <0.4)**.\n  - **Tuberculous (TB)**: Cobweb fibrin clot on standing, high pressure, **Lymphocytes**, **Very high protein**, **Low glucose**."
      },
      {
        "q": "3. What confirmatory microbiological tests should be sent on the CSF sample?",
        "a": "1. **CSF Multiplex Viral PCR (NAAT)**: Tests simultaneously for **Enteroviruses**, **HSV-1/HSV-2**, **VZV**, and other neurotropic viruses (gold standard for rapid confirmation).\n2. **CSF Gram Stain & Bacterial Culture**: Mandatory to definitively exclude partially treated bacterial meningitis (which can occasionally mimic lymphocytic CSF early on).\n3. **Additional Testing (if clinically indicated)**: HIV screening (acute HIV can present as aseptic meningitis), CSF VDRL (neurosyphilis), and Cryptococcal antigen/AFB if subacute or immunocompromised."
      },
      {
        "q": "4. What is the appropriate management for confirmed viral meningitis, and should Ceftriaxone be continued?",
        "a": "1. **Supportive Care (Mainstay)**: Adequate oral/IV hydration, analgesics and antipyretics (Paracetamol), antiemetics if needed, and rest in a quiet, dark room. Most enteroviral cases are **self-limiting** and recover completely within **7–14 days**.\n2. **Antibiotic Stewardship (CRITICAL OSCE POINT)**: Once bacterial meningitis is reliably excluded (negative Gram stain, normal glucose/protein, clinical stability, confirmed viral PCR), **antibiotics (such as Ceftriaxone) are NOT indicated and should be discontinued**.\n3. **When to Give Antivirals**: If HSV-2 or VZV meningitis is confirmed (especially in an older 68-year-old adult or severe symptoms), consider **Acyclovir / Valacyclovir**. If ANY signs of **encephalitis** emerge (confusion, behavioral change, seizures, focal deficits), immediately start **IV Acyclovir 10 mg/kg every 8 hours** for presumed HSV-1 encephalitis and obtain MRI brain."
      },
      {
        "q": "5. What non-viral conditions can also cause 'aseptic' lymphocytic meningitis with negative bacterial cultures?",
        "a": "- Infectious Non-Viral Causes: Partially treated bacterial meningitis, Tuberculous meningitis (low glucose, very high protein), Neurosyphilis, Leptospirosis, Brucellosis, Lyme disease, and Cryptococcal meningitis.\n- Non-Infectious Causes: Drug-induced aseptic meningitis (NSAIDs, TMP-SMX, IVIG), Autoimmune diseases (SLE, Behçet's disease, neurosarcoidosis), and carcinomatous meningitis."
      }
    ]
  },
  {
    "id": 43,
    "title": "حالة 43: Rhinocerebral Mucormycosis in Diabetic Ketoacidosis",
    "topic": "Rhinocerebral Mucormycosis",
    "category": "Other Infections & Parasites",
    "scenario": "A diabetic patient is admitted with elevated blood sugar and acidosis. The patient complains of headache and sinus tenderness and has black necrotic material draining from the nares.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features in this case justify your choice?",
        "a": "Most likely diagnosis: **Rhinocerebral (Rhino-orbito-cerebral) Mucormycosis**.\n- Justifying features: Uncontrolled diabetes mellitus presenting in **Diabetic Ketoacidosis (DKA)** (hyperglycemia + metabolic acidosis) with **headache**, **paranasal sinus tenderness**, and pathognomonic **black necrotic material (eschar) draining from the nares**.\n- Key differential diagnoses: Invasive sino-nasal Aspergillosis, severe bacterial rhinosinusitis with orbital/intracranial spread, and necrotizing midline granuloma."
      },
      {
        "q": "2. Why does Diabetic Ketoacidosis (DKA) specifically predispose to Mucormycosis?",
        "a": "- Causative Fungi: **Rhizopus**, **Rhizomucor**, and **Mucor** species (Mucorales).\n- Metabolic Pathogenesis in DKA:\n  1. **Acidosis releases free iron**: Low blood pH impairs the iron-binding capacity of serum transferrin -> elevated free serum iron, which is an essential growth factor for Mucorales.\n  2. **Ketone utilization**: Rhizopus species possess an active **ketone reductase enzyme** allowing them to thrive in acidic, high-glucose, ketone-rich environments.\n  3. **Impaired host immunity**: Hyperglycemia and acidosis impair neutrophil chemotaxis, phagocytosis, and oxidative killing.\n- Resulting Tissue Injury: Fungal hyphae invade blood vessel walls (**angioinvasion**) -> thrombosis -> rapid **ischemic necrosis** producing the characteristic black eschar."
      },
      {
        "q": "3. What are the urgent confirmatory investigations and characteristic microscopic findings?",
        "a": "1. **Urgent Nasal Endoscopy with Deep Tissue Biopsy / Scraping**: Immediate **KOH wet mount** and histopathology (GMS/PAS/H&E) reveal **broad, ribbon-like, non-septate (pauciseptate) hyphae** of irregular width branching at **90-degree (right) angles**, invading blood vessels with surrounding tissue necrosis. *(Contrast with Aspergillus: narrow, uniform, septate hyphae branching at 45-degree acute angles.)*\n2. **Urgent CT and/or MRI of Paranasal Sinuses, Orbits, and Brain**: Evaluates bony erosion, orbital involvement, cavernous sinus thrombosis, and frontal lobe invasion to guide surgical debridement.\n3. **DKA Labs**: ABG (high anion-gap metabolic acidosis), serum/urine ketones, blood glucose, serum electrolytes (especially K+), and renal function."
      },
      {
        "q": "4. What is the immediate life-saving management protocol for this patient?",
        "a": "Three simultaneous emergency interventions (delay drastically increases mortality >50%):\n1. **Immediate DKA Correction**: Aggressive IV Normal Saline resuscitation, continuous IV regular insulin infusion, and potassium replacement to rapidly reverse hyperglycemia and metabolic acidosis.\n2. **Immediate Systemic Antifungal Therapy**: **IV Liposomal Amphotericin B (5 mg/kg/day; up to 10 mg/kg/day if CNS involved)** OR maximal tolerated dose of **IV Amphotericin B deoxycholate (1.0–1.5 mg/kg/day)** for a prolonged course (typically 10–12 weeks, followed by oral Posaconazole or Isavuconazole step-down).\n3. **Urgent Extensive Surgical Debridement**: Immediate ENT/maxillofacial/neurosurgical debridement of all necrotic nasal, sinus, and palatal tissue until bleeding viable margins are reached (repeated debridement often needed)."
      },
      {
        "q": "5. Which antifungal drugs are INEFFECTIVE against Mucormycosis, and what clinical signs indicate progression to orbital/cerebral involvement?",
        "a": "- **Ineffective Antifungals (Classic Exam Trap)**: **Voriconazole**, **Fluconazole**, and **Echinocandins** (Caspofungin, Micafungin) have **NO reliable activity** against Mucorales — never use Voriconazole empirically when Mucormycosis is suspected!\n- **Warning Signs of Orbital/Cerebral Spread**: Periorbital edema, chemosis, proptosis, diplopia/ophthalmoplegia (CN III, IV, VI), decreased visual acuity/blindness, facial numbness (CN V), black necrotic ulcer on the hard palate, altered mental status, and hemiparesis (carotid/cavernous sinus thrombosis)."
      }
    ]
  },
  {
    "id": 44,
    "title": "حالة 44: Cerebral Toxoplasmosis in HIV/AIDS",
    "topic": "Cerebral Toxoplasmosis",
    "category": "Meningitis & CNS",
    "scenario": "A 44-year-old HIV-positive woman with a CD4 count of 73 cells/µL presents with progressive left-sided hemiplegia and headache over one week. MRI brain shows multiple ring-enhancing mass lesions with surrounding cerebral edema.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the key differential diagnosis, and which features justify your choice?",
        "a": "Most likely diagnosis: **Cerebral Toxoplasmosis (Toxoplasmic Encephalitis)**.\n- Justifying features: Advanced HIV/AIDS with **CD4 count < 100 cells/µL** (CD4 = 73), subacute focal neurological deficit (**progressive left-sided hemiplegia** + headache over 1 week), and MRI brain showing **multiple ring-enhancing mass lesions with surrounding vasogenic edema** (classically in the basal ganglia or corticomedullary junction).\n- Key Differential Diagnoses in HIV with CNS mass lesions: **Primary CNS Lymphoma** (EBV-associated, classically solitary/periventricular, CD4 <50), **CNS Tuberculoma**, pyogenic brain abscess, **Cryptococcoma**, and Progressive Multifocal Leukoencephalopathy (PML — non-enhancing white matter lesions without mass effect)."
      },
      {
        "q": "2. What is the causative parasite, its life cycle, and why does this occur in advanced HIV?",
        "a": "- Causative Organism: **Toxoplasma gondii**, an obligate intracellular protozoan parasite.\n- Definitive & Intermediate Hosts: **Domestic/wild cats** are the definitive host (shed oocysts in feces); humans are intermediate hosts infected via ingestion of oocysts (cat litter/unwashed vegetables) or tissue cysts in undercooked meat.\n- Mechanism in HIV/AIDS: Over 95% of cerebral toxoplasmosis cases represent **reactivation of dormant latent brain tissue cysts (containing bradyzoites)** into invasive proliferating **tachyzoites** when cell-mediated immunity collapses (**CD4 < 100 cells/µL**)."
      },
      {
        "q": "3. How do you confirm the diagnosis, and when is a brain biopsy indicated?",
        "a": "1. **Presumptive Clinical-Radiological Diagnosis (Standard First Step)**: Compatible HIV host (CD4 <100) + **multiple ring-enhancing MRI lesions** + **positive serum Toxoplasma IgG antibody** (present in >95% of cases; negative IgG strongly argues against toxoplasmosis, while IgM is usually negative in reactivation).\n2. **Therapeutic Trial**: Initiate empiric anti-Toxoplasma therapy immediately and repeat clinical assessment + brain MRI after **10–14 days**. Rapid clinical and radiological shrinkage confirms the diagnosis.\n3. **Indication for Stereotactic Brain Biopsy**: Reserved ONLY for patients who **fail to respond clinically or radiologically after 10–14 days** of empiric therapy (or have negative Toxoplasma IgG / solitary lesion strongly suggesting **Primary CNS Lymphoma**, where CSF EBV PCR may also be sent if LP is safe without mass effect)."
      },
      {
        "q": "4. What is the exact first-line medical treatment (NOT Ceftriaxone!) and duration?",
        "a": "**CRITICAL OSCE RULE: Treat with targeted anti-Toxoplasma therapy — NOT bacterial meningitis antibiotics (Ceftriaxone)!**\n1. **First-Line Induction Regimen (for at least 6 weeks)**:\n   - **Pyrimethamine**: 200 mg PO loading dose once, then 50 mg/day (<60 kg) or 75 mg/day (≥60 kg) PO\n   - **PLUS Sulfadiazine**: 1,000 mg (<60 kg) or 1,500 mg (≥60 kg) PO every 6 hours\n   - **PLUS Folinic acid (Leucovorin)**: 10–25 mg PO daily (MANDATORY to prevent pyrimethamine-induced bone marrow suppression / megaloblastic anemia & agranulocytosis!).\n2. **Alternative Regimens**:\n   - Sulfa allergy: **Pyrimethamine + Clindamycin (600 mg IV/PO q6h) + Folinic acid**.\n   - If Pyrimethamine is unavailable: **High-dose TMP-SMX** (5 mg/kg TMP component IV/PO q12h).\n3. **Adjunctive Corticosteroids (Dexamethasone)**: Use ONLY if there is significant midline shift, mass effect, or impending herniation — taper rapidly to avoid masking CNS lymphoma."
      },
      {
        "q": "5. What are the rules for secondary prophylaxis, primary prophylaxis, and ART initiation?",
        "a": "- **ART Initiation**: Start/optimize antiretroviral therapy **within 2 weeks** after initiating Toxoplasma therapy to restore CD4 immunity.\n- **Secondary Prophylaxis (Chronic Maintenance)**: Continue half-dose **Pyrimethamine + Sulfadiazine + Leucovorin** (or TMP-SMX) after the 6-week induction until **CD4 count remains > 200 cells/µL for at least 6 months** on ART and patient is asymptomatic.\n- **Primary Prophylaxis**: Indicated for all Toxoplasma IgG-positive HIV patients with **CD4 < 100 cells/µL** using **TMP-SMX 1 DS tablet PO daily** (simultaneously protects against PCP!)."
      }
    ]
  },
  {
    "id": 45,
    "title": "حالة 45: Foodborne Botulism (Clostridium botulinum)",
    "topic": "Foodborne Botulism",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "An 18-year-old woman ate homemade food. Eighteen hours later, she develops ataxia, diarrhea, and dysphagia. On examination, she has tachycardia, abnormal extraocular movements, and cranial nerve palsies.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical features justify your choice?",
        "a": "Most likely diagnosis: **Foodborne Botulism** (caused by preformed **Clostridium botulinum** neurotoxin).\n- Justifying features: Ingestion of **homemade/improperly preserved food** (e.g., home-canned vegetables, salted/fermented fish such as feseekh) followed 18 hours later (typical IP 12–36 hours) by GI symptoms (diarrhea) rapidly progressing to **bulbar and ocular cranial nerve palsies** (**dysphagia**, **abnormal extraocular movements/diplopia**, ataxia) with autonomic dysfunction (tachycardia) and preserved alertness.\n- Key differential diagnoses: Guillain-Barré syndrome (Miller Fisher variant), Myasthenia Gravis crisis, brainstem stroke, organophosphate/marine toxin poisoning, and Diphtheria."
      },
      {
        "q": "2. What is the mechanism of botulinum toxin, and how do you distinguish Botulism from Guillain-Barré Syndrome (GBS) at the bedside?",
        "a": "- Mechanism: C. botulinum (Gram-positive, anaerobic, spore-forming bacillus) produces preformed botulinum neurotoxin that cleaves SNARE proteins and irreversibly **blocks presynaptic Acetylcholine (ACh) release at the neuromuscular junction and cholinergic autonomic synapses** -> **symmetrical descending flaccid paralysis** and anticholinergic autonomic signs (dry mouth, fixed dilated pupils, ileus, tachycardia).\n- **High-Yield OSCE Comparison — Botulism vs. Guillain-Barré Syndrome (GBS)**:\n  - **Botulism**: Toxin-mediated (12–36h after preserved food); starts with **cranial nerve palsies (4 Ds: Diplopia, Dysarthria, Dysphonia, Dysphagia + ptosis)**; **DESCENDING** symmetrical flaccid paralysis; **afebrile**; **normal sensation and consciousness**.\n  - **GBS**: Post-infectious immune-mediated (1–3 weeks after Campylobacter jejuni); starts in legs (**ASCENDING** weakness) with **areflexia**; sensory paresthesias common; CSF shows albuminocytologic dissociation."
      },
      {
        "q": "3. How is Foodborne Botulism diagnosed, and should you wait for lab results before treating?",
        "a": "- **CRITICAL OSCE RULE: Botulism is a CLINICAL DIAGNOSIS — NEVER delay antitoxin or airway care while waiting for laboratory confirmation!**\n- Confirmatory Tests (sent prior to antitoxin administration): Detection of botulinum toxin (mouse bioassay or ELISA/mass spectrometry) in **patient serum, stool, gastric aspirate, or suspected leftover food**, and anaerobic stool/food culture for C. botulinum.\n- Supportive Diagnostic Clues: Normal CSF (unlike GBS/meningitis), normal CT/MRI brain, and EMG showing incremental response on high-frequency repetitive nerve stimulation (presynaptic NMJ defect)."
      },
      {
        "q": "4. What is the immediate emergency management protocol for this patient?",
        "a": "1. **Airway & Respiratory Monitoring (Immediate Life-Saving Priority)**: Admit to **ICU** immediately; perform serial bedside spirometry (**Forced Vital Capacity [FVC]** and **Negative Inspiratory Force [NIF]**) and assess swallowing/gag reflex. Perform **early elective endotracheal intubation and mechanical ventilation** at any sign of diaphragmatic/respiratory fatigue or inability to protect the airway.\n2. **Specific Antidote — Equine Heptavalent Botulinum Antitoxin (HBAT)**: Administer **IV IMMEDIATELY** upon clinical suspicion. *Key pharmacology pearl*: Antitoxin neutralizes **circulating unbound toxin only** — it halts progression and shortens ventilation duration, but cannot reverse toxin already bound to nerve terminals (recovery requires axonal sprouting over weeks to months).\n3. **Antibiotics**: **NOT indicated** in foodborne botulism (no benefit against preformed toxin, and lysing gut bacteria may release additional toxin; antibiotics are reserved for wound botulism only)."
      },
      {
        "q": "5. What public health actions and prevention strategies are required?",
        "a": "- **Immediate Public Health Notification**: Foodborne botulism is a notifiable public health emergency — trace and recall the contaminated homemade/preserved food immediately and evaluate anyone else who shared the meal.\n- **Prevention**: Proper commercial/pressure-canning techniques (spores require >120°C under pressure to destroy), boiling home-canned foods for 10 minutes before eating (botulinum toxin itself is heat-labile at >85°C for 5 minutes!), discarding bulging/leaking cans, and avoiding honey in infants <1 year (prevents infant botulism)."
      }
    ]
  },
  {
    "id": 46,
    "title": "حالة 46: Infectious Mononucleosis (EBV)",
    "topic": "Infectious Mononucleosis (EBV)",
    "category": "Lymphadenopathy & Spleen",
    "scenario": "A 22-year-old student complains of fatigue and malaise for the past two weeks. She also reports being feverish and recently had a sore throat. On examination, she has enlarged tonsils and lymphadenopathy. There is also mild tenderness in the right upper quadrant and a palpable spleen. The Monospot test is positive.",
    "questions": [
      {
        "q": "1. What is the diagnosis and which clinical and laboratory findings in this case confirm it?",
        "a": "Diagnosis: **Infectious Mononucleosis** caused by **Epstein-Barr Virus (EBV / HHV-4)**.\n- Confirming features: Young adult (22-year-old student) with a 2-week history of fatigue, malaise, fever, and pharyngitis; physical findings of **enlarged tonsils**, **lymphadenopathy**, **palpable spleen (splenomegaly)**, and **mild RUQ tenderness** (EBV-associated mild hepatitis); confirmed by a **positive Monospot (heterophile antibody) test**."
      },
      {
        "q": "2. Explain what the Monospot test detects and what peripheral blood smear finding is characteristic.",
        "a": "- **Monospot (Paul-Bunnell) Test**: Detects **heterophile IgM antibodies** produced by EBV-activated polyclonal B-cells that agglutinate sheep or horse red blood cells. It is highly specific (>95%) for acute EBV infection (unlike CMV or acute HIV, which are heterophile-negative).\n- **Peripheral Blood Film**: Absolute and relative **lymphocytosis (>50%)** with **>10% atypical lymphocytes (Downey cells)** — large activated **CD8+ cytotoxic T-lymphocytes** with abundant basophilic cytoplasm that indents surrounding RBCs.\n- **Liver Enzymes**: Mildly elevated ALT/AST (2–3x normal) explains the mild RUQ tenderness and typically resolves spontaneously."
      },
      {
        "q": "3. What is the appropriate initial treatment for this patient, and why must Ampicillin be strictly avoided?",
        "a": "1. **Appropriate Initial Treatment**: **Adequate rest and supportive treatment** (oral fluids, analgesics/antipyretics such as Paracetamol or NSAIDs, saltwater gargles for sore throat). Uncomplicated EBV infectious mononucleosis is self-limiting and does NOT require antibiotics, IVIG, or antivirals.\n2. **CRITICAL OSCE TRAP — Strictly AVOID Ampicillin / Amoxicillin**: Administering aminopenicillins (Ampicillin or Amoxicillin) to a patient with EBV triggers a dramatic, generalized, pruritic **maculopapular rash in 80–90% of patients** (an immune-mediated transient loss of tolerance — NOT a true IgE-mediated penicillin allergy)."
      },
      {
        "q": "4. Given her palpable spleen, what specific discharge counseling and red flag warnings must you give her?",
        "a": "- **Strict Avoidance of Contact Sports & Heavy Lifting**: Because she already has a **palpable spleen**, she is at high risk of **splenic rupture** (especially during weeks 2–4). She must avoid contact sports, strenuous exercise, and abdominal trauma for **at least 3–4 weeks** (and until splenomegaly fully resolves on exam/ultrasound).\n- **Emergency Return Precautions**: Return immediately to the ED if she develops sudden severe LUQ abdominal pain, left shoulder pain (Kehr's sign), dizziness/fainting (splenic rupture), or progressive stridor/difficulty breathing/drooling (impending airway obstruction from massive tonsillar enlargement)."
      },
      {
        "q": "5. When are corticosteroids indicated in Infectious Mononucleosis, and how do you examine the spleen properly in the OSCE?",
        "a": "- **Indications for Short-Course Corticosteroids** (e.g., Prednisone): Reserved ONLY for severe complications — impending **upper airway obstruction** from massive tonsillar hypertrophy, severe **autoimmune hemolytic anemia**, or severe **thrombocytopenia**.\n- **Hawari OSCE Splenic Palpation Technique**: Start palpation in the **Right Iliac Fossa (RIF)** moving diagonally toward the **Left Costal Margin** (ordinary technique) as the patient inhales deeply; confirm using **bimanual palpation** (left hand supporting the left lower rib cage posteriorly) or right lateral decubitus position. Avoid vigorous deep palpation in known EBV to prevent iatrogenic splenic rupture!"
      }
    ]
  },
  {
    "id": 47,
    "title": "حالة 47: Acute Bacterial Meningitis (Neisseria meningitidis)",
    "topic": "Acute Bacterial Meningitis (Neisseria meningitidis)",
    "category": "Meningitis & CNS",
    "scenario": "A 20-year-old man develops fever, neck stiffness, and headache. Upon examination, his blood pressure is normal, he is febrile, and passive neck flexion is painful. Ear, throat, and sinuses are normal, and no focal neurological deficits are present.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism in this 20-year-old man, and why is the normal ENT examination a crucial clue?",
        "a": "Most likely diagnosis: **Acute Bacterial Meningitis** caused by **Neisseria meningitidis**.\n- Justifying features: Classic meningeal triad (**fever, headache, painful neck stiffness**) in a **20-year-old young adult** (peak age for meningococcal meningitis, especially in university dormitories/military camps).\n- Significance of Normal Ear, Throat, and Sinuses: **Streptococcus pneumoniae** meningitis frequently spreads contiguously from a parameningeal suppurative focus (otitis media, mastoiditis, sinusitis) or pneumonia; completely normal ENT findings in a healthy 20-year-old point strongly toward hematogenous **Neisseria meningitidis**."
      },
      {
        "q": "2. List the most common causative bacterial pathogens of acute meningitis across all age groups (Hawari OSCE staple).",
        "a": "- **All Age Groups Combined**: Streptococcus pneumoniae (#1 overall) and Neisseria meningitidis.\n- **Neonates (< 1 month)**: Group B Streptococcus (S. agalactiae), Escherichia coli, and **Listeria monocytogenes**.\n- **Infants & Children**: Streptococcus pneumoniae and Neisseria meningitidis (H. influenzae type b dramatically reduced by Hib vaccine).\n- **Adolescents & Young Adults (like this 20-year-old)**: **Neisseria meningitidis** and Streptococcus pneumoniae.\n- **Adults > 50 years, Elderly, Pregnant, or Immunocompromised**: Streptococcus pneumoniae, Neisseria meningitidis, and **Listeria monocytogenes**."
      },
      {
        "q": "3. Is a CT brain required before Lumbar Puncture in this patient, and what CSF findings do you expect?",
        "a": "- **CT Before LP Decision**: **NO — proceed directly to Lumbar Puncture!** He does NOT meet any **FAILS** criteria for pre-LP neuroimaging (no **F**ocal neurological deficits, no **A**ltered mental status, not **I**mmunocompromised, no papilledema/CNS **L**esion, no new **S**eizures).\n- **Expected CSF Findings (Bacterial Meningitis)**: High opening pressure (>180 mmH2O), turbid appearance, marked **neutrophilic (PMN) pleocytosis** (>1,000/µL), **elevated protein (>150 mg/dL)**, **low glucose (<40 mg/dL; CSF:blood ratio <0.40)**, positive **Gram stain** (Gram-negative intracellular diplococci), positive CSF culture, and positive BioFire/meningitis PCR."
      },
      {
        "q": "4. What is the immediate empiric management protocol?",
        "a": "**GOLDEN RULE: Empirical IV antibiotics must NEVER be delayed while waiting for LP or imaging!**\n1. Draw 2 sets of blood cultures and perform rapid LP (if immediate); otherwise give antibiotics first.\n2. **Empiric IV Antibiotics (Age 18–50, immunocompetent)**:\n   - **IV Ceftriaxone 2 g every 12 hours** (or Cefotaxime 2 g q4–6h)\n   - **PLUS IV Vancomycin 15–20 mg/kg every 8–12 hours** (covers drug-resistant S. pneumoniae until culture/susceptibility returns).\n   *(Ampicillin is NOT required in a healthy 20-year-old immunocompetent male.)*\n3. **Adjunctive IV Dexamethasone**: **10 mg IV every 6 hours** starting **before or with the first antibiotic dose** (discontinue if confirmed N. meningitidis; continue 4 days if S. pneumoniae)."
      },
      {
        "q": "5. What infection control precautions and preventive measures for close contacts are required?",
        "a": "- **IPC Precautions**: Strict **Droplet Precautions** (surgical mask, private room, gloves, gown) for the first **24 hours** after starting effective IV antibiotics.\n- **Close Contact Chemoprophylaxis** (roommates, household members, intimate contacts within 7 days prior): **Rifampicin** 600 mg PO q12h for 2 days, OR **Ciprofloxacin** 500 mg PO single dose, OR **Ceftriaxone** 250 mg IM single dose (pregnant).\n- **Vaccination**: Quadrivalent conjugate meningococcal vaccine (**MenACWY**) and MenB vaccine for university students, military recruits, Hajj/Umrah pilgrims, and asplenic/complement-deficient patients."
      }
    ]
  },
  {
    "id": 48,
    "title": "حالة 48: Herpes Zoster Ophthalmicus (VZV)",
    "topic": "Herpes Zoster Ophthalmicus",
    "category": "Other Infections & Parasites",
    "scenario": "An 80-year-old female presents with a 3-day history of a painful rash extending over the right half of her forehead and down to the right eyelid. Physical examination reveals vesicular lesions.",
    "questions": [
      {
        "q": "1. What is the exact diagnosis and which clinical features justify your choice?",
        "a": "Exact diagnosis: **Herpes Zoster Ophthalmicus (HZO)** — Shingles involving the **ophthalmic division (V1) of the right trigeminal nerve**.\n- Justifying features: Elderly patient (80 years old, peak risk group due to declining cell-mediated immunity), **3-day history of a painful, strictly unilateral dermatomal vesicular rash** over the right forehead extending down to the right eyelid (respects the midline).\n- Key differential diagnoses: Herpes Simplex Virus (HSV) zosteriform eruption, bullous impetigo, contact dermatitis, and adult primary varicella (chickenpox — generalized lesions in different stages crossing dermatomes)."
      },
      {
        "q": "2. What is the causative virus, its pathophysiology, and what is Hutchinson's sign?",
        "a": "- Causative Virus: **Varicella-Zoster Virus (VZV / HHV-3)**.\n- Pathophysiology: Reactivation of latent VZV dormant in the **trigeminal (Gasserian) sensory ganglion** following prior childhood varicella (chickenpox), traveling anterogradely along the V1 ophthalmic nerve branch to the skin and ocular structures.\n- **Hutchinson's Sign (High-Yield OSCE Sign)**: Presence of **vesicles on the tip, side, or root of the nose**, indicating involvement of the **nasociliary branch** of V1 (which also innervates the cornea and globe) -> strongly predicts **sight-threatening ocular involvement** (keratitis, anterior uveitis, acute retinal necrosis)."
      },
      {
        "q": "3. How is the diagnosis made and what urgent specialist examination is mandatory?",
        "a": "1. **Clinical Diagnosis**: Unilateral dermatomal grouped vesicles on an erythematous base is diagnostic clinically; do not delay antiviral treatment for lab tests.\n2. **Laboratory Confirmation (only if atypical/immunocompromised)**: **VZV PCR** from vesicular fluid (gold standard), direct fluorescent antibody (DFA), or **Tzanck smear** (shows multinucleated giant cells — cannot distinguish VZV from HSV).\n3. **MANDATORY Urgent Ophthalmology Consultation**: Immediate **slit-lamp biomicroscopy** with fluorescein staining to evaluate for corneal pseudodendrites (herpetic keratitis), episcleritis, anterior uveitis, and raised intraocular pressure."
      },
      {
        "q": "4. What is the immediate systemic antiviral and supportive management for this 80-year-old patient?",
        "a": "**CRITICAL OSCE RULE: Start systemic antivirals IMMEDIATELY (ideally within 72 hours of rash onset — she is at Day 3, and HZO warrants treatment even beyond 72h if new vesicles or ocular signs exist)!**\n1. **Systemic Antiviral Therapy (7–10 days)**:\n   - **Valacyclovir 1,000 mg PO three times daily for 7 days** (preferred due to better bioavailability/dosing), OR\n   - **Acyclovir 800 mg PO 5 times daily for 7–10 days**, OR Famciclovir 500 mg PO TID x 7 days.\n   - *(Switch to **IV Acyclovir 10 mg/kg every 8 hours** if disseminated zoster, severe ocular/retinal involvement, or immunocompromised — adjust dose for elderly renal function and ensure hydration!)*\n2. **Ocular Care**: Guided by ophthalmology (lubricating drops; topical antiviral/steroids ONLY under ophthalmologist supervision to avoid corneal perforation).\n3. **Pain Control**: Analgesics (Paracetamol/opioids if severe) and early neuropathic agents (Gabapentin/Pregabalin) if severe neuritis."
      },
      {
        "q": "5. What is the most common long-term complication in elderly patients, and what IPC precautions and vaccine are recommended?",
        "a": "- **Most Common Complication**: **Post-Herpetic Neuralgia (PHN)** — persistent burning/lancinating neuropathic pain lasting >3 months after rash healing (occurs in up to 20–30% of patients >70 years; treat with Gabapentin, Pregabalin, TCAs, or lidocaine patches). Other complications: Corneal scarring/blindness, cranial nerve palsies, and secondary bacterial superinfection.\n- **IPC Precautions**: Localized HZO in an immunocompetent host -> **Standard + Contact precautions** (keep lesions covered; non-immune/pregnant individuals must avoid direct contact with vesicular fluid until all lesions crust over). If disseminated or immunocompromised -> **Airborne (N95, negative-pressure room) + Contact precautions**.\n- **Prevention**: **Recombinant Zoster Vaccine (Shingrix — 2 doses)** recommended for all adults **≥50 years** (even after a prior episode of shingles) to prevent recurrence and PHN."
      }
    ]
  },
  {
    "id": 49,
    "title": "حالة 49: Acute Bacterial Meningitis with Papilledema (Immunocompromised)",
    "topic": "Acute Bacterial Meningitis with Raised ICP",
    "category": "Meningitis & CNS",
    "scenario": "A 54-year-old hypertensive man with rheumatoid arthritis on methotrexate presents to the emergency department with fever, headache, neck stiffness, and sensitivity to light. Neurological examination is unremarkable except for fundus examination, which reveals bilateral blurring of the optic disc margins and retinal venous engorgement.",
    "questions": [
      {
        "q": "1. What is the diagnosis, what does the fundus examination signify, and what MUST be your very next step?",
        "a": "Diagnosis: **Suspected Acute Bacterial Meningitis in an Immunocompromised Host (>50 years, on Methotrexate) complicated by Raised Intracranial Pressure (Papilledema)**.\n- Fundus Findings: Bilateral blurring of optic disc margins + retinal venous engorgement = **Papilledema** (raised ICP).\n- **CRITICAL HAWARI OSCE TRAP — What is the VERY NEXT STEP?**\n  1. Draw **blood cultures** immediately and **START EMPIRIC IV ANTIBIOTICS + IV DEXAMETHASONE IMMEDIATELY** (NEVER delay antibiotics for CT scan or LP!).\n  2. Perform an urgent **CT Brain BEFORE Lumbar Puncture** — immediate LP is **CONTRAINDICATED** in the presence of papilledema due to the risk of fatal **cerebellar tonsillar/uncal herniation**."
      },
      {
        "q": "2. What are the 'FAILS' indications for performing CT Brain before Lumbar Puncture in suspected meningitis?",
        "a": "Recall the Hawari Practical mnemonic **FAILS** (all indications for neuroimaging before LP):\n- **F**: **Focal** neurological deficit (hemiparesis, cranial nerve palsy, visual field defect).\n- **A**: **Altered** mental status (GCS < 15 / coma).\n- **I**: **Immunocompromised** state (HIV, chemotherapy, steroids, **methotrexate** — present in this patient!).\n- **L**: **Lesion** / History of CNS disease OR signs of raised ICP (**Papilledema** — ALSO present in this patient!).\n- **S**: **Seizures** (new-onset within 1 week)."
      },
      {
        "q": "3. Which specific bacterial pathogens must be covered empirically in this 54-year-old man on methotrexate?",
        "a": "He has **TWO independent risk factors** for **Listeria monocytogenes**: **Age > 50 years (54)** AND **Immunosuppression (Methotrexate for RA)**!\n- Target Empiric Pathogens:\n  1. **Streptococcus pneumoniae** (including drug-resistant strains)\n  2. **Neisseria meningitidis**\n  3. **Listeria monocytogenes** (MANDATORY coverage — cephalosporins have NO activity against Listeria!)\n  4. Aerobic **Gram-negative bacilli** (if severely immunocompromised, consider Cefepime/Meropenem instead of Ceftriaxone)."
      },
      {
        "q": "4. Specify the exact empiric IV antimicrobial and adjunctive regimen.",
        "a": "Start immediately in the ED before sending the patient to CT:\n1. **IV Ceftriaxone 2 g every 12 hours** (or IV Cefepime 2 g q8h / Meropenem 2 g q8h for broader Gram-negative coverage in immunosuppression)\n2. **PLUS IV Vancomycin 15–20 mg/kg every 8–12 hours** (covers resistant S. pneumoniae)\n3. **PLUS IV Ampicillin 2 g every 4 hours** (MANDATORY for **Listeria monocytogenes**; alternative if severe penicillin allergy: IV TMP-SMX)\n4. **PLUS IV Dexamethasone 10 mg every 6 hours** administered 15–20 minutes before or with the first antibiotic dose (also helps reduce cerebral edema).\n5. **ICP Supportive Measures**: Elevate head of bed 30°, avoid hypotonic fluids, monitor GCS closely, and temporarily hold methotrexate."
      },
      {
        "q": "5. What happens after the CT brain is performed, and what if LP remains contraindicated?",
        "a": "- **If CT shows NO mass lesion, midline shift, or obstructive hydrocephalus**: Proceed safely with **Lumbar Puncture** (even though antibiotics have started, CSF cell count, glucose, protein, Gram stain, and **meningitis PCR** remain highly diagnostic; also send CSF AFB, Cryptococcal antigen, and HSV/VZV PCR given methotrexate immunosuppression!).\n- **If CT shows a space-occupying lesion (e.g., brain abscess) or herniation risk**: Do **NOT** perform LP; rely on **blood cultures** (positive in ~50–70% of bacterial meningitis), neuroimaging, and urgent neurosurgical consultation while continuing full IV empiric therapy."
      }
    ]
  },
  {
    "id": 50,
    "title": "حالة 50: Pulmonary Aspergilloma (Mycetoma) Post-TB",
    "topic": "Pulmonary Aspergilloma",
    "category": "Other Infections & Parasites",
    "scenario": "A patient with a previous history of tuberculosis now complains of hemoptysis. Chest X-ray reveals an upper lobe mass within a cavity with a crescent-shaped air-fluid level.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical and radiological clues justify your choice?",
        "a": "Most likely diagnosis: **Pulmonary Aspergilloma (Fungus Ball / Mycetoma)**.\n- Justifying features: History of **previous pulmonary tuberculosis** (which leaves residual healed **upper lobe cavities**) presenting with **hemoptysis** (from erosion of hypervascular bronchial wall capillaries lining the cavity) + Chest X-ray showing an **upper lobe intracavitary mass** surrounded by a rim of air (**Air-Crescent / Monad's sign**).\n- Key differential diagnoses: Reactivation of cavitary Pulmonary TB, bronchogenic carcinoma with central necrosis, Rasmussen aneurysm, lung abscess, and ruptured hydatid cyst."
      },
      {
        "q": "2. What is the causative fungus, and how does an Aspergilloma differ pathologically from Invasive Aspergillosis and ABPA?",
        "a": "- Causative Organism: **Aspergillus fumigatus** (most common), a ubiquitous mold with **septate hyphae branching at 45-degree acute angles**.\n- **3 Distinct Aspergillus Syndromes (Al-Azhar Fungal Lecture)**:\n  1. **Aspergilloma (Saprophytic Fungus Ball)**: Tangled ball of fungal hyphae, mucus, and cellular debris colonizing a **pre-existing pulmonary cavity** (e.g., post-TB, sarcoidosis, bronchiectasis) **WITHOUT tissue or vascular invasion**.\n  2. **Invasive Aspergillosis**: Occurs in severely neutropenic (<500/µL) or heavily immunosuppressed patients -> angioinvasion, thrombosis, hemorrhagic infarction (**Halo sign** on CT); requires **IV Voriconazole**.\n  3. **Allergic Bronchopulmonary Aspergillosis (ABPA)**: Hypersensitivity reaction in asthmatics/CF -> wheezing, eosinophilia, markedly elevated total IgE, central bronchiectasis; treated with glucocorticoids ± Itraconazole."
      },
      {
        "q": "3. What investigations confirm Pulmonary Aspergilloma and rule out active TB relapse?",
        "a": "1. **CT Chest (Supine & Prone Views)**: Confirms an intracavitary rounded soft-tissue mass outlined by an **Air-Crescent (Monad's) sign**; demonstrating that the fungus ball **shifts position with gravity** between supine and prone scans is pathognomonic!\n2. **Serum Aspergillus-Specific IgG Antibodies (Precipitins)**: Positive in **>90%** of patients with aspergilloma.\n3. **Sputum Microbiology**: Sputum fungal smear/culture (may isolate Aspergillus in ~50%); **MANDATORY Sputum AFB smear and GeneXpert MTB/RIF** to exclude concurrent **active TB reactivation**!"
      },
      {
        "q": "4. What is the definitive management of Pulmonary Aspergilloma, and do systemic antifungals cure it?",
        "a": "- **Key Al-Azhar Lecture Pearl**: **Systemic antifungal drugs do NOT effectively penetrate endocavitary aspergillomas** and provide little-to-no benefit in simple aspergilloma.\n- **Management Based on Severity**:\n  1. **Asymptomatic simple aspergilloma**: Observation and periodic radiographic follow-up (no routine antifungals or surgery).\n  2. **Recurrent or Life-Threatening Hemoptysis (Definitive Cure)**: **Surgical resection (Lobectomy)** in patients with adequate pulmonary reserve.\n  3. **Emergency Bridge / Inoperable Patients**: **Bronchial Artery Embolization (BAE)** to immediately control massive hemoptysis (may recur, so often bridges to surgery).\n  4. **Oral Triazoles (Itraconazole or Voriconazole)**: Reserved for chronic cavitary pulmonary aspergillosis (CCPA) or inoperable symptomatic patients to limit progression/invasion."
      },
      {
        "q": "5. What is the most dangerous acute complication and how do you stabilize massive hemoptysis immediately?",
        "a": "- **Most Lethal Complication**: **Massive hemoptysis** (asphyxiation from flooding of the airways with blood, from hypertrophied bronchial arteries in the cavity wall).\n- **Immediate Emergency Stabilization**: Place the patient in the **lateral decubitus position with the affected lung DOWN** (to protect the healthy contralateral lung from blood aspiration), secure airway/oxygenation, establish large-bore IV access with blood typing/crossmatch, and arrange urgent **bronchial artery embolization** or thoracic surgery."
      }
    ]
  },
  {
    "id": 51,
    "title": "حالة 51: Acute Uncomplicated Cystitis (Staphylococcus saprophyticus)",
    "topic": "Acute Uncomplicated Cystitis (Staphylococcus saprophyticus)",
    "category": "Other Infections & Parasites",
    "scenario": "A 20-year-old sexually active female presents with a 2-day history of dysuria, lower abdominal pain, and low-grade fever. Her urine is cloudy with pyuria, and abundant Gram-positive bacteria are present.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and specific causative organism, and why is it NOT E. coli here?",
        "a": "Most likely diagnosis: **Acute Uncomplicated Cystitis (Lower UTI)** caused by **Staphylococcus saprophyticus**.\n- Justifying features: **Young, sexually active female** with classic lower UTI symptoms (**dysuria**, **suprapubic/lower abdominal pain**, cloudy urine with pyuria) AND urine microscopy showing abundant **Gram-positive** bacteria.\n- Why NOT E. coli? Although *Escherichia coli* is the #1 overall cause of UTIs (~80%), *E. coli* is a **Gram-negative bacillus**. **Staphylococcus saprophyticus** is the **2nd most common cause of acute uncomplicated cystitis in young sexually active women** (5–15% of cases) and is a **Gram-positive coccus** (coagulase-negative, **novobiocin-resistant**)."
      },
      {
        "q": "2. How do UTIs enter the urinary tract, why are women more susceptible, and how do you clinically distinguish Cystitis from Pyelonephritis?",
        "a": "- Route & Gender Predilection: **Ascending infection** from periurethral/perineal flora (most common route; facilitated by sexual intercourse). Women are far more susceptible due to their **short urethra** (~4 cm) and proximity to the perineum.\n- **Lower UTI (Cystitis) vs. Upper UTI (Acute Pyelonephritis)**:\n  - **Cystitis**: Dysuria, frequency, urgency, suprapubic discomfort, afebrile or low-grade fever, NO flank pain.\n  - **Acute Pyelonephritis**: High fever, chills/rigors, **flank/loin pain**, **costovertebral angle (CVA) tenderness**, nausea/vomiting ± lower UTI symptoms."
      },
      {
        "q": "3. What urinalysis findings are expected in S. saprophyticus UTI (especially the nitrite test!), and when is a urine culture required?",
        "a": "1. **Urinalysis & Dipstick**: Cloudy urine, **microscopic pyuria (>10 WBC/HPF)**, **positive leukocyte esterase**, possible microscopic hematuria, and **NEGATIVE Nitrite test**! *(High-Yield OSCE Pearl: S. saprophyticus is Gram-positive and does NOT reduce urinary nitrates to nitrites — unlike Gram-negative Enterobacteriaceae such as E. coli!)*\n2. **Urine Culture**: NOT routinely required for an initial episode of acute uncomplicated cystitis in a non-pregnant healthy young woman. Order urine culture + sensitivity ONLY if **suspected pyelonephritis**, **pregnancy**, **atypical symptoms**, **no response after 3 days**, or **recurrent UTI** (within 2–4 weeks).\n3. **Pelvic/STI Check**: Ensure no vaginal discharge/cervicitis (rule out Chlamydia/Gonorrhea urethritis, which causes **sterile pyuria**)."
      },
      {
        "q": "4. What are the first-line and second-line antibiotic regimens for acute uncomplicated cystitis (per Al-Azhar UTI curriculum)?",
        "a": "- **First-Line Oral Regimens**:\n  1. **Nitrofurantoin** 100 mg PO twice daily for **5 days** (excellent activity against S. saprophyticus and E. coli; avoid if pyelonephritis suspected or CrCl <30 mL/min).\n  2. **Trimethoprim-Sulfamethoxazole (TMP-SMX)** 160/800 mg PO twice daily for **3 days** (if local resistance <20%).\n  3. *(Alternative first-line: **Fosfomycin** 3 g PO single dose.)*\n- **Second-Line Regimens (Fluoroquinolones — spare unless 1st-line unsuitable)**:\n  - Ciprofloxacin 250 mg PO twice daily for 3 days, OR Levofloxacin 250 mg PO once daily for 3 days, OR Ofloxacin 200 mg PO daily for 3 days.\n- **Ultrasound Rule (Al-Azhar Exam Pearl)**: Do **NOT** order renal/pelvic ultrasound for simple cystitis unless the patient **fails to improve after 3 days of therapy** or has recurrent/complicated UTI."
      },
      {
        "q": "5. What preventive counseling should be given to young sexually active women with recurrent cystitis?",
        "a": "- Behavioral Measures: Increase daily oral fluid intake, **post-coital voiding** (urinating promptly after sexual intercourse), proper front-to-back perineal wiping, and avoiding spermicides/diaphragms (which disrupt normal vaginal lactobacilli).\n- Medical Warning: Advise seeking prompt evaluation if high fever, chills, vomiting, or flank pain develop (progression to acute pyelonephritis requiring IV Ceftriaxone + oral/IV Fluoroquinolone)."
      }
    ]
  },
  {
    "id": 52,
    "title": "حالة 52: Strongyloidiasis (Strongyloides stercoralis)",
    "topic": "Strongyloidiasis",
    "category": "Other Infections & Parasites",
    "scenario": "A 20-year-old man who presented with persistent diarrhea and abdominal bloating after returning from a gap year in Africa is diagnosed as having strongyloidiasis.",
    "questions": [
      {
        "q": "1. How did Strongyloides stercoralis initially enter this patient's body, and what other intestinal nematode shares this exact entry route?",
        "a": "- **Mode of Entry**: **Direct skin penetration by infective filariform larvae** present in moist soil contaminated with human feces (classically walking barefoot in tropical/subtropical Africa).\n- **Shared Entry Route**: **Hookworms (Ancylostoma duodenale & Necator americanus)** also infect humans via skin penetration of filariform larvae (causing 'ground itch' dermatitis and Löffler's pneumonitis during pulmonary migration)."
      },
      {
        "q": "2. Explain the unique autoinfection cycle of Strongyloides stercoralis and its characteristic cutaneous sign.",
        "a": "- **Autoinfection Cycle (Unique among intestinal nematodes!)**: Adult parthenogenetic females in the duodenum/jejunum lay eggs that hatch inside the gut into **rhabditiform larvae**. Instead of all exiting in stool, some rhabditiform larvae molt directly into **infective filariform larvae** inside the bowel lumen (**internal autoinfection** — penetrating colonic mucosa) or on the perianal skin (**external autoinfection**). This enables infection to persist silently for **decades**!\n- **Characteristic Cutaneous Sign — Larva Currens ('Racing Larva')**: Rapidly migrating, serpiginous, pruritic erythematous linear urticarial tracks on the buttocks, perineum, or thighs moving at **5–10 cm per hour** (caused by migrating filariform larvae during external autoinfection)."
      },
      {
        "q": "3. What are the diagnostic investigations and what exact larval stage is seen in stool?",
        "a": "1. **Stool Microscopy**: Detects motile **rhabditiform larvae** (250 µm, short buccal cavity — **NOT eggs!**). Single routine stool smear has low sensitivity (~30%); serial stool samples (3–7) or specialized concentration techniques (**Baermann funnel technique** or **Koga agar plate culture**) markedly increase yield.\n2. **Duodenal Aspirate (or String Test)**: High yield for larvae if stool tests are negative.\n3. **Serology (Strongyloides IgG ELISA)**: Highest sensitivity (>90%) for screening chronic/persistent infection and travelers returning from endemic areas (note: cannot easily distinguish past vs active infection in long-term residents).\n4. **CBC**: Peripheral **eosinophilia** (present in most immunocompetent patients, though often ABSENT in fatal hyperinfection!)."
      },
      {
        "q": "4. What is the first-line treatment for uncomplicated Strongyloidiasis?",
        "a": "- **Drug of Choice**: **Oral Ivermectin 200 µg/kg once daily for 2 consecutive days** (kills both adult worms and larvae, >90% cure rate; some guidelines repeat the 2-day course after 2 weeks to ensure eradication of autoinfecting larvae).\n- **Alternative**: **Albendazole 400 mg PO twice daily for 7 days** (lower cure rate than Ivermectin; Thiabendazole is historically listed in lectures but poorly tolerated).\n- **Follow-up**: Monitor resolution of symptoms, normalization of eosinophilia, and negative follow-up stool/serology after 3–6 months."
      },
      {
        "q": "5. What fatal complication occurs if a patient with undiagnosed Strongyloidiasis receives systemic corticosteroids?",
        "a": "- **Strongyloides Hyperinfection Syndrome & Disseminated Strongyloidiasis** (mortality 60–85%): Triggered by impaired cell-mediated immunity — especially **systemic corticosteroid therapy** (even short courses!), **HTLV-1 co-infection**, hematologic malignancies, or organ transplantation.\n- **Pathology**: Uncontrolled massive autoinfection sends filariform larvae invading lungs (hemorrhagic ARDS), brain, liver, and gut while carrying enteric gut bacteria on their surface -> recurrent **Gram-negative bacteremia (E. coli, Klebsiella) and bacterial meningitis**.\n- **OSCE Prevention Rule**: ALWAYS screen (serology/stool) or empirically treat with Ivermectin before initiating systemic steroids or immunosuppression in anyone with prior exposure to endemic tropical regions!"
      }
    ]
  },
  {
    "id": 53,
    "title": "حالة 53: Inhalational (Pulmonary) Anthrax (Woolsorter's Disease)",
    "topic": "Inhalational (Pulmonary) Anthrax",
    "category": "Other Infections & Parasites",
    "scenario": "A 36-year-old female presents to the emergency department with fever, chest pain, and hemoptysis. She recently visited her family where she works in a wool processing center. Chest X-ray shows a widened mediastinum, and sputum and blood cultures reveal Gram-positive rods.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which clinical, occupational, and radiological clues justify your choice?",
        "a": "Most likely diagnosis: **Inhalational (Pulmonary) Anthrax** (classically termed **Woolsorter's Disease**).\n- Justifying features: Classic occupational exposure (**wool processing center** — inhalation of spores from contaminated animal wool/hides), acute fever, chest pain, and hemoptysis + pathognomonic Chest X-ray finding of a **widened mediastinum** (hemorrhagic mediastinitis) + blood/sputum cultures isolating **Gram-positive rods**.\n- Key differential diagnoses: Pulmonary tuberculosis, aortic dissection/mediastinal lymphoma (other causes of widened mediastinum), pneumonic plague, and necrotizing bacterial pneumonia."
      },
      {
        "q": "2. Describe the causative bacterium, its key virulence factors, and why CXR shows a widened mediastinum rather than classic lobar consolidation.",
        "a": "- Causative Organism: **Bacillus anthracis** — a large, aerobic/facultative anaerobic, non-motile, **spore-forming Gram-positive rod** ('boxcar-shaped' bacilli in bamboo-like chains).\n- Virulence Factors:\n  1. **Antiphagocytic polypeptide capsule** (poly-D-glutamic acid — unique protein capsule!).\n  2. **Tripartite Anthrax Exotoxin**: Protective Antigen (PA) + **Edema Factor** (increases cAMP -> massive edema) + **Lethal Factor** (cleaves MAPK -> macrophage lysis, necrosis, and shock).\n- **Why Widened Mediastinum?**: Inhaled spores are phagocytosed by alveolar macrophages and transported to **mediastinal and hilar lymph nodes**, where they germinate and multiply -> causing fulminant **hemorrhagic necrotizing mediastinitis**, hemorrhagic pleural effusions, and bacteremia rather than primary alveolar pneumonia."
      },
      {
        "q": "3. What are the essential diagnostic investigations and how does Cutaneous Anthrax differ clinically?",
        "a": "1. **Microbiology**: Blood cultures (frequently positive before antibiotics), pleural fluid/sputum Gram stain & culture (large Gram-positive bacilli in chains; non-hemolytic 'Medusa head' colonies on blood agar), and **Bacillus anthracis PCR** (alert lab immediately — Biosafety Level 3 hazard!).\n2. **Imaging**: **Chest X-ray** and **CT Chest** demonstrating **mediastinal widening**, hemorrhagic mediastinal lymphadenopathy, and bilateral **hemorrhagic pleural effusions**.\n3. **Cutaneous Anthrax (Contrast — >95% of natural cases)**: Entry of spores into abraded skin -> papule -> vesicle -> painless, depressed **black necrotic eschar** surrounded by extensive non-pitting edema ('malignant pustule')."
      },
      {
        "q": "4. What is the immediate emergency treatment regimen for Inhalational Anthrax?",
        "a": "Inhalational anthrax is a rapidly fatal medical emergency (mortality >80% if untreated; reduced to ~45% with early aggressive therapy):\n1. **Combination IV Antimicrobial Therapy (at least 2–3 agents — bactericidal + toxin-suppressing protein synthesis inhibitor)** for ≥2 weeks (followed by oral step-down to complete 60 days total):\n   - **IV Ciprofloxacin 400 mg every 8 hours** (or IV Levofloxacin / Meropenem if meningitis suspected)\n   - **PLUS IV Clindamycin 900 mg every 8 hours** OR **IV Linezolid 600 mg every 12 hours** (inhibits bacterial ribosomal **exotoxin synthesis**!)\n   *(If anthrax meningitis cannot be excluded, use 3 drugs including a CNS-penetrating agent like Meropenem + Ciprofloxacin + Linezolid.)*\n2. **Anthrax Antitoxin**: Add monoclonal antitoxin (**Raxibacumab** or **Obiltoxaximab**) or Anthrax Immune Globulin (AIGIV) to neutralize circulating protective antigen.\n3. **Aggressive Supportive ICU Care**: **Pleural fluid drainage** (significantly reduces toxin load and improves survival), hemodynamic support, and mechanical ventilation."
      },
      {
        "q": "5. Is Inhalational Anthrax contagious person-to-person, and what Post-Exposure Prophylaxis is required for exposed coworkers?",
        "a": "- **Infection Control (IPC)**: **NO person-to-person transmission** occurs in inhalational anthrax! **Standard Precautions** are sufficient (no airborne isolation required). Notify public health authorities immediately (Category A bioterrorism / occupational outbreak agent).\n- **Post-Exposure Prophylaxis (PEP)** for asymptomatic coworkers exposed to aerosolized spores at the wool plant: **Oral Ciprofloxacin 500 mg twice daily** OR **Oral Doxycycline 100 mg twice daily for 60 days** (prolonged duration needed because dormant inhaled spores can germinate weeks later!) **PLUS 3 doses of Anthrax Vaccine Adsorbed (AVA)**."
      }
    ]
  },
  {
    "id": 54,
    "title": "حالة 54: HIV Transmission Risk & Prevention (U=U)",
    "topic": "HIV Transmission Risk & Prevention",
    "category": "Other Infections & Parasites",
    "scenario": "A 35-year-old man was diagnosed with HIV two years ago and is stable on antiretroviral therapy. He has a new regular partner and is concerned about transmitting the disease to her.",
    "questions": [
      {
        "q": "1. What is the single most important factor that increases the risk of HIV transmission to his partner, and what other co-factors increase risk?",
        "a": "1. **Most Important Determinant — High Plasma HIV RNA Viral Load**: Risk of sexual transmission correlates directly with plasma/genital viral load. Highest risk occurs during **acute primary HIV infection (seroconversion)**, **poor ART adherence / treatment interruption**, or **virologic failure**.\n2. **Additional High-Yield Transmission Risk Factors**:\n   - **Co-existing Sexually Transmitted Infections (STIs)** — especially ulcerative STIs (HSV-2, syphilis, chancroid) and inflammatory STIs (gonorrhea, chlamydia), which breach mucosal barriers and recruit CD4+ target cells.\n   - **Type of Sexual Exposure**: Unprotected **receptive anal intercourse** carries the highest per-act risk, followed by receptive vaginal intercourse.\n   - **Mucosal trauma / bleeding** (e.g., menstruation) and **lack of male circumcision** (for female-to-male transmission)."
      },
      {
        "q": "2. Explain the 'U = U' (Undetectable = Untransmittable) principle for this patient who is stable on ART.",
        "a": "- **U = U Principle (Proven by HPTN 052, PARTNER, and Opposites Attract trials & WHO/Al-Azhar HIV curriculum)**: People living with HIV who take daily Antiretroviral Therapy (ART) as prescribed and achieve and maintain a **durably undetectable HIV RNA viral load (< 200 copies/mL, typically < 50 copies/mL) for at least 6 months** have **effectively ZERO risk of sexually transmitting HIV** to their HIV-negative partner.\n- **Critical Caveat**: U=U requires **strict daily adherence** and **regular viral load monitoring** (every 6 months); skipping doses can cause viral rebound and restore infectiousness."
      },
      {
        "q": "3. What baseline and routine monitoring tests should be performed for this patient and his new partner?",
        "a": "- **For the HIV-Positive Man**: Confirm current **HIV RNA viral load** (verify durable suppression), **CD4+ T-cell count**, ART adherence review, and screen for **STIs** (syphilis, gonorrhea, chlamydia) as well as **HBV, HCV, and TB** co-infections.\n- **For the New Regular Partner**: Offer confidential **baseline HIV testing** (4th-generation HIV Ag/Ab combo test — recommended before starting any new sexual relationship), STI screening, and HBV/HCV screening (vaccinate against HBV if susceptible)."
      },
      {
        "q": "4. What comprehensive prevention strategies should be offered to this serodiscordant couple?",
        "a": "Combination Prevention Package (per Al-Azhar HIV Lecture & WHO):\n1. **Treatment as Prevention (TasP)**: Maintain uninterrupted daily first-line **ART** (e.g., **TDF + FTC/3TC + Dolutegravir**) to keep viral load undetectable.\n2. **Pre-Exposure Prophylaxis (PrEP) for the HIV-Negative Partner**: Daily oral **Tenofovir/Emtricitabine (TDF 300 mg / FTC 200 mg)** (or long-acting injectable Cabotegravir) provides >99% protection during sexual exposure — especially valuable until viral suppression is confirmed for ≥6 months or if adherence is uncertain.\n3. **Barrier Protection**: Consistent use of male/female **condoms** (protects against BOTH HIV and other STIs like HSV, syphilis, and HCV).\n4. **Prompt STI Diagnosis & Treatment**: Screen and treat any genital ulcer or discharge immediately in both partners."
      },
      {
        "q": "5. Which body fluids transmit HIV, and which fluids do NOT transmit HIV?",
        "a": "- **Infectious Body Fluids (Transmit HIV)**: **Blood**, **semen**, **vaginal/cervical secretions**, **breast milk**, amniotic fluid, CSF, pleural, pericardial, peritoneal, and synovial fluids.\n- **Non-Infectious Fluids (Do NOT transmit HIV unless visibly bloody)**: **Saliva**, **tears**, **sweat**, **urine**, **feces**, vomitus, and respiratory secretions. Reassure the couple that casual household contact, hugging, sharing utensils, and kissing do NOT transmit HIV."
      }
    ]
  },
  {
    "id": 55,
    "title": "حالة 55: Rabies Post-Exposure Prophylaxis (Unimmunized Traveler)",
    "topic": "Rabies Post-Exposure Prophylaxis (Traveler)",
    "category": "Rabies & Animal Exposure",
    "scenario": "An 18-year-old man is bitten by a frantic dog while taking a gap year in Ecuador. He is worried about rabies and phones for advice. He was not immunized against rabies prior to traveling to Ecuador.",
    "questions": [
      {
        "q": "1. How do you assess the rabies risk in this scenario, and what is your immediate urgent phone advice?",
        "a": "- **Risk Assessment**: **HIGH-RISK WHO Category III Exposure** — an unprovoked bite by a **frantic** (behaviorally abnormal/potentially rabid) dog in a rabies-endemic country (**Ecuador**) in an **unimmunized** traveler. Clinical rabies is almost 100% fatal once neurological symptoms appear.\n- **Immediate Urgent Phone Advice**:\n  1. **Wash the wound IMMEDIATELY** with soap and copious running water for **at least 15 minutes**, then apply a virucidal antiseptic (**povidone-iodine** or 70% alcohol).\n  2. **Seek emergency medical care locally IMMEDIATELY** to initiate full Rabies Post-Exposure Prophylaxis (PEP) — **do NOT wait until returning home**!"
      },
      {
        "q": "2. What are the three WHO Rabies exposure categories and how does each dictate PEP?",
        "a": "- **Category I** (Touching/feeding animals, licks on **intact** skin): Wash skin only — **NO PEP** required.\n- **Category II** (Nibbling of uncovered skin, minor scratches/abrasions **without bleeding**): Immediate wound washing + **Rabies Vaccine ONLY** (no RIG unless severely immunocompromised).\n- **Category III** (Single or multiple **transdermal bites or scratches**, licks on broken skin, mucous membrane contamination with saliva, or bat exposure — **this patient's category!**): Immediate wound washing + **Rabies Immunoglobulin (RIG)** + **Rabies Vaccine**."
      },
      {
        "q": "3. Outline the exact PEP regimen (RIG + Vaccine schedule & injection site) for this unimmunized traveler.",
        "a": "1. **Wound Care & Adjuncts**: Thorough 15-minute soap-and-water flush + povidone-iodine; avoid primary wound closure if possible; verify Tetanus booster status; give prophylactic antibiotics (e.g., Amoxicillin-Clavulanate) against dog-bite bacteria.\n2. **Passive Immunization — Rabies Immunoglobulin (RIG)**:\n   - **Human RIG (HRIG) 20 IU/kg** (or Equine RIG 40 IU/kg if HRIG unavailable in Ecuador) given once on **Day 0**.\n   - **Technique**: Infiltrate as much of the dose as anatomically feasible **directly into and around the bite wound(s)**; inject any remaining volume IM at a site **distant** from the vaccine (never in the same syringe or same limb!). *(If missed on Day 0, RIG can still be given up to Day 7 after the first vaccine dose.)*\n3. **Active Immunization — Cell-Culture Rabies Vaccine (HDCV or PCECV)**:\n   - **1.0 mL IM into the DELTOID muscle** (NEVER the gluteal region — reduces immunogenicity!) on **Days 0, 3, 7, and 14** (4-dose Essen/CDC schedule; add a 5th dose on Day 28 if immunocompromised)."
      },
      {
        "q": "4. What if this traveler returns home halfway through his vaccine series, and how would management differ if he HAD received pre-exposure vaccination?",
        "a": "- **Completing PEP After Travel**: If he begins a WHO-prequalified cell-culture vaccine (HDCV, PCECV, or Verorab) in Ecuador, he should document exact brand/dates and **complete the remaining scheduled doses upon returning home** without restarting the series.\n- **If Previously Immunized (Pre-Exposure Prophylaxis — PrEP)**:\n  - **NO RIG** is required (a major advantage for travelers to remote countries where HRIG is scarce!).\n  - Only **2 booster doses** of vaccine IM in the deltoid on **Days 0 and 3** (plus immediate wound washing)."
      },
      {
        "q": "5. Why is pre-exposure rabies vaccination recommended for gap-year travelers, and how does the virus reach the brain if untreated?",
        "a": "- **Pre-Exposure Prophylaxis (PrEP)**: Recommended for high-risk travelers to endemic areas (Latin America, Asia, Africa), veterinarians, and lab workers (WHO 2-dose IM schedule on Days 0 and 7). It eliminates the need for scarce HRIG and simplifies PEP to 2 doses.\n- **Pathogenesis**: Rabies virus has **NO viremia**; it enters peripheral nerve endings at the bite site and ascends via **retrograde axonal transport** to the CNS, forming intracytoplasmic **Negri bodies** and causing fatal encephalomyelitis (hydrophobia, aerophobia, hypersalivation, coma)."
      }
    ]
  },
  {
    "id": 56,
    "title": "حالة 56: Chronic Hepatitis C in Pregnancy",
    "topic": "Chronic Hepatitis C in Pregnancy",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 25-year-old intravenous drug user with chronic hepatitis C virus (HCV) infection becomes pregnant.",
    "questions": [
      {
        "q": "1. What is the risk of vertical (mother-to-child) transmission of HCV, and which factors significantly increase this risk?",
        "a": "- **Vertical Transmission Rate**: Approximately **5–6%** among mothers with active viremia (**HCV RNA positive**); transmission occurs primarily perinatally (around delivery) and is essentially 0% if the mother is HCV RNA negative.\n- **Factors Increasing Vertical Transmission**:\n  1. **HIV Co-Infection** (increases transmission risk 2–3 fold, up to **10–15%** — CRITICAL to screen in an IV drug user!).\n  2. **High maternal HCV RNA viral load** (>10⁶ IU/mL).\n  3. **Prolonged rupture of membranes (>6 hours)** and **invasive fetal monitoring** (fetal scalp electrodes or amniocentesis)."
      },
      {
        "q": "2. What baseline maternal investigations are mandatory in this pregnant IV drug user?",
        "a": "1. **Confirm Active HCV Replication**: **Quantitative HCV RNA by RT-PCR** (anti-HCV antibody alone only proves exposure, NOT active infection) and baseline **liver function tests (ALT, AST, bilirubin, albumin, INR)** + CBC (platelets) + abdominal ultrasound to exclude cirrhosis/portal hypertension.\n2. **Mandatory Co-Infection Screening (High Risk in IVDU)**: **HIV (4th-gen Ag/Ab)** and **Hepatitis B panel (HBsAg, anti-HBs, anti-HBc)** — plus screening for other STIs (syphilis, gonorrhea, chlamydia).\n3. **Obstetric Monitoring**: Monitor closely for **intrahepatic cholestasis of pregnancy (ICP)** (pruritus + elevated bile acids), which has a higher incidence in HCV-infected pregnant women."
      },
      {
        "q": "3. Should Direct-Acting Antivirals (DAAs) be started during pregnancy, and what is the curative regimen after delivery?",
        "a": "- **During Pregnancy**: **Defer DAA treatment until AFTER delivery and completion of breastfeeding** (current guidelines do not routinely initiate DAAs during pregnancy due to limited fetal safety data, though counseling/linkage to care is essential). **Ribavirin is STRICTLY CONTRAINDICATED** in pregnancy (potent teratogen — avoid conception for 6 months after use!).\n- **Postpartum Curative Treatment**: Administer a pangenotypic oral **Direct-Acting Antiviral (DAA)** regimen — e.g., **Sofosbuvir 400 mg + Daclatasvir 60 mg** OR **Sofosbuvir 400 mg + Velpatasvir 100 mg** once daily for **12 weeks** (>95% sustained virologic response / cure rate). Confirm cure with **HCV RNA PCR 12 weeks post-treatment (SVR12)**.\n- **Vaccination**: No HCV vaccine or immunoglobulin exists; vaccinate the mother against **HAV and HBV** (inactivated/recombinant vaccines are safe in pregnancy) if non-immune."
      },
      {
        "q": "4. What are the obstetric recommendations regarding mode of delivery and breastfeeding in chronic HCV?",
        "a": "1. **Mode of Delivery**: **Elective Cesarean section is NOT indicated solely for maternal HCV** (vaginal delivery does not carry a higher transmission risk than C-section unless there is an independent obstetric indication or HIV co-infection with HIV viral load >1,000 copies/mL). Avoid fetal scalp electrodes, episiotomy if unnecessary, and prolonged rupture of membranes.\n2. **Breastfeeding**: **NOT contraindicated** in chronic HCV! Advise temporary interruption of breastfeeding ONLY if the mother develops **cracked or bleeding nipples** (blood exposure) or if she is **HIV co-infected** (follow local HIV feeding guidelines)."
      },
      {
        "q": "5. How and when should the newborn infant be tested for perinatal HCV infection?",
        "a": "- **OSCE Diagnostic Trap**: Do **NOT** test infant **anti-HCV antibodies before 18 months of age** because maternal anti-HCV IgG crosses the placenta and causes false-positive results for up to 18 months!\n- **Recommended Infant Testing Protocol (CDC/AASLD)**:\n  - Test infant **HCV RNA by RT-PCR at 2–6 months of age** (early definitive diagnosis — if positive, refer to pediatric hepatology; DAAs are approved for children ≥3 years).\n  - Alternatively (or for confirmation if PCR wasn't done early), test **anti-HCV antibody at ≥18 months of age** (with reflex HCV RNA if positive)."
      }
    ]
  },
  {
    "id": 57,
    "title": "حالة 57: Malaria Diagnosis & Speciation (Thick & Thin Blood Smears)",
    "topic": "Malaria Diagnosis & Speciation",
    "category": "Malaria & Vector-Borne",
    "scenario": "A 35-year-old man who recently immigrated from Zimbabwe to the UK presents to the emergency department with fever, myalgia, and headaches. He is suspected to have malaria.",
    "questions": [
      {
        "q": "1. Which diagnostic test allows accurate speciation of the malaria pathogen, and what are the distinct roles of thick vs. thin blood smears?",
        "a": "- **Gold Standard for Accurate Speciation**: **Thin Peripheral Blood Smear (Giemsa-stained)** — paired with a **Thick Peripheral Blood Smear**.\n- **Distinct Roles (Classic Al-Azhar OSCE Question!)**:\n  1. **Thick Blood Film**: Examines a much larger volume of blood with lysed RBCs -> **highest sensitivity for detecting the presence of malaria parasites** (screening).\n  2. **Thin Blood Film**: Preserves intact RBC morphology -> **required for exact SPECIES identification** (differentiating *P. falciparum* from *P. vivax, P. ovale, P. malariae, P. knowlesi*) **and quantifying % parasitemia** (essential to identify severe malaria ≥5% and monitor treatment response).\n- **Exclusion Rule**: A single negative smear does NOT rule out malaria — obtain **3 serial blood smears 12–24 hours apart** before excluding the diagnosis."
      },
      {
        "q": "2. Based on his recent immigration from Zimbabwe, which Plasmodium species is most likely, and what are its characteristic thin-smear findings?",
        "a": "- **Most Likely Species**: **Plasmodium falciparum** (>95–99% of malaria cases in Zimbabwe and Sub-Saharan Africa — the **most virulent and lethal** species).\n- **Pathognomonic Thin-Smear Morphology of P. falciparum**:\n  - Normal-sized infected RBCs (infects RBCs of all ages).\n  - Delicate **ring-form trophozoites** with **double chromatin dots ('headphone' appearance)**, appliqué/accolé marginal forms, and **multiple rings inside a single RBC**.\n  - **Banana- or crescent-shaped gametocytes**.\n  *(Contrast: P. vivax -> enlarged reticulocytes, Schüffner's dots, amoeboid trophozoites; P. malariae -> band-form trophozoites in smaller older RBCs.)*"
      },
      {
        "q": "3. What are the roles and limitations of Malaria Rapid Diagnostic Tests (RDTs) and PCR?",
        "a": "- **Rapid Diagnostic Tests (RDTs)**: Immunochromatographic strips detecting parasite antigens (**HRP-2** specific for *P. falciparum*; **pLDH** or aldolase for pan-Plasmodium). Useful as a rapid adjunct in EDs when expert microscopy is delayed, **but they CANNOT calculate % parasitemia**, may remain falsely positive for weeks after clearance (HRP-2 persistence), and do not replace thick/thin films.\n- **PCR**: Highest sensitivity for low-level parasitemia and mixed/simian (*P. knowlesi*) speciation, but expensive and too slow for acute emergency management."
      },
      {
        "q": "4. How do you distinguish Uncomplicated vs. Severe Malaria, and what is the exact treatment for each?",
        "a": "1. **Criteria for Severe Malaria (Any ≥1 feature = Medical Emergency)**: Impaired consciousness/coma (**Cerebral malaria**), **% parasitemia ≥ 5%**, severe anemia (Hb < 7 g/dL), **acute kidney injury / blackwater fever** (massive intravascular hemolysis & hemoglobinuria), ARDS/pulmonary edema, shock, DIC, metabolic acidosis, hypoglycemia (<40 mg/dL), or jaundice with another organ dysfunction.\n2. **Treatment of Severe Malaria**: **IV Artesunate 2.4 mg/kg** at 0, 12, and 24 hours, then once daily (Drug of Choice — start immediately even before speciation if severe!), followed by a full oral ACT course once tolerating PO. Monitor closely for hypoglycemia and post-artesunate delayed hemolysis.\n3. **Treatment of Uncomplicated P. falciparum (Chloroquine-resistant — Zimbabwe!)**: Oral **Artemisinin-based Combination Therapy (ACT)** — **Artemether-Lumefantrine (Coartem)** for 3 days (alternatives: Atovaquone-Proguanil or Quinine + Doxycycline). **NEVER use Chloroquine** for Sub-Saharan African *P. falciparum*!"
      },
      {
        "q": "5. What baseline labs and follow-up monitoring are essential upon admission?",
        "a": "- **Immediate Labs**: CBC (anemia, thrombocytopenia), blood glucose (rule out hypoglycemia), renal function & electrolytes, LFTs/bilirubin, venous/arterial blood gas & lactate (metabolic acidosis), and urinalysis (hemoglobinuria).\n- **Response Monitoring**: Admit *P. falciparum* patients for at least 24 hours to verify drug tolerability and clinical improvement; repeat **thin blood smears every 12–24 hours** until parasite clearance is documented."
      }
    ]
  },
  {
    "id": 58,
    "title": "حالة 58: Weil's Disease (Severe Leptospirosis)",
    "topic": "Weil's Disease (Severe Leptospirosis)",
    "category": "Other Infections & Parasites",
    "scenario": "A 34-year-old sewage worker presents with a 3-day history of low back pain, fever, myalgia, fatigue, jaundice, subconjunctival hemorrhage, and renal impairment. He has no past medical history and has not traveled abroad in the last 6 months.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which classic triad in this case confirms it?",
        "a": "Most likely diagnosis: **Weil's Disease (Severe Icterohemorrhagic Leptospirosis)**.\n- **Classic Weil's Disease Triad (ALL 3 PRESENT HERE!)**:\n  1. **Jaundice** (hepatic dysfunction)\n  2. **Acute Kidney Injury** (renal impairment)\n  3. **Hemorrhagic diathesis** (**subconjunctival hemorrhage**)\n- **Additional Justifying Clues**: Classic occupational exposure (**sewage worker** in contact with rat-urine-contaminated sewage water — locally acquired, no travel needed!), abrupt fever, and severe **low back & calf myalgia**.\n- Key differential diagnoses: Acute viral hepatitis (much higher ALT/AST, rarely early AKI/subconjunctival hemorrhage), Hantavirus (HFRS), sepsis/cholangitis, and yellow fever (excluded by no travel)."
      },
      {
        "q": "2. What is the causative spirochete, its classic serovar pairing, and how does it damage the liver and kidneys?",
        "a": "- Causative Organism: **Leptospira interrogans** (thin, tightly coiled obligate aerobic spirochete with hooked ends and periplasmic flagella; classic pairing: serovar **Icterohaemorrhagiae -> rats**).\n- Transmission: Enters via cuts, abraded skin, or mucous membranes from rat-urine-contaminated sewage water.\n- **Organ Pathogenesis (Endothelial Vasculitis & Capillary Leak)**:\n  - **Kidney**: Tubulointerstitial nephritis -> acute kidney injury (classically **non-oliguric AKI with hypokalemia** due to proximal tubular potassium wasting).\n  - **Liver**: Intrahepatic cholestasis and disrupted hepatocyte junctions without massive necrosis -> **markedly elevated conjugated bilirubin with only MODESTLY elevated ALT/AST** (usually <200–300 U/L — key differentiator from acute viral hepatitis!)."
      },
      {
        "q": "3. Which diagnostic test is best on Day 3 of his illness versus after Day 7, and what supportive lab pattern is expected?",
        "a": "- **Test Selection by Day of Illness (Al-Azhar Leptospirosis Lecture)**:\n  1. **Day 3 (Current Presentation — Days 1–7 Leptospiremic Phase)**: **Blood PCR** (fastest, most sensitive early test) or blood culture on EMJH medium (slow, takes weeks). *Note: Early serology on Day 3 is frequently negative!*\n  2. **After Day 5–7 (Immune Phase)**: **IgM ELISA** and **Microscopic Agglutination Test (MAT — Gold Standard reference test)** showing a **≥4-fold titer rise** in paired sera.\n  3. **Week 2 Onward**: **Urine PCR/culture**.\n- **Expected Supportive Lab Pattern**: Neutrophilic leukocytosis, thrombocytopenia, **high serum bilirubin with mildly raised AST/ALT**, elevated creatinine with **hypokalemia**, elevated **creatine kinase (CK)** from myositis, and urinalysis with proteinuria/hematuria/casts."
      },
      {
        "q": "4. What is the immediate treatment protocol for Weil's Disease, and what reaction should you watch for after the first dose?",
        "a": "**Start IV antibiotics IMMEDIATELY on clinical suspicion — NEVER wait for PCR or MAT results!**\n1. **First-Line IV Antibiotics (for 5–7 days)**:\n   - **IV Penicillin G 1.5 million units every 6 hours** (Drug of Choice), OR\n   - **IV Ceftriaxone 1 g every 24 hours** (equally effective alternative; IV Ampicillin or Cefotaxime are alternatives).\n2. **Supportive Hospital/ICU Management**: Careful IV fluid and potassium replacement, monitor urine output and renal function (**hemodialysis** early if severe AKI/uremia develops), blood/platelet support if active bleeding, and mechanical ventilation if **pulmonary hemorrhage syndrome / ARDS** develops.\n3. **Post-Dose Alert**: Monitor closely for **Jarisch-Herxheimer reaction** (acute fever spike, rigors, tachycardia, and hypotension shortly after first antibiotic dose due to rapid spirochete lysis and cytokine release)."
      },
      {
        "q": "5. What occupational preventive measures should be implemented for sewage workers?",
        "a": "- **Personal Protective Equipment (PPE)**: Waterproof rubber boots, heavy-duty waterproof gloves, protective clothing, eye/face shields, covering all skin cuts/abrasions before work, and thorough washing/showering immediately after shifts.\n- **Environmental & Public Health**: Municipal rodent control, safe waste/sewage management, and mandatory disease notification.\n- **Chemoprophylaxis**: **Oral Doxycycline 200 mg once weekly** can be considered for short-term high-risk sewage/flood exposure."
      }
    ]
  },
  {
    "id": 59,
    "title": "حالة 59: Urinary Schistosomiasis (Schistosoma haematobium)",
    "topic": "Urinary Schistosomiasis (Schistosoma haematobium)",
    "category": "Other Infections & Parasites",
    "scenario": "A 34-year-old man from Zimbabwe is admitted with abdominal pain. Abdominal X-ray reveals urinary bladder calcification.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis of urinary bladder calcification, and which clinical/radiological features justify your choice?",
        "a": "- **Most likely diagnosis:** Chronic Urinary Schistosomiasis (*Schistosoma haematobium*).\n- **Justifying features:** Geographic origin from an endemic sub-Saharan African country (Zimbabwe) combined with classic linear urinary bladder wall calcification on plain abdominal X-ray.\n- **Differential diagnosis of bladder wall calcification:**\n  1. Urinary schistosomiasis (most common worldwide in endemic areas).\n  2. Genitourinary tuberculosis (typically associated with renal/ureteric calcification and sterile pyuria).\n  3. Calcified urothelial or squamous cell bladder carcinoma.\n  4. Radiation cystitis or cyclophosphamide-induced cystitis."
      },
      {
        "q": "2. What is the causative organism, its mode of transmission, and the pathogenesis of bladder wall calcification?",
        "a": "- **Causative organism:** *Schistosoma haematobium* (blood fluke / trematode).\n- **Transmission & Life Cycle:** Freshwater exposure -> **furcocercous cercariae** (released from the snail intermediate host *Bulinus truncatus*) penetrate intact human skin -> mature into adult male and female worms residing in the **vesical and pelvic venous plexus**.\n- **Pathogenesis of calcification:** Eggs laid in the bladder submucosa trigger a chronic Th2-mediated granulomatous inflammatory response, leading to fibrosis, mucosal **\"sandy patches\"**, and dystrophic deposition of calcium salts around retained dead ova in the bladder wall."
      },
      {
        "q": "3. What are the confirmatory diagnostic investigations and expected specific findings?",
        "a": "1. **Urine Microscopy (Gold Standard):** Midday (10 AM–2 PM, peak egg excretion) terminal-stream urine specimen (centrifuged or filtered) demonstrating large oval ova with a characteristic **terminal spine**.\n2. **Cystoscopy & Biopsy:** Reveals pathognomonic yellowish mucosal **\"sandy patches\"**, polypoid lesions, or ulcers; biopsy is mandatory to rule out malignant transformation.\n3. **Imaging (Pelvic US / CT KUB / Plain X-ray):** Shows bladder wall thickening, linear eggshell bladder calcification, distal ureteric strictures, and possible hydronephrosis.\n4. **Serology (ELISA):** Useful for travelers/light infections, though it cannot distinguish active from past infection."
      },
      {
        "q": "4. What is the definitive first-line treatment regimen?",
        "a": "- **Drug of choice:** **Oral Praziquantel 40 mg/kg** given as a single dose (or divided into two doses of 20 mg/kg 4–6 hours apart to reduce GI side effects).\n- **Follow-up:** Repeat urine microscopy 3–6 months post-treatment to confirm parasitological cure (note that established bladder calcification is permanent and will not resolve with praziquantel).\n- **Supportive / Urological care:** Manage secondary bacterial UTI or ureteric obstruction if present."
      },
      {
        "q": "5. What are the major long-term complications of chronic *Schistosoma haematobium* infection?",
        "a": "1. **Squamous Cell Carcinoma (SCC) of the urinary bladder** (classic high-yield malignant complication; suspect if painless gross hematuria or bladder mass appears).\n2. **Obstructive uropathy:** Distal ureteric fibrosis/strictures -> hydroureter, hydronephrosis, and chronic kidney disease.\n3. **Bladder neck obstruction** and contracted fibrotic bladder.\n4. **Terminal hematuria**, iron-deficiency anemia, sterile pyuria, and recurrent secondary bacterial UTIs (including chronic *Salmonella* urinary carriage)."
      }
    ]
  },
  {
    "id": 60,
    "title": "حالة 60: Typhoid Fever (Enteric Fever)",
    "topic": "Typhoid Fever (Enteric Fever)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 31-year-old man is evaluated in the emergency department for a 5-day history of abdominal discomfort, vomiting, and loose stools, accompanied by progressively increasing fever. He also has a moderate headache and a rash. On physical examination, temperature is 40°C, blood pressure is 102/78 mmHg, pulse rate is 64/min, and respiration rate is 20/min. BMI is 26. The patient appears sick. There are blanching erythematous macules on the lower chest and upper abdominal wall. The pharynx is erythematous. The remainder of the examination reveals tender hepatosplenomegaly. His CBC shows leukopenia with lymphopenia. Liver profile shows elevated liver enzymes. Two sets of aerobic blood cultures show Gram-negative bacilli.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which specific clinical and laboratory features in this case justify your choice?",
        "a": "- **Most likely diagnosis:** **Typhoid Fever (Enteric Fever)** caused by *Salmonella enterica* serovar Typhi.\n- **Justifying clinical & laboratory keywords:**\n  1. **Progressively increasing (step-ladder) high fever** reaching 40°C.\n  2. **Relative bradycardia (Faget sign):** Pulse rate of only 64/min despite a temperature of 40°C.\n  3. **Rose spots:** Blanching erythematous (salmon-colored) macules on the lower chest and upper abdomen.\n  4. **Tender hepatosplenomegaly** with abdominal discomfort and headache.\n  5. **Leukopenia** (paradoxical absence of leukocytosis in bacterial sepsis) and elevated transaminases.\n  6. **Two sets of blood cultures growing Gram-negative bacilli**."
      },
      {
        "q": "2. What are the virulence antigens of *Salmonella* Typhi and its classic chronological weekly clinical progression?",
        "a": "- **Key Antigenic Structure & Virulence Factors:**\n  - **O-antigen (Somatic LPS):** Endotoxin; anti-O antibodies rise early and indicate **active/acute infection**.\n  - **H-antigen (Flagellar):** Mediates motility; anti-H antibodies persist longer and indicate **past infection or immunization**.\n  - **Vi-antigen (Capsular polysaccharide):** Key **virulence/antiphagocytic** factor preventing complement-mediated lysis; anti-Vi antibodies help screen **chronic carriers**.\n- **Weekly Progression (if untreated):**\n  - **Week 1:** Step-ladder fever, relative bradycardia, headache, malaise, constipation or loose stools (bacteremic phase).\n  - **Week 2:** Sustained high fever, **rose spots**, hepatosplenomegaly, abdominal distension.\n  - **Week 3:** Severe **intestinal hemorrhage or ileal perforation** (hyperplasia & necrosis of Peyer's patches), typhoid encephalopathy.\n  - **Week 4:** Gradual defervescence or progression to chronic carrier state."
      },
      {
        "q": "3. What are the confirmatory investigations according to the week of illness, and what are the limitations of the Widal test?",
        "a": "- **Week 1 (Highest Yield):**\n  - **Blood Culture (Gold Standard in clinical practice):** Positive in 60–80% during week 1 (already growing Gram-negative bacilli here).\n  - **Bone Marrow Culture:** Highest sensitivity (>90%), remains positive even after prior antibiotic exposure.\n- **Week 2 (Serology):**\n  - **Widal Test:** Detects agglutinating antibodies against **O** (acute/active) and **H** (past/immunized) antigens; becomes positive after **7–10 days** (significant titer: anti-O ≥ 1:160 or a **4-fold rise** in paired sera). *Limitations:* Low specificity in endemic areas (Egypt), false-positives from prior vaccination/cross-reacting Gram-negatives, and false-negatives early in week 1 or after early antibiotics.\n- **Week 3 onward:** **Stool and urine cultures** achieve highest yield (used to detect convalescent or chronic shedding)."
      },
      {
        "q": "4. What is the immediate and definitive antimicrobial management for this sick hospitalized patient?",
        "a": "- **Hospitalization & Supportive Care:** IV fluid hydration, antipyretics, electrolyte correction, and close abdominal monitoring for perforation/bleeding.\n- **First-Line Empirical IV Therapy (for hospitalized/severe enteric fever):**\n  - **IV Ceftriaxone 2 g once daily for 10–14 days** (covers multidrug-resistant and fluoroquinolone-resistant strains; switch to oral therapy once afebrile and improving).\n  - **Oral Azithromycin** (1 g on day 1, then 500 mg daily for 7 days) is first-line for uncomplicated/outpatient cases or extensively drug-resistant (XDR) strains (for XDR severe cases: IV Meropenem).\n  - **Fluoroquinolones (Ciprofloxacin 500 mg BID for 7–10 days)** only if susceptibility is confirmed.\n- **Adjunctive Steroids:** **IV Dexamethasone** (3 mg/kg loading, then 1 mg/kg q6h for 48 hours) is reserved ONLY for **severe typhoid with shock, delirium, stupor, or coma**."
      },
      {
        "q": "5. What are the life-threatening complications of Typhoid fever, and how is the Chronic Carrier State managed?",
        "a": "- **Intestinal Complications (Week 3):** Lower GI **hemorrhage** and **terminal ileal perforation** (necrosis of Peyer's patches -> acute peritonitis requiring urgent surgery).\n- **Extra-Intestinal Complications:** Typhoid encephalopathy/delirium, myocarditis, hepatitis, cholecystitis, osteomyelitis (especially in sickle cell disease), and septic shock.\n- **Chronic Carrier State (1–5% of patients):**\n  - **Definition:** Excretion of *S. Typhi* in stool or urine for **> 12 months** after acute illness.\n  - **Reservoir Site:** Primarily the **gallbladder** (especially associated with **gallstones**; urinary carriage occurs with *S. haematobium* bladder pathology).\n  - **Treatment:** **Oral Ciprofloxacin 500–750 mg BID for 4 weeks** (or high-dose Amoxicillin/TMP-SMX if susceptible), plus **cholecystectomy** if gallstones are present and antibiotic eradication fails."
      }
    ]
  },
  {
    "id": 61,
    "title": "حالة 61: Acute Bacterial Meningitis in an HIV-Positive Patient",
    "topic": "Acute Bacterial Meningitis in an HIV-Positive Patient",
    "category": "Meningitis & CNS",
    "scenario": "A 45-year-old male known to be HIV positive presented with fever, malaise, headache, and neck stiffness for the last two days. He undergoes lumbar puncture. The CSF contains markedly increased numbers of neutrophils, high protein, and low glucose.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which clinical and CSF findings distinguish it from HIV-associated opportunistic meningitis?",
        "a": "- **Most likely diagnosis:** **Acute Bacterial (Purulent) Meningitis in an Immunocompromised (HIV-Positive) Adult**.\n- **Justifying features:**\n  1. **Hyperacute/acute 2-day course** of fever, headache, and neck stiffness.\n  2. **Markedly increased CSF neutrophils (PMNs)**, **high protein**, and **low glucose** — the classic triad of acute purulent bacterial meningitis.\n- **Distinction from opportunistic HIV meningitis:** Both **Cryptococcal meningitis** and **Tuberculous meningitis** present **subacutely (over 1–4 weeks)** and produce a **lymphocytic** (or paucicellular in advanced AIDS) CSF profile rather than marked neutrophilic pleocytosis."
      },
      {
        "q": "2. Which causative bacterial pathogens must be covered empirically in an HIV-positive adult?",
        "a": "1. ***Streptococcus pneumoniae*** (most common cause of acute bacterial meningitis in adults, with markedly higher incidence in HIV patients).\n2. ***Neisseria meningitidis***.\n3. ***Listeria monocytogenes*** (critical pathogen in **immunocompromised/HIV patients**, adults >50 years, diabetics, and pregnant women due to impaired cell-mediated immunity).\n4. **Aerobic Gram-negative bacilli** (e.g., *E. coli*, *Klebsiella*, *Pseudomonas* — if advanced immunocompromise or healthcare exposure)."
      },
      {
        "q": "3. What is the empirical antibiotic treatment of choice for this patient, and why is each agent included?",
        "a": "- **Regimen of choice:** **IV Vancomycin + IV Ceftriaxone (or Cefotaxime) + IV Ampicillin** (plus **IV Dexamethasone**):\n  1. **IV Ceftriaxone 2 g q12h** (or Cefotaxime 2 g q4–6h): Covers *S. pneumoniae*, *N. meningitidis*, and *H. influenzae*.\n  2. **IV Vancomycin 15–20 mg/kg q8–12h**: Covers penicillin- and cephalosporin-resistant *S. pneumoniae*.\n  3. **IV Ampicillin 2 g q4h**: Mandatory addition to cover ***Listeria monocytogenes*** (which is **intrinsically resistant to all cephalosporins**).\n  4. **IV Dexamethasone 10 mg q6h for 4 days**: Given **before or with the first antibiotic dose** to reduce meningeal inflammation, neurological sequelae (deafness), and mortality in pneumococcal meningitis.\n- **OSCE Golden Rule:** Empirical antibiotics must **NEVER be delayed** waiting for lumbar puncture or neuroimaging."
      },
      {
        "q": "4. Which confirmatory CSF and blood investigations should be sent on this lumbar puncture specimen?",
        "a": "- **Three-tube CSF distribution:**\n  - **Tube 1 (Hematology):** Cell count and differential (neutrophils vs. lymphocytes).\n  - **Tube 2 (Chemistry):** CSF glucose (compared with paired serum glucose; bacterial ratio **< 0.40**) and CSF protein (bacterial typically **> 150 mg/dL**).\n  - **Tube 3 (Microbiology & Immunology):** **Gram stain**, **bacterial culture & sensitivity** (yield 70–85%), and **multiplex CSF PCR** (e.g., BioFire).\n- **Additional HIV-specific CNS screening:** Send **CSF Cryptococcal Antigen (CrAg) / India ink stain** and **AFB smear / GeneXpert MTB/RIF** to exclude dual opportunistic pathology, plus **2 sets of blood cultures** and **CD4 count / HIV viral load**."
      },
      {
        "q": "5. How would management fundamentally differ if his CSF instead confirmed HIV Cryptococcal Meningitis, and what IPC isolation is needed now?",
        "a": "- **If HIV Cryptococcal Meningitis were diagnosed instead:**\n  - **Do NOT treat with Ceftriaxone!**\n  - Treat with **IV Amphotericin B + Oral Flucytosine** for 2 weeks (induction), followed by **Oral Fluconazole 400–800 mg/day** for 8 weeks (consolidation), then **Fluconazole 200 mg/day** maintenance; perform **serial therapeutic LPs** for high opening pressure and **avoid routine steroids**.\n- **Current IPC Isolation:** Place this patient under **Droplet Precautions** (private room, surgical mask, gloves, gown) for the **first 24 hours** of effective IV antibiotics until *N. meningitidis* is excluded."
      }
    ]
  },
  {
    "id": 62,
    "title": "حالة 62: Candida Esophagitis (Esophageal Candidiasis)",
    "topic": "Candida Esophagitis (Esophageal Candidiasis)",
    "category": "Other Infections & Parasites",
    "scenario": "A 54-year-old neutropenic man undergoing cancer chemotherapy presents with difficult, painful swallowing. Endoscopy of the esophagus reveals multiple white plaques with no ulceration.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and how do you differentiate it endoscopically from other causes of infectious esophagitis in immunocompromised patients?",
        "a": "- **Most likely diagnosis:** **Candida Esophagitis (Esophageal Candidiasis)** caused by *Candida albicans*.\n- **Justifying features:** Severe immunocompromise (**neutropenia secondary to cancer chemotherapy**) + **dysphagia and odynophagia** (difficult, painful swallowing) + classic endoscopic finding of **multiple adherent white plaques with no deep ulceration**.\n- **Endoscopic Differential Diagnosis in Immunocompromised Hosts:**\n  - ***Candida* esophagitis:** Confluent, raised, creamy **white plaques** overlying erythematous mucosa (no deep ulcers).\n  - **HSV esophagitis:** Multiple small, discrete, **punched-out (\"volcano\") ulcers**.\n  - **CMV esophagitis:** Few **large, deep, linear/serpiginous ulcers** in the distal esophagus."
      },
      {
        "q": "2. What are the key microbiological features and predisposing risk factors of *Candida albicans*?",
        "a": "- **Microbiology:**\n  - Dimorphic commensal fungus appearing in tissue as **budding yeast cells and pseudohyphae** (elongated branching structures with constrictions at septa).\n  - **Unique staining feature:** *Candida* yeast and pseudohyphae stain **Gram-positive**.\n  - **Rapid Lab Identification:** Forms **Germ Tubes** when incubated in serum at **37°C** (classic Al-Azhar exam pearl for *C. albicans*).\n- **Major Risk Factors:** **Neutropenia / cancer chemotherapy**, **HIV/AIDS** (AIDS-defining illness typically at CD4 <100 cells/mm³), prolonged **corticosteroids** or immunosuppressants, **broad-spectrum antibiotics**, and uncontrolled diabetes mellitus."
      },
      {
        "q": "3. What are the confirmatory diagnostic investigations on the endoscopic specimen?",
        "a": "1. **Endoscopic Esophageal Brushings & Mucosal Biopsy (Gold Standard):**\n   - **KOH wet mount / Gram stain / PAS or Gomori Methenamine Silver (GMS) stain:** Demonstrates **budding yeasts and pseudohyphae** invading squamous epithelial cells.\n2. **Fungal Culture & Antifungal Susceptibility Testing:** Identifies *C. albicans* vs. inherently azole-resistant non-albicans species (*C. krusei*, *C. glabrata*), especially important in chemotherapy patients who may have received prior azole prophylaxis.\n3. **Rule out Concurrent Neutropenic Fever / Candidemia:** Obtain CBC with absolute neutrophil count (ANC) and peripheral/catheter **blood cultures** if febrile."
      },
      {
        "q": "4. What is the first-line and alternative antifungal treatment for this neutropenic patient?",
        "a": "- **Core Principle:** Esophageal candidiasis ALWAYS requires **systemic antifungal therapy** (topical nystatin swish-and-swallow or clotrimazole troches are **ineffective** for esophageal disease).\n- **First-Line Treatment:**\n  - **Oral Fluconazole 200–400 mg daily for 14–21 days** (or **IV Fluconazole 400 mg daily** if unable to tolerate oral intake due to severe odynophagia).\n- **Alternatives (for Fluconazole-refractory disease, prior azole prophylaxis, or severe neutropenic invasive candidiasis):**\n  - **IV Echinocandin** (e.g., **Caspofungin** 70 mg loading then 50 mg daily, or Micafungin 150 mg daily) — preferred in severely neutropenic or azole-resistant cases.\n  - **IV Amphotericin B** (deoxycholate 0.5–0.7 mg/kg/day or liposomal 3–5 mg/kg/day) if refractory or invasive candidemia develops."
      },
      {
        "q": "5. What serious complications must be monitored in a neutropenic chemotherapy patient with *Candida* esophagitis?",
        "a": "1. **Invasive Candidemia & Disseminated Candidiasis:** Mucosal barrier breakdown during chemotherapy allows *Candida* translocation into the bloodstream -> septic shock, **hepatosplenic (chronic disseminated) candidiasis**, endophthalmitis, or endocarditis (requires **catheter removal** and systemic Echinocandin/Amphotericin B continued until afebrile and non-neutropenic for 2 weeks).\n2. **Local Esophageal Complications:** Severe dehydration/malnutrition from odynophagia, esophageal bleeding, strictures, or perforation."
      }
    ]
  },
  {
    "id": 63,
    "title": "حالة 63: Meningococcal Meningitis — Contact Chemoprophylaxis",
    "topic": "Meningococcal Meningitis — Contact Chemoprophylaxis",
    "category": "Meningitis & CNS",
    "scenario": "A 7-year-old schoolboy has been diagnosed with meningococcal meningitis.",
    "questions": [
      {
        "q": "1. How is *Neisseria meningitidis* transmitted, and what is the immediate public health priority for this 7-year-old boy's contacts?",
        "a": "- **Mode of Transmission:** Spread person-to-person via **large respiratory droplets (> 5 µm)** expelled during coughing, sneezing, or close face-to-face contact (usually within **1–2 meters**) from symptomatic patients or asymptomatic nasopharyngeal carriers.\n- **Immediate Public Health Priority:** Urgent **antibiotic chemoprophylaxis** (ideally within **24 hours** of index case diagnosis) to **eradicate nasopharyngeal carriage** in high-risk close contacts and prevent secondary invasive meningococcal cases."
      },
      {
        "q": "2. Which contacts (family, schoolmates, and staff) should receive chemoprophylaxis, and who does NOT require it?",
        "a": "- **Contacts Requiring Chemoprophylaxis:**\n  1. **All household / family members** living in the same home during the **7 days** before symptom onset.\n  2. **Close school / classroom contacts:** Children in the **same class/preschool/daycare group** (or close friends sharing prolonged indoor exposure ≥ 8 hours, food, or drinks) — in exam scenarios comparing whole class vs. whole school, chemoprophylaxis is targeted to **the family and close classmates (same class)**, **NOT the entire school**.\n  3. **Direct oral-secretion contacts:** Anyone exposed directly to the boy's respiratory/oral secretions (e.g., unprotected mouth-to-mouth resuscitation or intubation).\n- **Who Does NOT Need Prophylaxis:** Casual schoolmates in other classrooms and school staff without direct secretion exposure (unless a **second linked case** occurs in the school, indicating an outbreak)."
      },
      {
        "q": "3. What are the exact chemoprophylaxis drug regimens (adult, pediatric, and pregnancy)?",
        "a": "1. **Oral Rifampicin (Classic Al-Azhar / Hawari Drug of Choice):**\n   - **Adults:** **600 mg PO every 12 hours for 2 days** (4 total doses).\n   - **Children > 1 month:** **10 mg/kg (max 600 mg) PO every 12 hours for 2 days** (5 mg/kg q12h in infants < 1 month).\n   - *Counseling:* Harmless **orange-red discoloration** of urine, tears, and sweat (stains soft contact lenses); induces CYP450 enzymes (reduces oral contraceptive efficacy); contraindicated in pregnancy.\n2. **Oral Ciprofloxacin (Preferred single-dose option for non-pregnant adults):**\n   - **500 mg PO single dose** (100% adherence; no CYP450 interaction; generally avoided in young children if Rifampicin/Ceftriaxone available).\n3. **IM Ceftriaxone (Drug of Choice in Pregnancy):**\n   - **Adults/Pregnant women:** **250 mg IM single dose**; **Children < 15 years:** **125 mg IM single dose**.\n- *Exam Trap:* **Benzylpenicillin** and **oral amoxicillin** are **NOT effective** for prophylaxis because they do not reliably eradicate nasopharyngeal carriage."
      },
      {
        "q": "4. What is the role of Meningococcal Vaccination and Hospital IPC Isolation in this case?",
        "a": "- **Role of Vaccination:**\n  - **Meningococcal vaccine (MenACWY / MenB) is NOT a substitute for immediate antibiotic chemoprophylaxis** because protective antibodies take 7–14 days to develop.\n  - However, targeted vaccination is additionally offered to close contacts once the index boy's serogroup is identified as vaccine-preventable (or during school/community outbreaks).\n- **Hospital IPC Isolation:** Place the index 7-year-old boy under **Droplet Precautions** (private room, surgical mask, gloves, gown for staff within 2 meters) until he has completed **24 hours of effective IV antibiotic therapy** (e.g., IV Ceftriaxone or Cefotaxime)."
      }
    ]
  },
  {
    "id": 64,
    "title": "حالة 64: CMV Colitis in HIV/AIDS",
    "topic": "CMV Colitis in HIV/AIDS",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 38-year-old man with HIV/AIDS presents with 4 weeks of diarrhea, fever, and weight loss.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and broad differential diagnosis of chronic diarrhea (≥ 4 weeks) in a patient with HIV/AIDS?",
        "a": "- **Most likely diagnosis:** **Cytomegalovirus (CMV) Colitis** (an AIDS-defining opportunistic GI infection presenting with chronic diarrhea, fever, and wasting).\n- **High-Yield Differential Diagnosis of Chronic Diarrhea in HIV/AIDS (by CD4 count):**\n  - **CD4 < 50 cells/mm³:** **CMV colitis**, disseminated ***Mycobacterium avium* complex (MAC)**.\n  - **CD4 < 100–200 cells/mm³:** Protozoa — ***Cryptosporidium parvum***, ***Microsporidia***, ***Cystoisospora (Isospora) belli***, *Cyclospora*.\n  - **Any CD4 count:** *Clostridioides difficile*, *Salmonella*, *Shigella*, *Campylobacter*, *Giardia*, *Entamoeba histolytica*, GI Kaposi sarcoma, or HIV enteropathy."
      },
      {
        "q": "2. At what CD4 count does CMV colitis occur, and what is its underlying pathophysiology?",
        "a": "- **Immunological Threshold:** CMV end-organ disease occurs almost exclusively in advanced AIDS when **CD4+ T-cell count falls below 50 cells/mm³**.\n- **Pathogenesis:** Reactivation of latent **Cytomegalovirus (HHV-5)** infects colonic vascular endothelial cells -> causes **obliterative vasculitis**, mucosal ischemia, and deep focal or diffuse **colonic ulcerations** -> presents with persistent watery or bloody diarrhea, crampy abdominal pain, fever, and weight loss."
      },
      {
        "q": "3. Which specific investigation CONFIRMS the diagnosis of CMV colitis, and why are CMV IgG and stool tests insufficient?",
        "a": "- **Gold Standard Confirmatory Test:** **Colonoscopy (or flexible sigmoidoscopy) with mucosal biopsy**.\n  - **Endoscopic findings:** Erythematous, friable mucosa with **deep punched-out or diffuse colonic ulcers**.\n  - **Histopathology (Diagnostic):** Enlarged cytomegalic endothelial/stromal cells containing characteristic **basophilic intranuclear \"owl's eye\" inclusion bodies**, confirmed by **CMV immunohistochemistry (IHC)**.\n- **Why Other Tests Do NOT Confirm CMV Colitis:**\n  - **Serum CMV IgG:** Only reflects prior latent exposure (positive in >80–90% of HIV adults).\n  - **Serum CMV PCR / Antigenemia:** Detects viremia, not definitive colonic tissue invasion (and can be negative in localized colitis).\n  - **Stool CMV culture/antigen:** Poor sensitivity and specificity.\n- **Routine Parallel Workup:** Stool microscopy (including **modified acid-fast stain** for *Cryptosporidium*/*Cystoisospora*), stool bacterial cultures, *C. difficile* toxin/NAAT, blood mycobacterial cultures (for MAC), and CD4 count/HIV viral load."
      },
      {
        "q": "4. What is the first-line antiviral and holistic HIV management for confirmed CMV colitis?",
        "a": "1. **First-Line Anti-CMV Therapy:**\n   - **IV Ganciclovir 5 mg/kg every 12 hours** for **21–42 days** (or until symptoms resolve); once clinically improving and tolerating oral absorption, may transition to **Oral Valganciclovir 900 mg BID**.\n   - **Alternative (if ganciclovir-resistant or severe neutropenia/bone marrow suppression):** **IV Foscarnet 90 mg/kg q12h** (monitor renal function and electrolytes).\n2. **Antiretroviral Therapy (ART):** Initiate or optimize **first-line ART** (e.g., **TDF + FTC/3TC + Dolutegravir**) to restore CD4 counts and achieve durable viral suppression.\n3. **Supportive Care:** Oral/IV fluid and electrolyte replacement and nutritional support."
      },
      {
        "q": "5. What dangerous local and systemic complications must be screened for and monitored in this patient?",
        "a": "1. **Concurrent CMV Retinitis (MANDATORY):** Perform an urgent **dilated fundoscopic eye examination** in all patients with CMV colitis (both occur at CD4 <50 cells/mm³; retinal hemorrhage/exudates [\"pizza-pie\" retina] risk irreversible blindness).\n2. **Surgical Colonic Complications:** **Colonic perforation**, massive lower GI hemorrhage, and **toxic megacolon**.\n3. **Drug Toxicity:** Monitor CBC twice weekly for **Ganciclovir-induced myelosuppression (neutropenia, thrombocytopenia)**."
      }
    ]
  },
  {
    "id": 65,
    "title": "حالة 65: Giardiasis (Giardia lamblia)",
    "topic": "Giardiasis (Giardia lamblia)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 19-year-old student presents with a 15-week history of diarrhea. He has lost 2 kg in weight and has no recent travel abroad. A smear of a duodenal biopsy reveals many trophozoites.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which clinical and biopsy features in this case justify your choice?",
        "a": "- **Most likely diagnosis:** **Chronic Giardiasis (*Giardia lamblia* / *Giardia duodenalis*)**.\n- **Justifying features:**\n  1. **Prolonged non-bloody malabsorptive diarrhea** (15 weeks) with **2 kg weight loss**.\n  2. **Cosmopolitan distribution** — does NOT require foreign travel (acquired domestically via contaminated water, food handlers, or fecal-oral contact).\n  3. **Duodenal biopsy smear demonstrating numerous trophozoites** (duodenum/upper jejunum is the exact habitat of *Giardia*)."
      },
      {
        "q": "2. Describe the morphology, habitat, transmission, and pathophysiology of *Giardia lamblia*.",
        "a": "- **Organism & Habitat:** Flagellated intestinal protozoan inhabiting the **duodenum and upper small intestine**.\n- **Two Stages:**\n  - **Cyst (Infective & Diagnostic stage):** Oval, thick-walled, **4 nuclei** at one pole with axostyles; **resistant to standard water chlorination**.\n  - **Trophozoite (Diagnostic stage seen on duodenal smear):** **Pear-shaped** (\"old man's face\" / kite-shaped), bilaterally symmetrical with **2 nuclei, 2 ventral sucking discs, 2 axostyles, and 4 pairs of flagella**.\n- **Transmission:** Fecal-oral ingestion of cysts in contaminated water/food, via flies/food handlers, or person-to-person.\n- **Pathophysiology:** Trophozoites attach tightly to duodenal enterocytes via ventral sucking discs (without tissue invasion) -> villous blunting, brush-border disaccharidase deficiency -> **greasy, foul-smelling, floating stools (steatorrhea)**, flatulence, bloating, and weight loss."
      },
      {
        "q": "3. What are the standard non-invasive confirmatory diagnostic investigations for Giardiasis?",
        "a": "1. **Stool Antigen Detection (ELISA / Direct Fluorescent Antibody [DFA]) or Multiplex Stool PCR (NAAT):** Highest sensitivity (>90–95%) and specificity — preferred non-invasive diagnostic test.\n2. **Stool Microscopy for Ova & Parasites (O&P):** Requires **3 serial stool specimens** on alternate days because cyst excretion is intermittent (trophozoites appear mainly in acute liquid stools; cysts in formed stools).\n3. **Duodenal Aspirate / Biopsy or String Test (Entero-Test):** Reserved for persistent unexplained chronic diarrhea when stool studies are negative (as performed in this case)."
      },
      {
        "q": "4. What is the best first-line treatment option and key alternatives (including in pregnancy)?",
        "a": "- **First-Line Regimens:**\n  - **Oral Metronidazole 250 mg TID for 5–7 days** (or 500 mg BID for 5–7 days) — classic exam drug of choice (advise avoiding alcohol due to disulfiram-like reaction).\n  - **Oral Tinidazole 2 g single dose** (highest single-dose cure rate >90%, better tolerated).\n  - **Oral Nitazoxanide 500 mg BID for 3 days** (effective alternative, especially in children).\n- **Special Population — Pregnancy (1st Trimester):** **Oral Paromomycin** (non-absorbable aminoglycoside, 500 mg TID for 7 days) is preferred to avoid systemic nitroimidazole exposure early in pregnancy."
      },
      {
        "q": "5. What underlying immunodeficiency and post-infectious complication should be considered in chronic/recurrent Giardiasis?",
        "a": "1. **Selective IgA Deficiency / Common Variable Immunodeficiency (CVID):** Secretory IgA is essential for mucosal clearance of *Giardia*; check serum immunoglobulins in patients with severe, prolonged (15 weeks), or recurrent giardiasis.\n2. **Secondary Lactose Intolerance:** Common even after parasitological cure due to brush-border lactase depletion — advise temporary lactose-free diet if bloating/loose stools persist.\n3. **Prevention:** Boil or filter drinking water during camping/outbreaks (chlorination alone is insufficient to kill cysts), strict hand hygiene, and sanitary disposal of sewage."
      }
    ]
  },
  {
    "id": 66,
    "title": "حالة 66: Intestinal & Cavitary Pulmonary Tuberculosis",
    "topic": "Intestinal & Cavitary Pulmonary Tuberculosis",
    "category": "Tuberculosis (TB)",
    "scenario": "A 47-year-old man was admitted with right flank and right iliac fossa pain of 1 month's duration. He described weight loss, night sweats, fever, and an intermittent nonproductive cough on direct questioning. Chest radiograph showed right upper lobe and left mid-zone infiltration. The left cardiac border was indistinct. Small cavities were visible in both infiltrates.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which clinical and radiological clues justify your choice?",
        "a": "- **Most likely diagnosis:** **Intestinal (Ileocecal) Tuberculosis secondary to Active Cavitary Pulmonary Tuberculosis**.\n- **Justifying features:**\n  1. **1-month right iliac fossa (RIF) & right flank pain:** The **ileocecal region** is the most common site of gastrointestinal TB (due to abundant Peyer's patches, physiologic stasis, and high absorptive surface).\n  2. **Constitutional B-symptoms:** Weight loss, drenching night sweats, fever, and chronic cough.\n  3. **Pathognomonic Chest X-ray:** **Right upper lobe (RUL)** and left mid-zone/lingular (indistinct left cardiac border = silhouette sign) **infiltrates with cavitation** — classic reactivation (post-primary) pulmonary TB.\n- **Differential Diagnosis for RIF pain + constitutional symptoms:** Crohn's disease (critical mimic — NEVER start steroids/anti-TNF before excluding TB!), cecal/colorectal carcinoma, ameboma, and intestinal lymphoma."
      },
      {
        "q": "2. Explain the pathophysiology linking cavitary pulmonary TB to ileocecal involvement.",
        "a": "- **Why Upper Lobe Cavitation?** *Mycobacterium tuberculosis* is a **strict aerobe**; high oxygen tension and lower lymphatic drainage in the apical/upper lobes favor reactivation, caseous liquefaction, and **cavitation** (creating a high bacillary load).\n- **Route to the Intestine:** Expectorated mycobacteria-laden sputum from open pulmonary cavities is **swallowed** into the GI tract (or spreads hematogenously/via infected unpasteurized milk with *M. bovis*).\n- **Intestinal Pathology:** Bacilli invade ileocecal Peyer's patches -> **caseating granulomas** (epithelioid cells + Langhans giant cells + central caseation) -> transverse circumferential mucosal ulcers, bowel wall thickening, fibrotic strictures, and enlarged necrotic mesenteric lymph nodes."
      },
      {
        "q": "3. What are the definitive confirmatory investigations for both his pulmonary and intestinal disease?",
        "a": "- **Pulmonary Confirmation (Priority):**\n  1. **Three morning sputum specimens** (at least one early morning) for **Ziehl-Neelsen (Acid-Fast Bacilli / AFB) smear**.\n  2. **GeneXpert MTB/RIF (NAAT):** Detects *M. tuberculosis* DNA AND **Rifampicin resistance** within < 2 hours.\n  3. **Mycobacterial Culture (Gold Standard):** Solid **Löwenstein-Jensen medium** (4–8 weeks) or liquid **MGIT culture** (1–3 weeks) for definitive confirmation and full Drug Susceptibility Testing (DST).\n- **Intestinal Evaluation:**\n  1. **Contrast-enhanced CT Abdomen:** Demonstrates ileocecal wall thickening, mesenteric lymphadenopathy with central necrosis, and excludes abscess/obstruction.\n  2. **Colonoscopy with Ileocecal Biopsy:** Histology shows **caseating granulomas**, AFB stain, and tissue TB PCR/culture (crucial to exclude Crohn's disease or malignancy).\n- **Mandatory Baseline Tests:** **HIV serology**, baseline LFTs, renal function, CBC, and baseline visual acuity/color vision."
      },
      {
        "q": "4. What is the first-line anti-tuberculosis regimen, its duration, and key drug toxicities to monitor?",
        "a": "- **Standard Short-Course Regimen (6 months total) under Directly Observed Therapy (DOT):**\n  - **Intensive Phase (2 months — RIPE / HRZE):** **Isoniazid (INH) + Rifampicin (RIF) + Pyrazinamide (PZA) + Ethambutol (EMB)**.\n  - **Continuation Phase (4 months — HR):** **Isoniazid (INH) + Rifampicin (RIF)**.\n- **Essential Adjunct & Toxicity Monitoring:**\n  - **INH:** Hepatotoxicity & **peripheral neuropathy** -> ALWAYS co-prescribe **Pyridoxine (Vitamin B6, 25–50 mg/day)**.\n  - **RIF:** Hepatotoxicity, **orange-red body secretions**, potent CYP450 inducer.\n  - **PZA:** Hepatotoxicity, **hyperuricemia / gouty arthralgia**.\n  - **EMB:** **Optic neuritis** (red-green color blindness, ↓ visual acuity — monitor vision).\n  - *Note:* Use a **multi-drug regimen + DOT** strictly to prevent **MDR-TB** (resistance to INH + RIF)."
      },
      {
        "q": "5. What Infection Prevention & Control (IPC) precautions are mandatory right now, and what GI complications can occur?",
        "a": "- **Mandatory Airborne Precautions (Cavitary Pulmonary TB = Highly Infectious):**\n  - Isolate immediately in a **negative-pressure Airborne Infection Isolation Room (AIIR)**.\n  - Healthcare workers MUST wear a fit-tested **N95 (or higher) respirator**, eye protection, gloves, and gown (patient wears a surgical mask during any essential transport).\n  - Maintain isolation until clinical improvement, ≥ 2 weeks of effective anti-TB therapy, and **3 consecutive negative sputum AFB smears**.\n- **GI Complications to Watch For:** Fibrotic **intestinal obstruction** (may worsen paradoxically during healing), bowel perforation, GI bleeding, malabsorption, and tuberculous peritonitis/ascites."
      }
    ]
  },
  {
    "id": 67,
    "title": "حالة 67: Catheter-Associated Urinary Tract Infection (CAUTI)",
    "topic": "Catheter-Associated Urinary Tract Infection (CAUTI)",
    "category": "Other Infections & Parasites",
    "scenario": "A 53-year-old man is evaluated in the hospital for fever. He underwent elective coronary artery bypass graft surgery 2 days ago, and a urinary catheter was inserted in the operating room. Medical history is unremarkable, and he takes no medications. On physical examination, temperature is 38.4°C, blood pressure is 130/84 mmHg, pulse rate is 88/min, and respiration rate is 18/min. Lungs are clear to auscultation, and the sternotomy incision site is clean and dry. He has mild suprapubic tenderness with no costovertebral angle or flank tenderness. Urinalysis reveals 10 to 20 leukocytes/hpf, and urine culture reveals >400 colonies of Gram-negative rods. Chest radiograph shows no infiltrate.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which clinical and laboratory findings establish it?",
        "a": "- **Most likely diagnosis:** **Symptomatic Catheter-Associated Urinary Tract Infection (CAUTI)** — a **Hospital-Acquired / Nosocomial Infection (HAI)**.\n- **Justifying features:**\n  1. Indwelling urinary catheter inserted 48 hours ago during CABG.\n  2. New-onset **fever (38.4°C)** and **mild suprapubic tenderness** (lower urinary tract localization; absence of CVA/flank tenderness makes acute pyelonephritis less likely).\n  3. **Pyuria (10–20 WBCs/hpf)** and **Gram-negative rods** on urine culture.\n  4. **Exclusion of other postoperative fever sources:** Clear lungs and normal CXR (rules out pneumonia/atelectasis) and clean, dry sternotomy wound (rules out surgical site infection)."
      },
      {
        "q": "2. What are the most common causative organisms and pathogenesis of CAUTI?",
        "a": "- **Causative Pathogens:**\n  - ***Escherichia coli*** (most common overall).\n  - Other **hospital-acquired Gram-negative bacilli**: *Klebsiella pneumoniae*, *Proteus mirabilis*, *Enterobacter* spp., and ***Pseudomonas aeruginosa*** (higher multidrug resistance in hospitalized/post-op patients).\n  - Gram-positive cocci (*Enterococcus* spp.) and *Candida* spp. (especially with prolonged catheterization/antibiotics).\n- **Pathogenesis:** **Ascending infection** via two pathways — **extraluminal** (bacteria migrate along the outer catheter surface in a protective **biofilm**, accounting for ~66% of cases) or **intraluminal** (contamination of the drainage bag/tubing)."
      },
      {
        "q": "3. How do you distinguish Symptomatic CAUTI from Asymptomatic Catheter-Associated Bacteriuria?",
        "a": "- **Symptomatic CAUTI (Requires Treatment):** Presence of **symptoms/signs compatible with UTI** (fever with no other identified source, suprapubic tenderness, CVA tenderness, rigors, or acute delirium) PLUS **significant bacteriuria** (≥ 10³ CFU/mL in a catheterized patient).\n- **Asymptomatic Bacteriuria (Do NOT Treat):** Positive urine culture (with or without pyuria) in a catheterized patient with **NO fever or urinary symptoms**.\n  - *High-yield OSCE rule:* Pyuria alone is common in catheterized patients due to mechanical irritation and is **NOT an indication for antibiotics** unless symptomatic (exceptions for treating asymptomatic bacteriuria: **pregnancy** and **prior to invasive mucosal-bleeding urologic procedures**)."
      },
      {
        "q": "4. In addition to removing the urinary catheter, what is the immediate and definitive management?",
        "a": "1. **Remove the Urinary Catheter Immediately:** Essential to eliminate the bacterial biofilm (if ongoing catheterization is strictly needed, insert a fresh catheter and obtain urine culture from the new catheter).\n2. **Begin Empirical Antimicrobial Therapy NOW (Do NOT wait for full sensitivities):**\n   - Because this post-CABG patient is **febrile and symptomatic**, start immediate broad-spectrum IV therapy covering nosocomial Gram-negative rods (e.g., **IV Ceftriaxone 1 g daily**, **IV Ciprofloxacin 400 mg q12h**, or **IV Cefepime / Piperacillin-Tazobactam** if high local ESBL/*Pseudomonas* risk).\n   - **De-escalate** to targeted oral therapy once culture susceptibilities return and patient is afebrile for 24–48 hours.\n3. **Duration:** **7 days** if prompt clinical resolution (10–14 days if delayed clinical response).\n4. **Supportive Care:** IV/oral hydration, antipyretics, and monitor for urosepsis."
      },
      {
        "q": "5. What hospital Infection Prevention & Control (IPC) bundle measures prevent CAUTI?",
        "a": "1. **Avoid unnecessary urinary catheterization** (insert only for strict medical/surgical indications).\n2. **Strict aseptic technique** and hand hygiene during catheter insertion.\n3. **Maintain a closed sterile drainage system** with unobstructed flow and keep the collection bag **below bladder level** (never resting on the floor).\n4. **Daily review of catheter necessity** with **early removal** (ideally within 24–48 hours postoperatively).\n5. **Antimicrobial stewardship** and avoiding routine screening urine cultures in asymptomatic catheterized patients."
      }
    ]
  },
  {
    "id": 68,
    "title": "حالة 68: Ascariasis (Ascaris lumbricoides) Causing Small Bowel Obstruction",
    "topic": "Ascariasis (Ascaris lumbricoides) Causing Small Bowel Obstruction",
    "category": "Other Infections & Parasites",
    "scenario": "A 45-year-old man presents to the emergency department with nausea, vomiting, and abdominal pain. He states that the symptoms are worse with eating, and that his abdominal pain has been increasing over the past three to four months. He reports a history of travel to a parasite-endemic area five months ago. After that, he developed a cough associated with mild shortness of breath, which he attributed to a viral respiratory infection, as it resolved shortly thereafter. His physical examination is significant for moderate periumbilical tenderness. His laboratory results are significant for an eosinophil count of 20 percent. A CT of the abdomen and pelvis shows small bowel dilation proximal to a whirlpool-like mass in the mid-jejunum causing intestinal obstruction.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and how does the 5-month timeline explain every finding in this case?",
        "a": "- **Most likely diagnosis:** **Intestinal Ascariasis (*Ascaris lumbricoides*) complicated by Small Bowel Obstruction (SBO)**.\n- **Justifying Timeline & Clues:**\n  1. **5 months ago:** Travel to a parasite-endemic area -> ingestion of embryonated *Ascaris* eggs.\n  2. **Early transient cough + mild shortness of breath:** Classic **Löffler syndrome (eosinophilic pneumonitis)** caused by larval migration through the lungs (~1–2 weeks post-infection).\n  3. **20% Peripheral Eosinophilia:** Hallmark host Th2 immune response to tissue-migrating helminths.\n  4. **3–4 months of worsening postprandial pain -> SBO with a \"whirlpool-like\" mid-jejunal mass on CT:** Adult worms (15–35 cm long) mature in the jejunum/ileum and tangle into a physical obstructing **worm bolus**."
      },
      {
        "q": "2. Outline the life cycle of *Ascaris lumbricoides* and its infective and diagnostic stages.",
        "a": "- **Organism:** Largest human intestinal nematode (roundworm).\n- **Infective Stage:** **Embryonated eggs** ingested via fecal-oral contamination (unwashed vegetables, contaminated soil/water).\n- **Life Cycle:** Ingested eggs hatch in the small intestine -> larvae penetrate the intestinal wall -> travel via **portal vein -> liver -> right heart -> pulmonary capillaries** -> penetrate alveoli (**Löffler syndrome**) -> ascend bronchi/trachea -> **swallowed back into the small intestine** -> mature into adult male/female worms over 2–3 months (adults live 1–2 years in the jejunum/ileum).\n- **Diagnostic Stage:** Characteristic **fertilized or unfertilized eggs** passed in feces (or adult worms passed per rectum/vomited)."
      },
      {
        "q": "3. What confirmatory laboratory and radiological findings support the diagnosis?",
        "a": "1. **Stool Microscopy for Ova & Parasites (Definitive):** Demonstrates oval, golden-brown, thick-shelled fertilized eggs with a characteristic bumpy outer **mammillated (corticated) albuminoid coat** (unfertilized eggs are elongated and thinner).\n2. **CBC:** Marked **peripheral eosinophilia** (peaks during the pulmonary migration phase; often remains elevated).\n3. **Abdominal CT / Ultrasound / Plain X-ray:** Shows proximal small bowel dilatation with air-fluid levels and intraluminal **\"whirlpool-like\" tangled worm mass** (tubular/\"railway-track\" filling defects).\n4. **Sputum / Chest X-ray (during acute pulmonary phase):** Migratory transient pulmonary infiltrates on CXR; sputum may show larvae and Charcot-Leyden crystals."
      },
      {
        "q": "4. What is the immediate surgical and medical management for *Ascaris*-induced small bowel obstruction?",
        "a": "1. **Immediate Stabilization & Conservative Management (for partial/uncomplicated SBO):**\n   - **NPO (bowel rest)**, **IV fluid resuscitation** & electrolyte correction, and **nasogastric (NG) tube decompression**.\n2. **Antihelminthic Therapy:**\n   - **First-line:** **Oral Albendazole 400 mg single dose** OR **Oral Mebendazole 100 mg BID for 3 days** (or 500 mg single dose) — given once acute obstruction stabilizes/resolves (in **pregnancy**: **Pyrantel pamoate** 11 mg/kg single dose; **Piperazine** causes flaccid worm paralysis and is classically useful in partial worm obstruction so worms pass smoothly without spastic tangling).\n3. **Indications for Urgent Laparotomy (Surgery):** Failure of conservative therapy within 24–48 hours, complete obstruction, signs of **bowel ischemia/strangulation, volvulus, intussusception, or perforation** (perform enterotomy and worm extraction or gently milk worms into the colon)."
      },
      {
        "q": "5. What other serious GI/hepatobiliary complications can *Ascaris lumbricoides* cause, and how is it prevented?",
        "a": "- **Other Complications:**\n  1. **Biliary Ascariasis:** Adult worms migrate into the ampulla of Vater/common bile duct -> RUQ pain, obstructive jaundice, **acute ascending cholangitis**, or **acute pancreatitis** (diagnosed on US/ERCP and extracted via **ERCP**).\n  2. **Acute appendicitis**, **volvulus**, **intussusception**, and **malnutrition/growth stunting** in children.\n- **Prevention:** Improved sanitation, avoiding use of untreated human feces as agricultural fertilizer, thorough washing/peeling of raw fruits and vegetables, and hand hygiene before eating."
      }
    ]
  },
  {
    "id": 69,
    "title": "حالة 69: Malaria Chemoprophylaxis & Travel Medicine (Nigeria)",
    "topic": "Malaria Chemoprophylaxis & Travel Medicine (Nigeria)",
    "category": "Malaria & Vector-Borne",
    "scenario": "A 19-year-old man plans on traveling to Nigeria. He comes to the clinic interested in travel advice and any vaccinations he may need. He has no medical history and takes no medications.",
    "questions": [
      {
        "q": "1. What is the #1 life-threatening vector-borne infectious risk for a non-immune traveler to Nigeria, and why is Chloroquine NOT recommended?",
        "a": "- **Primary Risk:** **Chloroquine-resistant *Plasmodium falciparum* malaria** (accounts for **> 99% of malaria cases in West Africa / Nigeria**; transmitted by nighttime-biting **female *Anopheles* mosquitoes**).\n- **Why Chloroquine Is Ineffective:** Widespread *P. falciparum* **chloroquine resistance** exists across sub-Saharan Africa (chloroquine is only effective in parts of Central America/Haiti/Dominican Republic).\n- **Clinical Danger in Non-Immune Travelers:** Rapid progression to **severe malaria**, including **cerebral malaria** (microvascular sequestration of *pfEMP1*-expressing infected RBCs), **blackwater fever** (massive intravascular hemolysis & hemoglobinuria), acute kidney injury, hypoglycemia, and death."
      },
      {
        "q": "2. Which specific Malaria Chemoprophylaxis regimens are recommended for Nigeria, with exact dosing schedules?",
        "a": "Choose ONE of the following first-line agents for chloroquine-resistant *P. falciparum*:\n1. **Mefloquine (250 mg PO once weekly):**\n   - Start **2–3 weeks before** entering Nigeria -> **once weekly** during stay -> **once weekly for 4 weeks** after leaving.\n   - *Contraindications:* Neuropsychiatric history (depression, psychosis), seizures, or cardiac conduction abnormalities.\n2. **Atovaquone-Proguanil / Malarone (250/100 mg PO once daily with food):**\n   - Start **1–2 days before** travel -> **daily** during stay -> **daily for 7 days** after leaving.\n   - *Advantage:* Best tolerated, shortest post-travel duration (ideal for short trips).\n3. **Doxycycline (100 mg PO once daily):**\n   - Start **1–2 days before** travel -> **daily** during stay -> **daily for 28 days** after leaving.\n   - *Precautions:* Stay upright ≥ 1–2 hours after taking with water (prevents **pill esophagitis**); use sunscreen (**photosensitivity**); contraindicated in pregnancy and children < 8 years.\n- *Exam Trap:* **Primaquine** is NOT used as primary prophylaxis for *P. falciparum* in Africa (used for *P. vivax/ovale* radical cure/hypnozoites after G6PD testing), and **Atovaquone alone** is never used without Proguanil."
      },
      {
        "q": "3. What non-pharmacological vector-avoidance measures must be emphasized alongside chemoprophylaxis?",
        "a": "1. **Insect Repellents:** Apply **DEET (20–50%)** or picaridin on exposed skin.\n2. **Insecticide-Treated Bed Nets:** Sleep under **permethrin-impregnated mosquito nets** and stay in screened or air-conditioned rooms.\n3. **Behavioral & Clothing Precautions:** Limit outdoor exposure during peak *Anopheles* feeding hours (**dusk to dawn**); wear light-colored long-sleeved shirts and trousers; avoid perfumes/colognes.\n4. **Strict Adherence:** Emphasize that no prophylaxis is 100% effective — vector avoidance and completing the post-travel drug course are mandatory."
      },
      {
        "q": "4. Which travel vaccinations should be recommended before traveling to Nigeria?",
        "a": "1. **Yellow Fever Vaccine (MANDATORY):** Live-attenuated vaccine required for travel to Nigeria (International Certificate of Vaccination becomes valid **10 days** after administration).\n2. **Meningococcal Quadrivalent (MenACWY) Vaccine:** Nigeria lies within the **sub-Saharan African Meningitis Belt** (especially high risk during dry season, Dec–June).\n3. **Enteric & Bloodborne Vaccines:** **Hepatitis A**, **Typhoid fever**, **Hepatitis B**, and **Polio booster** (IPV).\n4. **Routine & Conditional Vaccines:** Verify up-to-date **Tdap (Tetanus)** and **MMR**; consider **Rabies pre-exposure vaccination** if prolonged rural stay or animal contact is anticipated."
      },
      {
        "q": "5. What crucial post-travel warning (\"red flag\") advice must you give him before departure?",
        "a": "- **Emergency Fever Rule:** Any unexplained **fever, chills, headache, or flu-like illness** occurring during travel or up to **1 year after returning** (most *P. falciparum* presents within **7–30 days**) is a **medical emergency** — even if he took chemoprophylaxis!\n- **Required Action:** Seek immediate medical evaluation, report recent travel to Nigeria, and undergo urgent **Thick and Thin Blood Films** (gold standard: thick for detection, thin for species & % parasitemia) plus **Malaria Rapid Diagnostic Test (RDT)**; never use the same prophylactic drug to treat breakthrough malaria."
      }
    ]
  },
  {
    "id": 70,
    "title": "حالة 70: Rabies & Tetanus Post-Exposure Prophylaxis (Bat Bite)",
    "topic": "Rabies & Tetanus Post-Exposure Prophylaxis (Bat Bite)",
    "category": "Rabies & Animal Exposure",
    "scenario": "A 23-year-old previously healthy female letter carrier works in an area where the presence of rabid foxes has been documented. She is bitten by a bat, which then flies away. Initial examination reveals a clean break in the skin on the right upper forearm. She has no history of receiving treatment for rabies and is unsure about vaccination against tetanus.",
    "questions": [
      {
        "q": "1. How do you classify this animal exposure, and why is immediate intervention a life-saving emergency?",
        "a": "- **Classification:** **WHO Category III Rabies Exposure** — a transdermal bite causing a break in the skin from an uncaptured wild **bat** (high-risk wildlife reservoir, cannot be observed for 10 days) in a rabies-endemic area.\n- **Clinical Urgency:** Once clinical neurological rabies develops, the disease is **virtually 100% fatal**; therefore, complete **immediate Post-Exposure Prophylaxis (PEP)** for BOTH **Rabies** and **Tetanus** is mandatory on Day 0."
      },
      {
        "q": "2. Is there viremia in Rabies? Explain the pathogenesis and the pathognomonic histopathological finding.",
        "a": "- **Is there viremia? NO!** Rabies virus (*Lyssavirus*, Rhabdoviridae) **does NOT spread via the bloodstream**.\n- **Pathogenesis:** Virus is inoculated into tissue via rabid saliva -> replicates locally in striated muscle cells -> binds **nicotinic acetylcholine receptors** at the neuromuscular junction -> ascends via **retrograde axonal transport** along peripheral nerves to the dorsal root ganglia, spinal cord, and brain -> causes fatal encephalomyelitis (hydrophobia, aerophobia, hypersalivation, agitation, or ascending paralysis) -> spreads centrifugally to salivary glands.\n- **Pathognomonic Histopathology:** **Negri bodies** — eosinophilic, intracytoplasmic inclusion bodies found classically in **hippocampal pyramidal neurons** and **cerebellar Purkinje cells**."
      },
      {
        "q": "3. What are the EXACT 4 immediate management steps the physician MUST perform right now?",
        "a": "1. **Immediate Thorough Wound Care (Step #1 — Most Important):** Vigorously wash and flush the forearm bite with **20% soap solution and running water** for at least **15 minutes**, followed by irrigation with a virucidal agent (**povidone-iodine**). Avoid tight primary suturing if possible.\n2. **Passive Rabies Immunization — Human Rabies Immune Globulin (HRIG, 20 IU/kg):** Infiltrate the **full calculated dose around and into the wound** to neutralize virus locally; inject any remaining volume **IM at an anatomical site distant** from the rabies vaccine (never in the same syringe or same limb).\n3. **Active Rabies Immunization — Human Diploid Cell Vaccine (HDCV) or PCECV (1.0 mL IM):** Give **4 doses on Days 0, 3, 7, and 14** into the **deltoid muscle** (NEVER the gluteal region — gluteal injection causes lower neutralizing antibody titers!). *(A 5th dose on Day 28 is added only for immunocompromised patients.)*\n4. **Tetanus Prophylaxis:** Because she is **unsure of her tetanus vaccination history**, administer **Tetanus Toxoid (Tdap/Td IM)** immediately (and complete the 3-dose primary series; if the bite is considered tetanus-prone/contaminated with unknown status, also administer **Tetanus Immune Globulin [TIG]** at a separate site)."
      },
      {
        "q": "4. How would Rabies PEP change if this patient had previously completed a full Rabies vaccination series?",
        "a": "- **Wound Care:** Still perform immediate thorough cleansing with soap, water, and povidone-iodine.\n- **HRIG:** **DO NOT administer Rabies Immune Globulin (RIG)** (passive antibodies can blunt the anamnestic booster response).\n- **Rabies Vaccine:** Administer only **2 booster doses** of HDCV/PCECV (1.0 mL IM in the deltoid) on **Days 0 and 3**."
      },
      {
        "q": "5. What are the hallmark clinical stages if Rabies PEP is missed and clinical disease develops?",
        "a": "1. **Incubation Period:** Usually 1–3 months (shorter with bites on the face/head or densely innervated sites).\n2. **Prodromal Phase (2–10 days):** Fever, malaise, headache, and characteristic **paresthesia/pain/pruritus at the healed bite site**.\n3. **Acute Neurological Phase:**\n   - **Furious (Encephalitic) Rabies (~80%):** Hyperactivity, agitation, **hydrophobia** (painful pharyngeal/laryngeal spasms triggered by attempting to drink water), **aerophobia**, and **excessive salivation**.\n   - **Paralytic (Dumb) Rabies (~20%):** Ascending flaccid paralysis mimicking Guillain-Barré syndrome.\n4. **Coma & Death:** Cardiorespiratory failure within days."
      }
    ]
  },
  {
    "id": 71,
    "title": "حالة 71: Brucellosis (Undulant Fever — Occupational Exposure)",
    "topic": "Brucellosis (Undulant Fever — Occupational Exposure)",
    "category": "Brucellosis",
    "scenario": "A 29-year-old male butcher presents to the outpatient clinic with fever characterized by periods of fever followed by afebrile periods, associated with profuse sweating and back pain. His CBC shows mild anemia and leukocytosis.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which clinical features in this case justify your choice?",
        "a": "- **Most likely diagnosis:** **Brucellosis (Malta Fever / Mediterranean Fever / Undulant Fever)**.\n- **Justifying clinical features:**\n  1. **High-risk occupation:** **Butcher** (direct contact with infected cattle/sheep carcasses and blood).\n  2. **Classic undulating/relapsing fever pattern:** Periods of fever alternating with afebrile intervals.\n  3. **Profuse sweating** (characteristically foul/\"wet hay\" odor) and **back pain** (classic osteoarticular localization — sacroiliitis or spondylitis).\n- **Differential Diagnosis:** Enteric (Typhoid) fever, Tuberculosis (Pott's disease), Malaria, Infective endocarditis, and Lymphoma."
      },
      {
        "q": "2. What are the modes of transmission, causative species, and high-risk occupational groups?",
        "a": "- **Causative Organism:** *Brucella* species — small, aerobic, Gram-negative, facultative **intracellular** coccobacilli (**LPS endotoxin** is the main virulence factor):\n  - ***Brucella melitensis*** (sheep & goats — most common and most severe in humans).\n  - ***Brucella abortus*** (cattle).\n  - ***Brucella suis*** (pigs — prolonged, suppurative, destructive lesions).\n- **Modes of Transmission:**\n  1. **Ingestion of unpasteurized milk or dairy products** (most common route globally).\n  2. **Direct contact through skin abrasions or conjunctiva** with infected animal tissues, blood, urine, or placenta (**most relevant to this butcher**).\n  3. **Inhalation of infectious aerosols** (abattoirs, microbiology laboratories).\n- **High-Risk Groups:** Butchers, farmers, shepherds, veterinarians, slaughterhouse workers, and laboratory technicians."
      },
      {
        "q": "3. What are the confirmatory investigations, and give a short note on the Standard Tube Agglutination (STA / Wright) test?",
        "a": "1. **Serology — Standard Tube Agglutination (STA / Wright / Malta test) [Most Common Test]:**\n   - Detects **IgM and IgG antibodies** against *Brucella* smooth LPS antigen.\n   - Becomes positive within **1–2 weeks** of onset.\n   - **Diagnostic Titer:** Single titer **≥ 1:160** (**≥ 1:320** in endemic areas like Egypt) OR a **≥ 4-fold rise** in paired sera 2–4 weeks apart.\n   - *OSCE Pitfall:* Watch for the **prozone phenomenon** (false-negative at low serum dilutions due to antibody excess -> overcome by higher dilutions) and blocking antibodies.\n2. **Direct Microbiological Culture (Most Accurate / Gold Standard):**\n   - **Bone Marrow Culture:** Highest sensitivity (**> 90%**), even after antibiotics.\n   - **Blood Culture:** Inoculated on **Castaneda biphasic medium** or automated BACTEC (requires prolonged incubation up to 3–4 weeks; **notify lab** due to BSL-3 aerosol risk).\n3. **Imaging for Back Pain:** **MRI of the lumbosacral spine / sacroiliac joints** to evaluate for brucellar spondylitis or sacroiliitis."
      },
      {
        "q": "4. What is the core principle and first-line treatment regimen for Brucellosis (including children and pregnancy)?",
        "a": "- **Hawari OSCE Golden Principle:** **\"Combination therapy with intracellular-penetrating drugs for a long duration (≥ 6 weeks)\"** — monotherapy causes unacceptably high relapse rates because *Brucella* survives inside macrophages.\n- **First-Line Adult Regimens (Uncomplicated — 6 weeks):**\n  - **Oral Doxycycline 100 mg BID + Oral Rifampicin 600–900 mg daily for 6 weeks**, OR\n  - **Oral Doxycycline 100 mg BID (6 weeks) + IM Streptomycin 1 g daily (2–3 weeks) or IV/IM Gentamicin 5 mg/kg/day (7–14 days)** (lower relapse rate; preferred if **spondylitis** is confirmed, extending Doxycycline ± Rifampicin to **3 months**).\n- **Special Populations:**\n  - **Children < 8 years:** **Oral Co-trimoxazole (TMP-SMX) + Rifampicin** for 6 weeks (avoid Doxycycline).\n  - **Pregnancy:** **Oral Rifampicin ± TMP-SMX** (avoid Doxycycline and Streptomycin)."
      },
      {
        "q": "5. What are the major complications of Brucellosis?",
        "a": "1. **Osteoarticular (#1 — up to 40% of cases):** **Sacroiliitis**, **lumbar spondylitis**, and peripheral large-joint arthritis (directly relevant to this butcher's back pain).\n2. **Genitourinary:** **Epididymo-orchitis** (most common focal genitourinary complication in men).\n3. **Cardiovascular:** **Brucella Endocarditis** (rare [<2%], usually aortic valve, but the **#1 cause of mortality** from brucellosis).\n4. **CNS:** **Neurobrucellosis** (lymphocytic meningitis, encephalitis, cranial nerve palsies).\n5. **Reticuloendothelial:** Granulomatous hepatitis, hepatosplenomegaly, and pancytopenia."
      }
    ]
  },
  {
    "id": 72,
    "title": "حالة 72: Brucellosis (Brucella melitensis from Unpasteurized Cheese)",
    "topic": "Brucellosis (Brucella melitensis from Unpasteurized Cheese)",
    "category": "Brucellosis",
    "scenario": "A 30-year-old man returns from a cheese and wine tasting holiday in Portugal. He reports eating large amounts of unpasteurized cheese. He presents complaining of fluctuating temperatures, transient pain in his joints and muscles, and excessive sweating with a peculiar \"wet hay\" smell.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and specific causative organism, and which clinical clues justify your choice?",
        "a": "- **Most likely diagnosis:** **Brucellosis (Mediterranean / Malta Fever)**.\n- **Most likely causative organism:** ***Brucella melitensis***.\n- **Justifying clinical keywords:**\n  1. **Travel to the Mediterranean/Iberian region (Portugal)** with heavy ingestion of **unpasteurized cheese** (classic goat/sheep dairy source of *B. melitensis*).\n  2. **Fluctuating (undulant) fever**.\n  3. **Transient arthralgias and myalgias**.\n  4. **Pathognomonic excessive sweating with a peculiar \"wet hay\" (moldy) odor**."
      },
      {
        "q": "2. Compare the major *Brucella* species and explain the intracellular pathogenesis of the disease.",
        "a": "- **Major *Brucella* Species:**\n  - ***B. melitensis*** (goats/sheep): **Most common and most virulent** human species worldwide.\n  - ***B. abortus*** (cattle): Milder, more chronic course.\n  - ***B. suis*** (pigs): Prolonged, suppurative, destructive abscesses.\n  - ***B. canis*** (dogs): Rare, mild illness (not detected by standard smooth-LPS STA test).\n- **Pathogenesis:** Ingested *Brucella* crosses GI mucosa -> phagocytosed by **macrophages** where it survives intracellularly (inhibits phagolysosome fusion) -> spreads via lymphatics to the **Reticuloendothelial System (RES: liver, spleen, lymph nodes, bone marrow)** -> induces a Th1 immune response forming **non-caseating granulomas** -> persistent bacteremic waves cause undulant fever, hepatosplenomegaly, lymphadenopathy, and relative bradycardia."
      },
      {
        "q": "3. What diagnostic investigations should be ordered to confirm *Brucella melitensis*?",
        "a": "1. **Brucella Serology (First-Line):** **Rose Bengal plate test** (rapid screening) followed by **Standard Tube Agglutination (STA / Wright test)** (positive at titer **≥ 1:160** in non-endemic travelers like this man, or **≥ 4-fold rise** over 2–4 weeks) or **Brucella IgM/IgG ELISA**.\n2. **Blood Cultures (Gold Standard):** Obtain 2–3 sets BEFORE antibiotics using automated systems or **Castaneda biphasic medium** (alert the microbiology lab — *Brucella* is a high-risk laboratory-acquired aerosol hazard).\n3. **Bone Marrow Culture:** Most sensitive direct test (>90%) if blood cultures are negative.\n4. **Supportive Labs:** CBC (mild anemia, leukopenia/normal WBC with relative lymphocytosis, mild thrombocytopenia) and LFTs (mildly elevated transaminases from granulomatous hepatitis)."
      },
      {
        "q": "4. What is the first-line treatment regimen for this 30-year-old man, and why is single-drug therapy avoided?",
        "a": "- **First-Line Adult Regimen (WHO / Al-Azhar Curriculum):**\n  - **Oral Doxycycline 100 mg BID + Oral Rifampicin 600–900 mg once daily for 6 weeks**, OR\n  - **Oral Doxycycline 100 mg BID (6 weeks) + IV/IM Gentamicin 5 mg/kg/day (first 7–14 days)** (or IM Streptomycin 1 g/day for 2–3 weeks).\n- **Why Combination + Long Duration (6 Weeks)?** Because *Brucella* is an **intracellular pathogen** sequestered within macrophages; monotherapy or short courses result in a **> 30% relapse rate**."
      },
      {
        "q": "5. What preventive measures and red flag complications should be discussed with the patient?",
        "a": "- **Prevention:** Strictly **pasteurize milk** and avoid **unpasteurized artisan cheeses** and raw dairy products during travel to Mediterranean, Middle Eastern, or Latin American regions; animal herd vaccination and protective gear for livestock workers.\n- **Complications to Monitor:** Sacroiliitis/spondylitis (persistent back/hip pain), **epididymo-orchitis** (testicular pain/swelling), **endocarditis** (new murmur/persistent fever), and **neurobrucellosis** (headache/meningism)."
      }
    ]
  },
  {
    "id": 73,
    "title": "حالة 73: Subacute Brucellosis with Suspected Spondylitis",
    "topic": "Subacute Brucellosis with Suspected Spondylitis",
    "category": "Brucellosis",
    "scenario": "A 58-year-old man presents with fever, chills, and back pain for the past four weeks. Two months ago, he stayed with family on a sheep farm in Cyprus. Chest X-ray and urine culture are unremarkable. Brucellosis is suspected.",
    "questions": [
      {
        "q": "1. What is the clinical stage and suspected focal complication in this 58-year-old man, and which clues support it?",
        "a": "- **Diagnosis:** **Subacute Brucellosis** complicated by suspected **Brucellar Spondylitis (Vertebral Osteomyelitis) / Sacroiliitis**.\n- **Justifying Clues:**\n  1. **Epidemiological Exposure:** Stayed on a **sheep farm in Cyprus** (Mediterranean endemic region for ***Brucella melitensis***) 2 months prior (typical incubation 2–8 weeks).\n  2. **4-week duration** of fever and chills (subacute presentation) with unremarkable CXR and urine culture (excluding pneumonia and UTI).\n  3. **Persistent back pain in a 58-year-old male:** Osteoarticular disease is the #1 focal complication of brucellosis, with **lumbar spondylitis** characteristically affecting older adults (>50 years)."
      },
      {
        "q": "2. Between Brucella Serology and Blood Cultures, which test is MOST likely to confirm the diagnosis at 4 weeks of illness?",
        "a": "- **Most Likely to Confirm Clinically at 4 Weeks:** **Brucella Serology (Standard Tube Agglutination [STA / Wright test] or IgG/IgM ELISA)** — has the **highest practical diagnostic yield (> 90–95%)** by week 4 of illness (positive at titer **≥ 1:160** or 4-fold rise), whereas blood culture sensitivity falls significantly during subacute/chronic stages or after empirical antibiotics.\n- **Role of Culture (Microbiological Gold Standard):** **Blood cultures** (Castaneda/BACTEC, sensitivity ~50–70% in acute disease, lower in subacute) and **Bone Marrow Culture** (> 90% sensitivity, most accurate direct test) should STILL be obtained before starting therapy to isolate the species and alert lab biosafety."
      },
      {
        "q": "3. What targeted imaging and cardiovascular evaluation are mandatory given his 4-week back pain?",
        "a": "1. **MRI of the Lumbosacral Spine & Sacroiliac Joints (Imaging Gold Standard):**\n   - Detects early **brucellar spondylodiscitis** (classically involves the **lumbar spine [L4–L5]**, showing anterior-superior vertebral endplate erosion [**Pedro-Pons sign**], disc space narrowing, and smaller paravertebral/epidural abscesses than TB Pott's disease).\n2. **Transthoracic / Transesophageal Echocardiography (TTE/TEE):** Indicated if a cardiac murmur, persistent bacteremia, or heart failure signs are present to exclude **Brucella infective endocarditis** (leading cause of death)."
      },
      {
        "q": "4. How does the treatment regimen for Brucellar Spondylitis differ from uncomplicated Brucellosis?",
        "a": "- **Uncomplicated Brucellosis:** 6 weeks of Doxycycline + Rifampicin (or Doxycycline + Streptomycin/Gentamicin).\n- **Brucellar Spondylitis (Complicated Osteoarticular Disease):** Requires **prolonged triple therapy for at least 3 months (12 weeks)** to prevent relapse and vertebral collapse:\n  - **Oral Doxycycline 100 mg BID (for 3 months)**\n  - **+ Oral Rifampicin 600–900 mg daily (for 3 months)**\n  - **+ IM Streptomycin 1 g daily (for first 2–3 weeks) OR IV/IM Gentamicin 5 mg/kg/day (for first 7–14 days)**.\n- **Surgical Indication:** Urgent neurosurgical decompression if spinal cord/nerve root compression, progressive neurological deficit, or large epidural abscess develops."
      },
      {
        "q": "5. What are the key infectious differential diagnoses for fever + chronic back pain after sheep-farm exposure?",
        "a": "1. **Tuberculous Spondylitis (Pott's disease):** Predominantly affects the **thoracic spine**, causes greater vertebral body destruction/gibbus deformity and large cold psoas abscesses; confirm with biopsy (caseating granulomas, AFB/GeneXpert).\n2. **Pyogenic Vertebral Osteomyelitis (*Staphylococcus aureus*):** More acute onset, high WBC/CRP, positive blood cultures.\n3. **Q Fever (*Coxiella burnetii*):** Also acquired from sheep farms (aerosols from birth products); causes prolonged fever, hepatitis, pneumonia, and culture-negative endocarditis."
      }
    ]
  },
  {
    "id": 74,
    "title": "حالة 74: Acute Meningitis with Cranial Nerve Palsies",
    "topic": "Acute Meningitis with Cranial Nerve Palsies",
    "category": "Meningitis & CNS",
    "scenario": "A 26-year-old female presented with fever, malaise, headache, and neck stiffness for the last two days.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and what are the classical clinical signs of meningeal irritation?",
        "a": "- **Most likely diagnosis:** **Acute Meningitis** (classic clinical triad: **fever, severe headache, and neck stiffness**; 95% of patients have ≥ 2 of fever, headache, neck stiffness, or altered mental status).\n- **Classical Signs of Meningeal Irritation:**\n  1. **Nuchal (Neck) Rigidity:** Resistance/pain on passive neck flexion with preserved side-to-side rotation (differentiate from functional rigidity by extending the head past the bed edge — functional neck falls with gravity).\n  2. **Kernig's Sign:** Hip and knee flexed to 90° -> inability/pain on extending the knee beyond 135° due to hamstring spasm.\n  3. **Brudzinski's Neck Sign:** Passive neck flexion causes involuntary flexion of the hips and knees.\n  - *Diagnostic Performance (Hawari Pearl):* Kernig's and Brudzinski's signs have **low sensitivity (20–30%)** but **high specificity (85–95%)**."
      },
      {
        "q": "2. Which cranial nerves are classically affected on examination in meningitis, and what is the mechanism?",
        "a": "- **Classically Affected Cranial Nerves:** **Cranial Nerves III (Oculomotor), IV (Trochlear), and VI (Abducens)** — along with **CN VII (Facial)** and **CN VIII (Vestibulocochlear)** — occur in **10–20%** of patients with acute meningitis.\n- **Mechanism:**\n  1. **Increased Intracranial Pressure (ICP):** Stretches the long intracranial course of **CN VI** (false localizing sign -> lateral rectus palsy/diplopia) or compresses **CN III** (uncal herniation -> dilated pupil, ptosis, \"down-and-out\" eye).\n  2. **Basal Meningeal Exudates & Inflammation:** Entrap cranial nerve roots exiting the brainstem (especially prominent in bacterial and tuberculous meningitis), causing ophthalmoplegia (CN III, IV, VI), facial palsy (CN VII), or sensorineural deafness (CN VIII)."
      },
      {
        "q": "3. What is the definitive diagnostic workup, and when is a CT brain required BEFORE Lumbar Puncture?",
        "a": "- **Definitive Investigation:** **Lumbar Puncture (LP)** with CSF sent in **3 tubes** (Tube 1: hematology cell count/diff; Tube 2: chemistry glucose [with paired serum glucose] & protein; Tube 3: microbiology Gram stain, culture, and PCR), plus **2 sets of blood cultures**.\n- **Indications for CT Brain BEFORE LP (to prevent herniation — \"FAILS\" criteria):**\n  - **F**ocal neurological deficit (including cranial nerve palsies if suggesting mass effect) or **papilledema**.\n  - **A**ltered mental status (**GCS < 10**) or rapidly falling GCS.\n  - **I**mmunocompromised state (HIV, transplant, chemotherapy).\n  - **L**esion / history of CNS disease (tumor, abscess, stroke).\n  - **S**eizures (new-onset within 1 week).\n- **Golden Rule:** If CT is needed before LP, draw blood cultures and **start empirical IV antibiotics & dexamethasone IMMEDIATELY** before sending the patient to CT!"
      },
      {
        "q": "4. What is the immediate empirical management for this 26-year-old immunocompetent female?",
        "a": "1. **Stabilization & Isolation:** Assess ABCDE and **GCS**, establish IV access, administer O2 if needed, and initiate **Droplet Precautions** (surgical mask, gloves, gown for 24 hours).\n2. **Immediate Empirical IV Antibiotics (Age 1 month–50 years):**\n   - **IV Ceftriaxone 2 g q12h** (or IV Cefotaxime 2 g q4–6h) **+ IV Vancomycin 15–20 mg/kg q8–12h** (covers *S. pneumoniae* including resistant strains, and *N. meningitidis*).\n   - *(Note: If she were **pregnant**, ADD **IV Ampicillin 2 g q4h** to cover Listeria monocytogenes!)*\n3. **Adjunctive Corticosteroids:** **IV Dexamethasone 10 mg q6h for 4 days**, given **immediately before or with the first antibiotic dose** to reduce hearing loss and neurological sequelae."
      },
      {
        "q": "5. What red flag complications indicate clinical decompensation?",
        "a": "- **Immediate Life-Threatening Complications:** Rapidly declining **GCS (≤ 8 requires intubation)**, **septic shock**, **DIC / non-blanching purpuric rash**, **seizures** (20–30% of adults), **severe cerebral edema / herniation**, and pericardial effusion.\n- **Delayed Sequelae:** Sensorineural **deafness (CN VIII)**, persistent cranial nerve palsies, **hydrocephalus**, focal ischemic stroke (vasculitis), and recurrent seizures."
      }
    ]
  },
  {
    "id": 75,
    "title": "حالة 75: Meningococcal Meningitis in a 55-Year-Old Diabetic Male",
    "topic": "Meningococcal Meningitis in a 55-Year-Old Diabetic Male",
    "category": "Meningitis & CNS",
    "scenario": "A 55-year-old man presents to the emergency department with a 1-day history of severe headache, fever, discomfort when looking at lights, and neck stiffness. He has had diabetes mellitus for 10 years. There is a non-blanching rash on his trunk. On examination, his temperature is 39°C.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and which clinical feature specifically points to it?",
        "a": "- **Most likely causative organism:** ***Neisseria meningitidis*** (causing **Acute Meningococcal Meningitis with Meningococcemia**).\n- **Specific Justifying Features:**\n  1. **Hyperacute 1-day onset** of high fever (39°C), severe headache, photophobia, and neck stiffness.\n  2. **Non-blanching rash (petechiae/purpura) on the trunk** — the hallmark clinical sign of meningococcal septicemia/endotoxemia.\n- **Additional Age/Comorbidity Risk:** Being **> 50 years old with 10-year diabetes mellitus** also places him at elevated risk for *Streptococcus pneumoniae* and ***Listeria monocytogenes***."
      },
      {
        "q": "2. How do you clinically distinguish a blanching rash from a non-blanching rash, and what is the pathophysiological significance of a non-blanching rash in fever?",
        "a": "- **Bedside Glass (Diascopy) Test:** Press a clear glass firmly against the rash:\n  - **Blanching rash (Erythema / Maculopapular):** Fades completely under pressure (vasodilatation — seen in viral exanthems, early measles, rose spots).\n  - **Non-blanching rash (Petechiae < 2–3 mm; Purpura 3–10 mm):** Does **NOT** fade under pressure (extravasated RBCs in the dermis).\n- **Clinical Emergency Significance:** **Fever + non-blanching petechial/purpuric rash = Medical Emergency**, indicating endothelial damage, microvascular thrombosis, and evolving **DIC / meningococcal septicemia**."
      },
      {
        "q": "3. What is the mandatory EMPIRICAL antibiotic regimen BEFORE culture confirmation in this 55-year-old diabetic man?",
        "a": "- **CRITICAL OSCE RULE (Age > 50 + Diabetes Mellitus):** Even though the rash strongly suggests *N. meningitidis*, empirical treatment BEFORE microbiological confirmation MUST ALSO cover ***Listeria monocytogenes*** (which is intrinsically resistant to cephalosporins) AND resistant *S. pneumoniae*:\n  1. **IV Ceftriaxone 2 g q12h** (or IV Cefotaxime 2 g q4–6h).\n  2. **IV Vancomycin 15–20 mg/kg q8–12h**.\n  3. **IV Ampicillin 2 g q4h** (**mandatory** for age > 50 / diabetes to cover *Listeria*).\n  4. **IV Dexamethasone 10 mg q6h** given **before or with the first antibiotic dose**.\n- **De-escalation:** Once *Neisseria meningitidis* is confirmed by CSF/blood culture or PCR, stop Vancomycin and Ampicillin and complete **7 days of IV Ceftriaxone**."
      },
      {
        "q": "4. What diagnostic workup should be performed without delaying antibiotics?",
        "a": "1. **Immediate Blood Tests (Before First Dose):** **2 sets of blood cultures** (positive in ~50% of meningococcal meningitis), **blood meningococcal PCR** (stays positive even after antibiotics), CBC, **coagulation profile (PT, aPTT, fibrinogen, D-dimer)** to screen for DIC, serum glucose (hyperglycemia/DKA check in a diabetic!), renal function, and serum lactate.\n2. **Lumbar Puncture:** Perform ONLY if **no DIC/coagulopathy**, no septic shock, and no signs of raised ICP/focal deficit/coma -> expected CSF: turbid, >80% neutrophils, high protein (>150 mg/dL), low glucose (<40 mg/dL, ratio <0.40), and **Gram-negative intracellular diplococci**."
      },
      {
        "q": "5. What fatal complication is unique to meningococcemia, and what IPC & contact prophylaxis measures are required?",
        "a": "- **Classic Fatal Complication:** **Waterhouse-Friderichsen Syndrome** — fulminant meningococcemia causing **DIC**, **purpura fulminans**, and **bilateral adrenal hemorrhage** leading to refractory septic shock.\n- **IPC Precautions:** Immediate **Droplet Isolation** (surgical mask, gloves, gown) for the **first 24 hours** of effective IV antibiotic therapy.\n- **Close Contact Chemoprophylaxis:** Give household/intimate contacts **Oral Rifampicin 600 mg q12h for 2 days** OR **Oral Ciprofloxacin 500 mg single dose** (or **IM Ceftriaxone 250 mg** if pregnant) within 24 hours."
      }
    ]
  },
  {
    "id": 76,
    "title": "حالة 76: Cryptococcal Meningitis (HIV-Associated CNS Infection)",
    "topic": "Cryptococcal Meningitis (HIV-Associated CNS Infection)",
    "category": "Meningitis & CNS",
    "scenario": "A 28-year-old man from Zimbabwe presents to the emergency department for urgent evaluation of suspected meningitis (note: source exam vignette was truncated; high-yield OSCE evaluation in a young adult from sub-Saharan Africa focuses on HIV-associated Cryptococcal meningitis, Tuberculous meningitis, and Cerebral malaria).",
    "questions": [
      {
        "q": "1. What is the prioritized differential diagnosis of acute/subacute meningitis and febrile CNS disease in a 28-year-old man from Zimbabwe?",
        "a": "1. **HIV-Associated Cryptococcal Meningitis (*Cryptococcus neoformans*):** Leading cause of adult meningitis in sub-Saharan Africa; presents subacutely (1–2 weeks) with headache, fever, blurred vision/papilledema, and often subtle neck stiffness when **CD4 < 100 cells/mm³**.\n2. **Tuberculous Meningitis (*Mycobacterium tuberculosis*):** Subacute meningism, basal cranial nerve palsies (CN III, IV, VI), hydrocephalus.\n3. **Acute Bacterial Meningitis (*S. pneumoniae*, *N. meningitidis*):** Hyperacute/acute onset (hours to 2 days), marked meningism.\n4. **Cerebral Malaria (*Plasmodium falciparum*):** High fever, rapid coma/seizures, microvascular RBC sequestration (MUST check thick & thin blood films and capillary blood glucose immediately!).\n- **Essential First Screen:** Urgent **HIV testing + CD4 count** and **Malaria thick/thin blood smears + RDT**."
      },
      {
        "q": "2. What is the causative organism, environmental source, and pathogenesis of Cryptococcal Meningitis?",
        "a": "- **Causative Organism:** ***Cryptococcus neoformans*** — an **encapsulated yeast** (thick polysaccharide capsule inhibits phagocytosis).\n- **Environmental Reservoir:** **Pigeon/bird droppings** and contaminated soil (serotypes A/D; *C. gattii* around eucalyptus trees).\n- **Pathogenesis:** Acquired via **inhalation** into the lungs (usually asymptomatic pulmonary focus) -> silent **hematogenous dissemination** to the CNS in cell-mediated immunodeficiency (HIV/AIDS with **CD4 < 100 cells/mm³**, chronic steroids, transplant) -> fungal proliferation and shed capsular polysaccharide clog arachnoid granulations, causing **markedly elevated intracranial pressure (ICP)** and papilledema."
      },
      {
        "q": "3. What are the confirmatory CSF investigations and characteristic findings in HIV Cryptococcal Meningitis?",
        "a": "1. **CSF Opening Pressure:** **Markedly elevated** (frequently **> 25–30 cm H₂O**) — must be measured with a manometer at every LP.\n2. **CSF Profile:** **Lymphocytic pleocytosis** (often **paucicellular, < 20 WBCs/µL**, in advanced AIDS due to poor immune response), **elevated protein**, and **low glucose**.\n3. **Cryptococcal Capsular Antigen (CrAg) [Test of Choice]:** Lateral flow assay or latex agglutination on **CSF and serum** (> 95% sensitivity and specificity).\n4. **India Ink Stain:** Centrifuged CSF sediment reveals **round budding yeasts surrounded by a bright clear halo (capsule)** against a dark background (positive in ~70–80% of HIV cases).\n5. **Fungal Culture (Sabouraud Dextrose Agar):** Confirms viable organism and monitors CSF sterilization."
      },
      {
        "q": "4. What is the definitive 3-phase antifungal treatment for HIV Cryptococcal Meningitis, and what is the critical antibiotic pitfall to avoid?",
        "a": "- **CRITICAL OSCE RULE:** **Ceftriaxone has ZERO activity against *Cryptococcus*** — never manage confirmed or suspected HIV cryptococcal meningitis with antibacterial Ceftriaxone alone!\n- **Definitive 3-Phase Antifungal Regimen:**\n  1. **Induction Phase (2 weeks):** **IV Liposomal Amphotericin B** (3–4 mg/kg/day, or Amphotericin B deoxycholate 0.7–1.0 mg/kg/day) **+ Oral Flucytosine (5-FC)** (100 mg/kg/day divided q6h) — *(if Flucytosine unavailable: Amphotericin B + High-dose Fluconazole 800–1200 mg/day)*.\n  2. **Consolidation Phase (8 weeks):** **Oral Fluconazole 400–800 mg once daily** (after CSF sterilization and clinical stability).\n  3. **Maintenance / Secondary Prophylaxis:** **Oral Fluconazole 200 mg once daily** for at least 1 year and until immune reconstitution (**CD4 > 100–200 cells/mm³** on ART with suppressed viral load for ≥ 3–6 months).\n- **Toxicity Monitoring:** Renal function, potassium, and magnesium (Amphotericin B nephrotoxicity/hypokalemia); CBC (Flucytosine bone marrow suppression)."
      },
      {
        "q": "5. How do you manage raised intracranial pressure (ICP) and when should Antiretroviral Therapy (ART) be initiated?",
        "a": "- **Raised ICP Management (Crucial for Survival):**\n  - Perform **daily/serial therapeutic Lumbar Punctures** (removing 15–30 mL CSF) to reduce opening pressure by **50%** or to **< 20 cm H₂O** until pressure stabilizes.\n  - **DO NOT give routine corticosteroids (Dexamethasone)** or acetazolamide/mannitol — unlike bacterial or TB meningitis, steroids in cryptococcal meningitis **increase mortality** and delay fungal clearance!\n- **ART Timing (Preventing Fatal CNS IRIS):**\n  - **Defer ART initiation for 4–6 weeks** after starting antifungal therapy (starting ART too early triggers life-threatening CNS **Immune Reconstitution Inflammatory Syndrome [IRIS]**)."
      }
    ]
  },
  {
    "id": 77,
    "title": "حالة 77: Normal CSF Result (Exclusion of Meningitis in Viral URTI)",
    "topic": "Normal CSF Result (Exclusion of Meningitis in Viral URTI)",
    "category": "Meningitis & CNS",
    "scenario": "A 19-year-old man presents with a two-day history of diffuse headache and sore throat. He is pyrexial at 37.8°C and is reluctant to have fundoscopy due to photophobia. A lumbar puncture is performed. Serum glucose is 5.9 mmol/L. Lumbar puncture reveals: Appearance: Clear; Glucose: 4.1 mmol/L; Protein: 0.3 g/L; White cells: Lymphocytes 2/mm³, Polymorphs 0/mm³.",
    "questions": [
      {
        "q": "1. How do you interpret this lumbar puncture result, and what is the most likely explanation for his clinical presentation?",
        "a": "- **CSF Interpretation:** **Completely Normal CSF Result** (rules out acute bacterial, tuberculous, and established viral meningitis).\n- **Most Likely Clinical Diagnosis:** Uncomplicated **acute viral upper respiratory tract infection (URTI) / viral pharyngitis** (explaining his 2-day sore throat, low-grade fever of 37.8°C, diffuse febrile headache, and mild photophobia without meningeal inflammation)."
      },
      {
        "q": "2. Justify systematically why EACH CSF parameter in this case falls within normal adult reference ranges.",
        "a": "1. **Appearance:** **Clear and colorless** (normal; bacterial meningitis is turbid/cloudy).\n2. **CSF Glucose & Ratio:** CSF glucose **4.1 mmol/L** vs. serum glucose **5.9 mmol/L** -> **CSF-to-serum glucose ratio = 0.69** (normal is **≥ 0.60**, or 40–70 mg/dL; bacterial/TB is < 0.40).\n3. **CSF Protein:** **0.3 g/L (30 mg/dL)** -> normal (normal adult range: **0.15–0.45 g/L** [20–50 mg/dL]).\n4. **CSF White Blood Cells:** **2 lymphocytes/mm³ and 0 polymorphs/mm³** -> completely normal (normal adult CSF contains **< 5 WBCs/mm³**, all lymphocytes/monocytes, and **0 neutrophils**)."
      },
      {
        "q": "3. Compare Normal CSF against Bacterial, Viral (Aseptic), and Tuberculous Meningitis.",
        "a": "- **Normal CSF:** Clear | Pressure < 180 mmH₂O | WBCs < 5/mm³ (0 PMNs) | Protein 0.15–0.45 g/L | Glucose ratio ≥ 0.60.\n- **Acute Bacterial Meningitis:** Turbid/cloudy | High pressure (> 180 mmH₂O) | WBCs 1,000–10,000/mm³ (**> 80% neutrophils**) | High protein (> 1.5 g/L) | **Low glucose** (ratio < 0.40).\n- **Viral (Aseptic) Meningitis:** Clear | Normal pressure | WBCs 10–500/mm³ (**lymphocytes**) | Normal to mildly elevated protein (0.4–1.0 g/L) | **Normal glucose** (ratio ≥ 0.60).\n- **Tuberculous Meningitis:** Clear/xanthochromic (cobweb fibrin clot) | High pressure | WBCs 50–500/mm³ (**lymphocytes**) | **Markedly high protein** (1.5–5.0 g/L) | **Low glucose** (ratio < 0.40)."
      },
      {
        "q": "4. What is the appropriate management and essential safety-netting for this patient?",
        "a": "1. **Confirm Pending Microbiology:** Verify that CSF Gram stain is negative and await CSF bacterial culture/viral PCR (Enterovirus/HSV) and throat exam (exclude bacterial tonsillitis/peritonsillar abscess).\n2. **Supportive Management:** If systemically well with normal observations, no rash, and no meningism/neurological signs -> **no IV antibiotics required**; provide oral analgesics/antipyretics (paracetamol/ibuprofen), hydration, and rest.\n3. **Essential Safety-Netting (OSCE Pearl):** Very early meningitis (< 12 hours) can rarely show near-normal initial CSF — observe briefly or discharge ONLY with strict return instructions if he develops worsening severe headache, neck stiffness, **non-blanching rash**, vomiting, drowsiness/confusion, or persistent high fever."
      }
    ]
  },
  {
    "id": 78,
    "title": "حالة 78: Meningococcal Meningitis (Gram-Negative Diplococci)",
    "topic": "Meningococcal Meningitis (Gram-Negative Diplococci)",
    "category": "Meningitis & CNS",
    "scenario": "A 20-year-old woman was admitted overnight with suspected meningitis. You are asked to review the initial microscopy results from the lumbar puncture. The laboratory reports that the culture is growing Gram-negative diplococci.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and what specific microscopic and demographic clues confirm it?",
        "a": "- **Most likely organism:** ***Neisseria meningitidis*** (Meningococcus).\n- **Justifying clues:**\n  1. **CSF microscopy/culture growing Gram-negative diplococci** (classic kidney-bean-shaped pairs, often seen intracellularly within neutrophils).\n  2. **Young adult (20-year-old woman):** Peak age group for meningococcal carriage and community-acquired meningococcal meningitis."
      },
      {
        "q": "2. What are the key microbiological features, serogroups, and virulence factors of *Neisseria meningitidis*?",
        "a": "- **Microbiology:** Aerobic, oxidase-positive **Gram-negative diplococci**; ferments **both glucose and maltose** (differentiating it from *N. gonorrhoeae*, which ferments glucose only); grows on **chocolate agar** and Thayer-Martin medium.\n- **Serogroups:** **B, C, and Y** account for 95–97% of sporadic cases; **A, C, and W-135** drive epidemic outbreaks (e.g., African Meningitis Belt, Hajj).\n- **Virulence Factors:** **Polysaccharide capsule** (antiphagocytic; basis of vaccines except serogroup B), **Lipooligosaccharide (LOS / endotoxin)** (triggers massive cytokine storm, capillary leak, septic shock, and DIC), **IgA1 protease**, and **pili** (nasopharyngeal colonization)."
      },
      {
        "q": "3. What accompanying CSF biochemical/cellular findings and blood tests are expected in this case?",
        "a": "- **Expected CSF Analysis:**\n  - **Opening pressure:** Elevated (> 180 mmH₂O); **Appearance:** Cloudy/turbid.\n  - **WBCs:** Markedly elevated (typically 1,000–10,000/mm³) with **> 80% neutrophils (PMNs)**.\n  - **Protein:** High (**> 150 mg/dL** / > 1.5 g/L).\n  - **Glucose:** Low (**< 40 mg/dL**; **CSF-to-serum glucose ratio < 0.40**).\n- **Additional Tests:** **Blood cultures** (positive in ~50% of cases), **meningococcal PCR** on blood/CSF, CBC (polymorphonuclear leukocytosis), and coagulation screen (PT/aPTT/fibrinogen/D-dimer) to exclude DIC."
      },
      {
        "q": "4. What is the definitive antibiotic treatment and duration now that *Neisseria meningitidis* is identified?",
        "a": "- **First-Line Definitive Therapy:** **IV Ceftriaxone 2 g every 12 hours** (or **IV Cefotaxime 2 g every 4–6 hours**) for **7 days**.\n- **De-escalation:** Discontinue empirical Vancomycin once *N. meningitidis* is confirmed. *(IV Penicillin G 4 million units q4h is an alternative if full penicillin susceptibility is confirmed, but requires oral Rifampicin/Ciprofloxacin prior to discharge to eradicate nasopharyngeal carriage — Ceftriaxone already eradicates carriage!)*\n- **Supportive Care:** Monitor GCS, vitals, fluid balance, and watch for septic shock, seizures, or reactive arthritis."
      },
      {
        "q": "5. What mandatory Infection Control (IPC) and public health actions must you take immediately?",
        "a": "1. **Droplet Isolation:** Maintain **Droplet Precautions** (private room, surgical mask, gloves, gown) until the patient has received **24 hours of effective IV antibiotics**.\n2. **Public Health Notification:** Notify public health authorities immediately (statutorily notifiable disease).\n3. **Close-Contact Chemoprophylaxis:** Administer within 24 hours to all household/intimate contacts from the past 7 days: **Oral Ciprofloxacin 500 mg single dose** OR **Oral Rifampicin 600 mg q12h for 2 days** (or **IM Ceftriaxone 250 mg single dose** in pregnant contacts)."
      }
    ]
  },
  {
    "id": 79,
    "title": "حالة 79: Meningococcal Meningitis — Microbiology & Management",
    "topic": "Meningococcal Meningitis — Microbiology & Management",
    "category": "Meningitis & CNS",
    "scenario": "An 18-year-old male is admitted with fever, headache, and neck stiffness. He receives intravenous ceftriaxone. Lumbar puncture and culture of his cerebrospinal fluid reveal Neisseria meningitidis.",
    "questions": [
      {
        "q": "1. What is the exact appearance of *Neisseria meningitidis* on Gram staining, and how is it differentiated from other common meningitis bacteria?",
        "a": "- **Gram Stain Appearance:** **Gram-negative cocci** occurring in pairs (**kidney-bean-shaped Gram-negative diplococci**), seen both intracellularly inside neutrophils and extracellularly.\n- **Microscopic Comparison with Other Meningitis Pathogens:**\n  - ***Streptococcus pneumoniae*:** Gram-positive **lancet-shaped diplococci**.\n  - ***Haemophilus influenzae*:** Small pleomorphic **Gram-negative coccobacilli**.\n  - ***Listeria monocytogenes*:** Short **Gram-positive bacilli (rods)** with tumbling motility."
      },
      {
        "q": "2. Why are 18-year-old adolescents and young adults particularly susceptible to meningococcal meningitis?",
        "a": "- **High Nasopharyngeal Carriage:** Asymptomatic carriage peaks in late adolescence/young adulthood (up to **20–25%** in 18–24-year-olds).\n- **Epidemiological Risk Factors:** **Crowded living environments** such as university dormitories, military recruit camps, and intimate social contact facilitate rapid **respiratory droplet transmission**.\n- **Host Susceptibility Factors:** Lack of prior serogroup-specific immunity, recent viral URTI (damages nasopharyngeal mucosa), active/passive smoking, asplenia, or **terminal complement (C5–C9) deficiency**."
      },
      {
        "q": "3. Is IV Ceftriaxone optimal definitive therapy for this patient, for how long, and what unique advantage does it have over Penicillin G?",
        "a": "- **Definitive Regimen:** **Yes — IV Ceftriaxone 2 g every 12 hours for 7 days** is the definitive treatment of choice.\n- **Dual Advantage of Ceftriaxone over Penicillin G:**\n  1. Maintains full bactericidal efficacy even against penicillin-intermediate *N. meningitidis* strains.\n  2. **Eradicates nasopharyngeal carriage** in the index patient automatically — whereas patients treated solely with Penicillin G must receive a clearance dose of oral Rifampicin or Ciprofloxacin before hospital discharge to avoid infecting others."
      },
      {
        "q": "4. What acute and delayed complications must be monitored during and after hospitalization?",
        "a": "- **Acute Complications:** **Septic shock**, **DIC**, **Waterhouse-Friderichsen syndrome** (bilateral adrenal hemorrhage), cerebral edema/raised ICP, seizures, myocarditis, and pericarditis.\n- **Delayed Complications:** **Sensorineural hearing loss** (arrange formal **audiology testing** prior to or shortly after discharge), cranial nerve palsies (CN III, IV, VI, VII, VIII), hydrocephalus, cognitive deficits, and immune-complex mediated **reactive arthritis / pericarditis** (days 5–10)."
      },
      {
        "q": "5. What preventive measures apply to his close contacts, and which high-risk populations require Meningococcal Vaccination?",
        "a": "- **Close Contacts (Household / Dormitory Roommates / Kissing Partners in past 7 days):** Immediate **chemoprophylaxis** with **Oral Rifampicin 600 mg q12h × 2 days** OR **Oral Ciprofloxacin 500 mg single dose** (IM Ceftriaxone 250 mg in pregnancy).\n- **Indications for Meningococcal Vaccination (MenACWY & MenB):**\n  1. College freshmen living in **dormitories** and **military recruits**.\n  2. **Splenectomy** or functional asplenia (e.g., sickle cell disease).\n  3. **Terminal complement (C5–C9) deficiency** or eculizumab therapy (screen this patient if he has a history of recurrent *Neisseria* infections!).\n  4. Travelers to hyperendemic/epidemic areas (African Meningitis Belt, **Hajj/Umrah** pilgrimage)."
      }
    ]
  },
  {
    "id": 80,
    "title": "حالة 80: Suspected Acute Meningitis — CSF Analysis & Differential Diagnosis",
    "topic": "Suspected Acute Meningitis — CSF Analysis & Differential Diagnosis",
    "category": "Meningitis & CNS",
    "scenario": "A 47-year-old lady is referred by her GP with a two-day history of fever and headache. She is normally fit and well and has no significant past medical history. On examination, you note nuchal rigidity. Investigations show: Serum glucose: 4.9 mmol/L.",
    "questions": [
      {
        "q": "1. What is the working clinical diagnosis, and what targeted bedside physical examination must be completed immediately?",
        "a": "- **Working Diagnosis:** **Suspected Acute Meningitis** (2-day history of fever, headache, and objective **nuchal rigidity**).\n- **Immediate Focused Bedside Exam:**\n  1. **Consciousness & Vitals:** Formal **GCS** (E+V+M), temperature, BP, HR, RR (**qSOFA** sepsis screen).\n  2. **Meningeal Signs:** Confirm true nuchal rigidity (vs. functional rigidity), **Kernig's sign**, and **Brudzinski's neck/leg signs**.\n  3. **Full Skin Exam:** Search carefully for **non-blanching petechiae or purpura** (meningococcemia).\n  4. **Neurological & Fundoscopic Exam:** Screen **cranial nerves (III, IV, VI, VII)**, focal motor deficits, and **fundoscopy for papilledema** (to determine if CT brain is required before LP).\n  5. **ENT Exam:** Inspect ears and sinuses for contiguous parameningeal foci (otitis media, sinusitis)."
      },
      {
        "q": "2. Why was a paired Serum Glucose (4.9 mmol/L) specifically obtained prior to Lumbar Puncture?",
        "a": "- **Purpose:** To calculate the **CSF-to-Serum Glucose Ratio**, which is far more accurate than absolute CSF glucose alone.\n- **Clinical Interpretation Using Her Serum Glucose (4.9 mmol/L):**\n  - **Normal / Viral Meningitis (Ratio ≥ 0.60):** Expected CSF glucose **≥ 2.9–3.0 mmol/L**.\n  - **Bacterial, Tuberculous, or Fungal Meningitis (Ratio < 0.40):** Expected CSF glucose **< 2.0 mmol/L** (hypoglycorrhachia caused by impaired glucose transport and consumption by leukocytes/bacteria)."
      },
      {
        "q": "3. How are CSF tubes allocated to the laboratory, and how do CSF findings distinguish Bacterial, Viral, and Tuberculous Meningitis?",
        "a": "- **Standard 3-Tube CSF Allocation:**\n  - **Tube 1 (Hematology):** Cell count and differential.\n  - **Tube 2 (Chemistry):** Glucose and protein.\n  - **Tube 3 (Microbiology/Immunology):** Gram stain, bacterial culture, PCR (BioFire/HSV/Enterovirus), and AFB/CrAg if indicated.\n- **Diagnostic CSF Matrix:**\n  - **Acute Bacterial:** Cloudy, high pressure (> 180 mmH₂O), **> 80% neutrophils** (1,000–10,000/µL), **high protein (> 1.5 g/L)**, **low glucose (< 2.0 mmol/L; ratio < 0.40)**.\n  - **Viral (Aseptic):** Clear, normal pressure, **lymphocytes** (10–500/µL), normal/mildly elevated protein (0.4–1.0 g/L), **normal glucose (≥ 3.0 mmol/L; ratio ≥ 0.60)**.\n  - **Tuberculous:** Clear/cobweb fibrin clot, high pressure, **lymphocytes**, **markedly high protein (> 1.5–5.0 g/L)**, **low glucose (ratio < 0.40)**."
      },
      {
        "q": "4. When is CT brain indicated BEFORE Lumbar Puncture, and what is the immediate empirical therapy for this 47-year-old woman?",
        "a": "- **Indications for Pre-LP CT Brain (\"FAILS\"):** **F**ocal neurological deficit / papilledema, **A**ltered mental status (GCS < 10), **I**mmunocompromise, **L**esion/history of CNS mass, or new-onset **S**eizures. *(If none are present, proceed directly to LP.)*\n- **Immediate Empirical Treatment (NEVER delay for CT or LP):**\n  - Because she is **47 years old (< 50)** and immunocompetent: **IV Ceftriaxone 2 g q12h** (or IV Cefotaxime 2 g q4–6h) **+ IV Vancomycin 15–20 mg/kg q8–12h** (covers *S. pneumoniae* and *N. meningitidis*).\n  - **+ IV Dexamethasone 10 mg q6h for 4 days** immediately **before or with the first antibiotic dose**.\n  - Place on **Droplet Precautions** for 24 hours; de-escalate or stop antibiotics if CSF confirms benign viral meningitis."
      }
    ]
  },
  {
    "id": 81,
    "title": "حالة 81: Listeria monocytogenes Meningitis (Gram-Positive Bacilli)",
    "topic": "Listeria monocytogenes Meningitis (Gram-Positive Bacilli)",
    "category": "Meningitis & CNS",
    "scenario": "A 57-year-old female presents with headache and fever to the emergency department. On examination, neck stiffness is noted along with a positive Kernig's sign. A lumbar puncture is performed. CSF culture grows Gram-positive bacilli.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and which clinical and microbiological clues establish this diagnosis?",
        "a": "- **Most likely causative organism:** ***Listeria monocytogenes***.\n- **Justifying clues:**\n  1. **Age > 50 years (57-year-old female):** Classic high-risk demographic for listerial meningitis.\n  2. **Acute meningitic syndrome:** Fever, headache, neck stiffness, and positive Kernig's sign.\n  3. **CSF culture growing Gram-positive bacilli (rods):** *Listeria monocytogenes* is the classic **Gram-positive bacillus** causing community-acquired bacterial meningitis."
      },
      {
        "q": "2. What are the unique microbiological traits, high-risk populations, and foodborne transmission sources of *Listeria monocytogenes*?",
        "a": "- **Microbiology:** Facultative intracellular, small, non-spore-forming **Gram-positive rod**; beta-hemolytic on blood agar; displays characteristic **\"tumbling motility\"** at room temperature (20–25°C) and replicates at **refrigerator temperatures (4°C — cold enrichment)**.\n- **High-Risk Populations:**\n  1. **Adults > 50 years** (due to declining cell-mediated immunity).\n  2. **Neonates (< 1 month)** and **Pregnant women** (20-fold increased risk).\n  3. **Immunocompromised hosts** (steroids, chemotherapy, transplant, HIV) and **diabetics / alcoholics**.\n- **Transmission:** Ingestion of contaminated **unpasteurized soft cheeses, unpasteurized milk, cold deli meats, hot dogs, or refrigerated salads/coleslaw**."
      },
      {
        "q": "3. How is Kernig's sign elicited, and what are its sensitivity and specificity?",
        "a": "- **Elicitation Technique:** With the patient supine, flex the hip to **90°** and the knee to **90°**, then attempt to passively extend the lower leg at the knee.\n- **Positive Sign:** Pain and hamstring spasm prevent passive knee extension beyond **135°** (may trigger reflex flexion of the contralateral leg).\n- **Diagnostic Value (Hawari Pearl):** **Low sensitivity (20–30%)** (absence does NOT exclude meningitis) but **high specificity (85–95%)** (presence strongly confirms meningeal irritation)."
      },
      {
        "q": "4. What is the definitive antibiotic treatment, and why MUST Cephalosporins be avoided as monotherapy?",
        "a": "- **CRITICAL OSCE RULE:** *Listeria monocytogenes* is **intrinsically resistant to ALL cephalosporins** (Ceftriaxone, Cefotaxime, Cefepime)!\n- **First-Line Definitive Regimen:**\n  - **IV Ampicillin (or IV Amoxicillin) 2 g every 4 hours for 21 days** (minimum 3 weeks due to intracellular persistence).\n  - **PLUS IV Gentamicin 5 mg/kg/day (divided q8h) for the first 7–14 days** for bactericidal synergy (monitor renal function and drug levels).\n- **Alternative in Severe Penicillin Allergy:** **IV Trimethoprim-Sulfamethoxazole (TMP-SMX)** (15–20 mg/kg/day of the TMP component divided q6–8h) for 21 days.\n- **Steroid Note:** **Discontinue Dexamethasone** once *Listeria* is confirmed (steroids are associated with worse outcomes in neurolisteriosis)."
      },
      {
        "q": "5. What distinct CNS complications and pregnancy risks are associated with *Listeria monocytogenes*?",
        "a": "- **Distinct CNS Complications:**\n  1. **Rhombencephalitis (Brainstem Encephalitis):** Cranial nerve palsies, ataxia, and respiratory failure (often with biphasic febrile prodrome).\n  2. **Brain abscess** and hydrocephalus.\n- **Pregnancy & Neonatal Risks:** Transplacental infection causes **chorioamnionitis, spontaneous abortion, stillbirth**, or neonatal sepsis/meningitis (**granulomatosis infantiseptica**).\n- **Prevention:** Educate adults > 50, pregnant women, and immunocompromised patients to avoid unpasteurized soft cheeses and thoroughly reheat deli meats."
      }
    ]
  },
  {
    "id": 82,
    "title": "حالة 82: Meningococcal Meningitis with Petechial Rash — Emergency Management",
    "topic": "Meningococcal Meningitis with Petechial Rash — Emergency Management",
    "category": "Meningitis & CNS",
    "scenario": "A 31-year-old woman presents to the emergency department complaining of a headache. She has had flu-like symptoms for the past three days, with the headache developing gradually yesterday. The headache is described as generalized and worsens with bright light or neck flexion. On examination: Temperature is 38.2°C, pulse is 96/min, and blood pressure is 116/78 mmHg. Neck stiffness is present with no focal neurological signs. Petechiae are noted on her torso. She has been cannulated and blood samples, including cultures, have been taken.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which clinical findings demand immediate emergency action?",
        "a": "- **Most likely diagnosis:** **Acute Meningococcal Meningitis with Early Meningococcemia (*Neisseria meningitidis*)**.\n- **Justifying Emergency Features:**\n  1. Classic meningeal triad/tetrad: **fever (38.2°C), generalized headache, photophobia, and neck stiffness** following a 3-day flu-like prodrome.\n  2. **Non-blanching petechiae on her torso:** Pathognomonic warning sign of **meningococcal bacteremia/sepsis**, which can deteriorate into fatal septic shock and DIC within hours."
      },
      {
        "q": "2. Now that IV access and blood cultures have been obtained, what is the SINGLE MOST APPROPRIATE immediate next step?",
        "a": "- **Immediate Next Step:** Administer **IV Cefotaxime 2 g (or IV Ceftriaxone 2 g) IMMEDIATELY** (alongside empirical IV Vancomycin where resistant *S. pneumoniae* is prevalent, and **IV Dexamethasone 10 mg** immediately before or with the first antibiotic dose).\n- **Hawari Golden Rule:** **Empirical IV antibiotics must NEVER be delayed** to arrange a CT head or wait to perform a lumbar puncture — every hour of antibiotic delay markedly increases mortality in meningococcal disease!\n- *(Note: IM Benzylpenicillin is reserved for pre-hospital GP settings when IV access/hospital transfer is delayed; in the ED with IV access already established, IV Cefotaxime/Ceftriaxone is superior.)*"
      },
      {
        "q": "3. Does this patient require a CT head before Lumbar Puncture, and when should LP be deferred?",
        "a": "- **Is CT Head Required Before LP? NO!** She is hemodynamically stable (BP 116/78 mmHg), alert with no focal neurological deficits, no seizures, no papilledema, and no immunocompromise -> none of the \"FAILS\" pre-LP CT criteria apply.\n- **When to Defer LP Despite No CT Indication:** If her coagulation panel reveals **coagulopathy/DIC** (platelets < 100×10⁹/L or elevated INR/aPTT), if the **petechial rash rapidly progresses to purpura/shock**, or if respiratory/hemodynamic instability develops — never risk a spinal hematoma or cardiovascular collapse; rely on **blood cultures and blood meningococcal PCR**."
      },
      {
        "q": "4. What urgent laboratory monitoring and hemodynamic surveillance are required over the next 24 hours?",
        "a": "1. **Coagulation & Sepsis Panel:** CBC (platelets), **PT/INR, aPTT, fibrinogen, D-dimer** (early DIC detection), **serum lactate**, arterial/venous blood gas, renal/liver panel, and blood glucose.\n2. **Microbiological Confirmation:** **Blood meningococcal PCR** (remains positive for days even after IV antibiotics) + pending blood cultures + LP CSF Gram stain/culture/PCR (when safe).\n3. **Close Clinical Monitoring:** Hourly vital signs, **GCS**, urine output, and marking/reassessing petechiae for rapid spread (red flag for **Waterhouse-Friderichsen syndrome** / septic shock requiring ICU admission and vasopressors)."
      },
      {
        "q": "5. What IPC precautions and contact prophylaxis measures must be instituted?",
        "a": "- **IPC Isolation:** Immediate **Droplet Precautions** (private room, surgical mask, gloves, gown) until **24 hours** after initiating IV Cefotaxime/Ceftriaxone.\n- **Public Health & Contacts:** Notify public health authorities; provide immediate **chemoprophylaxis** (**Oral Ciprofloxacin 500 mg single dose** OR **Oral Rifampicin 600 mg q12h × 2 days**; **IM Ceftriaxone 250 mg** if pregnant) to all close household/intimate contacts within the previous 7 days."
      }
    ]
  },
  {
    "id": 83,
    "title": "حالة 83: Acute Bacterial Meningitis — Adjunctive Dexamethasone & Empirical Therapy",
    "topic": "Acute Bacterial Meningitis — Adjunctive Dexamethasone & Empirical Therapy",
    "category": "Meningitis & CNS",
    "scenario": "A 19-year-old man presents with a 12-hour history of headache and fever. On examination, you elicit neck stiffness, photophobia, and a positive Kernig's sign. He scores 15 on the Glasgow Coma Scale (GCS), and there has been no behavioral change or evidence of raised intracranial pressure. He is hemodynamically stable and has no rash. Blood cultures are taken, and a lumbar puncture is performed. You decide to treat empirically for bacterial meningitis and prescribe intravenous cefotaxime every 6 hours.",
    "questions": [
      {
        "q": "1. What are the most likely bacterial pathogens in this 19-year-old immunocompetent man without a rash?",
        "a": "1. ***Streptococcus pneumoniae*** (most common cause of acute bacterial meningitis in adults overall, especially when no petechial rash is present).\n2. ***Neisseria meningitidis*** (second most common — especially prevalent in 18–24-year-olds; **absence of a rash does NOT exclude meningococcal meningitis**).\n- *(Note: **Listeria monocytogenes** is NOT a likely pathogen in a healthy 19-year-old immunocompetent male, so empirical Ampicillin is unnecessary.)*"
      },
      {
        "q": "2. What crucial adjunctive medication MUST be prescribed alongside IV Cefotaxime, what is the exact timing/dose, and what is its clinical benefit?",
        "a": "- **Mandatory Adjunct:** **IV Dexamethasone 10 mg every 6 hours for 4 days**.\n- **Critical Timing:** Administer **15–20 minutes BEFORE or simultaneously with the first antibiotic dose** (do NOT delay antibiotics to give it; if antibiotics were already started, benefit diminishes markedly if delayed > 4–12 hours).\n- **Mechanism & Proven Benefit:** Bactericidal antibiotics trigger sudden lysis of bacteria in the subarachnoid space, releasing cell wall components that provoke a destructive cytokine/inflammatory surge. Dexamethasone attenuates blood-brain barrier breakdown and cerebral edema -> significantly **reduces mortality and neurological sequelae (especially sensorineural hearing loss)**, with the greatest proven benefit in ***Streptococcus pneumoniae* meningitis**."
      },
      {
        "q": "3. Should any additional empirical antibiotic be added to IV Cefotaxime while awaiting CSF culture?",
        "a": "- **Yes — Add IV Vancomycin (15–20 mg/kg every 8–12 hours)**!\n- **Rationale:** Covers **penicillin- and cephalosporin-resistant *Streptococcus pneumoniae*** (standard empirical regimen for adults aged 1 month–50 years per Al-Azhar & IDSA guidelines is **IV Ceftriaxone/Cefotaxime + IV Vancomycin + IV Dexamethasone**).\n- **De-escalation:** Once CSF culture/sensitivities confirm cephalosporin-susceptible *S. pneumoniae* or *N. meningitidis*, discontinue Vancomycin."
      },
      {
        "q": "4. Why was it clinically safe to proceed directly to Lumbar Puncture without a prior CT head in this patient?",
        "a": "- He meets **ZERO** of the pre-LP neuroimaging contraindications (\"FAILS\"):\n  - Normal consciousness (**GCS 15/15**, no behavioral change).\n  - **No focal neurological deficits** and **no clinical signs of raised ICP** (no papilledema).\n  - **No new-onset seizures** and **no immunocompromise**.\n  - **Hemodynamically stable** and **no purpuric rash/DIC**.\n- Proceeding directly to LP avoids unnecessary diagnostic delay and maximizes CSF culture yield."
      },
      {
        "q": "5. How will you tailor treatment duration and isolation once CSF results are available?",
        "a": "- **If *S. pneumoniae* is confirmed:** Continue IV Cefotaxime/Ceftriaxone (± Vancomycin per MIC) for **10–14 days**, complete the **4-day Dexamethasone** course, perform audiology follow-up, and **NO contact chemoprophylaxis** is needed (pneumococcal meningitis is not spread in outbreaks to contacts).\n- **If *N. meningitidis* is confirmed:** Complete **7 days** of IV Cefotaxime/Ceftriaxone, maintain **Droplet Precautions for 24 hours**, notify public health, and give close contacts **Rifampicin or Ciprofloxacin prophylaxis**.\n- **If Viral Meningitis is confirmed** (lymphocytic CSF, normal glucose, negative Gram stain/bacterial PCR): Stop antibiotics and Dexamethasone and provide supportive care."
      }
    ]
  },
  {
    "id": 84,
    "title": "حالة 84: Listeria monocytogenes Meningitis in an Elderly Patient",
    "topic": "Listeria monocytogenes Meningitis in an Elderly Patient",
    "category": "Meningitis & CNS",
    "scenario": "A 74-year-old female presents with headache and neck stiffness to the emergency department. Following a lumbar puncture, the patient was started on IV ceftriaxone. CSF culture grows Listeria monocytogenes.",
    "questions": [
      {
        "q": "1. Why is IV Ceftriaxone completely ineffective here, and what is the exact mandatory change in antibiotic therapy?",
        "a": "- **Critical Pharmacology Rule:** ***Listeria monocytogenes*** is **intrinsically resistant to ALL cephalosporins** (including Ceftriaxone and Cefotaxime) because its penicillin-binding proteins (PBPs) have poor affinity for cephalosporins.\n- **Mandatory Immediate Change:** **STOP IV Ceftriaxone** and **CHANGE to IV Ampicillin (or IV Amoxicillin) 2 g every 4 hours + IV Gentamicin (5 mg/kg/day divided q8h)** for synergistic bactericidal killing."
      },
      {
        "q": "2. What was the empirical prescribing error on admission, and what is the correct initial empirical regimen for a 74-year-old?",
        "a": "- **Admission Error:** Starting **IV Ceftriaxone monotherapy** in a **74-year-old** missed BOTH *Listeria monocytogenes* (age > 50 years) AND cephalosporin-resistant *S. pneumoniae*!\n- **Correct Empirical Regimen for Adults > 50 Years (Al-Azhar / IDSA Guidelines):**\n  - **IV Vancomycin** (15–20 mg/kg q8–12h) **+ IV Ceftriaxone** (2 g q12h) **+ IV Ampicillin** (2 g q4h) **+ IV Dexamethasone** (10 mg q6h before/with first dose)."
      },
      {
        "q": "3. What is the required duration of treatment for *Listeria* meningitis, what must be monitored in a 74-year-old, and what is the alternative for penicillin allergy?",
        "a": "- **Treatment Duration:**\n  - **IV Ampicillin / Amoxicillin:** Minimum **21 days (3 weeks)** — longer than pneumococcal or meningococcal meningitis due to intracellular survival inside macrophages and high relapse risk.\n  - **IV Gentamicin:** Typically given for the **first 7–14 days** for synergy.\n- **Safety Monitoring in a 74-Year-Old:** Closely monitor **serum creatinine/eGFR**, **gentamicin trough levels**, and **vestibular/auditory function** (high risk of aminoglycoside nephrotoxicity and ototoxicity in the elderly).\n- **Severe Penicillin Allergy Alternative:** **IV Trimethoprim-Sulfamethoxazole (TMP-SMX)** (15–20 mg/kg/day of the TMP component divided q6–8h) for 21 days."
      },
      {
        "q": "4. Should IV Dexamethasone be continued now that *Listeria monocytogenes* has been isolated?",
        "a": "- **NO — Discontinue Dexamethasone immediately** if it was started empirically!\n- **Evidence Base:** Unlike *Streptococcus pneumoniae* meningitis, adjunctive corticosteroids in confirmed **neurolisteriosis** have been associated with **increased mortality** and impaired cell-mediated clearance of intracellular *Listeria*."
      },
      {
        "q": "5. What characteristic CSF features and severe CNS complications are seen with *Listeria* meningitis?",
        "a": "- **CSF Findings:** Often atypical — WBC count may be **neutrophilic OR lymphocytic**, protein is elevated, and CSF glucose is low or normal; Gram stain sensitivity is low (< 50%), showing short **Gram-positive bacilli**.\n- **Severe Complications:** **Brainstem rhombencephalitis** (cranial nerve palsies, ataxia, respiratory arrest), **brain abscess**, ventriculitis/hydrocephalus, and high case-fatality rate (20–30% in elderly hosts)."
      }
    ]
  },
  {
    "id": 85,
    "title": "حالة 85: Meningococcal Meningitis in Severe Penicillin Allergy (Anaphylaxis)",
    "topic": "Meningococcal Meningitis in Severe Penicillin Allergy (Anaphylaxis)",
    "category": "Meningitis & CNS",
    "scenario": "A 19-year-old student is brought to the emergency department by friends because of severe headache and drowsiness. On examination, he has a widespread purpuric rash. Meningococcal infection is strongly suspected, but he is known to be penicillin-allergic (previous anaphylaxis).",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which red flag signs indicate life-threatening severity?",
        "a": "- **Most likely diagnosis:** **Severe Meningococcal Meningitis & Septicemia (Meningococcemia)** caused by *Neisseria meningitidis*.\n- **Critical Red Flags Present:**\n  1. **Drowsiness (altered mental status / ↓ GCS):** Indicates raised intracranial pressure, cerebral hypoperfusion, or evolving coma (intubate if **GCS ≤ 8**).\n  2. **Widespread non-blanching purpuric rash:** Hallmark of fulminant endotoxemia, endothelial necrosis, **DIC**, and high risk of **Waterhouse-Friderichsen syndrome** (bilateral adrenal hemorrhage + refractory shock)."
      },
      {
        "q": "2. What is the antibiotic of choice for suspected meningococcal meningitis in a patient with a history of penicillin anaphylaxis?",
        "a": "- **Antibiotic of Choice (Classic Exam & NICE Guideline Standard):** **IV Chloramphenicol** (25 mg/kg IV every 6 hours, max 1 g q6h).\n- **Rationale:** Because he has a documented history of **anaphylaxis (Type I IgE-mediated severe hypersensitivity)** to penicillins, penicillins and cephalosporins are avoided in classic protocols; **Chloramphenicol** is bactericidal against *N. meningitidis* and *H. influenzae*, achieves **excellent CSF penetration**, and has **zero beta-lactam cross-reactivity**.\n- **Additional Clinical Considerations:** Add **IV Vancomycin** if pneumococcal meningitis is not yet excluded. *(In modern specialist practice where chloramphenicol is unavailable, **IV Moxifloxacin** or **Aztreonam** [Gram-negative coverage] are alternatives, and **Meropenem** carries < 1% cross-reactivity — however, **IV Chloramphenicol** remains the definitive exam drug of choice for penicillin-anaphylactic meningococcal meningitis.)*"
      },
      {
        "q": "3. What key hematological adverse effects must be monitored when prescribing IV Chloramphenicol?",
        "a": "1. **Dose-Dependent, Reversible Bone Marrow Suppression:** Anemia, leukopenia, and thrombocytopenia (common with high doses/prolonged therapy — monitor **daily CBC and reticulocyte count**).\n2. **Idiosyncratic, Irreversible Aplastic Anemia:** Rare (1 in 25,000–40,000) and dose-independent, potentially fatal.\n3. *(Classic Pediatrics Pearl: **Gray Baby Syndrome** in neonates due to immature hepatic glucuronidation — not applicable to a 19-year-old, but high-yield pharmacology.)*"
      },
      {
        "q": "4. Should an immediate Lumbar Puncture be performed on this 19-year-old student? Justify your decision and outline immediate resuscitation.",
        "a": "- **NO — DEFER Lumbar Puncture immediately!**\n- **Two Major Contraindications Present:**\n  1. **Drowsiness / impaired consciousness** (high risk of **cerebral herniation**).\n  2. **Widespread purpuric rash** indicating probable **DIC / thrombocytopenia / coagulopathy** (high risk of spinal epidural hematoma) and impending septic shock.\n- **Immediate Emergency Management (ICU Level):**\n  1. **ABCDE & GCS Assessment:** High-flow O₂, prepare for intubation if GCS ≤ 8, wide-bore IV access, aggressive IV crystalloid boluses (and norepinephrine if septic shock).\n  2. **Draw urgent bloods BEFORE antibiotics:** 2 sets of **blood cultures**, **blood meningococcal PCR** (confirms diagnosis without needing LP!), CBC, **DIC panel (PT, aPTT, fibrinogen, D-dimer)**, lactate, and blood glucose.\n  3. **Administer IV Chloramphenicol IMMEDIATELY**."
      },
      {
        "q": "5. What IPC isolation and close-contact prophylaxis are required for his college friends?",
        "a": "- **Hospital IPC:** **Droplet Precautions** (private/ICU room, surgical mask, gloves, gown) for the **first 24 hours** of effective IV antimicrobial therapy.\n- **Close Contacts (Roommates, Kissing Partners, Friends with prolonged close exposure in past 7 days):** Immediate **chemoprophylaxis** with **Oral Ciprofloxacin 500 mg single dose** OR **Oral Rifampicin 600 mg PO q12h for 2 days** (public health notification mandatory)."
      }
    ]
  },
  {
    "id": 86,
    "title": "حالة 86: Meningococcal Meningitis — Partner Chemoprophylaxis (Prior MenC Vaccine)",
    "topic": "Meningococcal Meningitis — Partner Chemoprophylaxis (Prior MenC Vaccine)",
    "category": "Meningitis & CNS",
    "scenario": "You are speaking to the partner of a 28-year-old man who has recently been admitted with pyrexia and neck stiffness. Investigations: Serum glucose: 5.0 mmol/L. Lumbar puncture: Appearance: Cloudy; Glucose: 1.2 mmol/L; Protein: 1.8 g/L; White cells: 450/mm³ (85% polymorphs); Microscopy: Gram-negative diplococci. No other serotype information is available. The partner is 27 years old and has no significant past medical history other than depression treated with fluoxetine. She completed a MenC vaccination course 8 years ago.",
    "questions": [
      {
        "q": "1. Interpret the index patient's CSF results and establish the exact diagnosis.",
        "a": "- **Confirmed Diagnosis:** **Acute Meningococcal Meningitis (*Neisseria meningitidis*)**.\n- **Detailed CSF Justification:**\n  1. **Cloudy appearance** with **neutrophilic pleocytosis** (450 WBCs/mm³, **85% polymorphs**).\n  2. **Markedly low CSF glucose:** 1.2 mmol/L vs. serum glucose 5.0 mmol/L -> **CSF-to-serum ratio = 0.24 (< 0.40)**.\n  3. **Markedly elevated protein:** **1.8 g/L** (normal: 0.15–0.45 g/L).\n  4. **Microscopy:** **Gram-negative diplococci** (pathognomonic for *N. meningitidis*)."
      },
      {
        "q": "2. Does her prior MenC vaccination (8 years ago) eliminate the need for chemoprophylaxis? Explain why or why not.",
        "a": "- **NO — She STILL urgently requires immediate antibiotic chemoprophylaxis!**\n- **Two Key Reasons:**\n  1. **Unknown Serogroup:** The lab has not yet identified the serogroup; MenC vaccine confers **ZERO protection against Serogroup B** (the most frequent cause of sporadic adult meningococcal disease!), W, Y, or A.\n  2. **Waning Immunity:** Even if the isolate were Serogroup C, protective bactericidal antibody levels decline significantly over 8 years and do not reliably prevent immediate post-exposure carriage or invasion.\n- **No Booster Yet:** Do **not** give a MenC booster empirically before serogrouping results are known."
      },
      {
        "q": "3. What is the BEST first-line chemoprophylaxis choice for this 27-year-old woman taking Fluoxetine, and why is it preferred over Rifampicin?",
        "a": "- **Best First-Line Choice (UK / CDC Guidelines):** **Single-dose Oral Ciprofloxacin 500 mg**.\n- **Why Ciprofloxacin Is Preferred Over Rifampicin Here:**\n  1. **No CYP450 Drug Interactions:** Rifampicin is a potent hepatic enzyme inducer that accelerates metabolism of **fluoxetine** (risking relapse of depression) and **hormonal oral contraceptives** (risking unintended pregnancy).\n  2. **Single Oral Dose:** Ensures 100% adherence (vs. 4 doses over 2 days for Rifampicin) and avoids orange-red staining of urine/soft contact lenses.\n- **Mandatory Pregnancy Check:** Always confirm she is **not pregnant** before prescribing Ciprofloxacin/Rifampicin — if **pregnant**, **IM Ceftriaxone 250 mg single dose** is the safest first-line option (note: UKHSA also permits single-dose Ciprofloxacin in pregnancy when needed, while CDC favors IM Ceftriaxone)."
      },
      {
        "q": "4. What essential counseling and safety-netting advice must you give her today?",
        "a": "1. **Urgency & Timing:** Take chemoprophylaxis **immediately** (ideally within 24 hours of index diagnosis) to eradicate nasopharyngeal carriage; no throat swab is needed beforehand.\n2. **Red Flag Symptoms (Safety-Netting):** Chemoprophylaxis substantially reduces but does not 100% eliminate risk — advise her to attend the Emergency Department immediately if she develops **fever, severe headache, neck stiffness, photophobia, vomiting, drowsiness, or a non-blanching petechial/purpuric rash**.\n3. **Vaccination Follow-Up:** Once public health identifies the partner's serogroup, she will be offered targeted vaccination (e.g., MenACWY or MenB) if vaccine-preventable."
      }
    ]
  },
  {
    "id": 87,
    "title": "حالة 87: Meningococcal Meningitis — Intimate Contact Chemoprophylaxis & Counseling",
    "topic": "Meningococcal Meningitis — Intimate Contact Chemoprophylaxis & Counseling",
    "category": "Meningitis & CNS",
    "scenario": "A 19-year-old man presents asking for advice. His girlfriend has recently been diagnosed with meningococcal meningitis. He is worried that he may have contracted the infection.",
    "questions": [
      {
        "q": "1. How do you stratify this 19-year-old man's risk, and does he meet criteria for antibiotic chemoprophylaxis?",
        "a": "- **Risk Assessment:** **High-Risk Close Contact** — as an intimate partner (kissing / direct contact with oral and respiratory secretions within the **7 days prior to the girlfriend's symptom onset**), his risk of developing invasive meningococcal disease is **500–800 times higher** than the general population.\n- **Indication:** **YES — Immediate antibiotic chemoprophylaxis is strictly indicated** (ideally within **24 hours** of the index diagnosis, and remains useful up to 14 days after exposure)."
      },
      {
        "q": "2. What are the recommended chemoprophylaxis regimens (exact drugs and doses), and which common antibiotics are INCORRECT choices?",
        "a": "- **Recommended Effective Regimens (Eradicate Nasopharyngeal Carriage):**\n  1. **Oral Rifampicin 600 mg every 12 hours for 2 days (4 doses)** — classic Al-Azhar / Hawari curriculum drug of choice.\n  2. **Oral Ciprofloxacin 500 mg as a single dose** — equally effective preferred first-line adult regimen (convenient single dose, no CYP450 interactions).\n  3. **IM Ceftriaxone 250 mg single dose** — preferred alternative (especially in pregnancy).\n- **INCORRECT Exam Distractors:** **Oral co-amoxiclav, phenoxymethylpenicillin (Penicillin V), amoxicillin, and erythromycin** do **NOT** reliably achieve adequate salivary/nasopharyngeal concentrations to clear meningococcal carriage and must NEVER be prescribed for prophylaxis."
      },
      {
        "q": "3. If Oral Rifampicin is prescribed, what specific side effects and drug interactions must you counsel him about?",
        "a": "1. **Orange-Red Discoloration of Body Fluids:** Reassure him that urine, sweat, saliva, and tears will turn orange-red — **warn him NOT to wear soft contact lenses** during the 2-day course as they will be permanently stained.\n2. **Potent Hepatic CYP450 Induction:** Reduces plasma levels of numerous medications (e.g., oral anticoagulants, antiepileptics, and hormonal contraceptives in female contacts).\n3. **GI & Hepatic Effects:** Mild nausea/abdominal upset and rare transient transaminase elevation (avoid heavy alcohol intake)."
      },
      {
        "q": "4. Should he undergo a nasopharyngeal swab before prophylaxis, and what follow-up vaccination and safety-netting advice should be provided?",
        "a": "- **No Throat Swab Needed:** Do **NOT** perform nasopharyngeal/throat swabs to decide on prophylaxis — swabs have poor predictive value and unnecessarily delay life-saving antibiotics.\n- **Role of Vaccination:** Meningococcal vaccine (**MenACWY** or **MenB**) is offered only if the girlfriend's strain proves to be a vaccine-preventable serogroup, and **never replaces immediate antibiotic prophylaxis**.\n- **Red Flag Safety-Netting:** Educate him to present immediately to the ED if he develops **sudden fever, severe headache, neck stiffness, photophobia, vomiting, drowsiness, or a non-blanching petechial/purpuric rash** over the next few weeks."
      }
    ]
  },
  {
    "id": 88,
    "title": "حالة 88: Pneumococcal Meningitis (Close Contacts Management)",
    "topic": "Pneumococcal Meningitis (Close Contacts Management)",
    "category": "Meningitis & CNS",
    "scenario": "A 7-year-old boy is admitted to the hospital after presenting with fever, headache, and neck stiffness. A diagnosis of pneumococcal meningitis is made. There are no other reports of meningitis in the local area during the previous four weeks.",
    "questions": [
      {
        "q": "1. How should the close contacts of this boy be managed, and how does this differ from meningococcal or Haemophilus influenzae type b (Hib) meningitis?",
        "a": "No chemoprophylaxis or booster vaccination is required for close contacts of sporadic pneumococcal (Streptococcus pneumoniae) meningitis.\n- Unlike Neisseria meningitidis (where close household/kissing contacts require Rifampicin 600 mg PO q12h for 2 days, single-dose Ciprofloxacin 500 mg PO, or single-dose IM Ceftriaxone) and Hib (where Rifampicin for 4 days is indicated if unvaccinated young children or immunocompromised contacts live in the household), S. pneumoniae does not require contact chemoprophylaxis in sporadic cases.\n- Contacts should simply be reassured and advised to seek medical attention promptly if fever, severe headache, or neck stiffness develops."
      },
      {
        "q": "2. What is the causative organism, its microbiological characteristics, and the major risk factors predisposing patients to pneumococcal meningitis?",
        "a": "Causative organism: Streptococcus pneumoniae — Gram-positive, lancet-shaped diplococci with a thick antiphagocytic polysaccharide capsule (the single most common cause of acute bacterial meningitis in children >1 month and adults).\n- Routes of entry: Hematogenous seeding from bacteremia/pneumonia, OR direct contiguous spread from parameningeal suppurative foci (acute otitis media, mastoiditis, sinusitis, or basal skull fracture with CSF leak).\n- Major risk factors: Functional or anatomical asplenia (e.g., sickle cell disease, post-splenectomy), extremes of age, cochlear implants, complement/Ig deficiency, HIV, diabetes, and alcoholism."
      },
      {
        "q": "3. What are the expected CSF findings in pneumococcal meningitis, and how should the CSF tubes be distributed?",
        "a": "Classic septic (bacterial) meningitis CSF profile:\n- Opening pressure: Markedly elevated (>180 mmH2O).\n- Appearance: Turbid / cloudy.\n- WBC count: Markedly elevated (usually >1,000 cells/µL) with >80% polymorphonuclear neutrophils (PMNs).\n- Protein: Elevated (>150 mg/dL).\n- Glucose: Markedly decreased (<40 mg/dL; CSF-to-blood glucose ratio <0.4).\n- Microbiology: Gram stain showing Gram-positive lancet-shaped diplococci, positive CSF culture (yield 70–85%), multiplex PCR, and blood cultures (positive in ~50%).\n- Tube allocation: Tube 1 → Hematology (cell count & differential); Tube 2 → Chemistry (glucose & protein); Tube 3 → Microbiology/Immunology (Gram stain, culture, PCR)."
      },
      {
        "q": "4. What is the immediate and definitive inpatient treatment regimen for this 7-year-old boy?",
        "a": "Empirical IV antibiotics must NEVER be delayed while waiting for lumbar puncture or imaging:\n1. Empiric IV antibiotics (age 1 month–50 years): IV Ceftriaxone (or Cefotaxime) PLUS IV Vancomycin (essential to cover penicillin- and cephalosporin-resistant S. pneumoniae strains), continued for 10–14 days once pneumococcal etiology is confirmed (de-escalate based on sensitivities).\n2. Adjunctive Corticosteroid: IV Dexamethasone (0.15 mg/kg q6h for 2–4 days) administered BEFORE or WITH the first antibiotic dose — pneumococcal meningitis shows the greatest proven benefit in reducing neurological sequelae and hearing loss.\n3. Supportive care: IV fluids, antipyretics, seizure precautions, and serial GCS monitoring."
      },
      {
        "q": "5. What are the major complications to monitor for in children, and what preventive vaccination strategy is recommended?",
        "a": "Key complications:\n- Delayed neurological sequelae: Sensorineural hearing loss (most common long-term complication in pediatric pneumococcal meningitis — mandatory formal audiology testing before/after discharge!), seizures, hydrocephalus, subdural effusion/empyema, cranial nerve palsies (CN III, IV, VI, VII), and intellectual deficits.\n- Immediate complications: Cerebral edema/herniation, septic shock, DIC, and SIADH.\n- Prevention: Routine childhood Pneumococcal Conjugate Vaccination (PCV13/PCV15/PCV20) plus PPSV23 for high-risk or asplenic individuals (post-splenectomy patients also receive Hib, Meningococcal, and annual Influenza vaccines plus prophylactic Penicillin V)."
      }
    ]
  },
  {
    "id": 89,
    "title": "حالة 89: Listeria monocytogenes Meningitis in Pregnancy",
    "topic": "Listeria monocytogenes Meningitis in Pregnancy",
    "category": "Meningitis & CNS",
    "scenario": "A 30-year-old pregnant woman develops sepsis with headache and neck stiffness after eating coleslaw, soft cheese, and cantaloupes at a potluck dinner. Two other women who attended the event develop self-limiting abdominal cramps, nausea, and vomiting.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and causative organism, and which specific clues in this scenario justify your choice?",
        "a": "Most likely diagnosis: Acute bacterial meningitis and sepsis caused by Listeria monocytogenes.\n- Justifying clinical and epidemiological clues:\n  1. Pregnancy (physiological impairment of cell-mediated immunity confers a ~10–20-fold increased risk of invasive listeriosis).\n  2. Classic high-risk refrigerated foods: Unpasteurized soft cheese, coleslaw (deli salads), and cantaloupes (Listeria is psychrotrophic and multiplies at refrigerator temperatures of 4°C).\n  3. Simultaneous self-limiting febrile gastroenteritis (abdominal cramps, nausea, vomiting) in immunocompetent attendees who ate the same contaminated food, while the pregnant host developed invasive sepsis and meningitis."
      },
      {
        "q": "2. What are the key microbiological features of Listeria monocytogenes and which other patient populations are uniquely susceptible?",
        "a": "Microbiology:\n- Facultative intracellular, aerobic, Gram-positive non-spore-forming rod.\n- Exhibits characteristic 'tumbling motility' at room temperature (20–25°C), is catalase-positive and beta-hemolytic, and spreads directly from cell to cell via actin rockets (evading humoral antibodies).\n- High-risk groups (remember to always add Listeria coverage in meningitis for these groups!):\n  1. Pregnant women.\n  2. Neonates (<1 month of age — early-onset granulomatosis infantiseptica or late-onset neonatal meningitis).\n  3. Adults aged >50 years.\n  4. Immunocompromised hosts (corticosteroids, transplant recipients, chemotherapy, HIV, alcoholics)."
      },
      {
        "q": "3. What confirmatory investigations are required and what atypical CSF features may be encountered?",
        "a": "Diagnostic workup:\n1. Blood cultures (2 sets before antibiotics): Very high diagnostic yield in invasive listeriosis (often positive in >60–75% of cases).\n2. Lumbar Puncture & CSF Analysis: Elevated opening pressure, elevated protein (>100–150 mg/dL), low glucose (<40 mg/dL). Importantly, while CSF pleocytosis is often neutrophilic, up to 25–30% of Listeria meningitis cases show a lymphocytic or monocytic predominance.\n3. CSF Gram stain & Culture / Multiplex PCR: Gram stain sensitivity is relatively low (<40%) because Listeria is intracellular and easily decolorized; CSF culture and PCR confirm the diagnosis."
      },
      {
        "q": "4. What is the definitive first-line antimicrobial treatment, and why is standard empiric Ceftriaxone monotherapy a dangerous OSCE error here?",
        "a": "First-line treatment for Listeria monocytogenes meningitis:\n- IV Ampicillin (2 g IV every 4 hours) PLUS IV Gentamicin (for bactericidal synergy during initial therapy, with close renal/fetal monitoring) for a prolonged course of at least 21 days.\n- CRITICAL OSCE RULE: Cephalosporins (Ceftriaxone, Cefotaxime) have NO activity against Listeria monocytogenes (intrinsic resistance due to poor penicillin-binding protein affinity). Therefore, IV Ampicillin MUST always be added to empiric meningitis regimens in pregnant women, neonates, adults >50 years, and immunocompromised patients.\n- Penicillin-allergic alternative: IV Trimethoprim-Sulfamethoxazole (avoided in 1st trimester and near term when possible) or IV Meropenem."
      },
      {
        "q": "5. What are the maternal-fetal complications of listeriosis in pregnancy, and what dietary prevention advice should be given to pregnant women?",
        "a": "Obstetric and fetal complications:\n- Chorioamnionitis, preterm labor, spontaneous miscarriage, intrauterine fetal death/stillbirth, and severe neonatal sepsis or meningitis (granulomatosis infantiseptica).\n- Maternal complications: Rhombencephalitis (brainstem encephalitis with cranial nerve palsies and ataxia), brain abscess, and septic shock.\n- Dietary prevention in pregnancy: Strictly avoid unpasteurized milk and soft cheeses (feta, brie, camembert), deli meats/hot dogs unless steaming hot, refrigerated pâtés/smoked seafood, pre-prepared coleslaw/deli salads, and unwashed raw produce or cut melons (cantaloupe)."
      }
    ]
  },
  {
    "id": 90,
    "title": "حالة 90: Acute Bacterial Meningitis with Raised Intracranial Pressure (Papilledema)",
    "topic": "Acute Bacterial Meningitis with Raised Intracranial Pressure",
    "category": "Meningitis & CNS",
    "scenario": "A 54-year-old hypertensive man with rheumatoid arthritis, currently taking methotrexate, presents to the emergency department with fever, headache, neck stiffness, and increased sensitivity to light. Neurological examination is normal except for fundus examination, which reveals bilateral blurring of the optic disc margins (papilledema) and retinal venous engorgement.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and what MUST be the immediate next step in managing this patient?",
        "a": "Most likely diagnosis: Acute bacterial meningitis complicated by raised intracranial pressure (ICP), evidenced by fever, headache, neck stiffness, photophobia, and bilateral papilledema with retinal venous engorgement.\n- IMMEDIATE NEXT STEP (Critical OSCE Rule): Draw blood cultures and IMMEDIATELY administer IV Dexamethasone + Empiric IV Antibiotics FIRST, THEN perform an urgent non-contrast CT Brain BEFORE attempting lumbar puncture!\n- Why NOT immediate lumbar puncture? Papilledema indicates significantly raised ICP — performing LP before excluding a space-occupying lesion or brain shift risks fatal cerebellar tonsillar or transtentorial herniation.\n- Why NOT wait for CT before antibiotics? Empirical antibiotics should NEVER be delayed while waiting for neuroimaging or LP."
      },
      {
        "q": "2. What are the classic indications for performing neuroimaging (CT brain) prior to lumbar puncture in suspected meningitis?",
        "a": "Remember the Hawari 'FAILS' mnemonic for pre-LP CT Brain indications:\n- F: Focal neurological deficits (hemiparesis, cranial nerve palsy, gaze palsy).\n- A: Altered mental status / moderate-to-severe impaired consciousness (GCS ≤12) or rapid drop in GCS.\n- I: Immunocompromised state (HIV, transplant, chemotherapy, steroids, or methotrexate — present in this patient!).\n- L: Lesion / history of CNS disease (mass, stroke, focal infection) OR signs of raised ICP such as papilledema (present in this patient!).\n- S: Seizures (new-onset within 1 week).\n- This patient has TWO independent indications for CT before LP: bilateral papilledema and methotrexate immunosuppression."
      },
      {
        "q": "3. Which exact empiric IV antimicrobial and steroid regimen is indicated for this 54-year-old immunosuppressed man?",
        "a": "Because this patient is >50 years old AND immunocompromised (methotrexate), empiric coverage MUST target S. pneumoniae, N. meningitidis, aerobic Gram-negative bacilli, AND Listeria monocytogenes:\n1. IV Dexamethasone: 10 mg IV q6h (for 4 days), given BEFORE or WITH the first antibiotic dose to attenuate subarachnoid inflammation and cerebral edema.\n2. IV Ceftriaxone (2 g IV q12h) OR Cefotaxime (2 g IV q4–6h).\n3. IV Vancomycin (15–20 mg/kg IV q8–12h) to cover drug-resistant S. pneumoniae.\n4. IV Ampicillin (2 g IV q4h) — MANDATORY here for Listeria monocytogenes coverage (age >50 + immunosuppression)."
      },
      {
        "q": "4. Once CT brain rules out mass effect/herniation risk and LP is safely performed, what CSF tests should be ordered given his methotrexate therapy?",
        "a": "Standard 3-tube CSF evaluation plus opportunistic infection workup:\n- Tube 1 (Hematology): Cell count and differential (bacterial meningitis: >1,000 WBC/µL with >80% PMNs; lymphocytic predominance raises suspicion for Listeria, TB, viral, or fungal meningitis).\n- Tube 2 (Chemistry): Glucose (<40 mg/dL or CSF:blood ratio <0.4 in bacterial/TB/fungal) and Protein (>150 mg/dL).\n- Tube 3 (Microbiology): Gram stain, bacterial culture, multiplex meningitis/encephalitis PCR.\n- Opportunistic tests (given methotrexate immunosuppression): Cryptococcal antigen (CrAg) / India ink, AFB smear + GeneXpert MTB/RIF for TB meningitis, and HSV/VZV PCR."
      },
      {
        "q": "5. What infection control precautions and raised-ICP/complication measures should be instituted?",
        "a": "IPC & Supportive ICU Management:\n- Droplet isolation precautions (surgical mask, gloves, gown, private room) for at least 24 hours after initiating effective antibiotics until N. meningitidis is excluded.\n- Raised ICP management: Elevate head of bed to 30°, avoid hypotonic IV fluids, treat fever aggressively (IV paracetamol), consider osmotic therapy (IV Mannitol or hypertonic saline) if signs of impending herniation develop, and secure airway (intubate) if GCS drops ≤8.\n- Monitor for complications: Cerebral infarction, venous sinus thrombosis, hydrocephalus, subdural empyema, seizures, and septic shock."
      }
    ]
  },
  {
    "id": 91,
    "title": "حالة 91: Acute Bacterial Meningitis in a Young Adult",
    "topic": "Acute Bacterial Meningitis in a Young Adult",
    "category": "Meningitis & CNS",
    "scenario": "A 20-year-old man develops fever, neck stiffness, and headache. On examination, his blood pressure is normal, but he is tachycardic and febrile. Neck flexion is painful. There are no focal neurological signs. Examination of the ears, throat, and sinuses is normal.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and the most probable causative organism in this specific 20-year-old patient, and why is the normal ENT exam a key clue?",
        "a": "Most likely diagnosis: Acute bacterial (septic) meningitis.\n- Most probable causative organism: Neisseria meningitidis (with Streptococcus pneumoniae as the major alternative in adults).\n- Why the normal ENT exam matters: S. pneumoniae meningitis frequently arises via contiguous spread from a parameningeal suppurative focus (otitis media, mastoiditis, or sinusitis). In an otherwise healthy 20-year-old young adult with completely normal ears, throat, and sinuses, hematogenous spread of Neisseria meningitidis (especially common in adolescents/young adults, college dormitories, and military recruits) is classically favored.\n- Differential diagnosis: Pneumococcal meningitis, viral (aseptic) meningitis (enteroviruses, HSV-2), early HSV encephalitis, and subarachnoid hemorrhage."
      },
      {
        "q": "2. What are the classical bedside clinical signs of meningeal irritation, how are they elicited, and what is their diagnostic accuracy?",
        "a": "Meningeal irritation occurs because inflammation trickles down from cranial to spinal meninges, irritating spinal nerve roots and causing protective muscle spasm:\n1. Nuchal rigidity: Painful stiffness on passive neck flexion with preserved side-to-side rotation (differentiate from functional neck rigidity by placing the patient's head beyond the bed edge — it stays stiff in true meningitis but falls with gravity in functional rigidity).\n2. Kernig's sign: Flex hip and knee to 90°, then attempt to extend the knee; failure/pain preventing extension beyond 135° due to hamstring spasm is positive.\n3. Brudzinski's neck sign: Passive flexion of the neck causes involuntary flexion of the hips and knees.\n- Diagnostic accuracy (Hawari practical pearl): Kernig's and Brudzinski's signs have LOW sensitivity (20–30%, so absence does NOT exclude meningitis) but HIGH specificity (85–95%, so positivity strongly supports meningitis)."
      },
      {
        "q": "3. Is lumbar puncture safe to perform immediately in this patient, and what findings distinguish bacterial (septic) from viral (aseptic) meningitis?",
        "a": "Yes — immediate LP is safe here because the patient has NO pre-LP CT indications (alert, no focal neurological signs, no papilledema, no seizures, immunocompetent).\n- Septic (Bacterial) vs. Aseptic (Viral) CSF comparison:\n  • Opening pressure: High (>180 mmH2O) in bacterial vs. normal/mildly elevated (<180 mmH2O) in viral.\n  • Appearance: Turbid/cloudy in bacterial vs. clear in viral.\n  • Cells: High PMN leukocytosis (>80% neutrophils, >1,000/µL) in bacterial vs. lymphocytic pleocytosis in viral.\n  • Protein: Markedly elevated (>150 mg/dL) in bacterial vs. normal-to-mildly elevated (50–100 mg/dL) in viral.\n  • Glucose: Low (<40 mg/dL; ratio <0.4) in bacterial vs. normal (>40 mg/dL) in viral.\n  • Microbiology: Gram-negative intracellular kidney-shaped diplococci (N. meningitidis) or Gram-positive diplococci (S. pneumoniae) + positive culture/blood cultures (~50% positive) vs. negative Gram stain/bacterial culture + positive viral PCR."
      },
      {
        "q": "4. What is the immediate empiric management protocol for this 20-year-old man?",
        "a": "Bacterial meningitis is a medical emergency — initiate therapy immediately (never delay antibiotics for LP):\n1. IV access, oxygen if needed, draw blood cultures (x2), and perform prompt LP.\n2. Adjunctive steroid: IV Dexamethasone (10 mg IV q6h for 4 days) given BEFORE or WITH the first antibiotic dose.\n3. Empiric IV Antibiotics (immunocompetent adult aged 1 month–50 years): IV Ceftriaxone (2 g IV q12h) OR Cefotaxime PLUS IV Vancomycin (15–20 mg/kg IV q8–12h). (Ampicillin is NOT required here since age ≤50 and immunocompetent.)\n4. Duration: 7 days for confirmed N. meningitidis; 10–14 days for S. pneumoniae."
      },
      {
        "q": "5. What infection control precautions, fatal complications, and close-contact prophylaxis apply if Neisseria meningitidis is confirmed?",
        "a": "IPC, Complications & Prophylaxis for Meningococcal Disease:\n- Isolation: Droplet precautions (surgical mask, gloves, gown, private room) for at least 24 hours after starting effective antibiotics.\n- Red-flag complications: Inspect skin carefully for a non-blanching petechial/purpuric rash (meningococcemia) — warns of rapid progression to septic shock, DIC, and Waterhouse-Friderichsen syndrome (bilateral adrenal hemorrhage).\n- Chemoprophylaxis for close household/dormitory/kissing contacts (given within 24 hours): Oral Rifampicin (600 mg PO every 12 hours for 2 days), OR single-dose Oral Ciprofloxacin (500 mg once), OR single-dose IM Ceftriaxone (250 mg once — preferred in pregnancy).\n- Vaccination: Quadrivalent meningococcal vaccine (serogroups A, C, Y, W-135) and MenB vaccine for high-risk groups (dormitory students, recruits, travelers to endemic areas, asplenia)."
      }
    ]
  },
  {
    "id": 92,
    "title": "حالة 92: Antenatal Infectious Disease Evaluation in Pregnancy (22 Weeks)",
    "topic": "Infections in Pregnancy (TORCH & Antenatal Assessment)",
    "category": "Other Infections & Parasites",
    "scenario": "A 33-year-old primigravida woman presents to her GP at 22 weeks' gestation.",
    "questions": [
      {
        "q": "1. Which high-yield infectious diseases must be evaluated or screened for in a primigravida at 22 weeks' gestation, and what targeted exposure history should the GP elicit?",
        "a": "Key infectious diseases in mid-trimester pregnancy:\n- TORCH & viral rash/exposure infections: Toxoplasma gondii, Rubella, Cytomegalovirus (CMV), Herpes Simplex Virus (HSV), Varicella-Zoster Virus (VZV/chickenpox), and Parvovirus B19.\n- Bacterial infections: Asymptomatic bacteriuria / acute pyelonephritis (E. coli), Listeria monocytogenes, Syphilis, and Group B Streptococcus (later in 3rd trimester).\n- Bloodborne & hepatotropic viruses: HIV, Hepatitis B (HBV), Hepatitis C (HCV), and Hepatitis E (HEV — high fulminant mortality in late pregnancy).\n- Essential GP exposure history: Contact with children having vesicular or maculopapular rashes (VZV, Parvovirus B19, Rubella), cat litter/soil or undercooked meat (Toxoplasma), unpasteurized soft cheeses/deli salads (Listeria), travel history, sexual/STI history, and vaccination status (Rubella, VZV, HBV)."
      },
      {
        "q": "2. How does gestational age affect vertical transmission and fetal severity in congenital toxoplasmosis, and what are the classic fetal sequelae of major mid-trimester TORCH infections?",
        "a": "Congenital Toxoplasmosis (Al-Azhar curriculum):\n- Vertical transmission risk increases with gestational age (~15% in 1st trimester → ~30% in 2nd trimester → ~60% in 3rd trimester), whereas fetal disease severity is inversely proportional to gestational age (most severe in 1st trimester).\n- Classic congenital toxoplasmosis triad (Sabin's triad): Chorioretinitis, hydrocephalus, and diffuse intracranial calcifications (plus microcephaly, seizures, mental retardation).\n- Other mid-trimester TORCH hallmarks:\n  • CMV: Sensorineural hearing loss, periventricular calcifications, microcephaly, blueberry muffin rash.\n  • VZV: Congenital varicella syndrome (limb hypoplasia, skin scarring — highest risk <20 weeks); at 22 weeks, maternal varicella pneumonia is a major life-threatening complication!\n  • Parvovirus B19: Fetal red cell aplasia causing severe fetal anemia and non-immune hydrops fetalis."
      },
      {
        "q": "3. What are the essential routine and targeted microbiological investigations to order in a pregnant woman with suspected antenatal infection?",
        "a": "Antenatal infectious diagnostic panel:\n1. Routine antenatal screening (confirm booking results): HBsAg, HIV Ag/Ab combo, Syphilis serology (VDRL/RPR + TPHA), Rubella IgG immunity, and midstream urine culture (to detect and treat asymptomatic bacteriuria and prevent pyelonephritis).\n2. Targeted testing if febrile/exposed:\n   - Toxoplasmosis: Specific IgM & IgG (if both positive, perform IgG avidity test to date infection; if acute maternal infection suspected, amniotic fluid PCR via amniocentesis after 18 weeks).\n   - VZV exposure: Check maternal VZV IgG urgently if uncertain of past chickenpox.\n   - Active genital/mucocutaneous vesicles: Lesion swab HSV PCR.\n   - High fever/sepsis: Blood cultures (rule out Listeria/urosepsis) and fetal anomaly/growth ultrasound."
      },
      {
        "q": "4. Which antimicrobials and antiparasitic agents are SAFE versus strictly CONTRAINDICATED during pregnancy?",
        "a": "Safe / First-line agents in pregnancy:\n- Antibacterials: Penicillins (Amoxicillin, Ampicillin), Cephalosporins (Ceftriaxone, Cephalexin), Macrolides (Erythromycin, Azithromycin), Nitrofurantoin (safe in 2nd trimester; avoid at term).\n- Antivirals: Acyclovir (safe and indicated for severe VZV pneumonia or active HSV; suppressive acyclovir in 3rd trimester reduces neonatal HSV shedding).\n- Acute maternal Toxoplasmosis: Spiramycin 3 g/day (reduces vertical transmission by ~60%); if amniocentesis confirms fetal infection after the 1st trimester, switch to Pyrimethamine + Sulfadiazine + Folinic acid.\n- Strictly CONTRAINDICATED in pregnancy:\n  • Tetracyclines / Doxycycline (fetal teeth staining & bone growth inhibition).\n  • Fluoroquinolones (fetal cartilage arthropathy).\n  • Aminoglycosides / Streptomycin (fetal CN VIII ototoxicity/deafness).\n  • Ribavirin (strongly teratogenic), Chloramphenicol (gray baby syndrome), and Sulfonamides/TMP near term (kernicterus)."
      },
      {
        "q": "5. What are the key principles of vaccination and post-exposure prophylaxis (PEP) during pregnancy?",
        "a": "Vaccination & PEP rules in pregnancy:\n- Safe & Recommended (Inactivated vaccines): Inactivated seasonal Influenza vaccine (any trimester), Tdap (between 27–36 weeks to confer passive pertussis immunity to the newborn), and Hepatitis B vaccine (if susceptible and at risk).\n- Strictly CONTRAINDICATED (Live-attenuated vaccines): MMR (Rubella/Measles/Mumps), Varicella (VZV), BCG, live intranasal influenza, and Yellow Fever (theoretical risk of fetal infection — defer until postpartum).\n- Post-Exposure Prophylaxis (PEP):\n  • Non-immune VZV exposure: Varicella-Zoster Immune Globulin (VZIG) within 10 days of exposure (or oral acyclovir prophylaxis per local guidance); if active chickenpox rash develops, start oral/IV Acyclovir immediately within 24 hours.\n  • HBV exposure: HBIG + HBV vaccine series immediately within 24 hours."
      }
    ]
  },
  {
    "id": 93,
    "title": "حالة 93: Herpes Simplex Virus (HSV) Encephalitis",
    "topic": "Herpes Simplex Virus (HSV) Encephalitis",
    "category": "Meningitis & CNS",
    "scenario": "A 34-year-old patient presents with high fever, rapidly progressive confusion, and olfactory hallucinations.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and differential diagnosis, and which clinical features in this case specifically point to it?",
        "a": "Most likely diagnosis: Herpes Simplex Virus (HSV-1) Encephalitis — the most common cause of sporadic, fatal, yet treatable viral encephalitis.\n- Justifying features in this case:\n  1. Acute high fever + rapidly progressive encephalopathy (confusion/altered mental status) indicating brain parenchymal inflammation.\n  2. Olfactory hallucinations — a classic localizing symptom of medial temporal lobe (uncus) irritation, the hallmark anatomical predilection of HSV-1.\n- Differential diagnosis: Acute bacterial meningitis, autoimmune limbic encephalitis (e.g., anti-NMDA receptor antibody), arboviral encephalitis (West Nile virus), cerebral malaria, brain abscess, and toxic/metabolic encephalopathy."
      },
      {
        "q": "2. What is the pathogenesis of HSV-1 encephalitis and what other neurological signs may develop?",
        "a": "Pathogenesis:\n- HSV-1 remains latent in trigeminal/dorsal root ganglia after primary infection and reactivates (triggered by stress, trauma, fever, or immunosuppression), spreading retrogradely along cranial nerves into the CNS.\n- Causes acute focal necrotizing hemorrhagic encephalitis predominantly involving the temporal lobes, inferior frontal lobes, and insular cortex.\n- Additional clinical features: Bizarre behavioral or personality changes, focal or generalized seizures (including status epilepticus), dysphasia/aphasia, hemiparesis, superior quadrant visual field defects, and rapidly declining GCS."
      },
      {
        "q": "3. What is the single most sensitive and specific diagnostic test to confirm HSV encephalitis, and what do CSF analysis, MRI, and EEG show?",
        "a": "Confirmatory diagnostic workup:\n1. Gold Standard (Most sensitive >95% & specific >99%): Polymerase Chain Reaction (PCR) for HSV-1/2 DNA in the CSF. (Clinical pearl: CSF PCR may be falsely negative in the first 24–72 hours; if clinical suspicion remains high, continue acyclovir and repeat LP in 3–7 days!)\n2. Routine CSF Analysis: Lymphocytic pleocytosis (10–500 cells/µL), elevated RBCs/xanthochromia (reflecting hemorrhagic necrosis even without a traumatic tap), mildly elevated protein, and normal glucose.\n3. Brain MRI (Imaging of choice): T2/FLAIR hyperintensity and cortical swelling in the asymmetric bilateral medial temporal and inferior frontal lobes/insula (CT brain is often normal early).\n4. EEG: Temporal lobe slow-wave complexes and periodic lateralized epileptiform discharges (PLEDs)."
      },
      {
        "q": "4. What is the immediate and definitive treatment of choice for HSV encephalitis, including exact dosing and duration?",
        "a": "Immediate antiviral therapy is life-saving and MUST be started empirically on clinical suspicion — NEVER wait for CSF PCR or MRI results:\n1. First-line specific therapy: Intravenous Acyclovir 10 mg/kg IV every 8 hours for 14–21 days (note: Ceftriaxone alone has zero effect on HSV, though empiric bacterial meningitis antibiotics are often co-administered initially until bacterial meningitis is excluded).\n2. Renal protection: Maintain vigorous IV hydration and monitor serum creatinine to prevent acyclovir crystal-induced nephropathy.\n3. Supportive ICU care: Airway protection/intubation if GCS ≤8, anticonvulsants (IV phenytoin or levetiracetam) for seizures, antipyretics, and management of cerebral edema/raised ICP."
      },
      {
        "q": "5. What is the prognosis of HSV encephalitis and what long-term neurological sequelae occur in survivors?",
        "a": "Prognosis:\n- Untreated HSV encephalitis carries ~70% mortality; early IV Acyclovir dramatically reduces mortality to 15–30%, making early empiric initiation the strongest modifiable predictor of survival.\n- Long-term sequelae (Post-Encephalitic Syndrome): Survivors frequently suffer persistent cognitive impairment, anterograde/retrograde amnesia, dysphasia, refractory epilepsy, motor deficits, and psychiatric/behavioral changes (e.g., hypomania, hyperphagia, aggression, or Klüver-Bucy-like features)."
      }
    ]
  },
  {
    "id": 94,
    "title": "حالة 94: HSV Encephalitis (Temporal Lobe Localization & Uncinate Fits)",
    "topic": "HSV Encephalitis (Temporal Lobe Localization)",
    "category": "Meningitis & CNS",
    "scenario": "A patient presents with acute encephalitis. During the review of systems, the family reports that the patient complained of experiencing a strange smell of 'burnt rubber' just before becoming confused and having a seizure.",
    "questions": [
      {
        "q": "1. Which specific brain region is localized by this 'burnt rubber' olfactory aura, and what is the most likely infectious etiology?",
        "a": "Anatomical localization: The medial Temporal Lobe — specifically the uncus (piriform olfactory cortex and amygdala). An unpleasant olfactory hallucination ('burnt rubber' smell) preceding confusion and a seizure is a classic temporal lobe focal seizure aura known as an 'uncinate fit'.\n- Most likely infectious etiology: Herpes Simplex Virus type 1 (HSV-1) encephalitis, which exhibits classic neurotropism for the medial temporal lobes, inferior frontal lobes, and limbic/insular cortex."
      },
      {
        "q": "2. How do you differentiate encephalitis from meningitis clinically, and how is viral (HSV) encephalitis distinguished from autoimmune encephalitis?",
        "a": "Meningitis vs. Encephalitis:\n- Meningitis: Primarily involves the leptomeninges (pia + arachnoid) → fever, headache, photophobia, and meningeal signs (nuchal rigidity, Kernig's, Brudzinski's) with preserved cortical function initially.\n- Encephalitis: Primarily involves the brain parenchyma → early altered mental status/confusion, personality/behavioral disturbances, focal neurological deficits (olfactory aura, aphasia, hemiparesis), and seizures.\n- HSV vs. Autoimmune Encephalitis (Al-Azhar curriculum):\n  • HSV encephalitis: Acute febrile onset, asymmetric temporal/frontal hyperintensity on MRI, positive CSF HSV DNA PCR, responds to IV Acyclovir.\n  • Autoimmune encephalitis (e.g., anti-NMDA receptor): Often subacute psychiatric/behavioral/movement disorder, symmetric limbic involvement on MRI, neural autoantibodies in CSF/serum, responds to immunosuppressive therapy (steroids, IVIG, plasmapheresis)."
      },
      {
        "q": "3. What are the essential confirmatory investigations and expected neuroimaging/CSF findings?",
        "a": "Confirmatory investigations:\n1. CSF HSV-1/2 DNA PCR: Gold standard diagnostic test (>95% sensitivity, >99% specificity).\n2. Routine CSF analysis: Lymphocytic pleocytosis, elevated RBCs (hemorrhagic necrosis), elevated protein, and normal glucose.\n3. Brain MRI (T2/FLAIR/DWI): Asymmetric hyperintensity and edema of the medial temporal lobe, inferior frontal cortex, and insula (far more sensitive than CT scan early in the disease).\n4. EEG: Localized temporal lobe periodic lateralized epileptiform discharges (PLEDs) or focal slow-wave activity."
      },
      {
        "q": "4. What is the immediate medical management for this patient, including seizure and antiviral therapy?",
        "a": "Immediate emergency management:\n1. Empiric IV Acyclovir: 10 mg/kg IV every 8 hours started IMMEDIATELY (without waiting for PCR/MRI confirmation) and continued for 14–21 days with adequate IV hydration to prevent crystal nephropathy.\n2. Acute seizure management: IV benzodiazepine (Lorazepam or Diazepam) for active seizures, followed by IV antiepileptic maintenance (Levetiracetam or Phenytoin).\n3. Airway & ICU monitoring: Serial GCS assessment (intubate immediately if GCS ≤8), antipyretics, and monitoring for raised ICP or SIADH."
      },
      {
        "q": "5. What acute and chronic complications must be anticipated in temporal lobe encephalitis?",
        "a": "Complications:\n- Acute: Status epilepticus, severe cerebral edema with uncal/transtentorial herniation, hypothalamic-pituitary dysfunction (SIADH causing hyponatremia, diabetes insipidus), aspiration pneumonia, and death.\n- Chronic: Post-encephalitic syndrome (severe amnesia, cognitive decline, aphasia, behavioral/personality changes) and chronic focal/generalized epilepsy."
      }
    ]
  },
  {
    "id": 95,
    "title": "حالة 95: Hepatitis B Virus (HBV) Needlestick Post-Exposure Prophylaxis",
    "topic": "HBV Needlestick Post-Exposure Prophylaxis (PEP)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A previously unvaccinated healthcare worker sustains a needlestick injury from a patient with active, HBsAg-positive Hepatitis B.",
    "questions": [
      {
        "q": "1. What is the exact post-exposure prophylaxis (PEP) regimen required for this unvaccinated healthcare worker, and when must it be given?",
        "a": "For an unvaccinated healthcare worker (HCW) exposed to an HBsAg-positive source, BOTH passive AND active immunoprophylaxis must be given as soon as possible (preferably within 24 hours, and up to 7 days):\n1. Hepatitis B Immune Globulin (HBIG): 1 single IM dose (0.06 mL/kg) immediately for instant passive antibody protection.\n2. Hepatitis B Vaccine: 1st IM dose immediately at a DIFFERENT anatomical site (contralateral deltoid), followed by completion of the full 3-dose HBV vaccine series (at 0, 1, and 6 months).\n- CRITICAL OSCE TRAP: Do NOT prescribe chronic oral HBV antivirals (such as Entecavir, Tenofovir, or Lamivudine) for HBV needlestick PEP!"
      },
      {
        "q": "2. What are the immediate first-aid wound care steps and occupational transmission risks of HBV compared with HCV and HIV?",
        "a": "Immediate First Aid at the exposure site:\n1. Wash the needlestick wound immediately and thoroughly with soap and water (flush mucous membranes with water if splashed).\n2. Do NOT scrub aggressively, do NOT squeeze/milk the wound, and do NOT apply caustic agents (bleach); antiseptics (e.g., 2–4% chlorhexidine) are not contraindicated.\n3. Report immediately to the hospital Infection Control team and obtain baseline serology from the HCW (HBsAg, anti-HBs, anti-HBc, anti-HCV, HIV).\n- Percutaneous needlestick transmission risk (Al-Azhar IPC lecture):\n  • HBV: Highest risk — 6% to 35% (especially high if source is HBeAg-positive).\n  • HCV: 1% to 7%.\n  • HIV: ~0.3% (0.03–0.3% depending on exposure depth/viral load)."
      },
      {
        "q": "3. How would HBV PEP management change if the healthcare worker had already been vaccinated previously?",
        "a": "Management depends on documented vaccination status and anti-HBs titer (Al-Azhar PEP lecture):\n- Fully vaccinated with documented protective titer (anti-HBs ≥ 10 mIU/mL): NO HBV PEP is needed regardless of the source patient's HBsAg status.\n- Fully vaccinated with unknown anti-HBs titer: Test HCW's anti-HBs immediately — if ≥ 10 mIU/mL → no PEP; if < 10 mIU/mL (and source is HBsAg+ or unknown) → give 1 dose of HBIG + 1 dose of HBV vaccine (or complete revaccination series).\n- Documented vaccine non-responder (completed 2 full HBV vaccine series and anti-HBs remains < 10 mIU/mL) exposed to HBsAg+ source: Give TWO doses of HBIG (first dose immediately, second dose 1 month later)."
      },
      {
        "q": "4. What post-vaccination serological follow-up is required for this healthcare worker after completing the vaccine series?",
        "a": "Follow-up testing:\n- Perform quantitative anti-HBs titer testing 1 to 2 months after the final (3rd) dose of the Hepatitis B vaccine series (note: do not test immediately after HBIG, as passive antibodies from HBIG can falsely elevate anti-HBs for 4–6 months).\n- Target protective immunity: anti-HBs ≥ 10 mIU/mL.\n- If anti-HBs remains < 10 mIU/mL, repeat the full 3-dose revaccination series and retest 1–2 months after completion.\n- Also test HBsAg and anti-HBc at 6 months post-exposure to confirm the HCW did not acquire HBV infection."
      },
      {
        "q": "5. How does post-exposure management differ if the source patient were also positive for HCV or HIV, and how are sharps injuries prevented?",
        "a": "Comparison with HCV and HIV PEP:\n- HCV: There is NO vaccine and NO post-exposure prophylaxis (no immunoglobulin or antiviral PEP). Test HCW at baseline and follow up with HCV RNA / anti-HCV to detect acute infection early for curative oral DAA therapy.\n- HIV: Start 28 days of oral Antiretroviral Therapy (ART) PEP as early as possible (ideally within 2 hours, up to 72 hours post-exposure), with HIV testing at baseline, 1 month, and 3 months.\n- Sharps Prevention (IPC): Mandatory pre-employment HBV vaccination for all HCWs, NEVER recap used needles, dispose of sharps immediately at point of use in puncture-resistant biohazard containers, and never fill sharps boxes beyond 3/4 capacity."
      }
    ]
  },
  {
    "id": 96,
    "title": "حالة 96: Acute Hepatitis E Virus (HEV) Infection in Third-Trimester Pregnancy",
    "topic": "Acute Hepatitis E in Pregnancy (Fulminant Hepatic Failure)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 26-year-old pregnant woman in her third trimester presents with acute onset of jaundice, fever, and altered mental status. Laboratory tests reveal elevated liver enzymes and positive IgM anti-HEV.",
    "questions": [
      {
        "q": "1. What is the diagnosis and the single most critical clinical risk associated with this infection in this patient?",
        "a": "Diagnosis: Acute Hepatitis E Virus (HEV) infection complicated by Fulminant Hepatic Failure / Acute Liver Failure (ALF) in the third trimester of pregnancy.\n- Most critical clinical risk: Extremely high maternal mortality rate (20–40%) due to rapid progression to fulminant hepatic failure (hepatic encephalopathy, severe coagulopathy/DIC, cerebral edema, and postpartum hemorrhage), along with high rates of fetal loss, preterm delivery, and vertical transmission.\n- Contrast with other viral hepatitides: While <0.5% of acute HAV and ~1% of acute HBV progress to ALF, 20–40% of pregnant women with acute HEV in developing countries develop fulminant ALF. Unlike HBV/HCV, HEV does NOT typically cause chronic cirrhosis or HCC in immunocompetent hosts."
      },
      {
        "q": "2. What are the virological characteristics, mode of transmission, and genotypes of Hepatitis E virus?",
        "a": "Virology & Epidemiology:\n- HEV is a non-enveloped, single-stranded RNA virus (Hepeviridae).\n- Primary mode of transmission: Fecal-oral route via fecally contaminated drinking water (especially large waterborne epidemics in developing countries — genotypes 1 and 2, which specifically carry the severe mortality risk in 3rd-trimester pregnancy).\n- Genotypes 3 and 4: Zoonotic (undercooked pork/game meat in developed nations) and can rarely cause chronic hepatitis in severely immunocompromised/solid-organ transplant patients."
      },
      {
        "q": "3. What diagnostic criteria confirm Acute Liver Failure (ALF) here, and what differential diagnoses of acute jaundice with altered mental status in late pregnancy must be excluded?",
        "a": "Confirming ALF & Full Workup:\n- ALF diagnostic criteria: Acute hepatic injury (markedly elevated AST/ALT and bilirubin) + Coagulopathy (INR > 1.5) + Hepatic Encephalopathy (altered mental status present in this patient!) in a patient without pre-existing cirrhosis.\n- Essential labs & imaging: PT/INR, serum bilirubin, AST/ALT, albumin, serum ammonia, frequent blood glucose checks (severe hypoglycemia is common in ALF), CBC/platelets/fibrinogen (DIC/HELLP), KFTs, HEV RNA RT-PCR, and abdominal ultrasound with hepatic Doppler (exclude biliary obstruction and Budd-Chiari syndrome).\n- Key pregnancy-specific DD (Al-Azhar Acute Hepatitis lecture): Acute Fatty Liver of Pregnancy (AFLP), HELLP syndrome / severe preeclampsia, other viral hepatitides (HAV, HBV, HSV hepatitis), and acetaminophen toxicity."
      },
      {
        "q": "4. What is the immediate inpatient management of this patient, and why is Ribavirin contraindicated?",
        "a": "Immediate ICU & Multidisciplinary Management (Hepatology + Obstetrics + Transplant Team):\n1. Urgent ICU admission and early consultation with a liver transplant center.\n2. Intensive supportive care (mainstay of therapy): IV fluids + dextrose infusion (prevent/treat hypoglycemia), airway protection/intubation if GCS ≤8, hepatic encephalopathy care (lactulose), cerebral edema management, vitamin K/FFP if active bleeding, and infection surveillance.\n3. Strict drug safety: Avoid ALL hepatotoxic drugs and sedatives. Ribavirin (sometimes used off-label in chronic HEV of transplant recipients) is STRICTLY CONTRAINDICATED in pregnancy because it is highly teratogenic!"
      },
      {
        "q": "5. How can Hepatitis E infection be prevented in endemic areas and among pregnant women?",
        "a": "Prevention & Public Health Measures:\n- Ensure safe, clean, boiled or adequately chlorinated drinking water (especially during floods or outbreaks).\n- Improve sanitation, sewage disposal, and strict hand hygiene with soap and water.\n- Advise pregnant women in or traveling to endemic areas to avoid untreated water, ice, raw/unwashed salads, and undercooked meat/shellfish.\n- Note: A recombinant HEV vaccine (HEV 239) has been licensed in China, though it is not yet universally integrated into routine global/Egyptian immunization programs."
      }
    ]
  },
  {
    "id": 97,
    "title": "حالة 97: Acute Hepatitis B Virus (HBV) Serological Window Period",
    "topic": "Acute HBV Infection (Serological Window Period)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A patient presents with symptoms of acute hepatitis. Blood tests are performed during the serological 'window period' of Hepatitis B virus infection.",
    "questions": [
      {
        "q": "1. Which serological marker is the ONLY detectable indicator of acute HBV infection during the 'window period', and why does this period occur?",
        "a": "Sole detectable acute serological marker: IgM anti-HBc (Hepatitis B core IgM antibody) — (total anti-HBc is also positive because it comprises IgM + IgG, but IgM anti-HBc specifically confirms recent/acute infection).\n- Pathophysiology of the window period: Occurs during the recovery transition of acute HBV when Hepatitis B surface antigen (HBsAg) has been cleared from the bloodstream (becoming negative) BEFORE protective Hepatitis B surface antibody (anti-HBs) rises to detectable levels.\n- Clinical pearl: Testing only HBsAg and anti-HBs during the window period misses the diagnosis of acute HBV — IgM anti-HBc MUST be included in any acute hepatitis panel!"
      },
      {
        "q": "2. How do you interpret all major Hepatitis B serological profiles in an OSCE exam?",
        "a": "Core HBV Serological Pattern Recognition (Al-Azhar Hepatitis curriculum):\n1. HBsAg (−), anti-HBc (−), anti-HBs (−) → Susceptible (never infected, unvaccinated → give HBV vaccine).\n2. HBsAg (−), anti-HBc (−), anti-HBs (+) → Immune due to HBV vaccination (vaccine contains HBsAg only, so anti-HBc is negative!).\n3. HBsAg (−), total anti-HBc (+), anti-HBs (+) → Immune due to resolved natural infection.\n4. HBsAg (+), IgM anti-HBc (+), anti-HBs (−) → Acute HBV infection (HBeAg+ indicates high viral replication & infectivity).\n5. HBsAg (−), IgM anti-HBc (+), anti-HBs (−) → Serological 'Window Period' of acute HBV.\n6. HBsAg (+ for >6 months), total anti-HBc (+), IgM anti-HBc (−), anti-HBs (−) → Chronic HBV infection."
      },
      {
        "q": "3. What additional laboratory investigations should be ordered to evaluate severity and rule out co-infections in acute HBV?",
        "a": "Comprehensive Acute Hepatitis Workup:\n- Liver injury & synthetic function: AST & ALT (typically markedly elevated >15x ULN, often >1,000 U/L), total and direct bilirubin, ALP/GGT, serum albumin, and PT/INR (essential to detect acute liver failure: INR >1.5 + hepatic encephalopathy!).\n- Virological markers: HBV DNA by quantitative PCR (can detect low-level viremia even during the window period), HBeAg/anti-HBe.\n- Co-infection screening: Anti-HAV IgM, Anti-HCV (with reflex HCV RNA), Anti-HDV (HDV requires HBV for replication — coinfection or superinfection!), and HIV testing.\n- Abdominal ultrasound: Excludes biliary obstruction or underlying chronic liver disease."
      },
      {
        "q": "4. What is the appropriate management of acute Hepatitis B, and when are oral nucleos(t)ide analogs (Entecavir/Tenofovir) indicated?",
        "a": "Management of Acute HBV:\n- Uncomplicated acute HBV (>95% of immunocompetent adults resolve spontaneously and develop lifelong anti-HBs immunity): Supportive care only (adequate hydration, nutrition, rest, strict avoidance of alcohol, acetaminophen excess, and other hepatotoxic drugs). Routine antiviral therapy is NOT required.\n- Indications for Antiviral Therapy (Entecavir or Tenofovir disoproxil/alafenamide) in ACUTE HBV:\n  1. Acute Liver Failure (coagulopathy INR >1.5 or hepatic encephalopathy).\n  2. Severe/protracted acute hepatitis (e.g., total bilirubin >3 mg/dL persisting >4 weeks or rising INR).\n  3. Immunocompromised patients or severe reactivation flare."
      },
      {
        "q": "5. What is the risk of progression to chronic HBV based on age, and what counseling/prophylaxis is needed for close contacts?",
        "a": "Prognosis & Chronicity Risk:\n- Immunocompetent adults: <5% progress to chronic HBV; ~1% progress to acute liver failure.\n- Neonates (vertical mother-to-child transmission): ~90% progress to chronic HBV (which is why birth-dose HBV vaccine within 24 hours + HBIG for infants of HBsAg+ mothers is mandatory!).\n- Contact & Transmission Prevention: Counsel patient to avoid sharing razors/toothbrushes/needles and practice barrier contraception until anti-HBs seroconversion is documented; screen sexual and household contacts and administer HBIG + HBV vaccine series to unvaccinated exposed partners."
      }
    ]
  },
  {
    "id": 98,
    "title": "حالة 98: Legionnaires' Disease (Legionella pneumophila Pneumonia)",
    "topic": "Legionella Pneumonia (Diagnostic Confirmation)",
    "category": "Other Infections & Parasites",
    "scenario": "A 54-year-old female is admitted with severe pneumonia following a holiday in Turkey. Bloods reveal both hyponatraemia and deranged liver function tests. A chest X-ray shows patchy alveolar infiltrates with consolidation in the right lower lobe.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and which specific clinical, epidemiological, and laboratory findings in this case justify it?",
        "a": "Most likely diagnosis: Legionnaires' disease — atypical pneumonia caused by Legionella pneumophila.\n- Justifying clues in this scenario:\n  1. Travel/hotel exposure: Recent holiday in Turkey (aerosolized contamination from hotel air-conditioning cooling towers, showers, or spa pools).\n  2. Severe pneumonia with patchy alveolar infiltrates/right lower lobe consolidation.\n  3. Classic extrapulmonary lab signature: Hyponatremia (secondary to SIADH) AND deranged liver function tests (elevated transaminases)."
      },
      {
        "q": "2. What are the microbiological properties of Legionella pneumophila and how is it transmitted?",
        "a": "Microbiology & Transmission:\n- Small, aerobic, intracellular Gram-negative rod that stains poorly on standard Gram stain (requires silver stain or specialized Buffered Charcoal Yeast Extract [BCYE] agar enriched with iron and L-cysteine to grow).\n- Replicates inside alveolar macrophages by inhibiting phagosome-lysosome fusion.\n- Transmission: Inhalation of contaminated water aerosols (hotel water tanks, cooling towers, misting devices, hot tubs). Critically, there is NO person-to-person transmission!"
      },
      {
        "q": "3. Which single investigation is most likely to rapidly confirm the diagnosis, and what are its limitations?",
        "a": "Best rapid confirmatory test: Urinary Legionella antigen test.\n- Advantages: Fast turnaround, high specificity (>99%), good sensitivity (~70–80%), and remains positive for days to weeks even after antibiotics have been initiated.\n- Key limitation: Detects ONLY Legionella pneumophila serogroup 1 (which causes ~80–90% of clinical cases, but misses non-serogroup-1 strains).\n- Additional diagnostic tests: Sputum/BAL NAAT (PCR — detects all serogroups/species), sputum culture on BCYE agar (gold standard for epidemiologic typing), and paired acute/convalescent serology (4-fold IgG rise)."
      },
      {
        "q": "4. What is the definitive first-line antimicrobial treatment, and why do beta-lactam antibiotics fail in Legionella pneumonia?",
        "a": "Definitive treatment (intracellularly active agents required):\n- First-line: Respiratory Fluoroquinolone (IV/PO Levofloxacin 750 mg daily or Moxifloxacin 400 mg daily) OR Macrolide (IV/PO Azithromycin 500 mg daily or Clarithromycin 500 mg q12h) for 7–14 days (extended to 14–21 days in severe or immunocompromised cases).\n- Why beta-lactams (Amoxicillin, Co-amoxiclav, Ceftriaxone) fail: Legionella multiplies intracellularly inside macrophages (poor beta-lactam penetration) and produces beta-lactamase.\n- Supportive care: Supplemental oxygen, cautious IV fluid management (avoid rapid correction of hyponatremia!), and CURB-65/qSOFA monitoring."
      },
      {
        "q": "5. What other extrapulmonary features should be checked for, and what public health/isolation measures apply?",
        "a": "Other classic extrapulmonary manifestations:\n- Relative bradycardia (Faget sign: unexpectedly slow pulse for degree of fever).\n- Gastrointestinal: Watery diarrhea, nausea, vomiting, abdominal pain.\n- Neurological: Confusion, drowsiness, headache, ataxia.\n- Renal/Muscular: Microscopic hematuria, acute kidney injury, elevated CK/rhabdomyolysis.\n- IPC & Public Health: Standard precautions only (no respiratory isolation needed because there is no human-to-human transmission). However, Legionnaires' disease is a NOTIFIABLE disease — report travel-associated cases promptly to public health authorities to trace and remediate contaminated hotel water systems."
      }
    ]
  },
  {
    "id": 99,
    "title": "حالة 99: Klebsiella pneumoniae Cavitary Pneumonia",
    "topic": "Klebsiella pneumoniae Pneumonia",
    "category": "Other Infections & Parasites",
    "scenario": "A 52-year-old man with a history of alcohol dependence is admitted with fever and feeling generally unwell. An admission chest X-ray shows consolidation in the right upper lobe with early cavitation.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, which clues in this scenario justify it, and what key differential diagnoses must be ruled out?",
        "a": "Most likely diagnosis: Klebsiella pneumoniae pneumonia (Friedländer's pneumonia).\n- Justifying clues: Classic host risk factor (alcohol dependence → aspiration of Gram-negative-colonized oropharyngeal secretions) combined with acute right upper lobe consolidation showing early necrotizing cavitation.\n- Critical Differential Diagnoses for right upper lobe cavitary consolidation:\n  1. Pulmonary Tuberculosis (Mycobacterium tuberculosis — MUST be excluded with sputum AFB/GeneXpert, though TB typically has a more chronic subacute course with night sweats and weight loss).\n  2. Staphylococcus aureus necrotizing pneumonia (especially post-influenza or IVDU).\n  3. Anaerobic aspiration lung abscess (foul-smelling putrid sputum, poor dentition).\n  4. Bronchogenic carcinoma (squamous cell) with central cavitation."
      },
      {
        "q": "2. What are the classic microbiological, sputum, and radiological hallmarks of Klebsiella pneumoniae pneumonia?",
        "a": "Classic OSCE hallmarks:\n- Microbiology: Large, encapsulated, non-motile, lactose-fermenting Gram-negative bacillus (thick mucoid polysaccharide capsule confers high virulence and mucoid colonies on MacConkey agar).\n- Classic sputum: Thick, bloody, gelatinous, mucoid 'currant jelly' sputum (resulting from severe parenchymal necrosis and hemorrhage).\n- Classic Chest X-ray signs: Upper lobe lobar consolidation (especially right upper lobe) with early cavitation/abscess formation and the 'bulging fissure sign' (voluminous inflammatory exudate bows the minor horizontal fissure downward)."
      },
      {
        "q": "3. What confirmatory investigations are mandatory on admission for this patient?",
        "a": "Targeted diagnostic workup:\n1. Sputum Gram stain & culture (look for Gram-negative encapsulated rods and antimicrobial susceptibility — check for ESBL or carbapenemase production!).\n2. Blood cultures (2 sets prior to antibiotics — bacteremia is very common in Klebsiella pneumonia).\n3. Exclude Pulmonary TB: 3 early-morning sputum samples for AFB (Ziehl-Neelsen) smear and GeneXpert MTB/RIF given the right upper lobe cavity (maintain airborne precautions until TB is excluded if clinical suspicion exists!).\n4. Severity & baseline labs: CBC, CRP, U&Es (urea for CURB-65), LFTs (alcohol liver disease), coagulation profile, ABG/SpO2, and CT chest if lung abscess or empyema is suspected."
      },
      {
        "q": "4. What is the definitive inpatient management, including antibiotic selection and alcohol-specific supportive care?",
        "a": "Immediate inpatient treatment:\n1. Empiric IV Antibiotics: 3rd-generation Cephalosporin (IV Ceftriaxone 2 g daily or Cefotaxime) OR IV Piperacillin-Tazobactam (4.5 g q6–8h) — escalate to a Carbapenem (IV Meropenem 1 g q8h) if ESBL-producing Klebsiella is suspected or patient is in septic shock! Treat for at least 14 days (longer if cavitary lung abscess develops).\n2. Alcohol-dependence supportive care (CRITICAL!): Administer IV Thiamine (Vitamin B1) BEFORE glucose infusions to prevent Wernicke encephalopathy, monitor CIWA score and treat alcohol withdrawal with benzodiazepines, and correct electrolytes (Mg2+, K+, PO4).\n3. Respiratory support: Oxygen therapy, IV hydration, and chest drainage if parapneumonic empyema develops."
      },
      {
        "q": "5. What are the major complications and prognosis of Klebsiella pneumonia?",
        "a": "Complications & Prognosis:\n- Local pulmonary complications: Necrotizing pneumonia, frank lung abscess, pleural effusion/empyema, bronchopleural fistula, and residual pulmonary fibrosis.\n- Systemic complications: Gram-negative bacteremia, septic shock, ARDS, and metastatic abscesses.\n- Prognosis: Carries a significantly higher mortality rate (up to 30–50% in severe cases with alcoholism and bacteremia) than typical pneumococcal CAP — requires aggressive early IV therapy and close ICU/ward monitoring."
      }
    ]
  },
  {
    "id": 100,
    "title": "حالة 100: Mycoplasma pneumoniae Pneumonia (Macrolide Intolerance)",
    "topic": "Mycoplasma pneumoniae Pneumonia (Alternative Therapy)",
    "category": "Other Infections & Parasites",
    "scenario": "A 37-year-old woman who is being treated as an inpatient for Mycoplasma pneumonia is reviewed. Unfortunately, she is unable to tolerate clarithromycin due to severe nausea.",
    "questions": [
      {
        "q": "1. What is the most suitable alternative antibiotic for this patient, and why are beta-lactam antibiotics completely ineffective?",
        "a": "Most suitable alternative antibiotic: Oral Doxycycline (100 mg PO twice daily for 7–14 days) — a tetracycline that inhibits bacterial 30S ribosomal protein synthesis. (A respiratory fluoroquinolone such as Levofloxacin or Moxifloxacin is another effective alternative if Doxycycline cannot be used.)\n- Why beta-lactams (Co-amoxiclav, Amoxicillin, Cefaclor, Ceftriaxone) and Vancomycin/Linezolid fail: Mycoplasma pneumoniae completely LACKS a peptidoglycan cell wall, making all cell-wall-active antibiotics intrinsically useless!"
      },
      {
        "q": "2. What are the characteristic clinical and radiological features of Mycoplasma pneumoniae ('walking pneumonia')?",
        "a": "Clinical & Radiological Presentation:\n- Epidemiology: Common cause of atypical CAP in children, adolescents, and young adults (especially in close-contact settings like schools, dormitories, and households), occurring in cyclic epidemics.\n- Clinical picture: Insidious onset of low-grade fever, malaise, headache, sore throat, and a protracted dry hacking cough; may cause bullous myringitis (hemorrhagic bullae on the tympanic membrane).\n- Radiological hallmark: 'Clinical-radiological dissociation' — Chest X-ray often shows striking bilateral patchy interstitial or reticulonodular infiltrates despite relatively mild auscultatory chest findings."
      },
      {
        "q": "3. What are the classic extrapulmonary complications of Mycoplasma pneumoniae infection?",
        "a": "High-yield extrapulmonary immune-mediated manifestations:\n1. Hematologic: Cold agglutinin autoimmune hemolytic anemia (IgM antibodies against RBC 'I' antigen → anemia, reticulocytosis, elevated LDH/indirect bilirubin, positive direct Coombs test).\n2. Dermatologic: Erythema multiforme (target lesions) and Stevens-Johnson syndrome / Mycoplasma-induced rash and mucositis (MIRM).\n3. Neurologic: Guillain-Barré syndrome, aseptic meningitis, encephalitis, and transverse myelitis.\n4. Cardiac & Musculoskeletal: Myocarditis, pericarditis, and reactive polyarthralgia/arthritis."
      },
      {
        "q": "4. How is Mycoplasma pneumoniae confirmed in the microbiology laboratory?",
        "a": "Diagnostic confirmation:\n- Note: Cannot be visualized on Gram stain (no cell wall) and grows extremely slowly on specialized Eaton agar (not used routinely).\n- Gold standard rapid test: NAAT / PCR of nasopharyngeal swab, throat swab, or sputum (highest sensitivity and specificity).\n- Serology: Mycoplasma-specific IgM ELISA (or ≥4-fold rise in paired acute and convalescent IgG titers).\n- Supportive labs: Cold agglutinin titer (supportive but non-specific), CBC/reticulocyte count if hemolysis is suspected."
      },
      {
        "q": "5. What crucial precaution must be checked BEFORE prescribing Doxycycline to this 37-year-old woman, and what isolation precautions apply?",
        "a": "Crucial safety check in a 37-year-old woman of childbearing potential:\n- Perform a pregnancy test BEFORE starting Doxycycline! Both Doxycycline (fetal teeth discoloration/bone toxicity) and Fluoroquinolones (cartilage toxicity) are STRICTLY CONTRAINDICATED in pregnancy.\n- If pregnant and intolerant of clarithromycin: Switch to Azithromycin (a macrolide with significantly lower GI nausea/intolerance than clarithromycin or erythromycin, and safe in pregnancy).\n- Also counsel on Doxycycline esophagitis (take with plenty of water and remain upright for 30 minutes) and photosensitivity.\n- IPC: Droplet precautions (surgical mask) during hospitalization."
      }
    ]
  },
  {
    "id": 101,
    "title": "حالة 101: Pneumococcal Pneumonia with Herpes Labialis Reactivation",
    "topic": "Streptococcus pneumoniae Pneumonia",
    "category": "Other Infections & Parasites",
    "scenario": "A 31-year-old female with no past medical history of note is admitted to hospital with dyspnoea and fever. She has recently returned from holiday in Turkey. A clinical diagnosis of pneumonia is made. On examination, she is noted to have an ulcerated lesion on her upper lip consistent with reactivation of herpes simplex.",
    "questions": [
      {
        "q": "1. Which organism is most classically associated with this examination finding (herpes labialis), and why is the travel history an exam distractor/caveat?",
        "a": "Most classically associated organism: Streptococcus pneumoniae (pneumococcal pneumonia).\n- Key OSCE clinical pearl: Reactivation of latent Herpes Simplex Virus on the lips (herpes labialis / 'fever blister' or cold sore) is a classic textbook clinical sign associated with acute lobar pneumococcal pneumonia (triggered by sudden high fever and acute physiological stress).\n- Exam trap/caveat: Although her recent holiday in Turkey warrants keeping Legionella pneumophila in the differential diagnosis (and covering atypicals empirically if moderate/severe), herpes labialis specifically points to S. pneumoniae!"
      },
      {
        "q": "2. What are the classic clinical features and Chest X-ray findings of pneumococcal pneumonia?",
        "a": "Typical lobar pneumonia presentation:\n- Symptoms: Abrupt onset of high fever with rigors, sharp pleuritic chest pain, dyspnea, and productive cough with characteristic 'rusty' (blood-tinged) sputum.\n- Chest examination: Decreased chest expansion, dullness to percussion, bronchial breathing, coarse crackles, and increased vocal resonance/tactile vocal fremitus over the affected lobe.\n- Chest X-ray (Hawari Practical): Dense homogeneous lobar consolidation containing a classic 'air bronchogram' (radiolucent air-filled bronchi silhouetted against opacified fluid-filled alveoli)."
      },
      {
        "q": "3. How do you assess pneumonia severity at the bedside (CURB-65) and what confirmatory investigations should be requested?",
        "a": "Severity Assessment — CURB-65 Score (1 point each; Hawari Practical):\n- C: New-onset Confusion.\n- U: Urea > 7 mmol/L (>42 mg/dL / BUN >19 mg/dL).\n- R: Respiratory rate ≥ 30/min.\n- B: Blood pressure < 90/60 mmHg (SBP <90 or DBP ≤60).\n- 65: Age ≥ 65 years.\n- Risk stratification: 0–1 (low risk, <3% mortality → outpatient), 2 (intermediate, ~7% → short inpatient admission), 3–5 (high, 14–28% → urgent hospital/ICU admission).\n- Investigations: Chest X-ray, sputum Gram stain & culture (Gram-positive lancet-shaped diplococci), blood cultures (x2 if moderate/severe), urinary pneumococcal antigen (AND urinary Legionella antigen given her Turkey holiday!), CBC, CRP, U&Es, and SpO2/ABG."
      },
      {
        "q": "4. What is the appropriate inpatient management for this patient?",
        "a": "Management (General + Specific):\n1. General supportive care: Supplemental O2 to maintain SpO2 94–98%, IV fluids, antipyretics (paracetamol), analgesia for pleuritic pain, and VTE prophylaxis while hospitalized.\n2. Specific empiric antibiotics (hospitalized CAP with recent Turkey travel):\n   - Beta-lactam (IV/PO Amoxicillin or Co-amoxiclav, or IV Ceftriaxone if severe) PLUS a Macrolide (Clarithromycin 500 mg q12h or Azithromycin 500 mg daily) to ensure coverage of both S. pneumoniae and atypical pathogens (Legionella).\n   - Once S. pneumoniae is confirmed and clinically stable, step down to targeted narrow-spectrum oral Amoxicillin (5–7 days total).\n3. Herpes labialis: Self-limiting (topical or short-course oral acyclovir only if severe/early)."
      },
      {
        "q": "5. What complications of pneumococcal pneumonia must be watched for, and who should receive pneumococcal vaccination?",
        "a": "Complications:\n- Parapneumonic pleural effusion and empyema (perform diagnostic thoracentesis if significant effusion: empyema shows pH <7.2, low glucose, high LDH, or frank pus requiring chest tube drainage).\n- Bacteremia/septic shock, secondary pneumococcal meningitis or endocarditis (Austrian syndrome: pneumonia + meningitis + endocarditis), and ARDS.\n- Pneumococcal Vaccination (PCV13/15/20 & PPSV23) indications: Adults ≥65 years, chronic pulmonary/cardiac/hepatic/renal disease, diabetes mellitus, immunocompromised/HIV patients, CSF leaks/cochlear implants, and anatomical or functional asplenia (vaccinate 2 weeks before elective splenectomy or 2 weeks after emergency splenectomy)."
      }
    ]
  },
  {
    "id": 102,
    "title": "حالة 102: Severe Legionella Pneumonia (Holiday in Spain, Hyponatremia & Confusion)",
    "topic": "Severe Legionella Pneumonia",
    "category": "Other Infections & Parasites",
    "scenario": "A 64-year-old woman presents to the Emergency Department with a cough, fever, diarrhoea, and myalgia. The cough is non-productive and has been gradually worsening since she returned from holiday in Spain one week ago. Over the past 24 hours, she has become more drowsy and febrile. She is normally fit and well but drinks around 20 units of alcohol per week. On examination, pulse is 76/min, blood pressure 104/62 mmHg, oxygen saturations are 94% on room air, and temperature is 38.4°C. Bilateral coarse crackles are heard in the chest. Initial blood tests show: Hb 13.6 g/dL, platelets 311 × 10⁹/L, WBC 14.2 × 10⁹/L, Na+ 131 mmol/L, K+ 4.3 mmol/L, urea 9.2 mmol/L, creatinine 91 µmol/L, bilirubin 12 µmol/L, ALP 31 U/L, ALT 64 U/L. A chest X-ray shows patchy consolidation in the left lower zone with an associated pleural effusion.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and which six clinical and laboratory clues in THIS case confirm your diagnosis?",
        "a": "Most likely causative organism: Legionella pneumophila (Legionnaires' disease).\n- Six classic justifying clues in THIS patient:\n  1. Travel exposure: Returned from holiday in Spain 1 week ago (contaminated hotel A/C cooling towers or water systems).\n  2. Non-productive cough combined with prominent extrapulmonary symptoms (diarrhea and myalgia).\n  3. Neurologic involvement: New drowsiness/confusion over the past 24 hours.\n  4. Relative bradycardia (Faget sign): Pulse is only 76/min despite a fever of 38.4°C!\n  5. Classic laboratory triad: Hyponatremia (Na+ 131 mmol/L from SIADH), mild transaminitis (ALT 64 U/L), and leukocytosis (14.2 × 10⁹/L) with raised urea (9.2 mmol/L).\n  6. Chest X-ray: Patchy lower zone consolidation with associated pleural effusion."
      },
      {
        "q": "2. Calculate this patient's CURB-65 and qSOFA scores from the data provided, and explain what they dictate for disposition.",
        "a": "CURB-65 Score (minimum 2 points — check RR immediately!):\n- C (Confusion/drowsiness): +1 point.\n- U (Urea 9.2 mmol/L > 7 mmol/L): +1 point.\n- R (Respiratory rate ≥ 30/min): Not stated — measure immediately!\n- B (BP 104/62 mmHg): 0 points (not <90/60).\n- 65 (Age 64 years): 0 points (<65).\n- Disposition: CURB-65 ≥ 2 carries at least ~7% mortality (14–28% if RR ≥30 makes it 3) → MANDATORY inpatient hospital admission (consider HDU/ICU if RR ≥30 or worsening consciousness/hypoxia).\n- qSOFA screening: Altered mentation (+1 point); SBP 104 (>100); measure RR (if ≥22/min → qSOFA = 2 → high sepsis risk requiring urgent sepsis bundle!)."
      },
      {
        "q": "3. What is the first-line diagnostic test to confirm Legionella pneumophila, and what additional investigations are needed?",
        "a": "Confirmatory & Adjunctive Investigations:\n1. Urinary Legionella antigen test (rapid first-line test; high specificity >99% for L. pneumophila serogroup 1).\n2. Sputum/respiratory PCR and specialized culture on Buffered Charcoal Yeast Extract (BCYE) agar.\n3. Blood cultures (x2 before antibiotics) and paired Legionella serology.\n4. Additional workup: ABG/lactate, serum CK (rule out rhabdomyolysis), urinalysis (microscopic hematuria), and diagnostic pleural fluid tap (thoracentesis) if the left pleural effusion is sizable to exclude empyema."
      },
      {
        "q": "4. What is the immediate and definitive management plan for this 64-year-old woman?",
        "a": "Immediate inpatient management:\n1. Definitive Antibiotics: Start IV Levofloxacin (750 mg IV daily) OR IV Azithromycin (500 mg daily) / Clarithromycin (500 mg q12h) — initially given alongside a beta-lactam (e.g., IV Co-amoxiclav or Ceftriaxone) as empirical moderate-to-severe CAP therapy, then de-escalate to fluoroquinolone or macrolide monotherapy once Legionella is confirmed (total duration 7–14 days).\n2. Supportive care: Oxygen therapy if SpO2 drops <94%, cautious IV fluids (monitor serum Na+ closely to avoid over-correction of SIADH hyponatremia), antipyretics, VTE prophylaxis, and serial GCS/vital sign monitoring.\n3. Alcohol history (20 units/week): Monitor for alcohol withdrawal symptoms and give thiamine if nutritionally depleted."
      },
      {
        "q": "5. What is 'relative bradycardia' (Faget sign), which other febrile infectious diseases classically display it, and what public health action is required?",
        "a": "Relative Bradycardia (Pulse-Temperature Dissociation / Faget Sign — Hawari Practical Q33):\n- Normally, heart rate rises by ~10–15 bpm for every 1°C rise in temperature above 37°C (so at 38.4°C, HR should be ~95–105/min, not 76/min!).\n- Classic febrile causes of relative bradycardia: Legionnaires' disease, Typhoid (Enteric) fever, Brucellosis, Mycoplasma/Chlamydia psittaci pneumonia, Yellow fever, Dengue fever, Q fever, and drug fever (always exclude beta-blocker medication!).\n- Public Health Action: Notify local public health / international travel surveillance authorities so the Spanish hotel water system can be investigated for a Legionella outbreak; no patient isolation is needed (not spread person-to-person)."
      }
    ]
  },
  {
    "id": 103,
    "title": "حالة 103: Mycoplasma pneumoniae Pneumonia with Erythema Multiforme",
    "topic": "Mycoplasma pneumoniae Pneumonia with Erythema Multiforme",
    "category": "Other Infections & Parasites",
    "scenario": "A 41-year-old female presents with a 3-day history of a dry cough and shortness of breath. This was preceded by flu-like symptoms. On examination, there is a symmetrical erythematous rash with target lesions over the whole body (erythema multiforme).",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and which clinical features in this case specifically support your diagnosis?",
        "a": "Most likely causative organism: Mycoplasma pneumoniae (atypical pneumonia complicated by Erythema Multiforme).\n- Justifying clues in this case:\n  1. Flu-like prodrome followed by a dry cough and dyspnea ('walking/atypical pneumonia').\n  2. Symmetrical erythematous cutaneous eruption with classic 'target' (iris) lesions — Erythema Multiforme — a hallmark immune-mediated extrapulmonary complication of Mycoplasma pneumoniae.\n- OSCE nuance: Overall, Herpes Simplex Virus (HSV) is the #1 infectious trigger of erythema multiforme, whereas Mycoplasma pneumoniae is the classic pneumonia-associated cause (and can also trigger Stevens-Johnson syndrome / Mycoplasma-induced rash and mucositis [MIRM])."
      },
      {
        "q": "2. What are the microbiological characteristics of Mycoplasma pneumoniae and its other major extrapulmonary manifestations?",
        "a": "Microbiology:\n- Smallest free-living bacterium; uniquely lacks a peptidoglycan cell wall (invisible on Gram stain and intrinsically resistant to all beta-lactams).\n- Other classic extrapulmonary complications to screen for:\n  1. Hematologic: Cold agglutinin autoimmune hemolytic anemia (IgM anti-I antibodies).\n  2. ENT: Bullous myringitis (painful hemorrhagic blisters on the eardrum).\n  3. Neurologic: Guillain-Barré syndrome, aseptic meningitis, encephalitis, transverse myelitis.\n  4. Cardiac/Joint: Myocarditis, pericarditis, reactive arthritis."
      },
      {
        "q": "3. What investigations should be performed to confirm the etiology and assess for systemic complications?",
        "a": "Diagnostic workup:\n1. Chest X-ray: Typically shows bilateral patchy interstitial or reticulonodular infiltrates (often more extensive than physical chest findings suggest).\n2. Microbiological confirmation: Respiratory swab/sputum PCR for Mycoplasma pneumoniae (gold standard rapid test) and Mycoplasma IgM serology.\n3. Complication screening: CBC, reticulocyte count, LDH, indirect bilirubin, direct Coombs test / cold agglutinins (screen for autoimmune hemolysis), pulse oximetry, and careful inspection of oral, ocular, and genital mucous membranes to rule out Stevens-Johnson syndrome / MIRM!"
      },
      {
        "q": "4. What is the first-line antimicrobial therapy and how should the erythema multiforme be managed?",
        "a": "Definitive & Supportive Management:\n1. Targeted Antibiotics (must inhibit protein synthesis or DNA replication since cell wall is absent):\n   - Macrolide: Oral Clarithromycin (500 mg BID for 7–14 days) or Azithromycin (500 mg day 1, then 250 mg daily for 4 days), OR\n   - Tetracycline: Oral Doxycycline (100 mg BID for 7–14 days; exclude pregnancy first!).\n   - Avoid beta-lactams (Amoxicillin, Co-amoxiclav, Cephalosporins) — completely ineffective.\n2. Erythema Multiforme management: Symptomatic care with oral antihistamines, topical emollients/corticosteroids; if mucosal ulceration (EM major / SJS / MIRM) is present → hospitalize, provide IV hydration, ophthalmology review, meticulous wound/oral care, and consider systemic corticosteroids."
      },
      {
        "q": "5. What red-flag dermatological and respiratory signs would mandate urgent hospital/ICU escalation, and what IPC precautions apply?",
        "a": "Red Flags requiring urgent escalation:\n- Mucosal involvement (painful hemorrhagic oral crusts, conjunctivitis/corneal ulceration, dysuria/genital erosions) or epidermal detachment/Nikolsky positivity (progression to SJS/TEN).\n- Hypoxemia (SpO2 <92%), tachypnea (RR ≥30/min), hypotension, or severe hemolytic anemia.\n- IPC precautions: Droplet precautions (surgical mask, hand hygiene) if hospitalized to prevent nosocomial spread."
      }
    ]
  },
  {
    "id": 104,
    "title": "حالة 104: Community-Acquired Pneumonia (Purulent Sputum & Hemoptysis)",
    "topic": "Community-Acquired Pneumonia (CAP)",
    "category": "Other Infections & Parasites",
    "scenario": "A 62-year-old man presents to the emergency department with a productive cough of green sputum and occasional bloody specks.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and the essential differential diagnoses to consider in a 62-year-old man with green sputum and blood specks?",
        "a": "Most likely acute diagnosis: Community-Acquired Pneumonia (CAP) — most commonly caused by Streptococcus pneumoniae or Haemophilus influenzae.\n- Crucial Differential Diagnoses for purulent green sputum with hemoptysis in a 62-year-old man:\n  1. Pulmonary Tuberculosis (Mycobacterium tuberculosis — especially if duration >2–3 weeks with evening fever, night sweats, or weight loss).\n  2. Infective exacerbation of COPD or bronchiectasis (Pseudomonas, H. influenzae, Moraxella).\n  3. Bronchogenic carcinoma (post-obstructive pneumonia or tumor erosion — critical in adults >50 years!).\n  4. Pulmonary embolism with pulmonary infarction (acute pleuritic pain, dyspnea, tachycardia).\n  5. Lung abscess or necrotizing pneumonia (Klebsiella, S. aureus, anaerobes)."
      },
      {
        "q": "2. How is pneumonia classified clinically, and how do you stratify severity at the bedside in the Emergency Department?",
        "a": "Clinical Classification of Pneumonia (Hawari Practical page 12):\n- Community-Acquired Pneumonia (CAP): Acquired outside hospital or <48 hours after admission.\n- Hospital-Acquired Pneumonia (HAP): Develops ≥48 hours after hospital admission.\n- Ventilator-Associated Pneumonia (VAP): Develops ≥48 hours after endotracheal intubation.\n- Aspiration Pneumonia (anaerobes + Gram-negatives).\n- Bedside Severity Stratification — CURB-65 (1 point each): Confusion, Urea >7 mmol/L (>42 mg/dL), RR ≥30/min, BP <90/60 mmHg, Age ≥65 years.\n  • Score 0–1: Low risk (<3% mortality) → Outpatient management.\n  • Score 2: Intermediate (~7% mortality) → Short-term inpatient admission.\n  • Score 3–5: High risk (14–28% mortality) → Urgent hospital/ICU admission.\n- Also check qSOFA (RR ≥22, SBP ≤100, GCS <15) immediately to screen for sepsis."
      },
      {
        "q": "3. What are the immediate diagnostic investigations required in the Emergency Department?",
        "a": "Essential ED Workup:\n1. Chest X-ray (PA view): Gold standard to confirm consolidation with classic air bronchogram, assess lobar vs. multilobar involvement, and screen for cavitation, pleural effusion, or an underlying mass.\n2. Sputum microbiology: Sputum Gram stain and bacterial culture; PLUS 3 early-morning sputum samples for AFB (Ziehl-Neelsen) smear & GeneXpert MTB/RIF if symptoms are prolonged (>2 weeks) or CXR shows upper lobe/cavitary lesions.\n3. Blood tests: CBC, CRP, U&Es (serum urea is mandatory to complete CURB-65!), LFTs, blood cultures (x2 if moderate/severe CAP), and pulse oximetry / ABG if hypoxic."
      },
      {
        "q": "4. What is the immediate general and empiric antibiotic management guided by CURB-65?",
        "a": "General Supportive Management:\n- Oxygen therapy (target SpO2 94–98%, or 88–92% if known COPD with hypercapnia risk), IV hydration, antipyretics, analgesia, and VTE prophylaxis if admitted.\n- Empiric Antibiotic Regimen (CURB-65 guided):\n  • Mild CAP (CURB-65 0–1): Oral Amoxicillin 500 mg TDS for 5 days (or Doxycycline / Clarithromycin if penicillin-allergic).\n  • Moderate CAP (CURB-65 2): Oral/IV Amoxicillin PLUS Clarithromycin (500 mg q12h) for 5–7 days.\n  • Severe CAP (CURB-65 3–5): IV Co-amoxiclav (1.2 g q8h) OR IV Ceftriaxone (2 g daily) PLUS IV Clarithromycin (or Azithromycin) for 7–10 days."
      },
      {
        "q": "5. What mandatory post-discharge follow-up and preventive measures are required for this 62-year-old man?",
        "a": "Follow-up & Prevention:\n- Mandatory Repeat Chest X-ray at 6 weeks: Crucial in all patients aged >50 years (especially smokers or those presenting with hemoptysis) to confirm complete radiological resolution and EXCLUDE an underlying occult bronchogenic carcinoma! (If consolidation persists → urgent CT chest and bronchoscopy.)\n- Preventive vaccination: Annual inactivated Influenza vaccine and Pneumococcal vaccination (PCV + PPSV23 if comorbid/at risk), plus smoking cessation counseling."
      }
    ]
  },
  {
    "id": 105,
    "title": "حالة 105: Post-Influenza Staphylococcus aureus Pneumonia",
    "topic": "Staphylococcus aureus Post-Influenza Pneumonia",
    "category": "Other Infections & Parasites",
    "scenario": "A 52-year-old male is admitted to hospital with a temperature of 38.2°C and a 3-day history of a productive cough. He has been generally unwell for the past 10 days with flu-like symptoms. On examination, blood pressure is 96/60 mmHg and heart rate is 102/min. Chest X-ray shows bilateral lower zone consolidation.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and which specific clinical pattern in this scenario justifies your answer?",
        "a": "Most likely causative organism: Staphylococcus aureus (secondary post-influenza bacterial pneumonia).\n- Justifying clinical pattern:\n  1. Classic biphasic illness: 10 days of preceding influenza-like prodrome followed by abrupt secondary deterioration over 3 days with fever (38.2°C) and productive cough.\n  2. Severe hemodynamic compromise (hypotension BP 96/60 mmHg, tachycardia 102/min) and bilateral lower zone consolidation.\n- Pathophysiology: Influenza virus destroys respiratory ciliated epithelial cells and impairs alveolar macrophage defenses, exposing basement membrane binding sites that strongly predispose to fulminant S. aureus (and S. pneumoniae) superinfection."
      },
      {
        "q": "2. Assess this patient's bedside severity scores (CURB-65 and qSOFA) based on the given vitals.",
        "a": "Bedside Severity Scoring:\n- CURB-65: Already has +1 point for Blood Pressure (diastolic BP = 60 mmHg, meeting DBP ≤60 mmHg criterion); must immediately assess Confusion, serum Urea (>7 mmol/L), and Respiratory Rate (≥30/min). Bilateral consolidation + hypotension + tachycardia indicates severe inpatient pneumonia at high risk of ICU transfer.\n- qSOFA: Already has +1 point for SBP ≤100 mmHg (96 mmHg)! Immediately check RR (≥22/min) and GCS (<15) — if either is positive, qSOFA ≥2 signals sepsis requiring the Hour-1 Sepsis Bundle!"
      },
      {
        "q": "3. What confirmatory microbiological and radiological findings are characteristic of Staphylococcus aureus pneumonia?",
        "a": "Diagnostic Workup:\n1. Sputum Gram stain & culture: Gram-positive cocci in grape-like clusters (catalase-positive, coagulase-positive); perform antimicrobial susceptibility testing immediately to differentiate MSSA vs. MRSA (and test for PVL toxin if necrotizing).\n2. Blood cultures (2 sets prior to antibiotics): Frequently positive in staphylococcal pneumonia.\n3. Nasopharyngeal swab RT-PCR for Influenza A/B.\n4. Serial Chest X-rays / CT Chest: Characteristically evolves rapidly into multilobar consolidation, thin-walled air-filled cysts (pneumatoceles), cavitating lung abscesses, and empyema.\n5. Sepsis labs: Serum lactate, ABG, CBC, CRP, U&Es, LFTs, coagulation screen."
      },
      {
        "q": "4. What is the immediate resuscitation and empiric antimicrobial regimen required for this patient?",
        "a": "Immediate Resuscitation & Empiric Therapy:\n1. Hemodynamic & Respiratory Support: Supplemental oxygen, rapid IV crystalloid resuscitation (30 mL/kg if septic hypotension/lactate ≥4 mmol/L) targeting MAP ≥65 mmHg (norepinephrine if fluid-refractory), and ICU assessment.\n2. Empiric IV Antibiotics MUST cover MRSA as well as standard CAP pathogens:\n   - IV Vancomycin (15–20 mg/kg q8–12h) OR IV Linezolid (600 mg IV q12h — preferred in necrotizing/PVL-positive MRSA pneumonia because Linezolid suppresses bacterial toxin production!)\n   - PLUS IV Ceftriaxone (2 g daily) + Azithromycin (or IV Piperacillin-Tazobactam) to cover S. pneumoniae and Gram-negative bacilli.\n   - If MSSA is confirmed: De-escalate to IV Flucloxacillin / Nafcillin (or Cefazolin) for 14 days (longer if cavitary/empyema)."
      },
      {
        "q": "5. What severe complications should be monitored closely, and how is post-influenza pneumonia prevented?",
        "a": "Life-Threatening Complications:\n- Necrotizing hemorrhagic pneumonia, cavitating lung abscesses, pneumatoceles (risk of spontaneous pneumothorax!), parapneumonic empyema (requires chest tube drainage), septic shock/ARDS, and secondary infective endocarditis.\n- IPC & Prevention: Contact isolation precautions (gloves, gown, private room) if MRSA is isolated; annual inactivated Influenza vaccination is the most effective preventive strategy against secondary post-influenza bacterial pneumonia."
      }
    ]
  },
  {
    "id": 106,
    "title": "حالة 106: Severe Hospital-Acquired Pneumonia (HAP) with Sepsis",
    "topic": "Hospital-Acquired Pneumonia (HAP) with Sepsis",
    "category": "Sepsis & ICU Scores",
    "scenario": "A 55-year-old man who was admitted following a stroke two weeks ago is reviewed. Yesterday, he started to develop a temperature and became more confused. A septic screen has shown radiological evidence of pneumonia. On examination, his respiratory rate is 36/min, pulse 112/min, oxygen saturations are 95% on room air, and blood pressure is 102/66 mmHg.",
    "questions": [
      {
        "q": "1. What is the exact diagnosis and how do you classify this pneumonia based on timing of onset?",
        "a": "Diagnosis: Late-onset Hospital-Acquired Pneumonia (HAP) complicated by Sepsis (likely aspiration-related secondary to post-stroke dysphagia).\n- Classification (Al-Azhar Hospital & Community Infections lecture):\n  • HAP is defined as pneumonia developing ≥48 hours after hospital admission.\n  • Because this patient has been hospitalized for TWO WEEKS (>5 days = late-onset HAP), he is at high risk for multidrug-resistant (MDR) nosocomial pathogens: Pseudomonas aeruginosa, Klebsiella pneumoniae, Enterobacter, Acinetobacter baumannii, E. coli, Staphylococcus aureus (including MRSA), and oral anaerobes (due to post-stroke aspiration)."
      },
      {
        "q": "2. Calculate this patient's bedside qSOFA and CURB-65 scores, and explain how SOFA defines Sepsis.",
        "a": "Bedside Scoring (Hawari Practical):\n1. qSOFA Score = 2 / 3 (HIGH RISK of poor outcome / sepsis — triggers urgent intervention!):\n   - Altered mentation (new confusion, GCS <15): +1 point.\n   - Respiratory rate ≥22/min (36/min): +1 point.\n   - Systolic BP ≤100 mmHg (102 mmHg): 0 points.\n2. CURB-65 Score ≥ 2 (Confusion +1, RR 36 ≥30 +1; check serum urea for full score!).\n3. Full SOFA Score (ICU sepsis definition): Assesses 6 organ systems (Respiratory PaO2/FiO2, Coagulation platelets, Liver bilirubin, Cardiovascular BP/vasopressors, CNS GCS, Renal creatinine/urine output); an acute SOFA score increase ≥ 2 points in a patient with infection formally defines Sepsis."
      },
      {
        "q": "3. What is the most appropriate first-line empiric IV antibiotic for this patient, and why are Amoxicillin, Cefuroxime, and Teicoplanin inadequate?",
        "a": "Most appropriate empiric IV antibiotic: IV Piperacillin-Tazobactam (4.5 g IV every 6–8 hours) — an antipseudomonal penicillin + beta-lactamase inhibitor that provides broad bactericidal coverage against Pseudomonas aeruginosa, hospital Gram-negative bacilli, AND aspiration anaerobes! (Alternatives: IV Cefepime or IV Meropenem if septic shock/ESBL risk; add IV Vancomycin or Linezolid if MRSA risk factors or severe sepsis.)\n- Why the other options are inadequate:\n  • Amoxicillin & Cefuroxime: Lack antipseudomonal activity and miss resistant nosocomial Gram-negatives.\n  • Teicoplanin: Covers ONLY Gram-positive bacteria (MRSA) with zero Gram-negative coverage.\n- Antibiotic stewardship (Al-Azhar IPC lecture): Reassess clinical response and culture/antibiogram results at 48–72 hours to de-escalate therapy!"
      },
      {
        "q": "4. What immediate actions comprise the Hour-1 Sepsis Bundle and diagnostic workup?",
        "a": "Hour-1 Sepsis Bundle (act within 60 minutes):\n1. Measure serum lactate level (and ABG to assess oxygenation/acid-base status).\n2. Obtain 2 sets of blood cultures AND sputum/tracheal aspirate for Gram stain & culture BEFORE starting antibiotics (without delaying antibiotics >45 minutes).\n3. Administer broad-spectrum antipseudomonal IV antimicrobials (Piperacillin-Tazobactam ± Vancomycin).\n4. Administer IV crystalloid fluids (30 mL/kg if hypotension or lactate ≥4 mmol/L) and monitor urine output and serial BP/GCS.\n5. Start Norepinephrine vasopressor if hypotensive despite fluid resuscitation (target MAP ≥65 mmHg)."
      },
      {
        "q": "5. How can Hospital-Acquired Pneumonia be prevented in hospitalized post-stroke patients?",
        "a": "Evidence-Based IPC & Post-Stroke HAP Prevention:\n- Mandatory bedside swallow / dysphagia screening BEFORE allowing any oral food, liquids, or medications (use NG tube feeding if unsafe swallow).\n- Elevate head of bed to 30–45° during and after feeding.\n- Regular oral hygiene (chlorhexidine mouth care) to reduce oropharyngeal Gram-negative/MRSA colonization.\n- Strict healthcare worker hand hygiene (WHO 5 moments), early mobilization/chest physiotherapy, and hospital antibiotic stewardship."
      }
    ]
  },
  {
    "id": 107,
    "title": "حالة 107: Legionella Pneumonia (Beta-Lactam Failure & Severe Hyponatremia)",
    "topic": "Legionella Pneumonia",
    "category": "Other Infections & Parasites",
    "scenario": "A 55-year-old man is referred to the medical admissions unit. He recently returned from a holiday in Italy and has failed to respond to a course of co-amoxiclav for a suspected lower respiratory tract infection. Chest X-ray shows bilateral infiltrates. Bloods are as follows: Na+ 122 mmol/L, K+ 4.3 mmol/L, urea 8.4 mmol/L, creatinine 130 µmol/L.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which four specific features in THIS patient make it unmistakable?",
        "a": "Most likely diagnosis: Legionella pneumonia (Legionnaires' disease — Legionella pneumophila).\n- Four classic justifying features in this case:\n  1. Travel history: Recent holiday in Italy (aerosol inhalation from contaminated hotel air-conditioning/water systems).\n  2. Treatment failure on beta-lactam (co-amoxiclav): Legionella is an intracellular pathogen that produces beta-lactamase and does NOT respond to penicillins/cephalosporins.\n  3. Marked hyponatremia (Na+ 122 mmol/L): Hallmark SIADH-mediated electrolyte abnormality of Legionnaires' disease.\n  4. Acute kidney injury (urea 8.4 mmol/L, creatinine 130 µmol/L) combined with bilateral infiltrates on CXR."
      },
      {
        "q": "2. What is the differential diagnosis of community-acquired pneumonia that fails to respond to beta-lactam therapy?",
        "a": "Differential diagnosis of beta-lactam-refractory pneumonia:\n1. Atypical bacterial pathogens: Legionella pneumophila, Mycoplasma pneumoniae, Chlamydophila pneumoniae / C. psittaci, Coxiella burnetii (Q fever).\n2. Drug-resistant bacteria: MRSA, Pseudomonas aeruginosa, ESBL-producing Enterobacterales.\n3. Non-bacterial pathogens: Pulmonary Tuberculosis, Pneumocystis jirovecii pneumonia (PJP — check HIV status!), endemic fungi, or viral pneumonia (Influenza/COVID-19).\n4. Complications or Non-infectious mimics: Empyema/lung abscess, pulmonary embolism, cryptogenic organizing pneumonia, eosinophilic pneumonia, or bronchogenic carcinoma."
      },
      {
        "q": "3. Which investigations are required to confirm Legionella pneumonia and evaluate his hyponatremia and renal impairment?",
        "a": "Targeted Diagnostic Panel:\n1. Urinary Legionella antigen test: Rapid first-line confirmatory test (detects L. pneumophila serogroup 1; remains positive despite prior antibiotics).\n2. Sputum PCR & culture on Buffered Charcoal Yeast Extract (BCYE) agar (covers all Legionella species/serogroups).\n3. Evaluate Na+ 122 mmol/L (SIADH): Paired serum osmolality (low), urine osmolality (>100 mOsm/kg), and urine sodium (>40 mmol/L).\n4. Evaluate AKI (Cr 130 µmol/L, Urea 8.4 mmol/L): Urinalysis (microscopic hematuria/proteinuria), serum creatine kinase (exclude Legionella-associated rhabdomyolysis), LFTs (check transaminitis), blood cultures, and ABG/SpO2."
      },
      {
        "q": "4. What is the definitive antibiotic therapy and critical fluid/electrolyte precaution in managing this patient?",
        "a": "Definitive Management:\n1. Targeted Antibiotics (switch immediately from co-amoxiclav):\n   - IV/PO Levofloxacin (750 mg daily — renally adjust if eGFR <50 mL/min) OR IV/PO Azithromycin (500 mg daily) / Clarithromycin (500 mg q12h) for 7–14 days.\n2. CRITICAL Hyponatremia Precaution (Na+ 122 mmol/L):\n   - Monitor serum sodium every 4–6 hours; NEVER raise serum Na+ faster than 8–10 mmol/L in 24 hours to prevent osmotic demyelination syndrome (central pontine myelinolysis)!\n   - Avoid hypotonic fluids; manage SIADH with cautious fluid balance (unless hypovolemic/septic — treat AKI/perfusion carefully) and reserve 3% hypertonic saline strictly for severe neurological symptoms (seizures/coma)."
      },
      {
        "q": "5. How do you evaluate his severity score (CURB-65) and what public health notification is required?",
        "a": "Severity & Public Health:\n- CURB-65: Already has +1 point for Urea 8.4 mmol/L (>7 mmol/L); immediately assess Confusion (also high risk from Na+ 122!), RR (≥30/min), and BP (<90/60 mmHg). Bilateral infiltrates + severe hyponatremia + AKI warrant inpatient admission with close monitoring.\n- Public Health Notification: Report this travel-associated case promptly to national/European public health surveillance so the Italian hotel water system can be tested and disinfected; standard precautions suffice in hospital (no person-to-person spread)."
      }
    ]
  },
  {
    "id": 108,
    "title": "حالة 108: Severe Community-Acquired Pneumonia with Hypoxemia in Elderly Patient",
    "topic": "Severe Community-Acquired Pneumonia (Hypoxemia & Sepsis Risk)",
    "category": "Sepsis & ICU Scores",
    "scenario": "A 69-year-old man is brought into the emergency department by ambulance with a few days' history of increasing shortness of breath, fever, and a productive cough. On review, his heart rate is 105/min, oxygen saturation is 90% on room air, and blood pressure is 100/65 mmHg.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis and what is the single most urgent immediate bedside intervention?",
        "a": "Most likely diagnosis: Acute Community-Acquired Pneumonia (CAP) complicated by acute hypoxemic respiratory failure (SpO2 90% on room air) and early sepsis risk in an elderly (69-year-old) man.\n- Most urgent immediate intervention (ABCDE approach): Administer supplemental Oxygen IMMEDIATELY (target SpO2 94–98%, or 88–92% if history of COPD/CO2 retention is present) while obtaining IV access, arterial blood gas (ABG), and assessing mental status and respiratory rate!"
      },
      {
        "q": "2. Evaluate this patient's bedside CURB-65 and qSOFA scores from the available findings, and state which missing parameters must be checked immediately.",
        "a": "Bedside Risk Stratification (Hawari Practical):\n1. CURB-65 Score:\n   - Age 69 years (≥65): +1 point already confirmed.\n   - BP 100/65 mmHg: 0 points currently (borderline — watch closely for drop <90/60).\n   - Missing parameters to assess immediately: Confusion (new-onset), Urea (>7 mmol/L), and Respiratory Rate (≥30/min).\n   - Regardless of total score, acute hypoxemia (SpO2 90% on room air) + tachycardia (105/min) + borderline BP mandates hospital admission!\n2. qSOFA Score:\n   - SBP = 100 mmHg (≤100 mmHg): +1 point already confirmed!\n   - Immediately check RR (≥22/min) and GCS (<15) — if either is positive, qSOFA ≥2 indicates high sepsis mortality risk and activates the Hour-1 Sepsis Bundle."
      },
      {
        "q": "3. Which emergency investigations are required on arrival?",
        "a": "Immediate Diagnostic Workup:\n1. Arterial Blood Gas (ABG) + Serum Lactate: Essential given SpO2 90% and SBP 100 mmHg to quantify PaO2/FiO2 ratio, rule out hypercapnia/acidosis, and detect tissue hypoperfusion (lactate >2 mmol/L).\n2. Portable Chest X-ray: Confirm lobar or multilobar consolidation/air bronchogram, and exclude pleural effusion, empyema, or acute pulmonary edema.\n3. Blood tests: CBC, CRP, U&Es (urea for CURB-65, creatinine for SOFA), LFTs (bilirubin for SOFA), and 2 sets of blood cultures prior to antibiotics.\n4. Microbiological tests: Sputum Gram stain & culture, urinary pneumococcal and Legionella antigens, and respiratory viral PCR (Influenza/COVID-19) in season."
      },
      {
        "q": "4. What is the immediate empiric antibiotic and supportive management protocol?",
        "a": "Immediate Inpatient Treatment:\n1. Empiric IV Antibiotics (administer within 1 hour if septic):\n   - IV Co-amoxiclav (1.2 g IV q8h) OR IV Ceftriaxone (2 g IV daily) PLUS IV/PO Clarithromycin (500 mg q12h) or Azithromycin (500 mg daily) to cover typical pathogens (S. pneumoniae, H. influenzae, M. catarrhalis) AND atypical organisms (Legionella, Mycoplasma, Chlamydophila).\n2. Supportive & Resuscitative Care: Titrated O2 therapy (escalate to HFNC/ICU if persistent hypoxemia), IV crystalloid fluids (cautious boluses if lactate elevated or BP drops <90/60), antipyretics, VTE prophylaxis, and continuous cardiac/SpO2 monitoring."
      },
      {
        "q": "5. What major complications occur in elderly patients with severe CAP, and what post-recovery follow-up and vaccines are required?",
        "a": "Complications in Elderly CAP:\n- Respiratory: ARDS/respiratory failure requiring mechanical ventilation, parapneumonic effusion/empyema.\n- Systemic/Cardiovascular: Septic shock, acute kidney injury, delirium, and acute cardiovascular events (myocardial infarction, new-onset atrial fibrillation, or decompensated heart failure triggered by pneumonia).\n- Follow-up & Prevention:\n  • Mandatory repeat Chest X-ray at 6 weeks (age >50 years) to confirm radiological resolution and exclude occult lung malignancy.\n  • Administer Pneumococcal vaccination (PCV + PPSV23) and annual inactivated Influenza vaccination upon recovery."
      }
    ]
  },
  {
    "id": 109,
    "title": "حالة 109: Cryptococcal Meningitis in Advanced HIV/AIDS",
    "topic": "Cryptococcal Meningitis (HIV/AIDS)",
    "category": "Meningitis & CNS",
    "scenario": "A 38-year-old HIV-infected patient with a CD4 count of 45 cells/µL presents with a progressive headache, low-grade fever, and mild confusion. On physical examination, there is slight neck stiffness. A lumbar puncture is performed, and India ink preparation of the CSF reveals encapsulated budding yeast cells.",
    "questions": [
      {
        "q": "1. What is the exact diagnosis, and which clinical and laboratory findings in this case confirm it?",
        "a": "Diagnosis: Cryptococcal Meningoencephalitis caused by Cryptococcus neoformans in a patient with advanced HIV/AIDS.\n- Justifying clues in this case:\n  1. Severe cellular immunodeficiency: CD4 count = 45 cells/µL (classic risk threshold is CD4 <100 cells/µL).\n  2. Indolent/subacute clinical presentation: Progressive headache, low-grade fever, mild confusion, and only slight neck stiffness (HIV patients frequently show minimal meningismus despite severe fungal burden!).\n  3. Pathognomonic CSF microscopy: India ink stain revealing encapsulated budding yeast cells (bright clear halo representing the thick polysaccharide capsule)."
      },
      {
        "q": "2. How do you differentiate Cryptococcal Meningitis from other major opportunistic CNS infections in advanced HIV/AIDS?",
        "a": "Key HIV CNS Differential Diagnosis (CD4 <100 cells/µL):\n1. Cryptococcal meningitis (C. neoformans): Subacute headache/fever, markedly elevated CSF opening pressure (>250 mmH2O), India ink + / CrAg +, typically no mass lesion on MRI.\n2. Cerebral Toxoplasmosis (Toxoplasma gondii): Subacute focal neurological deficits, seizures, fever; brain MRI shows multiple ring-enhancing lesions in basal ganglia/corticomedullary junction; Toxoplasma IgG+.\n3. Primary CNS Lymphoma (EBV-associated, CD4 <50): Solitary ring- or homogeneously-enhancing periventricular lesion; CSF EBV PCR+.\n4. Progressive Multifocal Leukoencephalopathy (PML — JC virus): Progressive focal motor/visual/cognitive deficits WITHOUT fever; MRI shows asymmetric non-enhancing subcortical white matter lesions without mass effect.\n5. Tuberculous Meningitis: Subacute basilar meningitis with cranial nerve palsies, very low CSF glucose, basilar meningeal enhancement, AFB/GeneXpert+."
      },
      {
        "q": "3. What are the most sensitive confirmatory diagnostic tests and expected CSF parameters in HIV-associated cryptococcal meningitis?",
        "a": "Confirmatory Investigations & CSF Profile (Al-Azhar Fungal Infections lecture):\n1. Cryptococcal Capsular Antigen (CrAg) by lateral flow assay or latex agglutination in CSF and serum: Most sensitive and specific rapid test (>95% sensitivity, far superior to India ink which has ~50–80% sensitivity!).\n2. CSF Opening Pressure: Typically markedly elevated (>250 mmH2O) because shed fungal polysaccharide capsule clogs arachnoid villi and blocks CSF resorption.\n3. Routine CSF in HIV: Often deceptively mild WBC elevation (<20 lymphocytes/µL due to severe CD4 depletion!), mildly elevated protein, and low-to-normal glucose.\n4. Fungal Culture (Sabouraud agar) of CSF and blood cultures (confirm disseminated cryptococcosis)."
      },
      {
        "q": "4. What is the gold-standard 3-phase antifungal treatment regimen AND the essential non-pharmacological intervention for raised ICP?",
        "a": "Standard 3-Phase Antifungal Therapy:\n1. Induction Phase (2 weeks — Treatment of Choice): IV Amphotericin B (liposomal 3–4 mg/kg/day or deoxycholate 0.7–1.0 mg/kg/day) COMBINED WITH Oral Flucytosine (100 mg/kg/day in 4 divided doses). (Note: Oral Fluconazole alone, Voriconazole, and Caspofungin are NOT appropriate for induction!)\n2. Consolidation Phase (8 weeks): Oral Fluconazole 400–800 mg/day.\n3. Maintenance / Secondary Prophylaxis: Oral Fluconazole 200 mg/day indefinitely (or until sustained immune recovery on ART with CD4 >100–200 cells/µL for ≥3–6 months and suppressed viral load).\n- CRITICAL ADJUNCT for Raised ICP: Perform serial therapeutic lumbar punctures (daily if needed) to drain CSF and reduce opening pressure by 50% or to <200 mmH2O (acetazolamide, mannitol, and steroids are NOT recommended for ICP control here!)."
      },
      {
        "q": "5. When should Antiretroviral Therapy (ART) be initiated in this patient, and what major drug toxicities must be monitored?",
        "a": "ART Timing & IRIS Prevention (High-Yield OSCE Rule!):\n- DEFER starting ART for 4–6 weeks after initiating effective antifungal induction therapy! Starting ART immediately triggers fatal CNS Immune Reconstitution Inflammatory Syndrome (IRIS) with rebound intracranial hypertension.\n- Drug Toxicity Monitoring:\n  • Amphotericin B: Nephrotoxicity (creatinine), severe hypokalemia & hypomagnesemia (pre-hydrate with normal saline and supplement K+/Mg2+), anemia, and infusion-related fever/rigors.\n  • Flucytosine: Bone marrow suppression (neutropenia, thrombocytopenia — monitor CBC closely) and hepatotoxicity.\n- Reservoir & Prevention: C. neoformans is inhaled from pigeon droppings/soil; HIV patients with CD4 <100 should be screened with serum CrAg before starting ART."
      }
    ]
  },
  {
    "id": 110,
    "title": "حالة 110: Influenza Antiviral Therapy (Oseltamivir Mechanism & Clinical Use)",
    "topic": "Influenza & Oseltamivir Therapy",
    "category": "Other Infections & Parasites",
    "scenario": "A 12-year-old girl is prescribed Oseltamivir for suspected influenza.",
    "questions": [
      {
        "q": "1. What is the exact mechanism of action of Oseltamivir, and which influenza virus types does it cover?",
        "a": "Mechanism of action (Al-Azhar Antiviral Pharmacology lecture):\n- Oseltamivir (Tamiflu®) is an oral Neuraminidase Inhibitor.\n- It competitively inhibits the viral neuraminidase enzyme on the surface of infected host cells, preventing cleavage of sialic acid residues and thereby BLOCKING THE RELEASE (budding) of newly assembled viral particles from infected respiratory epithelial cells (limiting cell-to-cell spread).\n- Spectrum: Active against BOTH Influenza A (including H1N1 swine flu and H5N1 avian flu) AND Influenza B. (Contrast with Amantadine, which blocks viral uncoating/M2 channel and works against Influenza A only, now largely obsolete due to widespread resistance.)"
      },
      {
        "q": "2. When must Oseltamivir be initiated for maximum clinical benefit, and what are the treatment versus prophylaxis regimens?",
        "a": "Timing & Regimens (Al-Azhar Antiviral lecture):\n- Optimal timing window: Start as early as possible, ideally within 48 hours of symptom onset (because peak viral replication occurs at 24–72 hours of illness!). Note: In hospitalized, severely ill, or immunocompromised patients, still start even if >48 hours.\n- Treatment regimen (adolescents/adults ≥40 kg): 75 mg PO twice daily for 5 days (weight-based dosing for smaller children).\n- Post-exposure prophylaxis regimen (high-risk unvaccinated contacts): 75 mg PO once daily for 7–10 days."
      },
      {
        "q": "3. How do you clinically distinguish seasonal Influenza from the common cold, and what is the gold-standard confirmatory test?",
        "a": "Clinical Distinction (Al-Azhar IPC lecture):\n- Influenza: Abrupt onset of high fever (38.5–40°C lasting 3–4 days), prominent headache, severe generalized myalgia/body aches, early extreme exhaustion/fatigue (persisting 2–3 weeks), and hacking dry cough.\n- Common cold (rhinovirus): Gradual onset, rare fever, prominent sneezing, rhinorrhea/stuffy nose, sore throat, and mild symptoms.\n- Confirmatory investigations: Nasopharyngeal swab RT-PCR (gold standard, highest sensitivity/specificity) or Rapid Influenza Diagnostic Test (RIDT — fast antigen test but lower sensitivity)."
      },
      {
        "q": "4. What are the main adverse effects of Oseltamivir, and which antipyretic is strictly contraindicated in this 12-year-old girl?",
        "a": "Oseltamivir Adverse Effects (Al-Azhar Pharmacology lecture):\n- Most common: GI disturbances (nausea, vomiting, diarrhea — reduced by taking with food), headache, and fatigue.\n- Important pediatric/adolescent warning: Rare neuropsychiatric events (delirium, hallucinations, confusion, abnormal behavior) — parents must monitor closely.\n- CRITICAL Pediatric Safety Rule: NEVER administer Aspirin (salicylates) for fever in children or adolescents with influenza (or varicella) because of the risk of Reye's syndrome (acute fatty liver failure + fulminant encephalopathy)! Use Paracetamol (acetaminophen) or Ibuprofen instead."
      },
      {
        "q": "5. What are the major complications of influenza, and what IPC precautions and vaccination strategy prevent transmission?",
        "a": "Complications:\n- Primary viral pneumonia (ARDS), secondary bacterial pneumonia (Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae), acute otitis media, exacerbation of asthma/chronic lung disease, myocarditis, and febrile seizures.\n- IPC Precautions (Hawari Practical): Droplet precautions (surgical mask, gloves, gown, ≥2 meters separation) + respiratory cough etiquette and strict hand hygiene.\n- Prevention: Annual seasonal inactivated influenza vaccination (TIV/QIV) recommended for everyone ≥6 months, especially high-risk groups (pregnant women, elderly, chronic cardiopulmonary disease, immunocompromised, and healthcare workers)."
      }
    ]
  },
  {
    "id": 111,
    "title": "حالة 111: Acute Viral Bronchiolitis (Respiratory Syncytial Virus - RSV)",
    "topic": "RSV Bronchiolitis in Infancy",
    "category": "Other Infections & Parasites",
    "scenario": "An 8-month-old infant is admitted with high respiratory rate, chest retractions, wheezing, and low-grade fever during winter.",
    "questions": [
      {
        "q": "1. What is the diagnosis and the single most common causative virus in infants under 1 year of age?",
        "a": "Diagnosis: Acute Viral Bronchiolitis.\n- Most common causative virus: Respiratory Syncytial Virus (RSV) — accounts for 70–80% of all bronchiolitis cases in infants <1 year old, characteristically peaking during winter and early spring.\n- Justifying features: Age 8 months (<1 year), winter season, low-grade fever, tachypnea, chest wall retractions (intercostal/subcostal), and diffuse wheezing.\n- Other viral causes / DD: Rhinovirus, Human Metapneumovirus, Parainfluenza virus (more classically causes croup with barking cough/stridor), Adenovirus, Influenza, pertussis, and bacterial pneumonia."
      },
      {
        "q": "2. What is the virology and pathophysiology explaining the wheezing and chest retractions in RSV bronchiolitis?",
        "a": "Virology & Pathophysiology:\n- RSV is an enveloped, negative-sense single-stranded RNA virus (Pneumoviridae, formerly Paramyxoviridae).\n- Its surface F (fusion) protein causes infected respiratory epithelial cells to fuse into multinucleated giant cells ('syncytia').\n- Necrosis and sloughing of small bronchiolar epithelium, combined with submucosal edema and thick mucus plugs, cause partial/complete small-airway obstruction → air trapping, hyperinflation, diffuse expiratory wheezing, increased work of breathing (chest retractions), and patchy atelectasis leading to V/Q mismatch and hypoxemia."
      },
      {
        "q": "3. How is RSV bronchiolitis diagnosed, and what clinical red flags indicate severe disease or need for PICU escalation?",
        "a": "Diagnostic Evaluation:\n- Bronchiolitis is primarily a CLINICAL diagnosis!\n- Pulse oximetry is mandatory to detect hypoxemia.\n- Nasopharyngeal swab RT-PCR (or rapid RSV antigen test) confirms RSV mainly for hospital infection control / cohorting.\n- Routine Chest X-ray is NOT required in typical mild-to-moderate cases (when done in severe/atypical cases, shows bilateral lung hyperinflation, flattened diaphragms, peribronchial thickening, and patchy atelectasis).\n- Red Flags for admission / PICU: Apnea (especially in infants <2 months or preterm), persistent SpO2 <92%, severe respiratory distress (RR >70/min, grunting, nasal flaring, head bobbing), cyanosis, exhaustion/lethargy, or poor feeding (<50% normal intake) with dehydration."
      },
      {
        "q": "4. What is the cornerstone of management for hospitalized RSV bronchiolitis, and which medications should be AVOIDED?",
        "a": "Supportive Care is the Sole Cornerstone of Management:\n1. Humidified Oxygen therapy (nasal cannula or High-Flow Nasal Cannula [HFNC]) to maintain SpO2 ≥92–94% (escalate to CPAP/intubation if worsening respiratory failure or recurrent apnea).\n2. Gentle superficial nasal saline drops & suctioning (infants are obligate nose-breathers).\n3. Hydration & Nutrition: Small frequent feeds, nasogastric tube feeding, or IV isotonic fluids if tachypnea prevents safe oral feeding.\n- Interventions to AVOID routinely (evidence-based guidelines):\n  • NO routine antibiotics (purely viral; use only if clear secondary bacterial superinfection).\n  • NO routine systemic or inhaled corticosteroids.\n  • NO routine bronchodilators (salbutamol/albuterol) — airway obstruction is caused by mucus/edema, not bronchospasm. (Aerosolized Ribavirin is reserved solely for life-threatening RSV in severely immunocompromised infants.)"
      },
      {
        "q": "5. What infection control precautions are needed on the pediatric ward, and how is severe RSV prevented in high-risk infants?",
        "a": "IPC & Prophylaxis:\n- Transmission occurs via direct contact with contaminated secretions/fomites (RSV survives for hours on surfaces/hands!) and respiratory droplets → strict Contact + Droplet precautions (hand hygiene, gloves, gown, surgical mask, single room or RSV cohorting).\n- Immunoprophylaxis for high-risk infants (prematurity <29 weeks, chronic lung disease of prematurity/BPD, hemodynamically significant congenital heart disease, severe immunodeficiency):\n  • Palivizumab (monthly IM anti-RSV F-protein monoclonal antibody throughout the winter RSV season) OR Nirsevimab (single long-acting monoclonal antibody dose).\n  • Maternal RSVpreF vaccination in late pregnancy (32–36 weeks) also confers passive transplacental immunity to newborns."
      }
    ]
  },
  {
    "id": 112,
    "title": "حالة 112: Latent Tuberculosis Screening (Household Contact of Active TB)",
    "topic": "Latent Tuberculosis Screening (Household Contact)",
    "category": "Tuberculosis (TB)",
    "scenario": "A 30-year-old man comes for review. He lives with a woman who has recently been diagnosed with tuberculosis. The man was born in the UK, has no significant past medical history, and is currently asymptomatic.",
    "questions": [
      {
        "q": "1. What is the most appropriate initial test to screen this asymptomatic household contact for latent tuberculosis, and what is the positive threshold?",
        "a": "Most appropriate initial screening test: Mantoux test (Tuberculin Skin Test / TST) — intradermal injection of Purified Protein Derivative (PPD) on the volar forearm, measuring the transverse diameter of INDURATION (not erythema!) at 48–72 hours.\n- Positive threshold in THIS patient: Induration ≥ 5 mm (the 5 mm cutoff applies specifically to recent close contacts of active TB, HIV-infected patients, immunosuppressed individuals, and those with fibrotic TB scars on CXR!).\n- Role of IGRA (Interferon-Gamma Release Assay / QuantiFERON-TB Gold): Recommended as a confirmatory follow-up if Mantoux is positive/equivocal (or in BCG-vaccinated individuals to exclude false-positive TST), or as an initial alternative where available. (Note: Chest X-ray and sputum culture are NOT the initial tests in an asymptomatic contact — CXR is done AFTER a positive Mantoux/IGRA to exclude active TB!)"
      },
      {
        "q": "2. How do the Mantoux (TST) test and IGRA (QuantiFERON) test compare in mechanism, cutoffs, and false results?",
        "a": "Mantoux (TST) vs. IGRA (Hawari Practical TB Q7 & Al-Azhar TB Lecture):\n- Mantoux (TST):\n  • Mechanism: In vivo Type IV delayed-type hypersensitivity reaction read at 48–72 hours.\n  • Cutoffs: ≥5 mm (HIV, immunosuppressed, recent TB contact); ≥10 mm (immigrants from high-prevalence countries, HCWs, IVDU, DM/CKD); ≥15 mm (no risk factors).\n  • Limitations: Requires 2 visits; FALSE POSITIVES from prior BCG vaccination or non-tuberculous mycobacteria; FALSE NEGATIVES in severe immunosuppression, miliary TB, or early window (<8–10 weeks after exposure!).\n- IGRA (QuantiFERON-TB Gold):\n  • Mechanism: In vitro blood test measuring T-lymphocyte IFN-γ release in response to M. tuberculosis-specific antigens (ESAT-6, CFP-10).\n  • Advantages: Single blood draw, NOT confounded by prior BCG vaccination.\n  • Shared limitation: NEITHER TST nor IGRA can distinguish Latent TB Infection (LTBI) from Active TB disease!"
      },
      {
        "q": "3. What are the key pathophysiological, clinical, and radiological distinctions between Primary Active TB and Latent TB Infection (LTBI)?",
        "a": "Primary Active TB vs. Latent TB Infection (Hawari Practical TB Q4):\n- Latent TB Infection (LTBI): Inhaled bacilli are successfully contained in a dormant state inside granulomas by CD4+ Th1 cell-mediated immunity (IFN-γ, TNF-α). Patient is completely asymptomatic, Chest X-ray is normal, sputum smear/culture is negative, and patient is NOT infectious. Lifetime reactivation risk is ~10% (higher with HIV, steroids, anti-TNF agents, DM).\n- Active Pulmonary TB: Actively dividing bacilli with caseous necrosis/cavitation or progressive primary focus (Ghon complex). Patient has cough, fever, night sweats, weight loss; CXR shows infiltrates/cavities/hilar adenopathy; sputum AFB/GeneXpert/culture positive; INFECTIOUS via airborne droplet nuclei (<5 µm)."
      },
      {
        "q": "4. What is the step-by-step management algorithm depending on whether his initial Mantoux test is negative or positive?",
        "a": "Contact Management Algorithm:\n- If initial Mantoux is NEGATIVE and exposure occurred <8 weeks ago: Repeat Mantoux (or IGRA) at 8–10 weeks post-exposure to rule out a 'window-period' false negative before T-cell conversion occurs! If still negative → reassure and discharge.\n- If Mantoux is POSITIVE (≥5 mm):\n  1. Confirm with IGRA if prior BCG history is suspected.\n  2. Perform a Chest X-ray immediately to strictly EXCLUDE active pulmonary TB (plus sputum AFB/GeneXpert if CXR abnormal or any symptoms).\n  3. Check HIV status and baseline LFTs.\n  4. If CXR is normal and asymptomatic → diagnose LTBI and offer preventive chemotherapy."
      },
      {
        "q": "5. What are the recommended treatment regimens for confirmed Latent Tuberculosis Infection (LTBI)?",
        "a": "LTBI Chemoprophylaxis Regimens (Al-Azhar TB lecture):\n1. Isoniazid + Rifampicin daily for 3 months (3HR) (plus Pyridoxine/Vit B6 — preferred UK/NICE regimen), OR\n2. Isoniazid + Rifapentine once weekly for 3 months (3HP), OR\n3. Rifampicin daily for 4 months (4R), OR\n4. Isoniazid daily for 6–9 months (6H/9H) (plus Pyridoxine 25–50 mg/day to prevent peripheral neuropathy).\n- Crucial safety rule: NEVER initiate LTBI monotherapy/dual therapy before excluding active TB with a normal Chest X-ray (doing so risks inducing MDR-TB!)."
      }
    ]
  },
  {
    "id": 113,
    "title": "حالة 113: Latent Tuberculosis Screening in Recent Immigrant (Uncertain BCG Status)",
    "topic": "TB Screening in Immigrant from High-Prevalence Area",
    "category": "Tuberculosis (TB)",
    "scenario": "A 25-year-old woman has recently moved to the United Kingdom from sub-Saharan Africa to attend university. She comes from an area where there is a high prevalence of tuberculosis (TB). The patient is not pregnant and is currently asymptomatic. She thinks she may have had a BCG vaccination in the past but is not sure. She has no other medical history and is a non-smoker.",
    "questions": [
      {
        "q": "1. Which test should initially be used to screen this asymptomatic young woman for TB, and why are Chest X-ray or sputum samples NOT the initial screening test?",
        "a": "Initial screening test of choice: Mantoux test (Tuberculin Skin Test / TST) — recommended by NICE guidelines as the first-line latent TB screen for asymptomatic new entrants aged 16–35 from high-prevalence countries (regardless of uncertain BCG history; read induration at 48–72 hours; positive ≥10 mm per standard risk cutoffs or ≥5 mm per UK NICE guidelines). If Mantoux is positive, follow with an IGRA (QuantiFERON) to confirm true M. tuberculosis infection and exclude BCG cross-reactivity (alternatively, IGRA may be used directly if Mantoux follow-up is impractical).\n- Why NOT CXR or 3 sputum samples initially? She is completely asymptomatic — CXR is performed AFTER a positive Mantoux/IGRA to exclude active pulmonary TB before starting LTBI treatment, and 3 morning sputum AFB/culture specimens are reserved for symptomatic patients or abnormal CXR findings."
      },
      {
        "q": "2. How does a possible prior BCG vaccination affect TB screening, and how do you differentiate BCG reactivity from true TB infection?",
        "a": "Impact of BCG Vaccination:\n- BCG is a live-attenuated Mycobacterium bovis vaccine routinely administered at birth in high-burden countries (such as sub-Saharan Africa and Egypt) to protect infants against severe miliary TB and TB meningitis (look for a scar on the left deltoid).\n- Effect on Mantoux (TST): BCG can cause a false-positive Mantoux reaction (typically <10–15 mm, waning over 10–15 years).\n- Solution — IGRA (QuantiFERON-TB Gold): Uses M. tuberculosis-specific antigens (ESAT-6 and CFP-10) that are ABSENT from BCG vaccine strains → therefore, IGRA is NOT confounded by prior BCG vaccination!"
      },
      {
        "q": "3. If her Mantoux and confirmatory IGRA are both positive, what are the mandatory next diagnostic steps before prescribing treatment?",
        "a": "Pre-Treatment Evaluation:\n1. Clinical review: Re-confirm complete absence of active pulmonary or extrapulmonary TB symptoms (cough, hemoptysis, fever, night sweats, weight loss, cervical lymphadenopathy).\n2. Chest X-ray (PA view): Mandatory to strictly exclude active pulmonary TB (look for apical infiltrates, cavitation, hilar adenopathy, pleural effusion).\n3. Baseline blood work: LFTs (ALT, AST, bilirubin — hepatotoxicity baseline), CBC, HIV test (mandatory in TB screening!), and HBV/HCV screening (high prevalence in sub-Saharan Africa; coexisting viral hepatitis raises drug-induced liver injury risk)."
      },
      {
        "q": "4. If active TB is excluded (Latent TB Infection confirmed), what treatment regimen and critical contraceptive counseling should she receive?",
        "a": "LTBI Treatment Regimens (non-pregnant adult):\n- Preferred short-course regimens: 3 months of daily Isoniazid + Rifampicin (3HR) (+ Pyridoxine/Vit B6), OR 4 months of Rifampicin (4R), OR 3 months weekly Isoniazid + Rifapentine (3HP).\n- Alternative: 6–9 months of daily Isoniazid (6H/9H) (+ Pyridoxine).\n- CRITICAL Counseling for a 25-year-old woman:\n  1. Rifampicin is a potent hepatic CYP450 enzyme inducer that significantly reduces the efficacy of hormonal oral contraceptives — advise reliable non-hormonal/barrier contraception (or copper IUD) during and for 4 weeks after Rifampicin therapy!\n  2. Warn about harmless orange-red discoloration of urine, tears, and sweat (permanently stains soft contact lenses) and red-flag symptoms of hepatotoxicity (nausea, jaundice, dark urine)."
      },
      {
        "q": "5. When is BCG vaccination contraindicated, and why is it NOT routinely given to adults?",
        "a": "BCG Vaccination Rules (Al-Azhar TB lecture):\n- Strictly CONTRAINDICATED in: Individuals with a positive Mantoux/IGRA, HIV/AIDS or any cellular immunodeficiency, systemic immunosuppression/steroids, and pregnancy.\n- Why not given to adults: Reduced and variable protection against adult pulmonary TB and no proven efficacy in adults >35 years; its primary proven benefit is preventing disseminated miliary TB and tuberculous meningitis in infants and children <16 years in high-risk settings."
      }
    ]
  },
  {
    "id": 114,
    "title": "حالة 114: Active Pulmonary Tuberculosis (Inpatient Management & Airborne Isolation)",
    "topic": "Active Pulmonary Tuberculosis (Inpatient Management)",
    "category": "Tuberculosis (TB)",
    "scenario": "A 50-year-old man is admitted to the hospital for active pulmonary tuberculosis.",
    "questions": [
      {
        "q": "1. What immediate Infection Prevention & Control (IPC) isolation precautions must be instituted for this hospitalized patient, and when can isolation be discontinued?",
        "a": "Mandatory Airborne Precautions (Hawari Practical & Al-Azhar TB lecture):\n1. Room: Isolate immediately in a single Negative-Pressure Airborne Infection Isolation Room (AIIR) — negative air pressure ensures air flows INTO the room and prevents infectious droplet nuclei (<5 µm, which remain suspended in air for hours) from escaping into hospital corridors.\n2. Staff PPE: Fit-tested N95 (or higher) particulate respirator (filters ≥95% of ≥0.3 µm non-oil particles), eye protection, gloves, and gown.\n3. Patient source control: Patient must wear a surgical mask if essential transport outside the room is required.\n- Criteria to discontinue airborne isolation: Patient has received ≥2 weeks of effective multi-drug anti-TB therapy, shows clinical improvement, AND has 3 consecutive negative sputum AFB smears (collected 8–24 hours apart)."
      },
      {
        "q": "2. What are the essential confirmatory microbiological, molecular, and baseline investigations for active pulmonary TB?",
        "a": "Diagnostic & Baseline Workup (Al-Azhar TB lecture):\n1. Three morning sputum specimens (at least one early morning) for Acid-Fast Bacilli (AFB) smear using Ziehl-Neelsen stain (bright red acid-fast rods against blue background due to mycolic acid cell wall).\n2. Rapid molecular test — Xpert MTB/RIF (GeneXpert NAAT): Detects M. tuberculosis DNA AND Rifampicin resistance (rpoB mutation) in <2 hours!\n3. Mycobacterial Culture (Gold Standard): Löwenstein-Jensen solid medium (slow, 4–8 weeks) or MGIT liquid culture (faster, 1–3 weeks) — confirms diagnosis and provides full Drug Susceptibility Testing (DST).\n4. Chest X-ray: Reactivation TB classically shows apical/posterior upper lobe infiltrates and cavities with air-fluid levels.\n5. Mandatory pre-treatment baseline labs: LFTs, CBC, U&Es, HIV test (mandatory for ALL active TB patients!), and baseline visual acuity/red-green color vision (for Ethambutol)."
      },
      {
        "q": "3. What is the standard first-line treatment regimen for drug-susceptible active pulmonary TB, including exact phases and duration?",
        "a": "Standard First-Line Multi-Drug Regimen (to prevent drug resistance) under Directly Observed Therapy (DOT) — Total duration 6 months:\n1. Intensive (Initial) Phase — 2 months of 4 drugs (HRZE / RIPE):\n   - Isoniazid (H): Bactericidal (inhibits mycolic acid synthesis).\n   - Rifampicin (R): Bactericidal (inhibits DNA-dependent RNA polymerase).\n   - Pyrazinamide (Z): Sterilizing activity in acidic intracellular macrophage environments.\n   - Ethambutol (E): Bacteriostatic (inhibits arabinosyl transferase / cell wall synthesis).\n   - Plus Pyridoxine (Vitamin B6, 25–50 mg/day) to prevent INH peripheral neuropathy.\n2. Continuation Phase — 4 months of 2 drugs (HR): Isoniazid + Rifampicin.\n- Special extended durations: 9–12 months for TB meningitis or skeletal/bone TB (Pott's disease), plus adjuvant corticosteroids (Dexamethasone tapered over 6 weeks) for CNS or pericardial TB."
      },
      {
        "q": "4. What are the signature adverse effects of each of the four first-line anti-TB drugs that must be monitored during admission and follow-up?",
        "a": "First-Line Anti-TB Drug Toxicities (HRZE):\n- Isoniazid (H): Hepatotoxicity, peripheral neuropathy (prevented by Pyridoxine/Vit B6), and drug-induced lupus.\n- Rifampicin (R): Hepatotoxicity, harmless orange-red discoloration of urine/tears/sweat, potent CYP450 enzyme induction (multiple drug interactions), and thrombocytopenia.\n- Pyrazinamide (Z): Hepatotoxicity (most hepatotoxic first-line drug) and hyperuricemia/acute gout.\n- Ethambutol (E): Retrobulbar optic neuritis (loss of red-green color discrimination and decreased visual acuity — monitor vision regularly!).\n- DILI rule: Stop hepatotoxic drugs if ALT >3× ULN with hepatitis symptoms (nausea, vomiting, jaundice) OR ALT >5× ULN even if asymptomatic."
      },
      {
        "q": "5. How are MDR-TB and XDR-TB defined, how is treatment response monitored, and what public health steps are mandatory?",
        "a": "Drug Resistance, Monitoring & Public Health:\n- MDR-TB: Resistance to at least Isoniazid AND Rifampicin → requires ≥4–5 effective second-line drugs (fluoroquinolones like levofloxacin/moxifloxacin, bedaquiline, linezolid, clofazimine, cycloserine) for prolonged courses (traditionally 18–24 months or newer WHO shorter all-oral regimens).\n- XDR-TB: MDR-TB plus resistance to any fluoroquinolone and at least one additional Group A/injectable second-line drug.\n- Follow-up monitoring: Repeat sputum AFB smears at the end of Month 2 (intensive phase), Month 5, and end of treatment to document smear conversion and cure.\n- Public Health: Mandatory TB case notification and contact tracing (screen all household/close contacts with Mantoux/IGRA ± CXR)."
      }
    ]
  },
  {
    "id": 115,
    "title": "حالة 115: Isoniazid-Induced Peripheral Neuropathy (Anti-TB Toxicity)",
    "topic": "Isoniazid-Induced Peripheral Neuropathy",
    "category": "Tuberculosis (TB)",
    "scenario": "A 20-year-old girl is taking anti-tuberculosis treatment. She presents with polyneuropathy.",
    "questions": [
      {
        "q": "1. Which anti-tuberculosis drug is the most likely cause of her polyneuropathy, and what is its exact mechanism?",
        "a": "Causative drug: Isoniazid (INH) — (Hawari Practical TB Q13!).\n- Exact mechanism: Isoniazid is structurally similar to Vitamin B6 (Pyridoxine). It inhibits pyridoxine phosphokinase and binds active pyridoxal-5-phosphate to form inactive hydrazones that are excreted in urine → causes functional Vitamin B6 deficiency, impairing peripheral nerve myelin/neurotransmitter synthesis and producing a symmetrical distal 'glove-and-stocking' sensorimotor polyneuropathy (paresthesia, numbness, burning feet, diminished ankle reflexes).\n- Note: Among second-line drugs, Cycloserine and Linezolid can also cause neurotoxicity/neuropathy, but in standard first-line HRZE therapy Isoniazid is the classic culprit."
      },
      {
        "q": "2. How is Isoniazid-induced peripheral neuropathy prevented and treated, and which patients are at highest risk?",
        "a": "Prevention & Treatment:\n- Prevention: Prophylactic Oral Pyridoxine (Vitamin B6) 10–50 mg/day (commonly 25–50 mg/day) co-prescribed with Isoniazid.\n- Treatment of established polyneuropathy: Therapeutic Oral Pyridoxine 100–200 mg/day while continuing multi-drug anti-TB therapy (do NOT abruptly stop INH alone without specialist substitution, as incomplete regimens promote MDR-TB).\n- Bonus emergency pearl: Acute Isoniazid overdose causes refractory status epilepticus (GABA depletion) treated with IV Pyridoxine gram-for-gram!\n- Highest-risk groups: Slow acetylators (NAT2 genetic polymorphism), malnutrition, pregnancy/lactation, diabetes mellitus, chronic kidney disease, HIV infection, and alcoholism."
      },
      {
        "q": "3. Which other first-line and injectable anti-TB agents cause distinct organ-specific toxicities (optic, hepatic, renal/auditory, metabolic), and what monitoring is required?",
        "a": "High-Yield Anti-TB Toxicity Map (Hawari Practical TB Q12 & Q13):\n1. Ethambutol (E): Retrobulbar optic neuritis (decreased visual acuity, red-green color blindness) → baseline & monthly visual acuity / Ishihara color testing.\n2. Streptomycin & Second-line Aminoglycosides (Amikacin, Kanamycin): Nephrotoxicity (acute tubular necrosis) AND Ototoxicity (CN VIII vestibular vertigo & irreversible sensorineural deafness) → baseline & serial serum creatinine/U&Es and audiometry!\n3. Pyrazinamide (Z): Severe hepatotoxicity and hyperuricemia/acute gout → baseline LFTs & uric acid if symptomatic.\n4. Rifampicin (R): Hepatotoxicity, orange-red secretions, thrombocytopenia, and potent CYP450 induction → baseline LFTs & drug-interaction check."
      },
      {
        "q": "4. What special reproductive and pharmacological counseling is essential for this 20-year-old female on anti-TB therapy?",
        "a": "Essential Counseling for a 20-Year-Old Female:\n1. Contraceptive Failure (CYP450 Induction): Rifampicin strongly induces hepatic CYP450 enzymes, accelerating metabolism of combined oral contraceptives, progestin-only pills, and implants → counsel her to use reliable barrier contraception or a copper IUD during therapy and for 4 weeks after stopping Rifampicin!\n2. Pregnancy safety (Hawari Practical TB Q11): If she becomes pregnant, first-line HRZE (+ mandatory Pyridoxine) is safe and MUST be continued (untreated active TB is far more dangerous to mother and fetus). Conversely, Streptomycin (and other aminoglycosides → fetal CN VIII deafness) and Fluoroquinolones (cartilage toxicity) are STRICTLY CONTRAINDICATED in pregnancy!\n3. Contact lenses: Warn that Rifampicin permanently stains soft contact lenses orange-red."
      },
      {
        "q": "5. How do you manage drug-induced hepatotoxicity if this patient also develops nausea, vomiting, and jaundice during HRZE therapy?",
        "a": "Management of Anti-TB Drug-Induced Liver Injury (DILI):\n- Culprits (in order of hepatotoxic potential): Pyrazinamide (Z) > Isoniazid (H) > Rifampicin (R). (Ethambutol is non-hepatotoxic!)\n- Threshold to hold drugs: Immediately STOP H, R, and Z if ALT > 3× ULN with symptoms (nausea, vomiting, anorexia, jaundice) OR ALT > 5× ULN even if asymptomatic.\n- Bridging & Reintroduction: Rule out viral hepatitis (HAV/HBV/HCV/HEV) and alcohol; if TB is severe/infectious, bridge with non-hepatotoxic agents (Ethambutol + Levofloxacin ± Amikacin). Once LFTs normalize (<2× ULN), reintroduce drugs sequentially one by one (typically Rifampicin → Isoniazid → Pyrazinamide, or omit PZA and extend total therapy to 9 months) under close LFT monitoring."
      }
    ]
  },
  {
    "id": 116,
    "title": "حالة 116: Confirmed Latent Tuberculosis Infection (LTBI) Management",
    "topic": "Latent Tuberculosis Infection (LTBI)",
    "category": "Tuberculosis (TB)",
    "scenario": "A 39-year-old female who has recently emigrated from sub-Saharan Africa is screened for tuberculosis. She reports being fit and well with no past medical history and has never had a BCG vaccination. Her chest X-ray is normal, so she has a Mantoux test, which is positive. An interferon-gamma test is also performed, which is positive.",
    "questions": [
      {
        "q": "1. What is the exact diagnosis, and which findings in this scenario clearly distinguish it from active pulmonary TB and from a false-positive test?",
        "a": "Exact diagnosis: Confirmed Latent Tuberculosis Infection (LTBI).\n- Justifying features:\n  1. High-risk epidemiology: Recent immigrant from a high-TB-prevalence region (sub-Saharan Africa).\n  2. Active pulmonary TB excluded: Completely asymptomatic (fit and well) AND a normal Chest X-ray.\n  3. True M. tuberculosis sensitization confirmed: Both Mantoux (TST) AND IGRA (QuantiFERON) are positive, AND she has never received BCG vaccination — completely eliminating BCG cross-reactivity as a false positive."
      },
      {
        "q": "2. Is this patient infectious to others, does she require isolation, and what is her risk of progressing to active TB?",
        "a": "Infectiousness & Reactivation Risk:\n- Infectiousness: NO! In LTBI, viable M. tuberculosis bacilli are dormant and walled off inside immune granulomas. She is NOT contagious, does NOT require airborne isolation or an N95 mask, and can work/live normally.\n- Lifetime risk of reactivation: ~10% overall in immunocompetent adults (~5% during the first 2 years after infection/arrival).\n- Factors that dramatically accelerate reactivation (up to ~10% per year): HIV infection, anti-TNF-α biologics (infliximab, adalimumab, etanercept), systemic corticosteroids/chemotherapy, organ transplantation, diabetes mellitus, chronic kidney disease, malnutrition, and vitamin D deficiency."
      },
      {
        "q": "3. What mandatory baseline laboratory evaluations must be performed before starting LTBI treatment in this 39-year-old woman?",
        "a": "Pre-Treatment Baseline Workup:\n1. Baseline Liver Function Tests (ALT, AST, bilirubin): Mandatory before starting potentially hepatotoxic INH/Rifampicin, especially in patients aged >35 years.\n2. Viral Screening: HIV test (essential in all TB/LTBI diagnoses!) PLUS HBsAg and anti-HCV (sub-Saharan African origin; underlying chronic viral hepatitis significantly increases anti-TB hepatotoxicity risk).\n3. Pregnancy test (39-year-old woman of childbearing potential).\n4. Symptom re-check: Confirm no subtle extrapulmonary TB signs (lymphadenopathy, back pain, night sweats, weight loss)."
      },
      {
        "q": "4. What are the first-line treatment regimens for LTBI, and why is the 4-drug RIPE/HRZE regimen NOT used here?",
        "a": "First-Line LTBI Chemoprophylaxis Regimens (Al-Azhar TB lecture):\n1. Preferred short-course rifamycin regimens (higher completion rates & lower hepatotoxicity):\n   - Isoniazid + Rifampicin daily for 3 months (3HR) (+ Pyridoxine/Vit B6) — NICE first-line!\n   - OR Rifampicin daily for 4 months (4R).\n   - OR Isoniazid + Rifapentine once weekly for 3 months (3HP).\n2. Alternative regimen: Isoniazid daily for 6–9 months (6H/9H) (+ Pyridoxine/Vit B6 25–50 mg/day).\n- Why NOT 4-drug HRZE (RIPE)? Four-drug therapy is reserved for ACTIVE TB where bacillary load is high (10⁸–10¹⁰ organisms) and risk of resistance is high; LTBI has a very low dormant bacillary load (~10²–10⁴ organisms) that is safely eradicated with 1–2 drugs once active TB has been excluded by a normal CXR."
      },
      {
        "q": "5. What crucial safety counseling and monitoring advice must be given to this patient during LTBI therapy?",
        "a": "Patient Counseling & Monitoring:\n- Hepatotoxicity vigilance: Advise strict avoidance of alcohol and unnecessary hepatotoxic drugs; instruct her to STOP medication immediately and seek urgent medical review/LFTs if she develops nausea, vomiting, anorexia, right upper quadrant pain, dark urine, or jaundice (hold therapy if ALT >3× ULN with symptoms or >5× ULN asymptomatic).\n- Rifampicin-specific counseling (if on 3HR/4R): Harmless orange-red discoloration of urine, tears, and sweat (stains soft contact lenses) AND potent CYP450 induction reducing effectiveness of hormonal contraception (use barrier/non-hormonal method).\n- Neuropathy prevention (if on INH): Take daily Pyridoxine (Vitamin B6) and report any tingling/numbness in hands or feet."
      }
    ]
  },
  {
    "id": 117,
    "title": "حالة 117: Active Cavitary Pulmonary Tuberculosis (TB)",
    "topic": "Active Cavitary Pulmonary Tuberculosis (TB)",
    "category": "Tuberculosis (TB)",
    "scenario": "A 36-year-old woman is evaluated for a six-week history of weight loss, fever, night sweating, and productive cough. Chest X-ray shows a small cavity in the right and left upper lobes with hilar infiltrates. Sputum culture is positive for acid-fast bacilli.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which specific clinical, radiological, and laboratory features justify your choice?",
        "a": "Most likely diagnosis: Active Post-Primary (Reactivation) Cavitary Pulmonary Tuberculosis.\n- Justifying features in this case:\n  1. Chronic constitutional symptoms (>2-3 weeks): 6-week history of weight loss, fever, and drenching night sweats.\n  2. Chronic productive cough.\n  3. Classic chest X-ray distribution: bilateral upper-lobe cavities with hilar infiltrates (apical/posterior segments of upper lobes are favored due to high oxygen tension and poor lymphatic drainage).\n  4. Definitive microbiological confirmation: sputum culture positive for acid-fast bacilli (AFB).\n- Differential diagnosis: Bronchogenic carcinoma, non-tuberculous mycobacterial infection (e.g., Mycobacterium avium complex), pulmonary mycoses (histoplasmosis, aspergillosis), necrotizing pneumonia/lung abscess, and sarcoidosis."
      },
      {
        "q": "2. What is the causative organism, and how do Primary TB, Latent TB Infection (LTBI), and Reactivation TB differ?",
        "a": "- Causative organism: Mycobacterium tuberculosis (part of Mycobacterium tuberculosis complex) — slow-growing, strict aerobic bacillus with a lipid-rich mycolic acid cell wall that resists acid decolorization (stains bright red on Ziehl-Neelsen acid-fast stain).\n- Key distinctions:\n  1. Primary TB: Initial infection forming a subpleural parenchymal focus (Ghon focus) + hilar lymphadenopathy (Ghon complex; Ranke complex when calcified); symptomatic in ~10%.\n  2. Latent TB Infection (LTBI): Dormant live bacilli contained inside granulomas; patient is asymptomatic, normal chest X-ray, non-infectious, detected by positive TST or IGRA (~10% lifetime reactivation risk).\n  3. Reactivation (Post-Primary) TB: Occurs when cell-mediated immunity wanes; liquefaction of caseous granulomas causes upper-lobe cavitation with high bacillary load, making the patient highly contagious."
      },
      {
        "q": "3. What diagnostic investigations are used to confirm active pulmonary TB, evaluate drug resistance, and differentiate TST from IGRA?",
        "a": "- Confirmatory microbiological tests:\n  1. Sputum AFB microscopy (Ziehl-Neelsen stain): 3 early-morning sputum samples (gastric aspirate in young children who cannot expectorate).\n  2. Rapid molecular testing: GeneXpert MTB/RIF (NAAT) detects M. tuberculosis DNA and Rifampicin resistance (rpoB mutation) in <2 hours.\n  3. Mycobacterial culture (Gold Standard) + Drug Susceptibility Testing (DST): Löwenstein-Jensen solid medium (4-8 weeks) or MGIT liquid culture (1-3 weeks).\n- Immunological screening (TST vs. IGRA — detect exposure/LTBI, cannot distinguish active from latent TB):\n  - Tuberculin Skin Test (Mantoux): Intradermal PPD read at 48-72h (positive induration: ≥5 mm in HIV/immunosuppressed/recent TB contact; ≥10 mm in healthcare workers/endemic regions/IVDU; ≥15 mm in low-risk). Confounded by prior BCG vaccination.\n  - IGRA (QuantiFERON-TB Gold): Measures T-cell IFN-γ release; NOT affected by prior BCG vaccination."
      },
      {
        "q": "4. What is the appropriate initial and complete first-line treatment regimen, and what key drug toxicities must be monitored?",
        "a": "- Core OSCE principle: Multi-drug regimen (to eradicate dividing and dormant bacilli and prevent resistance) administered under Directly Observed Therapy (DOT).\n- Standard 6-month regimen for drug-susceptible pulmonary TB:\n  1. Intensive phase (first 2 months): 4 drugs — HRZE / RIPE (Isoniazid + Rifampicin + Pyrazinamide + Ethambutol).\n  2. Continuation phase (next 4 months): 2 drugs — HR (Isoniazid + Rifampicin).\n  (Note: Extended to 9-12 months for TB meningitis or skeletal/Pott's TB; add corticosteroids in TB meningitis and pericarditis).\n- Key side effects & monitoring:\n  - Isoniazid (INH): Hepatotoxicity and peripheral neuropathy -> co-prescribe Pyridoxine (Vitamin B6, 25-50 mg/day).\n  - Rifampicin (RIF): Hepatotoxicity, potent CYP450 inducer, orange-red discoloration of body fluids.\n  - Pyrazinamide (PZA): Hepatotoxicity and hyperuricemia/gout.\n  - Ethambutol (EMB): Optic neuritis (red-green color blindness, visual acuity loss -> baseline & monthly visual checks).\n  - Pregnancy pearl: HRZE/HRE are safe; Streptomycin is strictly contraindicated (fetal ototoxicity/nephrotoxicity)."
      },
      {
        "q": "5. What infection prevention and control (IPC) precautions and preventive measures are required for this infectious cavitary case?",
        "a": "- Airborne Isolation Precautions (TB spreads via airborne droplet nuclei <5 µm suspended in air):\n  1. Isolate patient in a single negative-pressure airborne infection isolation room (AIIR).\n  2. Healthcare workers must wear a fit-tested N95 (or higher) respirator, eye protection, gown, and gloves.\n  3. Patient wears a surgical mask if transport outside the room is unavoidable; maintain isolation until clinically improving with ≥2 weeks of effective therapy and 3 consecutive negative AFB smears.\n- Community & contact prevention:\n  - Screen close household contacts (TST/IGRA + chest X-ray) and provide LTBI chemoprophylaxis (e.g., INH 6-9 months, RIF 4 months, or INH+RIF 3 months) after excluding active TB.\n  - BCG vaccine (live attenuated M. bovis) given intradermally at birth in endemic countries protects infants against severe disseminated TB (miliary TB and TB meningitis); contraindicated in HIV/immunosuppression."
      }
    ]
  },
  {
    "id": 118,
    "title": "حالة 118: Pulmonary Aspergilloma (Fungus Ball)",
    "topic": "Pulmonary Aspergilloma (Fungus Ball)",
    "category": "Other Infections & Parasites",
    "scenario": "A 67-year-old man is referred to the respiratory clinic. He has a past history of tuberculosis as a child but is otherwise fit and well. Over the past two months, he has had a cough, lost one stone in weight, and had four episodes of hemoptysis. A chest X-ray shows a solid mass occupying the right upper zone.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what critical differential diagnoses must be excluded, and which clinical features justify your choice?",
        "a": "Most likely diagnosis: Pulmonary Aspergilloma (Mycetoma / Fungus Ball) colonizing a pre-existing tuberculous cavity.\n- Justifying features in this case:\n  1. Past history of childhood tuberculosis (leaves a residual apical upper-lobe cavity).\n  2. Recurrent hemoptysis (4 episodes — the hallmark presenting symptom of aspergilloma), chronic cough, and weight loss.\n  3. Right upper-zone solid intracavitary mass on chest X-ray in an otherwise immunocompetent adult.\n- Critical differential diagnoses that MUST be ruled out:\n  1. Bronchogenic carcinoma (mandatory exclusion in a 67-year-old with weight loss, hemoptysis, and an upper-zone mass).\n  2. Reactivation pulmonary tuberculosis.\n  3. Lung abscess, Rasmussen aneurysm, or pulmonary hydatid cyst."
      },
      {
        "q": "2. What is the causative organism, and how do the three main pulmonary syndromes of Aspergillus differ?",
        "a": "- Causative organism: Aspergillus fumigatus (most common) — ubiquitous filamentous mold characterized histologically by septate hyphae branching at acute (45°) angles.\n- Three distinct pulmonary aspergillosis syndromes:\n  1. Aspergilloma (Saprophytic endocavitary colonization): A tangled ball of hyphae, mucus, and cellular debris inside a pre-existing lung cavity (post-TB, bronchiectasis, sarcoidosis) in an immunocompetent host WITHOUT tissue or vascular invasion.\n  2. Allergic Bronchopulmonary Aspergillosis (ABPA): Hypersensitivity reaction in glucocorticoid-dependent asthmatics or cystic fibrosis patients with wheezing, central bronchiectasis, peripheral eosinophilia, and high Aspergillus-specific IgE.\n  3. Invasive Pulmonary Aspergillosis (IPA): Angioinvasive hyphal invasion causing thrombosis, hemorrhagic infarction, and dissemination in severely immunocompromised hosts (neutropenia <500/µL, high-dose steroids, hematologic malignancy/transplant)."
      },
      {
        "q": "3. Which investigations confirm Pulmonary Aspergilloma and rule out malignancy or TB reactivation?",
        "a": "1. High-Resolution CT Chest (Supine and Prone views): Confirms a round solid intracavitary fungus ball surrounded by a rim of air (Air-Crescent / Monad sign) that shifts position with gravity between supine and prone scans.\n2. Serology: Serum Aspergillus-specific IgG antibodies (precipitins) — positive in >90% of aspergilloma patients.\n3. Microbiological & Mycobacterial testing: Sputum or BAL fungal microscopy/culture for Aspergillus; simultaneously send 3 sputum AFB smears, GeneXpert MTB/RIF, and mycobacterial culture to exclude active TB reactivation.\n4. Bronchoscopy with biopsy/cytology: Indicated to exclude underlying bronchogenic carcinoma and localize the site of bleeding."
      },
      {
        "q": "4. What is the definitive management of Pulmonary Aspergilloma, and why are systemic antifungals not routinely effective as monotherapy?",
        "a": "- Key principle: Endocavitary aspergilloma generally responds poorly to systemic antifungal drugs alone because antifungals penetrate poorly into the avascular, thick-walled fibrous cavity.\n- Management by symptom severity:\n  1. Asymptomatic simple aspergilloma: Observation and regular clinical/radiological follow-up (no antifungal therapy needed).\n  2. Symptomatic / recurrent hemoptysis (like this patient): Surgical resection (lobectomy) is the definitive curative treatment if the patient has adequate pulmonary reserve.\n  3. Non-surgical candidates or acute massive hemoptysis: Bronchial artery embolization (BAE) for emergency bleeding control (hemoptysis originates from hypertrophied bronchial arteries in the cavity wall).\n  4. Oral triazoles (Itraconazole 200 mg BID or Voriconazole 200 mg BID): Reserved for chronic cavitary/semi-invasive pulmonary aspergillosis or inoperable symptomatic patients to prevent progression."
      },
      {
        "q": "5. What is the most life-threatening complication of Pulmonary Aspergilloma, and how should it be managed acutely?",
        "a": "- Most dangerous complication: Massive, life-threatening hemoptysis (caused by mechanical friction of the fungus ball and fungal proteases eroding dilated bronchial vessels lining the old TB cavity wall).\n- Immediate emergency management:\n  1. Airway protection (intubation if compromised) and position the patient in the lateral decubitus position with the bleeding side (right side here) DOWN to prevent blood from spilling into the healthy left lung.\n  2. Hemodynamic resuscitation (IV access, cross-match blood, correct coagulopathy).\n  3. Urgent Bronchial Artery Embolization (BAE) as first-line hemorrhage control, followed by elective surgical lobectomy once stabilized."
      }
    ]
  },
  {
    "id": 119,
    "title": "حالة 119: Pulmonary Aspergilloma with Air-Crescent Sign",
    "topic": "Pulmonary Aspergilloma with Air-Crescent Sign",
    "category": "Other Infections & Parasites",
    "scenario": "A patient with a previous history of tuberculosis now complains of hemoptysis. Chest X-ray reveals an upper lobe mass with a cavity and a crescent-shaped air-fluid level.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is the name of this classic radiological sign, and what is the differential diagnosis?",
        "a": "Most likely diagnosis: Pulmonary Aspergilloma (Fungus Ball / Mycetoma) inside a residual post-tuberculous upper-lobe cavity.\n- Pathognomonic radiological sign: Air-Crescent Sign (Monad sign) — a radiolucent crescent of air capping/separating the dense intracavitary fungal mass from the surrounding cavity wall.\n- Differential diagnosis: Reactivation cavitary pulmonary TB, cavitating bronchogenic carcinoma, necrotizing bacterial lung abscess, intracavitary blood clot, and ruptured pulmonary hydatid cyst (water-lily sign)."
      },
      {
        "q": "2. What is the causative pathogen, and how does the Air-Crescent sign in Aspergilloma differ from that seen in Invasive Pulmonary Aspergillosis?",
        "a": "- Causative organism: Aspergillus fumigatus (septate hyphae with 45° acute-angle dichotomous branching).\n- Crucial OSCE radiological distinction:\n  1. Aspergilloma (Monad sign): Occurs in an immunocompetent patient with a pre-existing cavity (e.g., old TB); the mass is a saprophytic mobile ball of fungal hyphae without tissue invasion.\n  2. Invasive Pulmonary Aspergillosis (IPA): Occurs in severely neutropenic/immunosuppressed patients; early CT shows the Halo Sign (infarcted pulmonary nodule surrounded by ground-glass hemorrhage), which later cavitates into an Air-Crescent sign when bone marrow/neutrophil function recovers."
      },
      {
        "q": "3. What confirmatory investigations should be performed in this patient?",
        "a": "1. CT Chest in Supine and Prone positions: Demonstrates gravitational mobility of the intracavitary fungus ball (confirms it is a free-lying mycetoma rather than a fixed cavitating tumor).\n2. Serum Aspergillus-specific IgG precipitins: High sensitivity (>90%) for chronic/saprophytic pulmonary aspergillosis.\n3. Sputum microscopy and fungal culture (plus BAL if needed) to isolate Aspergillus species.\n4. Sputum AFB smear (Ziehl-Neelsen) and GeneXpert MTB/RIF to rule out concurrent reactivation of pulmonary TB."
      },
      {
        "q": "4. How does the treatment of Pulmonary Aspergilloma differ from that of Invasive Pulmonary Aspergillosis?",
        "a": "- Pulmonary Aspergilloma (this patient):\n  1. Systemic antifungals alone are generally ineffective due to poor intracavitary drug penetration.\n  2. Definitive treatment for symptomatic/recurrent hemoptysis: Surgical lobectomy (if medically fit).\n  3. For massive hemoptysis or inoperable patients: Bronchial artery embolization (BAE) +/- oral Itraconazole/Voriconazole if chronic progressive cavitary disease.\n- Contrast with Invasive Pulmonary Aspergillosis (IPA):\n  1. Medical emergency requiring immediate systemic antifungal therapy: IV Voriconazole (6 mg/kg q12h for 2 loading doses, then 4 mg/kg q12h; step down to oral 200 mg BID) — drug of choice.\n  2. Alternatives: Liposomal Amphotericin B (5 mg/kg/day IV) or Isavuconazole; Echinocandins (Caspofungin 70 mg load then 50 mg/day) for salvage therapy."
      }
    ]
  },
  {
    "id": 120,
    "title": "حالة 120: Leptospirosis with Acute Kidney Injury",
    "topic": "Leptospirosis with Acute Kidney Injury",
    "category": "Other Infections & Parasites",
    "scenario": "A 44-year-old farmer presents with headache, fever, and muscle aches. He initially thought he had a bad cold, but his symptoms have progressively worsened over the past week. During the review of systems, he reports nausea and decreased urine output. On examination, temperature is 38.2°C, pulse is 102/min, chest is clear, subconjunctival hemorrhages are noted, and there is no evidence of jaundice.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which clinical features in this case justify your choice?",
        "a": "Most likely diagnosis: Leptospirosis complicated by Acute Kidney Injury (severe anicteric/early icteric progression).\n- Justifying features in this case:\n  1. High-risk occupational exposure: Farmer (contact with freshwater, mud, or soil contaminated by rodent/livestock urine).\n  2. Classic initial flu-like prodrome: Fever (38.2°C), headache, and myalgia worsening over 1 week.\n  3. Hallmark ocular sign: Subconjunctival hemorrhages (often accompanies conjunctival suffusion without purulent discharge).\n  4. Renal involvement: Nausea and decreased urine output (acute kidney injury from tubulointerstitial nephritis).\n- Differential diagnosis: Hantavirus hemorrhagic fever with renal syndrome (HFRS), dengue fever, malaria, rickettsial infection, enteric fever, and bacterial sepsis."
      },
      {
        "q": "2. What is the causative organism, its primary reservoirs, and the mechanism of renal injury in leptospirosis?",
        "a": "- Causative organism: Pathogenic spirochetes of genus Leptospira (e.g., Leptospira interrogans) — thin, tightly coiled, obligate aerobic spirochetes with hooked ends and axial flagella; too thin to visualize on routine Gram stain (seen by dark-field microscopy or silver stain).\n- Reservoirs & transmission: Rodents/rats (main source; serovar Icterohaemorrhagiae), dogs (Canicola), cattle/pigs (Pomona) shed leptospires chronically in urine; humans are accidental hosts infected through cuts, abraded/water-softened skin, or mucous membranes.\n- Pathogenesis of renal injury: Leptospiremia causes endothelial vasculitis and direct tubulointerstitial nephritis -> AKI (classically non-oliguric with hypokalemia due to proximal tubular potassium wasting, though oliguric renal failure develops in severe/dehydrated cases)."
      },
      {
        "q": "3. Which diagnostic tests should be ordered based on the day of illness (~day 7), and what supportive lab findings are expected?",
        "a": "- Day-of-illness-directed confirmatory tests:\n  1. Days 1-7 (Leptospiremic phase): Blood PCR for Leptospira DNA (rapid, most sensitive early; blood culture on EMJH medium takes weeks).\n  2. After Day 5-7 (Immune phase): Serology — IgM ELISA (rapid screening) and Microscopic Agglutination Test (MAT — gold-standard reference test requiring ≥4-fold titer rise in paired acute/convalescent sera).\n  3. Week 2 onward: Urine PCR or culture (organisms clear from blood and are shed in urine for weeks).\n- Expected supportive laboratory clues: Elevated serum creatinine and urea, hypokalemia (or hyperkalemia if oliguric), neutrophilic leukocytosis, thrombocytopenia, elevated creatine kinase (CK from myositis), mildly elevated transaminases, and urinalysis showing proteinuria, hematuria, and casts."
      },
      {
        "q": "4. What is the immediate and definitive treatment for this patient?",
        "a": "- Crucial rule: Start antibiotics immediately upon clinical suspicion — NEVER wait for confirmatory PCR or MAT results.\n- Antibiotic therapy (Severe/hospitalized with AKI):\n  - Drug of choice: IV Penicillin G (1.5 million units IV every 6 hours) OR IV Ceftriaxone (1 g IV every 24 hours) for 5-7 days.\n  (For mild outpatient anicteric cases without organ dysfunction: Oral Doxycycline 100 mg BID for 7 days; avoid doxycycline in pregnancy/young children — use Azithromycin or Amoxicillin).\n- Supportive management: Careful IV fluid resuscitation, strict urine output & electrolyte monitoring, renal replacement therapy (hemodialysis) if uremia/refractory hyperkalemia/fluid overload develops.\n- Monitor after first antibiotic dose for Jarisch-Herxheimer reaction (abrupt fever spike, rigors, tachycardia, hypotension from sudden release of spirochetal endotoxins/lipoproteins)."
      },
      {
        "q": "5. What preventive measures and chemoprophylaxis should be advised for farmers and high-risk workers?",
        "a": "1. Personal protection: Wear waterproof boots, gloves, and protective clothing when working in wet soil/rice fields; cover cuts and abrasions; wash thoroughly after water/mud exposure.\n2. Environmental & animal control: Rodent control, proper waste/food storage, drainage improvements, and serovar-specific vaccination of livestock and dogs.\n3. Chemoprophylaxis for unavoidable short-term high-risk exposure (e.g., flood/agricultural outbreaks): Oral Doxycycline 200 mg once weekly, started 1-2 days before exposure and continued throughout exposure."
      }
    ]
  },
  {
    "id": 121,
    "title": "حالة 121: Severe Leptospirosis (Weil's Disease)",
    "topic": "Severe Leptospirosis (Weil's Disease)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 34-year-old sewage worker presents with a 3-day history of lower back pain, fever, myalgia, fatigue, jaundice, and subconjunctival hemorrhage. He has no past medical history and has not traveled abroad in the last 6 months. Laboratory investigations show Na+ 135 mmol/L, K+ 5.2 mmol/L, urea 10 mmol/L, and creatinine 180 μmol/L.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what is its classic clinical triad, and which case findings confirm your suspicion?",
        "a": "Most likely diagnosis: Severe Leptospirosis — Weil's Disease (Icteric Leptospirosis; occurs in 5-10% of symptomatic cases with 5-15% mortality).\n- Classic clinical triad of Weil's disease (all 3 present here):\n  1. Jaundice (hepatic dysfunction).\n  2. Acute Kidney Injury / Renal failure (urea 10 mmol/L, creatinine 180 μmol/L, K+ 5.2 mmol/L).\n  3. Hemorrhagic manifestations (subconjunctival hemorrhage).\n- Supporting epidemiological & clinical clues: High-risk sewage worker (rat-urine exposure), no foreign travel (argues against malaria/yellow fever), acute fever, prominent myalgia, and lower back pain."
      },
      {
        "q": "2. How do you distinguish Weil's disease jaundice from Acute Viral Hepatitis and other causes of fever with jaundice?",
        "a": "- Weil's Disease vs. Acute Viral Hepatitis:\n  1. Liver enzymes: Weil's disease causes marked conjugated hyperbilirubinemia with ONLY mildly/modestly elevated transaminases (AST/ALT usually <200-300 U/L), whereas acute viral hepatitis causes massive transaminitis (ALT/AST >1,000 U/L).\n  2. Associated features: Weil's disease features early AKI, elevated CK (severe calf/lumbar myalgia), neutrophilic leukocytosis, thrombocytopenia, and conjunctival suffusion/subconjunctival hemorrhage — all absent in uncomplicated viral hepatitis.\n- Other DD of fever with jaundice: Acute ascending cholangitis (Charcot triad + dilated CBD), severe P. falciparum malaria (travel history, blood film), yellow fever (travel history), typhoid hepatitis, and bacterial sepsis."
      },
      {
        "q": "3. Which confirmatory diagnostic test is most appropriate on day 3 of illness, and how does the diagnostic strategy change over time?",
        "a": "- On Day 3 (Leptospiremic phase): Blood PCR for Leptospira DNA is the test of choice (organisms circulate in blood during days 1-7; blood culture on EMJH medium is slow, taking weeks).\n- From Day 5-7 onward (Immune phase): Serology — IgM ELISA (rapid screen) and Microscopic Agglutination Test (MAT — gold-standard confirmatory reference test, confirmed by ≥4-fold titer rise in paired sera; a single day-3 sample is often falsely negative).\n- Week 2 onward: Urine PCR or culture (organisms persist in renal tubules and are shed in urine).\n- Additional workup: LFTs (bilirubin, AST/ALT, ALP), CBC (platelets, WBC), coagulation profile (PT/INR), CK, urinalysis, and chest X-ray (to screen for pulmonary hemorrhage)."
      },
      {
        "q": "4. What is the immediate treatment protocol for this hospitalized patient?",
        "a": "1. Start IV antibiotics immediately (do NOT delay for lab confirmation):\n   - IV Penicillin G 1.5 million units every 6 hours (drug of choice) OR IV Ceftriaxone 1 g IV every 24 hours (equally effective alternative) for 5-7 days.\n2. Supportive & organ-specific care:\n   - Hospital/HDU admission with strict fluid balance and serial renal/electrolyte monitoring (K+ is already 5.2 mmol/L -> monitor ECG, avoid nephrotoxins/K+-sparing agents, initiate hemodialysis early if progressive AKI/hyperkalemia).\n   - Coagulation/platelet support if active mucosal or pulmonary bleeding occurs.\n3. Close monitoring after the first antibiotic dose for a Jarisch-Herxheimer reaction (transient worsening of fever, rigors, and hypotension)."
      },
      {
        "q": "5. What fatal complications must you monitor for, and how can sewage workers prevent infection?",
        "a": "- Life-threatening complications: Severe Pulmonary Hemorrhage Syndrome (hemoptysis, rapidly progressive ARDS — carries the highest mortality), myocarditis and arrhythmias, DIC/severe thrombocytopenia, acute renal failure, and aseptic meningitis.\n- Occupational prevention: Mandatory waterproof boots, heavy-duty gloves, protective clothing, covering skin abrasions, strict post-shift washing, municipal rodent control, and Oral Doxycycline 200 mg once weekly for short-term high-risk exposure."
      }
    ]
  },
  {
    "id": 122,
    "title": "حالة 122: Leptospiral Aseptic Meningitis",
    "topic": "Leptospiral Aseptic Meningitis",
    "category": "Meningitis & CNS",
    "scenario": "A 37-year-old sewer worker presents to the Emergency Department with flu-like symptoms and pyrexia for the past 3 days. Since this morning, he has developed a headache and signs of meningism.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what urgent differential diagnoses must be ruled out, and which features justify your choice?",
        "a": "Most likely diagnosis: Leptospirosis complicated by Aseptic Meningitis.\n- Justifying features in this case:\n  1. Classic occupational exposure: Sewer worker (direct exposure to rat-urine-contaminated sewage).\n  2. Typical progression: 3-day flu-like febrile illness (leptospiremic phase) followed by acute headache and signs of meningism (CNS involvement, classically prominent as the immune phase begins).\n- Urgent differential diagnoses:\n  1. Acute bacterial meningitis (Streptococcus pneumoniae, Neisseria meningitidis — life-threatening emergency that MUST be excluded immediately!).\n  2. Viral aseptic meningitis (enteroviruses, HSV).\n  3. Tuberculous meningitis."
      },
      {
        "q": "2. What are the classical clinical signs of meningeal irritation, their underlying mechanism, and their diagnostic accuracy?",
        "a": "- Pathophysiological mechanism: Inflammation spreads from cranial to spinal leptomeninges (pia and arachnoid mater), irritating spinal nerve roots and causing protective reflex spasm of the muscles they supply.\n- Classical signs (per Hawari OSCE):\n  1. Nuchal rigidity: Stiffness/resistance on passive neck flexion with preserved lateral rotation (differentiate from functional neck stiffness by extending the head beyond the edge of the bed — functional necks drop with gravity).\n  2. Kernig's sign: Hip and knee flexed to 90° -> pain and hamstring resistance preventing passive knee extension beyond 135°.\n  3. Brudzinski's neck sign: Passive neck flexion triggers involuntary flexion of the hips and knees.\n- Accuracy pearl: Kernig's and Brudzinski's signs have LOW sensitivity (20-30% — absence does NOT exclude meningitis) but HIGH specificity (85-95% — positive sign strongly indicates meningeal irritation)."
      },
      {
        "q": "3. What investigations are required, what are the CT indications prior to Lumbar Puncture, and what CSF findings distinguish leptospiral from septic meningitis?",
        "a": "- Indications for Head CT BEFORE Lumbar Puncture (FAILS / Red flags for raised ICP): Focal neurological deficits, Altered mental status / ↓GCS, Immunocompromise, Papilledema, or new-onset Seizures.\n- CSF findings comparison:\n  - Leptospiral Aseptic Meningitis: Clear appearance, mild-to-moderate pleocytosis (typically lymphocytic, though neutrophils can predominate very early), normal or mildly elevated protein, and NORMAL glucose (CSF:blood ratio >0.5).\n  - Acute Bacterial (Septic) Meningitis: Turbid/cloudy CSF, high opening pressure, marked neutrophilic pleocytosis (>1,000/µL), high protein (>100 mg/dL), and LOW glucose (CSF:blood ratio <0.4).\n- Specific microbiological tests: Blood & CSF PCR for Leptospira (best early, days 1-7), paired Leptospira serology (IgM ELISA & MAT after day 5-7), plus CSF Gram stain, bacterial culture, and multiplex meningitis PCR + 2 sets of blood cultures to exclude bacterial meningitis; also check RFTs, LFTs, CBC, and CK."
      },
      {
        "q": "4. What is the immediate management protocol in the Emergency Department?",
        "a": "- Golden Hawari OSCE Rule: Empirical IV antibiotics must NEVER be delayed while waiting for CT imaging or Lumbar Puncture!\n- Immediate empiric therapy:\n  1. Start IV Ceftriaxone 2 g every 12 hours IMMEDIATELY — this single agent provides optimal CNS penetration covering BOTH acute bacterial meningitis AND severe leptospirosis simultaneously!\n  2. Add IV Vancomycin (15-20 mg/kg q8-12h) and IV Dexamethasone (10 mg before/with first antibiotic dose) until bacterial meningitis is excluded by CSF analysis/PCR.\n- Definitive therapy once leptospiral meningitis is confirmed: Narrow to IV Ceftriaxone (1-2 g daily) OR IV Penicillin G (1.5 million units IV q6h) for 5-7 days, plus supportive fluids, analgesia, and monitoring for Jarisch-Herxheimer reaction."
      },
      {
        "q": "5. What infection control precautions are needed initially and after confirmation, and how can future episodes be prevented?",
        "a": "- Infection Control (IPC):\n  - Initially, place the patient under Droplet Precautions (single room, surgical mask, gloves, gown) for the first 24 hours of effective antibiotics until Neisseria meningitidis is definitively ruled out.\n  - Once confirmed as Leptospirosis, Standard Precautions suffice (person-to-person transmission is extremely rare; handle urine with gloves as leptospires are shed in urine from week 2).\n- Occupational prevention: Waterproof boots/gloves, covering skin cuts, rodent control, and Oral Doxycycline 200 mg weekly prophylaxis during high-risk sewage work."
      }
    ]
  },
  {
    "id": 123,
    "title": "حالة 123: Anicteric Leptospirosis (Occupational Exposure)",
    "topic": "Anicteric Leptospirosis (Occupational Exposure)",
    "category": "Other Infections & Parasites",
    "scenario": "A 50-year-old sewage worker presents with a one-week history of fever and feeling generally unwell.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, and which clinical/laboratory features are consistent versus least consistent with leptospirosis?",
        "a": "Most likely diagnosis: Anicteric (Mild) Leptospirosis (accounts for ~90% of symptomatic leptospirosis cases).\n- Features strongly CONSISTENT with leptospirosis:\n  - Abrupt high fever, rigors, headache, and severe myalgia (especially calves and lower back).\n  - Conjunctival suffusion (red eyes WITHOUT purulent discharge) or subconjunctival hemorrhage.\n  - Biphasic course with aseptic meningitis, uveitis, thrombocytopenia, elevated CK, modest transaminitis, and non-oliguric AKI with hypokalemia.\n- Features LEAST consistent with leptospirosis:\n  - Purulent conjunctivitis with thick exudate (leptospirosis causes non-purulent suffusion).\n  - Massive transaminase elevation >1,000 U/L (suggests acute viral hepatitis or ischemic/toxic hepatitis).\n  - Person-to-person airborne/droplet outbreaks or chronic cavitary pulmonary infiltrates."
      },
      {
        "q": "2. How is leptospirosis transmitted, and which populations are at highest risk?",
        "a": "- Organism & reservoirs: Leptospira spirochetes colonize the renal tubules of asymptomatic carrier animals — primarily rats/rodents (serovar Icterohaemorrhagiae), dogs (Canicola), cattle, and pigs (Pomona) — and are shed in urine for months.\n- Transmission: Direct contact with infected animal urine/tissues or indirect contact with contaminated water/mud/sewage via cuts, abraded/water-softened skin, or mucous membranes (eyes, nose, mouth). Incubation: 5-14 days (range 2-30 days).\n- High-risk groups:\n  1. Occupational: Sewage workers, agricultural/rice farmers, abattoir workers, veterinarians, miners.\n  2. Recreational: Freshwater swimmers, kayakers, rafters.\n  3. Environmental: Communities exposed to heavy rainfall and urban flooding."
      },
      {
        "q": "3. Which diagnostic investigations are appropriate at 1 week of illness?",
        "a": "At Day 7 (transition from leptospiremic phase to immune phase):\n1. Blood PCR for Leptospira DNA (highest yield within days 1-7).\n2. Serology: IgM ELISA (becomes positive around days 5-7) and Microscopic Agglutination Test (MAT — reference standard; confirm with ≥4-fold rise in titer on paired sera taken 1-2 weeks apart).\n3. Urine PCR or culture (becomes positive from week 2 onward as organisms leave blood and persist in kidneys).\n4. Baseline organ-screen labs to rule out progression to Weil's disease: CBC (WBC, platelets), LFTs (bilirubin, AST/ALT), serum creatinine, urea, potassium, CK, and urinalysis."
      },
      {
        "q": "4. What is the first-line antibiotic treatment for mild versus severe leptospirosis?",
        "a": "- Always initiate antibiotics promptly based on clinical suspicion without waiting for lab confirmation:\n  1. Mild / Anicteric outpatient (no jaundice, AKI, meningitis, or bleeding): Oral Doxycycline 100 mg twice daily for 7 days (drug of choice in non-pregnant adults). Alternatives: Oral Azithromycin (500 mg daily × 3 days) or Amoxicillin (500 mg TID × 7 days — preferred in pregnancy and young children).\n  2. Severe / Hospitalized (Weil's disease, AKI, meningitis, or pulmonary hemorrhage): IV Penicillin G 1.5 million units q6h OR IV Ceftriaxone 1 g IV daily for 5-7 days.\n- Counsel/monitor for Jarisch-Herxheimer reaction following the first dose."
      },
      {
        "q": "5. What prevention and chemoprophylaxis strategies should be implemented for sewage workers?",
        "a": "1. Personal Protective Equipment (PPE): Waterproof boots, heavy-duty gloves, eye protection, and waterproof coveralls; cover all skin wounds before shifts and wash thoroughly afterward.\n2. Environmental control: Rodent control programs, improved drainage/sanitation, and safe waste management.\n3. Chemoprophylaxis: Oral Doxycycline 200 mg once weekly during unavoidable short-term high-risk exposure (started 1-2 days prior to exposure)."
      }
    ]
  },
  {
    "id": 124,
    "title": "حالة 124: Biphasic Leptospirosis (Weil's Disease After Freshwater Exposure)",
    "topic": "Biphasic Leptospirosis (Weil's Disease After Freshwater Exposure)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A 24-year-old female presents with a 2-day history of fever, headache, and jaundice. She reports swimming in lakes and rivers one month ago and recalls a flu-like illness that resolved spontaneously. On examination, temperature is 39°C, heart rate is 124/min, respiratory rate is 24/min, and there is conjunctival suffusion, jaundice, and generalized lymphadenopathy.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which exact clinical clues in this case support it?",
        "a": "Most likely diagnosis: Biphasic Severe Leptospirosis (Weil's Disease — Immune Phase).\n- Justifying features in this case:\n  1. Classic recreational exposure: Swimming in freshwater lakes and rivers 1 month ago (fits the 2-30 day incubation period).\n  2. Classic biphasic illness: Self-resolving initial flu-like illness (leptospiremic phase) followed by abrupt return of high fever (39°C), headache, and organ involvement (immune phase).\n  3. Hallmark clinical signs: Conjunctival suffusion (red eyes without discharge — highly specific for leptospirosis), jaundice, and generalized lymphadenopathy.\n- Differential diagnosis: Acute viral hepatitis (HAV/HBV/HEV), infectious mononucleosis (EBV/CMV), yellow fever, dengue fever, malaria, enteric fever, and bacterial sepsis."
      },
      {
        "q": "2. Explain the biphasic natural history of leptospirosis and the bedside sepsis assessment required for this patient.",
        "a": "- Biphasic Natural History:\n  1. Leptospiremic (Septicemic) Phase (4-7 days): Abrupt fever, myalgia, headache, conjunctival suffusion; organisms circulate in blood and CSF; followed by a brief 1-2 day afebrile remission.\n  2. Immune Phase (from ~days 6-10 onward): Circulating antibodies clear leptospires from blood (organisms persist in kidneys/urine); fever recurs with immune-mediated complications — aseptic meningitis, uveitis, and severe Weil's disease (jaundice, AKI, hemorrhage).\n- Immediate Bedside Sepsis Assessment (Hawari OSCE Scores):\n  - She already has Temp 39°C, tachycardia (HR 124/min), and tachypnea (RR 24/min -> 1 point on qSOFA [RR ≥22/min]).\n  - Immediately measure Blood Pressure (SBP ≤100 mmHg = 1 pt) and Glasgow Coma Scale (GCS <15 = 1 pt): qSOFA ≥2 flags high risk of sepsis/mortality -> calculate full SOFA score (bilirubin, platelets, creatinine, PaO2/FiO2, BP, GCS) and escalate urgently."
      },
      {
        "q": "3. Which confirmatory tests and organ-function labs are indicated in this immune phase?",
        "a": "- Confirmatory tests for the immune phase (late presentation):\n  1. Serology: Leptospira IgM ELISA (rapid screen) and Microscopic Agglutination Test (MAT — gold-standard reference test; paired sera showing ≥4-fold rise confirm diagnosis).\n  2. Urine PCR / culture (organisms are shed in urine from week 2 onward, even after blood PCR turns negative).\n- Essential organ & exclusion workup:\n  - LFTs (expect high direct bilirubin with only modest AST/ALT rise), serum creatinine/urea/K+ (screen for AKI & hypokalemia), CBC (neutrophilic leukocytosis, thrombocytopenia), CK, PT/INR, urinalysis, and chest X-ray.\n  - Perform a urine/serum β-hCG pregnancy test (mandatory in a 24-year-old female before selecting antibiotics!).\n  - Viral hepatitis panel (IgM anti-HAV, HBsAg, IgM anti-HBc) and EBV/CMV serology if needed."
      },
      {
        "q": "4. What is the immediate and definitive treatment for this patient, including pregnancy considerations?",
        "a": "1. Urgent hospital admission and immediate IV antibiotics (do NOT wait for MAT/PCR results):\n   - IV Penicillin G 1.5 million units every 6 hours (drug of choice) OR IV Ceftriaxone 1 g IV every 24 hours for 5-7 days.\n   - Pregnancy pearl: Both Penicillin G and Ceftriaxone are SAFE in pregnancy (whereas Doxycycline is contraindicated in pregnancy!).\n2. Aggressive supportive management: IV crystalloid resuscitation, continuous vital sign and urine output monitoring, electrolyte correction, and ICU readiness if hypotension, respiratory distress, or oliguric AKI develops.\n3. Watch closely for Jarisch-Herxheimer reaction (fever spike, rigors, hypotension) after the first antibiotic dose."
      },
      {
        "q": "5. What severe complications should be anticipated, and what preventive advice should be given for freshwater recreation?",
        "a": "- Complications to monitor: Acute kidney injury (may require dialysis), severe pulmonary hemorrhage syndrome/ARDS, aseptic meningitis (given her headache — evaluate for neck stiffness/Kernig's/Brudzinski's signs), anterior uveitis (late immune sequela), myocarditis, and hemorrhagic diathesis.\n- Prevention: Avoid swimming or wading in stagnant/flood-contaminated lakes and rivers (especially with open cuts or abrasions), wear protective footwear, shower promptly after freshwater exposure, and consider Oral Doxycycline 200 mg weekly for unavoidable high-risk water sports in endemic areas."
      }
    ]
  },
  {
    "id": 125,
    "title": "حالة 125: H. pylori-Associated Low-Grade Gastric MALT Lymphoma",
    "topic": "H. pylori-Associated Low-Grade Gastric MALT Lymphoma",
    "category": "Other Infections & Parasites",
    "scenario": "A 50-year-old patient presents with dyspepsia. Gastric biopsy confirms active H. pylori infection and reveals low-grade gastric Mucosa-Associated Lymphoid Tissue (MALT) lymphoma.",
    "questions": [
      {
        "q": "1. What is the diagnosis, and what is the pathophysiological mechanism linking Helicobacter pylori to gastric MALT lymphoma?",
        "a": "Diagnosis: H. pylori-associated Low-Grade Extranodal Marginal Zone B-Cell Lymphoma of Gastric Mucosa-Associated Lymphoid Tissue (Gastric MALT Lymphoma).\n- Pathophysiology:\n  1. Normal gastric mucosa contains NO native lymphoid tissue.\n  2. Chronic Helicobacter pylori gastritis triggers persistent antigenic stimulation and recruitment of H. pylori-specific CD4+ T cells, inducing acquired lymphoid follicles (MALT).\n  3. Prolonged T-cell-driven B-cell proliferation leads to clonal expansion and low-grade MALT lymphoma.\n  4. Crucially, early low-grade MALT lymphoma remains antigen-dependent — eliminating H. pylori removes the proliferative stimulus and causes complete tumor regression."
      },
      {
        "q": "2. What diagnostic staging and molecular tests are required before finalizing the treatment plan?",
        "a": "1. Histopathology & Immunohistochemistry (IHC): Confirm low-grade marginal zone B-cell lymphoma (CD20+, CD79a+, CD5-, CD10-, lymphoepithelial lesions) and exclude transformation to high-grade Diffuse Large B-Cell Lymphoma (DLBCL).\n2. Staging workup (Lugano / Ann Arbor classification):\n   - Endoscopic Ultrasound (EUS): Gold standard to assess depth of gastric wall invasion and perigastric lymph node involvement.\n   - Contrast CT Chest, Abdomen, and Pelvis (plus CBC, LDH, LFTs, HBV/HCV/HIV serology).\n3. Cytogenetic / Molecular testing (FISH): Screen for the t(11;18)(q21;q21) (BIRC3-MALT1) chromosomal translocation, which renders the lymphoma antigen-independent and predicts poor response to H. pylori eradication alone."
      },
      {
        "q": "3. What is the recommended first-line treatment for early-stage H. pylori-positive low-grade gastric MALT lymphoma, and what exact eradication regimens are used?",
        "a": "- First-line therapy: Helicobacter pylori eradication therapy ALONE (NOT chemotherapy, radiotherapy, or gastrectomy!) — induces complete histological remission in 70-80% of localized (Stage IE) H. pylori-positive cases.\n- Standard 14-day Eradication Regimens:\n  1. Bismuth Quadruple Therapy (preferred first-line in areas with high clarithromycin resistance ≥15%, including Egypt): PPI (e.g., Omeprazole 20 mg or Esomeprazole 40 mg BID) + Bismuth subsalicylate (QID) + Tetracycline (500 mg QID) + Metronidazole (500 mg TID) for 14 days.\n  2. Clarithromycin Triple Therapy (ONLY where local clarithromycin resistance <15% and no prior macrolide exposure): PPI BID + Clarithromycin 500 mg BID + Amoxicillin 1 g BID for 14 days."
      },
      {
        "q": "4. How should eradication and lymphoma remission be monitored, and what is the management if the lymphoma fails to regress?",
        "a": "- Post-treatment Confirmation of H. pylori Eradication:\n  - Perform a Urea Breath Test (UBT) or Stool Antigen Test at least 4 weeks after completing antibiotics AND at least 2 weeks after stopping PPIs (to prevent false negatives). If H. pylori persists, administer second-line salvage eradication therapy.\n- Endoscopic Surveillance for Tumor Remission:\n  - Repeat upper GI endoscopy with multiple gastric mapping biopsies every 3-6 months until complete histological remission (complete regression is gradual and may take 6-12+ months).\n- Management of Refractory / Relapsed / t(11;18)-positive Disease:\n  - Localized persistent lymphoma: Involved-Site Radiotherapy (ISRT — highly curative, >90% response).\n  - Advanced/disseminated disease or contraindication to radiation: Systemic immunotherapy with Rituximab (anti-CD20 monoclonal antibody) +/- chemotherapy."
      }
    ]
  },
  {
    "id": 126,
    "title": "حالة 126: Adult-Onset Still's Disease (AOSD)",
    "topic": "Adult-Onset Still's Disease (AOSD)",
    "category": "Fever of Unknown Origin (FUO)",
    "scenario": "A 45-year-old man presents with fever of unknown origin (FUO). ESR is high, serum ferritin is markedly elevated, ANA is negative, and a rash appears during fever spikes.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, which etiological category of FUO does it belong to, and which features in this case justify your choice?",
        "a": "Most likely diagnosis: Adult-Onset Still's Disease (AOSD) — a systemic autoinflammatory disorder.\n- FUO Category: Non-Infectious Inflammatory / Autoimmune Diseases (~15-20% of Classic FUO).\n- Justifying features in this case:\n  1. Fever of Unknown Origin (classically quotidian high spiking fever ≥39°C once or twice daily).\n  2. Characteristic evanescent, salmon-pink maculopapular rash appearing transiently during fever spikes (often on trunk/proximal limbs, Koebner phenomenon).\n  3. Markedly elevated inflammatory markers (high ESR) with extremely elevated serum ferritin (often >1,000-5,000 ng/mL, with low glycosylated ferritin fraction <20%).\n  4. Negative ANA (and negative Rheumatoid Factor — distinguishing it from SLE and classic RA)."
      },
      {
        "q": "2. What is the formal definition of Classic FUO, its four major categories, and its five etiological groups?",
        "a": "- Definition of Classic FUO (Petersdorf & Beeson):\n  1. Temperature >38.3°C (101°F) on multiple occasions.\n  2. Duration >3 weeks.\n  3. Failure to establish a diagnosis after 1 week of inpatient investigation (or 3 outpatient visits).\n- Four major categories of FUO:\n  1. Classic FUO (community-acquired, >3 weeks).\n  2. Nosocomial FUO (hospitalized >24h, fever developing after 3 days of negative workup).\n  3. Neutropenic FUO (neutrophils <500/µL, fever persisting >3 days despite antibiotics).\n  4. HIV-associated FUO (HIV-positive, fever >4 weeks outpatient or >3 days inpatient).\n- Five classical etiological groups: Infections (most common, ~30% — TB, occult abscess, infective endocarditis, brucellosis), Malignancies (~20% — lymphoma, leukemia, RCC), Non-infectious inflammatory/autoimmune (~15% — AOSD, SLE, GCA), Miscellaneous (drug fever, PE, FMF), and Undiagnosed."
      },
      {
        "q": "3. What diagnostic criteria are used for AOSD, and what mandatory exclusions must be completed before diagnosing it?",
        "a": "- Core OSCE rule: AOSD is a DIAGNOSIS OF EXCLUSION!\n- Yamaguchi Classification Criteria (requires ≥5 criteria, including ≥2 Major, AND exclusion of infection/malignancy/other rheumatic disease):\n  - Major criteria: (1) Fever ≥39°C lasting ≥1 week; (2) Arthralgia/arthritis ≥2 weeks; (3) Typical evanescent salmon-pink rash during fever spikes; (4) Leukocytosis ≥10,000/µL with ≥80% granulocytes.\n  - Minor criteria: Sore throat, lymphadenopathy and/or splenomegaly, abnormal LFTs, negative ANA and RF.\n- Mandatory FUO exclusion workup before starting steroids:\n  - Multiple blood cultures (rule out infective endocarditis), TB workup (IGRA/TST, chest CT), Brucella/HIV/EBV/CMV serologies, peripheral lymph node & splenic exam, contrast CT chest/abdomen/pelvis or 18F-FDG PET-CT, and bone marrow/lymph node biopsy if hematologic malignancy (lymphoma) is suspected."
      },
      {
        "q": "4. What is the stepwise medical management of Adult-Onset Still's Disease?",
        "a": "1. Mild disease (predominantly arthralgia/mild fever): High-dose NSAIDs (e.g., Indomethacin or Naproxen — though most patients require escalation).\n2. Moderate-to-severe systemic disease (high fever, serositis, visceral involvement): Systemic Corticosteroids (Oral Prednisone 0.5-1 mg/kg/day; IV pulse Methylprednisolone for severe organ involvement) — ONLY after excluding occult infections and lymphoma!\n3. Steroid-sparing / Chronic articular or refractory disease:\n   - Conventional DMARD: Methotrexate (especially for chronic arthritis).\n   - Targeted Biologics: IL-1 antagonists (Anakinra, Canakinumab) or IL-6 receptor antagonist (Tocilizumab) — highly effective for steroid-refractory systemic AOSD."
      },
      {
        "q": "5. What is the most feared life-threatening complication of AOSD, and what are its red-flag laboratory clues?",
        "a": "- Most fatal complication: Macrophage Activation Syndrome (MAS) — a secondary form of Hemophagocytic Lymphohistiocytosis (HLH) driven by an uncontrolled cytokine storm.\n- Red-flag clinical & lab signs of MAS:\n  - Persistent unremitting high fever (loses quotidian pattern), hepatosplenomegaly, CNS dysfunction, and multiorgan failure.\n  - Sudden PANCYTOPENIA (dropping WBC, Hb, platelets).\n  - Paradoxically FALLING ESR (despite worsening clinical state, caused by hypofibrinogenemia/DIC).\n  - Extreme hyperferritinemia (often >10,000 ng/mL), hypertriglyceridemia, elevated LDH/LFTs, and hemophagocytosis on bone marrow biopsy.\n- Emergency management: High-dose IV pulse Methylprednisolone + IL-1 blockade (Anakinra) and/or Cyclosporine in ICU."
      }
    ]
  },
  {
    "id": 127,
    "title": "حالة 127: Lassa Fever (Viral Hemorrhagic Fever)",
    "topic": "Lassa Fever (Viral Hemorrhagic Fever)",
    "category": "Other Infections & Parasites",
    "scenario": "A 38-year-old female farmer from a rural village in West Africa presents with high fever, fatigue, severe joint and muscle pain, persistent nausea and vomiting, disorientation, and slurred speech. Examination reveals hypotension, widespread petechiae and ecchymosis, active bleeding from the gums, congested conjunctiva, and hepatomegaly. Laboratory investigations show decreased platelet and WBC counts with elevated liver enzymes.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, what key differential diagnoses must be considered, and which clinical/laboratory findings justify your choice?",
        "a": "Most likely diagnosis: Severe Lassa Fever (a West African Viral Hemorrhagic Fever [VHF]).\n- Justifying features in this case:\n  1. Epidemiological hallmark: Rural farmer from West Africa (endemic in Nigeria, Sierra Leone, Guinea, Liberia).\n  2. Systemic febrile & neurological toxicity: High fever, severe myalgia/arthralgia, persistent vomiting, disorientation, and slurred speech.\n  3. Hemorrhagic & vascular leak syndrome: Hypotension/shock, widespread petechiae and ecchymosis, active gingival bleeding, congested conjunctiva, and hepatomegaly.\n  4. Classic VHF lab triad: Leukopenia, thrombocytopenia, and elevated liver enzymes (transaminitis, typically AST > ALT).\n- Critical differential diagnoses: Severe Plasmodium falciparum malaria (MUST test in parallel!), Ebola/Marburg virus disease, Yellow fever, Crimean-Congo Hemorrhagic Fever (CCHF), meningococcemia, typhoid fever, and Weil's disease (leptospirosis)."
      },
      {
        "q": "2. What is the causative virus, its animal reservoir, and its primary modes of transmission?",
        "a": "- Causative virus: Lassa virus (LASV) — lipid-enveloped, single-stranded RNA virus belonging to family Arenaviridae (genus Mammarenavirus); classified as a Biosafety Level 4 (BSL-4) select agent.\n- Primary natural reservoir: Multimammate rat (Mastomys natalensis), which is enzootic across West Africa and sheds virus chronically in its urine and feces without appearing ill.\n- Modes of transmission:\n  1. Rodent-to-human (most common): Inhalation of aerosolized rodent excreta/dust, ingestion of food or water contaminated by rodent urine/droppings, or hunting/preparing rodents for consumption.\n  2. Human-to-human (nosocomial outbreaks): Direct contact with infected blood, urine, saliva, vomit, or other body fluids (especially in healthcare settings without strict PPE)."
      },
      {
        "q": "3. What confirmatory diagnostic investigations are required, and what mandatory parallel test must never be missed?",
        "a": "1. Reference confirmatory test: Real-time Reverse-Transcription PCR (qRT-PCR) on EDTA blood (detects viral RNA during viremia; repeat if collected within the first 72 hours of symptom onset). Handle all specimens under strict biosafe lab protocols.\n2. Mandatory parallel test: Malaria thick/thin blood film and Rapid Diagnostic Test (RDT) — malaria is clinically indistinguishable from VHF in West Africa and is immediately fatal if untreated!\n3. Supportive & secondary tests: CBC, coagulation profile (PT/aPTT/fibrinogen/D-dimer for DIC), LFTs, renal function/electrolytes, and blood cultures (to exclude Gram-negative sepsis/typhoid). Note: Acute IgM ELISA has poor early sensitivity due to APC/immune impairment; routine viral culture is avoided outside BSL-4 facilities."
      },
      {
        "q": "4. What is the immediate clinical and IPC management pathway for a suspected Lassa fever patient?",
        "a": "Follow the 6-step VHF Emergency Pathway:\n1. ISOLATE IMMEDIATELY: Single isolation room with restricted access and full PPE (gloves, fluid-resistant gown, mask/respirator, goggles/face shield) BEFORE any physical contact.\n2. NOTIFY AT ONCE: Alert hospital Infection Prevention & Control (IPC) and public health authorities immediately (notifiable under International Health Regulations [IHR]).\n3. SUPPORTIVE ICU CARE (Cornerstone of survival): Careful IV fluid and electrolyte resuscitation, hemodynamic/vasopressor support for hypotension, blood/platelet transfusion for active hemorrhage, renal/respiratory support, and empiric cover for malaria and bacterial sepsis until excluded.\n4. SPECIFIC ANTIVIRAL THERAPY: IV Ribavirin given as early as possible (classically most effective within the first 6 days of illness; note per Al-Azhar VHF update that clinical evidence for ribavirin is weak and favipiravir is under evaluation; no licensed Lassa vaccine is currently available)."
      },
      {
        "q": "5. What characteristic long-term sequela occurs in Lassa fever survivors, and what environmental IPC and contact-tracing measures are required?",
        "a": "- Hallmark survivor sequela: Sensorineural deafness — occurs in up to one-third (~30%) of Lassa fever survivors (can develop during recovery even after mild cases and is often permanent).\n- High-risk population pearl: Lassa fever carries an exceptionally high maternal and fetal mortality rate (>80% fetal loss) during the third trimester of pregnancy.\n- IPC & Outbreak Control:\n  - Patient must use a chemical toilet; disinfect contaminated surfaces and instruments with 0.5% sodium hypochlorite (1:10 household bleach dilution).\n  - Safe clinical waste disposal and safe dignified burial practices.\n  - Trace and monitor all exposed contacts daily for 21 days (maximum incubation period)."
      }
    ]
  },
  {
    "id": 128,
    "title": "حالة 128: Dengue Fever (Breakbone Fever)",
    "topic": "Dengue Fever (Breakbone Fever)",
    "category": "Malaria & Vector-Borne",
    "scenario": "A patient presents with high fever, severe headache, and retro-orbital pain suggestive of dengue fever.",
    "questions": [
      {
        "q": "1. What is the causative agent, mosquito vector, and why does secondary dengue infection carry a higher risk of severe disease?",
        "a": "- Causative agent: Dengue virus (DENV) — enveloped single-stranded RNA Orthoflavivirus (family Flaviviridae) with 4 distinct serotypes (DEN-1, DEN-2, DEN-3, DEN-4).\n- Vector: Day-biting Aedes aegypti (primary) and Aedes albopictus mosquitoes (incubation period: 3-14 days).\n- Clinical nickname: 'Breakbone fever' due to severe myalgia, arthralgia, bone pain, headache, and retro-orbital pain (often accompanied by saddle-back biphasic fever and maculopapular/petechial rash).\n- Immunopathogenesis of Severe Dengue: Infection with one serotype confers lifelong immunity to THAT serotype only (no lasting cross-immunity). Subsequent infection with a DIFFERENT serotype triggers Antibody-Dependent Enhancement (ADE) — non-neutralizing cross-reactive antibodies facilitate viral entry into macrophages/monocytes via Fc receptors -> massive viral load, cytokine storm, and severe capillary plasma leakage."
      },
      {
        "q": "2. How does the WHO 2009 guideline classify Dengue, and what are the critical Warning Signs predicting progression to Severe Dengue?",
        "a": "- WHO 2009 Classification:\n  1. Dengue without warning signs: Fever + ≥2 of nausea/vomiting, rash, aches/pains, positive tourniquet test, leukopenia.\n  2. Dengue with warning signs (requires inpatient admission & close fluid monitoring).\n  3. Severe Dengue: Severe plasma leakage (Dengue Shock Syndrome with narrow pulse pressure <20 mmHg or fluid accumulation + respiratory distress), severe bleeding, or severe organ involvement (AST/ALT ≥1,000 U/L, impaired consciousness, myocarditis).\n- The 7 WHO Warning Signs (typically appear during the critical phase around defervescence, days 3-7):\n  1. Abdominal pain or tenderness.\n  2. Persistent vomiting.\n  3. Clinical fluid accumulation (ascites, pleural effusion).\n  4. Mucosal bleeding (gums, epistaxis, GI bleed).\n  5. Lethargy or restlessness.\n  6. Liver enlargement >2 cm.\n  7. Laboratory clue: Rising hematocrit (hemoconcentration from plasma leak) concurrent with rapidly falling platelet count."
      },
      {
        "q": "3. Which confirmatory diagnostic investigations and bedside monitoring tests are appropriate by day of illness?",
        "a": "- Day-of-illness confirmatory tests:\n  1. Days 1-5 (Febrile/Viremic phase): Dengue NS1 Antigen rapid test/ELISA OR RT-PCR (most accurate early).\n  2. After Day 5: Dengue IgM/IgG ELISA (note possible cross-reactivity with other flaviviruses such as Yellow Fever/Zika).\n- Essential clinical & laboratory monitoring:\n  - Serial CBC (daily or q6-12h during critical phase): look for leukopenia, thrombocytopenia (<100,000/µL), and rising hematocrit (>20% rise = plasma leakage).\n  - LFTs (AST/ALT), coagulation profile if bleeding, and Tourniquet Test (inflate BP cuff midway between SBP and DBP for 5 min -> ≥10-20 petechiae per square inch indicates capillary fragility).\n  - Always rule out malaria in travelers returning from malaria-endemic areas."
      },
      {
        "q": "4. What is the cornerstone of management for Dengue Fever, and which commonly used antipyretics are STRICTLY CONTRAINDICATED?",
        "a": "- No specific licensed antiviral therapy exists -> management is strictly supportive and fluid-guided:\n  1. Dengue without warning signs: Outpatient management with generous oral fluids (ORS/water), rest, daily CBC monitoring, and strict instructions on warning signs.\n  2. Dengue with warning signs or Severe Dengue / DSS: Immediate hospital/ICU admission with carefully titrated IV isotonic crystalloids (0.9% saline or Lactated Ringer's) guided by serial hematocrit, urine output, and pulse pressure (avoid over-hydration during the recovery phase to prevent pulmonary edema).\n  3. Fever/pain control: Paracetamol (Acetaminophen) ONLY.\n- STRICTLY CONTRAINDICATED DRUGS: Aspirin and all NSAIDs (Ibuprofen, Diclofenac, Ketorolac) — they impair platelet aggregation, markedly increase fatal GI/mucosal hemorrhage, and risk Reye syndrome in children. Avoid IM injections."
      },
      {
        "q": "5. What preventive measures and vaccines are currently available for Dengue?",
        "a": "- Vector control: Eliminate stagnant freshwater breeding sites (containers/tires), use DEET/picaridin insect repellents (especially daytime), wear long sleeves, and install window screens.\n- Licensed Dengue Vaccines (per Al-Azhar VHF lecture):\n  1. TAK-003 (Qdenga): Live-attenuated tetravalent vaccine (2 subcutaneous doses, 3 months apart); WHO-prequalified (2024) for age ≥4 years and can be given REGARDLESS of prior dengue infection.\n  2. Dengvaxia (CYD-TDV): Live-attenuated (3 doses, 6 months apart); restricted ONLY to individuals with laboratory-confirmed prior dengue infection because vaccinating seronegative individuals increases severe dengue risk via ADE."
      }
    ]
  },
  {
    "id": 129,
    "title": "حالة 129: Giardiasis in Selective IgA Deficiency",
    "topic": "Giardiasis in Selective IgA Deficiency",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 25-year-old woman is evaluated for chronic intermittent non-bloody diarrhea with abdominal cramps and bloating. She has a history of selective IgA deficiency and no history of antibiotics taken in the last 6 months.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and why does selective IgA deficiency strongly predispose to this infection?",
        "a": "Most likely diagnosis: Chronic Giardiasis (Giardia lamblia / Giardia intestinalis).\n- Justifying features in this case:\n  1. Classic clinical presentation: Chronic intermittent non-bloody diarrhea (often foul-smelling, greasy/floating steatorrhea) with abdominal cramps and prominent bloating/flatulence.\n  2. Key host risk factor: Selective IgA deficiency — secretory IgA (sIgA) is the primary mucosal defense preventing Giardia trophozoites from adhering to duodenal/jejunal enterocytes; IgA deficiency leads to persistent, severe, or relapsing giardiasis.\n  3. Absence of antibiotic exposure in the past 6 months makes Clostridioides difficile unlikely.\n- Differential diagnosis: Celiac disease (also associated with selective IgA deficiency — note anti-tTG IgA will be falsely negative; test IgG-based serology!), Cryptosporidium, tropical sprue, small intestinal bacterial overgrowth (SIBO), and IBS."
      },
      {
        "q": "2. What is the parasite's habitat, infective stage, diagnostic morphology, and mechanism of malabsorption?",
        "a": "- Organism & habitat: Flagellated protozoan Giardia lamblia inhabiting the duodenum, upper jejunum, and occasionally bile ducts.\n- Transmission & stages:\n  - Infective & Diagnostic stage: Oval quadrinucleate Cyst (4 nuclei at one pole, axostyles) ingested via contaminated water/food or fecal-oral autoinfection.\n  - Pathogenic stage: Pear-shaped Trophozoite (15×8 µm) with 2 nuclei ('owl-eye' appearance), 2 ventral sucking discs, 2 axostyles, and 4 pairs of flagella.\n- Pathophysiology: Trophozoites attach tightly to the duodenal brush border without invading submucosa (hence NO fever and NO gross blood), causing mechanical mucosal irritation, villous blunting, brush-border disaccharidase (lactase) deficiency, and fat malabsorption (steatorrhea)."
      },
      {
        "q": "3. Which confirmatory diagnostic investigations should be ordered?",
        "a": "1. Stool Giardia Antigen Detection (ELISA or Direct Fluorescent Antibody [DFA]): Most sensitive and specific routine non-invasive diagnostic test (>90-95% sensitivity).\n2. Multiplex Stool NAAT / PCR Panel: Highly sensitive molecular detection of Giardia DNA alongside other enteric protozoa.\n3. Direct Stool Microscopy (Ova & Parasites — collect 3 separate samples on alternate days due to intermittent cyst shedding): Detects motile trophozoites in fresh liquid diarrheic stool and cysts in formed stool.\n4. String Test (Entero-test) or Duodenal aspirate/biopsy (if upper endoscopy is performed to concurrently evaluate for celiac disease in selective IgA deficiency).\n(Note: Serum antibody testing is of little clinical value)."
      },
      {
        "q": "4. What is the first-line antiparasitic treatment regimen, and what special considerations apply to pregnancy and refractory cases?",
        "a": "- First-line oral regimens:\n  1. Tinidazole 2 g PO as a single dose (preferred — >90% cure rate, best adherence).\n  2. Metronidazole 250-500 mg PO three times daily for 5-7 days.\n  3. Nitazoxanide 500 mg PO twice daily for 3 days.\n  (Alternative: Albendazole 400 mg PO once daily for 5 days).\n- Essential patient counseling: Strictly avoid alcohol during and for 48-72 hours after Metronidazole/Tinidazole (disulfiram-like reaction).\n- Special populations:\n  - Pregnancy (1st trimester): Paromomycin (non-absorbable aminoglycoside, 25-35 mg/kg/day divided TID for 7 days) is preferred to avoid systemic nitroimidazole exposure.\n  - Refractory/relapsing infection (common in IgA deficiency): Repeat course with a different drug class or combination therapy (e.g., Tinidazole + Albendazole or Nitazoxanide)."
      },
      {
        "q": "5. What complications should be anticipated, and why does routine tap water chlorination not always prevent Giardiasis?",
        "a": "- Complications: Secondary lactose intolerance (persisting for weeks after parasite eradication due to brush-border lactase loss -> advise temporary lactose-free diet), fat-soluble vitamin deficiencies (A, D, E, K), hypoproteinemia, weight loss, and biliary colic.\n- Prevention pearl: Giardia cysts are relatively resistant to routine chlorine disinfection of drinking water! Effective prevention requires boiling water (≥1 minute), fine micro-filtration (<1 µm), strict handwashing with soap and water, and sanitary sewage disposal."
      }
    ]
  },
  {
    "id": 130,
    "title": "حالة 130: Traveler's Diarrhea (Enterotoxigenic E. coli - ETEC)",
    "topic": "Traveler's Diarrhea (Enterotoxigenic E. coli - ETEC)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 24-year-old patient presents to the Emergency Department with watery diarrhea. He returned from holiday in Tanzania yesterday.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, most common causative organism, and critical differential diagnoses in a traveler returning from Tanzania?",
        "a": "Most likely diagnosis: Acute Traveler's Diarrhea.\n- Most common causative organism: Enterotoxigenic Escherichia coli (ETEC) — accounts for 30-60% of acute watery traveler's diarrhea worldwide.\n- Differential diagnosis:\n  1. Other bacterial causes: Enteroaggregative E. coli (EAEC), Campylobacter jejuni, Salmonella, Shigella, Vibrio cholerae.\n  2. Viral causes: Norovirus, Rotavirus.\n  3. Parasitic causes: Giardia lamblia, Cryptosporidium (more likely if diarrhea persists >7-14 days).\n  4. CRITICAL TROPICAL EXCLUSION: Always ask about fever and perform a Malaria blood film/RDT if febrile — Plasmodium falciparum malaria in travelers returning from Tanzania can initially mimic acute gastroenteritis!"
      },
      {
        "q": "2. What is the pathophysiological mechanism of ETEC-induced watery diarrhea?",
        "a": "- Non-invasive Secretory Small-Bowel Diarrhea:\n  1. ETEC adheres to small-intestinal enterocytes via colonization factor antigens (fimbriae) without invading the mucosa.\n  2. It secretes two plasmid-encoded enterotoxins:\n     - Heat-Labile Toxin (LT): Activates adenylate cyclase -> increases intracellular cAMP (identical mechanism to cholera toxin).\n     - Heat-Stable Toxin (ST): Activates guanylate cyclase -> increases intracellular cGMP.\n  3. Elevated cAMP/cGMP triggers active Cl⁻ secretion into the intestinal lumen and inhibits Na⁺/water absorption -> profuse, large-volume watery stool with NO gross blood and <5 fecal leukocytes/HPF."
      },
      {
        "q": "3. What bedside clinical assessment comes first, and when are stool microbiological investigations indicated?",
        "a": "- Step 1 (Priority): Assess hemodynamic stability and dehydration severity — vitals (HR, BP, RR, temp), mental status, mucous membranes, skin turgor, capillary refill, and urine output, plus abdominal exam to exclude focal tenderness/guarding/peritonism.\n- Indications for Stool Testing (IDSA & Al-Azhar guidelines):\n  - Routine stool cultures/tests are NOT needed for mild, short-lived, uncomplicated watery diarrhea in a healthy adult.\n  - Perform stool testing (multiplex NAAT/PCR, stool culture, O&P) ONLY if: fever, bloody/mucoid stool (dysentery), severe abdominal pain/sepsis, immunocompromised host, suspected outbreak, or symptoms persisting >7-14 days."
      },
      {
        "q": "4. What is the immediate and definitive management protocol?",
        "a": "1. Rehydration (Cornerstone of therapy):\n   - Mild-to-moderate dehydration: Reduced-osmolarity WHO Oral Rehydration Solution (ORS) — exploits intact small-bowel Na⁺-glucose cotransport to restore water and electrolytes (avoid sugary sodas/juices).\n   - Severe dehydration, shock, or intractable vomiting: Urgent IV isotonic crystalloid (0.9% Normal Saline or Lactated Ringer's), transitioning to ORS once stable.\n2. Symptomatic relief: Loperamide may be used in immunocompetent adults with uncomplicated afebrile watery diarrhea once hydrated (STRICTLY avoid if fever, bloody stools, or suspected STEC/C. difficile).\n3. Targeted Antibiotic Therapy (reserved for moderate-to-severe/incapacitating traveler's diarrhea):\n   - Oral Azithromycin 1 g single dose (or 500 mg daily × 3 days) — preferred empiric agent covering ETEC and fluoroquinolone-resistant Campylobacter.\n   - Alternatives: Rifaximin (200 mg TID × 3 days — effective ONLY for non-invasive ETEC) or Ciprofloxacin (500 mg BID × 1-3 days where resistance is low)."
      },
      {
        "q": "5. What red-flag return precautions and preventive advice should be given to travelers?",
        "a": "- Red flags requiring urgent hospital return: High fever (especially after East Africa travel -> rule out malaria/typhoid), visible blood or mucus in stools, worsening severe abdominal pain, persistent vomiting preventing oral intake, oliguria, dizziness, or confusion.\n- Travel prevention: Follow 'Boil it, cook it, peel it, or forget it' — drink sealed bottled/boiled water, avoid ice cubes, unpeeled fruits, raw salads, and street food held at ambient temperatures, and practice frequent hand hygiene."
      }
    ]
  },
  {
    "id": 131,
    "title": "حالة 131: Traveler's Diarrhea (Enterotoxigenic E. coli - ETEC)",
    "topic": "Traveler's Diarrhea (Enterotoxigenic E. coli - ETEC)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 23-year-old man develops watery diarrhea 5 days after arriving in Mexico.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, and what clinical clues support it over other enteric pathogens?",
        "a": "Most likely organism: Enterotoxigenic Escherichia coli (ETEC).\n- Justifying features:\n  1. Classic destination & timing: Developing/Latin American destination (Mexico) with acute onset within the first week of arrival (day 5).\n  2. Stool character: Acute non-bloody watery diarrhea (typical secretory small-bowel pattern of ETEC, which causes 30-60% of traveler's diarrhea in Latin America).\n- Key differentials: Enteroaggregative E. coli (EAEC), Norovirus, Campylobacter jejuni, Salmonella, Shigella (usually bloody/febrile), and Giardia lamblia (longer incubation of 1-2 weeks with prolonged bloating/steatorrhea)."
      },
      {
        "q": "2. How do Small-Bowel (Non-Inflammatory/Secretory) and Large-Bowel (Inflammatory/Invasive) diarrheas differ clinically and microscopically?",
        "a": "- Small-Bowel (Non-inflammatory — e.g., ETEC, Vibrio cholerae, Norovirus, Giardia):\n  - Stool: Large volume, watery, NO gross blood, acidic pH possible.\n  - Fecal microscopy: <5 WBCs/HPF; normal serum WBCs; minimal fever or mild periumbilical cramps.\n  - Mechanism: Enterotoxin-mediated active fluid/electrolyte secretion (LT -> ↑cAMP; ST -> ↑cGMP) or brush-border malabsorption.\n- Large-Bowel (Inflammatory/Invasive — e.g., Shigella, Campylobacter, EHEC/STEC, Entamoeba histolytica):\n  - Stool: Small volume, very frequent, mucoid and/or grossly bloody with tenesmus and lower abdominal cramps.\n  - Fecal microscopy: >10 WBCs/HPF; fever and serum leukocytosis common.\n  - Mechanism: Direct colonic mucosal invasion, ulceration, and exudation."
      },
      {
        "q": "3. How do you grade dehydration clinically, and what is the physiological basis of Oral Rehydration Solution (ORS)?",
        "a": "- Clinical Dehydration Assessment (WHO / Al-Azhar Lecture):\n  1. Mild (0-5%): Alert/well, normal eyes, moist mucosa, drinks normally, skin pinch retracts immediately -> oral fluids/ORS.\n  2. Moderate (5-10%): Restless, sunken eyes, dry mouth, thirsty, skin pinch retracts slowly -> supervised WHO ORS + reassessment.\n  3. Severe (≥10%): Lethargic/drowsy, very sunken eyes, very dry mouth, unable to drink, skin pinch stays folded, hypotension/oliguria -> urgent IV isotonic crystalloid (0.9% Saline or Lactated Ringer's).\n- Physiological basis of ORS: Even during profuse enterotoxin-mediated secretory diarrhea (ETEC/cholera), intestinal Na⁺-glucose cotransporter (SGLT-1) remains intact — equimolar glucose and sodium in reduced-osmolarity WHO ORS drive passive water reabsorption."
      },
      {
        "q": "4. When are antibiotics and antimotility agents indicated or contraindicated in Traveler's Diarrhea?",
        "a": "- Mild uncomplicated watery diarrhea: Self-limiting (3-5 days) -> ORS and early resumption of diet; antibiotics are NOT required. Loperamide may be used cautiously in afebrile adults without blood in stool.\n- Moderate-to-severe/incapacitating traveler's diarrhea: Empiric Oral Azithromycin (1 g single dose or 500 mg daily × 3 days) OR Rifaximin (200 mg TID × 3 days — non-absorbable, strictly for non-invasive watery ETEC) OR Ciprofloxacin (500 mg BID × 1-3 days if local susceptibility permits).\n- Absolute contraindications to Loperamide: Bloody diarrhea (dysentery), high fever, severe abdominal pain, suspected STEC O157:H7, C. difficile colitis, or young children."
      }
    ]
  },
  {
    "id": 132,
    "title": "حالة 132: Persistent Post-Travel Giardiasis",
    "topic": "Persistent Post-Travel Giardiasis",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 55-year-old businessman presents with a 15-day history of watery, non-bloody diarrhea associated with anorexia and abdominal bloating. His symptoms started 4 days after returning from a trip to Pakistan. On examination, he is apyrexial with dry mucous membranes but normal skin turgor.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, how is the diarrhea duration classified, and which clinical clues justify your diagnosis?",
        "a": "Most likely diagnosis: Giardiasis (Giardia lamblia / Giardia intestinalis).\n- Diarrhea duration classification (Al-Azhar Infectious Diarrhea lecture): Persistent Diarrhea (14-29 days; Acute is <14 days; Chronic is ≥30 days).\n- Justifying features in this case:\n  1. Prolonged duration (15 days — typical bacterial traveler's diarrhea like ETEC self-resolves within 3-5 days).\n  2. Non-bloody watery diarrhea accompanied by anorexia and prominent abdominal bloating/flatulence.\n  3. Apyrexial presentation (argues strongly against invasive bacterial dysentery or enteric fever).\n  4. Recent travel to an endemic region (Pakistan).\n- Differential diagnosis: Cryptosporidium, Cyclospora cayetanensis, post-infectious lactose intolerance/IBS, tropical sprue, and Entamoeba histolytica."
      },
      {
        "q": "2. How do you classify this patient's hydration status based on examination, and what fluid therapy is indicated?",
        "a": "- Hydration assessment: Dry mucous membranes with normal skin turgor and apyrexial -> Mild-to-Moderate ('Some') dehydration without signs of shock.\n- Fluid management: Supervised reduced-osmolarity WHO Oral Rehydration Solution (ORS) in frequent small volumes to replace deficit and ongoing losses, with early resumption of an age-appropriate diet. Reserve IV isotonic crystalloids for severe dehydration, hypotension, oliguria, or inability to tolerate oral fluids."
      },
      {
        "q": "3. Why are stool investigations indicated here, and which specific diagnostic tests have the highest yield?",
        "a": "- Indication: Persistent diarrhea (≥14 days) in a returning traveler is a clear indication for targeted microbiological and parasitic stool testing.\n- Highest-yield confirmatory tests:\n  1. Stool Giardia Antigen Assay (ELISA or Direct Fluorescent Antibody [DFA]) — >90-95% sensitivity, far superior to a single microscopy exam.\n  2. Multiplex Gastrointestinal NAAT/PCR Panel — simultaneously screens for Giardia, Cryptosporidium, Cyclospora, E. histolytica, and enteric bacteria.\n  3. Direct Stool Microscopy (Ova & Parasites — 3 samples on alternate days) to visualize pear-shaped flagellated trophozoites (diarrheic stool) or quadrinucleate oval cysts (formed stool).\n- Also check serum electrolytes, urea, and creatinine to evaluate dehydration impact in a 55-year-old."
      },
      {
        "q": "4. What is the most appropriate specific antiparasitic treatment regimen?",
        "a": "- First-line therapy:\n  1. Oral Tinidazole 2 g as a single dose (preferred first-line — >90% cure rate, convenient single dosing).\n  2. Oral Metronidazole 250-500 mg three times daily for 5-7 days (widely available alternative).\n  3. Oral Nitazoxanide 500 mg twice daily for 3 days.\n- Key clinical counseling: Avoid all alcohol during treatment and for 48-72 hours afterward (disulfiram-like reaction with Metronidazole/Tinidazole); warn about metallic taste and mild nausea."
      },
      {
        "q": "5. What should you suspect if watery diarrhea and bloating persist despite completing effective antiparasitic therapy?",
        "a": "1. Secondary Lactose Intolerance (most common post-giardiasis sequela — occurs in 20-40% due to transient duodenal brush-border lactase depletion; advise a temporary lactose-free diet for 2-4 weeks before repeating antiparasitics).\n2. Treatment failure / nitroimidazole-resistant Giardia (common in travelers returning from South Asia/Pakistan/India -> confirm persistent infection by stool antigen/PCR and retreat with an alternative class such as Nitazoxanide or Albendazole + Tinidazole).\n3. Alternative missed pathogen (e.g., Cyclospora cayetanensis or Cryptosporidium) or post-infectious IBS."
      }
    ]
  },
  {
    "id": 133,
    "title": "حالة 133: Post-Travel Giardiasis (Returning from Northern India)",
    "topic": "Post-Travel Giardiasis (Returning from Northern India)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 29-year-old man presents with a nine-day history of watery diarrhea that developed one week after returning from India. He had traveled around northern India for two months. On examination, he is apyrexial and his abdomen is soft and non-tender.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, differential diagnosis, and which clinical/epidemiological clues justify your choice?",
        "a": "Most likely diagnosis: Giardiasis (Giardia lamblia).\n- Justifying features in this case:\n  1. Prolonged travel (2 months) in northern India (high endemicity for waterborne enteric protozoa).\n  2. Delayed onset (symptoms began 1 week after return -> matches Giardia's 1-2 week incubation period) and prolonged course (9 days — longer than typical self-limiting viral/ETEC gastroenteritis).\n  3. Non-inflammatory clinical profile: Watery non-bloody diarrhea, apyrexial, soft and non-tender abdomen.\n- Important differential diagnoses: Cyclospora cayetanensis (classic cause of prolonged watery diarrhea after travel to India/Nepal), Cryptosporidium parvum, tropical sprue (after extended stay in India), and Enteroaggregative E. coli."
      },
      {
        "q": "2. How does Giardia lamblia cause prolonged non-bloody diarrhea without fever or abdominal tenderness?",
        "a": "- After ingestion of infective cysts in contaminated water or food, trophozoites excyst in the duodenum and attach to the small-intestinal epithelium via ventral sucking discs.\n- Unlike invasive colonic pathogens (Shigella, E. histolytica), Giardia does NOT invade the submucosa or bloodstream -> therefore no systemic fever, no abdominal guarding/tenderness, and no gross blood or fecal leukocytes.\n- Instead, trophozoite attachment causes mucosal hyperemia, shortening of microvilli, brush-border enzyme (lactase) loss, and impaired fat/carbohydrate absorption -> persistent watery or foul-smelling greasy diarrhea, flatulence, and weight loss."
      },
      {
        "q": "3. Which confirmatory diagnostic tests should be requested?",
        "a": "1. Stool Giardia Antigen Test (ELISA or Direct Fluorescent Antibody [DFA]) — highest-sensitivity rapid test for Giardia.\n2. Multiplex Stool Parasite & Enteric PCR Panel — concurrently detects Giardia, Cryptosporidium, and Cyclospora cayetanensis.\n3. Stool Ova & Parasites (3 samples on alternate days) PLUS Modified Acid-Fast (Kinyoun) Stain specifically to exclude Cyclospora and Cryptosporidium oocysts (common in travelers returning from northern India)."
      },
      {
        "q": "4. What is the definitive treatment for Giardiasis, and how would your drug choice change if Cyclospora were identified instead?",
        "a": "- Treatment for Giardiasis:\n  - Oral Tinidazole 2 g single dose OR Oral Metronidazole 250-500 mg TID for 5-7 days OR Oral Nitazoxanide 500 mg BID for 3 days (plus WHO ORS for hydration).\n  - Note: Nitroimidazole-refractory Giardia is increasingly reported in travelers returning from India -> if stool testing remains positive after therapy, switch to Nitazoxanide or combination Albendazole + nitroimidazole.\n- OSCE Pearl — If Modified Acid-Fast Stain/PCR instead confirms Cyclospora cayetanensis:\n  - Nitroimidazoles are INEFFECTIVE -> treat with Trimethoprim-Sulfamethoxazole (TMP-SMX) 160/800 mg PO twice daily for 7-10 days."
      }
    ]
  },
  {
    "id": 134,
    "title": "حالة 134: Acute Invasive Traveler's Diarrhea (Bacillary Dysentery)",
    "topic": "Acute Invasive Traveler's Diarrhea (Bacillary Dysentery)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 30-year-old man comes for review. He returned from a holiday in Egypt yesterday. For the past two days, he has been passing frequent bloody diarrhea associated with crampy abdominal pain. Abdominal examination demonstrates diffuse lower abdominal tenderness with no guarding or rigidity, and his temperature is 37.5°C.",
    "questions": [
      {
        "q": "1. What is the clinical syndrome, most likely causative organisms, and how do you differentiate Bacillary Dysentery from Amoebic Dysentery?",
        "a": "- Syndrome: Acute Invasive / Inflammatory Traveler's Diarrhea (Acute Dysentery).\n- Most likely causative organisms: Campylobacter jejuni and Shigella species (leading acute bacterial causes of bloody traveler's diarrhea); essential differentials include Non-typhoidal Salmonella, Shiga toxin-producing E. coli (STEC/EHEC O157:H7), and Entamoeba histolytica (important in travelers returning from Egypt).\n- Bacillary vs. Amoebic Dysentery (Al-Azhar Parasitology Table):\n  - Bacillary Dysentery (Shigella/Campylobacter): Abrupt onset (1-2 days), scanty alkaline stools, massive exudate with abundant pus cells (+++), NO Charcot-Leyden crystals, NO trophozoites.\n  - Amoebic Dysentery (E. histolytica): Typically more subacute/gradual (1-3 weeks), bulky acidic foul stools, scanty pus cells (+), Charcot-Leyden crystals present, and motile erythrophagocytic trophozoites in fresh warm stool."
      },
      {
        "q": "2. Why are stool investigations mandatory in this patient, and which exact tests should be ordered?",
        "a": "- Indication: Visible bloody diarrhea (dysentery) with lower abdominal tenderness is an absolute indication for microbiological testing (unlike uncomplicated watery diarrhea).\n- Required tests:\n  1. Stool Bacterial Culture & Antimicrobial Susceptibility (specifically covering Shigella, Campylobacter, and Salmonella).\n  2. Multiplex GI NAAT/PCR Panel + Shiga Toxin (STEC) assay (critical to exclude STEC O157:H7).\n  3. Fresh warm stool microscopy & Entamoeba histolytica stool antigen ELISA (to rule out amoebic dysentery).\n  4. Baseline CBC, electrolytes, urea, and creatinine (monitor hemoglobin/platelets/creatinine closely if STEC is suspected). Abdominal imaging is NOT routinely required given the absence of guarding or rigidity."
      },
      {
        "q": "3. What is the appropriate immediate management, and what TWO critical medication pitfalls must be avoided?",
        "a": "- Immediate management:\n  1. Oral rehydration with WHO ORS (IV isotonic fluids if severe dehydration develops).\n  2. Empiric antibiotic therapy for acute febrile/invasive traveler's dysentery: Oral Azithromycin 1 g single dose OR 500 mg once daily for 3 days (first-line because it covers BOTH Shigella AND fluoroquinolone-resistant Campylobacter jejuni).\n  3. If E. histolytica is confirmed: Tissue amoebicide (Metronidazole 750 mg PO TID for 7-10 days) FOLLOWED BY a luminal amoebicide (Diloxanide furoate 500 mg TID for 10 days or Paromomycin) to eradicate intraluminal cysts and prevent relapse/liver abscess.\n- TWO CRITICAL CONTRAINDICATIONS:\n  1. STRICTLY AVOID Loperamide / antimotility agents in bloody diarrhea (risk of toxic megacolon, prolonged pathogen shedding, and HUS).\n  2. AVOID antibiotics if STEC O157 / Shiga toxin 2 is suspected or confirmed (antibiotics induce bacteriophage-mediated Shiga toxin release, markedly increasing the risk of Hemolytic Uremic Syndrome!)."
      },
      {
        "q": "4. What acute and delayed post-infectious complications must be monitored?",
        "a": "- Acute complications: Dehydration and AKI, toxic megacolon, colonic perforation/peritonitis, bacteremia/sepsis, and Hemolytic Uremic Syndrome (HUS — microangiopathic hemolytic anemia, thrombocytopenia, and AKI after STEC or Shigella dysenteriae type 1).\n- Delayed immune-mediated complications (Al-Azhar Food Poisoning & Diarrhea lectures):\n  1. Guillain-Barré Syndrome (GBS): Strongly linked to Campylobacter jejuni via molecular mimicry (antibodies cross-react with peripheral nerve gangliosides) -> symmetrical ascending weakness and areflexia 1-3 weeks post-diarrhea.\n  2. Reactive Arthritis: Asymmetric lower-limb oligoarthritis (knees/ankles) 1-4 weeks after Shigella, Campylobacter, Salmonella, or Yersinia."
      },
      {
        "q": "5. What infection control and public health measures apply to acute dysentery?",
        "a": "- Strict handwashing with soap and water after toileting and before food handling.\n- Contact precautions (gloves, gown, private toilet/room) if admitted with uncontrolled diarrhea.\n- Exclude symptomatic food handlers, healthcare workers, and childcare staff until asymptomatic/microbiologically cleared per local public health regulations, and report notifiable enteric pathogens/outbreaks."
      }
    ]
  },
  {
    "id": 135,
    "title": "حالة 135: Complicated Typhoid Fever (Ileal Perforation & Sepsis)",
    "topic": "Complicated Typhoid Fever (Ileal Perforation & Sepsis)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 19-year-old female returns from Ghana presenting with high pyrexia (40°C) and bloody stools. On examination, she has abdominal distension, hepatosplenomegaly, and rose spots on her abdomen. Before empirical treatment is started, she develops bowel perforation resulting in overwhelming sepsis.",
    "questions": [
      {
        "q": "1. What is the definitive diagnosis, causative organism, and which hallmark clinical features in this case confirm it?",
        "a": "Definitive diagnosis: Complicated Typhoid (Enteric) Fever progressing to Intestinal Perforation and Overwhelming Sepsis.\n- Causative organism: Salmonella enterica serovar Typhi (Gram-negative, motile, facultative intracellular, non-lactose-fermenting bacillus; fecal-oral transmission).\n- Justifying hallmark features in this case:\n  1. Travel to an endemic West African country (Ghana).\n  2. High pyrexia (40°C — classically evolves via step-ladder rise in week 1 to continuous high fever with relative bradycardia [Faget sign]).\n  3. Rose spots on the abdomen (blanching salmon-pink maculopapules from cutaneous bacterial emboli appearing in week 2).\n  4. Hepatosplenomegaly and abdominal distension.\n  5. Classic week-3 intestinal complications: lower GI hemorrhage (bloody stools) and bowel perforation leading to septic shock."
      },
      {
        "q": "2. What are the key virulence factors of Salmonella Typhi, and what is the exact anatomical pathogenesis of typhoid bowel perforation?",
        "a": "- Virulence factors (Hawari OSCE):\n  1. Vi (Virulence) capsular polysaccharide antigen: Inhibits phagocytosis and complement-mediated lysis.\n  2. O (Somatic / LPS endotoxin) antigen: Drives systemic fever, cytokine storm, and septic shock.\n  3. H (Flagellar) antigen: Motility and mucosal penetration.\n  4. Type III Secretion System & intracellular survival inside reticuloendothelial macrophages (liver, spleen, bone marrow, Peyer's patches).\n- Pathogenesis of Perforation (Week 3): Bacteria invade ileal M-cells -> marked hyperplasia, monocyte infiltration, and ischemic necrosis of Peyer's patches in the TERMINAL ILEUM -> longitudinal ulcers along the anti-mesenteric border -> mucosal sloughing erodes vessels (bloody stools/hemorrhage) and perforates the full ileal wall -> fecal peritonitis and polymicrobial sepsis."
      },
      {
        "q": "3. What is the diagnostic timeline (BASU rule) for Typhoid fever, and what emergency imaging confirms perforation?",
        "a": "- Hawari OSCE Diagnostic Timetable (BASU):\n  - Week 1: Blood culture (most sensitive early, ~80-90%; bone marrow culture remains >85% sensitive even after antibiotics!).\n  - Week 2: Agglutination — Widal Test (detects anti-O and anti-H antibodies; positive if titer ≥1:160 or ≥4-fold rise in paired sera; limited by false positives in endemic areas, prior vaccination, or cross-reacting infections).\n  - Week 3: Stool culture (highest yield during sloughing of Peyer's patches).\n  - Week 4: Urine culture.\n- Confirming Bowel Perforation: Urgent Erect Chest X-ray (or left lateral decubitus abdominal X-ray) showing free air under the right hemidiaphragm (pneumoperitoneum), or abdominal CT if stable."
      },
      {
        "q": "4. What is the emergency medical and surgical management for typhoid perforation with overwhelming sepsis?",
        "a": "1. Immediate Sepsis Resuscitation (ICU): Assess qSOFA/SOFA, oxygen, aggressive IV isotonic crystalloids, Norepinephrine vasopressor if septic shock persists, serum lactate, cross-match blood, and obtain 2 sets of blood cultures immediately.\n2. Urgent Broad-Spectrum IV Antibiotics (10-14 days):\n   - IV Ceftriaxone 2 g daily (or IV Meropenem 1 g q8h if XDR-typhoid region / septic shock) PLUS IV Metronidazole 500 mg q8h (mandatory anaerobic/polymicrobial coverage for fecal peritonitis after bowel perforation!).\n   (Note: Uncomplicated non-perforated typhoid is treated with Oral Azithromycin 500 mg daily × 7 days or IV Ceftriaxone; avoid empiric Ciprofloxacin due to high global resistance).\n3. Adjunctive High-Dose IV Dexamethasone (3 mg/kg loading dose, then 1 mg/kg q6h for 48 hours): Proven to reduce mortality in severe typhoid complicated by shock, delirium, obtundation, or coma.\n4. Emergency Surgical Intervention: Urgent laparotomy for terminal ileal perforation repair (or segmental resection/ileostomy) with copious peritoneal lavage."
      },
      {
        "q": "5. Give a concise OSCE note on the Typhoid Chronic Carrier State and its eradication.",
        "a": "- Definition: ~2-5% of patients continue shedding Salmonella Typhi in stool or urine for >1 year after acute infection despite being asymptomatic (classic source of outbreaks).\n- Anatomical site of persistence: Gallbladder (strongly associated with gallstones/cholelithiasis, where bacteria form protective biofilms on stone surfaces).\n- Eradication treatment: Oral Ciprofloxacin 500-750 mg twice daily for 4 weeks (or Amoxicillin/TMP-SMX if susceptible); if refractory or associated with gallstones, perform cholecystectomy alongside antibiotics.\n- Prevention: Safe water/sanitation, food-handler hygiene, and Typhoid vaccination (Typhoid Conjugate Vaccine [TCV], IM Vi polysaccharide, or oral live-attenuated Ty21a)."
      }
    ]
  },
  {
    "id": 136,
    "title": "حالة 136: Sexually Transmitted Shigellosis in MSM",
    "topic": "Sexually Transmitted Shigellosis in MSM",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 44-year-old homosexual man presents to the GUM clinic with a 3-day history of diarrhea. He has no history of recent foreign travel and is normally fit and well. His abdomen is soft and non-tender, and he has normal observations. His last sexual encounter was 2 weeks ago. Tests for Chlamydia trachomatis, Neisseria gonorrhoeae, HIV, and syphilis are negative. A stool sample sent for culture grows Shigella.",
    "questions": [
      {
        "q": "1. What is the diagnosis, how was this infection acquired without foreign travel, and why does Shigella spread so efficiently in this setting?",
        "a": "Diagnosis: Sexually Transmitted Shigellosis (Shigella flexneri or Shigella sonnei).\n- Transmission route: Direct or indirect fecal-oral transmission during sexual activity (particularly oro-anal contact / anilingus or fisting) among men who have sex with men (MSM), independent of foreign travel.\n- Why it spreads so readily: Shigella has an extraordinarily LOW infectious dose — as few as 10 to 100 organisms are sufficient to cause infection (acid-resistant bacteria easily survive gastric acid)."
      },
      {
        "q": "2. What are the key microbiological features and four species of Shigella?",
        "a": "- Microbiology: Gram-negative, NON-motile, non-lactose-fermenting, non-H2S-producing facultative anaerobic bacilli; invade colonic M-cells and spread laterally cell-to-cell via host actin polymerization without typically entering the bloodstream.\n- Four species (severity spectrum):\n  1. Shigella dysenteriae (Group A — Type 1 produces Shiga toxin -> most severe dysentery and HUS risk).\n  2. Shigella flexneri (Group B — major cause of sexually transmitted outbreaks in MSM and developing countries; associated with reactive arthritis).\n  3. Shigella boydii (Group C).\n  4. Shigella sonnei (Group D — generally mildest watery/mucoid diarrhea; common in industrialized nations and MSM clusters)."
      },
      {
        "q": "3. What is the most suitable clinical management plan for this stable, immunocompetent patient?",
        "a": "1. Supportive care & hydration: Oral fluids / WHO ORS (patient is normally fit, afebrile, with normal observations and a soft, non-tender abdomen).\n2. Antibiotic therapy decision (critical antimicrobial stewardship pearl):\n   - In mild, improving cases in healthy hosts, Shigella can be self-limiting; however, antibiotics are recommended for moderate-to-severe symptoms, immunocompromised hosts, or to shorten fecal shedding and curb onward sexual/public-health transmission.\n   - ALWAYS check antimicrobial susceptibility testing (AST) from the stool culture because extensively drug-resistant (XDR) and macrolide/fluoroquinolone-resistant Shigella strains are common in MSM outbreaks!\n   - First-line options (if susceptible): Oral Azithromycin 500 mg daily for 3 days OR Oral Ciprofloxacin 500 mg BID for 3 days (or IV Ceftriaxone / oral Pivmecillinam / Fosfomycin per AST for MDR/XDR strains).\n3. STRICTLY AVOID antimotility agents (Loperamide) — prolongs illness and increases risk of toxic megacolon."
      },
      {
        "q": "4. What essential sexual health, infection control, and partner-notification measures must be advised?",
        "a": "1. Sexual abstinence: Advise abstaining from all sexual contact (especially oro-anal/anal sex) until AT LEAST 1 week after complete resolution of diarrhea.\n2. Partner notification: Advise recent sexual partners to seek evaluation/testing if symptomatic and practice strict hygiene.\n3. Hygiene & occupational exclusion: Thorough handwashing with soap and water after toileting; notify public health authorities; exclude from food handling, healthcare, or childcare work until asymptomatic ≥48 hours (and/or negative clearance stools per local policy)."
      },
      {
        "q": "5. What follow-up STI testing and potential complications should be considered?",
        "a": "- Window-period STI retesting: Because his last sexual encounter was only 2 weeks ago, the negative HIV and syphilis screening tests fall within the seroconversion window -> schedule repeat HIV and syphilis testing at 4-6 weeks and 12 weeks (and discuss HIV PrEP, Hepatitis A/B, and Mpox vaccination in MSM).\n- Potential complications of Shigellosis: Reactive arthritis (especially HLA-B27 positive patients after S. flexneri), toxic megacolon, bacteremia (if immunocompromised/HIV+), and Hemolytic Uremic Syndrome (S. dysenteriae type 1)."
      }
    ]
  },
  {
    "id": 137,
    "title": "حالة 137: Bacillus cereus Food Poisoning (Reheated Rice Syndrome)",
    "topic": "Bacillus cereus Food Poisoning (Reheated Rice Syndrome)",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A 27-year-old student presents to the GP with a 24-hour history of explosive diarrhea and vomiting. He has not noticed any blood in his stool and has no history of foreign travel. He reports eating rice kept warm in a rice cooker for several days.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, causative pathogen, and which specific dietary clue clinches the diagnosis?",
        "a": "Most likely diagnosis: Bacillus cereus Food Poisoning ('Reheated / Fried Rice Syndrome').\n- Pathognomonic dietary clue: Eating cooked rice kept warm in a rice cooker for several days, followed by acute non-bloody vomiting and explosive watery diarrhea without foreign travel.\n- Differential diagnosis:\n  1. Staphylococcus aureus preformed enterotoxin (30 min-8h; cream pastries, dairy, deli meats; vomiting predominant).\n  2. Clostridium perfringens (6-24h; bulk-cooked reheated meats/gravy; cramps and watery diarrhea).\n  3. Norovirus (12-48h; outbreak/person-to-person vomiting and watery diarrhea)."
      },
      {
        "q": "2. Describe the microbiology of Bacillus cereus and its TWO distinct toxin-mediated clinical syndromes.",
        "a": "- Microbiology: Gram-positive, motile, aerobic/facultative anaerobic, SPORE-FORMING rod. Its heat-resistant spores survive initial boiling/cooking; when rice is kept warm at ambient/holding temperatures (10-50°C), spores germinate into vegetative bacteria and elaborate toxins.\n- Two distinct syndromes:\n  1. Emetic Syndrome (Incubation 1-6 hours): Caused by ingestion of preformed, HEAT-STABLE toxin (cereulide) in rice/pasta -> abrupt severe nausea and vomiting (reheating does NOT destroy cereulide).\n  2. Diarrheal Syndrome (Incubation 6-24 hours): Caused by ingestion of bacteria/spores producing HEAT-LABILE enterotoxin in vivo in the small intestine (activates adenylate cyclase -> ↑cAMP) -> watery diarrhea and abdominal cramps.\n  (Repeated consumption of rice held warm over several days can produce both emetic and diarrheal features)."
      },
      {
        "q": "3. Are stool cultures or antibiotics indicated for this patient?",
        "a": "- Stool investigations: NOT routinely indicated in a healthy, afebrile adult with acute (<24h), non-bloody, toxin-mediated foodborne gastroenteritis (reserve stool testing for bloody stool, high fever, persistent diarrhea, immunocompromise, or public health outbreaks).\n- Antibiotics: NOT indicated! Illness is mediated by bacterial toxins and is self-limiting within 24-48 hours; antibiotics do NOT neutralize preformed toxins, do not shorten recovery, and increase antimicrobial resistance and C. difficile risk."
      },
      {
        "q": "4. What is the appropriate clinical management and what red flags warrant urgent hospital referral?",
        "a": "- Primary management:\n  1. Oral Rehydration: Reduced-osmolarity WHO Oral Rehydration Solution (ORS) in frequent small sips to replace fluid and electrolyte losses.\n  2. Optional short-term antiemetic (e.g., oral/sublingual Ondansetron) if persistent vomiting impedes oral rehydration; resume light diet once vomiting settles.\n- Red flags requiring urgent ED referral: Inability to keep oral fluids down (needs IV isotonic crystalloids), hypotension/dizziness, oliguria/anuria, visible blood in stool, high fever, severe localized abdominal pain, or neurological symptoms (diplopia, ptosis, dysphagia -> emergency evaluation for botulism)."
      },
      {
        "q": "5. What practical food-safety measures prevent Bacillus cereus food poisoning?",
        "a": "Follow the CDC 4 Steps / WHO Five Keys (Clean, Separate, Cook, CHILL):\n- Serve cooked rice immediately while piping hot (>60°C).\n- Cool leftover rice rapidly and refrigerate at <4°C within 1-2 hours — NEVER leave cooked rice sitting warm in a rice cooker or at room temperature for hours/days.\n- Discard refrigerated rice after 24 hours, and reheat leftovers thoroughly once only (remembering that reheating will NOT destroy already-formed heat-stable emetic toxin!)."
      }
    ]
  },
  {
    "id": 138,
    "title": "حالة 138: Bacillus cereus Emetic Food Poisoning",
    "topic": "Bacillus cereus Emetic Food Poisoning",
    "category": "Typhoid & Diarrheal Illnesses",
    "scenario": "A man presents with severe vomiting and reports not being able to keep fluids down for the past 12 hours. When discussing possible causes of gastroenteritis, he mentions reheating curry with rice the night before.",
    "questions": [
      {
        "q": "1. What is the most likely causative organism, specific toxin, and classic incubation period?",
        "a": "Most likely organism: Bacillus cereus (Emetic Syndrome).\n- Specific toxin: Preformed, heat-stable emetic toxin (cereulide) produced when surviving spores germinate in improperly cooled/stored cooked rice — subsequent reheating of the curry and rice kills vegetative bacteria but does NOT inactivate the heat-stable toxin.\n- Typical incubation period: 1 to 6 hours after eating the contaminated rice, causing abrupt severe nausea and intractable vomiting (typically self-resolving within 24 hours).\n- Key differential: Staphylococcus aureus preformed enterotoxin (30 min-8 hours; associated with cream-filled pastries, dairy, potato/egg salads, and sliced meats)."
      },
      {
        "q": "2. Why does this patient require IV fluid therapy instead of ORS alone, and what electrolyte disturbance should you check for?",
        "a": "- Direct indication for IV fluids (Al-Azhar Food Poisoning & Infectious Diarrhea lectures): Intractable vomiting with inability to keep oral fluids down for 12 hours (failed oral intake -> high risk of hypovolemia and pre-renal AKI).\n- Immediate management:\n  1. Assess vitals (BP, orthostatics, HR), mucous membranes, skin turgor, capillary refill, and urine output.\n  2. Administer IV isotonic crystalloid (0.9% Normal Saline or Lactated Ringer's) with frequent clinical reassessment.\n  3. Give IV Antiemetic (e.g., Ondansetron 4 mg IV — check QT contraindications) to control vomiting and enable transition back to oral WHO ORS.\n- Essential labs: Serum electrolytes, urea, creatinine, and glucose — prolonged severe vomiting classically causes hypokalemic, hypochloremic metabolic alkalosis and pre-renal azotemia."
      },
      {
        "q": "3. Are antibiotics indicated in this patient? Explain your rationale.",
        "a": "- NO — antibiotics are strictly NOT indicated.\n- Rationale: The emetic syndrome of Bacillus cereus is caused entirely by a preformed heat-stable toxin (cereulide) already ingested in the food, not by ongoing invasive bacterial infection. Antibiotics have zero activity against preformed toxins, provide no clinical benefit, and risk adverse effects and resistance."
      },
      {
        "q": "4. Compare the incubation periods of major foodborne pathogens as a rapid OSCE clinical clue.",
        "a": "Al-Azhar Food Poisoning Incubation Guide:\n- 30 min – 8 hours (prominent vomiting, preformed toxins): Staphylococcus aureus enterotoxin; Bacillus cereus emetic toxin (1-6h).\n- 6 – 24 hours (cramps & watery diarrhea): Clostridium perfringens (bulk meats/gravy); Bacillus cereus diarrheal enterotoxin.\n- 12 – 48 hours (vomiting + watery diarrhea): Norovirus (outbreaks/cruise ships/institutions).\n- 6 hours – 6 days (diarrhea, cramps, +/- fever): Non-typhoidal Salmonella (poultry/eggs), Campylobacter jejuni (poultry/unpasteurized milk).\n- 1 – 10 days (severe cramps, bloody diarrhea): STEC/EHEC O157:H7 (undercooked beef — avoid antibiotics due to HUS risk!).\n- Neurological red flag (12-36h): Clostridium botulinum (home-canned/preserved food -> diplopia, ptosis, dysphagia, descending paralysis -> urgent antitoxin & airway support!)."
      }
    ]
  },
  {
    "id": 139,
    "title": "حالة 139: Hepatosplenic Schistosomiasis (Schistosoma mansoni)",
    "topic": "Hepatosplenic Schistosomiasis (Schistosoma mansoni)",
    "category": "Hepatitis & Jaundice",
    "scenario": "A patient with chronic Schistosoma mansoni infection has developed advanced periportal hepatic fibrosis.",
    "questions": [
      {
        "q": "1. What is the most likely clinical presentation of advanced hepatic fibrosis caused by Schistosoma mansoni, and why is liver synthetic function initially preserved?",
        "a": "- Most likely clinical presentation: Presinusoidal Portal Hypertension manifested by:\n  1. Massive/Huge Splenomegaly ('Egyptian / Bilharzial Splenomegaly' — spleen crossing the midline/umbilicus) with hypersplenism (pancytopenia).\n  2. Esophageal and gastric varices -> recurrent upper GI bleeding (hematemesis and melena).\n  3. Dilated abdominal wall portosystemic collaterals and late-stage ascites (from portal HTN + hypoproteinemia).\n- Key pathophysiological distinction from cirrhosis: Embolic S. mansoni eggs lodge in portal venules causing Type IV delayed hypersensitivity granulomas -> dense periportal fibrosis ('Symmers' clay pipe-stem fibrosis') causing PRESINUSOIDAL portal obstruction while sparing hepatic lobular parenchyma; thus hepatocyte synthetic function (albumin, INR, bilirubin) remains relatively preserved until late stages or concomitant viral hepatitis (HCV/HBV)."
      },
      {
        "q": "2. Outline the life cycle of Schistosoma mansoni and the progressive clinical stages of hepatic schistosomiasis.",
        "a": "- Life cycle (Al-Azhar Parasitology):\n  - Definitive host: Man (adults live in inferior mesenteric venous plexus).\n  - Intermediate host in Egypt: Biomphalaria alexandrina freshwater snail (Bulinus truncatus for S. haematobium).\n  - Infective stage: Furcocercous (fork-tailed) cercaria penetrating human skin during freshwater canal exposure.\n  - Diagnostic stage: Oval egg (150×60 µm) with a conspicuous LATERAL spine in stool.\n- 5 Progressive Stages of Hepatic Schistosomiasis:\n  1. Hepatomegaly (ovideposition & granulomas -> smooth, firm, rounded liver).\n  2. Hepatosplenomegaly (reticuloendothelial hyperplasia).\n  3. Huge splenomegaly + shrunken fibrotic liver + portosystemic collaterals (hematemesis).\n  4. Ascites (portal HTN + hypoproteinemia from variceal bleeding/colonic polyposis).\n  5. Terminal hepatic failure (usually precipitated by concomitant HCV/HBV infection or portal flow reversal)."
      },
      {
        "q": "3. Which confirmatory parasitological, radiological, and endoscopic investigations should be performed?",
        "a": "1. Direct Parasitology: Stool examination (Kato-Katz thick smear / concentration) for lateral-spined S. mansoni eggs; if stool is negative in chronic fibrotic disease, perform Rectal Snip Biopsy (Gold Standard — shows viable/calcified eggs in rectal submucosa).\n2. Serology: Circulating antigen tests (CCA/CAA) confirm ACTIVE infection and fall after cure (whereas antibody ELISA/IHA remains positive after past cured infection).\n3. Abdominal Ultrasound: Pathognomonic echogenic periportal (Symmers' pipe-stem) thickening, dilated portal vein, massive splenomegaly, and portosystemic collaterals.\n4. Upper GI Endoscopy: Essential to screen/grade esophageal and gastric varices.\n5. CBC & Bone Marrow: Eosinophilia (early); pancytopenia with hypercellular bone marrow confirms Hypersplenism (Hawari diagnostic triad: Splenomegaly + Pancytopenia + Hypercellular bone marrow)."
      },
      {
        "q": "4. What is the definitive antiparasitic therapy and management of portal hypertension and hypersplenism?",
        "a": "1. Antiparasitic Drug of Choice: Oral Praziquantel 40 mg/kg (single dose or two divided doses in 1 day; may repeat 2-3 times in heavy/moderate infections) — kills adult worms and stops further egg deposition/fibrosis progression (established fibrosis is irreversible). Alternative for S. mansoni: Oxamniquine 20 mg/kg/day × 3 days.\n2. Portal Hypertension & Variceal Bleeding: Non-selective beta-blockers (Propranolol/Carvedilol) and Endoscopic Variceal Band Ligation (EVL) for primary/secondary prophylaxis.\n3. Hypersplenism / Debilitating Massive Splenomegaly: Splenectomy (per Hawari Practical OSCE -> MUST vaccinate 2 weeks BEFORE elective splenectomy [or 2 weeks after urgent surgery] against encapsulated organisms: Hib, Meningococcal A & C, Pneumococcal [q5y], and annual Influenza + Penicillin V prophylaxis; Howell-Jolly bodies appear on post-splenectomy blood film)."
      },
      {
        "q": "5. What two high-yield Egyptian extra-hepatic complications occur in chronic S. mansoni infection?",
        "a": "1. Bilharzial Cor Pulmonale: S. mansoni eggs bypass the fibrotic liver through portosystemic collaterals into pulmonary arterioles -> granulomas -> endarteritis obliterans -> pulmonary hypertension -> right ventricular hypertrophy/failure (CXR: dumbbell-shaped dilatation of main pulmonary arteries).\n2. Chronic Bacteremic Salmonellosis: Salmonella proliferates inside the gut/tegument of adult schistosome worms, causing prolonged relapsing fever/bacteremia (FUO) -> MUST treat with BOTH anti-typhoid antibiotics AND Praziquantel to eradicate the schistosome reservoir and prevent relapse!\n(Note: Colonic bilharzial polyposis and bilharzioma do NOT turn malignant, unlike S. haematobium which causes squamous cell carcinoma of the urinary bladder)."
      }
    ]
  },
  {
    "id": 140,
    "title": "حالة 140: Enterobius vermicularis (Pinworm / Threadworm Infection)",
    "topic": "Enterobius vermicularis (Pinworm / Threadworm Infection)",
    "category": "Other Infections & Parasites",
    "scenario": "A mother brings her 5-year-old son to the clinic complaining that he has been experiencing severe perianal itching, especially at night, which disrupts his sleep.",
    "questions": [
      {
        "q": "1. What is the most likely diagnosis, causative parasite, and which clinical features justify your choice?",
        "a": "Most likely diagnosis: Enterobiasis (Pinworm / Threadworm infection — الدودة الدبوسية).\n- Causative organism: Enterobius vermicularis (intestinal nematode; man is the only definitive host).\n- Justifying features in this case:\n  1. Classic pediatric age group (5-year-old child).\n  2. Pathognomonic symptom: Severe nocturnal pruritus ani disrupting sleep (often causing irritability, hyperactivity, and insomnia).\n- Differential diagnosis: Perianal candidiasis, contact/diaper dermatitis, atopic dermatitis, anal fissure, and pediculosis/scabies."
      },
      {
        "q": "2. Why is perianal itching specifically severe at night, and how does rapid reinfection occur?",
        "a": "- Adult worms (female ~10 mm, male ~5 mm) live in the cecum and adjacent large intestine.\n- At night (while the host sleeps and the anal sphincter relaxes), the gravid female worm migrates out of the anus onto the perianal skin to deposit thousands of sticky, albuminous-coated eggs -> intense local pruritus ani.\n- Rapid reinfection modes:\n  1. Autoinfection (hand-to-mouth): Eggs become embryonated and infective within just a FEW HOURS -> scratching transfers eggs under fingernails to the mouth.\n  2. Retro-infection: Eggs hatch on perianal skin and larvae crawl back through the anus into the rectum.\n  3. Household spread: Contaminated bed linens, pajamas, toys, and airborne dust inhalation."
      },
      {
        "q": "3. What is the diagnostic test of choice to confirm Enterobius vermicularis, when should it be performed, and why is routine stool exam unreliable?",
        "a": "- Diagnostic Test of Choice: Perianal Cellophane / Scotch Adhesive Tape Test (or NIH swab).\n- Proper technique & timing: Press clear adhesive tape firmly against the perianal skin folds EARLY IN THE MORNING IMMEDIATELY UPON WAKING — BEFORE the child bathes, washes, or defecates (repeat on 3 consecutive mornings for >90% sensitivity).\n- Microscopic findings: Translucent, colorless, PLANO-CONVEX (D-shaped / flat on one side, convex on the other) eggs (50×20 µm) containing a coiled rhabditiform larva (occasionally adult thread-like white worms are seen at the anal margin).\n- Why routine stool O&P is unreliable: Positive in <5-10% of cases because females lay eggs externally on perianal skin rather than inside the fecal stream."
      },
      {
        "q": "4. What is the first-line drug treatment, and what TWO mandatory OSCE rules prevent household recurrence?",
        "a": "- First-line anthelmintic drugs:\n  - Oral Albendazole 400 mg as a single dose (standard in Egypt; 200 mg if <2 years) OR Oral Mebendazole 100 mg as a single dose.\n  - Alternative (preferred in pregnancy and children <2 years): Pyrantel pamoate 11 mg/kg (max 1 g) single dose.\n- TWO MANDATORY OSCE RULES:\n  1. REPEAT the exact single dose after 2 weeks (kills newly matured worms hatched from eggs ingested or autoinfected during initial treatment, as drugs kill adults but not eggs).\n  2. Treat ALL household / family members simultaneously (even asymptomatic parents and siblings) to break intra-familial reinfection.\n- Symptomatic adjunct (Al-Azhar curriculum): Topical soothing/antipruritic or white precipitate ointment around the anus at night to relieve itching and trap eggs."
      },
      {
        "q": "5. What ectopic complications can occur in children, and what household hygiene measures are essential?",
        "a": "- Ectopic migration complications: Gravid females can migrate anteriorly into the female genital/urinary tract causing vulvovaginitis, UTI, secondary nocturnal enuresis, or pelvic peritonitis, or enter the appendix causing appendicitis (one of the 4 Al-Azhar helminths causing appendicitis: Enterobius, Ascaris, Trichuris, Taenia saginata).\n- Essential household hygiene: Morning showers (not tub baths) to wash away overnight eggs, hot-water laundering of bedsheets/towels/pajamas without shaking them (prevents aerosolizing eggs in dust), tightly fitting underwear/trousers at night, trimming fingernails short, and strict handwashing before meals and after toileting."
      }
    ]
  },
  {
    "id": 141,
    "title": "حالة 141: Strongyloidiasis (Strongyloides stercoralis)",
    "topic": "Strongyloidiasis (Strongyloides stercoralis)",
    "category": "Other Infections & Parasites",
    "scenario": "A 28-year-old agricultural worker in a tropical region presents with chronic watery diarrhea, epigastric pain, and a localized creeping serpiginous urticarial rash on his buttocks (larva currens). Stool examination reveals rhabditiform larvae.",
    "questions": [
      {
        "q": "1. What is the diagnosis, causative organism, and which pathognomonic features in this case confirm it?",
        "a": "Diagnosis: Strongyloidiasis.\n- Causative organism: Strongyloides stercoralis (facultative intestinal nematode).\n- Pathognomonic features in this case:\n  1. Larva currens ('racing larva'): Fast-moving, creeping, serpiginous urticarial eruption migrating at 5-10 cm/hour over the buttocks, perianal area, or thighs (caused by external autoinfection of filariform larvae).\n  2. Gastrointestinal duodenitis triad: Burning epigastric pain (mimics peptic ulcer disease) and chronic watery diarrhea (often alternating with constipation).\n  3. Tropical soil/agricultural exposure (barefoot contact with contaminated soil).\n  4. Definitive stool microscopy finding: Rhabditiform larvae in stool (eggs hatch inside intestinal mucosa, so larvae — NOT eggs — are passed in stool!).\n- Key differential for creeping rash: Cutaneous larva migrans (Ancylostoma braziliense — dog/cat hookworm; migrates very slowly at mm/day, usually on feet)."
      },
      {
        "q": "2. Explain the unique autoinfection life cycle of Strongyloides stercoralis that distinguishes it from other soil-transmitted nematodes.",
        "a": "- Infective stage: Filariform larva (500-600 µm, notched tail, esophagus occupying anterior 1/2) in soil penetrates intact skin -> bloodstream -> lungs (Loeffler's eosinophilic pneumonitis) -> coughed & swallowed -> parthenogenetic adult females burrow into duodenum/upper jejunum.\n- Unique Autoinfection Cycle (allows infection to persist for DECADES without re-exposure):\n  - Eggs hatch in the intestinal mucosa into rhabditiform larvae.\n  - Instead of all passing into soil, some rhabditiform larvae rapidly molt into infective filariform larvae INSIDE the large intestine (especially with constipation) and re-penetrate the colonic mucosa (Internal Autoinfection) or perianal skin (External Autoinfection -> larva currens), continuously recycling and amplifying worm burden."
      },
      {
        "q": "3. What are the optimal diagnostic investigations for Strongyloidiasis?",
        "a": "1. Stool Larval Detection: Because single routine stool microscopy has low sensitivity (~30-50%), collect multiple concentrated stool specimens (3-7 samples) or use specialized concentration methods — Baermann funnel technique or Koga Agar Plate Culture (highest parasitological sensitivity) — to identify rhabditiform larvae.\n2. Strongyloides IgG ELISA Serology: High sensitivity (>90%), ideal for screening asymptomatic tropical/endemic patients prior to immunosuppression.\n3. Duodenal aspirate / String test (Entero-test) if stool studies are negative despite high suspicion.\n4. CBC: Peripheral eosinophilia (present in ~70-80% of chronic cases; CRITICAL PEARL: eosinophilia frequently DISAPPEARS in hyperinfection syndrome due to steroid suppression — a poor prognostic sign!).\n5. In suspected hyperinfection: Examine sputum, BAL fluid, or CSF for filariform larvae."
      },
      {
        "q": "4. What is the first-line treatment for uncomplicated Strongyloidiasis versus Hyperinfection Syndrome?",
        "a": "- Uncomplicated Strongyloidiasis (this patient):\n  - Drug of choice: Oral Ivermectin 200 µg/kg once daily for 2 days (cure rate >90%; repeat at 2 weeks if persistent).\n  - Alternatives: Oral Albendazole 400 mg twice daily for 7 days (lower cure rate) or Thiabendazole.\n- Hyperinfection / Disseminated Strongyloidiasis (Medical Emergency):\n  1. Daily Oral (or subcutaneous/rectal if ileus) Ivermectin 200 µg/kg/day continued daily until stool and sputum remain negative for larvae for at least 2 consecutive weeks (often combined with Albendazole).\n  2. Immediate broad-spectrum IV antibiotics covering enteric Gram-negative bacilli (e.g., Meropenem or Ceftriaxone/Cefepime) for polymicrobial bacteremia/meningitis.\n  3. Rapidly taper or discontinue corticosteroids/immunosuppressants if clinically feasible."
      },
      {
        "q": "5. What triggers life-threatening Hyperinfection Syndrome, why does it cause Gram-negative sepsis, and what critical screening rule applies before steroid therapy?",
        "a": "- Major triggers: Systemic Corticosteroids (#1 trigger — even short courses!), HTLV-1 coinfection (impairs Th2/IgE response and causes treatment failure), organ transplantation, hematologic malignancies, and biologic/chemotherapy agents.\n- Mechanism of fatal sepsis: Uncontrolled massive internal autoinfection causes millions of filariform larvae to invade the gut wall, carrying enteric Gram-negative bacteria (E. coli, Klebsiella, Pseudomonas) on their cuticles directly into the bloodstream and meninges -> polymicrobial Gram-negative septic shock, bacterial meningitis, diffuse alveolar hemorrhage/ARDS (mortality 50-85%).\n- Mandatory OSCE Prevention Rule: ALWAYS screen (serology/stool) and empirically treat with Ivermectin any patient from tropical/endemic regions BEFORE starting systemic corticosteroids or immunosuppression! Prevent primary infection by wearing shoes and sanitary fecal disposal."
      }
    ]
  },
  {
    "id": 142,
    "title": "حالة 142: Trichuriasis (Trichuris trichiura / Whipworm Infection)",
    "topic": "Trichuriasis (Trichuris trichiura / Whipworm Infection)",
    "category": "Other Infections & Parasites",
    "scenario": "A 6-year-old child from a rural area presents with chronic abdominal pain, bloody mucoid diarrhea, and iron-deficiency anemia. During a severe straining episode, the mother notices partial rectal mucosal prolapse. Stool examination shows barrel-shaped eggs with prominent clear bipolar plugs.",
    "questions": [
      {
        "q": "1. What is the diagnosis, causative organism, and which pathognomonic clinical and laboratory features confirm it?",
        "a": "Diagnosis: Heavy Trichuriasis (Trichuris Dysentery Syndrome) complicated by Rectal Prolapse and Iron-Deficiency Anemia.\n- Causative organism: Trichuris trichiura (Trichocephalus trichiurus — 'Whipworm').\n- Pathognomonic features in this case:\n  1. Classic stool microscopy: Brownish, thick-shelled, BARREL-SHAPED (lemon-shaped) eggs (50×25 µm) with prominent clear bipolar mucoid plugs.\n  2. Classic heavy pediatric triad: Chronic bloody mucoid diarrhea with tenesmus + iron-deficiency anemia + partial rectal mucosal prolapse.\n- Differential diagnosis: Intestinal amoebiasis (E. histolytica), intestinal schistosomiasis (S. mansoni), hookworm anemia (Ancylostoma duodenale — no dysentery/rectal prolapse), shigellosis, and pediatric IBD."
      },
      {
        "q": "2. What is the mode of transmission, intestinal habitat, and exact mechanism of rectal prolapse and anemia?",
        "a": "- Mode of transmission: Geohelminth acquired via fecal-oral ingestion of embryonated eggs from soil-contaminated raw vegetables, water, or unwashed hands.\n- Key lifecycle distinction: Unlike Ascaris, hookworm, and Strongyloides, Trichuris has NO tissue/pulmonary migration phase (no Loeffler's syndrome) — larvae hatch and mature directly in the intestine.\n- Habitat & Pathogenesis:\n  - Adult whipworms (3-4 cm) embed their thin whip-like anterior ends deeply into the mucosa of the cecum, colon, and rectum -> severe mucosal edema, friability, submucosal micro-abscesses, and bleeding.\n  - Chronic mucosal oozing + parasite blood loss causes microcytic hypochromic iron-deficiency anemia.\n  - Heavy rectal worm burden induces intense tenesmus, chronic straining, and loss of anal sphincter tone -> rectal mucosal prolapse (white adult worms are often visibly embedded on the prolapsed rectal mucosa)."
      },
      {
        "q": "3. What investigations support diagnosis and assess disease severity?",
        "a": "1. Stool Microscopy (Direct smear / Kato-Katz thick smear for egg intensity quantification): Identifies characteristic barrel-shaped eggs with bipolar mucoid plugs.\n2. CBC & Iron Studies: Microcytic hypochromic anemia (low MCV, low ferritin) + mild-to-moderate peripheral eosinophilia.\n3. Proctoscopy / Colonoscopy (if diagnosis uncertain): Edematous, hyperemic, friable colonic/rectal mucosa studded with embedded adult whipworms ('coconut cake' appearance).\n4. Growth & nutritional assessment: Check height/weight percentiles and serum albumin in heavily infected children."
      },
      {
        "q": "4. What is the definitive anthelmintic regimen and supportive management for rectal prolapse and anemia?",
        "a": "- Definitive Anthelmintic Treatment (CRITICAL OSCE PEARL: Single-dose therapy has poor cure rates in heavy Trichuriasis — a 3-DAY course is required!):\n  1. Oral Mebendazole 100 mg twice daily for 3 days (drug of choice) OR\n  2. Oral Albendazole 400 mg once daily for 3 days.\n  (In heavy refractory infections, combining Albendazole with Ivermectin significantly improves cure rates).\n- Supportive management:\n  1. Rectal prolapse: Gentle manual reduction of the prolapsed mucosa using warm moist sterile gauze (surgery is NOT needed — prolapse resolves spontaneously once worms are eradicated!).\n  2. Oral ferrous sulfate (iron) supplementation and high-protein/nutritional rehabilitation to correct anemia and growth faltering."
      },
      {
        "q": "5. What other complications can heavy Trichuriasis cause, and how is transmission controlled in rural communities?",
        "a": "- Complications: Growth stunting, finger clubbing, cognitive impairment in children, appendicitis (worm invasion of appendix — one of the 4 Al-Azhar appendicitis helminths), and rarely colonic perforation/peritonitis.\n- Community Prevention & Control: Sanitary disposal of human feces (latrines), prohibiting untreated human feces (nightsoil) as crop fertilizer, washing raw vegetables thoroughly, handwashing with soap before meals, and periodic school-based mass deworming programs."
      }
    ]
  },
  {
    "id": 143,
    "title": "حالة 143: Catheter-Associated Urinary Tract Infection (CAUTI) & Nosocomial Cross-Transmission",
    "topic": "Catheter-Associated Urinary Tract Infection (CAUTI)",
    "category": "Other Infections & Parasites",
    "scenario": "An elderly patient, hospitalized with a gastrointestinal disorder, was on bed rest and required assistance for activities of daily living. A nurse did not wash her hands before manipulating the tubing attached to the urinary catheter of a second hospitalized patient, who developed a catheter-associated urinary tract infection (CAUTI) 3 days later.",
    "questions": [
      {
        "q": "1. How do you classify this infection, and what exact transmission mechanism caused it?",
        "a": "- Classification: Healthcare-Associated Infection (HAI / Nosocomial Infection) — specifically Catheter-Associated Urinary Tract Infection (CAUTI), occurring ≥48 hours after hospital admission (day 3).\n- Transmission mechanism: Exogenous Cross-Transmission via INDIRECT CONTACT — enteric bacteria (e.g., E. coli, Klebsiella, Enterococcus, or Pseudomonas) from the first hospitalized GI patient contaminated the nurse's hands during bedside care and were directly transferred to the second patient's urinary catheter tubing during manipulation, ascending intraluminally/extraluminally into the bladder."
      },
      {
        "q": "2. Map the Chain of Infection in this case and identify which of the WHO '5 Moments for Hand Hygiene' were violated.",
        "a": "- Chain of Infection (breaking ANY link prevents HAI):\n  1. Infectious Agent: Nosocomial/enteric uropathogens (e.g., MDR E. coli, Klebsiella, Pseudomonas, Enterococcus).\n  2. Reservoir: First elderly patient with GI disorder.\n  3. Portal of Exit: Gastrointestinal tract / perineal skin.\n  4. Mode of Transmission: Indirect contact via the nurse's unwashed hands (THE KEY PREVENTABLE LINK!).\n  5. Portal of Entry: Indwelling urinary catheter tubing/urethra.\n  6. Susceptible Host: Second hospitalized catheterized patient.\n- WHO '5 Moments for Hand Hygiene' violated here:\n  - Moment 4 (After touching Patient 1) & Moment 5 (After touching Patient 1's surroundings).\n  - Moment 1 (Before touching Patient 2) & critically Moment 2 (Before a clean/aseptic procedure — manipulating urinary catheter tubing!)."
      },
      {
        "q": "3. What are the diagnostic criteria and proper specimen collection technique for confirming CAUTI?",
        "a": "- Diagnostic criteria: Presence of compatible clinical symptoms/signs (fever, rigors, suprapubic/flank pain, CVA tenderness, or acute delirium/altered mental status in elderly patients) PLUS significant bacteriuria (≥10³ CFU/mL) with no alternative infection source.\n- Critical OSCE Specimen Collection Rules:\n  1. Collect urine aseptically from the disinfected catheter sampling port — NEVER from the drainage collection bag!\n  2. If the catheter has been in place >2 weeks, REPLACE the catheter first and collect the urine culture from the freshly placed catheter (avoids culturing mere biofilm colonization).\n  3. Send Urinalysis (pyuria >10 WBCs/HPF, positive leukocyte esterase/nitrites), Urine Culture & Sensitivity (mandatory in HAIs due to high MDR/ESBL/CRE rates), and Blood Cultures if febrile or septic.\n- Crucial distinction: Do NOT treat asymptomatic catheter-associated bacteriuria with antibiotics (except in pregnancy or prior to traumatic urologic procedures)."
      },
      {
        "q": "4. What is the definitive clinical management of symptomatic CAUTI?",
        "a": "1. Source Control (Catheter Management): Remove the indwelling urinary catheter immediately if no longer strictly needed; if ongoing catheterization is mandatory, replace it to eliminate established bacterial biofilm.\n2. Empiric Parenteral Antibiotic Therapy (broad-spectrum coverage for hospital-acquired Gram-negative bacilli, adjusted by local antibiogram):\n   - Stable inpatient: IV Ceftriaxone 1-2 g daily OR IV Cefepime / Piperacillin-Tazobactam (if Pseudomonas risk).\n   - Severe sepsis / ESBL risk: IV Carbapenem (Meropenem or Imipenem/Cilastatin).\n3. Antibiotic Stewardship: Review culture & susceptibility results at 48-72h and de-escalate to targeted oral step-down therapy once afebrile for 24-48h. Total duration: 7 days for prompt resolution, 10-14 days for delayed response or acute pyelonephritis.\n4. Supportive care: IV hydration, antipyretics, and serial sepsis screening (qSOFA / vital signs)."
      },
      {
        "q": "5. What are the core elements of proper Hand Hygiene and the hospital CAUTI Prevention Bundle?",
        "a": "- Proper Hand Hygiene (Al-Azhar IPC & Handwash lectures):\n  - Soap and running water (20-40 seconds) is MANDATORY when hands are visibly soiled, after GI/body-fluid exposure, or with C. difficile/norovirus.\n  - Alcohol-based hand rub (20-30 seconds) when hands are not visibly soiled.\n  - Gloves are an ADJUNCT, NEVER a substitute for hand hygiene — perform hand hygiene immediately before donning and after doffing gloves.\n- CAUTI Prevention Care Bundle:\n  1. Avoid unnecessary catheterization (insert ONLY for strict indications: acute urinary retention, strict ICU output monitoring, selected surgeries).\n  2. Strict aseptic insertion technique by trained staff using sterile equipment.\n  3. Maintain a closed, sterile, unobstructed drainage system with the collection bag positioned ALWAYS below bladder level.\n  4. Daily physician/nurse review to remove the catheter at the earliest possible moment."
      }
    ]
  }
];
