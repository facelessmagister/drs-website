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
  },
  {
    num: 421,
    stem: "A 25-year-old man with relapsed diffuse large B-cell lymphoma receives anti-CD19 chimeric antigen receptor (CAR) T-cell therapy. Two days post-infusion, he develops high-grade fever, hypotension, and grade 3 cytokine release syndrome. Regarding the CAR construct used in his treatment, which structural feature is MOST critical for ensuring that the engineered T cell specifically targets CD19-expressing malignant B cells?",
    options: {
      A: "The transmembrane domain, which anchors the CAR construct in the T-cell membrane and determines its rate of internalization after antigen binding.",
      B: "The single-chain variable fragment (scFv) derived from an anti-CD19 antibody, which confers antigen specificity by binding CD19 on the surface of target cells.",
      C: "The CD3ζ activating domain alone, which independently provides both antigen recognition and intracellular signalling without requiring co-stimulatory molecules.",
      D: "The hinge molecule, which is derived from the CD8 α-chain and acts as the primary antigen-binding component of the CAR construct.",
      E: "The co-stimulatory signalling domains (e.g. CD28 or 4-1BB), which determine the specificity of the CAR T cell for its tumour antigen by selecting which HLA molecule is engaged."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.6), CAR-T cells are T lymphocytes that have been genetically engineered to express a construct that includes both an antigen-specific receptor and various co-stimulatory molecules. The antigen specificity is determined by the single-chain variable fragment (scFv), which is derived from an antibody and binds directly to the target antigen (e.g. CD19) on the surface of tumour cells, independent of HLA. The co-stimulatory domains (CD28, 4-1BB) enhance T-cell activation, proliferation and persistence, but do not determine antigen specificity. The CD3ζ chain provides the primary activation signal (signal 1) but requires the scFv for antigen recognition. The hinge molecule connects the scFv to the transmembrane domain and provides flexibility, but is not the antigen-binding component. Option A is incorrect because the transmembrane domain anchors the CAR but does not determine specificity. Option C is incorrect because the CD3ζ domain provides only the activation signal; it does not confer antigen specificity. Option D is incorrect because the hinge provides structural flexibility, not antigen binding. Option E is incorrect because CAR-T cells recognize antigen independently of HLA; co-stimulatory domains affect efficacy and persistence, not specificity."
  },
  {
    num: 422,
    stem: "A 19-year-old university student presents with a 5-day history of fever, sore throat and malaise. Blood tests reveal a lymphocytosis with atypical lymphocytes. A Monospot test is positive. On day 8, he develops pallor and jaundice. Direct antiglobulin test is positive with anti-C3d but negative with anti-IgG. The cold agglutinin titre is elevated at 1:256 with 'i' blood group specificity. Which statement best explains the pathogenesis of this patient's autoimmune haemolytic anaemia?",
    options: {
      A: "EBV directly infects erythroid progenitors in the bone marrow, causing dyserythropoiesis and intramedullary destruction of red cells.",
      B: "EBV-driven polyclonal B-cell activation produces IgM autoantibodies with 'i' specificity that fix complement to red cells at low temperatures, leading to extravascular haemolysis via the reticuloendothelial system.",
      C: "CD8+ cytotoxic T cells activated against EBV-infected B cells cross-react with 'i' antigens on erythrocytes, causing direct T-cell-mediated cytolysis.",
      D: "The haemolysis results from EBV-mediated splenic macrophage activation causing non-selective phagocytosis of all circulating red cells regardless of antibody coating.",
      E: "EBV infection triggers production of IgG warm autoantibodies directed against the Rh antigen complex, causing direct complement-mediated intravascular haemolysis."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), infectious mononucleosis can occasionally be complicated by autoimmune haemolytic anaemia. The IgM autoantibody is typically of the 'cold'-reactive type and usually shows 'i' blood group specificity. This is further detailed in Chapter 6 of Hoffbrand, where cold autoimmune haemolytic anaemia is discussed: the IgM autoantibody binds to red cells at cooler temperatures (peripheral circulation), fixes complement, and the C3b-coated red cells are then cleared by the reticuloendothelial system (particularly the liver). Option A is incorrect because EBV does not infect erythroid progenitors. Option C is incorrect because the haemolysis is antibody-mediated (IgM cold agglutinin), not T-cell-mediated cytolysis. Option D is incorrect because haemolysis is antibody-specific (anti-i), not non-selective phagocytosis. Option E is incorrect because the autoantibody in infectious mononucleosis-associated AIHA is IgM (cold-reactive) with 'i' specificity, not IgG warm autoantibodies against Rh."
  },
  {
    num: 423,
    stem: "A 6-week-old infant presents with a 3-day history of paroxysmal coughing episodes followed by vomiting and cyanosis. The white cell count is 35 × 10⁹/L with an absolute lymphocyte count of 22 × 10⁹/L. The lymphocytes are morphologically mature small lymphocytes without atypical features. Which pathophysiological mechanism best explains the marked lymphocytosis in this clinical context?",
    options: {
      A: "Bordetella pertussis toxin inhibits lymphocyte trafficking from blood into lymphoid tissue by suppressing the expression of L-selectin on lymphocyte surfaces, preventing their homing to high endothelial venules.",
      B: "The bacterial infection triggers a Th2-dominant cytokine response with massive IL-4 and IL-5 secretion, driving polyclonal B-cell proliferation and hypergammaglobulinaemia.",
      C: "Bordetella pertussis infection activates NK cell antibody-dependent cell-mediated cytotoxicity (ADCC), causing massive release of mature lymphocytes from the spleen and bone marrow.",
      D: "The lymphocytosis is reactive to a secondary viral infection acquired concurrently, as pertussis does not directly cause lymphocytosis but instead produces a profound neutrophilia.",
      E: "Pertussis toxin enhances lymphocyte apoptosis in the thymic cortex, releasing immature TdT-positive cortical thymocytes into the peripheral blood, which appear as mature small lymphocytes."
    },
    answer: "A",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Table 9.3), bacterial causes of lymphocytosis include pertussis (Bordetella pertussis). Pertussis toxin (pertussis toxin, PTX) inhibits lymphocyte trafficking by suppressing the expression of L-selectin and other adhesion molecules on lymphocyte surfaces, preventing their homing to lymph nodes and other lymphoid tissues via high endothelial venules. This results in a marked lymphocytosis with morphologically normal mature small lymphocytes, typically exceeding 10 × 10⁹/L. This is a well-recognized haematological hallmark of pertussis infection in infants and young children. Option B is incorrect because pertussis does not primarily drive a Th2-mediated B-cell proliferative response. Option C is incorrect because NK cell ADCC does not cause lymphocytosis. Option D is incorrect because pertussis directly causes the lymphocytosis, not a secondary viral infection; the WBC pattern is lymphocytosis, not neutrophilia. Option E is incorrect because pertussis toxin prevents lymphocyte egress from blood into tissues rather than promoting thymic release, and the circulating cells are mature small lymphocytes, not immature TdT-positive thymocytes."
  },
  {
    num: 424,
    stem: "A 45-year-old woman with a 2-year history of recurrent sinopulmonary infections is found to have serum IgG 3.2 g/L (reference 6.0–16.0), IgA 0.3 g/L (reference 1.5–4.5), and IgM 0.4 g/L (reference 0.5–1.5). Serum protein electrophoresis shows no monoclonal band. Flow cytometry demonstrates normal numbers of CD19+ B cells but reduced CD27+ memory B cells. She is diagnosed with common variable immunodeficiency (CVID). Which statement best explains the pathogenesis of the hypogammaglobulinaemia in this condition?",
    options: {
      A: "An inherited defect of Bruton tyrosine kinase (BTK) prevents pre-B-cell maturation in the bone marrow, resulting in absent peripheral B cells and near-total agammaglobulinaemia.",
      B: "A defect in the terminal deoxynucleotidyl transferase (TdT) enzyme abolishes immunoglobulin gene diversity, producing non-functional antibody variable regions.",
      C: "Defective T-cell help for B-cell maturation or a primary B-cell differentiation defect impairs the generation of antibody-secreting plasma cells and memory B cells despite preserved B-cell numbers.",
      D: "Autoantibodies against CD20 on mature B cells cause their complement-mediated lysis, depleting the peripheral B-cell pool and preventing humoral immune responses.",
      E: "A germline mutation in the immunoglobulin heavy-chain constant region on chromosome 14 prevents class-switch recombination, producing only IgM and IgD antibodies."
    },
    answer: "C",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), common variable immunodeficiency (CVID) may develop in children or adults of either sex. In some cases, a primary defect of B cells or of antigen-presenting cells (APCs) is present. However, in many cases, lack of specific subsets of T cells which control B-cell maturation may lead to a secondary lack of B-cell function. The key pathophysiological feature is that B cells are present in normal or near-normal numbers but fail to differentiate into antibody-secreting plasma cells and memory B cells, resulting in hypogammaglobulinaemia. Option A is incorrect because BTK defects cause X-linked agammaglobulinaemia, characterized by absent B cells, not CVID. Option B is incorrect because TdT deficiency does not produce a CVID phenotype. Option D is incorrect because anti-CD20 antibodies (rituximab) are therapeutic agents, not the cause of CVID, and the hallmark of CVID is preserved B-cell numbers with defective differentiation. Option E is incorrect because isolated class-switch recombination defects (e.g. hyper-IgM syndrome) produce elevated IgM with low IgG and IgA, whereas CVID typically shows low IgG, low IgA, and low or low-normal IgM."
  },
  {
    num: 425,
    stem: "A 35-year-old man with relapsed/refractory follicular lymphoma is being considered for anti-CD19 CAR-T cell therapy. His treating physician discusses the key advantages of CAR-T cells over conventional monoclonal antibody therapy. Based on the properties of CAR-T cell constructs described in Hoffbrand's Essential Haematology, 9th Edition, which statement is MOST accurate regarding the structural and functional characteristics of CAR-T cells?",
    options: {
      A: "CAR-T cells recognize target antigens only when presented on HLA class I molecules, similar to native CD8+ cytotoxic T cells, and therefore cannot kill tumour cells that have downregulated HLA expression.",
      B: "CAR-T cells recognize target antigens in an HLA-independent manner via their antibody-derived scFv domain, and their in vivo persistence and anti-tumour activity are enhanced by incorporating one or more co-stimulatory signalling domains such as CD28 or 4-1BB.",
      C: "CAR-T cells must be derived from autologous T cells because allogeneic CAR-T cells invariably cause lethal graft-versus-host disease (GVHD) due to recognition of host HLA molecules.",
      D: "First-generation CAR-T cells lacking co-stimulatory domains showed superior anti-tumour activity compared to second- and third-generation constructs because they avoid excessive T-cell activation and cytokine release syndrome.",
      E: "CAR-NK cells have entirely replaced CAR-T cells in clinical practice because they do not require autologous cell harvesting and have demonstrated higher complete remission rates in B-cell lymphoid neoplasms."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.6), CAR-T cells are T lymphocytes that have been genetically engineered to express a construct that includes both an antigen-specific receptor and various co-stimulatory molecules. The antigen-specific receptor is derived from an antibody (scFv), which binds directly to surface antigens such as CD19 in an HLA-independent manner, bypassing the need for antigen processing and HLA presentation. The effectiveness largely depends on which co-stimulatory molecules are chosen. Third- and fourth-generation CAR-T cells with improved intracellular domains (incorporating CD28 and/or 4-1BB co-stimulatory domains) are more effective and persistent in anti-tumour activity. Option A is incorrect because CAR-T cells recognize antigens independently of HLA, which is one of their key advantages. Option C is incorrect because allogeneic CAR-T cells can cause GVHD, but this is not invariable; the statement is an overgeneralization. Option D is incorrect because first-generation CAR-T cells (without co-stimulatory domains) had poor persistence and limited efficacy; the addition of co-stimulatory domains improved outcomes. Option E is incorrect because while CAR-NK cells are being developed and have the advantage of 'off-the-shelf' use, they have not replaced CAR-T cells in clinical practice."
  },
  {
    num: 426,
    stem: "During early B-cell development in the bone marrow, precursor B cells progress through defined stages characterized by sequential immunoglobulin gene rearrangements and surface marker expression. According to Hoffbrand's Essential Haematology, 9th Edition, which sequence of immunoglobulin gene rearrangements and surface marker expression best describes the earliest B-cell developmental stages?",
    options: {
      A: "Surface IgM is expressed first on pro-B cells, followed by rearrangement of the immunoglobulin heavy-chain gene on chromosome 14, and then CD19 expression appears at the pre-B cell stage.",
      B: "Heavy-chain gene rearrangement (D-J then V-DJ joining) occurs in the pro-B cell stage with TdT expression; successful heavy-chain rearrangement leads to pre-B cell receptor expression with cytoplasmic μ chain, CD10 expression, and surface CD19.",
      C: "Immunoglobulin light-chain genes rearrange before heavy-chain genes, with κ light chains appearing on pre-B cells before any heavy-chain gene rearrangement begins.",
      D: "CD20 is the earliest B-lineage surface marker, appearing on pro-B cells before CD19, and its expression is required for immunoglobulin heavy-chain gene rearrangement to proceed.",
      E: "Terminal deoxynucleotidyl transferase (TdT) is expressed exclusively on mature surface IgM-positive B cells in the germinal centre and is absent during early bone marrow B-cell development."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.8), the sequence of immunoglobulin gene rearrangement during early B-cell development proceeds as follows: in the pro-B cell stage, the heavy-chain gene undergoes D-J then V-DJ rearrangement, with TdT (terminal deoxynucleotidyl transferase) expressed at this stage introducing additional diversity. Successful heavy-chain rearrangement allows expression of the pre-B cell receptor, consisting of a cytoplasmic μ heavy chain paired with surrogate light chains. Pre-B cells express CD10 (common lymphocyte progenitor antigen, CALLA) and CD19 on their surface. Light-chain gene rearrangement occurs subsequently in the pre-B to early B-cell transition. Option A is incorrect because surface IgM is not expressed on pro-B cells and CD19 appears before surface IgM. Option C is incorrect because heavy-chain gene rearrangement precedes light-chain rearrangement, not the reverse. Option D is incorrect because CD19 is the earliest pan-B marker, not CD20, and CD20 appears later in B-cell development. Option E is incorrect because TdT is expressed in early lymphoid progenitors (pro-B and pre-B cells in the bone marrow, cortical thymocytes) and is absent from mature B cells in the germinal centre."
  },
  {
    num: 427,
    stem: "The generation of antibody diversity through immunoglobulin gene rearrangement relies on several distinct molecular mechanisms operating at different stages of B-cell development. Which statement most accurately describes the contributions of these mechanisms to the total diversity of the antibody repertoire?",
    options: {
      A: "Diversity is generated solely by random combinatorial association of V, D, and J gene segments; no additional mechanisms contribute to repertoire diversity beyond this gene segment selection.",
      B: "Somatic hypermutation occurs in the bone marrow during pro-B cell development and is the primary mechanism by which the antibody repertoire achieves affinity maturation before antigen exposure.",
      C: "Terminal deoxynucleotidyl transferase (TdT) inserts random nucleotides at the V-D and D-J junctions during heavy-chain gene rearrangement, creating junctional diversity that substantially expands the repertoire beyond combinatorial V(D)J joining alone.",
      D: "Class-switch recombination from IgM to IgG, IgA, or IgE occurs during early B-cell development in the bone marrow and generates diversity of antigen-binding specificity by altering the variable region of the immunoglobulin.",
      E: "Recombinase activating genes (RAG-1 and RAG-2) are expressed exclusively in mature germinal centre B cells and mediate somatic hypermutation of immunoglobulin variable-region genes after antigen stimulation."
    },
    answer: "C",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), immunoglobulin gene rearrangement generates diversity through multiple mechanisms. During early B-cell differentiation, one of the V heavy-chain segments combines with one of the D segments, which has itself already combined with one of the J segments. Diversity is introduced by the variability of which V segment joins with which D and with which J segment (combinatorial diversity). Additional diversity is generated by the enzyme terminal deoxynucleotidyl transferase (TdT), which inserts a variable number of new bases into the DNA of the D region at the time of gene rearrangement (junctional diversity). Further mutation of the V region genes occurs in the germinal centres of secondary lymphoid tissues (somatic mutation), which is a distinct process occurring after antigen exposure. Option A is incorrect because diversity extends beyond combinatorial joining to include junctional diversity (TdT) and somatic hypermutation. Option B is incorrect because somatic hypermutation occurs in germinal centres of secondary lymphoid tissues, not in the bone marrow pro-B cell stage. Option D is incorrect because class-switch recombination changes the constant region (and thus effector function) of the antibody without altering antigen-binding specificity, and it occurs in mature B cells after antigen exposure, not in the bone marrow. Option E is incorrect because RAG-1 and RAG-2 are expressed during V(D)J recombination in developing lymphocytes, not in germinal centre B cells, and they mediate gene segment joining, not somatic hypermutation."
  },
  {
    num: 428,
    stem: "The complement cascade can be activated via three distinct pathways that converge at C3 convertase formation. A 28-year-old man with recurrent Neisseria meningitidis infections is found to have a genetic deficiency of mannose-binding lectin (MBL). Which complement activation pathway is MOST directly impaired by this deficiency, and what is the functional consequence?",
    options: {
      A: "The classical pathway is impaired because MBL binds to the Fc domain of IgG and IgM to initiate C1 complex activation; MBL deficiency therefore prevents antibody-mediated complement activation.",
      B: "The lectin pathway is impaired because MBL binds to mannose and fucose residues on pathogen surfaces and activates MBL-associated serine proteases (MASPs), which cleave C4 and C2 to form C3 convertase C4bC2a.",
      C: "The alternate pathway is impaired because MBL constitutively activates C3 through the properdin-bypass mechanism, and MBL deficiency prevents generation of the C3bBb C3 convertase.",
      D: "The terminal pathway is impaired because MBL is required for assembly of the membrane attack complex (C5b-C9) on Neisseria meningitidis; without MBL, C9 polymerization cannot occur.",
      E: "All three pathways are equally impaired because MBL serves as the central convergence molecule at C3; its absence prevents C3 convertase formation regardless of the initiating stimulus."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9, Fig. 9.10), the complement sequence consists of three distinct activation pathways. The lectin (mannose-binding lectin, MBL) pathway is initiated when host MBL binds to mannose and fucose residues on a suitable surface such as a pathogen. MBL then activates MBL-associated serine proteases (MASPs), which cleave C4 and C2 to form the C3 convertase C4bC2a (identical to the classical pathway C3 convertase). MBL deficiency predisposes to recurrent infections, particularly with encapsulated bacteria such as Neisseria meningitidis. Option A is incorrect because the classical pathway is initiated by C1q binding to antibody Fc domains, not MBL. Option C is incorrect because the alternate pathway is constitutively activated by endogenous C3b and amplified through factors B and D, independently of MBL. Option D is incorrect because MBL operates at the initiation of the lectin pathway (C4/C2 cleavage), not at the terminal MAC assembly stage. Option E is incorrect because MBL deficiency selectively impairs the lectin pathway; the classical and alternate pathways can still generate C3 convertase and activate complement independently."
  },
  {
    num: 429,
    stem: "Dendritic cells (DCs) serve as professional antigen-presenting cells (APCs) that are essential for initiating adaptive immune responses. According to the description in Hoffbrand's Essential Haematology, 9th Edition, which statement most accurately characterizes the role of dendritic cells in the immune response?",
    options: {
      A: "Dendritic cells circulate in the peripheral blood as mature APCs and directly present soluble antigen to B cells in the germinal centre, bypassing the need for T-cell participation in humoral immunity.",
      B: "Immature dendritic cells are efficient at macropinocytosis to capture antigens in peripheral tissues; upon antigen uptake, they migrate to lymph nodes, mature, and present processed peptides on HLA class II molecules to CD4+ T cells, which then provide help to B cells.",
      C: "Follicular dendritic cells (FDCs) in germinal centres process and present antigen to CD8+ cytotoxic T cells via HLA class I, serving as the primary activators of cell-mediated immunity during the secondary immune response.",
      D: "Dendritic cells present antigen exclusively on HLA class I molecules and therefore activate only CD8+ cytotoxic T cells, with no role in stimulating CD4+ helper T cells or B-cell antibody production.",
      E: "Dendritic cells constitutively secrete high levels of IL-4 and IL-10, directly promoting Th2 differentiation and B-cell class switching without requiring T-cell receptor engagement."
    },
    answer: "B",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), specialized macrophages called dendritic cells (DCs) process antigens before presenting them to B and T lymphocytes—they are therefore known as antigen-presenting cells (APCs). Dendritic cell precursors constitutively migrate at low levels from blood into tissues, but their rate of migration is increased at the site of inflammation. Immature DCs are efficient at macropinocytosis, which allows them to capture antigens from the environment. Antigen-specific immune responses are generated in secondary lymphoid organs and commence when antigen is carried into a lymph node on dendritic cells. In the follicle, germinal centres arise as a result of continuing response to antigenic stimulation, with follicular dendritic cells (FDCs) loaded with antigen selecting centrocytes. CD4+ T helper cells recognize antigen presented on HLA class II molecules and then provide help for B-cell antibody production. Option A is incorrect because DCs capture antigen as immature cells in tissues and mature during migration to lymph nodes; they do not bypass T-cell help. Option C is incorrect because FDCs present intact antigen on their surface (not processed peptides on HLA) to B cells for selection in germinal centres, not to CD8+ T cells. Option D is incorrect because DCs present antigen on both HLA class I and class II molecules, activating both CD8+ and CD4+ T cells. Option E is incorrect because DCs do not constitutively secrete IL-4/IL-10 as their primary function; their key role is antigen processing and presentation to T cells."
  },
  {
    num: 430,
    stem: "Lymphocyte recirculation between blood, lymphoid tissues, and lymph is essential for immune surveillance. According to Hoffbrand's Essential Haematology, 9th Edition, which statement most accurately describes the pathway of lymphocyte trafficking through secondary lymphoid organs?",
    options: {
      A: "B cells and T cells both enter lymph nodes exclusively via efferent lymphatic vessels and exit through afferent lymphatic vessels, with no role for the bloodstream in lymph node recirculation.",
      B: "T cells home to the germinal centres and mantle zones of lymph node follicles, while B cells preferentially localize to the paracortical (T-cell) zones, reflecting their complementary roles in antigen presentation.",
      C: "Lymphocytes in the peripheral blood migrate through post-capillary venules into the substance of lymph nodes; T cells home to the perifollicular (paracortical) zones and periarteriolar sheaths of the spleen, while B cells selectively accumulate in follicles of the lymph nodes and spleen.",
      D: "Naïve lymphocytes bypass lymph nodes entirely and are activated exclusively in the spleen; only memory B cells and effector T cells traffic through lymph nodes after antigen exposure.",
      E: "Lymphocytes return from lymph nodes to the peripheral blood via the afferent lymphatic stream, and re-entry into lymph nodes occurs through the subcapsular sinus, which acts as the primary entry point for circulating B and T cells."
    },
    answer: "C",
    explanation: "As described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 9), lymphocytes in the peripheral blood migrate through post-capillary venules into the substance of the lymph nodes or into the spleen or bone marrow. T cells home to the perifollicular zones of the cortical areas of lymph nodes (paracortical areas; Fig. 9.2) and to the periarteriolar sheaths surrounding the central arterioles of the spleen. B cells selectively accumulate in follicles of the lymph nodes and spleen. Lymphocytes return to the peripheral blood via the efferent lymphatic stream and the thoracic duct. Option A is incorrect because lymphocytes enter lymph nodes from the blood via post-capillary venules (high endothelial venules), not via efferent lymphatic vessels, and exit via efferent lymphatics. Option B is incorrect because it reverses the homing patterns: B cells accumulate in follicles (germinal centres and mantle zones) and T cells in paracortical zones. Option D is incorrect because naïve lymphocytes are the primary cells that traffic through lymph nodes for immune surveillance; activated cells also traffic but naïve cells do not bypass lymph nodes. Option E is incorrect because lymphocytes return to blood via the efferent lymphatic stream (not afferent), and they enter lymph nodes from blood via post-capillary venules, not through the subcapsular sinus."
  }
];