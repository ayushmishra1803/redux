const intialState = {
	counter: 0,
	result: [],
};

const reducer = (state = intialState, action) => {
	if (action.type === "Inc") {
		return {
			...state,
			counter: state.counter + 1,
		};
	}
	if (action.type === "Dec") {
		return {
			...state,
			counter: state.counter - 1,
		};
	}
	if (action.type === "inc5") {
		return {
			...state,
			counter: state.counter + 5,
		};
	}

	if (action.type === "dec5") {
		return {
			...state,
			counter: state.counter - 5,
		};
	}
	if (action.type === "store") {
		return {
			...state,
			result: state.result.concat({ id: new Date(), value: state.counter }),
		};
	}
	if (action.type === "DeleteStored") {
		let newResult = state.result.filter((re) => re.id !== action.value.id);

		return {
			...state,
			result: newResult,
		};
	}
	return state;
};
export default reducer;
