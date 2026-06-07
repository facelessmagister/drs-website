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
  },
  {
    num: 371,
    stem: "A 28-year-old man presents with progressive dysarthria, ataxia, and retinal degeneration. He also has adult-onset diabetes mellitus and mild anaemia. Serum ferritin is 1,200 μg/L and transferrin saturation is 82%. HFE genetic testing is negative. Brain MRI shows basal ganglia iron deposition. Which of the following is the most likely diagnosis?",
    options: {
      A: "Hereditary haemochromatosis type 2A due to hemojuvelin mutation presenting with severe cardiomyopathy and hypogonadism.",
      B: "Aceruloplasminaemia causing iron overload with prominent neurological degeneration and retinal damage due to defective ferroxidase activity.",
      C: "Ferroportin disease type 4b with parenchymal iron overload and mild hepatic fibrosis but no neurological involvement.",
      D: "Non-transfusion-dependent thalassaemia leading to increased intestinal absorption and basal ganglia siderosis.",
      E: "Hereditary hyperferritinaemia–cataract syndrome with elevated serum ferritin and progressive neurodegeneration."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 describes aceruloplasminaemia as another rare genetic cause of iron loading. Aceruloplasminaemia is characterised by iron overload with prominent neurological degeneration (dysarthria, ataxia, basal ganglia iron deposition) and retinal damage, reflecting the essential role of ceruloplasmin as a ferroxidase in cellular iron export. Adult-onset diabetes and mild anaemia are also typical features. Hemojuvelin mutations cause juvenile haemochromatosis with cardiomyopathy and hypogonadism, not neurological degeneration. Ferroportin disease does not cause basal ganglia iron deposition or neurological symptoms. Non-transfusion-dependent thalassaemia causes hepatic iron overload but spares the heart and central nervous system. Hereditary hyperferritinaemia–cataract syndrome causes cataracts without tissue iron overload or neurological disease."
  },
  {
    num: 372,
    stem: "A 9-year-old girl with β-thalassaemia major has been receiving subcutaneous deferoxamine infusion 50 mg/kg over 10 hours nightly for 5 years. She presents with bilateral high-tone sensorineural hearing loss and visual field defects on fundoscopic examination. Her serum ferritin is 800 μg/L. Which of the following is the most appropriate modification to her chelation regimen?",
    options: {
      A: "Increase the deferoxamine dose to 60 mg/kg because her ferritin remains above the target of <100 μg/L and she needs more intensive chelation.",
      B: "Discontinue deferoxamine immediately and switch to oral deferasirox, while arranging annual auditory and fundoscopic examinations.",
      C: "Continue deferoxamine but reduce the dose to 20 mg/kg and add oral deferiprone on alternate days to maintain efficacy while minimising toxicity.",
      D: "Switch to oral deferiprone monotherapy because it is not associated with ototoxicity or retinal toxicity, and monitor the blood count weekly.",
      E: "Discontinue all chelation therapy because her ferritin of 800 μg/L is below the usual threshold for treatment and the toxicity outweighs the benefit."
    },
    answer: "D",
    explanation: "Hoffbrand Chapter 4 (Table 4.5) states that deferoxamine side effects include high-tone deafness and retinal damage, which are particularly frequent if high doses are used in children. Patients receiving deferoxamine should have auditory and fundoscopic examinations annually. In this child who has already developed ototoxicity and retinopathy, deferoxamine should be discontinued. Oral deferiprone is the most appropriate alternative because it does not cause ototoxicity or retinal damage. However, deferiprone carries a risk of agranulocytosis (approximately 1%) and requires weekly blood count monitoring for the first 6 months, fortnightly for the next 6 months, and then every 2–4 weeks. Deferasirox is also a reasonable alternative, but option B incorrectly states annual rather than annual examinations (the monitoring recommendation for deferoxamine). Increasing the deferoxamine dose would worsen toxicity. Discontinuing all chelation at a ferritin of 800 μg/L in a transfusion-dependent patient would be dangerous as iron overload would rapidly progress."
  },
  {
    num: 373,
    stem: "A 52-year-old woman is found to have serum ferritin 1,800 μg/L during investigation for mild anaemia. Her transferrin saturation is 35% and liver function tests are normal. Her father and paternal aunt both had iron overload with minimal hepatic dysfunction. Liver MRI shows iron predominantly in the spleen and bone marrow, with minimal hepatic parenchymal iron. Which of the following genetic defects best explains this pattern?",
    options: {
      A: "Homozygous HFE C282Y mutation causing classical parenchymal iron overload with high transferrin saturation and hepatic fibrosis.",
      B: "Hemojuvelin mutation causing juvenile haemochromatosis with severe parenchymal overload, cardiomyopathy, and hypogonadism.",
      C: "Ferroportin mutation causing type 4a disease with predominant reticuloendothelial iron loading, normal transferrin saturation, and autosomal dominant inheritance.",
      D: "Transferrin receptor 2 mutation causing type 3 hereditary haemochromatosis with parenchymal iron overload indistinguishable from HFE disease.",
      E: "Ferritin light chain mutation causing hereditary hyperferritinaemia–cataract syndrome with isolated elevation of serum ferritin and no tissue iron deposition."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 4 (Table 4.2) states that ferroportin gene mutations (type IV disease) usually cause reticuloendothelial but not parenchymal cell iron overload (type 4a). The clinical vignette describes iron predominantly in the spleen and bone marrow (reticuloendothelial sites) with normal liver function and normal transferrin saturation, together with autosomal dominant family history — all consistent with ferroportin disease type 4a. HFE and hemojuvelin diseases cause parenchymal iron overload with high transferrin saturation and hepatic involvement. Transferrin receptor 2 mutations also cause parenchymal overload. Ferritin light chain mutations cause raised serum ferritin with cataracts but no tissue iron overload; the MRI findings of RE iron deposition in this vignette directly exclude this diagnosis."
  },
  {
    num: 374,
    stem: "A 14-year-old boy with β-thalassaemia major has a serum ferritin of 650 μg/L, which his physicians considered reassuringly low. However, cardiac T2* MRI shows 11 ms (normal >20 ms), indicating significant cardiac iron loading. His left ventricular ejection fraction is preserved at 58%. He has been adherent to oral deferasirox 30 mg/kg daily for 2 years. Which of the following is the most appropriate next step?",
    options: {
      A: "Reassure the family that serum ferritin is the most reliable indicator of cardiac iron and no change is needed because 650 μg/L is well below the chelation target.",
      B: "Switch to deferiprone monotherapy because it is the most effective chelator for removing cardiac iron, and repeat cardiac T2* MRI in 6–12 months.",
      C: "Add regular venesection to the regimen because rapid iron removal is needed before cardiac dysfunction develops.",
      D: "Discontinue deferasirox and observe, because the serum ferritin suggests adequate chelation and T2* MRI is known to produce false-positive results.",
      E: "Increase deferasirox to 40 mg/kg daily because higher doses are proven to remove cardiac iron more effectively than standard doses."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Fig. 4.5 and text) emphasises that serum ferritin and liver iron correlate poorly with cardiac iron. There are substantial numbers of patients with very high serum ferritin (>3,000 μg/L) but normal heart iron (T2* >20 ms), and conversely many patients with serum ferritin levels <1,000 μg/L with severe cardiac iron loading (T2* <10 ms). T2* MRI is the best non-invasive guide to cardiac iron and can predict cardiac failure or arrhythmia before sensitive tests detect impaired cardiac function. Deferasirox removes iron primarily from the liver and is the least effective of the three drugs for eliminating cardiac iron. Deferiprone, alone, is the most effective of the three drugs at removing cardiac iron and improving left and right heart function. Venesection is contraindicated in transfusion-dependent thalassaemia. Discontinuing chelation or increasing deferasirox would be inappropriate given the documented cardiac iron burden and the drug's relative ineffectiveness for cardiac iron."
  },
  {
    num: 375,
    stem: "A 24-year-old woman with β-thalassaemia intermedia has a steady-state haemoglobin of 7.1 g/dL and moderate splenomegaly. She has never required regular transfusions but received 4 units during a severe infection 2 years ago. Her liver iron concentration is 6.2 mg/g dry weight and serum ferritin is 950 μg/L. Echocardiography is normal and cardiac T2* MRI is >20 ms. Which of the following is the most appropriate management regarding her iron overload?",
    options: {
      A: "Defer iron chelation until she requires regular transfusions, because iron overload in non-transfusion-dependent thalassaemia only becomes clinically significant after 20 units of blood.",
      B: "Initiate iron chelation because her liver iron concentration exceeds 5 mg/g dry weight and her serum ferritin approaches 1,000 μg/L, consistent with current guidelines for NTDT.",
      C: "Perform regular venesection because she is not transfusion-dependent and venesection is the first-line treatment for all forms of iron overload.",
      D: "Start deferasirox because it is the most effective chelator for cardiac iron removal, and cardiac siderosis is the dominant risk in thalassaemia intermedia.",
      E: "Recheck liver iron in 2 years because the heart is spared in non-transfusion-dependent thalassaemia and hepatic iron does not cause end-stage liver disease."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 states that in non-transfusion-dependent thalassaemia (thalassaemia intermedia), iron chelation is indicated if the liver iron concentration is above 5 mg/g dry weight or when the serum ferritin reaches 800 μg/L or when the iron leads to organ damage. This patient has a liver iron of 6.2 mg/g and ferritin of 950 μg/L, both exceeding the thresholds for initiating chelation. The heart is spared in non-transfusion-dependent thalassaemia because the iron overload arises from increased intestinal absorption rather than transfusion, but hepatic iron accumulation can still cause significant morbidity. Venesection is inappropriate because it would worsen her underlying chronic anaemia. Deferasirox is commonly used in NTDT, but the rationale in option D is incorrect because cardiac siderosis is not the dominant risk in this condition. Waiting 2 years would allow progressive hepatic iron accumulation and potential organ damage."
  },
  {
    num: 376,
    stem: "Regarding the pathophysiology of non-transferrin-bound iron (NTBI) in severe iron overload, which of the following statements most accurately describes its origin, characteristics, and clinical significance?",
    options: {
      A: "NTBI appears when transferrin saturation falls below 30% and represents iron bound to albumin and citrate that is efficiently cleared by hepatocytes, protecting other organs.",
      B: "NTBI appears in plasma when transferrin is >70% saturated; it is a toxic form of iron that causes widespread parenchymal tissue deposition and is the principal mediator of organ damage in transfusional iron overload.",
      C: "NTBI is a storage form of iron found exclusively within macrophage lysosomes and is not detectable in circulating plasma under any physiological or pathological condition.",
      D: "NTBI is synthesised by the liver as a protective protein that scavenges free iron and delivers it to erythroblasts for haemoglobin synthesis.",
      E: "NTBI is widely available as a routine laboratory test and is the preferred first-line screening assay for hereditary haemochromatosis in primary care."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 states that non-transferrin-bound iron (NTBI), also known as labile plasma iron, is a toxic form of iron that occurs in severe transfusional iron overload. NTBI may appear in plasma when transferrin is >70% saturated. It causes widespread iron deposition in parenchymal tissues, including the heart, liver, and endocrine organs. Tests for NTBI are not widely available, so it is not used for routine screening. Option A is incorrect because NTBI appears at high, not low, transferrin saturation and it is toxic, not protective. Option C is incorrect because NTBI is a plasma iron species, not an intralysosomal storage form. Option D is incorrect because NTBI is not a synthesised protective protein. Option E is incorrect because NTBI testing is not widely available and is not recommended for primary screening."
  },
  {
    num: 377,
    stem: "Which of the following statements most accurately compares the tissue distribution of iron, macrophage involvement, and pattern of organ damage between hereditary (genetic) haemochromatosis and transfusional iron overload?",
    options: {
      A: "Both conditions cause iron overload in macrophages and parenchymal cells identically, with cardiac damage being the dominant cause of death in both.",
      B: "Hereditary haemochromatosis accumulates iron in parenchymal cells with sparing of macrophages, whereas transfusional iron overload loads both parenchymal cells and reticuloendothelial macrophages; cardiac failure is the dominant cause of death in transfusional but not hereditary disease.",
      C: "Transfusional iron overload preferentially deposits iron in hepatocytes while sparing macrophages, and cardiac involvement is rare because the liver sequesters excess iron efficiently.",
      D: "Hereditary haemochromatosis predominantly loads reticuloendothelial macrophages, which explains why patients develop splenomegaly rather than cirrhosis.",
      E: "Both conditions cause identical patterns of iron deposition, but hereditary haemochromatosis is more severe because it begins in childhood, whereas transfusional overload only begins after the first transfusion."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 explicitly contrasts these two conditions: in hereditary haemochromatosis, iron overload of parenchymal cells occurs dominantly in the liver, and at later stages endocrine and heart complications occur; in contrast to transfusional iron overload, the macrophages are not iron overloaded. Transfusional iron overload causes damage to the liver, endocrine organs, and heart, with iron accumulation also in macrophages of the reticuloendothelial system. Cardiac failure or arrhythmia caused by cardiac siderosis is the most frequent cause of death from transfusional iron overload. In hereditary haemochromatosis, cardiac failure or arrhythmia occur in some severe cases but are more dominant features of transfusional iron overload. Options A, C, D, and E all contain fundamental errors about the tissue distribution and relative severity of organ involvement."
  },
  {
    num: 378,
    stem: "Regarding the pharmacology and clinical use of deferasirox in iron chelation therapy, which of the following statements most accurately describes its molecular properties, route of iron excretion, and principal adverse effects?",
    options: {
      A: "Deferasirox is a bidentate chelator given orally that causes predominantly urinary iron excretion and is the most effective drug for removing cardiac iron.",
      B: "Deferasirox is a tridentate oral chelator excreted predominantly in the faeces; it is widely used in children but is the least effective of the three drugs for eliminating cardiac iron, and can cause skin rashes, gastrointestinal disturbance, and rising serum creatinine.",
      C: "Deferasirox is a hexadentate chelator given parenterally with urinary and faecal iron excretion; it has the longest clinical experience but requires auditory and fundoscopic monitoring.",
      D: "Deferasirox is orally bioavailable and shares a 1:1 iron-chelator stoichiometry with deferoxamine; its principal adverse effect is agranulocytosis requiring weekly blood count monitoring.",
      E: "Deferasirox is eliminated renally unchanged and is therefore the preferred chelator in patients with pre-existing chronic kidney disease."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.5) states that deferasirox is a tridentate chelator (molecular weight 373 Da) with a 1:2 iron-chelator complex, given orally, with peak absorption at 1–2.9 hours and faecal iron excretion. It is the least effective of the three drugs for eliminating cardiac iron. Side effects include skin rashes, gastrointestinal disturbance, and a rise in serum creatinine. Option A is incorrect because deferasirox is tridentate, not bidentate, and it is the least effective, not the most effective, for cardiac iron. Option C describes deferoxamine, not deferasirox. Option D is incorrect because the iron-chelator stoichiometry is 1:2, not 1:1, and agranulocytosis is a side effect of deferiprone, not deferasirox. Option E is incorrect because deferasirox is not preferred in renal impairment; its potential to raise serum creatinine makes it potentially problematic in patients with chronic kidney disease."
  },
  {
    num: 379,
    stem: "Regarding the monitoring of cardiac function and iron burden in patients with transfusional iron overload, which of the following statements most accurately reflects current recommendations and the prognostic significance of specific investigations?",
    options: {
      A: "Serum ferritin is the most accurate predictor of cardiac iron burden and should be used as the sole guide to chelation intensity because it correlates directly with cardiac T2* values.",
      B: "Echocardiography to assess left ventricular ejection fraction should begin at age 16 in thalassaemia major, and cardiac T2* MRI is reserved only for patients with symptomatic heart failure.",
      C: "T2* MRI is a valuable measure of cardiac iron that can predict cardiac failure or arrhythmia before sensitive functional tests detect impairment; echocardiography or MRI for LVEF should be monitored annually from age 8.",
      D: "Cardiac iron deposition is best detected by 24-hour ECG monitoring alone, because arrhythmias precede structural iron loading and T2* MRI only detects late-stage disease.",
      E: "Liver biopsy is the gold standard for cardiac iron quantification and should be performed annually in all transfusion-dependent patients to guide chelation therapy."
    },
    answer: "C",
    explanation: "Hoffbrand Chapter 4 (Fig. 4.4 and 4.5) states that T2* MRI is a valuable measure of cardiac and liver iron loading. It can detect increased cardiac iron and predict for cardiac failure or arrhythmia before sensitive tests detect impaired cardiac function. The shorter the relaxation time, the greater the cardiac iron burden and the greater the risk of subsequent cardiac failure or arrhythmia. It is important to monitor LVEF annually by echocardiography or MRI from the age of 8 in thalassaemia major. Option A is incorrect because serum ferritin correlates poorly with cardiac iron. Option B is incorrect because monitoring begins at age 8, not 16, and T2* MRI is used proactively, not just in symptomatic patients. Option D is incorrect because T2* MRI detects early iron loading, not just late-stage disease. Option E is incorrect because liver biopsy does not assess cardiac iron and is not performed annually for this purpose."
  },
  {
    num: 380,
    stem: "Regarding combination iron chelation therapy, which of the following statements most accurately describes the rationale, evidence, and current regulatory status of combining deferiprone with deferoxamine or deferasirox?",
    options: {
      A: "Combination therapy is licensed in all major countries and is the first-line approach for all newly diagnosed transfusion-dependent patients because it produces faster iron removal than any single agent.",
      B: "Deferiprone may be combined with deferoxamine infused on one or more days per week because the drugs have additive or even synergistic effects on iron excretion, but this combination is not yet licensed in any country.",
      C: "Combination of deferiprone and deferasirox has been proven effective without unexpected toxicity in several trials, and is now licensed as first-line therapy in the United Kingdom and European Union.",
      D: "Combination therapy is contraindicated because the three chelators compete for the same iron-binding sites, resulting in reduced overall iron excretion and increased toxicity.",
      E: "Deferoxamine and deferasirox should never be combined because both are hexadentate chelators and would produce an unstable mixed-ligand iron complex."
    },
    answer: "B",
    explanation: "Hoffbrand Chapter 4 (Table 4.5 and text) states that deferiprone may be used alone or, if this is inadequate, in combination with deferoxamine infused on one or more days a week, since the drugs have an additive or even synergistic effect on iron excretion. Combination therapy with the two orally active chelators (deferiprone and deferasirox), if either alone is not sufficiently effective, has been effective without unexpected toxicity in several trials, but is not yet licensed in any country. Option A is incorrect because combination therapy is not licensed in all major countries and is not first-line for all patients. Option C is incorrect because while trials have shown effectiveness, it is not yet licensed in the UK or EU. Option D is incorrect because the drugs do not simply compete; they have complementary mechanisms and additive effects. Option E is incorrect because deferasirox is tridentate, not hexadentate, and the combination of deferoxamine with deferasirox is not specifically addressed as contraindicated in Hoffbrand."
  }
];
