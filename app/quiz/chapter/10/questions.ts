export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 141,
    stem: "A 28-year-old man with sickle cell anaemia presents with fever and a cough productive of rusty sputum. Peripheral blood film review shows Howell–Jolly bodies, target cells, and acanthocytes. Which of the following best explains the underlying pathophysiological basis for his increased susceptibility to this particular infection and the blood film abnormalities observed?",
    options: {
      A: "Autosplenectomy from repeated splenic infarction has resulted in functional hyposplenism, abolishing the marginal zone IgM-mediated defence against encapsulated bacteria and the splenic culling of nuclear remnants from red cells.",
      B: "The blood film changes are secondary to iron overload from recurrent transfusions, and the infection is due to granulocyte dysfunction inherent to sickle cell disease.",
      C: "Hyposplenism in sickle cell disease is caused by autoimmune destruction of splenic tissue by anti-splenocyte antibodies, which also produces haemolysis and exposes the patient to opportunistic viral pathogens.",
      D: "Howell–Jolly bodies indicate accelerated erythropoiesis in the bone marrow, and the pneumonia is a complication of chronic hypoxia rather than loss of splenic immune function.",
      E: "Target cells and acanthocytes arise from membrane lipid abnormalities caused by the sickle mutation itself, and splenic function remains entirely normal in adult sickle cell patients."
    },
    answer: "A",
    explanation: "Hoffbrand’s Essential Haematology, 9th Edition, describes how the spleen in sickle cell anaemia undergoes progressive infarction and fibrosis from childhood onwards, a process termed autosplenectomy, leading to functional hyposplenism. The text notes that hyposplenism is revealed by blood film findings of Howell–Jolly bodies (DNA remnants), target cells, acanthocytes and siderotic granules (Table 10.3). The splenic marginal zone contains a unique subset of B cells capable of mounting rapid IgM responses to encapsulated bacteria such as Streptococcus pneumoniae without T-cell help. Loss of this function renders hyposplenic patients, including those with sickle cell disease, particularly vulnerable to overwhelming infection by encapsulated organisms. The rusty sputum and fever are classic for pneumococcal pneumonia, the most characteristic infection in this setting."
  },
  {
    num: 142,
    stem: "A 42-year-old woman undergoes emergency splenectomy following traumatic rupture in a road traffic accident. On postoperative day 10, her platelet count is 950 × 10⁹/L. She is otherwise well, with no thrombotic symptoms. Which of the following is the most appropriate immediate management strategy, taking into account the expected natural history of the post-splenectomy platelet response?",
    options: {
      A: "Urgent therapeutic plasma exchange to prevent catastrophic arterial thrombosis from the extreme thrombocytosis.",
      B: "Immediate initiation of lifelong oral penicillin 250 mg twice daily and low-dose aspirin, with explanation that the platelet count typically peaks at 1–2 weeks and then gradually declines.",
      C: "Hydroxyurea to suppress platelet production, because counts above 900 × 10⁹/L after splenectomy invariably indicate essential thrombocythaemia.",
      D: "Observation only, as post-splenectomy thrombocytosis never exceeds 600 × 10⁹/L and therefore this count must be a laboratory artifact.",
      E: "Therapeutic anticoagulation with low-molecular-weight heparin for 6 months, because the risk of portal vein thrombosis is 80% in this setting."
    },
    answer: "B",
    explanation: "Hoffbrand states that after splenectomy the platelet count can rise dramatically in the early postoperative period, reaching levels of up to 1000 × 10⁹/L and peaking at 1–2 weeks. Thrombotic complications are seen in some patients, and prophylactic aspirin or heparin is often required during this period. Long-term alterations in the peripheral blood count may also be seen, including persistent thrombocytosis, lymphocytosis or monocytosis. Crucially, all splenectomised patients require lifelong antibiotic prophylaxis (oral penicillin 250 mg bd, or erythromycin if penicillin-allergic) and vaccination against pneumococcus, Haemophilus influenzae type B, meningococcus and influenza (Table 10.5). The platelet count typically settles over subsequent weeks, so immediate anticoagulation or cytoreduction is not indicated unless thrombosis actually occurs."
  },
  {
    num: 143,
    stem: "A 56-year-old man from Nigeria presents with massive splenomegaly extending to the right iliac fossa, hepatomegaly, severe anaemia, leucopenia, marked lymphocytosis, and a high serum IgM level with elevated malarial antibody titres. Peripheral blood smear shows scanty parasitaemia. Which of the following conclusions best integrates the epidemiology, pathophysiology, and management of this disorder?",
    options: {
      A: "This represents active falciparum malaria with direct parasitic infiltration of the spleen; intravenous artesunate is the definitive treatment and splenectomy is contraindicated.",
      B: "The findings are consistent with tropical splenomegaly syndrome, a reactive lymphoproliferative disorder driven by an abnormal host immune response to chronic malarial antigen exposure; antimalarial therapy is the preferred management.",
      C: "This is endemic Burkitt lymphoma with splenic involvement; the high IgM reflects monoclonal paraprotein production, and chemotherapy should be initiated immediately.",
      D: "The presentation is classic for chronic myeloid leukaemia in blast crisis; the massive splenomegaly and high IgM result from clonal myeloproliferation, and a BCR::ABL1 fusion should be sought urgently.",
      E: "The patient has advanced hepatosplenic schistosomiasis; the anaemia and leucopenia are caused by portal hypertension and hypersplenism, and praziquantel will reverse the splenomegaly completely."
    },
    answer: "B",
    explanation: "Hoffbrand describes the tropical splenomegaly syndrome as a disorder of massive splenomegaly found in malarious zones of the tropics. While malaria is the fundamental cause, it is not the result of active malarial infection, as parasitaemia is usually scanty and malarial pigment is absent in biopsy material. Instead, it is thought to represent an abnormal host response to the continual presence of malarial antigen, producing a reactive and relatively benign lymphoproliferative disorder predominantly affecting the liver and spleen. Clinical features include gross splenomegaly, hepatomegaly, severe anaemia, leucopenia, sometimes marked lymphocytosis, high serum IgM, and high malarial antibody titres. Although splenectomy corrects the pancytopenia, it increases the risk of fulminant malarial infection; antimalarial therapy has proved successful in managing many affected patients."
  },
  {
    num: 144,
    stem: "A 34-year-old woman with coeliac disease, well controlled on a gluten-free diet, presents with two episodes of pneumococcal bacteraemia in the past 18 months. Her peripheral blood film shows Howell–Jolly bodies and target cells. Her immunoglobulin levels are normal and she has not had splenectomy. Which of the following is the most accurate mechanistic explanation for her recurrent sepsis and the most appropriate long-term preventive strategy?",
    options: {
      A: "Coeliac disease causes autoimmune neutropenia via anti-neutrophil antibodies; G-CSF prophylaxis is indicated to prevent bacterial sepsis.",
      B: "Gluten-induced enteropathy can cause functional hyposplenism through an immune-mediated mechanism; she should receive pneumococcal, Hib, meningococcal and influenza vaccines, plus lifelong prophylactic penicillin 250 mg twice daily.",
      C: "The blood film changes indicate underlying hereditary spherocytosis, which is associated with gallstones and recurrent sepsis; splenectomy should be performed.",
      D: "Howell–Jolly bodies in coeliac disease reflect folate deficiency from malabsorption; high-dose folic acid will correct both the blood film and the infection risk.",
      E: "Recurrent pneumococcal sepsis in this context is due to IgA deficiency secondary to villous atrophy; monthly intravenous immunoglobulin replacement is indicated."
    },
    answer: "B",
    explanation: "Hoffbrand lists gluten-induced enteropathy (coeliac disease) among the causes of hyposplenism (Table 10.2), along with sickle cell disease, amyloidosis, systemic lupus erythematosus, and others. Functional hyposplenism is revealed by blood film findings of Howell–Jolly bodies and target cells (Table 10.3). The pathophysiology is thought to involve immune-mediated changes in splenic architecture or function rather than anatomical loss. Because hyposplenic patients are at lifelong increased risk of infection from encapsulated bacteria—particularly Streptococcus pneumoniae, Haemophilus influenzae type B and Neisseria meningitidis—the textbook recommends vaccination against these organisms, plus lifelong prophylactic oral penicillin 250 mg twice daily (or erythromycin for penicillin-allergic patients), and provision of standby antibiotics for fever."
  },
  {
    num: 145,
    stem: "A 62-year-old man with cirrhosis and portal hypertension is found to have a platelet count of 55 × 10⁹/L, haemoglobin 102 g/L, and white cell count 3.2 × 10⁹/L. Bone marrow examination shows normal trilineage haemopoiesis with adequate megakaryocytes. Abdominal ultrasound confirms a spleen measuring 18 cm in craniocaudal diameter. Which of the following best explains the haematological abnormalities and the likely outcome if the underlying portal hypertension were corrected?",
    options: {
      A: "The pancytopenia is caused by direct viral suppression of marrow progenitors from chronic hepatitis C infection; antiviral therapy will restore normal counts regardless of spleen size.",
      B: "This is hypersplenism secondary to congestive splenomegaly; up to 90% of platelets and 40% of red cells may be pooled in the enlarged spleen, and reduction of splenic congestion typically leads to rapid improvement in peripheral blood counts.",
      C: "The blood counts reflect aplastic anaemia superimposed on cirrhosis; the enlarged spleen is incidental, and immunosuppression with ciclosporin is required.",
      D: "Low counts are due to nutritional deficiency from chronic liver disease; thiamine and vitamin B12 supplementation will correct the cytopenias.",
      E: "The findings indicate leukoerythroblastic transformation from extramedullary haemopoiesis; the spleen has reactivated foetal haemopoiesis, and cytotoxic chemotherapy is indicated."
    },
    answer: "B",
    explanation: "Hoffbrand defines hypersplenism as a clinical syndrome seen in any form of splenomegaly, characterised by enlargement of the spleen and reduction of at least one cell line in the blood in the presence of normal bone marrow function. The text explains that as the spleen enlarges, the proportion of haemopoietic cells within the organ increases, such that up to 40% of the red cell mass and 90% of platelets may be pooled in an enlarged spleen. Portal hypertension from cirrhosis is a common cause of congestive splenomegaly and hypersplenism (Table 10.1). Because the bone marrow is functionally normal, correction of the underlying portal hypertension—whether by transjugular intrahepatic portosystemic shunt (TIPS), liver transplantation, or in historical practice splenectomy—typically results in rapid improvement in the peripheral blood count as the sequestered cells return to the circulation."
  },
  {
    num: 146,
    stem: "Which of the following statements most accurately describes the anatomical organisation of the white pulp and its functional implications for adaptive immunity?",
    options: {
      A: "The periarteriolar lymphatic sheath (PALS) is equivalent to the B-cell follicle of the lymph node and is the primary site of T-independent IgM responses to capsulated bacteria.",
      B: "The marginal zone surrounds the central arteriole directly and is composed exclusively of T lymphocytes that migrate from the red pulp sinuses into the white pulp.",
      C: "The PALS lies directly around the central arteriole and is equivalent to the T zone of the lymph node; B-cell follicles adjacent to the PALS are surrounded by the marginal zone, which is rich in macrophages and dendritic cells that initiate immune responses.",
      D: "The white pulp lacks any organisation analogous to lymph nodes and functions solely as a passive filter for aged red blood cells via macrophage phagocytosis.",
      E: "B-cell follicles in the spleen are located within the red pulp cords and depend on plasma skimming for antigen delivery, while T cells reside exclusively in the venous sinuses."
    },
    answer: "C",
    explanation: "Hoffbrand Fig. 10.1 schematically represents the blood circulation in the spleen. The text states that the central arterioles are surrounded by a core of lymphatic tissue known as white pulp, which has an organisation similar to lymph nodes. The periarteriolar lymphatic sheath (PALS) lies directly around the arteriole and is equivalent to the T zone of the lymph node. B-cell follicles are found adjacent to the PALS and these are surrounded by the marginal and perifollicular zones, which are rich in macrophages and dendritic cells. Lymphocytes migrate into white pulp from the sinuses of the red pulp or from vessels that end directly in the marginal and perifollicular zones. This structural arrangement places antigen-presenting cells in close proximity to both B and T lymphocytes, enabling efficient adaptive immune responses to blood-borne antigens."
  },
  {
    num: 147,
    stem: "Regarding the mechanisms by which the red pulp monitors and removes aged or abnormal red blood cells, which of the following best integrates the roles of the splenic cords, sinus endothelium, and macrophages?",
    options: {
      A: "Red cells pass through 2-μm fenestrations in the sinus endothelium; only cells with normal biconcave shape can deform sufficiently, while rigid or misshapen cells are phagocytosed by interstitial fibroblasts within the cords.",
      B: "The cords possess a continuous endothelial lining connected to capillaries, forming a closed system in which complement-mediated haemolysis is the primary mechanism of red cell removal.",
      C: "In the relatively hypoxic environment of the red pulp and because of plasma skimming in the cords, membrane flexibility of aged and abnormal red cells is impaired; they become trapped within the cords and are ingested by macrophages after failing to cross the sinus endothelium.",
      D: "Howell–Jolly bodies are extruded from red cells by mechanical shearing forces in the splenic artery, and Heinz bodies are dissolved by high oxygen tension within the venous sinuses.",
      E: "Reticulocytes are retained permanently in the red pulp until they synthesise adult haemoglobin; only foetal haemoglobin-containing cells are allowed to enter the general circulation."
    },
    answer: "C",
    explanation: "Hoffbrand describes the red pulp as comprising cords and sinuses that form an open blood system unique to the spleen, with a loose reticular connective tissue network lined by fibroblasts and many macrophages. Blood re-enters the circulation by passing across the endothelium of venous sinuses. The text explains that in the relatively hypoxic environment of the red pulp, and because of plasma skimming in the cords, the membrane flexibility of aged and abnormal red cells is impaired and they are trapped within the sinus, where they are ingested by macrophages. This process is increased if there is a fault in red cell metabolism, if they are coated with antibody, or if they are misshapen or rigid. The spleen also removes excess DNA (Howell–Jolly bodies), siderotic granules (Pappenheimer bodies) and Heinz bodies from intact red cells through a process called pitting."
  },
  {
    num: 148,
    stem: "Which of the following most accurately describes the dual circulation system of the spleen and the physiological significance of the slow (open) circulation pathway in splenomegaly?",
    options: {
      A: "All splenic blood flows through a closed system of capillaries with continuous endothelium; the concept of an open circulation is an outdated histological artefact.",
      B: "The majority of arterioles end in cords lacking endothelial lining, constituting an open circulation in which blood must traverse sinus endothelium to re-enter venous drainage; this slow pathway (30–60 minutes) becomes increasingly important in splenomegaly, enhancing filtration and immune surveillance.",
      C: "Rapid circulation (1–2 minutes) occurs exclusively in the white pulp, delivering antigens to lymphocytes, while slow circulation occurs in the red pulp for red cell storage; splenomegaly reverses this distribution.",
      D: "The closed system drains into the hepatic portal vein directly, bypassing the splenic vein, and is responsible for the thrombocytopenia of hypersplenism.",
      E: "Slow circulation is a pathological finding seen only in myelofibrosis and represents extramedullary haemopoiesis, not a normal physiological variant."
    },
    answer: "B",
    explanation: "Hoffbrand Fig. 10.1 illustrates that the majority of blood flows in an open circulation through splenic cords and regains entry into the circulation through the venous sinuses. The text explains that the majority of arterioles end in cords, which lack an endothelial lining and form an open blood system unique to the spleen. A minority of the splenic vasculature is closed, in which the arterial and venous systems are connected by capillaries with a continuous endothelial layer. There are both rapid (1–2 min) circulations in the closed system and slow (30–60 min) circulations in the open system. The textbook explicitly states that the slow circulation becomes increasingly important in splenomegaly, as the expanded red pulp allows more blood to traverse the open pathway, increasing the time available for macrophage surveillance of red cell integrity and for immune cell interactions."
  },
  {
    num: 149,
    stem: "Regarding extramedullary haemopoiesis in the spleen, which of the following statements most precisely distinguishes normal developmental haemopoiesis from pathological extramedullary haemopoiesis in adult life?",
    options: {
      A: "The spleen is the dominant site of erythropoiesis from birth through puberty, and pathological extramedullary haemopoiesis is defined only by the presence of lymphoid precursors in the spleen after age 18.",
      B: "The spleen undergoes transient haemopoiesis at 3–7 months of foetal life, but is not a site of erythropoiesis in the normal infant, child or adult; pathological extramedullary haemopoiesis occurs when haemopoiesis is re-established in the spleen due to severe bone marrow failure, myelofibrosis, or chronic severe haemolytic and megaloblastic anaemias.",
      C: "Normal splenic haemopoiesis persists until 6–7 months of postnatal life, after which the bone marrow takes over; any erythropoietic activity in the spleen after this age is always neoplastic.",
      D: "Extramedullary haemopoiesis in the adult spleen results exclusively from homing of stem cells from the bone marrow and never from reactivation of dormant stem cells within the spleen itself.",
      E: "The spleen normally produces platelets throughout life, and extramedullary haemopoiesis refers only to the aberrant production of granulocytes within splenic red pulp."
    },
    answer: "B",
    explanation: "Hoffbrand states that the spleen, like the liver, undergoes a transient period of haemopoiesis at around 3–7 months of foetal life, but is not a site of erythropoiesis in the normal infant, child or adult. However, haemopoiesis may be present from birth in both organs in certain genetic disorders of haemoglobin synthesis such as thalassaemia major, or be re-established as extramedullary haemopoiesis in disorders such as primary myelofibrosis or in chronic severe haemolytic and megaloblastic anaemias. The textbook notes that extramedullary haemopoiesis may result either from reactivation of dormant stem cells within the spleen or homing of stem cells from the bone marrow to the spleen. This precise distinction between the normal transient foetal phase and the pathological reactivation in adult life is central to understanding the clinical significance of splenic enlargement in marrow failure states."
  },
  {
    num: 150,
    stem: "A 7-year-old child with hereditary spherocytosis is scheduled for elective laparoscopic splenectomy. The parents ask about the vaccination and antibiotic prophylaxis plan. Which of the following best reflects the current standard schedule for preventing post-splenectomy sepsis, as outlined in Hoffbrand?",
    options: {
      A: "Vaccination is unnecessary in children because their residual immune function is adequate; only adults over 16 years require pneumococcal vaccine.",
      B: "Pneumococcal conjugate vaccine (PCV13), pneumococcal polysaccharide vaccine (PPV), Haemophilus influenzae type B/meningococcal C conjugate (HibMenC), and meningococcal ACWY conjugate vaccine should be administered; where possible, the course should ideally be started at least 2 weeks before surgery, with booster doses of PPV every 5 years and lifelong oral penicillin 250 mg twice daily.",
      C: "Only the 23-valent pneumococcal polysaccharide vaccine is required, as it provides broader coverage than conjugate vaccines; antibiotics are only needed for the first 2 years post-splenectomy.",
      D: "Live vaccines are contraindicated in asplenic patients and should be avoided; inactivated vaccines alone provide sufficient protection against encapsulated bacteria.",
      E: "The child should receive daily co-trimoxazole rather than penicillin, because co-trimoxazole covers Pneumocystis jirovecii, which is the most dangerous pathogen in hyposplenic patients."
    },
    answer: "B",
    explanation: "Hoffbrand Table 10.5 reproduces the British Society for Haematology suggested schedule for vaccine immunization in individuals with asplenia or splenic hypofunction, originally published by Davies et al. (2011). For children over 5 years (regardless of vaccination history), the schedule includes HibMenC vaccine, pneumococcal polysaccharide vaccine (PPV), and meningococcal ACWY conjugate vaccine, with PPV boosters every 5 years. Where possible, the vaccination course should ideally be started at least 2 weeks before surgery. The text also recommends prophylactic oral penicillin 250 mg bd, usually for life, with high-risk groups including those aged under 16 years. All types of vaccine, including live vaccines, can be given safely to hyposplenic individuals, although the immune response to vaccination may be impaired. This comprehensive approach addresses the lifelong susceptibility to encapsulated organisms that defines the post-splenectomy state."
  },
  {
    num: 431,
    stem: `A 52-year-old man presents with 6 months of progressive fatigue, left upper quadrant fullness and early satiety. Examination reveals massive splenomegaly extending toward the right iliac fossa. Full blood count shows haemoglobin 98 g/L, white cell count 145 × 10⁹/L with a marked left shift and basophilia, and platelets 680 × 10⁹/L. Which of the following best explains the splenic enlargement and guides the most appropriate immediate management?`,
    options: {
      A: `The spleen is infiltrated by metastatic adenocarcinoma; whole-body PET-CT is required and splenectomy is potentially curative.`,
      B: `This is primary myelofibrosis with extensive extramedullary haemopoiesis; a JAK2 inhibitor should be started and splenectomy is first-line therapy.`,
      C: `Portal hypertension from occult cirrhosis is causing congestive splenomegaly and hypersplenism; treatment is a non-selective beta-blocker and transjugular portosystemic shunt.`,
      D: `Chronic myeloid leukaemia with leucostasis and splenic infiltration is the most likely cause; urgent cytoreduction and BCR::ABL1 fusion testing are required.`,
      E: `Tropical splenomegaly syndrome should be suspected because of the massive spleen; antimalarial therapy is the priority.`
    },
    answer: "D",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, lists chronic myeloid leukaemia among the causes of massive splenomegaly (Table 10.1). CML characteristically produces a greatly enlarged spleen through leukaemic infiltration and congestion, accompanied by marked leucocytosis with left shift and often thrombocytosis. The clinical picture of massive splenomegaly with a very high white cell count and basophilia is classic for CML rather than primary myelofibrosis, portal hypertension or tropical splenomegaly syndrome. Immediate management requires confirmation by cytogenetics or molecular testing for the BCR::ABL1 fusion and rapid cytoreduction to reduce leucostasis, with targeted therapy thereafter.`
  },
  {
    num: 432,
    stem: `A 19-year-old university student with confirmed infectious mononucleosis becomes pale, tachycardic and hypotensive after being tackled during a rugby match. He has marked left upper quadrant tenderness and referred pain to the left shoulder. Bedside focused abdominal ultrasound for trauma (FAST) demonstrates free fluid surrounding the spleen. Which of the following is the most appropriate immediate management decision?`,
    options: {
      A: `Arrange an urgent contrast-enhanced CT scan of the abdomen to grade the splenic injury before any surgical intervention.`,
      B: `Proceed immediately to laparotomy because hypotension with suspected splenic rupture indicates haemodynamic instability and active intraperitoneal bleeding.`,
      C: `Perform splenic artery angioembolization, which is preferred over surgery in all patients with traumatic splenic rupture.`,
      D: `Admit for observation with strict bed rest and serial haemoglobin measurements over the next 2 weeks.`,
      E: `Administer platelet transfusion and recombinant factor VIIa to correct bleeding before operative control.`
    },
    answer: "B",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, notes that splenectomy is now performed much more frequently after splenic rupture than for haematological disorders, and that focused abdominal ultrasound for trauma (FAST) is particularly useful for unstable patients with a ruptured spleen. A young patient with known infectious mononucleosis who becomes hypotensive after abdominal trauma, with left upper quadrant pain, shoulder tip pain and FAST-positive free fluid, has a high probability of splenic rupture with active bleeding. In haemodynamically unstable trauma, the priority is rapid resuscitation and surgical control of haemorrhage rather than CT imaging. Angioembolization may preserve splenic function in selected stable patients, but it is not the first choice in the unstable patient.`
  },
  {
    num: 433,
    stem: `A 32-year-old woman with chronic immune thrombocytopenia has relapsed after corticosteroids, intravenous immunoglobulin and a thrombopoietin receptor agonist. Her platelet count is 14 × 10⁹/L despite therapy and she is scheduled for laparoscopic splenectomy. Which of the following preoperative plans is most appropriate?`,
    options: {
      A: `No additional vaccines or antibiotics are needed because she still has a spleen in situ and only post-splenectomy patients are at risk of encapsulated bacterial infection.`,
      B: `Give pneumococcal conjugate and polysaccharide vaccines, HibMenC and MenACWY conjugate vaccines at least 2 weeks before surgery, and arrange lifelong oral penicillin 250 mg twice daily starting postoperatively.`,
      C: `Give meningococcal vaccine only, because Neisseria meningitidis is the greatest threat after splenectomy and other vaccines are optional.`,
      D: `Start prophylactic aspirin immediately preoperatively to prevent the anticipated post-splenectomy thrombocytosis.`,
      E: `Defer all vaccination until at least 14 days after splenectomy because live vaccines are contraindicated before surgery.`
    },
    answer: "B",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, Table 10.5 gives the suggested immunization schedule for individuals with asplenia or splenic hypofunction, recommending that the vaccination course should ideally be started at least 2 weeks before surgery. For those over 5 years of age the schedule includes HibMenC, pneumococcal polysaccharide vaccine and meningococcal ACWY conjugate vaccine, with PPV boosters every 5 years. The text also recommends prophylactic oral penicillin 250 mg twice daily, usually for life, with high-risk groups including patients under 16 years of age. All vaccine types, including live vaccines, can be given safely to hyposplenic individuals, so preoperative immunization is both safe and desirable.`
  },
  {
    num: 434,
    stem: `A 68-year-old man with primary myelofibrosis has massive painful splenomegaly, early satiety, an 8 kg weight loss and recurrent left pleuritic pain. Bone marrow biopsy shows megakaryocyte hyperplasia and reticulin fibrosis, and he is JAK2 V617F-positive and transfusion-dependent. Which of the following best represents current expert-level management of his splenomegaly?`,
    options: {
      A: `Emergency splenectomy because massive splenomegaly in myelofibrosis is an absolute indication for surgery regardless of medical options.`,
      B: `Observation with periodic blood transfusions because splenomegaly in myelofibrosis rarely causes clinically important complications.`,
      C: `A JAK1/JAK2 inhibitor such as ruxolitinib as first-line cytoreductive therapy, with splenectomy reserved for selected patients who fail or cannot tolerate medical therapy.`,
      D: `Hydroxyurea alone typically produces durable complete resolution of massive splenomegaly and should be used before any JAK inhibitor.`,
      E: `Therapeutic splenic irradiation is the preferred initial treatment because it avoids surgical and infectious risks entirely.`
    },
    answer: "C",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, states that with advances in drug treatment of immune thrombocytopenia, chemotherapy and immunotherapy for lymphomas and chronic lymphocytic leukaemia, and the introduction of JAK2 inhibitors for primary myelofibrosis, splenectomy for these conditions is now much less frequently indicated than previously. In JAK2-mutated myelofibrosis, a JAK1/JAK2 inhibitor such as ruxolitinib is the established medical therapy for symptomatic splenomegaly and constitutional symptoms. Splenectomy remains an option for selected patients with refractory symptomatic splenomegaly, severe cytopenias due to hypersplenism, or complications such as portal hypertension, but it carries significant perioperative risk and lifelong infectious prophylaxis is required.`
  },
  {
    num: 435,
    stem: `A 34-year-old man returns from rural India with 8 weeks of fever, drenching night sweats, weight loss and abdominal distension. Examination shows massive splenomegaly and hepatomegaly. Full blood count reveals haemoglobin 76 g/L, white cell count 2.4 × 10⁹/L and platelets 68 × 10⁹/L. Bone marrow aspirate shows macrophages distended with intracellular amastigotes. Which of the following is the most accurate diagnosis?`,
    options: {
      A: `Tropical splenomegaly syndrome from chronic malaria exposure; antimalarial therapy is definitive.`,
      B: `Acute falciparum malaria with overwhelming parasitaemia causing hypersplenism; intravenous artesunate is required.`,
      C: `Visceral leishmaniasis (kala-azar), in which Leishmania donovani complex parasites reside within macrophages of the spleen, liver and bone marrow.`,
      D: `Splenic diffuse large B-cell lymphoma with bone marrow infiltration; R-CHOP chemotherapy should be started.`,
      E: `Gaucher disease with glucocerebrosidase deficiency causing storage histiocytes in marrow and massive splenomegaly.`
    },
    answer: "C",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, Table 10.1 lists leishmaniasis as an infectious cause of splenomegaly, and specifically among the causes that can produce massive splenomegaly. Visceral leishmaniasis is characterized by prolonged fever, weight loss, pancytopenia and massive hepatosplenomegaly resulting from macrophage infection by Leishmania amastigotes. The presence of amastigote-laden macrophages in the bone marrow is diagnostic. Tropical splenomegaly syndrome is associated with high IgM and malarial antibodies rather than intracellular parasites, and acute malaria would show parasitaemia on blood film. Gaucher disease produces storage macrophages (Gaucher cells) with a characteristic wrinkled cytoplasm, not amastigotes.`
  },
  {
    num: 436,
    stem: `Which of the following statements most accurately compares the roles of ultrasound, CT, MRI and PET in evaluating the spleen?`,
    options: {
      A: `CT is the first-line modality for routine splenic size measurement and for assessing blood flow in the splenic, portal and hepatic veins; PET is reserved for iron quantification.`,
      B: `MRI is preferred for initial trauma assessment in haemodynamically unstable patients because it avoids ionizing radiation and is faster than ultrasound.`,
      C: `Ultrasound is the most frequently used technique to image the spleen and to assess blood flow in the splenic, portal and hepatic veins; CT gives superior structural detail and lymphadenopathy detection, MRI provides improved fine detail, and PET is used for lymphoma staging and residual disease.`,
      D: `PET alone is the investigation of choice for all splenic masses because it reliably distinguishes benign cysts from lymphoma without the need for biopsy.`,
      E: `FAST ultrasound cannot detect free peritoneal fluid and should never be used when splenic rupture is suspected.`
    },
    answer: "C",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, states that ultrasound is the most frequently used technique to image the spleen and can detect whether blood flow in the splenic, portal and hepatic veins is normal, as well as assessing liver size and consistency. It adds that focused abdominal ultrasound for trauma (FAST) is particularly useful for unstable patients, such as those with ruptured spleen. CT is preferable for detecting structural detail and associated lymphadenopathy, for example in lymphoma staging. MRI also gives improved fine detail structure, while PET is used particularly for initial staging and for detecting residual disease after treatment of lymphoma. Each modality therefore has a complementary role rather than a single best test for every scenario.`
  },
  {
    num: 437,
    stem: `Regarding the modern indications for splenectomy, which statement best integrates the impact of recent therapeutic advances?`,
    options: {
      A: `Splenectomy remains the first-line treatment for all adults with chronic immune thrombocytopenia because pharmacological therapies are uniformly ineffective.`,
      B: `The most frequent indication for splenectomy is now treatment of haematological disorders, whereas traumatic rupture is a rare event.`,
      C: `With advances in immune thrombocytopenia drugs, lymphoma chemoimmunotherapy and JAK2 inhibitors for primary myelofibrosis, splenectomy for haematological disease is now much less frequently indicated; trauma is currently the more common indication.`,
      D: `Splenectomy should be avoided after traumatic rupture because post-splenectomy sepsis is inevitable within the first year.`,
      E: `Prophylactic splenectomy is recommended for all patients with hereditary spherocytosis in the neonatal period to prevent gallstone disease.`
    },
    answer: "C",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, explains that surgical removal of the spleen may be indicated for treatment of haematological disorders but now much more frequently after splenic rupture. The text attributes this shift to advances in drug treatment of immune thrombocytopenia, chemotherapy and immunotherapy for lymphomas and chronic lymphocytic leukaemia, and the introduction of JAK2 inhibitors for primary myelofibrosis, all of which have made splenectomy for these conditions much less frequently indicated than previously. Splenectomy remains appropriate for selected cases of refractory ITP, certain haemolytic anaemias, lymphoid neoplasms and myelofibrosis, but trauma has become the dominant contemporary indication.`
  },
  {
    num: 438,
    stem: `Which combination of peripheral blood findings is most characteristic of functional hyposplenism, whether due to splenectomy or a non-surgical cause?`,
    options: {
      A: `Howell–Jolly bodies, target cells, acanthocytes and sometimes Pappenheimer bodies; post-splenectomy thrombocytosis, lymphocytosis or monocytosis may also be seen.`,
      B: `Schistocytes, nucleated red cells and marked leukoerythroblastosis with tear-drop poikilocytosis.`,
      C: `Macrocytosis, hypersegmented neutrophils and a low serum vitamin B12 concentration.`,
      D: `Sickle cells, Howell–Jolly bodies and basophilic stippling reflecting accelerated erythropoiesis.`,
      E: `Acanthocytes alone are pathognomonic for hyposplenism and always indicate abetalipoproteinaemia.`
    },
    answer: "A",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, Table 10.3 details the blood film appearances of hyposplenism, which include target cells, acanthocytes, irregularly contracted or crenated cells, Howell–Jolly bodies (DNA remnants) and siderotic iron granules (Pappenheimer bodies). The text also notes that long-term alterations after splenectomy may include persistent thrombocytosis, lymphocytosis or monocytosis. Schistocytes and tear-drop cells are more typical of mechanical damage or myelofibrosis; macrocytosis with hypersegmented neutrophils points to megaloblastic anaemia; and while acanthocytes can occur in hyposplenism, they are not pathognomonic and may be seen in other conditions such as abetalipoproteinaemia or severe liver disease.`
  },
  {
    num: 439,
    stem: `Why are patients with absent or hypofunctional spleens particularly vulnerable to overwhelming infection by encapsulated bacteria such as Streptococcus pneumoniae?`,
    options: {
      A: `They cannot produce IgG against protein antigens because splenic T cells are the sole source of T-helper function for systemic antibody responses.`,
      B: `They lose the marginal-zone B-cell population that mounts rapid T-independent IgM responses to polysaccharide capsular antigens, allowing unchecked bacterial proliferation and dissemination.`,
      C: `The spleen is the only site of neutrophil production, and hyposplenism therefore causes severe neutropenia and impaired phagocytosis.`,
      D: `Complement component C3 is exclusively synthesized in the spleen, so its absence prevents opsonisation of encapsulated organisms.`,
      E: `Encapsulated bacteria are intracellular pathogens that are normally killed by splenic red pulp macrophages through oxygen-dependent mechanisms unique to the spleen.`
    },
    answer: "B",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, describes how macrophages and dendritic cells in the marginal zone initiate immune responses and present antigen to B and T cells, and notes that a unique set of B cells are able to produce an IgM response to bacterial pathogens without the help of T cells. This arrangement is particularly efficient at mounting an immune response to encapsulated bacteria. Loss of the spleen removes the marginal-zone B-cell niche required for rapid T-independent IgM production against polysaccharide capsules, which is why Streptococcus pneumoniae, Haemophilus influenzae type B and Neisseria meningitidis cause fulminant sepsis in hyposplenic patients. Other immune functions, including IgG responses and complement production, are not spleen-dependent.`
  },
  {
    num: 440,
    stem: `Which statement best describes the process of splenic 'pitting' and its relationship to red cell quality control?`,
    options: {
      A: `Pitting is the mechanical fragmentation of senescent red cells by turbulent shear forces in the trabecular arteries, independent of macrophage activity.`,
      B: `The spleen removes inclusions such as Howell–Jolly bodies, Heinz bodies and Pappenheimer bodies from intact red cells as they traverse the red pulp cords, improving the survival of mildly abnormal cells.`,
      C: `Pitting occurs only after complete intravascular haemolysis has released haemoglobin into the plasma, with macrophages scavenging cell fragments.`,
      D: `Howell–Jolly bodies are nuclear remnants that are added to red cells by the spleen to mark them for destruction in the liver.`,
      E: `Pitting requires an intact endothelial lining of the splenic cords and therefore occurs exclusively in the closed circulation.`
    },
    answer: "B",
    explanation: `Hoffbrand's Essential Haematology, 9th Edition, explains that the spleen has an essential role in the quality control of red cells by filtering, culling and pitting, removing excess DNA (Howell–Jolly bodies), siderotic granules (Pappenheimer bodies) and Heinz bodies. Figure 10.2 shows a peripheral blood film in splenic atrophy with Howell–Jolly bodies, Pappenheimer bodies and misshapen cells. Pitting is the process by which splenic macrophages extract inclusions from red cells without destroying the cells themselves, allowing cells with minor abnormalities to continue in the circulation. Severely rigid or antibody-coated cells are unable to negotiate the red pulp cords and sinuses and are instead culled by macrophages.`
  }
];
