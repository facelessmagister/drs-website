export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 281,
    stem: "A 7-year-old boy is referred with pallor, recurrent epistaxes, and multiple skin bruises. Physical examination reveals short stature, bilateral absent thumbs, and a low-set left kidney. Full blood count shows haemoglobin 62 g/L, white cell count 2.1 × 10⁹/L, neutrophils 0.4 × 10⁹/L, and platelets 14 × 10⁹/L. Peripheral blood lymphocyte culture with diepoxybutane shows markedly elevated chromosomal breakage. Which of the following is the most appropriate definitive management?",
    options: {
      A: "Long-term androgen therapy because it produces durable remission in the majority of children with congenital marrow failure",
      B: "Allogeneic stem cell transplantation using myeloablative conditioning with total body irradiation to eradicate the abnormal clone",
      C: "Allogeneic stem cell transplantation using reduced-intensity conditioning without irradiation because of cellular hypersensitivity to DNA damage",
      D: "Regular leucodepleted red cell and platelet transfusions with iron chelation as a permanent strategy",
      E: "Administration of eltrombopag because thrombopoietin receptor agonists stimulate tri-lineage recovery in Fanconi anaemia"
    },
    answer: "C",
    explanation: "This patient has Fanconi anaemia (FA), characterized by pancytopenia, skeletal abnormalities (absent thumbs), renal malformations, and elevated chromosomal breakage after diepoxybutane (DEB) testing, as described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Fig. 24.1 and text). FA is caused by inherited mutations in DNA repair genes (FANCA–Q). Allogeneic stem cell transplantation is the only curative therapy for the marrow failure. Because FA cells are exquisitely sensitive to DNA cross-linking damage, conditioning regimens must be mild and irradiation avoided. Androgens may improve blood counts but side effects are distressing and remissions rarely last more than 2 years. Supportive transfusions alone do not address the underlying stem cell failure. Eltrombopag is used in acquired aplastic anaemia, not FA."
  },
  {
    num: 282,
    stem: "A 16-year-old boy presents with progressive pancytopenia over 2 years. Examination reveals dystrophic nails, lacy reticular pigmentation of the upper chest and neck, and oral leukoplakia. Lymphocyte telomere length is markedly reduced, and genetic testing identifies a mutation in TERC. Which statement best describes his prognosis and management?",
    options: {
      A: "Allogeneic stem cell transplantation will eliminate the risk of epithelial cancers, pulmonary fibrosis, and cirrhosis because these are secondary to bone marrow failure",
      B: "Androgens may improve blood counts and potentially lengthen telomeres, but he remains at lifelong risk for epithelial cancers, pulmonary fibrosis, and hepatic complications",
      C: "Anti-thymocyte globulin and ciclosporin are the preferred first-line therapy because the pathophysiology is identical to idiopathic acquired aplastic anaemia",
      D: "High-dose melphalan conditioning followed by autologous stem cell transplantation is curative because the defect is confined to the haemopoietic compartment",
      E: "Regular granulocyte transfusions should be administered prophylactically because severe neutropenia is the predominant cytopenia"
    },
    answer: "B",
    explanation: "This patient has dyskeratosis congenita (DKC), characterized by the classic triad of nail dystrophy, reticular skin pigmentation, and oral leukoplakia, caused by mutations in telomerase complex genes (TERC, TERT, or DKC1) resulting in short telomeres, per Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Fig. 24.1). Androgens can improve blood counts and may lengthen telomeres. Allogeneic SCT cures the marrow failure but does not abolish the risk of epithelial cancers, pulmonary fibrosis, or cirrhosis because these are manifestations of the underlying telomere defect in non-haemopoietic tissues. ATG/ciclosporin targets the autoimmune pathophysiology of acquired aplastic anaemia and is not indicated for DKC. Autologous SCT would not correct the genetic defect. Granulocyte transfusions are rarely used and only for severe refractory infections."
  },
  {
    num: 283,
    stem: "A 26-year-old man presents with fatigue, gingival bleeding, and fever. Full blood count: haemoglobin 58 g/L, mean cell volume 98 fL, white cell count 1.4 × 10⁹/L, neutrophils 0.15 × 10⁹/L, platelets 9 × 10⁹/L, reticulocytes 6 × 10⁹/L. Bone marrow biopsy shows severely hypocellular marrow (<15% cellularity) with fat replacement and absence of megakaryocytes. There is no dysplasia, no excess blasts, and cytogenetics are normal. Flow cytometry reveals a small population of glycosylphosphatidylinositol-anchor deficient cells (CD55⁻, CD59⁻). He has no matched sibling donor. Which is the most appropriate first-line specific therapy?",
    options: {
      A: "Eculizumab monotherapy because the presence of a paroxysmal nocturnal haemoglobinuria clone mandates complement inhibition before any other intervention",
      B: "Anti-thymocyte globulin, ciclosporin, and eltrombopag because this triple combination is the preferred first-line immunosuppressive therapy for severe cases without a suitable donor",
      C: "Watchful waiting with supportive care because the PNH clone predicts a high rate of spontaneous recovery",
      D: "Allogeneic stem cell transplantation from an unrelated donor because the very low neutrophil count confers >80% mortality within 6 months without transplant",
      E: "Alemtuzumab because it is more effective than ATG and should be used as first-line therapy in severe acquired aplastic anaemia"
    },
    answer: "B",
    explanation: "This patient has very severe acquired aplastic anaemia (neutrophils <0.2 × 10⁹/L, platelets <20 × 10⁹/L, reticulocytes <20 × 10⁹/L, marrow cellularity <25%), per the modified Camitta criteria described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 24). The small PNH clone is commonly associated with aplastic anaemia and does not change the initial management. The preferred first-line therapy for severe acquired aplastic anaemia without a matched sibling donor is the triple combination of anti-thymocyte globulin (ATG), ciclosporin, and eltrombopag, which produces haematological response in approximately 75% of cases. Eculizumab treats PNH haemolysis, not the aplastic marrow failure. Watchful waiting is inappropriate for very severe disease. Unrelated donor SCT is generally reserved for those who fail immunosuppression. Alemtuzumab is reserved for refractory cases due to toxicity."
  },
  {
    num: 284,
    stem: "A 35-year-old woman with a history of successfully treated idiopathic aplastic anaemia 6 years ago presents with worsening fatigue, dark urine, and intermittent abdominal pain. Laboratory studies reveal haemoglobin 71 g/L, reticulocytes 220 × 10⁹/L, total bilirubin 52 μmol/L (unconjugated predominance), lactate dehydrogenase 1800 U/L, and undetectable haptoglobin. Platelet count is 85 × 10⁹/L. Which of the following is the most appropriate next step in her management?",
    options: {
      A: "Initiate prednisolone because the pattern of intravascular haemolysis with macrocytosis indicates a relapse of autoimmune aplastic anaemia",
      B: "Perform flow cytometry for glycosylphosphatidylinositol-linked proteins (CD55, CD59, and fluorescent aerolysin) to confirm paroxysmal nocturnal haemoglobinuria",
      C: "Commence intravenous iron supplementation because chronic haemosiderinuria inevitably causes iron deficiency that should be corrected before further investigation",
      D: "Perform a direct antiglobulin test because warm autoimmune haemolytic anaemia is the most common cause of intravascular haemolysis in this population",
      E: "Start long-term anticoagulation with warfarin because PNH is invariably complicated by portal vein thrombosis and prophylaxis is mandatory"
    },
    answer: "B",
    explanation: "This patient has classic features of paroxysmal nocturnal haemoglobinuria (PNH): intravascular haemolysis (elevated LDH, low haptoglobin, unconjugated hyperbilirubinaemia), dark urine (haemosiderinuria), a history of bone marrow failure, and mild thrombocytopenia, as described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Fig. 24.5). The diagnosis is confirmed by flow cytometry demonstrating loss of glycosylphosphatidylinositol (GPI)-linked surface proteins such as CD55 and CD59, or by fluorescent aerolysin (FLAER) staining. Prednisolone is not effective for PNH. While iron deficiency may develop from haemosiderinuria, the primary diagnostic step is flow cytometry. A direct antiglobulin test is used for autoimmune haemolytic anaemia, which is extravascular rather than intravascular. Anticoagulation is indicated for documented thrombosis or high-risk PNH, not prophylactically in all patients without evidence of thrombosis."
  },
  {
    num: 285,
    stem: "A 4-month-old infant is referred with severe anaemia (haemoglobin 48 g/L), normal white cell and platelet counts, and absent erythroblasts on bone marrow examination. Physical examination shows hypertelorism, micrognathia, and a thumb abnormality. The infant's red cell adenosine deaminase level is raised. Which statement regarding management is most accurate?",
    options: {
      A: "Androgens are the treatment of choice and produce durable remissions in over 80% of cases with minimal toxicity",
      B: "Allogeneic stem cell transplantation should be considered early because corticosteroid-refractory disease leads to rapid iron overload and endocrine dysfunction from chronic transfusions",
      C: "Anti-thymocyte globulin and ciclosporin should be initiated because the pathophysiology involves cytotoxic T-cell suppression of erythropoiesis",
      D: "Eculizumab is indicated because the absence of erythroblasts is due to complement-mediated destruction of erythroid progenitors",
      E: "Splenectomy is curative because the spleen is the primary site of red cell sequestration in congenital red cell aplasia"
    },
    answer: "B",
    explanation: "This infant has Diamond–Blackfan anaemia (DBA), characterized by macrocytic or normocytic anaemia with normal leucocyte and platelet counts, absent erythroblasts in the marrow, somatic abnormalities, and raised red cell adenosine deaminase, per Hoffbrand's Essential Haematology, 9th Edition (Chapter 24). DBA is caused by mutations in ribosomal protein genes (e.g., RPS19). Corticosteroids are first-line with an 80% initial response rate, but long-term use causes serious side effects including impaired growth, osteoporosis, and infections. Because severe iron overload from transfusions occurs relatively early (due to high non-transferrin bound iron from absent erythropoiesis), allogeneic stem cell transplantation from an HLA-matched donor should be considered in corticosteroid-refractory cases or those with significant steroid toxicity. ATG/ciclosporin is used for acquired aplastic anaemia. Eculizumab is for PNH. Splenectomy is not curative for DBA."
  },
  {
    num: 286,
    stem: "Regarding the molecular pathogenesis of Fanconi anaemia, which statement most accurately describes the underlying cellular defect?",
    options: {
      A: "Mutations in telomerase complex genes result in critically short telomeres that prevent stem cell renewal and cause pancytopenia",
      B: "Mutations in ribosomal protein genes disrupt 40S and 60S subunit assembly, leading to p53-mediated apoptosis of haemopoietic progenitors",
      C: "Mutations in any of at least 19 genes (FANCA–Q) disrupt DNA interstrand cross-link repair via failure to ubiquitinate the FANCD2:FANCI dimer",
      D: "Acquired somatic mutations in the X-linked PIGA gene prevent synthesis of the glycosylphosphatidylinositol anchor",
      E: "Germline mutations in the GATA2 transcription factor impair myeloid differentiation and cause monocytopenia with predisposition to myelodysplasia"
    },
    answer: "C",
    explanation: "Fanconi anaemia is a genetically heterogeneous disorder with mutations in at least 19 genes (FANCA through FANCQ), per Hoffbrand's Essential Haematology, 9th Edition (Chapter 24). The proteins encoded by these genes cooperate in a common cellular pathway that results in ubiquitination of the FANCD2:FANCI dimer, which is essential for normal DNA repair and protection against genetic damage. Cells from FA patients show abnormally high frequencies of spontaneous chromosomal breaks and are unable to repair DNA cross-links caused by reactive aldehydes. Option A describes dyskeratosis congenita. Option B describes Diamond–Blackfan anaemia and Shwachman–Diamond syndrome (ribosomal defects, Fig. 24.7). Option D describes paroxysmal nocturnal haemoglobinuria. Option E describes GATA2 deficiency, a separate inherited bone marrow failure syndrome."
  },
  {
    num: 287,
    stem: "Regarding the modified Camitta criteria for severity assessment and treatment selection in acquired aplastic anaemia, which statement is most accurate?",
    options: {
      A: "Severe aplastic anaemia requires all three peripheral blood criteria (neutrophils <0.5 × 10⁹/L, platelets <20 × 10⁹/L, reticulocytes <20 × 10⁹/L) plus marrow cellularity <25% to be met simultaneously",
      B: "Very severe aplastic anaemia is defined by neutrophils <0.2 × 10⁹/L in a patient meeting severe criteria, and this distinction strongly favours stem cell transplantation in young patients with matched sibling donors",
      C: "Non-severe aplastic anaemia should always receive immediate anti-thymocyte globulin because the disease inevitably progresses to severe or very severe disease within 6–12 months",
      D: "Eltrombopag is contraindicated in severe acquired aplastic anaemia because thrombopoietin receptor agonists increase the risk of clonal evolution to myelodysplasia or acute myeloid leukaemia",
      E: "Androgens are the preferred first-line therapy for severe acquired aplastic anaemia because they produce durable complete remissions in more than 80% of patients"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Table 24.4 and text), defines severe aplastic anaemia by marrow cellularity <25% and at least two of the following: neutrophils <0.5 × 10⁹/L, platelets <20 × 10⁹/L, or reticulocytes <20 × 10⁹/L. Very severe aplastic anaemia meets severe criteria and additionally shows neutrophils <0.2 × 10⁹/L. Because severe cases have high mortality in the first 6–12 months without specific therapy, allogeneic stem cell transplantation is favoured in patients less than 35 years old with severe disease and an HLA-matched sibling donor. Non-severe cases may have a transient or chronic course with ultimate recovery and do not require immediate ATG. Eltrombopag is now recommended as part of first-line triple therapy (ATG, ciclosporin, eltrombopag). Androgens do not improve survival and produce only transient responses."
  },
  {
    num: 288,
    stem: "Regarding the pathophysiology of paroxysmal nocturnal haemoglobinuria (PNH), which statement most accurately describes the mechanistic basis of the clinical triad?",
    options: {
      A: "Inherited mutations in the TERT gene produce critically short telomeres that render erythrocytes susceptible to complement-mediated intravascular lysis",
      B: "Acquired somatic mutations in the X-linked PIGA gene result in deficient synthesis of the glycosylphosphatidylinositol anchor, causing loss of CD55 and CD59 and rendering cells susceptible to complement lysis",
      C: "Autoantibodies directed against the erythropoietin receptor block erythroid signal transduction and cause pure red cell aplasia with relative preservation of myelopoiesis and megakaryopoiesis",
      D: "Mutations in the CD59 gene prevent transcription of the membrane inhibitor of reactive lysis, leading to uncontrolled terminal complement activation on the red cell surface",
      E: "Deficiency of complement factor H leads to uncontrolled activation of the alternative pathway, causing intravascular haemolysis and thrombotic microangiopathy"
    },
    answer: "B",
    explanation: "Paroxysmal nocturnal haemoglobinuria is an acquired clonal disorder caused by somatic mutations in the X-linked PIGA gene, which is essential for formation of the glycosylphosphatidylinositol (GPI) anchor, as described in Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Fig. 24.5). The deficiency results in absence of GPI-linked proteins including CD55 (decay-accelerating factor, DAF) and CD59 (membrane inhibitor of reactive lysis, MIRL) from the surface of red cells, white cells, and platelets. Without these complement regulatory proteins, red cells are susceptible to chronic intravascular haemolysis by complement. Option A describes dyskeratosis congenita. Option C describes immune-mediated pure red cell aplasia. Option D is incorrect because CD59 is not mutated; its expression is lost due to the GPI anchor defect. Option E describes atypical haemolytic uraemic syndrome."
  },
  {
    num: 289,
    stem: "Which statement most accurately integrates the molecular genetics and ribosomal dysfunction underlying the inherited bone marrow failure syndromes?",
    options: {
      A: "Mutations in FANCD2 disrupt ribosomal RNA processing, leading to impaired translation of globin mRNA and ineffective erythropoiesis",
      B: "Mutations in SBDS impair ribosome assembly, while mutations in RPS19 and other ribosomal protein genes underlie Diamond–Blackfan anaemia; both converge on ribosomal stress pathways that affect haemopoietic stem cell survival",
      C: "Mutations in the PIGA gene encode a protein required for ribosomal subunit joining, explaining the pancytopenia observed in paroxysmal nocturnal haemoglobinuria",
      D: "The GATA2 transcription factor directly regulates ribosomal protein gene transcription, and its mutation causes ribosomal stress and pancytopenia in severe congenital neutropenia",
      E: "Telomerase is required for transcription of the 45S ribosomal RNA precursor in the nucleolus, and short telomeres in dyskeratosis congenita directly reduce ribosomal biogenesis"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 24, Fig. 24.7), illustrates that Shwachman–Diamond syndrome results from mutations in SBDS, a gene involved in ribosome assembly, while Diamond–Blackfan anaemia is caused by mutations in genes encoding ribosomal proteins such as RPS19. Both disorders converge on ribosomal stress pathways that impair haemopoietic cell survival. The figure also shows that the acquired myelodysplasia 5q⁻ syndrome affects ribosome synthesis. Option A is incorrect because FANCD2 is involved in DNA repair, not ribosomal RNA processing. Option C is incorrect because PIGA is required for GPI anchor synthesis, not ribosomal assembly. Option D is incorrect because GATA2 mutations cause pancytopenia and immunodeficiency through transcriptional defects in haemopoiesis, not ribosomal protein gene regulation. Option E is incorrect because telomerase maintains telomere length; it is not required for 45S rRNA transcription."
  },
  {
    num: 290,
    stem: "Which statement most accurately reflects contemporary principles of supportive care and allogeneic stem cell transplantation for severe acquired aplastic anaemia as described in Hoffbrand's Essential Haematology, 9th Edition?",
    options: {
      A: "All blood products should be leucodepleted and irradiated to prevent alloimmunization and transfusion-associated graft-versus-host disease, and granulocyte transfusions are frequently administered to all febrile neutropenic patients",
      B: "If the patient is a transplant candidate, transfusions prior to transplant should be minimized to reduce the risk of alloimmunization and graft rejection",
      C: "Peripheral blood stem cells are preferred over bone marrow as the stem cell source because they engraft more rapidly and reduce the risk of graft failure in aplastic anaemia",
      D: "Non-myeloablative transplants are contraindicated in acquired idiopathic aplastic anaemia over 40 years because reduced-intensity conditioning leads to unacceptably high rates of graft failure",
      E: "Rabbit anti-thymocyte globulin is superior to horse ATG because it depletes CD4+ T cells and regulatory T cells less severely, thereby preserving immune tolerance"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 24), emphasizes that all blood products in aplastic anaemia should be leucodepleted (to reduce alloimmunization) and irradiated (to prevent transfusion-associated GVHD from live donor lymphocytes). Granulocyte transfusions are rarely used and reserved for severe bacterial or fungal infections not responding to antibiotics. If a patient is a transplant candidate, transfusions prior to transplant should be minimized because prior alloimmunization increases the risk of graft rejection. Marrow rather than peripheral blood is the preferred stem cell source because the risk of GVHD is lower with marrow grafts. Non-myeloablative transplants are used in congenital aplastic anaemia and for selected patients with acquired idiopathic aplastic anaemia over 40 years. A randomized trial showed superiority of horse ATG over rabbit ATG, possibly because rabbit ATG depletes CD4+ T cells and Tregs more severely."
  }
];
