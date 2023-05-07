import React from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({onSubmit, onChange }) => (
    <form className={css.form} onSubmit={onSubmit}>
        <div className={css.formFields}>
          <label>
            Name
          <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
          />
          </label>
          <label>
            Number
          <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onChange}
          />
          </label>
        </div>
        <button type="submit" className={css.formBtn}>Add contact</button>
    </form>
  );
    
  ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default ContactForm;