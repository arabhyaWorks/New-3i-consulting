import React from "react";
import fullImg from "../../Assets/Images/costeffective.png";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CostEffective() {
  return (
    <>
      <div className="container p-md-0 latestTechContainer">
        <div className="techImg">
          <img src={fullImg} />
        </div>
        <div className="techContent">
          <p>
            Efficient use of resources and cost management is critical to
            success. We offer solutions that deliver maximum value for your
            investment, ensuring that high-quality services are provided at
            competitive prices. Our approach minimizes costs while maximizing
            efficiency, providing an optimal balance of performance and
            affordability.
          </p>

          <ul>
            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Optimized Budgets: Delivering top-tier services within your
              financial constraints.{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Value-driven Solutions: Ensuring every dollar spent contributes to
              tangible business improvements.{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Scalable Services: Providing solutions that grow with your
              business without excessive costs.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default React.memo(CostEffective);
