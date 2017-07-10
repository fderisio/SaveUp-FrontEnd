import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';
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
    height: 490,
    overflowY: 'auto',
    marginLeft: 100,
  },
}

class FixedCategories extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchExpenses());
  }

  render() {
    if (this.props.expenses === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    // fixed categories object with just name to render
    let fixedCategories = {}
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === true) {
        fixedCategories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // filter fixed expenses
    const expensesArray = this.props.expenses[0];
    let fixedExpenses = {}
    for (let i=0; i<expensesArray.length; i++) {
      if (expensesArray[i].id in fixedCategories) {
        fixedExpenses[expensesArray[i].id] = expensesArray[i].total.toFixed(2);
      }
    }

    return(
      <div>
        <h2 style={styles.headline}>Fixed Expense Categories</h2>
        <Link to='/addcategory'><RaisedButton 
          label="Add new category" 
          type="submit" /></Link>
        <div style={styles.list}>
        { Object.keys(fixedCategories).map((key, index) => {
          return(
            <p key={index}><b>{fixedCategories[key]}:</b>  CHF {fixedExpenses[key]} <a>Edit</a></p>
          );
        })}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(FixedCategories);