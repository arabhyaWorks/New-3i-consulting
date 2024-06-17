import React from "react";
import "./Home.css";

function InfoSection() {
  return (
    <>
      <div className="container-fluid infoSectionContainer d-flex align-items-center justify-content-center">
        <div className="infoSection w-75 mt-5">
          <div className="starimg1"></div>
          <div className="starimg2"></div>
          <div className="infoTitleContainer">
            <h1>
              Empowering businesses with cutting-
              <br />
              edge <span style={{ color: "#0D98D9" }}>tech</span> & consulting{" "}
              <span style={{ color: "#0D98D9" }}>solutions</span>
            </h1>
          </div>
          <div className="infoParaContainer mx-5">
            <p className="text-center">
              At 3i Consulting, we specialize in providing end-to-end robust
              tech solutions that drive digital transformation. Our expertise
              spans across
              <span style={{ color: "#0D98D9" }}>
                {" "}
                SAP solutions, mobile applications, digital media management
              </span>
              , and <span style={{ color: "#0D98D9" }}>web development</span>.
              With a strong focus on building digital public infrastructure, we
              are committed to delivering innovative and reliable technology
              services.
            </p>
          </div>
          {/* <div className="infoBtnContainer">
            <button className="mr-3">Know More</button>
            <button className="">Get Consulting</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default React.memo(InfoSection);
