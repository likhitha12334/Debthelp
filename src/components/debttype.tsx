
import "./debttype.css";

const debtData = [
  {
    title: "Credit Card Debt",
    image: "/images/cards/credit-card.jpg",
  },
  {
    title: "Tax Debt",
    image: "/images/cards/tax-debt.jpg",
  },
  {
    title: "Payday Loans",
    image: "/images/cards/payday-loan.jpg",
  },
  {
    title: "Personal Loans",
    image: "/images/cards/personal-loan.jpg",
  },
  {
    title: "Student Loans",
    image: "/images/cards/student-loan.jpg",
  },
  {
    title: "Collection Accounts",
    image: "/images/cards/collection.jpg",
  },
];

const DebtTypes = () => {
  return (
    <section className="debt-section">

      <h2 className="debt-heading">
        Types of Debt We Can Help You With
      </h2>

      <p className="debt-subtitle">
        Find the right debt solution for your financial situation.
      </p>

      <div className="debt-grid">

        {debtData.map((item, index) => (
          <div className="debt-card" key={index}>

            <img
              src={item.image}
              alt={item.title}
              className="debt-image"
            />

            <h3>{item.title}</h3>

            <button className="debt-btn">
              Learn More
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default DebtTypes;