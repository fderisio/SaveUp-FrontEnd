import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddPayMethodForm from '../../Containers/AddPayMethodForm';
import Footer from '../../Components/Footer';

class AddPayMethod extends React.Component {

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddPayMethodForm history={this.props.history.push}/>
		    <Footer />
	  	</div>
	  )
	}
}

export default AddPayMethod;