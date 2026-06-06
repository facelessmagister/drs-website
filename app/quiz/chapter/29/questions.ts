export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 331,
    stem: "A 72-year-old man presents with a large spontaneous ecchymosis on his left thigh and prolonged bleeding from a recent dental extraction. He has no prior personal or family history of bleeding disorders. Laboratory studies show: Hb 102 g/L, platelets 245 × 10^9/L, PT 13 s (normal), APTT 86 s (prolonged), fibrinogen 3.4 g/L. A mixing study with normal plasma fails to correct the APTT. Factor VIII activity is <1 IU/dL and the Bethesda assay shows 18 BU. Which management strategy is most appropriate for this patient's acute bleeding and underlying condition?",
    options: {
      A: "Administer high-dose human FVIII concentrate to overwhelm the inhibitor and achieve haemostasis",
      B: "Manage bleeding with recombinant activated factor VIIa (rFVIIa) or activated prothrombin complex concentrate (aPCC), and commence immunosuppression with corticosteroids for inhibitor eradication",
      C: "Give emicizumab subcutaneously to control the acute bleed and maintain long-term prophylaxis",
      D: "Administer desmopressin to stimulate endogenous FVIII release and correct the APTT",
      E: "Perform immediate plasma exchange to remove the anti-FVIII autoantibody before any haemostatic therapy"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29) identifies this presentation as acquired haemophilia A (AHA), characterized by new-onset bleeding in an elderly patient, isolated prolonged APTT, low FVIII, and a neutralizing autoantibody detected by the Bethesda assay. Bleed management in AHA uses bypassing agents—rFVIIa or aPCC—because human FVIII is typically ineffective against high-titre inhibitors. Emicizumab is used for prophylaxis in some patients but is ineffective for managing acute bleeds. Desmopressin only benefits mild haemophilia or VWD and cannot overcome <1% FVIII activity. Immunosuppression (corticosteroids, rituximab, cyclophosphamide) is the mainstay for inhibitor eradication. Plasma exchange is not standard first-line therapy for AHA; it is reserved for specific scenarios such as antibody-mediated acquired VWS with high IgM paraprotein."
  },
  {
    num: 332,
    stem: "A 28-year-old woman is admitted to the intensive care unit with Gram-negative septic shock following a ruptured appendix. Over the next 12 hours, she develops oozing from venepuncture sites, haematuria, and progressive hypoxia. Laboratory studies: platelets 38 × 10^9/L, PT 24 s (NR 12), APTT 72 s, fibrinogen 0.7 g/L, D-dimers >80 mg/L. The peripheral blood film shows fragmented red cells (schistocytes). Which management approach best aligns with current evidence for this presentation?",
    options: {
      A: "Immediate therapeutic heparin infusion to treat the underlying microvascular thrombosis and prevent organ failure",
      B: "Treat the underlying sepsis aggressively, administer fresh frozen plasma and cryoprecipitate or fibrinogen concentrate, and give platelet concentrates if bleeding continues",
      C: "Administer tranexamic acid as sole therapy to inhibit pathological fibrinolysis and achieve haemostasis",
      D: "Start prophylactic low-molecular-weight heparin despite active bleeding because the risk of thrombosis outweighs bleeding risk",
      E: "Give recombinant human soluble thrombomodulin as first-line monotherapy to enhance physiologic anticoagulation"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29, Fig. 29.2) describes disseminated intravascular coagulation (DIC) secondary to sepsis, characterized by the triad of coagulation activation, platelet aggregation, and endothelial damage. The ISTH DIC score would be high based on severe thrombocytopenia, markedly elevated fibrin-related markers, prolonged PT, and low fibrinogen. Treatment of the underlying cause is paramount. For actively bleeding patients, FFP is indicated when PT/INR is elevated, fibrinogen concentrate or cryoprecipitate if fibrinogen is <1–1.5 g/L, and platelet concentrates if platelets are <50 × 10^9/L. Heparin is reserved for thrombotic phenotypes (e.g., skin ischemia) and is contraindicated in active bleeding. Tranexamic acid can be used judiciously as an adjunct but never as monotherapy. Thrombomodulin is not standard first-line therapy in DIC."
  },
  {
    num: 333,
    stem: "A 62-year-old man undergoes elective total hip replacement and receives unfractionated heparin for thromboprophylaxis. On postoperative day 6, his platelet count falls from 275 × 10^9/L to 58 × 10^9/L. He develops new-onset pain and swelling in his left calf, confirmed by Doppler ultrasound to be a deep vein thrombosis. ELISA testing for anti-platelet factor 4 (PF4)/heparin antibodies is strongly positive. His 4T score is calculated as 7 (high probability). Which is the most appropriate immediate management?",
    options: {
      A: "Switch thromboprophylaxis to low-molecular-weight heparin (LMWH), as it has lower cross-reactivity and can be used safely",
      B: "Discontinue heparin, initiate a non-heparin anticoagulant such as fondaparinux or rivaroxaban, and plan anticoagulation for at least three months",
      C: "Continue heparin and add aspirin 75 mg daily for dual antithrombotic therapy",
      D: "Administer platelet transfusion to correct thrombocytopenia before commencing any anticoagulant",
      E: "Start warfarin immediately at a therapeutic dose as monotherapy for oral anticoagulation"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29, Fig. 29.4) describes heparin-induced thrombocytopenia (HIT) as an immune-mediated adverse reaction caused by antibodies against PF4–heparin complexes, resulting in platelet activation, thrombocytopenia, and thrombosis. Current guidelines recommend immediate withdrawal of all heparin and anticoagulation with non-heparin agents—parenteral FXa inhibitors (danaparoid, fondaparinux) or direct oral anticoagulants (rivaroxaban, apixaban) or direct thrombin inhibitors (argatroban, bivalirudin). Patients must be anticoagulated for at least three months. LMWH has significant cross-reactivity and is contraindicated. Platelet transfusion is not indicated and may worsen thrombosis. Warfarin should not be started immediately due to risk of skin necrosis and requires bridging until platelet recovery."
  },
  {
    num: 334,
    stem: "A 34-year-old woman is brought to the emergency department with confusion, fever, and transient right-sided weakness lasting 20 minutes. Over the preceding week she has experienced fatigue, nausea, and intermittent abdominal pain. Laboratory studies: Hb 68 g/L, platelets 14 × 10^9/L, creatinine 210 μmol/L, LDH 1450 U/L, haptoglobins undetectable. The blood film shows numerous schistocytes. PT and APTT are within normal limits. ADAMTS13 activity is 4%. Which therapeutic strategy offers the best chance of survival?",
    options: {
      A: "Urgent platelet transfusion to raise the count above 50 × 10^9/L and prevent intracranial haemorrhage",
      B: "Therapeutic plasma exchange with fresh frozen plasma, caplacizumab, and immunosuppression with corticosteroids or rituximab",
      C: "Supportive care with red cell transfusion and broad-spectrum antibiotics for presumed sepsis-induced DIC",
      D: "Immediate therapeutic-dose heparin anticoagulation for presumed thrombotic microangiopathy secondary to DIC",
      E: "Eculizumab to inhibit complement-mediated endothelial injury as first-line therapy"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29, Fig. 29.5 and Fig. 29.6) describes thrombotic thrombocytopenic purpura (TTP) as a thrombotic microangiopathy caused by ADAMTS13 deficiency (<10%), resulting in ultra-large VWF multimers, platelet-rich microthrombi, microangiopathic haemolytic anaemia, thrombocytopenia, and ischemic organ damage. The clinical pentad of neurological symptoms, fever, renal impairment, anaemia, and thrombocytopenia is classic. Mortality exceeds 80–90% without treatment. First-line management comprises therapeutic plasma exchange (TPE) using FFP to replenish ADAMTS13, caplacizumab (a humanized anti-VWF antibody) to block VWF-platelet interaction, and immunosuppression to eradicate the autoantibody. Platelet transfusion is generally contraindicated in TTP as it may exacerbate microvascular thrombosis. Eculizumab is indicated for complement-mediated HUS, not TTP."
  },
  {
    num: 335,
    stem: "A 78-year-old man with known severe aortic stenosis presents with recurrent epistaxis over the past 3 months and prolonged bleeding after minor skin abrasions. He has no family history of a bleeding disorder. Laboratory studies: Hb 108 g/L, platelets 230 × 10^9/L, PT 12 s, APTT 35 s. VWF antigen 24 IU/dL, VWF:RCo 19 IU/dL, FVIII:C 30 IU/dL. VWF multimer analysis demonstrates loss of high-molecular-weight multimers. Which intervention is most likely to produce complete and durable resolution of his bleeding tendency?",
    options: {
      A: "Desmopressin nasal spray administered daily to maintain VWF levels above 50 IU/dL",
      B: "Therapeutic plasma exchange to remove an underlying anti-VWF antibody",
      C: "Aortic valve replacement, which removes the high shear stress driving VWF proteolysis",
      D: "Prophylactic VWF concentrate infusion every 48 hours for life",
      E: "Rituximab to suppress any occult lymphoproliferative disorder causing antibody-mediated clearance"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29) classifies this presentation as acquired von Willebrand syndrome (AVWS) due to increased proteolysis from shear-induced unfolding of VWF, associated with cardiovascular disorders featuring high shear stress such as aortic stenosis, ventricular assist devices, and extracorporeal membrane oxygenation. The loss of high-molecular-weight multimers is characteristic of this mechanism. Treatment of the underlying cardiac condition—in this case, aortic valve replacement—results in complete remission of the bleeding tendency. Desmopressin may be used for acute bleeds but is not practical or effective as daily long-term therapy. Plasmapheresis and IVIg are indicated for antibody-mediated clearance (e.g., MGUS, lymphoproliferative disorders), not shear-induced proteolysis. Rituximab is used for autoimmune or lymphoproliferative-associated AVWS."
  },
  {
    num: 336,
    stem: "Regarding the pathogenesis of disseminated intravascular coagulation (DIC) and the ISTH diagnostic framework, which statement most accurately integrates the molecular mechanisms and clinical phenotypes?",
    options: {
      A: "Tissue factor release from damaged tissues is the exclusive driver of coagulation activation, and physiologic anticoagulants remain fully functional throughout the disease course",
      B: "DIC is characterized by widespread coagulation activation, platelet aggregation, and endothelial damage, with impaired regulation secondary to low antithrombin and loss of endothelial antithrombotic properties",
      C: "The ISTH DIC score incorporates APTT as a core laboratory parameter because it is the most sensitive indicator of consumptive coagulopathy",
      D: "In DIC, platelet activation occurs exclusively through direct contact with subendothelial collagen, completely independent of thrombin generation and inflammatory mediators",
      E: "Hyperfibrinolysis in DIC is universally caused by decreased plasminogen activator inhibitor-1 (PAI-1), which promotes excessive clot lysis in all patients with the disorder"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29, Fig. 29.1) describes the pathogenesis of DIC as involving three interrelated processes: coagulation activation driven by tissue factor (TF) released from damaged tissues or tumour cells, platelet aggregation stimulated by thrombin and inflammatory mediators, and endothelial damage impairing the antithrombotic milieu. Physiologic anticoagulant regulation is impaired due to low circulating antithrombin levels and loss of antithrombotic properties on the endothelial surface. The ISTH DIC score includes platelet count, fibrin-related markers (D-dimers/FDP), prothrombin time, and fibrinogen level—APTT is deliberately excluded due to lack of sensitivity. Platelet activation is multifactorial and includes thrombin-mediated pathways. PAI-1 levels typically increase in DIC, slowing clot removal; hyperfibrinolysis occurs in a subset of patients through alternative mechanisms such as systemic plasminogen activation."
  },
  {
    num: 337,
    stem: "Regarding the differential diagnosis of thrombotic microangiopathies (TMAs), which statement most accurately distinguishes thrombotic thrombocytopenic purpura (TTP), Shiga toxin-producing Escherichia coli haemolytic uraemic syndrome (STEC-HUS), and complement-mediated HUS (CM-HUS)?",
    options: {
      A: "TTP is defined by ADAMTS13 activity >10%, a positive Shiga toxin stool assay, and severe renal impairment as the dominant clinical feature",
      B: "In complement-mediated HUS, ADAMTS13 activity is typically greater than 5%, Shiga toxin testing is negative, and the primary mechanism is dysregulated activation of the alternative complement pathway with membrane attack complex formation",
      C: "STEC-HUS presents with ADAMTS13 activity <10%, absence of a diarrhoeal prodrome, and neurological symptoms such as confusion and seizures as the dominant features",
      D: "Congenital TTP is caused by autoantibodies directed against ADAMTS13 that emerge during infections or pregnancy",
      E: "All TMAs consistently demonstrate detectable ultra-large VWF multimers in patient plasma because VWF dysregulation is the universal pathogenic mechanism"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29, Table 29.4) classifies TMAs into primary and secondary groups. Complement-mediated HUS is characterized by ADAMTS13 activity >5%, negative Shiga toxin, and mutations in complement regulators or activators causing unchecked alternative complement pathway activation and membrane attack complex-mediated endothelial injury. TTP is defined by ADAMTS13 activity <10% (acquired autoantibody or congenital mutations). STEC-HUS features a diarrhoeal prodrome, more prominent renal impairment, and ADAMTS13 is not typically deficient. Congenital TTP arises from homozygous or compound heterozygous mutations in the ADAMTS13 gene, not autoantibodies. Ultra-large VWF multimers are not consistently detected in TTP plasma because they are sequestered within microvascular thrombi."
  },
  {
    num: 338,
    stem: "Regarding vitamin K-dependent (VKD) coagulation proteins and haemorrhagic disease of the newborn (HDN), which statement most accurately describes the pathophysiology, clinical categorization, and preventive strategies?",
    options: {
      A: "A single 1 mg intramuscular vitamin K dose administered immediately after birth prevents early, classic, and late forms of HDN uniformly",
      B: "Early HDN presents within 24 hours of birth, is typically associated with maternal warfarin or anticonvulsant use, and cannot be prevented by postnatal vitamin K prophylaxis",
      C: "Classic HDN presents between days 8 and 14 of life and is characterized by intracranial bleeding in the vast majority of affected infants",
      D: "In vitamin K deficiency, platelet count and fibrinogen are typically reduced, and disseminated intravascular coagulation is a consistent coexisting feature",
      E: "Prolonged broad-spectrum antibiotic use causes vitamin K deficiency by directly inhibiting hepatic gamma-carboxylase enzyme activity"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29) describes three categories of HDN based on timing: early (within 24 hours, associated with maternal medications such as warfarin or anticonvulsants, NOT preventable by postnatal vitamin K), classic (days 1–7, incidence 0.25–1.7% without prophylaxis, usually cutaneous or gastrointestinal bleeding), and late (1–12 weeks, often presenting with intracranial haemorrhage). Vitamin K deficiency causes abnormal PT and APTT due to reduced factors II, VII, IX, and X, but platelet count and fibrinogen remain normal with no evidence of DIC. Prolonged antibiotic use leads to deficiency by suppressing gut bacterial synthesis of vitamin K2 (menaquinone), not by inhibiting hepatic gamma-carboxylase."
  },
  {
    num: 339,
    stem: "Regarding trauma-induced coagulopathy and massive transfusion protocols, which statement most accurately reflects the current understanding of pathophysiology and evidence-based management?",
    options: {
      A: "Trauma-induced coagulopathy is a subset of DIC characterized by early hypocoagulability and bleeding that evolves into a hypercoagulable state associated with thrombosis and multiorgan failure",
      B: "The lethal triad of trauma comprises hypothermia, acidosis, and thrombocytosis, which together predict a favourable resuscitation outcome",
      C: "Viscoelastic testing is contraindicated in trauma resuscitation because it provides slower results than conventional coagulation assays and increases overall transfusion requirements",
      D: "Tranexamic acid is contraindicated in trauma because it promotes pathological thrombosis in damaged tissues and worsens end-organ ischemia",
      E: "In massive transfusion protocols, fresh frozen plasma should be withheld until after 12 units of red cells to avoid unnecessary plasma exposure and transfusion-related acute lung injury"
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29) describes trauma-induced coagulopathy as a subset of DIC. The pathophysiology involves tissue injury and shock-induced widespread endothelial and platelet activation, impairing thrombin generation and clot formation. The early phase is characterized by hypocoagulability and bleeding (the 'lethal triad' of hypothermia, acidosis, and coagulopathy predicts high mortality), which evolves into hypercoagulability with thrombosis and multiorgan failure. Viscoelastic testing (e.g., thromboelastography) is increasingly used alongside transfusion algorithms to guide component therapy and avoid over-transfusion. Tranexamic acid is recommended in pre-hospital settings to reduce bleeding. Modern massive transfusion protocols advocate early FFP administration—typically 4–6 units of FFP for every 6 units of red cells, often in a 1:1:1 ratio with platelets—not delayed administration."
  },
  {
    num: 340,
    stem: "Regarding vaccine-induced immune thrombotic thrombocytopenia (VITT) and its relationship to heparin-induced thrombocytopenia (HIT), which statement most accurately describes the pathophysiology, diagnostic criteria, and therapeutic approach?",
    options: {
      A: "VITT is a complication of mRNA-based COVID-19 vaccines that requires lifelong anticoagulation due to persistent autoimmunity",
      B: "VITT antibodies form immune complexes with platelet factor 4 (PF4) independently of heparin, activate platelets through FcγRIIA receptors, and patients are treated with immunoglobulin and anticoagulants without indication for long-term anticoagulation",
      C: "VITT exclusively causes isolated thrombocytopenia without thrombosis, distinguishing it from HIT",
      D: "The pathophysiology of VITT involves severe ADAMTS13 deficiency leading to accumulation of ultra-large VWF multimers and platelet-rich microthrombi",
      E: "A positive PCR for SARS-CoV-2 and markedly elevated C-reactive protein are mandatory diagnostic criteria for VITT"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 29) describes VITT as a rare, severe complication of adenovirus-based (not mRNA) COVID-19 vaccines such as ChAdOx1 and Ad26.COV2.S. VITT resembles HIT but has key differences: antibodies form immune complexes with PF4 without requiring heparin, and these complexes activate platelets via FcγRIIA receptors, also contributing to neutrophil activation and NETosis. Diagnostic criteria include: COVID-19 vaccine 4–42 days before symptom onset; venous or arterial thrombosis (often at unusual sites such as cerebral venous sinuses and splanchnic vessels); thrombocytopenia; positive PF4/heparin ELISA; and elevated D-dimer. Treatment involves IVIg to disrupt platelet activation and anticoagulants to prevent or treat thrombosis; there is no indication for long-term anticoagulation. ADAMTS13 deficiency is the mechanism of TTP, not VITT."
  }
];
