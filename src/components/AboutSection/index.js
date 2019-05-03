import React from 'react';
import styled from 'styled-components';

const AboutSectionContainer = styled.div`
  display: block;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Poiret One', cursive;
`;

const VideoRightDiv = styled.div`
  background-color: #ffffff;
`;

const AboutLeftDiv = styled.div`
  background-color: #02537f;
  text-align: center;
`;

const Heading = styled.div`
  position: relative;
  transform: translate(-50%, 0%);
  top: 100px;
  left: 50%;
  color: #ffffff;
  font-size: 30px;
  width: 200px;
  padding-bottom: 50px;
  border-bottom: 6px solid #ffffff;
`;

const Description = styled.div`
  position: relative;
  top: 130px;
  display: inline-block;
  position: relative;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  letter-spacing: 1px;
  line-height: 20pt;
`;

const AboutSection = () => (
  <AboutSectionContainer>
    <VideoRightDiv />
    <AboutLeftDiv>
      <Heading>About Holby</Heading>
      <Description>
        While it is possible to pass options to Prettier via your ESLint configuration file, it is
        not not recommended because editor extensions such as prettier-atom and prettier-vscode will
        read . prettierrc, but read settings from ESLint, which can lead to an inconsistent
        experience. Sit no possit omnesque, te usu tation discere maluisset. Sit no esse fabulas
        oportere, vel quod dicam splendide eu. Exerci signiferumque vel ut. Mei no alia molestie
        deserunt, aperiri maiestatis .
      </Description>
    </AboutLeftDiv>
  </AboutSectionContainer>
);

export default AboutSection;
