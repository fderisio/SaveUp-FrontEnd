import React from 'react';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import '../../style.css';
import icon from './iconorange.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
  navbar: {
    backgroundColor: '#424242', // '#78B5A2', // other possible colors: '#590018', // #007F41
  },
  button: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: '16px',
  }
};

class Navbar extends React.Component {

  render() {
    console.log(this.props)

    if (this.props.id != null) {
      return (
        <Toolbar style={ styles.navbar } >
          <ToolbarGroup firstChild={false}>
            <p className="icon">SaveUp</p>
            <div className="ContactButtons">
              <Link to="/dashboard">
                <FlatButton label="Dashboard" labelStyle={ styles.button }/>
              </Link>
              <Link to="/expenses">
                <FlatButton label="Expenses" labelStyle={ styles.button }/>
              </Link>
            </div>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <Link to="/profile">
                <FlatButton label="Profile" labelStyle={ styles.button }/>
              </Link>
              <FlatButton label="Sign out" labelStyle={ styles.button }/>
            </div>
          </ToolbarGroup>
        </Toolbar>
      )
    } else {
      return (
      <div>
        <Toolbar style={ styles.navbar } >

          <ToolbarGroup firstChild={false}>
            <p className="icon">SaveUp</p>
          </ToolbarGroup>

          <ToolbarGroup >
            <div className="SignButtons">
              <Link to="/signin">
                <FlatButton label="Sign In" primary={true} labelStyle={ styles.button }/>
              </Link>
              <Link to="/signup">
                <FlatButton label="Sign Up" secondary={true} labelStyle={ styles.button }/>
              </Link>
            </div>
          </ToolbarGroup>

        </Toolbar>
      </div>
    );
    }
    
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Navbar);

// return (
//       <div>
//         <Toolbar style={ styles.navbar } >

//           <ToolbarGroup firstChild={false}>
//             <p className="icon">SaveUp</p>
//             <div className="ContactButtons">
//               <Link to="/dashboard">
//                 <FlatButton label="Dashboard" labelStyle={ styles.button }/>
//               </Link>
//               <Link to="/expenses">
//                 <FlatButton label="Expenses" labelStyle={ styles.button }/>
//               </Link>
//               <Link to="/profile">
//                 <FlatButton label="Profile" labelStyle={ styles.button }/>
//               </Link>
//               <FlatButton label="Sign out" labelStyle={ styles.button }/>
//             </div>
//           </ToolbarGroup>

//           <ToolbarGroup >
//             <div className="SignButtons">
//               <Link to="/signin">
//                 <FlatButton label="Sign In" primary={true} labelStyle={ styles.button }/>
//               </Link>
//               <Link to="/signup">
//                 <FlatButton label="Sign Up" secondary={true} labelStyle={ styles.button }/>
//               </Link>
//             </div>
//           </ToolbarGroup>

//         </Toolbar>
//       </div>
//     );
