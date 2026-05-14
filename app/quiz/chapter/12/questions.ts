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
  }
];
