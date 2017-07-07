import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Components/ExpensesTable';
import MonthFolders from '../../Components/MonthFolders';
import ExpensesTabs from '../../Components/ExpensesTabs';
import Footer from '../../Components/Footer';

class Expenses extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <ExpensesTabs />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Expenses);