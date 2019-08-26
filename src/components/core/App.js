import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Title from './Title';
import HomeImage from './HomeImage'
import Shop from './Shop'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Title/>
        <Shop/>
        <HomeImage/>
      </div>
    </div>
  );
}

export default App;