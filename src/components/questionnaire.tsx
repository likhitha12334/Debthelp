import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./questionnaire.css";

const Questionnaire = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "How much debt do you have?",
      options: [
        "Less than $10,000",
        "$10,000 - $25,000",
        "$25,000 - $50,000",
        "More than $50,000"
      ]
    },
    {
      question: "What type of debt do you have?",
      options: [
        "Credit Cards",
        "Personal Loan",
        "Tax Debt",
        "Other"
      ]
    },
    {
      question: "Are you currently employed?",
      options: [
        "Yes",
        "No",
        "Self Employed",
        "Retired"
      ]
    }
  ];

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState("");

  const nextQuestion = () => {
    if (!selected) {
      alert("Please select an option.");
      return;
    }

    // Redirect to form page when first question is answered
    if (step === 0) {
      navigate("/form");
      return;
    }

    setSelected("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert("Questionnaire Completed!");
    }
  };

  return (

    <section className="questionnaire">

      <div className="question-card">

        <span className="step">
          Step {step + 1} of {questions.length}
        </span>

        <h2>{questions[step].question}</h2>

        <div className="options">

          {questions[step].options.map((option, index) => (

            <label
              key={index}
              className={`option ${selected === option ? "active" : ""}`}
            >

              <input
                type="radio"
                name="question"
                value={option}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />

              {option}

            </label>

          ))}

        </div>

        <button
          className="continue-btn"
          onClick={nextQuestion}
        >
          Continue
        </button>

      </div>

    </section>

  );
};

export default Questionnaire;