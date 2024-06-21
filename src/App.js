import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router";
import AboutUs from "./Pages/About/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Service from "./Pages/Service/Service";
import DetailedProduct from "./Components/DetailedProduct/DetailedProduct";
// import { AllProduct } from './Context/AllProduct';

function App() {
  // console.log(AllProduct);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Service />} />
        <Route path="/detailed" element={<DetailedProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
