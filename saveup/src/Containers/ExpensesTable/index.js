import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import Logos from '../../Components/Logos';
import LoadingIcon from '../../Components/LoadingIcon';

const styles = {
  root: {
    height: 490,
    overflowY: 'auto',
  },
  total: {
    marginTop: 25,
    textAlign: 'right',
    marginRight: 400,
  },
  table: {
    height: 490,
    overflowY: 'auto',
  },
  dashboardtable: {
    height: 520,
    marginTop: 20,
  }
}

class ExpensesTable extends React.Component {

  // Date converter to "DD-MM-YYYY"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
  };

  render() {

    /* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */
    const allExpenses = this.props.expenses;
    // sort expenses (newest to oldest)
    allExpenses.sort(function(a,b) {return (a.expenseDate > b.expenseDate) ? -1 : ((b.expenseDate > a.expenseDate) ? 1 : 0);} );

    // new categories object with just name to render
    let categories = {};
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        categories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // new paymethods object with just name to render
    let paymethods = {};
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods[paymethodsArray[i].id] = paymethodsArray[i].name;
    }

    // filter non fixed expenses
    const expenses = [];
    let total = 0;
    for (let i=0; i<allExpenses.length; i++) {
      if (allExpenses[i].category.id in categories) {
        expenses.push(allExpenses[i]);
        total += allExpenses[i].total;
      }
    }

    /* ---- RENDER TABLES ---- */

    // full table expenses
    if (this.props.path === "/expenses") {
      return(
        <div>
        <h4 style={ styles.total }>Total: <b>CHF {total.toFixed(2)}</b></h4>
        <div className='SecondColumn' style={ styles.root }>
          <Table selectable={true} >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={ styles.table }>
              <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Category</TableHeaderColumn>
                <TableHeaderColumn>Store</TableHeaderColumn>
                <TableHeaderColumn>Total</TableHeaderColumn>
                <TableHeaderColumn>Payment</TableHeaderColumn>
                <TableHeaderColumn>Notes</TableHeaderColumn>
                <TableHeaderColumn>Delete</TableHeaderColumn>
              </TableRow>
            </TableHeader>
    
            <TableBody displayRowCheckbox={false} >
            { expenses.map((expense, index) => {
            return (
              <TableRow key={ index }>
                <TableRowColumn>{ this.convertDate(expense.expenseDate) }</TableRowColumn>
                <TableRowColumn>{ categories[expense.category.id] }</TableRowColumn>
                <TableRowColumn>{ Logos[expense.store] ? <img src={ Logos[expense.store] } className='logo' alt='logo'/> :
                  expense.store }</TableRowColumn>
                <TableRowColumn>CHF { expense.total.toFixed(2) }</TableRowColumn>
                <TableRowColumn>{ paymethods[expense.payMethod.id] }</TableRowColumn>
                <TableRowColumn>{ expense.text }</TableRowColumn>
              </TableRow>
            );
            }) }
            </TableBody>

          </Table>
        </div>
        </div>
      );
    }

    // short expenses table
    if (this.props.path === "/dashboard") {
      // filter only the last 10 expenses
      expenses.splice(10, expenses.length-1);
      return(
        <div style={ styles.dashboardtable }>
          <Table selectable={true}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
              <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Category</TableHeaderColumn>
                <TableHeaderColumn>Store</TableHeaderColumn>
                <TableHeaderColumn>Total</TableHeaderColumn>
              </TableRow>
            </TableHeader>
    
            <TableBody displayRowCheckbox={false}>
            { expenses.map((expense, index) => {
            return (
              <TableRow key={ index }>
                <TableRowColumn>{ this.convertDate(expense.expenseDate) }</TableRowColumn>
                <TableRowColumn>{ categories[expense.category.id] }</TableRowColumn>
                <TableRowColumn>{ Logos[expense.store] ? <img src={ Logos[expense.store] } className='logo' alt='logo'/> :
                  expense.store } </TableRowColumn>
                <TableRowColumn>CHF { expense.total.toFixed(2) }</TableRowColumn>
              </TableRow>
            );
            }) }
            </TableBody>
          </Table>
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(ExpensesTable);