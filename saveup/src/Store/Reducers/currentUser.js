const initialState = {
	id: 1, 
	fistName: "Caroline",
	lastName: "Smith",
	email: "car17@aol.com",
	categories: [
		{ id: 1,
			name: "Clothing",
			fixed: false,
			expenses: [
				{ id: 1, text: "Blouses", store: "H&M", expenseDate: "12.05.2017", total: 50, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 2, text: "Pants", store: "H&M", expenseDate: "01.03.2017", total: 150, payMethod: { id: 2, name: "cash" }},
				{ id: 3, text: "T-Shirts", store: "H&M", expenseDate: "19.05.2017", total: 20.50, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 4, text: "Blouses", store: "H&M", expenseDate: "01.06.2017", total: 30.90, payMethod: { id: 1, name: "MasterCard" }},
			]
		},
		{ id: 1,
			name: "Groseries",
			fixed: false,
			expenses: [
				{ id: 1, text: "Weekly Groceries", store: "Migros", expenseDate: "12.05.2017", total: 45.75, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 2, text: "Weekly Groceries", store: "Migros", expenseDate: "01.03.2017", total: 42.10, payMethod: { id: 2, name: "cash" }},
				{ id: 3, text: "Weekly Groceriess", store: "COOP", expenseDate: "19.05.2017", total: 20, payMethod: { id: 1, name: "MasterCard" }},
				{ id: 4, text: "", store: "Denner", expenseDate: "01.06.2017", total: 30, payMethod: { id: 1, name: "MasterCard" }},
			]
		}
	],
	incomes: [
		{ id: 1,
			amount: 7500,
			startedAt: "01.01.2017",
			monthly: true,
		}
	],
}

const currentUser = (state=initialState, action) => {
	return state;
}


export default currentUser;