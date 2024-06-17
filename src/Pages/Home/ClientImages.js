// ClientImages component
import React from "react";
import clientBg from "../../Assets/Images/client-bgImg.png";
import "./Home.css"; // Import the CSS file where you defined the styles

function ClientImages() {
  return (
    <div className="container-fluid my-5 px-5 clientImagesContainer">
      <div className="marquee">
        <img src={clientBg} alt="Client Background" className="marqueeImage" />
      </div>
    </div>
  );
}

export default React.memo(ClientImages);
