// import styles from '../styles/Home.module.css'
import LandingPage from "../components/LandingPage/LandingPage";
import Head from "next/head";
import { Fragment } from "react";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TedSection from "../components/TedSection/TedSection";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      {/* // <div className={styles.fragment}> */}
      <Head>
        <title>Puddle</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Playfair+Display:wght@600&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />
      {/* <img src="/images/BannerDesktop.svg" alt="" /> */}
      <HeroSection />
      <Carousel />
      <TedSection />
      <Footer />
      {/* </div> */}
    </Fragment>
  );
}
