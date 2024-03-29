import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContactAsync } from '../../redux/operations';

import css from './PhoneBook.module.scss';

const PhoneBook = () => {
  const items = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const isFormEmpty = () => {
    return !name || !number;
  };

  const isContactExist = (name) => {
    return items.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormEmpty()) {
      alert('All fields must be filled!');
      return;
    }
    if (isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
  
    dispatch(addContactAsync({ name, phone: number}));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Enter name:{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label className={css.label}>
        Enter phone number:{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default PhoneBook;
