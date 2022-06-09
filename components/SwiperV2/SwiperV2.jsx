import React, { useMemo } from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@material-ui/core";
// import SwiperCore from 'swiper/core';
import SwiperCore, { Pagination } from "swiper/core";
import Card from "../Card/Card";
import styles from "./SwiperV2.module.css";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CarouselActions from "../CarouselActions/CarouselActions";

SwiperCore.use([Pagination]);

const settings = {
  // autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
};

function SwiperV2({ data, renderSwiperSlide }) {
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentIndex, updateCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const isSmallScreen = useMediaQuery('(max-width:650px)');
  const isTabScreen = useMediaQuery('(max-width:950px)');

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
      console.log('snap grid: ',swiperInstance.snapGrid.length);
      setTotalSlides(
        swiperInstance.snapGrid.length === 1
          ? 0
          : swiperInstance.snapGrid.length
      );

      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex, swiperRef]);

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

  if (isSmallScreen) {
    return (
        <>
          <Swiper
            className={styles.wrapper}
            spaceBetween={20}
            slidesPerView={1}
            ref={swiperRef}
            {...settings}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {data.map((quote, idx) => {
              return (
                <SwiperSlide key={idx} className={styles.slide}>
                  <Card text={quote.text} name={quote.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <CarouselActions
            hide={false}
            fullHide={totalSlides === 0 ? true : false}
            // fullHide={true}
            goNext={goNext}
            goPrev={goPrev}
            totalSlides={5}
            activeIndex={currentIndex}
            paginationStyle={{ margin: "14px" }}
          />
        </>

        
    );
  }

  if (isTabScreen) {
    return (
      <>
      <Swiper
        className={styles.wrapper}
        spaceBetween={20}
        slidesPerView={2}
        ref={swiperRef}
        {...settings}
      >
        {data.map((quote, idx) => {
          return (
            <SwiperSlide key={idx} className={styles.slide}>
              <Card text={quote.text} name={quote.name} />
              {/* {swiperSlides} */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CarouselActions
        hide={false}
        fullHide={totalSlides === 0 ? true : false}
        // fullHide={true}
        goNext={goNext}
        goPrev={goPrev}
        totalSlides={4}
        activeIndex={currentIndex}
        paginationStyle={{ margin: "14px" }}
      />
    </>
    );
  }

  return (
    // <div classname={styles.container}>
    <>
      <Swiper
        className={styles.wrapper}
        spaceBetween={20}
        slidesPerView={3}
        ref={swiperRef}
        {...settings}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((quote, idx) => {
          return (
            <SwiperSlide key={idx} className={styles.slide}>
              <Card text={quote.text} name={quote.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <CarouselActions
        hide={false}
        fullHide={totalSlides === 0 ? true : false}
        // fullHide={true}
        goNext={goNext}
        goPrev={goPrev}
        totalSlides={3}
        activeIndex={currentIndex}
        paginationStyle={{ margin: "14px" }}
      />
    </>
  );
}

export default SwiperV2;
