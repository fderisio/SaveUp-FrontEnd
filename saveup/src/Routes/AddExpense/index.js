import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../Containers/Navbar';
import DropDownCategories from '../../Containers/DropDownCategories';
import Footer from '../../Components/Footer';
import '../../style.css';
import { RaisedButton } from 'material-ui';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class AddExpense extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: 'Groceries',
      notes: '',
      company: '',
      expenseDate: '',
      total: '',
      payment: '',
    }
  }

  handleCategory = (e) => { this.setState({ category: e.currentTarget.value }); };
  handleNotes = (e) => { this.setState({ notes: e.currentTarget.value }); };
  handleCompany = (e) => { this.setState({ company: e.currentTarget.value }); };
  handleDate = (e) => { this.setState({ expenseDate: e.currentTarget.value }); };
  handleTotal = (e) => { this.setState({ total: e.currentTarget.value }); };
  handlePayment = (e) => { this.setState({ payment: e.currentTarget.value }); };

  addExpense = (e) => {
    e.preventDefault();
  };
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <form>
          <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleCategory}>
              {items}
          </DropDownMenu>
          <TextField hintText="Category" floatingLabelText="Category*" onChange={ this.handleLastName }/> <br />
          <TextField hintText="Notes" floatingLabelText="Notes" onChange={ this.handleNotes }/> <br />
          <TextField hintText="Company" floatingLabelText="Company" onChange={ this.handleCompany }/> <br />
          <TextField hintText="Date of Expense" floatingLabelText="Date of Expense*" onChange={this.handleDate }/><br />
          <TextField hintText="Total" floatingLabelText="Expense Total*" onChange={this.handleTotal }/><br />
          <TextField hintText="Payment" floatingLabelText="Password" onChange={this.handlePayment }/><br /><br />
          <RaisedButton type="submit" label="Add Expense" onClick={ this.addExpense } />
        </form><br/>
        <p className="SmallNotes">*Required</p><br/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddExpense);