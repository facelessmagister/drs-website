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
  },
  {
    num: 471,
    stem: "A 29-year-old woman is found incidentally to have a white cell count of 245 × 10⁹/L. She is asymptomatic but has a palpable spleen 8 cm below the left costal margin. The blood film shows a full spectrum of granulopoiesis with 8% basophils, and the platelet count is 820 × 10⁹/L. Which of the following is the most appropriate next step to establish a diagnosis of chronic myeloid leukaemia?",
    options: {
      A: "Perform reverse transcriptase PCR (RT–PCR) for BCR::ABL1 transcripts on peripheral blood; the diagnosis is confirmed by the presence of the BCR::ABL1 fusion regardless of whether the Philadelphia chromosome is visible on karyotype.",
      B: "Measure the leukocyte alkaline phosphatase (LAP) score; a low score distinguishes CML from a leukaemoid reaction and is sufficient to start imatinib.",
      C: "Perform a bone marrow trephine biopsy alone; cytogenetics are unnecessary because the blood film is diagnostic of CML.",
      D: "Order a JAK2 V617F mutation test; this mutation is the molecular hallmark of CML and other myeloproliferative neoplasms.",
      E: "Send peripheral blood for conventional karyotyping and, if the Philadelphia chromosome is absent, conclude the patient has an atypical myeloproliferative neoplasm rather than CML."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that the diagnosis of CML is assisted by the characteristic Philadelphia chromosome, which is seen by karyotypic examination in most patients (Fig. 14.1d). However, in a minority of patients the Ph chromosome is not visible microscopically, yet the same BCR::ABL1 molecular rearrangement is detectable by FISH or RT–PCR; this Ph-negative, BCR::ABL1-positive CML behaves clinically like Ph-positive CML. Therefore, demonstration of the BCR::ABL1 fusion is diagnostic regardless of karyotype. The leukocyte alkaline phosphatase score is low in CML, but it is not specific and does not replace molecular confirmation. Bone marrow examination is useful for karyotype and disease-phase assessment but is not essential for diagnosis. JAK2 V617F is unrelated to CML and is characteristic of BCR::ABL1-negative myeloproliferative neoplasms."
  },
  {
    num: 472,
    stem: "A 41-year-old man with chronic phase CML has been taking dasatinib 100 mg daily for 8 months and has achieved a BCR::ABL1 transcript level of 0.3%. He presents with progressive dyspnoea and is found to have moderate bilateral pleural effusions on chest imaging. Echocardiography is normal and there is no evidence of infection or heart failure. What is the most appropriate management?",
    options: {
      A: "Continue dasatinib at the same dose and add a loop diuretic, because pleural effusions in patients on dasatinib are usually cardiac and resolve with diuresis.",
      B: "Interrupt dasatinib, drain the effusions for symptomatic relief, and then switch to an alternative TKI such as nilotinib or bosutinib, because dasatinib-related pleural effusion is a recognised toxicity requiring cessation.",
      C: "Switch directly to ponatinib, because ponatinib is the most potent TKI and is indicated for any grade 2–3 TKI toxicity.",
      D: "Discontinue all TKI therapy permanently and start hydroxycarbamide, because pleural effusion signals irreversible resistance to BCR::ABL1 inhibition.",
      E: "Proceed immediately to allogeneic stem cell transplantation, because the development of a treatment-related complication in a responder indicates high-risk disease."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 14.2 lists the characteristic side effects of dasatinib as headache, pleural effusion, pulmonary hypertension, cough and prolonged QT interval. Symptomatic pleural effusion is a well-recognised dasatinib toxicity; management involves temporary or permanent discontinuation of dasatinib, symptomatic drainage if needed, and switching to an alternative TKI once the toxicity has resolved, provided the alternative is not contraindicated. Ponatinib is reserved for resistant or intolerant disease, particularly T315I-mutated CML, and is associated with a high risk of arterial and venous thrombosis. Hydroxycarbamide does not eradicate BCR::ABL1-positive cells and is not appropriate for a patient who has had a good molecular response. Allogeneic SCT is reserved for TKI failure or advanced-phase disease, not for isolated drug toxicity."
  },
  {
    num: 473,
    stem: "A 45-year-old man is newly diagnosed with chronic phase CML and is classified as high Sokal risk. He has a history of peripheral arterial disease, type 2 diabetes mellitus with microalbuminuria, and a baseline QTc of 480 ms. His full blood count is otherwise compatible with chronic phase. Which of the following is the most appropriate choice of initial tyrosine kinase inhibitor?",
    options: {
      A: "Nilotinib 300 mg twice daily, because high Sokal risk demands the most rapid molecular response and nilotinib achieves deeper responses than imatinib regardless of cardiovascular risk.",
      B: "Dasatinib 100 mg daily, because its lack of effect on SRC family kinases makes it the safest option in patients with vascular disease and QT prolongation.",
      C: "Imatinib 400 mg daily, because his arterial disease and prolonged QTc substantially increase the risks of nilotinib and bosutinib, whereas imatinib is an established first-line agent with a well-characterised safety profile.",
      D: "Ponatinib 45 mg daily, because it is the only TKI effective against T315I and should be used upfront in high-risk disease to prevent resistance.",
      E: "Bosutinib 400 mg daily, because it is associated with the lowest rate of arterial thrombotic events and can be safely used in patients with QTc >480 ms."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that the choice of initial TKI in chronic phase CML is a patient-specific decision based on disease factors (prognostic score, phase) and patient factors (age, comorbidities, parenthood plans), with selection guided by each drug's side-effect profile (Table 14.2). Nilotinib is associated with peripheral vascular disease and QT prolongation, and bosutinib is also associated with QT prolongation; ponatinib carries the highest risk of arterial and venous thrombosis. Dasatinib inhibits SRC family kinases and can cause pleural effusion and pulmonary hypertension. For this patient with peripheral arterial disease and a prolonged QTc, imatinib remains an appropriate, evidence-based first-line choice with close monitoring."
  },
  {
    num: 474,
    stem: "A 38-year-old woman with chronic phase CML has been taking imatinib 400 mg daily for 4 years. She previously achieved an undetectable BCR::ABL1 transcript level, but over the past 6 months her transcripts have risen from undetectable to 4% and she has lost major molecular response. She remains adherent to therapy. Which of the following is the most appropriate next step?",
    options: {
      A: "Continue imatinib at 400 mg daily and repeat the PCR in 3 months, because a single rising value may represent laboratory fluctuation and does not yet indicate failure.",
      B: "Increase imatinib to 800 mg daily, because dose escalation is the standard approach to any loss of molecular response.",
      C: "Perform ABL1 kinase domain mutation screening and switch to a second-generation TKI guided by the mutation profile; if T315I is detected, use ponatinib or asciminib.",
      D: "Proceed directly to allogeneic stem cell transplantation, because loss of molecular response after a sustained deep response is equivalent to treatment failure.",
      E: "Switch to hydroxycarbamide and interferon-alpha, because these agents can restore molecular response in patients who have failed imatinib."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, explains that one mechanism of resistance to TKI therapy is selection of clones carrying mutations within the BCR::ABL1 fusion gene, and that ABL1 kinase domain mutation screening is indicated in the setting of treatment failure or warning during disease monitoring. The pattern of mutation guides second-line TKI choice because certain mutations confer specific resistance to one TKI while sensitivity to other TKIs persists. The T315I mutation is resistant to imatinib, nilotinib, dasatinib and bosutinib, but ponatinib and asciminib retain activity. Loss of major molecular response is a clinically significant change that warrants active intervention and mutation analysis, not continued observation or simple dose escalation. Hydroxycarbamide and interferon do not produce deep molecular responses in this setting."
  },
  {
    num: 475,
    stem: "A 55-year-old man with a 7-year history of chronic phase CML presents with 28% blasts in the peripheral blood. Bone marrow confirms myeloblastic transformation with 35% blasts. He is treated with a TKI plus acute myeloid leukaemia-type induction chemotherapy and achieves a second chronic phase with a BCR::ABL1 transcript level of 12%. He has a fully HLA-matched sibling donor. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Continue the TKI indefinitely as maintenance, because returning to chronic phase after blast crisis is durable without further intervention.",
      B: "Proceed to allogeneic stem cell transplantation as soon as feasible, because blast crisis has a dismal prognosis and allogeneic SCT offers the best chance of long-term disease control in eligible patients.",
      C: "Administer donor lymphocyte infusions now, because they are highly effective in CML relapse even without prior transplantation.",
      D: "Switch to ponatinib alone, because blast crisis is always driven by the T315I mutation.",
      E: "Repeat the AML-type induction course every 3 months as consolidation, because repeated chemotherapy is superior to SCT in blast crisis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that acute myeloblastic transformation in CML is difficult to treat and survival is rare beyond 1 year without stem cell transplantation. Although TKIs are used in blast transformation, resistance usually develops within weeks. Allogeneic SCT, where possible, is a valuable option and offers the best chance of long-term disease control. Returning to chronic phase after induction is a window of opportunity to proceed to transplantation in an eligible patient. Donor lymphocyte infusions are effective for relapse after allogeneic SCT, not as primary therapy in the absence of a prior transplant. Blast crisis is not always associated with the T315I mutation. Repeated chemotherapy alone does not provide durable control comparable with SCT."
  },
  {
    num: 476,
    stem: "Regarding the detection of BCR::ABL1 in suspected chronic myeloid leukaemia, which of the following statements is most accurate?",
    options: {
      A: "The BCR::ABL1 fusion can be detected by conventional karyotyping, fluorescence in situ hybridization (FISH), or reverse transcriptase PCR (RT–PCR); a minority of patients are Philadelphia-chromosome negative on karyotype but BCR::ABL1 positive by molecular techniques and behave clinically like Ph-positive CML.",
      B: "RT–PCR is too insensitive to detect BCR::ABL1 at diagnosis and should only be used for monitoring response after therapy has begun.",
      C: "FISH analysis cannot be performed on peripheral blood and is therefore obsolete in the molecular era.",
      D: "A Philadelphia chromosome identified by karyotyping is specific for CML and is never seen in acute lymphoblastic leukaemia.",
      E: "BCR::ABL1-negative atypical chronic myeloid leukaemia is classified with CML because both respond similarly to imatinib."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that in most patients the Ph chromosome is seen by karyotypic examination, but in a few the same molecular rearrangement is detectable only by FISH or RT–PCR; this Ph-negative, BCR::ABL1-positive CML behaves clinically like Ph-positive CML. FISH can be performed on metaphase and interphase cells, including peripheral blood, and remains a useful adjunct. The Ph translocation is also seen in a minority of cases of acute lymphoblastic leukaemia, particularly those producing the p190 fusion protein. BCR::ABL1-negative atypical CML is a distinct entity classified with the myelodysplastic/myeloproliferative neoplasms and does not respond to imatinib."
  },
  {
    num: 477,
    stem: "Regarding the BCR::ABL1 fusion transcripts and proteins in Philadelphia-chromosome-positive leukaemias, which of the following statements is most accurate?",
    options: {
      A: "The p210 BCR::ABL1 protein is produced by breakpoints in the major breakpoint cluster region (M-BCR) and is characteristic of CML, whereas the p190 protein arises from the minor breakpoint cluster region (m-BCR) and is seen in some cases of Philadelphia-positive acute lymphoblastic leukaemia but not in CML.",
      B: "Both p210 and p190 proteins are commonly found in chronic phase CML, and the presence of p190 predicts a more favourable response to imatinib.",
      C: "The p190 protein is produced by breakpoints in the major breakpoint cluster region and is the defining fusion protein of CML.",
      D: "The p230 protein, arising from breakpoints between exons 19 and 20 of BCR, is the most common variant in CML and is associated with prominent neutrophilic maturation.",
      E: "The functional difference between p210 and p190 is that only p210 has constitutive tyrosine kinase activity, whereas p190 acts primarily as a transcriptional activator of myeloid genes."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Fig. 14.1 illustrates that the p210 fusion protein in CML results from breakpoints in the major breakpoint cluster region (M-BCR), whereas in some cases of Ph-positive acute lymphoblastic leukaemia the breakpoint occurs further upstream in the minor breakpoint cluster region (m-BCR), producing a p190 protein. The p190 protein is not seen in CML. Both fusion proteins have enhanced, constitutively active tyrosine kinase activity. Rare p230 variants can occur, but they are not the most common form in CML and many laboratories cannot test for them."
  },
  {
    num: 478,
    stem: "Regarding resistance to tyrosine kinase inhibitor therapy in chronic myeloid leukaemia, which of the following statements is most accurate?",
    options: {
      A: "ABL1 kinase domain mutations are detected by sequencing the ABL1 portion of the BCR::ABL1 fusion and are indicated when patients are in the treatment failure or warning zone; the mutation profile determines selection of second-line or third-line TKI therapy.",
      B: "The T315I 'gatekeeper' mutation confers resistance to all TKIs because it abolishes the ATP binding site of BCR::ABL1, making any ATP-competitive or allosteric inhibitor ineffective.",
      C: "Mutation screening is only indicated after a patient has failed two different TKIs, because earlier screening has no impact on treatment selection.",
      D: "Resistance mutations arise randomly and are unrelated to clonal selection under TKI pressure; they can therefore be ignored if the patient is asymptomatic.",
      E: "Imatinib resistance always results from the T315I mutation, so any loss of response to imatinib should be treated with ponatinib without sequencing."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that BCR::ABL1 kinase domain mutations may be detected by sequencing the ABL1 gene, and that mutation screening is indicated in the setting of treatment failure or warning during monitoring. The pattern of mutation is useful for selecting second-line therapy because different mutations confer resistance to specific TKIs while preserving sensitivity to others. The T315I mutation confers resistance to imatinib, nilotinib, dasatinib and bosutinib, but ponatinib and asciminib retain activity; it therefore does not abolish the ATP site or render all inhibitors ineffective. Resistance mutations are selected under TKI pressure and are clinically relevant, not random or ignorable."
  },
  {
    num: 479,
    stem: "Regarding non-tyrosine-kinase-inhibitor therapies in the management of chronic myeloid leukaemia, which of the following statements is most accurate?",
    options: {
      A: "Hydroxycarbamide can control the white cell count in chronic phase but does not reduce the proportion of BCR::ABL1-positive cells; interferon-alpha is now mainly used in pregnancy because tyrosine kinase inhibitors are not known to be safe and hydroxycarbamide is teratogenic.",
      B: "Hydroxycarbamide is as effective as imatinib at inducing major molecular remission and can be used as first-line therapy when a TKI is temporarily unavailable.",
      C: "Interferon-alpha is contraindicated in pregnancy because it causes severe fetal myelosuppression, whereas hydroxycarbamide is the preferred cytoreductive agent in pregnant patients.",
      D: "Asciminib binds the ATP binding site of BCR::ABL1 and is therefore ineffective against T315I-mutated disease.",
      E: "Omacetaxine is a DNA alkylating agent that reduces BCR::ABL1 transcripts by direct cytotoxicity and is approved for newly diagnosed chronic phase CML."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, explains that hydroxycarbamide can control and maintain the white cell count in chronic phase, but does not reduce the percentage of BCR::ABL1-positive cells. Interferon-alpha, often combined with cytarabine in the past, has been largely replaced by TKIs but is still used in pregnant patients because TKIs are not known to be safe in pregnancy and hydroxycarbamide is teratogenic. Asciminib is unique in binding the myristoyl binding site of ABL1 rather than the ATP binding site, and it retains activity in resistant disease including some T315I cases. Omacetaxine is a subcutaneous inhibitor of protein translation approved for relapsed/refractory CML, not a DNA alkylator and not first-line therapy."
  },
  {
    num: 480,
    stem: "Regarding prognostic scoring at diagnosis of chronic myeloid leukaemia, which of the following statements is most accurate?",
    options: {
      A: "Sokal, Hasford and EUTOS scores integrate clinical and laboratory variables such as age, blast percentage, spleen size and platelet count, and they can help guide the choice of initial TKI by identifying patients with more aggressive disease.",
      B: "The Sokal score is based exclusively on age and is therefore obsolete in the tyrosine kinase inhibitor era.",
      C: "Prognostic scores are no longer relevant because all patients with chronic phase CML receive identical first-line TKI therapy regardless of risk.",
      D: "The EUTOS long-term survival score requires cytogenetic response at 18 months and is therefore only useful after treatment has started.",
      E: "High Sokal risk is an absolute indication for allogeneic stem cell transplantation at diagnosis, because second-generation TKIs have no activity in high-risk disease."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that the Sokal, Hasford and EUTOS long-term survival scores incorporate factors such as age, blast cell percentage, spleen size and platelet count. These scoring systems can be useful in providing guidance for initial TKI choice by identifying patients with more aggressive disease, although choice also depends on patient comorbidities and other factors. They are not obsolete and do not mandate identical therapy for all patients. High Sokal risk does not automatically require transplantation at diagnosis; allogeneic SCT is usually reserved for TKI failure or advanced-phase disease."
  }
];
