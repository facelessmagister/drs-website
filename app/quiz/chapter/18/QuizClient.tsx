"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, XCircle, BookOpen } from "lucide-react";
import { questions } from "./questions";

export default function QuizClient() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [showSummary, setShowSummary] = useState(false);

  const answered = answers[current] !== null;
  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const pct = Math.round((score / questions.length) * 100);

  function selectAnswer(opt: string) {
    if (answers[current] !== null) return;
    const next = [...answers];
    next[current] = opt;
    setAnswers(next);
  }

  function goNext() {
    if (!answered) return;
    if (current === questions.length - 1) {
      setShowSummary(true);
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function goPrev() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function jump(idx: number) {
    setCurrent(idx);
    setShowSummary(false);
  }

  function restart() {
    setCurrent(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowSummary(false);
  }

  if (showSummary) {
    return (
      <div className="mx-auto w-full max-w-2xl px-6 py-10">
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 text-center animate-fade-in">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-teal-400" />
          <h2 className="text-2xl font-extrabold text-slate-50 sm:text-3xl">Quiz Complete!</h2>

          <div className="mx-auto my-6 flex h-36 w-36 flex-col items-center justify-center rounded-full border-8 border-slate-700 border-t-teal-500 shadow-lg animate-spin-in">
            <span className="text-4xl font-extrabold text-slate-50">{score}</span>
            <span className="text-sm text-slate-400">/ {questions.length} ({pct}%)</span>
          </div>

          <p className="mx-auto max-w-md text-slate-300">
            {pct >= 80
              ? "Excellent work! You have a strong grasp of Chapter 18."
              : pct >= 50
              ? "Good effort. Review the explanations to strengthen your understanding."
              : "Keep studying! Hoffbrand Chapter 18 covers these concepts in detail."}
          </p>

          <div className="mx-auto mt-6 grid max-w-xs grid-cols-5 gap-2">
            {questions.map((qq, i) => (
              <button
                key={i}
                onClick={() => jump(i)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-transform hover:scale-105
                  ${answers[i] === qq.answer
                    ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "bg-red-500/15 text-red-400 ring-1 ring-red-500/30"}
                `}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={restart}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
          >
            <RotateCcw className="h-4 w-4" />
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-8">
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-xs font-medium text-slate-400">
          <span>Question {q.num} of {questions.length}</span>
          <span>{questions.length} total</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={q.num} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 sm:p-8 animate-fade-in">
        <div className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-400">
          Question {q.num}
        </div>
        <p className="mb-6 text-base leading-relaxed text-slate-100 sm:text-lg">{q.stem}</p>

        <div className="flex flex-col gap-3">
          {(["A","B","C","D","E"] as const).map((opt) => {
            const state = answered
              ? opt === q.answer
                ? "correct"
                : opt === answers[current]
                ? "wrong"
                : "disabled"
              : "idle";

            const base =
              "flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all";
            const idle = "border-slate-600 bg-slate-700/30 hover:border-teal-500/50 hover:bg-slate-700/50 cursor-pointer";
            const correct = "border-emerald-500/40 bg-emerald-500/10 cursor-default";
            const wrong = "border-red-500/40 bg-red-500/10 cursor-default";
            const disabled = "border-slate-700/40 bg-slate-800/30 opacity-60 cursor-default";

            const cls =
              state === "idle"
                ? `${base} ${idle}`
                : state === "correct"
                ? `${base} ${correct}`
                : state === "wrong"
                ? `${base} ${wrong}`
                : `${base} ${disabled}`;

            return (
              <button
                key={opt}
                onClick={() => selectAnswer(opt)}
                disabled={answered}
                className={cls}
              >
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors
                    ${state === "correct" ? "bg-emerald-500" : state === "wrong" ? "bg-red-500" : "bg-teal-600"}
                  `}
                >
                  {state === "correct" ? <CheckCircle className="h-4 w-4" /> : state === "wrong" ? <XCircle className="h-4 w-4" /> : opt}
                </span>
                <span className="text-sm leading-relaxed text-slate-100">{q.options[opt]}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mt-6 border-t border-slate-700/50 pt-5 animate-fade-in">
            <div
              className={`mb-2 flex items-center gap-2 text-sm font-bold
                ${answers[current] === q.answer ? "text-emerald-400" : "text-red-400"}
              `}
            >
              {answers[current] === q.answer ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              {answers[current] === q.answer
                ? "Correct!"
                : `Incorrect — the correct answer was ${q.answer}`}
            </div>

            <div className="rounded-xl border-l-4 border-teal-500 bg-slate-900/60 p-4">
              <p className="text-sm leading-relaxed text-slate-300"><strong className="text-slate-100">Explanation:</strong>{" "}{q.explanation}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="inline-flex items-center gap-1.5 rounded-xl bg-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-600 disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>

        <div className="flex gap-2">
          {questions.map((qq, i) => (
            <button
              key={i}
              onClick={() => jump(i)}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-bold transition-colors
                ${i === current ? "bg-teal-600 text-white" : ""}
                ${i !== current && answers[i] === null ? "bg-slate-700 text-slate-300 hover:bg-slate-600" : ""}
                ${i !== current && answers[i] !== null && answers[i] === qq.answer ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30" : ""}
                ${i !== current && answers[i] !== null && answers[i] !== qq.answer ? "bg-red-500/15 text-red-400 ring-1 ring-red-500/30" : ""}
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={!answered}
          className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500 disabled:opacity-40"
        >
          {current === questions.length - 1 ? "See Results" : "Next"}<ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
