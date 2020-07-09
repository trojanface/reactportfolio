import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './scenes/Home';
import Background from './components/Background';
import Navbar from './components/Navbar/index'
function App() {
  return (
    <>
    <Background />
    <Navbar />
    <HomePage />
    </>
  );
}

export default App;
