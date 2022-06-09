import React from 'react';
import styles from './Card.module.css'
import Image from 'next/image';

function Card({text, name}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.icon}>
            <Image className={styles.image} src="/images/Quote.png" width={100} height={70} alt="" />
            {/* <img className={styles.image} src="images/Quote.png" alt="" /> */}
        </div>
        <div className={styles.footer}>

        <div className={styles.quote}>
            <h2 className={styles.text}>{text}</h2>
        </div>
        <div className={styles.credit}>
            <h3 className={styles.name}>{name}</h3>
        </div>
        </div>
    </div>
  )
}

export default Card