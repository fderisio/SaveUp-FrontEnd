import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import { connect } from 'react-redux';
import Logos from '../../Components/Logos';
import LoadingIcon from '../../Components/LoadingIcon';

const styles = {
  root: {
    marginTop: 15,
    height: 490,
    overflowY: 'auto',
  },
  total: {
    marginTop: 20,
    textAlign: 'right',
    marginRight: 150,
  },
  table: {
    height: 470,
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
    let expenses = [];
    
    let total = 0;
    for (let i=0; i<allExpenses.length; i++) {
      if (allExpenses[i].category.id in categories) {
        expenses.push(allExpenses[i]);
        total += allExpenses[i].total;
      }
    }

    // category filter
    const categoryFiltered = [];
    if (this.props.filter.category > 0) {
      expenses.map(key => {
        if (key.category.id === this.props.filter.category) {
          categoryFiltered.push(key);
        }
      })
      expenses = categoryFiltered;
    }

    // payment filter
    const paymentFiltered = [];
    if (this.props.filter.payment > 0) {
      expenses.map(key => {
        if (key.payMethod.id === this.props.filter.payment) {
          paymentFiltered.push(key);
        }
      })
      expenses = paymentFiltered;
    }

    /* ---- RENDER TABLES ---- */

    // full expenses table
    if (this.props.path === "/expenses") {
      return(
        <div className='SecondColumn' >
        <div style={ styles.root }>
          <Table selectable={true} >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false} style={ styles.table }>
              <TableRow>
                <TableHeaderColumn style={{width: '11%'}}>Date</TableHeaderColumn>
                <TableHeaderColumn style={{width: '12%'}}>Category</TableHeaderColumn>
                <TableHeaderColumn style={{width: '15%'}}>Store</TableHeaderColumn>
                <TableHeaderColumn style={{width: '13%'}}>Total</TableHeaderColumn>
                <TableHeaderColumn style={{width: '7%'}}>Payment</TableHeaderColumn>
                <TableHeaderColumn style={{width: '14%'}}>Notes</TableHeaderColumn>
                <TableHeaderColumn style={{width: '7%'}}>Delete</TableHeaderColumn>
              </TableRow>
            </TableHeader>
    
            <TableBody displayRowCheckbox={false} >
            { expenses.map((expense, index) => {
            return (
              <TableRow key={ index }>
                <TableRowColumn style={{width: '11%'}}>{ this.convertDate(expense.expenseDate) }</TableRowColumn>
                <TableRowColumn style={{width: '12%'}}>{ categories[expense.category.id] }</TableRowColumn>
                <TableRowColumn style={{width: '15%'}}>{ Logos[expense.store] ? 
                  <img src={ Logos[expense.store] } className='logo' alt='logo'/> :
                  expense.store }</TableRowColumn>
                <TableRowColumn style={{width: '13%'}}>CHF { expense.total.toFixed(2) }</TableRowColumn>
                <TableRowColumn style={{width: '7%'}}>{ Logos[paymethods[expense.payMethod.id]] ? 
                  <img src={ Logos[paymethods[expense.payMethod.id]] } className='logo' alt='logo'/> :
                  paymethods[expense.payMethod.id]}</TableRowColumn>
                <TableRowColumn style={{width: '14%'}}>{ expense.text }</TableRowColumn>
                <TableRowColumn style={{width: '7%'}}><IconButton><DeleteButton/></IconButton></TableRowColumn>
              </TableRow>
            );
            }) }
            </TableBody>
          </Table>
        </div>
        <h4 style={ styles.total }>Total: <b>CHF {total.toFixed(2)}</b></h4>
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