import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

const Chips =() => {
  return (
    <div className = "Chips">  
      <Message>
        <h1>Chips.Here you go!</h1>  
        <h1> <Link to ="/">Go back.</Link></h1>   
      </Message>  
    </div>
    );
}

export default Chips;