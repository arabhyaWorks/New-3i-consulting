import React, { useState, useRef } from "react";
import "./Home.css";
import testimonialProfile1 from "../../Assets/Images/Ellipse 175.png";
import testimonialProfile2 from "../../Assets/Images/testimonialProfile.png";
import testimonialProfile3 from "../../Assets/Images/Ellipse 176.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import semicolon from "../../Assets/Images/“.svg";
import whiteSemiColon from "../../Assets/Images/“.png";

const testimonials = [
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text:
      "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community",
    semicolon: semicolon,
  },
  {
    img: testimonialProfile2,
    name: "Girish Pati Tripathi",
    position: "Mayor, Ayodhya",
    text:
      "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
    semicolon: whiteSemiColon,
  },
  {
    img: testimonialProfile3,
    name: "Vishwa Bhusan Mishra",
    position: "CEO, SKVT",
    text:
      "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure",
    semicolon: semicolon,
  },
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const rowRef = useRef(null);
  
    const handlePrev = (e) => {
      e.preventDefault();
      slideRow(-1); // Slide left to show next testimonial
    };
  
    const handleNext = (e) => {
      e.preventDefault();
      slideRow(1); // Slide right to show previous testimonial
    };
  
    const slideRow = (direction) => {
      const row = rowRef.current;
      const width = row.offsetWidth / testimonials.length;
      const moveDistance = direction * width;
  
      // Ensure smooth transition
      row.style.transition = "transform 0.5s ease";
  
      // Apply transform after a short delay to trigger transition
    //   setTimeout(() => {
    //     row.style.transform = `translateX(${moveDistance}px)`;
    //   }, 50);
  
      // Reset to the beginning or end of the testimonials array for infinite loop
      setTimeout(() => {
        if (direction === 1) {
          // Moving to the next testimonial
          const firstTestimonial = testimonials.shift();
          testimonials.push(firstTestimonial);
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        } else if (direction === -1) {
          // Moving to the previous testimonial
          const lastTestimonial = testimonials.pop();
          testimonials.unshift(lastTestimonial);
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
          );
        }
  
        // Reset the position of the testimonials row to prevent the abrupt jump
        row.style.transition = "none";
        row.style.transform = `translateX(0)`;
      }, 500); // Adjust timing to match transition duration
    };
  
    const getTestimonial = (index) => {
      return testimonials[(index + testimonials.length) % testimonials.length];
    };
  
    const visibleTestimonials = [];
    for(let i = 0; i < testimonials.length; i++){
        visibleTestimonials.push(getTestimonial(currentIndex + i));
    }
    console.log(visibleTestimonials);
    return (
      <div
        id="carouselExampleControl"
        className="carousel slide mb-5"
        data-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div ref={rowRef} className="testimonialRow">
              {visibleTestimonials.map((testimonial, index) => (
                <div key={index} className="col-md-4 testimonialCol">
                  <div className="card p-3 testimonialCard">
                    <div className="imgBox">
                      <img
                        className="card-img-round mr-4 testimonialImg"
                        src={testimonial.img}
                        alt={`${testimonial.name} profile`}
                      />
                      <div className="imgContentBox">
                        <h5>{index+1}</h5>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="card-body testimonialBody">
                      <p className="card-text testimonialText">
                        {testimonial.text}
                      </p>
                      <div className="d-flex justify-content-end">
                        <img
                          className="svgImg"
                          src={testimonial.semicolon}
                          alt="semicolon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControl"
          role="button"
          onClick={handlePrev}
        >
          <FontAwesomeIcon
            className="leftArrow"
            style={{ color: "black", height: "50px", marginRight: "3rem" }}
            icon={faChevronLeft}
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControl"
          role="button"
          onClick={handleNext}
        >
          <FontAwesomeIcon
            className="rightArrow"
            style={{ color: "black", height: "50px", marginLeft: "3rem" }}
            icon={faChevronRight}
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };
  
  export default React.memo(TestimonialsSection);
  