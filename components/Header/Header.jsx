import React from 'react';
import Leftdiv from '../Leftdiv/Leftdiv';
import Rightdiv from '../Rightdiv/Rightdiv';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.wrapper}>
        <Leftdiv/>
        <Rightdiv/>
    </div>
  )
}

export default Header