import { Box, Carousel, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';
import ImageOne from '../../../assets/images/slider/1.jpg';
import ImageTwo from '../../../assets/images/slider/2.jpg';
import ImageThree from '../../../assets/images/slider/3.jpg';
import ImageFour from '../../../assets/images/slider/4.jpg';
import ImageFive from '../../../assets/images/slider/5.jpg';

const CarouselImage = styled(Image)`
  object-fit: cover;
  height: 650px;
`;

const CarouselWrapper = () => (
  <Box height="650px" alignContent="stretch" animation="fadeIn">
    <Carousel fill play={5000}>
      <CarouselImage src={ImageOne} />
      <CarouselImage src={ImageTwo} />
      <CarouselImage src={ImageThree} />
      <CarouselImage src={ImageFour} />
      <CarouselImage src={ImageFive} />
    </Carousel>
  </Box>
);

export default CarouselWrapper;
