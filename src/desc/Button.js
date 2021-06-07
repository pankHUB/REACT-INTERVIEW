import React from "react";
import GetAppIcon from '@material-ui/icons/GetApp';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import "./Button.css"

function Button() {
return(
    <div className="Button">
      <div className="ButtonNew"><input type="radio"/>&nbsp;&nbsp;AGBUY13042020_104&nbsp;&nbsp;<ExpandMoreIcon/></div>
      <div className="ButtonNew"><PersonIcon/>&nbsp;&nbsp;Alex Lee</div>
      <div className="ButtonNew"><TableChartIcon/>&nbsp;&nbsp;RFQList_13042020_1042&nbsp;&nbsp;<GetAppIcon/></div>
    </div>
  );
}

export default Button;