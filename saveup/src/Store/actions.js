export const setCurrentUser = (user) => {
	return { type: 'setUser', user }
}

export const setExpenses = (expenses) => {
	return { type: 'setExpenses', expenses }
}

export const addExpense = (expenses) => {
	return { type: 'addExpense', expenses }
}

export const addCategory = (category) => {
	return { type: 'addCategory', category }
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
				localStorage.setItem('userId', user.id);
				return 'user found';
			}
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

// POST --> Add new expense
export const addExpenseAction = (category, text, store, expenseDate, total, payMethod) => (dispatch, getState) => { 
	const currentUser = getState().currentUser;
	const headers  = new Headers({ 
		'Content-Type': 'application/json',
		Authorization: `Bearer ${currentUser.id}`
	})

	const body = { category, text, store, expenseDate, total, payMethod };
	console.log('json', JSON.stringify(body))
	const config = {
		headers: headers, // tells the fetch which format is (in this case Json)
		method: 'POST', 
		body: JSON.stringify(body), // Unexpected token S in JSON at position 0
		//mode: 'no-cors' 
	}; 
		console.log(config)
	fetch('http://localhost:8080/user/1/expenses/add', config)
		.then(res => res.json())
		.then(expenses => {
			console.log('hola posttttt', expenses)
			const action = addExpense(expenses);
			dispatch(action);
		}) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}

// POST --> Add new category
export const addCategoryAction = (name, fixed) => (dispatch, getState) => { 
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

	fetch('http://localhost:8080/user/1/categories/add', config)
		.then(res => res.json())
		.then(category => {
			const action = addCategory(category);
			dispatch(action);
		}) 
		.catch(err => {
			console.log('An error ocurred: ', err);
		})
}