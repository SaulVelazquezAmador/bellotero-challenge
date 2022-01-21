import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home'
import './index.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'

const App =(
  <BrowserRouter>
    <Routes>
      <Route exact path= "/home" element={<Home/>}/>
      <Route path= "/" element={<Navigate to="/home"/>}/>
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);