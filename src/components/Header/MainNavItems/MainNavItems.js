import { Anchor, Box, Button, Menu } from 'grommet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const CustomAnchor = styled(Anchor)`
  text-decoration: none;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  :hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 500;
  }
`;

const CustomMenu = styled(Menu)`
  text-decoration: none;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  :hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 500;
  }
`;

const LoginButton = styled(Button)`
  background-color: rgba(228, 43, 25, 0.8);
  color: white;
  font-weight: 600;
  :hover {
    background-color: white;
    color: rgba(228, 43, 25, 0.8);
    border: 10px;
  }
`;

const RegisterButton = styled(Button)`
  font-weight: 600;
  :hover {
    background-color: rgba(228, 43, 25, 0.8);
    color: white;
  }
`;

class MainNavItems extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  nextPath(path) {
    const { history } = this.props;
    history.push(path);
  }

  render() {
    return (
      <Box
        gridArea="nav"
        background="rgba(236, 240, 241, 0.3)"
        direction="row"
        justify="evenly"
        align="center"
        border={{
          color: 'fadeGreen',
          size: 'medium',
          style: 'solid',
          side: 'bottom',
        }}
      >
        <CustomLink to="/about/">
          <CustomAnchor primary label="About Us" margin={{ horizontal: 'medium' }} />
        </CustomLink>

        <CustomMenu
          color="brand"
          dropBackground={{ color: 'fadeGreen', opacity: 'weak' }}
          label="Products"
          items={[
            { label: 'Individual Solutions', onClick: () => {} },
            { label: 'Organizational Solutions', onClick: () => {} },
          ]}
        />
        <CustomMenu
          color="brand"
          dropBackground={{ color: 'fadeGreen', opacity: 'weak' }}
          label="Services"
          items={[
            { label: 'Consultancy', onClick: () => {} },
            { label: 'Executive Coaching', onClick: () => {} },
          ]}
        />
        <CustomLink to="/portfolio/">
          <CustomAnchor primary label="Portfolio" margin={{ horizontal: 'medium' }} />
        </CustomLink>
        <CustomLink to="/blog/">
          <CustomAnchor primary label="Blog" margin={{ horizontal: 'medium' }} />
        </CustomLink>
        <CustomLink to="/store/">
          <CustomAnchor primary label="Store" margin={{ horizontal: 'medium' }} />
        </CustomLink>
        <Box direction="row" gap="medium">
          <LoginButton label="Login" onClick={() => this.nextPath('/Login')} />
          <RegisterButton label="Register" onClick={() => {}} />
        </Box>
      </Box>
    );
  }
}

export default withRouter(MainNavItems);
