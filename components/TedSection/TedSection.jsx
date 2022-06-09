import React from 'react';
import styles from './TedSection.module.css';
import ReactPlayer from 'react-player/youtube'
import YouTube from "react-youtube";
import { useMediaQuery } from "@material-ui/core";

function TedSection() {

  const smallStart = useMediaQuery('(min-width:320px)');
  const smallEnd = useMediaQuery('(max-width:500px)');
  const isTabScreen = useMediaQuery('(max-width:768px)');
  const isLargeScreen = useMediaQuery('(min-width:1000px');

  const opts4 = {
    width: '100%',
    height: '100%'
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <img className={styles.tedImage} src="/images/Header.svg" alt="" />
        </div>
        <div className={styles.videoContainer}>
            
            <YouTube opts={opts4} className={styles.video} videoId="HHwXlcHcTHc" />
        </div>
    </div>
  )
}

export default TedSection