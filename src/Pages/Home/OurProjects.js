import React from "react";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import projectImg1 from "../../Assets/Images/Rectangle 456 (1).png";
import projectImg2 from "../../Assets/Images/Rectangle 456.png";
import projectImg3 from "../../Assets/Images/Rectangle 4562.png";

function OurProjects() {
  return (
    <>
      <div className="container-fluid p-0 projectsSection">
        <div className="projectsSectionContent text-center">
          <h6>
            {" "}
            <img className="mb-1" src={squareBlueBox} /> Our Project{" "}
          </h6>
          <h1 className="mb-3 font-weight-bold">
            Digital Public Infrastructure <br /> Projects
          </h1>
          <h5 className="mb-5">Explore our showcased projects below</h5>
        </div>
        <div
          id="carouselExampleControl2"
          class="carousel slide"
          data-intervall="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row projectRow ">
                <div class="col-md-4 projectCol">
                  <div class="card projectCard">
                    <img
                      class="card-img-top projectCardImg"
                      src={projectImg3}
                      alt="Card image cap"
                    />
                    <div class="card-body projectCardBody">
                      <h4 className="card-title projectCardTitle">
                        Divya Ayodha
                      </h4>
                      <h6 class="card-text projectCardText">
                        Super App for tourism in Shri Ayodhya ji
                      </h6>
                      <p>
                        <span>Government </span>
                        <span>Infrastructure </span>
                        <span>Tourism </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 projectCol">
                  <div class="card projectCard">
                    <img
                      class="card-img-top projectCardImg"
                      src={projectImg2}
                      alt="Card image cap"
                    />
                    <div class="card-body projectCardBody">
                      <h4 className="card-title projectCardTitle">
                        Bhadohi Booth Sarthi
                      </h4>
                      <h6 class="card-text projectCardText">
                        General election booth locator app
                      </h6>
                      <p>
                        <span>Government </span>
                        <span>Infrastructure </span>
                        <span>Election </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 projectCol">
                  <div class="card projectCard">
                    <img
                      class="card-img-top projectCardImg"
                      src={projectImg1}
                      alt="Card image cap"
                    />
                    <div class="card-body projectCardBody">
                      <h4 className="card-title projectCardTitle">Lab Mitra</h4>
                      <h6 class="card-text projectCardText">
                        Super App for tourism in Shri Ayodhya ji
                      </h6>
                      <p>
                        <span>Government </span>
                        <span>Infrastructure </span>
                        <span>Tourism </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(OurProjects);
