const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          
          <h3>Fickle Flight</h3>
          <p>
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and hotel bookings. We also have all your flight needs in your online shop.
          </p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/how-we-work">How we work</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/account">Account</a></li>
            <li><a href="/support-center">Support Center</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li><a href="/covid-advisory">Covid Advisory</a></li>
            <li><a href="/airline-fees">Airline Fees</a></li>
            <li><a href="/tips">Tips</a></li>
            <li><a href="/quarantine-rules">Quarantine Rules</a></li>
          </ul>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;