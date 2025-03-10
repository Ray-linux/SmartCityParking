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
                to="/cars"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                Car Spaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/bikes"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bike Spaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links nav-contact"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                My Profile
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