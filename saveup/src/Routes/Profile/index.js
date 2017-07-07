import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import '../../style.css';
import Navbar from '../../Containers/Navbar';
import ProfileTabs from '../../Components/ProfileTabs';
import ExpensesTable from '../../Components/ExpensesTable';
import MonthFolders from '../../Components/MonthFolders';
import Footer from '../../Components/Footer';

class Profile extends React.Component {

  render() {
    return (
      <div>
        <Navbar />
        <ProfileTabs />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default Profile;