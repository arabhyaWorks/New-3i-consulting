import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import { useLocation } from "react-router-dom";

import heroImg from "../../Assets/Images/Rectangle 852.png";
import "./DetailedProduct.css";
import liCheckImg from "../../Assets/Images/fi_check-circle.png";
import squareBoxes from "../../Assets/Images/detailedPrdctBox.png";
import squareBlueBox from "../../Assets/Images/Rectangle 8.png";
import firstImg from "../../Assets/Images/Rectangle 443 (1).png";
import secondImg from "../../Assets/Images/Rectangle 443 (2).png";
import thirdImg from "../../Assets/Images/Rectangle 443-3.png";
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
      <HeroSection img={[product.bannerImage]} />
      <div className="detailedProductContainer p-0 my-5 container-fluid">
        <h1 className="text-center">{product.name}</h1>
        {/* <div className="detailedProductImgContainer">
          <img src={product.bannerImg} />
          <div className="detailedProductImgContent container-fluid p-0">
            <div className="straightDiv">
              <h5>Deliverables</h5>
            </div>
          </div>
        </div> */}
        <div className="container-fluid p-0 imgDivContainer">
          <div className=" imgDiv">
            <img
              style={{ width: "10%", height: "10%", objectFit: "cover" }}
              src={squareBoxes}
            />
          </div>
          {/* <p className="container ">{product.description}</p> */}
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
                    <div className="">
                      <h2 className="">{data.name}</h2>
                      <p className="text-muted"> {data.description} </p>
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
