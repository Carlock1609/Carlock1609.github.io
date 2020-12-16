import React from 'react';

import {
  Row,
  Column
} from '../ComponentLibrary/Layout';
import {
  Text
} from '../ComponentLibrary/Typography';
import {
  NavWrapper,
  NavItem,
  LinkWrapper
} from './Navbar.styles';
import {
  Icon
} from '../ComponentLibrary/Assets';

import {
  linkedin_logo,
  mail_logo,
  github_logo,
  resume_logo
} from '../../assets/images';
import {
  Jonathan_Yates_resume
} from '../../assets/resume';

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
        <LinkWrapper 
          href="mailto:carlock1609@gmail.com?subject=Hello Jonathan!"
        >
          <NavItem>
            <Icon
              size={25}
              indentLeft={25}
              src={mail_logo}
              alt="email logo"
            />
          </NavItem>
        </LinkWrapper>
        <LinkWrapper
          href={Jonathan_Yates_resume}
        >
          <NavItem>
            <Icon
              size={25}
              indentLeft={25}
              src={resume_logo}
              alt="resume logo"
            />
          </NavItem>
        </LinkWrapper>
      </Row>
    </NavWrapper>
  );
};

export default Navbar;