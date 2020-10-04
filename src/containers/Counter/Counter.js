import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
class Counter extends Component {
	state = {
		counter: 0,
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case "inc":
				this.setState((prevState) => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case "dec":
				this.setState((prevState) => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case "add":
				this.setState((prevState) => {
					return { counter: prevState.counter + value };
				});
				break;
			case "sub":
				this.setState((prevState) => {
					return { counter: prevState.counter - value };
				});
				break;
			default:
				return;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl
					label="Increment"
					clicked={this.props.OnIncrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.OnDecrementCounter}
				/>
				<CounterControl label="Add 5" clicked={this.props.OnIncrement5} />
				<CounterControl label="Subtract 5" clicked={this.props.OnDecrement5} />
				<br />
				<button onClick={this.props.Store}>Store Result</button>
				<ul>
					{this.props.StoredResult.map((re, index) => {
						return (
							<li key={index}>
								{" "}
								{re.value}&nbsp;
								<button onClick={() => this.props.removeResult(re)}>
									Remove
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		ctr: state.counter,
		StoredResult: state.result,
	};
};
const mapDispatchAction = (dispatch) => {
	return {
		OnIncrementCounter: () => dispatch({ type: "Inc" }),
		OnDecrementCounter: () => dispatch({ type: "Dec" }),
		OnDecrement5: () => dispatch({ type: "dec5" }),
		OnIncrement5: () => dispatch({ type: "inc5" }),
		Store: () => dispatch({ type: "store" }),
		removeResult: (re) => dispatch({ type: "DeleteStored", value: re }),
	};
};
export default connect(mapStateToProps, mapDispatchAction)(Counter);
