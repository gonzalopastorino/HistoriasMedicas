import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../components/login.jsx';
import Registrarse from '../components/Registrarse.jsx';
import Bienvenida from '../components/Bienvenida.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Registrarse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
      </Routes>
    </Router>
  </StrictMode>
);

