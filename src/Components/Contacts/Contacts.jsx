import React, { useState } from 'react';
import Modal from 'react-modal';
import './Contacts.css';

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newContactImage, setNewContactImage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const openModal = () => {
    setIsOpen(true);
    setNewContactName('');
    setNewContactEmail('');
    setNewContactImage('');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddContact = () => {
    const newContact = {
      name: newContactName,
      email: newContactEmail,
      image: newContactImage,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);

    // For now, let's just close the modal
    closeModal();
  };

  const handleRemoveContact = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  // Filter contacts based on the search input
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='Contacts'>
      <div className='Contacts-container'>
        <h2>Contacts</h2>
        <div className='Search-bar'>
          <input
            type='text'
            placeholder='Search contacts...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button onClick={openModal}>Add Contact</button>
      </div>

      {/* Modal for adding a new contact */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '300px',
            margin: 'auto',
          },
        }}
      >
        <div>
          <button className='modal-close-btn' onClick={closeModal}>
            Close
          </button>

          {/* Form for adding a new contact */}
          <form>
            <div>
              <h2>Add Contact</h2>
              <input
                type='text'
                name='name'
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                placeholder='Name'
              />
            </div>
            <div>
              <input
                type='email'
                name='email'
                value={newContactEmail}
                onChange={(e) => setNewContactEmail(e.target.value)}
                placeholder='Email'
              />
            </div>
            <div>
              <input
                type='text'
                name='image'
                value={newContactImage}
                onChange={(e) => setNewContactImage(e.target.value)}
                placeholder='Image URL (optional)'
              />
            </div>
            <button type='button' onClick={handleAddContact}>
              Add Contact
            </button>
          </form>
        </div>
      </Modal>

      {/* Display the list of contacts */}
      <div className='Contacts-list'>
        {filteredContacts.map((contact, index) => (
          <div className='Contact' key={index}>
            <img src={contact.image} alt={`${contact.name} avatar`} />
            <div>
              <p>{contact.name}</p>
            </div>
            <button>Msg</button>
            <button>Voice memo</button>
            <button>Camera</button>
            <button onClick={() => handleRemoveContact(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;


