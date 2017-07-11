import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';
import LoadingIcon from '../../Components/LoadingIcon';
import { addCategoryAction, addExpenseAction } from '../../Store/actions';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import { RaisedButton } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  textField: {
    width: 350,
    float: 'left',
    marginLeft: 55,
  },
  checkbox: {
    float: 'left',
    marginLeft: 55,
    textAlign: 'left',
  },
  paper: {
    width: 450, 
    height: 350, 
    margin: 'auto',
    marginTop: 50,
  },
  button: {
    marginTop: 25,
    float: 'right',
    marginRight: 150,
  },
}

class AddIncome extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      amount: '',
      monthly: true,
      started: '',
      ended: '',
    }
  }

  // handle functions (changes the state)
  handleAmount = (e) => { this.setState({ name: e.currentTarget.value }); };
  handleMonthly = (e) => { this.setState({ monthly: !(this.state.fixed) }); };
  handleStarted = (e) => { this.setState({ started: e.currentTarget.value }); };
  handleEnded = (e) => { this.setState({ ended: parseFloat(e.currentTarget.value) }); };

  currentDate = () => {
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = yyyy + '-' + mm + '-' +  dd + "T00:00:00.000Z";
    return today;
  };



  addIncome = (e) => {
    e.preventDefault();
    console.log('inside category form clicked')
    const addIncomeAct = addCategoryAction(this.state.amount, this.state.monthly, this.state.started, this.state.ended);
    this.props.dispatch(addIncomeAct);
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
              hintText="Amount" 
              floatingLabelText="Amount" 
              style={styles.textField} 
              onChange={this.handleAmount} /><br/>
            <Checkbox
              label="Monthly"
              checked={true}
              style={styles.checkbox}
              onClick={this.handleMonthly} />
            <DatePicker
              disabled={this.state.fixed}
              floatingLabelText="Started on" 
              style={styles.datepicker}
              hintText="YYYY-MM-DD"
              onChange={this.handleStarted}/>
            <DatePicker
              disabled={!(this.state.fixed)}
              floatingLabelText="Ended on" 
              style={styles.datepicker}
              hintText="YYYY-MM-DD"
              onChange={this.handleEnded}/>
            <Link to="/profile"><RaisedButton 
              label="Add income" 
              type="submit" 
              style={styles.button}
              onClick={this.addIncome} /></Link>
          </form>
        </Paper>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddIncome);

// <TextField 
//               disabled={this.state.fixed}
//               hintText="Started on" 
//               floatingLabelText="Started on" 
//               style={styles.textField} 
//               onChange={this.handleStarted} />
//             <p className="SmallNotes">*ONLY FOR FIXED CHARGES</p><br/>

// <TextField 
//               disabled={!(this.state.fixed)}
//               hintText="Ended on" 
//               floatingLabelText="Ended on" 
//               maxLength={10}
//               style={styles.textField} 
//               onChange={this.handleTotal} />
//             <p className="SmallNotes">*ONLY FOR FIXED CHARGES</p><br/><br/>