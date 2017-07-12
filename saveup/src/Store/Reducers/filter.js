const initialState = {
	filter: 'all',
	category: '',
	payment: '',
	month: '',
}

const filter = (state={}, action) => {
	switch (action.type) {
		case 'setCategory':
			const newState = { ...this.state };
			newState.category = action.filter;
			return newState;
		case 'setPayment':
			const newState1 = { ...this.state };
			newState1.payment = action.filter;
			return newState1;
		case 'setSearchText':
			const newState2 = { ...this.state };
			newState2.searchText = action.text;
			return newState2;
		default:
			return state;
	}
}


export default filter;