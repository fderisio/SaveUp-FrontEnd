import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import PersonalInfo from '../../Containers/PersonalInfo';
import NonFixedCategories from '../../Containers/NonFixedCategories';
import FixedCategories from '../../Containers/FixedCategories';

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
};

const ProfileTabs = () => (
  <Tabs>
    <Tab label="Personal Info" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Personal Info</h2>
        <PersonalInfo />
      </div>
    </Tab>
    <Tab label="Variable categories" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Variable Expenses Categories</h2>
        <NonFixedCategories />
      </div>
    </Tab>
    <Tab label="Fixed categories" >
      <div style={styles.tab}>
        <h2 style={styles.headline}>Fixed Expense Categories</h2>
        <FixedCategories />
      </div>
    </Tab>
  </Tabs>
);

export default ProfileTabs;