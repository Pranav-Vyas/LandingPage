import React from 'react';
import clsx from 'clsx';

import styles from './CarouselPagination.module.css';

const CarouselPagination = ({ totalSlides, activeIndex, paginationStyle, onClick }) => {
  let dots = [];

  const _onClickHandler = (e, idx) => {
    e.preventDefault();

    onClick ? onClick(idx) : null;
  };

  const ActiveDot = <a className={clsx(styles.dot, styles.active)} />;
  const Dot = <a className={clsx(styles.dot, styles.inactive)} />;
  for (let i = 0; i < totalSlides; i++) {
    dots.push(
      i === activeIndex
        ? React.cloneElement(ActiveDot, { key: i, onClick: (e) => _onClickHandler(e, i) })
        : React.cloneElement(Dot, { key: i, onClick: (e) => _onClickHandler(e, i) }),
    );
  }

  return (
    <div className={clsx(styles.pagination)} style={paginationStyle}>
      {dots}
    </div>
  );
};

export default CarouselPagination;
