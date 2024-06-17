import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import contactBg from "../../Assets/Images/Group 11671.png";
import HomeContactUs from "../Home/HomeContactUs";

function Contact() {
  return (
    <>
      <img src={contactBg} style={{ width: "100%" }} />
      <HomeContactUs />
    </>
  );
}

export default React.memo(Contact);
