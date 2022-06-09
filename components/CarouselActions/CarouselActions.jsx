import { Box } from '@material-ui/core';
import CarouselActionButtons from '../CarouselActionButtons/CarouselActionButtons';
import CarouselPagination from '../CarouselPagination/CarouselPagination';

export default function CarouselActions({ goNext, goPrev, activeIndex, totalSlides,hide=true,fullHide=false }) {
  return (
    <Box display="flex" width="100%" marginY="16px">
      {!fullHide && <CarouselActionButtons hide={hide} show onClickNext={goNext} onClickPrev={goPrev}>
        <CarouselPagination {...{ activeIndex, totalSlides }} />
      </CarouselActionButtons>}
      {
        fullHide && <CarouselPagination {...{ activeIndex, totalSlides }} />
      }
    </Box>
  );
}
