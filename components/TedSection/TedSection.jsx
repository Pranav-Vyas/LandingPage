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

  // const opts = {
  //   height: "419",
  //   width: "696",
  // };

  // const opts2 = {
  //   height: '213',
  //   width: '343'
  // }

  // const opts3 = {
  //   height: '200',
  //   width: '300'
  // }

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
            {/* <img className={styles.tedImage} src="/images/VideoSection.svg" alt="" /> */}
            {/* <ReactPlayer url='https://youtu.be/HHwXlcHcTHc' /> */}
            {/* {isLargeScreen && <YouTube opts={opts} videoId="sTnm5jvjgjM" />}
            {isTabScreen && <YouTube opts2={opts2} videoId="sTnm5jvjgjM" />} */}
            {/* {isSmallScreen && <YouTube opts3={opts3} videoId="sTnm5jvjgjM" />} */}
            {/* <YouTube className={styles.video} videoId="sTnm5jvjgjM" /> */}
            <YouTube opts={opts4} className={styles.video} videoId="sTnm5jvjgjM" />
        </div>
    </div>
  )
}

export default TedSection