import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <li>
      <Link to={`/book/${book.id}`}>{book.title}</Link>
    </li>
  );
};

export default BookItem;
