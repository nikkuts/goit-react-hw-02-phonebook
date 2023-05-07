import React from "react";
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => (
    <li className={css.item} key={id}>
    {name}: {number}
    <button type="submit" className={css.itemBtn}>Delete</button>
    </li>
  );
    
  Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

export default Contact;