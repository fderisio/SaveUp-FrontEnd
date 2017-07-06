import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import icon from './iconorange.png';
import { Link } from 'react-router-dom';

const labelStyles = {
  // navbar: {
  //   backgroundColor: '#78B5A2', // other possible colors: '#590018', // #007F41
  // },
  button: {
    textTransform: 'capitalize',
    //color: 'white'
  }
};

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <Toolbar className="Navbar" >

          <ToolbarGroup firstChild={false}>
            <img src={icon} className="icon" alt="Logo icon"/>
            <div className="ContactButtons">
              <Link to="/dashboard">
                <FlatButton label="Dashboard" labelStyle={ labelStyles.button }/>
              </Link>
              <Link to="/expenses">
                <FlatButton label="Expenses" labelStyle={ labelStyles.button }/>
              </Link>
              <Link to="/profile">
                <FlatButton label="Profile" labelStyle={ labelStyles.button }/>
              </Link>
              <FlatButton label="Sign out" labelStyle={ labelStyles.button }/>
            </div>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <Link to="/signin">
                <FlatButton label="Sign In" primary={true} labelStyle={ labelStyles.button }/>
              </Link>
              <Link to="/signup">
                <FlatButton label="Sign Up" secondary={true} labelStyle={ labelStyles.button }/>
              </Link>
            </div>
          </ToolbarGroup>

        </Toolbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default Navbar;
