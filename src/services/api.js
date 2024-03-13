import axios from 'axios';

axios.defaults.baseURL = 'https://6107e5a0d73c6400170d3701.mockapi.io/api/pics';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async (contact) => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`);
};
