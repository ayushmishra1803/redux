import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import reducer from "./Store/reducer";
import { Provider } from "react-redux";

const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log("Hello Middle Ware", action);
			next(action);
			console.log(store.getState());
		};
	};
};

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

serviceWorker.unregister();
