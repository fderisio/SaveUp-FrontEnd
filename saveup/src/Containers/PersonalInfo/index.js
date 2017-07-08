import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PersonalInfo extends React.Component {

 	render() {
 		const user = this.props.currentUser;

 		return(
 			<div style={{marginLeft: 100}}>
          <p><b>First Name:</b> {user.firstName} <br/> <a>Edit</a></p><br/>
          <p><b>Last Name:</b> {user.lastName} <br/><a>Edit</a></p><br/>
          <p><b>E-mail:</b> {user.email} <br/><a>Edit</a></p><br/>
          <Link to='/underconstruction'><p>Change Password </p></Link>
      </div>
 		)
 	}
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PersonalInfo);