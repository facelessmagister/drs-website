export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 41,
    stem: "A 38-year-old woman presents to A\u0026E with sudden-onset left calf swelling and tenderness. She is 14 days postpartum following a caesarean section. On examination the left calf is 4 cm larger than the right. Doppler ultrasonography of the femoral and popliteal veins is negative for thrombus. Her pre-test probability by the Wells score is calculated as 3 points (moderate probability). Which of the following is the most appropriate next step in her diagnostic management?",
    options: {
      A: "No further testing is required because ultrasound is highly sensitive and the clinical signs are attributable to postoperative oedema.",
      B: "Perform a D-dimer assay; if negative, DVT is excluded and no anticoagulation is needed.",
      C: "Repeat compression ultrasonography in 5-7 days while administering therapeutic-dose low molecular weight heparin as bridging therapy.",
      D: "Proceed directly to CT pulmonary angiography to exclude a concurrent silent pulmonary embolism.",
      E: "Order an MRI venogram because compression ultrasonography has insufficient sensitivity in the proximal femoral veins."
    },
    answer: "C",
    explanation: "Hoffbrand describes that in patients with moderate or high Wells score, a negative proximal-leg compression ultrasound does NOT exclude DVT if clinical suspicion remains high, because early proximal thrombi may be below the resolution of ultrasound or calf-vein thrombi may not have extended. The recommended approach is to repeat compression ultrasound in 5-7 days (the accepted safe interval for serial testing). Anticoagulation should be started if the repeat scan is positive or if clinical suspicion remains high. A D-dimer is only useful to exclude DVT in patients with a LOW pre-test probability (Wells score le; 1); in moderate-high probability, the negative predictive value of D-dimer falls to unacceptable levels. CTPA is used for PE diagnosis, not DVT exclusion, and MRI venography is reserved for cases where ultrasound is technically inadequate or iliac/IVC involvement is suspected."
  },
  {
    num: 42,
    stem: "A 72-year-old man with known atrial fibrillation on apixaban presents with sudden-onset dyspnoea, tachycardia (118 bpm), and oxygen saturation of 88% on room air. Blood pressure is 82/54 mmHg. ECG shows sinus tachycardia with S1Q3T3 pattern. CTPA confirms bilateral saddle pulmonary embolism. Which of the following statements best describes the evidence-based immediate management of this patient?",
    options: {
      A: "Systemic thrombolysis is the standard of care for all pulmonary embolism with ECG changes, regardless of haemodynamic status.",
      B: "This patient has massive PE (systolic BP \u003c90 mmHg for \u003e15 minutes) and systemic thrombolysis is indicated given the high mortality risk without contraindications.",
      C: "Catheter-directed thrombolysis is preferred over systemic thrombolysis because it avoids the risk of intracranial haemorrhage entirely.",
      D: "Unfractionated heparin infusion alone is sufficient initial therapy; thrombolysis should only be considered if refractory hypotension persists after 48 hours of anticoagulation.",
      E: "Inferior vena cava filter placement should precede any thrombolytic therapy to prevent embolisation during lysis."
    },
    answer: "B",
    explanation: "Hoffbrand classifies PE as massive (high-risk) when there is sustained hypotension (systolic BP \u003c90 mmHg or a drop of \u003e40 mmHg from baseline for \u003e15 minutes), cardiogenic shock, or cardiac arrest. Massive PE carries very high mortality and systemic thrombolysis is the standard treatment in the absence of absolute contraindications such as active bleeding or recent intracranial haemorrhage. The S1Q3T3 pattern is a supportive ECG finding reflecting right ventricular strain. Catheter-directed thrombolysis is a valid alternative when systemic thrombolysis is contraindicated or fails, but it does not eliminate bleeding risk as it still involves lytic agents. Unfractionated heparin is first-line for non-massive PE but should not delay thrombolysis in massive PE. IVC filter placement is reserved for patients who have failed anticoagulation or have an absolute contraindication to it, not as a prerequisite for thrombolysis."
  },
  {
    num: 43,
    stem: "A 26-year-old woman with a history of two first-trimester miscarriages presents with a new left proximal DVT. She has no family history of thrombosis and her body mass index is 22 kg/m2. Laboratory testing reveals: AT activity 95% (normal), protein C activity 104% (normal), protein S free antigen 98% (normal), aPCR ratio 1.9 (ref \u22652.1), homocysteine 12 micromol/L (normal \u003c15). Which of the following is the most likely inherited thrombophilic defect in this patient?",
    options: {
      A: "Antithrombin deficiency, because AT deficiency presents with thrombosis at a young age and is frequently associated with pregnancy loss.",
      B: "Factor V Leiden heterozygosity, because the aPCR screening test is insensitive and mutation analysis is required for confirmation.",
      C: "Prothrombin G20210A variant, because this is the second most common inherited thrombophilia and causes recurrent early pregnancy loss.",
      D: "Protein S deficiency, because the free antigen assay misses the type II (functional) deficiency that disproportionately causes obstetric complications.",
      E: "Methylenetetrahydrofolate reductase (MTHFR) homozygosity, because elevated homocysteine within the normal range is frequently associated with recurrent miscarriage."
    },
    answer: "B",
    explanation: "Hoffbrand notes that Factor V Leiden is the most common inherited thrombophilia, present in 3-5% of the general European population. It is diagnosed by an activated protein C resistance (aPCR) assay; however, the ratio can overlap with normal, especially if the assay sensitivity is suboptimal or the patient is on anticoagulant therapy at the time of testing. A definitive diagnosis requires direct DNA analysis for the R506Q mutation. The patient's normal AT, protein C, and protein S levels make these deficiencies unlikely. The prothrombin G20210A variant is the second most common inherited thrombophilia but is not specifically linked to recurrent pregnancy loss more than other thrombophilias. MTHFR mutation testing is NOT recommended in modern thrombophilia workup because homocysteine levels within the normal range do not confer thrombotic risk, and MTHFR variants are not considered clinically significant thrombophilias by current guidelines."
  },
  {
    num: 44,
    stem: "A 68-year-old man undergoes elective total knee replacement. He receives unfractionated heparin 5000 units subcutaneously twice daily for VTE prophylaxis. On postoperative day 6, his platelet count falls from 245 x10^9/L to 78 x10^9/L. A clinical scoring system for heparin-induced thrombocytopenia (HIT) gives an intermediate probability (4 points). Which of the following is the most appropriate immediate management?",
    options: {
      A: "Continue unfractionated heparin and repeat the platelet count in 48 hours, because the platelet count nadir in HIT typically occurs between days 5 and 10.",
      B: "Switch to enoxaparin 40 mg subcutaneously once daily, because LMWH cross-reactivity with HIT antibodies is minimal and it provides equivalent VTE prophylaxis.",
      C: "Stop all heparin immediately and start fondaparinux 2.5 mg subcutaneously once daily for VTE prophylaxis.",
      D: "Send an enzyme-linked immunosorbent assay (ELISA) for anti-platelet factor 4/heparin antibodies; if positive, switch to warfarin monotherapy.",
      E: "Administer a platelet transfusion to raise the count above 100 x10^9/L and continue UFH prophylaxis, since bleeding risk outweighs thrombotic risk at this stage."
    },
    answer: "C",
    explanation: "Hoffbrand describes heparin-induced thrombocytopenia (HIT) as an immune-mediated prothrombotic disorder caused by IgG antibodies against platelet factor 4 (PF4) bound to heparin. Type II HIT typically occurs 5-10 days after heparin exposure (sometimes earlier with prior sensitisation). All heparin MUST be stopped immediately when HIT is suspected, because continued exposure dramatically increases the risk of thrombosis (venous and arterial). Fondaparinux, a synthetic pentasaccharide that selectively inhibits factor Xa via antithrombin but does not bind PF4, is a safe and effective alternative for both prophylaxis and treatment of HIT. LMWH (enoxaparin) has significant cross-reactivity with UFH-derived HIT antibodies and is CONTRAINDICATED. Platelet transfusion is generally avoided in HIT because it can paradoxically increase thrombotic risk by providing additional activated platelets pending clarification. Initial treatment with warfarin alone is dangerous because the protein C drop can precipitate skin necrosis; if warfarin is used later, a parenteral anticoagulant must overlap for at least 5 days."
  },
  {
    num: 45,
    stem: "A 54-year-old woman with a history of left proximal DVT 3 years ago, treated with 3 months of warfarin, presents with a swollen, painful left leg and dark discolouration around the ankle. Duplex ultrasound confirms chronic post-thrombotic changes in the deep venous system with valvular incompetence. Her BMI is 32 kg/m2 and she works as a flight attendant. Which of the following interventions is most likely to reduce the risk of recurrent DVT in this patient?",
    options: {
      A: "Prescribe indefinite low-dose aspirin 75 mg daily, because aspirin provides equivalent VTE protection to warfarin in patients with a single prior unprovoked VTE.",
      B: "Advise weight reduction, regular ambulation, and lifelong use of below-knee graduated compression stockings, with no additional pharmacological prophylaxis.",
      C: "Restart indefinite anticoagulation with a direct oral anticoagulant (DOAC), because she has a previous unprovoked DVT and now has persistent risk factors (post-thrombotic syndrome, obesity, prolonged immobility profession).",
      D: "Place a permanent inferior vena cava filter, because recurrent DVT in the presence of post-thrombotic syndrome is associated with a very high risk of fatal PE.",
      E: "Arrange a May-Thurner syndrome workup (CT venography of the pelvis) and consider iliac vein stenting, because this anatomical variant is the most important modifiable cause of recurrent left-sided DVT in women."
    },
    answer: "C",
    explanation: "Hoffbrand notes that patients with unprovoked VTE have a recurrence risk of approximately 10% per year if anticoagulation is stopped, compared with 1-3% per year in those with provoked VTE. Indefinite anticoagulation is indicated in patients with unprovoked VTE who have additional persistent risk factors, including obesity (BMI \u003e30 kg/m2), which is an independent risk factor for VTE recurrence. A DOAC (e.g. apixaban or rivaroxaban) is now preferred for extended-duration anticoagulation because it is more convenient and has a lower risk of intracranial haemorrhage than warfarin. Aspirin is inferior to anticoagulation for secondary VTE prevention. Compression stockings are used for symptomatic management of post-thrombotic syndrome but do NOT reduce recurrent DVT risk. May-Thurner syndrome (left common iliac vein compressed by the right common iliac artery) is a recognised but uncommon cause of recurrent left-sided DVT in young women; it should be considered if there is a strong pattern of recurrence on the left side, but indefinite anticoagulation remains the primary preventative strategy in this older patient with multiple risk factors."
  },
  {
    num: 46,
    stem: "Regarding the biophysical contribution of blood flow to thrombus formation, which statement best explains why venous thrombi are richer in fibrin and red cells, while arterial thrombi are predominantly composed of platelets?",
    options: {
      A: "Venous flow is laminar with high wall shear rates (450-1600 s\u22121), causing direct platelet activation and formation of white thrombi, whereas arterial stasis allows fibrin polymerisation to predominate.",
      B: "In veins, the relatively low wall shear rate (15-200 s\u22121) permits activated coagulation factors to accumulate locally without being rapidly diluted, favouring fibrin generation and red-cell entrapment; in arteries, high shear activates von Willebrand factor binding and platelet aggregation.",
      C: "Arterial endothelium produces tissue factor constitutively, while venous endothelium requires cytokine stimulation to express tissue factor, explaining the fibrin-rich composition of venous clots.",
      D: "Platelets require activated protein C to adhere to the subendothelium, and since protein C is activated primarily in the pulmonary circulation, platelet-rich thrombi only form on the arterial side.",
      E: "Fibrinolytic activity is uniformly higher in arteries than veins due to higher plasminogen activator expression, which prevents fibrin accumulation and results in platelet-dominated arterial thrombi."
    },
    answer: "B",
    explanation: "Hoffbrand describes how blood flow influences thrombus composition. In veins, the wall shear rate is low (15-200 s\u22121), allowing activated coagulation factors to accumulate locally and promoting fibrin formation, which entraps red cells to produce a red thrombus. In arteries, the high wall shear rate (300-800 s\u22121 in large arteries) activates von Willebrand factor, promoting rapid platelet adhesion and aggregation to form a white thrombus at the site of endothelial injury or atherosclerotic plaque rupture. The distinction is fundamentally biophysical: flow conditions determine whether coagulation cascade activation (fibrin-rich) or platelet activation (platelet-rich) predominates. Tissue factor expression is not constitutive on normal arterial endothelium; it is induced by inflammatory stimuli in both circulations. Protein C activation occurs on the endothelial surface via thrombomodulin, not preferentially in the pulmonary circulation. Fibrinolytic activity varies by vessel bed but the shear-rate mechanism is the dominant explanation for thrombus composition differences."
  },
  {
    num: 47,
    stem: "Which of the following best describes the relative risk of a first venous thromboembolic event conferred by heterozygosity for the Factor V Leiden mutation, and how this risk is modified by concurrent use of the combined oral contraceptive pill?",
    options: {
      A: "Heterozygous Factor V Leiden increases VTE risk approximately 3-fold; combined with the combined oral contraceptive pill, the risk rises to approximately 7-fold above baseline.",
      B: "Heterozygous Factor V Leiden increases VTE risk approximately 5-fold; combined with the combined oral contraceptive pill, the risk rises to approximately 30-fold above baseline.",
      C: "Heterozygous Factor V Leiden increases VTE risk approximately 20-fold; the combined oral contraceptive pill does not further increase risk because the activated protein C resistance pathway is already saturated.",
      D: "Heterozygous Factor V Leiden is not an independent risk factor for VTE; the increased risk is only observed when the prothrombin G20210A variant is also present.",
      E: "Heterozygous Factor V Leiden increases VTE risk approximately 3-fold; however, the combined oral contraceptive pill does not synergise because oestrogen-induced prothrombotic changes occur via a different molecular pathway."
    },
    answer: "B",
    explanation: "Hoffbrand states that heterozygosity for the Factor V Leiden mutation (R506Q) confers approximately a 5-fold increased risk of a first VTE event, and homozygosity confers approximately a 50-fold increased risk. When combined with exogenous oestrogen exposure\u2014such as from the combined oral contraceptive pill or hormone replacement therapy\u2014the risk increases synergistically. The interaction between Factor V Leiden and oestrogen-containing preparations multiplies the risk to approximately 30-fold compared with individuals who have neither risk factor. This multiplicative interaction, rather than a simple additive effect, is clinically significant and influences counselling about contraceptive choices in women with known thrombophilia. The prothrombin G20210A variant also interacts with oestrogen but the magnitude of synergy is greatest with Factor V Leiden. Oestrogen increases hepatic synthesis of procoagulant factors (factors II, VII, IX, X) and decreases antithrombin and protein S, creating a prothrombotic diathesis that acts on a pathway parallel to but reinforcing the activated protein C resistance caused by Factor V Leiden."
  },
  {
    num: 48,
    stem: "A 42-year-old man with no personal history of thrombosis is found to have protein C deficiency (activity 38%) during a routine pre-operative screen. Which of the following statements about the inheritance pattern and clinical management implications of this finding is most accurate?",
    options: {
      A: "Protein C deficiency is inherited in an autosomal dominant pattern with high penetrance; all patients require lifelong anticoagulation regardless of thrombotic history.",
      B: "Protein C deficiency is inherited in an autosomal recessive pattern; heterozygotes are asymptomatic and only homozygotes develop thrombosis.",
      C: "Protein C deficiency is inherited in an autosomal dominant pattern with variable penetrance; the lifetime risk of VTE in heterozygotes is approximately 50% with no history, but lifelong prophylaxis is not generally recommended in the asymptomatic.",
      D: "Protein C deficiency is inherited in an X-linked recessive pattern and therefore only males are clinically affected.",
      E: "Protein C deficiency is an acquired condition in almost all cases, caused by reduced hepatic synthesis in liver disease or increased consumption during DIC."
    },
    answer: "C",
    explanation: "Hoffbrand describes protein C deficiency as an autosomal dominant disorder with variable clinical penetrance. Heterozygotes typically have protein C levels around 50% of normal (range 40-60%) and have an estimated lifetime VTE risk of approximately 12-50%, depending on whether other risk factors coexist. Because the absolute risk in the absence of a personal thrombotic history is modest, lifelong anticoagulation is generally NOT recommended for asymptomatic heterozygotes; instead, short-term prophylaxis is provided during high-risk periods such as surgery, prolonged immobility, or pregnancy. Homozygous or compound heterozygous protein C deficiency presents in neonates with purpura fulminans and is a medical emergency requiring protein C replacement. The deficiency is NOT X-linked; both males and females are affected equally. While acquired protein C deficiency can occur in liver disease, sepsis, or DIC, the inherited form is the predominant cause in patients with a lifelong low level detected during screening."
  },
  {
    num: 49,
    stem: "Which of the following best explains why a negative D-dimer assay has a very high negative predictive value for acute venous thromboembolism in an ambulatory outpatient with a Wells score of 0, but a much lower negative predictive value in a postoperative patient with suspected DVT?",
    options: {
      A: "The D-dimer assay detects cross-linked fibrin degradation products, which are produced by fibrinolysis of a pre-existing thrombus; postoperative patients often have elevated D-dimer from surgical trauma and immobility, making the test less specific.",
      B: "Postoperative patients have impaired fibrinolytic reserve due to plasminogen activator inhibitor-1 (PAI-1) upregulation, so a thrombus may be present without generating sufficient D-dimer to trigger a positive result.",
      C: "D-dimer is degraded by neutrophil elastase in the postoperative state; therefore, a true thrombus may exist but D-dimer levels may be falsely low.",
      D: "The D-dimer assay uses monoclonal antibodies that are neutralised by alpha-2-macroglobulin, which rises after major surgery, causing false-negative results.",
      E: "Postoperative patients have hyperfibrinolysis due to tissue plasminogen activator (t-PA) release from endothelial injury; this causes D-dimer to rise in the absence of thrombosis, reducing sensitivity."
    },
    answer: "A",
    explanation: "Hoffbrand explains that D-dimer is a product of fibrin degradation generated by the fibrinolytic system when a thrombus is lysed. However, D-dimer is a non-specific marker of ANY fibrin turnover\u2014not just pathological thrombosis. Postoperative states, pregnancy, malignancy, advanced age, and infections all cause elevated D-dimer through non-thrombotic fibrin generation and clearance. Consequently, in a postoperative patient with a moderate or high pre-test probability for DVT, a negative D-dimer does NOT safely exclude thrombosis because the baseline D-dimer may already be elevated. In contrast, a low-risk ambulatory outpatient (Wells score = 0) is unlikely to have confounding elevations, so a negative D-dimer reliably excludes VTE with a negative predictive value \u003e99%. The specificity, not the sensitivity, is what falls in postoperative patients. The test does not rely on PAI-1 levels or t-PA activity for its analytical validity; the clinical problem is one of background noise elevating the signal above the usual cutoff threshold."
  },
  {
    num: 50,
    stem: "Which of the following pathophysiological mechanisms best explains the association between clonal haematopoiesis of indeterminate potential (CHIP) and an increased risk of cardiovascular disease, including myocardial infarction and stroke?",
    options: {
      A: "CHIP mutations in JAK2 and CALR cause erythrocytosis and thrombocytosis, leading directly to hyperviscosity and arterial occlusion.",
      B: "CHIP-derived macrophages with mutations in TET2 or DNMT3A exhibit enhanced NLRP3 inflammasome activation and IL-1beta secretion, promoting atherosclerotic plaque inflammation and thrombogenicity.",
      C: "CHIP causes accelerated telomere shortening in endothelial cells, leading to premature vascular senescence and spontaneous arterial thrombosis independent of atherosclerosis.",
      D: "CHIP mutations primarily affect megakaryocyte progenitors, causing increased platelet production and platelet hyperreactivity in the arterial circulation.",
      E: "CHIP mutants produce aberrant coagulation factor VIII with increased specific activity, creating a prothrombotic state in the arterial system analogous to that seen in antiphospholipid syndrome."
    },
    answer: "B",
    explanation: "Hoffbrand recognises clonal haematopoiesis of indeterminate potential (CHIP) as an age-related expansion of haematopoietic stem cells carrying somatic mutations in genes such as DNMT3A, TET2, and ASXL1. Beyond leukaemia risk, CHIP is increasingly associated with cardiovascular disease\u2014specifically myocardial infarction and stroke\u2014through a mechanistic pathway involving enhanced innate immune activation. Mutations in TET2 and DNMT3A impair epigenetic regulation of inflammatory genes in myeloid cells (monocytes and macrophages), leading to NLRP3 inflammasome activation, increased IL-1beta and IL-6 production, and accelerated atherosclerotic plaque progression and destabilisation. This inflammatory mechanism is distinct from traditional lipid-driven atherosclerosis and provides a biological rationale for why CHIP carriers have elevated cardiovascular risk independent of conventional risk factors. JAK2/CALR mutations are characteristic of myeloproliferative neoplasms, not CHIP broadly. Telomere shortening and aberrant factor VIII production are not described CHIP mechanisms. Platelet hyperreactivity may contribute but the dominant mechanistic link is macrophage-mediated inflammation."
  }
];
