const intialState = {
	counter: 0,
	result: [],
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
	if (action.type === "store") {
        const result=[]
        result.push(state.counter);
        return {
					...state,
					result:result,
				};
    }
    if (action.type === "DeleteStored") {

		}
	return state;
};
export default reducer;
