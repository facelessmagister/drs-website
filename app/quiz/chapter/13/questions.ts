export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 171,
    stem: "A 42-year-old woman presents with spontaneous epistaxis, widespread ecchymoses, and heavy menorrhagia. Laboratory studies show haemoglobin 82 g/L, white cell count 6.2 × 10⁹/L, platelets 12 × 10⁹/L. The blood film shows hypergranular blasts with abundant Auer rods. Coagulation studies reveal prothrombin time 22 s (control 12 s), activated partial thromboplastin time 58 s (control 32 s), fibrinogen 0.8 g/L, and D-dimer >80 mg/L. Bone marrow aspirate is hypercellular with 75% abnormal promyelocytes. FISH confirms t(15;17). Which of the following is the most appropriate immediate management?",
    options: {
      A: "All-trans retinoic acid (ATRA) combined with arsenic trioxide (or an anthracycline) alongside aggressive platelet and cryoprecipitate/fresh frozen plasma support to maintain platelet count >30–50 × 10⁹/L and fibrinogen >1.5 g/L.",
      B: "Standard daunorubicin and cytarabine (DA) induction chemotherapy as for conventional acute myeloid leukaemia, because the genetic subtype does not alter initial induction strategy.",
      C: "Supportive care with blood product transfusion alone until molecular confirmation of PML::RARα is available, to avoid unnecessary cytotoxic exposure if the diagnosis is incorrect.",
      D: "Immediate allogeneic stem cell transplantation as the definitive therapy for acute promyelocytic leukaemia, because ATRA-based therapy is reserved for patients who relapse after transplant.",
      E: "High-dose methotrexate and cytarabine intrathecal prophylaxis, because acute promyelocytic leukaemia has the highest risk of central nervous system relapse among all AML subtypes."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, emphasizes that acute promyelocytic leukaemia (APML) is a clinical emergency requiring urgent treatment with ATRA and management of the associated coagulopathy (Fig. 13.6 and text). The t(15;17) translocation produces PML::RARα, which functions as a transcriptional repressor causing arrested differentiation. APML commonly presents with disseminated intravascular coagulation and life-threatening haemorrhage. Treatment must proceed as an emergency with ATRA combined initially with either arsenic trioxide or an anthracycline, alongside DIC support including multiple platelet transfusions and replacement of clotting factors with cryoprecipitate or fresh frozen plasma, keeping platelet count >30–50 × 10⁹/L and fibrinogen >1.5 g/L. ATRA should be available as emergency hospital stock and given prior to confirmatory tests. Standard DA induction is incorrect because APML requires ATRA-containing regimens. Awaiting molecular confirmation risks fatal haemorrhage. Allogeneic SCT is not first-line for APML. CNS prophylaxis is not standard in AML."
  },
  {
    num: 172,
    stem: "A 68-year-old man with a 4-year history of myelodysplastic neoplasm presents with increasing fatigue and recurrent chest infections. Full blood count shows haemoglobin 76 g/L, white cell count 2.1 × 10⁹/L, neutrophils 0.4 × 10⁹/L, platelets 22 × 10⁹/L. Bone marrow aspirate reveals 28% myeloblasts. Cytogenetics demonstrates a complex karyotype with monosomy 7 and 11q deletion. Molecular analysis identifies ASXL1 and SRSF2 mutations. According to the WHO 2022 classification and prognostic stratification described in Hoffbrand, which of the following best characterizes this disease and its expected outcome?",
    options: {
      A: "AML, myelodysplasia-related, with an unfavourable prognosis due to MDS-associated mutations (ASXL1, SRSF2), complex karyotype, and expected resistance to chemotherapy.",
      B: "De novo AML with intermediate-risk cytogenetics, because a blast count of 28% exceeds the diagnostic threshold regardless of background MDS or molecular profile.",
      C: "Secondary AML due to prior cytotoxic exposure, typically associated with TP53 or KMT2A mutations and requiring allogeneic SCT in first remission.",
      D: "AML with defining genetic abnormalities, because complex karyotype and monosomy 7 are classified as defining cytogenetic abnormalities in the WHO 2022 scheme.",
      E: "Myeloid sarcoma, because extramedullary involvement is the defining feature of AML arising in the setting of pre-existing myelodysplasia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.2 lists ASXL1, SRSF2, and other spliceosome mutations as somatic mutations defining AML, myelodysplasia-related, while complex karyotype (>3 abnormalities), monosomy 7, and 11q deletion are defining cytogenetic abnormalities for the same category. The text states that AML, myelodysplasia-related is defined by cytogenetic or molecular abnormalities related to myelodysplasia and/or a history of MDS, and that these secondary AML cases are often associated with chemotherapy resistance and a poor prognosis (Table 13.5). De novo AML is incorrect because the MDS history and MDS-associated mutations classify this as myelodysplasia-related. Cytotoxic-associated secondary AML typically shows TP53 or KMT2A mutations. Complex karyotype is classified under myelodysplasia-related, not defining genetic abnormalities. Myeloid sarcoma requires extramedullary tumour formation."
  },
  {
    num: 173,
    stem: "A 31-year-old man is diagnosed with de novo acute myeloid leukaemia. Bone marrow cytogenetics reveals t(8;21)(q22;q22) with RUNX1::RUNX1T1 fusion. He achieves complete remission (<5% blasts) after one course of daunorubicin and cytarabine. Measurable residual disease (MRD) monitoring by quantitative PCR for RUNX1::RUNX1T1 transcripts is undetectable after consolidation. Which of the following represents the most appropriate next step in management?",
    options: {
      A: "Continue with consolidation chemotherapy (e.g., high-dose cytarabine) and ongoing MRD monitoring; allogeneic stem cell transplantation is not indicated in first remission for favourable-risk disease with adequate MRD response.",
      B: "Proceed immediately to myeloablative allogeneic stem cell transplantation in first remission, because all AML patients benefit from transplant regardless of cytogenetic risk group.",
      C: "Add gemtuzumab ozogamicin to consolidation because he has intermediate-risk disease and GO improves outcomes in this subgroup.",
      D: "Commence maintenance with oral azacitidine, because all patients under 60 years require maintenance therapy to prevent relapse.",
      E: "Repeat induction chemotherapy because a single course achieving molecular negativity is insufficient and at least two courses of induction are mandatory before consolidation."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.5 classifies t(8;21) and inv(16) as favourable cytogenetics. The text explicitly states that allogeneic stem cell transplantation is not used for patients in the favourable risk group unless they have disease relapse or poor response via MRD monitoring. Consolidation with high-dose cytarabine is standard, and MRD monitoring is particularly important in favourable and intermediate risk disease. Gemtuzumab ozogamicin is standard in favourable risk including t(8;21) and inv(16) during initial or consolidation therapy, but the key point here is that SCT is not indicated in CR1 for favourable risk with adequate MRD response. Oral azacitidine maintenance is considered for patients over 55 who are ineligible for allogeneic SCT, not as a blanket rule for all younger patients. Repeat induction is unnecessary when CR and MRD negativity have been achieved."
  },
  {
    num: 174,
    stem: "A 74-year-old woman is diagnosed with acute myeloid leukaemia. She has an Eastern Cooperative Oncology Group (ECOG) performance status of 2, ischaemic heart disease with an ejection fraction of 32%, and stage 3 chronic kidney disease. Cytogenetics shows a normal karyotype. Next-generation sequencing reveals an NPM1 mutation and wild-type FLT3. She is deemed unfit for intensive chemotherapy. Which of the following treatment strategies best aligns with the standard of care described in Hoffbrand?",
    options: {
      A: "Venetoclax with a hypomethylating agent (azacitidine or decitabine), as this is the standard of care for unfit patients and has demonstrated improved remission rates and overall survival compared with hypomethylating agents alone.",
      B: "Standard daunorubicin and cytarabine induction chemotherapy, because an NPM1 mutation confers favourable risk and thus justifies intensive therapy regardless of age or comorbidities.",
      C: "Daunorubicin and cytarabine plus midostaurin, because all AML patients should receive FLT3 inhibitor therapy irrespective of FLT3 mutation status.",
      D: "Best supportive care only, because age greater than 70 years with cardiac dysfunction precludes any active anti-leukaemic therapy.",
      E: "Reduced-intensity allogeneic stem cell transplantation as first-line treatment, because transplantation improves outcomes even in elderly patients with significant comorbidities."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that in patients unfit for intensive treatment due to age or comorbidities, venetoclax with a hypomethylating agent (azacitidine or decitabine) is the standard of care (Fig. 13.10). This combination gives more frequent remissions and longer overall survival than azacitidine, decitabine, or low-dose cytarabine alone. The decision to opt for non-intensive chemotherapy is based on assessment of age, performance status, and comorbidities (Fig. 13.9). While NPM1 mutation is a favourable molecular marker, it does not override the significant treatment-related mortality risk posed by poor cardiac function and reduced performance status. Midostaurin is indicated only for FLT3-mutated AML. Best supportive care alone is too pessimistic given the efficacy of venetoclax/HMA combinations. Allogeneic SCT requires adequate organ function and performance status; reduced-intensity conditioning does not eliminate transplant-related mortality in this setting."
  },
  {
    num: 175,
    stem: "A 2-year-old boy with Down syndrome presents with pallor, petechiae, and hepatosplenomegaly. Full blood count shows haemoglobin 68 g/L, white cell count 45 × 10⁹/L with 30% blasts, and platelets 35 × 10⁹/L. Bone marrow aspirate shows megakaryoblastic differentiation in >80% of blasts. Mutation analysis reveals an acquired GATA1 mutation. Which of the following is the most accurate diagnosis and expected treatment response?",
    options: {
      A: "Myeloid leukaemia of Down syndrome (ML-DS), which typically occurs before the age of 5 years, may follow transient abnormal myelopoiesis (TAM), and often responds to chemotherapy alone.",
      B: "De novo acute megakaryoblastic leukaemia requiring immediate allogeneic stem cell transplantation, because megakaryoblastic morphology in children is universally associated with high-risk cytogenetics.",
      C: "Transient abnormal myelopoiesis (TAM) that will resolve spontaneously without chemotherapy, because all children with Down syndrome and elevated blasts have self-limiting disease.",
      D: "AML with myelodysplasia-related changes secondary to trisomy 21, which is classified with adult secondary AML and carries an equally poor prognosis.",
      E: "AML secondary to prior cytotoxic therapy with TP53 mutation, because Down syndrome patients frequently receive prior chemotherapy for congenital anomalies."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies myeloid leukaemia of Down syndrome (ML-DS) under secondary myeloid neoplasms. It usually occurs before the age of 5 years and may follow an episode of transient abnormal myelopoiesis (TAM). TAM occurs as a multi-step process provoked by trisomy 21-associated abnormal foetal haemopoiesis with acquired GATA1 mutations. TAM begins in utero and often presents in newborns as a self-limiting leukaemic syndrome which resolves spontaneously in the majority; however, patients with TAM that proceeds to ML-DS have megakaryoblastic features but often respond to chemotherapy alone. De novo megakaryoblastic AML in Down syndrome is specifically ML-DS, not standard adult-type AML. TAM resolves spontaneously but ML-DS requires treatment. It is not classified as adult myelodysplasia-related AML. There is no history of cytotoxic exposure in this patient."
  },
  {
    num: 176,
    stem: "Regarding the WHO 2022 classification of acute myeloid leukaemia, which of the following statements most accurately describes the diagnostic blast threshold for cases with defining genetic abnormalities?",
    options: {
      A: "The detection of defining genetic abnormalities such as PML::RARA, RUNX1::RUNX1T1, CBFB::MYH11, KMT2A rearrangement, or NPM1 mutation establishes the diagnosis of AML even if bone marrow blasts are <20%, with the exception of BCR::ABL1 fusion and CEBPA mutation which require ≥20% blasts.",
      B: "All genetic subtypes of AML uniformly require ≥20% bone marrow blasts for diagnosis, regardless of the specific cytogenetic or molecular abnormality identified.",
      C: "AML with NPM1 mutation is classified under AML defined by differentiation rather than genetic abnormalities, because NPM1 is a cytoplasmic nucleophosmin protein and not a true leukaemogenic driver.",
      D: "AML with BCR::ABL1 fusion is classified as mixed phenotype acute leukaemia in the WHO 2022 scheme and requires immunophenotypic evidence of both myeloid and lymphoid lineages.",
      E: "Complex karyotype alone qualifies as a defining genetic abnormality in the WHO 2022 classification and permits diagnosis of AML with <20% blasts."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.1 presents the WHO 2022 classification of AML. The text explicitly states that for AML with defining genetic abnormalities, the diagnostic criteria are relaxed: the bone marrow blast cell count does not need to exceed 20% in order to make a diagnosis, with the exception of AML with BCR::ABL1 fusion and AML with CEBPA mutation, which require ≥20% blasts. NPM1 mutation is listed as a defining genetic abnormality in Table 13.1 and is a major prognostic marker. BCR::ABL1 is listed under AML with defining genetic abnormalities, not mixed phenotype acute leukaemia. Complex karyotype is classified under AML, myelodysplasia-related (Table 13.2), not defining genetic abnormalities."
  },
  {
    num: 177,
    stem: "Regarding the molecular pathogenesis of acute myeloid leukaemia, which of the following statements best describes the functional consequences of driver mutations and their patterns of cooperativity?",
    options: {
      A: "The most common driver mutations are within FLT3, NPM1, and DNMT3A; mutations may be loss-of-function, gain-of-function, or neomorphic, and molecular cooperativity results in recurring co-mutation patterns such as NPM1, FLT3-ITD, and DNMT3A in the same patient.",
      B: "All AML driver mutations are gain-of-function mutations that increase the rate of proliferation; loss-of-function mutations are exclusively found in myelodysplastic neoplasms and never in de novo AML.",
      C: "Gene fusions such as PML::RARA and RUNX1::RUNX1T1 arise from point mutations rather than chromosomal translocations, and they confer a neomorphic function by activating downstream RAS/MAPK signalling.",
      D: "Mutations in DNMT3A, TET2, and ASXL1 are exclusively found in secondary AML and age-related clonal haemopoiesis, and their presence in de novo AML excludes a diagnosis of defining genetic abnormality.",
      E: "The presence of a single driver mutation is sufficient for leukemic transformation without cooperating mutations, because AML is a monoclonal disease arising from a single genetic event."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes how the AML genome contains an average of about 10 mutations, with the most common driver mutations being within FLT3, NPM1, and DNMT3A (Fig. 13.3). The text explains that mutations may be loss-of-function, gain-of-function, or neomorphic (conferring a novel function). Molecular cooperativity results in recurring patterns of mutations, for example NPM1, FLT3-ITD, and DNMT3A mutations frequently co-occur in the same patient. Loss-of-function mutations do occur in AML, particularly in tumour suppressors. Gene fusions arise from translocations (e.g., t(15;17), t(8;21)), not point mutations. DNMT3A, TET2, and ASXL1 mutations can be found in de novo AML, age-related clonal haemopoiesis, and secondary AML; their presence in de novo AML suggests an MDS-related subtype. The text notes that there are hundreds of patterns of mutations, indicating that leukemic transformation requires cooperating genetic events."
  },
  {
    num: 178,
    stem: "Regarding the mechanism of the PML::RARα fusion protein in acute promyelocytic leukaemia, which of the following statements most accurately describes its molecular function?",
    options: {
      A: "The PML::RARα fusion protein functions as a transcriptional repressor, whereas wild-type RARα is an activator; it binds to PML and RXR preventing their natural heterodimeric partnerships, resulting in arrested myeloid differentiation.",
      B: "PML::RARα is a constitutively active tyrosine kinase that autophosphorylates and activates the JAK-STAT signalling cascade, driving proliferation independent of retinoic acid signalling.",
      C: "The fusion protein causes overexpression of wild-type PML tumour suppressor by disrupting the PML nuclear body, leading to uncontrolled cellular proliferation.",
      D: "PML::RARα induces myeloid differentiation by activating retinoic acid response elements in the absence of ligand, which explains why ATRA therapy is effective.",
      E: "Wild-type RARα normally functions as a transcriptional repressor of granulocytic maturation genes, and the fusion protein amplifies this repressive function through increased DNA binding affinity."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes the molecular mechanism of the t(15;17) translocation in APML (Fig. 13.7 and text). The PML gene on chromosome 15 is fused to the retinoic acid receptor α gene (RARA) on chromosome 17. The resultant PML::RARα fusion protein functions as a transcriptional repressor, whereas normal wild-type RARα is an activator. Normally, the PML protein forms homodimers with itself, whereas RARα forms heterodimers with the retinoid X receptor protein (RXR). The PML::RARα fusion protein binds to PML and RXR, preventing them from linking with their natural partners. This results in the cellular phenotype of arrested differentiation. ATRA therapy overcomes this block by promoting degradation of the fusion protein and restoring differentiation. It is not a tyrosine kinase. Wild-type RARα is an activator, not a repressor."
  },
  {
    num: 179,
    stem: "Regarding measurable residual disease (MRD) monitoring in acute myeloid leukaemia, which of the following statements most accurately reflects current methodologies and their prognostic significance?",
    options: {
      A: "Quantitative PCR for fusion transcripts (RUNX1::RUNX1T1, CBFB::MYH11) or mutant NPM1 is highly sensitive but restricted to specific genetic subtypes; multiparametric flow cytometry is widely applicable in >90% of cases; error-corrected next-generation sequencing is limited by detection of residual mutations seen in clonal haemopoiesis of indeterminate potential (CHIP).",
      B: "MRD monitoring is unnecessary in favourable-risk AML because cure rates exceed 90% regardless of post-treatment MRD status, so molecular clearance does not change management.",
      C: "Error-corrected next-generation sequencing is the gold standard for MRD because it detects all residual leukaemic clones without confounding by age-related clonal mutations.",
      D: "MRD can only be assessed in bone marrow aspirate and never by peripheral blood sampling, because circulating blasts are too sparse for sensitive molecular or flow cytometric detection.",
      E: "MRD positivity after cycle 2 is not used to guide decisions regarding allogeneic stem cell transplantation, because transplant eligibility is determined solely by cytogenetic risk at diagnosis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes three main MRD methodologies (text and Fig. 13.12). Molecular tests such as quantitative PCR for fusion transcripts RUNX1::RUNX1T1, CBFB::MYH11, and mutant NPM1 are highly sensitive but restricted to certain genetic subtypes. Multiparametric flow cytometry of the abnormal immunophenotype is widely applicable and seen in over 90% of cases. Error-corrected NGS is an emerging technology but is limited by the detection of residual mutations seen in clonal haemopoiesis of indeterminate potential (CHIP), particularly involving DNMT3A, TET2, and ASXL1. MRD monitoring is particularly important for favourable and intermediate risk disease to guide consolidation and transplant decisions. Table 13.6 explicitly incorporates MRD status after cycle 2 into the decision to proceed to allogeneic SCT. Peripheral blood may be used for molecular testing if the circulating blast count is high, though bone marrow is preferred."
  },
  {
    num: 180,
    stem: "Regarding treatment selection for fit younger patients with newly diagnosed acute myeloid leukaemia according to the 2022 ELN risk stratification, which of the following therapeutic algorithms best aligns with Hoffbrand's description?",
    options: {
      A: "Favourable-risk disease (e.g., t(8;21), inv(16), NPM1-mutated without FLT3-ITD) is treated with intensive chemotherapy (daunorubicin and cytarabine) ± gemtuzumab ozogamicin and consolidated with chemotherapy alone if MRD-negative; intermediate or adverse-risk disease warrants consideration of allogeneic stem cell transplantation in first remission; FLT3-ITD-mutated AML receives a FLT3 inhibitor such as midostaurin with front-line chemotherapy.",
      B: "All patients should receive allogeneic stem cell transplantation in first remission regardless of cytogenetic or molecular risk, because transplantation is the only curative modality for all AML subtypes.",
      C: "Favourable-risk patients should proceed directly to reduced-intensity allogeneic stem cell transplantation, because transplantation eliminates the risk of relapse that persists even after intensive chemotherapy consolidation.",
      D: "CPX-351 (Vyxeos) is the standard front-line induction for all fit patients with de novo AML, because the liposomal formulation of cytarabine and daunorubicin improves outcomes across all risk groups.",
      E: "FLT3 inhibitors are contraindicated in front-line therapy and are reserved exclusively for relapsed or refractory FLT3-mutated AML, because early FLT3 inhibition increases the risk of differentiation syndrome."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Figure 13.9 and accompanying text illustrate the treatment algorithm for fit patients with AML. Favourable-risk patients receive remission induction (typically daunorubicin and cytarabine) with gemtuzumab ozogamicin, particularly in t(8;21) and inv(16), and proceed to consolidation chemotherapy if they achieve adequate MRD response; allogeneic SCT is not used in first remission for favourable risk unless MRD-positive or relapse occurs. Intermediate and adverse-risk patients are considered for allogeneic SCT in first remission based on a balance of relapse risk versus transplant-related mortality (Table 13.6). FLT3 inhibitors such as midostaurin are given with front-line DA chemotherapy in FLT3-mutated AML. CPX-351 is specifically indicated for secondary AML or AML with myelodysplasia-related changes, not all de novo AML. FLT3 inhibitors are standard front-line for FLT3-mutated disease, not contraindicated."
  },
  {
    num: 461,
    stem: "A 37-year-old woman with newly diagnosed acute promyelocytic leukaemia is started on all-trans retinoic acid (ATRA) and arsenic trioxide. On day 7 she develops fever, dyspnoea, hypoxia, bilateral pulmonary infiltrates on chest X-ray, and weight gain of 4 kg over 48 hours. Her white cell count has risen from 4.2 × 10⁹/L to 18.5 × 10⁹/L. Which of the following is the most appropriate immediate management?",
    options: {
      A: "Commence systemic corticosteroids promptly and continue ATRA/arsenic trioxide; add hydroxyurea if leucocytosis worsens, as this presentation represents differentiation syndrome.",
      B: "Discontinue ATRA and arsenic trioxide permanently because the pulmonary infiltrates indicate drug-induced interstitial pneumonitis.",
      C: "Start broad-spectrum antibiotics and antifungals alone, because fever with neutropenia in AML always indicates infection.",
      D: "Perform urgent bronchoscopy and lung biopsy to confirm leukaemic pulmonary infiltration before initiating any specific therapy.",
      E: "Switch to standard daunorubicin and cytarabine induction because differentiation syndrome proves ATRA-based therapy has failed."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes differentiation syndrome (formerly ATRA syndrome) as a complication of acute promyelocytic leukaemia treatment arising from neutrophilia following differentiation of promyelocytes, presenting with fever, hypoxia with pulmonary infiltrates, and fluid overload (weight gain). Treatment is with corticosteroids, and ATRA/arsenic trioxide is only discontinued in very severe cases. Leucocytosis may be managed with hydroxyurea or an anthracycline. Discontinuing ATRA permanently is incorrect because the syndrome is treatable and ATRA remains essential. Antibiotics alone miss the non-infectious diagnosis. Bronchoscopy is unnecessary and delays life-saving therapy. Switching to standard chemotherapy is incorrect because ATRA/arsenic remains the backbone of APML therapy."
  },
  {
    num: 462,
    stem: "A 54-year-old man with FLT3-ITD-mutated acute myeloid leukaemia achieved complete remission after daunorubicin, cytarabine, and midostaurin, but relapses 8 months later with 45% blasts in the marrow. He is deemed fit for further therapy and has a matched sibling donor available. Which management strategy best aligns with Hoffbrand's recommendations?",
    options: {
      A: "Start gilteritinib to induce a second remission, with the goal of proceeding to allogeneic stem cell transplantation once remission is achieved.",
      B: "Proceed directly to allogeneic stem cell transplantation without salvage chemotherapy, because any delay in transplant increases relapse risk.",
      C: "Re-challenge with the original daunorubicin and cytarabine plus midostaurin regimen, because re-induction with first-line therapy is preferred in early relapse.",
      D: "Best supportive care with transfusion support, because relapse within 12 months confers an incurable prognosis.",
      E: "Administer intrathecal methotrexate for central nervous system prophylaxis, because FLT3-ITD AML has a high propensity for isolated CNS relapse."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that relapse is the major cause of treatment failure in AML and that for patients with FLT3 mutations who relapse, gilteritinib may induce a second remission prior to transplantation. Traditional approaches include salvage chemotherapy followed by allogeneic stem cell transplantation with standard or reduced-intensity conditioning, and regimens not used prior to relapse such as FLAG-IDA may be options. Proceeding directly to transplant without cytoreduction is generally not recommended when salvage therapy can achieve remission. Re-challenging with first-line therapy is less effective than targeted salvage in relapsed disease. Best supportive care is too pessimistic for a fit patient with a suitable donor. Central nervous system prophylaxis is not standard in AML."
  },
  {
    num: 463,
    stem: "A 28-year-old man presents with bilateral testicular masses, periorbital swelling, and skin nodules. Biopsy of a skin nodule shows sheets of myeloperoxidase-positive immature myeloid blasts. Bone marrow aspirate shows 12% blasts with normal karyotype and no defining genetic abnormality. Flow cytometry confirms a myeloid immunophenotype. Which diagnosis and treatment approach is most accurate?",
    options: {
      A: "Myeloid sarcoma (extramedullary AML) with concurrent marrow involvement; manage as AML with systemic induction chemotherapy and consider local therapy for symptomatic sites.",
      B: "Non-Hodgkin lymphoma with aberrant myeloperoxidase expression; treat with CHOP-like lymphoma chemotherapy.",
      C: "Blastic plasmacytoid dendritic cell neoplasm; confirm with CD4/CD56/CD123/TCL1 positivity and treat with AML or ALL protocols.",
      D: "Metastatic solid tumour; perform immunohistochemistry for cytokeratin and S100 to exclude carcinoma or melanoma.",
      E: "Acute lymphoblastic leukaemia with myeloid antigen co-expression; treat with an ALL-based protocol."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, defines myeloid sarcoma as a disease resembling a solid tumour composed of clustered myeloid blast cells, also called extramedullary leukaemia, granulocytic sarcoma, or chloroma. Bone marrow involvement often occurs concurrently, and the lesion is classified and managed as AML. The presence of myeloperoxidase-positive blasts with a myeloid immunophenotype excludes lymphoma. Blastic plasmacytoid dendritic cell neoplasm expresses CD123, CD4, CD56, and TCL1 but is negative for lineage markers such as myeloperoxidase. Metastatic solid tumour would not show sheets of myeloid blasts. Mixed phenotype leukaemia requires robust evidence of both myeloid and lymphoid lineage markers, which is absent here."
  },
  {
    num: 464,
    stem: "A 61-year-old woman previously treated with adjuvant cyclophosphamide, doxorubicin, and fluorouracil for breast cancer 4 years ago now presents with fatigue and pancytopenia. Bone marrow shows 35% myeloblasts, multilineage dysplasia, and complex karyotype. Next-generation sequencing identifies a TP53 mutation. Which of the following best characterizes this disease and its optimal initial therapy?",
    options: {
      A: "Therapy-related myeloid neoplasm secondary to prior cytotoxic exposure, characterized by TP53 mutation and complex karyotype; CPX-351 (Vyxeos) is the preferred induction regimen, though prognosis is generally poor.",
      B: "De novo AML with myelodysplasia-related changes, because the breast cancer chemotherapy is too remote to be causally related.",
      C: "AML with defining genetic abnormality due to TP53 mutation, which permits diagnosis with <20% blasts.",
      D: "Primary myelofibrosis in blast crisis; treat with JAK inhibitor therapy.",
      E: "Standard daunorubicin and cytarabine induction is superior to CPX-351 because anthracycline exposure from prior chemotherapy is minimal."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that AML secondary to cytotoxic drugs or radiation commonly exhibits mutations in TP53 or KMT2A (MLL) and that the clinical response is usually poor. CPX-351 (Vyxeos), a liposomal nanoparticle preparation of cytarabine and daunorubicin, is specifically indicated in patients with secondary AML or AML with myelodysplasia-related changes. Prior cytotoxic exposure is a recognized cause of therapy-related myeloid neoplasms. TP53 mutation is classified under myelodysplasia-related or adverse-risk categories, not as a defining genetic abnormancy permitting diagnosis with fewer than 20% blasts. Primary myelofibrosis would show marrow fibrosis and massive splenomegathy. Standard daunorubicin and cytarabine is less preferred than CPX-351 in this high-risk secondary subgroup."
  },
  {
    num: 465,
    stem: "A 78-year-old man with newly diagnosed acute myeloid leukaemia is found to have an isocitrate dehydrogenase 1 (IDH1) mutation and normal karyotype. He has poor performance status and is deemed unfit for intensive chemotherapy. His white cell count is 8.5 × 10⁹/L. Which treatment strategy is most appropriate?",
    options: {
      A: "Azacitidine combined with ivosidenib, as this targeted combination is suitable for IDH1-mutated AML in unfit patients.",
      B: "Venetoclax with azacitidine alone, reserving ivosidenib for relapse after hypomethylating agent failure.",
      C: "Daunorubicin and cytarabine induction with midostaurin, because IDH1 mutation confers a favourable prognosis.",
      D: "Oral azacitidine maintenance monotherapy, because maintenance is the preferred initial treatment for unfit patients.",
      E: "Best supportive care, because patients over 75 years with poor performance status cannot tolerate any anti-leukaemic therapy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes non-intensive treatment pathways for unfit patients and specifically notes that targeted therapies such as ivosidenib for IDH1-mutated AML together with a hypomethylating agent have a role (Fig. 13.10 and Table 13.7). Venetoclax with azacitidine is the broad standard of care but the IDH1 mutation specifically supports ivosidenib-based therapy. Intensive chemotherapy is inappropriate given advanced age and poor performance status. Oral azacitidine maintenance is considered for patients over 55 who are ineligible for allogeneic stem cell transplantation after remission, not as initial therapy. Best supportive care is too restrictive given the available targeted options."
  },
  {
    num: 466,
    stem: "Regarding the immunophenotypic diagnosis of acute myeloid leukaemia and its subtypes, which of the following marker associations is most accurate?",
    options: {
      A: "CD13, CD33, and CD117 are usually positive in AML; CD11c, CD14, and CD64 support monocytic differentiation; CD41 and CD61 support megakaryoblastic differentiation.",
      B: "CD3 and CD19 positivity definitively identifies mixed phenotype acute leukaemia when co-expressed with CD33.",
      C: "Terminal deoxynucleotidyl transferase (TdT) positivity is characteristic of AML blasts and indicates myeloid lineage.",
      D: "CD34 negativity excludes a diagnosis of AML, because CD34 is uniformly expressed on all AML blasts.",
      E: "Glycophorin A (CD235a) positivity indicates granulocytic differentiation and excludes erythroid leukaemia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.3 lists immunological markers in AML: CD13, CD33, CD34, and CD117 are usually positive; CD11c, CD14, and CD64 indicate monocytic differentiation; glycophorin (CD235a) and CD36 indicate erythroid differentiation; CD41 and CD61 indicate megakaryoblastic differentiation. Figure 13.1 demonstrates that terminal deoxynucleotidyl transferase expression is characteristic of a lymphoid lineage. CD3 and CD19 are lymphoid markers; their co-expression with myeloid markers defines mixed phenotype acute leukaemia only when lineage-specific criteria are met. CD34 is expressed on most stem cells but not all AML blasts. Glycophorin A indicates erythroid, not granulocytic, differentiation."
  },
  {
    num: 467,
    stem: "Regarding cytochemical staining in acute myeloid leukaemia, which statement best distinguishes the utility of myeloperoxidase, Sudan black B, and non-specific esterase?",
    options: {
      A: "Myeloperoxidase and Sudan black B stain myeloid cytoplasm and are usually bright in Auer rods; non-specific esterase is used to identify monocytic differentiation.",
      B: "Non-specific esterase is the most specific marker of granulocytic lineage and is positive in all AML subtypes.",
      C: "Sudan black B is used exclusively to diagnose acute promyelocytic leukaemia and has no utility in other AML subtypes.",
      D: "Myeloperoxidase positivity is pathognomonic for acute promyelocytic leukaemia and excludes other forms of AML.",
      E: "Cytochemistry has replaced flow cytometry as the gold standard for immunophenotyping in modern haematology practice."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.3 and Figure 13.2 describe cytochemical staining in AML: myeloperoxidase and Sudan black B demonstrate myeloid differentiation and are usually bright in Auer rods; non-specific esterase identifies monocytic differentiation. Non-specific esterase is not specific for granulocytic lineage. Sudan black B is useful across myeloid subtypes, not exclusively acute promyelocytic leukaemia. Myeloperoxidase positivity occurs in many AML subtypes and is not pathognomonic for APML. The text notes that cytochemistry is no longer performed in centres where newer and more definitive tests such as flow cytometry are available."
  },
  {
    num: 468,
    stem: "Regarding the integration of gemtuzumab ozogamicin into acute myeloid leukaemia therapy, which statement most accurately reflects its mechanism of action and clinical indication?",
    options: {
      A: "Gemtuzumab ozogamicin is an anti-CD33 monoclonal antibody conjugated to calicheamicin; it is combined with chemotherapy, particularly in favourable-risk AML such as t(8;21) and inv(16), where it has become standard of care.",
      B: "It is a FLT3 tyrosine kinase inhibitor used only in relapsed or refractory FLT3-mutated disease.",
      C: "It is an anti-CD123 immunotoxin indicated for blastic plasmacytoid dendritic cell neoplasm.",
      D: "It works by inhibiting BCL-2 and is combined with hypomethylating agents in unfit patients.",
      E: "It targets the PML::RARα fusion protein and is therefore reserved for acute promyelocytic leukaemia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.7 and the treatment section describe gemtuzumab ozogamicin as a monoclonal immune-conjugate targeted against CD33 and conjugated to the calicheamicin cytotoxin. It provides an additional therapeutic option in combination with daunorubicin and cytarabine for initial or consolidation AML therapy, particularly in favourable-risk disease including t(8;21) and inv(16), where it has become standard of care. FLT3 inhibitors include midostaurin and gilteritinib. CD123-targeting agents include tagraxofusp. Venetoclax inhibits BCL-2. ATRA and arsenic trioxide target the PML::RARα fusion protein in acute promyelocytic leukaemia."
  },
  {
    num: 469,
    stem: "Regarding the prognostic interaction of NPM1 and FLT3 internal tandem duplication (ITD) mutations in cytogenetically normal acute myeloid leukaemia, which statement is most accurate?",
    options: {
      A: "NPM1 mutation without FLT3-ITD is generally favourable, whereas NPM1 mutation co-occurring with FLT3-ITD is classified as intermediate risk; FLT3-ITD alone in the absence of NPM1 mutation carries adverse prognostic significance.",
      B: "FLT3-ITD always confers favourable risk when it co-occurs with NPM1 mutation, regardless of allelic ratio or co-mutation burden.",
      C: "NPM1 mutation is a definitive marker of adverse prognosis because it promotes nucleolar disorganization and uncontrolled proliferation.",
      D: "The presence of either NPM1 or FLT3-ITD mutation downgrades a case from AML with defining genetic abnormalities to AML defined by differentiation.",
      E: "CEBPA mutation and FLT3-ITD together define a favourable-risk subgroup in the 2022 ELN classification."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 13.5 lists molecular genetics in AML prognostication: NPM1 mutation and CEBPA mutation are favourable, whereas wild-type or mutated NPM1 with FLT3-ITD is intermediate, and mutations of TP53, RUNX1, ASXL1, and spliceosome mutations are unfavourable. The 2022 ELN risk stratification recognizes NPM1-mutated AML without FLT3-ITD as favourable, NPM1-mutated with FLT3-ITD as intermediate, and FLT3-ITD without NPM1 mutation as adverse. FLT3-ITD allelic ratio and co-mutations further refine risk. NPM1 mutation is a defining genetic abnormality in the WHO 2022 classification, not an adverse marker. CEBPA mutation is favourable but not in combination with FLT3-ITD."
  },
  {
    num: 470,
    stem: "Regarding blastic plasmacytoid dendritic cell neoplasm (BPDCN), which statement most accurately describes its immunophenotype and therapeutic approach?",
    options: {
      A: "BPDCN expresses CD123, CD4, CD56, and TCL1, but is negative for lineage markers such as myeloperoxidase; treatment includes intensive AML or ALL protocols and allogeneic SCT, with emerging CD123-targeted therapies.",
      B: "BPDCN is immunophenotypically identical to acute promyelocytic leukaemia and responds to ATRA and arsenic trioxide.",
      C: "It expresses CD13, CD33, and CD117 with strong myeloperoxidase positivity, and is therefore treated as standard AML.",
      D: "It is a B-lymphoid neoplasm expressing CD19, CD22, and CD79a, best treated with rituximab-containing lymphoma regimens.",
      E: "BPDCN is a T-cell neoplasm expressing CD3, CD5, and CD7, and responds to T-cell ALL protocols."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes blastic plasmacytoid dendritic cell neoplasm as a rare aggressive neoplasia placed in the myeloid disorders category with a 'myeloid' pattern of genetic mutations, though the cell of origin is unclear. It is important to differentiate BPDCN from AML with leukaemia cutis. BPDCN immunophenotypically expresses CD123, CD4, CD56, and TCL1, but is negative for lineage markers such as myeloperoxidase. Treatments include intensive AML or ALL protocols including stem cell transplantation, and novel CD123-targeting treatments have an emerging role. ATRA/arsenic, standard AML chemotherapy based on myeloid markers, B-cell, or T-cell regimens are incorrect because BPDCN lacks lineage-specific markers."
  }
];
