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
    let expenses = [];
    for (let i=0; i<this.props.categories.length-1; i = i+2) {
      expenses = this.props.categories[i].expenses.concat(this.props.categories[i+1].expenses);
    }
    console.log(expenses);

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
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>MasterCard</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>COOP</TableRowColumn>
        <TableRowColumn>CHF 4.00</TableRowColumn>
        <TableRowColumn>Visa</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>COOP</TableRowColumn>
        <TableRowColumn>CHF 5.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(ExpensesTable);