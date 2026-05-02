import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Stethoscope } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-400">
          <Stethoscope className="h-4 w-4" />
          <span>Clinical Haematology Education</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
          Master Haematology with{" "}
          <span className="text-teal-400">Expert-Crafted</span>{" "}
          Study Tools
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Fellowship-level quizzes, detailed explanations, and clinical haematology notes
          based on{" "}
          <em className="text-teal-300 not-italic font-semibold">
            Hoffbrand’s Essential Haematology, 9th Edition
          </em>
          .
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-900/20 transition-transform hover:scale-[1.02] hover:bg-teal-500"
          >
            Start Chapter 1 Quiz
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            About Dr. S
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/50">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition-colors hover:border-teal-500/30 hover:bg-slate-800/60"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-100">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Chapter Quizzes",
    desc: "Single best answer (SBA) questions with detailed mechanistic explanations tied directly to Hoffbrand’s textbook.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Deep Explanations",
    desc: "Every answer includes a full, referenced explanation covering molecular mechanisms, classification criteria, and clinical rationale.",
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    title: "Exam-Grade Content",
    desc: "Designed for postgraduate Fellowship and Board-level haematology examinations — precise, nuanced, and unambiguous.",
    icon: <Stethoscope className="h-5 w-5" />,
  },
];
