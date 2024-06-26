import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import NewInfoSection from "./NewInfoSection";
import Home_AboutUs from "./Home_AboutUs";
import Home_Services from "./Home_Services";
import OurProducts from "./OurProducts";
import ProductSlider from "./ProductSlider";
import ClientImages from "./ClientImages";
import TestimonialsSection from "./TestimonialsSection";
import TestimonialsSection1 from "./TestimonialsSection1";
import ChooseUs from "./ChooseUs";
import OurProjects from "./OurProjects";
import Gallery from "./Gallery";
import FAQs from "./FAQs";
import HomeContactUs from "./HomeContactUs";
import Img from "../../Assets/Images/image 132.png";

import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../../firebaseConfig";

import HeroSection from "../../Components/HeroSection/HeroSection";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("this is data");
    const carouselRef = ref(database, "3I_Consulting/banner_carosel");
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      //   console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      <HeroSection img={data} />
      <NewInfoSection />
      <Home_AboutUs />
      <Home_Services />
      <OurProducts />
      <ProductSlider />
      <ClientImages />
      {/* <TestimonialsSection1 /> */}
      <ChooseUs />
      <OurProjects />
      <FAQs />
      <HomeContactUs />
    </>
  );
};

export default Home;
