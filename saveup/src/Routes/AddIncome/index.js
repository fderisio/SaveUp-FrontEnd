import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddIncomeForm from '../../Containers/AddIncomeForm';
import Footer from '../../Components/Footer';

class AddIncome extends React.Component {

	nextPage = (value) => { this.props.history.push(value); };

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddIncomeForm nextPage = {this.nextPage} />
		    <Footer />
	  	</div>
	  )
	}
}

export default AddIncome;