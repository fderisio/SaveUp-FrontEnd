import React from 'react';
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Navbar from '../../Containers/Navbar';
import Footer from '../../Components/Footer';

const styles = {
  textField: {
    width: 350,
  },
  paper: {
    width:'30%', 
    height: 480, 
    margin: 'auto', 
    marginTop: 20,
  },
  button: {
    marginTop: 40,
  }
}

class SignUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  }

  handleFirstName = (e) => { this.setState({ firstName: e.currentTarget.value}) };
  handleLastName = (e) => { this.setState({ lastName: e.currentTarget.value}) };
  handleEmail = (e) => { this.setState({ email: e.currentTarget.value}) };
  handlePassword = (e) => { this.setState({ password: e.currentTarget.value}) };
  handleRepeatPassword = (e) => { this.setState({ repeatPassword: e.currentTarget.value}) };

  render() {
    return (
      <div>
        <Navbar />
        <h2>Welcome to SaveUp</h2>
        <Paper zDepth={2} style={styles.paper}>
          <form>
            <TextField 
              hintText="First name" floatingLabelText="First name" 
              style={styles.textField} onChange={this.handleFirstName}  />
            <TextField 
              hintText="Last name" floatingLabelText="Last name" 
              style={styles.textField} onChange={this.handleLastName}/>
            <TextField 
              hintText="Email" floatingLabelText="Email" 
              style={styles.textField} onChange={this.handleEmail} />
            <TextField 
              hintText="Password" floatingLabelText="Password" 
              type="password" style={styles.textField} onChange={this.handlePassword} />
            <p className="SmallNotes">*Minimum 6 charachters</p><br/>
            <TextField 
              hintText="Repeat password" floatingLabelText="Repeat Password" 
              type="password" style={styles.textField} onChange={this.handleRepeatPassword} />
            <RaisedButton label="Create Account" type="submit" style={styles.button}/>
          </form>
        </Paper>
        <Footer />
      </div>
    );
  }
  
}

export default SignUp;