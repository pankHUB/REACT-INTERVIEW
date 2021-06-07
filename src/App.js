import "./App.css";
import React from "react";
import Headbar from "./Headbar";
import Navbar from "./Navbar";
import Desc from "./Desc";
import TopDesc from "./desc/TopDesc";
import Button from "./desc/Button";
//import {Router, Route, Switch} from 'react-router-dom';


export default function App() {
  return (
  
    <div className="App">
      <Navbar />
      <div className="viewPort">
        <Headbar />
        <hr />
        <TopDesc />
        <hr />
        <Button />
        <Desc />
        <Button />
      </div>    
    </div>
    
  );
}
