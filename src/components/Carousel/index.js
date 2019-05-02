import React from 'react';
import styled from 'styled-components';
import { AngleLeft } from 'styled-icons/fa-solid/AngleLeft';
import { AngleRight } from 'styled-icons/fa-solid/AngleRight';

const ImagesContainer = styled.div`
  display: block;
  height: 750px;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 138, 128, 0.8),
    rgba(2, 136, 209, 0.8)
  );
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  text-transform: uppercase;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  font-size: 15px;
  color: #02537f;
  letter-spacing: 3px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-weight: 400;
  transform: translate(-50%, -50%);
`;

const CarouselDirectionLeft = styled(AngleLeft)`
  position: absolute;
  z-index: 1;
  height: 80px;
  width: 80px;
  color: #ffffff;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
`;

const CarouselDirectionRight = styled(AngleRight)`
  position: absolute;
  z-index: 1;
  height: 80px;
  width: 80px;
  color: #ffffff;
  top: 50%;
  left: 90%;
  transform: translate(0, -50%);
`;

const Carousel = () => (
  <ImagesContainer>
    <Button>Apply</Button>
    <CarouselDirectionLeft />
    <CarouselDirectionRight />
  </ImagesContainer>
);

export default Carousel;
