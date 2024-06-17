import React from "react";
import "./AboutUs.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import heroBanner from "../../Assets/Images/Banner.png";
import img1 from "../../Assets/Images/Image Content.png";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import img2 from "../../Assets/Images/Group 11663.png";
import img3 from "../../Assets/Images/13399716_Business_team_2 1.png";
import expertImg from "../../Assets/Images/1.png";
import expertImg2 from "../../Assets/Images/2(2).png";
import expertImg3 from "../../Assets/Images/Group 11670.png";

function AboutUs() {
  return (
    <>
      {/* <HeroSection img={heroBanner} /> */}
      <div className="contactContainer mt-0 p-0">
        <div className="AboutUsTopImage">
          <img style={{ width: "100%", height: "100%" }} src={heroBanner} />
        </div>
        <div className="container-fluid contactSection1 p-0">
          <div className="section1Img">
            <img style={{ width: "100%" }} src={img1} />
          </div>
          <div className="section1Content">
            <div className="">
              <h6>
                {" "}
                <img className="mb-1" src={squareBlueBox} /> About Us{" "}
              </h6>
              <h1>
                {" "}
                We envision <br /> Business Excellence!
              </h1>
              <p>
                3i Consulting is comprised of a group of experienced and
                professional consultants who drive the vision of establishing
                Business Excellence with ERP, BI, Support and Maintenance
                services. We kick-started operations in India with an insight
                for futuristic development and to strengthen our services
                catered to customers. From accelerating growth in mobile
                technology to IT Support, 3i consulting is the one stop-shop for
                all your business needs.
              </p>

              <p>
                We have ventured into various technologies like SAP, Android,
                Informatics, Oracle, Application Development, with our focus on
                SAP BI/BO to generate prospective leads for Business. Our
                Corporate Development Programs are all that your business needs
                to stay a step ahead of the rest.
              </p>

              <button className="btn">Hire Us</button>
            </div>
          </div>
        </div>
        <div className="container-fluid contactSection2 p-0">
          <div className="section2Content">
            <div className="">
              <h6>
                {" "}
                <img className="mb-1" src={squareBlueBox} /> Our Mission{" "}
              </h6>
              <h1> We are on a Mission</h1>
              <p>
                3i Consulting is comprised of a group of experienced and
                professional consultants who drive the vision of establishing
                Business Excellence with ERP, BI, Support and Maintenance
                services. We kick-started operations in India with an insight
                for futuristic development and to strengthen our services
                catered to customers. From accelerating growth in mobile
                technology to IT Support, 3i consulting is the one stop-shop for
                all your business needs.
              </p>
            </div>
          </div>
          <div className="section2Img">
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundPosition: "100% 100%",
              }}
              src={img2}
            />
          </div>
        </div>
        <div className="container-fluid contactSection3 p-0">
          <div className="section3Img">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={img3}
            />
          </div>
          <div className="section3Content">
            <div className="">
              <h6>
                {" "}
                <img className="mb-1" src={squareBlueBox} /> Our Vision{" "}
              </h6>
              <h1> We have a Vision!</h1>
              <p>
                Our vision is to be a global leader in digital transformation,
                revolutionizing the way organizations operate and thrive in the
                digital age. We aim to set the standard for excellence in
                technology and consulting services, consistently pushing the
                boundaries of innovation. By building strong partnerships with
                our clients, we envision a future where our solutions drive
                meaningful change and sustainable success across industries,
                making a positive impact on businesses and communities
                worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid contactSection4 p-0">
          <div className="videoContainer">
            {/* <h6> */}
            {/* {" "} */}
            {/* <img className="mb-1" src={squareBlueBox} /> Our Vision{" "} */}
            {/* </h6> */}
            {/* <h1> We have a Vision!</h1>
            <p>
              Our vision is to be a global leader in digital transformation,
              revolutionizing the way.
            </p> */}
          </div>
          {/* the visibility of this div is hidden */}
        </div>

        <div className="container-fluid p-0 mt-5 contactSection">
          <div className="projectsSectionContent text-center">
            <h6>
              <img className="mb-1" src={squareBlueBox} /> Our Team
            </h6>
            <h1 className="mb-3 font-weight-bold"> Meet Our Experts </h1>
          </div>
          <div
            id="carouselExampleControl2"
            class="carousel slide"
            data-intervall="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row contactRow mb-5">
                  <div class="col-md-3 contactCol">
                    <div class="card contactCard">
                      <img
                        class="card-img-top contactCardImg"
                        src={expertImg}
                        alt="Card image cap"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 contactCol">
                    <div class="card contactCard">
                      <img
                        class="card-img-top contactCardImg"
                        src={expertImg2}
                        alt="Card image cap"
                      />
                    </div>
                  </div>

                  <div class="col-md-3 contactCol">
                    <div class="card contactCard">
                      <img
                        class="card-img-top contactCardImg"
                        src={expertImg3}
                        alt="Card image cap"
                      />
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

export default React.memo(AboutUs);
