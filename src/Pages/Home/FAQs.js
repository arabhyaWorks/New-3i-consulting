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
                  <a class="card-title">
                    What services does 3i Consulting offer?
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>
                    3i Consulting provides a wide range of services including
                    cloud solutions, digital security, tech consulting, help
                    desk and support, and specialized systems like HRMS, temple
                    management systems, legal case management, property
                    management, and more. We focus on delivering scalable,
                    secure, and cost-effective technology solutions tailored to
                    our clients' needs.
                  </p>
                </div>
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                >
                  <a class="card-title">
                    How does 3i Consulting ensure the security of my data?
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  class="card-body collapse"
                  data-parent="#accordion"
                >
                  <p>
                    Our digital security services are designed to protect your
                    data through advanced encryption, secure access controls,
                    and compliance with industry standards. We implement robust
                    security protocols to safeguard sensitive information from
                    unauthorized access and cyber threats.
                  </p>
                </div>
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                >
                  <a class="card-title">
                    Can 3i Consulting help with large-scale tech projects
                  </a>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    Yes, 3i Consulting specializes in tech consulting, providing
                    end-to-end solutions for large-scale projects. Our services
                    include developing comprehensive tech architecture, ensuring
                    project scalability, managing cloud resources, selecting
                    appropriate servers, and ensuring robust security measures.
                  </div>
                </div>
                {/*  */}
                <div
                  class="card-header bg-white collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                >
                  <a class="card-title">
                    How does 3i Consulting support its clients
                    post-implementation?
                  </a>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    We offer dedicated help desk and support services to assist
                    clients post-implementation. Our support team is available
                    to handle inquiries, troubleshoot issues, manage refunds and
                    cancellations, and ensure smooth operation of the deployed
                    systems. We also provide continuous monitoring and updates
                    to keep the systems running efficiently.
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
                    Our headquarters is located at N. 12/304, Triplex-3, J-56
                    Shivraj Nagar Colony, Mahmoorganj, Varanasi.You can contact
                    us via email at info@3icounsulting.in, call us at
                    +91-9140860949, or fill out the contact form below.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-weight-bold">Still have questions?</h5>
              <p className="text-muted">
                Contact us for more information or to get started.{" "}
              </p>
              <button
                style={{ backgroundColor: "#37393F" }}
                className="btn text-white"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(FAQs);
