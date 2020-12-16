import React from 'react';

import { 
  Text
} from '../../ComponentLibrary/Typography';
import {
  Row,
  Column,
  Space
} from '../../ComponentLibrary/Layout';
import {
  HorizontalHR,
  AboutItem
} from '../Home.styles';

const About = (props) => {

  return (
    <>
      <Row>
        <Column align="flex-start">
          <Text indentTop={5} indentBottom={7} weight="600" size={20} color="white">
            TECH STACK
          </Text>
        </Column>
      </Row>
      <Row>
        <Column align="center">
          <AboutItem>
            <Text indentTop={5} weight="500" size={20} color="white">
              Languages:
            </Text>
            <Text color="white">
              JavaScript, Node, Python
            </Text>
          </AboutItem>
        </Column>
        <Column align="center">
          <AboutItem>
            <Text indentTop={5} weight="500" size={20} color="white">
              Frameworks/Libraries:
            </Text>
            <Text color="white">
              React, Express, Django, HTML/CSS, Bootstrap, SASS, Styled-components
            </Text>
          </AboutItem>
        </Column>
        <Column align="center">
          <AboutItem>
            <Text weight="500" size={20} color="white">
              Others:
            </Text>
            <Text color="white">
              Figma, Postman, Problem-solving, Team-oriented, SCRUM, API's, Git/GitHub, Pair/Mob Coding, Stripe, AWS Services, Heroku, TDD
            </Text>
          </AboutItem>
        </Column>
      </Row>
      <Space smaller>
        <HorizontalHR></HorizontalHR> 
      </Space>
      <Space smaller>
        <Row>
          <Column align="flex-start">
            <Text indentBottom={7} weight="600" size={20} color="white">
              INFO
            </Text>
          </Column>
        </Row>
        <Row>
          <Column align="center">
            <Text size={18} color="white">
              I’m looking for any opportunities to prove what I can do. I specialize in working with Designers/UX/UI's and making their vision come to life. I also enjoy cloning website designs.
            </Text>
          </Column>
           <Column align="center">
            <Text weight="500" size={18} color="white">
              Software Engineer Intern @ Project ANT
            </Text>
              <Text weight="500" size={18} color="white">
              Software Engineer Intern @ Open Water Accelerator
            </Text>
            <Text weight="500" size={18} color="white">
              Teaching Assistant @ PDX Code Guild
            </Text>
          </Column>
        </Row>
      </Space>
    </>
  );
};

export default About;

