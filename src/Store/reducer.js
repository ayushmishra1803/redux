const intialState = {
	counter: 0,
};

const reducer = (state = intialState, action) => {
	if (action.type === "Inc") {
		console.log("hello");
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === "Dec") {
		return {
			counter: state.counter - 1,
		};
	}
	if (action.type === "inc5") {
		return {
			counter: state.counter + 5,
		};
	}

	if (action.type === "dec5") {
		return {
			counter: state.counter - 5,
		};
	}
	return state;
};
export default reducer;
