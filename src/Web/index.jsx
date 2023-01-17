import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'

const Web = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Web