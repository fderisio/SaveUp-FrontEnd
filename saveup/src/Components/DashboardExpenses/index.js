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

class DashboardTable extends React.Component {
  
  // Date converter to "DD-MM-YYYY"
  convertDate = (inputFormat) => {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      var d = new Date(inputFormat);
      return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
  }

  render() {
    //console.log('expenses props', this.props)
    const expenses = this.props.expenses[0];
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

    return(
    <Table selectable={true} >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
        <TableRow>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Store</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          <TableHeaderColumn>Payment</TableHeaderColumn>
        </TableRow>
      </TableHeader>
    
      <TableBody displayRowCheckbox={false}>
      { expenses.map((expense, index) => {
            if (categories)
            return (
              <TableRow key={ index }>
                <TableRowColumn>{ this.convertDate(expense.expenseDate) }</TableRowColumn>
                <TableRowColumn>{ categories[expense.category.id] }</TableRowColumn>
                <TableRowColumn>{ expense.store }</TableRowColumn>
                <TableRowColumn>CHF { expense.total.toFixed(2) }</TableRowColumn>
                <TableRowColumn>{ paymethods[expense.payMethod.id] }</TableRowColumn>
              </TableRow>
            );
      }) }
      </TableBody>
   
    </Table>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(DashboardTable);