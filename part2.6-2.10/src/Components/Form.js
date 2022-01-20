import React from 'react';

const Form = ({addContact, name, handleName, number, handleNumber}) => {
    return (
        <div>
        <form onSubmit={addContact}>
        <div>
        <h2>Add a new contact</h2>
          name: <input value={name} onChange={handleName} />
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    );
}

export default Form;
