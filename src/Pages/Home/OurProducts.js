import React from "react";
import templeImg from "../../Assets/Images/Rectangle 443.png";
import blueSquareImg from "../../Assets/Images/Rectangle 8.png";
import Logo1 from "../../Assets/Images/Logo (1).png";
import Logo2 from "../../Assets/Images/Logo (2).png";
import Logo3 from "../../Assets/Images/Logo(3).png";
import squareBg from "../../Assets/Images/Group 11661.png";

function OurProducts() {
  return (
    <>
      <div className="container-fluid py-5 productContainer">
        <div className="productContentContainer">
          <h5 className="mb-3">
            {" "}
            <img className="mb-1 mr-2" src={blueSquareImg} /> Our Products
          </h5>
          <div className="productText">
            <h2 className="font-weight-bold">
              {" "}
              <img src={Logo3} /> Temple Management System
            </h2>
            <p>
              Our technical consultancy services provide expert guidance and
              support to help you navigate complex technological challenges,
              ensuring optimal performance and efficiency.
            </p>
          </div>
          <div className="productText">
            <h2 className="font-weight-bold">
              {" "}
              <img src={Logo1} /> HRMS Solutions
            </h2>
            <p>
              Our SAP solutions empower businesses by leveraging advanced
              technology to streamline operations, boost productivity, and fuel
              expansion.
            </p>
          </div>

          <div className="productText">
            <h2 className="font-weight-bold">
              <img src={Logo2} /> Project Management System
            </h2>
            <p>
              Our mobile solutions leverage the latest advancements in mobile
              technology to create intuitive and engaging experiences for your
              users, enabling you to reach them anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="productImgContainer">
          <img
            src={templeImg}
            style={{
              borderRadius: 15,
              width: "100%",
              height: "100%",
              boxShadow: "0px 2.21px 55.34px rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>
      </div>
      <div className="productFooterBg">
        <img src={squareBg} />
      </div>
    </>
  );
}

export default React.memo(OurProducts);
