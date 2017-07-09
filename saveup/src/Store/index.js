import reducer from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // required by the Middleware

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk),
);

export default store;
