// ContactList.jsx

import React from 'react';
import './ContactList.css';
import { IoIosContacts } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

function ContactList({ contacts, openMessageModal, handleRemoveContact }) {
  return (
    <div className='Contacts-list'>
      {contacts.map((contact, index) => (
        <div className='Contact' key={index}>
          {contact.image ? (
            <img src={contact.image} alt={`${contact.name} avatar`} />
          ) : (
            <IoIosContacts className="default-icon" />
          )}
          <div>
            <p>{contact.name}</p>
          </div>
          <div className="button-row">
            <button onClick={() => openMessageModal(contact)}><AiOutlineMessage /></button>
            <button onClick={() => handleRemoveContact(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;

