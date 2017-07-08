import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const styles = {
	list: {
		width: 300,
		height: 490,
    overflowY: 'auto',
    marginLeft: 80,
	}
}

class FixedCategories extends React.Component {

 	render() {
 	  //console.log(this.props);

 		// filter fixed categories and create array with them 
    // let fixedCategories = [];
    // const categoriesArray = this.props.currentUser.categories;
    // for (let i=0; i<categoriesArray.length; i++) {
    //   if (categoriesArray[i].fixed === true) {
    //     let newArray = [categoriesArray[i].id, categoriesArray[i].name];
    //     fixedCategories.push(newArray);
    //   }
    // }

    // new categories object with just name to render
    let fixedCategories = {}
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === true) {
        fixedCategories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }
    console.log(fixedCategories[4])

    // filter fixed expenses
    const expensesArray = this.props.expenses[0];
    let fixedExpenses = {}
    for (let i=0; i<expensesArray.length; i++) {
      if (expensesArray[i].id in fixedCategories) {
        fixedExpenses[expensesArray[i].id] = expensesArray[i].total.toFixed(2);
      }
    }
    console.log(fixedExpenses[4])

 		return(
 			<div style={styles.list}>
        { Object.keys(fixedCategories).map((key, index) => {
          return(
            <p key={index}><b>{fixedCategories[key]}:</b>  CHF {fixedExpenses[key]} <a>Edit</a></p>
          );
        }
        )}

    	</div>
 		)
 	}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(FixedCategories);

