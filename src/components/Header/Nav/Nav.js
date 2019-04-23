import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopNavItems = styled.div`
  grid-area: top;
  background-color: yellow;
`;

const LogoWrapper = styled.div`
  grid-area: logo;
`;

const NavWrapper = styled.nav`
  grid-area: nav;
`;

const SignupLogin = styled.div`
  grid-area: signup-login;
`;

const Nav = () => {
  return (
    <>
      <TopNavItems>
        <h6>Some stuff</h6>
      </TopNavItems>
      <LogoWrapper>
        <h1>Holby Invest</h1>
      </LogoWrapper>
      <NavWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About Us</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
        </ul>
      </NavWrapper>
      <SignupLogin>Login/signup</SignupLogin>
    </>
  );
};

export default Nav;
