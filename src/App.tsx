import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Main from './Pages/Main';
import NoPage from './Pages/NoPage';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <Navigation />
            <Main />
          </>
          }>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<NoPage />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
 /*<Login/>*/);
}

export default App;
