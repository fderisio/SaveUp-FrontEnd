export const setCurrentUser = (user) => {
	return { type: 'setUser', user }
}

export const setExpenses = (expenses) => {
	return { type: 'setExpenses', expenses }
}

export const setSearchText = (text) => {
	return { type: 'setSearchText', text }
}

export const setCategory = (filter) => {
	return { type: 'setCategory', filter }
}

export const setPayment = (filter) => {
	return { type: 'setPayment', filter }
}

export const addExpense = (expenses) => {
	return { type: 'addExpense', expenses }
}

export const addCategory = (category) => {
	return { type: 'addCategory', category }
}

// export const addPayment = (payment) => {
// 	return { type: 'addPayment', payment }
// }

// export const addIncome = (income) => {
// 	return { type: 'addIncome', income }
// }

export const signUpUser = (user) => {
	return { type: 'signUp', user }
}

export const logOutUser = () => {
	return { type: 'logOut' }
}

// POST request
export const signin = (email, password) => (dispatch, getState) => {
	const headers  = new Headers({ 'Content-Type': 'application/json' })
	const body = { email, password };

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) 
	};

	return fetch('http://localhost:8080/user/login', config)
		.then(res => res.json())
		.then(user => {
			if (!user.id) {
				return 'not found';
			} else {
				const action = setCurrentUser(user);
				dispatch(action);
				localStorage.setItem('userId', parseInt(user.id));
				return 'user found';
			}
		}) 
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

// POST SIGNUP
export const signup = (firstName, lastName, email, password) => (dispatch, getState) => {
	const headers  = new Headers({ 'Content-Type': 'application/json' })
	const body = { firstName, lastName, email, password };
	console.log('bodyyy', JSON.stringify(body))

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body) 
	}; 

	return fetch('http://localhost:8080/user/signup', config)
		.then(res => res.json())
		.then(user => {
				console.log(user)
				const action = setCurrentUser(user);
				dispatch(action)
				localStorage.setItem('userId', user.id);
		})
		.catch(err => {
			console.log('an error ocurred', err);
		})
}

// GET --> User Information reducer (Categories, Incomes and Payment Methods Lists)
export const fetchUser = () => (dispatch, getState) => {
	const userID = localStorage.getItem('userId'); 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.id}`
	})

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
	}; 

	fetch(`http://localhost:8080/user/${userID}`, config)
		.then(res => res.json())
		.then(user => {
			const action = setCurrentUser(user);
			dispatch(action);
		}) 
		.catch(err => {
			console.log('An error ocurred:', err);
		})
}

// GET --> User Expenses reducer
export const fetchExpenses = () => (dispatch, getState) => { 
	const userID = localStorage.getItem('userId'); 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.id}`
	})

	const config = { 
		headers: headers, // tells the fetch which format is (in this case Json)
	}; 

	fetch(`http://localhost:8080/user/${userID}/expenses`, config)
		.then(res => res.json())
		.then(expenses => {
			const action = setExpenses(expenses);
			dispatch(action)
		}) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}

// POST --> Add new expense // /{categoryId}{paymentId}/expenses/add
export const addExpenseAction = (category, text, store, expenseDate, total, payMethod) => (dispatch, getState) => { 
	//const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		//Authorization: `Bearer ${currentUser.id}`
	})
	const body = {category, text, store, expenseDate, total, payMethod };

	const config = {
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body), // Unexpected token S in JSON at position 0
	};

	fetch(`http://localhost:8080/user/${category.id}/${payMethod.id}/expenses/add`, config)
		.then(res => {
			const expense = res.json();
			const action = addExpense(expense);
		  dispatch(action);
		})
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}

// POST --> Add new category
export const addCategoryAction = (name, fixed) => (dispatch, getState) => { 
	const userID = localStorage.getItem('userId'); 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.id}`
	})

	const body = { name, fixed };
	console.log('json', JSON.stringify(body))
	const config = {
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body), // Unexpected token S in JSON at position 0
	}; 

	fetch(`http://localhost:8080/user/${userID}/categories/add`, config)
		.then(res => {
			const category = res.json();
			const action = addCategory(category);
		  dispatch(action);
		})
		// .then(category => {
		// 	const action = addCategory(category);
		// 	dispatch(action);
		// }) 
		.then(res => res.json())
		// .then(category => {
		// 	const action = addCategory(category);
		// 	dispatch(action);
		// }) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}

// POST --> Add new payment method
export const addPayMethodAction = (name, bank) => (dispatch, getState) => { 
	const userID = localStorage.getItem('userId'); 
	//const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		//Authorization: `Bearer ${currentUser.id}`
	})

	const body = { name, bank };
	console.log('json', JSON.stringify(body))
	const config = {
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body), // Unexpected token S in JSON at position 0
	}; 

	fetch(`http://localhost:8080/user/${userID}/paymethods/add`, config)
		.then(res => res.json())
		// .then(payment => {
		// 	const action = addPayment(payment);
		// 	dispatch(action);
		// }) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}

// POST --> Add new payment method
export const addIncomeAction = (amount, startedAt, monthly, endAt) => (dispatch, getState) => { 
	const userID = localStorage.getItem('userId'); 
	//const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		//Authorization: `Bearer ${currentUser.id}`
	})

	const body = { amount, startedAt, monthly, endAt };
	console.log('json', JSON.stringify(body))
	const config = {
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body), // Unexpected token S in JSON at position 0
	}; 

	fetch(`http://localhost:8080/user/${userID}/incomes/add`, config)
		.then(res => res.json())
		// .then(income => {
		// 	const action = addIncome(income);
		// 	dispatch(action);
		// }) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}