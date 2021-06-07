import { React, useState } from "react";
import Agri_maintenence from "./navbar/Agri_maintenence";
import Agri_management from "./navbar/Agri_management";
import Agri_request from "./navbar/Agri_request";
import Suplier_maintenence from "./navbar/Suplier_maintenence";
import Tax_master from "./navbar/Tax_master";
// import Table from "./navbar/Table";
import "./Navbar.css";
import { useHistory } from 'react-router-dom';

function Navbar() {
  const [showDesc, setShowDesc] = useState(false);
  const onClick = () => setShowDesc(true);

  return (
    <div className="Navbar">
      <Agri_management />
      <Agri_maintenence />
      <Suplier_maintenence />
      <div class="agrirequest">
        <Agri_request/>
      </div>
      <div className="taxmaster">
        <Tax_master/>
      </div>
    </div>
  );
}

export default Navbar;
