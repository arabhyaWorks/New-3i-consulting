import React from "react";
import fullImg from "../../Assets/Images/fullstackdevdesktop.webp";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function LatestTechnology() {
  return (
    <>
      <div className="container p-md-0 latestTechContainer">
        <div className="techImg">
          <img src={fullImg} />
        </div>
        <div className="techContent">
          <p>
            In the digital age, being technology-driven and
            information-intensive is essential. IT requirements will continue to
            grow exponentially, necessitating continuous adaptation and
            evolution. At 3i Consulting, we empower people—the source of
            knowledge, innovation, and adaptation. By staying at the forefront
            of technology, we ensure that your business remains competitive and
            forward-thinking.
          </p>

          <p style={{ color: ["#33b1e9"], fontWeight: 500 }}>
            3i C delivers a full-cycle software development services that adapt
            seamlessly to your project requirements and business needs.
          </p>

          <ul>
            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Cutting-edge Solutions: Leveraging the latest advancements in
              technology to provide innovative solutions{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Future-proofing: Ensuring your IT infrastructure is ready to adapt
              to future technological developments.{" "}
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                style={{ color: "orange" }}
                icon={faCheck}
              />{" "}
              Enhanced Productivity: Utilizing advanced tools and technologies
              to boost efficiency and productivity.{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default React.memo(LatestTechnology);
