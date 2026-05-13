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
  }
];
