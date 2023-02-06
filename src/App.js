import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from './redux/crypto/CryptoData';
import Main from './pages/Main';
import Chart from './pages/Chart';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id/" element={<Chart />} />
      </Routes>
    </>
  );
};

export default App;
