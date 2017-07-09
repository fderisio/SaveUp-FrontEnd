const initialState = [[
				{ id: 1, category: { id: 1 }, text: "Blouses", store: "H&M", expenseDate: "2017-06-14T00:00:00.000Z", total: 50, payMethod: { id: 1 }},
				{ id: 2, category: { id: 1 }, text: "Pants", store: "H&M", expenseDate: "2017-01-14T00:00:00.000Z", total: 150, payMethod: { id: 2 }},
				{ id: 3, category: { id: 1 }, text: "T-Shirts", store: "H&M", expenseDate: "2017-04-14T00:00:00.000Z", total: 20.50, payMethod: { id: 1 }},
				{ id: 4, category: { id: 1 }, text: "Blouses", store: "H&M", expenseDate: "2017-05-01T00:00:00.000Z", total: 30.90, payMethod: { id: 1 }},
				{ id: 5, category: { id: 2 }, text: "Weekly Groceries", store: "Migros", expenseDate: "2017-05-14T00:00:00.000Z", total: 45.75, payMethod: { id: 1 }},
				{ id: 6, category: { id: 2 }, text: "Weekly Groceries", store: "Migros", expenseDate: "2017-06-14T00:00:00.000Z", total: 42.10, payMethod: { id: 2 }},
				{ id: 7, category: { id: 2 }, text: "Weekly Groceriess", store: "COOP", expenseDate: "2017-06-14T00:00:00.000Z", total: 20, payMethod: { id: 1 }},
				{ id: 8, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 9, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 10, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 11, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 12, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 13, category: { id: 2 }, text: "", store: "Denner", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 14, category: { id: 2 }, text: "", store: "Aldi", expenseDate: "2017-06-14T00:00:00.000Z", total: 30, payMethod: { id: 1 }},
				{ id: 15, category: { id: 4 }, text: "", store: "Swisscom", expenseDate: "2017-06-14T00:00:00.000Z", total: 70, payMethod: { id: 1 }},
				{ id: 16, category: { id: 5 }, text: "", store: "Cablecom", expenseDate: "2017-06-14T00:00:00.000Z", total: 55, payMethod: { id: 1 }},
				{ id: 17, category: { id: 6 }, text: "", store: "GA", expenseDate: "2017-06-14T00:00:00.000Z", total: 350, payMethod: { id: 1 }},
]];

const expenses = (state=[], action) => {
	switch (action.type) {
		case 'setExpenses':
			const newState = [ ...action.expenses ];
			return newState;
		case 'addExpense':
			const newState2 = [ ...action.expense ];
			console.log('entre al estado', newState2)
			console.log('la expense', action.expense)
			//newState2.push(action.expense);
			return newState2;
		default:
			return state;
	}
}

export default expenses;