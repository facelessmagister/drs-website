export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 261,
    stem: "A 68-year-old man presents with progressive lower back pain and lethargy. Laboratory investigations show: haemoglobin 82 g/L, creatinine 220 μmol/L, corrected calcium 3.1 mmol/L. Skeletal survey reveals multiple osteolytic lesions in the lumbar spine and skull. Serum protein electrophoresis demonstrates an IgG κ paraprotein of 58 g/L. Bone marrow aspirate shows 40% plasma cells with abnormal morphology. Which of the following is the most appropriate initial management strategy?",
    options: {
      A: "Immediate autologous stem cell transplantation because he has symptomatic myeloma with standard-risk cytogenetics.",
      B: "Begin Rd (lenalidomide and dexamethasone) because alkylating agents such as melphalan are first-line for transplant-ineligible patients.",
      C: "Initiate VRd (bortezomib, lenalidomide, dexamethasone) with the aim of reducing tumour burden followed by stem cell collection and autologous SCT, because he is under 70 years and transplant-eligible.",
      D: "Start maintenance lenalidomide monotherapy upfront because it is the standard induction for newly diagnosed myeloma.",
      E: "Administer zoledronic acid and observe because his disease is asymptomatic and does not yet require systemic therapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Fig. 22.10 and text), describes that for patients under approximately 70 years who are fit and transplant-eligible, intensive therapy with a three- or four-drug combination such as VRd (bortezomib, lenalidomide, dexamethasone) is the standard initial approach, followed by stem cell collection and autologous SCT. Immediate autologous SCT without induction is not standard. Rd is used for older, transplant-ineligible patients. Maintenance lenalidomide is given after induction and/or ASCT, not as upfront monotherapy. The patient clearly has symptomatic myeloma (CRAB features: hypercalcaemia, renal impairment, anaemia, bone disease), so observation is inappropriate."
  },
  {
    num: 262,
    stem: "A 72-year-old man is found incidentally to have an IgG λ paraprotein of 32 g/L on routine blood tests. He is asymptomatic. Bone marrow biopsy shows 18% plasma cells. Serum free light chain ratio is abnormal at 0.08. MRI of the spine reveals a single focal lytic lesion at L3. Full blood count, renal function, and calcium are normal. What is the most appropriate next step in management?",
    options: {
      A: "Treat immediately with VRd induction followed by autologous SCT because any bone lesion confirms symptomatic myeloma requiring urgent therapy.",
      B: "Treat as for symptomatic myeloma because the paraprotein exceeds 30 g/L and marrow plasma cells exceed 10%, both of which mandate immediate chemotherapy.",
      C: "Consider systemic therapy because he has high-risk smouldering myeloma with a focal lesion on MRI and an unbalanced free light chain ratio.",
      D: "Reassure and observe with 3–6 monthly follow-up because this meets criteria for MGUS and progression risk is only 1% per year.",
      E: "Begin maintenance lenalidomide because it prevents progression in all patients with smouldering myeloma regardless of risk stratification."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Table 22.2 and text), differentiates MGUS (<10% marrow plasma cells, <30 g/L paraprotein), smouldering myeloma (≥10% plasma cells, ≥30 g/L paraprotein, no CRAB), and symptomatic myeloma. This patient has smouldering myeloma. However, the annual risk of progression is ~10%, and risk is greatest with factors such as >60% plasma cells, greatly unbalanced FLC ratio, unfavourable cytogenetics, and more than one focal lesion on MRI. With a focal lesion and abnormal FLC ratio, he has high-risk smouldering myeloma, and treatment as for symptomatic myeloma should be considered as early therapy may improve outcome. Options A and B incorrectly state that any bone lesion or threshold values automatically mandate immediate therapy without considering the smouldering category. Option D incorrectly classifies this as MGUS. Option E is incorrect because maintenance lenalidomide is not given to all smouldering myeloma patients."
  },
  {
    num: 263,
    stem: "A 64-year-old woman with known IgA κ multiple myeloma presents acutely with confusion, visual disturbances, and mucosal bleeding. Examination reveals bilateral retinal venous engorgement with flame-shaped haemorrhages. Serum IgA paraprotein is 68 g/L. Haemoglobin is 92 g/L and blood film shows marked rouleaux formation. Which emergency intervention is most appropriate?",
    options: {
      A: "Emergency plasmapheresis to rapidly reduce serum paraprotein concentration and relieve hyperviscosity symptoms.",
      B: "Immediate whole brain radiotherapy because the confusion and visual symptoms are most likely due to meningeal myelomatosis.",
      C: "Emergency red cell transfusion because rouleaux formation indicates severe autoimmune haemolysis requiring urgent correction.",
      D: "Intravenous bortezomib bolus because proteasome inhibition rapidly reverses hyperviscosity by degrading existing paraprotein.",
      E: "Therapeutic venesection with isovolaemic replacement because this is the treatment of choice for hyperviscosity in all paraproteinaemias."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, text on hyperviscosity syndrome), states that hyperviscosity syndrome occurs in approximately 2% of myeloma cases and in Waldenström macroglobulinaemia, presenting with visual disturbances, lethargy, confusion, haemorrhages, and congestive heart failure. Emergency treatment includes correcting dehydration and performing plasmapheresis in myeloma and Waldenström disease to rapidly reduce paraprotein concentration. Whole brain radiotherapy is not indicated for hyperviscosity. Rouleaux formation is due to immunoglobulin coating of erythrocytes, not autoimmune haemolysis. Bortezomib does not act rapidly enough for emergency hyperviscosity management. Venesection is used for polycythaemia-associated hyperviscosity, not paraproteinaemia."
  },
  {
    num: 264,
    stem: "A 55-year-old woman presents with a pathological fracture of the right humerus. X-ray shows a solitary lytic lesion. Biopsy reveals sheets of CD138-positive plasma cells with monoclonal λ light chain restriction. Serum protein electrophoresis shows no paraprotein, urine immunofixation is negative for Bence–Jones protein, but serum free light chain assay demonstrates an abnormal κ:λ ratio of 0.05. Bone marrow aspirate shows 6% plasma cells. Skeletal survey and MRI spine reveal no other lesions. What is the most likely diagnosis and optimal management?",
    options: {
      A: "Multiple myeloma requiring immediate VRd induction and autologous SCT because pathological fracture mandates intensive systemic therapy.",
      B: "Solitary plasmacytoma of bone treated with radiotherapy to the primary lesion, with close surveillance for progression to myeloma.",
      C: "MGUS requiring observation only because the marrow plasma cell percentage is below 10% and there is no paraprotein.",
      D: "Osteosclerotic myeloma (POEMS syndrome) because a solitary bone lesion with plasma cells is pathognomonic for this variant.",
      E: "AL amyloidosis because non-secretory plasma cell proliferation is most commonly associated with systemic amyloid deposition."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22), describes solitary plasmacytoma of bone as an isolated plasma cell neoplasm arising from underlying bone marrow, usually with an associated paraprotein that disappears following radiotherapy. Many but not all patients will eventually develop myeloma. In this case, the solitary lesion with plasma cells, abnormal FLC ratio, but absence of other lesions and no systemic CRAB features, is consistent with solitary plasmacytoma. Immediate systemic therapy for myeloma is not indicated without evidence of disseminated disease or symptomatic myeloma criteria. MGUS does not present with pathological fractures or solitary osteolytic lesions. POEMS syndrome is characterized by osteosclerotic (not osteolytic) lesions, polyneuropathy, organomegaly, endocrinopathy, and skin changes. AL amyloidosis is a separate entity, though related to plasma cell dyscrasias."
  },
  {
    num: 265,
    stem: "A 49-year-old man presents with progressive bilateral lower limb weakness and numbness, splenomegaly, hypothyroidism, and hyperpigmentation. Plain radiographs reveal multiple osteosclerotic bone lesions in the pelvis and spine. Serum vascular endothelial growth factor (VEGF) is markedly elevated. Serum protein electrophoresis shows an IgG λ paraprotein of 12 g/L. Bone marrow shows 8% plasma cells. Which of the following statements regarding his condition and management is most accurate?",
    options: {
      A: "He has POEMS syndrome and should receive treatment similar to that for multiple myeloma, with radiotherapy to osteosclerotic lesions if symptomatic.",
      B: "He has smouldering myeloma and should be observed because the paraprotein is below 30 g/L and there are no CRAB features.",
      C: "He has Waldenström macroglobulinaemia and requires emergency plasmapheresis followed by DRC chemotherapy.",
      D: "He has solitary plasmacytoma and requires surgical excision of the osteosclerotic lesions only.",
      E: "He has MGUS and the paraprotein is responsible for the neuropathy via direct antibody-mediated nerve damage, so observation is appropriate."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22), describes osteosclerotic myeloma and POEMS (polyneuropathy, organomegaly, endocrinopathy, monoclonal protein, skin changes) syndrome as a rare condition associated with a monoclonal plasma cell disorder and osteosclerotic bone lesions, with elevated VEGF levels. Treatment is similar to that described for myeloma. Smouldering myeloma does not explain the polyneuropathy, organomegaly, endocrinopathy, or osteosclerotic lesions. Waldenström macroglobulinaemia presents with IgM paraprotein and lymphoplasmacytic infiltrate, not osteosclerotic lesions. Solitary plasmacytoma presents with a single isolated lesion, not multiple osteosclerotic lesions with systemic features. MGUS is incorrect because the constellation of symptoms and osteosclerotic lesions indicates a specific plasma cell neoplasm requiring treatment."
  },
  {
    num: 266,
    stem: "Regarding the molecular pathogenesis of multiple myeloma, which statement most accurately integrates the early and late genetic events described in Hoffbrand's Essential Haematology, 9th Edition?",
    options: {
      A: "The t(11;14) translocation involving CCND1 and IGH is associated with a poor prognosis and is considered a late-stage genetic event in disease progression.",
      B: "Dysregulated expression of cyclin D1, D2, or D3 is an early unifying event, whereas secondary translocations of MYC, point mutations of RAS or TP53, and del(17p) represent later genetic events.",
      C: "TP53 mutations and del(17p) are early initiating events found in MGUS, whereas IGH translocations occur only in advanced symptomatic myeloma.",
      D: "Almost all cases of myeloma arise de novo without a pre-existing monoclonal gammopathy, and the median number of somatic mutations is lower than in acute leukaemias.",
      E: "Aneuploidy is rare in myeloma, and the presence of odd-numbered chromosome gains or losses is associated with a favourable prognosis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Pathogenesis section), states that myeloma neoplastic cells contain an average of 35 somatic mutations at diagnosis, more than the median for leukaemias. Almost all cases develop from a pre-existing MGUS. Early genetic changes include dysregulated or increased expression of cyclin D1, D2, or D3 genes, either directly through translocations involving the IGH gene on chromosome 14q or indirectly via mutations. This is described as an early unifying genetic event. Later genetic events include secondary translocations of MYC, point mutations of RAS or TP53, deletions such as del(17p), and epigenetic abnormalities. The t(11;14) is prognostically neutral, not poor risk. TP53 abnormalities are more common in late-stage disease, not MGUS. Aneuploidy is almost universal in myeloma."
  },
  {
    num: 267,
    stem: "Which of the following best describes the Revised International Staging System (R-ISS) for multiple myeloma and its prognostic implications?",
    options: {
      A: "R-ISS stage I requires ISS stage I, standard-risk cytogenetics by iFISH, and normal lactate dehydrogenase (LDH); median overall survival exceeds 10 years.",
      B: "R-ISS stage III is defined solely by serum β2-microglobulin >5.5 mg/L regardless of serum albumin, chromosome abnormalities, or LDH levels.",
      C: "Standard-risk cytogenetics includes t(4;14), t(14;16), and del(17p), whereas high-risk cytogenetics includes t(11;14) and trisomies.",
      D: "Serum albumin ≥35 g/L and β2-microglobulin <3.5 mg/L automatically classify a patient as R-ISS stage I even if high-risk cytogenetics are present.",
      E: "R-ISS stage II encompasses all patients with elevated LDH regardless of ISS stage or cytogenetic risk category."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Table 22.4), presents the R-ISS. R-ISS stage I requires ISS stage I (serum β2-microglobulin <3.5 mg/L and serum albumin ≥35 g/L), standard-risk cytogenetics by iFISH (absence of del(17p), del(1p), 1q gains, t(4;14), t(14;16)), and normal LDH. In a series of 3060 patients, median overall survival for R-ISS I was not yet reached at >10 years. R-ISS stage III requires ISS stage III AND either high-risk cytogenetics OR elevated LDH. Option B incorrectly states that ISS stage III alone defines R-ISS III. Option C reverses the risk categories: t(4;14), t(14;16), and del(17p) are high-risk, whereas t(11;14) is standard-risk. Option D is incorrect because high-risk cytogenetics would preclude R-ISS I classification. Option E is incorrect because elevated LDH alone does not define R-ISS II."
  },
  {
    num: 268,
    stem: "Regarding the serum free light chain (FLC) assay and its interpretation in plasma cell neoplasms, which statement is most accurate?",
    options: {
      A: "In multiple myeloma, the κ:λ serum free light chain ratio is typically skewed with an excess of either κ or λ chains, whereas in renal impairment the ratio remains close to normal despite elevated absolute FLC levels.",
      B: "Free light chains are not produced by malignant plasma cells and therefore the FLC assay is only useful for monitoring MGUS, not myeloma.",
      C: "Bence–Jones proteinuria occurs in fewer than 10% of myeloma cases because most intact immunoglobulin molecules are too large to be filtered by the glomerulus.",
      D: "Non-secretory myeloma is characterized by a normal serum free light chain ratio and the absence of any detectable paraprotein or urinary light chains.",
      E: "The normal κ:λ serum free light chain ratio is approximately 2:1, and a ratio below 0.5 definitively excludes a diagnosis of myeloma."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Laboratory diagnosis section), states that free light chains are produced by almost all malignant plasma cells. Typically in myeloma there is an increase in either κ or λ serum free light chain value, skewing the normal κ:λ ratio of 0.6 (range 0.26–1.65). Since free light chains are excreted by the kidney, their total plasma levels increase in renal insufficiency, but the ratio in the absence of a plasma cell neoplasm will usually remain close to normal. Bence–Jones proteinuria occurs in two-thirds of cases. Non-secretory myeloma lacks paraprotein and Bence–Jones proteinuria in serum and urine, but some cases still show a disturbed free light chain ratio in the serum. The normal ratio is not 2:1."
  },
  {
    num: 269,
    stem: "Which statement best integrates the mechanisms of action and clinical application of contemporary anti-myeloma therapies?",
    options: {
      A: "Bortezomib inhibits the proteasome and NF-κB activation; lenalidomide increases ubiquitin-mediated proteasome degradation of Ikaros family zinc finger proteins; and daratumumab is a monoclonal antibody targeting CD38 on plasma cells.",
      B: "Bortezomib is an immunomodulatory agent that targets cereblon, whereas lenalidomide is a proteasome inhibitor that prevents NF-κB activation.",
      C: "Daratumumab binds to BCMA on plasma cells and is classified as a bispecific antibody rather than a monoclonal antibody.",
      D: "Thalidomide and lenalidomide increase plasma cell survival by stabilizing Ikaros family transcription factors, which is why they are effective in myeloma.",
      E: "CAR-T cell therapy in myeloma targets the CD19 antigen expressed on malignant plasma cells and is currently used exclusively in first-line treatment."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, Table 22.5 and text), describes bortezomib as inhibiting the cellular proteasome and NF-κB activation. Lenalidomide, an analogue of thalidomide, increases ubiquitin-mediated proteasome degradation of Ikaros family zinc finger proteins that are important survival factors for plasma cells. Daratumumab is a monoclonal antibody targeting CD38. Belantamab mafadotin targets BCMA. CAR-T cells in myeloma target BCMA or other plasma cell antigens, not CD19, and are used in relapsed/refractory disease or clinical trials, not exclusively first-line. Thalidomide and lenalidomide degrade, not stabilize, Ikaros proteins."
  },
  {
    num: 270,
    stem: "Regarding the pathophysiology of bone disease in multiple myeloma and its pharmacological management, which statement is most accurate?",
    options: {
      A: "Osteolytic lesions result from osteoclast activation driven by RANKL produced by plasma cells and stroma, and serum alkaline phosphatase is typically elevated due to compensatory osteoblastic activity.",
      B: "Bisphosphonates reduce osteoclast-mediated bone resorption and may improve overall survival; denosumab, a RANKL inhibitor, is a useful alternative in patients with renal insufficiency.",
      C: "The osteolytic lesions of myeloma are characterized by vigorous osteoblastic sclerosis surrounding the lytic areas, which distinguishes them from metastatic bone lesions.",
      D: "Hypercalcaemia in myeloma is caused primarily by ectopic parathyroid hormone production by malignant plasma cells, and bisphosphonates are contraindicated in renal impairment.",
      E: "Pathological fractures in myeloma heal rapidly with callus formation because osteoblast function is preserved; therefore, prophylactic surgical fixation is rarely needed."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 22, text on pathogenesis and supportive care), explains that osteolytic lesions are caused by osteoclast activation resulting from high serum levels of RANKL, produced by plasma cells and bone marrow stroma, which binds to activating RANK receptors on osteoclast surfaces. Bisphosphonates such as pamidronate and zoledronic acid are effective in reducing progression of bone disease and may improve overall survival. Denosumab, a RANKL inhibitor, may be useful in patients who cannot tolerate bisphosphonates due to renal insufficiency. Serum alkaline phosphatase is typically normal in myeloma except following pathological fractures, because there is little osteoblastic reaction. There is no surrounding osteoblastic sclerosis—this is a distinguishing feature. Hypercalcaemia is caused by bone resorption, not PTH production. Osteoblast function is suppressed, so fractures heal poorly."
  }
];
