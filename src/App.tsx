import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Main from './Pages/Main';
import NoPage from './Pages/NoPage';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Navigation />
          <Main />
        </>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;
