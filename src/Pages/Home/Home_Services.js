import React from "react";
import blueSquareImg from "../../Assets/Images/Rectangle 8.png";
import "./Home.css";
import techImg from "../../Assets/Images/Group 11659.svg";
import appImg from "../../Assets/Images/Group 11658.svg";
import digitalMediaImg from "../../Assets/Images/Group 11657.svg";
import cloudImg from "../../Assets/Images/Group 11656.svg";
import digitalImg from "../../Assets/Images/Group 11655.svg";
import helpdeskImg from "../../Assets/Images/Group 11653.svg";
import serverImg from "../../Assets/Images/Group 11659.svg";
import moreImg from "../../Assets/Images/add.svg";
import { NavLink } from "react-router-dom";

function Home_Services() {
  return (
    <>
      <div className="container-fluid pb-4 Home_Services">
        <div className="text-center pt-5">
          <h6 className="">
            {" "}
            <img src={blueSquareImg} /> We Are Expert In{" "}
          </h6>
          <h3 className="">
            We Provide Professional <br />
            Business Solutions.
          </h3>
        </div>

        <div class="container  mt-5">
          <div class="row home_ServicesRow">
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={techImg} />
                </i>
                <h4>
                  Tech <br /> Consulting
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}

              <div class="service-box">
                <i class="icon">
                  <img src={appImg} />
                </i>
                <h4>
                  App <br /> Development
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={digitalMediaImg} />
                </i>
                <h4>
                  Digital Media <br /> Management
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={cloudImg} />
                </i>
                <h4>
                  Cloud <br /> Solutions
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={digitalImg} />
                </i>
                <h4>
                  Digital <br /> Security
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={helpdeskImg} />
                </i>
                <h4>
                  Helpdesk & <br /> Support
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              {/* <NavLink to={'/'}> */}
              <div class="service-box">
                <i class="icon">
                  <img src={serverImg} />
                </i>
                <h4>
                  Server <br /> Deployment
                </h4>
              </div>
              {/* </NavLink> */}
            </div>
            <div class="col-md-3 col-sm-6">
              <NavLink to={"/services"}>
                <div class="service-box lastServiceBox">
                  <i class="icon">
                    <img src={moreImg} />
                  </i>
                  <h4>
                    More <br /> Services
                  </h4>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Home_Services);
