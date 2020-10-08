import React, { Component } from "react";
import SubmitForm from "./SubmitForm";
import ContactsList from "./ContactsList";
import { v4 as uuidv4 } from "uuid";
import SearchFilter from "./SearchFilter";

export default class App extends Component {
	state = {
		contacts: [],
		filter: "",
	};

	addContact = (name, number) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		this.setState((prevState) => {
			return {
				contacts: [...prevState.contacts, contact],
			};
		});
	};

	changeFilter = (filter) => {
		this.setState({ filter });
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	removeItem = (contactID) => {
		this.setState((prevState) => {
			return {
				contacts: prevState.contacts.filter(({ id }) => id !== contactID),
			};
		});
	};

	render() {
		const { contacts, filter } = this.state;

		const visibleTasks = this.getVisibleContacts();

		return (
			<>
				<SubmitForm
					onAddContact={this.addContact}
					onSubmit={this.handleSubmit}
				/>
				<h3>Find Contacts by name</h3>
				<SearchFilter value={filter} onChangeFilter={this.changeFilter} />
				{contacts.length > 0 && (
					<ContactsList
						contacts={visibleTasks}
						onRemoveItem={this.removeItem}
					/>
				)}
			</>
		);
	}
}
