import { combineReducers } from 'redux';
import currentUser from './currentUser';
import expenses from './expenses';

export default combineReducers ({
	currentUser,
	expenses,
})