import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

const chapters = [
  { id: "1", title: "Haemopoiesis", questions: 10 },
  { id: "2", title: "Erythropoiesis and general aspects of anaemia", questions: 10 },
  { id: "3", title: "Hypochromic anaemias", questions: 10 },
  { id: "4", title: "Iron overload", questions: 10 },
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
