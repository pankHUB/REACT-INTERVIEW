import { React } from "react";
import "./TopDesc.css";

function TopDesc() {
  return(
    <div className="TopDesc">
      <hr/>
      <div className="UndoBatch">Undo Batch</div>
      <div className="AssignSuppliers">Assign Suppliers</div>
      <div className="GeneratePO">Generate PO</div>
    </div>
  );
}

export default TopDesc;
