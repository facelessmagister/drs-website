export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 301,
    stem: "A 62-year-old man with coronary artery disease takes daily low-dose aspirin. Prior to elective coronary artery bypass grafting, light transmission aggregometry (LTA) is performed. Which agonist response pattern is most consistent with aspirin-induced platelet dysfunction?",
    options: {
      A: "Absent aggregation with arachidonic acid, with impaired secondary waves but preserved primary waves to ADP and collagen",
      B: "Complete loss of aggregation with ADP, with preserved responses to collagen, arachidonic acid, and ristocetin",
      C: "Absent aggregation with collagen, with normal responses to ADP, arachidonic acid, and ristocetin",
      D: "Absent agglutination with ristocetin, with normal aggregation to ADP, collagen, and arachidonic acid",
      E: "Global absent aggregation with all agonists, including ristocetin"
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.8), states that thromboxane A2 (TXA2) is synthesized from arachidonic acid via sequential action of cyclooxygenase-1 and thromboxane synthase in platelets, and that aspirin irreversibly inhibits this pathway. TXA2 potentiates platelet aggregation by amplifying activation through autocrine and paracrine mechanisms. Aspirin characteristically abolishes aggregation with arachidonic acid. The impaired secondary wave with ADP and collagen reflects the dependence of sustained, irreversible aggregation on released TXA2 and dense granule ADP. The primary wave (direct agonist response) may be preserved because initial shape change and granule release are partly TXA2-independent. Option B describes P2Y12 receptor deficiency or clopidogrel effect. Option C suggests GPVI or signalling pathway deficiency. Option D indicates von Willebrand disease or GPIb-IX-V deficiency. Option E describes severe GPIIb/IIIa deficiency (Glanzmann thrombasthenia)."
  },
  {
    num: 302,
    stem: "A 4-year-old boy is brought to the emergency department with spontaneous swelling of the right knee and extensive bruising following minor trauma. His maternal uncle had similar symptoms and died from intracranial haemorrhage in childhood. Laboratory studies show: PT 11 s (normal), APTT 68 s (prolonged), fibrinogen 3.0 g/L, platelets 250 × 10^9/L. A 50:50 mixing study with normal plasma completely corrects the APTT. Factor VIII activity is <1%. Which statement best evaluates the pathophysiology and the most appropriate therapeutic approach?",
    options: {
      A: "The prolonged APTT reflects deficiency of a contact pathway factor; recombinant FVIII replacement is unnecessary because contact factors do not contribute to in vivo coagulation",
      B: "FXII deficiency is the cause; because FXII is essential for physiological thrombin generation, urgent FXII concentrate is indicated",
      C: "Severe FVIII deficiency prevents formation of the intrinsic tenase complex; recombinant FVIII is the standard replacement therapy to restore propagation-phase thrombin generation",
      D: "The extrinsic tenase complex is defective; treatment should target restoration of the tissue factor–FVIIa interaction",
      E: "Prothrombinase complex deficiency is present; administration of prothrombin complex concentrate is the specific therapy"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.9), describes the cell-based model of coagulation. The intrinsic tenase complex (FIXa–FVIIIa–phospholipid–Ca2+) is the primary activator of FX during the propagation phase, generating approximately 95% of total thrombin via the prothrombinase complex. FVIII deficiency prevents formation of this complex, leading to severe impairment of thrombin generation and the characteristic bleeding phenotype of haemophilia A. The isolated APTT prolongation reflects the propagation phase defect. Recombinant FVIII replacement restores intrinsic tenase function. Option A is incorrect because severe FVIII deficiency causes significant bleeding, unlike contact factor deficiencies. Option B is incorrect because FXII deficiency is not associated with bleeding. Option D describes the extrinsic pathway, which is measured by PT and is normal here. Option E is incorrect because the prothrombinase complex requires FXa and FVa, not FVIII."
  },
  {
    num: 303,
    stem: "A 35-year-old woman is referred for investigation of easy bruising and menorrhagia. Her father has similar symptoms. Laboratory studies show: platelets 200 × 10^9/L, PT 11 s, APTT 42 s (slightly prolonged), TT 14 s, fibrinogen 3.2 g/L. The platelet function analyser (PFA-200) closure time is prolonged with both collagen/ADP and collagen/adrenaline cartridges. Light transmission aggregometry shows absent agglutination with ristocetin, but normal aggregation with ADP, collagen, and arachidonic acid. Which molecular mechanism best explains her phenotype?",
    options: {
      A: "Deficiency of high molecular weight von Willebrand factor multimers, preventing platelet tethering to subendothelial collagen under shear stress",
      B: "Inherited absence of the GPIb-IX-V complex, abolishing VWF-mediated platelet adhesion",
      C: "Loss-of-function mutation in glycoprotein IIb/IIIa, preventing fibrinogen bridging between adjacent platelets",
      D: "Deficiency of ADP release from dense granules, impairing secondary wave aggregation with all agonists",
      E: "Defective thromboxane A2 synthesis, preventing amplification of platelet activation despite normal initial adhesion"
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.7 and text on tests of platelet function), describes von Willebrand factor (VWF) as essential for platelet adhesion under high shear via the GPIb-IX-V complex. The PFA-200 measures platelet adhesion under shear, primarily via VWF–GPIb and GPIIb/IIIa interactions. Absent ristocetin-induced agglutination with preserved aggregation to ADP, collagen, and arachidonic acid localizes the defect to VWF rather than platelet receptors. The autosomal dominant family history (father affected) is characteristic of von Willebrand disease. Option B (Bernard-Soulier syndrome) would also show absent ristocetin agglutination, but is autosomal recessive and far less common; the dominant inheritance makes VWD far more likely. Option C would show absent aggregation with all agonists. Option D would show abnormal aggregation with ADP and impaired secondary waves. Option E would show absent arachidonic acid aggregation."
  },
  {
    num: 304,
    stem: "A 24-year-old man is brought to the emergency department following a road traffic accident with massive haemorrhage. He receives 12 units of packed red cells and 6 units of fresh frozen plasma. Despite this, bleeding continues from multiple sites. A thromboelastogram (TEG) shows prolonged reaction (R) time, decreased alpha angle, and decreased maximum amplitude (MA). Which statement best interprets these findings and guides the most appropriate therapy?",
    options: {
      A: "Prolonged R-time indicates fibrinolysis; tranexamic acid is the immediate priority",
      B: "Decreased alpha angle reflects isolated platelet dysfunction; platelet transfusion alone is required",
      C: "Decreased MA suggests clot instability from hyperfibrinolysis; cryoprecipitate should be administered",
      D: "The combination of prolonged R-time and decreased MA indicates deficiency of both coagulation factors and platelet–fibrinogen interactions; FFP and cryoprecipitate or platelets are needed",
      E: "Normal TEG tracing despite clinical bleeding suggests a purely vascular source; surgical control is the only solution"
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, section on viscoelastic tests), describes TEG as assessing whole blood clot formation by monitoring changes in viscoelastic properties. The R-time reflects initial fibrin formation (dependent on coagulation factors), the alpha angle reflects the rate of fibrin polymerization (dependent on fibrinogen), and the maximum amplitude (MA) reflects clot strength (dependent on platelets and fibrinogen). The pattern described indicates multiple deficiencies: prolonged R-time from factor depletion due to haemodilution and consumption, decreased alpha angle from hypofibrinogenaemia, and decreased MA from thrombocytopenia and/or low fibrinogen. Option A is incorrect because fibrinolysis would show decreased lysis time (LY30), not prolonged R-time. Option B is incomplete as the alpha angle also reflects fibrinogen. Option C misattributes MA decrease to hyperfibrinolysis. Option E contradicts the explicitly abnormal TEG described."
  },
  {
    num: 305,
    stem: "A 65-year-old woman with Gram-negative sepsis develops progressive oozing from venepuncture sites and purpura fulminans. Laboratory studies: platelets 35 × 10^9/L, PT 26 s, APTT 82 s, TT 32 s, fibrinogen 0.5 g/L, D-dimers >80 mg/L. The blood film shows fragmented red cells (schistocytes). Which pathophysiological mechanism best explains the coagulation abnormalities, and what is the most immediate therapeutic priority?",
    options: {
      A: "Massive activation of the extrinsic pathway by tissue factor released from monocytes; urgent full-dose anticoagulation with heparin is essential",
      B: "Widespread intravascular fibrin deposition consuming coagulation factors and platelets; replacement with FFP, platelets, and fibrinogen concentrate is indicated",
      C: "Primary fibrinolysis due to excessive tPA release from the endothelium; tranexamic acid alone will correct the haemostatic defect",
      D: "Vitamin K deficiency from nutritional depletion and antibiotic use; intravenous vitamin K will correct all parameters within 6–12 hours",
      E: "Heparin-induced thrombocytopenia from prophylactic low molecular weight heparin; immediate discontinuation of all heparin is required"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, section on coagulation regulation), describes how tissue factor exposure initiates the coagulation cascade, generating thrombin that consumes fibrinogen, factors V and VIII, and platelets. Disseminated intravascular coagulation (DIC) represents pathological activation of coagulation with simultaneous consumption of clotting factors and platelets, leading to bleeding. The schistocytes reflect microangiopathic haemolysis from fibrin deposition in small vessels. The markedly elevated D-dimers indicate secondary fibrinolysis of cross-linked fibrin. Immediate replacement therapy with FFP, platelet transfusion, and fibrinogen concentrate is indicated for bleeding DIC. Option A is incorrect because anticoagulation is not the priority in bleeding DIC. Option C is incorrect because primary fibrinolysis is rare; the fibrinolysis in DIC is secondary to widespread clot formation. Option D cannot explain the severity or the schistocytes. Option E is incorrect because heparin-induced thrombocytopenia does not typically cause PT/APTT prolongation, hypofibrinogenaemia, or schistocytes."
  },
  {
    num: 306,
    stem: "Regarding the cell-based model of coagulation and thrombin generation, which statement most accurately describes the localization and relative contribution of each phase to total thrombin production?",
    options: {
      A: "The initiation phase on the injured cell surface generates approximately 95% of total thrombin through the extrinsic tenase complex",
      B: "The amplification phase is characterized by a million-fold increase in thrombin generation compared with the initiation phase, occurring primarily on activated platelet surfaces",
      C: "The propagation phase generates the bulk of thrombin on activated platelet surfaces via the intrinsic tenase complex, which is 50-fold more efficient than extrinsic tenase at activating factor X",
      D: "Prothrombinase complex formation requires tissue factor, FVIIa, and calcium on a phospholipid surface provided by injured cells",
      E: "Contact factor XIIa is essential for physiological thrombin generation in vivo, as it initiates the intrinsic pathway through FXI activation"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.9), describes the cell-based model of coagulation. The propagation phase generates approximately 95% of total thrombin (the 'thrombin burst') on activated platelet surfaces. The intrinsic tenase complex (FIXa–FVIIIa–PL–Ca2+) is the primary activator of FX during this phase and is 50-fold more efficient than FVIIa–tissue factor in catalysing FX activation. Option A reverses the phases—initiation generates only picomolar amounts of thrombin. Option B incorrectly attributes the million-fold increase to amplification; the amplification phase generates small amounts of thrombin on injured cells, while the propagation phase produces the massive burst. Option D describes the extrinsic tenase complex, not prothrombinase (FXa–FVa). Option E is incorrect because FXII deficiency is not associated with bleeding; physiological FXI activation is catalysed by thrombin, not FXIIa."
  },
  {
    num: 307,
    stem: "Regarding platelet receptors and their signalling pathways, which statement most accurately describes the mechanisms of inside-out and outside-in signalling?",
    options: {
      A: "Inside-out signalling is initiated by fibrinogen binding to GPIIb/IIIa, triggering intracellular pathways that promote platelet spreading and receptor clustering",
      B: "Outside-in signalling refers to the conformational change of integrin receptors from low to high affinity following intracellular activation signals generated by soluble agonists",
      C: "Inside-out signalling involves intracellular signals initiated by adhesion or soluble agonists that cause GPIIb/IIIa to switch from a low-affinity to a high-affinity state, enabling fibrinogen binding and platelet aggregation",
      D: "GPVI is the primary platelet mechanosensor that mediates tethering to von Willebrand factor under high shear conditions via the A1 domain",
      E: "The P2Y1 receptor mediates sustained platelet aggregation via Gi-protein signalling, while P2Y12 mediates initial shape change via Gq-protein signalling"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.7), describes inside-out signalling as intracellular signalling initiated by adhesion or soluble agonists that causes integrin receptors such as GPIIb/IIIa to switch from a low-affinity to a high-affinity state. This conformational change enables binding to ligands including fibrinogen and VWF, permitting platelet aggregation. Outside-in signalling occurs after ligand binding (e.g., fibrinogen to GPIIb/IIIa), activating intracellular pathways that cause irreversible changes including platelet spreading, receptor clustering, and cytoskeletal reorganization. Option A describes outside-in, not inside-out. Option B describes inside-out, not outside-in. Option D incorrectly attributes VWF tethering to GPVI; GPIb-IX-V is the mechanosensor that mediates VWF tethering. Option E reverses the purinergic receptor roles—P2Y1 couples to Gq and mediates shape change and initial aggregation, while P2Y12 couples to Gi and mediates sustained aggregation."
  },
  {
    num: 308,
    stem: "Regarding the regulation of fibrinolysis, which statement most accurately integrates the roles of the principal inhibitors and their mechanisms?",
    options: {
      A: "Plasminogen activator inhibitor-1 (PAI-1) directly inhibits plasmin activity, while α2-antiplasmin prevents tPA and uPA from activating plasminogen",
      B: "Thrombin-activatable fibrinolysis inhibitor (TAFIa) is a carboxypeptidase that downregulates fibrinolysis by cleaving lysine residues from partially degraded fibrin, thereby reducing the colocalization of tPA and plasminogen",
      C: "α2-Macroglobulin is the principal fast-acting inhibitor of plasmin in plasma, present at higher concentration and greater specificity than α2-antiplasmin",
      D: "tPA activates plasminogen in the circulation by binding to cellular receptors, whereas uPA requires cross-linked fibrin as a cofactor for plasminogen activation",
      E: "Plasmin specifically degrades cross-linked fibrin but spares fibrinogen, factor V, and factor VIII from proteolytic digestion"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.13), describes TAFIa as a carboxypeptidase generated from TAFI by the thrombin–thrombomodulin complex. TAFIa downregulates fibrinolysis by cleaving lysine residues from partially degraded fibrin. This removes binding sites for tPA and plasminogen, preventing their colocalization and reducing plasmin generation. Option A reverses the inhibitor roles: PAI-1 inhibits tPA and uPA, while α2-antiplasmin directly inhibits plasmin. Option C is incorrect because α2-antiplasmin is the fast-acting, specific plasmin inhibitor; α2-macroglobulin is a broad-spectrum protease inhibitor. Option D reverses the mechanisms—tPA requires cross-linked fibrin for colocalization with plasminogen, while uPA activates plasminogen when both are associated with cellular receptors. Option E is incorrect because excess plasmin digests fibrinogen, factor V, factor VIII, and other proteins."
  },
  {
    num: 309,
    stem: "Regarding the antithrombotic and prothrombotic properties of endothelial cells, which statement most accurately describes their dual role in haemostasis?",
    options: {
      A: "Endothelial cells secrete tissue factor pathway inhibitor (TFPI) exclusively into the circulation, where it inhibits the extrinsic tenase complex on circulating microparticles",
      B: "The endothelial glycocalyx contains heparan sulphate, which increases the catalytic efficiency of antithrombin at the cell surface, and thrombomodulin, which converts thrombin from a procoagulant to an anticoagulant enzyme by activating protein C",
      C: "Prostacyclin (PGI2) and nitric oxide (NO) are stored in endothelial Weibel-Palade bodies and released exclusively during thrombotic stimuli to promote vasoconstriction and platelet activation",
      D: "Following activation by proinflammatory cytokines, endothelial cells downregulate von Willebrand factor expression and reduce PAI-1 secretion to maintain a pro-fibrinolytic surface",
      E: "Endothelial cells synthesize prostacyclin and nitric oxide which inhibit platelet activation, but these mediators are produced only by arterial endothelium and are absent in venous endothelium"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.14), describes endothelial cells as having both antithrombotic and prothrombotic properties. The endothelial glycocalyx contains heparan sulphate, which increases the catalytic efficiency of antithrombin at the cell surface. Thrombomodulin, an endothelial thrombin receptor, converts thrombin from a procoagulant to an anticoagulant by binding thrombin and switching its substrate specificity to activate protein C. Option A is incorrect because more than 90% of TFPI is bound to endothelial cells (TFPIβ), not circulating freely. Option C is incorrect because PGI2 and NO are produced constitutively by endothelial cells; they inhibit platelet activation, induce vasodilation, and are not stored in Weibel-Palade bodies. Option D is incorrect because activated endothelial cells increase VWF expression and PAI-1 secretion, promoting thrombosis. Option E is incorrect because these antithrombotic mediators are produced by all endothelial cells, not exclusively arterial endothelium."
  },
  {
    num: 310,
    stem: "Regarding the structure, formation, and regulation of platelets, which statement most accurately integrates megakaryocyte biology with thrombopoietin physiology?",
    options: {
      A: "Thrombopoietin (TPO) is primarily produced by the kidneys and binds to MPL receptors on megakaryoblasts, stimulating nuclear endomitosis without cytoplasmic maturation",
      B: "Cytoplasmic maturation of megakaryocytes includes the appearance of the demarcation membrane system (DMS), which is a closed tubular network disconnected from the plasma membrane that stores calcium for platelet activation",
      C: "Plasma levels of TPO are directly proportional to platelet and megakaryocyte mass; levels rise in essential thrombocythaemia and fall in aplastic anaemia",
      D: "The liver contributes approximately 95% of circulating TPO, and hepatic production is stimulated when desialylated senescent platelets bind to the Ashwell–Morell (asialoglycoprotein) receptor, triggering JAK2-mediated TPO synthesis",
      E: "Each megakaryocyte releases exactly 1000 platelets during proplatelet formation, and the process is independent of shear forces generated by circulating blood"
    },
    answer: "D",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 26, Fig. 26.5), describes the regulation of platelet production through hepatic clearance of desialylated platelets. When senescent platelets lose sialic acid, they bind to the hepatic Ashwell–Morell (asialoglycoprotein) receptor. This triggers JAK2 signalling, stimulating hepatic TPO production. The liver contributes approximately 95% of TPO. Option A is incorrect because TPO is primarily hepatic, not renal, and it stimulates both proliferation and complete differentiation including cytoplasmic maturation. Option B is incorrect because the DMS is continuous with the plasma membrane and acts as a membrane reservoir for platelet development, not a calcium-storing closed system (the dense tubular system stores calcium). Option C reverses the relationship—TPO levels are inversely proportional to platelet mass; they are high in aplastic anaemia and low in thrombocytosis. Option E is incorrect because each megakaryocyte releases approximately 1000–5000 platelets, and shear forces from circulating blood facilitate fragmentation into platelets."
  }
];
