import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';
import { RaisedButton } from 'material-ui';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PersonalInfo from '../../Containers/PersonalInfo';
import NonFixedCategories from '../../Containers/NonFixedCategories';
import FixedCategories from '../../Containers/FixedCategories';
import AddCategoryForm from '../../Containers/AddCategoryForm';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab: {
    marginLeft: 100,
  },
  button: {
    height: 30,
    marginLeft: 30,
  }
};

class ProfileTabs extends React.Component {

  render() {
    return (
      <Tabs>
        <Tab icon={<MapsPersonPin />} label="Personal Info" >
          <div style={styles.tab}>
            <h2 style={styles.headline}>Personal Info</h2>
            <PersonalInfo />
          </div>
        </Tab>
        <Tab label="Variable categories" >
          <div style={styles.tab}>
            <h2 style={styles.headline}>Variable Expenses Categories 
            <Link to='/addcategory'><RaisedButton 
              label="Add new category" 
              style={ styles.button }
              type="submit" /></Link>
            </h2>
            <NonFixedCategories />
          </div>
        </Tab>
        <Tab label="Fixed categories" >
          <div style={styles.tab}>
            <h2 style={styles.headline}>Fixed Expense Categories
            <Link to='/addcategory'><RaisedButton 
              label="Add new category" 
              style={ styles.button }
              type="submit" /></Link>
            </h2>
            <FixedCategories />
          </div>
        </Tab>
      </Tabs>
    );
  }

}

export default ProfileTabs;