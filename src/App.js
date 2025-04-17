import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Agregar from './Pages/Agregar/Agregar';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import Buscar from './Pages/Buscar/Buscar';

function App() {
  return (
    <main className="main">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Agregar' element={<Agregar/>}></Route>
        <Route path='/Buscar' element={<Buscar/>}></Route>
      </Routes>      
    </main>
  );
}

export default App;
