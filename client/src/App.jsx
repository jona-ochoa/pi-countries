// import Logo from "../../countries.png";
import { useState } from 'react'
import "./App.css";
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

import axios from 'axios'


function App() {
  const location = useLocation();
  const [countries, setCountries] = useState([]);

  async function onSearch(name) {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries${name}`
      );

      if (data.name) {
        const countriesExists = countries.find(
          (countries) => countries.id === data.id
        );
        if (!countriesExists) {
          setCountries((oldChars) => [...oldChars, data]);
        } else {
          alert("¡Ya existe un personaje con este ID!");
        }
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  }

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>        
        <Route path='/'  element={ <Landing /> } />
        <Route path='/home' element={<Home onSearch={onSearch} />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/login' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
