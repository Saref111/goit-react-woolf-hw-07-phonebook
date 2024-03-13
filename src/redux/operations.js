import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteContact } from '../services/api';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const newContact = await addNewContact(contact);
      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
