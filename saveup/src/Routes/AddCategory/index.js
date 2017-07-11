import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddCategoryForm from '../../Containers/AddCategoryForm';
import Footer from '../../Components/Footer';

class AddCategory extends React.Component {

	nextPage = (value) => { this.props.history.push(value); };

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddCategoryForm nextPage = {this.nextPage} />
		    <Footer />
	  	</div>
	  )
	}
}

export default AddCategory;