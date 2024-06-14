import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import News from './News';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<News />} />
    </Routes>
  );
}
