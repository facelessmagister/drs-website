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
  },
  {
    num: 401,
    stem: "A 3-year-old girl born to parents in rural Thailand is referred with severe pallor, massive hepatosplenomegaly, and failure to thrive. Laboratory studies reveal Hb 54 g/L, MCV 58 fL, MCH 18 pg. Haemoglobin analysis shows Hb F 72%, Hb E 24%, and no detectable Hb A. The mother is known to have Hb E trait and the father has β-thalassaemia trait. Which of the following is the most appropriate immediate management plan?",
    options: {
      A: "Commence regular blood transfusions to maintain Hb >95–100 g/L, with iron chelation and monitoring for endocrine complications",
      B: "Start oral iron supplementation and high-dose folic acid as the primary therapy",
      C: "Initiate hydroxyurea to stimulate γ-chain production and reduce transfusion requirement",
      D: "Perform urgent allogeneic stem cell transplantation from a matched sibling donor before commencing transfusions",
      E: "Prescribe a gluten-free diet and monitor for spontaneous improvement during adolescence"
    },
    answer: "A",
    explanation: "Hoffbrand states that haemoglobin E/β⁰-thalassaemia compound heterozygosity resembles homozygous β⁰-thalassaemia both clinically and haematologically. The child presents with severe microcytic hypochromic anaemia, massive hepatosplenomegaly, and failure to thrive—identical to β-thalassaemia major. The absence of Hb A with very high Hb F and the presence of Hb E confirms the diagnosis. Hoffbrand explicitly notes that Hb E/β⁰-thalassaemia is transfusion-dependent and requires the same management as thalassaemia major: regular transfusions to maintain haemoglobin over 95–100 g/L, iron chelation, and monitoring for endocrine and cardiac complications. Option B is incorrect because iron supplementation is contraindicated in thalassaemia as it worsens iron overload, which already occurs from increased intestinal absorption. Option C is incorrect because hydroxyurea is not first-line for Hb E/β⁰-thalassaemia; while it can increase Hb F in some contexts, the immediate priority is correcting severe anaemia with transfusion. Option D is incorrect because stem cell transplantation requires a suitable donor and the child must first be stabilized on a transfusion programme; Hoffbrand notes transplantation is considered in well-chelated younger patients without liver fibrosis. Option E is incorrect because there is no dietary trigger for this condition and spontaneous improvement does not occur."
  },
  {
    num: 402,
    stem: "A 19-year-old man with known homozygous sickle cell anaemia presents to the emergency department with a painful, sustained erection that has persisted for 5 hours. He has had two similar episodes in the past 6 months, each resolving spontaneously after 2–3 hours. On examination, the corpora cavernosa are rigid and tender. His current haemoglobin is 74 g/L. Which of the following represents the most appropriate immediate management?",
    options: {
      A: "Prescribe oral pseudoephedrine and discharge with instructions to drink extra fluids and attempt urination",
      B: "Administer intravenous hydration, opioid analgesia, and aspiration with irrigation of the corpora using dilute phenylephrine",
      C: "Commence daily sildenafil as an oral anti-adrenergic agent to prevent future episodes",
      D: "Perform immediate exchange transfusion to reduce Hb S percentage below 30%",
      E: "Give intramuscular terbutaline and observe for 4 hours before further intervention"
    },
    answer: "B",
    explanation: "Hoffbrand describes priapism as an unwanted painful and sustained erection of the penis for more than 3 hours, which is a common complication of sickle cell disease. The textbook states that at the onset of priapism, patients should drink extra fluids and try to urinate, and an oral dose of anti-adrenergic agonists such as pseudoephedrine or terbutaline may help. However, for persistent priapism, the recommended treatment is intravenous hydration and opioid analgesia, followed by aspiration and irrigation of the corpora with dilute phenylephrine or etilefrine solution, or intracavernosal injection of these drugs. Option A is incorrect because oral pseudoephedrine and fluid advice are only appropriate at the very onset of priapism, not after 5 hours of persistence. Option C is incorrect because daily sildenafil is reserved for patients with recurrent episodes after the acute episode has resolved, not for acute management. Option D is incorrect because while exchange transfusion is used for acute chest syndrome, stroke, and severe sequestration crises, it is not the first-line immediate therapy for priapism. Option E is incorrect because intramuscular terbutaline is not described as standard, and observation alone risks corporal fibrosis and permanent impotence; Hoffbrand warns that repeated priapism can lead to fibrosis and impotence, making prompt intervention essential."
  },
  {
    num: 403,
    stem: "A 34-year-old woman with known non-transfusion-dependent thalassaemia intermedia presents with progressive exertional dyspnoea over 6 months. She has never required regular transfusions. Examination reveals palpable splenomegaly 8 cm below the costal margin and mild jaundice. Echocardiography shows a tricuspid regurgitant velocity of 3.4 m/s. Laboratory studies: Hb 82 g/L, serum ferritin 720 μg/L. MRI of the spine demonstrates paravertebral masses of soft tissue contiguous with the ribs. Which of the following is the most appropriate next step in her management?",
    options: {
      A: "Arrange urgent surgical resection of the paravertebral masses followed by radiotherapy",
      B: "Commence regular blood transfusions to suppress extramedullary haemopoiesis and reduce pulmonary hypertension risk",
      C: "Start oral iron chelation with deferasirox because her serum ferritin exceeds 500 μg/L",
      D: "Perform splenectomy immediately to reduce plasma volume expansion and correct the anaemia",
      E: "Initiate high-dose corticosteroids to reduce inflammatory compression of the spinal cord"
    },
    answer: "B",
    explanation: "Hoffbrand describes thalassaemia intermedia as presenting with extramedullary haemopoiesis, which may form 'pseudotumours' especially in the para-spinal region, as well as pulmonary hypertension, leg ulcers, gallstones, and osteoporosis. The textbook states that the lower the haemoglobin level below 100 g/L, the greater the incidence of these clinical problems, and that they are all more frequent with increasing age. Regular transfusions may occasionally be required to reduce bone deformity and suppress extramedullary haemopoiesis. In this patient, the elevated tricuspid regurgitant velocity indicates pulmonary hypertension, and the paravertebral masses are consistent with extramedullary haemopoiesis—both complications driven by severe ineffective erythropoiesis. Option A is incorrect because these masses are not neoplastic; they are extramedullary haemopoietic tissue that regresses with suppression of marrow drive, and radiotherapy would damage the haemopoietic tissue without addressing the underlying pathophysiology. Option C is incorrect because Hoffbrand specifies that iron chelation in NTDT is usually considered when serum ferritin is greater than 800 μg/L or liver iron exceeds 5 mg/g dry weight; her ferritin of 720 μg/L does not yet meet this threshold, and the immediate priority is addressing the pulmonary hypertension and extramedullary haemopoiesis. Option D is incorrect because while splenectomy may reduce transfusion requirements in some patients, it is not the immediate best step here; the pulmonary hypertension and extramedullary masses are best addressed by transfusions, and splenectomy carries increased thrombotic and infection risks. Option E is incorrect because corticosteroids have no role in thalassaemia intermedia pathophysiology; the masses are not inflammatory but represent compensatory haemopoiesis."
  },
  {
    num: 404,
    stem: "A 26-year-old woman of West African descent with known Hb S/C disease attends the antenatal clinic at 14 weeks' gestation. Her baseline haemoglobin is 92 g/L. She has a history of recurrent painful crises and underwent laser photocoagulation for proliferative retinopathy 2 years ago. She asks about the most significant risks during this pregnancy and the recommended preventive strategy. Which of the following is the most accurate counselling?",
    options: {
      A: "The primary risk is fetal haemoglobin drop causing hydrops fetalis; weekly intrauterine transfusions to the fetus are indicated",
      B: "She has a particular tendency to thrombosis and pulmonary embolism in pregnancy; low-dose aspirin from 12 weeks and consideration of prophylactic low-molecular-weight heparin are recommended",
      C: "Because she has Hb S/C disease rather than Hb SS, she does not require any antenatal modifications and can follow routine obstetric care",
      D: "The major risk is acute splenic sequestration in the third trimester; splenectomy should be performed before 28 weeks",
      E: "Exchange transfusion to maintain Hb S below 30% is mandatory for all Hb S/C patients throughout pregnancy"
    },
    answer: "B",
    explanation: "Hoffbrand states that patients with Hb S/C disease have a particular tendency to thrombosis and pulmonary embolism, especially in pregnancy. Compared with Hb SS disease, they have a higher incidence of retinal abnormalities including proliferative retinopathy, milder anaemia, splenomegaly, and generally a longer life expectancy. The textbook recommends that low-dose aspirin be given from 12 weeks (and stopped before delivery) to reduce the risk of pre-eclampsia, and that low-molecular-weight heparin be given from 28 weeks to 6 weeks post-partum if there is a previous history of venous thrombosis. Given her history of proliferative retinopathy and the known thrombotic tendency of Hb S/C, this counselling is most accurate. Option A is incorrect because hydrops fetalis is a complication of α-thalassaemia (four-gene deletion), not sickle cell disease, and there is no indication for routine fetal intrauterine transfusions. Option C is incorrect because Hb S/C disease is a serious sickling disorder requiring modified antenatal care, including monitoring for thrombosis, retinopathy, and crises. Option D is incorrect because while splenic sequestration can occur, there is no recommendation for prophylactic splenectomy during pregnancy. Option E is incorrect because transfusions throughout pregnancy are specifically recommended for those with a poor obstetric history, frequent crises, previous stroke or chest syndrome, or worsening anaemia—not universally for all Hb S/C patients."
  },
  {
    num: 405,
    stem: "A 31-year-old man with homozygous sickle cell anaemia is admitted with a 3-week history of worsening pain and non-healing ulceration over the medial aspect of his right ankle. The ulcer is 3 cm in diameter with necrotic edges and is colonized with Pseudomonas aeruginosa on culture. He has had five painful vaso-occlusive crises in the past year. His haemoglobin is 68 g/L, and Doppler echocardiography shows a tricuspid regurgitant velocity of 3.1 m/s. Which of the following represents the most appropriate comprehensive management plan?",
    options: {
      A: "Prescribe topical antiseptic cream alone and arrange outpatient review in 4 weeks",
      B: "Administer intravenous antibiotics directed at Pseudomonas, bed rest with leg elevation, debridement, and consider voxelotor and red cell transfusion",
      C: "Perform below-knee amputation because the necrosis indicates irreversible tissue loss",
      D: "Start crizanlizumab as the primary therapy to treat the infected ulcer",
      E: "Commence long-term anticoagulation with warfarin to treat the presumed arterial thrombosis"
    },
    answer: "B",
    explanation: "Hoffbrand describes leg ulcers as common in sickle cell disease, resulting from vascular stasis and local ischaemia. The textbook states that ulcers are always colonized with pathogenic bacteria including Pseudomonas aeruginosa, Staphylococcus aureus, and Streptococcus species, and that acute infection can occur. Management involves bed rest and elevation of the leg, debridement, elastic dressings, zinc sulphate, and in some cases red cell transfusions and skin grafting. Voxelotor has been found to help in some cases. The elevated tricuspid regurgitant velocity indicates pulmonary hypertension, a known complication of chronic haemolysis and vascular damage in sickle cell disease. Option A is incorrect because topical antiseptic alone is inadequate for a colonized, necrotic ulcer in a patient with pulmonary hypertension and severe anaemia; comprehensive management is required. Option C is incorrect because amputation is not indicated for sickle cell ulcers unless there is clear gangrene beyond salvage; the textbook describes these ulcers as painful and resistant to healing but usually manageable with conservative measures. Option D is incorrect because crizanlizumab reduces vaso-occlusive crises by inhibiting P-selectin but does not treat established infected ulcers. Option E is incorrect because while long-term anticoagulation may be needed for recurrent venous thrombosis, the ulcer is primarily driven by vaso-occlusion, stasis, and local ischaemia rather than arterial thrombosis requiring warfarin."
  },
  {
    num: 406,
    stem: "Regarding the genetic heterogeneity underlying thalassaemia intermedia (non-transfusion-dependent thalassaemia), which of the following statements most accurately explains how different genotypes can produce the same moderate clinical phenotype?",
    options: {
      A: "All patients with thalassaemia intermedia are homozygous for the identical β⁰ mutation, and phenotype variation is solely due to dietary iron intake",
      B: "Co-inheritance of α-thalassaemia trait reduces α-chain excess and ameliorates homozygous β-thalassaemia, while co-inheritance of extra α-globin genes worsens the phenotype; both mechanisms can shift a major phenotype toward intermedia",
      C: "The phenotype is determined exclusively by the number of β-globin gene deletions, with point mutations always causing thalassaemia major regardless of other factors",
      D: "Thalassaemia intermedia always requires at least one δβ-thalassaemia allele, and homozygous β-thalassaemia alone can never present as intermedia",
      E: "Hereditary persistence of foetal haemoglobin (HPFH) increases β-chain synthesis and therefore worsens the α/β chain imbalance in β-thalassaemia"
    },
    answer: "B",
    explanation: "Hoffbrand describes thalassaemia intermedia as a clinical syndrome resulting from many genotypes (Table 7.3). The textbook explicitly states that the coexistence of α-thalassaemia trait improves the haemoglobin level in homozygous β-thalassaemia by reducing the degree of α-/β-globin chain imbalance and thus of α chain precipitation and ineffective erythropoiesis, which may result in an intermedia syndrome rather than thalassaemia major. Conversely, patients with β-thalassaemia trait who also have excess (five or six) α-globin genes tend to be more anaemic than usual for the trait due to the greater chain imbalance. Other modifiers include enhanced ability to make foetal haemoglobin (γ chain production) and homozygous or compound heterozygotes with mild (β⁺) thalassaemia. Option A is incorrect because thalassaemia intermedia is genetically heterogeneous, not due to a single mutation, and dietary iron is not the determinant. Option C is incorrect because point mutations in promoter or enhancer regions can cause milder phenotypes, and the majority of β-thalassaemia lesions are point mutations rather than deletions. Option D is incorrect because while δβ-thalassaemia and Hb Lepore can cause intermedia, many other genotypes including homozygous β-thalassaemia with HPFH or co-inherited α-thalassaemia can also present as intermedia. Option E is incorrect because HPFH increases γ-chain (not β-chain) synthesis, which helps 'mop up' excess α chains and ameliorates, not worsens, the phenotype."
  },
  {
    num: 407,
    stem: "Regarding the renal complications of homozygous sickle cell anaemia, which of the following statements most accurately describes the underlying pathophysiology and natural history?",
    options: {
      A: "The kidneys are primarily damaged by immune-complex glomerulonephritis due to repeated blood transfusions, leading to nephrotic syndrome in most adults",
      B: "Chronic kidney disease results from medullary infarctions and papillary necrosis due to the hypertonic, acidic, hypoxic environment of the renal medulla promoting sickling",
      C: "Renal toxicity is caused by free haemoglobin filtration producing obstructive tubular casts; this is prevented by prophylactic alkalinization of urine",
      D: "The primary renal defect is a proximal tubular defect causing massive glucosuria and aminoaciduria, analogous to Fanconi syndrome",
      E: "Sickle cell nephropathy is exclusively an adult complication and does not affect children; therefore annual renal screening should begin only after age 18"
    },
    answer: "B",
    explanation: "Hoffbrand states that the kidneys are vulnerable to infarctions of the medulla with papillary necrosis. The textbook explains that there may be acute deterioration in renal function, failure to concentrate urine aggravating the tendency to dehydration and crisis, and that chronic renal insufficiency is a common complication in adulthood. The renal medulla is particularly susceptible to sickling because of its hypertonic, acidic, and hypoxic environment, which promotes Hb S polymerization and vaso-occlusion. Option A is incorrect because immune-complex glomerulonephritis from transfusions is not the described mechanism; while transfusion-transmitted infections can occur, the primary renal pathology is ischaemic infarction. Option C is incorrect because while free haemoglobin can cause tubular damage in other contexts, Hoffbrand does not describe obstructive tubular casts from free haemoglobin or prophylactic alkalinization as a standard strategy in sickle cell disease. Option D is incorrect because the described defect is primarily medullary (concentrating defect) rather than a proximal tubular Fanconi-like syndrome. Option E is incorrect because while chronic renal insufficiency is described as common in adulthood, children can also experience renal dysfunction including failure to concentrate urine and nocturnal enuresis; the textbook does not suggest delaying renal screening until age 18."
  },
  {
    num: 408,
    stem: "Regarding prenatal and pre-implantation genetic diagnosis of haemoglobin disorders, which of the following statements is most accurate?",
    options: {
      A: "Pre-implantation genetic diagnosis avoids PCR by using fluorescence in situ hybridization (FISH) on blastomeres to detect globin gene deletions",
      B: "Chorionic villus biopsy is the predominant method for obtaining foetal DNA, and PCR amplification followed by allele-specific restriction digestion can identify mutations such as the Hb S allele",
      C: "Pre-implantation genetic diagnosis with HLA typing is performed to select a blastomere that will not develop into a haemopoietic stem cell donor",
      D: "Amniocentesis at 24 weeks is preferred over chorionic villus biopsy because it carries a lower risk of miscarriage and provides earlier results",
      E: "Antenatal diagnosis is not technically possible for α-thalassaemia because the α-globin genes are too small to amplify by standard PCR techniques"
    },
    answer: "B",
    explanation: "Hoffbrand states that the majority of samples for prenatal DNA diagnosis are obtained by chorionic villus biopsy, although amniotic fluid cells are sometimes used. The DNA is analysed after amplification by PCR, using either allele-specific priming or consensus primers followed by restriction digestion to detect a particular allele. This is best illustrated by Hb S, in which the bacterially derived enzyme Dde I detects the A→T change. The textbook also describes pre-implantation genetic diagnosis as involving conventional in vitro fertilization followed by removing one or two cells from blastomeres on day 3, with PCR used to detect thalassaemia mutations so that unaffected blastomeres can be selected for implantation. Option A is incorrect because pre-implantation genetic diagnosis uses PCR, not FISH, to detect mutations in blastomeres. Option C is incorrect because HLA typing is used to select a blastomere HLA-matching a previous thalassaemia major child, so that the new baby could potentially act as a donor for stem cell transplantation into its older sibling—not to avoid becoming a donor. Option D is incorrect because chorionic villus biopsy is performed earlier (first trimester) and is described as the predominant method; Hoffbrand does not state that amniocentesis at 24 weeks is preferred. Option E is incorrect because antenatal diagnosis is certainly possible for α-thalassaemia; DNA analysis is the standard method and is used for all haemoglobin disorders."
  },
  {
    num: 409,
    stem: "Regarding the pharmacological agents used to modify the clinical course of sickle cell disease, which of the following statements most accurately compares their mechanisms of action?",
    options: {
      A: "Hydroxyurea increases Hb F by directly activating the γ-globin gene promoter; crizanlizumab stabilizes deoxygenated Hb S; voxelotor blocks P-selectin-mediated adhesion",
      B: "Hydroxyurea increases Hb F synthesis and is recommended for all infants over 9 months; crizanlizumab is a P-selectin inhibitor reducing vaso-occlusive crises; voxelotor binds the α-globin chain and stabilizes deoxygenated Hb S in a relaxed state",
      C: "Voxelotor increases Hb F levels by editing the BCL11A gene, while hydroxyurea is an antibody directed against transforming growth factor β",
      D: "Crizanlizumab is a small molecule that binds to the α-globin chain preventing polymerization, while voxelotor is an antibody against P-selectin given intravenously",
      E: "Hydroxyurea is contraindicated in children because it causes severe neutropenia in all cases, and crizanlizumab is only approved for children under 5 years of age"
    },
    answer: "B",
    explanation: "Hoffbrand describes three key pharmacological agents for sickle cell disease. Hydroxyurea (hydroxycarbamide) increases Hb F levels and improves the clinical course; it is now recommended for all infants and children with HbS/S over the age of 9 months. Crizanlizumab is an antibody directed against P-selectin, an adhesion molecule that mediates adhesion of sickle cells to blood vessel walls; given intravenously, it reduces the time to first and second crises and the incidence of vaso-occlusive crises. Voxelotor is a small molecule that binds to the α-globin chain and stabilizes deoxygenated haemoglobin in a relaxed state, preventing polymerization; it increases the lifespan of sickle red cells by reducing haemolysis. Option A is incorrect because hydroxyurea does not directly activate the γ-globin promoter (its mechanism involves broader epigenetic and cellular effects), and it misattributes the mechanisms of crizanlizumab and voxelotor. Option C is incorrect because voxelotor does not edit BCL11A (that is the goal of gene therapy), and hydroxyurea is not a TGF-β antibody (luspatercept targets TGF-β superfamily ligands in thalassaemia). Option D is incorrect because it reverses the drug classifications: crizanlizumab is the antibody, and voxelotor is the small molecule. Option E is incorrect because hydroxyurea is explicitly recommended for children over 9 months, and crizanlizumab is approved for those aged 16 years or more, not under 5."
  },
  {
    num: 410,
    stem: "Regarding current and emerging gene therapy strategies for β-thalassaemia major and sickle cell anaemia, which of the following statements most accurately reflects the approved techniques and their principal limitations?",
    options: {
      A: "All approved gene therapies use CRISPR/Cas9 to directly correct the sickle mutation in vivo without the need for stem cell harvest or myeloablative conditioning",
      B: "Lentiviral vector-mediated introduction of a normal β-globin gene or modified β-globin gene (βA-T87Q) into autologous stem cells requires myeloablative conditioning; CRISPR/Cas9 editing of BCL11A to enhance Hb F is also approved but long-term durability remains under study",
      C: "Gene therapy for thalassaemia involves allogeneic stem cell transplantation using donor cells transduced with a γ-globin coding sequence; rejection is the main limitation",
      D: "CRISPR/Cas9 gene editing introduces a γ-globin coding sequence into the β-globin gene to replace it entirely, after which no β-globin is produced",
      E: "Gene therapy is universally curative in all genotypes of thalassaemia major, including β⁰/β⁰, with 100% transfusion independence guaranteed at 5 years"
    },
    answer: "B",
    explanation: "Hoffbrand describes two main gene therapy approaches. First, autologous stem cells are harvested and a lentiviral vector is used to introduce a β-globin gene construct or a modified beta-globin gene βA-T87Q in vitro; the 'corrected' stem cells are reinfused after myeloablative conditioning (e.g., busulphan). This approach has reduced or eliminated the need for long-term red cell transfusions in most treated transfusion-dependent patients with a non-β⁰/β⁰ genotype. Second, the alternative technique aims at enhancing foetal haemoglobin synthesis by editing the BCL11A gene or the γ-globin chain enhancers or promoters, employing CRISPR/Cas9 gene editing. Some of these techniques are approved for clinical use. The textbook notes that costs are high, the need for myeloablative chemotherapy is a concern, and long-term studies are in progress to determine durability and freedom from leukaemia. Option A is incorrect because approved therapies do not use in vivo correction; they require ex vivo manipulation of autologous stem cells and myeloablative conditioning. Option C is incorrect because gene therapy uses autologous, not allogeneic, stem cells; the patient's own cells are modified and reinfused. Option D is incorrect because CRISPR editing of BCL11A enhances γ-globin synthesis while leaving the β-globin gene intact; it does not replace the β-globin gene with γ-globin. Option E is incorrect because Hoffbrand explicitly states that the lentiviral approach has been most successful in non-β⁰/β⁰ genotypes, and long-term durability is still under investigation; 100% guaranteed transfusion independence is not claimed."
  }
];
