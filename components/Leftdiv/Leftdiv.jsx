import React from 'react'
import styles from './Leftdiv.module.css'

function Leftdiv() {
  return (
    <div className={styles.wrapper}>
        <div>
            <img className={styles.heart} src="/images/Vector.png" alt="" />
        </div>
        <div className={styles.heading}>
            <h1 className={styles.headingText}>Building something you will love️</h1>
        </div>
        <div className={styles.subHeading}>
            <h2 className={styles.text}>COMING SOON...</h2>
        </div>
    </div>
  )
}

export default Leftdiv