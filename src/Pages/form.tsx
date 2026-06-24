
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    province: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted Successfully");
  };

  return (
    <div className="form-page">

      <div className="form-card">

        <button className="back-btn" onClick={() => navigate("/")} type="button">
          ← Back
        </button>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <h1>Let's Get You Connected</h1>

        <p>
          Enter your details so our team can follow up about your
          assessment.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="input-group">

              <label>First Name</label>

              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <label>Last Name</label>

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="+1 (___) ___-____"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Province</label>

            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >

              <option value="">Select Your Province</option>

              <option>Alberta</option>

              <option>British Columbia</option>

              <option>Manitoba</option>

              <option>New Brunswick</option>

              <option>Newfoundland and Labrador</option>

              <option>Nova Scotia</option>

              <option>Ontario</option>

              <option>Prince Edward Island</option>

              <option>Quebec</option>

              <option>Saskatchewan</option>

            </select>

          </div>

          <button type="submit">
            Continue
          </button>

        </form>

      </div>

    </div>
  );
};

export default Form;