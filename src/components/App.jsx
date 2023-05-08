import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = ({name,number}) => {
    const arrayContacts = this.state.contacts;

    if(arrayContacts.some(arrayContacts => arrayContacts.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } 
    else {
      arrayContacts.push({
        name: name,
        number: number,
        id: nanoid(),
        });
    
      this.setState({ contacts: arrayContacts}); 
    }
  }; 

  deleteContact = name => {
    const arrayContacts = this.state.contacts;
    const index = arrayContacts.findIndex(contact => contact.name === name);
    arrayContacts.splice(index,1);
    this.setState({ contacts: arrayContacts});
  };

  changeFilter = e => {
    this.setState({filter: e.target.value});
  };

  getVisibleContacts () {
    const {contacts,filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter));
  };

  render () {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
          <ContactForm 
          onSubmit={this.addContact}
          />   
        <h2>Contacts</h2>
          <Filter
          onChange={this.changeFilter}
          />  
          <ContactList 
          arrayNames={visibleContacts}
          onClick={this.deleteContact}
          /> 
      </div>
    );
  }
};

export default App;