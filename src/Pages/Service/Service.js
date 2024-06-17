import React, { useState } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import serviceBanner from "../../Assets/Images/Group 22253.png";
import blueSquareImg from "../../Assets/Images/Rectangle 8.png";
import "./Service.css";
import techImg from "../../Assets/Images/Group 11659.svg";
import appImg from "../../Assets/Images/Group 11658.svg";
import digitalMediaImg from "../../Assets/Images/Group 11657.svg";
import cloudImg from "../../Assets/Images/Group 11656.svg";
import digitalImg from "../../Assets/Images/Group 11658.svg";
import helpdeskImg from "../../Assets/Images/Group 11653.svg";
import serverImg from "../../Assets/Images/Group 11659.svg";
import { NavLink } from "react-router-dom";
import LatestTechnology from "./LatestTechnology";

function Service() {
  const [activeTab, setActiveTab] = useState("tech");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <img src={serviceBanner} style={{ width: "100%" }} />
      <div className="container-fluid pb-4 my-5 ServiceSection">
        <div className="text-center pt-5">
          <h6 className="">
            {" "}
            <img src={blueSquareImg} /> We Are Expertise In{" "}
          </h6>
          <h3 className="">
            We Provide Professional <br />
            Business Solutions.
          </h3>
        </div>

        <div class="container serviceBoxContainer  my-5">
          <div class="row serviceRow">
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={techImg} />
                  </i>
                  <h4>
                    Tech <br /> Consulting
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={appImg} />
                  </i>
                  <h4>
                    App <br /> Development
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={digitalMediaImg} />
                  </i>
                  <h4>
                    Digital Media <br /> Management
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={cloudImg} />
                  </i>
                  <h4>
                    Cloud <br /> Solutions
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={digitalImg} />
                  </i>
                  <h4>
                    Digital <br /> Security
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={helpdeskImg} />
                  </i>
                  <h4>
                    Helpdesk & <br /> Support
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={serverImg} />
                  </i>
                  <h4>
                    Server <br /> Deployment
                  </h4>
                </div>
              </NavLink>
            </div>
            {/* dummy boxes */}
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={techImg} />
                  </i>
                  <h4>
                    Tech <br /> Consulting
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={appImg} />
                  </i>
                  <h4>
                    App <br /> Development
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={digitalMediaImg} />
                  </i>
                  <h4>
                    Digital Media <br /> Management
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={cloudImg} />
                  </i>
                  <h4>
                    Cloud <br /> Solutions
                  </h4>
                </div>
              </NavLink>
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/"}>
                <div class="service-box">
                  <i class="icon">
                    <img src={digitalImg} />
                  </i>
                  <h4>
                    Digital <br /> Security
                  </h4>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="container-fluid my-3">
        <div className="text-center ">
          <h6 className="">
            {" "}
            <img src={blueSquareImg} /> Best Creative Solutions{" "}
          </h6>
          <h3 className=""> Working Process </h3>
        </div>

        <div class="container serviceCardContainer my-5">
          <div class="row serviceRow">
            <div class="col-md-5 col-sm-6 serviceCard ">
              <div className="contentBox">
                <div>
                  <h1>1.</h1>
                </div>
                <div>
                  <h3>Choose your service</h3>
                  <p>
                    Select from our comprehensive range of services We provide
                    end-to-end tech support to drive your digital
                    transformation.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-6 serviceCard ">
              <div className="contentBox">
                <div>
                  <h1>2.</h1>
                </div>
                <div>
                  <h3>Your Project Analysis</h3>
                  <p>
                    We start with a thorough analysis of your project to
                    understand your needs and goals. Our team conducts
                    feasibility studies and risk assessments to craft the best
                    strategy for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row serviceRow">
            <div class="col-md-5 col-sm-6 serviceCard">
              <div className="contentBox">
                <div>
                  <h1>3.</h1>
                </div>
                <div>
                  <h3>Review Project Output</h3>
                  <p>
                    Receive regular updates and insights into your project's
                    progress. Our review process ensures quality and alignment
                    with your objectives through detailed reports and feedback
                    sessions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 col-sm-6 serviceCard">
              <div className="contentBox">
                <div>
                  <h1>4.</h1>
                </div>
                <div>
                  <h3>Get Final Results</h3>
                  <p>
                    Receive your final deliverables with full confidence. We
                    ensure the end product meets your expectations, providing
                    documentation, training, and support for a seamless
                    transition and ongoing success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="container-fluid serviceTabcontainer">
        <div className="text-center pt-5 serviceTabContent">
          <h3 className=""> Special Feature of Our Services</h3>
          <h6 className="">We grow your Business </h6>
        </div>

        <div className="container serviceTabs">
          <ul className="nav nav-fill mb-3 " id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "tech" ? "active" : ""}`}
                id="pills-tech-tab"
                data-toggle="pill"
                href="#pills-tech"
                role="tab"
                aria-controls="pills-tech"
                aria-selected={activeTab === "tech"}
                onClick={() => handleTabClick("tech")}
              >
                <h6> LATEST TECHNOLOGY </h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "cost" ? "active" : ""}`}
                id="pills-cost-tab"
                data-toggle="pill"
                href="#pills-cost"
                role="tab"
                aria-controls="pills-cost"
                aria-selected={activeTab === "cost"}
                onClick={() => handleTabClick("cost")}
              >
                <h6>COST EFFECTIVE</h6>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "customer" ? "active" : ""
                }`}
                id="pills-customer-tab"
                data-toggle="pill"
                href="#pills-customer"
                role="tab"
                aria-controls="pills-customer"
                aria-selected={activeTab === "customer"}
                onClick={() => handleTabClick("customer")}
              >
                <h6>CUSTOMER CENTRICITY</h6>
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade show ${
                activeTab === "tech" ? "active" : ""
              }`}
              id="pills-tech"
              role="tabpanel"
              aria-labelledby="pills-tech-tab"
            >
              <LatestTechnology />
            </div>
            <div
              className={`tab-pane fade show ${
                activeTab === "cost" ? "active" : ""
              }`}
              id="pills-cost"
              role="tabpanel"
              aria-labelledby="pills-cost-tab"
            >
              <LatestTechnology />
            </div>
            <div
              className={`tab-pane fade show ${
                activeTab === "customer" ? "active" : ""
              }`}
              id="pills-customer"
              role="tabpanel"
              aria-labelledby="pills-customer-tab"
            >
              <LatestTechnology />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Service);
