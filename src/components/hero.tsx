
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="tag">
          ⭐ Canada's Trusted Debt Relief Experts
        </p>

        <h1>
          Canadians Are Reducing Their Debt by
          <span> 60% - 80%</span>
        </h1>

        <p className="description">
          Speak with a Licensed Insolvency Trustee and discover
          government-approved debt relief solutions that can
          reduce your monthly payments.
        </p>

        <div className="hero-points">

          <div className="point">
            ✔ Free Consultation
          </div>

          <div className="point">
            ✔ No Upfront Fees
          </div>

          <div className="point">
            ✔ Confidential Process
          </div>

        </div>

        <button className="hero-btn">
          Find My Solution
        </button>

      </div>

      <div className="hero-right">

        <img
          src="/images/hero.png"
          alt="Debt Help"
        />

      </div>

    </section>
  );
};

export default Hero;