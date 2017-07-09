import React from 'react';
import '../../style.css';
import Navbar from '../../Containers/Navbar';
import AddCategoryForm from '../../Containers/AddCategoryForm';
import Footer from '../../Components/Footer';

class AddCategory extends React.Component {

	render() {
		return(
	  	<div>
		    <Navbar />
		    <AddCategoryForm history={this.props.history.push}/>
		    <Footer />
	  	</div>
	  )
	}
}

export default AddCategory;