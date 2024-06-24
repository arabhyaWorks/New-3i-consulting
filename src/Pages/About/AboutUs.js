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

import one from "../../Assets/team/1.png";

import Marquee from "react-fast-marquee";

const ImageCard = ({ source, name, designation }) => {
  return (
    <div
      className="cardContainer"
      style={{
        backgroundImage: `url(${require("../../Assets/team/" +
          source +
          ".png")})`,
      }}
    >
      <div className="cardContent">
        <h4 className="name">{name}</h4>
        <p className="designation">{designation}</p>
      </div>
    </div>
  );
};

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

          <h2
            style={{ marginTop: 40 }}
            className="mb-0 font-weight-bold text-center"
          >
            Management Team
          </h2>

          <div className="executives">
            <Marquee speed={100} pauseOnHover={true}>
              <ImageCard
                source={"1"}
                name="Suresh Verma"
                designation="Chief Operating Officer"
              />

              <ImageCard
                source={"2"}
                name="Vishnukant Maurya"
                designation="Chief Technological Officer"
              />

              <ImageCard
                source={"3"}
                name="Shacheesh Mishra"
                designation="Head of Operations"
              />

              <ImageCard
                source={"4"}
                name="Alok Singh"
                designation="Chief Managing Consultant"
              />

              <ImageCard
                source={"5"}
                name="Amit Tomar"
                designation="Head Strategy and Marketing"
              />
            </Marquee>
          </div>

          <h2
            style={{ marginTop: 40 }}
            className="mb-0 font-weight-bold text-center"
          >
            Our Key Members
          </h2>

          <div style={{ marginBottom: 40 }} className="executives">
            <Marquee speed={100} pauseOnHover={true}>
              <ImageCard
                source={"6"}
                name="Ashutosh"
                designation="Sr Consultant (Marketing)"
              />

              <ImageCard
                source={"7"}
                name="Sambhrant"
                designation="Sr Consultant IT & Client Communication"
              />

              <ImageCard
                source={"8"}
                name="Rajnish"
                designation="Consulant E-Marketplace"
              />

              <ImageCard
                source={"9"}
                name="Arpit"
                designation="Sr Consultant (Technical Support)"
              />

              <ImageCard
                source={"10"}
                name="Anand"
                designation="Consultant (Creative and Social Media)"
              />

              <ImageCard
                source={"11"}
                name="Sameer"
                designation="Consultant (Mobile Applications)"
              />

              <ImageCard
                source={"12"}
                name="Sanjeev"
                designation="Team Lead (Key Accounts)"
              />

              <ImageCard
                source={"13"}
                name="Pawan"
                designation="Team Lead (Development)"
              />

              <ImageCard
                source={"14"}
                name="Shani"
                designation="Sr Developer"
              />

              <ImageCard
                source={"15"}
                name="Animesh"
                designation="Technology Advisor"
              />

              <ImageCard source={"16"} name="Shubham" designation="Developer" />

              <ImageCard source={"17"} name="Shalini" designation="Developer" />

              <ImageCard source={"18"} name="Naisadh" designation="Developer" />

              <ImageCard
                source={"19"}
                name="Vivek Pandey"
                designation="Accounts and Sr Consultant Staffing"
              />

              <ImageCard source={"20"} name="Hemant" designation="Consultant" />

              <ImageCard
                source={"21"}
                name="Annapurna"
                designation="Marketing & Customer relationship"
              />

              <ImageCard source={"22"} name="Sarita" designation="Accounts" />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(AboutUs);
