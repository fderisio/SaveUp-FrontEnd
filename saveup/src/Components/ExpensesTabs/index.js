import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import ExpensesTable from '../../Components/ExpensesTable';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
    marginLeft: 100,
    marginRight: 80,
  },
  info: {
    marginLeft: 200,
  }
};

const ExpensesTabs = () => (
  <Tabs>
    <Tab label="View All" >
      <div style={styles.tab}>
        <ExpensesTable />
      </div>
    </Tab>
    <Tab label="Add Expenses" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Add</h2>
        <p>Categories List</p>
        <p>Create variable categories</p>
      </div>
    </Tab>
    <Tab label="View Expenses" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Search</h2>
        <p>Categories List</p>
        <p>Add fix category</p>
      </div>
    </Tab>
  </Tabs>
);

export default ExpensesTabs;