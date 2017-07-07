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
}

const currentUser = (state=initialState, action) => {
	return state;
}


export default currentUser;

// const initialState = {
// 	id: 1, 
// 	fistName: "Caroline",
// 	lastName: "Smith",
// 	email: "car17@aol.com",
// 	categories: [
// 		{ id: 1,
// 			name: "Clothing",
// 			fixed: false,
// 			expenses: [
// 				{ id: 1, text: "Blouses", store: "H&M", expenseDate: "2017-06-14T06:36:03.635Z", total: 50, payMethod: { id: 1, name: "MasterCard" }},
// 				{ id: 2, text: "Pants", store: "H&M", expenseDate: "2017-01-14T06:36:03.635Z", total: 150, payMethod: { id: 2, name: "cash" }},
// 				{ id: 3, text: "T-Shirts", store: "H&M", expenseDate: "2017-06-14T06:36:03.635Z", total: 20.50, payMethod: { id: 1, name: "MasterCard" }},
// 				{ id: 4, text: "Blouses", store: "H&M", expenseDate: "2017-01-01T06:36:03.635Z", total: 30.90, payMethod: { id: 1, name: "MasterCard" }},
// 			]
// 		},
// 		{ id: 2,	
// 			name: "Groseries",
// 			fixed: false,
// 			expenses: [
// 				{ id: 1, text: "Weekly Groceries", store: "Migros", expenseDate: "2017-04-14T06:36:03.635Z", total: 45.75, payMethod: { id: 1, name: "MasterCard" }},
// 				{ id: 2, text: "Weekly Groceries", store: "Migros", expenseDate: "2017-02-14T06:36:03.635Z", total: 42.10, payMethod: { id: 2, name: "cash" }},
// 				{ id: 3, text: "Weekly Groceriess", store: "COOP", expenseDate: "2017-03-14T06:36:03.635Z", total: 20, payMethod: { id: 1, name: "MasterCard" }},
// 				{ id: 4, text: "", store: "Denner", expenseDate: "2017-06-14T06:36:03.635Z", total: 30, payMethod: { id: 1, name: "MasterCard" }},
// 			]
// 		}
// 	],
// 	incomes: [
// 		{ id: 1,
// 			amount: 7500,
// 			startedAt: "01.01.2017",
// 			monthly: true,
// 		}
// 	],
// }