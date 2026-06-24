
import "./Header.css";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">


        <div className="logo-section">
          <img
            src={logo}
            alt="Debt Help Logo"
            className="logo"
          />
          <div className="brand-info">
            <h2 className="brand-name">Debt Help</h2>
            <p className="brand-tagline">Financial Freedom</p>
          </div>
        </div>

        {/* Phone Button */}

        <div className="phone-section">
          <a href="tel:+12892013339" className="phone-btn">
            📞 1-289-201-3339
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;