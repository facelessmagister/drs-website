export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 321,
    stem: "A 2-year-old boy presents with spontaneous swelling of his right knee and difficulty walking. He has had similar episodes in his left elbow and right ankle over the past 6 months. His mother reports that her brother had similar problems as a child. Laboratory studies show: Hb 112 g/L, platelets 280 × 10^9/L, PT 12 s, APTT 86 s. FVIII activity is <1 IU/dL. Which therapeutic strategy represents the current standard of care to prevent long-term joint damage?",
    options: {
      A: "On-demand FVIII replacement administered only at the time of acute bleeding episodes",
      B: "Regular prophylaxis with extended half-life FVIII initiated after the first spontaneous bleed to maintain trough levels of 3–5%",
      C: "Desmopressin nasal spray administered daily to stimulate endogenous FVIII release",
      D: "Prophylactic treatment with recombinant activated factor VIIa to bypass the deficient factor",
      E: "Gene therapy with adeno-associated viral vector as first-line therapy in early childhood"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28, Table 28.1) classifies this patient as having severe haemophilia A (FVIII <1 IU/dL) with spontaneous joint bleeding. Regular prophylaxis with extended half-life (EHL) FVIII is the current standard of care, initiated after the first spontaneous bleed or in the second year of life. Recent guidance recommends trough levels of 3–5% to further reduce joint damage. On-demand treatment is inferior and results in more arthropathy. Desmopressin is only effective in mild haemophilia A and cannot achieve adequate FVIII levels in severe deficiency. rFVIIa is a bypass agent used for patients with inhibitors, not standard prophylaxis. Gene therapy is licensed for adults but is not first-line in early childhood."
  },
  {
    num: 322,
    stem: "A 25-year-old man with severe haemophilia A is scheduled for an elective knee arthroplasty. He has no history of inhibitors. His preoperative FVIII level is <1 IU/dL. Which perioperative management plan is most appropriate?",
    options: {
      A: "Administer a single preoperative bolus of standard half-life FVIII to achieve 50% activity and continue no further replacement",
      B: "Achieve peak levels of 100% or higher, maintain trough >50–80% for the first 3 days, then slowly taper until wound healing is complete",
      C: "Give desmopressin 0.3 mcg/kg IV preoperatively and rely on the 2- to 6-fold rise in endogenous FVIII",
      D: "Commence emicizumab subcutaneously 1 week before surgery as the sole haemostatic agent",
      E: "Administer tranexamic acid alone, as antifibrinolytics are sufficient for major surgery in haemophilia"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28) states that major surgery in haemophilia requires peak levels of 100% or higher, with trough levels maintained at >50–80% for the first 3 days, slowly reduced to prevent rebleeding from the wound until complete wound healing or haematoma resolution. A single bolus is inadequate as factor levels will fall below the haemostatic threshold. Desmopressin is only effective in mild haemophilia and cannot achieve sufficient FVIII levels for major surgery. Emicizumab prophylaxis reduces spontaneous bleeds but thrombin generation is inadequate for managing major surgery; additional FVIII is required. Tranexamic acid is an adjunctive therapy, not sufficient as monotherapy for major surgery."
  },
  {
    num: 323,
    stem: "A 14-month-old boy is brought to the emergency department with a large haematoma in his right buttock after a minor fall. He has a history of prolonged bleeding after circumcision. His mother's brother died in childhood from intracerebral haemorrhage. Laboratory studies: PT 12 s, APTT 92 s, platelets 320 × 10^9/L. Mixing studies correct the APTT. Factor IX activity is <1 IU/dL and FVIII activity is 95 IU/dL. Genetic analysis is performed. Which molecular finding is most likely?",
    options: {
      A: "Intron 22 inversion in the F8 gene",
      B: "Missense mutation in the VWF gene causing defective FVIII binding",
      C: "Single nucleotide change or frameshift mutation in the F9 gene",
      D: "Large deletion in the F8 gene on the X chromosome",
      E: "Homozygous mutation in the LMAN1 gene causing combined FV and FVIII deficiency"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28) describes haemophilia B as caused by mutations in the F9 gene on the X chromosome, with clinical features identical to haemophilia A but distinguished by specific factor assays. The FIX activity is <1 IU/dL while FVIII is normal (95 IU/dL), confirming haemophilia B. In haemophilia B, 75% of variants are single nucleotide changes, with frameshift, nonsense, and splice site mutations also described. The intron 22 inversion is characteristic of severe haemophilia A, not B. VWF gene mutations cause type 2N VWD with low FVIII but normal FIX. LMAN1 mutations cause combined FV and FVIII deficiency with low levels of both factors, not isolated FIX deficiency."
  },
  {
    num: 324,
    stem: "A 32-year-old woman presents with heavy menstrual bleeding since menarche and recurrent epistaxis. She has required blood transfusions during dental extractions. Her father has a similar bleeding history. Laboratory studies: Hb 98 g/L, platelets 220 × 10^9/L, PT 11 s, APTT 38 s (slightly prolonged). VWF:Ag 28 IU/dL, VWF:RCo 22 IU/dL, FVIII:C 32 IU/dL. VWF multimer analysis shows a normal pattern. Which is the most appropriate initial treatment for her heavy menstrual bleeding?",
    options: {
      A: "Recombinant VWF concentrate infusion weekly for prophylaxis against menorrhagia",
      B: "Combined hormonal contraception or levonorgestrel-releasing intrauterine system as first-line therapy",
      C: "Daily desmopressin nasal spray to maintain VWF levels >50 IU/dL",
      D: "Prophylactic tranexamic acid as sole therapy without hormonal intervention",
      E: "Factor VIII/VWF concentrate before each menstrual period"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28, Table 28.3 and Table 28.4) classifies this patient as Type 1 VWD (partial quantitative deficiency, autosomal dominant, with concordant reductions in VWF:Ag, VWF:RCo, and FVIII:C, normal multimer pattern, RCo/Ag ratio >0.7). For heavy menstrual bleeding in VWD, first-line treatment is hormonal therapy in the form of combined hormonal contraception or a levonorgestrel-releasing intrauterine system. Tranexamic acid can be added to this regimen. Recombinant VWF concentrate is reserved for severe VWD or major surgery. Desmopressin is effective in Type 1 VWD for procedures but is not practical as daily long-term prophylaxis for menorrhagia due to tachyphylaxis, fluid retention, and hyponatraemia risk. Factor VIII/VWF concentrates are indicated for surgery or severe bleeding, not first-line for menorrhagia."
  },
  {
    num: 325,
    stem: "A 6-year-old boy with severe haemophilia A on emicizumab prophylaxis is brought to the emergency department with a swollen right knee after minor trauma. His mother administered a single dose of recombinant FVIII at home, but the swelling worsened over 6 hours. Laboratory studies show FVIII level <1 IU/dL despite recent infusion, and a Bethesda assay shows 38 BU. Which management strategy is most appropriate for this acute haemarthrosis?",
    options: {
      A: "Administer activated prothrombin complex concentrate (aPCC) at standard doses as first-line bypass therapy",
      B: "Give recombinant activated factor VIIa (rFVIIa) as the preferred bypassing agent",
      C: "Increase FVIII dose to 200 IU/kg to overcome the inhibitor",
      D: "Start immune tolerance induction immediately with daily high-dose FVIII",
      E: "Administer tranexamic acid as sole therapy for the joint bleed"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28) states that in patients with inhibitors on emicizumab, bleeds are managed with bypass agents, with rFVIIa used preferentially over aPCC due to drug-drug interaction. Emicizumab is 'always on,' and the magnitude of thrombin generation increases with repeated aPCC administration because FIXa levels rise, leading to thrombotic microangiopathy and thrombosis. No such interaction has been reported with rFVIIa, which promotes coagulation through tissue factor-dependent and independent pathways. Increasing FVIII dose is ineffective against a high-titre inhibitor (38 BU). Immune tolerance induction is a long-term strategy, not for acute bleeding. Tranexamic acid is adjunctive, not sufficient as monotherapy for an acute haemarthrosis in an inhibitor patient."
  },
  {
    num: 326,
    stem: "Regarding the molecular structure and function of factor VIII, which statement most accurately describes its biology and interaction with von Willebrand factor?",
    options: {
      A: "FVIII is synthesized primarily in hepatocytes as a single-chain polypeptide and circulates as a homodimer",
      B: "FVIII is organized into A1-A2-B-A3-C1-C2 domains, circulates as a heterodimer of heavy and light chains, and 95–97% is bound to VWF which protects it from proteolytic degradation",
      C: "The B domain of FVIII is essential for its procoagulant activity, and B domain-deleted FVIII has no therapeutic efficacy",
      D: "FVIII activates factor X directly to FXa in the absence of FIXa, phospholipid, and calcium",
      E: "VWF binding to FVIII occurs through the A1 domain, and this interaction shortens FVIII half-life from 12 hours to 1–2 hours"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28) states that FVIII is a 330 kDa glycoprotein synthesized in endothelial cells, organized into six domains (A1-A2-B-A3-C1-C2). It circulates as a heterodimer composed of a heavy chain (A1-A2-B) and a light chain (A3-C1-C2) linked non-covalently via divalent metal cations. Ninety-five to ninety-seven percent circulates in complex with VWF, which protects against proteolytic degradation and clearance; without VWF, the half-life is only 1–2 hours. The B domain is not essential for procoagulant activity, and B domain-deleted FVIII is used in gene therapy and has therapeutic efficacy. FVIII is a cofactor, not an enzyme; it does not activate FX directly but rather forms the intrinsic Xase complex with FIXa, phospholipid, and calcium. VWF binds FVIII through the D′D3 domain, not the A1 domain."
  },
  {
    num: 327,
    stem: "Regarding the ISTH classification of haemophilia severity and its clinical correlates, which statement is most accurate?",
    options: {
      A: "Severe haemophilia is defined by factor activity <5% and presents with bleeding only after significant trauma or surgery",
      B: "Moderate haemophilia (1–5% factor activity) is characterized by frequent spontaneous joint and muscle bleeds from early life",
      C: "Patients with mild haemophilia (>5% activity) typically present in the first year of life with spontaneous intracranial haemorrhage",
      D: "Severe haemophilia (<1% activity) presents with frequent spontaneous bleeding into joints, muscles, and internal organs from early life, with joint deformity if inadequately treated",
      E: "The annualized bleed rate in untreated severe haemophilia is typically 0–2 episodes per year, similar to moderate haemophilia"
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28, Table 28.1) presents the ISTH classification. Severe haemophilia is defined by coagulation factor activity <1% and is characterized by frequent spontaneous bleeding into joints, muscles, and internal organs from early life, with crippling joint deformity if not adequately prevented or treated. Moderate haemophilia (1–5%) shows occasional spontaneous episodes and bleeding after trauma or surgery, not frequent spontaneous bleeds. Mild haemophilia (>5%) presents with bleeding only after significant trauma or surgery, and diagnosis may be delayed to the second or third decade. Untreated severe haemophilia may have 20–40 bleeding episodes per year; 0–2 spontaneous bleeds per year is typical of well-managed prophylaxis."
  },
  {
    num: 328,
    stem: "Regarding the laboratory diagnosis and genetic analysis of haemophilia A, which statement most accurately integrates the coagulation and molecular findings?",
    options: {
      A: "Haemophilia A is characterized by a prolonged PT, normal APTT, and reduced platelet function",
      B: "The intron 22 inversion (Inv22) accounts for approximately 50% of severe haemophilia A cases and involves recombination between homologous sequences in intron 22 and upstream of the F8 gene",
      C: "Genetic diagnosis of haemophilia A is performed exclusively by next-generation sequencing, as Inv22 cannot be detected by standard PCR",
      D: "The F8 gene is located on the short arm of the X chromosome, and carrier detection relies solely on factor VIII activity measurements",
      E: "All patients with severe haemophilia A have a demonstrable genetic variant; no cases remain without an identifiable mutation"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28) states that the characteristic intron 22 inversion (Inv22) accounts for around half of severe haemophilia A cases, involving recombination between homologous sequences located in intron 22 and upstream of the F8 gene, resulting in a characteristic 'flip-tip' inversion and disruption of the F8 gene. Haemophilia A shows prolonged APTT, normal PT, and normal platelet function. Genetic diagnosis incorporates tailored PCR assays for Inv22 alongside direct sequencing and next-generation sequencing. The F8 gene is located on the long arm (not short arm) of the X chromosome. No genetic variant is identifiable in about 5% of familial haemophilia cases, and carrier detection is most reliably performed by mutation analysis once the causative variant is identified in the index case."
  },
  {
    num: 329,
    stem: "Regarding the mechanism of action of non-replacement therapies in haemophilia, which statement most accurately describes emicizumab and its therapeutic implications?",
    options: {
      A: "Emicizumab is a bispecific monoclonal antibody that binds FVIIIa and FIXa to restore the intrinsic Xase complex",
      B: "Emicizumab acts as an FVIIIa mimetic by binding FIXa and FX, spatially positioning them to enable FX activation to FXa, and has a half-life of approximately 4 weeks allowing subcutaneous dosing every 1–4 weeks",
      C: "Emicizumab restores thrombin generation into the normal range and is therefore adequate as monotherapy for major surgery and life-threatening haemorrhage",
      D: "Emicizumab functions by inhibiting tissue factor pathway inhibitor (TFPI), thereby increasing thrombin generation through reduced inhibition of the tissue factor pathway",
      E: "The binding affinity of FIXa to emicizumab is higher than that of FIXa to FVIIIa, which is why emicizumab is more effective than FVIII replacement for acute bleed management"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28, Fig. 28.7) describes emicizumab as a bispecific monoclonal antibody that acts as an FVIIIa mimetic, binding FIXa and FX to spatially position them for activation of FX to FXa. It has a half-life of 4 weeks and can be dosed subcutaneously every 1–4 weeks. However, thrombin generation with emicizumab is inadequate for managing major or minor bleeds that have not improved over a day; additional treatment with FVIII or bypass agents is required. Inhibiting TFPI is the mechanism of concizumab and marstacimab (rebalancing therapies), not emicizumab. The binding affinity of FIXa to FVIIIa is much higher than that to emicizumab, which is why FVIII is preferred for bleed management in patients without inhibitors."
  },
  {
    num: 330,
    stem: "Regarding von Willebrand disease subtypes and their laboratory characteristics, which statement most accurately describes the pathophysiology and diagnostic findings?",
    options: {
      A: "Type 2B VWD is caused by a loss-of-function mutation in the A1 domain resulting in decreased binding to platelet GPIbα receptors",
      B: "Type 2N VWD is characterized by a markedly decreased binding affinity for FVIII, leading to low FVIII levels with relatively preserved VWF antigen and multimer structure, and must be differentiated from mild haemophilia A",
      C: "Type 3 VWD shows autosomal dominant inheritance with partial quantitative deficiency and concordant reductions in VWF:Ag and activity",
      D: "Type 2A VWD preserves high-molecular-weight multimers but shows decreased VWF-dependent platelet function due to defective collagen binding",
      E: "Type 2M VWD is defined by increased affinity of VWF for platelet GPIbα, resulting in thrombocytopenia and loss of HMWM due to rapid clearance of platelet-VWF complexes"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 28, Table 28.3 and Table 28.4) describes Type 2N VWD as caused by a mutation resulting in reduced binding to FVIII, with increased clearance of FVIII and low levels. VWF antigen and multimer structure are relatively preserved (RCo/Ag ratio >0.7), and the key differential diagnosis is mild haemophilia A. Type 2B is caused by a gain-of-function (not loss-of-function) mutation in the A1 domain with increased binding to GPIbα, resulting in thrombocytopenia and loss of HMWM. Type 3 VWD is autosomal recessive with complete or near-complete deficiency, not autosomal dominant. Type 2A shows selective loss of HMWM due to defective multimerization, intracellular retention, or increased proteolysis by ADAMTS13. Type 2M shows decreased platelet function without selective loss of HMWM; the mechanism does not involve increased affinity for GPIbα."
  }
];
