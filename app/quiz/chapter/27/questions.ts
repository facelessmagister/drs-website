export interface Question {
  num: number;
  stem: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    num: 311,
    stem: "A 28-year-old woman presents with a 3-week history of easy bruising and scattered petechiae on her lower limbs. She is otherwise well. Full blood count: Hb 128 g/L, WBC 6.5 × 10^9/L, platelets 18 × 10^9/L. The blood film shows reduced numbers of platelets that are large, with no other morphological abnormalities. She has no family history of bleeding and no recent infections or new medications. Which is the most appropriate initial management strategy?",
    options: {
      A: "Start high-dose dexamethasone 40 mg daily for 4 days as first-line therapy",
      B: "Administer intravenous immunoglobulin 2 g/kg to rapidly raise the platelet count",
      C: "Commence prednisolone 1 mg/kg/day and arrange proton pump inhibitor cover",
      D: "Offer splenectomy as definitive second-line therapy",
      E: "Initiate romiplostim subcutaneously to stimulate platelet production"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27) states that corticosteroids are the usual first-line therapy for immune thrombocytopenia (ITP) in adults, with 60–80% of patients responding. Prednisolone 1 mg/kg/day for 1–2 weeks followed by a slow taper over 4–6 weeks is the standard regimen, with a proton pump inhibitor and glucose monitoring required. High-dose dexamethasone 40 mg daily for 4 days is an alternative, not the usual first-line. IVIg is reserved for patients with acute bleeding, life-threatening haemorrhage, or before surgery because its effect lasts only 1–2 weeks. Splenectomy is second-line for patients refractory or intolerant to standard medical therapies. Romiplostim and other TPO-R agonists are used in chronic refractory ITP, not as initial therapy."
  },
  {
    num: 312,
    stem: "A 68-year-old man is admitted with severe epistaxis and extensive purpura. His platelet count is 6 × 10^9/L. He has atrial fibrillation and recently started taking quinine for nocturnal leg cramps. The bone marrow aspirate shows normal or increased megakaryocytes. Which is the most appropriate immediate management?",
    options: {
      A: "Commence systemic corticosteroids at 1 mg/kg/day prednisolone",
      B: "Discontinue quinine immediately and administer platelet concentrates if bleeding is severe",
      C: "Administer intravenous immunoglobulin 2 g/kg and start rituximab",
      D: "Begin heparin anticoagulation for suspected thrombotic microangiopathy",
      E: "Transfuse HLA-matched platelets and start romiplostim"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Table 27.5) identifies quinine as a particularly common cause of drug-induced immune thrombocytopenia. The platelet count is often <10 × 10^9/L, and the bone marrow shows normal or increased megakaryocyte numbers, reflecting peripheral immune-mediated destruction. The immediate treatment is to stop all suspected drugs. Platelet concentrates should be given to patients with severe bleeding, and IVIg may also be considered. Corticosteroids are appropriate for primary ITP, not drug-induced thrombocytopenia where removal of the offending agent is paramount. Heparin anticoagulation is contraindicated in this bleeding patient. Romiplostim is not indicated for acute drug-induced thrombocytopenia."
  },
  {
    num: 313,
    stem: "A 4-year-old boy from a consanguineous marriage is referred with a lifelong history of severe mucosal bleeding and prolonged bleeding after minor trauma. Laboratory studies show: platelets 220 × 10^9/L, PT 12 s, APTT 35 s, fibrinogen 3.0 g/L. Light transmission aggregometry shows absent aggregation with ADP, collagen, and arachidonic acid, but normal agglutination with ristocetin. Flow cytometry demonstrates CD41 and CD61 are each reduced to less than 5% of normal. Which inherited platelet disorder is most consistent with these findings?",
    options: {
      A: "Bernard–Soulier syndrome",
      B: "Platelet-type von Willebrand disease",
      C: "Glanzmann thrombasthenia, type I",
      D: "Grey platelet syndrome",
      E: "Wiskott–Aldrich syndrome"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27) describes Glanzmann thrombasthenia (GT) as an autosomal recessive disorder due to qualitative or quantitative abnormalities of platelet GPIIb (integrin αIIb) and GPIIIa (integrin β3). Platelet counts and morphology are normal. Platelet aggregation is absent with multiple agonists except ristocetin, which promotes agglutination through GPIb receptors. Flow cytometry shows CD41 (GPIIb) or CD61 (GPIIIa) <5% in type I GT, which is the most common form. Bernard–Soulier syndrome is characterized by thrombocytopenia, giant platelets, and absent ristocetin response. Platelet-type vWD shows intermittent thrombocytopenia from increased clearance of VWF-platelet complexes. Grey platelet syndrome shows thrombocytopenia with large, grey-appearing platelets lacking α-granules. WAS shows microthrombocytopenia, eczema, and immune dysregulation."
  },
  {
    num: 314,
    stem: "A 35-year-old man presents with recurrent epistaxis since his teenage years. Physical examination reveals multiple small red vascular lesions on his lips, tongue, and fingers. His father and sister have similar lesions and a history of recurrent nosebleeds. He reports occasional dark stools but no other symptoms. His platelet count, PT, and APTT are all normal. Which investigation is most important to perform at this stage?",
    options: {
      A: "Platelet aggregometry to assess for an inherited platelet disorder",
      B: "Screening for pulmonary arteriovenous malformations with contrast echocardiography",
      C: "Bone marrow biopsy to exclude myelodysplastic syndrome",
      D: "Coagulation screen including factor VIII and IX levels",
      E: "Antiplatelet antibody testing to diagnose immune thrombocytopenia"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Fig. 27.7a) describes hereditary haemorrhagic telangiectasia (HHT) as an autosomal dominant vascular dysplasia characterized by recurrent epistaxis, telangiectasias on the lips, tongue, and fingers, and arteriovenous malformations. A diagnosis requires three of four Curacao criteria: nose bleeds, telangiectasia, AV malformations, and a first-degree relative with HHT. All patients need to be screened for pulmonary AV shunts because these can cause significant morbidity including paradoxical embolism, stroke, and haemorrhage. Platelet aggregometry, bone marrow biopsy, coagulation screens, and antiplatelet antibody testing are not relevant to this vascular disorder where primary haemostasis and coagulation are intact."
  },
  {
    num: 315,
    stem: "A 14-year-old girl is referred for investigation of a mild bleeding tendency and easy bruising. Her full blood count shows platelets 95 × 10^9/L. The blood film reveals large platelets that appear pale and grey on light microscopy. She also has a history of frequent chest infections and poor wound healing. Which molecular abnormality best explains her condition?",
    options: {
      A: "Mutation in the NBEAL2 gene causing defective alpha-granule biogenesis",
      B: "Mutation in the WAS gene causing defective actin polymerization in haematopoietic cells",
      C: "Loss-of-function mutation in GP1BA causing increased affinity for von Willebrand factor multimers",
      D: "Mutation in the MPL gene causing defective thrombopoietin receptor signalling",
      E: "Deficiency of dense granules due to HPS1 gene mutation"
    },
    answer: "A",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Fig. 27.5) describes Grey Platelet Syndrome (GPS) as an autosomal recessive inherited disease due to mutation in the NBEAL2 gene, the product of which is involved in granule trafficking. It is characterized by thrombocytopenia with large, grey-appearing platelets due to absence or reduction of α-granules and their constituents. Patients demonstrate abnormalities in other haemopoietic cells with low white cell counts, impaired neutrophil function, immune dysregulation, and autoimmune defects. WAS causes microthrombocytopenia, eczema, and immune dysregulation through mutations in the WAS gene. Platelet-type vWD shows intermittent thrombocytopenia from a gain-of-function GP1BA mutation without grey platelets. MPL mutations cause thrombocytopenia due to impaired megakaryopoiesis. HPS1 mutations cause Hermansky–Pudlak syndrome with dense granule deficiency and albinism."
  },
  {
    num: 316,
    stem: "Regarding the pathogenesis of immune thrombocytopenia (ITP), which statement most accurately integrates the B-cell and T-cell mechanisms described in Hoffbrand?",
    options: {
      A: "Autoantibodies against platelet GPIb-IX-V are responsible in the majority of patients, and these primarily cause platelet destruction by blocking thrombin binding",
      B: "Cytotoxic CD8+ T cells inhibit megakaryopoiesis by targeting megakaryocytes and shorten platelet lifespan through increased platelet apoptosis, desialylation, and direct lysis",
      C: "Regulatory T-cell activity is increased in ITP, leading to enhanced suppression of autoreactive B cells and reduced autoantibody production",
      D: "Platelet survival is normal in ITP because thrombopoietin levels are markedly elevated, fully compensating for increased peripheral destruction",
      E: "Autoantibodies against platelet receptors exclusively stimulate complement deposition leading to platelet lysis, with no involvement of Fcγ receptor-mediated phagocytosis"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Fig. 27.2) illustrates the pathogenesis of ITP involving both B-cell and T-cell mechanisms. Cytotoxic CD8+ T cells inhibit megakaryopoiesis by targeting megakaryocytes and are responsible for shortened platelet lifespan through increased platelet apoptosis, desialylation, and direct lysis. In the majority of patients, autoantibodies are directed against GPIIb/IIIa receptors, not GPIb-IX-V. Regulatory T-cell activity is reduced, not increased, contributing to loss of immune tolerance. Platelet survival is decreased to a few hours or days, and thrombopoietin levels are normal or only moderately elevated, not markedly elevated. Autoantibodies contribute to thrombocytopenia by multiple mechanisms including Fcγ receptor-mediated phagocytosis in the spleen, desialylation, and complement deposition—not exclusively complement lysis."
  },
  {
    num: 317,
    stem: "Regarding platelet distribution in splenomegaly, which statement most accurately describes the quantitative and functional changes?",
    options: {
      A: "In massive splenomegaly, up to 90% of platelets may be sequestered in the spleen with a shortened platelet lifespan",
      B: "The normal splenic platelet pool accounts for approximately 10% of total platelet mass, and this decreases further in splenomegaly",
      C: "In splenomegaly, up to 90% of platelets may be sequestered in the spleen, but the platelet lifespan remains normal and bleeding is uncommon",
      D: "Splenic sequestration in splenomegaly is accompanied by accelerated immune-mediated platelet destruction and an increased risk of severe bleeding",
      E: "The splenic pool normally contains 70% of circulating platelets, and this increases to 90% only in hypersplenism due to portal hypertension"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Fig. 27.4) states that in splenomegaly, up to 90% of platelets may be sequestered in the spleen, compared with the normal 30% held in the splenic pool. Importantly, the platelet lifespan remains normal because sequestration does not accelerate destruction, and in the absence of additional haemostatic defects, the thrombocytopenia of splenomegaly is not usually associated with bleeding. Option A incorrectly states that platelet lifespan is shortened. Option B underestimates the normal splenic pool (30%, not 10%). Option D incorrectly attributes immune-mediated destruction and severe bleeding risk to simple splenic pooling. Option E misrepresents the normal distribution: normally 70% circulate and 30% reside in the spleen; in splenomegaly the spleen may hold up to 90% of total platelet mass."
  },
  {
    num: 318,
    stem: "Regarding inherited disorders of platelet glycoproteins, which statement most accurately compares Glanzmann thrombasthenia and Bernard–Soulier syndrome?",
    options: {
      A: "Both disorders show absent aggregation with all agonists including ristocetin, and both are characterized by normal platelet counts and morphology",
      B: "Glanzmann thrombasthenia is due to GPIIb/IIIa deficiency with normal platelet count and absent aggregation with multiple agonists except ristocetin, whereas Bernard–Soulier syndrome is due to GPIb-IX-V deficiency with thrombocytopenia, giant platelets, and absent ristocetin response",
      C: "Glanzmann thrombasthenia is inherited in an autosomal dominant pattern with mild bleeding, whereas Bernard–Soulier syndrome is X-linked recessive",
      D: "Both disorders are effectively treated with desmopressin, which corrects the underlying platelet adhesion defect by releasing von Willebrand factor multimers",
      E: "Bernard–Soulier syndrome is caused by mutations in the genes encoding GPIIb and GPIIIa, whereas Glanzmann thrombasthenia is caused by mutations in the genes encoding GPIbα, GPIbβ, and GPIX"
    },
    answer: "B",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27) describes Glanzmann thrombasthenia as an autosomal recessive disorder due to qualitative or quantitative abnormalities of GPIIb/IIIa, with normal platelet counts and morphology, and absent aggregation with multiple agonists except ristocetin, which acts through GPIb. Bernard–Soulier syndrome is an autosomal recessive disorder secondary to mutations in GPIBA, GPIBβ, and GPIX (three of the four subunits of the GPIb-IX-V complex), characterized by thrombocytopenia, giant platelets, and absent response to ristocetin. Both are autosomal recessive, not dominant or X-linked. Desmopressin is not curative for these disorders; platelet transfusions and recombinant activated factor VIIa are used for severe bleeding. Option E completely reverses the genetic defects responsible for each disorder."
  },
  {
    num: 319,
    stem: "Regarding the treatment of immune thrombocytopenia (ITP), which statement most accurately describes the mechanisms of action of the therapeutic agents?",
    options: {
      A: "Romiplostim is an orally active non-peptide thrombopoietin receptor agonist that binds the transmembrane domain of TPO-R",
      B: "Intravenous immunoglobulins increase platelet count by stimulating megakaryocyte proliferation through JAK2-mediated thrombopoietin synthesis",
      C: "Rituximab is an anti-CD20 monoclonal antibody that targets CD20+ B cells and lowers antiplatelet antibody production, producing a sustained response in approximately 30% at two years",
      D: "Corticosteroids primarily act by stimulating thrombopoietin receptor signalling to increase platelet production",
      E: "Fostamatinib is a thrombopoietin receptor agonist approved for patients who have failed one previous steroid-sparing therapy"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27) states that rituximab, an anti-CD20 monoclonal antibody, targets CD20+ B cells and lowers the production of antiplatelet antibodies, producing a sustained response in 60% of patients at six months and 30% at two years. Romiplostim is an Fc fusion recombinant protein given subcutaneously, not orally active; eltrombopag and avatrombopag are the orally active non-peptide agonists. IVIg rapidly increases platelet count by blocking macrophage Fc receptors, not by stimulating megakaryopoiesis. Corticosteroids suppress B- and T-cell-mediated autoantibody production and impair platelet destruction by macrophages. Fostamatinib is a spleen tyrosine kinase inhibitor that impairs the FcR signalling pathway involved in phagocytosis of autoantibody-coated platelets, not a TPO-R agonist."
  },
  {
    num: 320,
    stem: "Regarding vascular bleeding disorders, which statement most accurately describes the underlying pathophysiology?",
    options: {
      A: "Hereditary haemorrhagic telangiectasia (HHT) is caused by mutations in the fibrillin gene leading to defects in the elastic lamina of vessel walls",
      B: "In Ehlers–Danlos syndromes, the primary bleeding mechanism is a severe deficiency of von Willebrand factor, which impairs platelet adhesion to damaged collagen",
      C: "Senile purpura results from atrophy of the supporting tissues of cutaneous blood vessels, seen mainly on the dorsal aspects of the forearms and hands",
      D: "Scurvy causes bleeding through deficiency of vitamin K-dependent coagulation factors, leading to impaired gamma-carboxylation",
      E: "Henoch–Schönlein syndrome is an IgG-mediated vasculitis that typically presents in adults following streptococcal infection"
    },
    answer: "C",
    explanation: "Hoffbrand's Essential Haematology, 9th Edition (Chapter 27, Fig. 27.7b) describes senile purpura as caused by atrophy of the supporting tissues of cutaneous blood vessels, seen mainly on the dorsal aspects of the forearms and hands. HHT is caused by mutations of endothelial protein endoglin affecting blood vessels throughout the body, not fibrillin (which is associated with Marfan syndrome). Ehlers–Danlos syndromes present with purpura resulting from defective platelet adhesion due to hereditary collagen abnormalities, not VWF deficiency; platelet aggregometry most often does not show abnormalities. Scurvy results from vitamin C deficiency causing defective collagen formation, leading to perifollicular petechiae and mucosal haemorrhage, not vitamin K deficiency. Henoch–Schönlein syndrome is an IgA-mediated vasculitis usually seen in children, often following an acute upper respiratory tract infection, not IgG-mediated in adults."
  }
];
