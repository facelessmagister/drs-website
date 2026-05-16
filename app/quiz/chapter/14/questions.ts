export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 181,
    stem: "A 48-year-old man is found to have a white cell count of 180 × 10⁹/L during a routine health check. He reports mild fatigue and left upper quadrant fullness. Examination reveals massive splenomegaly. The blood film shows a full spectrum of granulopoiesis with increased basophils. Bone marrow is hypercellular with granulocytic predominance. Cytogenetics demonstrates t(9;22)(q34;q11). He has well-controlled type 2 diabetes and a normal QTc interval on ECG. According to Hoffbrand, which of the following is the most appropriate initial therapy?",
    options: {
      A: "Imatinib, because it is the cheapest first-generation TKI with the most long-term experience, and approximately 60% of patients achieve an excellent long-term response.",
      B: "Nilotinib or dasatinib, because as second-generation TKIs they achieve more rapid molecular responses and are preferred first-line in all patients regardless of comorbidities.",
      C: "Ponatinib, because it is effective against the T315I mutation and should be used upfront to prevent resistance.",
      D: "Hydroxycarbamide with interferon-alpha, because this was the standard of care before TKIs and remains appropriate for newly diagnosed chronic phase CML.",
      E: "Immediate allogeneic stem cell transplantation, because it is the only potentially curative therapy and should be offered to all eligible patients at diagnosis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that first-line therapy for chronic phase CML is usually imatinib, nilotinib or dasatinib, with bosutinib also available. Most experience exists with imatinib, which is also the cheapest, and overall around 60% of patients given imatinib achieve an excellent response and remain on the drug long-term (Table 14.2). Nilotinib and dasatinib achieve more rapid responses and are used first in some centres, but the text notes that choice of initial TKI is a patient-specific decision based on disease factors (prognostic score, phase) and patient factors (age, comorbidities, parenthood plans). For a patient with well-controlled diabetes and normal QTc, imatinib remains an appropriate and evidence-based first-line choice. Ponatinib is reserved for resistant disease, particularly T315I-mutated CML. Hydroxycarbamide and interferon have been replaced by TKIs in chronic phase. Allogeneic SCT is reserved for TKI failures or advanced phase, not front-line chronic phase."
  },
  {
    num: 182,
    stem: "A 51-year-old woman with newly diagnosed chronic phase CML is commenced on imatinib 400 mg daily. At 3 months, her BCR::ABL1 transcript level is 12% (International Scale). At 6 months, it has fallen to 8%. At 12 months, it is 0.5%. Which of the following best characterises her response and most appropriate management?",
    options: {
      A: "Warning response at 3 and 6 months with eventual suboptimal response at 12 months; she should be considered for early change in therapy or increased dose, and mutation screening should be performed.",
      B: "Optimal response at all time points; she should continue imatinib with standard monitoring intervals.",
      C: "Treatment failure at 3 and 6 months; she should immediately switch to a second-generation TKI or proceed to allogeneic SCT.",
      D: "Complete cytogenetic response at 12 months; molecular monitoring can be discontinued because she has achieved a durable remission.",
      E: "Major molecular remission at 3 months; the subsequent decline to 0.5% at 12 months confirms she is a candidate for TKI discontinuation."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.3 presents the ELN 2020 milestones for monitoring BCR::ABL1 on the International Scale. At 3 months, BCR::ABL1 ≤10% is optimal, >10% is warning, and >10% if confirmed within 1–3 months is failure. At 6 months, ≤1% is optimal, >1–10% is warning, and >10% is failure. At 12 months, ≤0.1% is optimal, >0.1–1% is warning, and >1% is failure. This patient had 12% at 3 months (warning), 8% at 6 months (warning), and 0.5% at 12 months (warning, as it exceeds 0.1%). Patients in the warning zone should be monitored more regularly and might be considered for an early change in therapy or increase in the dose of first-line therapy. BCR::ABL1 mutation screening is indicated in the setting of warning or failure. Treatment failure would require >10% at 3 months confirmed, or >10% at 6 months, or >1% at 12 months. She has not achieved complete cytogenetic response by molecular criteria alone at 12 months. TKI discontinuation requires a sustained deep molecular response (BCR::ABL1 ≤0.1% or undetectable) for a prolonged period, not 0.5%."
  },
  {
    num: 183,
    stem: "A 34-year-old woman with chronic phase CML has been on dasatinib for 3 years and has maintained a major molecular response (BCR::ABL1 ≤0.1%) for the past 24 months. She wishes to become pregnant. Which of the following represents the most appropriate management strategy?",
    options: {
      A: "Discontinue dasatinib and attempt conception; if molecular relapse occurs with rising BCR::ABL1 transcripts, reintroduction of the TKI will usually restore disease control.",
      B: "Continue dasatinib throughout pregnancy, because TKIs have established safety in pregnancy and do not cross the placenta.",
      C: "Switch to imatinib, because it is the only TKI with documented safety data in pregnancy and is preferred over dasatinib during gestation.",
      D: "Initiate hydroxycarbamide for the duration of pregnancy, because it is non-teratogenic and provides adequate disease control in chronic phase CML.",
      E: "Proceed immediately to allogeneic stem cell transplantation before conception, because transplantation is curative and eliminates the need for ongoing TKI therapy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that for patients becoming BCR::ABL1 transcript negative, about 60% will remain negative on stopping TKI therapy or remain in remission with a stable low level of transcripts. Patients are selected based on previous disease history and a prolonged period of response to a TKI. Patients who stop TKI are closely monitored for loss of molecular response. For those who do become BCR::ABL1 positive again with a rising level of transcripts, treatment with the TKI will usually result in restoration of disease control. This may have particular implications for female patients of childbearing age who may wish to discontinue TKI during pregnancy. TKIs are not known to be safe in pregnancy. Hydroxycarbamide is teratogenic. Interferon-alpha is used in pregnant patients because it is considered safe, but the question specifically asks about a patient who has already achieved deep molecular response. Allogeneic SCT is not indicated for a patient in stable molecular remission wishing to conceive."
  },
  {
    num: 184,
    stem: "A 62-year-old man with chronic phase CML is treated with nilotinib 300 mg twice daily. After 4 months, he develops fatigue, dyspnoea on exertion, and peripheral oedema. ECG shows QTc prolongation to 520 ms. Echocardiogram is normal. His BCR::ABL1 at 3 months was 0.8%. Which of the following is the most appropriate next step?",
    options: {
      A: "Discontinue nilotinib and switch to an alternative TKI without significant QT prolongation risk (e.g., imatinib or dasatinib), because QTc >500 ms is a serious adverse effect requiring drug cessation.",
      B: "Continue nilotinib at a reduced dose with weekly ECG monitoring, because the molecular response is excellent and QT prolongation is usually reversible with dose reduction.",
      C: "Switch to ponatinib, because it is a potent TKI that does not cause QT prolongation and is effective in resistant disease.",
      D: "Initiate hydroxycarbamide and interferon-alpha, because TKIs are contraindicated in patients with cardiac conduction abnormalities.",
      E: "Proceed to allogeneic stem cell transplantation, because the development of significant toxicity on nilotinib indicates high-risk disease that requires curative therapy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.2 lists nilotinib side effects as including prolonged QT interval. The text notes that bosutinib alongside nilotinib is associated with QT prolongation. Severe QT prolongation (QTc >500 ms) is a potentially life-threatening adverse effect that necessitates discontinuation of the offending agent. The patient has achieved an excellent molecular response (0.8% at 3 months, well within optimal range), so switching to an alternative first-line or second-line TKI without QT risk (such as imatinib or dasatinib) is appropriate. Continuing nilotinib with QTc 520 ms risks torsades de pointes. Ponatinib is associated with arterial and venous thrombosis, not QT prolongation, but it is reserved for resistant/intolerant disease and is not the next step here. Hydroxycarbamide and interferon are not appropriate for a patient with an optimal TKI response. Allogeneic SCT is reserved for TKI failure or advanced phase, not for manageable toxicity."
  },
  {
    num: 185,
    stem: "A 58-year-old man with a 5-year history of chronic phase CML on imatinib presents with increasing abdominal distension, night sweats, and fatigue. Examination shows massive splenomegaly. Full blood count: haemoglobin 92 g/L, white cell count 85 × 10⁹/L with 18% blasts, platelets 78 × 10⁹/L. Basophils are 22%. Bone marrow biopsy shows 17% blasts and clusters of blasts on trephine. Cytogenetics reveals the original t(9;22) plus an additional trisomy 8 and isochromosome 17q. Which of the following best describes his disease phase and recommended management?",
    options: {
      A: "Accelerated phase CML with clonal evolution; he is likely to have a suboptimal response to first-generation TKIs alone and should be considered for second-generation TKI therapy or allogeneic stem cell transplantation.",
      B: "Blast crisis because the peripheral blood blast count exceeds 20% if basophils are included in the blast percentage; he should be treated with acute lymphoblastic leukaemia-type induction chemotherapy.",
      C: "Chronic phase with disease progression due to subtherapeutic imatinib levels; the appropriate management is to increase the imatinib dose to 800 mg daily and add hydroxycarbamide.",
      D: "Blast crisis because bone marrow blasts exceed 20% on trephine biopsy; immediate treatment with a TKI plus acute myeloid leukaemia induction chemotherapy is indicated.",
      E: "Chronic phase with reactive splenomegaly and leukaemoid reaction; the blood findings represent a leukaemoid reaction to infection rather than CML progression."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.1 defines accelerated phase CML as: peripheral blood or bone marrow blasts 10–19%; peripheral blood basophils ≥20%; increasing spleen size and WBC unresponsive to therapy; clonal evolution on treatment; platelets ≤100×10⁹/L unrelated to therapy; or platelets >1000×10⁹/L unresponsive to therapy. This patient has 18% peripheral blood blasts, 22% basophils, increasing splenomegaly, and new clonal abnormalities (trisomy 8, isochromosome 17q) representing clonal evolution. The bone marrow shows 17% blasts and clusters of blasts on trephine, which also fits accelerated phase. Blast crisis requires ≥20% blasts in blood or marrow, or extramedullary blast proliferation, or large foci/clusters of blasts in biopsy — but the WHO 2022 criteria specifically list PB or BM blast ≥20% for blast crisis; accelerated phase includes 10–19% blasts. Patients in accelerated phase are likely to have a suboptimal response to first-generation TKIs alone, although a sustained response to a TKI is possible; second-generation TKI therapy or allogeneic SCT should be considered. Blast crisis is incorrect because blasts are 18% in blood and 17% in marrow, not ≥20%. Chronic phase is incorrect given the clear accelerated phase criteria. Leukaemoid reaction is ruled out by the known CML history and BCR::ABL1 positivity."
  },
  {
    num: 186,
    stem: "Regarding the molecular pathogenesis of the BCR::ABL1 fusion in chronic myeloid leukaemia, which of the following statements most accurately describes the functional consequences of the p210 fusion protein?",
    options: {
      A: "The p210 BCR::ABL1 fusion protein has constitutively active tyrosine kinase activity that exceeds the normal 145 kDa ABL1 product, resulting in uncontrolled cell proliferation through activation of downstream signalling pathways including RAS/MAPK, PI3K/AKT, and JAK-STAT.",
      B: "The p210 fusion protein functions as a transcriptional repressor by binding to the myristoyl binding site of ABL1, thereby blocking granulocytic differentiation and causing arrested maturation.",
      C: "The p210 protein is expressed from a breakpoint in the minor breakpoint cluster region (m-BCR) and is also found in acute lymphoblastic leukaemia with the same breakpoint location as in CML.",
      D: "The p210 BCR::ABL1 fusion protein lacks tyrosine kinase activity but acts as a scaffold protein that recruits SRC family kinases to the cell membrane, driving proliferation indirectly.",
      E: "The p210 fusion protein is formed when the breakpoint in BCR occurs in the intron between the first and second exons, leaving only the first BCR exon intact, which is the same mechanism that produces the p190 protein."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that the resulting chimeric BCR::ABL1 gene usually codes for a fusion protein of size 210 kDa (p210). This has constitutively active tyrosine kinase activity in excess of the normal 145 kDa ABL1 product, resulting in uncontrolled cell proliferation (Fig. 14.1 and text). The text also notes that the Ph translocation is seen in a minority of ALL cases, but in those cases the breakpoint in BCR is further upstream in the intron between the first and second exons, leaving only the first BCR exon intact, producing a p190 protein which is not seen in CML. The p210 protein arises from breakpoints in the major breakpoint cluster region (M-BCR). The p190 is from the minor breakpoint cluster region (m-BCR). The functional consequence is constitutive tyrosine kinase activity, not transcriptional repression. Asciminib binds the myristoyl binding site to restore auto-inhibition, but this is a therapeutic mechanism, not the pathogenic mechanism of p210. The p210 protein has intrinsic tyrosine kinase activity and does not merely act as a scaffold."
  },
  {
    num: 187,
    stem: "Regarding the WHO 2022 classification and definition of advanced-phase chronic myeloid leukaemia, which of the following statements is most accurate?",
    options: {
      A: "Blast crisis is defined by the presence of ≥20% blasts in peripheral blood or bone marrow, extramedullary blast proliferation (apart from spleen), or large foci or clusters of blasts in the bone marrow biopsy; accelerated phase includes 10–19% blasts, basophils ≥20%, clonal evolution, or thrombocytopenia/thrombocytosis unresponsive to therapy.",
      B: "Blast crisis is defined exclusively by ≥30% blasts in the bone marrow, reflecting the same blast threshold used for acute myeloid leukaemia; accelerated phase requires 15–29% blasts and the presence of additional chromosomal abnormalities.",
      C: "The presence of any additional chromosomal abnormalities in Ph-positive cells automatically confers a diagnosis of blast crisis, because clonal evolution indicates irreversible genetic instability.",
      D: "Accelerated phase is diagnosed when the platelet count falls below 100 × 10⁹/L regardless of cause, because thrombocytopenia is the most specific marker of disease transformation in CML.",
      E: "Blast crisis in CML is always myeloblastic; lymphoblastic transformation does not occur and therefore immunophenotyping of blasts in blast crisis is unnecessary."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.1 presents the WHO 2022 definition of advanced phase CML disease. Accelerated phase is defined by: PB or BM blast 10–19%; PB basophils ≥20%; increasing spleen size and increasing WBC count unresponsive to therapy; clonal evolution on treatment; platelets ≤100×10⁹/L unrelated to therapy; or platelets >1000×10⁹/L unresponsive to therapy. Blast crisis is defined by: PB or BM blast ≥20%; extramedullary blast proliferation, apart from spleen; or large foci or clusters of blasts in the bone marrow biopsy. The text explicitly states that acute transformation may be lymphoblastic in approximately one-fifth of cases, or myeloblastic/mixed in the majority. Additional chromosomal abnormalities (clonal evolution) define accelerated phase, not automatically blast crisis. Thrombocytopenia must be unrelated to therapy to count as accelerated phase. The blast threshold for blast crisis is ≥20%, not 30%."
  },
  {
    num: 188,
    stem: "Regarding tyrosine kinase inhibitors used in the treatment of chronic myeloid leukaemia, which of the following statements most accurately describes their mechanisms of action and resistance profiles?",
    options: {
      A: "Imatinib, nilotinib, dasatinib, bosutinib, and ponatinib all bind to the ATP binding site of the BCR::ABL1 kinase domain; ponatinib is unique in retaining activity against the T315I 'gatekeeper' mutation, whereas asciminib binds the myristoyl binding site and restores auto-inhibition.",
      B: "Dasatinib is a pure BCR::ABL1 inhibitor with no activity against other kinases, which explains its favourable side effect profile compared with other second-generation TKIs.",
      C: "Nilotinib achieves more rapid molecular responses than imatinib by inhibiting the myristoyl binding site rather than the ATP binding site, resulting in a different mechanism of resistance.",
      D: "The T315I mutation confers resistance to all TKIs including ponatinib, because the threonine-to-isoleucine substitution at position 315 sterically blocks all drug binding to the kinase domain.",
      E: "Asciminib binds to the ATP binding site and competes with ATP in a manner similar to imatinib, but has a higher affinity for the T315I-mutated kinase domain."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Fig. 14.5 and Table 14.2 describe the mechanisms of action of TKIs. Imatinib, nilotinib, dasatinib, bosutinib, and ponatinib all block the ATP binding site. Ponatinib has the unique advantage that it is effective against CML that carries the T315I mutation within ABL1. Asciminib is a first-in-class drug that inhibits BCR::ABL1 by engaging its myristoyl binding site, leading to a conformational change so ABL1 no longer binds to substrate, restoring auto-inhibition. Dasatinib inhibits both BCR::ABL1 and SRC family kinases. Nilotinib is a second-generation inhibitor with increased affinity for BCR::ABL1 but still binds the ATP site. The T315I mutation confers resistance to imatinib, nilotinib, dasatinib, and bosutinib, but ponatinib retains activity. Asciminib does not bind the ATP site."
  },
  {
    num: 189,
    stem: "Regarding the monitoring of response to tyrosine kinase inhibitor therapy in chronic myeloid leukaemia, which of the following statements most accurately reflects the ELN 2020 milestones and their clinical implications?",
    options: {
      A: "An early molecular response (EMR), defined as BCR::ABL1 ≤10% at 3 months, is associated with the most favourable outlook; failure to achieve EMR predicts a less favourable prognosis and should trigger evaluation for treatment change or mutation analysis.",
      B: "A major molecular response (MMR) is defined as a 2-log reduction in BCR::ABL1 transcripts to ≤1%; following stable MMR, monitoring intervals can be lengthened and TKI discontinuation can be considered immediately.",
      C: "Complete cytogenetic response (CCyR) is defined as <35% Ph-positive metaphases in bone marrow; it is now obsolete because molecular monitoring by RT–PCR has replaced cytogenetics in all patients.",
      D: "The BCR::ABL1 transcript level at 6 months is not used for risk stratification; only the 3-month and 12-month time points have prognostic significance according to the ELN 2020 recommendations.",
      E: "Molecular response is assessed as the ratio of BCR::ABL1 transcripts to BCR transcripts, where 10%, 1%, 0.1%, and 0.01% correspond to 1, 2, 3, and 4 log reductions below the standard baseline."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.3 presents the ELN 2020 milestones. At 3 months, BCR::ABL1 ≤10% is optimal (early molecular response, EMR), while >10% is warning or failure. Patients who fail to achieve EMR have a less favourable outlook. Major molecular remission (MMR) is defined as a 3-log reduction (<0.1%), not 2-log (≤1%). Following stable MMR, monitoring intervals may be lengthened, but TKI discontinuation requires a prolonged period of deep molecular response and careful patient selection, not immediate discontinuation upon first achieving MMR. CCyR is defined as the absence of Ph-positive metaphases, not <35%. Cytogenetic monitoring maintains a role in patients with uncommon transcripts/fusions which preclude molecular monitoring. The 6-month milestone (≤1% optimal, >1–10% warning, >10% failure) is explicitly used for risk stratification. Molecular response is assessed as the ratio of BCR::ABL1 transcripts to ABL1 transcripts (not BCR transcripts), where 10%, 1%, 0.1%, 0.01%, and 0.001% correspond to 1, 2, 3, 4, and 5 log reductions."
  },
  {
    num: 190,
    stem: "Regarding the role of allogeneic stem cell transplantation in the management of chronic myeloid leukaemia in the era of tyrosine kinase inhibitors, which of the following statements is most accurate?",
    options: {
      A: "Allogeneic SCT is a potentially curative treatment usually reserved for TKI failures or patients presenting in accelerated or blast phase; results are better when performed in chronic phase, with 5-year survival over 80%.",
      B: "Allogeneic SCT should be offered to all patients in chronic phase at diagnosis, because it provides the only chance of cure and TKI therapy merely palliates the disease.",
      C: "Allogeneic SCT is contraindicated in blast crisis because the procedure-related mortality exceeds 90% and no patients survive beyond 1 year.",
      D: "Donor leucocyte infusions are ineffective in CML relapse after transplantation and have been replaced by second-generation TKIs for post-transplant molecular relapse.",
      E: "Allogeneic SCT performed in blast crisis yields superior outcomes compared with transplantation in chronic phase, because the higher disease burden allows the graft-versus-leukaemia effect to be more potent."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that allogeneic SCT is a potentially curative treatment for CML, but because of the risks associated with the procedure, it is usually reserved for TKI failures or patients presenting in accelerated or acute phase. The results are better when it is performed in chronic rather than these later phases. The 5-year survival is over 80%. Relapse of CML after the transplant is a significant problem, but donor leucocyte infusions are highly effective in CML, particularly if relapse is diagnosed early by molecular detection of the BCR::ABL1 transcript. SCT is not offered to all patients at diagnosis because TKIs provide excellent long-term control with near-normal life expectancy. SCT is not contraindicated in blast crisis, though outcomes are worse. Donor leucocyte infusions remain highly effective for post-transplant relapse. Outcomes are superior in chronic phase, not blast crisis."
  }
];
