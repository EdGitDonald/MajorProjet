import React from 'react';

function ContactList({ contacts, openMessageModal, handleRemoveContact }) {
  return (
    <div className='Contacts-list'>
      {contacts.map((contact, index) => (
        <div className='Contact' key={index}>
          <img src={contact.image} alt={`${contact.name} avatar`} />
          <div>
            <p>{contact.name}</p>
          </div>
          <button onClick={() => openMessageModal(contact)}>Msg</button>
          <button>Voice memo</button>
          <button>Camera</button>
          <button onClick={() => handleRemoveContact(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
