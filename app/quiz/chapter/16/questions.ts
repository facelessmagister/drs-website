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
  },
  {
    num: 491,
    stem: "A 71-year-old woman with transfusion-dependent lower-risk MDS has a known SF3B1 mutation and 25% ring sideroblasts. She has been receiving subcutaneous erythropoietin for 6 months but remains transfusion-dependent, with haemoglobin 76 g/L. Her serum endogenous erythropoietin level before starting therapy was 650 U/L. She has no isolated del(5q). Which of the following is the most appropriate next step in management?",
    options: {
      A: "Increase the erythropoietin dose to maximum because ESA resistance is usually dose-dependent and higher doses restore response in most patients.",
      B: "Switch to luspatercept because it improves effective erythropoiesis by binding TGF-beta superfamily ligands and is particularly effective in MDS with ring sideroblasts.",
      C: "Start azacitidine because ongoing transfusion dependency indicates progression to higher-risk MDS requiring hypomethylating therapy.",
      D: "Add lenalidomide because SF3B1-mutant MDS with ring sideroblasts commonly responds to lenalidomide.",
      E: "Initiate anti-thymocyte globulin and ciclosporin because ESA failure in lower-risk MDS usually reflects immune-mediated marrow suppression."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that luspatercept raises haemoglobin levels in MDS by improving effective erythropoiesis and is well established as effective in patients with ring sideroblasts; trials in other types of MDS suggest it may be more effective than ESAs for many patients. Luspatercept is a recombinant fusion protein that binds transforming growth factor-beta (TGF-beta) superfamily ligands, thereby inhibiting aberrant SMAD2/3 signaling and promoting late-stage erythroid differentiation. In this patient, ESA therapy has failed (endogenous EPO was already >500 U/L, a known predictor of poor ESA response), and she has ring sideroblasts, making luspatercept the most appropriate next step. Increasing the EPO dose is unlikely to help after documented failure. Azacitidine is for higher-risk MDS and should not be started solely for transfusion dependency in lower-risk disease. Lenalidomide is specific to del(5q) MDS and is not indicated for SF3B1-mutant ring sideroblasts. Immunosuppression is used in hypoplastic MDS, which is not described here."
  },
  {
    num: 492,
    stem: "A 68-year-old man is referred with a 6-month history of night sweats, weight loss, gum hypertrophy, and a dragging sensation in the left upper abdomen. Full blood count: haemoglobin 92 g/L, white cell count 18.4 x 10^9/L, neutrophils 6.2 x 10^9/L, monocytes 2.8 x 10^9/L, platelets 85 x 10^9/L. Bone marrow shows 12% blasts, multilineage dysplasia, and no BCR::ABL1 fusion. Which of the following best describes his diagnosis and most appropriate initial management?",
    options: {
      A: "Chronic myeloid leukaemia — start imatinib because the elevated white cell count indicates BCR::ABL1-positive disease.",
      B: "Chronic myelomonocytic leukaemia, proliferative subtype — management may include hydroxycarbamide, azacitidine/decitabine, ruxolitinib, or evaluation for stem cell transplantation.",
      C: "Acute myeloid leukaemia — start 7+3 induction chemotherapy because the blast count exceeds 10%.",
      D: "Myelodysplastic neoplasm with increased blasts 2 — treat only with azacitidine because monocytosis is incidental.",
      E: "Myeloproliferative neoplasm with monocytosis — start a JAK2 inhibitor because the splenomegaly and leukocytosis indicate MPN."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies chronic myelomonocytic leukaemia (CMML) under MDS/MPN neoplasms. CMML is defined by persistent monocytosis ≥0.5 x 10^9/L with monocytes representing ≥10% of circulating white cells, blasts <20% in marrow, dysplasia in other lineages, and absence of BCR::ABL1. The white cell count may exceed 13 x 10^9/L in the proliferative subtype, which is associated with RAS pathway mutations. This patient has monocytosis ≥0.5 x 10^9/L, multilineage dysplasia, blasts <20%, splenomegaly, and no BCR::ABL1, satisfying CMML criteria. Treatment is difficult; options include hydroxycarbamide, azacitidine or decitabine, ruxolitinib, and etoposide for symptom control, with SCT considered in younger patients. CML is incorrect because BCR::ABL1 is absent. AML requires ≥20% blasts. MDS-IB2 alone does not account for the persistent monocytosis and MDS/MPN features. A JAK2 inhibitor would be inappropriate without an MPN driver mutation."
  },
  {
    num: 493,
    stem: "A 65-year-old man presents with pancytopenia and mild splenic enlargement. Full blood count: haemoglobin 74 g/L, white cell count 2.6 x 10^9/L, neutrophils 0.9 x 10^9/L, platelets 48 x 10^9/L. Bone marrow aspirate is a dry tap; trephine biopsy shows moderate reticulin fibrosis, 8% blasts, and dysplastic megakaryocytes. Molecular testing is negative for JAK2, CALR, and MPL mutations. There is no history of cytotoxic therapy. Which of the following is the most likely diagnosis?",
    options: {
      A: "Primary myelofibrosis — the fibrotic marrow and splenomegaly indicate an MPN even without a driver mutation.",
      B: "Myelodysplastic neoplasm with fibrosis (MDS-f) — dysplasia, cytopenias, absence of MPN driver mutations, and fibrosis support this WHO 2022 subtype.",
      C: "Aplastic anaemia — pancytopenia with hypocellular marrow indicates immune-mediated marrow failure.",
      D: "Acute myeloid leukaemia with myelofibrosis — blasts >5% in fibrotic marrow define AML regardless of total blast count.",
      E: "Therapy-related myeloid neoplasm — the fibrosis and pancytopenia in an elderly patient are typical of t-MDS."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes MDS with fibrosis (MDS-f) as a WHO 2022 subtype characterized by fibrosis in the bone marrow, increased blasts (5-19% in BM, 2-19% in PB), and dysplastic features. In about 10% of MDS cases the marrow is hypocellular and in others there is fibrosis that may cause confusion with primary myelofibrosis. The absence of MPN driver mutations (JAK2, CALR, MPL), the prominent multilineage dysplasia, and the cytopenias argue against primary myelofibrosis and support MDS-f. Aplastic anaemia would show a hypocellular marrow without dysplasia or fibrosis. AML requires ≥20% blasts. There is no history of cytotoxic therapy to support t-MDS."
  },
  {
    num: 494,
    stem: "A 58-year-old woman is found to have macrocytic anaemia with haemoglobin 86 g/L, MCV 108 fL, and a platelet count of 520 x 10^9/L. Bone marrow aspirate shows 3% blasts, 22% ring sideroblasts, and an SF3B1 mutation by next-generation sequencing. Cytogenetics are normal. She has no del(5q). Which of the following is the most accurate diagnosis and first-line therapeutic consideration?",
    options: {
      A: "MDS with isolated del(5q) — start lenalidomide because thrombocytosis is typical of the 5q- syndrome.",
      B: "MDS/MPN with SF3B1 mutation and thrombocytosis — manage the anaemia, considering luspatercept or ESAs, while recognizing the platelet count ≥450 x 10^9/L places this in the MDS/MPN category.",
      C: "Essential thrombocythaemia with iron deficiency — start hydroxycarbamide and oral iron.",
      D: "MDS with increased blasts 1 — start azacitidine because the ring sideroblasts indicate higher-risk disease.",
      E: "Chronic myelomonocytic leukaemia — start hydroxycarbamide because monocytosis is frequently overlooked in SF3B1 disease."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, classifies MDS/MPN with SF3B1 mutation and thrombocytosis as a rare syndrome that resembles MDS with single-lineage dysplasia with ring sideroblasts but is accompanied by a platelet count >450 x 10^9/L; SF3B1 mutations are present, often accompanied by JAK2 or MPL mutations. The diagnostic threshold is platelet count ≥450 x 10^9/L. This patient has macrocytic anaemia, ring sideroblasts, SF3B1 mutation, and thrombocytosis, fitting this entity rather than isolated MDS-SF3B1. Anaemia should be managed according to lower-risk MDS algorithms, with luspatercept or ESAs considered. del(5q) MDS is incorrect because cytogenetics are normal. Essential thrombocythaemia would not explain ring sideroblasts or SF3B1 mutation. MDS-IB1 requires 5-9% blasts. CMML requires persistent monocytosis, which is absent."
  },
  {
    num: 495,
    stem: "A 69-year-old man with lower-risk MDS (IPSS-R score 1.5) has symptomatic anaemia with haemoglobin 88 g/L. His serum endogenous erythropoietin level is 320 U/L. He has no isolated del(5q), no ring sideroblasts, and no severe thrombocytopenia. He is transfusion-independent but symptomatic. Which of the following is the most appropriate first-line therapy for his anaemia?",
    options: {
      A: "Erythropoiesis-stimulating agents with or without G-CSF, because endogenous EPO <500 U/L predicts a response in approximately 40-50% of cases.",
      B: "Luspatercept monotherapy, because it has replaced ESAs as first-line treatment for all lower-risk MDS patients regardless of EPO level or ring sideroblast status.",
      C: "Lenalidomide, because it reduces transfusion requirements in all transfusion-independent lower-risk MDS.",
      D: "Azacitidine, because symptomatic anaemia in lower-risk MDS indicates higher-risk biology requiring hypomethylating therapy.",
      E: "Deferasirox iron chelation, because ferritin elevation is common in MDS even without transfusion history."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that erythropoiesis-stimulating agents (ESAs) may improve anaemia in 40-50% of cases with an endogenous erythropoietin level <500 U/L, although the haemoglobin should not be raised above 120 g/L. Patients with low red cell transfusion requirements are more likely to respond. G-CSF shows synergy with ESAs and may increase the erythroid response rate. This patient has lower-risk MDS, EPO <500 U/L, no del(5q), and no ring sideroblasts, making ESA the most appropriate first-line anaemia therapy. Luspatercept is particularly effective in ring sideroblasts and may replace ESAs in some low-risk patients, but this statement is too broad for this patient. Lenalidomide is specific to del(5q) MDS. Azacitidine is reserved for higher-risk MDS. Iron chelation is not indicated in a transfusion-independent patient without documented iron overload."
  },
  {
    num: 496,
    stem: "Regarding recurrent cytogenetic abnormalities in myelodysplastic neoplasms and their prognostic implications, which of the following statements is most accurate?",
    options: {
      A: "Complex karyotype with more than 3 abnormalities has a very good prognosis because the genetic diversity provides multiple therapeutic targets.",
      B: "Isolated del(5q) is classified as good prognosis and is considered so diagnostic of MDS that it permits diagnosis even without morphological dysplasia.",
      C: "Monosomy 7 or del(7q) is classified as intermediate prognosis and predicts excellent response to lenalidomide.",
      D: "Loss of the Y chromosome (-Y) is classified as poor prognosis and mandates immediate treatment with azacitidine.",
      E: "Trisomy 8 as a single abnormality is always classified as very poor risk and indicates rapid progression to AML."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, summarizes the IPSS-R cytogenetic risk categories in Table 16.2: very good (-Y or del(11q)), good (normal or del(5q)), intermediate (del(7q) or double-independent clones), poor (inv(3) or double including -7/del(7q)), and very poor (complex >3 abnormalities). Several cytogenetic abnormalities, including del(5q), are considered so diagnostic of MDS that they allow diagnosis even in the absence of morphological abnormalities. Isolated del(5q) carries a favourable prognosis and responds well to lenalidomide. Complex karyotype is very poor, not very good. Monosomy 7/del(7q) is intermediate, but lenalidomide is specific to del(5q). -Y is very good and does not mandate azacitidine. Trisomy 8 is not specifically classified as very poor risk in this schema."
  },
  {
    num: 497,
    stem: "Which of the following best explains the pathophysiological paradox of a hypercellular bone marrow with peripheral pancytopenia in myelodysplastic neoplasms?",
    options: {
      A: "Bone marrow fibrosis physically traps haemopoietic cells and prevents their release into the circulation.",
      B: "Dysplastic haemopoietic precursors undergo increased proliferation but also excessive apoptosis before maturing into functional circulating cells.",
      C: "Autoantibodies directed against mature neutrophils, red cells, and platelets cause their peripheral destruction.",
      D: "Hypersplenism sequesters the entire peripheral blood cell pool, causing cytopenias despite normal marrow production.",
      E: "Deficiency of G-CSF prevents neutrophil egress, while erythropoietin deficiency prevents red cell production."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that a hallmark of MDS is simultaneous proliferation and apoptosis of haemopoietic cells (ineffective haemopoiesis), leading to the paradox of a hypercellular bone marrow but pancytopenia in peripheral blood. The clonal stem cells proliferate, but dysplastic precursors fail to differentiate normally and undergo premature apoptosis within the marrow, so insufficient mature cells reach the periphery. Marrow fibrosis is present in only a minority of cases and does not explain the common hypercellular MDS phenotype. Autoimmune peripheral destruction is not the primary mechanism. Hypersplenism may occur in MDS/MPN overlap but is not typical of MDS. G-CSF and EPO deficiency are not the central defect; in fact, endogenous EPO is often elevated."
  },
  {
    num: 498,
    stem: "Regarding ring sideroblasts in myelodysplastic neoplasms, which of the following statements is most accurate?",
    options: {
      A: "A ring sideroblast is defined by the presence of 3 or more iron granules in any erythroid precursor, and the finding is strongly associated with TET2 mutations.",
      B: "A pathological ring sideroblast is defined by 5 or more iron granules encircling at least one-third of the nucleus, and nearly all cases are associated with SF3B1 mutations.",
      C: "Ring sideroblasts represent iron deposition in macrophages and are best treated with iron chelation to reduce mitochondrial iron overload.",
      D: "Ring sideroblasts are identified on Wright-Giemsa stain and are pathognomonic for del(5q) syndrome.",
      E: "Ring sideroblasts result from JAK2-mediated dysregulation of mitochondrial iron transport and predict response to ruxolitinib."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, defines a pathological ring sideroblast as an erythroid precursor with five or more iron granules encircling at least one-third of the nucleus. Ring sideroblasts are caused by iron deposition in the mitochondria of erythroblasts. A striking genotype-phenotype correlation is mutation in SF3B1, which encodes a component of the RNA spliceosome; SF3B1 mutations are seen in almost all cases of MDS with ring sideroblasts. In the absence of SF3B1 mutation, ≥15% ring sideroblasts allow classification as MDS with low blasts and ring sideroblasts. TET2 mutations are associated with CHIP and other MDS subtypes but not specifically ring sideroblasts. Iron chelation treats transfusion overload, not ring sideroblasts per se. Ring sideroblasts are identified with Perls' stain, not Wright-Giemsa, and are not specific to del(5q). JAK2 mutations are characteristic of MPNs, not ring sideroblasts."
  },
  {
    num: 499,
    stem: "Regarding the WHO 2022 classification of myelodysplastic/myeloproliferative neoplasms (MDS/MPN), which of the following statements is most accurate?",
    options: {
      A: "Chronic myelomonocytic leukaemia (CMML) requires persistent monocytosis ≥1.0 x 10^9/L and a positive BCR::ABL1 fusion gene.",
      B: "CMML is defined by persistent monocytosis ≥0.5 x 10^9/L with monocytes representing ≥10% of white cells, blasts <20% in blood and marrow, absence of BCR::ABL1, and dysplasia or a clonal abnormality.",
      C: "MDS/MPN with neutrophilia is characterized by the presence of the BCR::ABL1 fusion gene and responds to imatinib.",
      D: "MDS/MPN with SF3B1 mutation and thrombocytosis requires a platelet count <450 x 10^9/L and absence of SF3B1 mutation.",
      E: "MDS/MPN neoplasms are defined exclusively by increased circulating blasts without any dysplastic features."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes MDS/MPN neoplasms as disorders showing both dysplastic features and increased circulating cells. Table 16.5 summarizes the WHO 2022 classification. CMML is defined by persistent monocytosis ≥0.5 x 10^9/L with monocytes representing ≥10% of circulating white cells, blasts <20% in peripheral blood and bone marrow, no BCR::ABL1, and meeting CML/MPN exclusion criteria; supporting criteria include dysplasia affecting one or more myeloid lineages or an acquired clonal abnormality. MDS/MPN with neutrophilia (formerly atypical CML) is BCR::ABL1 negative. MDS/MPN with SF3B1 mutation and thrombocytosis requires platelets ≥450 x 10^9/L and SF3B1 mutation. These entities require dysplasia, not just increased blasts."
  },
  {
    num: 500,
    stem: "Regarding the mechanism of action of luspatercept in the treatment of anaemia associated with lower-risk myelodysplastic neoplasms, which of the following statements is most accurate?",
    options: {
      A: "Luspatercept is a DNA methyltransferase inhibitor that reverses aberrant DNA methylation in erythroid progenitors.",
      B: "Luspatercept is a recombinant fusion protein that binds TGF-beta superfamily ligands and improves effective erythropoiesis by promoting late-stage erythroid differentiation.",
      C: "Luspatercept is a proteasome inhibitor that selectively degrades casein kinase 1 in del(5q) cells.",
      D: "Luspatercept is an erythropoietin receptor agonist that directly stimulates erythropoietin signaling.",
      E: "Luspatercept is an oral iron chelator that reduces mitochondrial iron accumulation in ring sideroblasts."
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that luspatercept raises haemoglobin levels in MDS by improving effective erythropoiesis and is well established as effective in patients with ring sideroblasts; trials suggest it may be more effective than ESAs for many patients. Luspatercept is a recombinant fusion protein composed of modified activin receptor type IIB linked to an Fc domain; it binds multiple TGF-beta superfamily ligands, thereby inhibiting aberrant SMAD2/3 signaling that suppresses late-stage erythroid differentiation in MDS. This mechanism is distinct from DNA methyltransferase inhibitors such as azacitidine and decitabine. Lenalidomide, not luspatercept, augments ubiquitin-mediated degradation of casein kinase 1 in del(5q) cells. Luspatercept is not an EPO receptor agonist and not an iron chelator."
  }
];
