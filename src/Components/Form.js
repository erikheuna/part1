import React from "react";

const Form = ({handleName, handleNumber, addContact, contact}) => {
  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={addContact} >
        name : <input type="text" onChange={handleName} value={contact.name} /> <br />
        number : <input type="text" onChange={handleNumber} value={contact.number} />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Form;
