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
    //this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  // EXTRA FUNCTION FOR OTHER COMPONENTS
  nextPage = (value) => { this.props.history.push(value); };

  render() {
    console.log('dashboard props', this.props)
    return (
      <div>
        <Navbar nextPage = {this.nextPage} />
        <div className="wrapper">
          <div className="MonthFolders">
            <MonthFolders />
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
