export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 201,
    stem: "A 72-year-old woman is referred with fatigue and pallor. Her full blood count reveals: haemoglobin 82 g/L (macrocytic, MCV 105 fL), white cell count 3.2 x 10^9/L, neutrophils 1.1 x 10^9/L, platelets 520 x 10^9/L. Bone marrow aspirate shows 4% blasts, dysplasia in erythroid and megakaryocyte lineages, and cytogenetics demonstrates an isolated deletion of the long arm of chromosome 5. She is transfusion-dependent. Which of the following is the most appropriate first-line therapy?",
    options: {
      A: "Azacitidine, because isolated del(5q) with thrombocytosis indicates higher-risk MDS that requires a hypomethylating agent.",
      B: "Lenalidomide, because MDS with isolated del(5q) typically responds to lenalidomide through selective degradation of casein kinase 1 in haploinsufficient del5q cells.",
      C: "Allogeneic stem cell transplantation, because del(5q) MDS has a poor prognosis and SCT is the only curative option regardless of age.",
      D: "Erythropoiesis-stimulating agents (ESA) plus G-CSF, because the thrombocytosis indicates adequate marrow reserve and ESAs are first-line for all lower-risk MDS.",
      E: "Ciclosporin and anti-thymocyte globulin, because the macrocytic anaemia with thrombocytosis suggests hypoplastic MDS responsive to immunosuppression."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes MDS with isolated del(5q) (5q- syndrome) as a distinct entity more common in women, typically presenting with macrocytic anaemia and thrombocytosis in 50% of cases. This subtype has a favourable prognosis and responds well to lenalidomide therapy. Lenalidomide's mechanism of action includes augmentation of ubiquitin-mediated degradation of casein kinase 1, which is encoded on chromosome 5q; del5q cells are haploinsufficient for this kinase and are selectively killed because healthy cells experience a smaller reduction. Azacitidine is reserved for higher-risk MDS. Allogeneic SCT is not first-line in elderly patients with lower-risk del(5q) disease. ESAs are less effective than lenalidomide in del(5q). Immunosuppression is used in hypoplastic MDS, which this is not."
  },
  {
    num: 202,
    stem: "A 68-year-old man presents with recurrent chest infections and easy bruising. Full blood count: haemoglobin 78 g/L, white cell count 2.4 x 10^9/L, neutrophils 0.6 x 10^9/L, platelets 38 x 10^9/L. Bone marrow is hypercellular with multilineage dysplasia. Cytogenetics are normal. Bone marrow blasts are 12%. He has no history of cytotoxic therapy. According to the WHO 2022 classification and IPSS-R, which of the following best describes his disease classification and initial management?",
    options: {
      A: "MDS with increased blasts 1 (MDS-IB1); observation with serial blood counts because his IPSS-R score places him in the lower-risk category.",
      B: "MDS with low blasts (MDS-LB); treatment with erythropoiesis-stimulating agents and G-CSF is appropriate first-line therapy.",
      C: "MDS with increased blasts 2 (MDS-IB2) with high-risk IPSS-R; initial therapy with a hypomethylating agent such as azacitidine, with evaluation for allogeneic stem cell transplantation if he is fit and eligible.",
      D: "Therapy-related MDS (t-MDS); although he lacks a history of chemotherapy, the poor prognosis indicates that only supportive care and palliation are appropriate.",
      E: "Hypoplastic MDS; immunosuppressive therapy with anti-thymocyte globulin and ciclosporin is the treatment of choice."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies MDS with 10-19% bone marrow blasts as MDS-IB2. The IPSS-R score for this patient is calculated as: cytogenetics good (0), blasts >10% (2), haemoglobin <80 g/L (1.5), platelets <50 x 10^9/L (1), neutrophils <0.8 x 10^9/L (0.5), giving a total of 5.0, which places him in the high-risk category (>4.5-6). Higher-risk MDS (IPSS-R >= 4) is treated with the aim of preventing progression to AML. Options include hypomethylating agents such as azacitidine, which improves survival by approximately 9 months compared with supportive care alone, intensive chemotherapy as a bridge to allogeneic SCT in selected patients, or allogeneic SCT itself as the only curative procedure. Observation and ESAs are for lower-risk disease. There is no history of cytotoxic therapy to support t-MDS. The marrow is hypercellular, not hypoplastic, so immunosuppression is not indicated."
  },
  {
    num: 203,
    stem: "A 74-year-old man with a history of diffuse large B-cell lymphoma treated 4 years ago with cyclophosphamide, doxorubicin, vincristine, prednisolone, and rituximab (R-CHOP) plus involved-field radiotherapy presents with worsening fatigue and recurrent infections. Full blood count: haemoglobin 72 g/L, white cell count 1.9 x 10^9/L, neutrophils 0.4 x 10^9/L, platelets 28 x 10^9/L. Bone marrow shows 15% blasts, multilineage dysplasia, and complex karyotype with abnormalities of chromosomes 5 and 7. Next-generation sequencing reveals a TP53 mutation and copy-neutral loss of heterozygosity. Which of the following statements most accurately describes his diagnosis and prognosis?",
    options: {
      A: "He has de novo MDS with isolated del(5q); lenalidomide offers a high likelihood of transfusion independence and long-term disease control.",
      B: "He has therapy-related myeloid neoplasm (t-MDS) with biallelic TP53 inactivation; prognosis is very poor with chemotherapy resistance and limited response to conventional therapies.",
      C: "He has MDS with SF3B1 mutation and ring sideroblasts; luspatercept would be the most appropriate first-line therapy to improve effective erythropoiesis.",
      D: "He has MDS/MPN overlap disorder (CMML) because the history of prior chemotherapy and monocytosis defines this entity.",
      E: "He has clonal cytopenias of undetermined significance (CCUS) because the blast count of 15% is below the 20% threshold for overt MDS."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that therapy-related MDS (t-MDS) arises after chemotherapy or radiotherapy and is now classified together with therapy-related AML. TP53 mutations are detected most commonly in patients with t-MDS and are often associated with complex chromosome rearrangements, chemotherapy resistance, and a poor prognosis. The presence of 15% blasts, multilineage dysplasia, and complex cytogenetics in this context clearly meets criteria for a therapy-related myeloid neoplasm, not CCUS (which lacks diagnostic dysplasia or blasts sufficient for MDS). De novo del(5q) MDS is not associated with complex karyotype or TP53 mutations and would not follow cytotoxic therapy. SF3B1 mutation with ring sideroblasts is not described here. CMML requires persistent monocytosis >=0.5 x 10^9/L, which is absent."
  },
  {
    num: 204,
    stem: "A 32-year-old woman presents with a 6-month history of progressive fatigue and menorrhagia. Full blood count: haemoglobin 68 g/L, white cell count 2.1 x 10^9/L, neutrophils 0.9 x 10^9/L, platelets 18 x 10^9/L. Bone marrow biopsy shows markedly reduced cellularity (<25%) with mild dysplastic changes in erythroid and myeloid lineages. Cytogenetics are normal and there is no excess of blasts. She has no history of cytotoxic exposure. Her younger brother was diagnosed with aplastic anaemia at age 28. Which of the following is the most appropriate next step in management?",
    options: {
      A: "Immediate allogeneic stem cell transplantation from her brother, because the family history indicates a hereditary bone marrow failure syndrome and SCT is curative.",
      B: "Anti-thymocyte globulin (ATG) plus ciclosporin, because the hypoplastic bone marrow, normal karyotype, and young age are characteristic of hypoplastic MDS that may respond to immunosuppression.",
      C: "Azacitidine, because the pancytopenia with dysplasia indicates higher-risk MDS regardless of marrow cellularity and hypomethylating agents improve blood counts.",
      D: "High-dose cyclophosphamide, because the family history suggests an autoimmune aetiology and intense immunosuppression is required to eradicate autoreactive lymphocytes.",
      E: "Lenalidomide, because the young age and normal cytogenetics suggest an occult del(5q) clone that will respond to lenalidomide."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes hypoplastic MDS (MDS-h) as a subtype with bone marrow cellularity <=25% (age-adjusted), which may resemble aplastic anaemia. Ciclosporin or anti-thymocyte globulin occasionally helps, particularly for those with a hypocellular bone marrow and normal karyotype. The patient's young age, hypocellularity, normal cytogenetics, and lack of excess blasts fit this subtype. Her brother's history raises the possibility of germline predisposition, but without confirmed genetic diagnosis, proceeding directly to allogeneic SCT from a potentially affected sibling is inappropriate. Azacitidine is indicated for higher-risk MDS, which this is not. High-dose cyclophosphamide is not standard therapy. Lenalidomide is specific to del(5q) MDS, and there is no evidence of this abnormality."
  },
  {
    num: 205,
    stem: "A 76-year-old man with lower-risk MDS (IPSS-R 2.0) has been managed with red cell transfusions for 3 years. His transfusion records show he has received 45 units of packed red cells. His serum ferritin is 1850 microg/L. Cardiac MRI demonstrates mild myocardial iron overload. He remains transfusion-dependent with a haemoglobin averaging 78 g/L. His performance status is good. Which of the following is the most appropriate next step in his management?",
    options: {
      A: "Continue transfusions alone, because iron overload is a predictable consequence of long-term transfusion and chelation therapy does not improve survival in MDS.",
      B: "Initiate deferasirox iron chelation therapy, because current guidelines recommend considering iron chelation after 20-50 units transfused or ferritin >1000 microg/L, with cardiac MRI guiding the decision.",
      C: "Switch to luspatercept monotherapy and stop all transfusions, because luspatercept replaces the need for transfusion support in all lower-risk MDS patients.",
      D: "Proceed to allogeneic stem cell transplantation, because iron overload is an indication for urgent SCT to prevent cardiomyopathy.",
      E: "Start azacitidine, because transfusion dependency indicates progression to higher-risk disease requiring hypomethylating therapy."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that in patients with lower-risk MDS, iron chelation therapy (e.g. with deferasirox) should be considered after 20-50 units have been transfused or if the ferritin rises above 1000 microg/L. Measurement of liver and cardiac iron by magnetic resonance imaging (MRI) is helpful in deciding whether chelation therapy is indicated. This patient meets these criteria with 45 units transfused, ferritin 1850 microg/L, and documented cardiac iron overload. Continuing transfusions without chelation risks progressive organ damage. Luspatercept may reduce transfusion requirements in some patients but does not eliminate the need for transfusions in all cases and is not a substitute for chelation in this context. Allogeneic SCT is not indicated solely for iron overload in lower-risk MDS. Azacitidine is for higher-risk disease; transfusion dependency alone in lower-risk MDS does not constitute progression."
  },
  {
    num: 206,
    stem: "Regarding the WHO 2022 classification of myelodysplastic neoplasms (MDS) and the role of specific genetic abnormalities, which of the following statements is most accurate?",
    options: {
      A: "MDS with biallelic TP53 inactivation is classified by blast proportion alone, because TP53 mutations do not influence prognosis independent of bone marrow blast count.",
      B: "MDS with low blasts and SF3B1 mutation (MDS-SF3B1) is defined by the presence of SF3B1 mutation, absence of 5q deletion, monosomy 7 or complex karyotype, and ring sideroblasts are pathognomonic but not required if the mutation is present.",
      C: "MDS with isolated del(5q) requires multilineage dysplasia for diagnosis, because the deletion alone is insufficient without morphological evidence of dysplasia in at least two lineages.",
      D: "MDS with increased blasts 1 (MDS-IB1) and MDS with increased blasts 2 (MDS-IB2) are distinguished solely by the presence of Auer rods, which define MDS-IB2 regardless of blast percentage.",
      E: "Hypoplastic MDS is defined by bone marrow cellularity >50% with age adjustment, because hypercellularity is the hallmark of MDS and hypocellularity excludes the diagnosis."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, presents the WHO 2022 classification of MDS (Table 16.1). MDS with low blasts and SF3B1 mutation (MDS-SF3B1) requires absence of 5q deletion, monosomy 7 or 7q deletion, and complex karyotype. Detection of >=15% ring sideroblasts may substitute for SF3B1 mutation. SF3B1 mutations are seen in almost all cases of MDS with ring sideroblasts and represent a genotype-phenotype correlation with the RNA spliceosome. MDS with biallelic TP53 inactivation has a poor prognosis independent of blasts. MDS with isolated del(5q) is diagnosed even without multilineage dysplasia; the cytogenetic abnormality is considered so diagnostic that it allows diagnosis even in the absence of morphological abnormalities. MDS-IB1 and IB2 are distinguished by blast percentage (5-9% vs 10-19% in BM, or 2-4% vs 5-19% in PB), with Auer rods present in some IB2 cases but not the sole discriminator. Hypoplastic MDS is defined by bone marrow cellularity <=25% (age-adjusted)."
  },
  {
    num: 207,
    stem: "Regarding the molecular genetics of myelodysplastic neoplasms and their prognostic significance, which of the following statements is most accurate?",
    options: {
      A: "FLT3 and NPM1 mutations are common in MDS and confer a favourable prognosis because they indicate a proliferative clone with preserved differentiation.",
      B: "TET2, DNMT3A, and ASXL1 mutations are primarily found in therapy-related MDS, whereas de novo MDS is driven almost exclusively by SF3B1 and TP53 mutations.",
      C: "SF3B1 mutations are strongly associated with ring sideroblasts due to aberrant splicing of genes involved in iron metabolism and mitochondrial function, and represent a genotype-phenotype correlation specific to the RNA spliceosome.",
      D: "DNMT3A mutations cause MDS by inducing global DNA hypomethylation, leading to widespread oncogene activation and rapid progression to acute myeloid leukaemia within months.",
      E: "JAK2 V617F is the most common mutation in MDS and predicts a high risk of transformation to polycythaemia vera; its presence mandates JAK2 inhibitor therapy."
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes that clonally derived cells in MDS typically carry several point mutations in genes involved in epigenetic processes (DNA methylation: TET2, DNMT3A; chromatin modification: ASXL1, EZH2), and RNA splicing (SF3B1, SRSF2, U2AF1). A striking example of genotype-phenotype correlation is mutation in SF3B1, which encodes a component of the RNA spliceosome; SF3B1 mutations are seen in almost all cases of MDS with ring sideroblasts. FLT3 and NPM1 are rare in MDS because they are strong leukaemia drivers that result in rapid progression to AML. TET2, DNMT3A, and ASXL1 are common in de novo MDS, not limited to t-MDS. DNMT3A mutations are involved in DNA methylation but do not universally cause rapid AML transformation. JAK2 V617F is characteristic of MPNs, not MDS, and does not predict transformation to PV."
  },
  {
    num: 208,
    stem: "Regarding clonal haemopoiesis of indeterminate potential (CHIP) and related precursor states, which of the following statements is most accurate?",
    options: {
      A: "CHIP is defined by a somatic mutation in a myeloid malignancy-associated gene at a variant allele frequency (VAF) >=2% in a person without a haematological neoplasm, and is associated with an approximately 1% annual risk of developing an overt haematological neoplasm.",
      B: "CCUS (clonal cytopenias of undetermined significance) describes patients with cytopenias but no clonal mutation, and carries a low risk of progression to MDS or AML because the absence of a clone indicates a reactive process.",
      C: "ICUS (idiopathic cytopenias of undetermined significance) is always associated with a detectable clonal mutation at VAF >=2%, and the term is reserved for patients with cytopenias who have not yet developed morphological dysplasia sufficient for MDS.",
      D: "CHIP carries no risk of non-haematological disease; the mutations are confined to the haemopoietic system and do not affect other organ systems.",
      E: "IDUS (idiopathic dysplasia of undetermined significance) is defined by the presence of cytopenias with morphological dysplasia and a clonal mutation, but the blast count is <5%."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, defines CHIP as the presence of a somatic mutation in a leukaemia driver gene at a VAF >=2% (>=4% for X-linked genes) in a person without a haematological neoplasm or unexplained cytopenia. CHIP carries a ~1% risk per year of developing an overt haematological neoplasm. CCUS is defined as ICUS with a clonal mutation present, and these patients have a risk of developing MDS or AML exceeding 75% by 4 years. ICUS describes cytopenias without evidence of MDS and either no somatic mutation detected or mutation not sought; it does not require a clonal mutation. CHIP is importantly associated with increased risk of non-haematological diseases including atherosclerosis, myocardial infarction, stroke, and other conditions. IDUS describes unexplained morphological dysplasia with normal blood counts and no evidence of MDS."
  },
  {
    num: 209,
    stem: "Regarding the Revised International Prognostic Scoring System (IPSS-R) and its clinical application in myelodysplastic neoplasms, which of the following statements is most accurate?",
    options: {
      A: "The IPSS-R score incorporates only bone marrow blast percentage and cytogenetic risk category; cytopenias are excluded because they do not independently predict leukaemic transformation or survival.",
      B: "A patient with very good cytogenetics (-Y), 1% bone marrow blasts, haemoglobin 105 g/L, platelets 120 x 10^9/L, and neutrophils 1.2 x 10^9/L would have a very low-risk IPSS-R score with a median survival of approximately 8.8 years.",
      C: "The IPSS-R classifies all patients with intermediate cytogenetics and 5-10% blasts into the low-risk category, because intermediate cytogenetics are considered favourable when blast counts are below 10%.",
      D: "IPSS-M (molecular IPSS) replaces IPSS-R entirely in clinical practice and no longer considers bone marrow morphology or blast counts, relying solely on next-generation sequencing data.",
      E: "A patient with complex karyotype (>3 abnormalities) receives a cytogenetic score of 3, which alone is sufficient to place any patient into the high-risk category regardless of other variables."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes IPSS-R as incorporating bone marrow blast percentage, cytogenetic risk category, and the number and severity of cytopenias (haemoglobin, platelets, neutrophils) (Table 16.3). A patient with very good cytogenetics (score 0), <=2% blasts (0), Hb >=100 (0), platelets >=100 (0), and neutrophils >=0.8 (0) has a total score of <=1.5, which is very low risk, with a median survival of 8.8 years and leukaemic transformation not reached in 25% of cases. Intermediate cytogenetics combined with 5-10% blasts (score 1.5) and any cytopenia would not be low risk. IPSS-M is a refinement that includes mutations from NGS profiling but does not replace IPSS-R entirely; it is used alongside clinical calculators. Complex karyotype (>3 abnormalities) scores 4 points for cytogenetics, but with all other variables at 0 the total score is 4, which is intermediate risk by the table (>3-4.5), not automatically high risk."
  },
  {
    num: 210,
    stem: "Regarding the mechanism of action of hypomethylating agents in higher-risk myelodysplastic neoplasms, which of the following statements is most accurate?",
    options: {
      A: "Azacitidine and decitabine are nucleoside analogues that irreversibly bind to DNA methyltransferase and are incorporated into DNA and RNA, causing DNA double-strand breaks and inhibiting methylation of newly formed DNA.",
      B: "Azacitidine activates the p53 tumour suppressor pathway directly by inhibiting MDM2, thereby inducing cell cycle arrest and apoptosis specifically in TP53-mutant MDS cells.",
      C: "Decitabine is a histone deacetylase inhibitor that remodels chromatin structure to silence oncogenes and restore normal haemopoiesis through epigenetic reprogramming.",
      D: "Azacitidine is a proteasome inhibitor that degrades NF-kappaB and reduces inflammatory cytokine production in the bone marrow microenvironment.",
      E: "Both azacitidine and decitabine require metabolic activation by cytidine deaminase to their triphosphate forms before they can enter cells and inhibit DNA synthesis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that azacitidine and decitabine are DNA methyltransferase inhibitors which inhibit methylation of newly formed DNA. They are nucleoside analogues that irreversibly bind to DNA methyltransferase and also are incorporated into DNA and RNA, causing DNA double-strand breaks. They improve blood counts in 40-50% of higher-risk MDS patients. Azacitidine can improve survival by approximately 9 months compared to supportive care alone. The exact mechanism of clinical activity in MDS is unknown, but the epigenetic modulation is key. They are not MDM2 inhibitors, histone deacetylase inhibitors, proteasome inhibitors, or dependent on cytidine deaminase activation."
  }
];
