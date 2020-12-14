import React from 'react';
import history from '../../history';

import {
  Row,
  Column,
  Space
} from '../ComponentLibrary/Layout';
import {
  Text,
  Title
} from '../ComponentLibrary/Typography';
import {
  NavWrapper,
  NavItem
} from './Navbar.styles';

const Navbar = (props) => {

  return (
    <NavWrapper>
      <Row>
        <NavItem>
          <Text 
            onClick={(e) => history.push('/')}
            color="white"
          >
            Home
          </Text>
        </NavItem>
        <NavItem>
          <Text
            onClick={(e) => alert('contact clicked')}
            indentLeft={25} 
            color="white"
          >
            Contact
          </Text>
        </NavItem>
        <NavItem>
          <Text
            onClick={(e) => alert('Portfolio clicked')}
            indentLeft={25} 
            color="white"
          >
            Portfolio
          </Text>
        </NavItem>
      </Row>
    </NavWrapper>
  );
};

export default Navbar;