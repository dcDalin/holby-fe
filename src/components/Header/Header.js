import { Grid } from 'grommet';
import React from 'react';
import LogoItems from './LogoItems';
import MainNavItems from './MainNavItems';
import TopNavItems from './TopNavItems';

const Header = () => (
  <Grid
    rows={['xxsmall', 'xsmall']}
    columns={['1/3', '2/3']}
    gap="none"
    areas={[
      { name: 'top-nav-items', start: [1, 0], end: [1, 0] },
      { name: 'logo', start: [0, 0], end: [0, 1] },
      { name: 'nav', start: [1, 1], end: [1, 1] },
    ]}
  >
    {/* Top Navigation Items e.g. Social Icons and shit */}
    <TopNavItems />

    {/* The Logo goes here */}
    <LogoItems />

    <MainNavItems />
  </Grid>
);

export default Header;
