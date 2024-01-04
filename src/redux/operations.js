// Объяви следующие операции:
// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".

// з форми потрібно віддати об'єкт name та phone

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657d7992853beeefdb9ac8e8.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log('data get', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      console.log('data post', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
