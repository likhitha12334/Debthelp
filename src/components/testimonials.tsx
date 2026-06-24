
import "./testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Toronto, ON",
    image: "/images/testimonials/person1.jpg",
    review:
      "Debt Help made the entire process simple and stress-free. They helped me reduce my debt and regain financial confidence.",
  },
  {
    name: "Michael Brown",
    location: "Mississauga, ON",
    image: "/images/testimonials/person2.jpg",
    review:
      "The team explained every option clearly and supported me throughout the process. I highly recommend their services.",
  },
  {
    name: "Emily Wilson",
    location: "Ottawa, ON",
    image: "/images/testimonials/person3.jpg",
    review:
      "Excellent service! The consultation was free, professional, and helped me choose the best debt solution for my family.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">

      <div className="testimonial-title">
        <h2>What Our Clients Say</h2>
        <p>
          Thousands of Canadians have trusted us to help them become debt free.
        </p>
      </div>

      <div className="testimonial-container">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="profile-img"
            />

            <div className="stars">
              ★★★★★
            </div>

            <h3>{item.name}</h3>

            <span>{item.location}</span>

            <p>{item.review}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;