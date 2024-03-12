import React from 'react';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phone Book</h1>
      <PhoneBook />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};

export default App;
