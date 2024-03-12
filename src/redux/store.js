import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: '__root__',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({ reducer: persistedReducer });
export let persistor = persistStore(store);

export default store;
