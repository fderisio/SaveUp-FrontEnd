import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { signin } from '../../Store/actions';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

const styles = {
  textField: {
    width: 350,
  },
  paper: {
    width: 500,
    height: 220, 
    margin: 'auto', 
    marginTop: 100,
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

  handleEmail = (e) => { 
    const email = e.currentTarget.value;
    this.setState({ email });
  }

  handlePassword = (e) => { 
    const password = e.currentTarget.value;
    this.setState({ password });
  }
  
  signin = (e) => {
    e.preventDefault();
    const signinAction = signin(this.state.email, this.state.password); // signin(email, password) is in actions.js
    this.props.dispatch(signinAction)
    //this.props.history.push("/dashboard");
      .then((userSearch) => { // checks return of the loginAction
        if (userSearch === 'not found') {
          return <p>Sorry... user not found</p>
        } else {
          this.props.history.push("/dashboard");
        }
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar />
        <Paper zDepth={2} style={ styles.paper } >
          <form>
            <TextField 
              hintText="E-mail" 
              floatingLabelText="E-mail" 
              style={ styles.textField } 
              onChange={ this.handleEmail }/><br />
            <TextField 
              hintText="Password" 
              floatingLabelText="Password" 
              type="password" 
              style={ styles.textField } 
              onChange={ this.handlePassword }/><br /><br />
            <RaisedButton type="submit" label="Sign In" onClick={ this.signin } />
          </form>
        </Paper><br/><br/>
        <Link to="/forgotpassword"><p>Forgot your password?</p></Link>
        <p>If you don´t have an account, you can register <Link to="/signup">here.</Link> </p>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(SignIn);