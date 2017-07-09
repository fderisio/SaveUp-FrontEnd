import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { addExpenseAction } from '../../Store/actions';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import { RaisedButton } from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import LoadingIcon from '../../Components/LoadingIcon';


const styles = {
  textField: {
    width: 350,
    float: 'left',
    marginLeft: 55,
  },
  categoriesmenu: {
    width: 200,
    float: 'left',
    marginLeft: 30,
    textAlign: 'left',
  },
  paymentmenu: {
    marginTop: 10,
    width: 300,
    float: 'right',
    marginRight: 120,
    textAlign: 'left',
  },
  paper: {
    width: 450, 
    height: 510, 
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
    marginTop: 20,
  }
}

class AddExpense extends Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  constructor(props) {
    super(props)
    this.state = {
      category: '',
      text: '',
      store: '',
      expenseDate: '',
      total: '',
      payMethod: '',
      open: false,
    }
  }

  // Date converter to "DD-MM-YYYY" "YYYY-MM-DDT00:00:00.000Z"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const d = new Date(inputFormat);
      return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-') + "T00:00:00.000Z";
  };

  // handle functions (changes the state)
  handleCategory = (e, index, value) => this.setState({ category: value });
  handleNotes = (e) => { this.setState({ text: e.currentTarget.value }); };
  handleCompany = (e) => { this.setState({ store: e.currentTarget.value }); };
  handleDate = (e, index) => this.setState({ expenseDate: this.convertDate(index) });
  handleTotal = (e) => { this.setState({ total: parseFloat(e.currentTarget.value) }); };
  handlePayment = (e, index, value) => this.setState({ payMethod: value });

  addExpense = (e) => {
    e.preventDefault();
    console.log('hola')
    const addExpenseAct = addExpenseAction(this.state.category, this.state.text,
    this.state.store, this.state.expenseDate, this.state.total, this.state.payMethod); // signin(email, password) is in actions.js
    this.props.dispatch(addExpenseAct);
  }

  render() {

    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    console.log('addExpense props', this.props);

    // filter non fixed categories
    let categories = [];
    const categoriesArray = this.props.currentUser.categories;
    console.log(categoriesArray)
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        categories.push(
          <MenuItem 
            value={categoriesArray[i]} 
            key={categoriesArray[i].id} 
            primaryText={`${categoriesArray[i].name}`} />
        );
      }
    }

    // payment methods list to display using dropdownmenu
    let paymethods = [];
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods.push(
        <MenuItem 
          value={paymethodsArray[i]} 
          key={paymethodsArray[i].id} 
          primaryText={`${paymethodsArray[i].name}`} />
      );
    }

    /* ---- RENDER ADD EXPENSE FORM ---- */

    return (
        <div>
        <Paper zDepth={2} style={styles.paper}>
          <form>
            <SelectField
              floatingLabelText="Category"
              style={styles.textField}
              value={this.state.category}
              onChange={this.handleCategory}
            >
              {categories}
            </SelectField>
            <TextField 
              hintText="Store/Company" 
              floatingLabelText="Company/Store" 
              style={styles.textField} 
              onChange={this.handleCompany} />
            <TextField 
              hintText="Notes" 
              floatingLabelText="Notes" 
              maxLength={20}
              style={styles.textField} 
              onChange={this.handleNotes}/>
            <p className="SmallNotes">*Max. 20 characters</p>
            <DatePicker
              style={styles.datepicker}
              hintText="YYYY-MM-DD"
              onChange={this.handleDate}/>
            <p className="SmallNotes">*Required</p>
            <TextField 
              hintText="Total in CHF" 
              floatingLabelText="Total in CHF" 
              maxLength={10}
              style={styles.textField} 
              onChange={this.handleTotal} />
            <p className="SmallNotes">*Example: 31.50</p>
            <SelectField
              floatingLabelText="Payment"
              style={styles.textField}
              value={this.state.payMethod}
              onChange={this.handlePayment}
            >
              {paymethods}
            </SelectField>
            <RaisedButton 
              label="Add Expense" 
              type="submit" 
              style={styles.button} 
              onClick={this.addExpense}/>
          </form>
        </Paper>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return state;
}

export default connect(mapStateToProps)(AddExpense);