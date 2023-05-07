import React from "react";
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ key, name, number }) => (
    <li className={css.item} key={key}>
    {name}: {number}
    </li>
  );
    
  Contact.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

export default Contact;