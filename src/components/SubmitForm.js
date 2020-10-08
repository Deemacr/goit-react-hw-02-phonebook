import React, { Component } from "react";

export default class SubmitForm extends Component {
	state = { name: "", number: "" };

	handleSubmit = (e) => {
		const { name, number } = this.state;
		e.preventDefault();
		this.props.onAddContact(name, number);
		this.setState({ name: "", number: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { name, number } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Number
					<input
						type="number"
						name="number"
						value={number}
						onChange={this.handleChange}
					/>
				</label>
				<button type="submit">Add Contact</button>
			</form>
		);
	}
}
