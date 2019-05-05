import { Box, Image } from 'grommet';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../../assets/images/logo.png';

const LogoLink = styled(Link)`
  height: 100%;
`;

const LogoWrapper = styled(Image)`
  height: 100%;
  display: block;
  margin: auto auto;
`;

const LogoItems = () => (
  <Box
    gridArea="logo"
    border={{
      color: 'fadeGreen',
      size: 'medium',
      style: 'solid',
      side: 'bottom',
    }}
  >
    <LogoLink to="/">
      <LogoWrapper src={LogoImage} />
    </LogoLink>
  </Box>
);

export default LogoItems;
