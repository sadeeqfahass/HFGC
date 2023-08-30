import React from "react";

function Solutions() {
  return (
    <>
      <div className="solutions row p-5 gap-3" id="solutions">
        <h1 className="text-center mb-5">Solutions</h1>
        <div class="card sm-col-12 md-col-4">
          <img src="DSC00039.jpg" class="card-img-top w-100" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Motor control centers</h5>
            <p class="card-text">
            A Motor Control Center (MCC) panel is used in large industrial and commercial applications to control motors from a central location
            </p>
          </div>
        </div>
        <div class="card sm-col-12 md-col-4">
          <img src="DSC00059.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Distribution Boards</h5>
            <p class="card-text">
            A main distribution panel is a component of an electricity supply system that divides an electrical power feed into subsidiary circuits.
            </p>
          </div>
        </div>
        <div class="card sm-col-12 md-col-4">
          <img src="DSC00037.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> Synchronization panel</h5>
            <p class="card-text">
            A synchronization panel in an industry is used to synchronize multiple generators or power sources to ensure a continuous and stable power supply.
            </p>
          </div>
        </div>
        <div class="card sm-col-12 md-col-4">
          <img src="DSC00084.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Power Factor Correction</h5>
            <p class="card-text">
            A Power Factor Correction (PFC) panel is a device that is used to improve the power factor of an electrical system in an industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
