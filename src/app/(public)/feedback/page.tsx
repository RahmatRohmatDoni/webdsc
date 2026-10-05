"use client";

import { useState, useEffect, Suspense, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";

const divisions = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Data Science",
  "Cloud Computing",
  "Game Development",
] as const;

const feedbackTypes = ["Saran", "Bug Report", "Pertanyaan", "Lainnya"] as const;

type Tab = "daftar" | "feedback";

function FeedbackForm() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "daftar" ? "daftar" : "feedback";

  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const [submitted, setSubmitted] = useState(false);

  // Pendaftaran form
  const [regNama, setRegNama] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regDivisi, setRegDivisi] = useState<string>(divisions[0]);
  const [regMotivasi, setRegMotivasi] = useState("");

  // Feedback form
  const [fbNama, setFbNama] = useState("");
  const [fbEmail, setFbEmail] = useState("");
  const [fbJenis, setFbJenis] = useState<string>(feedbackTypes[0]);
  const [fbPesan, setFbPesan] = useState("");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "daftar") setActiveTab("daftar");
  }, [searchParams]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
    setRegNama(""); setRegEmail(""); setRegDivisi(divisions[0]); setRegMotivasi("");
    setFbNama(""); setFbEmail(""); setFbJenis(feedbackTypes[0]); setFbPesan("");
  }

  const inputClass =
    "w-full rounded-md border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1C1917] px-4 py-2.5 text-sm text-[#1C1917] dark:text-[#FAFAF9] placeholder:text-stone-400 dark:placeholder:text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#D42B2B] focus:border-transparent transition-shadow";

  if (submitted) {
    return (
      <main className="min-h-screen">
        <section className="max-w-xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
            {activeTab === "daftar" ? "Pendaftaran" : "Feedback"}
          </h1>

          <div className="mt-16 border border-[#D6D3D1] dark:border-[#292524] rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#1C1917] dark:text-[#FAFAF9]">
              {activeTab === "daftar" ? "Pendaftaran diterima!" : "Terima kasih!"}
            </h2>
            <p className="mt-3 text-[#57534E] dark:text-[#A8A29E] leading-relaxed">
              {activeTab === "daftar"
                ? "Data kamu sudah kami terima. Tim DSC akan menghubungi kamu melalui email untuk langkah selanjutnya."
                : "Feedback kamu sudah kami terima. Kami akan meninjau dan menindaklanjuti sesegera mungkin."}
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="mt-6 text-sm font-medium text-[#D42B2B] underline underline-offset-4 hover:text-[#b82424] transition-colors"
            >
              {activeTab === "daftar" ? "Kirim pendaftaran lain" : "Kirim feedback lain"}
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-left">
          {activeTab === "daftar" ? "Daftar Anggota" : "Feedback"}
        </h1>
        <p className="mt-4 text-lg text-[#57534E] dark:text-[#A8A29E]">
          {activeTab === "daftar"
            ? "Gabung DSC — isi formulir di bawah, pilih divisi, dan mulai perjalananmu."
            : "Punya saran, pertanyaan, atau menemukan bug? Sampaikan langsung ke tim kami."}
        </p>
      </section>

      {/* Tabs */}
      <section className="max-w-xl mx-auto px-6 pb-4">
        <div className="flex gap-0 border-b border-stone-200 dark:border-stone-800">
          <button
            type="button"
            onClick={() => { setActiveTab("daftar"); setSubmitted(false); }}
            className={`px-5 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "daftar"
                ? "text-[#1C1917] dark:text-[#FAFAF9]"
                : "text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#FAFAF9]"
            }`}
          >
            Pendaftaran
            {activeTab === "daftar" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D42B2B]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("feedback"); setSubmitted(false); }}
            className={`px-5 py-3 text-sm font-medium transition-colors relative ${
              activeTab === "feedback"
                ? "text-[#1C1917] dark:text-[#FAFAF9]"
                : "text-[#78716C] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#FAFAF9]"
            }`}
          >
            Feedback
            {activeTab === "feedback" && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D42B2B]" />
            )}
          </button>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 pb-20">
        {activeTab === "daftar" ? (
          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            <div>
              <label htmlFor="reg-nama" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Nama Lengkap
              </label>
              <input
                id="reg-nama" type="text" required value={regNama}
                onChange={(e) => setRegNama(e.target.value)}
                placeholder="Nama lengkap kamu"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Email
              </label>
              <input
                id="reg-email" type="email" required value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="email@contoh.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="reg-divisi" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Pilih Divisi
              </label>
              <select
                id="reg-divisi" required value={regDivisi}
                onChange={(e) => setRegDivisi(e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                {divisions.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="reg-motivasi" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Kenapa mau gabung DSC?
              </label>
              <textarea
                id="reg-motivasi" required rows={4} value={regMotivasi}
                onChange={(e) => setRegMotivasi(e.target.value)}
                placeholder="Ceritakan sedikit tentang motivasi kamu..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 items-center rounded-lg bg-[#D42B2B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#b82424] active:scale-[0.98]"
            >
              Kirim Pendaftaran
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            <div>
              <label htmlFor="fb-nama" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Nama
              </label>
              <input
                id="fb-nama" type="text" required value={fbNama}
                onChange={(e) => setFbNama(e.target.value)}
                placeholder="Nama lengkap"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="fb-email" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Email
              </label>
              <input
                id="fb-email" type="email" required value={fbEmail}
                onChange={(e) => setFbEmail(e.target.value)}
                placeholder="email@contoh.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="fb-jenis" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Jenis Feedback
              </label>
              <select
                id="fb-jenis" required value={fbJenis}
                onChange={(e) => setFbJenis(e.target.value)}
                className={`${inputClass} appearance-none`}
              >
                {feedbackTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="fb-pesan" className="block text-sm font-medium text-[#1C1917] dark:text-[#FAFAF9] mb-1.5">
                Pesan
              </label>
              <textarea
                id="fb-pesan" required rows={4} value={fbPesan}
                onChange={(e) => setFbPesan(e.target.value)}
                placeholder="Tuliskan feedback kamu di sini..."
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 items-center rounded-lg bg-[#D42B2B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#b82424] active:scale-[0.98]"
            >
              Kirim Feedback
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default function FeedbackPage() {
  return (
    <Suspense>
      <FeedbackForm />
    </Suspense>
  );
}
