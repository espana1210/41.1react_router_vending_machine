import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
    <div>     
        <h1> What would you like to eat?</h1>     
       <nav> 
        <h1><Link to ="/">VendingMachine</Link></h1>   
        <h1><Link to ="/Soda">Soda</Link></h1>
        <h1><Link to ="/Cakes">Cakes</Link></h1>
        <h1><Link to ="/Chips">Chips</Link></h1>
       </nav> 
    </div>
    );
}

export default VendingMachine;
