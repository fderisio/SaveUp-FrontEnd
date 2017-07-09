import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../Store/actions';

const styles = {
  navbar: {
    //backgroundColor: '#00E5FF', // '#78B5A2', // other possible colors: '#590018', // #007F41
  },
  button: {
    textTransform: 'capitalize',
    color: '#424242', //lightgrey',
    fontSize: '16px',
  }
};

class Navbar extends React.Component {

  signout = (e) => {
    e.preventDefault();
    const logoutAction = logOutUser();
    this.props.dispatch(logoutAction);
    this.props.nextPage('/');
  };

  render() {
    console.log(this.props)

    if (this.props.currentUser.id != null) {
      return (
        <Toolbar style={ styles.navbar } >
          <ToolbarGroup firstChild={false}>
            <Link to="/dashboard"><p className="icon">SaveUp</p></Link>
            <div className="ContactButtons">
              <Link to="/dashboard">
                <FlatButton label="Dashboard" labelStyle={ styles.button }/>
              </Link>
              <Link to="/expenses">
                <FlatButton label="Expenses" labelStyle={ styles.button }/>
              </Link>
              <Link to="/quickadd">
                <FlatButton label="Quick Add" labelStyle={ styles.button }/>
              </Link>
            </div>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <Link to="/profile">
                <FlatButton label="Profile" labelStyle={ styles.button }/>
              </Link>
              <Link to="/">
                <FlatButton label="Sign out" labelStyle={ styles.button } onClick={this.signout}/>
              </Link>
            </div>
          </ToolbarGroup>
        </Toolbar>
      )
    } else {
      return (
      <div>
        <Toolbar style={ styles.navbar } >

          <ToolbarGroup firstChild={false}>
            <p className="icon">SaveUp</p>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <Link to="/signin">
                <FlatButton label="Sign In" primary={true} labelStyle={ styles.button }/>
              </Link>
              <Link to="/signup">
                <FlatButton label="Sign Up" secondary={true} labelStyle={ styles.button }/>
              </Link>
            </div>
          </ToolbarGroup>

        </Toolbar>
      </div>
    );
    }
    
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Navbar);