import React from 'react'

import Header from '../../organisms/Header'

import './LayoutStore.scss'

const LayoutStore = ({ children }) => {
  return (
    <div className="layoutStore">
        <Header />
        <div className="main_wrapper">
          {children}
        </div>
    </div>
  )
}

export default LayoutStore