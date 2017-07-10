import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import '../../style.css';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import Navbar from '../../Containers/Navbar';
import ExpensesTable from '../../Containers/ExpensesTable';
import CurrentMonth from '../../Containers/Charts/CurrentMonth';
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

    /* ---- EXTRA VARIABLES ---- */
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentMonthExpenses = [];
    for (let i=0; i<this.props.expenses; i++) {
      if (this.props.expenses[i].category.fixed === false) {
        currentMonthExpenses.push(this.props.expenses[i]);
      }
    }

    console.log('dashboard props', currentMonthExpenses)
    return (
      <div>
        <Navbar nextPage = {this.nextPage} />
        <div className="wrapper">
          <div className="MonthFolders">
            <h3>Current month expenses</h3>
            <CurrentMonth monthExpenses={this.props.expenses}/>
          </div>
          <div className="ExpensesTable">
            <h3>{this.props.currentUser.firstName}, your last 10 expenses</h3>
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
