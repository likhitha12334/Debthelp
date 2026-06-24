
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-column">

          <img
            src="/images/logo.png"
            alt="Debt Help Logo"
            className="footer-logo"
          />

          <p>
            Debt Help Canada provides trusted debt relief
            solutions for Canadians. Our experts help you
            reduce debt and regain financial freedom.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Debt Solutions</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>📍 Ontario, Canada</p>

          <p>📞 +1 (289) 201-3339</p>

          <p>✉ info@debthelp.ca</p>

        </div>

        {/* Social Media */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">📘</a>

            <a href="#">📸</a>

            <a href="#">💼</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Debt Help Canada. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;