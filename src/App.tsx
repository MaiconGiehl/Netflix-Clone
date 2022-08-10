import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Login/Home';
import Catalog from './pages/Catalog/Catalog';
import Movie from './pages/Movie/Movie';
import UserChoose from './pages/UserChoose/UserChoose';

function App() {

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="userChoose" element={<UserChoose />} />
          <Route path="catalogo" element={<Catalog />} />
          <Route path="filme/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
