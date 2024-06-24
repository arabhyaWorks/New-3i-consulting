import React from "react";
import "./Footer.css";
import footerLogo from "../../Assets/Images/Logo.svg";
import darkMapImg from "../../Assets/Images/Icon (1).svg";
import messageImg from "../../Assets/Images/Message.svg";
import phoneImg from "../../Assets/Images/Icon.svg";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <footer>
          <div class="footer-wrap">
            <div class="container first_class">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={footerLogo}
                  />
                </div>
                <div class="  col-md-8 iconDiv d-flex justify-content-around col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      src={phoneImg}
                    />
                    <p className="mb-0 ml-2">
                      Call us <br />
                      +91 914 086 0949
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      src={messageImg}
                    />
                    <p className="mb-0 ml-2">
                      Mail us <br />
                      Info@3iconsulting.in
                    </p>
                  </div>{" "}
                  <div className="d-flex align-items-center">
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      src={darkMapImg}
                    />
                    <p className="mb-0 ml-2">
                      Location <br />
                      N. 12/304, Triplex-3, <br /> J-56 Shivraj Nagar Colony,
                      <br />
                      Mahmoorganj, Varanasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="second_class">
              <div class="container second_class_bdr">
                <div class="row">
                  <div class="col-md-2 footerCol p-1 col-sm-6">
                    <h6>
                      {" "}
                      <img className="mb-1" src={squareBlueBox} /> Quick Links
                    </h6>
                    <ul class="footer-links">
                      <li>
                        <NavLink to={"/"}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>About us</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Blog</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Services</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-2 footerCol p-1 col-sm-6">
                    <h6>
                      {" "}
                      <img className="mb-1" src={squareBlueBox} /> Our Partners{" "}
                    </h6>
                    <ul class="footer-category">
                      <li>
                        <NavLink to={"/"}>Sap</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Utopia </NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Drewry</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>HCL</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Twin Rivers</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Usha</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>DS</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Samsung</NavLink>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-md-2 footerCol p-1 col-sm-6">
                    <h6>
                      {" "}
                      <img className="mb-1" src={squareBlueBox} /> Our Services{" "}
                    </h6>
                    <ul class="footer-links">
                      <li>
                        <NavLink to={"/"}>Financial Consulting</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Business Management</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Consultant & Programs</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Company Management</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Insurance & Finance</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-2 footerCol p-1 col-sm-6">
                    <h6>
                      {" "}
                      <img
                        className="mb-1"
                        src={squareBlueBox}
                      /> Development{" "}
                    </h6>
                    <ul class="footer-links">
                      <li>
                        <NavLink to={"/"}>Web Development</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>SEO Development</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/"}>Development</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4 footerCol p-1 col-sm-6 subscribeDiv">
                    <h6>Subscribe</h6>
                    <p>Join Our Mailing List & to get our news</p>
                    <form class="">
                      <input type="text" placeholder="Your Email Address" />
                      <button class="newsletter_submit_btn" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="row m-0">
              <div class="container">
                <div class="copyright">
                  <p>
                    Copyright &copy;{" "}
                    <NavLink
                      style={{ color: "#33B1E9", textDecoration: "none" }}
                    >
                      3i consulting{" "}
                    </NavLink>
                  </p>

                  <p>
                    {" "}
                    Follow:{" "}
                    <NavLink style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </NavLink>
                    <NavLink style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faMeta} />
                    </NavLink>
                    <NavLink style={{ marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faX} />
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default React.memo(Footer);
