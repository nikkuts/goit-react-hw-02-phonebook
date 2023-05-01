import React from "react";
import PropTypes from 'prop-types';

const Phonebook = ({ name, onSubmit, onChange }) => (
    <form onSubmit={onSubmit}>
        <label>
          Name
        <input
            type="text"
            name={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
        />
        </label>

    <button type="submit">Add contact</button>
    </form>
  );
    
  Phonebook.propTypes = {
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Phonebook;