import React from "react";

function Services() {
  return (
    <>
      <section className="services container-fluid">
        <p className="fs-1 text-center text-underline">Services</p>
        <div className="card-con row d-flex justify-content-center gap-5 mt-5">
          <div className="card text-center">
            <div className="card-body">
              <i className="card-icon fa-solid fa-screwdriver-wrench"></i>
              <h5 className="card-title">Installation</h5>
              <p className="card-text">
                At HFGC Energy and Power Solutions Ltd, we leverage our
                expertise and years of experience to provide meticulous
                installation that cater to a wide array of power and energy
                needs.
              </p>
            </div>
          </div>
          <div className="card text-center sm-col-12 md-col-4">
            <div className="card-body">
              <i className="card-icon fa-solid fa-vial-virus"></i>
              <h5 className="card-title">Testing</h5>
              <p className="card-text">
                HFGC Energy and Power Solutions Ltd have the expertise
                and experience to provide comprehensive electrical testing
                services for a wide range of power and energy requirements.
              </p>
            </div>
          </div>
          <div className="card text-center">
            <div className="card-body">
              <i className="card-icon fa-solid fa-toolbox"></i>
              <h5 className="card-title">Maintainance</h5>
              <p className="card-text">
                We possess the expertise and hands-on experience to deliver
                comprehensive maintenance solutions tailored to a diverse range
                of power and energy requirements.
              </p>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="see-more text-light d-flex justify-content-center mt-4"
        >
          See More &rarr;
        </a>
      </section>
    </>
  );
}

export default Services;
