import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { addExpenseAction } from '../../Store/actions';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import { RaisedButton } from 'material-ui';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import LoadingIcon from '../../Components/LoadingIcon';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  textField: {
    width: 350,
    float: 'left',
    marginLeft: 55,
    marginTop: -5,
  },
  selectCategory: {
    width: 255,
    float: 'left',
    marginLeft: 55,
    textAlign: 'left',
  },
  selectPayment: {
    width: 255,
    float: 'right',
    marginRight: 139,
    textAlign: 'left',
    marginTop: -10
  },
  paper: {
    width: 450, 
    height: 490, 
    margin: 'auto', 
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    float: 'right',
    marginRight: 150,
  },
  datepicker: {
    float: 'right',
    marginRight: 139,
    marginTop: 10,
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

  // Date converter to "YYYY-MM-DDT00:00:00.000Z"
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
    const addExpenseAct = addExpenseAction(this.state.category, this.state.text,
    this.state.store, this.state.expenseDate, this.state.total, this.state.payMethod);
    this.props.dispatch(addExpenseAct);
    this.setState({ 
      category: '',
      text: '',
      store: '',
      total: '',
      payMethod: '',
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */

    // filter non fixed categories to display as a SelectField
    let categories = [];
    const categoriesArray = this.props.currentUser.categories;
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

    // payment methods list to display using SelectField
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
              style={styles.selectCategory}
              value={this.state.category}
              onChange={this.handleCategory}>
              {categories}
            </SelectField>
            <TextField 
              hintText="Store/Company" 
              floatingLabelText="Company/Store"
              value={this.state.store}  
              style={styles.textField} 
              onChange={this.handleCompany} />
            <TextField 
              hintText="Notes" 
              floatingLabelText="Notes"
              value={this.state.text}  
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
              value={this.state.total} 
              maxLength={10}
              style={styles.textField} 
              onChange={this.handleTotal} />
            <p className="SmallNotes">*Example: 31.50</p>
            <SelectField
              floatingLabelText="Payment"
              style={styles.selectPayment}
              value={this.state.payMethod}
              onChange={this.handlePayment}>
              {paymethods}
            </SelectField>
            <RaisedButton 
              label="Add Expense" 
              type="submit" 
              style={styles.button} 
              onClick={this.addExpense} />
          </form>
          <Snackbar
            open={this.state.open}
            message="Expense added successfully"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}/>
        </Paper>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddExpense);