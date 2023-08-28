import React from "react";
import PartnersCard from "./PartnersCard";

function Partners() {
  return (
    <>
      <div className="partners container-fluid d-flex align-items-center justify-content-between">
        <PartnersCard img="2GEnergy.png" name="2G Energy" />
        <PartnersCard img="ComApControl.png" name="ComAp Control" />
        <PartnersCard img="GruppoEnergia.jpg" name="Gruppo Energia" />
        <PartnersCard img="HyundaiElectric.png" name="Hyundai Electric" />
        <PartnersCard img="KlemsanAutomations.png" name="Klamsen Automations" />
        <PartnersCard img="MethElectric.png" name="Meth Electric" />
      </div>
    </>
  );
}

export default Partners;
