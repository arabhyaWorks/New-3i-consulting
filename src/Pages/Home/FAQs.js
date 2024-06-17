import React from "react";
import "./Home.css";

function FAQs() {
  return (
    <>
      <div className="container-fluid faqSection my-5">
        <div className="faqSectionContent text-center">
          <h6 className="font-weight-bold">Have Questions?</h6>
          <h1 className="font-weight-bold">FAQ's</h1>
        </div>
        <div>
          <div class="container-fluid faqAccordianDiv">
            <div>
              <h5 className="font-weight-bold">Frequently Asked Questions</h5>
              <p className="text-muted text-left">
                Find answers to common questions about the services and
                solutions <br /> provided by 3i Consulting.
              </p>
            </div>
            <div id="accordion" class="accordion">
              <div class="card mb-0">
                <div
                  class="card-header bg-white  collapsed"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <a class="card-title">What services do you offer?</a>
                </div>
                <div
                  id="collapseOne"
                  class="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </p>
                </div>
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a class="card-title">How can you help with e-governance?</a>
                </div>
                <div
                  id="collapseTwo"
                  class="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </p>
                </div>
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a class="card-title">What industries do you serve?</a>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. samus labore sustainable VHS.
                  </div>
                </div>
                {/*  */}
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a class="card-title">Do you provide support?</a>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. samus labore sustainable VHS.
                  </div>
                </div>
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                >
                  <a class="card-title">How can I contact you?</a>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. samus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
            <div>
        <h5 className="font-weight-bold">Still have questions?</h5>
        <p className="text-muted">Contact us for more information or to get started. </p>
        <button style={{backgroundColor: '#37393F'}} className="btn text-white">Contact us</button>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default React.memo(FAQs);
