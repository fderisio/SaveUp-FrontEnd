import React, { Component } from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

class Contact extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="ContactCombineElements">
            <h3>Do you like our website?</h3>
            <h3>Do you have any suggestions?</h3>
            <h2>We would love to hear from you!</h2>
            <p className="Contact-email">
            Contact us at <a>support@saveup.com</a>
            </p>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Contact;