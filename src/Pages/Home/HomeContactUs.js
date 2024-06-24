import React from "react";
import blueSquareImg from "../../Assets/Images/Rectangle 8.png";
import phoneIcon from "../../Assets/Images/Group 11648.svg";
import mapIcon from "../../Assets/Images/Group 11648 (1).svg";
import mailIcon from "../../Assets/Images/Group 11648 (2).svg";
import { NavLink } from "react-router-dom";
import ladyImg from "../../Assets/Images/image 135.png";

function HomeContactUs() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5 homeContactSection">
        <div className="hContactContent mt-2">
          <h5 className="mb-3">
            {" "}
            <img className="mb-1 mr-2" src={blueSquareImg} />
            Contact Us
          </h5>
          <h2 className="font-weight-bold">
            Contact Us for <br />{" "}
            <span style={{ color: "#0D98D9" }}>more Information</span>
          </h2>
          <div className="icons">
            <div className="d-flex align-items-center">
              <img
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
                src={phoneIcon}
              />
              <p className="mb-0">
                Phone Number: <br />{" "}
                <span style={{ color: "#007bff" }}> +91 914 086 0949 </span>{" "}
              </p>
            </div>
            <div
              style={{ marginTop: 20, marginBottom: 20 }}
              className="d-flex "
            >
              <img
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
                src={mapIcon}
              />
              <p className="mb-0">
                Office Address: <br />{" "}
                <span style={{ color: "#007bff" }}>
                  N. 12/304, Triplex-3, <br /> J-56 Shivraj Nagar Colony,
                  <br />
                  Mahmoorganj, Varanasi.
                </span>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <img
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
                src={mailIcon}
              />
              <p className="mb-0">
                Mail Address: <br />{" "}
                <span style={{ color: "#007bff" }}> info@3icounsulting.in</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ width: "fit-content", height: "fit-content" }}
          className="hContactImg w-25"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={ladyImg}
          />
        </div>
        <div className="hContactForm">
          <div class="container">
            <div>
              <h1>Get In Touch!</h1>
              <span
                style={{ backgroundColor: "#0D98D9", height: "10px" }}
                className="d-inline-block w-50"
              >
                &nbsp;
              </span>
            </div>
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleInputName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputText">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      placeholder="Your Number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="formMsg">Your Message</label>
                    <textarea
                      id="formMsg"
                      class="form-control"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                  <button
                    style={{ backgroundColor: "#0D98D9" }}
                    type="submit"
                    class="btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(HomeContactUs);
