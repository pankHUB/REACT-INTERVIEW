import React from "react";
import Completed from "./headbar/Completed";
import Executed from "./headbar/Executed";
import Executing from "./headbar/Executing";
import Pending from "./headbar/Pending";
import "./Headbar.css";

function Headbar() {
  return (
    <div className="Headbar"> 
      <h3>Agri-Input Master Maintenence</h3>
      <div className="menu">
        <Pending />
        <Executing />
        <Executed />
        <Completed />
      </div>
    </div>
  );
}

export default Headbar;
