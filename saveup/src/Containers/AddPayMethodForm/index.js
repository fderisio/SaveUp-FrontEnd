import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';
import LoadingIcon from '../../Components/LoadingIcon';
import { addPayMethodAction } from '../../Store/actions';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import { RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = {
  textField: {
    width: 350,
    float: 'left',
    marginLeft: 55,
  },
  paper: {
    width: 450, 
    height: 250, 
    margin: 'auto',
    marginTop: 50,
  },
  button: {
    marginTop: 25,
    float: 'right',
    marginRight: 150,
  },
}

class AddPayMethod extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      bank: '""',
    }
  }

  // handle functions (changes the state)
  handleName = (e) => { this.setState({ name: e.currentTarget.value }); };
  handleBank = (e) => { this.setState({ bank: e.currentTarget.value }); };

  addCategory = (e) => {
    e.preventDefault();
    console.log('inside payment form clicked')
    const addPaymentAction = addPayMethodAction(this.state.name, this.state.bank);
    this.props.dispatch(addPaymentAction);
    this.props.history("/profile");
  };

  render() {

    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    console.log('addCategory props', this.props);

    // filter non fixed categories
    let nonfixedCategories = [];
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        let newArray = [categoriesArray[i].id, categoriesArray[i].name];
        nonfixedCategories.push(newArray);
      }
    }

    // categories list to display using dropdownmenu
    const categories = [];
    for (let i = 0; i < nonfixedCategories.length; i++ ) {
      categories.push(nonfixedCategories[i]);
    }

    /* ---- RENDER ADD EXPENSE FORM ---- */

    return (
        <Paper zDepth={2} style={styles.paper}>
          <form>
            <TextField 
              hintText="Category name" 
              floatingLabelText="Category name" 
              maxLength={20}
              style={styles.textField} 
              onChange={this.handleName} /><br/>
            <TextField 
              hintText="Bank" 
              defaultValue=""
              floatingLabelText="Bank" 
              maxLength={40}
              style={styles.textField} 
              onChange={this.handleBank} />
            <p className="SmallNotes">*Example: 31.50</p><br/><br/>
            <Link to="/profile"><RaisedButton 
              label="Add Payment" 
              type="submit" 
              style={styles.button}
              onClick={this.addPayMethod} /></Link>
          </form>
        </Paper>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddPayMethod);