import React from "react";

class Calculator extends React.Component {

	constructor(props) {
		super();

		this.handleNum1Change = this.handleNum1Change.bind(this);
		this.handleNum2Change = this.handleNum2Change.bind(this);
		this.handleOperatorChange = this.handleOperatorChange.bind(this);
    	this.evaluate = this.evaluate.bind(this);
	}

	state = {
		num1: 0,
		num2: 0,
		operator: "+",
		result: 0
	}

	evaluate () {

		let result = 0.0;

		switch (this.state.operator) {
			case "+":
				result = Number(this.state.num1) + Number(this.state.num2);
				break;
			case "-":
				result = Number(this.state.num1) - Number(this.state.num2);
				break;
			case "*":
				result = Number(this.state.num1) * Number(this.state.num2);
				break;
			case "/":
				result = Number(this.state.num1) / Number(this.state.num2);
				break;
			default:
				this.setState({ operator: "+" })
		}


		this.setState({
			result: result
		})
	}

	handleNum1Change(event) {
		this.setState({ num1: event.target.value })
	}

	handleNum2Change(event) {
		this.setState({ num2: event.target.value })
	}

	handleOperatorChange(event) {
		this.setState({ operator: event.target.value})
	}

	render (props) {
		return (
			<div className="container">
			  <h1>Add with React!</h1>

			  <div className="add">
			    <input type="text" value={this.state.num1} onChange={this.handleNum1Change} />
			    <input type="text" value={this.state.operator} onChange={this.handleOperatorChange} />
			    <input type="text" value={this.state.num2} onChange={this.handleNum2Change} />
			    <button onClick={this.evaluate}>=</button>
			    <h3>{this.state.result}</h3>
			  </div>
			</div>
		)
	}
}

export default Calculator;