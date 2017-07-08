import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Routes/Welcome';
import Dashboard from './Routes/Dashboard';
import Profile from './Routes/Profile';
import Expenses from './Routes/Expenses';
import QuickAdd from './Routes/QuickAdd';
import SignUp from './Routes/SignUp';
import SignIn from './Routes/SignIn';
import UnderConstruction from './Routes/UnderConstruction';
import Store from './Store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  teal500, grey700, grey800, white, grey900, grey500, tealA700, amberA100, lightBlueA700, indigo50, grey300, grey100, tealA200
} from 'material-ui/styles/colors'; // other colors: pinkA200, purpleA400, grey100, yellow100
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// This replaces the default values of Material UI palette
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey700, // tabs background
    primary2Color: teal500, // calendar background
    primary3Color: grey500,
    textColor: grey800,
    accent1Color: grey900, // menu´s choosen option
    accent2Color: tealA200, // lightBlueA700, // tealA700, // teal500, // toolbar background 
    accent3Color: grey500, 
    alternateTextColor: grey300, // buttons background and tabs font color
    canvasColor: white, // tables background
    borderColor: grey700, // grey300, input text lines
    pickerHeaderColor: teal500,
    shadowColor: grey900,
  },
});

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={Store}>
      <Router>
      	<Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/quickadd" component={QuickAdd} />
            <Route exact path="/underconstruction" component={UnderConstruction} />
		    </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
