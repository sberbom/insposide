import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route }  from "react-router-dom";
import SBNavbar from './components/navbar'
import Home from './sites/home'
import Studier from './sites/studier'
import Klasserom from './sites/klasserom'
import firebase from './firebase'

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
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
