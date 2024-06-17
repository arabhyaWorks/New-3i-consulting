import React from "react";


import nextIcon from '../../Assets/Images/Back Arrow.png';
import prevIcon from '../../Assets/Images/Back Arrow (1).png';


import './HeroSection.css';

function HeroSection(props){


    return(<>
    <div className="heroContainer">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
{/* make sure to add the above line when u add image or else that small indicator wont be visible*/}
  </ol> 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={props.img} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={props.img} alt="fourth slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"> */}
        <img  src={prevIcon} />
    {/* </span> */}
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"> */}
    <img  src={nextIcon} />
    {/* </span> */}
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
    </>)
}


export default React.memo(HeroSection);