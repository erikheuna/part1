import React from 'react';

const ContactList = ({contact, deleteContact}) => {
    return (
        <div>
            <p>{ contact.name } - {contact.number}</p> <button onClick={deleteContact}>delete</button>
        </div>
    );
}

export default ContactList;
