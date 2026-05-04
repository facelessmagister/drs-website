export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 21,
    stem: "A 28-year-old woman with menorrhagia presents with iron deficiency anaemia (haemoglobin 85 g/L, MCV 74 fL, serum ferritin 4 μg/L). She is started on oral ferrous sulphate 200 mg three times daily. After 4 weeks, her haemoglobin has risen only from 85 to 91 g/L and she reports severe constipation and abdominal pain. Her compliance is good and she takes the tablets on an empty stomach. Which of the following is the most appropriate modification to her regimen, taking into account current understanding of iron absorption physiology?",
    options: {
      A: "Switch immediately to intravenous ferric carboxymaltose because she has demonstrated failure of response to oral iron.",
      B: "Reduce to once-daily dosing taken with food, and consider alternate-day dosing once haemoglobin improves, to mitigate the hepcidin-mediated blockade of duodenal iron absorption.",
      C: "Continue the three-times-daily regimen but add a proton pump inhibitor to reduce gastric irritation.",
      D: "Switch to a slow-release iron preparation to improve gastrointestinal tolerability.",
      E: "Add recombinant human erythropoietin injections to overcome the inadequate marrow response."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 states that once-daily doses are now advocated because plasma hepcidin rises within hours of a single oral iron dose, blocking further iron absorption. For those with more severe anaemia, daily doses are needed, but if side effects occur these can be reduced by giving iron with food or by using a preparation with a lower iron content. Slow-release preparations should not be used. There is no indication of malabsorption or failure of response; the modest haemoglobin rise at 4 weeks is consistent with ongoing therapy in severe deficiency, and the gastrointestinal side effects warrant dose modification rather than parenteral escalation. Erythropoietin is not indicated in uncomplicated iron deficiency anaemia."
  },
  {
    num: 22,
    stem: "A 55-year-old man with rheumatoid arthritis presents with fatigue. His haemoglobin is 102 g/L, MCV 82 fL, serum ferritin 180 μg/L, serum iron 8 μmol/L, and TIBC 35 μmol/L. He has no evidence of gastrointestinal bleeding. Which of the following best explains the pathophysiological basis for his anaemia and guides rational therapy?",
    options: {
      A: "He has coexistent iron deficiency anaemia; the normal MCV excludes anaemia of chronic disease, and he should be started on oral iron.",
      B: "He has anaemia of chronic disease; IL-6-driven hepcidin elevation causes iron retention in macrophages, reduced intestinal iron absorption, and an inadequate erythropoietin response, and iron therapy alone is unlikely to be effective.",
      C: "He has sideroblastic anaemia due to chronic inflammation; pyridoxine supplementation will correct the defect in haem synthesis.",
      D: "He has thalassaemia trait; the elevated ferritin reflects iron overload from ineffective erythropoiesis.",
      E: "He has pure red cell aplasia secondary to methotrexate therapy; a bone marrow biopsy is urgently required."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 describes the anaemia of chronic disease (inflammation) as characterised by normochromic, normocytic or mildly hypochromic indices, reduced serum iron and TIBC, and normal or raised serum ferritin. The pathogenesis involves raised plasma hepcidin stimulated by IL-6 and other cytokines, which blocks intestinal iron absorption and causes iron retention in reticuloendothelial cells. There is also an inadequate erythropoietin response and shortened red cell lifespan. The anaemia is corrected by successful treatment of the underlying disease and does not respond to iron therapy alone. The normal MCV and elevated ferritin effectively exclude iron deficiency. Sideroblastic anaemia would show ring sideroblasts in the marrow and usually raised serum iron. Thalassaemia trait would show microcytosis with a low MCV and raised Hb A2 in the β form."
  },
  {
    num: 23,
    stem: "A 45-year-old man who works in a battery recycling plant presents with abdominal colic, irritability, and fatigue. His haemoglobin is 105 g/L, MCV 68 fL, MCH 20 pg. Serum iron is 20 μmol/L, serum ferritin 320 μg/L, and TIBC 48 μmol/L. The blood film shows basophilic stippling, and the bone marrow reveals ring sideroblasts. Which of the following is the most likely diagnosis?",
    options: {
      A: "β-thalassaemia trait",
      B: "Iron deficiency anaemia",
      C: "Lead poisoning",
      D: "Hereditary haemochromatosis",
      E: "Anaemia of chronic disease"
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 3 states that lead poisoning inhibits both haem and globin synthesis and interferes with RNA breakdown by inhibiting pyrimidine 5′ nucleotidase, causing basophilic stippling on the blood film. The bone marrow may show ring sideroblasts, and free erythrocyte protoporphyrin is raised. The normal serum iron and elevated ferritin exclude iron deficiency. β-thalassaemia trait would show raised Hb A2 and normal or low ferritin, not ring sideroblasts or basophilic stippling. Hereditary haemochromatosis causes iron overload with high transferrin saturation, not microcytic anaemia with ring sideroblasts. Anaemia of chronic disease typically has reduced serum iron and TIBC with normal or raised ferritin, but does not cause ring sideroblasts or basophilic stippling. The occupational history strongly supports lead exposure."
  },
  {
    num: 24,
    stem: "A 35-year-old woman presents during her second trimester of pregnancy with pallor. Her haemoglobin is 98 g/L, MCV 78 fL, MCH 24 pg. Serum ferritin is 18 μg/L, serum iron 7 μmol/L, TIBC 65 μmol/L. She has been taking a standard prenatal multivitamin without additional iron. Which of the following best explains the predominant physiological mechanism underlying her anaemia and the rationale for intensified iron supplementation?",
    options: {
      A: "She has physiological dilutional anaemia of pregnancy; the low ferritin is incidental and no iron supplementation is required beyond the prenatal vitamin.",
      B: "She has iron deficiency anaemia caused by expansion of maternal red cell mass, transplacental iron transfer to the fetus, and ongoing basal losses, all occurring against a background of high physiological iron requirements that outstrip dietary absorption.",
      C: "She has folate deficiency megaloblastic anaemia masked by concurrent iron deficiency; the MCV is falsely low and a macrocytic population will be revealed once iron is replete.",
      D: "She has anaemia of chronic disease secondary to the physiological inflammation of pregnancy; serum hepcidin is elevated, blocking iron absorption, and parenteral iron is contraindicated.",
      E: "She has β-thalassaemia trait; the pregnancy has unmasked a previously compensated microcytosis, and iron supplementation is dangerous because it could cause iron overload."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 states that in pregnancy, increased iron is needed for an increased maternal red cell mass (approximately 600 mg), transfer of 300 mg of iron to the fetus, and because of blood loss at delivery. The estimated daily iron requirement in pregnancy is 1.5–3 mg/day, substantially higher than in the non-pregnant state. Iron deficiency is the most common cause of anaemia in pregnancy. The low ferritin, low serum iron, raised TIBC, and microcytic indices are all consistent with iron deficiency. Physiological anaemia of pregnancy is typically normocytic and mild; the markedly reduced ferritin and microcytosis indicate true iron deficiency requiring supplementation. There is no evidence of megaloblastic anaemia or thalassaemia trait; Hb electrophoresis would be normal. Parenteral iron may be used in pregnancy but is avoided in the first trimester."
  },
  {
    num: 25,
    stem: "A 6-year-old boy of Mediterranean origin is found to have a hypochromic microcytic anaemia during a routine health screen. His haemoglobin is 105 g/L, MCV 65 fL, MCH 19 pg, red cell count 6.2 × 10^12/L. Serum ferritin is 45 μg/L, serum iron is 22 μmol/L, and TIBC is 48 μmol/L. Haemoglobin electrophoresis shows Hb A2 of 2.1% and Hb F of 1.8%. His parents are first cousins. Which of the following is the most likely diagnosis and the key distinguishing laboratory feature?",
    options: {
      A: "β-thalassaemia trait; the diagnosis is supported by a markedly elevated Hb A2 level above 3.5%.",
      B: "Iron deficiency anaemia; the low MCV and family history are consistent with dietary iron deficiency common in this age group.",
      C: "α-thalassaemia trait; there is no abnormality on simple haemoglobin studies, and the diagnosis is supported by a red cell count >5.5 × 10^12/L.",
      D: "Sideroblastic anaemia; ring sideroblasts would be present in the bone marrow and serum ferritin would be elevated.",
      E: "IRIDA; the serum iron is low with <5% saturation, and there is no response to oral iron."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 3 explains that α-thalassaemia trait produces no abnormality on simple haemoglobin studies, so the diagnosis is usually made by exclusion of other causes of hypochromic red cells and by the presence of a red cell count >5.5 × 10^12/L. In this case, the Hb A2 is normal at 2.1%, which effectively excludes β-thalassaemia trait (characterised by Hb A2 >3.5%). The normal serum iron and ferritin exclude iron deficiency. The family history of consanguinity supports an autosomal recessive or codominant genetic condition such as thalassaemia. Sideroblastic anaemia would show ring sideroblasts and usually elevated serum iron. IRIDA presents with very low serum iron and <5% saturation, neither of which is present here."
  },
  {
    num: 26,
    stem: "Regarding the role of hepcidin in iron homeostasis, which of the following statements most accurately describes the signalling pathway that leads to increased hepcidin synthesis in iron overload?",
    options: {
      A: "In iron overload, reduced diferric transferrin causes degradation of transferrin receptor 2 (TFR2), leading to diversion of HFE to bind TFR1 and suppression of the BMP-SMAD signalling complex.",
      B: "In iron overload, diferric transferrin stimulates liver sinusoidal cells to secrete bone morphogenetic proteins (BMPs), stabilises TFR2 on hepatocytes, and promotes assembly of a BMP receptor complex with HFE, hemojuvelin, and TFR2, which signals via SMADs to stimulate hepcidin transcription.",
      C: "In iron overload, matriptase 2 (TMPRSS6) is activated and cleaves hemojuvelin from the hepatocyte membrane, thereby suppressing hepcidin synthesis and allowing increased iron absorption.",
      D: "In iron overload, the iron regulatory protein (IRP) binds to iron response elements (IREs) on hepcidin mRNA, stabilising the transcript and increasing hepcidin translation.",
      E: "In iron overload, intracellular histone deacetylase 3 is activated by low iron levels and suppresses transcription of the hepcidin gene."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 (Fig. 3.4b) describes that in iron overload, diferric transferrin stimulates liver sinusoidal cells to secrete BMPs (especially BMP6), binds to and stabilises TFR2 on the hepatic cell membrane, and prevents HFE from being deviated to TFR1. The BMPs bind to BMP receptors and form a signalling complex with HFE, hemojuvelin (HJV), and TFR2, which stimulates hepcidin synthesis via SMAD proteins. Option A describes the iron deficiency state, not overload. Option C describes the action of matriptase 2 in iron deficiency. Option D incorrectly applies the IRP/IRE mechanism to hepcidin mRNA; IRP/IRE regulates ferritin, TFR1, ALAS, and DMT1, not hepcidin. Option E describes an iron deficiency mechanism."
  },
  {
    num: 27,
    stem: "Which of the following best describes the molecular mechanism by which intracellular iron status coordinately regulates the synthesis of ferritin, transferrin receptor 1 (TFR1), and δ-aminolaevulinic acid synthase (ALAS)?",
    options: {
      A: "Iron deficiency increases binding of iron regulatory proteins (IRPs) to iron response elements (IREs) in the 5′ untranslated region of TFR1 and DMT1 mRNA, blocking translation and reducing protein synthesis.",
      B: "Iron deficiency increases IRP binding to IREs in the 3′ untranslated region of TFR1 and DMT1 mRNA, stabilising the mRNA and increasing translation; conversely, IRP binding to IREs in the 5′ untranslated region of ferritin and ALAS mRNA blocks translation.",
      C: "Iron overload increases IRP binding to all IREs regardless of location, universally suppressing translation of ferritin, TFR1, ALAS, and DMT1.",
      D: "IRPs exist only in a single active state and bind IREs constitutively; iron status regulates protein synthesis by altering mRNA transcription rates rather than translation.",
      E: "The IRE-IRP system operates exclusively in erythroblasts and has no role in regulating duodenal enterocyte iron transport proteins."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 (Fig. 3.3) explains that IRPs bind to stem-loop structures called iron response elements (IREs) on specific mRNA molecules. IRP binding to IREs within the 3′ untranslated region of TFR1 and DMT1 mRNA leads to stabilisation of the mRNA and increased protein synthesis, whereas IRP binding to IREs within the 5′ untranslated region of ferritin and ALAS mRNA reduces translation. In iron deficiency, IRP binding to IREs is increased; in iron overload, IRPs bind iron and exhibit reduced affinity for IREs. This coordinates synthesis of TfR, ALAS, DMT1, and ferritin to physiological requirements. Option A is incorrect because it reverses the location effect for TFR1/DMT1. Option C is incorrect because iron overload reduces, not increases, IRP binding. Option D is incorrect because IRPs exist in two states depending on iron levels. Option E is incorrect because DMT1 is regulated by this system in duodenal enterocytes."
  },
  {
    num: 28,
    stem: "Regarding the absorption of dietary iron across the duodenal enterocyte, which of the following statements most accurately describes the sequence of events and their physiological regulation?",
    options: {
      A: "Dietary ferric iron (Fe3+) is reduced to ferrous iron (Fe2+) by hephaestin at the basolateral membrane, imported by ferroportin, and oxidised back to Fe3+ by ferrireductase before binding to transferrin in the portal plasma.",
      B: "Haem iron is absorbed via DMT1 after breakdown to inorganic iron in the gut lumen; ferroportin exports iron into the enterocyte cytoplasm, and hepcidin stimulates ferroportin expression to increase absorption.",
      C: "Dietary ferric iron is reduced to ferrous iron by ferrireductase at the apical membrane, imported via DMT1, exported across the basolateral membrane by ferroportin, oxidised by hephaestin, and then bound to transferrin; hepcidin inhibits absorption by promoting ferroportin degradation.",
      D: "Inorganic iron is absorbed more efficiently in the ferric form because the acidic gastric environment maintains Fe3+ solubility; DMT1 transports ferric iron directly into the enterocyte.",
      E: "Ferroportin is exclusively expressed in duodenal enterocytes and has no role in iron export from macrophages, hepatocytes, or other tissues."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 3 (Fig. 3.5) describes that dietary ferric (Fe3+) iron is reduced to Fe2+ by ferrireductase at the enterocyte apical surface. Its entry into the enterocyte is through the divalent cation binder DMT1. Export into portal plasma is controlled by ferroportin at the basolateral surface. The iron is oxidised by hephaestin (ferrioxidase) before binding to transferrin in plasma. The amount of iron absorbed is regulated according to the body's needs by changing levels of DMT1 (via the IRP/IRE mechanism) and ferroportin (via hepcidin). Hepcidin inhibits iron export by promoting lysosomal degradation of ferroportin. Option A reverses the roles of ferrireductase and hephaestin. Option B is incorrect because haem is absorbed through a distinct receptor and broken down inside the enterocyte, not via DMT1. Option D is incorrect because absorption is favoured in the ferrous form, not ferric. Option E is incorrect because ferroportin is present in liver, heart, kidney, brain, and placenta."
  },
  {
    num: 29,
    stem: "A 68-year-old woman with rheumatoid arthritis is found to have a mild anaemia (haemoglobin 108 g/L, MCV 80 fL). Her serum ferritin is 220 μg/L, serum iron is 10 μmol/L, and TIBC is 32 μmol/L. Which of the following laboratory profiles, if also present, would most strongly support the diagnosis of coexistent iron deficiency superimposed on her anaemia of chronic disease?",
    options: {
      A: "Serum hepcidin level of 85 ng/mL (markedly elevated) and soluble transferrin receptor (sTfR) level of 1.8 mg/L (normal).",
      B: "Serum hepcidin level of 12 ng/mL (low-normal) and soluble transferrin receptor level of 4.5 mg/L (elevated).",
      C: "Haemoglobin electrophoresis showing Hb A2 5.2% and Hb F 2.1%.",
      D: "Bone marrow examination showing abundant haemosiderin in macrophages and normal siderotic granules in erythroblasts.",
      E: "Serum ferritin of 450 μg/L and transferrin saturation of 35%."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 states that in the anaemia of chronic disease, serum ferritin and hepcidin levels are normal or raised. Diagnosis of coexistent iron deficiency may be difficult; if serum ferritin is <100 μg/L or saturation of TIBC <20%, coexistent iron deficiency is suspected. A low or low-normal hepcidin level in the setting of inflammation is paradoxical and suggests iron deficiency, because inflammation normally drives hepcidin elevation via IL-6. Elevated soluble transferrin receptor (sTfR) is also characteristic of iron deficiency. Option A with elevated hepcidin and normal sTfR is consistent with uncomplicated anaemia of chronic disease. Option C suggests β-thalassaemia trait. Option D describes normal marrow iron stores, excluding iron deficiency. Option E with high ferritin and normal saturation is inconsistent with iron deficiency."
  },
  {
    num: 30,
    stem: "Which of the following best explains the disparate effects of the hereditary X-linked sideroblastic anaemia caused by ALAS mutations and the acquired refractory anaemia with ring sideroblasts associated with SF3B1 mutations?",
    options: {
      A: "Both conditions share an identical pathophysiology involving defective protoporphyrin synthesis, and both respond reliably to high-dose pyridoxine supplementation.",
      B: "ALAS mutations cause a defect in the first step of haem synthesis (condensation of glycine and succinyl-CoA) and often respond to pyridoxal phosphate supplementation; SF3B1 mutations cause aberrant mRNA splicing of genes involved in iron metabolism, leading to mitochondrial iron accumulation without a primary defect in the haem synthetic pathway.",
      C: "SF3B1 mutations are restricted to the X chromosome and transmitted in a recessive pattern, whereas ALAS mutations occur as somatic mutations in myelodysplasia.",
      D: "ALAS mutations cause accumulation of free iron in the cytoplasm rather than mitochondria; SF3B1 mutations cause defective globin synthesis leading to hypochromic cells.",
      E: "Both conditions are caused by lead toxicity and can be reversed by chelation therapy."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 3 describes sideroblastic anaemia as defined by the presence of ring sideroblasts, with the common link being a defect in haem synthesis. In hereditary X-linked sideroblastic anaemia, mutations occur in the ALAS gene, which codes for δ-aminolaevulinic acid synthase — the enzyme catalysing the first step of haem synthesis with pyridoxal phosphate as a coenzyme. Some patients respond to pyridoxine therapy. Acquired refractory anaemia with ring sideroblasts is a subtype of myelodysplasia associated with SF3B1 mutations; as few as 5% ring sideroblasts may be present. SF3B1 is a spliceosomal factor, and its mutations cause aberrant mRNA splicing of genes involved in iron metabolism and mitochondrial function, leading to mitochondrial iron accumulation and ring sideroblast formation without a primary enzyme defect in the haem synthetic pathway. Options A, C, D, and E all contain factual inaccuracies."
  }
];
