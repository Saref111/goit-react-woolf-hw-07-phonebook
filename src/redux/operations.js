import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts } from '../services/api';

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

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const newContact = await fetchContacts(contact);
      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
