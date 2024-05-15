import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import logoImage from "/RenanPiresLogo.png";
import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      navigate("/login");
    };
  
    const isLoggedIn = localStorage.getItem(ACCESS_TOKEN) !== null;
  
    return (
      <nav className="navbar-container">
        <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    );
  }
  
  export default Navbar;