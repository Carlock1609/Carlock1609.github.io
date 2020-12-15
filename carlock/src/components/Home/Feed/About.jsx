import React from 'react';

import { 
  Text
} from '../../ComponentLibrary/Typography';
import {
  Row,
  Column,
  Space
} from '../../ComponentLibrary/Layout';

const About = (props) => {

  return (
    <>
      <Row>
        <Column>
          <Text size={18} color="white">
            I’m looking for any opportunities to prove what I can do. I specialize in working with Designers/UX/UI's and making their vision come to life. I also enjoy cloning website designs.
          </Text>
        </Column>
      </Row>
      <Space smaller>
        <Row>
          <Column align="center">
            <Text weight="600" size={20} color="white">
              TECH STACK
            </Text>
          </Column>
        </Row>
        <Row>
          <Column align="center">
            <Text weight="500" size={20} color="white">
              Languages:
            </Text>
            <Text color="white">
              JavaScript, Node, Python
            </Text>
          </Column>
          <Column align="center">
            <Text weight="500" size={20} color="white">
              Framework/Libraries:
            </Text>
            <Text color="white">
              React, Express, Django, HTML/CSS, Bootstrap, SASS, Styled-components
            </Text>
          </Column>
          <Column align="center">
            <Text weight="500" size={20} color="white">
              Others:
            </Text>
            <Text color="white">
              Figma, Postman, Problem-solving, Git, Team-oriented, SCRUM
            </Text>
          </Column>
        </Row>
      </Space>
    </>
  );
};

export default About;

