import React from 'react';

const ContactList = ({contact, deleteContact}) => {
    return (
        <>
        <li 
        key={contact.id}
        className='contact' >{ contact.name } - {contact.number}</li> 
        <button onClick={deleteContact}>delete</button>
        </>        
    );
}

export default ContactList;
