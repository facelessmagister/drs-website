import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const chapters = [
  { id: "1", title: "Haemopoiesis", questions: 20 },
  { id: "2", title: "Erythropoiesis and general aspects of anaemia", questions: 20 },
  { id: "3", title: "Hypochromic anaemias", questions: 10 },
  { id: "4", title: "Iron overload", questions: 10 },
  { id: "5", title: "Megaloblastic anaemias and other macrocytic anaemias", questions: 10 },
  { id: "6", title: "Haemolytic anaemias", questions: 10 },
  { id: "7", title: "Genetic disorders of haemoglobin", questions: 10 },
  { id: "8", title: "The white cells, part 1: granulocytes, monocytes and their benign disorders", questions: 10 },
  { id: "9", title: "The white cells, part 2: lymphocytes and their benign disorders", questions: 10 },
  { id: "10", title: "The spleen", questions: 10 },
  { id: "11", title: "The aetiology and genetics of haematological neoplasia", questions: 10 },
  { id: "12", title: "Management of haematological malignancy", questions: 10 },
  { id: "13", title: "Acute myeloid leukaemia", questions: 10 },
  { id: "14", title: "Chronic myeloid leukaemia", questions: 10 },
  { id: "15", title: "Myeloproliferative neoplasms", questions: 10 },
  { id: "16", title: "Myelodysplastic neoplasms", questions: 10 },
  { id: "17", title: "Acute lymphoblastic leukaemia", questions: 10 },
  { id: "18", title: "The chronic lymphocytic leukaemias", questions: 10 },
  { id: "19", title: "Hodgkin lymphoma", questions: 10 },
  { id: "20", title: "Non-Hodgkin lymphomas 1: General aspects", questions: 10 },
  { id: "21", title: "Non-Hodgkin lymphomas 2: Individual diseases", questions: 10 },
  { id: "22", title: "Multiple myeloma and related plasma cell neoplasms", questions: 10 },
  { id: "23", title: "Amyloid", questions: 10 },
  { id: "24", title: "Aplastic anaemia and bone marrow failure syndromes", questions: 10 },
  { id: "25", title: "Haemopoietic stem cell transplantation", questions: 10 },
  { id: "26", title: "Platelets, coagulation and normal haemostasis", questions: 10 },
  { id: "27", title: "Bleeding disorders caused by platelet and vascular abnormalities", questions: 10 },
  { id: "28", title: "Hereditary coagulation disorders", questions: 10 },
  { id: "29", title: "Acquired coagulation disorders and thrombotic microangiopathies", questions: 10 },
  { id: "30", title: "Thrombosis 1: Pathogenesis and diagnosis", questions: 10 },
  { id: "31", title: "Thrombosis 2: Treatment", questions: 10 },
  { id: "32", title: "Haematological changes in systemic diseases", questions: 10 },
  { id: "33", title: "Blood transfusion", questions: 10 },
  { id: "34", title: "Pregnancy and neonatal haematology", questions: 10 },
];

export default function QuizIndexPage() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="border-b border-slate-800/60 bg-slate-900/60 py-10 text-center">
        <BookOpen className="mx-auto mb-3 h-8 w-8 text-teal-400" />
        <h1 className="text-2xl font-extrabold text-slate-50 sm:text-3xl">
          Hoffbrand Chapter Quizzes
        </h1>
        <p className="mt-2 text-slate-400">
          Single best answer (SBA) questions · Expert level
        </p>
      </div>

      <div className="mx-auto w-full max-w-3xl px-6 py-10">
        <div className="grid gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              href={`/quiz/chapter/${ch.id}`}
              className="group flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-all hover:border-teal-500/30 hover:bg-slate-800/60"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-600/20 text-teal-400">
                  <span className="text-lg font-bold">{ch.id}</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-50 group-hover:text-teal-400 transition-colors">
                    Chapter {ch.id}: {ch.title}
                  </h2>
                  <p className="text-sm text-slate-400">
                    {ch.questions} questions
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
