import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage/LandingPage'
import { Fragment } from 'react';
import Carousel from '../components/Carousel/Carousel'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import TedSection from '../components/TedSection/TedSection'
import HeroSection from '../components/HeroSection/HeroSection';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Fragment>
    {/* // <div className={styles.fragment}> */}

      <Navbar/>
      {/* <img src="/images/BannerDesktop.svg" alt="" /> */}
      <HeroSection/>
      <Carousel/>
      <TedSection/>
      <Footer/>
    {/* </div> */}
    </Fragment>

      
    
  )
}
