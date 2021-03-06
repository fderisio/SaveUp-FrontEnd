import React from 'react';
import { connect } from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import ChartsIcon from 'material-ui/svg-icons/action/trending-up';
import CreateIcon from 'material-ui/svg-icons/content/create';
import ViewAllIcon from 'material-ui/svg-icons/content/content-paste';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import Filters from '../../Containers/Filters';
import SearchChart from '../../Containers/Search';
import ExpensesTable from '../../Containers/ExpensesTable';
import YearSavings from '../../Containers/Charts/YearSavings';
import YearForecast from '../../Containers/Charts/YearForecast';
import Categories from '../../Containers/Charts/Categories';
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
  },
};

class Expenses extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <Tabs style={styles.root} contentContainerStyle={styles.root}>

          <Tab icon={<ViewAllIcon />} label="View All" >
            <div style={styles.tab}>
              <div className='FirstColumn'>
                <Filters />
              </div>
              <ExpensesTable path={ this.props.match.path } />
            </div>
          </Tab>

          <Tab icon={<CreateIcon />} label="Add Expenses" >
            <AddExpense />
          </Tab>
          
          <Tab icon={<ChartsIcon />} label="Charts" >
            <div style={styles.tab}>
              <div className="ChartFirstColumn">
                <YearSavings />
              </div>
              <div className="ChartSecondColumn">
                <YearForecast />
              </div>
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