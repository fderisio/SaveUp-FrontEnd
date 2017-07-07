import React from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import Filters from '../../Containers/Filters';
import ExpensesTable from '../../Containers/ExpensesTable';
import AddExpense from '../../Containers/AddExpense';
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
              <div className='FirstColumn'>
                <Filters />
              </div>
              <ExpensesTable path={ this.props.match.path } />
            </div>
          </Tab>

          <Tab label="Add Expenses" >
            <AddExpense />
          </Tab>
          
          <Tab label="Search" >
            <div style={styles.tab}>
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