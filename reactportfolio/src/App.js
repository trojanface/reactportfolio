import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './scenes/Home';
import About from './scenes/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from './components/Background';
import Navbar from './components/Navbar/index'
import Portfolio from './scenes/Portfolio'
function App() {
  return (
    // creates a router
    <Router>
      {/* Will display the first route that meets the path criteria */}
      <Switch>
      {/* Checks if the path is /portfolio and if it is it renders the internal components */}
        <Route exact path="/portfolio">
          <Navbar />
          <Background />
          <Portfolio />
        </Route>
      {/* Checks if it is the home path or any other path and if it is it will display the homepage. */}
        <Route path="/">
          <Navbar />
          <Background />
          <HomePage />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
