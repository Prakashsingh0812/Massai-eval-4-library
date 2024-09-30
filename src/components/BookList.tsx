import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import { RootState } from '../redux/store';

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
