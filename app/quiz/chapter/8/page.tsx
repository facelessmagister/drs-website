import { BookOpen } from "lucide-react";
import QuizClient from "./QuizClient";

export default function QuizPage() {
  return (
    <div className="flex min-h-full flex-col">
      <div className="border-b border-slate-800/60 bg-slate-900/60 py-10 text-center">
        <BookOpen className="mx-auto mb-3 h-8 w-8 text-teal-400" />
        <h1 className="text-2xl font-extrabold text-slate-50 sm:text-3xl">
          Hoffbrand — Chapter 8: The white cells, part 1: granulocytes, monocytes and their benign disorders
        </h1>
        <p className="mt-2 text-slate-400">
          10 single best answer (SBA) questions · Expert level
        </p>
      </div>
      <QuizClient />
    </div>
  );
}

export function generateStaticParams() {
  return [{ id: "8" }];
}
