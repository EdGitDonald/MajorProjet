// DraftedMessagesContext.js
import React, { createContext, useContext, useState } from 'react';

const DraftedMessagesContext = createContext();

export const useDraftedMessages = () => useContext(DraftedMessagesContext);

export const DraftedMessagesProvider = ({ children }) => {
  const [draftedMessages, setDraftedMessages] = useState([]);

  return (
    <DraftedMessagesContext.Provider value={{ draftedMessages, setDraftedMessages }}>
      {children}
    </DraftedMessagesContext.Provider>
  );
};
