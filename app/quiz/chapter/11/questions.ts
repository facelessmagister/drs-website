export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 151,
    stem: "A 58-year-old man treated 6 years ago with chlorambucil and involved-field radiotherapy for low-grade follicular lymphoma presents with fatigue and pancytopenia. Bone marrow biopsy reveals 18% myeloblasts, dysplastic megakaryocytes, and a complex karyotype with monosomy 5, monosomy 7, and 17p deletion. TP53 mutation is detected by next-generation sequencing. Which of the following best integrates the aetiological classification, mechanistic basis, and prognostic implication of this presentation?",
    options: {
      A: "Therapy-related myeloid neoplasm secondary to alkylating agent/radiation-induced DNA damage, with clonal selection of a TP53-mutant haemopoietic stem cell carrying a complex karyotype that predicts resistance to standard chemotherapy.",
      B: "Transformation of the original follicular lymphoma into a high-grade B-cell lymphoma with myeloid lineage switch, requiring lymphoma-directed therapy such as rituximab plus cyclophosphamide, doxorubicin, vincristine and prednisolone (R-CHOP).",
      C: "De novo acute myeloid leukaemia unrelated to prior therapy, as the 6-year latency exceeds the typical 2–3 year window for treatment-related myeloid neoplasia.",
      D: "Myelodysplastic syndrome with excess blasts driven by the JAK2V617F mutation commonly associated with prior lymphoma therapy and radiotherapy exposure.",
      E: "Aplastic anaemia secondary to cumulative bone marrow suppression from chlorambucil, with the blasts representing a regenerative marrow response rather than a clonal neoplasm."
    },
    answer: "A",
    explanation: "Hoffbrand’s Essential Haematology, 9th Edition, describes how DNA alkylating agents such as chlorambucil or melphalan predispose to later development of myelodysplastic syndromes (MDS) or acute myeloid leukaemia (AML), especially if combined with radiotherapy. The karyotype in such cases is almost always complex with TP53 mutations usually present. The majority of MDS/AML cases post-cytotoxic chemotherapy are associated with TP53 mutations. This presentation constitutes a therapy-related myeloid neoplasm. TP53 is the most significant tumour-suppressor gene in human cancer and its inactivation by mutation or deletion in over 50% of cases predicts poor prognosis and lack of responsiveness to chemotherapy. The complex karyotype with monosomies 5 and 7 is characteristic of alkylating agent-related disease, distinct from the balanced translocations seen with topoisomerase inhibitor-related secondary leukaemias."
  },
  {
    num: 152,
    stem: "A 2-year-old boy with Down syndrome is brought to clinic with pallor, fever, and hepatosplenomegaly. Full blood count shows haemoglobin 62 g/L, platelets 45 × 10⁹/L, and white cell count 92 × 10⁹/L with 35% blasts. Bone marrow examination confirms acute megakaryoblastic leukaemia (AML-M7). Which of the following most accurately describes the genetic predisposition and its interaction with somatic mutations in this condition?",
    options: {
      A: "Trisomy 21 confers a 20- to 30-fold increased risk of acute leukaemia through dosage effects of genes on chromosome 21 that perturb normal haemopoiesis, and the leukaemia typically arises from cooperation between this germline predisposition and acquired somatic mutations.",
      B: "The transient myeloproliferative disorder seen in 10% of neonates with Down syndrome is identical to this presentation and always resolves spontaneously without progressing to acute leukaemia.",
      C: "The increased leukaemia risk is due to autosomal dominant inheritance of a RUNX1 mutation, which is genetically linked to the Down syndrome critical region on chromosome 21.",
      D: "Down syndrome patients develop leukaemia exclusively through inherited GATA2 deficiency, which is located on chromosome 21 and causes familial MDS/AML.",
      E: "The leukaemia is caused by a germline TP53 mutation (Li-Fraumeni syndrome), which occurs with increased frequency in patients with trisomy 21."
    },
    answer: "A",
    explanation: "Hoffbrand states that the incidence of leukaemia is greatly increased in Down syndrome, where a transient myeloproliferative disorder develops in 10% and acute leukaemia occurs with a 20- to 30-fold increased frequency. Trisomy 21 is a germline chromosomal abnormality that creates a permissive environment for leukaemogenesis through altered gene dosage of haemopoietic regulators on chromosome 21. The leukaemia that develops requires additional acquired somatic mutations, reflecting the multistep nature of malignant transformation described in Chapter 11. The transient myeloproliferative disorder of neonates with Down syndrome, while related, is a distinct entity that may resolve or progress; it is not identical to overt acute leukaemia in a 2-year-old. RUNX1 and GATA2 are separate germline predisposition genes located on chromosomes 21 and 3, respectively, and are not the basis of Down syndrome-related leukaemia predisposition."
  },
  {
    num: 153,
    stem: "A 6-year-old boy from rural Uganda presents with a rapidly enlarging jaw mass. Biopsy reveals a monotonous population of medium-sized lymphoid cells with a starry-sky appearance. Cytogenetics demonstrates t(8;14)(q24;q32). Epstein–Barr virus-encoded RNA (EBER) is positive in nearly all tumour cells. Which of the following best explains the cooperative pathogenesis and the precise molecular consequence of the translocation?",
    options: {
      A: "Chronic malaria alters host immunity and predisposes to EBV-driven B-cell proliferation; the t(8;14) juxtaposes MYC to the immunoglobulin heavy-chain (IgH) promoter on chromosome 14, causing constitutive overexpression of the normal MYC protein.",
      B: "EBV is directly cytopathic to B cells, causing cell lysis and reactive lymphoid hyperplasia that mimics lymphoma; the t(8;14) is an incidental passenger mutation with no oncogenic role.",
      C: "The translocation fuses MYC with BCL2, producing a chimeric oncoprotein that suppresses apoptosis in germinal centre B cells, analogous to the t(14;18) of follicular lymphoma.",
      D: "Malaria parasites directly insert their genome into chromosome 8, causing MYC amplification independent of EBV infection; the translocation is therefore a direct consequence of parasitaemia.",
      E: "The t(8;14) translocation is a consequence rather than a cause of the lymphoma, arising from chromosomal instability secondary to EBV infection and therefore carries no prognostic significance."
    },
    answer: "A",
    explanation: "Hoffbrand describes how endemic Burkitt lymphoma occurs in the tropics, particularly in malarial areas, and it is thought that malaria may alter host immunity and predispose to tumour formation as a result of EBV infection. The t(8;14) translocation is one of the classic examples of a translocation that causes overexpression of a normal cellular gene by moving it adjacent to an immunoglobulin locus. MYC is normally located on chromosome 8 and is translocated into proximity to the IgH gene on chromosome 14. Since the IgH gene is actively transcribed in B lymphocytes, the translocated MYC is expressed at high levels, driving uncontrolled proliferation. This mechanism is distinct from translocations that create fusion proteins, such as BCR::ABL1 in chronic myeloid leukaemia. BCL2 is involved in the t(14;18) of follicular lymphoma, not Burkitt lymphoma."
  },
  {
    num: 154,
    stem: "A 68-year-old man with JAK2V617F-positive polycythaemia vera has been stable on hydroxyurea for 4 years. He now presents with progressive splenomegaly, night sweats, and weight loss. Blood counts show white cell count 28 × 10⁹/L, haemoglobin 98 g/L, and platelets 420 × 10⁹/L. Bone marrow biopsy reveals 12% blasts and fibrosis. Next-generation sequencing identifies JAK2V617F (variant allele fraction 0.42), plus newly acquired mutations in ASXL1, IDH2, and SRSF2. Which of the following best describes the clonal evolution pattern and its clinical significance?",
    options: {
      A: "Branching evolution, in which subclones sharing the founding JAK2V617F mutation have independently acquired additional driver mutations, with the ASXL1/IDH2-bearing subclone now dominating due to its proliferative advantage.",
      B: "Linear evolution, in which the final leukaemic clone harbours all four mutations in a single cell line, and the original JAK2V617F clone has been completely replaced.",
      C: "Convergent evolution, in which four independent clones each acquired JAK2V617F separately, and the one with ASXL1 has outcompeted the others.",
      D: "The newly acquired mutations are all passenger mutations with no biological significance; the clinical progression is due solely to hydroxyurea resistance.",
      E: "The findings represent two separate malignancies: persistent polycythaemia vera and a newly acquired de novo acute myeloid leukaemia that coincidentally arose in the same patient."
    },
    answer: "A",
    explanation: "Hoffbrand Fig. 11.5b illustrates branching evolution, in which there is more than one clone of cells characterized by different somatic mutations, but which share at least one mutation traceable back to a single ancestral cell. In this patient, JAK2V617F is the founder mutation present in the original polycythaemia vera clone. The acquisition of additional mutations in ASXL1, IDH2, and SRSF2 in the context of clinical progression represents subclonal evolution consistent with the branching model. The variant allele fraction of 0.42 indicates heterozygous JAK2V617F in a mixed cellular population, and the clinical transformation suggests a dominant subclone has emerged. Linear evolution would require all mutations to be present in every tumour cell. Convergent evolution implies independent acquisition of the same driver mutation in separate clones, which is not the case here. Mutations in epigenetic regulators (ASXL1, IDH2) and splicing factors (SRSF2) are well-recognized drivers of disease progression in myeloproliferative neoplasms."
  },
  {
    num: 155,
    stem: "A 34-year-old woman undergoes allogeneic stem cell transplantation for relapsed Hodgkin lymphoma. Six months post-transplant, while on ciclosporin and mycophenolate mofetil for graft-versus-host disease prophylaxis, she develops fever, cervical lymphadenopathy, and elevated lactate dehydrogenase. Epstein–Barr virus viral load is markedly elevated. Lymph node biopsy shows diffuse proliferation of large atypical B cells positive for CD20 and Epstein–Barr virus-encoded RNA. Which of the following is the most accurate mechanistic explanation for this complication?",
    options: {
      A: "Immunosuppression impairs EBV-specific T-cell surveillance, allowing latent EBV-infected B cells to proliferate unchecked because the virus expresses genes that drive B-cell proliferation.",
      B: "EBV is directly cytopathic to B cells, causing cell lysis and reactive lymphoid hyperplasia that mimics lymphoma but is not a true clonal neoplasm.",
      C: "The ciclosporin itself is mutagenic to lymphocytes and induces BCL2 rearrangements identical to those seen in follicular lymphoma.",
      D: "This represents donor-derived lymphoma because the Hodgkin lymphoma has relapsed in the donor cells; EBV positivity is an incidental finding in the graft.",
      E: "The proliferation is a normal graft-versus-host reaction mediated by donor T cells against recipient B cells, and reduction of immunosuppression would worsen the outcome."
    },
    answer: "A",
    explanation: "Hoffbrand describes how EBV is associated with post-transplant lymphoproliferative disease (PTLD), endemic Burkitt lymphoma, and a proportion of Hodgkin lymphoma and diffuse large B-cell lymphoma cases. The latent virus expresses certain genes to maintain itself, but this gene expression may drive B-cell proliferation. This is held in check by EBV-specific T cells, but immunosuppressed subjects, such as after organ transplantation or stem cell transplantation, are unable to mount a T-cell response and a B-cell lymphoproliferative disease results. This is the fundamental mechanism underlying PTLD in the post-transplant setting. The treatment involves reduction of immunosuppression and, in many cases, anti-CD20 monoclonal antibody therapy. The other options misrepresent the biology: EBV is not primarily cytopathic to B cells, ciclosporin is not directly mutagenic in this manner, and this is neither graft-versus-host disease nor donor-derived lymphoma."
  },
  {
    num: 156,
    stem: "Regarding the distinction between driver and passenger mutations in haematological neoplasia, which of the following statements is most accurate?",
    options: {
      A: "Driver mutations confer a selective growth advantage and are found in the cancer more often than would be expected by chance; passenger mutations are coincidental neutral genetic changes that do not confer a growth advantage.",
      B: "All somatic mutations detected in a leukaemia sample are driver mutations because the malignant clone has been positively selected for every mutation it carries.",
      C: "Driver mutations are exclusively point mutations, whereas passenger mutations are exclusively chromosomal translocations and deletions.",
      D: "Passenger mutations are always subclonal, whereas driver mutations are always present in 100% of tumour cells at diagnosis.",
      E: "The number of passenger mutations in a typical haematological malignancy exceeds 1000, whereas driver mutations number fewer than 5 in all cases."
    },
    answer: "A",
    explanation: "Hoffbrand explicitly defines driver mutations as those that confer a selective growth advantage to a cancer cell, also defined as mutations that are found in the cancer more often than would be expected by chance. Passenger mutations, conversely, do not confer a growth advantage and may have already been coincidentally present in the cell from which the cancer arose, or may subsequently arise as a neutral genetic change in the proliferating cell. The textbook emphasizes that targeted drug treatments should be directed against the activity of driver mutations. The number of DNA mutations varies widely from over 100 in some cancers to about 10 in most haematological malignancies. Both driver and passenger mutations can be of any molecular type, including point mutations, translocations, and deletions, and their clonality depends on when they were acquired during tumour evolution."
  },
  {
    num: 157,
    stem: "Which of the following best describes the two principal mechanisms by which chromosomal translocations contribute to malignant transformation in haematological neoplasms, with accurate representative examples?",
    options: {
      A: "(1) Juxtaposition of parts of two genes to generate a chimeric fusion gene encoding a novel fusion protein, exemplified by BCR::ABL1 in t(9;22); and (2) overexpression of a normal cellular gene by its translocation adjacent to an immunoglobulin or T-cell receptor locus, exemplified by MYC overexpression in t(8;14) Burkitt lymphoma.",
      B: "Both mechanisms always generate fusion proteins; the only difference is whether the fusion partner is a tyrosine kinase or a transcription factor.",
      C: "Translocations exclusively cause loss of tumour-suppressor genes by deleting the intervening chromosomal material; examples include TP53 loss in 17p deletion and RB1 loss in 13q deletion.",
      D: "All translocations in haematological malignancies involve the immunoglobulin heavy-chain locus on chromosome 14 because V(D)J recombination is the universal mechanism for all lymphoid and myeloid malignancies.",
      E: "Translocations cause malignant transformation by inducing genomic instability through disruption of telomeres; the specific genes involved are irrelevant to the oncogenic effect."
    },
    answer: "A",
    explanation: "Hoffbrand Fig. 11.10 illustrates the two possible mechanisms by which chromosomal translocations can lead to dysregulated expression of an oncogene. The first is juxtaposition of parts of two genes normally far away from each other to generate a chimeric fusion gene that encodes a novel fusion protein, exemplified by BCR::ABL1 in t(9;22) in chronic myeloid leukaemia, PML::RARA in t(15;17) in acute promyelocytic leukaemia, and ETV6::RUNX1 in t(12;21) in B-acute lymphoblastic leukaemia. The second is overexpression of a normal cellular gene, exemplified by BCL2 in t(14;18) follicular lymphoma and MYC in Burkitt lymphoma. This latter class nearly always involves an immunoglobulin gene or T-cell receptor locus, presumably as a result of aberrant activity of recombinase enzymes in immature B or T cells. Since these loci are actively transcribed in lymphocytes, the translocated gene is expressed at high levels."
  },
  {
    num: 158,
    stem: "Regarding epigenetic alterations in the aetiology of myeloid malignancies, which of the following statements most accurately integrates the roles of DNA methylation, histone modification, and the genes involved?",
    options: {
      A: "Cytosine methylation (mediated by DNMT3A) is usually inhibitory to gene transcription; TET2 and IDH1/2 are involved in demethylation of cytosine residues; mutations in any of these genes lead to aberrant DNA methylation patterns and dysregulated gene expression.",
      B: "DNA methylation always activates gene transcription by recruiting RNA polymerase II to promoter regions; DNMT3A mutations therefore cause global transcriptional activation and proto-oncogene overexpression.",
      C: "Histone acetylation compacts chromatin and prevents transcription factor access; deacetylation therefore increases gene expression, which is why histone deacetylase inhibitors are used to upregulate tumour-suppressor genes.",
      D: "The KMT2A (MLL) gene product demethylates histone lysine residues, reducing gene expression; KMT2A translocations therefore cause loss of function and decreased self-renewal of haemopoietic progenitors.",
      E: "Azacitidine and decitabine are histone deacetylase inhibitors that increase histone acetylation; they have no effect on DNA methylation and work purely through chromatin relaxation."
    },
    answer: "A",
    explanation: "Hoffbrand describes the two major epigenetic mechanisms in myeloid malignancies. First, methylation of cytosine residues (mediated by DNMT3A) in DNA is usually inhibitory to gene transcription. The products of TET2 and IDH1/2 genes are involved in the demethylation of cytosine residues, and like DNMT3A these are often mutated in the myeloid malignancies. Second, genomic DNA is wrapped around histones, and access to DNA is controlled by modification of histones such as methylation, acetylation and phosphorylation. Abnormalities of these processes lead to aberrant gene transcription. KMT2A methylates specific lysine residues in histone tails, allowing increased gene expression; KMT2A translocations cause aberrant histone methylation that increases self-renewal of haemopoietic progenitors. Demethylating agents such as azacitidine and decitabine alter gene transcription and are valuable in treating MDS and AML by reversing abnormal DNA methylation, not by inhibiting histone deacetylases."
  },
  {
    num: 159,
    stem: "Regarding patterns of clonal evolution in haematological malignancies, which of the following statements most accurately distinguishes linear from branching evolution and their clinical implications?",
    options: {
      A: "Linear evolution generates a single final clone harbouring all mutations that arose during tumour evolution, whereas branching evolution produces multiple subclones sharing a common ancestral mutation but characterized by different somatic mutations; treatment may selectively kill some subclones while allowing resistant subclones to expand.",
      B: "Linear evolution is always associated with indolent disease, whereas branching evolution is the defining feature of high-grade transformation and is exclusively seen in acute leukaemia.",
      C: "Branching evolution occurs only in solid tumours and is never observed in leukaemia because leukaemic cells circulate and therefore cannot form spatially separated clones.",
      D: "Linear evolution implies that all mutations are passenger mutations, whereas branching evolution implies that all mutations are driver mutations acquired in parallel.",
      E: "Convergent evolution and branching evolution are synonymous terms describing the same pattern of clonal diversification in response to chemotherapy."
    },
    answer: "A",
    explanation: "Hoffbrand Fig. 11.5a illustrates linear evolution, in which successive mutations lead to growth advantage of one clone and the final clone harbours all the mutations that arose during evolution. Fig. 11.5b illustrates branching evolution, in which subclones arise at different stages of tumour evolution, sharing at least one common founder mutation but characterized by different somatic mutations. During treatment, selection of subclones may occur as anti-cancer therapy selectively kills some subclones but allows others to survive and new clones to appear. The presence of mutations conferring resistance to chemotherapy allows some neoplastic subclones to persist and expand. Convergent evolution is a distinct concept referring to independent clones expanding after acquiring the same or very similar mutation, reflecting the particular advantage of that mutation to the cancer cell. Both linear and branching evolution are observed in all types of haematological malignancies."
  },
  {
    num: 160,
    stem: "Which of the following most accurately describes the functional relationship between oncogenes and tumour-suppressor genes in normal cell proliferation, and the molecular consequences of their respective mutations in haematological malignancies?",
    options: {
      A: "In normal cells, proto-oncogenes and tumour-suppressor genes exist in a balanced regulatory equilibrium controlling proliferation and apoptosis; oncogenic mutations cause gain-of-function, while tumour-suppressor gene mutations cause loss-of-function, often inactivating cell cycle checkpoints.",
      B: "Proto-oncogenes normally suppress proliferation, and their mutation leads to loss-of-function; tumour-suppressor genes promote proliferation, and their mutation causes gain-of-function.",
      C: "Both oncogenes and tumour-suppressor genes encode tyrosine kinases; the distinction is that oncogenic tyrosine kinases are membrane-bound receptors, whereas tumour-suppressor tyrosine kinases are cytoplasmic.",
      D: "TP53 is the most frequently activated oncogene in haematological neoplasia, typically through point mutations that increase its transcriptional activity and drive uncontrolled proliferation.",
      E: "Loss-of-function mutations in proto-oncogenes are the most common genetic event in haematological malignancies, whereas tumour-suppressor genes are rarely involved because their inactivation has no effect on haemopoiesis."
    },
    answer: "A",
    explanation: "Hoffbrand Fig. 11.4 illustrates that proliferation of normal cells depends on a balance between the action of proto-oncogenes and tumour-suppressor genes. In a malignant cell, this balance is disturbed, leading to uncontrolled cell division. Oncogenes arise from gain-of-function mutations or inappropriate expression of proto-oncogenes, affecting cell signalling, differentiation and survival. Examples include constitutively active tyrosine kinases such as BCR::ABL1, JAK2V617F, and FLT3 internal tandem duplication. Tumour-suppressor genes, such as TP53, commonly act as components of control mechanisms regulating cell cycle entry and passage; they are inactivated by mutation or deletion. TP53 is inactivated in over 50% of cases of malignant disease, including many haemopoietic neoplasias, especially those related to prior exposure to alkylating agents or radiation. The distinction between gain-of-function oncogene activation and loss-of-function tumour-suppressor inactivation is fundamental to understanding targeted therapy and the multistep pathogenesis of haematological malignancies."
  }
];
