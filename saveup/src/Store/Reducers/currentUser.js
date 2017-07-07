const initialState = {
	id: 1, 
	fistName: "Caroline",
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
		}
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

const currentUser = (state=initialState, action) => {
	return state;
}


export default currentUser;