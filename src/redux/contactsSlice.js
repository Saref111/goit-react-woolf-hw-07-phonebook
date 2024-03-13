import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAsync,
  addContactAsync,
  deleteContactAsync,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactAsync.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContactAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactAsync.pending, (state, _action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContactAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
