/* eslint-disable no-unused-vars */
// import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import Form from './Components/Form';
import contactService from './Services/contactService'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: '',
    number: ''
  })
  const [filteredNames, setFilteredNames] = useState("");

  useEffect(() => {
    contactService
    .getAll()
    .then(allContacts => {
      setContacts(allContacts);
    })
  }, [])

  const displayFilteredName = (e) => {
    setFilteredNames(e.target.value);
  }

  const namesToShow = contacts.filter(contact => contact.name
  .toLowerCase()
  .includes(filteredNames.toLowerCase()))

  const handleNameChange = (e) => {
    let updatedName = {};
    updatedName = {name: e.target.value};
    setContact(contact => ({
      ...contact,
      ...updatedName
    }));
  }

  const handleNumberChange = (e) => {
    let updatedNumber = {};
    updatedNumber = {number: e.target.value};
    setContact(contact => ({
      ...contact,
      ...updatedNumber
    }));
  }


  const contactName = contacts.map(contact => contact.name.toLowerCase());
  const contactNumber = contacts.map(contact => contact.number.toLowerCase());

 

  const addContact = (e) => {
    e.preventDefault();
    const contactObject = {
      name: contact.name,
      number: contact.number
    }
    if(contactName.includes(contactObject.name.toLowerCase()))
    {
      if(window.confirm(`${contact.name} already exists in your phonebook, do you want to
      replace the old number ?`)){

        const contactToChange = contacts.find(c => c.name === contactObject.name);
        const changedContact = {...contactToChange, number: contact.number} 

        contactService
        .update(contactToChange.id, changedContact)
        .then(returnedContact => {
          setContacts(contacts.map(contact => contact.id !== contactToChange.id ? contact : returnedContact))
        })
      }
    }
    else if(contactNumber.includes(contactObject.number.toLowerCase()))
    {
      alert("This number is attributed to another contact");
    }
    else
    {
      contactService
      .create(contactObject)
      .then(createdContact => {
        setContacts(contacts.concat(createdContact));
        setContact({name: '', number: ''})
      })  
    } 
  }

  const deleteContact = (id) => {
    contactService
    .erase(id)
    .then(deletedContact => {
      let text;
      if(window.confirm("Do you really want to delete this contact ?")){
        alert("Contact deleted")
        setContacts(contacts.filter(contact => contact.id !== id))
        setContact({name:'', number: ''})
      }
    })
  }

  return (
    <div className="App">
      <Filter 
      display={displayFilteredName} />
      <Form 
        handleName={handleNameChange} 
        handleNumber={handleNumberChange}
        addContact={addContact} 
        contact={contact}
       />
      <h1>Contact List</h1>
      {namesToShow.map(contact => <ContactList 
        key={contact.id}
        contact={contact}
        deleteContact={() => deleteContact(contact.id)}
        />)}    
    </div>
  );
}

export default App;
