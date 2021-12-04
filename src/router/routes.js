import React from 'react';
import Home from '../pages/Home';
import Cadastrar from '../pages/Cadastrar';
import Editar from '../pages/Editar';
import {BrowserRouter, Switch, Route } from  'react-router-dom';

function  Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastrar" component={Cadastrar} exact/>
        <Route path="/editar/:id?" component={Editar} exact/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;