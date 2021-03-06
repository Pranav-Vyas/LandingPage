import React from 'react'
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TedSection from '../TedSection/TedSection'
import styles from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar/>
      
      <img src="/images/BannerDesktop.svg" alt="" />
      {/* <img src="/images/wave.svg" alt="" /> */}

{/*       
      <svg
        width="1644"
        height="181"
        viewBox="0 0 1644 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_808_60)">
          <path
            d="M74.9594 1.97581C149.216 -8.68595 170.959 38.9758 263.459 38.9758C355.959 38.9758 351.459 1.97581 448.459 1.97581C545.459 1.97581 547.959 38.9758 631.459 38.9758C714.959 38.9758 734.459 1.97581 819.459 1.97581C904.459 1.97581 919.959 38.9758 1007.46 38.9758C1094.96 38.9758 1104.96 1.97581 1193.96 1.97581C1282.96 1.97581 1294.96 38.9759 1379.96 38.9758C1464.96 38.9757 1498.43 -10.3438 1574.96 1.97581C1797.04 37.7281 1574.96 577.976 1574.96 577.976H74.9594C74.9594 577.976 -147.699 33.9449 74.9594 1.97581Z"
            fill="#FAFAFA"
          />
        </g>
        <defs>
          <clipPath id="clip0_808_60">
            <rect width="1644" height="181" fill="white" />
          </clipPath>
        </defs>
      </svg> */}
      <Carousel/>
      <TedSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage