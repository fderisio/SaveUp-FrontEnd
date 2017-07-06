import React, { Component } from 'react';
import '../../style.css';
import handImage from '../../images/hand.png';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h2>Welcome to SaveUp</h2>
        <p className="App-intro">
          Are your ready to organize your expenses? <br/>
            Check easily how much can you save<br/>
              Start enjoying your savings now<br/>
                All your expenses in one place <br/>
        </p>
        <img src={handImage} className="handImage"/>
        <Footer />
      </div>
    );
  }
}

export default Welcome;
