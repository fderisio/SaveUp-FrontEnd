import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PersonalInfo from '../../Containers/PersonalInfo';
import PayMethods from '../../Containers/PayMethods';
import NonFixedCategories from '../../Containers/NonFixedCategories';
import FixedCategories from '../../Containers/FixedCategories';

const styles = {
  tab: {
    marginLeft: 100,
  }
};

class ProfileTabs extends React.Component {

  render() {
    return (
      <Tabs>
        <Tab icon={<MapsPersonPin />} label="Personal Info" >
          <div style={styles.tab} className="FirstColumn">
            <PersonalInfo />
            <PayMethods />
          </div>
        </Tab>
        <Tab label="Variable categories" >
          <div style={styles.tab}>
            <NonFixedCategories />
          </div>
        </Tab>
        <Tab label="Fixed categories" >
          <div style={styles.tab}>
            <FixedCategories />
          </div>
        </Tab>
      </Tabs>
    );
  }

}

export default ProfileTabs;