import React, { Component } from 'react';

import './App.css';
import Navbar from './Components/Navbar.jsx'
import Header from './Components/Header.jsx'
import Index from './Components/Index.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Header/>
        <Index/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
