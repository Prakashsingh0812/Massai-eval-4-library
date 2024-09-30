import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { RootState } from '../redux/store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <BookList />
    </div>
  );
};

export default Dashboard;
