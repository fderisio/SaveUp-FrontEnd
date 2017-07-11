import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';
import LoadingIcon from '../../Components/LoadingIcon';
import { addIncomeAction } from '../../Store/actions';
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
  datepicker: {
    float: 'right',
    marginRight: 139,
    marginTop: 10,
  }
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
      started: '',
      monthly: true,
      ended: '',
    }
  }

  // Date converter to "YYYY-MM-DDT00:00:00.000Z"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const d = new Date(inputFormat);
      return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-') + "T00:00:00.000Z";
  };

  // handle functions (changes the state)
  handleAmount = (e) => { this.setState({ amount: e.currentTarget.value }); };
  handleStarted = (e, index) => this.setState({ started: this.convertDate(index) });
  handleMonthly = (e) => { this.setState({ monthly: !(this.state.monthly) }); };
  handleEnded = (e, index) => this.setState({ ended: this.convertDate(index) });

  // render datepicker end income field
  renderEnded = () => {
    (this.state.monthly) ? false : true;
  }

  addIncome = (e) => {
    e.preventDefault();
    const addIncomeAct = addIncomeAction(this.state.amount, this.state.started, this.state.monthly, this.state.ended);
    this.props.dispatch(addIncomeAct);
    this.props.nextPage('/profile');
  };

  render() {
    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */

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

    /* ---- RENDER ADD INCOME FORM ---- */
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
              defaultChecked={this.state.monthly}
              style={styles.checkbox}
              onClick={this.handleMonthly} />
            <DatePicker
              floatingLabelText="Started on" 
              style={styles.datepicker}
              hintText="YYYY-MM-DD"
              onChange={this.handleStarted}/>
            <DatePicker
              disabled={this.state.monthly}
              floatingLabelText="Ended on" 
              style={styles.datepicker}
              hintText="YYYY-MM-DD"
              onChange={this.handleEnded}/>
            <p className="SmallNotes">*ONLY FOR A NON MONTHLY INCOME</p><br/><br/>
            <RaisedButton 
              label="Add income" 
              type="submit" 
              style={styles.button}
              onClick={this.addIncome} />
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