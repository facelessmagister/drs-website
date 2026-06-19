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
  },
  {
    num: 441,
    stem: "A 48-year-old man who has worked for 22 years as a chemical plant operator with chronic exposure to benzene presents with fatigue, recurrent infections, and easy bruising. Full blood count reveals haemoglobin 78 g/L, white cell count 2.1 × 10⁹/L, neutrophils 0.6 × 10⁹/L, and platelets 34 × 10⁹/L. Bone marrow shows 12% myeloblasts, dysplastic erythropoiesis, and a normal karyotype. Next-generation sequencing reveals mutations in ASXL1, TET2, and SRSF2 but no TP53 mutation. Which of the following best integrates the aetiological agent, its mechanism, and the expected genetic profile?",
    options: {
      A: "Chronic benzene exposure is a known genotoxic cause of myelodysplasia and acute myeloid leukaemia; the absence of TP53 mutation and complex karyotype distinguishes it from alkylating-agent-related disease, while myeloid-gene mutations reflect the clonal evolution of benzene-induced haemopoietic injury.",
      B: "Benzene is a passenger environmental exposure with no causal role; the pancytopenia reflects direct cytotoxic marrow suppression rather than a clonal neoplasm.",
      C: "The presentation is typical of therapy-related myeloid neoplasm following radiotherapy, as benzene exposure primarily causes lymphoid rather than myeloid malignancies.",
      D: "The normal karyotype and absence of TP53 mutation indicate an inherited predisposition such as Fanconi anaemia, not an occupational chemical exposure.",
      E: "ASXL1, TET2, and SRSF2 mutations are pathognomonic for benzene-induced AML and are never seen in de novo or age-related clonal haemopoiesis."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, identifies chronic exposure to industrial solvents or chemicals such as benzene as a known but now fortunately rare cause of myelodysplastic syndromes (MDS) or acute myeloid leukaemia (AML). Unlike alkylating-agent or radiation-related myeloid neoplasms, which typically show complex karyotypes and TP53 mutations, benzene-related disease may present with myelodysplastic features and mutations in genes commonly involved in clonal evolution of myeloid neoplasms such as ASXL1, TET2, and splicing factors. The clinical scenario reflects a genotoxic occupational exposure leading to clonal haemopoietic transformation."
  },
  {
    num: 442,
    stem: "A 9-year-old girl previously treated 4 years ago for B-cell acute lymphoblastic leukaemia with an etoposide- and anthracycline-containing protocol now presents with fatigue and pancytopenia. Bone marrow aspirate shows 35% myeloblasts with a monocytic component. Cytogenetics reveals a translocation involving chromosome 11q23. Molecular testing confirms a KMT2A::MLLT3 (AF9) rearrangement. Which of the following best explains the relationship between her prior therapy and the current leukaemia?",
    options: {
      A: "Etoposide and anthracyclines are topoisomerase II inhibitors that increase the risk of double-strand breaks at the KMT2A (MLL) locus, leading to balanced translocations characteristic of therapy-related AML.",
      B: "The KMT2A rearrangement indicates relapse of her original B-ALL with lineage switch, requiring lymphoid-directed therapy rather than AML induction.",
      C: "Anthracyclines cause alkylating-agent-like DNA cross-links that produce monosomy 7 and TP53 mutations, not balanced KMT2A translocations.",
      D: "Etoposide directly activates the KMT2A promoter by histone demethylation, causing overexpression rather than chromosomal translocation.",
      E: "The second leukaemia is coincidental and unrelated to therapy because the latency of 4 years exceeds the typical window for treatment-related myeloid neoplasia."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that etoposide and other topoisomerase inhibitors including anthracyclines are associated with a risk of the development of secondary leukaemia associated with balanced translocations including that of the KMT2A (MLL) gene at 11q23. Topoisomerases create double-strand breaks, relaxing overwound DNA; inhibitors of the enzyme increase the chances of these free ends participating in translocations. This mechanism is distinct from alkylating-agent-related myeloid neoplasms, which are characterized by complex karyotypes with monosomy 5, monosomy 7, and TP53 mutations."
  },
  {
    num: 443,
    stem: "A 56-year-old man born in Jamaica presents with hypercalcaemia, widespread lymphadenopathy, lytic bone lesions, and a white cell count of 82 × 10⁹/L with 45% pleomorphic lymphoid cells showing convoluted nuclei ('flower cells'). Serology is positive for human T-lymphotropic virus type 1 (HTLV-1). Bone marrow biopsy confirms CD4-positive T-cell leukaemia/lymphoma. Which of the following best describes the aetiological role of HTLV-1 in this condition?",
    options: {
      A: "HTLV-1 is the causative retrovirus of adult T-cell leukaemia/lymphoma; although most infected individuals do not develop the neoplasm, the virus drives T-cell proliferation through its oncogenic proteins.",
      B: "HTLV-1 causes direct cytopathic T-cell lysis, and the leukaemic infiltrate represents a reactive lymphoproliferation rather than a true clonal malignancy.",
      C: "The association is purely geographical and coincidental; endemic HTLV-1 infection has no proven role in T-cell leukaemogenesis.",
      D: "HTLV-1 transforms T cells by inserting its genome adjacent to the T-cell receptor β-locus, causing constitutive MYC overexpression analogous to Burkitt lymphoma.",
      E: "The virus is a passenger infection acquired because of immunosuppression from the leukaemia, not an initiating oncogenic agent."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes how the retrovirus human T-lymphotropic virus type 1 (HTLV-1) is the cause of adult T-cell leukaemia/lymphoma (ATLL), although most people infected with the HTLV-1 virus do not develop a neoplasm. The clinical triad of hypercalcaemia, lytic bone lesions, and circulating flower cells in a patient from an HTLV-1-endemic region is characteristic of ATLL. The virus exerts its oncogenic effect through viral proteins that drive T-cell proliferation and survival, reflecting a viral aetiology distinct from the immunoglobulin-locus translocations seen in B-cell lymphomas."
  },
  {
    num: 444,
    stem: "A 52-year-old woman with long-standing dyspepsia undergoes gastroscopy, which reveals gastric mucosal erythema and a small ulcer. Biopsy of the mucosa shows a dense diffuse infiltrate of small lymphoid cells with lymphoepithelial lesions. Immunohistochemistry demonstrates CD20-positive B cells restricted to κ light chain, and Helicobacter pylori organisms are identified on special stain. Which of the following best explains the pathogenesis and therapeutic implication?",
    options: {
      A: "Chronic H. pylori infection drives antigen-dependent proliferation of gastric mucosa-associated lymphoid tissue (MALT) B cells, and eradication of the organism can lead to lymphoma remission in many cases.",
      B: "H. pylori is a passenger organism in the gastric mucosa; the lymphoma is driven exclusively by t(14;18) BCL2 rearrangement requiring chemotherapy.",
      C: "The lymphoepithelial lesions indicate transformation to diffuse large B-cell lymphoma, which is no longer responsive to antibiotic therapy.",
      D: "CD20-restricted light-chain expression reflects a reactive polyclonal infiltrate rather than a clonal B-cell neoplasm.",
      E: "H. pylori causes MALT lymphoma by inserting bacterial DNA into the BCL6 locus, producing a fusion oncoprotein."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that Helicobacter pylori infection has been implicated in the pathogenesis of gastric mucosa B-cell (MALT) lymphoma and antibiotic treatment may even bring about disease remission without the need for chemotherapy. The presence of lymphoepithelial lesions, a clonal B-cell population evidenced by light-chain restriction, and associated H. pylori organisms are characteristic of gastric MALT lymphoma. This exemplifies a bacterial infection driving lymphomagenesis through chronic antigenic stimulation, with disease control achievable by eradicating the underlying infectious agent."
  },
  {
    num: 445,
    stem: "A 29-year-old woman with a history of oral leukoplakia, nail dystrophy, and bone marrow failure since childhood is found to have very short telomeres in both lymphocytes and granulocytes. She now develops cytogenetic abnormalities including monosomy 7 in the marrow and is diagnosed with myelodysplastic syndrome. Which of the following best integrates the germline defect, its cellular consequence, and the risk of neoplastic progression?",
    options: {
      A: "Germline mutations in components of the telomere complex cause dyskeratosis congenita, which shortens telomeres and predisposes to haematological neoplasms such as MDS through impaired stem-cell renewal and genomic instability.",
      B: "Short telomeres are a consequence rather than a cause of MDS; the patient's germline disorder is coincidental and does not increase leukaemia risk.",
      C: "Dyskeratosis congenita is caused by germline TP53 mutations identical to those in Li-Fraumeni syndrome, explaining the early-onset MDS.",
      D: "The nail dystrophy and oral leukoplakia are direct toxic effects of chemotherapy she received in childhood; the MDS is therefore therapy-related rather than germline-predisposed.",
      E: "Telomerase deficiency causes excessive telomere elongation, leading to uncontrolled stem-cell proliferation and myeloid transformation."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes how telomeres are repetitive sequences at the ends of chromosomes that decrease with each cell replication, and germline mutations in components of the telomere complex cause dyskeratosis congenita, which predisposes to haematological neoplasms. Patients with dyskeratosis typically have telomere lengths in both lymphocytes and granulocytes that are less than the second percentile for age. The clinical triad of mucocutaneous features, bone marrow failure, and short telomeres identifies a telomere biology disorder, and the development of monosomy 7 in this context reflects the increased risk of myeloid neoplasia associated with these inherited defects."
  },
  {
    num: 446,
    stem: "Regarding the role of tyrosine kinases in the pathogenesis of haematological malignancies and their value as therapeutic targets, which of the following statements is most accurate?",
    options: {
      A: "Tyrosine kinases phosphorylate proteins on tyrosine residues and regulate proliferation, transcription, translation, energy metabolism and differentiation; mutations or altered expression leading to unregulated kinase activation underlie many haematological malignancies and are targetable with tyrosine kinase inhibitors.",
      B: "Tyrosine kinases are exclusively nuclear transcription factors; their mutation causes lymphoid but not myeloid malignancies.",
      C: "All haematological tyrosine kinase targets are receptor tyrosine kinases on the cell surface; cytoplasmic kinases such as JAK2 and ABL1 are not therapeutically relevant.",
      D: "Tyrosine kinase inhibitors work by restoring the wild-type kinase sequence; they are gene-editing agents rather than ATP-competitive inhibitors.",
      E: "BCR::ABL1, JAK2V617F, FLT3-ITD, KIT, and BTK mutations are passenger mutations with no selective growth advantage and therefore are not suitable drug targets."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that tyrosine kinases are enzymes which phosphorylate proteins on tyrosine residues, exist as cell-surface receptors or cytoplasmic signalling mediators, and regulate core cellular activities including proliferation, transcription, translation, energy metabolism and differentiation. Mutations or altered expression leading to unregulated activation of the kinase and downstream signalling pathways underlie a large number of haematological malignancies. Tyrosine kinase inhibitors are therefore extremely effective drugs targeting ABL1 in chronic myeloid leukaemia, JAK2 in myeloproliferative neoplasms, FLT3 in AML, KIT in systemic mastocytosis and AML, PDGFRA in eosinophilic myeloproliferative disorders, and Bruton tyrosine kinase (BTK) in chronic lymphocytic leukaemia and other B-cell lymphoproliferative disorders."
  },
  {
    num: 447,
    stem: "Regarding the hierarchy of sensitivity of techniques used to detect minimal residual disease (MRD) in haematological neoplasia, which of the following sequences is most accurate?",
    options: {
      A: "Morphology is least sensitive, followed by flow cytometry, then FISH, with PCR and NGS the most sensitive; modern molecular methods can detect 1 leukaemic cell in up to 10⁶ normal cells.",
      B: "FISH is the most sensitive technique, followed by morphology, then PCR, and finally flow cytometry.",
      C: "Flow cytometry and morphology have equal sensitivity because both rely on visual identification of cells.",
      D: "PCR-based MRD is less sensitive than conventional cytogenetics and is only useful when a clonal chromosomal translocation is present.",
      E: "NGS-based MRD requires no prior knowledge of the diagnostic mutation and cannot achieve sensitivity beyond 1 in 10³ cells."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, Fig. 11.15 illustrates the sensitivity of detection of leukaemic cells in bone marrow using four different techniques, with morphology being least sensitive and PCR/NGS techniques the most sensitive, reaching 1 in 10⁶ cells. The text describes MRD detection by cytogenetic analysis (FISH), flow cytometry using leukaemia-specific immunophenotypes, PCR and/or sequence analysis for tumour-specific translocations or mutations, and NGS to detect whether mutations found at diagnosis persist in remission. Improvements in technical efficiency have improved techniques to 1 in 10⁶ cells, with NGS-based methods requiring specific techniques such as unique molecular identifiers to achieve adequate sensitivity."
  },
  {
    num: 448,
    stem: "Regarding loss of heterozygosity (LOH) and acquired uniparental disomy (aUPD) in haematological malignancies, which of the following statements is most accurate?",
    options: {
      A: "LOH results from loss of one parental allele or replacement by duplication of the other allele; aUPD can arise from mitotic recombination, and FLT3 internal tandem duplications in AML are often duplicated by aUPD.",
      B: "LOH always requires large chromosomal deletions and cannot occur by any mechanism other than physical loss of genetic material.",
      C: "aUPD increases heterozygosity by introducing a new allele from a different chromosome.",
      D: "FLT3-ITD is never associated with aUPD; the duplication is always present as a heterozygous mutation on a single chromosome.",
      E: "LOH is exclusively a germline phenomenon and is not observed in somatic cancer cells."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that loss of heterozygosity (LOH) occurs when cells display only one allele in areas of the genome, one allele being lost either by deletion or by replacement by the other allele which is duplicated, a situation termed acquired uniparental disomy (aUPD). This is a result of crossing over between two homologous chromosomes at mitosis (mitotic recombination). FLT3 internal tandem duplications in AML are often duplicated by aUPD. This mechanism can unmask recessive mutations or amplify the copy number of an activating allele, contributing to malignant transformation."
  },
  {
    num: 449,
    stem: "Regarding the role of microRNAs in the pathogenesis of haematological neoplasia, which of the following statements is most accurate?",
    options: {
      A: "MicroRNAs are short non-coding RNA sequences that control expression of adjacent or distally located genes; deletion of the miR15a/miR16-1 locus may be relevant to CLL development with the common 13q14 deletion.",
      B: "MicroRNAs are translated into small regulatory peptides that directly inhibit DNA polymerase during replication.",
      C: "Chromosomal abnormalities cannot alter microRNA expression; miRNA loci are protected from deletion and amplification.",
      D: "The 13q14 deletion in CLL causes loss of BCL2, explaining the indolent behaviour of this cytogenetic subgroup.",
      E: "MicroRNAs activate gene expression by binding to promoter regions and recruiting RNA polymerase II."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, describes how chromosomal abnormalities, both deletions and amplifications, can result in loss or gain of short (micro) RNA sequences. These sequences are normally transcribed but not translated, and microRNAs control expression of adjacent or distally located genes. Deletion of the miR15a/miR16-1 locus may be relevant to CLL development with the common 13q14 deletion, and deletions of other microRNAs have been described in AML and other haematological neoplasms. This illustrates how non-coding genetic elements contribute to dysregulated gene expression in haematological malignancies."
  },
  {
    num: 450,
    stem: "Regarding the 46/1 haplotype and germline predisposition to myeloproliferative neoplasms, which of the following statements is most accurate?",
    options: {
      A: "The JAK2V617F mutation is more frequent in individuals who have inherited the 46/1 haplotype; this haplotype is present in about 25% of the population and confers a 3–4-fold increased risk of myeloproliferative disease.",
      B: "The 46/1 haplotype is a somatic mutation acquired in haemopoietic stem cells and is not present in the germline genome.",
      C: "Inheritance of the 46/1 haplotype guarantees development of a myeloproliferative neoplasm because it directly causes constitutive JAK2 activation.",
      D: "The 46/1 haplotype is located within the JAK2 coding sequence and produces the V617F amino acid substitution in all carriers.",
      E: "CALR mutations are restricted to individuals with the 46/1 haplotype, whereas JAK2V617F occurs independently of this haplotype."
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition, states that certain haplotypes may predispose to neoplastic transformation, and that the JAK2V617F mutation is more frequent in the 25% of the population who have inherited the haplotype called 46/1; these 25% have a 3–4 increased risk of developing myeloproliferative disease. This illustrates a germline variant that influences the likelihood of acquiring a specific somatic driver mutation, distinct from a coding-sequence mutation or a deterministic inherited syndrome. It emphasizes the interplay between inherited genetic background and acquired somatic mutations in the aetiology of haematological neoplasms."
  }
];
