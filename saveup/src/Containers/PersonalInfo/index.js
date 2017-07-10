import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = {
  headline: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: 400,
  }
};

class PersonalInfo extends React.Component {

 	render() {
 		const user = this.props.currentUser;

 		return(
 			<div>
	 			<h2 style={styles.headline}>Personal Info</h2>
	 			<div style={{marginLeft: 100}}>
	          <p><b>First Name:</b> {user.firstName} <br/> <a>Edit</a></p>
	          <p><b>Last Name:</b> {user.lastName} <br/><a>Edit</a></p>
	          <p><b>E-mail:</b> {user.email} <br/><a>Edit</a></p>
	          <Link to='/underconstruction'><p>Change Password </p></Link>
	      </div>
	    </div>
 		)
 	}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PersonalInfo);