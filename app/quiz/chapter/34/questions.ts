export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 81,
    stem: "A 28-year-old primigravida at 32 weeks' gestation presents for routine antenatal review. Her haemoglobin is 105 g/L, mean corpuscular volume (MCV) 78 fL, and serum ferritin 18 µg/L. She reports fatigue and pagophagia (pica for ice). She is a vegetarian and has been taking only folic acid since conception. Which of the following is the most appropriate immediate management strategy?",
    options: {
      A: "Reassure and continue folic acid only, as a haemoglobin above 100 g/L in the third trimester is normal per UK guidelines.",
      B: "Start oral ferrous iron 40–80 mg each morning on an empty stomach and recheck haemoglobin in 2–3 weeks.",
      C: "Arrange immediate intravenous iron infusion, as oral iron is ineffective in pregnancy due to elevated progesterone reducing absorption.",
      D: "Start combined iron and vitamin B12 supplementation, as the low MCV and vegetarian diet indicate B12 deficiency rather than iron deficiency.",
      E: "Request a bone marrow biopsy to exclude sideroblastic anaemia given the pica and low ferritin."
    },
    answer: "B",
    explanation: "Hoffbrand describes iron deficiency anaemia as the most common nutritional deficiency in pregnancy. Up to 600 mg of iron is required for the mother's increase in red cell mass and a further 300 mg for the fetus and placenta, with a median of 250 mg lost during delivery. A serum ferritin below 30 µg/L is suggestive of early iron deficiency, and a fall in MCV is the earliest laboratory sign. The UK guidelines define anaemia as below 110 g/L in the first trimester and below 105 g/L in the second and third trimesters, so this patient meets the criteria for anaemia requiring investigation and treatment. The recommended first-line therapy is oral ferrous iron 40–80 mg each morning on an empty stomach with water alone or with vitamin C to enhance absorption. The haemoglobin should be measured 2–3 weeks after starting iron to check compliance and response. Intravenous iron is effective but is reserved for the second or third trimester in women with confirmed iron deficiency who are intolerant of oral iron or do not respond to it, and it is avoided in the first trimester. While vegetarians are at risk of B12 deficiency, the low MCV and pagophagia are classic for iron deficiency; B12 deficiency produces a macrocytic anaemia with elevated MCV. Sideroblastic anaemia is a rare congenital or acquired disorder that would not present in this typical nutritional deficiency context."
  },
  {
    num: 82,
    stem: "A 34-year-old woman at 36 weeks' gestation is found to have a platelet count of 85 × 10⁹/L. Her blood pressure is 145/95 mmHg and she has 2+ proteinuria on dipstick. Liver function tests show elevated transaminases (AST 110 U/L, ALT 95 U/L). The platelet count was 195 × 10⁹/L at booking. Which of the following is the most accurate diagnosis and the most appropriate immediate management?",
    options: {
      A: "Gestational thrombocytopenia; no treatment is required and the platelet count will recover within 6 weeks of delivery.",
      B: "Immune thrombocytopenic purpura (ITP); treat the mother with steroids and intravenous immunoglobulin, and monitor the fetal platelet count.",
      C: "Pre-eclampsia with HELLP syndrome; the primary treatment is delivery as rapidly as possible.",
      D: "Thrombotic thrombocytopenic purpura (TTP); initiate urgent plasma exchange and avoid delivery until the platelet count recovers.",
      E: "Acute fatty liver of pregnancy; deliver immediately and provide supportive intensive care, focusing on management of hypoglycaemia and coagulopathy."
    },
    answer: "C",
    explanation: "Hoffbrand classifies thrombocytopenia in pregnancy into three main categories: gestational thrombocytopenia (over 75% of cases, mild, platelet count usually 100–140 × 10⁹/L), thrombocytopenia of hypertensive disorders (approximately 21% of cases, more severe), and immune thrombocytopenic purpura (approximately 4% of cases). The HELLP syndrome (haemolysis, elevated liver enzymes and low platelets) falls into the hypertensive disorders category and is associated with prolongation of prothrombin time (PT) and activated partial thromboplastin time (APTT). The primary treatment for pre-eclampsia with HELLP is as rapid a delivery as possible. Gestational thrombocytopenia is a diagnosis of exclusion with mild thrombocytopenia and no hypertension, proteinuria, or organ dysfunction. ITP would not explain the hypertension, proteinuria, or transaminitis, and while it is a differential for isolated thrombocytopenia, the multisystem involvement here points to pre-eclampsia/HELLP. TTP presents with microangiopathic haemolytic anaemia, neurological symptoms, renal impairment, and fever; while thrombocytopenia is present, the combination of hypertension and proteinuria makes pre-eclampsia far more likely. Acute fatty liver of pregnancy typically presents with jaundice, hypoglycaemia, coagulopathy, and elevated bilirubin rather than thrombocytopenia as the dominant feature."
  },
  {
    num: 83,
    stem: "A 26-year-old Rh D-negative woman at 28 weeks' gestation has her routine antibody screen, which is negative for anti-D. She is group A Rh D-negative with no history of prior transfusion or miscarriage. Which of the following represents the most appropriate management for Rh immunization prophylaxis?",
    options: {
      A: "Administer 500 units of anti-D immunoglobulin intramuscularly at 28 and 34 weeks' gestation, and again within 72 hours of delivery if the baby is Rh D-positive, with a Kleihauer test after delivery to guide dosing.",
      B: "Administer a single dose of 1500 units of anti-D at 28 weeks only, as modern high-dose preparations provide sufficient protection through to the postpartum period without a second antenatal dose.",
      C: "Perform fetal Rh D genotyping by polymerase chain reaction (PCR) on a maternal blood sample at booking and give anti-D only if the fetus is Rh D-positive; if Rh D-negative, withhold all anti-D prophylaxis.",
      D: "Give anti-D only after delivery, as antenatal administration has not been shown to reduce sensitization rates compared with postpartum prophylaxis alone.",
      E: "Give anti-D intravenously at 28 weeks and repeat at 34 weeks, as intravenous administration provides faster clearance of fetal cells and is now standard practice."
    },
    answer: "A",
    explanation: "Hoffbrand describes the standard protocol for prevention of Rh sensitization in Rh D-negative, non-sensitized women as administration of at least 500 units (100 µg) of anti-D immunoglobulin at 28 and 34 weeks' gestation to reduce the risk of sensitization from feto-maternal haemorrhage. At delivery, if the baby is Rh D-positive, prophylactic anti-D should be administered to the mother at a minimum dose of 500 units intramuscularly within 72 hours of delivery. A Kleihauer test is performed after delivery to estimate the number of fetal cells in the maternal circulation using differential staining; many centres then perform flow cytometry for a more accurate estimate of the volume of feto-maternal haemorrhage. If there is greater than 4 mL of transplacental haemorrhage, the dose of anti-D is increased (125 units per 1 mL of FMH greater than 4 mL). Fetal Rh D molecular typing from DNA in maternal blood can be used before 28 weeks, and if the fetus is Rh D-negative, no further anti-D prophylaxis is needed; however, the standard approach described by Hoffbrand is routine antenatal dosing at 28 and 34 weeks. Postpartum-only prophylaxis is less effective because sensitization can occur during pregnancy from feto-maternal haemorrhage in the third trimester. Intramuscular administration is the standard route."
  },
  {
    num: 84,
    stem: "A newborn infant born at term to a mother with known immune thrombocytopenic purpura (ITP) has a cord platelet count of 18 × 10⁹/L. Cerebral ultrasound shows no evidence of intracranial haemorrhage. The mother's platelet count during pregnancy was maintained at 35 × 10⁹/L with prednisolone and intravenous immunoglobulin (IVIg). Which of the following is the most appropriate immediate management for the neonate?",
    options: {
      A: "Urgent platelet transfusion with random donor platelets, as any neonatal platelet count below 20 × 10⁹/L requires immediate transfusion regardless of aetiology.",
      B: "Start intravenous immunoglobulin (IVIg) therapy for the neonate, as the thrombocytopenia is due to transplacental passage of maternal anti-platelet antibodies.",
      C: "Administer systemic corticosteroids to the neonate to suppress any endogenous immune response against platelets, combined with platelet transfusion.",
      D: "Perform an immediate splenectomy, as the neonate has severe ITP that is refractory to medical management and carries a high risk of intracranial haemorrhage.",
      E: "Provide supportive care only and repeat the platelet count in 24 hours, as neonatal thrombocytopenia from maternal ITP is always self-limiting and resolves spontaneously within 48 hours."
    },
    answer: "B",
    explanation: "Hoffbrand explains that in pregnancy, ITP represents a particular problem because the autoantibody crosses the placenta and the fetus may become severely thrombocytopenic. Newborns of mothers with ITP should have a blood count measured for the first 5 days of life, as the platelet count may progressively drop. In newborns without evidence of intracranial haemorrhage, treatment with intravenous IgG is appropriate if the infant's platelet count is less than 20 × 10⁹/L. Neonates with thrombocytopenia and intracranial haemorrhage should be treated with steroids and intravenous IgG therapy. Random donor platelets would be rapidly destroyed by circulating maternal antibodies and are not first-line in the absence of active bleeding. Corticosteroids are not the first-line treatment for neonates without intracranial haemorrhage; IVIg is preferred. Splenectomy is entirely inappropriate in a neonate and is reserved for refractory ITP in older children and adults. While neonatal thrombocytopenia from maternal ITP often improves as maternal antibody is cleared from the infant's circulation over weeks, a count of 18 × 10⁹/L without intracranial haemorrhage still warrants treatment with IVIg, not observation alone, because the count may fall further in the first 5 days of life."
  },
  {
    num: 85,
    stem: "A 32-year-old woman at 18 weeks' gestation presents with a 4-week history of progressive dyspnoea on exertion and left leg swelling. She has a history of recurrent venous thromboembolism (VTE) and was on rivaroxaban prior to conception, which was stopped when pregnancy was confirmed. Doppler ultrasound confirms acute left iliofemoral deep vein thrombosis. Which of the following is the most appropriate anticoagulation strategy for the remainder of her pregnancy and the peripartum period?",
    options: {
      A: "Restart rivaroxaban immediately, as direct oral anticoagulants are safe in the second trimester and have a lower risk of teratogenicity than warfarin.",
      B: "Switch to warfarin, as it is the most effective oral anticoagulant for preventing recurrent VTE and can be used safely after 12 weeks' gestation.",
      C: "Start therapeutic low-molecular-weight heparin (LMWH) for the remainder of the pregnancy, as it does not cross the placenta and is the treatment of choice in pregnancy.",
      D: "Start unfractionated heparin subcutaneously for the entire pregnancy, as LMWH is associated with a higher risk of osteoporosis and heparin-induced thrombocytopenia in pregnancy.",
      E: "Manage with aspirin 75 mg daily and graduated compression stockings, as the D-dimer elevation may reflect physiological pregnancy changes rather than active thrombosis."
    },
    answer: "C",
    explanation: "Hoffbrand describes pregnancy as a hypercoagulable state characterized by increased plasma levels of factors VII, VIII, X and fibrinogen, shortening of PT and APTT, and suppressed fibrinolysis, which increase the risk of thromboembolism and disseminated intravascular coagulation. Warfarin has no role in the management of thrombosis in pregnancy because it crosses the placenta and is associated with embryopathy, especially between 6 and 12 weeks' gestation. Low-molecular-weight heparin is now the treatment of choice because it can be given once daily and is less likely than unfractionated heparin to cause osteoporosis. Fixed low-dose LMWH is the standard prophylaxis regimen for pregnant women with prior VTE, and therapeutic-dose LMWH is used for acute VTE. Direct oral anticoagulants such as rivaroxaban are contraindicated in pregnancy due to limited safety data and potential placental transfer. Unfractionated heparin is not the preferred agent for long-term anticoagulation in pregnancy because of the higher risk of osteoporosis and the need for more frequent dosing and monitoring. Aspirin and compression stockings are insufficient for proven acute iliofemoral DVT in a patient with a history of recurrent VTE."
  },
  {
    num: 86,
    stem: "Regarding the physiological changes in the haematological system during normal pregnancy, which of the following statements is most accurate?",
    options: {
      A: "The red cell mass increases by approximately 45%, while plasma volume increases by only 25%, leading to a physiological polycythaemia with elevated haemoglobin concentration.",
      B: "The platelet count characteristically rises by 10–15% due to increased thrombopoietin production driven by elevated oestrogen levels.",
      C: "Blood plasma volume increases by approximately 1250 mL (45%) and the red cell mass increases by 25%, resulting in a dilutional fall in haemoglobin concentration.",
      D: "Fibrinolysis is enhanced during pregnancy, with increased tissue plasminogen activator and reduced plasminogen activator inhibitor-1, protecting against thrombosis.",
      E: "The mean corpuscular volume (MCV) characteristically falls by approximately 4 fL during pregnancy due to iron deficiency in all women."
    },
    answer: "C",
    explanation: "Hoffbrand describes the physiological changes of pregnancy as including an increase in blood plasma volume by approximately 1250 mL, or 45% above normal by the end of gestation, and an increase in red cell mass by some 25%. Because the rise in plasma volume proportionally exceeds the rise in red cell mass, there is a fall in haemoglobin concentration, sometimes termed 'physiological anaemia,' but this is not a true anaemia. The WHO classifies pregnant women with haemoglobin levels of 110 g/L or more as normal. The platelet count falls by an average of 10% in uncomplicated pregnancy, with approximately 7% of women developing more severe thrombocytopenia; it does not rise. Fibrinolysis is suppressed during pregnancy, not enhanced; there is an increase in coagulation factors VII, VIII, X and fibrinogen, with reduced fibrinolysis, contributing to the hypercoagulable state that lasts for up to 2 months into the puerperal period. The MCV typically rises by approximately 4 fL in uncomplicated pregnancy; a fall in MCV is the earliest sign of iron deficiency, not a universal physiological change."
  },
  {
    num: 87,
    stem: "Which of the following best describes the pathophysiology and distinguishing features of fetal-neonatal alloimmune thrombocytopenia (FNAIT) compared with Rh haemolytic disease of the newborn (HDN)?",
    options: {
      A: "FNAIT is caused by maternal IgM antibodies against fetal platelet antigens that do not cross the placenta, whereas Rh HDN is caused by IgG antibodies; FNAIT therefore never affects the fetus in utero.",
      B: "FNAIT and Rh HDN both require prior maternal sensitization in a previous pregnancy; neither condition can occur in a first pregnancy.",
      C: "FNAIT results from maternal IgG antibodies against a paternally inherited platelet antigen (most commonly HPA-1a) that cross the placenta and destroy fetal platelets; unlike Rh HDN, 50% of FNAIT cases occur in the first pregnancy.",
      D: "FNAIT is caused by maternal autoantibodies directed against her own platelets that incidentally cross-react with fetal platelets; it is therefore a form of maternal immune thrombocytopenic purpura.",
      E: "FNAIT is exclusively caused by anti-HPA-1b antibodies in mothers who are HPA-1a homozygous, and intracranial haemorrhage never occurs because the platelet count rarely falls below 50 × 10⁹/L."
    },
    answer: "C",
    explanation: "Hoffbrand describes fetal-neonatal alloimmune thrombocytopenia (FNAIT) as resulting from a process similar to that of HDN, in which fetal platelets possessing a paternally inherited antigen (HPA-1a in 80% of cases) that is not present on maternal platelets sensitize the mother to produce IgG antibodies. These antibodies cross the placenta, coat the fetal platelets, and cause their destruction by the reticuloendothelial system, leading to serious bleeding including intracranial haemorrhage. A key distinction from Rh HDN is that 50% of cases of FNAIT occur in the first pregnancy. The incidence is approximately 1 in 1000–5000 births. Severe neonatal thrombocytopenia (platelet count <30 × 10⁹/L) should be treated with transfusion of HPA-compatible platelets, and weekly maternal administration of IVIg is the most appropriate first-line antenatal treatment. Options A, B, D, and E all contain factual errors: FNAIT is mediated by IgG, can occur in the first pregnancy, is an alloimmune rather than autoimmune process, and is most commonly associated with HPA-1a incompatibility with a significant risk of severe thrombocytopenia and intracranial haemorrhage."
  },
  {
    num: 88,
    stem: "Regarding the haematological profile of healthy term neonates, which of the following statements is most accurate?",
    options: {
      A: "The cord blood haemoglobin is typically 110–130 g/L, similar to adult values, because placental oxygen transfer is efficient and suppresses erythropoiesis in utero.",
      B: "The mean cell volume (MCV) averages 119 fL at birth and falls rapidly to adult values within the first 2 weeks of life.",
      C: "The reticulocyte count is initially high (2–6%) but falls to below 0.5% at 1 week as tissue oxygenation markedly improves after birth, suppressing erythropoiesis.",
      D: "Neonatal neutrophil counts are lower than adult values at birth and remain low throughout the first year of life, increasing susceptibility to bacterial infection.",
      E: "The haemoglobin F (HbF) concentration at birth is approximately 30–40% of total haemoglobin, providing efficient oxygen delivery to tissues in the first month."
    },
    answer: "C",
    explanation: "Hoffbrand describes the neonatal haematological profile as follows: cord blood haemoglobin varies between approximately 165 and 170 g/L, substantially higher than adult values, and is influenced by the timing of cord clamping. The reticulocyte count is initially high (2–6%) but falls to below 0.5% at 1 week as erythropoiesis is suppressed in response to the marked increase in tissue oxygenation after birth. This is associated with a progressive fall in haemoglobin to a range of 94–130 g/L at 2 months, from which point it recovers to a mean of 125 g/L at around 6 months. The MCV averages 119 fL at birth (range 100–125 fL) and falls to normal adult values by 2 months, not within 2 weeks. By 1 year, the MCV has fallen to around 70 fL and rises throughout childhood to reach adult levels at puberty. Neutrophil counts are high at birth (3.0–28.0 × 10⁹/L in the first 72 hours) and then fall, with lymphocytes predominating from a few weeks of age. HbF constitutes 70–80% of total haemoglobin at birth and is less effective than HbA at releasing oxygen to tissues, which compounds the clinical significance of neonatal anaemia."
  },
  {
    num: 89,
    stem: "A neonate born at 35 weeks' gestation develops jaundice on day 2 of life. The mother is group O Rh D-positive and the baby is group A Rh D-positive. The direct antiglobulin test (DAT) on the infant's cells is weakly positive. The blood film shows spherocytosis, polychromasia and erythroblastosis. Which of the following best explains the underlying pathophysiology and expected clinical course?",
    options: {
      A: "Severe Rh haemolytic disease requiring immediate exchange transfusion and intrauterine transfusion planning for all future pregnancies.",
      B: "ABO haemolytic disease of the newborn caused by maternal IgG anti-A antibodies; the disease is usually mild to moderate and may occur in the first pregnancy.",
      C: "Hereditary spherocytosis inherited from the mother; the DAT positivity is a false positive due to ABO incompatibility masking the true diagnosis.",
      D: "G6PD deficiency triggered by maternal ingestion of fava beans during pregnancy; the spherocytes are actually Heinz bodies misidentified on the blood film.",
      E: "Neonatal sepsis with haemolysis from Escherichia coli infection; the polychromasia represents a regenerative response to bacterial toxins and the DAT is nonspecifically positive."
    },
    answer: "B",
    explanation: "Hoffbrand describes ABO haemolytic disease of the newborn as being more frequent than Rh HDN but usually mild. In 20% of births, a mother is ABO incompatible with the fetus. The majority of cases are caused by 'immune' IgG antibodies in group O mothers. Although 15% of pregnancies in white people involve a group O mother with a group A or group B fetus, most affected babies have only mild to moderate jaundice which may require phototherapy. Exchange transfusions are needed in only 1 in 3000 infants. The mild course is partly explained by the A and B antigens not being fully developed at birth and by partial neutralization of maternal IgG antibodies by A and B antigens on other cells, in plasma and tissue fluids. In contrast to Rh HDN, ABO disease may be found in the first pregnancy and may or may not affect subsequent pregnancies. The direct antiglobulin test on the infant's cells is occasionally negative or only weakly positive, and the blood film shows autoagglutination, spherocytosis, polychromasia and erythroblastosis. Rh HDN in this scenario is impossible because the mother is Rh D-positive. Hereditary spherocytosis is a congenital red cell membrane disorder but would not explain the DAT positivity or the ABO incompatibility. G6PD deficiency causes non-immune haemolysis with Heinz bodies and bite cells, not spherocytosis and DAT positivity. Neonatal sepsis can cause jaundice but would not produce the characteristic blood film findings of erythroblastosis and polychromasia with a positive DAT in the context of ABO incompatibility."
  },
  {
    num: 90,
    stem: "Regarding the coagulation system in neonates, which of the following statements most accurately describes the physiological limitations and their clinical implications?",
    options: {
      A: "Neonates have fully mature hepatic synthesis of all vitamin K-dependent factors, and the prothrombin time (PT) and activated partial thromboplastin time (APTT) are equivalent to adult values within 48 hours of birth.",
      B: "The APTT and PT are prolonged because of reduced levels of the vitamin K-dependent factors II, VII, IX and X, which do not reach normal adult values until around 6 months of age.",
      C: "Antithrombin and protein C levels are approximately 120% of adult values at birth, providing a protective hypercoagulable buffer against thrombosis.",
      D: "Neonates are protected from thrombosis because tissue factor pathway inhibitor (TFPI) levels are three-fold higher than in adults, overwhelming the procoagulant drive.",
      E: "The physiological prolongation of PT and APTT in neonates is primarily due to deficiency of factor VIII, which is why haemophilia A carriers are asymptomatic in the neonatal period."
    },
    answer: "B",
    explanation: "Hoffbrand notes that standard coagulation tests need to be interpreted with caution in the neonate. The APTT and PT are prolonged because of reduced levels of the vitamin K-dependent factors II, VII, IX and X, which become normal at around 6 months of age. Neonates actually have an increased risk of thrombosis, which is a result of physiologically low levels of inhibitors of coagulation and the use of indwelling vascular catheters. Antithrombin and protein C levels are approximately 60% of normal for the first 3 months, not 120%. Homozygous protein C deficiency is associated with fulminant purpura fulminans in early life, and therapeutic protein C concentrates are now available. Homozygous antithrombin deficiency usually presents later in childhood, but arterial and venous thrombosis may also occur in the neonate. The prolongation is not due to factor VIII deficiency; in fact, factor VIII levels are often normal or elevated in neonates. Fresh frozen plasma may be of benefit in neonates with clinically significant bleeding or prior to invasive procedures if there is an abnormal coagulation profile. Haemorrhagic disease of the newborn, discussed in Chapter 29, is a direct consequence of vitamin K deficiency and the immature hepatic synthesis of these factors."
  }
];
