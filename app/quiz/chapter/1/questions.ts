export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 1,
    stem: "A 64-year-old patient undergoing routine blood count monitoring is found to have a DNMT3A R882H mutation at a variant allele fraction (VAF) of 12% in peripheral blood, with a normal full blood count. Which statement best describes the biological basis of this finding in the context of haemopoietic stem cell biology?",
    options: {
      A: "This mutation must have been acquired in a committed myeloid progenitor, since it is restricted to the myeloid compartment.",
      B: "The mutation arose in an HSC that has undergone clonal expansion; the VAF of 12% indicates involvement of approximately 25% of nucleated blood cells, suggesting acquisition at least 2–3 decades earlier.",
      C: "The mutation necessarily confers a proliferative advantage that will progress to acute myeloid leukaemia within 5 years.",
      D: "The finding is artifactual, as DNMT3A mutations are exclusively germline and detectable from birth.",
      E: "This mutation will be present in short-term HSCs but not in long-term HSCs, as the latter cycle too infrequently to accumulate coding mutations."
    },
    answer: "B",
    explanation: "Hoffbrand states that clones of blood cells with somatic mutations increase in frequency with age—termed clonal haemopoiesis of indeterminate potential (CHIP). DNMT3A is one of the frequently mutated genes in these clonal expansions. A VAF of ~12% implies roughly double that proportion of nucleated cells are affected (VAF reflects allele fraction in DNA), consistent with an HSC-derived clone that has expanded over many years. The textbook notes that while CHIP may predispose to myeloid malignancy, it does not inevitably progress to overt leukaemia."
  },
  {
    num: 2,
    stem: "Which of the following best describes the functional and phenotypic distinction between the haemangioblast and the definitive haemopoietic stem cell during early human embryogenesis?",
    options: {
      A: "Haemangioblasts are CD34+/CD45+ and arise in the bone marrow at 6–7 months, whereas definitive HSCs are CD34− and originate in the yolk sac.",
      B: "Haemangioblasts are bipotential common precursors of endothelial and haemopoietic cells that seed the AGM region, whereas definitive HSCs first arise from the AGM and subsequently colonise the liver, spleen, and bone marrow.",
      C: "Haemangioblasts give rise exclusively to primitive erythropoiesis in the yolk sac and have no role in definitive haemopoiesis.",
      D: "Definitive HSCs appear before haemangioblasts and directly colonise the bone marrow without an intermediate hepatic phase.",
      E: "The haemangioblast is a committed erythroid progenitor, while the definitive HSC is a lymphoid-restricted progenitor."
    },
    answer: "B",
    explanation: "The textbook explains that definitive haemopoiesis derives from a population of stem cells first observed in the aorta–gonads–mesonephros (AGM) region. These common precursors of endothelial and haemopoietic cells are called haemangioblasts and seed the liver, spleen and bone marrow. From 6 weeks until 6–7 months of foetal life, the liver and spleen are the major haemopoietic organs; the bone marrow takes over from 6 to 7 months of foetal life. This sequence matches option B, which correctly places the haemangioblast as a bipotential precursor and the definitive HSC as arising from the AGM before colonising the liver, spleen, and eventually bone marrow."
  },
  {
    num: 3,
    stem: "A 45-year-old patient undergoes allogeneic stem cell transplantation for aplastic anaemia. Post-transplant chimerism studies at day +100 show that donor-derived long-term HSCs have successfully engrafted, as evidenced by sustained multilineage donor haematopoiesis beyond week 16. The donor stem cells were mobilised with G-CSF and collected by apheresis. Which molecular mechanism is most critical for the homing of these donor HSCs to the recipient bone marrow niches following intravenous infusion?",
    options: {
      A: "Upregulation of VLA-4 (integrin α4β1) on HSCs, leading to adhesion to VCAM-1 on bone marrow endothelium.",
      B: "Binding of the chemokine SDF-1 (CXCL12), constitutively expressed by bone marrow stromal cells, to CXCR4 on the surface of HSCs along a chemokine gradient.",
      C: "G-CSF-mediated cleavage of SDF-1 by neutrophil elastase in the bone marrow microenvironment.",
      D: "Downregulation of CD44 on HSCs facilitating transit across the bone marrow sinusoidal endothelium.",
      E: "KIT receptor (CD117) binding to membrane-bound stem cell factor on osteoblasts in the endosteal niche."
    },
    answer: "B",
    explanation: "Hoffbrand notes that stem cell homing depends on a chemokine gradient in which stromal-derived factor 1 (SDF-1), which binds to its receptor CXCR4 on HSCs, is critical. This SDF-1/CXCR4 axis is the principal chemokine gradient guiding HSCs back to the bone marrow microenvironment after intravenous infusion. While integrins and adhesion molecules play supporting roles, the textbook explicitly highlights SDF-1 binding to CXCR4 as the critical homing determinant."
  },
  {
    num: 4,
    stem: "Regarding the transcriptional regulation of lineage commitment in haemopoiesis, which of the following best encapsulates the concept of cross-antagonism between lineage-specifying transcription factors?",
    options: {
      A: "GATA1 and PU.1 physically interact to co-activate genes required for biphenotypic acute leukaemia.",
      B: "PAX5 suppresses NOTCH1 expression to drive T-cell commitment from common lymphoid progenitors.",
      C: "GATA1, by binding FOG1, directly represses PU.1-mediated transcription, thereby reinforcing erythroid/megakaryocytic differentiation while suppressing granulocytic/monocytic differentiation.",
      D: "CEBPα activates GATA2 expression to promote the transition from multipotent progenitor to erythroid lineage.",
      E: "RUNX1 acts as a passive scaffold that does not influence lineage choice, with lineage specification determined entirely by extrinsic growth factor signalling."
    },
    answer: "C",
    explanation: "The textbook describes how transcriptional control of haemopoiesis involves a balance of activating and repressing signals. GATA1 is a key transcription factor for erythroid and megakaryocytic development. When bound to its cofactor FOG1, GATA1 can directly repress PU.1 activity—PU.1 being the master regulator driving granulocytic and monocytic lineages. This cross-antagonism locks the cell into erythroid/megakaryocytic fate while actively suppressing alternative myeloid programmes, a concept central to lineage commitment described in Hoffbrand."
  },
  {
    num: 5,
    stem: "A 58-year-old patient with polycythaemia vera is found to harbour the JAK2 V617F mutation. This mutation occurs in the pseudokinase domain of JAK2 and leads to constitutive activation of the JAK/STAT pathway in the absence of ligand binding. Which of the following most precisely describes the normal signalling sequence from erythropoietin binding to transcriptional activation?",
    options: {
      A: "EPO → EPO-R monomer activation → JAK2 autophosphorylation → STAT5 phosphorylation → STAT5 nuclear translocation → GATA1 binding to globin gene promoters.",
      B: "EPO → EPO-R dimerization → JAK2 trans-phosphorylation → STAT5 phosphorylation and dimerization → STAT5 nuclear translocation → activation of erythroid-specific gene transcription.",
      C: "EPO → EPO-R internalization → RAS/MAPK pathway → ERK phosphorylation → GATA1 activation → globin mRNA synthesis.",
      D: "EPO → direct activation of PI3K → AKT phosphorylation → FOXO3a inactivation → BCL-XL upregulation → erythropoiesis.",
      E: "EPO → JAK2 V617F binding → constitutive STAT3 activation → cyclin D1 transcription → erythroid progenitor proliferation."
    },
    answer: "B",
    explanation: "Hoffbrand's diagram of growth factor signalling (Fig. 1.8) illustrates that binding of a growth factor to its receptor activates JAK/STAT signalling. For erythropoietin, the sequence is: EPO binds to the EPO receptor, causing receptor dimerization and bringing JAK2 molecules into proximity. JAK2 trans-phosphorylates its partner, then phosphorylates STAT5, which dimerises, translocates to the nucleus, and activates transcription of erythroid-specific genes (including those for haemoglobin synthesis). This canonical JAK/STAT pathway is the primary route for EPO signalling in erythropoiesis."
  },
  {
    num: 6,
    stem: "A neonate presents with hepatosplenomegaly, anaemia, and thrombocytopenia at birth. The blood film shows leukoerythroblastosis with circulating erythroblasts and early myeloid precursors. A bone marrow biopsy is normal. Which statement best explains the physiological and pathological basis for the persistence of hepatic and splenic haemopoiesis in this clinical scenario?",
    options: {
      A: "This is a normal finding, as the liver and spleen remain the dominant sites of haemopoiesis throughout the first year of life.",
      B: "The infant has failed to transition from hepatic to medullary haemopoiesis due to a primary bone marrow disorder; the liver and spleen are contributing through physiological extramedullary haemopoiesis, which normally ceases by approximately 2 weeks after birth.",
      C: "This represents reactivation of the yolk sac haemopoietic programme, which is always pathological outside the first trimester.",
      D: "The placenta, rather than the liver and spleen, is the source of the circulating precursors, reflecting persistent placental haematopoiesis.",
      E: "The liver and spleen are producing blood cells as part of normal definitive haemopoiesis that begins at 6 weeks of gestation and persists until puberty."
    },
    answer: "B",
    explanation: "The textbook states that from 6 weeks until 6–7 months of foetal life, the liver and spleen are the major haemopoietic organs, and they continue to produce blood cells until about 2 weeks after birth. Persistence of hepatic and splenic haemopoiesis beyond this period is abnormal and represents extramedullary haemopoiesis, usually occurring when the bone marrow is unable to meet the body's needs. In this neonate, the normal bone marrow biopsy suggests a marrow disorder (e.g. osteopetrosis or marrow failure) is preventing medullary haemopoiesis, forcing the liver and spleen to continue as compensatory sites."
  },
  {
    num: 7,
    stem: "Which of the following most accurately describes the relationship between epigenetic modification, clonal haematopoiesis, and progression to myeloid malignancy?",
    options: {
      A: "Mutations in TET2 and DNMT3A are mutually exclusive and define two discrete subtypes of MDS that never coexist in the same clone.",
      B: "IDH1 and IDH2 mutations result in loss of function of the TET enzymes through depletion of α-ketoglutarate, leading to DNA hypermethylation at specific loci, a pattern that directly promotes leukaemic transformation.",
      C: "DNMT3A mutations impair de novo DNA methylation, whereas TET2 mutations impair hydroxylation of 5-methylcytosine; both may coexist in a single clone, and their combined presence accelerates progression from clonal haematopoiesis to overt MDS/AML.",
      D: "Histone acetylation, but not histone methylation, is relevant to haemopoietic gene regulation, and the histone code plays a minimal role in myeloid leukemogenesis.",
      E: "Clonal haematopoiesis of indeterminate potential (CHIP) is defined exclusively by the presence of spliceosome gene mutations and never involves epigenetic regulator genes."
    },
    answer: "C",
    explanation: "Hoffbrand emphasizes that epigenetics refers to changes in DNA and chromatin that affect gene expression without altering DNA sequence. The DNA methyltransferase genes DNMT3A and B are involved in cytosine methylation, while TET and IDH genes are involved in hydroxylation and breakdown of methylcytosine, restoring gene expression. The textbook notes these genes are frequently mutated in myeloid malignancies, especially MDS and AML, and that clonal haemopoiesis may predispose to myeloid malignancies. Crucially, DNMT3A and TET2 mutations are not mutually exclusive—both may coexist in a single clone, and their combined disruption of epigenetic regulation accelerates leukaemic progression more than either alone."
  },
  {
    num: 8,
    stem: "A 72-year-old patient with relapsed follicular lymphoma is treated with venetoclax, a selective BCL-2 inhibitor. The t(14;18)(q32;q21) translocation in this lymphoma places BCL2 under the transcriptional control of the immunoglobulin heavy chain enhancer. Which of the following most accurately describes how BCL-2 overexpression inhibits apoptosis at the mitochondrial level and how venetoclax counters this effect?",
    options: {
      A: "BCL-2 binds and activates caspase 9 on the outer mitochondrial membrane; venetoclax displaces BCL-2, allowing caspase 9 to cleave downstream effector caspases.",
      B: "BCL-2 sequesters cytochrome c inside the mitochondrial intermembrane space by binding to the voltage-dependent anion channel (VDAC); venetoclax inhibits this binding, promoting cytochrome c release.",
      C: "BCL-2 binds and neutralises the pro-apoptotic effector proteins BAX and BAK, preventing mitochondrial outer membrane permeabilization (MOMP) and cytochrome c release; venetoclax, as a BH3 mimetic, binds the hydrophobic groove of BCL-2, displacing and releasing sequestered pro-apoptotic BH3-only proteins and BAX/BAK.",
      D: "BCL-2 directly phosphorylates and inactivates p53, preventing p53-mediated transcriptional activation of BAX; venetoclax restores p53 function, leading to BAX-mediated cytochrome c release.",
      E: "BCL-2 activates AKT, which phosphorylates and inhibits BAD, a pro-apoptotic BH3-only protein; venetoclax inhibits AKT, allowing BAD to initiate apoptosis."
    },
    answer: "C",
    explanation: "Hoffbrand describes apoptosis as a regulated process in which the intracellular ratio of pro-apoptotic proteins (e.g. BAX) to anti-apoptotic proteins (e.g. BCL-2) determines susceptibility to cell death. BCL-2 protects cells by binding and neutralising BAX, preventing mitochondrial outer membrane permeabilization (MOMP) and cytochrome c release. The t(14;18) translocation in follicular lymphoma causes BCL-2 overexpression, making malignant B cells less susceptible to apoptosis. Venetoclax is a BH3 mimetic that binds to the hydrophobic groove of BCL-2, displacing sequestered pro-apoptotic proteins (including BAX and BH3-only proteins), thereby restoring the apoptotic pathway. This mechanism is now widely used to treat both myeloid and lymphoid malignancies."
  },
  {
    num: 9,
    stem: "A patient with a suspected myelodysplastic syndrome undergoes bone marrow biopsy. The trephine section shows approximately 80% cellularity (haemopoietic tissue) and 20% fat. The patient is aged 45. Which of the following conclusions regarding marrow cellularity is most accurate?",
    options: {
      A: "The finding is definitively abnormal; a 45-year-old should have 30% or less haemopoietic tissue in the marrow.",
      B: "The finding may represent a hypercellular marrow; in the middle-aged adult, haemopoietic tissue normally occupies approximately 50% of the intertrabecular space, and increased cellularity can result from clonal expansion of a mutated stem cell population or from compensatory physiological responses.",
      C: "The finding is within normal limits, as active marrow in adults consistently occupies 80–90% of the medullary space in the axial skeleton.",
      D: "The cellularity is determined solely by the patient's haemoglobin level and is independent of stem cell clonal composition.",
      E: "Marrow cellularity cannot be assessed on trephine biopsy and requires flow cytometry for meaningful interpretation."
    },
    answer: "B",
    explanation: "The textbook states that in infancy all bone marrow is haemopoietic, but during childhood and beyond there is progressive replacement of marrow throughout the long bones with fat cells. By middle age, haemopoietic tissue normally occupies approximately 50% of the intertrabecular space in the axial skeleton. Hypercellularity in a 45-year-old may reflect either a clonal expansion of mutated stem cells (as in MDS or myeloproliferative neoplasms) or a compensatory physiological response to increased peripheral blood cell destruction or demand. Therefore, 80% cellularity is abnormal for this age and warrants further investigation."
  },
  {
    num: 10,
    stem: "A research laboratory has successfully cultured long-term culture-initiating cells (LTC-ICs) on a bone marrow stromal feeder layer. When these same cells are instead plated in semi-solid methylcellulose medium supplemented with a cytokine cocktail, they fail to generate colonies beyond 4 weeks. Which of the following best explains the biological basis for this discrepancy and what it reveals about the hierarchy of haemopoietic progenitor assays?",
    options: {
      A: "Semi-solid media contain toxic levels of methylcellulose that selectively kill primitive progenitors while sparing committed progenitors.",
      B: "LTC-ICs represent a more primitive haemopoietic cell population (closer to the HSC) that requires direct contact with stromal cells for prolonged self-renewal and differentiation, whereas the colonies arising in semi-solid media in the first few weeks derive from later, lineage-committed progenitors (such as CFU-GM, BFU-E, CFU-E) with more limited proliferative capacity.",
      C: "The cytokine cocktail used in the semi-solid assay lacks erythropoietin, which is essential for maintaining primitive HSC viability.",
      D: "LTC-ICs are exclusively of lymphoid lineage and therefore cannot generate myeloid colonies in semi-solid media under any conditions.",
      E: "The stromal layer in the LTC-IC assay produces G-CSF, which directly induces HSC differentiation into mature neutrophils, whereas semi-solid media allow only erythroid differentiation."
    },
    answer: "B",
    explanation: "The textbook describes the haemopoietic stem cell niche and the importance of stromal cells in maintaining primitive haemopoietic cells. Long-term culture-initiating cells (LTC-ICs) are assayed on a stromal feeder layer because they require direct contact with stromal-derived growth factors and adhesion molecules for survival and self-renewal over many weeks. In contrast, semi-solid colony assays (e.g. CFU-GM, BFU-E, CFU-E) detect lineage-committed progenitors that can proliferate and differentiate for a limited number of divisions without stromal support. The inability of LTC-ICs to form long-term colonies in methylcellulose confirms that they are a more primitive population than the progenitors detected by standard CFU assays, reflecting the hierarchical organisation of haemopoiesis described in Hoffbrand."
  },
  {
    num: 341,
    stem: "A 58-year-old woman with high-risk myelodysplastic syndrome is enrolled in a clinical trial of a thrombopoietin (TPO) receptor agonist combined with a hypomethylating agent. During a teaching round, the fellow is asked to explain where TPO is produced and which early progenitors it acts upon. Which statement most accurately describes the normal physiology of thrombopoietin in haemopoiesis?",
    options: {
      A: "TPO is synthesized predominantly in the kidney and acts exclusively on mature megakaryocytes to trigger platelet release.",
      B: "TPO is produced largely in the liver and acts locally on pluripotential stem cells and megakaryocyte-erythroid progenitors, synergizing with stem cell factor (SCF) and interleukin-3 (IL-3) to support early platelet production.",
      C: "TPO is secreted by bone marrow osteoblasts in the endosteal niche and only stimulates erythroid progenitors (BFU-E and CFU-E).",
      D: "TPO production is restricted to stromal fibroblasts and functions solely as a negative regulator of myelopoiesis via the TGF-β pathway.",
      E: "TPO circulates at high concentrations under basal conditions and directly activates the JAK2 V617F mutation in all myeloid progenitors."
    },
    answer: "B",
    explanation: "Hoffbrand states that thrombopoietin (TPO) is made largely in the liver, and that SCF, TPO, NOTCH1 and FLT3 ligand act locally on the pluripotential stem cells and on myeloid/lymphoid progenitors. The textbook also notes that lineage-specific growth factors such as TPO enhance the effects of SCF, FLT3-L and IL-3 on the survival and differentiation of early haemopoietic cells. Option B correctly identifies the hepatic source of TPO and its action on early progenitors, including the megakaryocyte-erythroid lineage, with synergy from early-acting factors. Option A is incorrect because TPO is not kidney-derived and does not act exclusively on mature megakaryocytes. Option C incorrectly assigns TPO to osteoblasts and the erythroid lineage. Option D is wrong because TPO is not a negative regulator restricted to fibroblasts. Option E is factually incorrect regarding basal circulating concentrations and JAK2 V617F activation."
  },
  {
    num: 342,
    stem: "A 55-year-old man with Parkinson disease treated with high-dose L-DOPA develops neutrophilia and an increased circulating CD34+ cell count. His neurologist suspects that sympathetic nervous system modulation may be affecting his marrow. Which statement best describes the normal physiological role of sympathetic innervation in bone marrow haemopoiesis?",
    options: {
      A: "Sympathetic nerves and non-myelinated Schwann cells are important regulators of stem cell quiescence or release from the bone marrow niche.",
      B: "Sympathetic nerves produce erythropoietin (EPO) directly within the marrow cavity, thereby stimulating erythroid expansion.",
      C: "Schwann cells in the bone marrow are exclusively responsible for producing granulocyte colony-stimulating factor (G-CSF) and have no interaction with HSCs.",
      D: "Sympathetic denervation of the marrow increases osteoblast numbers, which in turn secrete stem cell factor (SCF) and trap all HSCs in the endosteal niche permanently.",
      E: "Adrenergic signalling in the bone marrow acts only on mature megakaryocytes to enhance platelet release and does not influence HSC trafficking."
    },
    answer: "A",
    explanation: "Hoffbrand explicitly notes that sympathetic nerves and non-myelinated Schwann cells are important regulators of stem cell quiescence or release from the bone marrow niches. The textbook describes how the bone marrow microenvironment includes not only stromal cells, adipocytes, and endothelial cells but also neural elements that modulate HSC behaviour. Pharmacological manipulation of sympathetic tone can alter the circadian release of HSCs into peripheral blood, a phenomenon observed clinically during G-CSF mobilization protocols and in stress haemopoiesis. Option A accurately captures this neuro-haemopoietic axis. Option B is incorrect because EPO is synthesized predominantly in the kidney (90%), not by sympathetic nerves. Option C is incorrect because Schwann cells do not exclusively produce G-CSF; stromal cells are the major source. Option D overstates the effect of denervation and misrepresents SCF production. Option E incorrectly limits adrenergic action to megakaryocytes."
  },
  {
    num: 343,
    stem: "A 24-year-old woman presents with pancytopenia, reticulocytopenia, and a bone marrow biopsy showing less than 10% cellularity with abundant fat spaces. A diagnosis of severe aplastic anaemia is made. Her immunologist proposes that dysregulated cytokine signalling may be suppressing residual haemopoiesis. Which pair of cytokines is most consistently implicated as negative regulators of haemopoiesis in this context?",
    options: {
      A: "Interleukin-3 (IL-3) and stem cell factor (SCF) — these factors synergistically suppress HSC cycling and induce marrow fat accumulation.",
      B: "Transforming growth factor-β (TGF-β) and γ-interferon (IFN-γ) — these cytokines can exert a negative effect on haemopoiesis and may have a role in the development of aplastic anaemia.",
      C: "Erythropoietin (EPO) and thrombopoietin (TPO) — these lineage-specific factors inhibit erythroid and megakaryocytic production via PI3K-mediated apoptosis.",
      D: "Granulocyte colony-stimulating factor (G-CSF) and macrophage colony-stimulating factor (M-CSF) — these myeloid factors suppress lymphoid progenitors and cause pancytopenia.",
      E: "Tumour necrosis factor (TNF) and interleukin-1 (IL-1) — these inflammatory cytokines exclusively block neutrophil production and have no effect on stem cell survival."
    },
    answer: "B",
    explanation: "Hoffbrand states that cytokines such as transforming growth factor-β (TGF-β) and γ-interferon (IFN-γ) can exert a negative effect on haemopoiesis and may have a role in the development of aplastic anaemia. In contrast, most haemopoietic growth factors—including SCF, IL-3, GM-CSF, G-CSF, EPO, and TPO—stimulate proliferation, differentiation, or survival. The textbook highlights that TGF-β and IFN-γ act as brakes on haemopoiesis, and their overproduction or dysregulation in immune-mediated aplastic anaemia can suppress residual stem and progenitor cell function. Option B is therefore correct. Option A incorrectly labels IL-3 and SCF as negative regulators; they are early-acting stimulatory factors. Option C misrepresents EPO and TPO, which promote rather than inhibit their respective lineages. Option D is incorrect because G-CSF and M-CSF stimulate rather than suppress myelopoiesis. Option E is incorrect because TNF and IL-1, while inflammatory, do not exclusively block neutrophils and can actually stimulate stromal cells to produce growth factors."
  },
  {
    num: 344,
    stem: "A 68-year-old man with chronic kidney disease (CKD stage 4) and a haemoglobin of 82 g/L is started on recombinant human erythropoietin (rHuEPO). His nephrologist explains that endogenous EPO deficiency in CKD impairs erythropoiesis at a specific progenitor stage. Which statement most accurately describes the hierarchical relationship between burst-forming units-erythroid (BFU-E) and colony-forming units-erythroid (CFU-E), and their respective dependence on erythropoietin?",
    options: {
      A: "BFU-E is the more mature, EPO-dependent progenitor that directly produces haemoglobinized reticulocytes; CFU-E is the primitive progenitor that requires IL-3 and SCF but not EPO.",
      B: "CFU-E is the more primitive progenitor that gives rise to BFU-E; BFU-E then differentiates independently of EPO under the influence of TPO and GM-CSF.",
      C: "BFU-E is the earlier, more primitive erythroid progenitor that responds to IL-3, SCF, and EPO; CFU-E is the later progenitor that is critically dependent on EPO for survival and proliferation.",
      D: "BFU-E and CFU-E are identical progenitors assayed under different culture conditions; the distinction is purely technical and has no biological significance.",
      E: "CFU-E requires G-CSF for proliferation, while BFU-E requires M-CSF; neither progenitor responds to EPO because the EPO receptor is only expressed on reticulocytes."
    },
    answer: "C",
    explanation: "Hoffbrand describes the erythroid progenitor hierarchy in which burst-forming units-erythroid (BFU-E) represent the earlier, more primitive progenitors that form characteristic 'bursts' in culture, whereas colony-forming units-erythroid (CFU-E) are the more differentiated progenitors that form smaller colonies. The textbook notes that these progenitors can be identified in special cultures and that erythropoietin (EPO) is the principal lineage-specific factor for red cell production. BFU-E responds to multiple early-acting factors including IL-3, SCF, and EPO, while CFU-E is critically dependent on EPO for survival, proliferation, and differentiation into recognisable erythroid precursors. In CKD, EPO deficiency predominantly affects the CFU-E stage because these cells cannot survive without EPO signalling through the EPO receptor and JAK2/STAT5 pathway. Option C is correct. Option A reverses the hierarchy. Option B incorrectly states that CFU-E gives rise to BFU-E and introduces irrelevant factors. Option D denies the biological distinction, which is well established. Option E is completely incorrect regarding growth factor requirements and EPO receptor expression."
  },
  {
    num: 345,
    stem: "A 7-year-old child presents with a mediastinal mass, hyperleucocytosis (WBC 180 × 10⁹/L), and 85% blasts with a cortical T-cell immunophenotype (CD3+, CD4+, CD8+). Molecular profiling reveals an activating NOTCH1 mutation. During a teaching session, the consultant haematologist asks which normal physiological process is subverted by this mutation. Which statement best describes the role of NOTCH1 in normal haemopoiesis?",
    options: {
      A: "NOTCH1 is the master transcription factor for B-lymphocyte development from the common lymphoid progenitor; it activates PAX5 and immunoglobulin gene rearrangement.",
      B: "NOTCH1 drives megakaryocyte-erythroid progenitor (MkEP) commitment by binding GATA1 and FOG1 to activate globin gene transcription.",
      C: "NOTCH1 is essential for T-lymphocyte commitment from the mixed lymphoid progenitor; it directs T-cell-specific gene programmes and suppresses alternative B-cell fate that would otherwise be promoted by PAX5.",
      D: "NOTCH1 regulates granulocyte-monocyte progenitor (GMP) differentiation by antagonising PU.1 and CEBPα activity in myeloid precursors.",
      E: "NOTCH1 functions exclusively in the yolk sac during primitive erythropoiesis and is completely silenced in definitive bone marrow haemopoiesis."
    },
    answer: "C",
    explanation: "Hoffbrand lists NOTCH1 as a key transcription factor involved in T-lymphocyte development, alongside PAX5 in B-lymphocyte development. The textbook describes how transcription factors interact so that reinforcement of one transcription programme may suppress that of another lineage. In normal haemopoiesis, NOTCH1 signalling drives T-cell commitment from the mixed lymphoid progenitor by activating T-cell-specific genes and suppressing the B-cell programme that PAX5 would otherwise enforce. In T-cell acute lymphoblastic leukaemia, activating mutations in NOTCH1 constitutively activate this pathway, leading to uncontrolled T-cell proliferation. Option C correctly identifies this lineage-specific role and the cross-antagonism with PAX5. Option A incorrectly assigns B-cell development to NOTCH1; PAX5 is the B-cell master regulator. Option B misplaces NOTCH1 in the megakaryocyte-erythroid lineage, which is governed by GATA1 and FOG1. Option D incorrectly assigns NOTCH1 to myeloid lineage regulation, which is controlled by PU.1 and CEBP family members. Option E is incorrect because NOTCH1 is active in definitive haemopoiesis within the thymus and bone marrow."
  },
  {
    num: 346,
    stem: "Regarding the role of cell adhesion molecules (CAMs) in haemopoiesis and haematological cell trafficking, which of the following statements is most accurate?",
    options: {
      A: "Integrins are the only CAM family expressed on haemopoietic cells; selectins and cadherins are restricted to epithelial tissues and play no role in bone marrow homing or leucocyte trafficking.",
      B: "Selectins (E-, L-, and P-selectin) are particularly important in the immune system for helping white cells in trafficking and homing, while integrins link the extracellular matrix to intracellular signalling pathways in marrow precursors.",
      C: "Cadherins mediate platelet aggregation at sites of vascular injury by binding fibrinogen via GP IIb/IIIa, which is exclusively a cadherin family member.",
      D: "The immunoglobulin superfamily of CAMs is only expressed on mature lymphocytes and has no role in the attachment of bone marrow precursors to stromal cells or endothelium.",
      E: "All CAMs function solely as passive 'molecular glue' with no capacity to transduce intracellular signals that influence cell proliferation, differentiation, or survival."
    },
    answer: "B",
    explanation: "Hoffbrand describes cell adhesion molecules as glycoproteins divided into four large families: integrins, immunoglobulin superfamily, selectins, and cadherins. The textbook states that integrins are particularly important in linking the extracellular environment—including collagen, fibronectin, and fibrinogen—to intracellular signalling pathways, and that selectins (E-selectin, L-selectin, and P-selectin) are particularly important in the immune system in helping white cells in trafficking and homing. CAMs attach haemopoietic precursors, leucocytes, and platelets to the extracellular matrix, to endothelium, to other surfaces, and to each other. Option B accurately synthesises these two specific roles. Option A is incorrect because selectins and cadherins are indeed relevant to haemopoietic cells. Option C is incorrect because glycoprotein IIb/IIIa is an integrin (also called integrin αIIbβIIIa), not a cadherin. Option D is incorrect because the immunoglobulin superfamily is broadly expressed and participates in marrow precursor attachment. Option E is incorrect because integrins, in particular, transduce intracellular signals that influence proliferation and survival."
  },
  {
    num: 347,
    stem: "A research group is investigating why mantle cell lymphoma cells proliferate uncontrollably. They trace the defect to constitutive activation of a cell cycle regulatory protein. Which of the following best describes the normal function of the G1/S checkpoint and how its dysregulation drives malignant proliferation in haemopoietic cells?",
    options: {
      A: "Cyclin D1 binds to cyclin-dependent kinases (Cdk) and phosphorylates the retinoblastoma protein (Rb); this releases the transcription factor E2F, which drives expression of S-phase genes. Constitutive cyclin D1 activation bypasses the G1/S checkpoint.",
      B: "p53 directly phosphorylates cyclin B-Cdk1 complexes to promote entry into S phase; loss of p53 therefore arrests cells permanently in G1.",
      C: "The G1/S checkpoint is regulated exclusively by growth factor receptor tyrosine kinases (e.g., KIT, FLT3) and has no involvement of intracellular cyclin-Cdk complexes.",
      D: "Rb actively promotes E2F-driven transcription in its hypophosphorylated state; Cdk-mediated phosphorylation of Rb therefore suppresses S-phase entry.",
      E: "The G2/M checkpoint, not the G1/S checkpoint, is the primary brake on cell division in haemopoietic progenitors, and cyclin D1 has no role in this process."
    },
    answer: "A",
    explanation: "Hoffbrand describes the cell cycle as controlled by two checkpoints at the end of G1 and G2 phases, regulated by cyclin-dependent protein kinases (Cdk) and cyclins. The textbook notes that an example of the importance of these systems is demonstrated by mantle cell lymphoma, which results from constitutive activation of cyclin D1 due to a chromosomal translocation. In normal cells, cyclin D1 binds Cdk4/6 and phosphorylates Rb (retinoblastoma protein), which normally inhibits E2F. Phosphorylation of Rb releases E2F, allowing transcription of genes required for DNA replication and S-phase entry. Growth factor signalling via JAK/STAT, MAPK, and PI3K pathways upstream stimulates this process. Constitutive cyclin D1 activation—whether from t(11;14) in mantle cell lymphoma or other mechanisms—bypasses the normal requirement for growth factor stimulation and drives continuous cell cycle progression. Option A correctly describes this sequence. Option B incorrectly states that p53 promotes S-phase entry; p53 actually induces cell cycle arrest or apoptosis in response to DNA damage. Option C incorrectly excludes cyclin-Cdk complexes. Option D reverses the effect of Rb phosphorylation. Option E incorrectly dismisses the G1/S checkpoint."
  },
  {
    num: 348,
    stem: "Which of the following most accurately describes the relationship between the replicative lifespan of haemopoietic stem cells (HSCs), telomere biology, and the clinical consequences of stem cell ageing?",
    options: {
      A: "Human HSCs are capable of approximately 50 cell divisions; with each division, telomeres progressively shorten, eventually limiting viability and contributing to reduced stem cell numbers and relative myeloid skewing with ageing.",
      B: "Human HSCs possess unlimited replicative capacity due to high telomerase activity and do not exhibit telomere shortening; the decline in marrow function with age is purely due to stromal fibrosis.",
      C: "The Hayflick limit applies only to mature neutrophils and erythrocytes, which undergo 20 divisions before senescence; HSCs are exempt from this limit because they are predominantly quiescent.",
      D: "Telomere length increases with each HSC division because telomerase is constitutively active in all adult HSCs; stem cell exhaustion in older adults is caused by epigenetic drift rather than replicative senescence.",
      E: "HSCs undergo approximately 1000 divisions in vivo and only begin to show telomere shortening after age 80 years; the myeloid skewing observed with ageing is due to increased lymphoid progenitor apoptosis."
    },
    answer: "A",
    explanation: "Hoffbrand states that in humans, HSCs are capable of about 50 cell divisions (the 'Hayflick limit'), with progressive telomere shortening with each division affecting viability. The textbook also notes that with ageing, the number of stem cells falls and the relative proportion giving rise to lymphoid rather than myeloid progenitors also falls, a phenomenon termed myeloid skewing. These age-related changes have direct clinical consequences: older donors for allogeneic stem cell transplantation may provide grafts with reduced replicative capacity and impaired lymphoid reconstitution, and clonal haemopoiesis becomes more prevalent as stem cells accumulate mutations over time. Option A correctly integrates the Hayflick limit, telomere shortening, and the clinical phenotype of stem cell ageing. Option B is incorrect because telomerase activity is low in most adult HSCs. Option C incorrectly exempts HSCs from the Hayflick limit. Option D is wrong because telomere length decreases, not increases, with division. Option E grossly overestimates the number of possible divisions and misattributes myeloid skewing."
  },
  {
    num: 349,
    stem: "A bone marrow biopsy from a patient with acute leukaemia treated with high-dose cytarabine shows two distinct patterns of cell death: (i) individual cells with condensed chromatin, fragmented nuclei, and cell shrinkage without inflammation; and (ii) areas of coagulative necrosis with cell swelling, membrane rupture, and surrounding inflammatory infiltrate. A third pattern shows cells with abundant vacuoles containing digested organelles. Which statement best differentiates these three forms of cell death and their biological significance in haemopoiesis?",
    options: {
      A: "Pattern (i) is necrosis, which is a regulated process mediated by caspases; pattern (ii) is apoptosis, which triggers inflammation; pattern (iii) is autophagy, which always promotes cell survival.",
      B: "Pattern (i) is apoptosis, a caspase-mediated programmed cell death important for tissue homeostasis; pattern (ii) is necrosis, a passive death process with membrane rupture and inflammation; pattern (iii) is autophagy, a lysosomal digestion process that may be involved in cell death or in maintaining survival by recycling nutrients.",
      C: "Pattern (i) is autophagy, characterized by DNA fragmentation and caspase activation; pattern (ii) is apoptosis, resulting from ischemia and hyperthermia; pattern (iii) is necrosis, involving lysosomal digestion of organelles.",
      D: "All three patterns represent different stages of apoptosis; necrosis and autophagy are morphological variants of the same caspase-dependent pathway and are not biologically distinct processes.",
      E: "Pattern (i) is pyroptosis, an inflammatory form of programmed death; pattern (ii) is ferroptosis, driven by iron-dependent lipid peroxidation; pattern (iii) is autophagy. None of these are relevant to normal haemopoietic homeostasis."
    },
    answer: "B",
    explanation: "Hoffbrand describes apoptosis as a regulated process of physiological cell death characterized by cell shrinkage, condensation of nuclear chromatin, fragmentation of the nucleus, and cleavage of DNA at internucleosomal sites, mediated by caspases. It is important for maintaining tissue homeostasis in haemopoiesis and lymphocyte development. Necrosis is defined as death of cells and adjacent cells due to ischemia, chemical trauma, or hyperthermia, with cell swelling and plasma membrane loss of integrity, usually accompanied by an inflammatory infiltrate. Autophagy is the digestion of cell organelles by lysosomes; it may be involved in cell death, but in some situations also in maintaining cell survival by recycling nutrients. Option B correctly matches all three patterns to their definitions and biological roles. Option A reverses apoptosis and necrosis. Option C mislabels all three patterns. Option D incorrectly conflates the processes. Option E introduces pyroptosis and ferroptosis, which are not discussed in Hoffbrand Chapter 1 and are irrelevant to the textbook's framework."
  },
  {
    num: 350,
    stem: "Regarding the hierarchical organization of haemopoietic progenitors as described in Hoffbrand, which of the following statements most accurately describes the branching pattern from the pluripotent stem cell to lineage-restricted progenitors?",
    options: {
      A: "The pluripotent stem cell first divides into a mixed granulocyte-monocyte-erythroid-megakaryocyte progenitor and a separate pure lymphoid progenitor; there is no megakaryocyte-erythroid intermediate.",
      B: "The pluripotent stem cell gives rise to a megakaryocyte-erythroid progenitor (MkEP) and a mixed lymphoid-myeloid progenitor; the MkEP then divides into separate erythroid and megakaryocyte progenitors, while the lymphoid-myeloid progenitor divides into granulocyte-monocyte and mixed lymphoid progenitors.",
      C: "The pluripotent stem cell directly produces committed neutrophil, eosinophil, basophil, monocyte, erythroid, megakaryocyte, B-cell, T-cell, and NK-cell progenitors without any mixed intermediates.",
      D: "Erythroid and lymphoid lineages share a common mixed progenitor, while myeloid and megakaryocyte lineages share a separate common progenitor; this is the classical 'myeloid-lymphoid' dichotomy at the first branch point.",
      E: "The first branching event separates short-term HSCs from long-term HSCs; only short-term HSCs give rise to mixed progenitors, while long-term HSCs remain permanently undifferentiated."
    },
    answer: "B",
    explanation: "Hoffbrand describes the haemopoietic hierarchy in which the pluripotent stem cell gives rise to a mixed erythroid and megakaryocyte progenitor, which then divides into separate erythroid and megakaryocyte progenitors. The pluripotent stem cell also gives rise to a mixed lymphoid, granulocyte and monocyte progenitor, which divides into a progenitor of granulocytes and monocytes and a mixed lymphoid progenitor, from which B- and T-cell lymphocytes and natural killer (NK) cells develop. This branching pattern is illustrated in Fig. 1.2 of the textbook. Option B accurately describes this hierarchy, correctly identifying the megakaryocyte-erythroid progenitor (MkEP) and the mixed lymphoid-myeloid progenitor as the two major branches from the pluripotent stem cell. Option A incorrectly denies the existence of the MkEP. Option C incorrectly states that committed progenitors arise directly without mixed intermediates. Option D reverses the classical myeloid-lymphoid split. Option E confuses HSC self-renewal capacity with lineage commitment; both long-term and short-term HSCs can differentiate into progenitors."
  }
];
