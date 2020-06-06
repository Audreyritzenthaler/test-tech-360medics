import React from 'react';
import List from './components/List'
import ProductSheet from './components/ProductSheet';
import { Switch, Route } from "react-router-dom"

import './App.css';

function App() {


  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={List}/>
      <Route path="/product/:product_name" component={ProductSheet}/>
    </Switch>
    </div>
  );
}

export default App;
