export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 121,
    stem: "A 3-year-old boy is referred with a history of recurrent staphylococcal skin abscesses, pneumonias, and granulomatous lesions in the lungs and liver since infancy. Nitroblue tetrazolium (NBT) testing shows absent reduction. His maternal uncle had similar infections and died in childhood. Which of the following most accurately describes the underlying molecular defect and the most appropriate therapeutic strategy?",
    options: {
      A: "Autosomal recessive mutation in the CHS1 gene causing defective lysosomal trafficking; treatment is with antibiotics and haemopoietic stem cell transplantation",
      B: "X-linked or autosomal recessive mutation affecting components of the NADPH oxidase respiratory burst; prophylactic co-trimoxazole and interferon-γ are indicated, with stem cell transplantation for severe cases",
      C: "Autosomal dominant mutation in the LBR gene causing lamin B receptor dysfunction; no specific treatment is required as the condition is benign",
      D: "Autosomal recessive mutation in integrin adhesion molecules causing impaired chemotaxis; treatment is with G-CSF and prophylactic antifungals",
      E: "X-linked mutation in the CYBB gene causing complete absence of phagocytosis; treatment is with intravenous immunoglobulin replacement"
    },
    answer: "B",
    explanation: "Hoffbrand describes chronic granulomatous disease (CGD) as resulting from abnormal leucocyte oxidative metabolism, specifically affecting different elements of the respiratory burst oxidase or its activating mechanism, resulting in failure of superoxide generation. Most cases are due to mutations of a cytochrome b gene on the X chromosome, but 30% are due to autosomal mutations. Patients have recurring bacterial and sometimes fungal infections starting in infancy, with failure to switch off inflammation leading to granuloma formation. The NBT test would show absent reduction. Prophylactic co-trimoxazole and interferon-γ are standard therapies, with stem cell transplantation considered in severe cases. Option A describes Chediak-Higashi syndrome, not CGD. Option C describes Pelger-Huet anomaly, which is benign. Option D describes leucocyte adhesion deficiency, which presents with recurrent infections but the defect is in chemotaxis, not the respiratory burst. Option E is incorrect because the defect in CGD is killing, not phagocytosis, and intravenous immunoglobulin replacement is not the treatment."
  },
  {
    num: 122,
    stem: "A 6-month-old infant presents with fever, severe oral ulceration, and omphalitis. The full blood count shows an absolute neutrophil count of 0.1 × 10⁹/L with normal haemoglobin and platelet count. Bone marrow examination shows a maturation arrest at the promyelocyte/myelocyte stage. Genetic testing reveals a heterozygous mutation in ELANE2. Which of the following is the most appropriate immediate and long-term management?",
    options: {
      A: "Immediate broad-spectrum antibiotics and antifungals, followed by long-term prophylactic antibiotics; G-CSF is contraindicated because it may accelerate progression to leukaemia",
      B: "Immediate aggressive antibiotic therapy; commence G-CSF subcutaneously to raise the neutrophil count, with surveillance for clonal evolution to myelodysplasia or acute myeloid leukaemia",
      C: "Arrange urgent allogeneic stem cell transplantation as first-line therapy before attempting any medical management",
      D: "Start corticosteroids to suppress a presumed autoimmune mechanism causing neutrophil destruction",
      E: "Perform splenectomy to reduce peripheral destruction of neutrophils and improve the neutrophil count"
    },
    answer: "B",
    explanation: "Hoffbrand describes severe congenital neutropenia (previously Kostmann syndrome) as presenting in the first year of life with life-threatening infections. Most cases are dominantly inherited, caused by mutations of ELANE2 coding for neutrophil elastase. G-CSF produces a clinical response in most patients. However, some forms predispose to myelodysplastic neoplasias or acute myeloid leukaemia, so long-term surveillance is essential. Option A is incorrect because G-CSF is not contraindicated; it is the mainstay of treatment. Option C is incorrect because stem cell transplantation is not first-line; G-CSF is effective and transplantation is reserved for cases with clonal evolution or poor response. Option D is incorrect because corticosteroids impair neutrophil function and should not be used indiscriminately in neutropenia; there is no autoimmune mechanism in severe congenital neutropenia. Option E is incorrect because the neutropenia is due to failure of production with maturation arrest, not peripheral destruction."
  },
  {
    num: 123,
    stem: "A 42-year-old Ashkenazi Jewish woman presents with easy bruising, fatigue, and bone pain in her left hip. Examination reveals massive splenomegaly. Laboratory studies show Hb 92 g/L, WBC 3.2 × 10⁹/L, platelets 78 × 10⁹/L. MRI of the femur shows the 'Erlenmeyer flask' deformity with marrow expansion. Bone marrow aspirate reveals large cells with fibrillar cytoplasm. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Arrange splenectomy immediately to relieve cytopenias and reduce bone pain",
      B: "Start enzyme replacement therapy with intravenous imiglucerase and monitor with chitotriosidase levels",
      C: "Initiate chemotherapy with cladribine and cytarabine as first-line therapy for histiocytic neoplasm",
      D: "Commence oral iron supplementation and folic acid to correct the anaemia",
      E: "Begin allogeneic stem cell transplantation as the only curative option for this autosomal dominant condition"
    },
    answer: "B",
    explanation: "Hoffbrand describes Gaucher disease as an autosomal recessive disorder caused by deficiency of glucocerebrosidase, leading to accumulation of glucosylceramide in lysosomes of reticuloendothelial cells. Type 1 disease presents with splenomegaly, pancytopenia, and bone lesions including the Erlenmeyer flask deformity. Gaucher cells with fibrillar cytoplasm are characteristic. Diagnosis is by white cell glucocerebrosidase assay and DNA analysis. Enzyme replacement therapy (ERT) with imiglucerase, velaglucerase, or taliglucerase is effective in shrinking the spleen, raising blood counts, and improving bone structure. Chitotriosidase levels are useful for monitoring therapy. Splenectomy is avoided because it leads to infiltration of other organs such as bones. Chemotherapy is inappropriate because Gaucher is a lysosomal storage disease, not a neoplasm. Iron and folic acid would not address the underlying pathophysiology. Stem cell transplantation has been carried out in severely affected patients but is not first-line for type 1 disease; ERT has virtually eliminated the need for splenectomy."
  },
  {
    num: 124,
    stem: "A 55-year-old woman with Graves' disease is started on carbimazole. Three weeks later she presents with fever, sore throat, and painful oral ulceration. Her absolute neutrophil count is 0.3 × 10⁹/L. Which of the following is the most appropriate immediate management?",
    options: {
      A: "Continue carbimazole at a reduced dose and add broad-spectrum antibiotics, as dose reduction usually resolves neutropenia",
      B: "Stop carbimazole immediately, obtain blood and throat cultures, and start broad-spectrum antibiotics and antifungal prophylaxis; add G-CSF if the neutropenia is severe",
      C: "Switch from carbimazole to propylthiouracil, as cross-reactivity between antithyroid drugs causing neutropenia is rare",
      D: "Start high-dose corticosteroids to treat a presumed autoimmune neutropenia complicating Graves' disease",
      E: "Perform bone marrow biopsy immediately to exclude acute myeloid leukaemia before initiating any treatment"
    },
    answer: "B",
    explanation: "Hoffbrand identifies drugs as the most likely cause of isolated acquired neutropenia. Many drugs induce neutropenia by direct toxicity or immune-mediated damage. The onset is often within 1–2 weeks of starting the drug. In drug-induced neutropenia, spontaneous recovery usually occurs within 1–2 weeks after stopping the drug. The immediate management of acute severe neutropenia includes stopping the offending drug, obtaining cultures, and starting broad-spectrum antibiotics and antifungal prophylaxis. G-CSF is effective at raising the neutrophil count in various benign chronic neutropenic states. Option A is incorrect because continuing the offending drug would prolong and worsen the neutropenia. Option C is incorrect because while switching antithyroid drugs might be considered later, the immediate priority is stopping the likely offending agent and treating the neutropenic sepsis. Option D is incorrect because corticosteroids impair neutrophil function and should not be used indiscriminately. Option E is incorrect because while bone marrow examination is useful for determining the cause of neutropenia, it should not delay urgent antimicrobial therapy in a febrile neutropenic patient."
  },
  {
    num: 125,
    stem: "A 48-year-old man presents with progressive dyspnoea, a rash over his trunk, and recent onset of confusion. He has a 2-year history of eosinophil counts persistently above 2.0 × 10⁹/L. Echocardiography shows mitral valve thickening and regurgitation. No clonal cytogenetic or molecular marker is detected. Which of the following is the most appropriate first-line therapy?",
    options: {
      A: "Start imatinib 400 mg daily, as chronic eosinophilic leukaemia with PDGFRA rearrangement is the most likely diagnosis",
      B: "Commence high-dose corticosteroids, followed by second-line cytotoxic or immunosuppressive agents if needed; mepolizumab is a targeted option for refractory cases",
      C: "Initiate broad-spectrum antiparasitic therapy empirically, as Strongyloides infestation is the most common cause of eosinophilia in adults",
      D: "Perform urgent allogeneic stem cell transplantation, as hypereosinophilic syndrome is a clonal myeloproliferative neoplasm requiring curative treatment",
      E: "Start hydroxyurea to reduce the eosinophil count rapidly, as it is the standard first-line agent for all eosinophilias"
    },
    answer: "B",
    explanation: "Hoffbrand describes the hypereosinophilic syndrome (HES) as diagnosed when the eosinophil count is elevated above 1.5 × 10⁹/L for over 6 months and associated with tissue damage for which no other cause can be detected. The heart valves, CNS, skin, and lungs may be affected. In 25% of cases a clonal T-cell population drives the eosinophilia. When no clonal marker is detected, treatment is usually first with high-dose corticosteroids and second-line with cytotoxic drugs, immunosuppressants, or α-interferon. Mepolizumab, a humanized antibody to IL-5, is a promising targeted treatment for hypereosinophilic syndromes. Option A is incorrect because chronic eosinophilic leukaemia requires a clonal cytogenetic or molecular abnormality such as PDGFRA or PDGFRB rearrangement; no such marker is present. Option C is incorrect because while parasitic infection is a common cause of eosinophilia, this patient's 2-year history and end-organ damage are inconsistent with parasitic infection. Option D is incorrect because HES is not necessarily clonal and stem cell transplantation is not first-line. Option E is incorrect because hydroxyurea is not the standard first-line agent for HES; corticosteroids are."
  },
  {
    num: 126,
    stem: "Regarding neutrophil granule biology and the sequential stages of granulopoiesis, which of the following statements most accurately describes the appearance and enzymatic composition of primary and secondary granules?",
    options: {
      A: "Primary granules appear at the myelocyte stage and contain lactoferrin, lysozyme, and specific collagenase; secondary granules appear at the promyelocyte stage and contain myeloperoxidase and acid hydrolases",
      B: "Primary (azurophilic) granules appear at the promyelocyte stage and contain myeloperoxidase and acid hydrolases; secondary (specific) granules appear at the myelocyte stage and contain lactoferrin, lysozyme, and other enzymes",
      C: "Both primary and secondary granules appear simultaneously at the myeloblast stage; primary granules contain defensins and secondary granules contain histamine",
      D: "Primary granules are absent in mature neutrophils and are only found in monocytes; secondary granules contain myeloperoxidase and are formed at the band stage",
      E: "Primary granules contain heparin and histamine and are characteristic of basophils; neutrophils contain only secondary granules throughout maturation"
    },
    answer: "B",
    explanation: "Hoffbrand describes neutrophil granules as divided into primary (azurophilic), which appear at the promyelocyte stage, and secondary (specific), which appear at the myelocyte stage and predominate in the mature neutrophil. Both types are lysosomal in origin: primary granules contain myeloperoxidase and other acid hydrolases, while secondary granules contain lactoferrin, lysozyme, and other enzymes. Option A reverses the stages and contents. Option C is incorrect because granules do not appear at the myeloblast stage, which has no granules, and histamine is found in basophil granules. Option D is incorrect because primary granules persist in mature neutrophils and are characteristic of neutrophils, not monocytes. Option E confuses basophil granule contents with neutrophil granules."
  },
  {
    num: 127,
    stem: "Regarding neutrophil kinetics and the haematological response to acute bacterial infection, which of the following statements most accurately integrates the concepts of marrow reserve pools, circulating and marginating pools, and the peripheral blood findings of a reactive neutrophilia?",
    options: {
      A: "The bone marrow reserve pool contains 10–15 times more band and segmented neutrophils than the blood; during infection, increased selectin-mediated margination shifts neutrophils from the circulating to the marginating pool, reducing the measured blood count",
      B: "The circulating and marginating pools are normally of unequal size, with the marginating pool being approximately twice the size of the circulating pool; during infection, neutrophils are sequestered in the marginating pool, causing neutropenia",
      C: "The marrow reserve pool contains 10–15 times more band and segmented neutrophils than the blood; during infection, demargination and accelerated release from the reserve pool cause neutrophilia, often with a left shift and toxic granulation",
      D: "Neutrophils spend 4–5 days in the circulation before entering tissues; during infection, this transit time is shortened to 6–10 hours, causing depletion of the marrow reserve",
      E: "Granulocytes are produced from a separate lineage than monocytes; during infection, IL-5 drives neutrophil production while G-CSF exclusively stimulates eosinophil production"
    },
    answer: "C",
    explanation: "Hoffbrand describes neutrophil kinetics as follows: large numbers of band and segmented neutrophils (10–15 times more than in blood) are held in the marrow as a reserve pool. In the bloodstream, the circulating pool and marginating pool are normally of about equal size. During infection, increased production of growth factors and cytokines such as IL-1, IL-6, and TNF stimulates demargination and accelerated release from the marrow reserve, causing neutrophilia. Characteristic features include a 'shift to the left' (increase in band forms and occasional metamyelocytes/myelocytes) and toxic granulation with Döhle bodies. Option A is incorrect because while margination normally exists, infection causes demargination and release from reserve, increasing the count. Option B is incorrect because the pools are equal in size and infection causes neutrophilia, not neutropenia. Option D is incorrect because neutrophils spend only 6–10 hours in the circulation before entering tissues, where they survive 4–5 days. Option E is incorrect because granulocytes and monocytes share a common precursor, and G-CSF stimulates neutrophil production while IL-5 stimulates eosinophils."
  },
  {
    num: 128,
    stem: "Regarding NETosis and the formation of neutrophil extracellular traps (NETs), which of the following statements most accurately integrates their structural composition, mechanisms of release, and pathophysiological implications?",
    options: {
      A: "NETs consist exclusively of extracellular DNA released only during neutrophil necrosis; they have no role in thrombosis because they lack histones and granular enzymes",
      B: "NETs are composed of DNA, modified histones, and granular enzymes; they can be released via cell death or from viable cells, and they contribute to both microbial killing and pathological thrombosis",
      C: "NETs are composed of RNA and defensins released exclusively by viable neutrophils; they function only in antiviral defence and do not participate in bacterial killing",
      D: "NET formation requires intact NADPH oxidase activity and is therefore absent in chronic granulomatous disease; NETs are primarily involved in extracellular matrix remodelling",
      E: "NETs are formed by eosinophils during allergic responses and contain major basic protein; they have no functional overlap with neutrophil-mediated immunity"
    },
    answer: "B",
    explanation: "Hoffbrand describes NETs as consisting of a network of extracellular strings of DNA associated with modified histones and granular enzymes which together kill microbes. NETosis may result from nuclear and cytoplasmic material associated with disintegration and death of the cell, or from extrusion of DNA, histones, and granules from viable cells. Antibodies, immune complexes, cytokines, and chemokines can all induce NETosis. The importance of NETosis in inflammation and thrombosis is discussed further in Chapter 29. Option A is incorrect because NETs contain histones and enzymes and are released by both cell death and viable cells, and they do contribute to thrombosis. Option C is incorrect because NETs are composed of DNA, not RNA, and are formed by neutrophils, not exclusively by viable cells. Option D is incorrect because while NADPH oxidase may be involved in some forms of NETosis, NETs can also be formed via NADPH oxidase-independent pathways, and their primary role is not extracellular matrix remodelling. Option E is incorrect because NETs are formed by neutrophils, not eosinophils."
  },
  {
    num: 129,
    stem: "Regarding the clinical pharmacology of granulocyte colony-stimulating factor (G-CSF) and its PEGylated formulations, which of the following statements most accurately evaluates their indications, mechanisms of benefit, and limitations?",
    options: {
      A: "PEGylated G-CSF (pegfilgrastim) is administered once per chemotherapy cycle and prevents periods of extreme neutropenia even after intensive chemotherapy by completely blocking apoptosis of myeloid progenitors",
      B: "G-CSF is contraindicated in peripheral blood stem cell mobilization because it causes haemopoietic stem cell exhaustion and increases the risk of graft failure",
      C: "PEGylated G-CSF can be given once in 7–14 days; it accelerates neutrophil recovery after chemotherapy but cannot prevent extreme neutropenia after intensive chemotherapy, and it is avoided in sickle cell disease due to risk of vaso-occlusive crisis",
      D: "G-CSF should be given routinely to all patients receiving chemotherapy regardless of febrile neutropenia risk, as it eliminates all risk of infection and reduces hospital length of stay in every regimen",
      E: "G-CSF is ineffective in congenital neutropenia because the underlying defect is in neutrophil elastase, which is downstream of G-CSF receptor signalling"
    },
    answer: "C",
    explanation: "Hoffbrand describes clinical administration of G-CSF as producing a rise in neutrophils. Short-acting G-CSF is given daily, while longer-acting PEGylated G-CSF (pegfilgrastim and eflapegrastim) can be given once in 7–14 days. Post-chemotherapy G-CSF is usually given if the risk of febrile neutropenia is considered >20%. While it may translate into a reduction of hospital stay, antibiotic usage, and infection frequency, periods of extreme neutropenia after intensive chemotherapy cannot be prevented. G-CSF is avoided in sickle cell stem cell transplantation as it may cause a crisis. Option A is incorrect because PEGylated G-CSF does not completely block apoptosis or prevent extreme neutropenia after intensive chemotherapy. Option B is incorrect because G-CSF is actually used for peripheral blood stem cell mobilization to increase circulating multipotent progenitors. Option D is incorrect because G-CSF is not given to all chemotherapy patients; it is reserved for those with >20% risk of febrile neutropenia. Option E is incorrect because G-CSF produces a clinical response in most patients with severe congenital neutropenia."
  },
  {
    num: 130,
    stem: "Regarding the genetic basis and clinical severity of the three major congenital disorders of neutrophil function, which of the following statements most accurately compares chronic granulomatous disease (CGD), Chediak-Higashi syndrome, and leucocyte adhesion deficiency (LAD)?",
    options: {
      A: "CGD is due to mutations in the CHS1 gene causing defective lysosomal trafficking; Chediak-Higashi is due to NADPH oxidase defects; LAD is due to mutations in neutrophil elastase",
      B: "CGD results from mutations affecting the respiratory burst oxidase, causing defective superoxide generation; Chediak-Higashi results from LYST mutations causing giant granules and defects of chemotaxis and killing; LAD results from mutations in surface adhesion proteins such as integrins causing impaired chemotaxis",
      C: "All three disorders are X-linked; all present with albinism and recurrent infections; treatment for all three is with G-CSF and prophylactic antibiotics",
      D: "CGD is autosomal recessive only; Chediak-Higashi is autosomal dominant; LAD is X-linked dominant",
      E: "CGD, Chediak-Higashi, and LAD all result from mutations in the same ELANE2 gene with varying phenotypic expression depending on the specific amino acid substitution"
    },
    answer: "B",
    explanation: "Hoffbrand describes CGD as resulting from mutations affecting different elements of the respiratory burst oxidase, most commonly the cytochrome b gene on the X chromosome but with 30% autosomal. Chediak-Higashi syndrome is due to mutations in the CHS1 (LYST) gene encoding a lysosomal trafficking regulator, with giant granules in neutrophils and other cells, accompanied by neutropenia, thrombocytopenia, albinism, and peripheral neuropathy. LAD is due to autosomal recessive mutations of surface adhesion proteins such as integrins, causing impaired chemotaxis and recurrent infections. Option A incorrectly swaps the genetic bases of CGD and Chediak-Higashi. Option C is incorrect because only CGD is commonly X-linked; Chediak-Higashi and LAD are autosomal recessive, and albinism is specific to Chediak-Higashi. Option D is incorrect because CGD can be X-linked or autosomal, Chediak-Higashi is autosomal recessive, and LAD is autosomal recessive. Option E is incorrect because the three disorders have completely different genetic bases."
  }
];
