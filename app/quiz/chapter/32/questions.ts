export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 61,
    stem: "A 68-year-old woman with rheumatoid arthritis presents with worsening fatigue over 3 months. Laboratory studies: haemoglobin 98 g/L, MCV 88 fL. Iron studies: serum iron 8 µmol/L, total iron-binding capacity 38 µmol/L, ferritin 195 µg/L, transferrin saturation 18%. C-reactive protein 52 mg/L. She was started on oral ferrous sulfate 200 mg three times daily by her general practitioner but returns 8 weeks later with no improvement in haemoglobin. Which of the following best explains the underlying pathophysiology and the most appropriate management?",
    options: {
      A: "The low serum iron and transferrin saturation confirm absolute iron deficiency; she needs intravenous iron because oral iron is poorly absorbed in the presence of anti-inflammatory drugs.",
      B: "This is anaemia of chronic disease secondary to rheumatoid arthritis; inflammatory cytokines drive hepcidin synthesis, which traps iron inside macrophages and blocks intestinal absorption, so oral iron is ineffective and the priority is treating the underlying inflammation.",
      C: "The normal ferritin with low serum iron is diagnostic of sideroblastic anaemia; she needs pyridoxine 200 mg daily and cessation of any disease-modifying antirheumatic drugs.",
      D: "This is chronic occult blood loss from gastric erosions caused by non-steroidal anti-inflammatory drug therapy; she needs urgent gastroscopy and switching to a COX-2 selective inhibitor.",
      E: "The elevated CRP and ferritin indicate an underlying infection such as tuberculosis; she needs sputum culture and anti-tuberculous therapy before addressing the anaemia."
    },
    answer: "B",
    explanation: "Hoffbrand describes the anaemia of chronic disease (ACD) as occurring in patients with chronic inflammatory and malignant disorders, with characteristic iron studies showing low serum iron, low total iron-binding capacity (transferrin), and normal or raised serum ferritin. In rheumatoid arthritis, ACD is proportional to disease activity and severity. The pathogenesis involves inflammatory cytokines (IL-6) driving hepcidin synthesis, which blocks iron release from macrophages and inhibits intestinal iron absorption; consequently, oral iron therapy is ineffective despite low serum iron. The correct approach is to treat the underlying inflammatory disease. Absolute iron deficiency would typically show low ferritin and high TIBC, which are not present here. Sideroblastic anaemia is not suggested by these findings. While NSAID-related gastric bleeding can cause iron deficiency, the iron profile is not consistent with this. There is no clinical evidence of tuberculosis in this vignette."
  },
  {
    num: 62,
    stem: "A 72-year-old man with known metastatic adenocarcinoma of the stomach presents with spontaneous bruising, epistaxis and confusion. Laboratory studies: haemoglobin 68 g/L, white cell count 12.5 × 10⁹/L, platelets 18 × 10⁹/L, prothrombin time 24 s (control 12 s), activated partial thromboplastin time 62 s (control 32 s), fibrinogen 0.7 g/L, D-dimer >80 mg/L. Peripheral blood film shows fragmented red cells and polychromasia. Which of the following best describes the underlying pathophysiology?",
    options: {
      A: "Vitamin K deficiency from malabsorption due to gastric outlet obstruction, causing deficiency of factors II, VII, IX and X.",
      B: "Disseminated intravascular coagulation triggered by mucin-secreting adenocarcinoma, with consumption of coagulation factors, platelets and fibrinogen, and associated microangiopathic haemolytic anaemia.",
      C: "Bone marrow infiltration by metastatic carcinoma causing pancytopenia and a leuco-erythroblastic blood film.",
      D: "Autoimmune thrombocytopenia secondary to gastric carcinoma with mucosal bleeding and iron deficiency.",
      E: "Heparin-induced thrombocytopenia from prophylactic low molecular weight heparin, requiring cessation of heparin and initiation of a direct thrombin inhibitor."
    },
    answer: "B",
    explanation: "Hoffbrand states that disseminated intravascular coagulation (DIC) occurs with mucin-secreting adenocarcinomas, particularly of the stomach, lung and breast, and is characterized by generalized haemostatic failure due to thrombocytopenia and consumption of coagulation factors. Microangiopathic haemolytic anaemia is also described in this context, with the peripheral blood film showing red cell fragmentation. The laboratory findings here—prolonged PT and APTT, very low fibrinogen, markedly elevated D-dimer, thrombocytopenia and schistocytes—are classic for DIC. Vitamin K deficiency would not explain the low fibrinogen or schistocytes. Marrow infiltration might cause cytopenias but would not typically produce this pattern of coagulopathy. Autoimmune thrombocytopenia does not cause coagulation factor consumption. Heparin-induced thrombocytopenia is a consideration in hospitalized patients but does not cause prolonged PT, low fibrinogen or microangiopathic haemolysis."
  },
  {
    num: 63,
    stem: "A 58-year-old man with end-stage renal disease on maintenance haemodialysis has persistent anaemia despite 6 months of subcutaneous erythropoietin therapy. His current haemoglobin is 86 g/L. Laboratory studies: serum ferritin 340 µg/L, transferrin saturation 16%. He has no evidence of active infection, is adherent to his dialysis schedule and diet, and is not on myelosuppressive drugs. Which of the following is the most likely explanation for his suboptimal response to erythropoietin and the most appropriate intervention?",
    options: {
      A: "Pure red cell aplasia from anti-erythropoietin antibodies; stop erythropoietin and test for neutralizing antibodies.",
      B: "Functional iron deficiency despite adequate ferritin stores; intravenous iron sucrose will improve the erythropoietic response.",
      C: "Hyperparathyroidism causing marrow fibrosis; the priority is parathyroidectomy to restore erythropoietic capacity.",
      D: "Folate deficiency from dialysate loss; oral folic acid 5 mg daily will correct the anaemia.",
      E: "Aluminium toxicity from the dialysis water supply causing reversible bone marrow suppression; check serum aluminium and switch to reverse osmosis water."
    },
    answer: "B",
    explanation: "Hoffbrand explains that a poor response to recombinant erythropoietin in chronic renal failure may be due to iron or folate deficiency, infection or hyperparathyroidism. In this patient, the serum ferritin is 340 µg/L (above the threshold for absolute iron deficiency) but the transferrin saturation is only 16%, indicating functional iron deficiency—iron is present in stores but is not available to the developing erythroid cells. The textbook specifically recommends a prophylactic regimen of intravenous iron sucrose 400 mg monthly provided the serum ferritin is <700 µg/L and transferrin saturation is <40%, as this reduces the need for erythropoietin compared with giving intravenous iron only to correct established deficiency. Pure red cell aplasia from anti-EPO antibodies is rare and would typically show a sudden drop in haemoglobin with very low reticulocytes. Hyperparathyroidism is a plausible cause of EPO resistance but is not supported by any laboratory evidence in this vignette. Folate deficiency is possible but less likely in a compliant patient; functional iron deficiency is more directly suggested by the iron studies. Aluminium toxicity is now rare with modern water purification."
  },
  {
    num: 64,
    stem: "A 34-year-old woman with systemic lupus erythematosus presents with jaundice, dark urine and fatigue of 2 weeks' duration. Laboratory studies: haemoglobin 78 g/L, reticulocytes 9%, total bilirubin 48 µmol/L (unconjugated 40), lactate dehydrogenase 720 U/L, haptoglobin <0.1 g/L. Direct antiglobulin test is positive for IgG and C3d. Peripheral blood film shows spherocytes. She is currently on hydroxychloroquine 200 mg twice daily and prednisolone 5 mg daily. Which of the following best describes the diagnosis and optimal immediate management?",
    options: {
      A: "Cold agglutinin disease triggered by an intercurrent Mycoplasma pneumoniae infection; manage with rituximab and avoid corticosteroids.",
      B: "Warm autoimmune haemolytic anaemia secondary to SLE; increase prednisolone to 1 mg/kg/day as first-line therapy.",
      C: "Microangiopathic haemolytic anaemia from lupus nephritis-associated thrombotic microangiopathy; start urgent plasma exchange.",
      D: "Hereditary spherocytosis unmasked by the stress of SLE; splenectomy is the definitive treatment.",
      E: "Drug-induced immune haemolysis from hydroxychloroquine; stop hydroxychloroquine and observe."
    },
    answer: "B",
    explanation: "Hoffbrand states that autoimmune haemolytic anaemia occurs in approximately 5% of patients with systemic lupus erythematosus and is typically associated with immunoglobulin G (IgG) and complement C3d on the surface of red cells—exactly the pattern described in this vignette. Warm autoimmune haemolytic anaemia in SLE is treated with corticosteroids as first-line therapy. Cold agglutinin disease is associated with anti-i antibodies in infectious mononucleosis or anti-I in Mycoplasma infection, and typically shows complement-only (C3d) positivity on the direct antiglobulin test without IgG; moreover, the peripheral blood film in cold agglutinin disease shows red cell agglutination rather than spherocytes. Thrombotic microangiopathy would show fragmented red cells (schistocytes) rather than spherocytes, and plasma exchange is not indicated for SLE-associated AIHA. Hereditary spherocytosis is a congenital condition and would not present acutely at age 34. Hydroxychloroquine is not a typical cause of drug-induced immune haemolysis."
  },
  {
    num: 65,
    stem: "A 62-year-old man with decompensated alcoholic cirrhosis presents with massive haematemesis from bleeding oesophageal varices. Laboratory studies on admission: haemoglobin 62 g/L, platelets 38 × 10⁹/L, prothrombin time 30 s, activated partial thromboplastin time 58 s, fibrinogen 0.9 g/L. He receives 4 units of fresh frozen plasma, 2 pools of platelets, and 2 units of packed red cells. Despite this, bleeding persists. Repeat coagulation studies show prothrombin time 25 s, activated partial thromboplastin time 50 s, fibrinogen 1.0 g/L. Which of the following best explains the persistent coagulopathy and the most appropriate additional therapy?",
    options: {
      A: "Ongoing disseminated intravascular coagulation from bacterial translocation; treat with therapeutic unfractionated heparin.",
      B: "Dysfibrinogenaemia from excess sialic acid in fibrinogen molecules, preventing normal fibrin polymerization; administer cryoprecipitate to provide functional fibrinogen.",
      C: "Vitamin K deficiency from malabsorption and poor nutrition; administer intravenous vitamin K 10 mg daily for 3 days.",
      D: "Heparin contamination from the central venous catheter; discontinue the line and check anti-Xa levels.",
      E: "Acquired factor V inhibitor from severe liver disease; administer recombinant factor V concentrate."
    },
    answer: "B",
    explanation: "Hoffbrand describes dysfibrinogenaemia in advanced liver disease as resulting from excess sialic acid in fibrinogen molecules, which impairs normal fibrin polymerization. A consumptive coagulopathy may be superimposed. In this patient, despite adequate replacement with fresh frozen plasma (which contains fibrinogen), the fibrinogen level has risen only marginally to 1.0 g/L and bleeding persists. This discordance between the measured fibrinogen level and the ongoing coagulopathy strongly suggests that the fibrinogen is dysfunctional rather than simply deficient. Cryoprecipitate is rich in functional fibrinogen and is the appropriate therapy for dysfibrinogenaemia or severe hypofibrinogenaemia in the setting of massive bleeding. Disseminated intravascular coagulation in cirrhosis is rarely treated with heparin in the setting of active variceal bleeding. Vitamin K may help if there is concurrent deficiency, but in severe decompensated cirrhosis the synthetic capacity of the liver is too impaired for vitamin K to correct the coagulopathy promptly. Heparin contamination would prolong the APTT disproportionately without explaining the low fibrinogen or the clinical context. There is no such entity as an acquired factor V inhibitor in liver disease."
  },
  {
    num: 66,
    stem: "Regarding the pathophysiology of anaemia in chronic kidney disease, which of the following statements most accurately describes the interplay between erythropoietin deficiency, uraemic toxins and the oxygen dissociation curve?",
    options: {
      A: "Erythropoietin deficiency is the sole cause of anaemia in CKD; uraemic toxins play no significant role in red cell survival or morphology.",
      B: "Impaired erythropoietin secretion is the dominant mechanism, but uraemic toxins also shorten red cell lifespan and cause echinocyte ('burr') cell formation; increased 2,3-diphosphoglycerate and uraemic acidosis shift the haemoglobin-oxygen dissociation curve to the right, reducing oxygen affinity and ameliorating symptoms relative to the degree of anaemia.",
      C: "Uraemic toxins stimulate erythropoietin secretion but suppress erythroid progenitor response to EPO, resulting in a normochromic normocytic anaemia that is disproportionately symptomatic because the oxygen dissociation curve shifts to the left.",
      D: "The accumulation of parathyroid hormone in renal failure directly destroys red cell precursors in the bone marrow, making hyperparathyroidism the dominant cause of anaemia rather than EPO deficiency.",
      E: "Chronic kidney disease causes macrocytic anaemia because uraemic toxins damage the erythroid cell membrane, increasing MCV; the increased MCV is accompanied by a left shift of the oxygen dissociation curve due to reduced 2,3-DPG levels."
    },
    answer: "B",
    explanation: "Hoffbrand explains that the dominant pathological mechanism of anaemia in chronic renal failure is impaired red cell production due to defective erythropoietin secretion. However, variable shortening of red cell lifespan also occurs, and in severe uraemia the red cells show abnormalities including 'burr' cells (echinocytes). Increased red cell 2,3-diphosphoglycerate (2,3-DPG) levels in response to the anaemia and hyperphosphataemia result in decreased oxygen affinity and a rightward shift of the haemoglobin-oxygen dissociation curve, which is augmented by uraemic acidosis. Consequently, the patient's symptoms are relatively mild for the degree of anaemia. Option A is incorrect because uraemic toxins do affect red cell survival and morphology. Option C is incorrect because uraemic toxins do not stimulate EPO secretion; rather, EPO production is reduced. Option D overstates the role of hyperparathyroidism, which is mentioned only as a cause of poor response to EPO therapy, not the dominant cause of anaemia. Option E is incorrect because the anaemia of renal failure is normochromic, not macrocytic, and the oxygen dissociation curve shifts to the right, not the left."
  },
  {
    num: 67,
    stem: "In the context of systemic lupus erythematosus (SLE), which of the following best explains the dual predisposition to both thrombosis and autoimmune cytopenias?",
    options: {
      A: "The lupus anticoagulant is a true anticoagulant that inhibits factor Xa directly; paradoxically, it causes thrombosis by depleting antithrombin through immune complex formation.",
      B: "Anti-cardiolipin antibodies (lupus anticoagulant) interfere with the binding of coagulation factors to platelet phospholipid, disrupting in vitro clotting assays while paradoxically predisposing to arterial and venous thrombosis and recurrent pregnancy loss in vivo.",
      C: "Autoantibodies against ADAMTS13 cause acquired thrombotic thrombocytopenic purpura; this is the primary mechanism of both thrombosis and cytopenias in SLE.",
      D: "Complement deficiency (particularly C3 and C4) is the unifying mechanism; low complement causes impaired opsonisation leading to infection-associated cytopenias, while simultaneously triggering a compensatory prothrombotic state.",
      E: "CD4+ T-cell-mediated suppression of megakaryopoiesis and erythropoiesis explains the cytopenias, while interleukin-6-driven hepatic synthesis of fibrinogen explains the thrombotic tendency."
    },
    answer: "B",
    explanation: "Hoffbrand describes the lupus anticoagulant as a circulating anti-cardiolipin antibody that interferes with blood coagulation by altering the binding of coagulation factors to platelet phospholipid. This phospholipid-dependent interference prolongs in vitro clotting tests such as the APTT, giving the paradoxical name 'anticoagulant,' yet in vivo it predisposes to both arterial and venous thrombosis and recurrent abortions. In addition, SLE is associated with autoimmune haemolytic anaemia (typically IgG and C3d positive) and autoimmune thrombocytopenia, accounting for the cytopenias. Option A is incorrect because the lupus anticoagulant does not inhibit factor Xa directly or deplete antithrombin. Option C is incorrect because anti-ADAMTS13 antibodies are characteristic of idiopathic thrombotic thrombocytopenic purpura, not SLE. Option D misrepresents the role of complement deficiency, which is not the unifying mechanism described in the chapter. Option E incorrectly attributes the cytopenias to T-cell suppression rather than the autoimmune mechanisms described."
  },
  {
    num: 68,
    stem: "Regarding the acute phase response and laboratory monitoring of systemic disease, which of the following statements most accurately compares C-reactive protein (CRP), erythrocyte sedimentation rate (ESR) and plasma viscosity?",
    options: {
      A: "CRP is the test of choice for monitoring long-term changes in chronic inflammatory diseases because it reflects immunoglobulin levels and is unaffected by intercurrent infection.",
      B: "ESR is the most sensitive test for acute changes in inflammation because it rises within 2-4 hours of tissue injury and correlates directly with short-term cytokine release.",
      C: "Plasma viscosity is independent of the effects of anaemia, yields results within 15 minutes, and is influenced by large asymmetrical plasma proteins such as fibrinogen and immunoglobulins; ESR is affected by anaemia and requires fresh samples.",
      D: "ESR is always lower than expected in severe anaemia because the low red cell concentration reduces the driving force for rouleaux formation and sedimentation.",
      E: "CRP is phylogenetically a late-acquired immunoglobulin that requires T-cell help for production; it binds C3b directly on microorganisms and has no role in complement fixation."
    },
    answer: "C",
    explanation: "Hoffbrand details the comparative utility of CRP, ESR and plasma viscosity for monitoring systemic disease. Plasma viscosity is affected by the concentration of plasma proteins of large molecular size, especially those with pronounced axial asymmetry such as fibrinogen and some immunoglobulins. Advantages over ESR include independence from the effects of anaemia and results that are available within 15 minutes. In contrast, ESR is influenced by anaemia (higher than expected values occur in severe anaemia because of the low red cell concentration), requires fresh samples, and is not sensitive to acute changes occurring within less than 24 hours. CRP is the test of choice for short-term changes (hours to days) because it responds within 6-10 hours, but it is not used for long-term monitoring of immunoglobulin levels. CRP is phylogenetically described as a crude 'early' immunoglobulin that initiates the inflammatory reaction by substituting for antibody in the fixation of C1q and triggering the complement cascade; it does not require T-cell help and does not bind C3b directly on microorganisms."
  },
  {
    num: 69,
    stem: "Which of the following mechanisms best explains the haematological abnormalities associated with advanced human immunodeficiency virus (HIV) infection?",
    options: {
      A: "HIV directly infects haemopoietic stem cells via the CD4 receptor, causing irreversible aplastic anaemia in all patients with a CD4 count below 200 cells/µL.",
      B: "The bone marrow in HIV infection is typically hypocellular due to direct viral cytotoxicity; dysplastic features are absent because the virus spares erythroid and megakaryocytic lineages.",
      C: "Anaemia is multifactorial, resulting from direct viral suppression of haemopoiesis, anaemia of chronic disorders, marrow dysplasia, opportunistic infections, autoimmune haemolysis and drug toxicity; dysplastic megakaryocytes and dyserythropoiesis are common but the dysplastic cells lack the chromosome abnormalities of myelodysplasia and are not pre-leukaemic.",
      D: "Parvovirus B19 is the exclusive cause of anaemia in HIV infection because immunosuppression allows chronic parvoviraemia, resulting in pure red cell aplasia that responds only to intravenous immunoglobulin.",
      E: "Highly active antiretroviral therapy (HAART) universally worsens cytopenias by suppressing bone marrow function; therefore, antiretroviral therapy should be withheld until cytopenias resolve."
    },
    answer: "C",
    explanation: "Hoffbrand describes HIV-associated haematological changes as wide-ranging and typically worsening with advanced disease. Anaemia is usually multifactorial in origin: the virus can directly suppress haemopoiesis, and additional causes include anaemia of chronic disorders, marrow dysplasia (Fig. 32.8), secondary infections, autoimmune haemolysis and drug therapy. The bone marrow may be hypercellular with prominent plasma cells and lymphocytes, normocellular, hypocellular or fibrotic. Dysplastic features are common, with ineffective thrombopoiesis or granulocyte formation contributing to cytopenias; however, the dysplastic marrow cells do not show the chromosome abnormalities found in myelodysplasia and are not pre-leukaemic. Option A is incorrect because HIV does not cause irreversible aplastic anaemia in all patients with low CD4 counts. Option B is incorrect because dysplastic features are common in HIV infection. Option D is incorrect because parvovirus B19 is not the exclusive cause of anaemia in HIV, although transient red cell aplasia from parvovirus can occur. Option E is incorrect because anti-retroviral therapy is continued during lymphoma treatment, and there is no recommendation to withhold HAART because of cytopenias."
  },
  {
    num: 70,
    stem: "Regarding the haematological changes seen in severe SARS-CoV-2 infection, which of the following statements most accurately describes the pathophysiological mechanisms and their clinical correlates?",
    options: {
      A: "SARS-CoV-2 causes a primary bone marrow failure syndrome analogous to aplastic anaemia; pancytopenia is the cardinal feature and responds to antithymocyte globulin and ciclosporin.",
      B: "The infection drives a prothrombotic state through pulmonary endothelialitis, microthrombi and pulmonary thrombosis; laboratory markers include raised factor VIII, plasminogen-activator inhibitor type 1, D-dimer, prothrombin time and activated partial thromboplastin time, with thrombocytopenia and morphological neutrophil abnormalities frequently present.",
      C: "SARS-CoV-2 directly lyses platelets via viral spike protein binding to GPIIb/IIIa, causing isolated severe thrombocytopenia that is the dominant haemostatic abnormality and predicts mortality.",
      D: "The anaemia of COVID-19 is exclusively due to autoimmune haemolysis mediated by anti-spike protein antibodies binding red cells; direct antiglobulin test is always positive and corticosteroids are first-line therapy.",
      E: "Lymphocytosis is the hallmark white cell response to SARS-CoV-2; large granular lymphocytes and activated lymphocytes indicate a robust adaptive immune response and correlate with mild disease."
    },
    answer: "B",
    explanation: "Hoffbrand describes the haematological complications of SARS-CoV-2 infection as including anaemia (from renal dysfunction and anaemia of chronic inflammation), raised CRP, ferritin and lactate dehydrogenase, lymphopenia (not lymphocytosis) related to disease severity, neutrophil left shift with morphological abnormalities (dark clumped nuclear chromatin, pseudo-Pelger-Huët appearances, toxic granulation, Döhle bodies, cytoplasmic vacuolation), thrombocytopenia related to severity, and a prothrombotic state. Specifically, factor VIII and plasminogen-activator inhibitor type 1 levels are raised, predisposing to thrombosis, and increasing prothrombin time, APTT and D-dimer levels are additional markers of disease severity. Clinical and laboratory features of DIC and haemophagocytic lymphohistiocytosis are often present. Option A is incorrect because bone marrow failure analogous to aplastic anaemia is not described. Option C is incorrect because direct viral lysis of platelets via GPIIb/IIIa is not described in the chapter. Option D is incorrect because autoimmune haemolysis is not the exclusive cause of anaemia. Option E is incorrect because lymphopenia, not lymphocytosis, is the hallmark, and a progressive decline in lymphocytes predicts the need for intensive care and death."
  }
];
