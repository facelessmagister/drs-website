export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 231,
    stem: "A 28-year-old man presents with painless left cervical lymphadenopathy. PET-CT demonstrates FDG-avid left cervical nodes and an 11 cm anterior mediastinal mass with contiguous extension into the left lung, but no disease below the diaphragm. He reports fevers to 39°C on multiple occasions and 12% unintentional weight loss over 4 months. Excision biopsy confirms nodular sclerosis classical Hodgkin lymphoma. Laboratory studies: haemoglobin 102 g/L, white cell count 15.1 × 10^9/L with neutrophilia and eosinophilia, ESR 72 mm/hr. According to the Ann Arbor staging system and German Hodgkin Study Group (GHSG) criteria described in Hoffbrand, which statement best characterises his stage and risk group?",
    options: {
      A: "Stage IIE B unfavourable — contiguous extranodal lung extension is denoted by subscript E and does not advance stage beyond II, and the presence of B symptoms plus a large mediastinal mass fulfil GHSG unfavourable criteria.",
      B: "Stage IV B — mediastinal mass with direct lung involvement automatically constitutes stage IV disease regardless of contiguity.",
      C: "Stage III B — cervical and mediastinal nodes represent disease above and below the diaphragm because the mediastinum is anatomically inferior to the diaphragm.",
      D: "Stage IIE A — the B symptoms are insufficient for unfavourable classification because the ESR of 72 mm/hr is attributable to infection rather than lymphoma.",
      E: "Stage IIB favourable — no large mediastinal mass is present because the 11 cm mass is extranodal and therefore excluded from the size criterion."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 19.5), explicitly states that localized extranodal extension from a mass of nodes does not advance the stage but is indicated by the subscript E. Thus, mediastinal disease with contiguous spread to the lung is classified as IIE, not IV. The GHSG criteria for early unfavourable disease include: large mediastinal adenopathy (mediastinal thoracic ratio >0.35 at T5/6 or nodal mass >10 cm), ESR ≥50 without B symptoms or ESR ≥30 with B symptoms, ≥3 lymph node sites involved, and extranodal lesions. This patient meets multiple unfavourable criteria (B symptoms, large mediastinal mass, elevated ESR, extranodal extension), making option A the correct characterisation."
  },
  {
    num: 232,
    stem: "A 24-year-old woman presents with fever, pruritus, and painless right supraclavicular lymphadenopathy. CT shows mediastinal lymphadenopathy but no infradiaphragmatic disease. Excision biopsy confirms classical Hodgkin lymphoma, nodular sclerosis subtype. Her HIV test is negative. She is classified as having early-stage unfavourable disease and completes two cycles of ABVD chemotherapy. Interim PET-CT shows complete metabolic response (Deauville score 2). According to the PET-adapted treatment algorithms described in Hoffbrand, what is the most appropriate next step?",
    options: {
      A: "Switch to escalated BEACOPP for two cycles because a Deauville score of 2, while technically negative, indicates minimal residual metabolic activity requiring intensification.",
      B: "Proceed with involved-site radiotherapy at 30 Gy because all patients with early-stage unfavourable cHL require consolidation radiotherapy regardless of interim PET response.",
      C: "Continue with two additional cycles of AVD (omitting bleomycin) and omit radiotherapy, as the negative interim PET permits treatment de-escalation without compromising cure rates.",
      D: "Add brentuximab vedotin to AVD for the remaining cycles because early PET negativity predicts insufficient depth of response with standard chemotherapy alone.",
      E: "Change to six cycles of R-CHOP because cHL and diffuse large B-cell lymphoma share identical first-line treatment principles according to current BSH guidelines."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 19.8, based on BSH/Follows et al. 2022 guidelines), describes that for early-stage unfavourable cHL, two cycles of ABVD followed by a negative interim PET (Deauville 1–3) allows continuation with AVD (bleomycin omitted) for two further cycles, with omission of radiotherapy in many patients. The RATHL trial demonstrated that omitting bleomycin after negative interim PET did not increase relapse rates. This approach reduces bleomycin lung toxicity, a major late complication. Escalated BEACOPP is reserved for interim PET-positive disease. R-CHOP is not used for cHL. Brentuximab vedotin with AVD is a first-line option for advanced disease but is not indicated here based on interim PET negativity."
  },
  {
    num: 233,
    stem: "A 62-year-old man was treated 15 years ago with mantle field radiotherapy and six cycles of ABVD for stage IIB classical Hodgkin lymphoma. He now presents with progressive dyspnoea on exertion. CT shows bilateral pulmonary fibrosis and a new 3 cm right upper lobe mass. Biopsy of the mass confirms lung adenocarcinoma. His complete blood count is normal except for mild normochromic normocytic anaemia (haemoglobin 115 g/L). Which of the following best explains the relationship between his prior Hodgkin lymphoma treatment and his current presentation?",
    options: {
      A: "The lung adenocarcinoma is a direct metastasis from occult recurrent Hodgkin lymphoma, as cHL frequently metastasises to lung parenchyma outside of contiguous extension.",
      B: "This represents a radiation-induced secondary solid tumour, a well-documented late effect of Hodgkin lymphoma therapy that typically manifests after 10 years and is particularly associated with prior radiotherapy.",
      C: "The pulmonary fibrosis is caused by recurrent cHL in the lung, which typically presents with bilateral interstitial infiltrates and fibrosis rather than discrete masses.",
      D: "The anaemia reflects bone marrow involvement by recurrent Hodgkin lymphoma, which is the most common site of relapse after 15 years and presents with normochromic normocytic anaemia.",
      E: "The lung mass is a bleomycin-induced benign pulmonary nodule that has undergone malignant transformation due to prior anthracycline-induced mutagenesis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes in detail the late effects of Hodgkin lymphoma treatment. Long-term follow-up reveals a considerable burden of late disease, especially following radiation. Lung and breast cancers occur as consequences of radiotherapy, typically becoming apparent only after 10 years. Mantle field radiotherapy directly exposes lung tissue to ionising radiation. The bilateral pulmonary fibrosis is consistent with prior radiation-induced lung injury and/or bleomycin toxicity. The new lung adenocarcinoma, arising 15 years after treatment in the radiation field, is best characterised as a radiation-induced secondary malignancy, a major reason modern protocols now use smaller field sizes and lower doses. cHL does not typically metastasise to lung outside of contiguous extension, and bone marrow relapse after 15 years would be exceedingly rare."
  },
  {
    num: 234,
    stem: "A 19-year-old man is diagnosed with stage IVB classical Hodgkin lymphoma with bone marrow involvement. His International Prognostic Scoring System (IPSS, Hasenclever index) score is 4. He receives ABVD for two cycles followed by interim PET-CT, which is positive (Deauville score 4). According to the treatment algorithms described in Hoffbrand, which strategy is most appropriate?",
    options: {
      A: "Continue ABVD for four more cycles because switching regimens based on interim PET positivity has not been shown to improve overall survival in advanced disease.",
      B: "Switch to up to four cycles of escalated BEACOPP, as a positive interim PET in advanced cHL warrants treatment intensification to improve progression-free survival.",
      C: "Add involved-field radiotherapy to all sites of initial disease after completing six cycles of ABVD, because radiotherapy can compensate for chemotherapy resistance in advanced-stage disease.",
      D: "Begin single-agent brentuximab vedotin maintenance immediately, as the positive interim PET after two cycles indicates primary refractory disease unsalvageable by chemotherapy.",
      E: "Discontinue chemotherapy and proceed directly to autologous stem cell transplantation, as a positive interim PET after two cycles predicts treatment failure with any conventional chemotherapy regimen."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 19.9), presents the algorithm for advanced-stage classical Hodgkin lymphoma. After two cycles of ABVD, an interim PET is performed. If negative (Deauville 1–3), most patients continue with AVD (bleomycin omitted) for four more cycles. If positive (about 15–20% of patients), up to four cycles of escalated BEACOPP are given. This PET-adapted approach intensifies therapy for patients with residual metabolic activity. Autologous stem cell transplantation is reserved for relapsed or refractory disease after salvage chemotherapy, not for interim PET positivity during first-line therapy. Brentuximab vedotin maintenance has a licensed indication following autologous SCT for high-risk relapse, not as a substitute for first-line intensification. Radiotherapy in advanced disease is usually reserved for residual PET-avid areas after chemotherapy or sites of initial bulk."
  },
  {
    num: 235,
    stem: "A 35-year-old man presents with relapsed classical Hodgkin lymphoma 18 months after completing first-line ABVD for stage IIA disease. Restaging PET-CT shows FDG-avid mediastinal and hilar lymphadenopathy. He is otherwise fit with preserved organ function and no comorbidities. Which of the following management pathways best aligns with current British Society for Haematology guidelines as described in Hoffbrand?",
    options: {
      A: "Immediate high-dose chemotherapy with autologous stem cell transplantation without salvage chemotherapy, because he had only limited prior ABVD exposure.",
      B: "Second-line platinum-based salvage chemotherapy (e.g., GDP) followed by PET restaging; if responding, proceed to high-dose chemotherapy with autologous stem cell transplantation.",
      C: "Rechallenge with ABVD for six cycles, because disease relapse within two years of ABVD completion does not confer resistance to the same regimen.",
      D: "Single-agent brentuximab vedotin indefinitely as a bridge to allogeneic transplantation, because autologous transplantation is contraindicated in mediastinal relapse.",
      E: "Start nivolumab monotherapy with curative intent, because checkpoint inhibitors have replaced chemotherapy and transplantation in the management of first relapse."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 19.10), presents the BSH-endorsed schema for relapsed classical Hodgkin lymphoma. For younger, fit patients, treatment remains with curative intent. The standard pathway is alternative combination chemotherapy (often platinum-based, e.g., GDP: gemcitabine, dexamethasone, cisplatin) to induce response, followed by high-dose chemotherapy and autologous stem cell transplantation for responding patients. The schema shows second-line chemotherapy followed by PET, then autologous SCT for PET-negative responders. Brentuximab vedotin and PD-1 inhibitors may be incorporated into salvage regimens or used as bridges, but they have not replaced the standard chemotherapy-transplantation approach for first relapse. Allogeneic SCT is reserved for the small minority not cured with autologous SCT. Rechallenging with ABVD is not recommended as first relapse almost always requires alternative salvage therapy."
  },
  {
    num: 236,
    stem: "Regarding the molecular pathogenesis of classical Hodgkin lymphoma, which statement best describes the immunophenotype of the Reed–Sternberg cell and its interaction with the tumour microenvironment?",
    options: {
      A: "RS cells are CD30-negative and CD20-positive B cells that lose PDL1 expression through 9p24 deletion, rendering them susceptible to cytotoxic T-cell attack.",
      B: "RS cells stain strongly with CD30, frequently with CD15, and are usually negative for CD19 or CD20; amplification of 9p24 leads to PDL1 overexpression, which engages PD-1 on surrounding T cells to evade immune destruction.",
      C: "RS cells are of T-cell lineage, as demonstrated by clonal T-cell receptor gene rearrangement, and they recruit eosinophils into the microenvironment via IL-5 secretion.",
      D: "The RS cell expresses CD10 and CD19 strongly but lacks CD30, distinguishing it from anaplastic large cell lymphoma and classical Hodgkin lymphoma.",
      E: "RS cells arise from plasma cells that have undergone somatic hypermutation and class-switch recombination, explaining their abundant immunoglobulin secretion into the surrounding microenvironment."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 19, Figs. 19.3, 19.4 and 19.11), states that RS cells and mononuclear Hodgkin cells always stain strongly with CD30 and frequently (though less strongly) with CD15, but are usually negative for B-cell antigen expression such as CD10, CD19 or CD20. Immunoglobulin gene rearrangement studies show that RS cells are of B-lymphoid lineage but often have 'crippled' immunoglobulin genes. One of the commonest cytogenetic changes is amplification of part of chromosome 9 (9p24) containing the PDL1 gene. This is often strongly expressed by RS cells, which then interact with PD-1 on immune cells such as T cells and macrophages, protecting them from immune attack. This mechanism is now exploited therapeutically with PD-1 inhibitors such as nivolumab and pembrolizumab."
  },
  {
    num: 237,
    stem: "Which of the following most accurately describes the distinction between nodular lymphocyte-predominant Hodgkin lymphoma (NLPHL) and classical Hodgkin lymphoma according to the WHO 2022 and International Consensus Classification (ICC) systems?",
    options: {
      A: "Both WHO 2022 and ICC classify NLPHL as a subtype of Hodgkin lymphoma with Reed–Sternberg cells as the defining neoplastic cell.",
      B: "WHO 2022 retains NLPHL within the Hodgkin lymphoma category, whereas ICC reclassifies it as 'Nodular Lymphocyte Predominant B-cell Lymphoma' due to its biological similarity to low-grade non-Hodgkin lymphoma.",
      C: "WHO 2022 classifies NLPHL as a form of T-cell lymphoma, while ICC places it within the category of aggressive B-cell lymphomas.",
      D: "Both classifications agree that NLPHL should be treated identically to classical Hodgkin lymphoma with ABVD or escalated BEACOPP chemotherapy.",
      E: "The LP cells of NLPHL are CD30-positive and CD15-positive, identical to classical RS cells, but they lack the diagnostic inflammatory background required for the diagnosis of Hodgkin lymphoma."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 19.1), explicitly states that the International Consensus Classification (ICC) system no longer calls NLPHL a Hodgkin lymphoma, preferring the term 'Nodular Lymphocyte Predominant B-cell Lymphoma.' However, the WHO (2022) classification retains NLPHL within the Hodgkin lymphoma category. The LP cells of NLPHL are polylobated 'popcorn-like' B cells that retain typical B-cell markers such as CD20, unlike classical RS cells. The natural history resembles low-grade non-Hodgkin lymphoma, and treatment is correspondingly less intensive — for early stage, surgical excision followed by surveillance or radiotherapy is usual, while advanced disease may be treated with R-CVP or R-CHOP rather than ABVD/BEACOPP."
  },
  {
    num: 238,
    stem: "Regarding the Deauville 5-point criteria for PET-CT response assessment in Hodgkin lymphoma, which statement best explains the biological basis and clinical application of the scoring system?",
    options: {
      A: "The Deauville score compares tumour FDG uptake to cerebellar metabolic activity, with scores 1–3 representing complete metabolic response regardless of liver uptake.",
      B: "Deauville scores are based on comparison of nodal FDG uptake against mediastinal blood pool and liver uptake as internal controls; scores 1–3 are generally considered negative and permit treatment de-escalation.",
      C: "The score quantifies absolute SUVmax values, with a threshold of SUVmax <4 defining complete metabolic response and SUVmax >10 indicating progressive disease.",
      D: "The Warburg effect is the basis for Deauville scoring; it measures the rate of glycolysis in tumour cells relative to normal tissues using serum lactate dehydrogenase levels.",
      E: "Deauville score 5 requires immediate salvage therapy regardless of clinical context, because it always indicates primary refractory disease unresponsive to first-line chemotherapy."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 19, Deauville score section), describes the Deauville 5-point criteria in detail. The system uses mediastinal blood pool and liver uptake as internal controls: Score 1 = no FDG uptake; Score 2 = nodal uptake present but ≤ mediastinal blood pool; Score 3 = nodal uptake > mediastinum but ≤ liver; Score 4 = moderately increased nodal uptake > liver; Score 5 = markedly increased nodal uptake > liver. Scores 1–3 are generally considered 'negative' (complete metabolic response), whereas 4 and 5 are 'positive'. This score is used to guide PET-adapted therapy, allowing omission of bleomycin from subsequent ABVD cycles or avoidance of radiotherapy when interim PET is negative. The Warburg effect explains why FDG-PET works (cancer cells rely on glycolysis), but it is not the basis of the Deauville scoring system itself."
  },
  {
    num: 239,
    stem: "Which of the following best describes the interplay between the International Prognostic Scoring System (IPSS, Hasenclever index) and the EORTC/GHSG risk stratification systems in guiding treatment decisions for classical Hodgkin lymphoma?",
    options: {
      A: "The IPSS is used exclusively for early-stage favourable disease, whereas EORTC/GHSG criteria are reserved exclusively for stage IV disease.",
      B: "EORTC and GHSG criteria define early favourable versus early unfavourable disease to guide local therapy decisions, while the IPSS estimates risk in advanced-stage disease and is based on seven independent clinical and laboratory variables.",
      C: "Both systems require bone marrow trephine biopsy as a mandatory component for accurate risk calculation, because marrow involvement confers an additional adverse prognostic point in both schemas.",
      D: "The IPSS and EORTC/GHSG are interchangeable and can be applied to any stage of disease with equivalent predictive accuracy for progression-free survival.",
      E: "GHSG criteria are based solely on the Deauville score after two cycles of chemotherapy and therefore cannot be applied at initial diagnosis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Tables 19.3 and 19.4), describes two distinct risk stratification systems. The EORTC and GHSG criteria divide early-stage disease into favourable and unfavourable categories based on factors such as large mediastinal mass, ESR, age, number of nodal sites, and extranodal involvement. The IPSS (Hasenclever index) is specifically applied to advanced-stage disease and assigns one point each for: male sex, age ≥45 years, stage IV disease, haemoglobin <105 g/L, white cell count ≥15 × 10^9/L, lymphocyte count <0.6 × 10^9/L or <8% of differential, and albumin <40 g/L. These systems are not interchangeable — they stratify different clinical scenarios. Bone marrow trephine is not required for either score; PET-CT is the preferred modality for bone involvement assessment."
  },
  {
    num: 240,
    stem: "Regarding the late complications of Hodgkin lymphoma treatment, which statement most accurately integrates the mechanisms of treatment-related toxicity with their clinical manifestations?",
    options: {
      A: "Anthracycline-induced cardiomyopathy arises from DNA alkylation and typically presents within 6 months of treatment; it is fully reversible with beta-blocker therapy alone.",
      B: "Bleomycin-induced pulmonary toxicity is dose-dependent and related to its ability to generate free radicals causing endothelial and epithelial cell damage; it is a major reason why PET-adapted omission of bleomycin is now standard practice.",
      C: "Secondary myelodysplastic syndrome and acute myeloid leukaemia are more common after ABVD than after escalated BEACOPP, because bleomycin has greater leukaemogenic potential than cyclophosphamide or etoposide.",
      D: "Radiotherapy involving breast tissue is dangerous only for women over 50 years of age, in whom proliferating breast epithelium is most susceptible to ionising radiation.",
      E: "Infertility after Hodgkin lymphoma therapy is exclusively due to radiotherapy scatter to the gonads; alkylating agents such as procarbazine and cyclophosphamide have no clinically relevant effect on gonadal function."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 19, 'The late effects of Hodgkin lymphoma and its treatment'), describes that bleomycin can cause serious lung toxicity, and this is a major reason why less intensive treatment regimens guided by interim PET/CT results are now being explored. If the interim PET is negative, bleomycin can be omitted from subsequent ABVD cycles. The pulmonary toxicity is dose-dependent and related to free radical generation causing damage to endothelial and epithelial cells. Regarding other late effects: MDS/AML are slightly more common after escalated BEACOPP than after ABVD, associated with alkylating agents and radiotherapy. Radiotherapy-related breast cancer is particularly dangerous in women under 20 years, not over 50 — annual screening starting 8 years after radiotherapy or age 30 (whichever is earlier) is recommended. Infertility is more common in men after alkylating drug therapy, and substituting procarbazine for dacarbazine is being explored to reduce gonadotoxicity. Anthracycline cardiotoxicity arises from free radical damage and topoisomerase II inhibition, not DNA alkylation, and may present years after treatment."
  }
];
