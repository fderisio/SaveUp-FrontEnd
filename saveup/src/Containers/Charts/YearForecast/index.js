import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend
  } from 'recharts';
import LoadingIcon from '../../../Components/LoadingIcon';

class YearForecast extends Component {

	render() {

		/* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

    /* ---- EXTRA VARIABLES ---- */
    const months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
      7: 'Jul', 8: 'Aug', 9: 'Sept', 10: 'Oct', 11: 'Nov', 12: 'Dec'};

    // fixed & non fixed categories objects
    let variableCategories = {};
    let fixedCategories = {};
    let holidaysId = 0;
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false && categoriesArray[i].name !== "Holidays") {
        variableCategories[categoriesArray[i].id] = categoriesArray[i].name;
      } else if (categoriesArray[i].name == "Holidays") {
        holidaysId = categoriesArray[i].id;
        variableCategories[categoriesArray[i].id] = categoriesArray[i].name;
      } else {
        fixedCategories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // sum of variable expenses per month
    const monthTotalExpenses = {};
    let holidaysExpenses = 0;
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
      const date = allExpenses[i].expenseDate.split("");
      const expenseMonth = parseInt(date[5]+date[6]);
      if (allExpenses[i].category.id in variableCategories && expenseMonth in monthTotalExpenses ) {
        monthTotalExpenses[expenseMonth] += allExpenses[i].total;
      } else if (allExpenses[i].category.id in variableCategories && allExpenses[i].category) {
        monthTotalExpenses[expenseMonth] = allExpenses[i].total;
      }
      // calculates holidays expenses to rest from the average
      if (allExpenses[i].category.id === holidaysId) {
        holidaysExpenses += allExpenses[i].total;
      }
    }

    // monthly fixed expenses
    let totalMonthlyFixedExpenses = 0;
    for (let i=0; i<allExpenses.length; i++) {
      if (allExpenses[i].category.id in fixedCategories) {
        totalMonthlyFixedExpenses += allExpenses[i].total;
      }
    }

    // monthly expenses average
    let monthlyAverage = 0;
    Object.keys(monthTotalExpenses).map(key => 
      {
      monthlyAverage += monthTotalExpenses[key];
      });
    monthlyAverage =  ((monthlyAverage-holidaysExpenses)/(new Date().getMonth() + 1)) + totalMonthlyFixedExpenses; 

    // data to render chart [{ month: 'January', expenses: 3500, income: 8000, savings: 4500}];
    const data = [];
    for (let key in months) {
      let newData = { month: '', Income: '', Expenses: '', Savings: ''};
      newData.month = months[key];
      newData.Expenses = (monthTotalExpenses[key] > 0) ? monthTotalExpenses[key] + totalMonthlyFixedExpenses :
        monthlyAverage; 
      newData.Expenses.toFixed(2);
      newData.Income = this.props.currentUser.incomes[0].amount;
      newData.Savings = newData.Income - newData.Expenses.toFixed(2);
      data.push(newData);
    }

    // calculate totals for current year
    let totalSavings = 0;
    data.map(key => {
      totalSavings += this.props.currentUser.incomes[0].amount - key.Expenses;
    });

    let totalIncome = this.props.currentUser.incomes[0].amount * 12;

    let totalExpenses = 0;
    data.map(key => {
      totalExpenses += key.Expenses;
    });

    return(
      <div>
      <h3>Annual Forecast*</h3>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Expenses" stroke="#FFB362" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="Savings" stroke="#00B8D4" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <h4>Total Savings estimated: CHF {totalSavings.toFixed(2)} </h4>
      <h6>Total Income estimated: CHF {totalIncome.toFixed(2)} </h6>
      <h6>Total Expenses estimated: CHF {totalExpenses.toFixed(2)} </h6>
      <br/>
      <p className="SmallNotes">*Calculated with the average expenses per month. Holidays expenses are not included.</p>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(YearForecast);