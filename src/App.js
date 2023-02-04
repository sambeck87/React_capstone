import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Chart from './pages/Chart';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="chart" element={<Chart />} />
    </Routes>
  </>
);

export default App;
