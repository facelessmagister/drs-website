export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 241,
    stem: "A 58-year-old man presents with dyspepsia and unintentional weight loss of 6 kg over 3 months. Upper GI endoscopy reveals thickened gastric antral folds with mucosal ulceration. Histology shows a dense diffuse infiltrate of small lymphoid cells. Immunohistochemistry demonstrates CD20+, CD5-, CD10-, CD23+/-. H. pylori organisms are identified on special stain. Which statement best describes the relationship between the infectious agent and the lymphoma, and the most appropriate initial management?",
    options: {
      A: "H. pylori infection drives chronic antigenic stimulation leading to gastric marginal zone lymphoma of MALT type; eradication therapy alone may achieve complete remission in early-stage disease.",
      B: "The lymphoma is a transformed follicular lymphoma; H. pylori is an incidental commensal organism and its eradication has no therapeutic benefit.",
      C: "H. pylori infection causes direct transformation of gastric epithelial cells into lymphoma via EBV-mediated immortalisation; anti-CD20 antibody monotherapy is required.",
      D: "The immunophenotype is diagnostic of mantle cell lymphoma; initial management should include combination immunochemotherapy with R-CHOP.",
      E: "H. pylori eradication is contraindicated because it accelerates lymphoma progression by removing antigenic stimulation that maintains tumour cell dormancy."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, Table 20.3), identifies H. pylori as a causative agent in gastric marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT) type. Marginal zone lymphomas are an uncommon type of low-grade B-cell NHL that arise in the setting of a chronic inflammatory state, which can be induced by an infectious agent such as H. pylori. The immunophenotype (CD20+, CD5-, CD10-, CD23 variable) is consistent with MALT lymphoma (Table 20.5). Early-stage gastric MALT lymphomas frequently achieve durable complete remission following H. pylori eradication alone, a paradigm that exemplifies the direct link between chronic inflammation and lymphomagenesis. Follicular lymphoma is CD10+; mantle cell lymphoma is CD5+ and CD23-negative."
  },
  {
    num: 242,
    stem: "A 72-year-old man presents with rapidly enlarging right cervical lymphadenopathy over 4 weeks, drenching night sweats, and fatigue. CT demonstrates multiple enlarged nodes above and below the diaphragm, the largest measuring 8 cm in the retroperitoneum. PET-CT shows intense FDG uptake throughout. Excision biopsy confirms diffuse large B-cell lymphoma, NOS. His ECOG performance status is 1 and serum LDH is elevated at 650 U/L. According to the general principles of treatment described in Hoffbrand, which statement best characterises the management approach?",
    options: {
      A: "Active surveillance is appropriate because DLBCL is classified as a low-grade lymphoma and may remain indolent for years without treatment.",
      B: "Immediate combination immunochemotherapy with curative intent is indicated because DLBCL is a high-grade lymphoma where earlier treatment of less bulky disease achieves higher cure rates.",
      C: "Anti-CD20 antibody monotherapy with rituximab alone is the standard first-line approach for all patients with DLBCL regardless of age or fitness.",
      D: "Radiotherapy alone to the largest nodal mass is sufficient because DLBCL is highly radiosensitive and systemic disease can be controlled with involved-field radiotherapy.",
      E: "BTK inhibitor monotherapy should be initiated first-line because DLBCL arises from aberrant signalling through the Bruton tyrosine kinase pathway."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, Table 20.1 and Fig. 20.2), classifies diffuse large B-cell lymphoma (DLBCL) as the most common type of high-grade (aggressive) B-cell NHL, comprising approximately 37% of all B-cell NHLs. High-grade NHL typically presents with relatively rapid progression and is more likely to present with complications requiring emergency management. The aim of first-line treatment is curative for most patients, using combination immunochemotherapy +/- radiotherapy if the patient is fit enough to tolerate it. Treatment initiation should be prompt as rates of cure are usually higher with earlier stage, less bulky disease, and maintaining treatment intensity is a priority. Rituximab monotherapy and radiotherapy alone are inadequate for systemic DLBCL. BTK inhibitors are used in some low-grade B-cell NHLs such as mantle cell lymphoma but are not first-line for DLBCL."
  },
  {
    num: 243,
    stem: "A 45-year-old woman presents with a 3 cm painless left axillary lymph node. An ultrasound-guided fine needle aspirate (FNA) is performed by the referring clinician, showing atypical lymphoid cells. The cytology report states: 'Suspicious for lymphoid neoplasm; recommend excision biopsy for accurate subtyping.' Which of the following best explains why FNA is inadequate for definitive diagnosis and why excision biopsy is the gold standard?",
    options: {
      A: "FNA yields disaggregated cells and relies on cytological examination; in many low-grade lymphomas there is little cytological atypia risking false negatives, and accurate subtyping requires preserved tissue architecture for immunohistochemistry and genetic studies.",
      B: "FNA is contraindicated in lymphoma because the needle tract seeds malignant cells into surrounding tissue, altering staging and precluding curative therapy.",
      C: "FNA cannot be performed under image guidance in lymph nodes; excision biopsy is preferred because it allows direct visualisation of nodal architecture by the surgeon.",
      D: "FNA is sufficient for all high-grade lymphomas but inadequate for low-grade forms; since the node is only 3 cm, a high-grade lymphoma is excluded by size criteria alone.",
      E: "FNA yields too much tissue, overwhelming the pathologist with cellular material and preventing accurate assessment of clonality by light chain restriction."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, 'Diagnosis'), explicitly states that fine needle aspirate (FNA), which is used in the diagnosis of some types of cancer, is NOT of use in lymphoma diagnosis. This is because it yields disaggregated cells and relies on cytological examination. In some forms of lymphoma (such as many low-grade forms), there is little cytological atypia and so a false negative result may result. Even if a high-grade lymphoma is correctly identified, an accurate subtype is needed, which is not possible from an FNA. Excision of an involved lymph node is the gold standard technique, providing ample tissue for morphology, immunohistochemistry (Table 20.4) and genetic studies. The architecture of the tissue needs to be preserved as this is crucial for both the diagnosis of lymphoma and for accurate subtyping."
  },
  {
    num: 244,
    stem: "A 68-year-old man is found to have asymptomatic bilateral cervical and inguinal lymphadenopathy on routine examination. CT confirms multiple nodes 2–4 cm in size in three distinct anatomical regions. Excision biopsy confirms grade 1–2 follicular lymphoma. Full blood count, renal and liver function are normal. Serum LDH is mildly elevated at 280 U/L. His ECOG performance status is 0 and he has no B symptoms. According to the principles of low-grade NHL management described in Hoffbrand, which approach is most appropriate?",
    options: {
      A: "Immediate combination immunochemotherapy with R-CHOP because all patients with follicular lymphoma require systemic treatment at diagnosis to prevent inevitable high-grade transformation.",
      B: "Active surveillance ('watch and wait') because he is asymptomatic and does not yet meet formal criteria for treatment initiation such as GELF or BNLI criteria.",
      C: "Urgent involved-field radiotherapy to all nodal sites because follicular lymphoma is exquisitely radiosensitive and radiotherapy alone is curative for multifocal disease.",
      D: "High-dose chemotherapy with autologous stem cell transplantation because the presence of disease in three anatomical regions constitutes advanced-stage disease requiring aggressive consolidation.",
      E: "Anti-CD20 antibody monotherapy with rituximab is contraindicated in follicular lymphoma because it induces rapid apoptosis of neoplastic cells, causing tumour lysis syndrome in all patients."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, 'General principles of treatment' and Table 20.7), states that for low-grade NHL, treatment is generally initiated when symptoms of the disease develop, organ function is impaired by the lymphoma (e.g., falling blood counts due to bone marrow involvement), or disease bulk is sufficient to be concerned for continuing observation. Formal criteria for initiation of treatment include GELF criteria (tumour >7 cm, 3 nodes in 3 distinct areas >3 cm, symptomatic splenic enlargement, organ compression, serous effusion, rapid progression, systemic symptoms, life-threatening organ involvement, raised LDH, ECOG ≥2, cytopenias, bone lesions) and BNLI criteria. This patient is asymptomatic with modest nodal disease (2–4 cm, not >3 cm in three areas), normal organ function, and ECOG 0; he does not meet treatment initiation criteria. A 'watch and wait' or 'active surveillance' strategy is frequently employed in this setting. High-grade transformation is not inevitable; active surveillance is standard for low tumour burden."
  },
  {
    num: 245,
    stem: "A 61-year-old man presents with generalised lymphadenopathy and circulating atypical lymphocytes on peripheral blood film. Flow cytometry of peripheral blood shows CD5+, CD19+, CD20+, FMC7+, CD79b+, CD23-. Which lymphoma subtype is most consistent with this immunophenotype, and which cytogenetic abnormality would most likely be detected?",
    options: {
      A: "Follicular lymphoma; t(14;18) involving IGH::BCL2",
      B: "Small lymphocytic lymphoma/CLL; trisomy 12 or 13q deletion",
      C: "Mantle cell lymphoma; t(11;14) involving IGH::CCND1",
      D: "Diffuse large B-cell lymphoma, GCB subtype; MYC and BCL2 rearrangements",
      E: "MALT lymphoma; t(11;18) involving API2::MALT1"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 20.5 and Table 20.6), describes the characteristic immunophenotypes and cytogenetics of common B-cell lymphomas. Mantle cell lymphoma is distinguished by CD5 positivity in a B-cell lymphoma (CD19+, CD20+), along with FMC7 and CD79b positivity, and is typically CD23-negative. In contrast, CLL/SLL is CD5+ but CD23+ and FMC7-negative; follicular lymphoma is CD10+ and CD5-negative. The hallmark cytogenetic abnormality of mantle cell lymphoma is t(11;14) involving IGH::CCND1, leading to cyclin D1 overexpression and cell cycle dysregulation. This combination of immunophenotype and genetics is pathognomonic for mantle cell lymphoma."
  },
  {
    num: 246,
    stem: "Regarding the normal B-cell life cycle and the cellular origin of non-Hodgkin lymphomas, which statement most accurately integrates the developmental stage with the corresponding lymphoma subtype?",
    options: {
      A: "Follicular lymphoma arises from post-germinal centre memory B cells, whereas Burkitt lymphoma arises from naive B cells that have not yet entered the germinal centre.",
      B: "Most B-cell lymphomas arise from the germinal centre, including follicular lymphoma, Burkitt lymphoma, and diffuse large B-cell lymphoma; mantle cell lymphoma arises from pre-germinal centre mantle zone B cells.",
      C: "Lymphoplasmacytic lymphoma arises from germinal centre B cells and is characterised by somatic hypermutation of immunoglobulin genes without class-switch recombination.",
      D: "Myeloma arises from naive B cells in the bone marrow prior to antigen exposure, which explains the universal expression of surface immunoglobulin on plasma cells.",
      E: "CLL/SLL has a definitively established cell of origin within the germinal centre, as evidenced by the presence of somatic hypermutation in all cases and strong CD10 positivity."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, Fig. 20.3), illustrates the simplified life cycle of a B-lymphocyte and the stages at which various B-cell disorders arise. Most B-cell lymphomas arise from the germinal centre, which is often due to aberrant somatic hypermutation (the process which introduces single base pair changes into the variable region of immunoglobulin genes). Follicular lymphoma, Burkitt lymphoma, and diffuse large B-cell lymphoma are all germinal centre-derived. Mantle cell lymphoma arises from mantle zone B cells that have not yet undergone a germinal centre reaction. Lymphoplasmacytic lymphoma and myeloma arise from post-germinal centre terminally differentiated plasma cells. CLL/SLL has not had its cell of origin convincingly determined according to Hoffbrand Fig. 20.3 and is not CD10-positive."
  },
  {
    num: 247,
    stem: "Which of the following best describes the molecular mechanisms by which chromosomal translocations involving immunoglobulin loci contribute to the pathogenesis of B-cell non-Hodgkin lymphomas?",
    options: {
      A: "Translocations relocate oncogenes adjacent to immunoglobulin promoters on chromosomes 2, 14, or 22, leading to oncogene overexpression driven by highly active promoter elements and subsequent cell cycle dysregulation or failed apoptosis.",
      B: "Immunoglobulin translocations cause loss-of-function mutations in tumour suppressor genes by disrupting their coding sequences, which is the primary mechanism in all B-cell lymphomas including follicular lymphoma and Burkitt lymphoma.",
      C: "The t(14;18) translocation in follicular lymphoma silences BCL2 by placing it under the control of a transcriptional repressor at the IGH locus, thereby accelerating apoptosis.",
      D: "The t(8;14) translocation in Burkitt lymphoma downregulates MYC expression because the immunoglobulin locus provides negative regulatory elements that suppress transcription in proliferating B cells.",
      E: "Chromosomal translocations involving immunoglobulin loci are rare events in NHL and account for fewer than 10% of cases; point mutations in chromatin remodelling genes are the dominant driver in the majority of cases."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, 'Molecular changes'), states that cytogenetic abnormalities are frequent, often translocations involving the immunoglobulin genes in B-cell neoplasms. Translocations of oncogenes to the immunoglobulin loci on chromosomes 2, 14 or 22 may result in the overexpression of the oncogene under the influence of the highly active promoter elements of an immunoglobulin locus, leading to alteration of the cell cycle, failure of apoptosis or aberrant expression of survival genes. For example, t(14;18) places BCL2 under IGH control causing anti-apoptotic overexpression in follicular lymphoma, and t(8;14) drives MYC overexpression in Burkitt lymphoma. Next-generation sequencing has also revealed point mutations in genes involved in chromatin remodelling, the NFκB pathway and pre-mRNA splicing, but translocations remain a defining and frequent mechanism, not rare events."
  },
  {
    num: 248,
    stem: "Regarding the characteristic immunophenotypes of common B-cell non-Hodgkin lymphomas, which combination of marker expression patterns correctly distinguishes follicular lymphoma from mantle cell lymphoma and diffuse large B-cell lymphoma?",
    options: {
      A: "Follicular lymphoma is CD10+ and CD5-; mantle cell lymphoma is CD5+ and CD23-; DLBCL, GCB subtype is CD10+ and BCL6+",
      B: "Follicular lymphoma is CD5+ and CD23+; mantle cell lymphoma is CD10+ and BCL6+; DLBCL, non-GCB subtype is CD5+ and MUM1+",
      C: "All three lymphomas express CD5 uniformly, but follicular lymphoma is distinguished by CD10 negativity and mantle cell lymphoma by CD23 positivity.",
      D: "Follicular lymphoma is CD20-negative and CD5-positive; mantle cell lymphoma is CD10-positive and CD23-positive; DLBCL is uniformly CD5-positive and CD10-negative.",
      E: "Burkitt lymphoma shares the CD5+ and CD23+ phenotype with CLL/SLL, which is why it is classified as a low-grade indolent lymphoma in the WHO 2022 classification."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Table 20.5), lists the characteristic immunophenotypes of common B-cell lymphomas. Follicular lymphoma is typically surface immunoglobulin-positive, CD20+, CD5-negative, CD10+, and CD23 variable. Mantle cell lymphoma is CD20+, CD5+, CD10-negative, and CD23-negative. DLBCL, germinal centre B-cell (GCB) subtype is CD10+ and BCL6+, whereas the non-GCB subtype is MUM1-positive. These patterns allow distinction between subtypes in diagnostic practice. Burkitt lymphoma is CD10+ and CD20+ but CD5-negative, and is classified as a high-grade lymphoma in the WHO 2022 classification, not an indolent low-grade form."
  },
  {
    num: 249,
    stem: "Regarding infectious agents and their associations with non-Hodgkin lymphoma subtypes, which of the following pairings is most accurate according to the WHO 2022 classification and Hoffbrand?",
    options: {
      A: "Human T-cell lymphotropic virus type 1 (HTLV-1) is associated with adult T-cell leukaemia/lymphoma in 100% of cases; Epstein-Barr virus (EBV) is implicated in approximately 50% of Hodgkin lymphoma cases and in endemic Burkitt lymphoma.",
      B: "Human herpesvirus 8 (HHV8) causes primary effusion lymphoma in immunocompetent individuals, and HIV infection preferentially causes follicular lymphoma through direct transformation of follicular B cells.",
      C: "Hepatitis C virus is associated with splenic marginal zone lymphoma and diffuse large B-cell lymphoma in all infected individuals; eradication of HCV never results in lymphoma regression.",
      D: "Helicobacter pylori is associated exclusively with duodenal marginal zone lymphoma and has no role in gastric MALT lymphoma pathogenesis.",
      E: "EBV is implicated only in endemic Burkitt lymphoma and never in sporadic Burkitt lymphoma, diffuse large B-cell lymphoma, or T-cell lymphomas."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, Table 20.3), provides a comprehensive list of risk factors for lymphoma and their associations. HTLV-1 is associated with adult T-cell leukaemia/lymphoma (ATLL) in 100% of cases. EBV is implicated in approximately 50% of Hodgkin lymphoma cases, in endemic Burkitt lymphoma (100% of cases), and approximately 50% of sporadic cases. EBV is also associated with diffuse large B-cell lymphoma, particularly in older patients, and with extranodal NK/T-cell lymphoma (100% of cases). HHV8 causes primary effusion lymphoma, typically in immunosuppressed individuals, not immunocompetent patients. HIV is associated with Burkitt lymphoma, primary CNS lymphoma, Hodgkin lymphoma, and plasmablastic lymphoma — not preferentially with follicular lymphoma. HCV is associated with splenic marginal zone lymphoma and can cause DLBCL, but HCV-associated lymphomas may regress with antiviral therapy in some cases. H. pylori is strongly associated with gastric MALT lymphoma, not duodenal."
  },
  {
    num: 250,
    stem: "Which of the following best describes the role of PET-CT in the staging and response assessment of non-Hodgkin lymphoma, and how its application compares with that in Hodgkin lymphoma?",
    options: {
      A: "PET-CT is not used in NHL because FDG avidity is restricted to Hodgkin lymphoma; CT alone is the gold standard for both staging and response assessment in all NHL subtypes.",
      B: "The staging system for NHL is identical to that used for Hodgkin lymphoma, and PET-CT is widely used for initial staging and treatment response assessment; however, stage is less clearly related to prognosis in NHL than histological subtype.",
      C: "PET-CT is used exclusively for high-grade NHL and is contraindicated in low-grade NHL because indolent lymphomas do not accumulate FDG and cannot be visualised on PET imaging.",
      D: "The Deauville 5-point criteria apply only to Hodgkin lymphoma; in NHL, response is assessed by the Cheson criteria using CT size reduction alone, and PET has no role in routine follow-up.",
      E: "Bone marrow aspiration and trephine biopsy remain mandatory in all NHL cases regardless of PET-CT findings because PET-CT cannot detect bone marrow involvement in any NHL subtype."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 20, 'Staging'), states that the staging system is the same as that described for Hodgkin lymphoma (Chapter 19), but stage is less clearly related to prognosis than the histological subtype in NHL. Staging procedures usually include PET/CT or CT scanning. PET/CT can also be used to follow treatment response, and the Deauville criteria are applied. Bone marrow aspiration and trephine are sometimes performed although may be deferred if the results would not affect management. PET/CT may detect marrow disease when the biopsy is negative especially in high-grade disease. While some low-grade lymphomas (e.g., marginal zone) may show variable FDG uptake, PET-CT is widely used in follicular lymphoma and DLBCL for both staging and response assessment. Thus, option B is the most accurate statement integrating staging, PET-CT utility, and the key prognostic distinction between NHL and Hodgkin lymphoma."
  }
];
