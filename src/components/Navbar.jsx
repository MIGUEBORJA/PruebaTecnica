import React, { Fragment } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavbarStyle.css'; 
import { NavLink, Route, Routes } from 'react-router-dom';
import Movies from './Movies';
import Series from './Series';


function Navbar() {
  return (
    <Fragment>
      <nav className=''>
          <div className='nav-options'>
            <h1>DEMO Streaming</h1>
              <NavLink to="" >
              <span>Películas</span>
              </NavLink>
              <NavLink to="/Series">
              <span>Series</span>
              </NavLink>
              <NavLink to="">
              <span>Sesión</span>
              </NavLink>
          </div>
          <div className="input-group">
            <a href="" className='free'>PRUEBA</a>
            <input type="text" placeholder='Buscar' />
            <HiSearch fontSize={21} color='black' id='search' />
          </div>
      </nav>

      <Routes>
        <Route path='' element={<Movies/>} />
        <Route path='Series' element={<Series/>} />
      </Routes>
    </Fragment>
  )
}

export default Navbar
