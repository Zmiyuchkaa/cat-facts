import React from 'react';
import './App.css';
import Router from './Router.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
