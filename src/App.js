import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Soda from "./Soda";
import Cakes from "./Cakes";
import Chips from "./Chips";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
         <VendingMachine />
        </Route> 
        <Route path="/" exact>
         <Soda />
        </Route>
        <Route path="/" exact>
         <Cakes />
        </Route>
        <Route path="/" exact>
         <Chips />
        </Route>
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
