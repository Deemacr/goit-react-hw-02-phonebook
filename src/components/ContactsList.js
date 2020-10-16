import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onRemoveItem }) => (
	<ul>
		<h2>Contacts</h2>

		{contacts.map(({ id, name, number }) => (
			<li key={id}>
				<p>
					{name}: {number}
				</p>
				<button type="button" onClick={() => onRemoveItem(id)}>
					Delete Contact
				</button>
			</li>
		))}
	</ul>
);

export default ContactList;

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onRemoveItem: PropTypes.func.isRequired,
};
