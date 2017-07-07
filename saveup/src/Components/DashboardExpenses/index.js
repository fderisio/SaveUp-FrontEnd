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

class ExpensesTable extends React.Component {
  
  render() {
    console.log('expenses props', this.props)
    const expenses = this.props.expenses;

    const categoriesArray = this.props.currentUser.categories;
    let categories = {}
    console.log(this.props.currentUser.categories)

    for (let i=0; i<categoriesArray.length; i++) {
      categories[categoriesArray[i].id] = categoriesArray[i].name;
    }
    console.log(categories);
    // let expenses = [];
    // for (let i=0; i<this.props.categories.length-1; i = i+2) {
    //   expenses = this.props.categories[i].expenses.concat(this.props.categories[i+1].expenses);
    // }

    // // sort expenses - expenseDate (desc.)
    // expenses.sort(function(a,b) {return (a.expenseDate > b.expenseDate) ? -1 : ((b.expenseDate > a.expenseDate) ? 1 : 0);} );
    
    // console.log(expenses);

    return(
    <Table selectable={true} >
      <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
        <TableRow>
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
                <TableRowColumn>{ categories[expense.category_id] }</TableRowColumn>
                <TableRowColumn>{ expense.store }</TableRowColumn>
                <TableRowColumn>CHF { expense.total.toFixed(2) }</TableRowColumn>
                <TableRowColumn>{ expense.payMethod.name }</TableRowColumn>
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

export default connect(mapStateToProps)(ExpensesTable);

 // <TableRow>
 //          <TableRowColumn>Groceries</TableRowColumn>
 //          <TableRowColumn>Migros</TableRowColumn>
 //          <TableRowColumn>CHF 45.00</TableRowColumn>
 //          <TableRowColumn>MasterCard</TableRowColumn>
 //        </TableRow>
 //        <TableRow>
 //          <TableRowColumn>Groceries</TableRowColumn>
 //          <TableRowColumn>COOP</TableRowColumn>
 //          <TableRowColumn>CHF 4.00</TableRowColumn>
 //          <TableRowColumn>Visa</TableRowColumn>
 //        </TableRow>
 //        <TableRow>
 //          <TableRowColumn>Groceries</TableRowColumn>
 //          <TableRowColumn>Migros</TableRowColumn>
 //          <TableRowColumn>CHF 45.00</TableRowColumn>
 //          <TableRowColumn>Maestro</TableRowColumn>
 //        </TableRow>
 //        <TableRow>
 //          <TableRowColumn>Groceries</TableRowColumn>
 //          <TableRowColumn>COOP</TableRowColumn>
 //          <TableRowColumn>CHF 5.00</TableRowColumn>
 //          <TableRowColumn>Maestro</TableRowColumn>
 //        </TableRow>
 //        <TableRow>
 //          <TableRowColumn>Groceries</TableRowColumn>
 //          <TableRowColumn>Migros</TableRowColumn>
 //          <TableRowColumn>CHF 45.00</TableRowColumn>
 //          <TableRowColumn>Maestro</TableRowColumn>
 //        </TableRow>


