import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

import "./Soda.css";

const Soda =() => {
  return (
    <div className ="Soda">  
      <Message>
      <h1>Soda.Here you go!</h1>   
      <h1> <Link to ="/">Go back.</Link></h1>
      </Message>
    </div>    
    );
}

export default Soda;