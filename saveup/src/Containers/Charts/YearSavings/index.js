import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend
  } from 'recharts';
import LoadingIcon from '../../../Components/LoadingIcon';

class YearSavings extends Component {

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
      if (categoriesArray[i].fixed === false) {
        variableCategories[categoriesArray[i].id] = categoriesArray[i].name;
      } else {
        fixedCategories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // sum of variable expenses per month
    const monthTotalExpenses = {};
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
    	const date = allExpenses[i].expenseDate.split("");
    	const expenseMonth = parseInt(date[5]+date[6]);
      if (allExpenses[i].category.id in variableCategories && expenseMonth in monthTotalExpenses) {
        monthTotalExpenses[expenseMonth] += allExpenses[i].total;
      } else if (allExpenses[i].category.id in variableCategories) {
      	monthTotalExpenses[expenseMonth] = allExpenses[i].total;
      } 
    }

    // monthly fixed expenses
    let totalMonthlyFixedExpenses = 0;
    for (let i=0; i<allExpenses.length; i++) {
      if (allExpenses[i].category.id in fixedCategories) {
        totalMonthlyFixedExpenses += allExpenses[i].total;
      }
    }

    // data to render chart [{ month: 'January', expenses: 3500, income: 8000, savings: 4500}];
		const data = [];
		for (let key in monthTotalExpenses) {
			let newData = { month: '', Income: '', Expenses: '', Savings: ''};
			newData.month = months[key];
			newData.Expenses = monthTotalExpenses[key] + totalMonthlyFixedExpenses;
      newData.Income = this.props.currentUser.incomes[0].amount;
      newData.Savings = newData.Income - newData.Expenses;
			data.push(newData);
		}

    // calculates totals for current year
    let totalSavings = 0;
    Object.keys(monthTotalExpenses).map(key => {
      totalSavings += this.props.currentUser.incomes[0].amount - monthTotalExpenses[key] - totalMonthlyFixedExpenses;
    });

    let totalIncome = this.props.currentUser.incomes[0].amount * (new Date().getMonth() + 1);

    let totalExpenses = 0;
    Object.keys(monthTotalExpenses).map(key => {
      totalExpenses += monthTotalExpenses[key] + totalMonthlyFixedExpenses;
    });

		return(
      <div>
      <h3>Year {new Date().getFullYear()}</h3>
			<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  			<Line type="monotone" dataKey="Income" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Expenses" stroke="#FF443D" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="Savings" stroke="#8884d8" />
			  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			  <XAxis dataKey="month" />
			  <YAxis />
			  <Tooltip />
        <Legend />
			</LineChart>
			<h4>Total Savings: CHF {totalSavings.toFixed(2)} </h4>
      <h6>Total Income: CHF {totalIncome.toFixed(2)} </h6>
      <h6>Total Expenses: CHF {totalExpenses.toFixed(2)} </h6>
      </div>
		);
	}
	
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(YearSavings);