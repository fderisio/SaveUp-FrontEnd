import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddPayMethodForm from '../../Containers/AddPayMethodForm';
import Footer from '../../Components/Footer';

class AddPayMethod extends React.Component {

	nextPage = (value) => { this.props.history.push(value); };

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddPayMethodForm nextPage={this.nextPage}/>
		    <Footer />
	  	</div>
	  )
	}
}

export default AddPayMethod;