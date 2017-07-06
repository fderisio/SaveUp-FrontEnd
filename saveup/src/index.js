import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Routes/Welcome';
import Dashboard from './Routes/Dashboard';
import Profile from './Routes/Profile';
import Expenses from './Routes/Expenses';
import AddExpense from './Routes/AddExpense';
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

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={Store} >
      <Router>
      	<Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/addexpense" component={AddExpense} />
            <Route exact path="/underconstruction" component={UnderConstruction} />
		    </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));

registerServiceWorker();
