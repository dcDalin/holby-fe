import React from 'react';
import styled from 'styled-components';
import NavItems from '../NavItems';
import Auth from '../Auth';

const HeaderWrapper = styled.header`
  height: 100px;
  border-bottom: 2px solid #eaeaea;
`;
const CompanyLogo = styled.div`
  display: inline-block;
  position: relative;
  height: 55px;
  width: 55px;
  left: 1.5%;
  top: 20px;
  background-color: #ff8a80;
`;
const AppTitle = styled.div`
  display: inline-block;
  position: relative;
  left: 2%;
  color: #02537f;
  font-size: 30px;
  font-weight: 200;
  font-family: 'Poiret One', cursive;
  letter-spacing: 2px;
  text-shadow: 0.5px 0.5px #02537f;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <CompanyLogo />
      <AppTitle>Holby Training Solutions</AppTitle>
      <NavItems />
      <Auth />
    </HeaderWrapper>
  );
};

export default Header;
