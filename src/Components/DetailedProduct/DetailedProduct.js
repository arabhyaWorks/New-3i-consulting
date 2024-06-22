import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { useLocation } from "react-router-dom";

import heroImg from "../../Assets/Images/Rectangle 852.png";
import "./DetailedProduct.css";
import squareBoxes from "../../Assets/Images/detailedPrdctBox.png";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import { useParams } from "react-router";
import { AllProduct } from "../../Context/AllProduct";
import { Link } from "react-router-dom";

function DetailedProduct(props) {
  const params = useParams();
  const p_id = params.pId;

  // Assuming AllProduct is an array of product objects and each product has an 'id' field
  const products = AllProduct.find((product) => product.id === p_id);

  const location = useLocation();
  const product = location.state;
  console.log("this is log.");
  console.log(location, product);

  return (
    <>
      <img src={product.bannerImage} style={{ width: "100%" }} />
      <div className="detailedProductContainer p-0 my-5 container-fluid">
        <h1 className="text-center">{product.name}</h1>

        <div className="container my-5 p-0 ">
          <p className="proDescription text-center">{product.description}</p>
        </div>

        <div className="container-fluid p-0 imgDivContainer">
          <div className=" imgDiv">
            <img
              style={{ width: "10%", height: "10%", objectFit: "cover" }}
              src={squareBoxes}
            />
          </div>
        </div>
        <div className="container-fluid liveProjectContainer">
          <div className="text-center">
            <h6>
              {" "}
              <img className="mb-1" src={squareBlueBox} /> Our Project{" "}
            </h6>
            <h5 className="mb-3">Live Projects</h5>
          </div>

          <div>
            {product.projects.map((data, index) => {
              return (
                <div className="container my-5 p-0 liveProjectSection">
                  <div className=" liveProjectSectionImg">
                    <img src={data.image} />
                  </div>
                  <div className=" liveProjectSectionContent">
                    <div>
                      <p className="Heading">{data.name}</p>
                      <p style={{ fontSize: 25 }}>{data.description}</p>
                      <button className="btn">
                        <Link to={data.website}>Visit Website</Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(DetailedProduct);
