import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import LoadingIcon from '../../../Components/LoadingIcon';

class CurrentMonth extends Component {

	render() {
		/* ---- LOADING INFO ---- */
    if (this.props.currentUser.paymethods === undefined || this.props.currentUser.categories === undefined) {
      return(
        <LoadingIcon />
      );
    }

		/* ---- EXTRA VARIABLES ---- */
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    // non fixed categories names
    let categories = {};
    const categoriesArray = this.props.currentUser.categories;
    for (let i=0; i<categoriesArray.length; i++) {
      if (categoriesArray[i].fixed === false) {
        categories[categoriesArray[i].id] = categoriesArray[i].name;
      }
    }

    // sum of current month expenses per category
    const currentMonthExpenses = {};
    const allExpenses = this.props.expenses;
    for (let i=0; i<allExpenses.length; i++) {
    	const date = allExpenses[i].expenseDate.split("");
    	const expenseMonth = parseInt(date[5]+date[6]);
      if (allExpenses[i].category.id in categories 
      		&& allExpenses[i].category.id in currentMonthExpenses 
      		&& expenseMonth === currentMonth) {
        currentMonthExpenses[allExpenses[i].category.id] += allExpenses[i].total;
      } else if (allExpenses[i].category.id in categories 
      					&& expenseMonth === currentMonth) {
      	currentMonthExpenses[allExpenses[i].category.id] = allExpenses[i].total;
      }
    }

    // data array to render chart (ex. [{ name: 'groceries', value: 100 }])
		const data = [];
		for (let key in currentMonthExpenses) {
			let newData = { name: '', Total: '' };
			newData.name = categories[key];
			newData.Total = currentMonthExpenses[key];
			data.push(newData);
		}

		return(
      <BarChart width={500} height={250} data={data} 
        margin={{ top: 5, bottom: 5, left: 0 }}
            >
        <XAxis dataKey="name"/>
        <YAxis dataKey="Total" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
        <Tooltip/>
        <Bar dataKey="Total" fill="#B2EBF2" barSize={30} />
      </BarChart>			
		);
	}
	
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(CurrentMonth);	

// CHARTS HELPFUL TIPS.
// con iconos  <XAxis dataKey="name" tick={<CustomAxisTick />} />
// strokeDasharray: agrega linea punteada
// <Tooltip />: muestra dinamicamente los valores

// <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//         <Line type="monotone" dataKey="value" stroke="#8884d8" />
//         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> margin={{top: 5, right: 30, left: 20, bottom: 5}}
//         <XAxis dataKey="name" />
//         <YAxis dataKey="value" />
//         <Tooltip />
//       </LineChart>

// Trianglebar shape
// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}
//           C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
//           C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
//           Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;
//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
// };

// TriangleBar.propTypes = {
//   fill: PropTypes.string,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   width: PropTypes.number,
//   height: PropTypes.number,
// };
