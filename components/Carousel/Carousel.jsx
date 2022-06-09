import React from "react";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import SwiperV1 from '../Swiper/SwiperV1'
import SwiperV2 from "../SwiperV2/SwiperV2";

function Carousel() {

  const data = [
    {
      text: "Every child is an artist. The problem is how to remain an artist once he grows up.",
      name: "Pablo Picasso"
    },
    {
      text: 'Play is the royal road to childhood happiness and adult brilliance.',
      name: 'Joseph Chiltern Pearce, author specialized in human and child development'
    },
    {
      text: 'It is paradoxical that many educators and parents still differentiate between a time for learning and a time for play.',
      name: 'Leo F. Buscaglia, author and professor'
    },
    {
      text: 'The creation of something new is not accomplished by the intellect but by the play instinct.',
      name: 'Carl Jung, psychiatrist'
    },
    {
      text: 'When children pretend, they’re using their imaginations to move beyond the bounds of reality. A stick can be a magic wand. A sock can be a puppet. A small child can be a superhero',
      name: 'Fred Rogers'
    }
  ]

  const _renderCards = ({ text, name }, idx) => {
    if (!text) return null;
    return <Card key={idx} text={text} name={name} />;
  };

  return (
    <div className={styles.wrapper}>

      <SwiperV2 data={data} renderSwiperSlide={_renderCards}/>
    </div>
  );
    // <div className={styles.wrapper}>
      // <div className={styles.container}>
        // <SwiperV2 data={data}/>
      // {/* </div> */}
      {/* <div className={styles.container}>
        <Card
          text="Every child is an artist. The problem is how to remain an artist once he grows up."
          name="Pablo Picasso"
        />
        <Card
          text="Play is the royal road to childhood happiness and adult brilliance."
          name="Joseph Chiltern Pearce, author specialized in human and child development"
        />
        <Card
          text="It is paradoxical that many educators and parents still differentiate between a time for learning and a time for play."
          name="Leo F. Buscaglia, author and professor"
        />
      </div> */}
    // </div>
  // );
}

export default Carousel;
