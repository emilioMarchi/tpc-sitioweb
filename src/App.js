import React from 'react';
import {Routes, Route } from 'react-router-dom';
//import routes
import { Home } from './routes/Home';
import { Servicios } from './routes/Servicios';
import { Nosotros } from './routes/Nosotros';
import { Contacto } from './routes/Contacto';
//
//Components
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
