import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Navbar from './components/Navbar'

import Catalogue from './components/PhotoGallery'
import SignupPage from './pages/SignUpPage'
import PhotoUpload from './pages/PhotoUpload'
import PhotoGallery from './components/PhotoGallery'

function App() {

  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/' element={<HomePage />} exact/>
        <Route path = '/login' element={<LoginPage />} />
        <Route path = '/signup' element={<SignupPage />} />
        <Route path = '/gallery' element={<PhotoGallery />} />


        <Route path = '/photo-upload' element={<PhotoUpload />} />
      </Routes>
      </BrowserRouter>
    
  
  )
}

export default App
