export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 161,
    stem: "A 22-year-old man with newly diagnosed Burkitt lymphoma and a white cell count of 145 × 10⁹/L is started on cyclophosphamide, doxorubicin, vincristine, and prednisolone (CHOP) chemotherapy. Within 48 hours, he develops acute oligoanuric renal failure. Laboratory studies show potassium 6.8 mmol/L, phosphate 3.2 mmol/L, uric acid 620 μmol/L, and corrected calcium 1.62 mmol/L. Which of the following is the most appropriate immediate therapeutic intervention?",
    options: {
      A: "Rasburicase, with confirmation of G6PD status if time permits, combined with aggressive intravenous hydration and close electrolyte monitoring.",
      B: "Allopurinol at standard prophylactic dose, because rasburicase and allopurinol act synergistically and should always be co-administered.",
      C: "Aggressive alkalinization of the urine with intravenous sodium bicarbonate to solubilize uric acid and enhance renal excretion.",
      D: "Emergent haemodialysis as the sole intervention, since pharmacological management is contraindicated in the setting of established acute renal failure.",
      E: "Immediate leukapheresis to reduce the white cell count, as this is the definitive treatment for tumour lysis syndrome."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes tumour lysis syndrome (TLS) as a potentially life-threatening complication of chemotherapy in rapidly proliferating malignancies such as Burkitt lymphoma and acute leukaemia with high white cell counts. The syndrome arises from rapid lysis of tumour cells causing hyperuricaemia, hyperkalaemia, hyperphosphataemia, and hypocalcaemia. Rasburicase, a recombinant urate oxidase that converts uric acid to the highly soluble allantoin, is highly effective in controlling hyperuricaemia and is preferred over allopurinol in high-risk or established TLS. Patients should be tested for G6PD deficiency prior to rasburicase because the enzyme can precipitate haemolysis in deficient individuals. Allopurinol and rasburicase counteract each other's effectiveness because allopurinol blocks xanthine oxidase upstream of uric acid production, while rasburicase acts downstream by metabolizing uric acid itself; their concurrent use is not recommended. Alkalinization of urine is avoided because xanthine and hypoxanthine are more soluble than uric acid but can crystallize at high pH. Haemodialysis may be needed as an adjunct but does not replace metabolic control. Leukapheresis reduces tumour burden but does not directly reverse TLS."
  },
  {
    num: 162,
    stem: "A 61-year-old woman with relapsed diffuse large B-cell lymphoma is receiving rituximab, ifosfamide, carboplatin, and etoposide (R-ICE) chemotherapy. On day 10 post-chemotherapy, she develops fever of 38.9°C. Her neutrophil count is 0.1 × 10⁹/L. She has a tunnelled central venous catheter in place. Blood cultures are drawn from the peripheral vein and the catheter hub. Which of the following is the most appropriate initial empiric antibiotic strategy?",
    options: {
      A: "A broad-spectrum anti-pseudomonal beta-lactam such as piperacillin/tazobactam or meropenem, with addition of vancomycin or teicoplanin if a central line or skin source is suspected.",
      B: "Oral ciprofloxacin plus amoxicillin-clavulanate as outpatient oral therapy, since she is afebrile and has no localizing signs.",
      C: "Metronidazole monotherapy targeting anaerobic gut organisms, as Gram-negative bacteraemia in neutropenic patients is almost exclusively due to anaerobes.",
      D: "Initiation of empiric liposomal amphotericin B at the same time as antibacterial therapy, because fungal infection is the most likely cause of fever in the first 48 hours of neutropenia.",
      E: "Immediate removal of the central venous catheter and cessation of all chemotherapy, as the catheter is the definitive source and no antibiotic regimen can salvage an infected line."
    },
    answer: "A",
    explanation: "Hoffbrand states that fever in neutropenic patients should be investigated and treated very quickly. A typical regimen is based on a single broad-spectrum agent such as piperacillin/tazobactam, meropenem, or a broad-spectrum cephalosporin with anti-pseudomonal activity. Staphylococcus epidermidis commonly colonizes central venous lines and agents such as teicoplanin, vancomycin, or linezolid may be needed. If no response occurs within 48–72 hours, antifungal therapy is considered; it is not first-line at presentation. Oral outpatient regimens are inappropriate for febrile neutropenia. Metronidazole monotherapy is insufficient because Gram-negative organisms such as Pseudomonas aeruginosa, Escherichia coli, Klebsiella, and Proteus are major pathogens. While catheter removal may ultimately be required, it is not the immediate sole intervention; empiric antibiotics must be started first."
  },
  {
    num: 163,
    stem: "A 45-year-old man with acute myeloid leukaemia (AML) is scheduled for allogeneic stem cell transplantation from a matched unrelated donor. The recipient is blood group A, and the donor is blood group O. Which of the following best describes the ABO incompatibility classification and the implications for blood component support in the early post-transplant period?",
    options: {
      A: "This constitutes a minor ABO incompatibility because the donor's plasma contains anti-A antibodies that can react with the recipient's group A red cells; in the early post-transplant period, the recipient should receive group O red cells and group A platelets/plasma.",
      B: "This is a major ABO incompatibility because the recipient's plasma anti-B antibodies are incompatible with the donor's group O red cells; the recipient should continue to receive group A blood products throughout the transplant course.",
      C: "This is a bidirectional ABO incompatibility because both donor and recipient antibodies are reactive; the recipient must receive irradiated group AB blood products exclusively.",
      D: "The ABO mismatch is irrelevant after stem cell transplantation because donor haemopoietic stem cells will engraft and completely replace recipient erythrocyte production within 7 days.",
      E: "Group O donors are universal donors for stem cell transplantation, so no special blood product modifications are required at any stage."
    },
    answer: "A",
    explanation: "Hoffbrand Table 12.2 defines minor ABO incompatibility as occurring when the donor's plasma contains antibodies (anti-A and/or anti-B) that react with the recipient's red cells, such as a group O donor and a group A recipient. Major incompatibility would be a group A donor and group O recipient. Bidirectional incompatibility involves both directions, e.g., group A donor and group B recipient. In the early post-transplant period, blood component ABO requirements depend on donor-recipient compatibility; for a minor mismatch with a group O donor and group A recipient, the recipient initially receives group O red cells to avoid donor anti-A-mediated haemolysis, while platelets and plasma may be group A or O depending on institutional protocols. ABO incompatibility is never irrelevant; delayed red cell engraftment and haemolysis are recognized complications. Group O donors are not universal in the stem cell context because plasma incompatibility remains significant."
  },
  {
    num: 164,
    stem: "A 34-year-old woman with acute lymphoblastic leukaemia (ALL) is receiving hyper-CVAD chemotherapy. She develops grade III oral mucositis (oral ulcers, liquid diet only) and has been neutropenic for 14 days. She is on prophylactic aciclovir, co-trimoxazole, and posaconazole. On day 16 she develops fever of 38.5°C with a new dry cough. High-resolution CT chest scan shows nodular lesions with a ground-glass halo appearance. Serum galactomannan is positive. Which of the following is the most accurate next step in management?",
    options: {
      A: "Empiric treatment with voriconazole or isavuconazole, maintaining a high index of suspicion for invasive aspergillosis in a persistently neutropenic patient with compatible radiology and biomarker positivity.",
      B: "Discontinuation of posaconazole prophylaxis because it has clearly failed, followed by observation alone since neutropenic patients cannot mount an inflammatory response to fungal infection.",
      C: "Switch from posaconazole to fluconazole, as Candida species are the most likely cause of pulmonary nodules in neutropenic patients and fluconazole has superior Candida coverage.",
      D: "Initiation of intravenous aciclovir at treatment doses, because herpes simplex virus is the most common cause of oral ulcers and can disseminate to the lungs to cause nodular infiltrates.",
      E: "Broad-spectrum antibacterial therapy alone is sufficient because positive galactomannan in neutropenic patients is frequently a false positive related to concomitant piperacillin/tazobactam use."
    },
    answer: "A",
    explanation: "Hoffbrand describes how invasive aspergillosis is a major cause of infectious death in intensively immunocompromised patients. The diagnosis is difficult; HRCT chest scan is valuable and early features include nodular lesions with a ground-glass halo appearance, with the air crescent sign seen later. Aspergillus galactomannan ELISA and beta-D-glucan are useful biomarkers. A high index of suspicion should be maintained, and treatment is often started empirically for fever failing to resolve after 2–4 days of antibiotics. Prophylaxis or treatment for Aspergillus is usually performed with itraconazole, caspofungin, micafungin, voriconazole, posaconazole, isavuconazole, or lipid-formulation amphotericin. Fluconazole lacks Aspergillus coverage. Discontinuation of prophylaxis without treatment is dangerous. HSV causes oral ulcers but does not produce the halo sign on CT. While piperacillin/tazobactam can cause false-positive galactomannan, the combination of persistent neutropenia, new pulmonary nodules with halo sign, and positive galactomannan is highly specific for invasive aspergillosis and mandates antifungal therapy."
  },
  {
    num: 165,
    stem: "A 19-year-old man with relapsed B-cell acute lymphoblastic leukaemia receives tisagenlecleucel (anti-CD19 CAR-T cell therapy). On day 4 post-infusion, he develops fever of 39.2°C, hypotension requiring vasopressors, and hypoxaemia. Interleukin-6 levels are markedly elevated. Which of the following best describes the underlying pathophysiology and the most appropriate immediate treatment?",
    options: {
      A: "Cytokine release syndrome driven by CAR-T cell activation, with released IL-6, TNF-alpha, and interferon-gamma causing endothelial leakage and hypotension; treatment is with tocilizumab (anti-IL-6 receptor antibody) and corticosteroids.",
      B: "Immune cell-associated neurotoxicity syndrome (ICANS), which typically presents with fever, hypotension, and hypoxaemia within the first week and is best treated with intravenous immunoglobulin and levetiracetam.",
      C: "Septicaemia from the indwelling central venous catheter, which is the most common cause of fever post-CAR-T therapy and should be treated with broad-spectrum antibiotics before considering CRS.",
      D: "Tumour lysis syndrome precipitated by rapid leukaemia cell lysis from CAR-T cells, for which the treatment is rasburicase and aggressive hydration rather than anti-cytokine therapy.",
      E: "Graft-versus-host disease because the CAR-T cells are allogeneic donor-derived T cells attacking recipient tissues, requiring intensification of ciclosporin and mycophenolate mofetil."
    },
    answer: "A",
    explanation: "Hoffbrand describes how CAR-T cells can cause cytokine release syndrome (CRS) and immune cell-associated neurotoxicity syndrome (ICANS). Cardinal features of CRS are fever, hypotension, and hypoxia, by which severity can be assessed. The cytokines released include tumour necrosis factor, interferon-gamma, and many interleukins. Treatment is with corticosteroids and anti-IL-6 receptor antibodies such as tocilizumab. Monitoring in a critical care setting may be required. ICANS presents with confusion, agitation, seizures, and speech problems, and is graded by the ICE score; it is not the primary diagnosis here given the hemodynamic and respiratory features. Septicaemia must be considered but the pattern of fever, hypotension, hypoxia, and elevated IL-6 in the context of CAR-T therapy is classic for CRS. Tumour lysis syndrome causes renal and electrolyte complications, not primarily vasopressor-dependent hypotension. Autologous CAR-T cells are derived from the patient's own immune cells and therefore do not cause graft-versus-host disease."
  },
  {
    num: 166,
    stem: "Regarding the pharmacological management of tumour lysis syndrome (TLS), which of the following statements most accurately describes the mechanisms of allopurinol and rasburicase and the rationale for their use?",
    options: {
      A: "Allopurinol is a xanthine oxidase inhibitor that blocks conversion of hypoxanthine and xanthine to uric acid, while rasburicase is a recombinant urate oxidase that converts existing uric acid to allantoin; they should not be used concurrently because they act at different points in the pathway and counteract each other's effectiveness.",
      B: "Both drugs act on xanthine oxidase; allopurinol is a competitive inhibitor, whereas rasburicase is a non-competitive inhibitor, and their combination provides synergistic uric acid lowering.",
      C: "Rasburicase inhibits xanthine oxidase, preventing de novo uric acid synthesis, while allopurinol degrades existing uric acid crystals in renal tubules through direct enzymatic cleavage.",
      D: "Allopurinol accelerates renal excretion of uric acid by inhibiting tubular reabsorption in the proximal convoluted tubule, analogous to the mechanism of probenecid.",
      E: "Rasburicase requires alkaline urine to function optimally, so concurrent sodium bicarbonate administration is essential to achieve its therapeutic effect."
    },
    answer: "A",
    explanation: "Hoffbrand Fig. 12.2 illustrates the mechanisms of action of allopurinol and rasburicase. Allopurinol and its active metabolite oxipurinol inhibit xanthine oxidase, blocking the conversion of hypoxanthine and xanthine to uric acid. Rasburicase is a recombinant form of urate oxidase, an enzyme absent in humans, which oxidizes uric acid to allantoin, which is much more soluble. Because allopurinol reduces production of uric acid upstream while rasburicase metabolizes uric acid downstream, they counteract each other's effectiveness and should not be given together. Alkalinization of urine is avoided because xanthine and hypoxanthine can crystallize at high pH. Allopurinol does not act on renal tubular transport. Rasburicase activity is independent of urinary pH because it directly enzymatically degrades uric acid in plasma."
  },
  {
    num: 167,
    stem: "A 72-year-old man with newly diagnosed acute myeloid leukaemia has an Eastern Cooperative Oncology Group (ECOG) performance status of 3. He has ischaemic cardiomyopathy with an ejection fraction of 35% and stage 3 chronic kidney disease. Which of the following statements best integrates the prognostic significance of his performance status and the implications for treatment selection?",
    options: {
      A: "ECOG performance status 3 indicates that the patient is capable of only limited self-care and is confined to bed or chair more than 50% of waking hours; this, combined with significant cardiac and renal co-morbidities, substantially increases treatment-related mortality and may warrant a reduced-intensity or palliative approach rather than standard intensive induction chemotherapy.",
      B: "ECOG performance status 3 is compatible with curative-intent intensive chemotherapy because performance status is not an independent predictor of outcome in AML provided the bone marrow blast count exceeds 20%.",
      C: "The cardiac ejection fraction of 35% is an absolute contraindication to anthracycline use, but performance status 3 permits full-dose cytarabine and idarubicin induction if the anthracycline is omitted.",
      D: "ECOG performance status 3 means the patient is ambulatory and capable of all self-care but unable to carry out any work activities; this is not a significant barrier to intensive treatment.",
      E: "Performance status should be disregarded in favour of the International Prognostic Scoring System (IPSS) for MDS, which is the only validated tool for treatment selection in all myeloid malignancies."
    },
    answer: "A",
    explanation: "Hoffbrand Table 12.1 defines ECOG performance status grades, with grade 3 described as capable of only limited self-care, confined to bed or chair more than 50% of waking hours. The textbook emphasizes that when formulating a treatment plan, it is important to consider co-morbid conditions such as cardiac, pulmonary, and renal disease, as well as performance status. Patients with poor performance status and significant organ dysfunction have substantially higher treatment-related mortality and may not tolerate intensive chemotherapy. A reduced-intensity or palliative approach, such as hypomethylating agents or best supportive care, may be more appropriate. Performance status is a well-established independent prognostic factor in all haematological malignancies. ECOG 2, not 3, describes ambulatory patients capable of self-care. The IPSS is specific to myelodysplastic syndromes, not AML, and performance status remains independently relevant."
  },
  {
    num: 168,
    stem: "Regarding the mechanism of action of tyrosine kinase inhibitors in haematological malignancies, which of the following statements most accurately describes the therapeutic rationale and a key limitation?",
    options: {
      A: "Imatinib, dasatinib, and nilotinib bind to the BCR::ABL1 fusion protein and block ATP binding, preventing substrate phosphorylation and leading to apoptosis; however, point mutations in the kinase domain, such as T315I, can confer resistance by altering the drug-binding pocket.",
      B: "BCR::ABL1 is a constitutively active serine/threonine kinase, and imatinib works by inhibiting serine phosphorylation of downstream effectors such as STAT5 and PI3K.",
      C: "Imatinib induces differentiation of BCR::ABL1-positive cells into mature neutrophils, analogous to the mechanism of all-trans retinoic acid in acute promyelocytic leukaemia.",
      D: "Resistance to imatinib is exclusively due to overexpression of the multidrug resistance P-glycoprotein efflux pump, and second-generation TKIs overcome this by not being substrates for efflux.",
      E: "The BCR::ABL1 fusion protein is formed by translocation of the ABL1 gene on chromosome 22 to the BCR gene on chromosome 9; imatinib binds directly to the breakpoint cluster region protein to inhibit its tyrosine kinase activity."
    },
    answer: "A",
    explanation: "Hoffbrand describes how ABL1 inhibitors such as imatinib, dasatinib, and nilotinib bind to the BCR::ABL1 fusion protein, block ATP binding, and thus prevent the overactive tyrosine kinase from phosphorylating substrate proteins, leading to apoptosis. They are used in chronic myeloid leukaemia and BCR::ABL1-positive ALL. Resistance can arise through point mutations in the BCR::ABL1 kinase domain, amplification of the BCR::ABL1 gene, or clonal evolution. The T315I mutation is a well-known example that alters the ATP-binding pocket and confers resistance to imatinib and most second-generation TKIs. BCR::ABL1 is a tyrosine kinase, not a serine/threonine kinase. Imatinib does not induce differentiation; it inhibits oncogenic signalling. The t(9;22) translocation moves ABL1 from chromosome 9 to BCR on chromosome 22, not the reverse."
  },
  {
    num: 169,
    stem: "Regarding infection prophylaxis and treatment in patients with haematological malignancy undergoing intensive chemotherapy, which of the following statements is most accurate?",
    options: {
      A: "Gram-positive skin organisms such as Staphylococcus epidermidis commonly colonize central venous catheters and are a frequent source of fever, whereas Gram-negative gut bacteria such as Pseudomonas aeruginosa can cause overwhelming septicaemia; prophylactic antibiotics are generally avoided due to resistance concerns, but topical antiseptics, chlorhexidine mouthwashes, and a clean diet are recommended during neutropenia.",
      B: "Prophylactic broad-spectrum antibiotics are universally recommended for all neutropenic patients because they reduce mortality from bacterial sepsis and do not select for resistant organisms in the inpatient setting.",
      C: "The live attenuated varicella zoster vaccine (Zostavax) is the preferred prophylactic strategy for all lymphoma patients because it provides durable cellular immunity against herpes zoster reactivation.",
      D: "Nebulized pentamidine is more effective than co-trimoxazole or atovaquone for Pneumocystis jirovecii prophylaxis in patients who have received intensive chemotherapy or fludarabine.",
      E: "Febrile neutropenic patients should receive intravenous amphotericin B empirically at the onset of fever, because fungal infections are the most common cause of fever in the first 48 hours of neutropenia."
    },
    answer: "A",
    explanation: "Hoffbrand describes how Gram-positive skin organisms such as Staphylococcus and Streptococcus commonly colonize central venous lines, whereas Gram-negative gut bacteria such as Pseudomonas aeruginosa, Escherichia coli, Proteus, Klebsiella, and anaerobes can cause overwhelming septicaemia. Protocols used to limit bacterial infection vary, but they usually do not include prophylactic antibiotics because of the danger of resistance developing. During neutropenia, topical antiseptics, chlorhexidine mouthwashes, and a clean diet are recommended. The live attenuated varicella vaccine (Zostavax) is contraindicated for many patients with haematological malignancy; the non-live recombinant adjuvant-enhanced vaccine (Shingrix) is safer and more effective. For Pneumocystis jirovecii prophylaxis, co-trimoxazole or atovaquone are highly effective, whereas nebulized pentamidine is less effective. Empiric antifungal therapy is considered only if fever persists for 48–72 hours despite broad-spectrum antibiotics, not at the onset of fever."
  },
  {
    num: 170,
    stem: "Regarding monoclonal antibody therapies in haematological malignancies, which of the following statements most accurately describes their mechanisms of action and clinical applications?",
    options: {
      A: "Rituximab binds to CD20 on B cells and mediates cell death primarily through direct induction of apoptosis and opsonization; alemtuzumab binds CD52 and fixes complement, lysing both B and T cells; gemtuzumab ozogamicin is an antibody-drug conjugate targeting CD33 that delivers calicheamicin to myeloid leukaemia cells.",
      B: "All anti-CD20 antibodies work exclusively through antibody-dependent cellular cytotoxicity (ADCC) mediated by NK cells, and rituximab has no direct apoptotic activity.",
      C: "Alemtuzumab is a bispecific antibody that recruits CD3-positive T cells to CD20-positive B cells, analogous to the mechanism of blinatumomab.",
      D: "Gemtuzumab ozogamicin targets CD22 on neoplastic B cells and is approved for treatment of relapsed diffuse large B-cell lymphoma, not acute myeloid leukaemia.",
      E: "Brentuximab vedotin targets CD30 on malignant plasma cells and is the standard first-line therapy for multiple myeloma."
    },
    answer: "A",
    explanation: "Hoffbrand Table 12.5 lists monoclonal antibodies and their mechanisms. Rituximab, ofatumumab, and obinutuzumab are anti-CD20 antibodies that induce apoptosis. Alemtuzumab (anti-CD52) lyses target cells by complement fixation. Gemtuzumab ozogamicin (anti-CD33 with calicheamicin cytotoxin) kills myeloid cells. Inotuzumab ozogamicin targets CD22. Blinatumomab is the bispecific CD20/CD3 antibody that recruits cytotoxic T cells. Brentuximab (anti-CD30) is effective in Hodgkin lymphoma, not myeloma. Anti-CD20 antibodies have multiple mechanisms including direct apoptosis, complement-dependent cytotoxicity, and ADCC, not exclusively ADCC."
  },
  {
    num: 451,
    stem: "A 38-year-old woman with newly diagnosed diffuse large B-cell lymphoma is scheduled for R-CHOP chemotherapy. She has poor peripheral venous access, and her occupation requires frequent swimming and gym training. Her oncology team recommends insertion of a central venous catheter for administration of vesicant chemotherapy. Which of the following devices is most appropriate for her priorities?",
    options: {
      A: "A totally implantable venous access device (Port-a-Cath/Mediport) with a subcutaneous reservoir and septum, because it has no external components and permits normal bathing and swimming.",
      B: "A tunnelled Hickman-style catheter, because it is the most durable device and is placed in the operating theatre, making it ideal for patients who swim regularly.",
      C: "A peripherally inserted central catheter (PICC line) in the cephalic or brachial vein, because it can be inserted at the bedside and is suitable for months of vesicant administration.",
      D: "Repeated peripheral cannulation, because the risk of extravasation from doxorubicin is negligible when administered slowly through a large antecubital vein.",
      E: "A non-tunnelled central venous catheter inserted via the internal jugular vein in the emergency department, because it is the most rapidly inserted option for immediate chemotherapy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes three main central venous catheter types used in haematological malignancy: Hickman/Broviac-style tunnelled catheters, totally implantable venous access devices (Port-a-Cath/Mediport), and peripherally inserted central catheters (PICC lines) (Fig. 12.1). A totally implantable device consists of a subcutaneous reservoir with a silicone septum through which a needle is inserted; because no catheter components protrude, patients can bathe and swim normally. This makes it the most appropriate choice for this patient. A Hickman catheter has external components that restrict swimming and bathing. A PICC line can be inserted at the bedside but typically does not last as long and is generally less suitable than a tunnelled or implanted device for prolonged intensive vesicant chemotherapy. Vesicants such as doxorubicin should not be given through peripheral veins because extravasation causes severe soft tissue necrosis. A non-tunnelled emergency catheter is not appropriate for planned long-term chemotherapy administration."
  },
  {
    num: 452,
    stem: "A 78-year-old man with acute myeloid leukaemia is noted to have a haemoglobin concentration of 56 g/L. He has ischaemic cardiomyopathy with a left ventricular ejection fraction of 30% and stage 4 chronic kidney disease. He is euvolemic but mildly dyspnoeic on exertion. Which of the following transfusion strategies best balances correction of anaemia with minimization of transfusion-associated circulatory overload (TACO)?",
    options: {
      A: "Transfuse single units of red cells slowly with close monitoring of fluid balance and respiratory status, and consider prophylactic diuretics, because TACO risk is heightened by cardiac and renal impairment.",
      B: "Transfuse two units of red cells rapidly to achieve a swift rise in haemoglobin and avoid repeated nursing observations.",
      C: "Withhold transfusion until haemoglobin falls below 50 g/L, because the risk of TACO always outweighs the benefit of transfusion in older patients.",
      D: "Administer recombinant erythropoietin alone and avoid red cell transfusion entirely, because erythropoietin raises haemoglobin more rapidly than transfusion in acute leukaemia.",
      E: "Give a loop diuretic only if TACO develops, because prophylactic diuretics cause intravascular volume depletion and worsen renal function."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that transfusion thresholds for red cells depend on symptoms and speed of onset of anaemia, with many units transfusing when haemoglobin is below 70 g/L and a higher threshold in older or ischaemic patients. Transfusion-associated circulatory overload (TACO) is pulmonary oedema secondary to volume overload; risk factors include pre-existing cardiac, respiratory, or renal impairment. Close monitoring, transfusion of single units, and prophylactic diuretics reduce TACO risk. Rapid transfusion of two units in this high-risk patient would precipitate pulmonary oedema. Withholding transfusion until an arbitrary lower threshold is unsafe because his symptoms and cardiac reserve already warrant intervention. Erythropoietin-stimulating agents do not act rapidly enough for symptomatic acute anaemia and are discussed mainly for myelodysplastic neoplasms. Prophylactic diuretics are a recognized preventive measure in high-risk patients, not merely reactive treatment."
  },
  {
    num: 453,
    stem: "A 64-year-old man with chronic lymphocytic leukaemia received fludarabine-based therapy 8 weeks ago. He presents with a 5-day history of dry cough, fever of 38.6°C, and progressive dyspnoea. Arterial blood gas on room air shows PaO2 62 mmHg. High-resolution CT chest demonstrates diffuse bilateral ground-glass opacities. Serum beta-D-glucan is elevated, and lactate dehydrogenase is 620 U/L. Which of the following is the most appropriate immediate management?",
    options: {
      A: "High-dose intravenous co-trimoxazole, because Pneumocystis jirovecii pneumonitis is the most likely diagnosis in a patient who has received intensive or fludarabine-containing chemotherapy.",
      B: "Start voriconazole empirically, because ground-glass infiltrates in a neutropenic patient are classic for invasive aspergillosis.",
      C: "Administer nebulized pentamidine, because it is more effective than co-trimoxazole for treatment of established Pneumocystis jirovecii pneumonitis.",
      D: "Begin intravenous aciclovir, because herpes viruses are the most common cause of pneumonitis in patients with lymphoproliferative disorders.",
      E: "Initiate broad-spectrum antibacterial therapy alone and defer anti-Pneumocystis therapy until bronchoscopy confirms the organism, because empirical treatment risks unnecessary toxicity."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, identifies Pneumocystis jirovecii (carinii) as an important cause of pneumonitis in patients who have received intensive combination chemotherapy or fludarabine. Prophylaxis is given with co-trimoxazole, atovaquone, or nebulized pentamidine; treatment is with high-dose co-trimoxazole. The clinical presentation of subacute dry cough, fever, hypoxia, diffuse ground-glass infiltrates, elevated LDH, and elevated beta-D-glucan in a patient recently treated with fludarabine is classic for Pneumocystis jirovecii pneumonitis. Voriconazole is used for Aspergillus, which typically produces nodular lesions with a ground-glass halo, not diffuse ground-glass infiltrates. Nebulized pentamidine is less effective than co-trimoxazole and is used for prophylaxis, not first-line treatment. Aciclovir treats herpes viruses such as HSV and VZV, which do not produce this radiological pattern. Delaying therapy pending bronchoscopy is dangerous because Pneumocystis pneumonitis can progress rapidly in immunosuppressed patients."
  },
  {
    num: 454,
    stem: "A 59-year-old woman with follicular lymphoma receiving maintenance rituximab develops a painful vesicular rash in a T4 dermatomal distribution. She is afebrile but reports burning pain. She was vaccinated against varicella as a child. Which of the following is the most appropriate management?",
    options: {
      A: "Initiate high-dose oral or intravenous aciclovir/valaciclovir, because varicella zoster virus reactivation is common in lymphoproliferative disorders and requires prompt antiviral therapy.",
      B: "Administer the live attenuated varicella zoster vaccine (Zostavax) immediately to abort the outbreak, because it boosts cellular immunity against herpes zoster.",
      C: "Treat with oral amoxicillin-clavulanate, because the vesicular rash most likely represents bacterial cellulitis superimposed on chemotherapy-induced skin toxicity.",
      D: "Apply topical aciclovir cream alone, because localized zoster in immunocompetent patients does not require systemic therapy.",
      E: "Withhold antiviral therapy and monitor, because prior varicella vaccination confers lifelong sterilizing immunity and prevents reactivation."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that varicella zoster virus frequently reactivates in patients with lymphoproliferative diseases to cause shingles, which requires treatment with high doses of aciclovir or valaciclovir. The dermatomal vesicular rash in a patient receiving rituximab for lymphoma is classic for herpes zoster reactivation. The live attenuated varicella vaccine (Zostavax) is contraindicated for many patients with haematological malignancy; furthermore, vaccination is preventive, not therapeutic during an active outbreak. Bacterial cellulitis does not follow a dermatomal distribution. Topical therapy alone is insufficient in an immunosuppressed patient, in whom zoster can disseminate. Prior varicella vaccination prevents primary infection but does not provide sterilizing immunity against latent VZV reactivation."
  },
  {
    num: 455,
    stem: "A 22-year-old man with B-cell acute lymphoblastic leukaemia is receiving induction chemotherapy that includes L-asparaginase. On day 12, he develops epistaxis and oozing from his gums. Laboratory studies show fibrinogen 0.8 g/L, prothrombin time 22 seconds, activated partial thromboplastin time 58 seconds, and antithrombin activity 45%. Platelet count is 85 × 10⁹/L. Which of the following is the most appropriate supportive intervention?",
    options: {
      A: "Support with fresh frozen plasma, cryoprecipitate, and antithrombin concentrate as needed, because L-asparaginase depletes clotting factors and antithrombin by depriving hepatocytes of asparagine.",
      B: "Administer therapeutic low-molecular-weight heparin immediately, because the low antithrombin level indicates disseminated intravascular coagulation requiring anticoagulation.",
      C: "Give vitamin K alone, because L-asparaginase induces a pure vitamin K deficiency similar to warfarin effect.",
      D: "Transfuse platelets to a count above 100 × 10⁹/L and observe, because the coagulopathy will correct spontaneously once asparaginase is stopped.",
      E: "Prescribe tranexamic acid without plasma support, because antifibrinolytic therapy is sufficient for asparaginase-associated hypofibrinogenaemia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that L-asparaginase is an enzyme derived from bacteria that breaks down the amino acid asparagine in the circulation, depriving ALL cells of an essential amino acid. However, it also disturbs blood clotting by reducing synthesis of clotting factors and antithrombin. Support with vitamin K, fresh frozen plasma, cryoprecipitate, or antithrombin concentrates may be required. Heparin requires antithrombin to be effective and would be inappropriate in this hypocoagulable state; low antithrombin here reflects decreased synthesis, not disseminated intravascular coagulation. Vitamin K deficiency is not the mechanism. Platelet transfusion alone does not correct the coagulation factor and antithrombin deficiencies. Tranexamic acid in the presence of active coagulopathy and potential thrombotic risk from asparaginase is not sufficient and could promote thrombosis."
  },
  {
    num: 456,
    stem: "Regarding the rationale for combination chemotherapy and repeated treatment courses in haematological malignancy, which of the following statements most accurately integrates the log kill hypothesis with the need for multi-agent regimens?",
    options: {
      A: "Each chemotherapy course kills a constant fraction of tumour cells rather than a fixed number, allowing normal haemopoietic recovery between courses, while combinations of drugs acting at different molecular sites minimize the emergence of drug resistance.",
      B: "A single course of cytotoxic therapy is usually sufficient to eradicate all neoplastic cells, and additional courses are given only to suppress benign haemopoietic cells.",
      C: "Combining drugs with identical mechanisms of action produces additive cell killing without increasing toxicity, because resistance develops only to single-agent therapy.",
      D: "Cytotoxic drugs selectively spare quiescent neoplastic cells, so repeated courses are needed to drive these cells into a proliferative phase before killing them.",
      E: "The log kill hypothesis predicts that the absolute number of cells killed increases with each successive course, so cure is guaranteed after a predetermined number of cycles."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, explains that cytotoxic drugs are combined in regimens that minimize the potential for resistance by using agents that act at different sites (Fig. 12.6). Many agents act specifically on dividing cells, and it is unusual for all neoplastic cells to be killed by a single course. Several courses are therefore given, gradually eradicating the neoplastic cell burden according to the log kill hypothesis, while residual normal haemopoietic cells recover between courses. Identical-mechanism combinations increase toxicity without avoiding resistance. Quiescent cells are generally less sensitive to many cytotoxic agents, but the log kill hypothesis does not rely on driving them into cycle. The log kill hypothesis implies a constant fractional kill, not an increasing absolute number of cells killed per course, and cure is not guaranteed by a fixed number of cycles."
  },
  {
    num: 457,
    stem: "Regarding the mechanism of action and toxicity of anthracycline antibiotics used in haematological malignancies, which of the following statements is most accurate?",
    options: {
      A: "Anthracyclines intercalate into DNA and bind topoisomerase II, generating free radicals that damage cardiac myocytes; cumulative dose-dependent cardiomyopathy is the major dose-limiting toxicity.",
      B: "Anthracyclines inhibit ribonucleotide reductase, preventing conversion of ribonucleotides to deoxyribonucleotides, and cause pulmonary fibrosis as their principal toxicity.",
      C: "Anthracyclines bind to tubulin and prevent microtubule polymerization, leading to metaphase arrest; their dose-limiting toxicity is peripheral neuropathy.",
      D: "Anthracyclines are purine analogues that inhibit adenosine deaminase and produce prolonged immunosuppression with low CD4 counts.",
      E: "Anthracyclines alkylate DNA purine bases to crosslink DNA strands and primarily cause haemorrhagic cystitis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes anthracyclines such as doxorubicin, daunorubicin, and idarubicin as cytotoxic antibiotics that intercalate into DNA and bind strongly to topoisomerases, which relieve torsional stress in replicating DNA by nicking and resealing strands. Blockade of topoisomerase activity prevents DNA replication. Table 12.5 lists their particular side effects as cardiac toxicity and hair loss; cardiomyopathy is cumulative and dose-dependent. Ribonucleotide reductase inhibition is the mechanism of hydroxycarbamide. Tubulin binding is the mechanism of vinca alkaloids. Purine analogues include fludarabine and pentostatin. DNA crosslinking is characteristic of alkylating agents such as cyclophosphamide, which causes haemorrhagic cystitis."
  },
  {
    num: 458,
    stem: "Regarding vinca alkaloids such as vincristine, which of the following statements most accurately describes their mechanism of action and principal adverse effect?",
    options: {
      A: "Vinca alkaloids bind to tubulin and prevent its polymerization into microtubules, blocking mitosis in metaphase; peripheral and autonomic neuropathy is the characteristic dose-limiting toxicity.",
      B: "Vinca alkaloids inhibit DNA polymerase by incorporating into DNA as false pyrimidine nucleotides, causing cerebellar toxicity at high doses.",
      C: "Vinca alkaloids generate superoxide radicals that degrade preformed DNA and cause dose-related pulmonary fibrosis.",
      D: "Vinca alkaloids inhibit the proteasome, leading to accumulation of ubiquitinated proteins and causing thrombocytopenia and peripheral neuropathy.",
      E: "Vinca alkaloids are folate antagonists that competitively inhibit dihydrofolate reductase and cause mucositis and myelosuppression."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that vincristine is a vinca alkaloid derived from the periwinkle plant. It binds to tubulin and prevents its polymerization to microtubules, thereby blocking cell division in metaphase. Table 12.5 lists its particular side effects as peripheral or bladder/gut neuropathy. Cytarabine is the pyrimidine analogue incorporated into DNA and causes cerebellar toxicity at high doses. Bleomycin generates superoxide radicals and causes pulmonary fibrosis. Proteasome inhibitors such as bortezomib cause neuropathy and thrombocytopenia through a different mechanism. Methotrexate is the folate antagonist that causes mucositis."
  },
  {
    num: 459,
    stem: "Regarding proteasome inhibitors such as bortezomib, ixazomib, and carfilzomib, which of the following statements most accurately describes their mechanism of action and clinical use?",
    options: {
      A: "They inhibit the 26S proteasome, leading to accumulation of misfolded and ubiquitinated proteins that trigger endoplasmic reticulum stress and apoptosis; they are widely used in myeloma and some lymphomas.",
      B: "They inhibit Bruton tyrosine kinase in B-cell receptor signalling, causing bleeding and atrial fibrillation as characteristic toxicities.",
      C: "They block the JAK2-STAT signalling pathway and are primarily indicated for myeloproliferative neoplasms such as primary myelofibrosis.",
      D: "They inhibit the BCL-2 anti-apoptotic protein and are most commonly complicated by tumour lysis syndrome.",
      E: "They are demethylating agents that reduce DNA methylation on cytosine residues and are used in myelodysplastic neoplasms."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, notes that bortezomib, ixazomib, and carfilzomib are proteasome inhibitors used widely in the treatment of myeloma and some lymphomas (Table 12.5). Inhibition of the proteasome prevents degradation of ubiquitinated proteins, leading to accumulation of misfolded proteins, endoplasmic reticulum stress, and activation of apoptotic pathways in neoplastic plasma cells. Bruton tyrosine kinase inhibitors such as ibrutinib cause bleeding and atrial fibrillation. JAK2 inhibitors such as ruxolitinib are used in myelofibrosis and polycythaemia vera. The BCL-2 inhibitor venetoclax causes tumour lysis syndrome. Azacitidine and decitabine are demethylating agents used in myelodysplastic neoplasms."
  },
  {
    num: 460,
    stem: "Regarding immune checkpoint inhibitors used in selected haematological malignancies, which of the following statements is most accurate?",
    options: {
      A: "They block inhibitory signals mediated by PD-1, PD-L1, or CTLA4, thereby overcoming T-cell self-tolerance to neoplastic cells; they can be useful in relapsed Hodgkin lymphoma and post-allogeneic SCT relapse, but may cause autoimmune toxicities.",
      B: "They are bispecific antibodies that recruit CD3-positive cytotoxic T cells to CD20-positive B cells, causing neurotoxicity and cytokine release syndrome.",
      C: "They bind to CD30 on malignant cells and deliver a microtubule-disrupting agent, making them standard first-line therapy for Hodgkin lymphoma.",
      D: "They inhibit the programmed cell death protein 1 receptor on tumour cells directly, thereby inducing apoptosis of malignant lymphocytes.",
      E: "They activate chimeric antigen receptors on autologous T cells to target CD19, leading to cytokine release syndrome and B-cell aplasia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes immune checkpoint inhibitors as antibodies designed to overcome T-cell self-tolerance to neoplastic cells. Approved checkpoint inhibitors block PD-1, PD-L1, or CTLA4 molecules that mediate self-tolerance. They can be useful in some cases of relapsed Hodgkin lymphoma or in leukaemias relapsed after allogeneic stem cell transplantation, but are associated with autoimmune manifestations including myocarditis, colitis, thyroid disease, iridocyclitis, hepatic injury, and kidney dysfunction. Blinatumomab is the bispecific CD20/CD3 antibody. Brentuximab vedotin targets CD30 with a microtubule inhibitor but is not standard first-line therapy for all Hodgkin lymphoma. PD-1 inhibitors act on T cells, not directly on tumour cells, to restore anti-tumour immunity. CAR-T cells are bioengineered T-cell receptors targeting CD19, distinct from checkpoint inhibitors."
  }
];
