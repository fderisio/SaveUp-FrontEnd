import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Containers/ExpensesTable';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="wrapper">
          <div className="MonthFolders">
            <MonthFolders />
          </div>
          <div className="ExpensesTable">
            <h3>Your last 10 expenses</h3>
            <ExpensesTable path={ this.props.match.path } /><br/>
            <div className="wrapper" style={{float: "right"}}>
              <Link to="/expenses"><FlatButton label="View more..." /></Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
