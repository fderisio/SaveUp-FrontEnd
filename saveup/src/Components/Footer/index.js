import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import FlatButton from 'material-ui/FlatButton';

const Footer = () => (
   <nav className="Footer">
      <ul className="footerbuttons">
        <li><Link to="/underconstruction"><b>FAQ</b></Link></li>
        <li><Link to="/underconstruction"><b>About</b></Link></li>
        <li><Link to="/underconstruction"><b>Contact</b></Link></li>
      </ul>
      <p>&copy; 2017 Coded by fiorella.drb</p>
    </nav>
);

export default Footer;

{/*<div className="Footer">
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
  </div>*/}