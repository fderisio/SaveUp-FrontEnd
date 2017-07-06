import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import FlatButton from 'material-ui/FlatButton';

const Footer = () => (
  <div className="Footer">
    <Link to="/underconstruction">
    	<FlatButton label="FAQ" labelStyle={{ textTransform: 'capitalize' }}/>
    </Link>
    <Link to="/underconstruction">
    	<FlatButton label="About" labelStyle={{ textTransform: 'capitalize' }}/>
    </Link>
    <Link to="/underconstruction">
    	<FlatButton label="Contact" labelStyle={{ textTransform: 'capitalize' }}/>
    </Link>
  	<p>&copy; 2017 Coded by fiorella.drb</p>
  </div>
);

export default Footer;