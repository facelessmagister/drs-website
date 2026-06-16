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
  },
  {
    num: 411,
    stem: "A 68-year-old man presents with recurrent episodes of relapsing polychondritis, Sweet syndrome, and a macrocytic anaemia. He has been thrombocytopenic for 6 months. Bone marrow examination reveals prominent vacuolization of early myeloid and erythroid precursors. Genetic testing identifies a somatic mutation in UBA1. Which of the following most accurately describes the underlying molecular defect and the most appropriate therapeutic strategy?",
    options: {
      A: "UBA1 encodes a transcription factor regulating myeloid differentiation; treatment is with allogeneic stem cell transplantation as first-line therapy",
      B: "UBA1 encodes the major E1 ubiquitin-activating enzyme; treatment involves symptomatic control with corticosteroids and JAK2 inhibitor ruxolitinib, with stem cell transplantation as a curative option",
      C: "UBA1 mutations cause defective neutrophil elastase leading to maturation arrest; G-CSF is the mainstay of treatment",
      D: "UBA1 is located on chromosome 7 and encodes glucocerebrosidase; enzyme replacement therapy with imiglucerase is indicated",
      E: "The mutation is germline and inherited in an autosomal dominant pattern; prophylactic co-trimoxazole and interferon-γ are indicated"
    },
    answer: "B",
    explanation: "Hoffbrand describes VEXAS syndrome as an adult-onset disease characterized by acquired somatic mutation of the UBA1 gene in haemopoietic progenitor cells. UBA1, located on the X chromosome, encodes the major E1 enzyme that initiates ubiquitylation. Male patients present with macrocytic anaemia, various inflammatory disorders including relapsing polychondritis, Sweet syndrome and vasculitides, and are often thrombocytopenic with prominent vacuolization of early myeloid and erythroid precursors. Treatment is symptomatic control with corticosteroids and the JAK2 inhibitor ruxolitinib which reduces inflammation. Allogeneic stem cell transplantation is a potentially curative option but experience is limited. Option A is incorrect because UBA1 is not a transcription factor and transplantation is not first-line. Option C incorrectly describes severe congenital neutropenia (ELANE2). Option D incorrectly describes Gaucher disease. Option E is incorrect because the mutation is somatic, not germline, and the syndrome does not present in childhood with infections requiring co-trimoxazole and interferon-γ."
  },
  {
    num: 412,
    stem: "A 4-year-old boy is admitted with high fever, pancytopenia, and massive hepatosplenomegaly. Laboratory studies reveal serum ferritin >20,000 μg/L, low fibrinogen, and markedly elevated soluble CD25 (soluble IL-2 receptor). Bone marrow aspirate shows numerous histiocytes that have ingested red cells, erythroblasts, and platelets. EBV PCR is positive. Which of the following most accurately describes the pathophysiology and immediate management?",
    options: {
      A: "Defective phagocyte oxidative metabolism with failure of superoxide generation; treat with prophylactic co-trimoxazole and interferon-γ",
      B: "Autosomal dominant Pelger-Huët anomaly with bi-lobed neutrophils; no treatment is required",
      C: "Overwhelming activation of macrophages and T lymphocytes causing a cytokine storm; treat the underlying infection and use immunomodulatory and anti-macrophage agents",
      D: "Germline mutation in the glucocerebrosidase gene causing lysosomal storage; start enzyme replacement therapy with imiglucerase",
      E: "Clonal proliferation of plasmacytoid dendritic cells expressing CD4; treat with cladribine and cytarabine"
    },
    answer: "C",
    explanation: "Hoffbrand describes haemophagocytic lymphohistiocytosis (HLH) as a rare, recessively inherited or more frequently acquired disease defined by overwhelming activation of macrophages and T lymphocytes causing a cytokine storm. It is usually precipitated by viral (especially EBV), bacterial or fungal infection. Patients present with fever and pancytopenia, often with splenomegaly and liver dysfunction. Bone marrow shows increased histiocytes ingesting red cells, white cells and platelets. Laboratory features include very elevated serum ferritin, reduced fibrinogen, low NK cell activity, and elevated soluble CD25. Treatment is of the underlying infection with supportive care, and with anti-macrophage and immunomodulatory drugs including corticosteroids, etoposide, ciclosporin, ruxolitinib, rituximab or anti-thymocyte globulin. Targeted therapy blocking specific cytokines and JAK-STAT pathways may improve outcomes. Option A describes chronic granulomatous disease. Option B describes the benign Pelger-Huët anomaly. Option D describes Gaucher disease. Option E incorrectly describes a plasmacytoid dendritic cell neoplasm rather than HLH."
  },
  {
    num: 413,
    stem: "A 22-year-old woman presents with a 2-year history of recurrent fever, severe oral ulceration, and pharyngitis occurring every 21 days like clockwork. During episodes, her absolute neutrophil count falls to 0.1 × 10⁹/L, recovering spontaneously after 4–5 days. Monocyte counts rise as neutrophils fall. Genetic testing reveals a germline mutation in ELANE2. Which of the following is the most appropriate long-term management?",
    options: {
      A: "Immediate allogeneic stem cell transplantation because cyclical neutropenia invariably progresses to acute myeloid leukaemia",
      B: "Prophylactic broad-spectrum antibiotics alone; G-CSF is contraindicated as it worsens the cyclic oscillations",
      C: "Subcutaneous G-CSF administration, which reduces the depth and duration of neutropenic nadir and the frequency of infections",
      D: "High-dose corticosteroids during each cycle to suppress an autoimmune mechanism of peripheral neutrophil destruction",
      E: "Splenectomy to reduce sequestration and correct the neutropenia"
    },
    answer: "C",
    explanation: "Hoffbrand describes cyclical neutropenia as a rare syndrome with 2- to 4-week periodicity in which severe but temporary neutropenia occurs; monocytes tend to rise as neutrophils fall. Germline mutations of ELANE2, the gene for neutrophil elastase, underlie some cases. G-CSF is effective at raising the neutrophil count in various benign chronic neutropenic states, including cyclical neutropenia, and reduces the severity of the neutropenic nadir and associated infections. Option A is incorrect because while some forms of severe congenital neutropenia predispose to myeloid neoplasia, cyclical neutropenia does not invariably progress to AML and stem cell transplantation is not first-line. Option B is incorrect because G-CSF is not contraindicated; it is beneficial. Option D is incorrect because corticosteroids impair neutrophil function and there is no autoimmune peripheral destruction mechanism in cyclical neutropenia. Option E is incorrect because the neutropenia is due to cyclic failure of production, not splenic sequestration."
  },
  {
    num: 414,
    stem: "A 62-year-old woman with a 25-year history of seropositive rheumatoid arthritis presents with recurrent bacterial skin infections and fever. Examination reveals splenomegaly. Laboratory studies show Hb 102 g/L, WBC 2.8 × 10⁹/L with neutrophils 0.4 × 10⁹/L, platelets 98 × 10⁹/L. Rheumatoid factor is present at high titre. Bone marrow shows normal or increased myeloid precursors. Which of the following is the most appropriate management strategy?",
    options: {
      A: "Commence G-CSF alongside vigorous treatment of infections; consider splenectomy or rituximab if refractory, while monitoring for clonal evolution",
      B: "Start methotrexate and high-dose corticosteroids to suppress the rheumatoid arthritis, as this will reliably normalize the neutrophil count",
      C: "Perform urgent allogeneic stem cell transplantation because Felty syndrome is a clonal myelodysplastic neoplasia",
      D: "Begin prophylactic co-trimoxazole and interferon-γ as the neutropenia reflects defective respiratory burst function",
      E: "Administer intravenous iron supplementation because the anaemia is due to iron deficiency from chronic disease"
    },
    answer: "A",
    explanation: "Hoffbrand lists Felty syndrome under causes of neutropenia as associated with rheumatoid arthritis. It is characterized by neutropenia with splenomegaly in the setting of long-standing seropositive RA. The neutropenia may be due to immune-mediated inhibition of myelopoiesis or peripheral destruction. Management includes treatment of infections, and G-CSF is effective at raising the neutrophil count in benign chronic neutropenic states. Corticosteroids or splenectomy have been associated with good results in some patients with autoimmune neutropenia, although corticosteroids impair neutrophil function and should not be used indiscriminately. Rituximab may also be effective. Option B is incorrect because while controlling RA is important, corticosteroids can impair neutrophil function and may not reliably correct the neutropenia. Option C is incorrect because Felty syndrome is not a clonal myelodysplastic neoplasia. Option D incorrectly applies CGD therapy; the neutropenia in Felty is not due to NADPH oxidase defects. Option E is incorrect because the anaemia is likely anaemia of chronic disease or related to the underlying inflammatory state, not primarily iron deficiency."
  },
  {
    num: 415,
    stem: "A 14-month-old girl is referred with massive hepatosplenomegaly, failure to thrive, and developmental regression. Ophthalmological examination reveals a cherry-red spot in the macula. Bone marrow aspirate shows numerous foam cells of similar size to Gaucher cells. Which of the following most accurately describes the enzymatic defect and the expected clinical course?",
    options: {
      A: "Deficiency of glucocerebrosidase leading to glucosylceramide accumulation; enzyme replacement therapy is effective in reversing CNS disease",
      B: "Deficiency of sphingomyelinase due to mutations in genes for lysosomal and cholesterol trafficking proteins; neurodegeneration and lung involvement are often fatal",
      C: "Deficiency of hexosaminidase A causing GM2 ganglioside accumulation; the condition is commonest in Ashkenazi Jewish populations",
      D: "Defective lysosomal trafficking due to CHS1 (LYST) mutation; giant granules are seen in neutrophils and albinism is characteristic",
      E: "Deficiency of the E1 ubiquitin-activating enzyme UBA1; treatment is with corticosteroids and ruxolitinib"
    },
    answer: "B",
    explanation: "Hoffbrand describes Niemann-Pick disease as caused by sphingomyelinase deficiency due to mutations in the genes for lysosomal and cholesterol trafficking proteins. Sphingomyelin and cholesterol accumulate in macrophages causing massive hepatosplenomegaly. This is often fatal due to neurodegeneration or lung involvement. Physical and mental development is commonly affected. A cherry-red spot is commonly seen in the retina of affected infants. Pancytopenia is a regular feature and in marrow aspirates foam cells of similar size to Gaucher cells are seen. Option A describes Gaucher disease; enzyme replacement does not reverse CNS disease in neuronopathic forms. Option C describes Tay-Sachs disease, not Niemann-Pick. Option D describes Chediak-Higashi syndrome. Option E describes VEXAS syndrome."
  },
  {
    num: 416,
    stem: "Regarding monocyte kinetics, tissue differentiation, and the reticuloendothelial system, which of the following statements most accurately integrates the lifespan of circulating monocytes, their tissue transformation, and the functional diversity of macrophages?",
    options: {
      A: "Monocytes spend 6–10 hours in the circulation before entering tissues; after transformation to macrophages they survive only 4–5 days and must be continuously replenished from the blood",
      B: "Monocytes circulate for 20–40 hours, then enter tissues where they mature into macrophages with an extravascular lifespan of several months to years; in tissues they become self-replicating without blood replenishment",
      C: "Monocytes and granulocytes arise from separate lineage-committed progenitors that do not share a common precursor; GM-CSF stimulates only granulocytes while M-CSF stimulates only monocytes",
      D: "Tissue macrophages are terminally differentiated cells that lose all proliferative capacity and cannot adapt their function to different tissue microenvironments",
      E: "Monocytes transform directly into dendritic cells in lymph nodes and lose all phagocytic capability; dendritic cells are not part of the reticuloendothelial system"
    },
    answer: "B",
    explanation: "Hoffbrand describes monocytes as spending only a short time in the marrow and, after circulating for 20–40 hours, leaving the blood to enter tissues where they mature and carry out their principal functions. Their extravascular life span after transformation to macrophages (histiocytes) may be as long as several months or even years. In tissues the macrophages become self-replicating without replenishment from the blood. They assume specific functions in different tissues, e.g. lymph nodes (macrophages, antigen-presenting cells), brain (microglia), liver (Kupffer cells), lung (alveolar macrophages), kidney (intraglomerular mesangial cells), and serosal macrophages. GM-CSF and M-CSF are involved in monocyte production and activation. Option A incorrectly applies neutrophil kinetics (6–10 hours circulation, 4–5 days in tissues) to monocytes. Option C is incorrect because granulocytes and monocytes are formed from a common precursor cell. Option D is incorrect because tissue macrophages do become self-replicating and adapt functionally to their tissue environment. Option E is incorrect because while dendritic cells derive mainly from a separate lineage, monocytes mature into macrophages, not dendritic cells, and macrophages retain phagocytic capability."
  },
  {
    num: 417,
    stem: "Regarding the peripheral blood findings of reactive neutrophilia with immature cells, which of the following statements most accurately distinguishes a leukaemoid reaction from a leuco-erythroblastic reaction and integrates their underlying pathophysiology?",
    options: {
      A: "A leukaemoid reaction is characterized by the presence of erythroblasts and granulocyte precursors in the blood, most commonly due to metastatic neoplasm in the marrow or primary myelofibrosis",
      B: "A leuco-erythroblastic reaction is an excessive reactive leucocytosis with immature myeloid cells but no erythroblasts; it is typically caused by severe bacterial infection or severe haemolysis",
      C: "A leukaemoid reaction is an excessive reactive leucocytosis with immature myeloid cells (myeloblasts, promyelocytes, myelocytes) in peripheral blood, caused by severe infection, severe haemolysis, or metastatic cancer; a leuco-erythroblastic reaction additionally contains erythroblasts and is due to marrow infiltration or fibrosis",
      D: "Both reactions are exclusively seen in chronic myeloid leukaemia and indicate progression to blast crisis; immediate cytoreductive therapy with hydroxyurea is indicated",
      E: "The leukaemoid reaction is defined by eosinophil counts >1.5 × 10⁹/L for 6 months with tissue damage; it requires corticosteroids as first-line therapy"
    },
    answer: "C",
    explanation: "Hoffbrand describes the leukaemoid reaction as an excessive reactive leucocytosis usually characterized by the presence of immature cells (myeloblasts, promyelocytes, myelocytes) in the peripheral blood. Underlying disorders include severe or chronic infections, severe haemolysis, or metastatic cancer. Leukaemoid reactions are often particularly marked in children. The leuco-erythroblastic reaction is characterized by the presence of erythroblasts and granulocyte precursors in the blood. It is due to metastatic infiltration of the marrow or certain benign or neoplastic blood disorders, including primary myelofibrosis, acute and chronic myeloid leukaemias, myeloma, lymphoma, miliary tuberculosis, severe megaloblastic anaemia, severe haemolysis, osteopetrosis, and secondary marrow fibrosis. Option A and B reverse the definitions. Option D is incorrect because both reactions are reactive, not specific to CML blast crisis. Option E incorrectly describes the hypereosinophilic syndrome."
  },
  {
    num: 418,
    stem: "Regarding ethnic variation in neutrophil counts and the Duffy antigen chemokine receptor (DARC), which of the following statements most accurately integrates the genetic basis, evolutionary selection pressure, and clinical significance?",
    options: {
      A: "Up to 98% of people of West African origin carry a DARC polymorphism causing loss of expression on red cells, which protects against Plasmodium falciparum malaria and raises the neutrophil count by 0.3–0.5 × 10⁹/L",
      B: "The DARC polymorphism is inherited in an autosomal dominant pattern and causes severe congenital neutropenia due to defective neutrophil elastase; G-CSF is required for treatment",
      C: "Up to 98% of people of West African origin carry a DARC polymorphism causing loss of red cell DARC expression, which protects against Plasmodium vivax malaria and is associated with a lower median neutrophil count of 0.3–0.5 × 10⁹/L without clinical consequence",
      D: "Loss of DARC expression occurs exclusively on leucocytes and causes leucocyte adhesion deficiency with recurrent bacterial and fungal infections",
      E: "The DARC polymorphism is located on the Y chromosome and explains the higher neutrophil counts seen in males of all ethnicities"
    },
    answer: "C",
    explanation: "Hoffbrand describes that up to 98% of people of West African origin carry a polymorphism in the Duffy antigen chemokine receptor gene DARC which leads to loss of DARC expression on red cells. This has been selected for during evolution because the malaria parasite Plasmodium vivax uses DARC as a receptor to enter the red cell. DARC is a chemokine receptor and the loss of its expression affords some protection from malaria. Loss on leucocytes is associated with lowering of the median neutrophil count by around 0.3–0.5 × 10⁹/L. A similar effect is seen in some populations in the Middle East. The reduction in the neutrophil count may result from increased neutrophil margination. This occurs in other ethnic groups without significant clinical consequences. Option A is incorrect because the protection is against Plasmodium vivax, not P. falciparum, and the neutrophil count is lowered, not raised. Option B is incorrect because DARC is unrelated to ELANE2 or severe congenital neutropenia. Option D is incorrect because DARC loss does not cause leucocyte adhesion deficiency, which is due to integrin mutations. Option E is incorrect because DARC is not on the Y chromosome and does not explain sex-based differences in neutrophil counts."
  },
  {
    num: 419,
    stem: "Regarding the oxygen-dependent and oxygen-independent mechanisms of microbial killing by neutrophils, which of the following statements most accurately describes the enzymatic pathways, their interactions, and the contribution of NETosis?",
    options: {
      A: "The oxygen-dependent pathway generates superoxide via NADH oxidase; myeloperoxidase is absent from primary granules and has no role in bacterial killing",
      B: "Superoxide, hydrogen peroxide, and activated oxygen species are generated from O₂ and NADPH; myeloperoxidase in primary granules reacts with H₂O₂ and halide to kill bacteria, while lactoferrin, nitric oxide, microbicidal proteins, and NETs provide additional killing mechanisms",
      C: "Bacterial killing is exclusively oxygen-independent and relies solely on lactoferrin depriving bacteria of iron; NADPH oxidase is only active during phagocytosis of viruses",
      D: "NETs consist of RNA and defensins released only during necrosis; they have no role in thrombosis or inflammation",
      E: "Nitric oxide is generated exclusively by eosinophils through arginase and is not involved in neutrophil-mediated microbial killing"
    },
    answer: "B",
    explanation: "Hoffbrand describes killing and digestion as occurring by oxygen-dependent and oxygen-independent pathways. In the oxygen-dependent reactions, superoxide (O₂⁻), hydrogen peroxide (H₂O₂) and other activated oxygen species are generated from O₂ and reduced NADPH. In neutrophils, H₂O₂ reacts with myeloperoxidase and intracellular halide to kill bacteria; activated oxygen may also be involved. Nitric oxide (NO), generated through NO synthase from L-arginine, is an oxygen-independent mechanism. Another non-oxidative microbicidal mechanism involves microbicidal proteins such as cathepsin G, lysozyme, and elastase. Lactoferrin is bacteriostatic by depriving bacteria of iron and by generating free radicals. NETs consist of a network of extracellular strings of DNA associated with modified histones and granular enzymes which together kill microbes. NETosis may result from cell disintegration or from viable cells, and its importance in inflammation and thrombosis is discussed in Chapter 29. Option A is incorrect because NADPH oxidase (not NADH) generates superoxide, and myeloperoxidase is present in primary granules and is critical for killing. Option C is incorrect because killing is not exclusively oxygen-independent and NADPH oxidase is active during bacterial phagocytosis. Option D is incorrect because NETs contain DNA, not RNA, and are released by both necrosis and viable cells, and they do contribute to thrombosis. Option E is incorrect because NO is generated by neutrophils via NO synthase, not by eosinophils via arginase."
  },
  {
    num: 420,
    stem: "Regarding the WHO 2022 classification of histiocytic and dendritic cell neoplasms and their molecular drivers, which of the following statements most accurately describes the shared pathological features and targeted therapeutic approaches?",
    options: {
      A: "All histiocytic neoplasms are driven by mutations in the UBA1 gene on the X chromosome; treatment is with corticosteroids and JAK2 inhibitors",
      B: "Histiocytic and dendritic cell neoplasms frequently show mutations in the MAPK pathway (BRAF, ARAF, MAP2K1, NRAS, KRAS); CD163 is a useful marker, and BRAF or MEK inhibitors are targeted treatment options",
      C: "Histiocytic neoplasms are uniformly CD1a-negative and S100-negative; Langerhans cell histiocytosis does not express langerin and is treated exclusively with chemotherapy",
      D: "Juvenile xanthogranuloma is caused by BRAF V600E mutations and responds to vemurafenib; Erdheim-Chester disease is caused by mutations in the M-CSF receptor",
      E: "Plasmacytoid dendritic cell neoplasms express myeloid antigens CD33 and CD11b and are negative for CD4; they are treated with enzyme replacement therapy"
    },
    answer: "B",
    explanation: "Hoffbrand states that dendritic and histiocytic neoplasms frequently show mutations in the MAPK pathway of genes BRAF, ARAF, MAP2K1, NRAS and KRAS. CD163 is positive and so a useful marker. Treatments have been developed that target the MAPK pathway such as BRAF and MEK inhibitors. Langerhans cell histiocytosis, the commonest histiocytic disorder, is associated with langerin (CD207) positive, CD1a and S100 positive histiocytes. The BRAF V600E mutation is present in a majority of cases. Erdheim-Chester disease shares similar molecular drivers with LCH and can co-exist with it. Juvenile xanthogranuloma is caused by mutations of the receptor for M-CSF, not BRAF. Plasmacytoid dendritic cells lack myeloid antigens, have a plasma cell appearance, but express early T-cell markers including CD4. Option A is incorrect because UBA1 mutations drive VEXAS syndrome, not histiocytic neoplasms. Option C is incorrect because LCH is CD1a-positive, S100-positive, and langerin-positive, and targeted therapy is now available. Option D reverses the mutations of juvenile xanthogranuloma (M-CSF receptor) and incorrectly assigns BRAF V600E to it. Option E is incorrect because plasmacytoid dendritic cells express CD4 and lack myeloid antigens, and they are not treated with enzyme replacement therapy."
  }
];
