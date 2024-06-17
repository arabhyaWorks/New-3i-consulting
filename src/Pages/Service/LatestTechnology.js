import React from "react";
import fullImg from '../../Assets/Images/fullstackdevdesktop.webp';
import './Service.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";



function LatestTechnology(){


    return(<>
    <div className="container p-md-0 latestTechContainer">
      <div className="techImg">
      <img src={fullImg} /> 
      </div>
      <div className="techContent">
        <p>The digital age is so technology-driven and information-intensive, IT requirements will only grow, and most likely grow at an exponential rate. It is more evolutionary than revolutionary to improve corporate maturity. Empowering people, who are the source of knowledge, innovation, adaptation, and customer centricity, is unquestionably vital. From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development.</p>

        <p style={{color: 'orange'}}>
        Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.
        </p>
        
        <ul>
            <li> <FontAwesomeIcon style={{color: 'orange'}} icon={faCheck} /> Capatiie to Deliver Desired Service </li>

            <li> <FontAwesomeIcon style={{color: 'orange'}} icon={faCheck} /> Capatie to Deliver Desired Service </li>

            <li> <FontAwesomeIcon style={{color: 'orange'}} icon={faCheck} /> High security for your product </li>

            <li> <FontAwesomeIcon style={{color: 'orange'}} icon={faCheck} /> Simple and Clear Process
             </li>

            <li> <FontAwesomeIcon style={{color: 'orange'}} icon={faCheck} /> Optimized for inbound</li>
        </ul>
      </div>
    </div>
    </>)
}


export default React.memo(LatestTechnology);