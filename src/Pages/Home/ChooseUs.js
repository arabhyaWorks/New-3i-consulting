import React from "react";
import "./Home.css";
import dottedSquareBg from "../../Assets/Images/Group 11643.png";
import dottedSquareBottomImg from "../../Assets/Images/Group 2172.png";
import awsImg from "../../Assets/Images/image 133.svg";
import sapImg from "../../Assets/Images/image 134.svg";
import isoImg from "../../Assets/Images/Group.svg";
import govImg from "../../Assets/Images/msmeLogo 1.svg";

function ChooseUs() {
  return (
    <>
      <div classname="container-fluid my-5 chooseUsSection ">
        <div className="chooseUsHeadingContainer d-flex">
          <div>
            <img src={dottedSquareBg} />
          </div>
          <div className="chooseUsHeading text-center my-5 mr-5">
            <h1 className="font-weight-bold">
              {" "}
              Why choose{" "}
              <span style={{ color: "#0D98D9" }}>3i- Consulting</span>?{" "}
            </h1>
            <p className="px-5">
              At 3i-Consulting, we pride ourselves on our team of highly
              qualified professionals and cutting-edge technology, which gives
              us a competitive edge. We offer highly rated professional services
              with a commitment to full customer satisfaction. Our goal is to
              help grow and manage your business, allowing you to focus on your
              core operations.
            </p>
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
                      <i>
                        {" "}
                        <img src={govImg} />{" "}
                      </i>
                      <h5 class="card-title chooseUsTitle">GOV Registered</h5>
                      <p class="card-text chooseUsText">
                        Ensures compliance and reliability, enhancing our
                        credibility in delivering top-notch services.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                      <i>
                        {" "}
                        <img src={isoImg} />{" "}
                      </i>
                      <h5 class="card-title chooseUsTitle">
                        ISO 9001:2015 Certified
                      </h5>
                      <p class="card-text chooseUsText">
                        It guarantees to quality management and continuous
                        improvement, ensuring consistent, high-quality services.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                      <i>
                        {" "}
                        <img src={sapImg} />{" "}
                      </i>
                      <h5 class="card-title chooseUsTitle">SAP Partner</h5>
                      <p class="card-text chooseUsText">
                        We offer integrated and efficient processes through
                        customized SAP solutions and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-2 chooseUsCol">
                  <div class="card chooseUsCard">
                    <div class="card-body chooseUsBody">
                      <i>
                        {" "}
                        <img src={awsImg} />{" "}
                      </i>
                      <h5 class="card-title chooseUsTitle">AWS Partner</h5>
                      <p class="card-text chooseUsText">
                        We provide scalable, secure, and cost-effective cloud
                        solutions, transforming IT and boosting performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <img
              style={{ height: "100%", objectFit: "cover" }}
              src={dottedSquareBottomImg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ChooseUs);
