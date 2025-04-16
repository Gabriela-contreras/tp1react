import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Agregar from './pages/Agregar/Agregar';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Agregar' element={<Agregar/>}></Route>
      </Routes>      
    </main>
  );
}

export default App;
