import React from "react";

function PartnersCard(props) {
  return (
    <>
      <div className="partner-con text-center">
        <img src={props.img} alt="" className="partners-img" />
        {/* <p>{props.name}</p> */}
      </div>
    </>
  );
}

export default PartnersCard;
