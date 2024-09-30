import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import booksReducer from './slices/booksSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
