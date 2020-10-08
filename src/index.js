import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Store/reducer";
import { Provider } from "react-redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log("Hello Middle Ware", action);
			next(action);
			console.log(store.getState());
		};
	};
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

serviceWorker.unregister();
