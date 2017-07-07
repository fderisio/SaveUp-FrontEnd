import React from 'react';
import gif from './underconstruction.gif';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

const UnderConstruction = () => (
  <div className="UnderConstruction">
  	<Navbar />
  	<br/> <br/>
    <h2>Sorry... this link is under construction.</h2>
    <img src={gif} style={{height: 100, marginTop: 100}} alt='underconstruction'/>
    <Footer />
  </div>
);

export default UnderConstruction;