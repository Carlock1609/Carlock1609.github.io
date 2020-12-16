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

import {
  profile_image
} from '../../assets/images';

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
          image={profile_image}
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