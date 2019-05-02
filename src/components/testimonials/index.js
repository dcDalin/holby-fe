import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 138, 128, 0.2),
    rgba(2, 136, 209, 0.2)
  );
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 30px;
`;

const TestimonialHeaderRow = styled.div`
  position: relative;
  font-size: 35px;
  height: 150px;
  grid-column-start: 1;
  grid-column-end: -1;
  padding-top: 30px;
`;
const TestimonialTitle = styled.div`
  position: relative;
  text-align: center;
  width: 200px;
  left: 50%;
  transform: translate(-50%, 0%);
  padding-bottom: 50px;
  color: #02537f;
  font-family: 'Poiret One', cursive;
  border-bottom: 5px solid #02537f;
`;

const TestimonialImage = styled.div`
  height: 120px;
  width: 120px;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 138, 128, 0.8),
    rgba(2, 136, 209, 0.8)
  );
  border-radius: 50%;
  position: relative;
  border: 1px solid #607d8b;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const TestimonialName = styled.div`
  position: relative;
  color: #455a64;
  width: 75px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
`;
const TestimonialOccupation = styled.div`
  position: relative;
  color: #607d8b;
  width: 75px;
  left: 50%;
  transform: translate(-50%, 0%);
  text-align: center;
`;

const TestimonialText = styled.div`
  position: relative;
  width: 100%;
  color: #02537f;
  text-align: center;
  padding: 40px;
`;
const Testimonial = styled.div`
  /* border: 5px solid #607d8b; */
  /* width: 20%; */
`;

const TestimonialSection = () => (
  <TestimonialsContainer>
    <TestimonialHeaderRow>
      <TestimonialTitle>Testimonials</TestimonialTitle>
    </TestimonialHeaderRow>
    <Testimonial>
      <TestimonialImage />
      <TestimonialName>John Doe</TestimonialName>
      <TestimonialOccupation>Undertaker</TestimonialOccupation>
      <TestimonialText>
        which can lead to an inconsistent experience. Sit no possit omnesque, te usu tation discere
        maluisset. Sit no esse fabulas oportere, vel quod dicam splendide eu. Exerci signiferumque
        vel ut. Mei no alia molestie
      </TestimonialText>
    </Testimonial>
    <Testimonial>
      <TestimonialImage />
      <TestimonialName>John Doe</TestimonialName>
      <TestimonialOccupation>Undertaker</TestimonialOccupation>
      <TestimonialText>
        which can lead to an inconsistent experience. Sit no possit omnesque, te usu tation discere
        maluisset. Sit no esse fabulas oportere, vel quod dicam splendide eu. Exerci signiferumque
        vel ut. Mei no alia molestie
      </TestimonialText>
    </Testimonial>
    <Testimonial>
      <TestimonialImage />
      <TestimonialName>John Doe</TestimonialName>
      <TestimonialOccupation>Undertaker</TestimonialOccupation>
      <TestimonialText>
        which can lead to an inconsistent experience. Sit no possit omnesque, te usu tation discere
        maluisset. Sit no esse fabulas oportere, vel quod dicam splendide eu. Exerci signiferumque
        vel ut. Mei no alia molestie
      </TestimonialText>
    </Testimonial>
    <Testimonial>
      <TestimonialImage />
      <TestimonialName>John Doe</TestimonialName>
      <TestimonialOccupation>Undertaker</TestimonialOccupation>
      <TestimonialText>
        which can lead to an inconsistent experience. Sit no possit omnesque, te usu tation discere
        maluisset. Sit no esse fabulas oportere, vel quod dicam splendide eu. Exerci signiferumque
        vel ut. Mei no alia molestie
      </TestimonialText>
    </Testimonial>
  </TestimonialsContainer>
);

export default TestimonialSection;
