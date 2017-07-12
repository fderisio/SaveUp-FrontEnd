const initialState = {
	filter: 'all',
	category: '',
	payment: '',
	month: '',
}

const filter = (state={}, action) => {
	switch (action.type) {
		case 'setFilter':
			const newState = { ...this.state };
			newState.filter = action.filter;
			console.log('filter state', newState)
			return newState;
		case 'setSearchText':
			const newState2 = { ...this.state };
			newState2.searchText = action.text;
			console.log(newState2)
			return newState2;
		default:
			return state;
	}
}


export default filter;