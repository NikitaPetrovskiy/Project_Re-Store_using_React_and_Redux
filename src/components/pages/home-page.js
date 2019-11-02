import React from 'react';
import BookList from "../book-list";

const HomePage = () => {
  const testBooksData = [
    {id: 1, title: `You don't known JS`, author: `kyle simpson`},
    {id: 2, title: `React in action`, author: `Mark Tielens Thomas`},
  ];
  return (
      <BookList books={testBooksData} />
  );
};

export default HomePage;
