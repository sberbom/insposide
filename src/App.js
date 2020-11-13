import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route }  from "react-router-dom";
import SBNavbar from './components/navbar'
import Home from './sites/home'
import Studier from './sites/studier'
import Klasserom from './sites/klasserom'
import firebase from './firebase'
import Resources from './sites/resources';
import QandA from './sites/QandA'
import Info from './sites/info'

function App() {
  const analytics = firebase.analytics();
  analytics.logEvent("Loaded")
  return (
    <div className="App">
      <SBNavbar/>
      <Switch>
          <Route path="/studier">
            <Studier/>
          </Route>
          <Route path="/klasserom">
            <Klasserom/>
          </Route>
          <Route path="/ressurser">
            <Resources/>
          </Route>
          <Route path="/spørsmål_og_svar">
            <QandA/>
          </Route>
          <Route path="/info">
            <Info/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
