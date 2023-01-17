import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

// Pages
import router from '../routes/router'

//
import '../styles/global.scss'

const App = () => {
  return (
    <>
      <RouterProvider router={router}/ >
    </>
  )
}

export default App