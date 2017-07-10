import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import '../../style.css';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Containers/ExpensesTable';
import CurrentMonth from '../../Containers/Charts/CurrentMonth';
import LastMonth from '../../Containers/Charts/LastMonth';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  // EXTRA FUNCTION FOR OTHER COMPONENTS
  nextPage = (value) => { this.props.history.push(value); };

  render() {
    return (
      <div>
        <Navbar nextPage = {this.nextPage} />
        <div className="wrapper">
          
          <div className="ExpensesTable">
            <h3>{this.props.currentUser.firstName}, your last 10 expenses</h3>
            <ExpensesTable path={ this.props.match.path } /><br/>
            <div className="wrapper" style={{float: "left"}}>
              <Link to="/expenses"><FlatButton label="View more..." /></Link>
            </div>
          </div>

          <div className="MonthFolders">
            <h3>Current month expenses</h3>
            <CurrentMonth />
            <h3>Last month expenses</h3>
            <LastMonth />
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