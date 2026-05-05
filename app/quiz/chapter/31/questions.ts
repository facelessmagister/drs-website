export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 51,
    stem: "A 58-year-old man with newly diagnosed left proximal DVT requires immediate anticoagulation. He has a serum creatinine of 185 micromol/L (eGFR 28 mL/min/1.73 m2) and a body weight of 55 kg. He was prescribed rivaroxaban 20 mg once daily by the junior doctor on the ward. A senior haematology registrar reviews the prescription. Which statement best describes the correct course of action regarding DOAC dosing in this patient?",
    options: {
      A: "Rivaroxaban 20 mg once daily is correct because the standard VTE dose is independent of renal function and body weight.",
      B: "The dose should be reduced to rivaroxaban 15 mg once daily because his eGFR is below 30 mL/min and the drug is contraindicated below 15 mL/min; the reduced dose provides equivalent efficacy with lower bleeding risk.",
      C: "Rivaroxaban is contraindicated in this patient because his eGFR is below 30 mL/min and he requires therapeutic-dose low molecular weight heparin instead.",
      D: "The dose should be reduced to rivaroxaban 10 mg once daily because his body weight of 55 kg is below 60 kg, which mandates dose reduction for all DOACs regardless of renal function.",
      E: "Rivaroxaban should be switched to apixaban 10 mg twice daily for the first 7 days because apixaban is safer in patients with low body weight and poor renal function."
    },
    answer: "B",
    explanation: "Hoffbrand explains that rivaroxaban is partially renally excreted (approximately one-third of the administered dose). For the treatment of VTE, the standard dose is 20 mg once daily with food. However, in patients with moderate renal impairment (CrCl 30-49 mL/min), the dose should be reduced to 15 mg once daily. Rivaroxaban is contraindicated in patients with CrCl below 15 mL/min. A body weight below 60 kg is NOT itself a dose-reduction criterion for rivaroxaban in VTE treatment (unlike for edoxaban, where the dose is halved to 30 mg once daily if body weight le; 60 kg or CrCl 15-50 mL/min). LMWH is renally cleared and accumulates in severe renal impairment, requiring anti-Xa monitoring or dose adjustment; in this patient with CrCl ~28 mL/min, LMWH would also require caution. Apixaban 10 mg twice daily for 7 days followed by 5 mg twice daily is an alternative; however, Hoffbrand does not state that apixaban is specifically preferred over dose-adjusted rivaroxaban solely on the basis of low body weight. The key point is that rivaroxaban requires dose adjustment to 15 mg once daily when CrCl is 30-49 mL/min."
  },
  {
    num: 52,
    stem: "A 45-year-old woman with known triple-positive antiphospholipid syndrome (lupus anticoagulant positive, anticardiolipin IgG positive, anti-beta2-glycoprotein-1 IgG positive) is found to have an incidental right calf DVT during a routine scan. She is currently well and not pregnant. She asks about the possibility of switching to a direct oral anticoagulant because she has read about their convenience. Which of the following best summarises the evidence-based recommendation for anticoagulation in this patient?",
    options: {
      A: "DOACs are acceptable alternatives to warfarin in all patients with APS, because recent meta-analyses show non-inferiority across all APS subgroups.",
      B: "Warfarin with a target INR of 2.0-3.0 is the standard of care in triple-positive APS; DOACs should NOT be used in triple-positive APS because the TRAPS trial showed rivaroxaban to be inferior to warfarin for thrombosis prevention in this high-risk subgroup.",
      C: "Dabigatran is the preferred DOAC in triple-positive APS because, as a direct thrombin inhibitor, it targets the final common pathway downstream of all APS-mediated coagulation activation mechanisms.",
      D: "Apixaban 5 mg twice daily is preferred over warfarin in triple-positive APS because the ASTRO-APS trial demonstrated superiority of apixaban for arterial thrombosis prevention.",
      E: "Low-dose aspirin 75 mg daily combined with a DOAC is sufficient antithrombotic therapy because the dual pathway inhibition addresses both the antiphospholipid antibody-mediated hypercoagulability and the platelet activation component."
    },
    answer: "B",
    explanation: "Hoffbrand discusses antiphospholipid syndrome (APS) management and highlights that triple-positive patients (positive lupus anticoagulant, anticardiolipin, and anti-beta2-glycoprotein-1 antibodies) are at the highest risk for recurrent thrombosis. The TRAPS trial (Rivaroxaban in Thrombotic Antiphospholipid Syndrome) demonstrated that rivaroxaban was INFERIOR to warfarin in triple-positive APS, with a significantly higher rate of arterial thrombotic events in the rivaroxaban arm. Consequently, the standard of care for triple-positive APS is warfarin with a target INR of 2.0-3.0 (or higher in recurrent cases). This is one of the few remaining absolute indications for warfarin over DOACs in modern practice. DOACs are acceptable in single-positive or double-positive APS where the risk is lower, but triple-positive status remains a contraindication to DOAC use. Dabigatran has no specific advantage in APS despite its thrombin-inhibition mechanism. The ASTRO-APS trial did not show apixaban superiority in triple-positive APS, and aspirin alone or in combination with a DOAC is insufficient for VTE prevention in APS because the primary driver is coagulation cascade activation, not platelet aggregation."
  },
  {
    num: 53,
    stem: "A 62-year-old man on apixaban 5 mg twice daily for atrial fibrillation presents to the emergency department 2 hours after a fall from a ladder, striking his head. On arrival he is alert but confused. CT head shows a 40 mL acute subdural haematoma with 8 mm midline shift. His last dose of apixaban was taken 6 hours ago. His renal function is normal. Which of the following is the most appropriate immediate reversal strategy?",
    options: {
      A: "Administer oral vitamin K 10 mg and fresh frozen plasma 15 mL/kg immediately, because apixaban is a vitamin K antagonist and FFP reverses its effect.",
      B: "Give andexanet alfa low-dose regimen intravenously, because this is the specific reversal agent for factor Xa inhibitors and achieves rapid restoration of haemostatic activity.",
      C: "Administer prothrombin complex concentrate (PCC) 50 units/kg intravenously, because PCC is the recommended reversal agent for all DOAC-associated major bleeding when the specific reversal agent is unavailable.",
      D: "Give idarucizumab 5 g intravenously because dabigatran and factor Xa inhibitors share the same reversal mechanism and idarucizumab cross-reacts with all DOACs.",
      E: "Transfuse platelets immediately because apixaban impairs platelet function directly, and platelets are the first-line therapy for reversing DOAC-associated intracranial haemorrhage."
    },
    answer: "B",
    explanation: "Hoffbrand discusses DOAC reversal strategies for major bleeding. Andexanet alfa is a recombinant modified human factor Xa decoy protein that specifically binds and sequesters direct factor Xa inhibitors (rivaroxaban, apixaban, edoxaban), thereby rapidly restoring endogenous factor Xa activity. It is approved for life-threatening or uncontrolled bleeding associated with these agents. The low-dose regimen is used when the last dose was le; 5 mg (apixaban) or le; 10 mg (rivaroxaban) and taken more than 8 hours ago, or when unknown timing; the high-dose regimen is used for higher recent doses. Vitamin K and FFP are used for warfarin reversal, not DOACs. PCC (four-factor) at 25-50 U/kg is a reasonable second-line alternative when andexanet alfa is unavailable, but this patient has a subdural haematoma with significant mass effect requiring rapid reversal, making the specific reversal agent (andexanet) preferable. Idarucizumab is specific to dabigatran (a thrombin inhibitor); it does NOT reverse factor Xa inhibitors. Apixaban does NOT affect platelet function directly; platelet transfusion is not indicated for anticoagulant-associated bleeding unless the patient is also thrombocytopenic or on antiplatelet agents."
  },
  {
    num: 54,
    stem: "A 34-year-old woman at 16 weeks gestation presents with acute left iliofemoral DVT. She has a BMI of 28 kg/m2 and no personal or family history of thrombosis. Which of the following is the most appropriate initial anticoagulant regimen and pregnancy-specific counselling?",
    options: {
      A: "Start therapeutic-dose rivaroxaban 15 mg twice daily for 21 days, then 20 mg once daily with food, because DOACs are safe in pregnancy and do not cross the placenta.",
      B: "Start therapeutic-dose unfractionated heparin intravenously with a target APTT ratio of 2.0-3.0, because UFH is safer than LMWH in pregnancy due to its shorter half-life and reversibility with protamine in the event of peripartum haemorrhage.",
      C: "Start therapeutic-dose enoxaparin 1 mg/kg subcutaneously twice daily, because LMWH is the standard anticoagulant in pregnancy (does not cross the placenta, safe for the foetus), and switch to warfarin at 37 weeks gestation.",
      D: "Start therapeutic-dose enoxaparin 1 mg/kg subcutaneously twice daily, because LMWH is the standard anticoagulant in pregnancy, and continue LMWH until at least 6 hours before planned delivery with plans to restart 6+ hours postpartum if no bleeding.",
      E: "Start fondaparinux 7.5 mg subcutaneously once daily because fondaparinux is specifically indicated for VTE in pregnancy and has no placental transfer, unlike LMWH which has minimal but measurable placental passage."
    },
    answer: "D",
    explanation: "Hoffbrand states that low molecular weight heparin (LMWH) is the anticoagulant of choice throughout pregnancy because it does NOT cross the placenta and has been shown to be safe for the foetus in large observational studies. The standard therapeutic regimen is weight-based, e.g. enoxaparin 1 mg/kg twice daily or 1.5 mg/kg once daily. Warfarin is CONTRAINDICATED in pregnancy, especially during the first trimester (organogenesis 6-12 weeks) because it causes the foetal warfarin syndrome (nasal hypoplasia, stippled epiphyses, CNS abnormalities) and during the third trimester because of the risk of foetal intracranial haemorrhage. DOACs (rivaroxaban, apixaban, dabigatran, edoxaban) cross the placenta and are CONTRAINDICATED in pregnancy; there is insufficient safety data. Fondaparinux has limited safety data in pregnancy and is generally reserved for patients who cannot tolerate LMWH or have HIT. UFH is safe in pregnancy and can be used peripartum because it is fully reversible with protamine; however, for LONG-TERM treatment during pregnancy, LMWH is preferred because of its superior bioavailability, predictable pharmacokinetics, lower risk of osteoporosis and HIT, and easier outpatient administration. Management around delivery requires stopping LMWH at least 24 hours before planned delivery (or when labour begins if spontaneous) and restarting 6+ hours after delivery if there is no significant bleeding."
  },
  {
    num: 55,
    stem: "A 71-year-old man with metastatic adenocarcinoma of the pancreas develops acute left proximal DVT. He has no history of bleeding. His ECOG performance status is 1 and his weight is 72 kg. Which of the following best describes the optimal initial anticoagulant strategy and duration of therapy based on current evidence for cancer-associated thrombosis?",
    options: {
      A: "Therapeutic-dose dalteparin 200 units/kg once daily for 30 days, then 150 units/kg once daily for a further 5 months, because LMWH monotherapy is the standard first-line treatment for the first 6 months of cancer-associated thrombosis.",
      B: "Therapeutic-dose enoxaparin 1 mg/kg twice daily for the first month, then switch to warfarin with a target INR of 2.0-3.0 for 5 months, because warfarin is non-inferior to LMWH in cancer-associated thrombosis and easier to administer long-term.",
      C: "Therapeutic-dose apixaban 10 mg twice daily for 7 days, then 5 mg twice daily indefinitely, because the Hokusai-VTE-Cancer trial showed edoxaban to be non-inferior to dalteparin and apixaban is the preferred DOAC for cancer-associated thrombosis.",
      D: "Therapeutic-dose enoxaparin 1 mg/kg twice daily for the first month, then switch to rivaroxaban 20 mg once daily with food, because rivaroxaban is the only DOAC specifically approved for cancer-associated thrombosis in all major guidelines.",
      E: "No anticoagulation is required because the patient has a limited life expectancy from metastatic pancreatic cancer; palliative care should focus on symptom control rather than VTE prophylaxis."
    },
    answer: "A",
    explanation: "Hoffbrand discusses cancer-associated thrombosis (CAT) and notes that LMWH was historically the standard of care for the first 6 months based on the CLOT trial, which showed superiority of dalteparin over warfarin in reducing recurrent VTE without increasing major bleeding in patients with active malignancy. The CATCH trial later confirmed non-inferiority of tinzaparin to dalteparin. More recently, DOACs (apixaban, rivaroxaban, edoxaban) have been studied in CAT. The Hokusai-VTE-Cancer trial showed edoxaban was non-inferior to dalteparin for recurrent VTE prevention but with a significantly higher rate of major bleeding, primarily GI and GU tract bleeding. The SELECT-D trial similarly showed rivaroxaban was associated with higher major bleeding (again GI/GU) compared with dalteparin. The CARAVAGGIO trial showed apixaban was non-inferior to dalteparin for recurrent VTE but also demonstrated numerically higher major bleeding. Consequently, LMWH (dalteparin in the regimen described) remains the preferred first-line agent for CAT, particularly in patients with GI/GU malignancies where DOAC bleeding risk is highest. DOACs are acceptable alternatives when LMWH is not feasible, but are NOT universally preferred in active cancer. Warfarin is inferior to LMWH in the first 6 months of CAT. Anticoagulation is definitely indicated for acute symptomatic DVT even in patients with metastatic cancer; withholding anticoagulation carries a high risk of fatal PE."
  },
  {
    num: 56,
    stem: "Which of the following molecular mechanisms best explains the therapeutic efficacy of fondaparinux as an anticoagulant, and how its mechanism differs from that of unfractionated heparin?",
    options: {
      A: "Fondaparinux binds to antithrombin (AT) and accelerates AT-mediated inhibition of thrombin (factor IIa), requiring a minimum chain length of 18 saccharide units for the ternary complex to form.",
      B: "Fondaparinux consists of a synthetic pentasaccharide sequence that binds AT and selectively accelerates its inhibition of factor Xa only; unlike UFH, fondaparinux cannot bridge AT to thrombin and therefore does not inhibit factor IIa.",
      C: "Fondaparinux is a direct thrombin inhibitor that binds to the active site of thrombin and does not require AT for its anticoagulant effect, similar to dabigatran.",
      D: "Fondaparinux binds to heparin cofactor II (HCII) and selectively accelerates HCII-mediated inhibition of factor Xa, a mechanism distinct from the AT-dependent action of UFH.",
      E: "Fondaparinux catalyses the release of tissue factor pathway inhibitor (TFPI) from the endothelium, which then inhibits both factor VIIa and factor Xa in a mechanism shared with LMWH."
    },
    answer: "B",
    explanation: "Hoffbrand describes fondaparinux as a synthetic pentasaccharide that mimics the specific antithrombin-binding sequence found in heparin molecules. It binds to AT and induces a conformational change that dramatically increases the rate at which AT inhibits factor Xa. Critically, because fondaparinux is only a pentasaccharide (5 sugar units), it is too short to form the bridging ternary complex between AT and thrombin (factor IIa), which requires a minimum of 18 saccharide units. Therefore, fondaparinux selectively inhibits factor Xa and has no direct activity against thrombin. Unfractionated heparin contains molecules of variable chain length (many exceeding 18 saccharides) and therefore can inhibit both factor Xa and thrombin. LMWH has a higher proportion of shorter chains, giving it a predominantly anti-Xa effect with some residual anti-IIa activity. This distinction is clinically relevant because fondaparinux does not affect the APTT and does not cause heparin-induced thrombocytopenia (HIT), as it does not bind platelet factor 4 (PF4)."
  },
  {
    num: 57,
    stem: "Regarding the pharmacodynamics of warfarin and the rationale for overlapping with a parenteral anticoagulant when initiating therapy, which of the following mechanisms best explains why warfarin monotherapy must NOT be used to treat acute thrombosis without overlap?",
    options: {
      A: "Warfarin inhibits the synthesis of all vitamin K-dependent factors equally, so factor VII (half-life 4-6 hours) falls rapidly before protein C (half-life 8 hours), creating a transient hypercoagulable window.",
      B: "Warfarin inhibits gamma-carboxylation of prothrombin, but newly synthesised prothrombin (factor II) has a long half-life of 60-72 hours, so full anticoagulation is delayed even though the INR appears therapeutic.",
      C: "Warfarin inhibits gamma-carboxylation of factors II, VII, IX, and X and of the anticoagulant proteins C and S; because protein C has the shortest half-life (6-8 hours) and factor II the longest (60-72 hours), early warfarin therapy paradoxically creates a prothrombotic state by depleting natural anticoagulants before procoagulant factors fall.",
      D: "Warfarin inhibits vitamin K epoxide reductase (VKORC1) but does not affect fully carboxylated circulating factors; because factor VIII (not vitamin K-dependent) remains unchanged, early warfarin provides incomplete anticoagulation.",
      E: "Warfarin inhibits carboxylation of prothrombin but only after the liver has exhausted its vitamin K stores, which takes approximately 5 days; until then, endogenous clotting factor production continues normally and thrombosis can propagate."
    },
    answer: "C",
    explanation: "Hoffbrand explains that warfarin acts by inhibiting vitamin K epoxide reductase (VKORC1), thereby blocking the gamma-carboxylation of the vitamin K-dependent coagulation factors (II, VII, IX, X) and the naturally occurring anticoagulant proteins C and S. Because protein C has the shortest half-life (approximately 6-8 hours), it is depleted from the circulation before the procoagulant factors fall. Factor VII is the next shortest (4-6 hours), followed by factor IX (24 hours), factor X (24-48 hours), and prothombin/factor II (60-72 hours). This differential kinetics means that during the first 24-72 hours of warfarin therapy, there is a transient period during which the natural anticoagulant pathway via protein C/S is impaired while significant levels of prothrombin (factor II) remain. This creates a paradoxical prothrombotic state that can propagate an existing thrombus or precipitate new thrombosis, manifesting as warfarin-induced skin necrosis in protein C-deficient patients. Therefore, a parenteral anticoagulant (UFH or LMWH) must overlap with warfarin for at least 5 days AND until the INR has been therapeutic (2.0-3.0) for at least 2 consecutive days."
  },
  {
    num: 58,
    stem: "A 49-year-old man presents with acute middle cerebral artery territory ischaemic stroke. He is known to have atrial fibrillation but has been non-adherent with apixaban. CT scan of the head shows no haemorrhage. The stroke onset was witnessed 3.5 hours ago. Which of the following best describes the correct management decision regarding thrombolysis and the rationale?",
    options: {
      A: "Intravenous alteplase 0.9 mg/kg is indicated because the patient is not currently anticoagulated, the CT excludes haemorrhage, and the 3.5-hour window is within the licensed indication for ischaemic stroke thrombolysis.",
      B: "Intravenous alteplase is contraindicated because the patient has atrial fibrillation, which carries a high risk of cardioembolic haemorrhagic transformation if thrombolysis is administered.",
      C: "Mechanical thrombectomy is the only approved intervention because the patient is not on therapeutic anticoagulation; intravenous thrombolysis is reserved for patients on DOACs provided the last dose was more than 48 hours ago.",
      D: "Intravenous aleplase is indicated at a reduced dose of 0.6 mg/kg because the last dose of apixaban was within the last 48 hours, and a reduced dose balances efficacy and bleeding risk.",
      E: "No intervention is recommended because the 3.5-hour window is beyond the proven efficacy period for intravenous thrombolysis, which must be given within 3 hours of symptom onset."
    },
    answer: "A",
    explanation: "Hoffbrand describes the management of acute ischaemic stroke. Intravenous alteplase (recombinant tissue plasminogen activator, rt-PA) is licensed for administration within 4.5 hours of witnessed symptom onset in patients with CT-confirmed absence of intracranial haemorrhage and no other contraindications. The standard dose is 0.9 mg/kg (maximum 90 mg), with 10% given as a bolus and the remainder as a 1-hour infusion. Atrial fibrillation is NOT a contraindication to thrombolysis; in fact, AF is the most common cause of cardioembolic stroke, and thrombolysis is frequently administered in these patients. Contraindications to thrombolysis include known intracranial haemorrhage, recent major surgery or trauma, active bleeding, severe uncontrolled hypertension, and recent DOAC use (within the last 48 hours for apixaban/rivaroxaban or within the last 24 hours for dabigatran). In this case, the patient has been NON-ADHERENT with apixaban, so there is no residual anticoagulant effect. Mechanical thrombectomy is considered for large-vessel occlusion (e.g. internal carotid or proximal middle cerebral artery) and can extend the therapeutic window to 6-24 hours in selected patients, but it does not replace IV thrombolysis when the patient meets criteria."
  },
  {
    num: 59,
    stem: "Which of the following best describes the pharmacological reversal strategy for a patient on dabigatran who presents with life-threatening gastrointestinal bleeding, and the mechanism by which the specific reversal agent works?",
    options: {
      A: "Administer andexanet alfa intravenously; it is a recombinant factor Xa mimic that binds dabigatran with high affinity, thereby restoring endogenous thrombin activity.",
      B: "Administer idarucizumab 5 g intravenously; it is a humanised monoclonal antibody fragment that binds dabigatran with an affinity approximately 350 times greater than thrombin, forming an inactive complex that is renally excreted.",
      C: "Administer vitamin K 10 mg intravenously and fresh frozen plasma 15 mL/kg; vitamin K restores gamma-carboxylation of prothrombin and FFP replaces depleted clotting factors.",
      D: "Administer tranexamic acid 1 g intravenously; it inhibits plasminogen activation and stabilises the fibrin clot, thereby counteracting the fibrinolytic effect of dabigatran.",
      E: "Administer protamine sulphate 50 mg intravenously; it binds dabigatran via electrostatic interaction and neutralises its anticoagulant effect."
    },
    answer: "B",
    explanation: "Hoffbrand describes idarucizumab as the specific reversal agent for dabigatran. It is a humanised monoclonal antibody fragment (Fab) that binds dabigatran with an affinity approximately 350-fold higher than that of thrombin for dabigatran. This high-affinity binding forms an inactive complex that is rapidly cleared by the kidneys, thereby immediately restoring the patient's endogenous thrombin activity and haemostatic capacity. The recommended dose is 5 g intravenously (given as two consecutive 2.5 g infusions over 5-10 minutes each). Andexanet alfa is the specific reversal agent for direct factor Xa inhibitors (rivaroxaban, apixaban, edoxaban), not for dabigatran. Vitamin K and FFP are used for warfarin reversal because warfarin depletes fully carboxylated vitamin K-dependent factors. Tranexamic acid is an antifibrinolytic agent used for bleeding secondary to excessive fibrinolysis (e.g. trauma, menorrhagia, postpartum haemorrhage) but does NOT reverse the direct anticoagulant effect of dabigatran on thrombin. Protamine sulphate reverses unfractionated heparin and partially reverses LMWH; it has NO effect on dabigatran or any DOAC."
  },
  {
    num: 60,
    stem: "Regarding the perioperative management of anticoagulation in a patient on a direct oral anticoagulant (DOAC) undergoing elective surgery, which of the following best summarises the recommended approach for a patient on apixaban 5 mg twice daily with normal renal function (CrCl 80 mL/min)?",
    options: {
      A: "Stop apixaban 48 hours before surgery with a low bleeding risk procedure and 72 hours before surgery with a high bleeding risk procedure; do not bridge with heparin because the rapid offset of DOACs makes bridging unnecessary.",
      B: "Stop apixaban 24 hours before surgery and bridge with therapeutic-dose LMWH until 12 hours pre-operatively, then restart LMWH 12 hours postoperatively before resuming apixaban.",
      C: "Stop apixaban 5 days before surgery (similar to warfarin) and bridge with therapeutic-dose LMWH, because DOACs have long half-lives that require extended interruption.",
      D: "Continue apixaban until the morning of surgery for low-risk procedures, but stop 72 hours before surgery for high-risk procedures; routine bridging is not required due to the predictable pharmacokinetics of DOACs.",
      E: "Switch to warfarin 3 weeks before surgery to allow standard bridging protocols, because DOACs are not approved for patients undergoing surgery due to unpredictable surgical bleeding risk."
    },
    answer: "A",
    explanation: "Hoffbrand summarises the perioperative management of DOACs based on pharmacokinetic principles and surgical bleeding risk. Because DOACs have rapid onset and offset (apixaban half-life approximately 12 hours in normal renal function), bridging with heparin is generally NOT required when interrupting DOACs for surgery. For patients with normal renal function (CrCl ge; 80 mL/min): (1) for procedures with LOW bleeding risk (e.g. minor dental, dermatological, cataract), apixaban can often be continued or stopped just 24-48 hours beforehand; (2) for procedures with HIGH bleeding risk (e.g. major orthopaedic, intracranial, spinal), apixaban should be stopped approximately 48 hours before surgery. For patients with impaired renal function (CrCl 30-49 mL/min), the interval should be extended to approximately 72 hours before high-bleeding-risk surgery due to slower drug clearance. Bridging with LMWH or UFH is generally unnecessary and in fact counterproductive because it increases bleeding risk without providing additional thrombosis protection during the relatively brief DOAC-free window. Heparin bridging IS indicated when interrupting warfarin for surgery because warfarin has a slow offset (5 days) and long half-life. For elective surgery, DOACs are resumed when haemostasis is secure postoperatively, typically 48-72 hours after high-bleeding-risk procedures and 24 hours after low-bleeding-risk procedures. The approach described in option A matches the standard perioperative DOAC management algorithm endorsed by international guidelines."
  }
];
