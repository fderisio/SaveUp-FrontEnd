import React from 'react';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import '../../style.css';
import Footer from '../../Components/Footer';

const Welcome = () => (
      <div className="App">
        <div className="welcome">
          <h2>SaveUp</h2>
          <p>Organize your expenses &<br/>
          make your savings drive you<br/>
          wherever you want</p>
          <div className="signup">
            <Link to="/signin"><RaisedButton label="Sign In" /></Link>
            <span>...</span>
            <Link to="/signup"><RaisedButton label="Sign Up" /></Link>
          </div>
        </div>
        <Footer />
      </div>
);

export default Welcome;

// <img src={handImage} className="handImage"/>
