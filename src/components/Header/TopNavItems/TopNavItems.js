import { Anchor, Box, Text } from 'grommet';
import { Instagram, Mail, Phone, Twitter } from 'grommet-icons';
import React from 'react';

const TopNavItems = () => (
  <Box gridArea="top-nav-items" direction="row-reverse" align="center">
    <Box pad="small" direction="row">
      <Anchor href="#">
        <Instagram color="brand" size="medium" />
      </Anchor>
    </Box>
    <Box pad="small" direction="row">
      <Anchor href="#">
        <Twitter color="brand" size="medium" />
      </Anchor>
    </Box>
    <Box pad="small" direction="row">
      <Phone color="brand" size="medium" />
      <Text size="small" margin={{ horizontal: 'small' }}>
        +254783838838
      </Text>
    </Box>
    <Box pad="small" direction="row">
      <Mail color="brand" size="medium" />
      <Text size="small" margin={{ horizontal: 'small' }}>
        holby@gmail.com
      </Text>
    </Box>
  </Box>
);

export default TopNavItems;
