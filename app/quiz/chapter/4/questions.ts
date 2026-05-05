export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 31,
    stem: "A 48-year-old man of Northern European ancestry presents with fatigue, loss of libido, and arthralgia affecting the second and third metacarpophalangeal joints of both hands. Physical examination reveals slate-grey skin pigmentation and mild hepatomegaly. Laboratory studies show serum ferritin 2,400 μg/L and transferrin saturation 92%. Genetic testing confirms homozygosity for the HFE C282Y mutation. Which of the following is the most appropriate initial management strategy?",
    options: {
      A: "Initiate oral deferasirox 20 mg/kg daily because serum ferritin exceeds 1,000 μg/L and organ dysfunction is present.",
      B: "Initiate regular venesection at 1- to 2-week intervals, with monitoring of serum ferritin, aiming to restore ferritin to <100 μg/L.",
      C: "Start subcutaneous deferoxamine infusion because cardiac T2* MRI has not yet been performed and cardiac siderosis must be assumed.",
      D: "Prescribe high-dose pyridoxine supplementation to address the presumed sideroblastic component of his anaemia.",
      E: "Order joint aspiration and intra-articular corticosteroid injection for the metacarpophalangeal arthropathy before addressing iron overload."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 states that the treatment of hereditary haemochromatosis is regular venesection, initially at 1–2-week intervals, each unit removing 200–250 mg of iron. Venesection is monitored by serum ferritin with the aim of restoring this to normal (<100 μg/L). Organ function may improve and liver fibrosis may resolve, but the arthropathy — which is due to calcium pyrophosphate deposition and not related to the degree of iron overload — does not respond to iron removal. Iron chelation therapy (deferasirox, deferiprone, deferoxamine) is indicated for transfusional iron overload, not for hereditary haemochromatosis, where venesection is the first-line treatment. Pyridoxine is used for sideroblastic anaemia, which is not present here. Joint injections may provide symptomatic relief but do not treat the underlying disease."
  },
  {
    num: 32,
    stem: "A 19-year-old man is referred with dilated cardiomyopathy, hypogonadism, and diabetes mellitus. His serum ferritin is 5,800 μg/L and transferrin saturation is 98%. Testing for the HFE C282Y mutation is negative. His parents are non-consanguineous. Which of the following genetic defects is most likely responsible for his presentation?",
    options: {
      A: "Homozygous HFE C282Y mutation causing classical type 1 hereditary haemochromatosis with low disease penetrance.",
      B: "Mutation in the hemojuvelin (HJV) gene causing type 2A juvenile haemochromatosis, associated with severe cardiomyopathy and low plasma hepcidin.",
      C: "Ferroportin (SLC11A3) mutation causing type 4a disease with predominant reticuloendothelial iron overload and spared parenchymal cells.",
      D: "Ferritin light chain (FTL) mutation causing hereditary hyperferritinaemia–cataract syndrome without tissue iron deposition.",
      E: "Aceruloplasminaemia causing iron overload with prominent neurological degeneration and basal ganglia calcification."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.2) describes type 2 juvenile haemochromatosis, caused by mutations in hemojuvelin (HJV, type 2A) or hepcidin (HAMP, type 2B), as presenting below the age of 30 years with severe iron overload, cardiomyopathy in children or young adults, and hypogonadism. Arthropathy is characteristically absent. Like HFE-related disease, these rarer forms are associated with low plasma hepcidin. The negative HFE test effectively excludes classical type 1 disease. Ferroportin disease (type 4a) causes reticuloendothelial rather than parenchymal iron overload and does not typically cause severe cardiomyopathy. FTL mutations cause raised serum ferritin with cataracts but no tissue iron overload. Aceruloplasminaemia is a rare cause of iron loading with neurological features, but juvenile haemochromatosis is far more consistent with the age and phenotype."
  },
  {
    num: 33,
    stem: "A 16-year-old girl with β-thalassaemia major has been receiving regular blood transfusions since infancy. Her serum ferritin is 3,400 μg/L. Cardiac T2* MRI shows 7 ms (normal >20 ms), indicating severe cardiac iron loading, although her left ventricular ejection fraction is currently preserved. She has been adherent to oral deferasirox monotherapy for 18 months. Which of the following is the most appropriate modification to her chelation regimen?",
    options: {
      A: "Continue deferasirox monotherapy because it is the most widely used first-line oral chelator and cardiac T2* will improve with time.",
      B: "Switch to deferiprone monotherapy because it is the most effective of the three chelators at removing cardiac iron and improving cardiac function.",
      C: "Add venesection to the regimen because rapid removal of iron is urgently needed to prevent cardiac failure.",
      D: "Switch to subcutaneous deferoxamine monotherapy because it has the longest clinical experience and is safest in children.",
      E: "Discontinue all chelation and start an iron-restricted diet because her serum ferritin has likely plateaued."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.5) states that deferasirox removes iron primarily from the liver and is the least effective of the three drugs for eliminating cardiac iron. Deferiprone, alone, is the most effective of the three drugs at removing cardiac iron and improving left and right heart function. In a patient with severe cardiac iron loading (T2* 7 ms) despite deferasirox, switching to deferiprone — or combining deferiprone with deferoxamine — is the most appropriate strategy. Venesection is contraindicated in transfusion-dependent thalassaemia because it would worsen the underlying severe anaemia. Deferoxamine monotherapy is difficult to administer and less effective than deferiprone for cardiac iron. Discontinuing chelation would be catastrophic given the documented severe cardiac iron burden."
  },
  {
    num: 34,
    stem: "A 62-year-old woman with myelodysplastic neoplasia and transfusion-dependent anaemia has received 12 units of packed red cells over the past 10 months. Her serum ferritin is 1,800 μg/L. She has mild chronic kidney disease (eGFR 48 mL/min/1.73 m²) and well-controlled type 2 diabetes mellitus. Which of the following is the most appropriate next step in managing her iron status?",
    options: {
      A: "Start oral deferasirox immediately because serum ferritin exceeds 1,000 μg/L and exceeds the threshold for chelation in transfusion-dependent patients.",
      B: "Obtain hepatic and cardiac T2* MRI to guide the decision to initiate chelation, given the controversy in myelodysplastic neoplasias and her renal impairment.",
      C: "Defer chelation until serum ferritin exceeds 3,000 μg/L, as iron overload in myelodysplastic neoplasia is slower to develop than in thalassaemia major.",
      D: "Start oral deferiprone because it is not associated with renal toxicity and weekly blood count monitoring is unnecessary in this low-risk patient.",
      E: "Initiate regular venesection because it is the most effective method of iron removal and avoids the side effects of chelators."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 explicitly states that in myelodysplastic neoplasias, there is controversy about when to initiate chelation, and hepatic and cardiac T2* MRI may help guide this decision. Deferasirox can cause a rise in serum creatinine, making it potentially problematic in a patient with pre-existing renal impairment (eGFR 48). Deferiprone carries a risk of agranulocytosis (approximately 1%) and requires weekly blood count monitoring for the first 6 months, fortnightly for the next 6 months, and then every 2–4 weeks — this is mandatory regardless of perceived risk. Venesection is inappropriate in a patient with transfusion-dependent anaemia and would exacerbate her cytopenia. Therefore, obtaining accurate organ-specific iron assessment with MRI before committing to a potentially nephrotoxic chelator is the most judicious approach."
  },
  {
    num: 35,
    stem: "A 38-year-old man from sub-Saharan Africa presents with hepatomegaly and mildly elevated serum aminotransferases. His serum ferritin is 1,500 μg/L and transferrin saturation is 72%. He drinks a traditional sorghum beer brewed in iron containers daily. HFE genetic testing is negative. Liver biopsy shows iron deposition predominantly in hepatic parenchymal cells and Kupffer cells. Which of the following best explains the aetiology of his iron overload?",
    options: {
      A: "Homozygous HFE C282Y mutation causing classical hereditary haemochromatosis with low penetrance in this ethnic group.",
      B: "A combination of a genetic defect in iron regulation — possibly in the ferroportin gene — and high dietary iron intake from iron brewing vessels.",
      C: "Chronic hepatitis B infection causing secondary hepatic iron overload through cytokine-mediated hepcidin suppression.",
      D: "Aceruloplasminaemia causing parenchymal iron overload with concurrent neurological symptoms.",
      E: "Non-transfusion-dependent thalassaemia leading to increased intestinal absorption due to elevated plasma erythroferrone."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 describes African iron overload as occurring through a combination of increased iron absorption due to a genetic defect, possibly in the ferroportin gene, and consumption of beverages with a high iron content due to the use of iron brewing or cooking pots. The negative HFE testing excludes classical hereditary haemochromatosis. There is no mention of hepatitis B in the vignette, and hepatitis B does not characteristically cause iron overload through hepcidin suppression. Aceruloplasminaemia would present with neurological features and is exceptionally rare. Non-transfusion-dependent thalassaemia occurs in specific ethnic groups with thalassaemia mutations and would present with anaemia and splenomegaly, not this clinical picture."
  },
  {
    num: 36,
    stem: "Regarding the molecular pathophysiology of HFE-related hereditary haemochromatosis, which of the following statements most accurately describes the signalling defect that links the C282Y mutation to increased intestinal iron absorption?",
    options: {
      A: "The C282Y mutation increases hepatic BMP6 secretion, which drives transcription of the hepcidin gene and upregulates ferroportin expression on enterocytes.",
      B: "The C282Y mutation causes low plasma hepcidin levels, leading to sustained ferroportin expression on enterocytes and macrophages, thereby increasing intestinal iron absorption and macrophage iron release.",
      C: "The C282Y mutation directly increases transcription of the DMT1 gene in duodenal enterocytes, bypassing the hepcidin-ferroportin regulatory axis.",
      D: "The C282Y mutation results in constitutive activation of the iron regulatory protein (IRP) system, causing universal suppression of ferritin and ferroportin translation.",
      E: "The C282Y mutation stimulates synthesis of erythroferrone by erythroblasts, which suppresses hepcidin in response to ineffective erythropoiesis."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 explains that HFE is involved in regulation of hepcidin synthesis. The C282Y mutation causes low plasma levels of hepcidin and so high levels of ferroportin in enterocytes, macrophages, and other cells. Iron absorption and iron release from macrophages are therefore increased. Option A is incorrect because increased BMP6 and hepcidin would suppress, not increase, ferroportin. Option C is incorrect because DMT1 is regulated by the IRP/IRE system and local iron status, not directly by HFE. Option D is incorrect because IRP activation occurs in iron deficiency, not overload, and would suppress, not sustain, ferroportin. Option E describes the mechanism of iron overload in thalassaemia and other ineffective erythropoiesis states, not HFE-related hereditary haemochromatosis."
  },
  {
    num: 37,
    stem: "Regarding the assessment of iron overload, which of the following statements most accurately integrates the comparative utility, limitations, and appropriate clinical application of serum ferritin, T2* MRI, and liver biopsy?",
    options: {
      A: "Serum ferritin is the most accurate test for quantifying cardiac iron burden and should be used as the sole guide to chelation intensity in thalassaemia major.",
      B: "T2* MRI directly measures liver iron concentration in mg/g dry weight and has completely replaced liver biopsy for all diagnostic and prognostic purposes in iron overload.",
      C: "Serum ferritin is an acute phase reactant that correlates poorly with cardiac iron; T2* MRI is the best non-invasive guide to liver and cardiac iron, while liver biopsy remains useful for assessing fibrosis and distinguishing parenchymal from reticuloendothelial iron distribution.",
      D: "Liver biopsy is contraindicated in all patients with iron overload because of bleeding risk, and Ferriscan MRI is now the only acceptable method for liver iron quantification.",
      E: "Non-transferrin-bound iron (NTBI) is widely available, inexpensive, and is the preferred first-line screening test for hereditary haemochromatosis."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 4 (Table 4.3 and Fig. 4.5) states that serum ferritin is the most widely used test to assess iron overload and to monitor treatment, but it is an acute phase reactant and correlates poorly with cardiac iron. T2* MRI is the best non-invasive guide to liver and cardiac iron. Liver biopsy is useful for assessment of both parenchymal and reticuloendothelial iron, allows estimation of fibrosis, and remains valuable despite the availability of MRI. Option A is incorrect because serum ferritin does not accurately reflect cardiac iron and should not be the sole guide. Option B is incorrect because T2* MRI measures relaxation time, not direct mg/g dry weight (Ferriscan does this for liver), and liver biopsy retains specific indications. Option D is incorrect because liver biopsy is not absolutely contraindicated; it is still used when fibrosis assessment or distinction between parenchymal and RE iron is needed. Option E is incorrect because tests for NTBI are not widely available."
  },
  {
    num: 38,
    stem: "Regarding the genetic classification of iron overload disorders, which of the following correctly matches the gene defect with its characteristic pattern of tissue iron distribution and associated clinical features?",
    options: {
      A: "HFE mutations (type 1) cause predominant reticuloendothelial iron loading with sparing of hepatic parenchymal cells.",
      B: "Ferroportin mutations at the hepcidin binding site (type 4b) cause parenchymal iron loading, whereas other ferroportin mutations (type 4a) cause reticuloendothelial iron loading.",
      C: "Hemojuvelin mutations (type 2A) cause isolated Kupffer cell iron overload without hepatic parenchymal involvement or cardiomyopathy.",
      D: "Transferrin receptor 2 mutations (type 3) cause elevated serum ferritin with cataracts but no tissue iron deposition.",
      E: "Ferritin light chain mutations (type 5) cause classical parenchymal iron overload indistinguishable from HFE-related disease on liver biopsy."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.2) states that ferroportin gene mutations (type IV disease) usually cause reticuloendothelial but not parenchymal cell iron overload (type 4a). They do rarely cause parenchymal overload if the mutations in the ferroportin gene are at the hepcidin binding site (type 4b). Option A is incorrect because HFE mutations cause parenchymal iron loading, not RE loading. Option C is incorrect because hemojuvelin mutations cause severe juvenile parenchymal iron overload with cardiomyopathy. Option D is incorrect because transferrin receptor 2 mutations cause parenchymal iron overload similar to HFE disease, not cataracts without iron deposition. Option E is incorrect because ferritin light chain mutations cause raised serum ferritin with cataracts but no other tissue iron overload."
  },
  {
    num: 39,
    stem: "In the pathophysiology of transfusional iron overload in β-thalassaemia major, which of the following mechanisms best explains why intestinal iron absorption remains elevated despite massive tissue iron overload?",
    options: {
      A: "Chronic hypoxia from severe anaemia directly upregulates DMT1 transcription in duodenal enterocytes, bypassing hepcidin-mediated regulation.",
      B: "Ineffective erythropoiesis leads to release of erythroferrone and other proteins from early erythroblasts, which suppress hepatic hepcidin synthesis and thereby increase ferroportin-mediated iron export from enterocytes.",
      C: "Repeated blood transfusion causes direct mucosal damage to the duodenum, resulting in passive paracellular iron absorption independent of transporter-mediated uptake.",
      D: "High serum ferritin levels suppress ferroportin expression on enterocytes, triggering compensatory overexpression of DMT1 and increased iron uptake.",
      E: "Iron overload in thalassaemia major causes secondary mutation of the HFE gene in intestinal crypt cells, resulting in constitutively low hepcidin production."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 states that in β-thalassaemia major and other anaemias with ineffective erythropoiesis, iron absorption from food is increased despite tissue iron overload. This is due to release from early erythroblasts of erythroferrone and of other proteins that inhibit hepcidin synthesis (Fig. 3.4). Low hepcidin leads to increased ferroportin on enterocytes and increased iron absorption. Option A is incorrect because hypoxia does not directly upregulate DMT1 transcription in this context. Option C is incorrect because transfusion does not cause duodenal mucosal damage leading to passive iron absorption. Option D is incorrect because high ferritin would not suppress ferroportin; rather, low hepcidin sustains ferroportin. Option E is incorrect because there is no evidence of somatic HFE mutation in intestinal crypt cells as a mechanism."
  },
  {
    num: 40,
    stem: "Regarding the pharmacology of iron chelation therapy, which of the following statements most accurately describes a key distinguishing characteristic among deferoxamine, deferiprone, and deferasirox?",
    options: {
      A: "All three chelators are orally bioavailable and are eliminated predominantly via urinary excretion, differing only in their side effect profiles.",
      B: "Deferoxamine is a hexadentate chelator given parenterally with both urinary and faecal iron excretion; deferiprone is a bidentate oral chelator excreted predominantly in urine and is the most effective at removing cardiac iron; deferasirox is a tridentate oral chelator excreted in faeces and is the least effective for cardiac iron removal.",
      C: "Deferasirox is the most effective chelator for removing cardiac iron, whereas deferoxamine is preferred for hepatic iron because it can be administered orally.",
      D: "Deferiprone causes retinal toxicity and high-tone deafness, whereas deferoxamine is associated with agranulocytosis and arthropathy.",
      E: "Deferasirox, deferiprone, and deferoxamine share identical iron-chelator stoichiometry (1:1) and differ only in route of administration and molecular weight."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.5) summarises the characteristics of the three chelators. Deferoxamine is a hexadentate chelator (molecular weight 560 Da) with a 1:1 iron-chelator complex, given parenterally, with iron excreted in urine and faeces. Deferiprone is a bidentate chelator (molecular weight 139 Da) with a 1:3 iron-chelator complex, given orally, with predominantly urinary iron excretion; it is the most effective of the three drugs at removing cardiac iron. Deferasirox is a tridentate chelator (molecular weight 373 Da) with a 1:2 complex, given orally, with faecal iron excretion, and is the least effective of the three for eliminating cardiac iron. Option C reverses the cardiac efficacy and incorrectly states deferoxamine is oral. Option D reverses the characteristic side effects. Option E is incorrect because the three chelators have different molecular structures, weights, and iron-chelator stoichiometries."
  }
];
