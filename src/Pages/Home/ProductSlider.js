import React from "react";
import "./Home.css";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import sliderBG1 from "../../Assets/Images/Rectangle 448.png";
import sliderBG2 from "../../Assets/Images/Rectangle 448 (1).png";
import sliderBG3 from "../../Assets/Images/Rectangle 448 (2).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function ProductSlider() {
  return (
    <>
      <div classname="container-fluid my-2">
        <div className=" mb-5 sliderSectionContent text-center">
          <h6>
            {" "}
            <img className="mb-1" src={squareBlueBox} /> Our Project{" "}
          </h6>
          <h1 className="font-weight-bold">
            Explore Our Comprehensive Range of <br /> Services
          </h1>
        </div>

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-intervall="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row sliderRow">
                <div class="col-md-4 sliderCol">
                  <div class="card sliderCard">
                    <img
                      class="card-img-top sliderImg"
                      src={sliderBG1}
                      alt="Card image cap"
                    />
                    <div class="card-body sliderBody">
                      <h5 class="card-title sliderTitle">
                        Web Solutions for Your Business
                      </h5>
                      <p class="card-text sliderText">
                        Our web solutions are designed to help your business
                        thrive in the digital landscape, providing user-friendly
                        interfaces and seamless functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 sliderCol">
                  <div class="card sliderCard">
                    <img
                      class="card-img-top sliderImg"
                      src={sliderBG2}
                      alt="Card image cap"
                    />
                    <div class="card-body sliderBody">
                      <h5 class="card-title sliderTitle">
                        Digital Media Management Solutions
                      </h5>
                      <p class="card-text sliderText">
                        We offer cutting-edge digital media management solutions
                        to enhance your online presence and engage with your
                        target audience effectively.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 sliderCol">
                  <div class="card sliderCard">
                    <img
                      class="card-img-top sliderImg"
                      src={sliderBG3}
                      alt="Card image cap"
                    />
                    <div class="card-body sliderBody">
                      <h5 class="card-title sliderTitle">
                        Mobile Solutions for Any Platform
                      </h5>
                      <p class="card-text sliderText">
                        We specialize in developing mobile solutions that are
                        compatible with various platforms, ensuring your
                        business reaches a wider audience.
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

export default React.memo(ProductSlider);
