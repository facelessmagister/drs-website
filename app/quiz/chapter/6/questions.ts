export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 101,
    stem: "A 28-year-old man of Northern European descent presents with intermittent jaundice and pallor. His father and paternal grandfather had similar symptoms. Physical examination reveals mild splenomegaly. Laboratory studies show: Hb 92 g/L, reticulocytes 14%, total bilirubin 68 μmol/L (unconjugated), normal direct antiglobulin test. The blood film shows numerous small, densely staining red cells. Flow cytometric analysis with eosin-5-maleimide (EMA) reveals reduced mean channel fluorescence. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Start prednisolone 1 mg/kg/day",
      B: "Perform an osmotic fragility test as the definitive diagnostic test",
      C: "Refer for laparoscopic splenectomy if clinically indicated by symptomatic anaemia",
      D: "Initiate high-dose intravenous immunoglobulin",
      E: "Commence daily folic acid 5 mg as the sole treatment"
    },
    answer: "C",
    explanation: "Hoffbrand describes hereditary spherocytosis (HS) as the most common hereditary haemolytic anaemia in Northern Europeans, typically inherited in an autosomal dominant pattern. The clinical picture of fluctuating jaundice, splenomegaly, reticulocytosis, unconjugated hyperbilirubinaemia, microspherocytes on blood film, and reduced EMA fluorescence is pathognomonic for HS. The direct antiglobulin test is negative, excluding autoimmune haemolytic anaemia. The EMA test has replaced the osmotic fragility test as the investigation of choice, so option B is outdated. Corticosteroids and IVIG are used for warm autoimmune haemolytic anaemia, not HS. The principal treatment for HS is splenectomy, preferably laparoscopic, when clinically indicated by symptomatic anaemia, gallstones, leg ulcers, or growth retardation. Folic acid is given as an adjunct in severe cases but is not adequate sole therapy. Hoffbrand notes that splenectomy should always produce a rise in haemoglobin to normal in HS because the spherocytes are destroyed primarily in the spleen."
  },
  {
    num: 102,
    stem: "A 22-year-old male medical student of Mediterranean descent presents 3 days after starting primaquine for malaria prophylaxis following a trip to sub-Saharan Africa. He complains of dark urine, fatigue, and jaundice. Laboratory studies show: Hb 68 g/L, reticulocytes 2%, total bilirubin 85 μmol/L (unconjugated), undetectable serum haptoglobins, and urine dipstick positive for blood but negative red cells on microscopy. The blood film shows bite cells and blister cells. Which of the following best explains the reticulocyte count and the most appropriate management?",
    options: {
      A: "The low reticulocyte count indicates bone marrow failure; a bone marrow biopsy is urgently needed",
      B: "The reticulocyte count is appropriately elevated for the degree of haemolysis; transfuse packed red cells immediately",
      C: "The reticulocyte count is inappropriately low because the acute intravascular haemolysis has exhausted the marrow reserve; transfuse if symptomatic and stop the offending drug",
      D: "The low reticulocyte count suggests parvovirus B19 aplastic crisis; give intravenous immunoglobulin",
      E: "The reticulocyte count is falsely low because reticulocytes are sequestered in the spleen during acute haemolysis"
    },
    answer: "C",
    explanation: "Hoffbrand explains that G6PD deficiency renders red cells susceptible to oxidant stress, and that primaquine is a classic precipitant of acute haemolytic anaemia in G6PD-deficient individuals. The clinical picture of acute intravascular haemolysis with haemoglobinuria, bite cells, blister cells, and Heinz bodies is characteristic. The reticulocyte count of 2% is inappropriately low for the degree of anaemia because the haemolysis is so rapid and acute that the marrow has not yet mounted a compensatory response. Management involves stopping the offending drug, treating any underlying infection, maintaining high urine output, and transfusing blood where necessary for severe symptomatic anaemia. Option A is incorrect because the marrow is not failing; option B is incorrect because the reticulocyte count is not elevated; option D is incorrect because parvovirus aplastic crisis would present with a sudden fall in both haemoglobin and reticulocytes in a patient with chronic compensated haemolysis, not as a drug-induced acute intravascular haemolysis."
  },
  {
    num: 103,
    stem: "A 62-year-old woman presents with rapidly worsening fatigue and jaundice. She has a history of chronic lymphocytic leukaemia (CLL) treated with fludarabine 6 months ago. Examination reveals pallor and moderate splenomegaly. Laboratory studies: Hb 72 g/L, reticulocytes 18%, LDH 850 U/L, total bilirubin 58 μmol/L (unconjugated), undetectable haptoglobins. The direct antiglobulin test (DAT) is positive for IgG and C3d. Blood film shows microspherocytes and polychromasia. Which of the following is the most appropriate first-line treatment?",
    options: {
      A: "Start high-dose dexamethasone instead of prednisolone",
      B: "Commence prednisolone 1–2 mg/kg/day",
      C: "Perform urgent splenectomy",
      D: "Start intravenous eculizumab",
      E: "Discontinue fludarabine and observe; the haemolysis will resolve spontaneously"
    },
    answer: "B",
    explanation: "Hoffbrand describes warm autoimmune haemolytic anaemia (AIHA) as occurring in association with lymphoid malignancies, infections, and autoimmune disorders, and notes that fludarabine is a drug known to cause AIHA. The clinical picture of extravascular haemolysis with positive DAT for IgG and C3d, microspherocytes, and elevated LDH is classic for warm AIHA. The textbook states that prednisolone 1–2 mg/kg/day is the usual first-line treatment for warm AIHA, with tapering guided by blood count and serum LDH monitoring. High-dose dexamethasone is mentioned as effective in ITP but is less well tested and not established in AIHA. Splenectomy is reserved for those who fail steroid or rituximab therapy. Eculizumab is used in cold agglutinin disease and PNH, not warm AIHA. While discontinuing the offending drug is appropriate, observation alone is insufficient for symptomatic severe haemolysis."
  },
  {
    num: 104,
    stem: "A 58-year-old woman presents with chronic fatigue, mild jaundice, and episodes of acrocyanosis affecting her fingertips and earlobes during winter months. Laboratory studies show: Hb 88 g/L, LDH 720 U/L, bilirubin 42 μmol/L (unconjugated), cold agglutinin titre 1:2048. The DAT is positive for C3d only. Serum protein electrophoresis reveals a monoclonal IgM κ band. Bone marrow biopsy shows nodular infiltrates of B lymphocytes with an immunophenotype distinct from lymphoplasmacytic lymphoma and absent MYD88 mutation. Which of the following represents the most appropriate first-line therapy?",
    options: {
      A: "Prednisolone 1–2 mg/kg/day",
      B: "Rituximab monotherapy",
      C: "Urgent splenectomy",
      D: "High-dose intravenous immunoglobulin",
      E: "Commence azathioprine as steroid-sparing agent"
    },
    answer: "B",
    explanation: "Hoffbrand describes primary cold agglutinin disease as a chronic haemolytic anaemia aggravated by cold, associated with intravascular and extravascular haemolysis, acrocyanosis, and a monoclonal IgM paraprotein. The DAT is positive for complement (C3d) only because the IgM antibody is eluted off red cells in warmer parts of the circulation. The bone marrow findings of nodular B-cell infiltrates without MYD88 mutation are characteristic of cold agglutinin disease. The textbook states that keeping the patient warm is essential, and that rituximab is the best first-line therapy for primary cold agglutinin disease. Corticosteroids are of less value than in warm antibody AIHA, and splenectomy is not indicated unless massive splenomegaly is present. High-dose IVIG and azathioprine are not first-line treatments for this condition."
  },
  {
    num: 105,
    stem: "A 34-year-old woman at 34 weeks gestation presents with severe headache, epigastric pain, and oliguria. Blood pressure is 172/110 mmHg. Laboratory studies: Hb 78 g/L, platelets 45 × 10⁹/L, schistocytes on blood film, creatinine 186 μmol/L, LDH 1200 U/L, total bilirubin 48 μmol/L (unconjugated). Which of the following is the most likely underlying pathophysiological mechanism for her haemolytic anaemia?",
    options: {
      A: "Warm autoimmune antibody-mediated extravascular haemolysis",
      B: "Intravascular haemolysis due to physical fragmentation of red cells in abnormal small vessels with fibrin strand deposition",
      C: "G6PD deficiency triggered by oxidative stress from pre-eclampsia",
      D: "Paroxysmal nocturnal haemoglobinuria with complement-mediated lysis",
      E: "Hereditary spherocytosis exacerbated by pregnancy-related splenic enlargement"
    },
    answer: "B",
    explanation: "Hoffbrand classifies pre-eclampsia/HELLP syndrome under red cell fragmentation syndromes (microangiopathic haemolytic anaemia, MAHA). The clinical triad of haemolysis, elevated liver enzymes, and low platelets (HELLP) in a hypertensive pregnant woman is characteristic. The pathophysiology involves abnormal small vessels with fibrin strand deposition and platelet adherence causing physical fragmentation of red cells, producing schistocytes. This is an intravascular haemolytic process. Warm AIHA would show spherocytes and a positive DAT, not schistocytes. G6PD deficiency would show bite cells and Heinz bodies, not schistocytes, and would not explain the thrombocytopenia and hypertension. PNH is not associated with pregnancy hypertension or HELLP syndrome. Hereditary spherocytosis would show microspherocytes, not fragmented cells, and would not cause thrombocytopenia or renal dysfunction."
  },
  {
    num: 106,
    stem: "Which of the following sets of laboratory findings most accurately distinguishes intravascular haemolysis from predominantly extravascular haemolysis?",
    options: {
      A: "Intravascular — unconjugated hyperbilirubinaemia, absent haptoglobins, and urobilinogenuria; extravascular — unconjugated hyperbilirubinaemia, absent haptoglobins, and urobilinogenuria",
      B: "Intravascular — haemoglobinaemia, haemoglobinuria, haemosiderinuria, and methaemalbuminaemia; extravascular — unconjugated hyperbilirubinaemia, absent haptoglobins, and urobilinogenuria without free haemoglobin in plasma or urine",
      C: "Intravascular — conjugated hyperbilirubinaemia and bilirubinuria; extravascular — unconjugated hyperbilirubinaemia without bilirubinuria",
      D: "Intravascular — elevated reticulocytes and erythroid hyperplasia; extravascular — normal reticulocyte count and normocellular marrow",
      E: "Intravascular — positive direct antiglobulin test for IgG; extravascular — positive direct antiglobulin test for complement only"
    },
    answer: "B",
    explanation: "Hoffbrand clearly distinguishes the two mechanisms of red cell destruction. In extravascular haemolysis, red cells are removed by macrophages of the reticuloendothelial system, producing unconjugated hyperbilirubinaemia, absent haptoglobins, increased urine urobilinogen, and reticulocytosis. In intravascular haemolysis, red cells are destroyed directly within the circulation, releasing free haemoglobin that saturates haptoglobins and produces haemoglobinaemia, haemoglobinuria, haemosiderinuria, and methaemalbuminaemia. Option A is incorrect because it lists identical findings for both. Option C is incorrect because intravascular haemolysis does not cause conjugated hyperbilirubinaemia. Option D is incorrect because both mechanisms cause reticulocytosis and erythroid hyperplasia. Option E describes differences in DAT patterns between warm and cold AIHA, not between intravascular and extravascular haemolysis per se."
  },
  {
    num: 107,
    stem: "Regarding the molecular pathophysiology of pyruvate kinase deficiency, which of the following statements most accurately explains why affected patients may experience relatively mild symptoms despite significant anaemia?",
    options: {
      A: "The deficiency causes a left shift in the oxygen-dissociation curve, increasing oxygen affinity and tissue oxygen delivery",
      B: "The accumulation of 2,3-diphosphoglycerate (2,3-DPG) due to the metabolic block causes a right shift in the oxygen-dissociation curve, enhancing tissue oxygen unloading",
      C: "The defect increases intracellular ATP levels, improving red cell deformability and reducing splenic sequestration",
      D: "The deficiency upregulates erythropoietin receptors, causing compensatory erythropoietic hyperplasia that fully corrects the anaemia",
      E: "The metabolic block diverts glucose-6-phosphate into the pentose phosphate pathway, increasing NADPH and protecting against oxidant stress"
    },
    answer: "B",
    explanation: "Hoffbrand describes pyruvate kinase deficiency as an autosomal recessive glycolytic pathway defect in which red cells become rigid due to reduced ATP formation. The severity of anaemia varies widely (Hb 40–100 g/L). Crucially, the metabolic block upstream of pyruvate kinase leads to accumulation of 2,3-diphosphoglycerate (2,3-DPG), which causes a right shift in the oxygen-dissociation curve. This right shift enhances oxygen unloading to tissues, thereby ameliorating symptoms despite significant anaemia. Option A is incorrect because the shift is to the right, not left. Option C is incorrect because intracellular ATP is reduced, not increased. Option D is incorrect because while erythropoietic hyperplasia occurs, it does not fully correct the anaemia. Option E is incorrect because the glycolytic block does not primarily divert flux into the pentose phosphate pathway; that is the consequence of G6PD deficiency."
  },
  {
    num: 108,
    stem: "In warm autoimmune haemolytic anaemia (AIHA), which of the following best describes the mechanism by which IgG-coated red cells are destroyed, and why corticosteroids are effective first-line therapy?",
    options: {
      A: "IgG-coated red cells are lysed by complement in the circulation; corticosteroids inhibit complement activation",
      B: "IgG-coated red cells are phagocytosed by splenic macrophages via Fcγ receptors; corticosteroids reduce macrophage Fc receptor expression and antibody production",
      C: "IgG-coated red cells agglutinate in the cold and obstruct small vessels; corticosteroids prevent cold-induced agglutination",
      D: "IgG-coated red cells are destroyed by cytotoxic T lymphocytes in the liver; corticosteroids induce T-cell apoptosis",
      E: "IgG-coated red cells are sequestered in the bone marrow sinusoids; corticosteroids stimulate erythropoietic expansion"
    },
    answer: "B",
    explanation: "Hoffbrand explains that in warm AIHA, red cells are coated with IgG (usually alone or with complement C3d) and are taken up by reticuloendothelial macrophages which have receptors for the IgG Fc fragment. Part of the coated membrane is lost, causing the cells to become progressively more spherical and ultimately be destroyed, predominantly in the spleen. Corticosteroids such as prednisolone are effective because they reduce macrophage Fc receptor expression and decrease antibody production by lymphocytes. Option A is incorrect because complement-mediated intravascular lysis is not the dominant mechanism in warm AIHA. Option C describes cold agglutinin disease. Option D is incorrect because cytotoxic T cells do not destroy IgG-coated red cells. Option E is incorrect because bone marrow sequestration is not the mechanism of red cell destruction in warm AIHA."
  },
  {
    num: 109,
    stem: "Regarding drug-induced immune haemolytic anaemias, which of the following correctly matches the drug with its proposed mechanism of red cell destruction?",
    options: {
      A: "Penicillin — deposition of complement via a drug–protein (antigen)–antibody complex onto the red cell surface",
      B: "Quinidine — antibody directed against a drug–red cell membrane complex",
      C: "Fludarabine — true autoimmune haemolytic anaemia in which the drug's role is unclear",
      D: "Rifampicin — hapten mechanism binding directly to the red cell membrane without antibody involvement",
      E: "Methyldopa — immune complex mechanism causing complement deposition via drug–protein–antibody complexes"
    },
    answer: "C",
    explanation: "Hoffbrand describes three mechanisms of drug-induced immune haemolytic anaemia: (1) antibody directed against a drug–red cell membrane complex (e.g. penicillin, ampicillin); (2) deposition of complement via a drug–protein (antigen)–antibody complex onto the red cell surface (e.g. quinidine, rifampicin); and (3) a true autoimmune haemolytic anaemia in which the role of the drug is unclear (e.g. fludarabine, methyldopa, α-interferon). Therefore, option C correctly matches fludarabine to the third mechanism. Option A incorrectly assigns penicillin to the immune complex mechanism; penicillin operates via the hapten/drug–membrane complex mechanism. Option B incorrectly assigns quinidine to the hapten mechanism. Option D incorrectly describes rifampicin as acting without antibody involvement. Option E incorrectly assigns methyldopa to the immune complex mechanism rather than the true autoimmune mechanism."
  },
  {
    num: 110,
    stem: "Which of the following statements most accurately describes the biochemical basis of glucose-6-phosphate dehydrogenase (G6PD) deficiency and its clinical implications?",
    options: {
      A: "G6PD catalyses the conversion of 6-phosphogluconate to ribulose-5-phosphate; deficiency impairs glycolytic ATP production, leading to rigid red cells",
      B: "G6PD reduces NADP to NADPH, which is required for reduced glutathione (GSH) synthesis; deficiency renders red cells vulnerable to oxidant stress, causing Heinz body formation and membrane damage",
      C: "G6PD catalyses the final step of glycolysis, converting phosphoenolpyruvate to pyruvate; deficiency causes 2,3-DPG accumulation",
      D: "G6PD is encoded by an autosomal dominant gene on chromosome 1; heterozygous females are always clinically protected from haemolysis",
      E: "G6PD deficiency primarily affects the Embden–Meyerhof pathway, reducing 2,3-DPG and causing a left shift in the oxygen-dissociation curve"
    },
    answer: "B",
    explanation: "Hoffbrand states that G6PD functions to reduce nicotinamide adenine dinucleotide phosphate (NADP) to NADPH, and that this reaction is the only source of NADPH needed for the production of reduced glutathione (GSH). Reduced glutathione normally protects haemoglobin and red cell membranes from oxidant stress. In G6PD deficiency, impaired NADPH and GSH synthesis renders red cells susceptible to oxidant stress, resulting in Heinz body formation (oxidized, denatured haemoglobin), membrane damage, and intravascular or extravascular haemolysis. Option A is incorrect because G6PD does not catalyse the conversion of 6-phosphogluconate to ribulose-5-phosphate (that is 6-phosphogluconate dehydrogenase), and the defect does not primarily impair glycolytic ATP production. Option C describes pyruvate kinase, not G6PD. Option D is incorrect because G6PD is X-linked, not autosomal dominant, and heterozygous females may have a substantial proportion of G6PD-deficient red cells due to lyonization. Option E is incorrect because G6PD affects the pentose phosphate pathway, not the Embden–Meyerhof pathway."
  },
  {
    num: 391,
    stem: "A 2-year-old girl of African descent presents with severe pallor, jaundice, and massive splenomegaly. Her parents are known carriers of hereditary elliptocytosis. Laboratory studies: Hb 52 g/L, reticulocytes 3%, total bilirubin 78 μmol/L (unconjugated). The blood film shows bizarre fragmented erythrocytes, microspherocytes, and marked poikilocytosis with numerous elliptocytes. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Initiate high-dose corticosteroids as first-line therapy",
      B: "Perform an urgent bone marrow transplant from a matched sibling donor",
      C: "Refer for splenectomy after appropriate vaccination and antimicrobial prophylaxis",
      D: "Commence daily hydroxyurea to reduce sickling",
      E: "Administer intravenous immunoglobulin and observe for spontaneous resolution"
    },
    answer: "C",
    explanation: "Hoffbrand describes hereditary pyropoikilocytosis as a severe haemolytic anaemia occurring in patients who are homozygous or doubly heterozygous for mutations causing hereditary elliptocytosis; it is most common in patients of African descent. The blood film shows fragmented cells, microspherocytes, and marked poikilocytosis. Splenectomy results in clinical improvement, though vaccination and antimicrobial prophylaxis are essential given the risk of post-splenectomy sepsis. Corticosteroids are not indicated for this membrane defect. Bone marrow transplant is not standard therapy. Hydroxyurea is used in sickle cell disease, not pyropoikilocytosis. IVIG is used in immune cytopenias, not hereditary membrane disorders."
  },
  {
    num: 392,
    stem: "A 24-year-old woman with known hereditary spherocytosis presents with sudden worsening fatigue and pallor following a flu-like illness with fever and arthralgia. Her baseline Hb is normally 95 g/L with reticulocytes 14%. Today: Hb 46 g/L, reticulocytes 0.3%. The blood film reveals giant pronormoblasts with viral cytopathic changes. Which of the following is the most appropriate immediate management?",
    options: {
      A: "Start high-dose prednisolone 1 mg/kg/day",
      B: "Administer intravenous immunoglobulin and monitor haemoglobin",
      C: "Urgently transfuse cross-matched red cells and consider IVIG for parvovirus B19",
      D: "Perform emergency splenectomy",
      E: "Commence erythropoietin stimulating agents"
    },
    answer: "C",
    explanation: "Hoffbrand states that aplastic crises in hereditary spherocytosis are usually precipitated by parvovirus B19 infection, which switches off erythropoiesis. The hallmark is a sudden fall in both haemoglobin and reticulocyte count in a patient with chronic compensated haemolysis. Giant pronormoblasts in the marrow (or occasionally in peripheral blood) are characteristic of parvovirus B19 infection. Management involves blood transfusion for severe symptomatic anaemia and intravenous immunoglobulin in selected cases. Corticosteroids and splenectomy are not indicated for aplastic crisis. Erythropoietin is not effective when erythroid progenitors are directly infected and suppressed by parvovirus."
  },
  {
    num: 393,
    stem: "A 6-year-old boy presents with sudden-onset dark urine, pallor, and abdominal pain following an upper respiratory tract infection. His mother notes that the urine darkens dramatically when he plays outside in cold weather. Laboratory studies: Hb 68 g/L, LDH 820 U/L, haptoglobins undetectable, urine dipstick positive for blood with no RBCs on microscopy. The direct antiglobulin test is negative. The Donath–Landsteiner test is positive. Which of the following best describes the antibody and the expected clinical course?",
    options: {
      A: "An IgM antibody directed against the I antigen; the condition requires long-term rituximab therapy",
      B: "An IgG antibody with P blood group specificity that binds in the cold and causes complement-mediated lysis in warm conditions; the condition is usually self-limiting",
      C: "An IgA warm autoantibody requiring prolonged corticosteroid therapy",
      D: "An IgG anti-Rh antibody causing extravascular haemolysis; splenectomy is curative",
      E: "A monoclonal IgM kappa paraprotein causing chronic cold agglutinin disease"
    },
    answer: "B",
    explanation: "Hoffbrand describes paroxysmal cold haemoglobinuria as a rare syndrome of acute intravascular haemolysis after cold exposure, caused by the Donath–Landsteiner antibody. This is an IgG antibody with specificity for the P blood group antigens; it binds to red cells in the cold but causes lysis with complement in warm conditions. Viral infections are predisposing causes and the condition is usually self-limiting. Option A describes cold agglutinin disease. Option C is incorrect because the DAT is negative and the antibody is cold-reactive IgG, not warm IgA. Option D describes warm autoimmune haemolytic anaemia. Option E describes the monoclonal IgM paraprotein seen in primary cold agglutinin disease, which is a chronic lymphoproliferative disorder."
  },
  {
    num: 394,
    stem: "A 71-year-old man presents with progressive fatigue and dark-coloured urine eight months after undergoing aortic valve replacement with a mechanical prosthesis. Laboratory studies: Hb 79 g/L, reticulocytes 6%, LDH 1100 U/L, total bilirubin 56 μmol/L (unconjugated), haptoglobins undetectable. The blood film shows numerous schistocytes and polychromasia. Which of the following is the most likely mechanism of his haemolysis?",
    options: {
      A: "Warm autoimmune antibody-mediated extravascular destruction of red cells in the spleen",
      B: "Physical fragmentation of red cells due to high shear stress across an abnormal prosthetic surface",
      C: "G6PD deficiency triggered by oxidative stress from cardiopulmonary bypass",
      D: "Complement-mediated intravascular lysis due to PNH clone expansion",
      E: "Iron deficiency anaemia causing microcytic hypochromic cells that fragment in circulation"
    },
    answer: "B",
    explanation: "Hoffbrand classifies cardiac haemolysis under red cell fragmentation syndromes. Prosthetic heart valves, patches, grafts, and perivalvular leaks can cause physical damage to red cells on abnormal surfaces, resulting in mechanical haemolysis with schistocytes, elevated LDH, and intravascular features. The timeline of 8 months post-surgery and the presence of schistocytes are characteristic. Warm AIHA would show microspherocytes and a positive DAT, not schistocytes. G6PD deficiency would show bite cells and Heinz bodies. PNH is not associated with prosthetic valve surgery. Iron deficiency does not cause intravascular fragmentation or schistocyte formation."
  },
  {
    num: 395,
    stem: "A 28-year-old woman with systemic lupus erythematosus presents with sudden onset of fatigue, jaundice, and widespread petechial purpura. Laboratory studies: Hb 58 g/L, platelets 14 × 10⁹/L, reticulocytes 11%, total bilirubin 72 μmol/L (unconjugated), LDH 950 U/L. The direct antiglobulin test is positive for both IgG and complement (C3d). Peripheral blood film shows microspherocytes and polychromasia. Which of the following is the most likely diagnosis and most appropriate first-line treatment?",
    options: {
      A: "Thrombotic thrombocytopenic purpura; commence plasma exchange immediately",
      B: "Evans' syndrome; commence prednisolone 1–2 mg/kg/day",
      C: "Disseminated intravascular coagulation; administer unfractionated heparin",
      D: "Primary cold agglutinin disease; start rituximab monotherapy",
      E: "Paroxysmal nocturnal haemoglobinuria; initiate eculizumab"
    },
    answer: "B",
    explanation: "Hoffbrand describes Evans' syndrome as the coexistence of autoimmune haemolytic anaemia and immune thrombocytopenic purpura, noting that warm AIHA may occur in association with systemic lupus erythematosus. The DAT is typically positive for IgG and complement, and the blood film shows microspherocytes from extravascular splenic destruction. The simultaneous presence of severe immune-mediated thrombocytopenia and haemolysis in a patient with SLE is diagnostic of Evans' syndrome. First-line treatment is corticosteroids (prednisolone 1–2 mg/kg/day). TTP would show schistocytes and neurological or renal involvement without a positive DAT. DIC would show coagulopathy and fragmented cells. Cold agglutinin disease would show C3d-only DAT and acrocyanosis. PNH would show intravascular haemolysis, thrombosis, and a negative DAT."
  },
  {
    num: 396,
    stem: "Regarding Southeast Asian ovalocytosis, which of the following statements most accurately describes the molecular defect and its biological significance?",
    options: {
      A: "A mutation in the ankyrin gene causes loss of vertical interactions between the membrane skeleton and lipid bilayer, producing spherocytes",
      B: "A 9-amino acid deletion at the junction of the cytoplasmic and transmembrane domains of band 3 renders the red cell rigid and resistant to malarial parasite invasion",
      C: "A defect in spectrin heterodimer formation produces elliptocytes and increases membrane deformability",
      D: "A deficiency of protein 4.2 (pallidin) reduces mean channel fluorescence on eosin-5-maleimide testing",
      E: "An X-linked defect in the G6PD enzyme renders red cells susceptible to oxidant stress and Heinz body formation"
    },
    answer: "B",
    explanation: "Hoffbrand states that Southeast Asian ovalocytosis is caused by a 9-amino acid deletion at the junction of the cytoplasmic and transmembrane domains of the band 3 protein. This deletion makes the cells rigid and resistant to invasion by malarial parasites, providing a selective advantage in malaria-endemic regions. Most cases are not anaemic and asymptomatic; treatment is rarely required. Option A describes hereditary spherocytosis. Option C describes hereditary elliptocytosis. Option D describes a rare subset of hereditary spherocytosis. Option E describes G6PD deficiency, which is X-linked and unrelated to Southeast Asian ovalocytosis."
  },
  {
    num: 397,
    stem: "In intravascular haemolysis, which of the following sequences most accurately describes the pathophysiological pathway leading to haemosiderinuria?",
    options: {
      A: "Free haemoglobin binds haptoglobin → complex is filtered by glomeruli → iron is deposited in tubular cells → haemosiderin appears in urine when tubular reabsorptive capacity is exceeded",
      B: "Haemoglobin is converted to biliverdin in macrophages → bilirubin is conjugated in hepatocytes → urobilinogen is excreted in urine",
      C: "Free haemoglobin is filtered by glomeruli → reabsorbed by renal tubular cells → iron accumulates in tubular epithelium → shed as haemosiderin granules in urine",
      D: "Haemoglobin binds albumin to form methaemalbumin → filtered by glomeruli → iron is released in urine as free ferritin",
      E: "Haemoglobin is phagocytosed by splenic macrophages → iron is exported via ferroportin → excess iron is excreted renally"
    },
    answer: "C",
    explanation: "Hoffbrand describes intravascular haemolysis as releasing free haemoglobin that rapidly saturates plasma haptoglobins. The excess free haemoglobin is filtered by the glomerulus. If the rate of haemolysis exceeds renal tubular reabsorptive capacity, free haemoglobin enters the urine (haemoglobinuria). Iron released from haemoglobin within renal tubular cells is stored as haemosiderin, which is subsequently shed into the urine and detectable by Prussian blue staining. Option A is incorrect because the haptoglobin-bound complex is too large to be filtered and is cleared by reticuloendothelial cells. Option B describes the extravascular bilirubin pathway. Option D confuses methaemalbuminaemia with urinary iron excretion. Option E describes extravascular haemolysis in the spleen."
  },
  {
    num: 398,
    stem: "Which of the following best explains why splenectomy reliably normalizes the haemoglobin in hereditary spherocytosis but only partially alleviates the anaemia in pyruvate kinase deficiency?",
    options: {
      A: "In pyruvate kinase deficiency, the spleen is not involved in red cell destruction; hepatic macrophages are the primary site",
      B: "In hereditary spherocytosis, spherocytes are formed in the spleen and destroyed there; in pyruvate kinase deficiency, red cells are intrinsically rigid from ATP depletion and are destroyed throughout the reticuloendothelial system",
      C: "Pyruvate kinase deficiency is autosomal dominant, whereas hereditary spherocytosis is autosomal recessive, affecting inheritance patterns but not splenic function",
      D: "In pyruvate kinase deficiency, 2,3-DPG accumulation causes a left shift in the oxygen-dissociation curve, masking the true severity of haemolysis",
      E: "Hereditary spherocytosis responds to splenectomy because the membrane defect is corrected surgically, whereas the enzyme defect in pyruvate kinase deficiency is irreversible"
    },
    answer: "B",
    explanation: "Hoffbrand explains that in hereditary spherocytosis, spherocytes are primarily destroyed in the spleen because they lose membrane surface area and cannot deform through splenic microcirculation; therefore, splenectomy reliably raises haemoglobin to normal. In pyruvate kinase deficiency, red cells become rigid due to reduced ATP formation, and although splenectomy may alleviate the anaemia, it does not cure the condition because the intrinsically ATP-depleted cells continue to be destroyed throughout the reticuloendothelial system. Option A is incorrect because the spleen does participate in PK deficiency. Option C is incorrect because PK deficiency is autosomal recessive, not dominant. Option D is incorrect because 2,3-DPG accumulation causes a right shift, not left. Option E is incorrect because splenectomy does not correct the membrane defect; it simply removes the organ responsible for destroying the abnormal cells."
  },
  {
    num: 399,
    stem: "Regarding targeted complement inhibition in primary cold agglutinin disease, which of the following accurately describes the mechanism of action and rationale for each agent?",
    options: {
      A: "Eculizumab inhibits C1s to prevent IgM binding to red cells; sutimlimab inhibits C5 to block terminal membrane attack complex formation",
      B: "Eculizumab is a monoclonal antibody against C5 that prevents terminal complement activation; sutimlimab inhibits C1s to block classical pathway initiation at the level of the C1 complex",
      C: "Pegcetacoplan inhibits C1s to prevent C4 cleavage; rituximab blocks CD20 on red cells to inhibit complement deposition",
      D: "Sutimlimab blocks C3 convertase activity directly; eculizumab enhances C3b degradation by factor I",
      E: "All three agents — eculizumab, pegcetacoplan, and sutimlimab — act at the same point in the complement cascade by inhibiting C5 cleavage"
    },
    answer: "B",
    explanation: "Hoffbrand states that eculizumab is a monoclonal antibody that inhibits complement C5, thereby preventing terminal complement activation and intravascular haemolysis in cold agglutinin disease. Sutimlimab inhibits complement C1s, blocking the classical pathway at its initiation point and preventing downstream complement activation on IgM-coated red cells. Pegcetacoplan is a pegylated peptide that inhibits complement C3. These agents represent distinct targets in the complement cascade. Option A reverses the mechanisms of eculizumab and sutimlimab. Option C incorrectly assigns pegcetacoplan to C1s and mischaracterizes rituximab, which targets CD20 on B lymphocytes, not red cells. Option D is incorrect because sutimlimab does not block C3 convertase. Option E is incorrect because the three agents act at different levels (C3, C5, and C1s)."
  },
  {
    num: 400,
    stem: "Regarding neonatal jaundice in glucose-6-phosphate dehydrogenase (G6PD) deficiency, which of the following statements most accurately explains the pathophysiology and guides management?",
    options: {
      A: "The jaundice is caused primarily by acute intravascular haemolysis triggered by oxidant stress at birth; exchange transfusion is never needed",
      B: "The jaundice is usually not caused by excess haemolysis but by G6PD deficiency affecting neonatal liver function; phototherapy and exchange transfusion may be required to prevent kernicterus",
      C: "The jaundice results from conjugated hyperbilirubinaemia due to biliary atresia associated with the G6PD Mediterranean variant",
      D: "Neonatal jaundice in G6PD deficiency is exclusively caused by co-inheritance of Gilbert's syndrome, which is mandatory for clinical expression",
      E: "The jaundice is due to unconjugated hyperbilirubinaemia from massive splenic destruction of G6PD-deficient red cells; splenectomy is indicated"
    },
    answer: "B",
    explanation: "Hoffbrand explains that G6PD-deficient babies are prone to neonatal jaundice, and that in severe cases phototherapy and exchange transfusion are needed to avoid kernicterus. Crucially, the jaundice is usually not caused by excess haemolysis but by deficiency of G6PD affecting neonatal liver function. Gilbert's syndrome may also be present as a co-existing factor reducing the liver's ability to metabolise bilirubin, but it is not mandatory. Option A is incorrect because the jaundice is not primarily haemolytic and exchange transfusion may indeed be needed. Option C is incorrect because biliary atresia is not associated with G6PD deficiency. Option D is incorrect because Gilbert's syndrome is not mandatory. Option E is incorrect because massive splenic destruction is not the mechanism and splenectomy is not indicated."
  }
];
