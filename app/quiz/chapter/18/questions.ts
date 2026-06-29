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
  },
  {
    num: 511,
    stem: "A 67-year-old man with Rai stage I chronic lymphocytic leukaemia, currently on active surveillance, attends his pre-winter review. He has recurrent upper respiratory tract infections and a serum IgG of 3.2 g/L. He completed primary COVID-19 vaccination but has not received any CLL-specific additional immunisations. Which vaccination and supportive strategy is most appropriate?",
    options: {
      A: "Live attenuated zoster vaccine (Zostavax) because cell-mediated immunity is preserved in early-stage CLL.",
      B: "Conjugated pneumococcal vaccine followed by polysaccharide vaccine, Shingrix recombinant adjuvanted zoster vaccine, annual influenza vaccination, and COVID-19 boosters on an immunocompromised schedule.",
      C: "Intravenous immunoglobulin replacement alone; vaccines are ineffective in CLL and should be deferred until IgG normalises.",
      D: "Pneumococcal polysaccharide vaccine only, because conjugate vaccines are contraindicated in patients with lymphoproliferative disorders.",
      E: "Oral penicillin prophylaxis lifelong because vaccination cannot prevent encapsulated bacterial infections in hypogammaglobulinaemia."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, emphasizes that immunosuppression from hypogammaglobulinaemia and cellular immune dysfunction is a significant problem in CLL. The chapter specifically recommends vaccination with conjugated pneumococcal vaccine, the Shingrix recombinant adjuvanted zoster vaccine, annual influenza vaccination, and COVID-19 vaccines on a schedule recommended for immunocompromised individuals. Live attenuated vaccines such as Zostavax are contraindicated in immunocompromised patients. Intravenous immunoglobulin replacement is reserved for patients with severe hypogammaglobulinaemia and recurrent infections, but it does not replace appropriate vaccination. Penicillin prophylaxis is not standard first-line management; vaccination remains the cornerstone of infection prevention in CLL."
  },
  {
    num: 512,
    stem: "A 71-year-old woman with chronic lymphocytic leukaemia was previously treated with venetoclax and obinutuzumab for 12 months and achieved a complete response. Eighteen months later she develops progressive lymphadenopathy and fatigue. Molecular testing shows TP53 intact and mutated IGVH genes. She is otherwise fit. Which next treatment approach is most appropriate?",
    options: {
      A: "Immediate allogeneic stem cell transplantation because relapse within 2 years after fixed-duration venetoclax indicates high-risk biology.",
      B: "Re-treatment with fludarabine, cyclophosphamide and rituximab (FCR) because she responded well to first-line chemo-immunotherapy previously.",
      C: "A Bruton kinase inhibitor such as acalabrutinib or ibrutinib, continued until progression or intolerance.",
      D: "Pirtobrutinib because relapse after venetoclax implies acquired resistance to both covalent BTK and BCL-2 inhibition.",
      E: "Idelalisib monotherapy because PI3 kinase inhibition is the standard second-line option after BCL-2 inhibitor failure."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 18.5), outlines that relapse after first-line venetoclax-based therapy can be managed with a Bruton kinase inhibitor, such as acalabrutinib or ibrutinib, continued until progression or intolerance. The algorithm specifically lists a BTK inhibitor as second-line therapy after venetoclax and obinutuzumab in patients without TP53 disruption. Allogeneic stem cell transplantation is generally reserved for younger patients with multiply relapsed disease, not for a first relapse. FCR is now rarely used and would be inappropriate after effective first-line targeted therapy. Pirtobrutinib is a third-generation non-covalent BTK inhibitor under development for resistance to covalent BTK inhibitors, not for relapse after venetoclax alone."
  },
  {
    num: 513,
    stem: "A 69-year-old man with chronic lymphocytic leukaemia diagnosed 3 years ago (Rai stage II, active surveillance) develops progressive splenomegaly and a lymphocyte count that doubles over 4 months. Blood film review shows that 25% of the clonal cells are larger than typical CLL lymphocytes, with a single prominent central nucleolus and abundant pale cytoplasm. Which diagnosis and management strategy is most accurate?",
    options: {
      A: "B-cell prolymphocytic leukaemia requiring immediate alemtuzumab; this is a distinct WHO5 entity separate from CLL.",
      B: "Prolymphocytic progression of CLL; manage according to standard CLL treatment indications and algorithm, as B-PLL is no longer recognized in WHO5.",
      C: "Hairy cell leukaemia variant; administer cladribine because the cells show prolymphocytic morphology.",
      D: "Mantle cell lymphoma leukaemic phase; start BTK inhibitor monotherapy pending fluorescence in situ hybridization for t(11;14).",
      E: "Richter transformation; urgent positron emission tomography-computed tomography and biopsy are required before starting R-CHOP."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that prolymphocytic progression of CLL is diagnosed when more than 15% of the clonal cells show a prolymphocytic appearance, characterized by a cell around twice the size of a CLL lymphocyte with a large central nucleolus. The diagnosis of B-cell prolymphocytic leukaemia (B-PLL) is no longer recognized in WHO5, having included several different entities now classified separately. Management should therefore follow CLL treatment algorithms when indications for therapy are met. Alemtuzumab is used for T-cell prolymphocytic leukaemia, not B-cell prolymphocytic progression. Hairy cell leukaemia variant (splenic B-cell lymphoma/leukaemia with prominent nucleoli), mantle cell lymphoma, and Richter transformation have distinct morphology, immunophenotype, or histology that must be confirmed by appropriate testing rather than inferred from prolymphocytic morphology alone."
  },
  {
    num: 514,
    stem: "A 52-year-old man who emigrated from the Caribbean 20 years ago presents with lethargy, corrected calcium 3.2 mmol/L, widespread skin nodules and generalized lymphadenopathy. Full blood count shows white cell count 28 × 10^9/L with bizarre lymphocytes showing convoluted 'clover-leaf' nuclei. Immunophenotyping shows CD4+ T cells. Serology is positive for human T-cell lymphotropic virus type 1. If the presentation is leukaemia-dominant, which first-line therapy is most appropriate?",
    options: {
      A: "Alemtuzumab followed by allogeneic stem cell transplantation, as for T-cell prolymphocytic leukaemia.",
      B: "Combination chemotherapy with CHOP, because the nodal and skin presentation resembles peripheral T-cell lymphoma.",
      C: "Zidovudine combined with alpha-interferon, the established first-line approach for leukaemia-dominant adult T-cell leukaemia/lymphoma.",
      D: "Ibrutinib monotherapy because the malignant cells express CD4 and may retain B-cell receptor-dependent survival signals.",
      E: "Corticosteroids and calcitonin for hypercalcaemia only; systemic therapy is reserved for lymphoma-dominant presentations."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes adult T-cell leukaemia/lymphoma (ATLL) as the first malignancy associated with a human retrovirus, HTLV-1, endemic in parts of Japan and the Caribbean. The clinical presentation is often acute, dominated by hypercalcaemia, skin lesions, hepatosplenomegaly and lymphadenopathy, with bizarre lymphocytes showing convoluted 'clover-leaf' nuclei and a consistent CD4+ phenotype. Diagnosis is by morphology and serology. For leukaemia-dominant disease, zidovudine combined with alpha-interferon is first-line therapy, whereas combination chemotherapy is used if the presentation is more lymphoma-like. Alemtuzumab is the treatment for T-cell prolymphocytic leukaemia, and ibrutinib has no role in T-cell malignancies."
  },
  {
    num: 515,
    stem: "A 50-year-old man presents with recurrent chest infections, pancytopenia and massive splenomegaly. Blood film shows large lymphocytes with villous cytoplasmic projections. Immunophenotyping reveals CD11c+, CD19+, CD103−, CD25− and CD123−. BRAF V600E mutation is absent, but a MAP2K1 mutation is detected. Which diagnosis and treatment strategy is most appropriate?",
    options: {
      A: "Classic hairy cell leukaemia; treat with cladribine or pentostatin plus rituximab.",
      B: "Splenic marginal zone lymphoma with villous lymphocytes; manage with splenectomy as first-line therapy.",
      C: "Splenic B-cell lymphoma/leukaemia with prominent nucleoli (SBLPN); splenectomy may be required and MAPK pathway inhibitors may be considered.",
      D: "Mantle cell lymphoma; start combined venetoclax and Bruton kinase inhibitor therapy pending CCND1 fluorescence in situ hybridization.",
      E: "Follicular lymphoma leukaemic phase; treat with obinutuzumab plus bendamustine."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies splenic B-cell lymphoma/leukaemia with prominent nucleoli (SBLPN) within the WHO5 grouping of splenic B-cell lymphomas/leukaemias. SBLPN, previously known as the hairy cell leukaemia variant, is distinguished from classic HCL by the absence of BRAF V600E mutation and the typical lack of CD123, CD25 and CD103 expression. Mutations in MAP2K1, which encodes a protein in the MAP kinase pathway, are frequent and specific pathway inhibitors may be considered. The outlook is less favourable than classic HCL, splenectomy may be required in some cases, and responsiveness to chemotherapy is decreased. Classic HCL would be CD103+, CD25+, CD123+ and BRAF V600E-positive, making cladribine or pentostatin the treatment of choice."
  },
  {
    num: 516,
    stem: "Regarding B-cell receptor (BCR) signalling and the mechanism of Bruton kinase inhibitors in chronic lymphocytic leukaemia, which statement is most accurate?",
    options: {
      A: "Bruton kinase inhibitors block SYK-mediated proximal BCR signalling and are ineffective in IGVH-mutated CLL.",
      B: "Covalent Bruton kinase inhibitors bind BTK at the C481 residue, preventing downstream B-cell survival signals and inducing apoptosis independent of TP53 status.",
      C: "B-cell receptor signalling is dispensable for CLL cell survival; Bruton kinase inhibitors act primarily by inhibiting T-cell help in the microenvironment.",
      D: "The Bruton kinase inhibitors ibrutinib, acalabrutinib and zanubrutinib allosterically activate BTK, enhancing pro-apoptotic signalling.",
      E: "Bruton kinase inhibitors are ineffective in TP53-mutant CLL because the mutant clone bypasses BTK-dependent survival via alternative NF-κB activation."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, explains that the surface immunoglobulin on a B cell acts as the B-cell receptor for antigen, and B cells require stimulatory signals through the BCR to remain alive. Ibrutinib, acalabrutinib and zanubrutinib are oral drugs that covalently bind to and inactivate BTK, leading to B-cell apoptosis. The covalent binding occurs at the C481 residue of BTK, and remarkably these agents remain effective even in TP53-mutant disease. They are effective in both mutated and unmutated IGVH CLL. They are not allosteric activators, nor do they act primarily through T-cell inhibition, and BCR signalling is not dispensable for CLL survival."
  },
  {
    num: 517,
    stem: "Regarding the role of BCL-2 and the mechanism of venetoclax in chronic lymphocytic leukaemia, which statement is most accurate?",
    options: {
      A: "Venetoclax is a BH3 mimetic that displaces pro-apoptotic proteins from BCL-2, thereby restoring mitochondrial apoptosis in CLL cells.",
      B: "BCL-2 is downregulated in CLL; venetoclax therefore upregulates BCL-2 expression to compensate for MCL1 deficiency.",
      C: "Venetoclax binds directly to BAX and BAK, activating mitochondrial outer membrane permeabilization independent of BCL-2 family interactions.",
      D: "Venetoclax is ineffective in patients with mutated IGVH genes and is therefore reserved for unmutated IGVH disease.",
      E: "Venetoclax regimens are continued indefinitely until progression to maximize minimal residual disease-negative remission duration."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes how CLL cells exhibit up-regulation of the anti-apoptotic proteins BCL-2 and MCL1 and down-regulation of pro-apoptotic proteins such as BCLX, leading to impaired apoptosis and prolonged lifespan. Venetoclax is a direct inhibitor of BCL-2, functioning as a BH3 mimetic that displaces pro-apoptotic BH3-only proteins from BCL-2, thereby restoring the intrinsic apoptotic pathway. It is highly active in CLL and induces a higher rate of minimal residual disease negativity than Bruton kinase inhibitors. Venetoclax is less effective in unmutated IGVH and TP53-mutant disease, but is not ineffective in mutated IGVH. Venetoclax regimens are of fixed duration, usually one year, rather than continuous until progression."
  },
  {
    num: 518,
    stem: "Regarding the diagnostic immunophenotype of chronic lymphocytic leukaemia, which statement is most accurate?",
    options: {
      A: "CLL cells are CD19+, CD5+, CD23+, CD10+, FMC7+ with bright surface immunoglobulin and strong CD79b expression.",
      B: "CLL cells express CD19, bright CD5 and CD23, dim surface immunoglobulin, dim CD20, and are usually negative for CD10 and FMC7.",
      C: "CLL cells are CD5−, CD23−, CD10+ and FMC7+, with strong surface immunoglobulin—features that distinguish CLL from follicular lymphoma.",
      D: "The presence of CD103 and CD25 positivity is characteristic of CLL and supports the diagnosis over hairy cell leukaemia.",
      E: "CD19 negativity with CD3 positivity is required to establish the clonal B-cell nature of CLL on flow cytometry."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 18.2), presents the immunophenotype of chronic B-cell leukaemias and lymphomas. CLL is characterized by CD19+ B cells that are brightly positive for CD5 and CD23, but show low levels of surface immunoglobulin, CD20, CD22 and CD79b. CD10 and FMC7 are usually negative. These features distinguish CLL from follicular lymphoma (CD10+ CD23− with bright surface immunoglobulin and strong CD79b), hairy cell leukaemia (CD103+ CD25+ CD123+), and mantle cell lymphoma (CD5+ CD23−). CD19 negativity with CD3 positivity would suggest a T-cell process, not CLL."
  },
  {
    num: 519,
    stem: "Regarding mechanisms of resistance to covalent Bruton kinase inhibitors in chronic lymphocytic leukaemia, which statement is most accurate?",
    options: {
      A: "Resistance is usually mediated by acquisition of the BCR-ABL1 fusion, which redirects survival signalling through ABL1.",
      B: "The most common resistance mutations occur in BTK (C481S) and PLCγ2, which impair covalent inhibitor binding or restore downstream signalling.",
      C: "Resistance to covalent Bruton kinase inhibitors cannot be overcome; patients must proceed directly to allogeneic stem cell transplantation.",
      D: "TP53 mutations acquired during Bruton kinase inhibitor therapy are the sole mechanism of resistance and predict loss of response to all non-covalent Bruton kinase inhibitors.",
      E: "Resistance is primarily pharmacokinetic due to poor oral bioavailability of ibrutinib and is reversed by switching to intravenous Bruton kinase inhibitors."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that third-generation non-covalent Bruton kinase inhibitors, pirtobrutinib and nemtabrutinib, are being developed to circumvent resistance mechanisms such as BTK C481S and PLCγ2 mutations, which impair the efficacy of covalent Bruton kinase inhibitors. These mutations alter the BTK binding site or restore downstream signalling, respectively, allowing the leukaemic clone to survive despite covalent BTK inhibition. BCR-ABL1 is not relevant to CLL pathogenesis. Resistance does not universally mandate allogeneic transplantation, and non-covalent inhibitors have been designed specifically to address this problem. TP53 mutations are present at diagnosis in some patients but are not the sole acquired resistance mechanism to Bruton kinase inhibitors."
  },
  {
    num: 520,
    stem: "Regarding splenic B-cell lymphoma/leukaemia with prominent nucleoli (SBLPN) and its distinction from classic hairy cell leukaemia, which statement is most accurate?",
    options: {
      A: "SBLPN is CD103+, CD25+, CD123+ and carries the BRAF V600E mutation, identical immunophenotypically to classic hairy cell leukaemia.",
      B: "SBLPN typically lacks CD103, CD25 and CD123 expression, is BRAF V600E-negative, and frequently harbours MAP2K1 mutations.",
      C: "SBLPN and classic hairy cell leukaemia both show monocytopenia as a distinctive feature, although SBLPN responds better to cladribine.",
      D: "SBLPN is characterized by CD10+ B cells with t(14;18) BCL2 rearrangement and bright surface immunoglobulin expression.",
      E: "SBLPN is a T-cell lymphoproliferative disorder with CD4+ clover-leaf nuclei, related to adult T-cell leukaemia/lymphoma."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes splenic B-cell lymphoma/leukaemia with prominent nucleoli (SBLPN) as part of the WHO5 grouping of splenic B-cell lymphomas/leukaemias. SBLPN typically lacks CD123, CD25 and CD103 expression, monocytopenia is less common than in classic HCL, and BRAF mutation is absent. Mutations in MAP2K1, encoding a protein in the MAP kinase pathway, are frequent, and specific pathway inhibitors may be considered. Classic HCL is CD103+, CD25+, CD123+ and BRAF V600E-positive. SBLPN is therefore immunophenotypically and genetically distinct, with a less favourable outlook and reduced chemotherapy responsiveness than classic HCL."
  }
];
