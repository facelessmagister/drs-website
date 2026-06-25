export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 191,
    stem: "A 67-year-old man presents with headache, generalised pruritus after hot baths, blurred vision, and facial plethora. Examination reveals conjunctival suffusion and a spleen palpable 4 cm below the left costal margin. Laboratory studies: haemoglobin 188 g/L, haematocrit 0.56, white cell count 13.2 × 10⁹/L, platelets 560 × 10⁹/L. JAK2 V617F is detected. Serum erythropoietin is subnormal. According to Hoffbrand, which of the following is the most appropriate initial management strategy?",
    options: {
      A: "Immediate ruxolitinib, because JAK2 inhibition is the disease-modifying therapy of choice for all newly diagnosed PV patients regardless of risk category.",
      B: "Low-dose aspirin plus venesection to maintain haematocrit <0.50, with hydroxycarbamide reserved for high-risk patients such as those aged ≥65 years or with prior thrombosis.",
      C: "Radioactive phosphorus (³²P), because it provides durable control of erythrocytosis and is recommended as first-line therapy in current guidelines.",
      D: "Allogeneic stem cell transplantation, because it is the only curative option and should be offered early to all JAK2-mutated PV patients to prevent transformation to myelofibrosis.",
      E: "Interferon-alpha monotherapy, because it is the standard first-line treatment for all patients with PV and achieves superior molecular responses compared with hydroxycarbamide."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that treatment of PV aims to reduce thrombosis and haemorrhage. In all patients aspirin should be offered and haematocrit should be reduced to <0.50. Cardiovascular risk factors should be controlled. Patients at higher risk of thrombosis (aged ≥65 years and/or prior thrombosis) should be offered cytoreduction, e.g. hydroxycarbamide. Venesection is particularly useful when rapid reduction of red cell volume is required and for long-term treatment in younger patients and those with mild disease. Ruxolitinib is used in patients not controlled adequately or with side effects from hydroxycarbamide, or with severe constitutional symptoms. Radioactive phosphorus is rarely used nowadays and is associated with increased risk of progression to AML. Allogeneic SCT is not indicated for PV. Interferon is less convenient, more expensive, and side effects are frequent; pegylated interferon is preferred when used, but it is not first-line for all patients."
  },
  {
    num: 192,
    stem: "A 54-year-old woman presents with a burning sensation in her hands and feet that is promptly relieved by aspirin. She is otherwise asymptomatic. A routine blood count shows platelets 950 × 10⁹/L. The haemoglobin and white cell count are normal. JAK2 V617F is negative. Bone marrow biopsy shows proliferation mainly of megakaryocytes with enlarged, mature megakaryocytes with hyperlobulated nuclei. No significant increase in neutrophil granulopoiesis or erythropoiesis. CALR exon 9 mutation is detected. Which of the following best describes her risk stratification and recommended management?",
    options: {
      A: "High-risk essential thrombocythaemia requiring immediate cytoreduction with hydroxycarbamide plus low-dose aspirin, because a platelet count >1500 × 10⁹/L is the threshold for high risk.",
      B: "Low-risk essential thrombocythaemia managed with low-dose aspirin alone, because she is below 60 years of age without prior thrombosis and without extreme thrombocytosis.",
      C: "Reactive thrombocytosis requiring treatment of the underlying cause, because a CALR-mutated ET typically presents with lower platelet counts and this degree of thrombocytosis suggests a reactive process.",
      D: "Polycythaemia vera masked by iron deficiency, because JAK2-negative ET with very high platelets usually represents masked PV that requires venesection.",
      E: "Immediate ruxolitinib, because JAK2 inhibitors are the standard first-line therapy for all CALR-mutated essential thrombocythaemia regardless of age or thrombosis history."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that low-dose aspirin at 75 mg/day is generally recommended in all cases of ET. Patients at high risk include those over 60 years of age, and/or with previous thrombosis and/or with platelet count >1500 × 10⁹/L; this group should be treated with hydroxycarbamide or another cytoreductive agent. Low-risk patients are those aged below 60 years without a history of thrombosis or extreme thrombocytosis, and here aspirin alone is sufficient. This patient is 54, has no prior thrombosis, and platelets are 950 × 10⁹/L (not >1500). CALR-mutated ET is a valid WHO 2022 diagnosis and does not indicate reactive thrombocytosis. Masked PV is not suggested by a normal haemoglobin and normal white cell count. Ruxolitinib is not first-line for low-risk ET."
  },
  {
    num: 193,
    stem: "A 71-year-old man with a 10-year history of polycythaemia vera presents with progressive fatigue, 8 kg weight loss, night sweats, and early satiety. Examination reveals massive splenomegaly extending to the right iliac fossa. Laboratory studies: haemoglobin 88 g/L, white cell count 4.1 × 10⁹/L, platelets 95 × 10⁹/L. The blood film shows tear-drop poikilocytes and a leuco-erythroblastic picture. Bone marrow trephine biopsy is attempted but aspiration is dry; the biopsy shows dense reticulin fibrosis with atypical megakaryocytes. JAK2 V617F remains positive. Which of the following best describes his current disease status and most appropriate management?",
    options: {
      A: "Post-polycythaemic myelofibrosis; management includes red cell transfusion support, consideration of ruxolitinib for splenomegaly and constitutional symptoms, and evaluation for allogeneic stem cell transplantation if prognostic risk is high.",
      B: "Transformation to acute myeloid leukaemia; immediate induction chemotherapy with cytarabine and anthracycline is required.",
      C: "Accelerated phase polycythaemia vera; high-dose hydroxycarbamide should be escalated to achieve rapid cytoreduction and prevent further progression.",
      D: "Reactive myelofibrosis secondary to infection; the fibrosis is reversible with antibiotics and the underlying PV should be managed with increased venesection frequency.",
      E: "Chronic phase PV with splenic sequestration; splenectomy is curative and should be performed urgently to restore normal blood counts."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that transition from PV to myelofibrosis occurs in approximately 6–20% of patients. When myelofibrosis evolves after polycythaemia vera, it is termed post-polycythaemic myelofibrosis and behaves similarly to primary myelofibrosis. The predominant feature is progressive generalized reactive fibrosis of the bone marrow with development of extramedullary haemopoiesis, leading to anaemia and massive splenomegaly. The blood film shows a leuco-erythroblastic picture with tear-drop cells. Treatment includes blood transfusions, hydroxycarbamide to reduce splenomegaly, and ruxolitinib, an oral JAK2 inhibitor that can reduce spleen size, improve constitutional symptoms and quality of life and increase survival. Allogeneic SCT may be a curative option based on careful patient selection and prognostic scores. AML transformation would require ≥20% blasts. There is no evidence of infection. Splenectomy is associated with high morbidity and mortality and is now rarely undertaken given the availability of JAK2 inhibitors."
  },
  {
    num: 194,
    stem: "A 45-year-old man is found to have a haemoglobin of 176 g/L and haematocrit 0.52 during a routine insurance medical examination. He is asymptomatic. JAK2 V617F and JAK2 exon 12 mutations are absent. Serum erythropoietin is markedly elevated at 38 IU/L (normal 2.5–10). Arterial oxygen saturation is 92% on room air. He has smoked 25 cigarettes daily for 20 years and snores heavily. Abdominal ultrasound is normal with no renal masses or cysts. Which of the following is the most likely underlying cause of his polycythaemia?",
    options: {
      A: "Polycythaemia vera with a false-negative JAK2 result, because up to 2% of PV cases lack a detectable JAK2 mutation and the high haematocrit is diagnostic.",
      B: "Secondary erythrocytosis driven by chronic hypoxia from smoking and obstructive sleep apnoea, because JAK2-negative polycythaemia with elevated erythropoietin indicates an appropriate physiological response to tissue hypoxia.",
      C: "Congenital primary polycythaemia due to a von Hippel-Lindau (VHL) gene mutation, because VHL mutations are the commonest cause of JAK2-negative absolute polycythaemia in middle-aged adults.",
      D: "Essential thrombocythaemia with associated reactive erythrocytosis, because JAK2-negative MPNs often show elevated erythropoietin and mild erythrocytosis.",
      E: "Relative polycythaemia due to plasma volume contraction, because smoking causes diuresis and reduces plasma volume without increasing red cell mass."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies polycythaemia into absolute (primary or secondary) and relative (pseudopolycythaemia). Absolute polycythaemia with elevated serum erythropoietin indicates secondary erythrocytosis driven by factors such as smoking, obstructive sleep apnoea, chronic lung disease, or altitude. This patient has a high erythropoietin level, is JAK2-negative, and has risk factors for chronic hypoxia (heavy smoking, snoring suggesting sleep apnoea). PV is characterised by subnormal serum erythropoietin and usually a JAK2 mutation. Congenital VHL mutations (Chuvash polycythaemia) are rare and would not be the most likely explanation in this clinical context. ET does not cause erythrocytosis. Relative polycythaemia results from plasma volume contraction with a normal red cell mass; this patient has a raised haematocrit >0.52 in a man, indicating absolute polycythaemia is likely, and the elevated erythropoietin points to a secondary cause."
  },
  {
    num: 195,
    stem: "A 62-year-old woman presents with recurrent episodes of flushing, pruritus, abdominal pain, diarrhoea, and two episodes of anaphylaxis after bee stings. Skin examination reveals widespread urticaria pigmentosa with Darier's sign positive. Bone marrow biopsy shows multifocal dense mast cell aggregates (>15 cells per aggregate). Flow cytometry shows mast cells positive for CD25 and CD2. Serum tryptase is 68 ng/mL (normal <20). KIT D816V mutation is detected. Which of the following is the most appropriate initial systemic therapy?",
    options: {
      A: "Midostaurin, because it is approved for systemic mastocytosis and inhibits the KIT tyrosine kinase including the D816V mutant.",
      B: "Imatinib, because KIT is a tyrosine kinase receptor and imatinib is effective against all KIT mutations including D816V.",
      C: "Ruxolitinib, because JAK2 mutations are commonly found in advanced mastocytosis and JAK2 inhibition controls mast cell proliferation.",
      D: "Hydroxycarbamide, because it reduces the mast cell burden by non-specific myelosuppression and is well tolerated in elderly patients.",
      E: "Immediate allogeneic stem cell transplantation, because systemic mastocytosis with KIT D816V is incurable with conventional therapy and SCT offers the only chance of cure."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that systemic mastocytosis is a clonal myeloproliferative neoplasm with diverse presentations. The somatic KIT mutation Asp816Val (D816V) is detected in >90% of patients. Midostaurin is approved for treatment of systemic mastocytosis and avapritinib is also highly active; both inhibit the KIT tyrosine kinase. Imatinib is ineffective against the D816V mutation. JAK2 mutations may be present in advanced cases as additional mutations, but they are not the primary driver. Hydroxycarbamide is not a standard therapy for mastocytosis. Allogeneic SCT is not mentioned as initial therapy in the text; targeted KIT inhibitors are the appropriate first-line systemic treatment."
  },
  {
    num: 196,
    stem: "Regarding the molecular pathogenesis of JAK2 V617F in the three major BCR::ABL1-negative myeloproliferative neoplasms, which of the following statements is most accurate?",
    options: {
      A: "The JAK2 V617F mutation occurs in the pseudokinase domain, abolishing its negative autoregulatory function and causing constitutive activation of downstream STAT signalling independent of cytokine binding.",
      B: "The JAK2 V617F mutation occurs in the kinase domain and increases ATP-binding affinity, allowing JAK2 to phosphorylate downstream substrates even in the absence of growth factor receptors.",
      C: "The JAK2 V617F mutation creates a neoepitope that is recognised by the adaptive immune system, leading to T-cell-mediated destruction of haemopoietic stem cells and ineffective erythropoiesis.",
      D: "The JAK2 V617F mutation occurs exclusively in erythroid progenitors in polycythaemia vera, which explains why granulocyte and platelet production remain entirely normal.",
      E: "Homozygous JAK2 V617F mutation is the usual state at diagnosis in all three MPNs and confers a worse prognosis than heterozygosity in every disease subtype."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that the JAK2 V617F mutation occurs in a highly conserved region of the pseudokinase domain, which normally negatively regulates JAK2 signalling. JAK2 has a major role in normal myeloid development by transducing signals from cytokines and growth factors including erythropoietin, granulocyte colony-stimulating factor receptor and thrombopoietin. The V617F mutation allows the JAK protein to become activated even when no growth factor is bound, leading to downstream signalling activation including STAT proteins (Fig. 15.2). The mutation is found in haemopoietic cells, not exclusively erythroid progenitors, and in PV there is often overproduction of granulocytes and platelets as well. The mutation can be heterozygous, hemizygous, or homozygous, with homozygosity arising from mitotic recombination and usually associated with a higher allele burden in PV."
  },
  {
    num: 197,
    stem: "Regarding calreticulin (CALR) mutations in essential thrombocythaemia and primary myelofibrosis, which of the following statements is most accurate?",
    options: {
      A: "CALR mutations are typically 52-base-pair or 5-base-pair deletions in exon 9 that result in a novel C-terminal protein which binds and activates the thrombopoietin receptor MPL, driving megakaryocyte proliferation.",
      B: "CALR mutations are missense substitutions in the calcium-binding domain that increase intracellular calcium levels and directly stimulate erythropoietin-independent erythroid colony growth.",
      C: "CALR mutations are nonsense mutations that cause loss of the chaperone function, leading to accumulation of misfolded proteins in the endoplasmic reticulum and apoptosis of haemopoietic stem cells.",
      D: "CALR mutations occur in the promoter region and upregulate CALR transcription, thereby increasing platelet production through enhanced thrombopoietin signalling via the wild-type MPL receptor.",
      E: "CALR-mutated ET is associated with a higher thrombosis risk, older age at presentation, and shorter survival compared with JAK2-mutated ET."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that in those patients with ET or PMF who do not demonstrate a JAK2 mutation, a mutation in CALR is present in most cases. CALR is a multifunction chaperone protein involved in the folding of immature proteins and in calcium homeostasis. The mutations typically are either a 52 base pair (bp) or 5bp deletion occurring in exon 9 and result in a novel protein that interacts with the thrombopoietin receptor MPL activating its downstream signalling pathways. This mechanism explains the megakaryocyte proliferation and thrombocytosis seen in CALR-mutated ET and PMF. CALR-mutated patients tend to be younger, have higher platelet counts, but a lower incidence of thrombosis and longer survival than JAK2-mutated patients (Table 15.5). The mutations are not promoter mutations, nonsense mutations causing loss of function, or missense substitutions in the calcium-binding domain."
  },
  {
    num: 198,
    stem: "Regarding the prognostic models for primary myelofibrosis and their implications for treatment selection, which of the following statements is most accurate?",
    options: {
      A: "The DIPSS Plus score incorporates age, constitutional symptoms, anaemia, leukocyte count, circulating blasts, platelet count, red blood cell transfusion need, and unfavourable karyotype; high-risk patients should be considered for ruxolitinib in the first year and allogeneic SCT if eligible.",
      B: "The MIPSS-70 score uses only clinical parameters and excludes molecular genetics, making it less useful than DIPSS Plus for selecting patients for JAK2 inhibitor therapy.",
      C: "The MYSEC-PM model is designed exclusively for post-ET myelofibrosis and cannot be applied to primary myelofibrosis or post-PV myelofibrosis.",
      D: "CALR mutation status is not included in any prognostic model, because all CALR-mutated PMF patients have identical survival regardless of other risk factors.",
      E: "Allogeneic stem cell transplantation should be offered to all intermediate-risk PMF patients at diagnosis, because transplant-related mortality is lower than the disease-related mortality in this group."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 15.10 compares the DIPSS Plus, MIPSS-70+ v2.0, and MYSEC-PM prognostic models. DIPSS Plus includes age >65 years, constitutional symptoms, haemoglobin <100 g/L, leukocyte count >25 × 10⁹/L, circulating blasts ≥1%, platelet count <100 × 10⁹/L, red blood cell transfusion need, and unfavourable karyotype. MIPSS-70 incorporates age, constitutional symptoms, severe/moderate anaemia, circulating blasts ≥2%, platelet count <150 × 10⁹/L, absence of CALR type 1/like mutation, unfavourable karyotype, and high molecular risk mutations (ASXL1, SRSF2, EZH2, IDH1, IDH2, U2AF1Q157). MYSEC-PM allows for prediction of survival for patients with myelofibrosis secondary to PV and ET. Ruxolitinib should be started in the first year from diagnosis in intermediate- and high-risk patients. Allogeneic SCT may be a curative option based on careful patient selection, with assessment of fitness and balance between transplant-related mortality and PMF-related life expectancy. It is not offered to all intermediate-risk patients automatically."
  },
  {
    num: 199,
    stem: "Regarding the clinical and laboratory differences between JAK2-mutated and CALR-mutated essential thrombocythaemia, which of the following statements is most accurate?",
    options: {
      A: "JAK2-mutated ET is associated with older age, higher haemoglobin and white cell counts, lower platelet counts, lower serum erythropoietin, and a higher risk of thrombosis compared with CALR-mutated ET.",
      B: "CALR-mutated ET is associated with older age, higher haemoglobin, higher thrombosis risk, and transformation to polycythaemia vera, whereas JAK2-mutated ET occurs in younger patients with isolated thrombocytosis.",
      C: "JAK2-mutated and CALR-mutated ET have identical survival, identical thrombosis rates, and identical platelet counts; the mutation type is prognostically irrelevant.",
      D: "CALR-mutated ET carries a significantly higher risk of transformation to acute myeloid leukaemia than JAK2-mutated ET, because CALR mutations cooperate more strongly with epigenetic modifier mutations.",
      E: "JAK2-mutated ET never transforms to polycythaemia vera, because the JAK2 mutation is specific to the megakaryocyte lineage and cannot drive erythropoiesis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Table 15.5 compares JAK2-mutated and CALR-mutated ET. JAK2-mutated patients are older, have higher haemoglobin and white cell counts, lower platelet counts, lower serum erythropoietin, a higher risk of thrombosis, and can transform to polycythaemia vera. CALR-mutated patients are younger, have higher platelet counts, higher serum erythropoietin, a lower risk of thrombosis, do not transform to PV, and have longer survival (>25 years vs ~17 years). The risk of transformation to myelofibrosis is equal between the two. JAK2-mutated ET can transform to PV because the mutation is present in a pluripotent stem cell, not restricted to megakaryocytes."
  },
  {
    num: 200,
    stem: "Regarding systemic mastocytosis and its molecular basis, which of the following statements is most accurate?",
    options: {
      A: "The KIT D816V mutation is detected in >90% of patients, is responsible for autonomous growth and enhanced survival of neoplastic mast cells, and targeted inhibition with midostaurin or avapritinib is the cornerstone of systemic therapy.",
      B: "The KIT D816V mutation is found in only 10–20% of patients and is a passenger mutation without functional significance; mastocytosis is primarily driven by JAK2 or CALR mutations.",
      C: "KIT is a receptor for erythropoietin, and the D816V mutation causes constitutive erythropoietin signalling, explaining why systemic mastocytosis often presents with polycythaemia.",
      D: "Systemic mastocytosis is always an indolent disease with no risk of transformation; mast cell leukaemia does not exist and is a historical misnomer.",
      E: "The D816V mutation occurs in the extracellular ligand-binding domain of KIT, preventing stem cell factor (SCF) binding and causing loss of function rather than gain of function."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that the somatic KIT mutation Asp816Val (D816V) is detected in >90% of patients and is responsible for autonomous growth and enhanced survival of the neoplastic mast cells. KIT is a tyrosine kinase cell membrane receptor for the growth factor stem cell factor (SCF). Midostaurin is approved for treatment of systemic mastocytosis and avapritinib is also highly active; both inhibit the KIT tyrosine kinase. In advanced cases additional mutations (e.g. TET2, SRSF2, ASXL1, RUNX1, JAK2) may be present but they are not the primary driver. Mast cell leukaemia is the most aggressive form with median survival of only a few months. The D816V mutation causes gain of function, not loss of function, and is in the tyrosine kinase domain, not the extracellular ligand-binding domain."
  },
  {
    num: 481,
    stem: "A 28-year-old woman with JAK2 V617F-positive polycythaemia vera is planning to conceive. She is otherwise low risk (age <60 years, no prior thrombosis) with haematocrit 0.49 and platelets 420 × 10⁹/L. She requires cytoreduction because of intolerance to frequent venesection and a persistent haematocrit above 0.45. According to Hoffbrand, which management plan is most appropriate?",
    options: {
      A: "Continue hydroxycarbamide throughout pregnancy because it is safe in all trimesters and does not cross the placenta.",
      B: "Offer pegylated interferon alfa because hydroxycarbamide is teratogenic and JAK inhibitors lack pregnancy safety data; low-dose aspirin and venesection should also be continued.",
      C: "Start ruxolitinib because it is the preferred cytoreductive agent in pregnancy and achieves rapid molecular response.",
      D: "Substitute anagrelide because it has no teratogenic risk and effectively controls the haematocrit.",
      E: "Defer cytoreduction until after delivery because venesection alone is adequate in all pregnant patients with PV."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that hydroxycarbamide should be avoided in pregnancy because it is teratogenic, and it should be stopped prior to conception. Interferon is particularly valuable in younger patients and for those who might become pregnant, since JAK2 inhibitors are not known to be safe in pregnancy. Long-acting pegylated interferon is preferred because it reduces injection frequency and gives better control. Low-dose aspirin and maintenance of haematocrit <0.50 (ideally <0.45 in the presence of cardiovascular risk factors) remain central to PV management. Anagrelide controls platelet counts, not erythrocytosis, and is not highlighted as safe in pregnancy in the text."
  },
  {
    num: 482,
    stem: "A 58-year-old woman with known JAK2 V617F-positive essential thrombocythaemia presents with recurrent epistaxis, gingival bleeding and a single episode of haematuria. Her platelet count is 1680 × 10⁹/L, haemoglobin 126 g/L and white cell count 9.2 × 10⁹/L. Von Willebrand factor collagen-binding activity is 22% (normal >50%) and ristocetin cofactor activity is 24%. She was taking low-dose aspirin, which has now been stopped. Which is the most appropriate immediate management strategy?",
    options: {
      A: "Increase aspirin to 300 mg daily and add tranexamic acid to counter mucosal bleeding.",
      B: "Urgently start hydroxycarbamide to lower the platelet count and give von Willebrand factor concentrate if bleeding is severe or persists.",
      C: "Arrange urgent plateletpheresis and continue aspirin to prevent thrombosis during the procedure.",
      D: "Perform splenectomy because massive splenic sequestration is causing the extreme thrombocytosis.",
      E: "Start ruxolitinib as first-line therapy because JAK2 inhibition corrects acquired von Willebrand syndrome."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that very high platelet counts can be associated with a paradoxical increased risk of bleeding due to acquired von Willebrand syndrome, caused by adsorption of high-molecular-weight von Willebrand factor multimers onto the platelet surface. Aspirin should be withheld during active bleeding because it impairs platelet function. Hydroxycarbamide is the most widely used cytoreductive agent in ET and will reduce the platelet count, allowing vWF levels to recover. Severe or ongoing bleeding may require vWF replacement. Plateletpheresis is reserved for life-threatening thrombocytosis; splenectomy is inappropriate; ruxolitinib is not first-line for bleeding complications of ET."
  },
  {
    num: 483,
    stem: "A 66-year-old man with DIPSS-Plus low-risk primary myelofibrosis has progressive symptomatic anaemia (haemoglobin 84 g/L, MCV 88 fL). He is transfusion-independent, has moderate splenomegaly (12 cm below the left costal margin), and serum erythropoietin is 115 IU/L. Renal function is normal and there is no iron, vitamin B12 or folate deficiency. Which of the following is the most appropriate first-line therapy for his anaemia?",
    options: {
      A: "Commence ruxolitinib to shrink the spleen and indirectly improve erythropoiesis.",
      B: "Begin regular red cell transfusion every 2–3 weeks to maintain haemoglobin >100 g/L.",
      C: "Trial high-dose erythropoiesis-stimulating agent because the serum EPO is inappropriately normal.",
      D: "Trial danazol because androgens improve anaemia in PMF and do not worsen splenomegaly.",
      E: "Proceed directly to allogeneic stem cell transplantation because anaemia predicts imminent leukaemic transformation."
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that androgens such as danazol improve anaemia in some patients with primary myelofibrosis, while erythropoiesis-stimulating agents can be tried but may cause splenic enlargement. This patient already has moderate splenomegaly, making ESA therapy less attractive as a first step. Ruxolitinib can improve splenomegaly and constitutional symptoms but often worsens anaemia and thrombocytopenia. Regular transfusion is reserved for patients who are transfusion-dependent or severely symptomatic. Allogeneic SCT is a curative option only after careful risk assessment and is not indicated for anaemia alone in low-risk disease."
  },
  {
    num: 484,
    stem: "A 54-year-old man is referred for persistent neutrophilia of 14 months' duration. Full blood count: white cell count 31 × 10⁹/L with 86% segmented neutrophils and no immature granulocytes; haemoglobin 138 g/L, platelets 340 × 10⁹/L. There is no evidence of infection, inflammation, corticosteroid use or another myeloid neoplasm. BCR::ABL1 is negative and bone marrow biopsy shows mature neutrophil hyperplasia with <5% blasts. Next-generation sequencing reveals an activating CSF3R T618I mutation. Which management strategy best aligns with Hoffbrand?",
    options: {
      A: "Start imatinib because CSF3R is a tyrosine kinase receptor and imatinib is effective against all receptor tyrosine kinase mutations.",
      B: "Start hydroxycarbamide for cytoreduction and consider a JAK or other kinase inhibitor guided by the CSF3R mutation result.",
      C: "Administer induction chemotherapy with cytarabine and idarubicin.",
      D: "Observe with 3-monthly blood counts because chronic neutrophilic leukaemia is uniformly indolent.",
      E: "Proceed to allogeneic stem cell transplantation immediately as the only curative option."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes chronic neutrophilic leukaemia as a rare MPN with a persistently raised white cell count of >25 × 10⁹/L and at least 80% mature neutrophils, no BCR::ABL1 rearrangement and no increase in blasts. Activating mutations in the colony-stimulating factor 3 receptor gene (CSF3R) are found in most patients, and kinase inhibitors may be useful. Hydroxycarbamide provides effective cytoreduction. The prognosis is variable, so observation alone is inappropriate and allogeneic SCT is not first-line in the absence of high-risk transformation. Imatinib is not standard for CSF3R mutations."
  },
  {
    num: 485,
    stem: "A 43-year-old man has a 4-month history of pruritus, progressive dyspnoea and eosinophilia (absolute eosinophil count 7.8 × 10⁹/L). Examination reveals splenomegaly. Bone marrow cytogenetics demonstrate t(5;12)(q33;p13) producing an ETV6-PDGFRB fusion transcript. There is no acute organ-threatening emergency. Which targeted therapy is most appropriate?",
    options: {
      A: "High-dose corticosteroids because eosinophilia always requires urgent steroid suppression.",
      B: "Imatinib because PDGFRB fusion predicts response to tyrosine kinase inhibition.",
      C: "Hydroxycarbamide plus interferon as standard therapy regardless of fusion status.",
      D: "Cladribine because it depletes eosinophils and is first-line for PDGFRB-rearranged disease.",
      E: "Pemigatinib because it targets PDGFRB rearrangements in eosinophilic neoplasms."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that myeloid/lymphoid neoplasms with eosinophilia and tyrosine kinase gene fusions are clonal disorders driven by rearranged tyrosine kinases, and that fusion genes involving PDGFRA and PDGFRB predict for a response to tyrosine kinase inhibitors. ETV6-PDGFRB is a PDGFRB-rearranged fusion; imatinib is therefore the appropriate targeted agent. High-dose corticosteroids are reserved for presentations with acute organ damage. Hydroxycarbamide, interferon and cladribine are non-specific options that do not exploit the fusion target. Pemigatinib is approved for FGFR1-rearranged disease, not PDGFRB fusions."
  },
  {
    num: 486,
    stem: "Regarding MPL mutations in essential thrombocythaemia and primary myelofibrosis, which of the following statements is most accurate?",
    options: {
      A: "MPL mutations are gain-of-function alterations in the thrombopoietin receptor, found in approximately 5% of ET and 10% of PMF, and drive megakaryocyte proliferation independent of thrombopoietin.",
      B: "MPL mutations are loss-of-function variants and are a common cause of inherited thrombocytopenia.",
      C: "MPL encodes the erythropoietin receptor; its mutations explain JAK2-negative polycythaemia vera.",
      D: "MPL mutations are large exon 12 deletions of the JAK2 gene that occur only in polycythaemia vera.",
      E: "MPL mutations predict primary resistance to all JAK inhibitors and mandate immediate allogeneic SCT."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes MPL as the receptor for thrombopoietin and lists it among the driver genes in MPNs (Table 15.2). Constitutively activating mutations in MPL are found in about 5% of ET and 10% of PMF cases (Fig. 15.3), allowing JAK-STAT signalling to occur without ligand binding and driving megakaryocyte proliferation. MPL is not the erythropoietin receptor and does not cause PV. Loss-of-function MPL mutations cause thrombocytopenia, not thrombocytosis. MPL mutation status does not itself mandate allogeneic SCT."
  },
  {
    num: 487,
    stem: "Regarding germline predisposition to BCR::ABL1-negative myeloproliferative neoplasms, which of the following statements is most accurate?",
    options: {
      A: "The JAK2 46/1 haplotype is present in approximately 25% of the population and predisposes to acquisition of somatic JAK2 V617F, contributing to familial clustering of MPNs.",
      B: "JAK2 V617F and CALR mutations are inherited in the germline in the majority of MPN families.",
      C: "Myeloproliferative neoplasms are never familial because all driver mutations are somatic.",
      D: "Germline variants in MPL are the commonest inherited risk factor for PV, ET and PMF.",
      E: "The JAK2 46/1 haplotype protects against MPN and reduces the JAK2 mutant allele burden."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes a five- to seven-fold increased incidence of MPNs in first-degree relatives, implying a genetic predisposition. A specific JAK2 46/1 haplotype is present in about 25% of the population; JAK2 mutations occur with increased frequency in this haplotype, which has a higher incidence in MPN. Single nucleotide polymorphisms in other genes and family clusters have also been associated with germline variants in various genes. The driver JAK2 V617F or CALR mutations themselves are somatic, not inherited. The 46/1 haplotype increases, rather than protects against, MPN risk."
  },
  {
    num: 488,
    stem: "Concerning the bone marrow findings that distinguish polycythaemia vera from overt primary myelofibrosis according to Hoffbrand, which of the following statements is most accurate?",
    options: {
      A: "PV marrow shows hypercellular panmyelosis with trilineage proliferation and pleomorphic megakaryocytes, whereas overt PMF shows dense reticulin or collagen fibrosis with atypical megakaryocytes and often osteosclerosis.",
      B: "PV and overt PMF both show dense reticulin fibrosis; the only reliable discriminator is the JAK2 mutant allele burden.",
      C: "PMF is characterised by panmyelosis without fibrosis in all stages, including overt myelofibrosis.",
      D: "PV marrow is typically hypocellular with fibrosis and tear-drop poikilocytes.",
      E: "Osteosclerosis is pathognomonic of polycythaemia vera and is not seen in PMF."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that PV bone marrow is hypercellular for age with trilineage growth (panmyelosis), including prominent erythroid, granulocytic and megakaryocytic proliferation with pleomorphic mature megakaryocytes (WHO 2022 criteria, Table 15.4; Fig. 15.10a). In PMF the predominant feature is progressive reactive fibrosis of the bone marrow associated with megakaryocyte atypia and proliferation; trephine biopsy shows dense reticulin and often collagen fibrosis (Fig. 15.10b,c), and osteosclerosis occurs in approximately 10% of cases. Tear-drop poikilocytes are a peripheral blood feature of PMF, not a PV marrow finding."
  },
  {
    num: 489,
    stem: "Concerning additional (non-driver) somatic mutations in myeloproliferative neoplasms and their prognostic impact, which of the following statements is most accurate?",
    options: {
      A: "Mutations in TET2, ASXL1 and DNMT3A cooperate with driver mutations to accelerate clonal haemopoiesis; high molecular risk mutations such as ASXL1, SRSF2, EZH2, IDH1, IDH2 and U2AF1Q157 predict poorer survival in PMF.",
      B: "Additional somatic mutations are never found in PV or ET and are restricted to blast-phase disease.",
      C: "DNMT3A mutations are unique to polycythaemia vera and directly cause erythrocytosis.",
      D: "High molecular risk mutations improve prognosis by increasing sensitivity to ruxolitinib.",
      E: "TET2 mutations are protective against transformation to myelofibrosis and leukaemia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that mutations in other cancer driver genes are found in over half of MPN patients (Fig. 15.4). TET2, ASXL1 and DNMT3A are the commonest and synergize with JAK2, CALR or MPL mutations to increase clonal haemopoiesis. These additional mutations are more frequent in older patients and are associated with more rapid progression of PV or ET to myelofibrosis; they are also more frequent in PMF and blast phase. The MIPSS-70+ v2.0 model incorporates high molecular risk mutations (ASXL1, SRSF2, EZH2, IDH1, IDH2, U2AF1Q157) as adverse prognostic factors (Table 15.10)."
  },
  {
    num: 490,
    stem: "Regarding the pathogenesis of bone marrow fibrosis in primary myelofibrosis, which of the following statements is most accurate?",
    options: {
      A: "The fibrosis is reactive, driven by cytokines such as platelet-derived growth factor and TNF released from abnormal megakaryocytes and platelets; prefibrotic PMF shows atypical megakaryocytes with grade 1 or less fibrosis.",
      B: "The fibrosis results from direct deposition of mutated JAK2 protein in the extracellular matrix.",
      C: "Marrow fibroblasts are clonally derived from the neoplastic haemopoietic stem cell and are themselves malignant.",
      D: "Prefibrotic PMF is defined by grade 2 or higher fibrosis together with massive splenomegaly.",
      E: "Osteosclerosis is a feature of PV and is never observed in PMF."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, explains that the fibrosis of PMF is secondary to hyperplasia of abnormal megakaryocytes; fibroblasts are stimulated by platelet-derived growth factor, TNF and other cytokines secreted by megakaryocytes and platelets. Prefibrotic myelofibrosis is recognised by markedly abnormal megakaryocytes in a hypercellular marrow with no significant increase in reticulin or collagen (grade 1 or less fibrosis; Table 15.9). The fibroblasts are reactive, not clonal. Overt PMF requires grade 2 or higher fibrosis. Osteosclerosis occurs in about 10% of PMF cases, not PV."
  }
];
