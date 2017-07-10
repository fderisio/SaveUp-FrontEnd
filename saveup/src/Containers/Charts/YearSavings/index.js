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

    // sum of expenses per month
    const monthTotalExpenses = {};
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
    	const date = allExpenses[i].expenseDate.split("");
    	const expenseMonth = parseInt(date[5]+date[6]);
      if (expenseMonth in monthTotalExpenses) {
        monthTotalExpenses[expenseMonth] += allExpenses[i].total;
      } else {
      	monthTotalExpenses[expenseMonth] = allExpenses[i].total;
      }
    }

    // data to render chart [{ month: 'January', expenses: 3500, income: 8000, savings: 4500}];
		const data = [];
		for (let key in monthTotalExpenses) {
			let newData = { month: '', expenses: '', income: '', savings: ''};
			newData.month = months[key];
			newData.expenses = monthTotalExpenses[key];
      newData.income = this.props.currentUser.incomes[0].amount;
      newData.savings = newData.income - newData.expenses;
			data.push(newData);
		}

    // calculates total savings for current year
    let totalSavings = 0;
    Object.keys(monthTotalExpenses).map(key => {
      console.log(monthTotalExpenses)
      totalSavings += this.props.currentUser.incomes[0].amount - monthTotalExpenses[key];
    });

		return(
      <div>
			<LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="expenses" stroke="#FF443D" activeDot={{r: 8}}/>
  			<Line type="monotone" dataKey="income" stroke="#82ca9d" />
        <Line type="monotone" dataKey="savings" stroke="#8884d8" />
			  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			  <XAxis dataKey="month" />
			  <YAxis />
			  <Tooltip />
        <Legend />
			</LineChart>
			<h4>Total Savings - Year {new Date().getFullYear()}: CHF {totalSavings.toFixed(2)} </h4>
      </div>
		);
	}
	
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(YearSavings);