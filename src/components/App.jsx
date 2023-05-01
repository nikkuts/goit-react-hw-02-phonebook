import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Phonebook from "./Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    this.setState({ name: e.target.value }); 
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const arrayContacts = this.state.contacts;
    arrayContacts.push({
      name: this.state.name,
      id: nanoid(),
    });

    this.setState({ contacts: arrayContacts}); 
    e.currentTarget.reset();
  };

  render () {
    const {contacts, name} = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook 
        name={name}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        /> 
      </div>
    );
  }
  
};

export default App;