import React from 'react';

import {
  Row
} from '../ComponentLibrary/Layout';
import {
  NavWrapper,
  NavItem,
  EmailWrapper
} from './Navbar.styles';
import {
  Icon
} from '../ComponentLibrary/Assets';

import {
  linkedin_logo,
  mail_logo,
  github_logo
} from '../../assets/images';

const Navbar = (props) => {

  const handleWebsites = (link) => {
    if(link === 'linkedin') {
      window.location.href = 'https://www.linkedin.com/in/jonathan-yates-297130195/'
    } else {
      window.location.href = 'https://github.com/Carlock1609'
    }
  };

  return (
    <NavWrapper>
      <Row>
        <NavItem
          onClick={(e) => handleWebsites('linkedin')} 
        >
          <Icon
            size={25}
            src={linkedin_logo}
            alt="linkedin logo"
          />
        </NavItem>
        <NavItem
          onClick={(e) => handleWebsites('github')}
        >
          <Icon
            size={25}
            src={github_logo}
            indentLeft={25} 
            alt="github logo"
          />
        </NavItem>
        <EmailWrapper href="mailto:carlock1609@gmail.com?subject=Hello Jonanthan!">
          <NavItem
            // onClick={(e) => alert('email clicked')}
          >
            <Icon
              size={25}
              indentLeft={25}
              src={mail_logo}
              alt="email logo"
            />
          </NavItem>
        </EmailWrapper>
        <NavItem
            onClick={(e) => alert('resume clicked')}
          >
            <Icon
              size={25}
              indentLeft={25}
              src={mail_logo}
              alt="resume logo"
            />
          </NavItem>
      </Row>
    </NavWrapper>
  );
};

export default Navbar;