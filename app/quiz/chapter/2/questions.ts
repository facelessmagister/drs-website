export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 11,
    stem: "A 28-year-old man is found to have a haemoglobin of 195 g/L during a routine insurance medical examination. He is a non-smoker with no cardiopulmonary disease. His serum erythropoietin level is inappropriately normal. His father had a similar erythrocytosis. Which of the following molecular defects is most likely responsible for his condition?",
    options: {
      A: "Homozygous mutation in the erythropoietin receptor gene causing truncations in the cytoplasmic domain.",
      B: "Loss-of-function mutation in the VHL gene leading to constitutive stabilization of HIF-1α and inappropriate erythropoietin transcription.",
      C: "Activating mutation in JAK2 V617F causing ligand-independent signalling downstream of the EPO receptor.",
      D: "Gain-of-function mutation in the erythropoietin gene leading to autocrine EPO production.",
      E: "Deficiency of 2,3-diphosphoglycerate mutase causing left-shift of the oxygen dissociation curve and compensatory polycythaemia."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 (Fig. 2.5b) states that mutations in the genes vHL, PHD2 and HIF2α are rare causes of congenital polycythaemia. Under normal conditions, prolyl hydroxylase (PHD2) uses molecular oxygen to hydroxylate HIF-1α, allowing the von Hippel-Lindau (vHL) protein to bind and target HIF-1α for ubiquitination and proteasomal degradation. Loss-of-function VHL mutations prevent this degradation, leading to constitutive HIF-1α stabilization, dimerisation with HIF-1β, and inappropriate transcription of erythropoietin and other hypoxia-response genes. The family history and inappropriately normal EPO level in the presence of polycythaemia point to a congenital defect in oxygen sensing. JAK2 V617F causes polycythaemia vera but typically presents in older adults and is an acquired, not inherited, mutation."
  },
  {
    num: 12,
    stem: "A 19-year-old African-American male presents with sudden-onset pallor, dark urine, and jaundice 2 days after starting treatment with primaquine for malaria prophylaxis before a trip to Southeast Asia. His blood film shows bite cells and blister cells. Which biochemical pathway defect explains his acute haemolytic episode?",
    options: {
      A: "Deficiency of glucose-6-phosphate dehydrogenase, impairing NADPH generation and rendering red cells vulnerable to oxidant stress.",
      B: "Deficiency of pyruvate kinase, preventing ATP generation and causing osmotic fragility of red cells.",
      C: "Deficiency of glucose phosphate isomerase, causing accumulation of fructose-6-phosphate and osmotic lysis.",
      D: "Deficiency of hexokinase, preventing glucose phosphorylation and leading to energy-depleted red cells.",
      E: "Deficiency of adenylate kinase, disrupting the adenine nucleotide pool and causing Heinz body formation."
    },
    answer: "A",
    explanation: "Hoffbrand Chapter 2 describes the hexose monophosphate (pentose phosphate) shunt, in which glucose-6-phosphate is converted to 6-phosphogluconate by glucose-6-phosphate dehydrogenase (G6PD), generating NADPH. This NADPH maintains glutathione in its reduced state, which protects haemoglobin and red cell membrane proteins from oxidation. G6PD deficiency is one of the most common inherited abnormalities of red cells, and affected individuals are extremely susceptible to oxidant stress from drugs such as primaquine, sulphonamides, and dapsone, as well as from infection. The bite cells and blister cells result from splenic removal of Heinz bodies (oxidized, denatured haemoglobin), a morphology described in Hoffbrand Chapter 2 and discussed further in Chapter 6."
  },
  {
    num: 13,
    stem: "A 4-year-old boy with sickle cell disease (Hb SS) presents with acute chest syndrome. His arterial blood gas shows PaO2 68 mmHg. Which of the following best explains the adaptive change in his haemoglobin oxygen affinity and its effect on tissue oxygen delivery in this acute setting?",
    options: {
      A: "Hypoxia causes a leftward shift of the oxygen dissociation curve due to increased synthesis of foetal haemoglobin, improving oxygen uptake in the lungs.",
      B: "The acute hypoxia stimulates 2,3-DPG production via the Rapoport–Luebering shunt, causing a rightward shift of the dissociation curve that facilitates oxygen unloading to hypoxic tissues despite impaired arterial oxygenation.",
      C: "Sickled red cells have increased membrane deformability that enhances microvascular flow and oxygen delivery independent of haemoglobin affinity changes.",
      D: "Hb S polymerization increases oxygen affinity, allowing more efficient oxygen binding in the lungs and compensating for the low PaO2.",
      E: "Acidemia from hypoventilation shifts the curve leftward, increasing oxygen affinity and maximizing arterial saturation."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 (Fig. 2.10) explains that high concentrations of 2,3-DPG, H+ ions, and CO2, as well as the presence of sickle haemoglobin (Hb S), shift the oxygen dissociation curve to the right, meaning oxygen is given up more readily to tissues. The Rapoport–Luebering shunt of the Embden–Meyerhof pathway generates 2,3-DPG, which is important in regulating haemoglobin's oxygen affinity. In acute hypoxia, increased glycolysis through this shunt raises 2,3-DPG levels, promoting a rightward shift that enhances tissue oxygen delivery. Option A is incorrect because Hb F shifts the curve left, not right, and acute hypoxia does not increase Hb F synthesis. Option D is incorrect because Hb S polymerization occurs upon deoxygenation and reduces, not increases, oxygen affinity."
  },
  {
    num: 14,
    stem: "A 65-year-old man with chronic atrial fibrillation on warfarin presents with acute-onset dyspnoea and tachycardia after a fall. His haemoglobin is 52 g/L. He appears pale with conjunctival pallor, but there are no signs of active bleeding. His blood film shows marked anisocytosis and polychromasia. The reticulocyte count is 280 × 10^9/L. Which statement best explains the timing of these laboratory findings in relation to his acute blood loss?",
    options: {
      A: "The markedly elevated reticulocyte count indicates that marrow regeneration has been occurring for at least 3 weeks, suggesting this is chronic rather than acute blood loss.",
      B: "The initial clinical features of major blood loss are due to reduction in blood volume rather than anaemia, and the reticulocyte count rises within 2–3 days, peaks at 6–10 days, and remains elevated until haemoglobin normalises.",
      C: "The low haemoglobin on presentation proves that the blood loss occurred more than 24 hours ago, as acute major blood loss does not immediately cause anaemia because total blood volume is reduced.",
      D: "The polychromasia reflects the presence of nucleated red blood cells released from the marrow within 6 hours of the erythropoietin response.",
      E: "The markedly elevated reticulocyte count is pathognomonic for autoimmune haemolytic anaemia triggered by the trauma of the fall."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 states that after acute major blood loss, anaemia is not immediately apparent because the total blood volume is reduced. It takes up to a day for plasma volume to be replaced and for the degree of anaemia to become apparent. Regeneration of red cells and haemoglobin mass takes substantially longer. The erythropoietin response begins within 6 hours, and the reticulocyte count rises within 2–3 days, reaches a maximum in 6–10 days, and remains raised until the haemoglobin returns to normal. The initial clinical features of major blood loss are therefore a result of reduction in blood volume (hypovolaemia) rather than of anaemia per se. The polychromasia reflects the increased reticulocyte response to erythropoietin stimulation."
  },
  {
    num: 15,
    stem: "A 42-year-old woman presents with progressive fatigue, dyspnoea on exertion, and palpitations over 6 months. Her haemoglobin is 68 g/L, MCV 105 fL, and reticulocyte count is 18 × 10^9/L. The blood film shows macro-ovalocytes and hypersegmented neutrophils. Her serum bilirubin is 28 μmol/L (unconjugated 24 μmol/L) and LDH is 850 U/L. Which of the following best explains the pathophysiological basis for her low reticulocyte count relative to the severity of her anaemia?",
    options: {
      A: "The low reticulocyte count indicates aplastic anaemia with complete marrow failure of all three cell lines.",
      B: "The macro-ovalocytes and hypersegmented neutrophils confirm ineffective erythropoiesis, in which erythroblasts die within the marrow without maturing, causing a disproportionately low reticulocyte output despite increased total erythropoiesis.",
      C: "The elevated unconjugated bilirubin and LDH are caused by extravascular haemolysis in the spleen, which would normally produce a high reticulocyte count; the low count indicates coexistent renal failure suppressing EPO production.",
      D: "The findings indicate pure red cell aplasia due to anti-erythropoietin antibodies, which specifically suppresses reticulocyte release.",
      E: "The low reticulocyte count is appropriate for the degree of anaemia and reflects reduced erythropoietin drive due to the leftward shift of the oxygen dissociation curve from vitamin B12 deficiency."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 describes ineffective erythropoiesis, in which approximately 10–15% of developing erythroblasts die within the marrow without producing mature cells. This is substantially increased in megaloblastic anaemia and other chronic anaemias. The serum unconjugated bilirubin (derived from breaking down haemoglobin) and lactate dehydrogenase (LDH, derived from breaking down cells) are raised when ineffective erythropoiesis is marked. The reticulocyte count is low in relation to the degree of anaemia and to the proportion of erythroblasts in the marrow. The macro-ovalocytes and hypersegmented neutrophils are characteristic of megaloblastic anaemia (vitamin B12 or folate deficiency), which is a classic cause of ineffective erythropoiesis described in Hoffbrand Chapter 2."
  },
  {
    num: 16,
    stem: "Regarding the regulation of erythropoietin production by the kidney, which of the following statements most accurately describes the molecular oxygen-sensing mechanism and its clinical relevance?",
    options: {
      A: "Hypoxia stabilises HIF-1α by inhibiting prolyl hydroxylase (PHD2), which normally hydroxylates HIF-1α under normoxic conditions, allowing von Hippel-Lindau protein to target hydroxylated HIF-1α for ubiquitination and proteasomal degradation.",
      B: "HIF-1α is constitutively expressed and its transcriptional activity is regulated solely by competitive inhibition from HIF-2α, which is produced in the liver.",
      C: "Under hypoxic conditions, PHD2 activity increases, leading to accelerated hydroxylation of HIF-1α and rapid degradation, thereby preventing inappropriate erythropoietin production.",
      D: "The von Hippel-Lindau protein directly binds to the erythropoietin gene promoter and represses transcription under normoxic conditions; hypoxia causes vHL dissociation from DNA.",
      E: "Erythropoietin is stored in pre-formed granules within peritubular interstitial cells and released in response to decreased renal blood flow, independent of oxygen tension."
    },
    answer: "A",
    explanation: "Hoffbrand Chapter 2 (Fig. 2.5b) explains that prolyl hydroxylase (PHD2) is the key oxygen sensor in erythropoietin regulation. It uses molecular oxygen to hydroxylate HIF-1α. This hydroxylation allows the von Hippel-Lindau (vHL) protein to bind to HIF-1α and stimulates its breakdown by ubiquitination and subsequent proteasomal degradation. Under hypoxic conditions, PHD2 activity is reduced because it requires oxygen as a substrate; consequently, HIF-1α is stabilised, dimerises with HIF-1β, and stimulates erythropoietin production. Mutations in vHL, PHD2 and HIF2α are rare causes of congenital polycythaemia because they disrupt this oxygen-sensing mechanism. Options B, C, D, and E all describe mechanisms inconsistent with the textbook description."
  },
  {
    num: 17,
    stem: "Which of the following best describes the structural organisation of the red cell membrane skeleton and the functional consequences of defects in its components?",
    options: {
      A: "The membrane skeleton is formed primarily by band 3 protein tetramers linked to glycophorin A; defects cause hereditary spherocytosis by loss of horizontal interactions.",
      B: "Spectrin heterodimers self-associate head-to-head to form tetramers linked at the tail to actin and protein 4.1; the head attaches to ankyrin, which connects to band 3. Defects in spectrin, ankyrin, or band 3 disrupt vertical connections and cause hereditary spherocytosis.",
      C: "The lipid bilayer is stabilised by cholesterol alone; defects in phospholipid metabolism cause elliptocytosis by increasing membrane fluidity.",
      D: "Protein 4.2 is the most abundant membrane protein and forms the primary horizontal lattice; its deficiency causes acanthocytosis.",
      E: "Glycophorin C is the transmembrane anion channel; mutations cause Southeast Asian ovalocytosis by altering ion transport."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 (Fig. 2.12) describes the red cell membrane as comprising a lipid bilayer, membrane integral proteins, and a membrane skeleton. The membrane skeleton is formed by structural proteins including α and β spectrin, ankyrin, protein 4.1 and actin. Spectrin consists of two chains wound around each other to form heterodimers, which self-associate head to head to form tetramers. These tetramers are linked at the tail end to actin and protein band 4.1. At the head end, β spectrin chains attach to ankyrin, which connects them to band 3, the transmembrane anion channel. This represents the 'vertical connection'. Defects of the membrane proteins explain some abnormalities of red cell shape, e.g. hereditary spherocytosis (defects in spectrin, ankyrin, band 3, or protein 4.2) and elliptocytosis (defects in spectrin or protein 4.1)."
  },
  {
    num: 18,
    stem: "Which of the following statements most accurately characterises the physiological factors that alter the position of the haemoglobin oxygen dissociation curve and their clinical significance?",
    options: {
      A: "Foetal haemoglobin (Hb F) shifts the curve to the right because it binds 2,3-DPG with higher affinity than adult haemoglobin, facilitating oxygen release to maternal tissues.",
      B: "Increased 2,3-DPG, H+ ions, and CO2 concentrations shift the curve to the right, decreasing oxygen affinity and facilitating oxygen delivery to tissues; conversely, Hb F and certain rare abnormal haemoglobins shift the curve to the left.",
      C: "A rightward shift of the curve (increased P50) indicates increased oxygen affinity, which is advantageous in chronic hypoxia because it maximises arterial oxygen saturation.",
      D: "The P50 of normal blood is 26.6 mmHg, and in vivo oxygen exchange operates between 100% arterial saturation and 40% venous saturation under resting conditions.",
      E: "Methaemoglobinaemia increases oxygen affinity by stabilising the haemoglobin molecule in the oxygenated conformation, shifting the curve to the left and causing polycythaemia."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 (Fig. 2.10) states that the normal position of the oxygen dissociation curve depends on the concentration of 2,3-DPG, H+ ions and CO2 in the red cell and on the structure of the haemoglobin molecule. High concentrations of 2,3-DPG, H+ or CO2, and the presence of sickle haemoglobin (Hb S), shift the curve to the right (oxygen is given up more easily). Conversely, foetal haemoglobin (Hb F), which is unable to bind 2,3-DPG, and certain rare abnormal haemoglobins associated with polycythaemia shift the curve to the left because they give up O2 less readily than normal. The P50 of normal blood is 26.6 mmHg. In vivo, O2 exchange operates between 95% saturation (arterial blood) with mean arterial O2 tension of 95 mmHg and 70% saturation (venous blood) with mean venous O2 tension of 40 mmHg."
  },
  {
    num: 19,
    stem: "Regarding the synthesis and regulation of haemoglobin in the developing erythroblast, which of the following statements is most accurate?",
    options: {
      A: "Haem synthesis occurs primarily in ribosomes, with δ-aminolaevulinic acid synthase (ALAS) acting as the key rate-limiting enzyme that condenses glycine and succinyl-CoA in the presence of pyridoxal phosphate (vitamin B6).",
      B: "The haem-regulated inhibitor (HRI), an eIF2α kinase, senses intracellular haem concentration; when haem is low (as in iron deficiency), HRI phosphorylates eIF2α, reducing globin synthesis by inhibiting its mRNA translation, thereby preventing the accumulation of toxic free globin chains.",
      C: "Normal adult blood contains approximately 10% Hb F and 5% Hb A2, with Hb A constituting the remaining 85%.",
      D: "Protoporphyrin combines with iron in the ferric (Fe3+) state to form haem; methaemoglobin contains iron in the ferrous (Fe2+) state.",
      E: "The α-globin gene and the adjacent Nprl3 gene share no regulatory relationship; Nprl3 regulates mTORC1 independently of erythropoiesis and iron status."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 2 describes haemoglobin synthesis in the developing red cell. Haem synthesis occurs largely in mitochondria (not ribosomes), commencing with the condensation of glycine and succinyl-CoA under the action of ALAS, with pyridoxal phosphate as a coenzyme. An enzyme eIF2α kinase, also known as haem-regulated inhibitor (HRI), senses intracellular haem concentration. If this is low, as in iron deficiency, HRI phosphorylates its substrate eIF2α, which then reduces globin synthesis by inhibiting its mRNA translation. This is a critical feedback mechanism that prevents the toxic accumulation of free globin chains when haem synthesis is impaired. Normal adult blood contains 96–98% Hb A, 0.5–0.8% Hb F, and 1.5–3.2% Hb A2. Protoporphyrin combines with iron in the ferrous (Fe2+) state to form haem; methaemoglobin contains ferric (Fe3+) iron. The adjacent Nprl3 gene shares enhancers with the α-globin gene, coupling their expression; Nprl3 provides negative regulation of mTORC1 and is essential for optimal erythropoiesis."
  },
  {
    num: 20,
    stem: "Which of the following statements best describes the classification of anaemia by mean corpuscular volume (MCV) and the utility of the reticulocyte count in determining the aetiology of anaemia?",
    options: {
      A: "A low reticulocyte count in the setting of anaemia always indicates bone marrow failure or deficiency of iron, vitamin B12, or folate, and never occurs in haemolytic anaemias.",
      B: "Macrocytic anaemia (MCV >95 fL) is exclusively caused by megaloblastic anaemia due to vitamin B12 or folate deficiency; all other causes of macrocytosis are artefactual.",
      C: "The reticulocyte count should rise in anaemia because of erythropoietin increase; if it is not raised, this suggests impaired marrow function, lack of erythropoietin (renal disease), lack of erythropoietin stimulus, or ineffective erythropoiesis.",
      D: "Microcytic anaemia (MCV <80 fL) is pathognomonic for iron deficiency; thalassaemia, sideroblastic anaemia, and anaemia of chronic disease never present with microcytosis.",
      E: "In acute major haemorrhage, the reticulocyte count peaks within 24 hours because the acute hypoxia triggers maximal erythropoietin release and immediate reticulocyte mobilisation from the marrow."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 2 describes the classification of anaemia by MCV into microcytic (<80 fL), normocytic (80–95 fL) and macrocytic (>95 fL) (Table 2.5). The reticulocyte count should rise in anaemia because of erythropoietin increase and be higher the more severe the anaemia. If the reticulocyte count is not raised in an anaemic patient, this suggests impaired marrow function, lack of erythropoietin (renal disease) or lack of erythropoietin stimulus (Table 2.6). Microcytic anaemia is not exclusive to iron deficiency; thalassaemia, sideroblastic anaemia, and some cases of anaemia of chronic disease also cause microcytosis. Macrocytic anaemia has both megaloblastic (vitamin B12/folate deficiency) and non-megaloblastic causes (alcohol, liver disease, myelodysplasia). After acute haemorrhage, the reticulocyte count rises within 2–3 days and peaks at 6–10 days, not within 24 hours."
  }
];
