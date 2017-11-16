import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import LoadingIcon from '../../Components/LoadingIcon';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    fontWeight: 400,
    marginTop: 20,
  },
	list: {
    width: 300,
    height: 200,
    overflowY: 'auto',
    marginLeft: 100,
	},
  link: {
    marginTop: 40,
  },
}

class PayMethods extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

 	render() {

    /* ---- LOADING INFO ---- */
 	  if (this.props.currentUser === undefined || this.props.currentUser.paymethods === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLE TO RENDER THE INFO ---- */
    const paymethods = this.props.currentUser.paymethods;

 		return(
 			  <div>
          <h2 style={styles.headline}>Payment methods on file</h2>
          <div style={styles.list}>
          { paymethods.map(paymethod => {
            return(
              <p key={paymethod.id}><b>{paymethod.name}</b> {paymethod.bank} <a>Delete</a></p>
            );
          })}
          <Link to='/addpaymethod'><p style={styles.link}>Add new payment method</p></Link>
          </div>
    	  </div>
 		)
 	}

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PayMethods);