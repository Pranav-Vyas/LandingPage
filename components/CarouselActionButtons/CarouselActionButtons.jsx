import clsx from 'clsx';
import { Fab, Hidden } from '@material-ui/core';

import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

import styles from './CarouselActionButtons.module.css';

export default function CarouselActionButtons({
  children,
  onClickPrev,
  onClickNext,
  disableNext,
  disablePrev,
  hide=true
}) {
  return (
    <div className={styles.root}>
      <Hidden smDown={hide}>
        <Fab
          aria-label="left-nav"
          className={clsx(styles.btn, styles.leftBtn)}
          onClick={onClickPrev}
          disabled={disablePrev}>
          <NavigateBefore color="primary" fontSize="large" />
        </Fab>
      </Hidden>
      {children}
      <Hidden smDown={hide}>
        <Fab
          aria-label="right-nav"
          className={clsx(styles.btn, styles.rightBtn)}
          onClick={onClickNext}
          disabled={disableNext}>
          <NavigateNext color="primary" fontSize="large" />
        </Fab>
      </Hidden>
    </div>
  );
}
