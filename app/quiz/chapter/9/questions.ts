export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 131,
    stem: "A 22-year-old woman presents with a 10-day history of fever, sore throat, and bilateral cervical lymphadenopathy. Physical examination reveals palpable splenomegaly and pharyngeal erythema with follicular tonsillitis. Laboratory studies show a white cell count of 16 × 10⁹/L with 55% atypical lymphocytes. Monospot test is positive. Which statement best explains the immunopathological basis of the atypical lymphocytosis observed in her peripheral blood film?",
    options: {
      A: "EBV directly infects CD8+ cytotoxic T cells, causing their morphological transformation into atypical forms.",
      B: "The atypical lymphocytes represent polyclonal expansions of CD8+ T cells reacting against EBV-infected B lymphocytes.",
      C: "The atypical cells are EBV-transformed B lymphoblasts that have acquired the morphological features of activated T cells.",
      D: "Atypical lymphocytosis reflects an acute cytokine storm driven primarily by IL-4 and IL-10 from Th2 cells.",
      E: "The morphological changes are caused by amoxicillin-induced immune complexes cross-reacting with T-cell surface antigens."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), infectious mononucleosis is caused by primary EBV infection and is characterized by fever, sore throat, lymphadenopathy and atypical lymphocytes in the blood. The disease is associated with a lymphocytosis caused by clonal expansions of T cells reacting against B lymphocytes infected with EBV. The atypical lymphocytes are predominantly activated CD8+ cytotoxic T cells responding to EBV-infected B cells, not the EBV-infected B cells themselves. Option A is incorrect because EBV primarily infects B cells via the CD21 receptor, not CD8+ T cells. Option C is wrong because the atypical cells are T cells, not transformed B lymphoblasts. Option D is incorrect because the lymphocytosis is driven by T-cell activation against infected B cells, not a Th2 cytokine storm. Option E is incorrect because although amoxicillin can cause a rash in infectious mononucleosis, it does not cause atypical lymphocytosis."
  },
  {
    num: 132,
    stem: "A 3-year-old boy is referred because of recurrent sinopulmonary infections with encapsulated bacteria (Streptococcus pneumoniae and Haemophilus influenzae) since infancy. Serum immunoglobulin levels are markedly reduced: IgG <0.2 g/L, IgA undetectable, IgM <0.1 g/L. Flow cytometry reveals less than 1% CD19+ peripheral blood B cells. A hemizygous mutation is identified in BTK. Which molecular consequence of this mutation best explains the clinical and immunological phenotype?",
    options: {
      A: "Failure of V(D)J recombination at the immunoglobulin heavy-chain locus on chromosome 14.",
      B: "Defective signal transduction from the B-cell receptor (BCR) during early B-cell ontogeny in the bone marrow.",
      C: "Impaired class-switch recombination from IgM to IgG in mature B cells within germinal centres.",
      D: "Inability of mature B cells to differentiate into antibody-secreting plasma cells in response to T-cell help.",
      E: "Defective somatic hypermutation of immunoglobulin variable-region genes in centroblasts."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), X-linked agammaglobulinaemia is due to an inherited defect of the enzyme Bruton tyrosine kinase (BTK), which is characterized by failure of B-cell development. BTK is a critical downstream kinase in BCR signalling (Fig. 9.4): after antigen binding, PI3K generates PIP3, which activates BTK, leading to AKT activation and cell survival. A BTK mutation disrupts this signal transduction pathway during early B-cell development in the bone marrow, preventing progression from pro-B to pre-B and mature B-cell stages (Fig. 9.8). This explains the absence of circulating B cells and severe hypogammaglobulinaemia. Option A is incorrect because V(D)J recombination defects cause severe combined immunodeficiency (SCID) or other combined immunodeficiencies, not X-linked agammaglobulinaemia. Option C is incorrect because class-switch recombination defects (e.g. CD40L deficiency) occur in mature B cells and do not abolish all B-cell development. Option D is incorrect because plasma cell differentiation requires prior B-cell maturation, which is already blocked. Option E is incorrect because somatic hypermutation occurs in germinal centre centroblasts, a stage never reached by BTK-deficient B cells."
  },
  {
    num: 133,
    stem: "A 48-year-old man presents with painless left-sided cervical lymphadenopathy of 6 weeks' duration. A contrast-enhanced CT scan of the neck shows a solitary lymph node measuring 2.8 cm in short-axis diameter with a rounded contour and loss of the fatty hilum. There is no necrosis or hypervascularity. Which feature of this CT appearance is MOST suggestive of underlying malignancy rather than a reactive process?",
    options: {
      A: "The absence of necrosis or hypervascularity within the node.",
      B: "The loss of the normal fatty hilum and rounded contour of the node.",
      C: "The solitary nature of the enlarged node without clustering.",
      D: "The short-axis diameter of 2.8 cm in a cervical nodal station.",
      E: "The lack of pain or tenderness reported by the patient."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), CT criteria suggesting a 'normal' or reactive lymph node include: short axis diameter <1 cm, normal architecture (elongated, fatty hilum, not round or indistinct), normal enhancement (no necrosis or hypervascularity), and normal number of nodes. The loss of the fatty hilum and rounding of the node contour represent architectural distortion, which is a highly suspicious feature for malignant infiltration (e.g. lymphoma or metastatic carcinoma). Option A is incorrect because absence of necrosis or hypervascularity is actually a feature of normal/reactive nodes. Option C is incorrect because a solitary enlarged node can occur in both reactive and malignant conditions. Option D is incorrect because while size >1 cm is abnormal, size alone is less specific than architectural changes for distinguishing malignancy from reactive hyperplasia. Option E is incorrect because pain or tenderness can occur in both reactive (infectious) and rapidly expanding malignant nodes."
  },
  {
    num: 134,
    stem: "A 34-year-old man, day 90 post-allogeneic haematopoietic stem cell transplantation for acute myeloid leukaemia, develops refractory cytomegalovirus (CMV) viraemia despite maximal antiviral therapy. His transplant physicians are considering infusing donor-derived CMV-specific T lymphocytes. Which principle underlies the therapeutic rationale for this adoptive cellular therapy?",
    options: {
      A: "The infused T cells will produce neutralizing antibodies against CMV that opsonize virally infected cells for macrophage phagocytosis.",
      B: "The virus-specific T cells recognize CMV peptides presented on HLA class I molecules of infected host cells and mediate direct cytotoxicity.",
      C: "The donor T cells will secrete high concentrations of IL-4 and IL-10 to suppress CMV replication through Th2-mediated humoral immunity.",
      D: "The adoptively transferred T cells function primarily by activating the classical complement pathway to lyse CMV-infected cells.",
      E: "The therapy relies on NK cell antibody-dependent cell-mediated cytotoxicity (ADCC) triggered by anti-CMV immunoglobulin coating of infected cells."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), T cells with particular antigen specificity can be harvested from a healthy donor and infused into a patient to control an infection. This is being used to treat difficult post-allogeneic stem cell transplant viral infections, such as cytomegalovirus and Epstein–Barr virus. CD8+ cytotoxic T cells recognize antigen in the form of short peptides held on the surface of HLA class I molecules (Figs. 9.3b and 9.11); upon recognition, they mediate direct cytotoxic killing of the infected target cell. Option A is incorrect because T cells do not produce antibodies—this is the function of B cells and plasma cells. Option C is incorrect because IL-4 and IL-10 are Th2 cytokines that provide help for antibody production, not direct antiviral cytotoxicity. Option D is incorrect because T cells do not activate the classical complement pathway; complement is activated by antibody-antigen complexes or lectin/alternate pathways (Fig. 9.10). Option E is incorrect because although ADCC is a valid NK cell mechanism, adoptive T-cell therapy specifically uses the T-cell receptor (TCR)-mediated cytotoxicity of antigen-specific T cells, not NK cell ADCC."
  },
  {
    num: 135,
    stem: "A 68-year-old man with relapsed mantle cell lymphoma is treated with ibrutinib. After 4 months of therapy, he develops recurrent sinopulmonary bacterial infections. Which statement best explains the mechanism by which ibrutinib predisposes to these infections?",
    options: {
      A: "Ibrutinib inhibits phosphoinositide 3-kinase (PI3K), preventing B-cell receptor internalization and antigen processing.",
      B: "Ibrutinib blocks Bruton tyrosine kinase (BTK), an essential downstream mediator of B-cell receptor survival signalling required for normal B-cell maturation and antibody production.",
      C: "Ibrutinib prevents somatic hypermutation of immunoglobulin variable-region genes in germinal centre centroblasts.",
      D: "Ibrutinib inhibits recombinase activating gene (RAG) enzymes, blocking V(D)J recombination in bone marrow pro-B cells.",
      E: "Ibrutinib interferes with CD40-CD40L co-stimulation, abolishing T-cell-dependent B-cell activation and class switching."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.4), ibrutinib is a BTK inhibitor used in B-cell neoplasms. BTK is a critical downstream enzyme in B-cell receptor (BCR) signalling: PI3K produces PIP3, which activates BTK, leading to AKT activation and pro-survival signalling. BTK is also the enzyme defective in X-linked agammaglobulinaemia. By inhibiting BTK, ibrutinib not only kills malignant B cells but also impairs normal B-cell receptor signalling, leading to secondary hypogammaglobulinaemia and increased susceptibility to bacterial infections (Table 9.4). Option A is incorrect because ibrutinib inhibits BTK, not PI3K (idelalisib inhibits PI3K). Option C is incorrect because somatic hypermutation is not the primary target of ibrutinib. Option D is incorrect because RAG enzymes are not affected by ibrutinib. Option E is incorrect because CD40-CD40L interaction is not the target of ibrutinib."
  },
  {
    num: 136,
    stem: "In the germinal centre reaction, activated B cells migrate to the dark zone as centroblasts, where they undergo somatic hypermutation of their immunoglobulin variable-region genes. Their progeny, centrocytes, then migrate to the light zone. Which statement best describes the fate of centrocytes that fail to bind antigen with sufficient affinity on follicular dendritic cells (FDCs)?",
    options: {
      A: "They undergo receptor editing to replace their light-chain genes and improve antigen affinity.",
      B: "They are rescued from apoptosis by signals from CD4+ T helper cells regardless of antigen binding.",
      C: "They undergo apoptosis unless selected by antigen on FDCs and receive survival signals from antigen-specific T cells.",
      D: "They immediately differentiate into long-lived memory B cells without further antigen selection.",
      E: "They revert to the naïve B-cell phenotype and recirculate to the peripheral blood."
    },
    answer: "C",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.13), in the germinal centre, B cells activated by antigen undergo massive proliferation. Cells enter the dark zone as centroblasts and accumulate mutations in their immunoglobulin V genes. Cells then pass back into the light zone as centrocytes. Only those cells that can interact with antigen on follicular dendritic cells and receive signals from antigen-specific T cells (Fig. 9.11) are selected and migrate out as plasma cells and memory cells. Cells not selected die by apoptosis. This process of affinity maturation ensures that only high-affinity B cells survive. Option A is incorrect because receptor editing occurs primarily in the bone marrow during early B-cell development, not in germinal centre centrocytes. Option B is incorrect because T-cell help alone is insufficient; centrocytes must first be selected by antigen binding to FDCs. Option D is incorrect because memory B-cell generation requires successful selection; unselected cells do not become memory cells. Option E is incorrect because centrocytes do not revert to naïve B cells; they either survive as selected clones or undergo apoptosis."
  },
  {
    num: 137,
    stem: "Natural killer (NK) cells are cytotoxic lymphocytes that lack the T-cell receptor and are considered part of the innate immune system. Which statement most accurately describes the mechanism by which NK cells distinguish healthy host cells from virally infected or malignant target cells?",
    options: {
      A: "NK cells express invariant T-cell receptor γδ chains that recognize stress-induced MICA and MICB molecules on target cells.",
      B: "NK cells display inhibitory receptors for HLA class I molecules; when HLA class I is absent or downregulated on target cells, the loss of inhibitory signalling permits NK-cell-mediated cytotoxicity.",
      C: "NK cells recognize antigenic peptides presented on HLA class II molecules via CD4 co-receptor engagement, similar to helper T cells.",
      D: "NK cells kill target cells exclusively through antibody-dependent cell-mediated cytotoxicity (ADCC) and cannot recognize uninfected cells in the absence of bound antibody.",
      E: "NK cells constitutively secrete perforin and granzyme B into the extracellular space, causing indiscriminate lysis of all nucleated cells in their vicinity."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), NK cells are designed to kill target cells that have a low level of expression of HLA class I molecules, such as may occur during viral infection or on a malignant cell. NK cells do this by displaying a number of receptors for HLA molecules on their surface. When HLA is expressed on the target cell, these deliver an inhibitory signal into the NK cell. When HLA molecules are absent on the target cell, this inhibitory signal is lost and the NK cell can then kill its target. This is the classic 'missing self' hypothesis. Option A is incorrect because NK cells do not express T-cell receptors (TCRs), whether αβ or γδ. Option C is incorrect because NK cells do not recognize peptide-HLA class II complexes via CD4; this is the function of CD4+ T helper cells. Option D is incorrect because although NK cells can mediate ADCC, they also have intrinsic mechanisms for recognizing missing self and can kill target cells without antibody. Option E is incorrect because NK cell cytotoxicity is tightly regulated and directed, not indiscriminate."
  },
  {
    num: 138,
    stem: "The three complement activation pathways—classical, lectin (mannose-binding lectin), and alternate—differ in their initiating stimuli but converge at a common enzymatic step. A 32-year-old woman with paroxysmal nocturnal haemoglobinuria (PNH) is treated with eculizumab, a humanized monoclonal antibody. Which statement best describes the mechanism of eculizumab and its point of action in the complement cascade?",
    options: {
      A: "Eculizumab binds to C3 convertase, preventing the cleavage of C3 into C3a and C3b, thereby blocking all three pathways upstream of their convergence point.",
      B: "Eculizumab targets complement C5, preventing its cleavage by C5 convertase into C5a and C5b, thereby inhibiting formation of the membrane attack complex distal to the C3 convergence point.",
      C: "Eculizumab binds to C1q, blocking initiation of the classical pathway without affecting the lectin or alternate pathways.",
      D: "Eculizumab stabilizes C1 esterase inhibitor, preventing uncontrolled activation of the classical pathway in hereditary angioedema.",
      E: "Eculizumab binds to CD55 (decay accelerating factor) on erythrocytes, restoring its complement-regulatory function in PNH."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.10), all three complement pathways converge at C3. C3 is cleaved by C3 convertase into C3a and C3b. C3b converts C5 to C5a and C5b. C5b initiates formation with C6, C7, C8, C9 of the membrane attack complex. The complement cascade can be inhibited by antibodies, e.g. eculizumab and ravulizumab, humanized antibodies against complement C5. By preventing C5 cleavage, eculizumab blocks the generation of C5a (anaphylatoxin and leukocyte chemotaxin) and C5b (the initiator of the membrane attack complex), thereby preventing intravascular haemolysis in PNH. This action is distal to the C3 convergence point, meaning the early opsonizing phases of complement remain intact. Option A is incorrect because eculizumab does not target C3 convertase; pegcetacoplan targets C3. Option C is incorrect because C1q inhibition would only block the classical pathway and is not the mechanism of eculizumab. Option D is incorrect because C1 esterase inhibitor is used in hereditary angioedema, not PNH. Option E is incorrect because CD55 deficiency is the pathophysiological defect in PNH; eculizumab is a soluble antibody that targets C5 in plasma, not a cell-surface receptor."
  },
  {
    num: 139,
    stem: "During thymic ontogeny, T-cell receptor (TCR) gene rearrangement generates the diverse repertoire of αβ and γδ T cells. Which statement most accurately characterizes this process and its relationship to immunoglobulin gene rearrangement in B cells?",
    options: {
      A: "TCR gene rearrangement utilizes RAG-1 and RAG-2 enzymes and terminal deoxynucleotidyl transferase (TdT), analogous to B-cell immunoglobulin gene rearrangement, and both processes occur in the bone marrow.",
      B: "The TCR β-chain gene undergoes V(D)J recombination on chromosome 7, while the α-chain gene undergoes V-J recombination on chromosome 14; the same recombinase machinery is shared with immunoglobulin gene rearrangement.",
      C: "TCR γδ T cells constitute >90% of peripheral blood T lymphocytes and their TCR genes rearrange exclusively in the thymic cortex under the influence of IL-4 and IL-7.",
      D: "TCR gene rearrangement precedes immunoglobulin gene rearrangement in the common myeloid/lymphoid progenitor, with TCR αβ expression marking commitment to the T-cell lineage before thymic migration.",
      E: "Somatic hypermutation of TCR variable-region genes occurs in the thymic medulla during positive selection, analogous to somatic hypermutation of immunoglobulin genes in germinal centre centroblasts."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), the α, β, γ and δ genes of the TCRs each include V, D, J and C regions. During T-cell ontogeny, rearrangements of these gene segments occur in a similar fashion to those for immunoglobulin genes, thus creating T cells expressing a wide variety of TCR structures. TdT is involved in creating additional diversity, and the same recombinase enzymes used in B cells are involved in joining up TCR gene segments. The vast majority of T cells (>90%) contain a TCR composed of α and β chains; the minority (<10%) have γ and δ chains. The TCR β-chain locus is on chromosome 7 and undergoes V(D)J recombination, while the α-chain locus on chromosome 14 undergoes V-J recombination (similar to immunoglobulin light chains). Option A is incorrect because TCR rearrangement occurs in the thymus, not the bone marrow. Option C is incorrect because γδ T cells constitute <10% of T cells, not >90%, and IL-4/IL-7 are not the key cytokines for this distinction. Option D is incorrect because T-cell commitment occurs after migration to the thymus; the common progenitor does not rearrange TCR genes. Option E is incorrect because somatic hypermutation does not occur in TCR genes; it is a feature exclusive to immunoglobulin variable-region genes in germinal centre B cells."
  },
  {
    num: 140,
    stem: "CD4+ T helper cells can be broadly subdivided into T helper type 1 (Th1) and T helper type 2 (Th2) subtypes based on their cytokine secretion patterns. Which statement best describes their functional differentiation and the immunological consequences of this dichotomy?",
    options: {
      A: "Th1 cells produce IL-4 and IL-10 and are primarily responsible for providing help for antibody production and allergic responses, whereas Th2 cells produce IL-2 and IFN-γ to boost cell-mediated immunity.",
      B: "Th1 cells produce mainly IL-2, TNF-β and IFN-γ and are important in boosting cell-mediated immunity and granuloma formation, whereas Th2 cells produce IL-4 and IL-10 and provide help for antibody production.",
      C: "Th1 and Th2 subsets are distinguished solely by their differential expression of CD4 isoforms; Th1 expresses CD4RA and Th2 expresses CD4RO, with identical cytokine profiles.",
      D: "Th1 differentiation is driven by IL-4 from dendritic cells and leads to humoral immunity, whereas Th2 differentiation is driven by IL-12 and leads to cytotoxic T-cell responses against intracellular pathogens.",
      E: "Th1 cells recognize antigen presented on HLA class II molecules and Th2 cells recognize antigen on HLA class I molecules, accounting for their different effector functions."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), depending on their cytokine production, CD4+ T cells can be broadly subdivided into two sub-types, T helper type 1 (Th1) and T helper type 2 (Th2). Th1 cells produce mainly IL-2, TNF-β and γ-interferon (IFN-γ) and are important in boosting cell-mediated immunity (and granuloma formation), whereas Th2 cells produce IL-4 and IL-10 and are mainly responsible for providing help for antibody production. This cytokine dichotomy has profound clinical relevance: Th1 responses are critical for defence against intracellular pathogens (e.g. mycobacteria, viruses) and are implicated in granulomatous diseases, whereas Th2 responses drive humoral immunity, allergic responses, and helminth defence. Option A is incorrect because it reverses the cytokine profiles of Th1 and Th2 cells. Option C is incorrect because Th1/Th2 distinction is based on cytokine production, not CD4 isoform expression. Option D is incorrect because Th1 differentiation is driven by IL-12 and IFN-γ, not IL-4, and Th2 differentiation is driven by IL-4, not IL-12. Option E is incorrect because all CD4+ T cells recognize antigen presented on HLA class II molecules; CD8+ T cells recognize HLA class I."
  }
];
