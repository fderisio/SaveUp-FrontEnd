import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
    marginTop: 20,
  },
  button: {
    marginTop: 25,
    float: 'right',
    marginRight: 150,
  },
}

class AddExpense extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: 0,
      notes: '',
      company: '',
      expenseDate: '',
      total: '',
      payment: 0,
      open: false,
    }
  }

  handleCategory = (event, index, value) => this.setState({ category: value });
  handleNotes = (e) => { this.setState({ notes: e.currentTarget.value }); };
  handleCompany = (e) => { this.setState({ company: e.currentTarget.value }); };
  handleDate = (e) => { this.setState({ expenseDate: e.currentTarget.value }); };
  handleTotal = (e) => { this.setState({ total: e.currentTarget.value }); };
  handlePayment = (event, index, value) => this.setState({ payment: value });

  addExpense = (e) => {
    e.preventDefault();
  };

  render() {

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    console.log('addExpense props', this.props);

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
    categories.push(<MenuItem value={0} key={0} primaryText={`Category`} />);
    for (let i = 0; i < nonfixedCategories.length; i++ ) {
      categories.push(
        <MenuItem value={nonfixedCategories[i][0]} key={nonfixedCategories[i][0]} 
        primaryText={`${nonfixedCategories[i][1]}`} />);
    }

    // payment methods list to display using dropdownmenu
    let paymethods = [];
    paymethods.push(<MenuItem value={0} key={0} primaryText={`Payment`} />);
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods.push(
        <MenuItem value={paymethodsArray[i].id} key={paymethodsArray[i].id} 
        primaryText={`${paymethodsArray[i].name}`} />);
    }


    /* ---- RENDER ADD EXPENSE FORM ---- */

    return (
        <div>
        <Paper zDepth={2} style={styles.paper}>
          <form>
            <DropDownMenu maxHeight={300} value={this.state.category} style={styles.categoriesmenu} onChange={this.handleCategory}>
              {categories}
            </DropDownMenu>
            <TextField 
              hintText="Notes" 
              floatingLabelText="Notes" 
              maxLength={20}
              style={styles.textField} 
              onChange={this.handleNotes}/>
            <p className="SmallNotes">*Max. 20 characters</p><br/>
            <TextField 
              hintText="Store/Company" 
              floatingLabelText="Company" 
              style={styles.textField} 
              onChange={this.handleCompany} />
            <TextField 
              hintText="Date of Expense" 
              floatingLabelText="Date of Expense" 
              style={styles.textField} 
              onChange={this.handleDate} />
            <p className="SmallNotes">*Required</p><br/>
            <TextField 
              hintText="Total in CHF" 
              floatingLabelText="Total in CHF" 
              maxLength={10}
              style={styles.textField} 
              onChange={this.handleTotal} />
            <p className="SmallNotes">*Example: 31.50</p><br/><br/>
            <DropDownMenu maxHeight={300} value={this.state.payment} style={styles.paymentmenu} onChange={this.handlePayment}>
              {paymethods}
            </DropDownMenu>
            <RaisedButton 
              label="Add Expense" 
              type="submit" 
              style={styles.button} />
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddExpense);