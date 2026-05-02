import { MapPin, GraduationCap, Hospital } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
          <GraduationCap className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
          About Dr. S
        </h1>
        <p className="mt-3 text-lg text-slate-400">
          Medical Lecturer &amp; Physician — Haematology Trainee
        </p>
      </div>

      <div className="mx-auto w-full max-w-2xl space-y-6">
        <div className="flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-5">
          <Hospital className="mt-1 h-5 w-5 shrink-0 text-teal-400" />
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Affiliation</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Medical Lecturer and Physician at{" "}
              <strong className="text-slate-200">
                Hospital Pakar Universiti Sains Malaysia (HPUSM)
              </strong>
              , Kubang Kerian, Kelantan, Malaysia. Currently training to become a
              specialist in Clinical Haematology.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-5">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-400" />
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Location</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              Kubang Kerian, Kelantan, Malaysia.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-5">
          <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-teal-400" />
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Purpose of this site</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">
              This website hosts educational notes and examination-level quizzes for
              postgraduate haematology trainees. All content is derived from{" "}
              <em>Hoffbrand Essential Haematology, 9th Edition (2024)</em>, and
              is structured for Fellowship/Board-level exam preparation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
