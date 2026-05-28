export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 251,
    stem: "A 58-year-old man with diffuse large B-cell lymphoma, non-GCB subtype, achieved a complete metabolic response after 6 cycles of R-CHOP. Eight months later he presents with rapidly enlarging cervical lymphadenopathy and PET-CT confirms disease relapse. His ECOG performance status is 0 and organ function is normal. CAR-T cell therapy is available at his centre. Which of the following represents the most appropriate next step in management?",
    options: {
      A: "Immediate salvage chemotherapy with R-ICE for 2 cycles with the aim of proceeding to autologous stem cell transplantation, as this remains the standard of care for all relapsed DLBCL regardless of time to relapse.",
      B: "Proceed directly to second-line anti-CD19 CAR-T cell therapy (e.g., axicabtagene ciloleucel), as randomized data suggest this is superior to autologous stem cell transplantation for patients relapsing within 12 months of first-line treatment.",
      C: "Initiate R-miniCHOP because the patient is now considered elderly and frail at 58 years, and reduced-intensity immunochemotherapy is preferred for relapsed disease.",
      D: "Begin maintenance rituximab monotherapy to prolong the duration of second remission, as maintenance has been shown to improve overall survival in relapsed DLBCL.",
      E: "Administer radiotherapy alone to the cervical nodal mass because involved-field radiotherapy is curative for isolated nodal relapse in DLBCL."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21, Fig. 21.6), outlines the algorithm for treatment of relapsed DLBCL. Where second-line CAR-T cell therapy is available, a randomized trial suggests this is the optimal approach compared with autologous stem cell transplantation (ASCT) for those who are primary refractory or relapse within 1 year of first-line treatment. For patients relapsing after 12 months, conventional salvage chemotherapy such as R-ICE with the aim of proceeding to ASCT may be appropriate. This patient relapsed at 8 months and is fit (ECOG 0), making CAR-T the evidence-based optimal choice. R-miniCHOP is for frail elderly patients. Maintenance rituximab is not standard in relapsed DLBCL and does not improve overall survival in this setting. Radiotherapy alone is inadequate for systemic relapse."
  },
  {
    num: 252,
    stem: "A 58-year-old man presents with marked splenomegaly, pancytopenia, and circulating atypical lymphocytes. Bone marrow biopsy shows diffuse infiltration by small lymphoid cells with irregular nuclei. Flow cytometry demonstrates CD5+, CD19+, CD20+, CD22+, CD23-, FMC7+, and strong nuclear cyclin D1 expression. Karyotype reveals t(11;14)(q13;q32). He has symptomatic disease with a rapidly enlarging abdominal mass and ECOG performance status 0. Which treatment strategy is most appropriate?",
    options: {
      A: "Watch and wait because mantle cell lymphoma is an indolent low-grade lymphoma that can be safely observed for years without systemic therapy.",
      B: "High-dose cytarabine-containing regimen (e.g., R-DHAP) followed by autologous stem cell transplantation in first remission, because he is fit and this approach offers the best chance of durable remission.",
      C: "Anti-CD20 antibody monotherapy with rituximab alone, because combination chemotherapy is too toxic for patients presenting with pancytopenia.",
      D: "Immediate allogeneic stem cell transplantation because t(11;14) is associated with universally aggressive disease and only allografting can achieve cure.",
      E: "Oral chlorambucil because this is the standard frontline therapy for all patients with mantle cell lymphoma regardless of age or fitness."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21, Fig. 21.14 and text), describes the treatment algorithm for mantle cell lymphoma (MCL). For patients with asymptomatic disease, 'watch and wait' is reasonable. When requiring treatment, fitter patients receive a high-dose cytarabine protocol such as R-DHAP or the Nordic regimen; such patients are normally considered for autologous stem cell transplantation (ASCT) in first remission followed by maintenance rituximab. For older or less fit patients, rituximab combined with CHOP, bendamustine, or bendamustine with cytarabine (BAC) is used. Allogeneic SCT is usually reserved for patients relapsing after CAR-T cell therapy. Rituximab monotherapy and chlorambucil are not standard for fit patients with symptomatic MCL. Pancytopenia in this context is due to marrow infiltration by lymphoma and should improve with effective treatment."
  },
  {
    num: 253,
    stem: "A 71-year-old man presents with fatigue, blurred vision, and headaches. Examination shows engorged retinal veins with retinal haemorrhages. Serum IgM paraprotein is 45 g/L. Bone marrow shows lymphoplasmacytoid infiltrate. MYD88 mutation is detected. He is frail with significant comorbidities. Which is the most appropriate initial management?",
    options: {
      A: "Emergency plasmapheresis followed by dexamethasone, rituximab, and cyclophosphamide (DRC) because symptomatic hyperviscosity requires urgent intervention and DRC is suitable for older, frailer patients.",
      B: "High-dose cytarabine and autologous stem cell transplantation because this is the standard curative approach for Waldenstrom macroglobulinaemia.",
      C: "Immediate bortezomib-based therapy because BTK inhibitors are contraindicated in MYD88-mutated disease.",
      D: "Bendamustine plus rituximab because this is first-line for all patients regardless of fitness or urgency of symptoms.",
      E: "Observation alone because asymptomatic Waldenstrom macroglobulinaemia does not require treatment until IgM exceeds 60 g/L."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21, Fig. 21.17 and text), states that acute hyperviscosity syndrome is treated with repeated plasmapheresis until the underlying disease can be brought under control. The patient has symptomatic hyperviscosity (visual disturbance, retinal changes, headaches, IgM 45 g/L). For older, frailer patients, DRC (dexamethasone, rituximab, cyclophosphamide) or chlorambucil are suitable first-line options. MYD88 mutation is present in nearly all cases of Waldenstrom macroglobulinaemia and does not contraindicate BTK inhibitors; in fact, BTK inhibitors such as ibrutinib are effective in relapsed disease. Autologous stem cell transplantation is contentious in the era of targeted agents. Bendamustine combinations are often used for fit patients. Observation is inappropriate because the patient is symptomatic."
  },
  {
    num: 254,
    stem: "A 9-year-old boy from East Africa presents with massive bilateral jaw swelling and loosening of teeth. CT confirms a destructive mandibular mass with cervical lymphadenopathy. Biopsy shows sheets of medium-sized lymphoid cells with a starry sky appearance, and the Ki-67 proliferative index exceeds 95%. Which association and treatment regimen is most appropriate?",
    options: {
      A: "EBV infection is present in virtually all endemic cases; treatment is with R-CODOX-M/R-IVAC or DA-EPOCH-R including intrathecal chemotherapy.",
      B: "H. pylori infection is the causative agent; eradication therapy alone is curative for early-stage disease.",
      C: "The t(14;18) translocation involving BCL2 is characteristic; treatment is with R-CHOP for 6 cycles.",
      D: "HTLV-1 infection is present in 100% of cases; treatment is with zidovudine and interferon-alpha.",
      E: "CD30 positivity is universal; brentuximab vedotin combined with CHP is the regimen of choice."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), describes endemic Burkitt lymphoma as occurring in areas with chronic malaria exposure and being associated with Epstein-Barr virus (EBV) infection in virtually all cases. The histological starry sky appearance and Ki-67 proliferative index exceeding 95% are characteristic. Treatment requires aggressive immunochemotherapy with regimens such as R-CODOX-M/R-IVAC or DA-EPOCH-R, which incorporate high-dose methotrexate, cytarabine, and cyclophosphamide with rituximab. Intrathecal chemotherapy is also given. H. pylori causes gastric MALT lymphoma. The t(14;18) is characteristic of follicular lymphoma. HTLV-1 causes adult T-cell leukaemia/lymphoma. CD30 positivity is characteristic of anaplastic large cell lymphoma."
  },
  {
    num: 255,
    stem: "A 28-year-old woman presents with fever, night sweats, and rapidly enlarging cervical lymphadenopathy. Excision biopsy shows large anaplastic cells with horseshoe-shaped nuclei that are strongly CD30 positive. ALK immunohistochemistry is positive. Which statement regarding her prognosis and optimal first-line therapy is most accurate?",
    options: {
      A: "ALK-positive ALCL carries a favourable prognosis and CHP-BV (brentuximab vedotin combined with CHP) has demonstrated overall survival benefit compared with CHOP alone.",
      B: "ALK-positive ALCL is associated with t(2;5) and carries a good prognosis; however, CHOP chemotherapy alone remains the standard first-line therapy.",
      C: "ALK-positive ALCL is associated with TP53 disruption and a poor prognosis; treatment should include immediate allogeneic stem cell transplantation.",
      D: "Oral ALK inhibitors are the first-line treatment of choice for ALK-positive ALCL because they replace the need for chemotherapy.",
      E: "Breast implant-associated ALCL is the most likely diagnosis and requires removal of the breast implant and capsule only."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), states that ALK-positive anaplastic large cell lymphoma (ALCL) is associated with t(2;5) and generally has a good prognosis. A large trial showed overall survival benefit for brentuximab vedotin combined with CHP (CHP-BV) versus CHOP chemotherapy alone, and CHP-BV is licensed and used in many countries. Oral ALK inhibitors are extremely active in relapsed ALK-positive ALCL but are not first-line therapy. TP53 disruption is associated with ALK-negative ALCL and a poor prognosis. Breast implant-associated ALCL is a specific subtype presenting with implant-associated effusions and is not relevant to this patient with nodal disease."
  },
  {
    num: 256,
    stem: "Regarding the molecular subtypes and prognostic stratification of diffuse large B-cell lymphoma (DLBCL), which statement most accurately reflects current understanding?",
    options: {
      A: "Double hit lymphoma (MYC and BCL2 rearrangements) is far more common in the activated B-cell (ABC) subtype and is best treated with standard R-CHOP.",
      B: "Double expressor DLBCL is characterized by underlying MYC and BCL2 gene rearrangements and carries a prognosis similar to double hit lymphoma.",
      C: "The germinal centre B-cell (GCB) subtype is characterized by CD10 and/or BCL6 expression, and double hit lymphoma involving MYC and BCL2 is almost exclusively found in the GCB subtype.",
      D: "The NCCN-IPI assigns a maximum of 5 points and cannot distinguish very high-risk patients from those with intermediate-risk disease.",
      E: "Primary testicular DLBCL does not require CNS prophylaxis because the CNS-IPI has been shown to have no predictive value in this extranodal site."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21, Fig. 21.4 and text), describes the subtypes of DLBCL. The germinal centre B-cell (GCB) subtype is characterized by CD10 and/or BCL6 expression on immunohistochemistry. Double hit lymphoma, with chromosomal translocations involving both MYC and BCL2, is far more common in the GCB subtype. Double expressor DLBCL has normal MYC and BCL2 genes but aberrantly high protein expression; these are more common in the ABC subtype and have a somewhat worse outcome, but less poor than double hit cases. The NCCN-IPI assigns up to 8 points, with age stratified into four categories. Primary testicular DLBCL is associated with a high risk of CNS relapse, and prophylaxis is considered for very high-risk patients such as those with testicular involvement or a high CNS-IPI."
  },
  {
    num: 257,
    stem: "Which statement best describes the pathogenesis, natural history, and contemporary management of follicular lymphoma according to the WHO 2022 classification and Hoffbrand?",
    options: {
      A: "Histological grading based on centroblast count per high-power field remains essential for treatment selection because grade 3b disease responds poorly to immunochemotherapy.",
      B: "The t(14;18) translocation places the MYC oncogene under immunoglobulin promoter control, driving constitutive proliferation rather than inhibiting apoptosis.",
      C: "Grade 3b (no centrocytes) is now termed follicular large B-cell lymphoma and treated as DLBCL; early-stage disease may be cured with radiotherapy alone in approximately 50% of cases.",
      D: "Maintenance rituximab after immunochemotherapy has been shown to prolong overall survival, and therefore all patients with advanced-stage disease should receive it.",
      E: "The FLIPI-2 score dictates when to initiate treatment and what regimen to use in first-line therapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), describes the WHO 2022 classification changes for follicular lymphoma. Histological grading based on centroblast count is no longer recommended due to lack of reproducibility and impact on treatment. The t(14;18) translocation involves BCL2, not MYC, leading to constitutive BCL2 expression and reduced apoptosis. Grade 3b (no centrocytes) is now termed follicular large B-cell lymphoma (FLBL) and is treated as a large B-cell lymphoma. Around 10-20% of patients have localized (stage I or some stage II) disease, and approximately 50% of these may be cured with radiotherapy alone. Maintenance rituximab or obinutuzumab after immunochemotherapy prolongs remission duration but has not been shown to prolong overall survival and is associated with increased infection risk. FLIPI scores are helpful prognostically but do not dictate when to initiate treatment or what regimen to use."
  },
  {
    num: 258,
    stem: "Which of the following best characterizes the cytogenetic and molecular features of mantle cell lymphoma (MCL) and their relationship to clinical behaviour?",
    options: {
      A: "The t(11;14) translocation juxtaposes CCND1 to the immunoglobulin light-chain gene, resulting in cyclin D1 overexpression that is absent in all cases of MCL.",
      B: "MCL is CD5-negative and CD23-positive, distinguishing it from chronic lymphocytic leukaemia/small lymphocytic lymphoma.",
      C: "Cyclin D1-negative MCL cases may harbour CCND2 translocations and the leukaemic non-nodal subtype is typically SOX11-positive with an aggressive nodal presentation.",
      D: "Acquisition of TP53 mutations is associated with a worse prognosis, and BTK inhibitors are highly active even in patients who have failed prior covalent BTK inhibitor therapy.",
      E: "The characteristic t(11;14) translocation juxtaposes the CCND1 gene to the immunoglobulin heavy-chain gene, leading to cyclin D1 overexpression and altered cell cycle behaviour."
    },
    answer: "E",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), describes the defining molecular abnormality of mantle cell lymphoma as the t(11;14) translocation, which juxtaposes the CCND1 gene to the immunoglobulin heavy-chain (IGH) gene and leads to increased expression of cyclin D1, altering cell cycle behaviour. MCL is characteristically CD5+ and CD23- (in contrast to CLL/SLL, which is CD23+). Cyclin D1-negative cases exist, some with CCND2 translocations. The leukaemic non-nodal subtype is typically SOX11-negative, whereas the classical nodal subtype is SOX11-positive. TP53 mutations are associated with a worse prognosis. While BTK inhibitors are highly active in MCL, resistance to covalent BTK inhibitors can occur; non-covalent BTK inhibitors such as pirtobrutinib may circumvent this resistance but are not universally active after covalent BTK inhibitor failure. Option E provides the most accurate description of the pathognomonic genetic abnormality."
  },
  {
    num: 259,
    stem: "Regarding the classification and biology of peripheral T-cell lymphomas (PTCL) according to the WHO 2022 classification, which statement is most accurate?",
    options: {
      A: "Angioimmunoblastic T-cell lymphoma (AITL) is derived from cytotoxic T cells and is characterized by TBX21 high expression, a cytotoxic phenotype, and frequent GATA3 mutations.",
      B: "Nodal T-follicular helper cell lymphoma encompasses AITL and is characterized by mutations in epigenetic modifying genes such as TET2, DNMT3A and/or IDH2, with frequent EBV-positive immunoblasts.",
      C: "PTCL-NOS with high GATA3 expression is associated with a worse prognosis than the TBX21-high cytotoxic subgroup, and both subtypes are treated with brentuximab vedotin as first-line therapy.",
      D: "Cutaneous T-cell lymphomas are exclusively CD8-positive, and mycosis fungoides is distinguished from Sezary syndrome by the presence of circulating malignant T cells in the latter.",
      E: "Extranodal NK/T-cell lymphoma is EBV-negative and occurs predominantly in Western Europe; asparaginase-based chemotherapy has no role in its management."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), describes the 2022 WHO recognition of nodal T-follicular helper cell lymphoma, with angioimmunoblastic T-cell lymphoma (AITL) as the most common subtype. AITL is characterized pathologically by expansion of the dendritic cell meshwork, proliferation of high endothelial venules, large blastic B cells (immunoblasts) frequently positive for EBV, and malignant T cells with mutations in epigenetic modifying genes (TET2, DNMT3A, IDH2). PTCL-NOS, not otherwise specified, has two subgroups: GATA3-high and TBX21-high with a cytotoxic phenotype; the latter is associated with a worse prognosis. Brentuximab vedotin combined with CHP is licensed for CD30-expressing non-ALCL subtypes in the US. Cutaneous T-cell lymphomas are usually CD4+. Mycosis fungoides does not have circulating tumour cells; Sezary syndrome does. Extranodal NK/T-cell lymphoma is EBV-positive, occurs mainly in Asia and Central/South America, and asparaginase is integral to modern treatment."
  },
  {
    num: 260,
    stem: "Which of the following statements best integrates the molecular pathogenesis, diagnostic approach, and treatment principles of primary central nervous system lymphoma (PCNSL) and primary mediastinal B-cell lymphoma (PMBCL)?",
    options: {
      A: "PCNSL is generally of the GCB subtype with underlying mutations of BCL2, BCL6, and CDKN2A; diagnosis is optimally made by CSF cytology, and treatment is with R-CHOP.",
      B: "PCNSL is generally of the ABC subtype with mutations of MYD88, CD79B, and CDKN2A; contrast-enhanced MRI is recommended, and consolidation with high-dose chemotherapy and autologous SCT prolongs survival.",
      C: "PMBCL is characterized by CD15 positivity and strong CD30 expression, resembling classic Hodgkin lymphoma both histologically and immunophenotypically.",
      D: "PMBCL arises from germinal centre B cells of the spleen and is associated with BCL2 rearrangement and t(14;18); treatment is with R-CHOP alone without radiotherapy for all patients.",
      E: "PCNSL should be treated with whole brain radiotherapy as first-line therapy because it avoids the neurotoxicity associated with high-dose methotrexate-based regimens."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 21), states that primary central nervous system lymphoma (PCNSL) is generally of the activated B-cell (ABC) subtype with underlying mutations of MYD88, CD79B, and CDKN2A. Diagnosis is usually made by stereotactic biopsy; tumour cells are uncommonly found in cerebrospinal fluid. Contrast-enhanced MRI is recommended for initial imaging and response assessment. Treatment is with cycles of high-dose methotrexate with partner cytotoxic agents (e.g., the MATRix regimen). Consolidation with high-dose chemotherapy and autologous stem cell transplantation prolongs survival. Whole brain radiotherapy is an alternative consolidation but subsequent long-term cognitive dysfunction can be a major problem. Primary mediastinal B-cell lymphoma (PMBCL) is CD15 negative, CD30 expression is often weak, it arises in the thymus, and half of cases have REL gene amplification. A randomized trial demonstrated no benefit for radiotherapy in patients treated with chemotherapy to a complete metabolic remission."
  }
];
