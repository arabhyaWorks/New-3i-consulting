import React from "react";
import "./Home.css";
import dottedSquareBg from '../../Assets/Images/Group 11643.png'
import dottedSquareBottomImg from '../../Assets/Images/Group 2172.png';
import awsImg from '../../Assets/Images/image 133.svg';
import sapImg from '../../Assets/Images/image 134.svg';
import isoImg from '../../Assets/Images/Group.svg';
import govImg from '../../Assets/Images/msmeLogo 1.svg';



function ChooseUs() {
  return (
    <>
      <div classname="container-fluid my-5 chooseUsSection ">
       <div className="chooseUsHeadingContainer d-flex">
       <div>
        <img src={dottedSquareBg}/>
        </div>
        <div className="chooseUsHeading text-center my-5 mr-5">
            <h1 className="font-weight-bold">  Why choose <span style={{color : '#0D98D9'}}>3i- Consulting</span>?    </h1>
            <p className="px-5" >Well with highly qualified professionals in our team along with the technology gives edge over others, as a result highly rated professional services with full customer satisfaction is assured. We help to grow and manage your business letting you to concentrate on your business.</p>
        </div>
       </div>
        <div
          id="carouselExampleControl1"
          class="carousel slide"
          data-intervall="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row chooseUsRow">
                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard ">
                    <div class="card-body chooseUsBody">
                        <i>  <img src={govImg}/> </i>
                      <h5 class="card-title chooseUsTitle">
                      GOV Registered
                      </h5>
                      <p class="card-text chooseUsText">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                    <i>  <img src={isoImg}/> </i>
                      <h5 class="card-title chooseUsTitle">
                      ISO 9001:2015 Certified
                      </h5>
                      <p class="card-text chooseUsText">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                    <i>  <img src={sapImg}/> </i>
                      <h5 class="card-title chooseUsTitle">
                      SAP Partner
                      </h5>
                      <p class="card-text chooseUsText">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                    <i>  <img src={awsImg}/> </i>
                      <h5 class="card-title chooseUsTitle">
                      AWS Partner
                      </h5>
                      <p class="card-text chooseUsText">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <img style={{ height: '100%' , objectFit: 'cover'}} src={dottedSquareBottomImg}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ChooseUs);
