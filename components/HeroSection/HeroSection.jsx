import React from "react";
import styles from './HeroSection.module.css'
import { useMediaQuery } from '@material-ui/core';

function HeroSection() {
  const isSmallScreen = useMediaQuery('(max-width:580px)');

  if (isSmallScreen) {
    return (
      <div className={styles.mobileWrapper}>
      <img className={styles.banner} src="/images/mobileBanner.svg" alt="" /> 
    </div>
    )
  }
  return (
    <div className={styles.wrapper}>
      {/* <img src="/images/Banner2.svg" alt="" /> */}
      <img className={styles.banner} src="/images/BannerDesktop.svg" alt="" />
    </div>
  );
}

export default HeroSection;
