export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 221,
    stem: "A 68-year-old man presents with fatigue and unintentional weight loss of 6 kg over 3 months. Full blood count: haemoglobin 92 g/L, white cell count 180 × 10^9/L (lymphocytes 176 × 10^9/L), platelets 85 × 10^9/L. Blood film shows small lymphocytes with scant cytoplasm, condensed nuclear chromatin, and numerous smudge cells. Flow cytometry reveals CD19+, CD5+, CD23+, dim surface immunoglobulin, and dim CD20. Bone marrow trephine shows >70% lymphocytic infiltration. He has cervical and axillary lymphadenopathy and moderate splenomegaly. Molecular testing shows mutated IGVH genes and intact TP53. Which factor is most important in selecting between venetoclax-based and BTK inhibitor-based first-line therapy?",
    options: {
      A: "His age >65 years, which favours BTK inhibitors due to better tolerability in elderly patients compared with fixed-duration combination regimens.",
      B: "The very high white cell count, which requires a BTK inhibitor because venetoclax carries an unacceptable risk of tumour lysis syndrome at this lymphocyte burden.",
      C: "The presence of mutated IGVH and intact TP53, which favour venetoclax combined with obinutuzumab as the preferred first-line approach.",
      D: "The presence of autoimmune cytopenias, which mandate allogeneic stem cell transplantation because targeted agents are ineffective against immune-mediated marrow suppression.",
      E: "The presence of splenomegaly, which indicates Richter transformation; therefore R-CHOP chemotherapy rather than either targeted agent is indicated pending biopsy confirmation."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 18.5), presents the contemporary treatment algorithm for CLL. For patients with TP53 intact and mutated IGVH genes, the combination of venetoclax with obinutuzumab is often the preferred first treatment because it offers fixed-duration therapy (typically one year) with high rates of minimal residual disease negativity. By contrast, for unmutated IGVH or TP53 disruption, BTK inhibitors are preferred because they remain effective even in TP53-mutant disease. Age alone is not the primary determinant. While venetoclax requires tumour lysis syndrome prophylaxis, the lymphocyte count does not preclude its use—high-risk patients are hospitalized for monitoring. Autoimmune cytopenias are managed with corticosteroids and do not mandate SCT. Splenomegaly is a feature of progressive CLL and does not, without other features, indicate Richter transformation."
  },
  {
    num: 222,
    stem: "A 74-year-old woman with a 4-year history of chronic lymphocytic leukaemia (Rai stage I, on active surveillance) presents with rapidly enlarging right cervical lymphadenopathy, drenching night sweats, and fevers. PET-CT demonstrates a single dominant node with markedly elevated SUV compared with other nodal groups. Excisional biopsy reveals diffuse large B-cell lymphoma with mutations in TP53, MYC, and NOTCH1. Which statement best describes this complication and its optimal management?",
    options: {
      A: "This represents Richter transformation, usually clonally related to the underlying CLL, and should be treated with R-CHOP as for other high-grade B-cell lymphomas, although prognosis remains poor.",
      B: "This is prolymphocytic progression of CLL; BTK inhibitor monotherapy should be commenced immediately because prolymphocytes retain sensitivity to BCR pathway blockade.",
      C: "This indicates de novo diffuse large B-cell lymphoma unrelated to CLL; prognosis is substantially better and involved-field radiotherapy alone may be curative.",
      D: "The MYC and TP53 mutations indicate high-grade B-cell lymphoma with MYC and BCL2 rearrangements; DA-EPOCH-R is the regimen of choice rather than R-CHOP.",
      E: "The fevers and lymphadenopathy reflect reactivation of herpes zoster in an immunosuppressed host; antiviral therapy and intravenous immunoglobulin are indicated before considering cytotoxic therapy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes Richter transformation as the development of high-grade lymphoma (usually diffuse large B-cell lymphoma) in a patient with CLL. This is typically signalled by a dominant node that is brighter on PET and confirmed by biopsy. The transformation is usually clonally related to the underlying CLL and associated with mutations in TP53, MYC, NOTCH1, and CDKN2A. Management follows protocols for high-grade B-cell lymphomas such as R-CHOP. Prognosis is usually poor, although BTK inhibitors are being investigated. Prolymphocytic progression is diagnosed when >15% of clonal cells show prolymphocytic morphology, not by DLBCL histology. The transformation is usually clonally related, not de novo. MYC and TP53 mutations in this context do not constitute double-hit lymphoma requiring DA-EPOCH-R unless BCL2 rearrangement is also present."
  },
  {
    num: 223,
    stem: "A 55-year-old man presents with recurrent respiratory and skin infections over 6 months, pancytopenia (Hb 85 g/L, WCC 2.8 × 10^9/L, platelets 55 × 10^9/L), and massive splenomegaly. Monocyte count is 0.1 × 10^9/L. Blood film reveals large lymphocytes with oval nuclei and abundant pale grey-blue cytoplasm with irregular villous projections. Immunophenotyping shows CD11c+, CD19+, CD25+, CD103+, and CD123+; BRAF V600E mutation is detected. Which treatment strategy represents the most appropriate first-line approach?",
    options: {
      A: "Oral ibrutinib monotherapy because CD103 positivity indicates a CLL-related phenotype that responds to BTK inhibition.",
      B: "Cladribine or pentostatin, with or without rituximab, because these agents achieve complete responses in over 80% of cases of classic hairy cell leukaemia.",
      C: "Venetoclax combined with obinutuzumab because the CD25 and CD103 co-expression predicts sensitivity to BCL-2 inhibition.",
      D: "Immediate splenectomy because the villous morphology and pancytopenia indicate splenic marginal zone lymphoma with hypersplenism.",
      E: "Observation with quarterly monitoring because hairy cell leukaemia follows an indolent course and rarely requires systemic therapy."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes hairy cell leukaemia (HCL) as an uncommon B-cell lymphoproliferative disease with distinctive morphology (villous cytoplasmic projections), immunophenotype (CD11c, CD19, CD25, CD103, CD123 positivity), and the BRAF V600E mutation. Pancytopenia and monocytopenia are characteristic. The treatment of choice is cladribine (2-chlorodeoxyadenosine) or pentostatin (deoxycoformycin), with rituximab sometimes combined. These agents achieve complete responses in over 80% of cases, with long-term remission in two-thirds. Ibrutinib and venetoclax are CLL-directed therapies, not standard for HCL. Splenectomy may improve cytopenias in splenic marginal zone lymphoma but is not the treatment of choice for HCL. HCL is not indolent—it presents with infections and cytopenias requiring therapy."
  },
  {
    num: 224,
    stem: "A 52-year-old woman is referred with neutropenia (absolute neutrophil count 0.5 × 10^9/L), anaemia (Hb 88 g/L), and splenomegaly. She has a 5-year history of seropositive rheumatoid arthritis with progressive joint destruction. Blood film shows circulating lymphocytes with abundant cytoplasm and prominent azurophilic granules. Flow cytometry demonstrates CD3+, CD8+, CD16+, CD56 dim, and CD57+; STAT3 mutation is identified on molecular testing. Which statement best describes the management of this condition?",
    options: {
      A: "Alemtuzumab (anti-CD52) followed by allogeneic stem cell transplantation is indicated because the CD8+ cytotoxic T-cell phenotype confers aggressive behaviour requiring transplant.",
      B: "Cladribine should be administered because the granular morphology and splenomegaly are characteristic of hairy cell leukaemia, which responds to purine analogues.",
      C: "Treatment may not be needed; if cytopenias are symptomatic, methotrexate, cyclophosphamide, ciclosporin, or ruxolitinib may relieve the neutropenia.",
      D: "Immediate CHOP chemotherapy is required because CD56 positivity indicates an aggressive NK-cell lymphoma with rapid systemic progression.",
      E: "Zidovudine combined with alpha-interferon is first-line because the lymphocyte morphology and splenomegaly indicate adult T-cell leukaemia/lymphoma secondary to HTLV-1 infection."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes large granular lymphocytic (LGL) leukaemia as characterized by circulating lymphocytes with abundant cytoplasm and large azurophilic granules. These cells may be T or NK cells and express CD16, CD56, and CD57. The main clinical problem is cytopenia, especially neutropenia; splenomegaly and rheumatoid arthritis serology are common. STAT3 mutations are present in approximately 50% of cases. Treatment may not be needed, but if required, steroids, cyclophosphamide, ciclosporin/tacrolimus, or methotrexate may relieve cytopenia. Patients may also respond to JAK-STAT inhibitors such as ruxolitinib. Alemtuzumab is standard for T-cell prolymphocytic leukaemia, not LGL. Cladribine is for HCL, which has CD103+, CD25+, and BRAF V600E. CHOP is for aggressive lymphomas. ATLL presents with hypercalcaemia, skin lesions, and clover-leaf nuclei in CD4+ cells, not the CD8+ granular morphology seen here."
  },
  {
    num: 225,
    stem: "A 65-year-old man with known CLL (Rai stage II, on active surveillance) develops progressive pallor and jaundice over 2 weeks. Full blood count: haemoglobin 68 g/L, reticulocytes 18%, bilirubin 58 µmol/L (predominantly unconjugated). Direct antiglobulin test is positive for IgG and C3d. Peripheral blood shows polychromasia and spherocytes but no new blasts. Which statement best describes the aetiology and optimal management of this complication?",
    options: {
      A: "Cold agglutinin disease due to an IgM paraprotein; first-line management is rituximab with avoidance of cold exposure, and prednisolone is ineffective.",
      B: "Microangiopathic haemolytic anaemia secondary to marrow fibrosis; urgent splenectomy is required to decompress the splenic circulation.",
      C: "Warm autoimmune haemolytic anaemia secondary to underlying CLL; corticosteroids are indicated, and treatment of the CLL should be considered if otherwise indicated.",
      D: "Pure red cell aplasia due to T-cell-mediated suppression of erythropoiesis; ciclosporin or other calcineurin inhibitors are the treatment of choice.",
      E: "Hereditary spherocytosis unmasked by CLL-related splenomegaly; splenectomy is curative and should be performed once the CLL is controlled."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that autoimmunity directed against cells of the haemopoietic system is common in CLL, with autoimmune haemolytic anaemia being the most frequent manifestation. The combination of IgG and C3d positivity on the direct antiglobulin test, elevated unconjugated bilirubin, and high reticulocyte count is characteristic of warm autoimmune haemolytic anaemia. Corticosteroids such as prednisolone are the mainstay of treatment. If the CLL itself meets criteria for treatment (organomegaly, cytopenias, constitutional symptoms), this should also be addressed. Cold agglutinin disease would typically show IgM and C3d without IgG, and would be triggered by cold exposure. Microangiopathic haemolytic anaemia would show fragmented red cells (schistocytes) on film. Pure red cell aplasia presents with low reticulocytes and absence of polychromasia. Hereditary spherocytosis is a congenital condition not explained by the acute presentation in a patient with known CLL."
  },
  {
    num: 226,
    stem: "Regarding the immunophenotypic distinction between chronic lymphocytic leukaemia (CLL) and other B-cell chronic lymphoproliferative disorders, which statement is most accurate?",
    options: {
      A: "CLL cells are CD5+ CD23+ with weak surface immunoglobulin and dim CD20, whereas follicular lymphoma is CD10+ CD23− with bright surface immunoglobulin and strong CD79b expression.",
      B: "Hairy cell leukaemia is CD103+ CD25+ but also CD5+, making CD5 a shared marker with CLL that does not help distinguish the two entities.",
      C: "Mantle cell lymphoma is CD5− CD23+ with bright surface immunoglobulin, closely resembling follicular lymphoma on immunophenotyping.",
      D: "CLL and splenic marginal zone lymphoma share an identical immunophenotype of CD5+ CD23+ dim surface immunoglobulin, requiring cytogenetics alone for distinction.",
      E: "Follicular lymphoma is CD10− CD23+ with weak surface immunoglobulin and lacks the BCL2 rearrangement, instead carrying the t(11;14) translocation."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 18.2), presents the immunophenotypic profiles of chronic B-cell leukaemias and lymphomas. CLL is characterized by CD5+ CD23+ with weak surface immunoglobulin, dim CD20, dim CD22/CD79b, and negative CD10 and FMC7. Follicular lymphoma, by contrast, shows bright surface immunoglobulin, strong CD22/FMC7 and CD79b expression, and is CD10+ CD23−. Hairy cell leukaemia is CD103+ CD25+ but is CD5−. Mantle cell lymphoma is CD5+ but CD23−, with moderate surface immunoglobulin. Follicular lymphoma carries the t(14;18) translocation involving BCL2, whereas t(11;14) involving CCND1 is characteristic of mantle cell lymphoma. These distinctions are fundamental to accurate classification in routine diagnostic flow cytometry."
  },
  {
    num: 227,
    stem: "Regarding the cytogenetic and molecular prognostic markers in chronic lymphocytic leukaemia, which statement is most accurate?",
    options: {
      A: "Deletion of 13q14 carries the poorest prognosis because it disrupts microRNAs that normally promote B-cell survival, leading to rapid disease progression.",
      B: "Trisomy 12 is associated with a prognosis similar to deletion 17p and confers primary resistance to both BTK inhibitors and BCL-2 inhibitors.",
      C: "Unmutated IGVH genes, defined as having <98% homology to the germline sequence, are associated with unfavourable prognosis and may respond less well to initial chemotherapy.",
      D: "TP53 mutations are found in approximately 50% of patients at presentation, confer sensitivity to fludarabine-based chemo-immunotherapy, and predict long remission duration.",
      E: "NOTCH1 mutations are associated with favourable prognosis and predict an excellent response to both venetoclax-based therapy and chemo-immunotherapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 18.3), describes the four most common chromosomal abnormalities in CLL in prognostic order: del(13q14) has the best prognosis; trisomy 12 and normal karyotype have intermediate outlook; del(11q23)/ATM has poorer prognosis; and del(17p)/TP53 has the poorest prognosis. The 13q14 deletion leads to loss of microRNAs that normally control expression of pro-apoptotic proteins—not promotion of survival. Trisomy 12 does not confer resistance to targeted agents. Unmutated IGVH genes, defined as <98% homology to germline, are associated with unfavourable prognosis and poorer response to initial and subsequent therapy. TP53 mutations are present in only ~5% of patients at presentation, confer poor prognosis, and are associated with resistance to standard chemotherapy. NOTCH1, SF3B1, and ATM mutations all have negative prognostic implications and confer resistance to cytotoxic chemotherapy."
  },
  {
    num: 228,
    stem: "Regarding the CLL International Prognostic Index (CLL-IPI), which statement is most accurate?",
    options: {
      A: "Age >65 years contributes 2 points, making it the most heavily weighted factor in the scoring system.",
      B: "Unmutated IGVH and elevated serum β2-microglobulin each contribute 1 point, similar to Rai stage ≥1.",
      C: "A total score of 4–6 defines the intermediate risk group, for which observation rather than treatment is universally recommended.",
      D: "Deletion 17p or TP53 mutation contributes 4 points, the highest weighting of any single factor, and defines the very high-risk group when combined with other adverse features.",
      E: "The CLL-IPI predicts outcomes with equal accuracy across BTK inhibitors, BCL-2 inhibitors, and chemo-immunotherapy, making it a universal treatment guide."
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 18.4), presents the CLL-IPI scoring system. The five factors and their point values are: Rai stage ≥1 (1 point), age >65 years (1 point), unmutated IGVH (2 points), serum β2-microglobulin >3.5 g/L (2 points), and deletion 17p or TP53 mutation (4 points). The total score defines four risk groups: 0–1 low, 2–3 intermediate, 4–6 high, and 7–10 very high. Importantly, the score mainly applies to patients subsequently treated with chemotherapy; application of newer targeted therapies changes the impact of elements within this scoring system. Therefore, it is not a universal treatment guide for all therapeutic modalities. Age contributes only 1 point, not 2. Unmutated IGVH and β2-microglobulin each contribute 2 points, not 1. The intermediate risk group does not mandate universal observation—treatment decisions depend on clinical indication."
  },
  {
    num: 229,
    stem: "Regarding the distinction between monoclonal B-cell lymphocytosis (MBL) and chronic lymphocytic leukaemia (CLL) according to WHO 5th edition criteria, which statement is most accurate?",
    options: {
      A: "MBL is diagnosed when the clonal B-cell count is ≥0.5 × 10^9/L but <5 × 10^9/L, regardless of whether tissue involvement or constitutional symptoms are present.",
      B: "CLL requires a monoclonal B-cell count ≥5 × 10^9/L and/or tissue involvement outside the bone marrow, whereas MBL lacks these thresholds.",
      C: "MBL is found in <1% of persons over the age of 50 years and is considered a rare pre-malignant condition that rarely progresses to clinical CLL.",
      D: "CLL/SLL MBL is defined by clonal B cells <0.5 × 10^9/L with no detectable genetic abnormalities and an absence of light-chain restriction on flow cytometry.",
      E: "All cases of clinical CLL arise de novo without progressing through an MBL phase, because the genetic events driving CLL occur simultaneously in bone marrow and peripheral blood."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes MBL as clonal B cells with the same phenotype as CLL but without other features diagnostic of a B-lymphoproliferative disorder. MBL is found in >10% of persons over the age of 50 and is believed to represent the precursor state from which all cases of clinical CLL progress. In WHO5, MBL is termed 'low count' if clonal B cells are <0.5 × 10^9/L, and CLL/SLL MBL if the total B-cell count is ≥0.5 × 10^9/L but <5 × 10^9/L. For CLL to be diagnosed, there must be a monoclonal B-cell count ≥5 × 10^9/L and/or tissue involvement outside the bone marrow. Light-chain restriction and genetic abnormalities may be present in MBL. The other options misstate the prevalence, diagnostic thresholds, or natural history of the MBL-to-CLL continuum."
  },
  {
    num: 230,
    stem: "Regarding contemporary targeted therapies for chronic lymphocytic leukaemia, which statement most accurately describes their mechanisms of action and clinical application?",
    options: {
      A: "Ibrutinib covalently binds Bruton kinase (BTK), leading to B-cell apoptosis; however, it is ineffective in TP53-mutant CLL because the TP53-mutant clone bypasses BTK-dependent survival signals.",
      B: "Venetoclax directly inhibits BCL-2, inducing apoptosis in CLL cells, but is less effective in unmutated IGVH and TP53-mutant disease, for which BTK inhibitors are preferred.",
      C: "Acalabrutinib is a first-generation BTK inhibitor with a higher risk of atrial fibrillation, flutter, and hypertension than ibrutinib.",
      D: "Venetoclax-based regimens are administered continuously until progression, whereas BTK inhibitors are given for a fixed duration of approximately one year.",
      E: "Obinutuzumab is a first-generation anti-CD20 monoclonal antibody with modest single-agent activity compared with rituximab, and it is generally reserved for autoimmune cytopenias."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes venetoclax as a direct inhibitor of BCL-2 that is highly active in CLL, inducing frequent responses and a higher rate of minimal residual disease negativity than BTK inhibitors. However, it is less effective in patients with unmutated IGVH genes or TP53 mutation, for whom BTK inhibitors are generally preferred. Ibrutinib is indeed a covalent BTK inhibitor, but remarkably it remains effective even in TP53-mutant disease—unlike standard chemotherapy. Acalabrutinib is a second-generation BTK inhibitor with a lower risk of atrial fibrillation, flutter, and hypertension than ibrutinib, although neutropenia is more common with zanubrutinib. Venetoclax regimens are of fixed duration (usually one year), whereas BTK inhibitors are continued until progression or intolerance. Obinutuzumab is a second-generation glyco-engineered anti-CD20 antibody that is more effective than rituximab and is used in combinations with venetoclax, acalabrutinib, or chlorambucil."
  }
];
