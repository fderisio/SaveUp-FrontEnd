import reducer from './Reducers/currentUser';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk'; // required by the Middleware

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(),
);

export default store;
