const currentUser = (state={}, action) => {
	switch (action.type) {
		case 'setUser':
			const newState = { ...action.user };
			return newState;
		case 'addCategory':
			const newStateCat = { ...action.category };
			return newStateCat;
		case 'addExpense':
			const newStateExp = { ...action.expense };
			return newStateExp;
		case 'signUp':
			const newState1 = { ...action.user };
			console.log('entre al estado de signup', newState)
			return newState1;
		case 'logOut':
			let logoutState = { ...state };
			localStorage.clear();
			logoutState = {};
			return logoutState;
		default:
			return state;
	}
}

export default currentUser;

const initialState = {
	id: 1, 
	firstName: "Caroline",
	lastName: "Smith",
	email: "car17@aol.com",
	categories: [
		{ id: 1,
			name: "Clothing",
			fixed: false,
		},
		{ id: 2,	
			name: "Groceries",
			fixed: false,
		},
		{ id: 3,
			name: "Pharmacy",
			fixed: false,
		},
		{ id: 4,
			name: "CelAbo",
			fixed: true,
		},
		{ id: 5,
			name: "TVAbo",
			fixed: true,
		},
		{ id: 6,
			name: "GAAbo",
			fixed: true,
		},
	],
	incomes: [
		{ id: 1,
			amount: 7500,
			startedAt: "01.01.2017",
			monthly: true,
		}
	],
	paymethods: [
		{ id: 1,
			name: "American Express",
			Bank: "",
		},
		{ id: 2,
			name: "Cash",
			Bank: "",
		},
	]
}
