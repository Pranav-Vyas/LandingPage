import React, { useMemo } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@material-ui/core';
import SwiperCore, { Pagination } from 'swiper/core';
import styles from './SwiperV1.module.css'

SwiperCore.use([Pagination]);

const settings = {
  // autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

function SwiperV1({ data, renderSwiperSlide }) {
  const swiperRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:480px)');

  const [totalSlides, setTotalSlides] = useState(0);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const swiperSlides = useMemo(() => {
    if (!isSmallScreen) {
      return data
        .reduce((accumulatedData, currentData) => {
          const lastPushedChildIdx = accumulatedData.length - 1;
          if (
            lastPushedChildIdx > -1 &&
            accumulatedData[lastPushedChildIdx] &&
            accumulatedData[lastPushedChildIdx].length < 2
          ) {
            accumulatedData[lastPushedChildIdx].push(currentData);
          } else {
            accumulatedData.push([currentData]);
          }
          return accumulatedData;
        }, [])
        .map((slide, idx) => {
          return (
            <SwiperSlide key={`${idx}`} style={{ display: 'flex' }}>
              {slide.map((slideData, idx) => renderSwiperSlide(slideData, idx))}
            </SwiperSlide>
          );
        });
    }
  }, [data, isSmallScreen]);

  const updateIndex = useCallback(() => {
    updateCurrentIndex(swiperRef.current.swiper.realIndex);
  }, []);

  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance) {
      setTotalSlides(swiperInstance.snapGrid.length === 1 ? 0 : swiperInstance.snapGrid.length);

      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex, swiperRef]);

  if (isSmallScreen) {
    return (
      <div className={styles.container}>
        <Swiper spaceBetween={20} slidesPerView={1.2}>
          {data.map((slideData, idx) => {
            return <SwiperSlide key={idx}>{renderSwiperSlide(slideData, idx)}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Swiper {...settings} spaceBetween={20} pagination={true} ref={swiperRef} slidesPerView={1}>
        {swiperSlides}
      </Swiper>
      {/* <CarouselActions
        hide={false}
        fullHide={totalSlides === 0 ? true : false}
        goNext={goNext}
        goPrev={goPrev}
        totalSlides={totalSlides}
        activeIndex={currentIndex}
        paginationStyle={{ margin: '14px' }}
      /> */}
    </div>
  );
}

export default SwiperV1;


// import Head from 'next/head'
// import Image from 'next/image'
// import LandingPage from '../components/LandingPage/LandingPage'
// import styles from '../styles/Home.module.css'


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <LandingPage/>
//     </div>
//   )
// }
