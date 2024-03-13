import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact, fetchContactsAsync } from '../../redux/contactsSlice';

import css from './Contacts.module.scss';

const Contacts = () => {
  const { items, loading, error } = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.list}>
      {items.map((contact) => (
        <li key={contact.id} className={css.item}>
          <span className={css.name}>
            {contact.name}: {contact.phone}
          </span>
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Contacts);
