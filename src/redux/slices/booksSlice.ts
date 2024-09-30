import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../../types/Book';

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [
    { id: '1', title: 'Book One', author: 'Author One', description: 'This is Book One.' },
    { id: '2', title: 'Book Two', author: 'Author Two', description: 'This is Book Two.' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
