import React, { Component } from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

class About extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="About">
            <div>
              <h2 style={{ marginTop: -80 }}>Personal Expenses Organizer</h2>
              <h3>SaveUp 1.0</h3>
              <h4 style={{ marginTop: 80}}>Full-Stack Propulsion Academy Bootcamp <br/> Final Project</h4>
              <h4 style={{ marginTop: 40}}>Designed & Coded by fiorella.drb</h4>
              <p>Copyright &copy; 2017</p>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default About;