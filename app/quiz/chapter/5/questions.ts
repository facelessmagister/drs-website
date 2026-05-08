export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 91,
    stem: "A 68-year-old woman presents with progressive fatigue over 6 months, pallor, and mild jaundice. Physical examination reveals a beefy-red, smooth tongue and loss of vibration and position sense in the lower limbs. Laboratory studies show haemoglobin 78 g/L, MCV 128 fL, white cell count 3.2 × 10⁹/L, and platelets 95 × 10⁹/L. Serum vitamin B12 is 85 ng/L (normal 160–925). Serum gastrin is markedly elevated and parietal cell antibodies are positive. Which of the following is the most appropriate immediate management strategy?",
    options: {
      A: "Start oral cyanocobalamin 1000 μg daily for life, as her malabsorption is mild and oral therapy is adequate.",
      B: "Administer intramuscular hydroxocobalamin 1000 μg on alternate days for 2–3 weeks, followed by maintenance every 3 months lifelong.",
      C: "Start folic acid 5 mg daily alone to correct the macrocytic anaemia rapidly while awaiting definitive B12 assay results.",
      D: "Refer urgently for bone marrow biopsy to exclude myelodysplastic neoplasia before commencing vitamin therapy.",
      E: "Administer blood transfusion immediately, as the haemoglobin is below 80 g/L and transfusion is mandatory in severe megaloblastic anaemia."
    },
    answer: "B",
    explanation: "Hoffbrand describes pernicious anaemia as an autoimmune disease causing gastric atrophy, achlorhydria, and lack of intrinsic factor, leading to severe B12 malabsorption. The presence of parietal cell antibodies, elevated serum gastrin, and low serum B12 confirms the diagnosis. For severe B12 deficiency with megaloblastic anaemia or neuropathy, parenteral hydroxocobalamin is the standard initial treatment: 1000 μg intramuscularly six times over 2–3 weeks, followed by maintenance every 3 months lifelong (Table 5.9). Oral therapy is inappropriate because the IF–cubam mechanism is destroyed, and no more than 1–2 μg can be absorbed per dose via the physiologic route. Folic acid alone must never be given in B12 deficiency as it can correct the haematological response while allowing the neuropathy to progress (Hoffbrand p. 63). Bone marrow biopsy is not required when the clinical picture is classic; the marrow would show hypercellularity with megaloblastic changes, giant metamyelocytes, and asynchrony of nuclear-cytoplasmic maturation. Blood transfusion should be avoided if possible because of the risk of circulatory overload, especially in elderly patients with possible cardiac compromise."
  },
  {
    num: 92,
    stem: "A 34-year-old woman with Crohn's disease involving the terminal ileum underwent ileal resection 18 months ago. She presents with worsening paraesthesia in her feet and difficulty walking in the dark. Haemoglobin is 105 g/L, MCV 114 fL, and serum B12 95 ng/L. She was started on oral folic acid 5 mg daily by her general practitioner 2 months ago. Her haemoglobin has risen to 118 g/L but her neurological symptoms have progressed. Which statement best explains this clinical course?",
    options: {
      A: "The folic acid caused allergic neuropathy due to direct neurotoxicity of pteroylglutamic acid metabolites.",
      B: "The neurological progression is unrelated to the folic acid and reflects irreversible spinal cord damage that had already occurred before treatment.",
      C: "Folic acid has corrected the haematological manifestations of coexisting B12 deficiency while masking the underlying B12 deficit, allowing the neuropathy to worsen.",
      D: "The patient has developed tropical sprue as a complication of Crohn's disease, causing isolated folate malabsorption and B12-independent neuropathy.",
      E: "The rise in haemoglobin confirms that her symptoms are psychogenic and not due to organic deficiency."
    },
    answer: "C",
    explanation: "Hoffbrand explicitly warns that large doses of folic acid given in B12 deficiency cause a haematological response but allow the neuropathy to appear or progress as the B12 deficiency advances (p. 63). In ileal resection, B12 malabsorption is inevitable because the terminal ileum is the exclusive site of IF–B12 absorption via the cubam receptor (Fig. 5.2). The patient's normalisation of haemoglobin on folic acid reflects the fact that folate can bypass the methylfolate trap sufficiently to permit some DNA synthesis, but it cannot substitute for B12 in the methionine synthase reaction or the methylmalonyl-CoA mutase reaction in neural tissue. The correct management is to stop folic acid monotherapy and initiate parenteral B12 immediately. While some spinal cord recovery may be incomplete if neuropathy has been present for months, the progression during folate therapy is specifically due to unmasked B12 deficiency. Tropical sprue is a differential for folate malabsorption but would not explain the terminal ileal resection history or the low B12 level."
  },
  {
    num: 93,
    stem: "A 58-year-old man with a 20-year history of heavy alcohol consumption presents with fatigue and a swollen, painful tongue. Laboratory studies show haemoglobin 92 g/L, MCV 122 fL, serum bilirubin 28 μmol/L (unconjugated fraction 22 μmol/L), and LDH 850 U/L. Serum vitamin B12 is 450 ng/L, serum folate 1.8 μg/L (normal 3.0–15.0), and red cell folate 110 μg/L (normal 160–640). Which of the following best explains the pathophysiology of his macrocytic anaemia?",
    options: {
      A: "Alcohol-induced liver cirrhosis causing non-megaloblastic macrocytosis via lipid deposition on the red cell membrane.",
      B: "Combined nutritional deficiency with predominant folate deficiency causing megaloblastic anaemia, despite normal serum B12.",
      C: "Direct toxic effect of ethanol on erythroid progenitors causing defective nuclear maturation independent of vitamin deficiency.",
      D: "Sideroblastic anaemia secondary to alcohol and pyridoxine deficiency, explaining the macrocytosis and elevated bilirubin.",
      E: "Vitamin B12 deficiency due to chronic pancreatitis impairing release of B12 from haptocorrin, which would be confirmed by an elevated serum methylmalonic acid."
    },
    answer: "B",
    explanation: "Hoffbrand lists alcoholism as a major cause of folate deficiency because of poor nutrition, malabsorption, and the direct effect of alcohol on folate metabolism (Table 5.5). The combination of macrocytic anaemia with an elevated MCV, raised unconjugated bilirubin and LDH (reflecting ineffective erythropoiesis and intramedullary haemolysis), low serum and red cell folate, and normal serum B12 points to megaloblastic anaemia due to folate deficiency. While alcohol can cause non-megaloblastic macrocytosis via liver disease or direct membrane effects (Table 5.10), the presence of megaloblastic features—high bilirubin/LDH, low red cell folate—indicates a nutritional deficiency mechanism. The red cell folate is a more accurate guide to tissue folate status than serum folate, and it is markedly reduced here. Sideroblastic anaemia typically shows a dimorphic blood film with basophilic stippling and ring sideroblasts in the marrow, not isolated macrocytosis. Chronic pancreatitis can cause mild B12 malabsorption by impairing pancreatic protease release of B12 from haptocorrin, but would not produce this degree of macrocytosis with normal B12 levels."
  },
  {
    num: 94,
    stem: "A 29-year-old woman at 8 weeks' gestation presents for preconception counselling. Her first child was born with spina bifida. She is a non-smoker, consumes a balanced diet, and takes no medications. Genetic testing reveals she is homozygous for the MTHFR 677C→T polymorphism. Which of the following management strategies is most appropriate to minimise the risk of neural tube defect in a subsequent pregnancy?",
    options: {
      A: "Reassure her that dietary folate alone is sufficient, as the MTHFR polymorphism does not increase NTD risk.",
      B: "Recommend folic acid 400 μg daily from conception until 12 weeks' gestation, which is the standard dose for all pregnant women.",
      C: "Advise folic acid 5 mg daily from before conception through the first 12 weeks, and consider continuation throughout pregnancy.",
      D: "Prescribe vitamin B12 1000 μg intramuscularly monthly, as the MTHFR polymorphism impairs B12 absorption and causes NTDs via methylmalonic acid accumulation.",
      E: "Recommend high-dose methotrexate therapy to suppress abnormal folate metabolism associated with the MTHFR variant."
    },
    answer: "C",
    explanation: "Hoffbrand describes the strong inverse linear relationship between maternal plasma and red cell folate levels and the prevalence of neural tube defects (NTDs), with no apparent threshold (Fig. 5.12). The MTHFR 677C→T polymorphism reduces the conversion of 5,10-methylene THF to methylTHF, resulting in higher serum homocysteine and lower serum and red cell folate levels compared with controls; the incidence of this polymorphism is higher in foetuses with NTD than in controls. While all women are recommended to take at least 400 μg/day before conception and in the first trimester, those at high risk—including women with a previous NTD pregnancy, diabetes, sickle cell disease, or the MTHFR polymorphism—should receive 5 mg daily (Hoffbrand p. 63). The UK guideline recommends 5 mg throughout pregnancy for high-risk women. Hoffbrand notes that all women who may become pregnant should take the larger dose to achieve maximal benefit. Vitamin B12 fortification has not been proven to reduce NTD incidence. Methotrexate is an antifolate drug and is absolutely contraindicated in pregnancy."
  },
  {
    num: 95,
    stem: "A 72-year-old man with type 2 diabetes mellitus treated with metformin for 8 years and a proton pump inhibitor for gastro-oesophageal reflux disease presents with a 3-month history of progressive unsteadiness, numbness in his feet, and impaired vibration sense. His full blood count shows haemoglobin 128 g/L, MCV 104 fL, white cell count 5.5 × 10⁹/L, and platelets 220 × 10⁹/L. Serum vitamin B12 is 145 ng/L (borderline low-normal). Serum methylmalonic acid is 1850 nmol/L (elevated) and homocysteine is 28 μmol/L (elevated). Which of the following is the most accurate interpretation of these findings?",
    options: {
      A: "The normal haemoglobin and macrocytosis exclude B12 deficiency; the neurological symptoms are likely diabetic peripheral neuropathy.",
      B: "The patient has functional vitamin B12 deficiency with tissue-level depletion causing neuropathy despite a serum B12 in the low-normal range.",
      C: "The elevated homocysteine is due to metformin-induced folate deficiency, and folic acid 5 mg daily is the only therapy required.",
      D: "The borderline serum B12 is artefactual due to metformin interfering with the laboratory assay, and no supplementation is needed.",
      E: "The mild macrocytosis reflects alcohol-related liver disease, and the neurological findings are consistent with cervical spondylosis."
    },
    answer: "B",
    explanation: "Hoffbrand classifies metformin and prolonged PPI use as causes of mild vitamin B12 deficiency that are usually insufficient to cause anaemia or neuropathy, but in combination and over many years can lead to clinically significant functional deficiency (Table 5.3 and p. 56). Serum B12 measures total B12 bound largely to haptocorrin, which does not transfer to tissues; therefore, serum B12 can be in the low-normal range while intracellular B12 is depleted. The metabolite tests are more sensitive: elevated serum methylmalonic acid is specific for B12 deficiency, and elevated homocysteine occurs in both B12 and folate deficiency. The combination of neurological symptoms, mild macrocytosis (MCV 104 fL), borderline serum B12, and unequivocally elevated MMA and homocysteine confirms functional B12 deficiency at the tissue level. Diabetic neuropathy would not explain the elevated MMA or the macrocytosis. Metformin can cause B12 malabsorption by interfering with ileal uptake but does not typically cause isolated folate deficiency. The appropriate management is to start vitamin B12 replacement, initially parenteral if neurological signs are present."
  },
  {
    num: 96,
    stem: "Regarding the biochemical basis of megaloblastic anaemia, which of the following statements most accurately describes the 'methylfolate trap' and its consequences for DNA synthesis?",
    options: {
      A: "In B12 deficiency, methylTHF accumulates intracellularly because methionine synthase cannot convert it to THF; the trapped methylTHF cannot be polyglutamated, preventing regeneration of 5,10-methylene THF polyglutamate required for dTMP synthesis.",
      B: "B12 deficiency directly inhibits dihydrofolate reductase, blocking the conversion of dihydrofolate to tetrahydrofolate and starving all folate-dependent reactions.",
      C: "The methylfolate trap results from excessive conversion of THF to methylTHF by methylene tetrahydrofolate reductase, which is irreversibly upregulated in B12 deficiency.",
      D: "Folate polyglutamates are formed in plasma and enter cells via the reduced folate carrier; B12 deficiency prevents their transport across the cell membrane.",
      E: "In B12 deficiency, methylmalonyl-CoA accumulates and directly inhibits thymidylate synthase, blocking dTMP formation independently of folate metabolism."
    },
    answer: "A",
    explanation: "Hoffbrand describes the 'methylfolate trap' as the critical mechanism linking B12 deficiency to megaloblastic anaemia (Fig. 5.6). Dietary folates are all converted to methylTHF (a monoglutamate) in the intestine and enter cells in this form. Inside cells, B12-dependent methionine synthase demethylates methylTHF to THF. THF—but not methylTHF—is the substrate for folate polyglutamate synthesis. The polyglutamates are the intracellular folate coenzymes. In B12 deficiency, methylTHF accumulates because it cannot be converted to THF, so polyglutamate synthesis is blocked. This starves the cell of 5,10-methylene THF polyglutamate, the coenzyme required for thymidylate synthase to convert dUMP to dTMP. The resulting dTTP starvation prolongs S phase, causes failure of new double-stranded DNA formation, and leads to apoptotic cell death, producing the characteristic nuclear-cytoplasmic asynchrony of megaloblasts (Hoffbrand pp. 54–55)."
  },
  {
    num: 97,
    stem: "A 45-year-old dental surgeon who works in a practice using nitrous oxide sedation complains of progressive paraesthesia in her hands, difficulty with balance, and memory impairment over the past year. Full blood count is normal except for an MCV of 102 fL. Serum vitamin B12 is 280 ng/L. Bone marrow biopsy shows mild megaloblastic changes. Which of the following best describes the mechanism by which nitrous oxide produces these haematological and neurological abnormalities?",
    options: {
      A: "Nitrous oxide induces hepatic cytochrome P450 enzymes that accelerate degradation of transcobalamin, reducing B12 delivery to marrow and neural tissue.",
      B: "Nitrous oxide oxidises the reduced cobalt atom of methylcobalamin, irreversibly inactivating the B12 coenzyme and thereby blocking methionine synthase and myelin methylation.",
      C: "Nitrous oxide directly inhibits dihydrofolate reductase, mimicking the effect of methotrexate and causing folate-deficient megaloblastosis.",
      D: "Nitrous oxide displaces oxygen from haemoglobin, causing chronic tissue hypoxia that impairs erythroid maturation and causes peripheral neuropathy.",
      E: "Nitrous oxide binds to the intrinsic factor-B12 receptor (cubam) in the ileum, blocking B12 absorption and causing deficiency over months."
    },
    answer: "B",
    explanation: "Hoffbrand states that nitrous oxide (N2O) anaesthesia causes rapid inactivation of body B12 by oxidising the reduced cobalt atom of methylcobalamin (p. 63). This inactivates the methylcobalamin cofactor for methionine synthase. Megaloblastic marrow changes occur within several days of N2O administration and can cause pancytopenia. Chronic exposure, as experienced by dentists and anaesthetists, has been associated with neurological damage resembling B12 deficiency neuropathy, likely related to accumulation of S-adenosyl homocysteine and reduced S-adenosyl methionine, resulting in defective methylation of myelin and other substrates. Unlike dietary deficiency, N2O causes functional inactivation of existing B12 stores, so serum B12 levels may remain normal while tissue function is impaired. This explains the dissociation between a normal serum B12 and clinical evidence of deficiency. The other options describe incorrect mechanisms: N2O does not inhibit DHFR, displace oxygen sufficiently to cause megaloblastosis, or block the ileal receptor."
  },
  {
    num: 98,
    stem: "Which of the following best distinguishes the haematological and biochemical profile of severe vitamin B12 deficiency from that of severe folate deficiency?",
    options: {
      A: "B12 deficiency causes pancytopenia and hypersegmented neutrophils; folate deficiency causes isolated anaemia with normal white cell and platelet counts.",
      B: "Both deficiencies produce identical haematological pictures, but B12 deficiency is distinguished by elevated serum methylmalonic acid and the risk of subacute combined degeneration of the cord.",
      C: "B12 deficiency produces microcytic anaemia with target cells; folate deficiency produces macrocytic anaemia with spherocytes.",
      D: "Serum homocysteine is elevated only in B12 deficiency; it remains normal in folate deficiency because folate is not involved in homocysteine metabolism.",
      E: "Red cell folate is low in both deficiencies, but serum folate is characteristically normal or elevated in B12 deficiency because B12 is required for intestinal folate absorption."
    },
    answer: "B",
    explanation: "Hoffbrand emphasizes that the peripheral blood and bone marrow appearances in B12 and folate deficiency are morphologically indistinguishable: both show macrocytic anaemia with oval macrocytes, hypersegmented neutrophils, pancytopenia in severe cases, and a hypercellular marrow with megaloblastic erythropoiesis (pp. 60–61). The critical distinctions are biochemical and clinical. Elevated serum methylmalonic acid is specific for B12 deficiency because methylmalonyl-CoA mutase requires adenosylcobalamin; folate deficiency does not affect this pathway. Subacute combined degeneration of the spinal cord and peripheral nerves occurs only in B12 deficiency, as it relates to impaired methylation reactions in neural tissue (p. 58). Homocysteine is elevated in both deficiencies because both B12 and folate are required for methionine synthase (Fig. 5.3). Red cell folate falls in both deficiencies, but serum folate tends to be normal or even raised in B12 deficiency because methylTHF cannot be converted to other folates and leaks back into plasma (Table 5.7)."
  },
  {
    num: 99,
    stem: "Which of the following statements most accurately describes the physiological and diagnostic significance of red cell folate compared with serum folate in the assessment of folate status?",
    options: {
      A: "Red cell folate is a less reliable indicator than serum folate because it reflects only the most recent 24 hours of dietary intake and is easily corrected by a single nutritious meal.",
      B: "Red cell folate reflects tissue folate stores over the preceding 2–3 weeks, whereas serum folate reflects stores over the preceding 2–3 months; thus serum folate is the preferred test for chronic deficiency.",
      C: "Red cell folate reflects tissue folate stores over the lifespan of the erythrocyte (approximately 4 months), making it a more accurate guide to tissue status than the labile serum folate, which can normalise after one or two nutritious meals.",
      D: "Red cell folate is exclusively a measure of B12 status, and its reduction in B12 deficiency is an artefact of the methylfolate trap rather than true folate depletion.",
      E: "Serum folate is more specific for megaloblastic anaemia than red cell folate because serum folate directly correlates with the intracellular polyglutamate pool required for DNA synthesis."
    },
    answer: "C",
    explanation: "Hoffbrand states that serum folate is more labile than red cell folate, and even one or two nutritious meals in a hospitalised patient admitted with severe deficiency may normalise serum folate (p. 61). However, red cell folate will remain low for some time because it reflects the folate content of red cells during their formation, i.e., over the preceding approximately 4 months (the lifespan of the erythrocyte). In the absence of B12 deficiency, red cell folate is a more accurate guide to tissue folate status than serum folate. In B12 deficiency, red cell folate also falls because the methylfolate trap prevents formation of folate polyglutamates in all tissues, including erythroid precursors. Therefore, red cell folate is low in both folate deficiency and B12 deficiency, but serum folate is low only in folate deficiency (or may be normal/raised in B12 deficiency, as noted in Table 5.7). This makes the combination of serum B12, serum folate, and red cell folate assays essential for distinguishing the two deficiencies."
  },
  {
    num: 100,
    stem: "A 52-year-old patient with rheumatoid arthritis is started on methotrexate 15 mg weekly. After 3 months, the full blood count shows haemoglobin 102 g/L, MCV 112 fL, and white cell count 3.8 × 10⁹/L. Which of the following best explains the mechanism of methotrexate-induced megaloblastic change and the most appropriate therapeutic intervention?",
    options: {
      A: "Methotrexate is a pyrimidine antagonist that directly inhibits thymidylate synthase, and the toxicity is reversed by high-dose folic acid supplementation.",
      B: "Methotrexate is a competitive inhibitor of dihydrofolate reductase, blocking regeneration of THF from DHF; the toxicity can be reversed by folinic acid (5-formyl THF) without abolishing anti-inflammatory efficacy.",
      C: "Methotrexate inhibits the ileal cubam receptor, preventing B12 absorption; parenteral hydroxocobalamin is required to correct the macrocytosis.",
      D: "Methotrexate alkylates DNA directly at the dUMP binding site, causing irreversible base-pair substitutions that produce megaloblastic morphology.",
      E: "Methotrexate induces hepatic inactivation of transcobalamin II, reducing cellular B12 uptake; the appropriate antidote is intramuscular B12."
    },
    answer: "B",
    explanation: "Hoffbrand describes methotrexate as a potent inhibitor of dihydrofolate reductase (Fig. 5.6). During the synthesis of dTMP, the folate polyglutamate coenzyme becomes oxidised from THF to DHF. Dihydrofolate reductase regenerates active THF from DHF. Methotrexate blocks this enzyme, inhibiting all folate-mediated biochemical reactions including DNA synthesis (p. 54). This is therapeutically useful in malignant disease and inflammatory conditions because rapidly dividing cells are preferentially affected. The weaker antagonist pyrimethamine is used against toxoplasmosis, while trimethoprim selectively inhibits bacterial DHF reductase. Toxicity caused by methotrexate or pyrimethamine may be reversed by the reduced folate folinic acid (5-formyl THF). Hoffbrand notes that in the protocols used, this reversal does not eliminate the effectiveness of methotrexate when used in anti-cancer chemotherapy, and in rheumatoid arthritis, folic acid or folinic acid supplementation is commonly co-administered to reduce toxicity without abolishing anti-inflammatory efficacy. Options A, C, D, and E all describe incorrect mechanisms."
  }
];
