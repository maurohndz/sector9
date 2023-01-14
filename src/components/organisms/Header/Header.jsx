import React from 'react'

// Components
import Image from '../../atoms/Image'

// Assets
import assets from '../../../store/app-assets'

// Styles
import styles from './header.module.scss'

const Header = () => {
  let { logo } = assets

  return (
    <header className={styles.header}>
      <div className={`main_wrapper ${styles.wrapper}`}>
        <div className={styles.image}>
          <Image src={logo.big} alt="Logo - Sector9" />
        </div>

        <>Manu</>
      </div>
    </header>
  )
}

export default Header