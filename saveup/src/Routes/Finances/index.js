import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import YearSavings from '../../Containers/Charts/YearSavings';
import YearForecast from '../../Containers/Charts/YearForecast';
import Footer from '../../Components/Footer';

const Finances = () => (
  	<div>
	    <Navbar />
	    <div>
		    <div className="Finances" style={{ textAlign: 'left'}}>
	        <YearSavings />
	      </div>
	      <div className="Finances2" style={{ textAlign: 'left'}}>
	        <YearForecast />
	      </div>
	    </div>
	    <Footer />
  	</div>
);

export default Finances;

// <h3 style={{ marginBottom: 40 }}>Useful links:</h3>
// 	        <p>Swiss stocks: <a href="https://www.cash.ch/boerse" target="_blank">https://www.cash.ch/boerse</a></p>
// 	        <h3 style={{ marginTop: 40 }}>More suggestions coming soon...</h3>