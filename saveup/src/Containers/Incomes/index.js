import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, fetchExpenses } from '../../Store/actions';
import LoadingIcon from '../../Components/LoadingIcon';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
	list: {
    width: 300,
    marginLeft: 100,
	},
  link: {
    marginTop: 40,
  },
}

class Incomes extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

 	render() {

    /* ---- LOADING INFO ---- */
 	  if (this.props.currentUser.incomes === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLE TO RENDER THE INFO ---- */
    const incomes = this.props.currentUser.incomes;

 		return(
 			  <div>
          <h4 style={styles.headline}>Income</h4>
          <div style={styles.list}>
          { incomes.map(income => {
            return(
              <p key={income.id}>CHF {income.amount} monthly from {income.startedAt}</p>
            );
          })}
          <Link to='/addincome'><p style={styles.link}>Add new income</p></Link>
          </div>
    	  </div>
 		)
 	}

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Incomes);