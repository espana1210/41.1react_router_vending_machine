import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";


const Cakes =() => {
  return (
    <div className ="Cakes">  
    <Message>
      <h1>Cakes.Here you go!</h1>   
      <h1> <Link to ="/">Go back.</Link></h1>
      </Message>  
    </div>    
    );
}

export default Cakes;