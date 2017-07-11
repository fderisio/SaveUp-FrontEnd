import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import FixedIcon from 'material-ui/svg-icons/action/lock';
import NonFixedIcon from 'material-ui/svg-icons/action/lock-open';
import PersonalInfo from '../../Containers/PersonalInfo';
import Incomes from '../../Containers/Incomes';
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
      <Tabs >
        <Tab icon={<MapsPersonPin />} label="Personal Info" >
          <div style={styles.tab} className="TabFirstColumn">
            <PersonalInfo />
            <Incomes />
          </div>
          <div className="TabSecondColumn">
            <PayMethods />
          </div>
        </Tab>
        <Tab icon={<NonFixedIcon />} label="Variable charges" >
          <div style={styles.tab}>
            <NonFixedCategories />
          </div>
        </Tab>
        <Tab icon={<FixedIcon />} label="Fixed charges" >
          <div style={styles.tab}>
            <FixedCategories />
          </div>
        </Tab>
      </Tabs>
    );
  }

}

export default ProfileTabs;