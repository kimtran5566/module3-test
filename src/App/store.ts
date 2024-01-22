import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './component/container/fetchDataProduct';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});