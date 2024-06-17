import React, { useContext } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import productBG from "../../Assets/Images/Group 11673.png";
import "./Products.css";
import s1Img from "../../Assets/Images/Rectangle 9.png";
import s2Img from "../../Assets/Images/Rectangle 11.png";
import s3Img from "../../Assets/Images/project-mngt.png";
import s4Img from "../../Assets/Images/Rectangle 10.png";
import s5Img from "../../Assets/Images/lab-reporting.png";
import s6Img from "../../Assets/Images/learnoing-mngmt.png";
import s7Img from "../../Assets/Images/inventory-mngt.png";
import s8Img from "../../Assets/Images/legal0-mngt.png";
import s9Img from "../../Assets/Images/property-mngt.png";
import s10Img from "../../Assets/Images/tourism-bg.png";
import s11Img from "../../Assets/Images/e-dak-bg.png";
import s12Img from "../../Assets/Images/visitor-mngt.png";
import s13Img from "../../Assets/Images/beneficiary-mngt.png";
import s14Img from "../../Assets/Images/e-pass-bg.png";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/Context";

function Products() {
  // // console.log(AllProduct[2].id , `/detailed/${AllProduct[2].id}`);
  const productLink = useContext(ProductContext);
  // console.log(productLink.products[0].id);

  // const  productLink  = useContext(ProductContext);
  // const firstProduct = productLink.products[0];
  // const secondProduct = productLink.products[1];
  // const thirdProduct = productLink.products[0];
  // const fourthProduct = productLink.products[0];

  // console.log(productLink.products);
  return (
    <>
      <img src={productBG} style={{ width: "100%" }} />
      <div className="productSection mt-5 container-fluid">
        <div className="container-fluid px-5 my-5 productSection1 p-0 productSectionA">
          <div className="productSection1Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s1Img}
            />
          </div>
          <div className="productSection1Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">1. Temple Management System</h2>
              <p className="text-muted">
                Data is your most valuable asset.But only if you make the most
                of it. <br />
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn">
                <Link to={`/detailed/${productLink.products[0].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="container-fluid px-5 my-5 serviceSection2 productSectionA ">
          <div className="productSection2Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">
                2. Human Resources Management System(HRMS)
              </h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn ">
                <Link to={`/detailed/${productLink.products[1].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className=" productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s2Img}
            />
          </div>
        </div>
        {/* 3rd section */}

        <div className="container-fluid px-5 my-5  p-0 productSectionA">
          <div className=" productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s3Img}
            />
          </div>
          <div className=" productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">3. Project Management System</h2>
              <p className="text-muted">
                Data is your most valuable asset.But only if you make the most
                of it. <br />
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn">
                <Link to={`/detailed/${productLink.products[2].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 4th section */}
        <div className="container-fluid px-5 my-5 serviceSection4 productSectionA">
          <div className=" productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">4. OPD Booking System</h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn2">
                <Link to={`/detailed/${productLink.products[3].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className="serviceSection4Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s4Img}
            />
          </div>
        </div>
        {/* 5th section */}
        <div className="container-fluid px-5 my-5 serviceSection5 p-0 productSectionA">
          <div className="serviceSection5Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s5Img}
            />
          </div>
          <div className="serviceSection5Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">5. Lab Report Monitering</h2>
              <p className="text-muted">
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn btn1">
                <Link to={`/detailed/${productLink.products[4].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 6th section */}
        <div className="container-fluid px-5 my-5 serviceSection6 productSectionA">
          <div className="serviceSection6Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">6. Learning Management System</h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn1">
                <Link to={`/detailed/${productLink.products[5].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className="serviceSection6Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s6Img}
            />
          </div>
        </div>
        {/* 7th section */}
        <div className="container-fluid px-5 my-5 serviceSection7 p-0 productSectionA">
          <div className="serviceSection7Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s7Img}
            />
          </div>
          <div className="serviceSection7Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">7. Inventory Management System</h2>
              <p className="text-muted">
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn btn1">
                <Link to={`/detailed/${productLink.products[6].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 8th section */}
        <div className="container-fluid px-5 my-5 serviceSection8 productSectionA">
          <div className="serviceSection8Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">8. Legal Management System</h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn2">
                <Link to={`/detailed/${productLink.products[7].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className="serviceSection8Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s8Img}
            />
          </div>
        </div>
        {/* 9th section */}
        <div className="container-fluid px-5 my-5 serviceSection9 p-0 productSectionA">
          <div className="serviceSection9Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s9Img}
            />
          </div>
          <div className="serviceSection9Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">9. Property Management System</h2>
              <p className="text-muted">
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn btn1">
                <Link to={`/detailed/${productLink.products[8].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 10th section */}
        <div className="container-fluid px-5 my-5 productSection10 productSectionA">
          <div className="productSection10Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">10. Tourism Management System</h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn2">
                <Link to={`/detailed/${productLink.products[9].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className="productSection10Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s10Img}
            />
          </div>
        </div>
        {/* 11th section */}
        <div className="container-fluid px-5 my-5 productSection11 p-0 productSectionA">
          <div className="productSection11Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s11Img}
            />
          </div>
          <div className="productSection11Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">11. E-Dak Management System</h2>
              <p className="text-muted">
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn btn1">
                <Link to={`/detailed/${productLink.products[10].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 12th section */}
        <div className="container-fluid px-5 my-5 productSection12 productSectionA">
          <div className="productSection12Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">
                12. Visitor & Complaint Management System
              </h2>
              <p className="text-muted">
                From automation to advanced analytics and seamless experiences,
                we can embed AI in business. We'll deliver new operating models
                and strategic intelligence for smart processes and data-driven
                decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn2">
                <Link to={`/detailed/${productLink.products[11].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
          <div className="productSection12Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s12Img}
            />
          </div>
        </div>
        {/* 13th section */}
        <div className="container-fluid px-5 my-5 productSection13 p-0 productSectionA">
          <div className="productSection13Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={s13Img}
            />
          </div>
          <div className="productSection13Content productSectionAContent">
            <div className="ml-5">
              <h2 className="mt-3 mb-5">13. Benificiary Management System</h2>
              <p className="text-muted">
                AFQ Tech data scientists and analysts are skilled at mining,
                modeling, and extracting value from data. Sourced from a range
                of sectors and with hands-on experience, they put you in charge
                and draw on the best knowledge and expertise to help you
                navigate your way forward.
              </p>
              <button className="btn btn2">
                <Link to={`/detailed/${productLink.products[12].id}`}>
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* 14th section */}
        {/* <div className="container-fluid px-5 my-5 productSection12 productSectionA">
          <div className="productSection12Content productSectionAContent">
            <div className="mr-5">
              <h2 className="mt-3 mb-5">14. E-pass Portal</h2>
              <p className="text-muted">
              From automation to advanced analytics and seamless experiences, we can embed AI in business. We'll deliver new operating models and strategic intelligence for smart processes and data-driven decisions.
              </p>
              <p className="text-muted"> What, Why and How?</p>
              <button className="btn btn1"><Link to={`/detailed/${productLink.products[13].id}`}>Read More</Link></button>
            </div>
          </div>
          <div className="productSection12Img productSectionAImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={s14Img}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default React.memo(Products);
