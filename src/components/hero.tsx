
import Questionnaire from "./questionnaire";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start gap-16 px-6 py-16">

      {/* Left Side */}
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-3 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          ⭐ Canada's Trusted Debt Relief Experts
        </div>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Canadians Are Reducing Their Debt by{" "}
            <span className="text-sky-600">60% - 80%</span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Speak with a Licensed Insolvency Trustee and discover
            government-approved debt relief solutions that can reduce your
            monthly payments.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold shadow-sm">
            ✔ Free Consultation
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold shadow-sm">
            ✔ No Upfront Fees
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold shadow-sm">
            ✔ Confidential Process
          </div>
        </div>

        <button className="rounded-full bg-slate-950 px-8 py-4 text-white font-semibold hover:bg-slate-800">
          Find My Solution
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[480px] flex-shrink-0">
        <Questionnaire />
      </div>

    </section>
  );
};

export default Hero;