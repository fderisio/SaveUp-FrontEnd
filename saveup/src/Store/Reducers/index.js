import { combineReducers } from 'redux';
import currentUser from './currentUser';
import expenses from './expenses';
import filter from './filter';

export default combineReducers ({
	currentUser,
	expenses,
	filter,
})