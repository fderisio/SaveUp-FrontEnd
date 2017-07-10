import React, { Component } from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import QuickStart from '../../Components/QuickStart';
import Footer from '../../Components/Footer';

class FAQ extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div>
            <div className="FAQFirstColumn">
              <h3>Why SaveUp</h3>
              <QuickStart />
            </div>
            <div className="FAQSecondColumn">
              <h3>Already registered? Quick Start</h3>
              <QuickStart />
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default FAQ;