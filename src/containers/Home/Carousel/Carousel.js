import { Box, Button, Carousel, Grid, Image, Paragraph, Tab, Tabs, Text } from 'grommet';
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

const ActionButtonBox = styled(Box)`
  background-color: rgba(17, 119, 85, 0.1);
`;

const ActionButton = styled(Button)`
  margin: auto;
  padding: 10px;
  color: rgba(236, 240, 241, 1);
  width: 20%;
  height: 40%;
  background-color: rgba(17, 119, 85, 1);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  letter-spacing: 1px;
  font-weight: 800;
  font-size: 20px;
  :hover {
    box-shadow: none;
    border: none;
    opacity: 0.6;
  }
`;

const CarouselWrapper = () => (
  <>
    <Box height="650px" alignContent="stretch" animation="fadeIn">
      <Carousel fill play={5000}>
        <CarouselImage src={ImageOne} />
        <CarouselImage src={ImageTwo} />
        <CarouselImage src={ImageThree} />
        <CarouselImage src={ImageFour} />
        <CarouselImage src={ImageFive} />
      </Carousel>
    </Box>
    <ActionButtonBox height="small">
      <ActionButton label="Apply Now" onClick={() => {}} />
    </ActionButtonBox>
    <Grid
      rows={['small', 'small']}
      columns={['50%', '50%']}
      gap="small"
      areas={[
        { name: 'aboutHolby', start: [0, 0], end: [0, 1] },
        { name: 'video', start: [1, 0], end: [1, 1] },
      ]}
    >
      <Box gridArea="video" background="fadeGreen">
        <Text margin="medium" size="large" weight="bold" color="rgba(44, 62, 80,1.0)">
          About Holby
        </Text>
        <Paragraph margin="medium" size="medium" color="rgba(44, 62, 80,1.0)">
          Holby training solutions was incorporated in 2014 and is made up of a team of highly
          experienced experts in areas of management, leadership and cooperate and public
          governance. Holby training solutions consists of multidisciplinary experts and
          facilitators who provide multiple services, that balance the dual purpose of developing
          thought leadership in this niche with expertise and knowledge in leadership, management
          and governance among others.
        </Paragraph>
      </Box>
      <Box gridArea="aboutHolby" background="light-5">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/nM61s2aZZJE"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </Grid>

    <Box
      align="start"
      animation="fadeIn"
      border={{
        color: 'fadeGreen',
        size: 'medium',
        side: 'top',
      }}
    >
      <Text
        margin={{
          top: 'xlarge',
          bottom: 'small',
        }}
        size="xxlarge"
        weight="bold"
        color="rgba(44, 62, 80,1.0)"
      >
        Courses
      </Text>
      <Tabs>
        <Tab title="Bronze Level">
          <Box pad="xxlarge" />
        </Tab>
        <Tab title="Silver Level">
          <Box pad="xxlarge">Silver</Box>
        </Tab>
        <Tab title="Gold Level">
          <Box pad="xxlarge">Gold</Box>
        </Tab>
      </Tabs>
    </Box>
  </>
);

export default CarouselWrapper;
