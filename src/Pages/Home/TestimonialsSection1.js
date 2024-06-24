import React, { useEffect, useRef, useState, useCallback } from "react";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your CSS file here

import testimonialProfile1 from "../../Assets/Images/Ellipse 175.png";
import testimonialProfile2 from "../../Assets/Images/testimonialProfile.png";
import testimonialProfile3 from "../../Assets/Images/Ellipse 176.png";
import semicolon from "../../Assets/Images/“.svg";
import whiteSemiColon from "../../Assets/Images/“.png";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    img: testimonialProfile1,
    name: "Vishal Singh",
    position: "DM, Bhadohi",
    text: "3i Consulting is an exceptional company. We collaborated with them on the Bhadohi Booth Sarthi project, and they delivered outstanding results in a remarkably short time. They developed a robust, secure, and scalable platform to help voters locate their booths efficiently. Their expertise and dedication to the project were truly impressive.",
  },
  {
    img: testimonialProfile2,
    name: "Girish Pati Tripathi",
    position: "Mayor, Ayodhya",
    text: "3i Consulting has greatly enhanced our e-governance capabilities. They developed the Nagar Nigam Ayodhya app, improving our interaction with citizens and streamlining municipal services. Their management of our social media presence has also increased our outreach and engagement. Their dedication to high-quality solutions is exceptional.",
  },
  {
    img: testimonialProfile3,
    name: "Vishwa Bhusan Mishra",
    position: "CEO, SKVT",
    text: "3i Consulting has been invaluable for the Shri Kashi Vishwanath Temple Trust. Their digital solutions, including the SKVT website, app, puja booking dashboard, and the Shri Kashi Prasadam e-commerce domain, have improved our operations and service delivery. Their commitment to excellence and user-friendly solutions is truly commendable.",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

  // Memoize goToPrev function
  const goToPrev = useCallback(() => {
    const newIndex =
      activeSlide - 1 >= 0 ? activeSlide - 1 : testimonials.length - 1;
    console.log(newIndex);
    setActiveSlide(newIndex);
    $(sliderRef.current).slick("slickPrev"); // Navigate to previous slide using slick method
  }, [activeSlide]);

  // Memoize goToNext function
  const goToNext = useCallback(() => {
    const newIndex =
      activeSlide + 1 < testimonials.length ? activeSlide + 1 : 0;
    console.log(newIndex);
    setActiveSlide(newIndex);
    $(sliderRef.current).slick("slickNext"); // Navigate to next slide using slick method
  }, [activeSlide]);

  useEffect(() => {
    const $slider = $(sliderRef.current);

    $slider.slick({
      centerMode: true,
      centerPadding: "60px",
      touchMove: false,
      slidesToShow: 3,
      swipe: false,
      draggable: false,
      focusOnSelect: false,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 870,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
      onBeforeChange: (current, next) => {
        setActiveSlide(next); // Update active slide index before slide change
      },
      onInit: () => {
        // Set initial animation state to false when slick is initialized
        setIsAnimating(false);
      },
    });

    // Cleanup to remove slick on component unmount
    return () => {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    };
  }, []);

  useEffect(() => {
    // Event delegation for handling clicks on slick arrows
    const handleNextClick = () => {
      if (!isAnimating) {
        const newIndex =
          activeSlide + 1 < testimonials.length ? activeSlide + 1 : 0;
        setActiveSlide(newIndex);
        setIsAnimating(true); // Set animation flag
        $(sliderRef.current).slick("slickNext"); // Navigate to next slide using slick method
        setTimeout(() => {
          setIsAnimating(false); // Reset animation flag after animation completes
        }, 500); // Adjust the timeout to match your animation speed
      }
    };

    $("body").on("click", ".slick-next", handleNextClick);

    // Clean up the event handler when the component unmounts
    return () => {
      $("body").off("click", ".slick-next", handleNextClick);
    };
  });

  useEffect(() => {
    // Event delegation for handling clicks on slick arrows
    const handlePrevClick = () => {
      if (!isAnimating) {
        const newIndex =
          activeSlide - 1 >= 0 ? activeSlide - 1 : testimonials.length - 1;
        setActiveSlide(newIndex);
        setIsAnimating(true); // Set animation flag
        $(sliderRef.current).slick("slickPrev"); // Navigate to previous slide using slick method
        setTimeout(() => {
          setIsAnimating(false); // Reset animation flag after animation completes
        }, 500); // Adjust the timeout to match your animation speed
      }
    };

    $("body").on("click", ".slick-prev", handlePrevClick);

    // Clean up the event handler when the component unmounts
    return () => {
      $("body").off("click", ".slick-prev", handlePrevClick);
    };
  });

  return (
    <div className="center">
      <div>
        <p className="testimonialHeader">
          Trusted by Thousands <br /> of Happy Customer
        </p>
        <p className="testimonialDesc">
          These are the stories of our customers who have joined us with <br />
          great pleasure when using our crazy services.
        </p>
      </div>
      <div ref={sliderRef} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide testimonialCard NotactiveSlide`}
          >
            <div className="imgBox">
              <img
                className="card-img-round  testimonialImg"
                src={testimonial.img}
                alt={`${testimonial.name} profile`}
              />
              <div style={{ marginLeft: 5 }} className="imgContentBox">
                <h5 style={{ margin: 0, padding: 0 }}>{testimonial.name}</h5>
                <p style={{ margin: 0, padding: 0 }}> {testimonial.position}</p>
              </div>
            </div>
            <p className="testimonial-text testimonialText">
              {testimonial.text}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <img className="semicolon" src={semicolon} alt="semicolon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

const styles = {
  heading: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    marginTop: "0px",
  },
  subdesc: {
    fontSize: "20px",
    fontWeight: "400",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "50px",
    color: "#4F5665",
  },
};
