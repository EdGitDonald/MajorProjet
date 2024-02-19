// ContactModal.js
import React from 'react';
import Modal from 'react-modal';

function ContactModal({
  isOpen,
  closeModal,
  newContactName,
  newContactEmail,
  newContactImage,
  setNewContactName,
  setNewContactEmail,
  setNewContactImage,
  handleAddContact,
}) {
  return (
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
  );
}

export default ContactModal;