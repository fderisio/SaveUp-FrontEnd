import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Components/ExpensesTable';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';

class Expenses extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <h2>Expenses</h2>
        <div className="wrapper">
          <Link to="/addexpense"><RaisedButton label="Add Expense" /></Link>
          <RaisedButton label="View All" />
          <RaisedButton label="Statistics & Graphics" />
        </div>
        <Divider />
        <div className="wrapper">
          <div className="MonthFolders">
            <MonthFolders />
          </div>
          <div className="ExpensesTable">
            <p>Expenses</p>
            <ExpensesTable /><br/>
            <div className="wrapper">
              <FlatButton label="Add Expenses" style={{backgroundColor: "#0DFF83" }}/>
              <FlatButton label="View more..." style={{backgroundColor: "#0DFF83" }}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default Expenses;