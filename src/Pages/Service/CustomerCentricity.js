import React from "react";
import fullImg from "../../Assets/Images/CustomerCentricity.png";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CustomerCentricity() {
  return (
    <>
      <div className="container p-md-0 latestTechContainer">
        <div className="techImg">
          <img src={fullImg} />
        </div>
        <div className="techContent">
          <p>
            Customer centricity is vital for corporate maturity and growth. We
            place the customer at the heart of our strategies, ensuring that all
            services are tailored to meet their needs. From IT strategy
            consulting to comprehensive technology roadmaps, we ensure that our
            solutions are designed with the customer in mind, leading to
            improved satisfaction and loyalty.
          </p>

          <ul>
            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Personalized Service: Customizing our approach to meet your unique
              business needs.{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Improved Satisfaction: Focusing on delivering exceptional customer
              experiences.{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Responsive Support: Providing dedicated support to address your
              concerns promptly.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default React.memo(CustomerCentricity);
