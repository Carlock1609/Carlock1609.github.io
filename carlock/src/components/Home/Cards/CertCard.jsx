import React from 'react'

import {
  CertWrapper
} from './Cards.styles';
import {
  Image
} from '../../ComponentLibrary/Assets';
import {
  Text
} from '../../ComponentLibrary/Typography/';

const CertCard = (props) => {

  return (
    <>
      <CertWrapper>
        <Image
          size={350}
          image={props.cert.image}
          radius={5}
        >
        </Image>
      </CertWrapper>
      <Text indentTop={10} size={20} color="white">
        {props.cert.title}
      </Text>
    </>
  );
};

export default CertCard;