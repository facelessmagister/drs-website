export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 211,
    stem: "A 6-year-old boy presents with pallor, fatigue, and bone pain in his legs. Full blood count: haemoglobin 72 g/L, white cell count 28 x 10^9/L, platelets 45 x 10^9/L. Bone marrow aspirate shows >80% lymphoblasts that are CD19+, CD10+, and terminal deoxynucleotidyl transferase (TdT)+. Cytogenetic analysis reveals 54 chromosomes. Which of the following best describes his risk stratification and initial management?",
    options: {
      A: "He has high-risk disease because the white cell count exceeds 10 x 10^9/L and therefore requires high-risk blocks with cyclophosphamide, etoposide, and idarubicin as first-line therapy.",
      B: "He has standard-risk B-ALL; induction with dexamethasone, vincristine, and asparaginase is appropriate, and if minimal residual disease (MRD) is negative at day 29, therapy intensity may be reduced without compromising outcomes.",
      C: "Immediate allogeneic stem cell transplantation is indicated after induction because hyperdiploid B-ALL in childhood is associated with primary chemoresistance and high relapse rates.",
      D: "A tyrosine kinase inhibitor such as imatinib should be added to induction because hyperdiploidy frequently co-segregates with cryptic BCR::ABL1 fusions that mandate targeted therapy.",
      E: "Cranial irradiation is mandatory for CNS prophylaxis because the hyperdiploid karyotype correlates with a significantly increased risk of meningeal leukaemia."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, defines childhood standard-risk ALL as age 1-9 years with a white cell count <50 x 10^9/L (Fig. 17.5; Table 17.4). Hyperdiploidy with >50 chromosomes is a distinct WHO subtype and is generally associated with a good prognosis. The UKALL 2003 trial demonstrated that children with no evidence of MRD at day 29 can have the number of intensification blocks reduced without impairing their excellent prognosis, and this is now standard therapy. High-risk blocks are reserved for children with high-risk features such as age >10 years or WBC >50 x 10^9/L. Allogeneic SCT is not first-line for standard-risk hyperdiploid ALL. Hyperdiploidy is not associated with BCR::ABL1 fusions. Intrathecal methotrexate is the mainstay of CNS prophylaxis; cranial irradiation is not routinely indicated for this subgroup."
  },
  {
    num: 212,
    stem: "A 16-year-old boy presents with cough, dyspnoea, and facial swelling consistent with superior vena cava syndrome. Chest X-ray reveals a large anterior mediastinal mass. Full blood count: white cell count 220 x 10^9/L, haemoglobin 98 g/L, platelets 85 x 10^9/L. Bone marrow shows 85% blasts expressing CD7, cytoplasmic CD3 (cCD3)+, CD1a-, CD8-, and CD34+. A pleural effusion is present. Which of the following best describes his diagnosis and expected prognosis?",
    options: {
      A: "He has mature peripheral T-cell lymphoma; CHOP-like chemotherapy is first-line because mature T-cell neoplasms respond poorly to acute lymphoblastic leukaemia (ALL)-type induction regimens.",
      B: "He has early T-precursor (ETP) ALL; although treated with standard ALL protocols, his prognosis is worse than other T-ALL due to myeloid-associated mutations and immunophenotypic features.",
      C: "He has B-lymphoblastic lymphoma with aberrant T-cell marker expression; rituximab should be added to standard ALL induction because CD7 positivity indicates aberrant B-cell maturation.",
      D: "He has primary mediastinal large B-cell lymphoma; DA-EPOCH-R is the regimen of choice and mediastinal irradiation should follow induction.",
      E: "He has classical Hodgkin lymphoma with leukaemic phase; ABVD chemotherapy combined with allogeneic stem cell transplantation is required because the high white cell count indicates bone marrow involvement."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes T-ALL as frequently presenting with a very high white cell count, mediastinal mass, or pleural effusion. ETP ALL is characterised by expression of CD7 but lack of CD1a and CD8, with expression of at least one myeloid/stem-cell-associated marker such as CD34. The genetic profile of ETP ALL is distinct: common T-cell-associated gene alterations such as NOTCH1 or CDKN1/2 are rare, whereas myeloid-associated gene mutations are common, and the prognosis is worse than for other patients with T-ALL. The other options describe entirely different disease entities that are inconsistent with the immunophenotype (cCD3+, CD7+, CD1a- confirms T-cell lineage)."
  },
  {
    num: 213,
    stem: "A 54-year-old man is diagnosed with B-cell acute lymphoblastic leukaemia (B-ALL). Bone marrow cytogenetics demonstrate t(9;22)(q34;q11.2) and molecular analysis confirms BCR::ABL1 fusion. He is otherwise fit with normal cardiac, hepatic, and renal function. Which of the following represents the most appropriate contemporary treatment strategy?",
    options: {
      A: "Induction with dexamethasone, vincristine, and asparaginase alone, because BCR::ABL1-positive ALL responds well to standard chemotherapy without the need for targeted agents.",
      B: "Immediate allogeneic stem cell transplantation without preceding induction, because the presence of the Philadelphia chromosome mandates urgent transplantation before blast reduction.",
      C: "Induction incorporating a tyrosine kinase inhibitor (e.g., imatinib or dasatinib) combined with chemotherapy, followed by consolidation and consideration of allogeneic stem cell transplantation if minimal residual disease remains positive.",
      D: "Blinatumomab monotherapy as first-line treatment, because bi-specific T-cell engager constructs are superior to tyrosine kinase inhibitors in Philadelphia-positive disease and should replace chemotherapy entirely.",
      E: "Observation with oral hydroxycarbamide until disease progression, because adult BCR::ABL1-positive ALL is indolent and does not require immediate intensive therapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that BCR::ABL1-positive (Philadelphia chromosome-positive) ALL carries an unfavourable prognosis, but outcomes have improved significantly with the addition of BCR-ABL1 tyrosine kinase inhibitors (TKIs) to treatment regimens. Induction incorporates a TKI such as imatinib combined with chemotherapy; allogeneic stem cell transplantation is considered for those with persistent minimal residual disease or other high-risk features. Standard chemotherapy alone is insufficient for this subtype. Immediate transplantation without induction is unsafe because of high tumour burden and risk of treatment-related mortality. Blinatumomab is an important option for relapsed/refractory disease but is not standard first-line monotherapy for Philadelphia-positive ALL. Hydroxycarbamide is inadequate; BCR::ABL1-positive ALL is aggressive and requires immediate intensive therapy."
  },
  {
    num: 214,
    stem: "A 3-month-old infant presents with lethargy, pallor, and massive hepatosplenomegaly. Full blood count: haemoglobin 65 g/L, white cell count 85 x 10^9/L, platelets 42 x 10^9/L. Bone marrow shows 90% blasts. Molecular genetics reveal a chromosomal translocation involving the KMT2A gene at 11q23. Which statement most accurately describes his prognosis and treatment approach?",
    options: {
      A: "He has infant ALL with KMT2A rearrangement, which carries a poor prognosis with cure rates of only 20-50%, and requires specific treatment protocols distinct from those used in older children.",
      B: "He has congenital acute myeloid leukaemia (AML) with KMT2A rearrangement; induction with cytarabine and anthracycline is preferred over ALL-type therapy because the KMT2A gene defines myeloid lineage.",
      C: "He has standard-risk B-ALL; because infants under 1 year are classified as standard-risk when hyperdiploidy is absent, he should receive standard paediatric induction therapy.",
      D: "He has mixed-phenotype acute leukaemia; the KMT2A rearrangement necessitates therapy with both AML and ALL regimens administered simultaneously.",
      E: "He has a benign transient myeloproliferative disorder associated with Down syndrome; observation is appropriate because spontaneous remission is expected within weeks."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that ALL in infants (<1 year) has a poor clinical outcome, with cure rates of only 20-50%. The disease is associated with a chromosomal translocation involving the KMT2A gene in approximately 80% of cases and is treated using specific protocols distinct from those used for older children. The high blast count and KMT2A rearrangement are characteristic of infant B-ALL, not congenital AML or transient myeloproliferative disorder. Transient myeloproliferative disorder of Down syndrome typically occurs in neonates and often resolves spontaneously, but this infant lacks Down syndrome and the clinical picture is overt leukaemia. Mixed-phenotype acute leukaemia requires dual lineage expression by strict immunophenotypic criteria, which is not described here."
  },
  {
    num: 215,
    stem: "A 7-year-old girl with common B-ALL is in morphological remission after standard induction therapy. At day 29, minimal residual disease (MRD) assessment by next-generation sequencing of the immunoglobulin heavy chain (IGH) gene shows 0.005% leukaemic cells. Which of the following best describes the prognostic implication and appropriate next step in management?",
    options: {
      A: "MRD of 0.005% is below the detection threshold and therefore carries no prognostic significance; she should continue standard maintenance without any modification to therapy.",
      B: "She has detectable MRD below 0.01%; according to UKALL2003 protocols, this places her in a good prognostic category and therapy intensity may be safely reduced.",
      C: "Detectable MRD at any level indicates high risk of relapse; she should immediately proceed to allogeneic stem cell transplantation regardless of other risk factors.",
      D: "MRD assessment by next-generation sequencing is not validated in childhood ALL; multi-colour flow cytometry is the only accepted method and the result should be disregarded.",
      E: "Because MRD is positive, she requires re-induction with high-dose cytarabine and etoposide before any further therapy decisions can be made."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 17.8, 17.11), describes next-generation sequencing of IGH or T-cell receptor junctional sequences as the most sensitive method for MRD detection, with a sensitivity of 1 in 10^6. It is applicable in >90% of cases, high-throughput, and does not require patient-specific primers. In the UKALL 2003 trial, children with no MRD (<0.01%) at day 29 were in a good prognostic category and could have the number of intensification blocks reduced without impairing their excellent prognosis; this is now standard therapy. Detectable MRD does not automatically mandate allogeneic SCT in this context. Flow cytometry has lower sensitivity (1 in 10^4) but is also validated and used in parallel. Re-induction is not required for low-level MRD at day 29 in a standard-risk patient."
  },
  {
    num: 216,
    stem: "Regarding the molecular pathogenesis of T-cell acute lymphoblastic leukaemia (T-ALL), which of the following statements most accurately describes the role of NOTCH1 signalling?",
    options: {
      A: "NOTCH1 is constitutively activated in most T-ALL cases through ligand-independent mutations that increase cleavage and nuclear translocation of the intracellular NOTCH1 domain, leading to transcription of target genes including MYC.",
      B: "NOTCH1 activation in T-ALL occurs exclusively through chromosomal translocations that bring the NOTCH1 promoter under control of the TCR beta locus enhancer.",
      C: "NOTCH1 is tumour-suppressive in T-ALL; loss-of-function mutations in the extracellular domain prevent ligand binding and thereby inhibit leukaemogenesis.",
      D: "The gamma-secretase complex degrades intracellular NOTCH1 in T-ALL, and gamma-secretase inhibitors are used to stabilise NOTCH1 and restore normal T-cell development.",
      E: "NOTCH1 mutations are rare in T-ALL and are found only in early T-precursor (ETP) ALL, where they define a favourable prognosis subgroup."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 17.6), describes that the majority of T-ALL cases have acquired genetic abnormalities leading to constitutive activation of the NOTCH signalling pathway. These abnormalities include mutations in the extracellular cleavage site, internal tandem duplications in the juxtamembrane region, or deletion of the intracellular PEST domain. The net result of all these mutations is to increase the rate of cleavage by ADAM10 and the gamma-secretase complex and nuclear translocation of the intracellular NOTCH1 (ICN) domain, leading to aberrant activation of target genes including MYC. NOTCH1 can also be activated by translocations and by inactivating mutations in the enzyme that degrades ICN. The other options misrepresent the mechanism: NOTCH1 is oncogenic, not tumour-suppressive; gamma-secretase inhibitors are being developed to block, not stabilise, NOTCH1 activation; and NOTCH1 mutations are common in conventional T-ALL but rare in ETP ALL."
  },
  {
    num: 217,
    stem: "Regarding the WHO 2022 classification and cytogenetic subtypes of acute lymphoblastic leukaemia, which statement is most accurate?",
    options: {
      A: "BCR::ABL1-like ALL is defined by the presence of the Philadelphia chromosome on conventional karyotyping and represents approximately 40% of adult ALL cases.",
      B: "Hyperdiploid B-ALL with >50 chromosomes is classified as a distinct WHO subtype and is generally associated with a good prognosis, whereas hypodiploidy with <45 chromosomes carries a poor prognosis.",
      C: "ETV6::RUNX1 fusion is the most common genetic abnormality in adult B-ALL and confers a poor prognosis because the fusion protein activates oncogenic drivers in mature B cells.",
      D: "TCF3::PBX1 fusion is specific to T-ALL and defines a subgroup with ectopic thymic expression and a favourable response to NOTCH inhibitors.",
      E: "B-lymphoblastic leukaemia with IGH::IL3 fusion is associated with eosinophilia and T-cell lineage commitment due to IL3 receptor expression on T-cell precursors."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 17.1), lists B-lymphoblastic leukaemia/lymphoma with high hyperdiploidy (>50 chromosomes) as a distinct WHO 2022 subtype. Hyperdiploid cells generally have a good prognosis, whereas hypodiploid cases (<45 chromosomes) carry a poor prognosis. BCR::ABL1-like cases lack the Philadelphia chromosome but have a similar gene expression signature; they comprise approximately 15% of children and 20-25% of adolescents and young adults, not 40% of older adults. ETV6::RUNX1 is the most common specific abnormality in childhood B-ALL, not adult, and confers a good prognosis because RUNX1 transcriptional control of haemopoiesis is repressed by the fusion protein. TCF3::PBX1 is a B-ALL subtype, not T-ALL. IGH::IL3 fusion is classified under B-lymphoblastic leukaemia/lymphoma."
  },
  {
    num: 218,
    stem: "Regarding minimal residual disease (MRD) assessment in acute lymphoblastic leukaemia, which of the following statements is most accurate?",
    options: {
      A: "Multi-colour flow cytometry detects leukaemia cells by identifying aberrant antigen expression with a sensitivity of 1 in 10^6, which is superior to next-generation sequencing of immunoglobulin gene rearrangements.",
      B: "Next-generation sequencing of immunoglobulin heavy chain or T-cell receptor junctional sequences does not require patient-specific primers, is high-throughput, and offers a sensitivity of 1 in 10^6, but is only applicable in approximately 40% of cases.",
      C: "Reverse transcription PCR (RT-qPCR) for fusion genes is applicable in 40-50% of cases with a sensitivity of 10^-4 to 10^-5, whereas allele-specific oligonucleotide PCR for clonal rearrangements has a sensitivity of 10^-4 to 10^-5 and is applicable in >90% of cases.",
      D: "MRD positivity in adults after 3 months of therapy is an unfavourable prognostic indicator that mandates immediate cessation of all chemotherapy and transition to palliative care.",
      E: "Peripheral blood MRD testing has no correlation with bone marrow MRD in ALL and should not be used for clinical decision-making."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 17.8), describes that multi-colour flow cytometry has a sensitivity of 1 in 10^4, not 10^-6. Reverse transcription PCR (RT-qPCR) for fusion genes is applicable in 40-50% of cases with a sensitivity of 10^-4 to 10^-5. Allele-specific oligonucleotide (ASO)-PCR for clonal rearrangements has a sensitivity of 10^-4 to 10^-5 and is applicable in >90% of cases. Next-generation sequencing offers sensitivity of 1 in 10^6 and is applicable in >90% of cases, not 40%. MRD positivity in adults after 3 months is an unfavourable prognostic indicator and typically leads to consideration of allogeneic stem cell transplantation if a suitable donor is available, not immediate transition to palliative care. There is good correlation between peripheral blood and bone marrow MRD results."
  },
  {
    num: 219,
    stem: "Regarding the immunophenotypic markers used to classify acute lymphoblastic leukaemia, which statement is most accurate?",
    options: {
      A: "Terminal deoxynucleotidyl transferase (TdT) is positive in both B-ALL and T-ALL blasts, but is also expressed in mature B cells and plasma cells, limiting its utility as a lineage marker.",
      B: "Surface immunoglobulin (sIg) is typically positive in common B-ALL (c-ALL) and confirms mature B-cell differentiation, whereas cytoplasmic immunoglobulin (cIg) is absent until the pre-B stage.",
      C: "CD19, cytoplasmic CD22 (cCD22), and cytoplasmic CD79a (cCD79a) are B lineage-associated markers, whereas CD7, cytoplasmic CD3 (cCD3), and CD1a are T lineage-associated markers, with CD1a positivity excluding early T-precursor (ETP) ALL.",
      D: "Myeloid-associated markers such as CD13 and CD33 are never expressed in ALL blasts; their presence definitively excludes ALL and indicates acute myeloid leukaemia or mixed-phenotype acute leukaemia.",
      E: "In T-ALL, CD4 and CD8 are co-expressed only in early T-precursor (ETP) ALL, where their dual positivity defines the immature precursor phenotype and predicts a favourable response to standard induction."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 17.2), lists CD19, cCD22, and cCD79a as B lineage-associated markers, and CD7, cCD3, CD2, TdT, CD1a, and CD4/CD8 as T lineage-associated markers. TdT is positive in both B-ALL and T-ALL but is negative in mature B cells and plasma cells, making it a useful marker of immaturity. Surface immunoglobulin is negative in B-ALL; cytoplasmic immunoglobulin is present in pre-B ALL. CD1a positivity characterises more mature T cells; ETP ALL lacks CD1a and CD8. Myeloid-associated markers such as CD13 and CD33 may be expressed in biphenotypic acute leukaemia or in the early T-precursor subtype, so their presence does not definitively exclude ALL. CD4 and CD8 are T lineage markers but ETP ALL lacks CD8, and the prognosis of ETP ALL is worse, not favourable."
  },
  {
    num: 220,
    stem: "Regarding contemporary targeted and immunotherapeutic approaches for relapsed/refractory B-cell acute lymphoblastic leukaemia, which statement is most accurate?",
    options: {
      A: "Blinatumomab is a monoclonal antibody that binds CD19 and delivers a cytotoxic drug directly into the leukaemia cell, causing DNA interstrand cross-linking and apoptosis.",
      B: "Inotuzumab ozogamicin is a bi-specific T-cell engager that links CD3 on T cells to CD22 on malignant B cells, enabling T-cell-mediated cytotoxicity.",
      C: "Anti-CD19 chimeric antigen receptor (CAR)-T cell therapy programmes the patient's own T cells to kill CD19-expressing B cells, but relapses with CD19-negative blast subsets may occur as a mechanism of immune evasion.",
      D: "Venetoclax is a proteasome inhibitor that induces apoptosis in B-ALL by blocking the ubiquitin-proteasome degradation pathway in leukaemia cells.",
      E: "Daratumumab targets CD19 on B-ALL blasts and is approved as first-line therapy for relapsed disease in combination with standard chemotherapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 17.10), describes blinatumomab as a bi-specific T-cell engager (BiTE) construct consisting of two connected single-chain variable antibody fragments that bring CD19-expressing B cells into proximity with CD3-expressing T cells, resulting in T-cell-mediated lysis. It is not an antibody-drug conjugate. Inotuzumab ozogamicin is an anti-CD22 antibody-cytotoxic drug conjugate. Anti-CD19 CAR-T cell therapy programmes the patient's own T cells to kill CD19-expressing B cells; it is approved for relapsed and refractory B-ALL. However, relapses of ALL with CD19-negative blast subsets may occur after CAR-T therapy, representing a mechanism of immune evasion by the leukaemia cells. Venetoclax is a BCL-2 inhibitor, not a proteasome inhibitor. Daratumumab targets CD38 and is being assessed in clinical trials; it is not approved as first-line therapy for relapsed B-ALL."
  },
  {
    num: 501,
    stem: "A 22-year-old man is diagnosed with B-cell acute lymphoblastic leukaemia (B-ALL). Full blood count shows a white cell count of 68 x 10^9/L. Conventional cytogenetics and FISH do not show t(9;22), but RNA sequencing classifies the leukaemia as BCR::ABL1-like, with an IGH::CRLF2 rearrangement and a JAK2 pathway mutation detected by targeted sequencing. He is otherwise fit. Which of the following is the most appropriate treatment approach?",
    options: {
      A: "Use a standard pediatric-style chemotherapy backbone alone, because BCR::ABL1-like ALL lacks a validated targetable kinase driver.",
      B: "Incorporate a JAK inhibitor into ALL-directed chemotherapy, because CRLF2-overexpressing BCR::ABL1-like cases frequently harbour JAK-STAT pathway mutations.",
      C: "Add imatinib to induction, because CRLF2 rearrangements create an ABL-class fusion that responds to ABL tyrosine kinase inhibitors.",
      D: "Proceed directly to allogeneic stem cell transplantation after 1 week of hydroxycarbamide, because BCR::ABL1-like disease is uniformly chemoresistant and induction is futile.",
      E: "Use blinatumomab monotherapy as first-line therapy, because CD19 expression in BCR::ABL1-like ALL means immunotherapy should replace chemotherapy entirely."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes BCR::ABL1-like ALL among Philadelphia chromosome-negative cases that share a gene expression signature with BCR::ABL1-positive disease. Approximately 60% of these patients show CRLF2 overexpression, and 85% of those cases have JAK-STAT pathway mutations, including JAK2. For rearrangements involving JAK2 or EPOR, JAK inhibitors may be amenable, and the role of kinase inhibitors is being tested in trials. A standard chemotherapy backbone alone ignores the activated kinase biology; ABL-class tyrosine kinase inhibitors are reserved for fusions involving ABL1, ABL2, CSF1R or PDGFRB, not for CRLF2/JAK2 lesions. Immediate transplantation without induction is unsafe, and blinatumomab is approved for relapsed/refractory disease, not as first-line monotherapy."
  },
  {
    num: 502,
    stem: "A 5-year-old boy with common B-cell acute lymphoblastic leukaemia is 18 months into maintenance therapy when he develops morning headache, vomiting, and diplopia. Examination reveals papilloedema. Cerebrospinal fluid examination shows 15 blast cells/µL, and bone marrow aspirate shows <5% blasts. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Isolated cranial irradiation as the only CNS-directed therapy, because the presence of CSF blasts mandates radiotherapy alone.",
      B: "Restart oral maintenance mercaptopurine and methotrexate at higher doses, because escalating maintenance drugs will cross the blood-brain barrier and clear the CSF.",
      C: "Intrathecal methotrexate, cytarabine, and hydrocortisone together with systemic re-induction chemotherapy, with allogeneic stem cell transplantation considered after remission.",
      D: "Perform a therapeutic lumbar puncture to drain the CSF blasts, then continue standard maintenance therapy unchanged.",
      E: "Administer intrathecal methotrexate prophylaxis only, because a CNS relapse during maintenance has the same excellent prognosis as disease at initial presentation."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that CNS relapses present with headache, vomiting, papilloedema and blast cells in the CSF. Treatment is with intrathecal methotrexate, cytarabine and hydrocortisone, with or without cranial irradiation, in addition to systemic chemotherapy, because bone marrow disease is often also present. Relapse during or soon after maintenance chemotherapy carries a relatively poor prognosis; re-induction with intensive chemotherapy followed by allogeneic stem cell transplantation is the traditional approach. Cranial irradiation alone or maintenance escalation is insufficient; a therapeutic lumbar puncture does not replace systemic and intrathecal therapy; CNS relapse during therapy is not equivalent to newly diagnosed disease."
  },
  {
    num: 503,
    stem: "A 71-year-old woman with CD19-positive, CD22-positive B-cell acute lymphoblastic leukaemia relapses 8 months after completing first-line chemotherapy. She has mild renal impairment (eGFR 48 mL/min), no suitable donor is currently available, and she declines further intensive cytotoxic chemotherapy. Which of the following is the most appropriate contemporary therapy?",
    options: {
      A: "High-dose cytarabine and mitoxantrone re-induction, because age alone should not alter the intensity of treatment for relapsed ALL.",
      B: "Blinatumomab, a CD19/CD3 bispecific T-cell engager, as monotherapy with the goal of remission and bridging to allogeneic stem cell transplantation if a donor and response are achieved.",
      C: "Oral 6-mercaptopurine and methotrexate maintenance at increased doses, because low-level relapse can be controlled by escalating maintenance therapy.",
      D: "Cranial irradiation plus intrathecal hydrocortisone, because CNS prophylaxis is the priority even in the absence of CNS symptoms or CSF blasts.",
      E: "Observation and best supportive care only, because relapsed ALL in older adults is universally fatal and active therapy is futile."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes blinatumomab as a bispecific T-cell engager (BiTE) construct that links CD3 on the patient's T cells to CD19 on malignant B cells, producing T-cell-mediated lysis. It is approved for relapsed/refractory B-ALL and is increasingly used in older adults to avoid the toxicity of intensive chemotherapy. High-dose re-induction would be poorly tolerated with renal impairment. Escalating maintenance therapy is not curative for frank relapse. CNS-directed treatment is only indicated when CNS disease is present. Modern immunotherapy can achieve remission in this setting and may be bridged to allogeneic stem cell transplantation."
  },
  {
    num: 504,
    stem: "A 17-year-old male with standard-risk B-cell acute lymphoblastic leukaemia is in maintenance therapy and reports progressive bilateral hip and knee pain. MRI demonstrates avascular necrosis of both femoral heads. He is receiving monthly vincristine and dexamethasone pulses. Which of the following best explains this complication and the risk-stratification rationale that could have reduced its likelihood?",
    options: {
      A: "Anthracycline-induced vascular injury; reducing daunorubicin exposure is the principal strategy to prevent avascular necrosis.",
      B: "Corticosteroid-related osteonecrosis; treating more standard-risk patients with lower-intensity protocols reduces exposure to high-dose dexamethasone.",
      C: "Asparaginase-associated hyperlipidaemia causing fat emboli to bone; switching to non-pegylated asparaginase would reverse established necrosis.",
      D: "Methotrexate direct bone marrow toxicity; intrathecal methotrexate is the main cause of hip avascular necrosis.",
      E: "Vinca alkaloid neurotoxicity affecting bone vasculature; reducing vincristine frequency prevents osteonecrosis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that avascular bone necrosis is seen in teenagers and young adults in association with high doses of dexamethasone. New-generation clinical trials aim to reduce toxicity while preserving anti-leukaemic activity by risk-stratifying patients, so that the intensity of treatment is reduced in standard-risk disease. Anthracyclines are associated with long-term cardiac risk, not avascular necrosis. Asparaginase, methotrexate and vincristine are not implicated in this complication, and established osteonecrosis is not reversed by switching asparaginase formulation."
  },
  {
    num: 505,
    stem: "A 6-year-old boy with Down syndrome is diagnosed with B-cell acute lymphoblastic leukaemia. Cytogenetic and molecular profiling show no t(9;22), but RNA sequencing demonstrates a BCR::ABL1-like gene expression signature with an IGH::CRLF2 rearrangement. Which statement best describes the biology and therapeutic implications?",
    options: {
      A: "Down syndrome confers protection against B-ALL, and the BCR::ABL1-like signature in this context is a benign variant that does not alter therapy.",
      B: "Children with Down syndrome have a markedly increased risk of B-ALL, and BCR::ABL1-like disease is over-represented in this population; JAK-STAT-targeted agents are under active investigation.",
      C: "The IGH::CRLF2 rearrangement places him in the mature B-cell leukaemia category, so rituximab plus CHOP-like chemotherapy is indicated.",
      D: "BCR::ABL1-like ALL in Down syndrome is biologically equivalent to Philadelphia chromosome-positive ALL, so imatinib must be added to induction.",
      E: "Because of the high risk of therapy-related acute myeloid leukaemia, allogeneic stem cell transplantation should be performed before any chemotherapy."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that children with constitutional trisomy 21 (Down syndrome) have a remarkably increased risk of B-ALL (33-fold increase compared with other children). BCR::ABL1-like ALL is more common in Down syndrome; about 60% of BCR::ABL1-like cases overexpress CRLF2 and many harbour JAK-STAT pathway mutations, so the role of kinase inhibitors is being tested in trials. The disease remains lymphoblastic leukaemia, not mature B-cell neoplasia, and it is not equivalent to BCR::ABL1-positive ALL. Allogeneic stem cell transplantation before chemotherapy is not indicated."
  },
  {
    num: 506,
    stem: "Regarding the pathogenesis of childhood B-cell acute lymphoblastic leukaemia, which statement most accurately integrates the concepts of prenatal initiation and postnatal progression?",
    options: {
      A: "The ETV6::RUNX1 translocation arising in utero is sufficient to produce overt ALL, and all carriers develop leukaemia in early childhood.",
      B: "Concordance studies in identical twins show that a shared prenatal clone can be present in both twins, but a secondary transforming event is required for clinical leukaemia.",
      C: "V(D)J recombination occurs only after birth, so all childhood ALL genetic lesions must be postnatal.",
      D: "Germline polymorphisms in IKZF1 are protective against B-ALL because they enhance normal B-cell development.",
      E: "Children who attend nursery daycare have a higher incidence of ALL because increased social exposure promotes the first genetic hit."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Fig. 17.1), describes the prenatal origin of childhood ALL: identical twins may be born with the same chromosomal abnormality, such as t(12;21)(ETV6::RUNX1), presumed to have arisen in a haemopoietic progenitor disseminated via shared placental circulation. However, the long latency indicates that a secondary event is required for overt leukaemia; only about 1 in 100 newborns carrying the ETV6::RUNX1 clone develop ALL. V(D)J recombination contributes to genomic instability during fetal lymphoid expansion. Germline IKZF1 polymorphisms predispose to B-ALL. High social activity and early daycare are associated with a reduced incidence of ALL, consistent with the 'delayed infection' hypothesis."
  },
  {
    num: 507,
    stem: "Regarding the role of IKZF1 alterations in B-cell acute lymphoblastic leukaemia, which statement is most accurate?",
    options: {
      A: "IKZF1 deletions are rare in B-ALL and are found almost exclusively in low-risk hyperdiploid cases, where they predict an excellent outcome.",
      B: "IKZF1 is a transcription factor essential for B-cell development; germline polymorphisms and leukaemic deletions are associated with B-ALL, and deletion in BCR::ABL1-positive cases is nearly universal and adverse.",
      C: "IKZF1 mutations activate the JAK-STAT pathway directly, so they mandate JAK inhibitor therapy regardless of other cytogenetic findings.",
      D: "Loss of IKZF1 is specific to T-cell ALL and predicts resistance to NOTCH1-targeted therapy.",
      E: "IKZF1 deletions define the early T-precursor (ETP) ALL subtype by causing loss of CD1a and CD8 expression."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that germline polymorphisms in genes involved in B-cell development, such as IKZF1, appear to predispose to B-ALL. In addition, IKZF1 is deleted in the leukaemic cells in approximately 30% of high-risk B-ALL and 95% of BCR::ABL1-positive cases. IKZF1 encodes the B-cell transcription factor Ikaros, which is essential for normal lymphoid development. It is not specific to T-ALL, does not define ETP ALL, does not directly activate JAK-STAT, and is not a favourable marker."
  },
  {
    num: 508,
    stem: "According to the prognostic factors for acute lymphoblastic leukaemia presented in Hoffbrand's Essential Haematology, 9th Edition, which combination is most strongly associated with a favourable prognosis?",
    options: {
      A: "Age 35 years, male sex, white cell count 80 x 10^9/L B-ALL, hypodiploidy, CNS disease at presentation, MRD 0.1% at 3 months.",
      B: "Age 4 years, female sex, white cell count 18 x 10^9/L B-ALL, hyperdiploidy with >50 chromosomes, no CNS disease, MRD <0.01% at day 29.",
      C: "Age 14 months, male sex, white cell count 120 x 10^9/L T-ALL, KMT2A rearrangement, CNS disease, blasts cleared from blood after 2 weeks.",
      D: "Age 55 years, male sex, white cell count 60 x 10^9/L, BCR::ABL1-positive, persistent MRD at 6 months.",
      E: "Age 8 years, male sex, white cell count 55 x 10^9/L, normal karyotype, blasts cleared from blood after 10 days."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 17.4), lists good-prognosis factors as low white cell count (<50 x 10^9/L in B-ALL; <100 x 10^9/L in T-ALL), female sex, age 1-10 years, B-cell immunophenotype in children, normal or hyperdiploid karyotype or ETV6 rearrangement, absence of CNS disease at presentation, and negative or very low minimal residual disease at day 29 in children (or 3 months in adults). Option B combines young age, low WBC, female sex, hyperdiploidy, no CNS disease and early MRD negativity. The other options each contain adverse features such as adult age, high WBC, hypodiploidy, infant/T-cell/KMT2A/CNS disease, BCR::ABL1 positivity, or slow blast clearance."
  },
  {
    num: 509,
    stem: "A 10-year-old boy with standard-risk B-cell acute lymphoblastic leukaemia has completed induction, consolidation and delayed intensification and is morphologically and minimal residual disease-negative. Which statement best describes contemporary maintenance therapy for this patient?",
    options: {
      A: "Maintenance therapy is optional in MRD-negative children because the risk of late relapse after intensive consolidation is negligible.",
      B: "Daily oral mercaptopurine plus weekly oral methotrexate is given; total intensive therapy finishes around week 38 and maintenance continues until week 112 in girls or 164 in boys.",
      C: "Maintenance should be stopped at 6 months to minimize the risks of second malignancy and infectious complications.",
      D: "Intrathecal methotrexate is not given during maintenance because the central nervous system sanctuary has already been sterilised by induction.",
      E: "Pneumocystis jirovecii prophylaxis is unnecessary during maintenance because mercaptopurine and methotrexate do not impair cellular immunity."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes maintenance therapy with daily oral mercaptopurine and once-weekly oral methotrexate, with monthly or 3-monthly pulses of vincristine and corticosteroid, to prevent late relapses. In typical regimens, intensive chemotherapy finishes around week 38 and maintenance begins again, lasting until week 112 in girls or 164 in boys. Intrathecal chemotherapy is given during all stages of treatment. Pneumocystis prophylaxis with co-trimoxazole or atovaquone, and antiviral prophylaxis, are given because of immunosuppression. Stopping or omitting maintenance would substantially increase relapse risk."
  },
  {
    num: 510,
    stem: "Which statement most accurately characterizes B-lymphoblastic leukaemia/lymphoma with IGH::IL3 fusion, t(5;14), as classified in Hoffbrand's Essential Haematology, 9th Edition?",
    options: {
      A: "It is a T-cell ALL subtype defined by overexpression of the IL-3 receptor on thymic precursors, causing eosinopenia.",
      B: "It is a B-ALL subtype in which the IGH enhancer drives IL-3 overproduction, often associated with peripheral eosinophilia and sometimes cardiac or other organ involvement from eosinophil infiltration.",
      C: "It is the most common genetic subtype in adults and carries a favourable prognosis similar to ETV6::RUNX1-positive ALL.",
      D: "It results from dysregulated PDGFRB signalling and responds to imatinib.",
      E: "It is classified as B-lymphoblastic leukaemia/lymphoma NOS because the t(5;14) translocation lacks prognostic significance."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 17.1), lists B-lymphoblastic leukaemia/lymphoma with IGH::IL3 fusion, t(5;14), as a distinct WHO 2022 B-ALL subtype. The IGH enhancer drives ectopic IL3 overexpression, which is frequently associated with peripheral eosinophilia; marked eosinophilia can cause cardiac or other organ infiltration. It is not a T-cell leukaemia, it is not the most common adult subtype, it does not carry the favourable prognosis of ETV6::RUNX1, it is not driven by PDGFRB, and it is a defined entity rather than NOS."
  }
];
