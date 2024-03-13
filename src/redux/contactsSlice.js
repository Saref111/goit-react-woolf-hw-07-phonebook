import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsAsync } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
