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
              Temple Management System offers an integrated solution for
              managing temple operations, including online booking for pujas and
              darshans, donation management, and comprehensive dashboards for
              efficient administration.
            </p>
          </div>
          <div className="productText">
            <h2 className="font-weight-bold">
              {" "}
              <img src={Logo1} /> HRMS Solutions
            </h2>
            <p>
              HRMS is a comprehensive solution designed to streamline and
              enhance the management of human resources within an organization.
              Tailored specifically for the government organization, this system
              integrates various HR functions into a single platform, ensuring
              efficient and effective management of employee-related processes.
            </p>
          </div>

          <div className="productText">
            <h2 className="font-weight-bold">
              <img src={Logo2} /> Project Management System
            </h2>
            <p>
              Program Management System aims to empower organizations with the
              tools they need to manage complex projects effectively and
              efficiently. By integrating advanced project management techniques
              with cutting-edge technology, we strive to support organizations
              in delivering successful projects that meet their goals and exceed
              stakeholder expectations.
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
