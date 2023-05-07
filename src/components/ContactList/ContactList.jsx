import React from "react";
import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
import css from './ContactList.module.css';

const ContactList = ({ arrayNames}) => (
        
        <ul className={css.list}>
          {arrayNames.map(({id, name, number}) => (
            <Contact
            key={id}
            name={name}
            number={number}
            />
          ))}
        </ul>       
  );
    
  ContactList.propTypes = {
    arrayNames: PropTypes.arrayOf(PropTypes.shape({
    })),
  };

export default ContactList;