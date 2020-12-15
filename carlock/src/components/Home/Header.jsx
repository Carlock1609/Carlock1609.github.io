import React from 'react'

import {
  Headline
} from './Home.styles';
import {
  Row,
  Column
} from '../ComponentLibrary/Layout';
import {
  Text
} from '../ComponentLibrary/Typography';
import {
  Image
} from '../ComponentLibrary/Assets';

const Header = (props) => {

  return (
    <Row>
      <Column align="center">
        <Text indentBottom={15} size={24} weight="600" color="white">
          Jonathan C Yates
        </Text>
        <Image
          size={200}
          radius={30}
          image="https://media-exp1.licdn.com/dms/image/C5635AQHQ9mJCdfYw8g/profile-framedphoto-shrink_200_200/0/1607974931898?e=1608062400&v=beta&t=lxiHVYI1Q9Bl364AX4b0seyJJr5Qex5qCD-WtHmpfU4"
        >
        </Image>
        <Headline>
          <Text size={20} indentTop={12} weight="600" color="white">
           WEB DEVELOPER
          </Text>
          <Text indentTop={12} weight="600" color="white">
            Frontend Developer | React, JavaScript
          </Text>
           <Text weight="600" color="white">
            San Francisco, California
          </Text>
        </Headline>
      </Column>
    </Row>
  );
};

export default Header;