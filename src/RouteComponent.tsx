import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InsideApp from './InsideApp';
import LandingPage from './component/LandingPage';
const RouteComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage />}/>
    <Route path='/home' element={<InsideApp />}/>
    </Routes>
  </BrowserRouter>




  )
}

export default RouteComponent