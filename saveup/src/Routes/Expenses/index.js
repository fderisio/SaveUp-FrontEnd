import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Components/ExpensesTable';
import AddExpense from '../AddExpense';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
    marginLeft: 100,
    marginRight: 90,
  },
  info: {
    marginLeft: 200,
  }
};

class Expenses extends React.Component {

  render() {
    console.log('expenses props', this.props.match.path)
    return (
      <div>
        <Navbar />
        <Tabs>

          <Tab label="View All" >
            <div style={styles.tab}>
              <ExpensesTable path={ this.props.match.path } />
            </div>
          </Tab>

          <Tab label="Add Expenses" >
            <div style={styles.tab}>
              <AddExpense />
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Expenses);