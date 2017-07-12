import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import LoadingIcon from '../../../Components/LoadingIcon';

class Categories extends Component {

	render() {

		/* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

		/* ---- EXTRA VARIABLES ---- */
    const months = { 1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
      7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};

    // fixed & non fixed categories objects
    let variableCategories = {};
    let fixedCategories = {}
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) 
      {
        variableCategories[categoriesArray[i].id] = categoriesArray[i].name;
      } 
      else 
      {
        fixedCategories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // sum of variable expenses per month
    const totalPerCategory = {};
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
      const categoryId = allExpenses[i].category.id;

      if (categoryId in variableCategories && categoryId in totalPerCategory) 
      {
        totalPerCategory[categoryId] += allExpenses[i].total;
      } 
      else if (categoryId in variableCategories) 
      {
      	totalPerCategory[categoryId] = allExpenses[i].total;
      } 
    }

    // data to render chart [{ month: 'January', expenses: 3500, income: 8000, savings: 4500}];
		const data = [];
		for (let key in totalPerCategory) {
			let newData = { Category: '', Expenses: ''};
			newData.Category = variableCategories[key];
			newData.Expenses = totalPerCategory[key];
			data.push(newData);
		}

		return(
      <div>
        <h3>Year {new Date().getFullYear()} - Total per category</h3>
        <BarChart width={500} height={250} data={data} 
          margin={{ top: 5, bottom: 5, left: 0 }}>
          <XAxis dataKey="Category"/>
          <YAxis dataKey="Expenses" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
          <Tooltip/>
          <Bar dataKey="Expenses" fill="#00B8D4" barSize={30} />
        </BarChart>   
      </div>
		);
	}
	
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Categories);