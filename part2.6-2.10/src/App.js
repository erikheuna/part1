/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "./Components/Form";
import PersonList from "./Components/PersonList";
import Search from "./Components/Search";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123-45-67' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredNames, setFilteredNames] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filteredNames.toLowerCase()))

  const checkName = persons.map(person => person.name.toLowerCase());
  const checkNumber = persons.map(person => person.number.toLowerCase());
  const filteredNameChange = (e) => {
    setFilteredNames(e.target.value);
  }

  const addContact = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    if(checkName.includes(personObject.name.toLowerCase())){
      alert(`${newName} is already in your phonebook`);
    }
    else if(checkNumber.includes(personObject.number.toLowerCase()))
    {
      alert(`${newNumber} is already in your phonebook`);
    }
    else{
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <Search filter={filteredNames} onFilter={filteredNameChange} />
      <Form addContact={addContact} 
       name={newName}
       number={newNumber}
       handleName={handleNameChange}
       handleNumber={handleNumberChange}
       />
      <h2>Numbers</h2>
      {namesToShow.map(person => 
        <PersonList key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default App;
