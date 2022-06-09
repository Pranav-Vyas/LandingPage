import React from 'react';
import styles from './Rectangle.module.css'

function Rectangle({color, num}) {
  return (
    <div className={styles.wrapper} style={{backgroundColor: color}}>
      <img className={styles.image} src={`/images/rec${num}.png`} alt="" />
    </div>
  )
}

export default Rectangle