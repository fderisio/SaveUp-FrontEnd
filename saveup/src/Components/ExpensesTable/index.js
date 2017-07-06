import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const ExpensesTable = () => (
  <Table
    multiSelectable={true}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Store</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
        <TableHeaderColumn>Payment</TableHeaderColumn>
        <TableHeaderColumn>Notes</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>MasterCard</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>COOP</TableRowColumn>
        <TableRowColumn>CHF 4.00</TableRowColumn>
        <TableRowColumn>Visa</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>COOP</TableRowColumn>
        <TableRowColumn>CHF 5.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>Groceries</TableRowColumn>
        <TableRowColumn>Migros</TableRowColumn>
        <TableRowColumn>CHF 45.00</TableRowColumn>
        <TableRowColumn>Maestro</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        </TableRow>
    </TableBody>
  </Table>
);

export default ExpensesTable;