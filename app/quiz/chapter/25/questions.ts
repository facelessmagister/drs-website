export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 291,
    stem: "A 42-year-old man with Philadelphia chromosome-positive acute lymphoblastic leukaemia (ALL) in first complete remission has an HLA-identical sibling donor available. He is otherwise fit with no significant co-morbidities. The transplant team is evaluating conditioning regimens. Which approach and accompanying rationale best align with contemporary evidence for this clinical scenario?",
    options: {
      A: "Myeloablative conditioning with cyclophosphamide and total body irradiation (CY/TBI) because myeloablative regimens are universally preferred for all fit patients under 50 with matched sibling donors",
      B: "Reduced-intensity conditioning (RIC) with fludarabine and low-dose busulfan because there is evidence that RIC regimens produce better outcomes in younger patients with lymphoid malignancies such as ALL",
      C: "RIC with fludarabine and low-dose total body irradiation because TBI-based RIC has been proven superior to chemotherapy-only RIC in preventing central nervous system relapse in ALL",
      D: "Myeloablative conditioning with busulfan and cyclophosphamide without TBI because TBI is unnecessary in ALL and its omission reduces late endocrine complications and second malignancies",
      E: "Non-myeloablative conditioning with cyclophosphamide alone because the graft-versus-leukaemia (GVL) effect is the predominant anti-tumour mechanism in ALL and intensive conditioning adds toxicity without benefit"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25), states that myeloablative conditioning is generally preferred in fit patients under 50 with resistant disease, but there is evidence that RIC regimens give better outcomes in younger patients with lymphoid disease such as ALL or Hodgkin lymphoma. RIC extends the age range of feasibility and reduces transplant-related morbidity and mortality. Option A is incorrect because myeloablative regimens are not universally preferred; the disease subtype matters. Option C is speculative because the text does not claim TBI-based RIC superiority for CNS prophylaxis in ALL. Option D is incorrect because TBI is frequently used in malignant disease, particularly leukaemia and lymphoma, and omission of TBI is not specifically recommended for ALL. Option E is incorrect because cyclophosphamide alone is insufficient for malignant disease; it is used for aplastic anaemia."
  },
  {
    num: 292,
    stem: "A 28-year-old woman with severe aplastic anaemia receives an allogeneic stem cell transplant from her HLA-identical sister. On day +18 post-transplant, she develops a widespread erythematous maculopapular rash involving the palms, soles, and face. Laboratory studies show bilirubin 82 μmol/L and alkaline phosphatase 340 U/L, with relatively normal alanine aminotransferase and aspartate aminotransferase. She has watery diarrhoea with 5–6 episodes per day. What is the most accurate overall clinical grade of her graft-versus-host disease (GVHD)?",
    options: {
      A: "Grade I because skin involvement alone without liver or gut involvement constitutes Grade I",
      B: "Grade II because she has stage 3 skin rash and stage 1 liver and stage 1 lower gastrointestinal involvement",
      C: "Grade III because she has stage 2–3 liver and/or stage 2–3 lower gastrointestinal involvement alongside stage 0–3 skin",
      D: "Grade IV because any stage 4 organ involvement automatically confers Grade IV regardless of other organs",
      E: "Grade 0 because the presentation within the first 100 days represents expected physiological post-transplant inflammation rather than true GVHD"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Table 25.4 and Table 25.5), outlines the Glucksberg scoring system for acute GVHD. This patient has stage 3 skin (generalized erythroderma affecting >50% body surface), stage 2 liver (bilirubin 52–101 μmol/L), and stage 2 lower gastrointestinal tract involvement (5–7 episodes of diarrhoea per day). According to Table 25.5, Grade III is defined as stage 2–3 liver and/or stage 2–3 lower gastrointestinal involvement, with stage 0–3 skin and/or stage 0–1 upper gastrointestinal involvement. Grade I is incorrect because it requires absence of liver or gut involvement. Grade II would apply if she had stage 1 liver or stage 1 lower gastrointestinal involvement, but she has stage 2 in both. Grade IV requires stage 4 skin, liver, or lower gastrointestinal involvement, which she does not have. Grade 0 is incorrect because the constellation of skin, liver, and gut involvement with elevated bilirubin is diagnostic of acute GVHD, not physiological inflammation."
  },
  {
    num: 293,
    stem: "A 55-year-old man with relapsed diffuse large B-cell lymphoma is being considered for autologous stem cell transplantation. He previously received R-CHOP and has peripheral blood stem cell (PBSC) mobilization in progress with granulocyte colony-stimulating factor (G-CSF). On day 5, his circulating CD34+ count is 8 cells/μL, well below the threshold considered adequate for collection. Which is the most appropriate next step to achieve sufficient stem cell yield?",
    options: {
      A: "Discontinue G-CSF and proceed to bone marrow harvest under general anaesthetic because peripheral blood mobilization has definitively failed",
      B: "Add plerixafor, a CXCR4 antagonist, to ongoing G-CSF because this combination rescues mobilization in more than 95% of autograft candidates who fail G-CSF alone",
      C: "Increase the G-CSF dose to 20 μg/kg/day because dose escalation reliably overcomes poor mobilization in patients with heavily pre-treated lymphoma",
      D: "Administer high-dose cyclophosphamide because it is the most effective salvage mobilization agent for patients who fail initial G-CSF mobilization",
      E: "Proceed using a single umbilical cord blood unit because cord blood transplantation does not require stem cell mobilization and is standard for adult lymphoma"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Fig. 25.3 and text), describes that in patients who fail to mobilize the target number of CD34+ cells with G-CSF alone, the CXCR4 antagonist plerixafor can be combined with G-CSF, permitting mobilization of the required numbers of PBSC in more than 95% of autograft candidates. Bone marrow harvest is an alternative but not the preferred next step when pharmacological rescue is available. Dose escalation of G-CSF is not the standard approach for failed mobilization. High-dose cyclophosphamide is used prior to or concurrently with mobilization to reduce tumour burden and enhance stem cell yield, but it is not the standard rescue after G-CSF failure. Cord blood transplantation is primarily used in children or when a matched unrelated donor is unavailable; two cord units are usually needed for adults, and it is not standard for adult autologous lymphoma transplant."
  },
  {
    num: 294,
    stem: "A 6-year-old boy with thalassaemia major is undergoing allogeneic stem cell transplantation from a fully HLA-matched sibling donor. The conditioning regimen includes busulfan, fludarabine, cyclophosphamide, and in vivo anti-thymocyte globulin. On day +21 post-transplant, he develops jaundice, painful hepatomegaly, and ascites with rapid weight gain. Which complication has most likely occurred, and what is the most appropriate specific therapy?",
    options: {
      A: "Acute graft-versus-host disease affecting the liver; commence high-dose corticosteroids immediately",
      B: "Veno-occlusive disease (VOD), also called sinusoidal obstruction syndrome (SOS); treat with defibrotide",
      C: "Hepatic venous thrombosis from ABO incompatibility; initiate anticoagulation with low molecular weight heparin",
      D: "Cytomegalovirus (CMV) hepatitis; commence valganciclovir or ganciclovir and CMV immunoglobulin",
      E: "Cyclophosphamide-induced haemorrhagic cystitis; administer mesna and institute bladder irrigation"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25), describes veno-occlusive disease (VOD), also called sinusoidal obstruction syndrome (SOS), as manifesting with jaundice, painful hepatomegaly, and ascites with weight gain. Patients who have received busulfan and high-dose total body irradiation are at increased risk, as are those who have received calicheamicin-containing antibody–drug conjugates. Defibrotide, a mixture of single-stranded oligonucleotides derived from pig mucosa, is approved for treatment of VOD/SOS. Ciclosporin can cause a similar clinical picture and should be temporarily stopped. Acute GVHD typically raises bilirubin and alkaline phosphatase, but the other hepatic enzymes are relatively normal, and it usually affects skin and gastrointestinal tract simultaneously. ABO incompatibility causes haemolysis, not the triad of jaundice, hepatomegaly, and ascites. CMV hepatitis is associated with falling blood counts and interstitial pneumonitis, not specifically hepatomegaly and ascites. Haemorrhagic cystitis presents with bladder symptoms and microscopic or gross haematuria, not hepatomegaly."
  },
  {
    num: 295,
    stem: "A 32-year-old woman underwent allogeneic stem cell transplantation from an HLA-matched unrelated donor for acute myeloid leukaemia (AML) in first remission. She is discharged on day +60 with good engraftment and mild chronic GVHD limited to the skin (Grade I). At her 6-month follow-up, molecular monitoring for RUNX1::RUNX1T1 transcript becomes positive, and a bone marrow biopsy shows 8% blasts consistent with molecular relapse. She remains in good general condition. Which is the most appropriate next intervention?",
    options: {
      A: "Immediate re-induction chemotherapy with high-dose cytarabine and mitoxantrone because salvage chemotherapy is the standard first-line treatment for post-transplant relapse of AML",
      B: "Donor leucocyte infusion (DLI) because the graft-versus-leukaemia (GVL) effect can eradicate residual leukaemia, and DLI is the preferred salvage strategy for molecular relapse after allogeneic SCT",
      C: "Palliative care referral because relapse after allogeneic SCT confers a universally fatal prognosis with no effective salvage therapies available",
      D: "Switch immunosuppression from ciclosporin to mycophenolate mofetil to enhance the GVL effect by reducing calcineurin inhibition without additional donor cell infusion",
      E: "Autologous stem cell rescue with high-dose melphalan because the patient has already received the immunological benefit of allogeneic graft and melphalan is effective for AML relapse"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Fig. 25.11), describes donor leucocyte infusion (DLI) as a treatment for relapse of leukaemia post-allogeneic SCT via the graft-versus-leukaemia (GVL) effect. The most convincing evidence is the ability of DLI to cure relapsed leukaemia after allogeneic SCT in some patients. Success rates vary by disease: chronic myeloid leukaemia is most sensitive, while acute lymphoblastic leukaemia rarely responds; AML has intermediate responsiveness. For molecular relapse detected early, DLI offers the best chance of re-establishing remission without the toxicity of re-induction chemotherapy. Immediate re-induction chemotherapy is not the preferred first step when a GVL effect can be harnessed, and it carries significant toxicity. Palliative care is inappropriate because DLI and other salvage strategies offer a meaningful chance of cure. Switching immunosuppression alone is insufficient for established relapse. Autologous rescue with melphalan is used for myeloma and lymphoma, not for AML relapse following allogeneic transplantation."
  },
  {
    num: 296,
    stem: "Which statement most accurately compares myeloablative and reduced-intensity conditioning (RIC) regimens in allogeneic stem cell transplantation and their respective biological and clinical effects?",
    options: {
      A: "Myeloablative conditioning irreversibly destroys host bone marrow stem cells and immune cells, whereas RIC regimens aim to provide sufficient immunosuppression for donor engraftment without completely eradicating host marrow",
      B: "RIC regimens produce fewer relapses than myeloablative regimens because the preserved host immune system continues to surveil for and eliminate residual malignant cells",
      C: "Myeloablative conditioning is exclusively reserved for patients over 50 years because younger patients lack the physiological reserve to tolerate high-dose chemotherapy and total body irradiation",
      D: "RIC regimens eliminate the risk of chronic GVHD because the residual host immune cells actively suppress donor T-cell alloreactivity",
      E: "Both regimens achieve identical long-term full donor chimerism rates because the conditioning intensity does not influence the eventual displacement of host haemopoiesis by donor cells"
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25), states that myeloablative conditioning regimens aim to irreversibly destroy the haemopoietic function of the bone marrow with high doses of chemotherapy, with or without total body irradiation (TBI). In contrast, RIC regimens do not completely destroy the host bone marrow; instead, they use enough immunosuppression to allow donor stem cells to engraft without completely eradicating host marrow stem cells. RIC regimens result in more relapses, not fewer, because less intensive conditioning fails to eradicate residual malignant cells. Myeloablative conditioning is generally preferred in fit patients under 50, not over 50; RIC is preferred in older patients. Chronic GVHD remains a major complication of RIC transplantation. While full donor chimerism can be achieved over time with RIC regimens (sometimes requiring donor leucocyte infusions), it is not identical to the rapid and complete donor replacement seen with myeloablative conditioning."
  },
  {
    num: 297,
    stem: "Regarding the human leucocyte antigen (HLA) system and its role in allogeneic stem cell transplantation, which statement most accurately describes the molecular biology and its clinical consequences?",
    options: {
      A: "Class I HLA molecules (HLA-A, -B, -C) present antigens to CD4+ T cells and are composed of alpha and beta chains both encoded on chromosome 6",
      B: "HLA class II molecules have a restricted tissue distribution on B lymphocytes, monocytes, macrophages, and activated T cells, and present antigens to CD4+ T cells",
      C: "β2-microglobulin is encoded on chromosome 6 and associates with the alpha chain of class II HLA molecules to stabilize them on the cell surface",
      D: "Because there are only 12 antigen-presenting HLA molecules with limited polymorphism, unrelated donor matching is successful in more than 95% of patients across all ethnic groups",
      E: "Minor histocompatibility antigens such as HA-1 and Hy are encoded within the HLA region on chromosome 6 and therefore are matched by routine high-resolution HLA typing"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Table 25.2 and text), describes HLA class II molecules (HLA-DR, -DQ, -DP) as having a restricted tissue distribution on B lymphocytes, monocytes, macrophages, and activated T cells. Their role is to present antigens to CD4+ T cells. Class I HLA molecules present antigens to CD8+ T cells, not CD4+ T cells. β2-microglobulin is encoded on chromosome 15 and associates with the alpha chain of class I HLA molecules, not class II. There are more than 18,000 HLA alleles identified, making unrelated donor matching difficult; the chance of identifying a matched unrelated donor exceeds 70% in populations of European descent but is much lower in other ethnic groups. Minor histocompatibility antigens are peptides presented by HLA molecules; they are polymorphic in the population or encoded on the Y chromosome and are NOT detected or matched by routine HLA typing, which is why GVHD can occur even between fully HLA-matched donor-recipient pairs."
  },
  {
    num: 298,
    stem: "Regarding the prevention and management of infections following allogeneic stem cell transplantation, which statement most accurately integrates prophylactic strategies with their mechanistic rationale and timing?",
    options: {
      A: "Letermovir is given from the start of conditioning to day 100 post-transplant as a CMV DNA polymerase inhibitor that prevents reactivation and interstitial pneumonitis",
      B: "Cotrimoxazole prophylaxis is initiated from the time of neutrophil engraftment to prevent Pneumocystis jirovecii and toxoplasmosis, and lifelong penicillin V or erythromycin is recommended for protection against encapsulated bacteria",
      C: "Fluconazole prophylaxis is discontinued at neutrophil engraftment because the risk of Candida and Aspergillus infections ceases once neutrophil counts recover",
      D: "Aciclovir prophylaxis is given only during the pre-transplant conditioning period because herpes simplex virus (HSV) reactivation occurs exclusively during mucositis in the first 7 days",
      E: "Ganciclovir is the first-choice agent for CMV prophylaxis from engraftment to day 100 because it is better tolerated than letermovir and does not cause myelosuppression"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Fig. 25.9 and text), states that cotrimoxazole prophylaxis is given from the time of neutrophil engraftment to prevent Pneumocystis jirovecii and toxoplasmosis, and lifelong protection against encapsulated bacteria with penicillin V or erythromycin is needed in all allogeneic transplant recipients. Letermovir is a CMV terminal complex inhibitor (not a DNA polymerase inhibitor) given from the time of engraftment to 100 days post-transplant, not from the start of conditioning. Fluconazole and other antifungal prophylaxis must be continued beyond neutrophil engraftment because fungal infections remain a particular problem due to prolonged immunosuppression and corticosteroid use for GVHD. Aciclovir prophylaxis is continued for one year, not just during conditioning, because herpes simplex virus and varicella-zoster virus reactivation can occur at different intervals post-transplant. Ganciclovir causes myelosuppression; letermovir is now the first-choice agent for CMV prophylaxis because it is better tolerated and does not cause neutropenia."
  },
  {
    num: 299,
    stem: "Regarding post-transplant lymphoproliferative disease (PTLD) following allogeneic stem cell transplantation, which statement most accurately describes the pathophysiology, risk factors, and treatment?",
    options: {
      A: "PTLD after SCT is usually T-cell driven and caused by failure of B-cell control of EBV-infected cytotoxic T lymphocytes",
      B: "The highest incidence of PTLD is in fully matched sibling transplants because complete HLA identity permits unchecked EBV-driven B-cell proliferation",
      C: "After SCT, PTLD is due to failure of T-cell control of EBV-infected B cells, and the highest incidence is in haploidentical transplants using T-cell depletion protocols",
      D: "PTLD is more common in adults than children because adults have higher baseline EBV seropositivity rates and more prior EBV exposure",
      E: "Rituximab is contraindicated in PTLD because depleting B cells worsens the underlying immunodeficiency and increases the risk of fungal and bacterial infections"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25, Fig. 25.13), states that after stem cell transplantation, PTLD is due to failure of T-cell control of proliferation of Epstein–Barr virus (EBV)-infected B cells. The highest incidence is in haploidentical transplants using T-cell depletion protocols, because profound T-cell depletion removes the normal immune surveillance against EBV-driven B-cell proliferation. This incidence may diminish with increased use of high-dose post-transplant cyclophosphamide instead of T-cell depletion for GVHD prophylaxis. PTLD is polyclonal or monoclonal B-cell proliferations, not T-cell driven. Fully matched sibling transplants have a lower incidence than haploidentical or T-cell depleted transplants. PTLD in solid organ recipients is more common in children (because they are more often EBV-naïve before transplant), but after SCT the risk relates mainly to T-cell depletion and HLA mismatching. Rituximab (anti-CD20) is a key treatment for PTLD, along with withdrawal of immunosuppression, chemotherapy, and local radiotherapy."
  },
  {
    num: 300,
    stem: "Which statement most accurately evaluates the relative merits and risks of different stem cell sources for allogeneic transplantation?",
    options: {
      A: "Bone marrow harvest reduces the risk of chronic GVHD compared to peripheral blood stem cells (PBSCs) but increases the risk of graft failure and acute GVHD",
      B: "Cord blood transplantation requires less stringent HLA matching due to the immunological naïveté of the stem cells, but immune reconstitution is slower compared to bone marrow or PBSCs",
      C: "Syngeneic transplantation from an identical twin is preferred over allogeneic transplantation for malignancy because the graft-versus-leukaemia (GVL) effect is strongest when donor and recipient are genetically identical",
      D: "PBSC transplantation carries a lower risk of relapse than bone marrow because the higher T-cell content enhances the GVL effect without increasing the risk of chronic GVHD",
      E: "Haploidentical donors are never used in current practice because the degree of HLA mismatch leads to prohibitively high rates of graft rejection and fatal acute GVHD"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 25), states that cord blood stem cells require less stringent HLA matching due to the immunological naïveté of the stem cells, resulting in less GVHD; however, immune reconstitution is slower after cord blood transplantation. Bone marrow reduces the risk of graft failure compared to PBSCs but increases the risk of chronic GVHD; the risk of relapse and acute GVHD is similar between stem cell sources. Syngeneic transplantation from an identical twin has no GVL effect, so relapse of the original malignant disease is more likely; for this reason, syngeneic transplants are not preferred for malignancy. PBSC transplantation has a higher T-cell content, which may enhance the GVL effect but also increases the risk of chronic GVHD, not reducing it. Haploidentical donors are now frequently used, particularly with post-transplant cyclophosphamide protocols that reduce the risk of severe acute GVHD without causing graft rejection."
  }
];
