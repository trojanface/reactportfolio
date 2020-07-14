import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './scenes/Home';
import About from './scenes/About';
import { HashRouter, Route, Switch } from "react-router-dom";
import Background from './components/Background';
import Navbar from './components/Navbar/index'
import Portfolio from './scenes/Portfolio'
function App() {
  return (
    // creates a router
    <HashRouter basename={process.env.PUBLIC_URL}>
      {/* Will display the first route that meets the path criteria */}
      <Switch>
      {/* Checks if the path is /portfolio and if it is it renders the internal components */}
        <Route path= {`/portfolio`}>
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

    </HashRouter>
  );
}

export default App;
