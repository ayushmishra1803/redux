const redux=require("redux");
const inistate={
    counter:1
}
const rootReducer=(state=inistate,action)=>{
return state
}
const store=redux.createStore(rootReducer);
console.log(store.getState());
