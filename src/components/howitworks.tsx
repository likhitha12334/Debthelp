
import "./howitworks.css";

const HowItWorks = () => {
  return (
    <section className="how-section">

      <div className="how-header">
        <h2>How It Works</h2>
        <p>
          Get started in just three simple steps and discover the
          best debt relief solution for your financial situation.
        </p>
      </div>

      <div className="how-container">

        <div className="how-card">

          <div className="circle">
            1
          </div>

          <h3>Complete the Questionnaire</h3>

          <p>
            Answer a few quick questions about your debt and
            financial situation.
          </p>

        </div>

        <div className="how-card">

          <div className="circle">
            2
          </div>

          <h3>Speak with an Expert</h3>

          <p>
            Our Licensed Insolvency Trustee will review your
            information and explain the available options.
          </p>

        </div>

        <div className="how-card">

          <div className="circle">
            3
          </div>

          <h3>Choose Your Solution</h3>

          <p>
            Select the debt solution that best fits your needs and
            begin your journey toward financial freedom.
          </p>

        </div>

      </div>

      <div className="how-btn-div">

        <button className="how-btn">
          Find My Solution
        </button>

      </div>

    </section>
  );
};

export default HowItWorks;