import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </>
);

export default App;
