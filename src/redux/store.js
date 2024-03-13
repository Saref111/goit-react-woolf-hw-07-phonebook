import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

let store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
