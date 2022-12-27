// import React, { useState } from "react";
import React from "react";
import "./services.css";

const Services = () => {
  // const [toggleState, setToggleState] = useState(0);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What we offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            {/* <i className="uil uil-web-grid services__icon"></i> */}
            <h3 className="services__title">
              Saturdays and Holiday pickups with rotating and seasonal menus.
            </h3>
          </div>
        </div>

        <div className="services__content">
          <div>
            {/* <i className="uil uil-arrow services__icon"></i> */}
            <h3 className="services__title">
              Baked goods are pick up only!
            </h3>
          </div>
        </div>

        {/* <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
