export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 111,
    stem: "A 24-year-old woman from Cyprus attends preconception counselling. She is found to have β-thalassaemia trait with Hb 112 g/L, MCV 68 fL, MCH 21 pg, and HPLC showing Hb A2 5.8%. Her partner, also of Mediterranean origin, has identical laboratory findings. They are planning pregnancy. What is the risk that any child of this couple will have transfusion-dependent thalassaemia major, and what additional diagnostic concern must be considered?",
    options: {
      A: "25% risk; concomitant iron deficiency in either parent may lower the Hb A2 level and mask the diagnosis of β-thalassaemia trait",
      B: "50% risk; the child will necessarily inherit the severe β⁰ genotype from both parents",
      C: "25% risk; all affected children will necessarily require allogeneic stem cell transplantation for cure",
      D: "50% risk; prenatal diagnosis is not available in Mediterranean populations",
      E: "100% risk; both parents carry the trait so all offspring will be affected"
    },
    answer: "A",
    explanation: "Hoffbrand states that β-thalassaemia major occurs on average in one in four offspring if both parents are carriers of the β-thalassaemia trait. A raised Hb A2 level greater than 3.5% confirms the diagnosis of β-thalassaemia trait. However, Hoffbrand explicitly warns that iron deficiency lowers the Hb A2 level, so a falsely normal result may be found in the presence of concomitant iron deficiency or rarely even without iron deficiency. This is a critical counselling point because a missed diagnosis in one partner would lead to an incorrect risk assessment. Option B is incorrect because the risk is 25%, not 50%, and the parents may carry β⁺ rather than β⁰ alleles. Option C is incorrect because not all children with thalassaemia major require stem cell transplantation; many are managed with transfusion and chelation. Option D is incorrect because antenatal diagnosis is not only available but legally mandated in some high-incidence regions such as Cyprus. Option E is incorrect because each child has a 25% chance of being unaffected, a 50% chance of being a carrier, and a 25% chance of having thalassaemia major."
  },
  {
    num: 112,
    stem: "A 9-month-old infant of Italian descent is brought to clinic with pallor, irritability, and abdominal distension. He was well until 4 months of age but has since failed to thrive. Examination reveals hepatosplenomegaly and frontal bossing. Laboratory studies: Hb 58 g/L, MCV 64 fL, MCH 19 pg. HPLC shows a trace of Hb A, Hb F 92%, and Hb A2 2%. Which of the following is the most appropriate immediate management?",
    options: {
      A: "Commence oral iron supplementation at 6 mg/kg/day of elemental iron",
      B: "Start a regular blood transfusion programme to maintain haemoglobin above 95–100 g/L",
      C: "Initiate hydroxyurea to increase endogenous Hb F synthesis",
      D: "Arrange urgent allogeneic stem cell transplantation before commencing transfusions",
      E: "Begin deferasirox orally to treat existing iron overload"
    },
    answer: "B",
    explanation: "Hoffbrand describes β-thalassaemia major as presenting at 3–6 months after birth when the physiological switch from γ- to β-chain production takes place. The laboratory findings of severe hypochromic microcytic anaemia with absent or trace Hb A and nearly all circulating haemoglobin as Hb F are characteristic. The textbook states that regular blood transfusions are needed to maintain the haemoglobin over 95–100 g/L, usually requiring 2–3 units every 3–4 weeks, and that this prevents complications including skeletal deformation. Option A is incorrect because iron supplementation would exacerbate iron overload, which is already a concern even before transfusions begin due to increased intestinal iron absorption. Option C is incorrect because hydroxyurea is used to increase Hb F in sickle cell disease, not as first-line therapy in thalassaemia major. Option D is incorrect because allogeneic stem cell transplantation, while potentially curative, is not the immediate first step; it requires a suitable donor and is usually considered after the child has been stabilized on a transfusion and chelation programme. Option E is incorrect because while iron chelation will eventually be necessary, the immediate priority is correcting the severe life-threatening anaemia with red cell transfusions."
  },
  {
    num: 113,
    stem: "A 19-year-old man of West African origin with known homozygous sickle cell anaemia (Hb SS) is admitted with sudden-onset dyspnoea, chest pain, fever, and tachypnoea. Arterial blood gas on room air shows PaO₂ 58 mmHg. Chest X-ray reveals bilateral pulmonary infiltrates. His haemoglobin has fallen from his baseline of 78 g/L to 52 g/L. Which of the following represents the most appropriate immediate therapeutic approach?",
    options: {
      A: "Commence high-dose corticosteroids and broad-spectrum antibiotics as the sole therapy",
      B: "Administer analgesia, supplemental oxygen, and exchange transfusion with ventilatory support if necessary",
      C: "Start hydroxyurea 15 mg/kg/day immediately to increase Hb F levels",
      D: "Perform urgent splenectomy for suspected acute splenic sequestration",
      E: "Give a simple packed red cell transfusion aiming for a post-transfusion haemoglobin of 120 g/L"
    },
    answer: "B",
    explanation: "Hoffbrand identifies the acute sickle chest syndrome as the most common cause of death in both children and adults with sickle cell disease. It presents with dyspnoea, falling arterial PaO₂, chest pain, and pulmonary infiltrates on chest X-ray. The textbook states that treatment is with analgesia, oxygen, exchange transfusion, and ventilatory support if necessary. Exchange transfusion is particularly important to reduce the percentage of Hb S to less than 30% without causing hyperviscosity. Option A is incorrect because while antibiotics are given if infection is suspected, corticosteroids are not the primary treatment for acute chest syndrome. Option C is incorrect because hydroxyurea increases Hb F levels over weeks to months and has no role in the acute management of a life-threatening crisis. Option D is incorrect because acute splenic sequestration presents with an enlarging spleen, falling haemoglobin, and abdominal pain, not with chest infiltrates and hypoxaemia. Option E is incorrect because transfusing to a haemoglobin of 120 g/L in a patient with Hb SS would cause dangerous hyperviscosity; exchange transfusion is preferred to lower Hb S while maintaining a safe overall haemoglobin concentration."
  },
  {
    num: 114,
    stem: "A 28-year-old woman of Thai descent is found to have α⁰-thalassaemia trait (deletion of both α-globin genes on one chromosome 16) during preconception screening. Her partner has HbH disease (deletion of three of the four α-globin genes). They ask about the risk to their fetus. Which of the following most accurately describes the expected genotype distribution among their offspring?",
    options: {
      A: "25% hydrops fetalis, 25% HbH disease, 25% α⁰-thalassaemia trait, 25% α⁺-thalassaemia trait",
      B: "50% hydrops fetalis, 50% HbH disease",
      C: "50% HbH disease, 50% α⁰-thalassaemia trait",
      D: "25% β-thalassaemia major, 75% β-thalassaemia trait",
      E: "No risk of hydrops fetalis because the mother carries only two gene deletions"
    },
    answer: "A",
    explanation: "Hoffbrand explains that the clinical severity of α-thalassaemia is directly related to the number of the four α-globin genes that are missing or inactive. The mother has the genotype --/αα (α⁰-thalassaemia trait, two deletions), while the father has the genotype --/-α (HbH disease, three deletions). Each parent contributes one chromosome 16 to the offspring. The mother can pass either the deleted chromosome (--) or the normal chromosome (αα), each with 50% probability. The father can pass either his deleted chromosome (--) or his partially deleted chromosome (-α), each with 50% probability. The four possible combinations are therefore: --/-- (four deletions = hydrops fetalis), --/-α (three deletions = HbH disease), αα/-- (two deletions = α⁰-thalassaemia trait), and αα/-α (one deletion = α⁺-thalassaemia trait). Each combination has a 25% probability. Hydrops fetalis is incompatible with life beyond the fetal stage because the α chain is essential for both fetal and adult haemoglobin. Option B is incorrect because it omits the trait possibilities. Option C is incorrect because it excludes hydrops fetalis and α⁺ trait. Option D confuses α- and β-thalassaemia genetics. Option E is incorrect because the fetus can inherit the doubly deleted chromosome from both parents."
  },
  {
    num: 115,
    stem: "A 3-year-old girl of West African descent with known sickle cell anaemia attends for annual review. She has had three painful vaso-occlusive crises in the past year requiring hospital admission. Her steady-state haemoglobin is 68 g/L and Hb F is 4%. Transcranial Doppler (TCD) ultrasound shows a time-averaged mean maximum blood flow velocity of 215 cm/s in the right middle cerebral artery. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Commence regular blood transfusions with a target Hb S percentage of less than 30%",
      B: "Start hydroxyurea 15 mg/kg/day and repeat TCD in 6 months",
      C: "Start crizanlizumab to reduce the frequency of vaso-occlusive crises",
      D: "Arrange allogeneic stem cell transplantation immediately as the only curative option",
      E: "Begin daily oral penicillin V prophylaxis and observe"
    },
    answer: "A",
    explanation: "Hoffbrand states that transcranial Doppler ultrasonography detects increased blood flow velocity (greater than 200 cm/s) indicative of arterial stenosis, mainly in the circle of Willis and internal carotids. TCD should be carried out annually from early childhood, and if abnormal, stroke can be prevented by regular blood transfusions. The textbook explicitly notes that transfusions are the preferred option for both primary and secondary prevention of stroke in sickle cell disease, with the aim of suppressing Hb S production and maintaining Hb S below 30%. Option B is incorrect because although hydroxyurea therapy is also beneficial, Hoffbrand states that transfusions are the preferred option for stroke prevention. Option C is incorrect because crizanlizumab reduces vaso-occlusive crises but is not indicated for primary stroke prevention. Option D is incorrect because allogeneic stem cell transplantation is reserved for the severest cases with substantially impaired quality of life or life expectancy, and is not the immediate next step for an asymptomatic child with an abnormal TCD. Option E is incorrect because daily oral penicillin should already have been started at diagnosis and observation alone would miss the window for primary stroke prevention."
  },
  {
    num: 116,
    stem: "Regarding the molecular pathophysiology of sickle cell anaemia, which of the following statements most accurately describes the genetic defect and its physicochemical consequences?",
    options: {
      A: "A single base change (adenine to thymine) at codon 6 of the β-globin gene substitutes lysine for glutamic acid, producing Hb C",
      B: "A single base change (adenine to thymine) at codon 6 of the β-globin gene substitutes valine for glutamic acid, causing deoxygenated Hb S to polymerize into long fibres",
      C: "A deletion of codons 41–42 in the β-globin gene causes a frameshift mutation resulting in β⁰-thalassaemia",
      D: "A point mutation in the γ-globin promoter causes persistence of foetal haemoglobin and amelioration of sickle cell disease",
      E: "A substitution of glycine for alanine at position 136 of the γ-globin chain produces the Gγ and Aγ variants"
    },
    answer: "B",
    explanation: "Hoffbrand describes the sickle β-globin abnormality as caused by substitution of valine for glutamic acid in position 6 of the β-globin chain, resulting from a single base change in the DNA coding for the amino acid in the sixth position, where adenine is replaced by thymine. The textbook further explains that deoxygenated Hb S is insoluble and polymerizes into long fibres, each consisting of seven intertwined double strands with cross-linking. The red cells containing this denatured fibrous haemoglobin experience membrane damage and form sickle shapes. Option A is incorrect because it describes the Hb C mutation, which substitutes lysine for glutamic acid at the same position. Option C describes a common β-thalassaemia frameshift mutation but is irrelevant to sickle cell disease. Option D describes hereditary persistence of foetal haemoglobin, which can ameliorate sickle cell disease but is not the sickle mutation itself. Option E is incorrect because Gγ and Aγ differ by glycine versus alanine at position 136 of the γ chain, not the sickle cell mutation."
  },
  {
    num: 117,
    stem: "Regarding the switch from foetal to adult haemoglobin, which of the following statements most accurately explains the regulatory mechanisms and their therapeutic relevance?",
    options: {
      A: "BCL11A is activated by KLF1 and acts as a major transcriptional repressor of γ-globin gene expression; its suppression or gene editing can enhance Hb F production",
      B: "The locus control region (LCR) of the α-globin cluster on chromosome 16p is the primary determinant of the γ-to-β switch",
      C: "Hypermethylation of cytosine bases in γ-globin promoter regions is associated with active γ-globin transcription",
      D: "The β-globin gene outcompetes the γ-globin gene for the HS-40 enhancer of the α-globin cluster",
      E: "Failure of silencing of the β gene due to promoter mutations causes persistence of foetal haemoglobin"
    },
    answer: "A",
    explanation: "Hoffbrand states that BCL11A is a major transcriptional regulator of the switch from foetal to adult haemoglobin. It is activated by the transcription factor KLF1, which plays a key role in binding to the LCR, indirectly switching off γ-globin synthesis and activating β-globin synthesis. The textbook further describes gene therapy techniques aimed at enhancing foetal haemoglobin synthesis by editing the BCL11A gene or the γ-globin chain enhancers or promoters, some of which are now approved for clinical use. Option B is incorrect because the LCR regulates the β-globin cluster on chromosome 11q, not the α-cluster; HS-40 is the regulatory region for the α-cluster. Option C is incorrect because expressed genes are associated with hypomethylated, not hypermethylated, cytosine bases in promoter regions. Option D is incorrect because the competition between γ- and β-globin genes is for the β-cluster LCR, not for HS-40 of the α-cluster. Option E is incorrect because failure of silencing of the γ gene, not the β gene, causes persistence of foetal haemoglobin."
  },
  {
    num: 118,
    stem: "In β-thalassaemia major, which of the following best explains the mechanism by which excess unpaired α-globin chains cause the characteristic ineffective erythropoiesis and chronic haemolysis?",
    options: {
      A: "Excess α chains form soluble tetramers (α₄) that are filtered by the kidneys, causing renal tubular damage and erythropoietin deficiency",
      B: "Excess α chains precipitate in erythroblasts and mature red cells, generating reactive cytotoxic oxidant species that cause severe ineffective erythropoiesis and membrane damage",
      C: "Excess α chains bind to and inhibit the α-haemoglobin stabilizing protein (AHSP), resulting in accelerated apoptosis of erythroid progenitors via the Fas pathway",
      D: "Excess α chains competitively inhibit β-globin mRNA translation, preventing any residual β-chain synthesis in β⁺ thalassaemia",
      E: "Excess α chains are exported from red cells and deposit in the reticuloendothelial system, causing splenic fibrosis and hypersplenism"
    },
    answer: "B",
    explanation: "Hoffbrand explicitly states that in β-thalassaemia major, excess unpaired α chains precipitate in erythroblasts and in mature red cells and generate reactive cytotoxic oxidant species, causing severe ineffective erythropoiesis and chronic haemolysis that are typical of this disease. The textbook notes that the greater the α chain excess, the more severe the anaemia, and that production of γ chains helps to 'mop up' some excess α chains and ameliorate the condition. AHSP, described in Hoffbrand as a protein in red cells cleared by autophagy, actually helps to clear excess α-globin chains rather than being inhibited by them, making option C incorrect. Option A is incorrect because α₄ tetramers are not a described pathophysiological mechanism and do not cause renal tubular damage. Option D is incorrect because excess α chains do not inhibit β-globin mRNA translation at a competitive level. Option E is incorrect because excess α chains are not exported from red cells to deposit in the reticuloendothelial system; their toxicity is intracellular."
  },
  {
    num: 119,
    stem: "Regarding antenatal diagnosis of sickle cell anaemia by polymerase chain reaction (PCR) analysis, which of the following statements most accurately describes the principle of Dde I restriction enzyme digestion?",
    options: {
      A: "The sickle mutation creates a new Dde I restriction site, producing smaller fragments than the normal allele",
      B: "The sickle mutation replaces adenine with thymine at the sixth codon of the β-globin gene, removing a normal Dde I site and yielding a larger 376 bp fragment instead of the normal 175 and 201 bp fragments",
      C: "Dde I digestion is used to detect point mutations in the α-globin gene cluster for the diagnosis of α-thalassaemia",
      D: "The normal β-globin allele lacks a Dde I restriction site, while the sickle allele possesses one, allowing differentiation by Southern blot",
      E: "PCR amplification of the sickle allele produces a 473 bp product that is completely resistant to all restriction enzyme digestion"
    },
    answer: "B",
    explanation: "Hoffbrand describes antenatal diagnosis of sickle cell anaemia using Dde I-PCR analysis in Figure 7.22 and accompanying text. The DNA is amplified by two primers that span the sickle cell gene mutation site and produce a product of 473 base pairs. The product is digested with the restriction enzyme Dde I, and the resulting fragments are analysed by agarose gel electrophoresis. The replacement of an adenine base in the normal β-globin gene by thymine results in Hb S and removes a normal restriction site for Dde I, producing a larger 376 bp fragment than the normal 175 and 201 bp fragments in the digested amplified product. Option A is incorrect because the mutation removes, not creates, a Dde I site. Option C is incorrect because Dde I analysis is specific to the sickle mutation in the β-globin gene, not the α-cluster. Option D is incorrect because it reverses the biology: the normal allele has the Dde I site, while the sickle allele lacks it. Option E is incorrect because the 473 bp product is specifically digested by Dde I in the normal allele, not completely resistant."
  },
  {
    num: 120,
    stem: "Regarding the genetic architecture of the globin gene clusters and their regulatory elements, which of the following statements is most accurate?",
    options: {
      A: "The β-globin cluster on chromosome 11q contains ζ and α genes, regulated by the HS-40 enhancer approximately 40 kb upstream",
      B: "The α-globin cluster on chromosome 16p contains ε, γ, δ and β genes, regulated by a locus control region (LCR) upstream of the cluster",
      C: "The β-globin cluster contains ε, Gγ, Aγ, δ and β genes arranged in the order of developmental expression, regulated by the LCR; the α-cluster contains ζ and α genes regulated by HS-40",
      D: "The γ-globin gene has two variants, Gγ and Aγ, which differ by having either glycine or valine at position 136",
      E: "There are two active α-globin genes on each chromosome 11 and two active β-globin genes on each chromosome 16"
    },
    answer: "C",
    explanation: "Hoffbrand describes the globin gene clusters in detail: the β-globin cluster (ε, γ, δ, β) is located on chromosome 11q, and the α-globin cluster (ζ, α) is located on chromosome 16p. The genes within each cluster are arranged in the order in which they are expressed during development. The β-cluster is regulated by the locus control region (LCR) situated upstream, while the α-cluster is regulated by HS-40 approximately 40 kilobases 5′ to the α-gene cluster. The γ gene has two sequences coding for either glycine or alanine at position 136 (Gγ or Aγ, respectively). There are four active α-globin genes in total (α1 and α2 on each chromosome 16) and two active β-globin genes in total (one on each chromosome 11). Option A is incorrect because it swaps the chromosomes and gene contents of the two clusters. Option B also swaps the cluster contents. Option D is incorrect because Gγ and Aγ differ by glycine versus alanine, not valine. Option E is incorrect because it reverses the chromosomal locations of the α and β genes."
  }
];
