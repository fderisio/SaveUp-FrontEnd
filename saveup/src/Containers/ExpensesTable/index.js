import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import Logos from '../../Components/Logos';

const styles = {
  root: {
    height: 490,
    overflowY: 'auto',
    marginTop: 50,
  },
  table: {
    height: 490,
    overflowY: 'auto',
    fontSize: '50px',
  },
  dashboardtable: {
    height: 520,
    overflowY: 'auto',
    marginTop: 20,
  }
}

class ExpensesTable extends React.Component {
  
  // Date converter to "DD-MM-YYYY"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      const d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
  }

  render() {

    /* ---- EXTRA VARIABLES TO RENDER THE INFO ---- */

    const allExpenses = this.props.expenses[0];
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
    for (let i=0; i<allExpenses.length; i++) {
      if (allExpenses[i].category.id in categories) {
        expenses.push(allExpenses[i]);
      }
    }

    /* ---- RENDER TABLES ---- */

    // full table expenses
    if (this.props.path === "/expenses") {
      return(
        <div className='SecondColumn' style={ styles.root }>
          <Table selectable={true}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Category</TableHeaderColumn>
                <TableHeaderColumn>Store</TableHeaderColumn>
                <TableHeaderColumn>Total</TableHeaderColumn>
                <TableHeaderColumn>Payment</TableHeaderColumn>
                <TableHeaderColumn>Notes</TableHeaderColumn>
              </TableRow>
            </TableHeader>
    
            <TableBody displayRowCheckbox={false}>
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
            
            <TableFooter adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn>ID</TableRowColumn>
                <TableRowColumn>Name</TableRowColumn>
                <TableRowColumn>Status</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                  Super Footer
                </TableRowColumn>
              </TableRow>
            </TableFooter>   

          </Table>
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