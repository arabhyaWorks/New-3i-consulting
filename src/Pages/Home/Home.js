import React from "react";
import InfoSection from "./InfoSection";
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
import Img from '../../Assets/Images/image 132.png';
import HeroSection from "../../Components/HeroSection/HeroSection";






function Home(){


    return(<>
    <HeroSection img={Img}/>
    {/* <InfoSection/> */}
    <NewInfoSection/>
    <Home_AboutUs/>
    <Home_Services/>
    <OurProducts/>
    <ProductSlider/>
    <ClientImages/> 
    {/* <TestimonialsSection/> */}
    <TestimonialsSection1/>
    <ChooseUs/>
    <OurProjects/> 
    {/* <Gallery/>  */}
    <FAQs/>
    <HomeContactUs/>
    </>)
}

export default React.memo(Home);