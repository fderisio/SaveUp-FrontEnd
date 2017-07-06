import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

const styles = {
  textField: {
    marginTop: 20,
    width: 350,
  },
  paper: {
    width:'30%', 
    height:'220', 
    margin: 'auto', 
    marginTop: '50',
  }
};

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (e) => { this.setState({ email: e.currentTarget.value}) };
  handlePassword = (e) => { this.setState({ password: e.currentTarget.value}) };
  
  render() {
    return (
      <div>
        <Navbar />
        <h2>Welcome back!</h2>
        <Paper zDepth={2} style={ styles.paper } >
          <form>
            <TextField hintText="E-mail" style={styles.textField}/><br />
            <TextField hintText="Password" style={styles.textField}/><br /><br />
            <RaisedButton type="submit" label="Sign In" />
          </form>
        </Paper><br/><br/>
        <Link to="/forgotpassword"><p>Forgot your password?</p></Link>
        <h3>If you don´t have an user, you can register <Link to="/signup">here.</Link> </h3>
        <Footer />
      </div>
    );
  }
}

export default SignIn;