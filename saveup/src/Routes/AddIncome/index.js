import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddIncomeForm from '../../Containers/AddIncomeForm';
import Footer from '../../Components/Footer';

class AddIncome extends React.Component {

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddIncomeForm history={this.props.history.push}/>
		    <Footer />
	  	</div>
	  )
	}
}

export default AddIncome;