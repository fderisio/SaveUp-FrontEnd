import React, { Component } from 'react';
import '../../style.css';
import { RaisedButton, TextField, Paper } from 'material-ui';
//import TextField from 'material-ui/TextField';
//import Paper from 'material-ui/Paper';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

const styles = {
  textField: {
    width: 350,
  },
  paper: {
    width: 600,
    height: 140, 
    margin: 'auto', 
    marginTop: 100,
  }
};

class ForgotPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  handleEmail = (e) => { this.setState({ email: e.currentTarget.value }); };
  
  render() {
    return (
      <div>
        <Navbar />
        <h3 style={{marginTop:50}}>Forgot your password?</h3>
        <p>Please enter your e-mail and you will receive a link to reset your password.</p>
        <Paper zDepth={2} style={ styles.paper } >
          <form>
            <TextField 
              floatingLabelText="Email" 
              floatingLabelFixed={true} 
              style={{ width: '500' }}
              onChange={ this.handleEmail }/><br /><br />
            <RaisedButton type="submit" label="Reset password" />
          </form>
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default ForgotPassword;