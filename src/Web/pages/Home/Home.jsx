import React from 'react'

import bg from '../../assets/static/bg-desktop.png'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>Home
    <img src={bg} alt="" /></div>
  )
}

export default Home