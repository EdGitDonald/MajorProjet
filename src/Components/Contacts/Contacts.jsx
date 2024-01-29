
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Contacts.css';

function Contacts({ updateDraftedMessages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newContactName, setNewContactName] = useState('');
  const [newContactEmail, setNewContactEmail] = useState('');
  const [newContactImage, setNewContactImage] = useState('');
  const [contacts, setContacts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // New state variables for handling messages
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);
  const [draftedMessage, setDraftedMessage] = useState('');
  const [currentContact, setCurrentContact] = useState(null);

  const openModal = () => {
    setIsOpen(true);
    setNewContactName('');
    setNewContactEmail('');
    setNewContactImage('');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openMessageModal = (contact) => {
    setCurrentContact(contact);
    setMessageModalOpen(true);
  };

  const closeMessageModal = () => {
    setMessageModalOpen(false);
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

  const handleSendMessage = () => {
    if (currentContact) {
      // For now, let's just add the drafted message to Notifications
      console.log('Sending Message:', draftedMessage);

      // Close the message modal after sending the message
      closeMessageModal();

      // Update drafted messages in the parent component
      updateDraftedMessages({
        contact: currentContact,
        message: draftedMessage,
      });

      // Clear drafted message state
      setDraftedMessage('');
    }
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

      {/* Modal for sending a new message */}
      <Modal
        isOpen={isMessageModalOpen}
        onRequestClose={closeMessageModal}
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
          <button className='modal-close-btn' onClick={closeMessageModal}>
            Close
          </button>

          {/* Form for sending a new message */}
          <form>
          <div>
              <h2>Send Message</h2>
              <textarea
                name='message'
                value={draftedMessage}
                onChange={(e) => setDraftedMessage(e.target.value)}
                placeholder='Type your message...'
              />
            </div>
            <button type='button' onClick={handleSendMessage}>
              Send Message
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
            <button onClick={() => openMessageModal(contact)}>Msg</button>
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



