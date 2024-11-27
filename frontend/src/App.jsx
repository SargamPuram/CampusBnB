import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Navbar from './components/Navbar'
import PrivateRoute from './util/PrivateRoute'
import Catalogue from './components/Catalogue'
import SignupPage from './pages/SignUpPage'

function App() {

  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<HomePage />} exact/>
        <Route path = '/login' element={<LoginPage />} />
        <Route path = '/signup' element={<SignupPage />} />
        <Route path = '/home' element={<Catalogue />} />
      </Routes>
      </BrowserRouter>
    
  
  )
}

export default App
