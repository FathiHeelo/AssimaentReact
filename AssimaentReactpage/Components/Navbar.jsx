import { FaBell } from "react-icons/fa6"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fickle<span className="flight">Flight</span></div>

      <ul className="nav-links">
        <li><a href="#">Explore</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Offers</a></li>
      </ul>

      <div className="user-section">
        <div className="notification">
          <FaBell className="bell-icon" />
          <span className="notification-dot"></span>
        </div>
        <img 
          src="https://randomuser.me/api/portraits/women/44.jpg" 
          alt="Profile" 
          className="profile-pic" 
        />
      </div>
    </nav>
  );
};

export default Navbar;
