import React, { Component } from "react";
import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
import css from './ContactList.module.css';

class ContactList extends Component {

  render () {
    return (
    <ul className={css.list}>
    {this.props.arrayNames.map(({id, name, number}) => (
      <Contact
      key={id}
      name={name}
      number={number}
      onClick={this.props.onClick}
      />
    ))}
    </ul>
    );       
  };
};
        
ContactList.propTypes = {
    arrayNames: PropTypes.arrayOf(PropTypes.shape({
    })),
    onClick: PropTypes.func.isRequired,
  };

export default ContactList;