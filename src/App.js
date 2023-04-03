import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
//import routes
import { Home } from './routes/Home';
import { Servicios } from './routes/Servicios';
import { Nosotros } from './routes/Nosotros';
import { Contacto } from './routes/Contacto';
//

function App() {

  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/servicios" element={<Servicios />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>

        </Routes>

    </div>
  );
}

export default App;
