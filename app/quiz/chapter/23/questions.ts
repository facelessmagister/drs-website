export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 271,
    stem: "A 62-year-old man presents with exertional dyspnoea and peripheral oedema. ECG shows low voltage complexes. Echocardiography reveals concentric left ventricular hypertrophy (mean wall thickness 14 mm) with reduced longitudinal strain. NT-proBNP is 1800 pg/mL and troponin T is 0.06 ng/mL. Serum free light chain ratio is abnormal at 0.04. Abdominal fat biopsy shows Congo red-positive deposits with apple-green birefringence. 99mTc-DPD scan shows no cardiac uptake. Which statement best describes the diagnosis and immediate management?",
    options: {
      A: "wATTR amyloidosis — start tafamidis because a negative DPD scan excludes AL cardiac amyloidosis and confirms transthyretin deposition.",
      B: "AL amyloidosis with cardiac involvement — initiate Dara-CyBorD because the clonal light chain deposition is the primary pathology.",
      C: "Systemic AA amyloidosis — treat the underlying inflammatory disease to reduce serum amyloid A protein.",
      D: "LECT2 amyloidosis — manage supportively with eventual renal transplantation.",
      E: "Localized AL amyloidosis — observe conservatively because localized disease rarely progresses to systemic involvement."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23, Fig. 23.4 and text), describes AL amyloidosis as caused by monoclonal light chains from a clonal plasma cell proliferation. The abnormal serum free light chain ratio points to a plasma cell dyscrasia. Cardiac involvement is present in more than 70% of AL amyloidosis patients, and echocardiography typically shows symmetric left ventricular hypertrophy with reduced longitudinal strain. The 99mTc-DPD scan helps differentiate AL from wATTR amyloidosis: a negative DPD scan does not rule out cardiac amyloidosis but makes wATTR less likely. The preferred treatment for AL amyloidosis is Dara-CyBorD (daratumumab-cyclophosphamide/bortezomib/dexamethasone). Tafamidis is used for wATTR. Systemic AA amyloidosis is associated with chronic inflammation and would not demonstrate a monoclonal light chain abnormality. LECT2 amyloidosis presents with predominant renal involvement. Localized AL amyloidosis does not explain the systemic cardiac and renal findings."
  },
  {
    num: 272,
    stem: "A 58-year-old woman presents with fatigue, anorexia, and bilateral ankle swelling. Urinalysis demonstrates proteinuria of 4.2 g/24 h. Physical examination reveals a firm, enlarged tongue with nodular waxy deposits and bilateral carpal tunnel syndrome. Serum protein electrophoresis shows a faint IgG λ band, and bone marrow shows 7% clonal plasma cells. Which of the following is the most appropriate next investigation to confirm the diagnosis and plan treatment?",
    options: {
      A: "Brain MRI to evaluate for intracerebral amyloid plaques as the cause of macroglossia.",
      B: "Serum amyloid P (SAP) component scan to determine the extent of organ involvement and monitor treatment response.",
      C: "Endomyocardial biopsy because tongue involvement is pathognomonic for cardiac AL amyloidosis and mandates tissue confirmation.",
      D: "Genetic testing for TTR mutations because carpal tunnel syndrome is characteristic of hereditary ATTR amyloidosis.",
      E: "Rectal biopsy because abdominal fat biopsy has insufficient sensitivity in patients with renal involvement."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), describes the SAP scan as a specialized technique available in major centres to determine the extent and severity of amyloid deposition in organs and to monitor treatment response. The patient has classic features of systemic AL amyloidosis: nephrotic syndrome, macroglossia, peripheral neuropathy, and a clonal plasma cell proliferation. While cardiac assessment with biomarkers and echocardiography is important, endomyocardial biopsy is not required if non-cardiac tissue confirms AL amyloidosis. Brain MRI is not indicated because intracerebral amyloid plaques in Alzheimer's disease are unrelated to systemic AL amyloidosis. Carpal tunnel syndrome occurs in both AL and wATTR amyloidosis and is not pathognomonic for hereditary ATTR. Abdominal fat biopsy is the usual first-line histological test and has good sensitivity; rectal biopsy is not preferred."
  },
  {
    num: 273,
    stem: "A 45-year-old woman with a 20-year history of poorly controlled rheumatoid arthritis presents with gradually worsening renal function (creatinine 220 μmol/L) and nephrotic-range proteinuria (3.8 g/24 h). Serum amyloid A protein is elevated at 850 mg/L. Cardiac biomarkers are normal. She has no monoclonal protein on serum electrophoresis and a normal serum free light chain ratio. Fat biopsy shows Congo red-positive deposits. Which is the most appropriate treatment strategy?",
    options: {
      A: "High-dose melphalan and autologous stem cell transplantation because ASCT improves survival in all systemic amyloidosis types.",
      B: "Initiate daratumumab-cyclophosphamide-bortezomib-dexamethasone because proteasome inhibitors clear amyloid deposits regardless of fibril type.",
      C: "Aggressive treatment of the underlying inflammatory disease to normalize serum amyloid A protein and prevent further deposition.",
      D: "Tafamidis because transthyretin stabilization improves prognosis in all forms of cardiac amyloidosis.",
      E: "Patisiran because small interfering RNA therapy prevents amyloid deposition regardless of fibril protein type."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), describes systemic AA amyloidosis as occurring in patients with sustained elevated serum amyloid A (SAA) protein due to chronic inflammatory diseases such as rheumatoid arthritis. Treatment is aimed at the underlying inflammatory disease to bring serum AA protein to normal (less than 10 mg/L), which prevents further amyloid deposition and allows slow clearance. High-dose melphalan and ASCT are used for AL amyloidosis, not AA. Daratumumab-based regimens target clonal plasma cells in AL amyloidosis and are irrelevant in AA amyloidosis where there is no clonal plasma cell proliferation. Tafamidis stabilizes transthyretin in wATTR and hereditary ATTR, not AA amyloidosis. Patisiran targets TTR gene expression in hereditary ATTR amyloidosis."
  },
  {
    num: 274,
    stem: "A 78-year-old man presents with progressive exertional dyspnoea over 18 months. Echocardiography shows left ventricular hypertrophy with preserved ejection fraction and reduced longitudinal strain. He has a history of bilateral carpal tunnel surgery 5 years ago and recently ruptured his left biceps tendon. Serum free light chain ratio is normal. Serum protein electrophoresis shows no monoclonal protein. 99mTc-DPD scintigraphy shows grade 3 cardiac uptake. Genetic testing is negative for TTR mutations. What is the most likely diagnosis and appropriate treatment?",
    options: {
      A: "AL amyloidosis — initiate Dara-CyBorD because DPD uptake can occasionally be positive in AL amyloidosis.",
      B: "Systemic AA amyloidosis — treat underlying chronic inflammation because this is the most common cause in older adults.",
      C: "Wild-type transthyretin (wATTR) amyloidosis — tafamidis stabilizes the TTR molecule and improves prognosis.",
      D: "LECT2 amyloidosis — manage supportively because this is the third most common systemic amyloidosis in the elderly.",
      E: "Hereditary TTR amyloidosis — start patisiran because genetic testing for TTR mutations may be falsely negative in late-onset disease."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), describes wild-type transthyretin (wATTR) amyloidosis as the most frequent cause of systemic amyloidosis in older adults, especially men. It presents as heart failure with preserved ejection fraction, carpal tunnel syndrome, spinal canal stenosis, or biceps tendon rupture. A positive DPD/PYP scan with grade 2 or 3 uptake strongly suggests ATTR amyloidosis. With normal light chains, no monoclonal protein, and negative TTR gene mutations, the diagnosis is wATTR. Tafamidis stabilizes the TTR molecule and improves prognosis. AL amyloidosis would have an abnormal free light chain ratio or monoclonal protein. AA amyloidosis is increasingly rare in Western countries and presents with renal dysfunction. LECT2 amyloidosis predominantly causes renal failure. Hereditary TTR requires a TTR gene mutation."
  },
  {
    num: 275,
    stem: "A 52-year-old man of Portuguese descent presents with a 3-year history of progressive numbness and burning pain in his feet, orthostatic hypotension, and diarrhoea. Examination reveals stocking-glove sensory loss and absent ankle reflexes. His father had similar symptoms before dying of cardiac failure. Echocardiography shows mild left ventricular hypertrophy. Serum free light chain ratio is normal. Nerve conduction studies confirm a length-dependent axonal polyneuropathy. Genetic testing reveals a Val30Met mutation in the TTR gene. What is the most appropriate disease-modifying therapy?",
    options: {
      A: "High-dose melphalan and autologous stem cell transplantation because ASCT improves survival in all forms of systemic amyloidosis.",
      B: "Daratumumab-based chemotherapy because the Val30Met mutation increases clonal light chain production.",
      C: "Patisiran or inotersen because these agents reduce TTR protein synthesis.",
      D: "Tafamidis because it is the only approved therapy for all ATTR amyloidosis variants regardless of mutation status.",
      E: "Lenalidomide and dexamethasone because immunomodulatory agents suppress the inflammatory neuropathy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), describes hereditary systemic amyloidosis caused by TTR gene mutations as presenting with progressive peripheral and autonomic neuropathy, often with cardiac and vitreous involvement. Treatment is with a small interfering RNA (patisiran) or an anti-sense oligonucleotide (inotersen), which reduce TTR protein synthesis. ASCT and daratumumab-based regimens are used for AL amyloidosis, not hereditary ATTR. Tafamidis stabilizes the TTR tetramer and is used in wATTR and some hereditary forms, but patisiran and inotersen are specifically disease-modifying by reducing hepatic TTR synthesis. Lenalidomide is an immunomodulatory drug used in plasma cell neoplasms, not neuropathy from ATTR amyloidosis."
  },
  {
    num: 276,
    stem: "Regarding the classification and molecular composition of amyloid fibrils, which statement is most accurate?",
    options: {
      A: "All amyloid deposits, regardless of protein type, contain the non-fibrillary glycoprotein serum amyloid P component and identical glycosaminoglycan moieties.",
      B: "AL amyloid is derived from intact immunoglobulin heavy chains, whereas AA amyloid is derived from the acute-phase reactant serum amyloid A protein.",
      C: "The pattern of organ involvement is identical across all systemic amyloidosis subtypes, with the kidney and liver being universally affected in every case.",
      D: "Over 30 different proteins can form amyloid fibrils, and the pattern of organ distribution varies with the fibril type and even within the same type.",
      E: "Systemic amyloidosis is always hereditary when associated with transthyretin, and always acquired when associated with immunoglobulin light chains."
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23, Table 23.1 and text), states that amyloid may be formed by over 30 proteins and the pattern of organ distribution varies with the different fibril types and even within the same type. Serum amyloid P component is present in almost all amyloid deposits except intracerebral plaques. AL amyloid is derived from immunoglobulin light chains, not heavy chains. Organ involvement varies: AL affects kidney, heart, nerves, liver and soft tissues; AA affects kidney and liver; wATTR affects heart and connective tissues. Transthyretin amyloidosis can be hereditary (mutated TTR) or acquired (wild-type), and AL amyloidosis is always acquired."
  },
  {
    num: 277,
    stem: "Regarding the diagnostic workup of suspected systemic amyloidosis, which statement most accurately reflects the approach described in Hoffbrand's Essential Haematology, 9th Edition?",
    options: {
      A: "Congo red staining viewed under standard light microscopy is the gold standard because it reliably differentiates amyloid from other extracellular pink deposits.",
      B: "Abdominal fat biopsy is the usual first-line histological test; the deposits show apple-green birefringence under polarized light after Congo red staining, and SAP scanning determines organ involvement and monitors treatment.",
      C: "99mTc-DPD scintigraphy is diagnostic of AL amyloidosis when positive because DPD binds specifically to immunoglobulin light chain fibrils.",
      D: "Endomyocardial biopsy is mandatory in all patients with suspected cardiac amyloidosis because non-cardiac tissue biopsies are insensitive for detecting cardiac involvement.",
      E: "Fibril typing is unnecessary in elderly patients because monoclonal gammopathy is common in this age group and is always the cause of systemic amyloidosis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23, Fig. 23.4 and text), describes the classic diagnostic test as apple-green birefringence after Congo red staining viewed under polarized light. Abdominal fat and/or bone marrow biopsy are the usual first-line histological tests. SAP scanning is used in major centres to determine organ involvement and monitor treatment. Congo red under standard light shows amorphous pink material and does not reliably differentiate amyloid. DPD scintigraphy helps differentiate AL from wATTR amyloidosis (positive uptake suggests ATTR), but a negative scan does not rule out cardiac amyloidosis. Endomyocardial biopsy is rarely needed if non-cardiac tissue confirms amyloid and cardiac biomarkers are supportive. Fibril typing is essential in elderly patients to distinguish incidental monoclonal gammopathy from true AL amyloidosis, as monoclonal gammopathy may be present without causing amyloidosis."
  },
  {
    num: 278,
    stem: "Regarding the Mayo prognostic staging system for AL amyloidosis, which statement is most accurate?",
    options: {
      A: "Stage 0 is defined by abnormal NT-proBNP, elevated troponin, and an increased difference between involved and uninvolved free light chains.",
      B: "Stage III requires only one of the three biomarkers to be abnormal, and median survival is greater than 5 years with modern therapy.",
      C: "Stage IV carries the poorest prognosis, with all three biomarkers abnormal; survival has improved to a median over 5 years with proteasome inhibitors, lenalidomide, and daratumumab.",
      D: "The staging system relies solely on the serum β2-microglobulin level and serum albumin, similar to the ISS for multiple myeloma.",
      E: "Cardiac troponin is not included in the staging system because cardiac involvement is rarely the dominant cause of death in AL amyloidosis."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), describes four Mayo prognostic stages based on NT-proBNP, cardiac troponin, and the difference between involved and uninvolved free light chains (dFLC). Stage 0 has none of these abnormal. Stage IV has all three abnormal and carries the poorest prognosis. Survival has improved to a median over 5 years with the introduction of proteasome inhibitors, lenalidomide, and daratumumab into therapeutic protocols. Option A reverses the definition of Stage 0. Option B is incorrect because Stage III requires more than one abnormality. Option D confuses the R-ISS for myeloma with the Mayo staging for amyloidosis. Option E is incorrect because cardiac amyloid is the most frequent dominant cause of morbidity and death in AL amyloidosis."
  },
  {
    num: 279,
    stem: "Regarding contemporary treatment strategies for systemic AL amyloidosis, which statement best integrates the principles described in Hoffbrand's Essential Haematology, 9th Edition?",
    options: {
      A: "Autologous stem cell transplantation is appropriate first-line therapy for all newly diagnosed AL amyloidosis patients because it offers the highest response rates.",
      B: "Dara-CyBorD is the preferred induction regimen; ASCT is reserved for younger fit patients with limited end-organ damage who achieve good responses or have more than 10% marrow plasma cells.",
      C: "Bortezomib is universally contraindicated in all patients with peripheral neuropathy because it inevitably worsens amyloid-related nerve damage beyond recovery.",
      D: "Venetoclax is the preferred first-line agent for all AL amyloidosis patients, particularly those with t(11;14), because it has the highest reported complete remission rates.",
      E: "Birtamimab is a proteasome inhibitor that degrades toxic light chain aggregates and is used as first-line induction therapy in stage IV disease."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23, Fig. 23.5 and text), states that Dara-CyBorD (daratumumab-cyclophosphamide/bortezomib/dexamethasone) is the preferred induction regimen for AL amyloidosis, having the highest reported response rates. ASCT improves survival in selected younger patients with little end-organ damage or those who achieve this with initial therapy, typically selected by marrow plasma cell infiltration greater than 10% or failure to achieve CR on first-line chemotherapy. Bortezomib should be omitted in patients with peripheral neuropathy, but substituted with daratumumab and/or lenalidomide-dexamethasone; it is not universally contraindicated in all patients. Venetoclax may be tried especially in those with t(11;14), but it is not the preferred first-line agent. Birtamimab is a humanized monoclonal antibody that neutralizes circulating soluble toxic light chain aggregates, not a proteasome inhibitor."
  },
  {
    num: 280,
    stem: "Which statement most accurately integrates the mechanisms underlying wild-type transthyretin (wATTR) and hereditary transthyretin (ATTRv) amyloidosis?",
    options: {
      A: "wATTR results from normal concentration over a prolonged period of a normal protein with an amyloid tendency, whereas hereditary ATTRv results from an acquired or inherited abnormal protein variant with enhanced amyloidogenicity.",
      B: "wATTR is caused by an acute-phase reactant deposited in response to chronic inflammation, whereas ATTRv is caused by transthyretin mutations that occur de novo in each generation.",
      C: "Both wATTR and ATTRv are caused by mutations in the TTR gene; wATTR represents incomplete penetrance of a mild mutation, while ATTRv represents complete penetrance of a severe mutation.",
      D: "wATTR deposits occur exclusively in the myocardium, whereas ATTRv deposits are restricted to peripheral nerves and never involve the heart.",
      E: "Tafamidis prevents wATTR by inhibiting TTR gene transcription, whereas patisiran acts by stabilizing the transthyretin tetramer."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 23), categorizes the causes of systemic amyloidosis into three groups: (1) sustained high concentration of a normal protein, (2) normal concentration over a prolonged period of a normal protein with an amyloid tendency, and (3) acquired or inherited abnormal proteins. wATTR is an example of group 2: normal TTR protein deposited over time in older adults. Hereditary ATTRv is an example of group 3: mutated TTR with enhanced fibril-forming tendency. Option B incorrectly attributes wATTR to an acute-phase reactant. Option C is incorrect because wATTR is not caused by TTR mutations. Option D is incorrect because both can involve heart and nerves. Option E reverses the mechanisms: tafamidis stabilizes the TTR tetramer, while patisiran reduces TTR synthesis via RNA interference."
  }
];
