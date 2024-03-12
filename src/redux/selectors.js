import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts;

export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowercasedFilter) || contact.phone.includes(filter)
    );
  }
);
