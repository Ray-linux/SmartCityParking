import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";




function NavBar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <h3>Smart City Parking</h3>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
        
            
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links nav-contact"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;