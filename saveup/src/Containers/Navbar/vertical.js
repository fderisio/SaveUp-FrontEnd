import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../Store/actions';

const styles = {
  button: {
    textTransform: 'capitalize',
    //color: '#424242', //lightgrey',
    fontSize: '16px',
    color: 'white',
  }
};

class Navbar extends React.Component {

	signout = (e) => {
    e.preventDefault();
    const logoutAction = logOutUser();
    this.props.dispatch(logoutAction);
  };

	render() {
		if (this.props.currentUser.id != null) {
			return(
				<div>
					<ul className="Navbar">
						<Link to="/dashboard"><p className="icon">SaveUp</p></Link>
			      <Link to="/dashboard">
			        <FlatButton label="Dashboard" className="Button" labelStyle={ styles.button } />
			      </Link>
			      <Link to="/expenses">
			      	<FlatButton label="Expenses" labelStyle={ styles.button } />
			      </Link>
			      <Link to="/quickadd">
			      	<FlatButton label="Quick Add" labelStyle={ styles.button } />
			      </Link>
			      <Link to="/profile">
			      	<FlatButton label="Profile" labelStyle={ styles.button } />
			      </Link>
			      <Link to="/">
			      	<FlatButton label="Sign Out" labelStyle={ styles.button } onClick={this.signout} />
			      </Link>
					</ul>
				</div>
			);

		} else {
      return (
      	<div>
      		<ul className="Navbar">
						<Link to="/"><p className="icon">SaveUp</p></Link>
			      <Link to="/signin">
			      	<FlatButton label="Sign In" labelStyle={ styles.button } />
			      </Link>
			      <Link to="/signup">
			      	<FlatButton label="Sign Up" labelStyle={ styles.button } />
			      </Link>
					</ul>
				</div>
			);
		}
	}

}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Navbar);