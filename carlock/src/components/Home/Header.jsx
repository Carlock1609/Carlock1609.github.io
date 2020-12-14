import React from 'react'

import {
  Background,
  MainWrapper,
  Wrapper
} from '../ComponentLibrary/Containers';
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
  Image
} from '../ComponentLibrary/Assets';

const Header = (props) => {

  return (
    <Row>
      <Column align="center">
        <Image
          size={200}
          radius={30}
          image="https://media-exp1.licdn.com/dms/image/C5635AQHQ9mJCdfYw8g/profile-framedphoto-shrink_200_200/0/1607974931898?e=1608062400&v=beta&t=lxiHVYI1Q9Bl364AX4b0seyJJr5Qex5qCD-WtHmpfU4"
        >
        </Image>
      </Column>
    </Row>
  );
};

export default Header;