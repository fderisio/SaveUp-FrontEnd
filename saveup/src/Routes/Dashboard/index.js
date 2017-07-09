import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import '../../style.css';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Containers/ExpensesTable';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

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

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Dashboard);
