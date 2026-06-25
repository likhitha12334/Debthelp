
const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16">
      <div className="space-y-8 lg:max-w-xl">
        <div className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          ⭐ Canada's Trusted Debt Relief Experts
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Canadians Are Reducing Their Debt by <span className="text-sky-600">60% - 80%</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Speak with a Licensed Insolvency Trustee and discover government-approved debt relief solutions that can reduce your monthly payments.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm">
            ✔ Free Consultation
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm">
            ✔ No Upfront Fees
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm">
            ✔ Confidential Process
          </div>
        </div>

        <button className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
          Find My Solution
        </button>
      </div>

      <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-700 p-1 shadow-soft">
        <div className="h-full rounded-[1.75rem] bg-slate-950 p-6 sm:p-10">
          <img
            src="/images/hero.png"
            alt="Debt Help"
            className="h-full w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;