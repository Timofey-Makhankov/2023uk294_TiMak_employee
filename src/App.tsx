import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register'
import Main from './Components/Pages/Main';
import NoPage from './Components/Pages/NoPage';
import Navigation from './Components/Navigation';
import EditEmployee from './Components/Pages/EditEmployee';

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
      <Route path='/employee/:id' element={<EditEmployee />} />
      <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;
