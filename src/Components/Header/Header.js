import React, { useState, useEffect } from "react";
import logo from "../../Assets/Images/Logo.png";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="headerContainer container-fluid p-0 sticky-top">
      <nav className="navbar navbar-expand-lg headerNavbar navbar-light">
        <a className="navbar-brand ml-5 p-0 mr-0" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className={`nav-item ${active === "/" ? "active" : ""}`}>
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => setActive("/")}
              >
                Home
              </NavLink>
            </li>
            <li className={`nav-item ${active === "/about" ? "active" : ""}`}>
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => setActive("/about")}
              >
                About Us
              </NavLink>
            </li>
            <li
              className={`nav-item ${active === "/services" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link"
                to="/services"
                onClick={() => setActive("/services")}
              >
                Services
              </NavLink>
            </li>

            <li
              className={`nav-item ${active === "/products" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link"
                to="/products"
                onClick={() => setActive("/products")}
              >
                Products
              </NavLink>
            </li>

            <li className={`nav-item ${active === "/contact" ? "active" : ""}`}>
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => setActive("/contact")}
              >
                Contact Us
              </NavLink>
            </li>
            <li
              className={`nav-item ${active === "/consulting" ? "active" : ""}`}
            >
              <NavLink
                className="nav-link"
                to="/consulting"
                onClick={() => setActive("/consulting")}
              >
                Get Consulting
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default React.memo(Header);
