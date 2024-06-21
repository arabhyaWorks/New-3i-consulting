import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "../../Components/HeroSection/HeroSection";
import productBG from "../../Assets/Images/Group 11673.png";
import "./Products.css";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/Context";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../../firebaseConfig";

export default function Products() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("this is data");
    const carouselRef = ref(database, "3I_Consulting/products");
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <img src={productBG} style={{ width: "100%" }} />
      <div className="productSection mt-5 container-fluid">
        <div>
          {data.map((item, index) => {
            if (index % 2 !== 0) {
              return (
                <div className="container-fluid px-5 my-5 productSection1 p-0 productSectionA">
                  <div className="productSection1Img productSectionAImg">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={item.bannerImage}
                    />
                  </div>
                  <div className="productSection1Content productSectionAContent">
                    <div className="ml-5">
                      <h2 className="mt-3 mb-5">
                        {index + 1}. {item.name}
                      </h2>
                      <p className="text-muted">{item.description}</p>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/detailed", { state: item });
                        }}
                      >
                        <p>Read More</p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="container-fluid px-5 my-5 serviceSection2 productSectionA ">
                  <div className="productSection2Content productSectionAContent">
                    <div className="mr-5">
                      <h2 className="mt-3 mb-5">
                        {index + 1}. {item.name}
                      </h2>
                      <p className="text-muted">{item.description}</p>
                      <p className="text-muted"> What, Why and How?</p>
                      <button
                        className="btn"
                        onClick={() => {
                          navigate("/detailed", { state: item });
                        }}
                      >
                        <p>Read More</p>
                      </button>
                    </div>
                  </div>
                  <div className=" productSectionAImg">
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={item.bannerImage}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
