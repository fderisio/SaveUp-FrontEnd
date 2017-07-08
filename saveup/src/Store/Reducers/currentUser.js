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

const currentUser = (state=initialState, action) => {
	return state;
}


export default currentUser;