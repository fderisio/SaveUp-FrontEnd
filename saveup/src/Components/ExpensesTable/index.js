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
import Logos from '../Logos';

const styles = {
  root: {
    height: 440,
    overflowY: 'auto',
    marginTop: 50,
  }
}

class ExpensesTable extends React.Component {
  
  // Date converter to "DD-MM-YYYY"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
  }

  render() {
    // this.props.match.params.restaurant_id;
    //console.log('expenses props', this.props)
    const expenses = this.props.expenses[0];
    // sort expenses
    expenses.sort(function(a,b) {return (a.expenseDate > b.expenseDate) ? -1 : ((b.expenseDate > a.expenseDate) ? 1 : 0);} );

    // new categories object with just name to render
    let categories = {}
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      categories[categoriesArray[i].id] = categoriesArray[i].name;
    }

    // new paymethods object with just name to render
    let paymethods = {}
    const paymethodsArray = this.props.currentUser.paymethods;
    for (let i=0; i<paymethodsArray.length; i++) {
      paymethods[paymethodsArray[i].id] = paymethodsArray[i].name;
    }

    if (this.props.path === "/expenses") {
      return(
        <div style={ styles.root }>
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
                  expense.store } </TableRowColumn>
                <TableRowColumn>CHF { expense.total.toFixed(2) }</TableRowColumn>
                <TableRowColumn>{ paymethods[expense.payMethod.id] }</TableRowColumn>
                <TableRowColumn>{ expense.text }</TableRowColumn>
              </TableRow>
            );
            }) }
            </TableBody>
   
          </Table>
        </div>
      );
    }

    if (this.props.path === "/dashboard") {
      return(
        <div style={ styles.root }>
          <Table selectable={true} >
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