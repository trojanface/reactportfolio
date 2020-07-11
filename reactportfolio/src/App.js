import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './scenes/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Background from './components/Background';
import Navbar from './components/Navbar/index'
function App() {
  return (
    <Router>
      <Route path="/" component={props =>
        <>
          <Navbar />
          <Background />
        </>
      } />
      <Route exact path="/" component={HomePage}/>
    </Router>
  );
}

export default App;
