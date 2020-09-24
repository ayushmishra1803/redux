const redux=require("redux");
const inistate={
    counter:1
}
const rootReducer=(state=inistate,action)=>{
    if (action.type === "INC"){
        return{
            ...state,
            counter:state.counter+1
        
        }
    } 
      if (action.type === "INCTEN") {
				return {
					...state,
					counter: state.counter + action.value,
				};
			} 
    return state;
}
const store=redux.createStore(rootReducer);
store.subscribe(() => {
	console.log(store.getState());
});
store.dispatch({
    type:"INC"
});

store.dispatch({
	type: "INCTEN",value:154
});

