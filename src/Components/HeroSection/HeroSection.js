import React from "react";

import nextIcon from "../../Assets/Images/Back Arrow.png";
import prevIcon from "../../Assets/Images/Back Arrow (1).png";

import "./HeroSection.css";

function HeroSection(props) {
  console.log(props.img);
  return (
    <>
      <div className="heroContainer">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            {/* <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li> */}
            {props.img &&
              props.img.map((item, index) => {
                return (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    class={index === 0 ? "active" : ""}
                  ></li>
                );
              })}
          </ol>
          <div class="carousel-inner">
            {props.img &&
              props.img.map((item, index) => {
                return (
                  <div
                    class={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img class="d-block w-100" src={item} alt="First slide" />
                  </div>
                );
              })}
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            {/* <span class="carousel-control-prev-icon" aria-hidden="true"> */}
            <img src={prevIcon} />
            {/* </span> */}
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            {/* <span class="carousel-control-next-icon" aria-hidden="true"> */}
            <img src={nextIcon} />
            {/* </span> */}
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default React.memo(HeroSection);
