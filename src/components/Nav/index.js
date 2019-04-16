import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Nav = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Holby Training Solutions
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Container>
    </Menu>
  );
};

export default Nav;
