import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomeStore from '../components/pages/Store/Home'

//
import LayoutStore from '../components/templates/LayoutStore';

//
import '../styles/global.scss'

const App = () => {
  return (
    <>
      <LayoutStore>
        <HomeStore />
      </LayoutStore>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/store">
            <LayoutStore>
              <Route index element={<HomeStore />} />
            </LayoutStore>
          </Route>

          <Route path="/" element={<HomeStore />} />
        </Routes>
  </BrowserRouter>*/}
    </>
  )
}

export default App