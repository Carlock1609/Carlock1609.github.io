import React from 'react';

import About from './About';
import Portfolio from './Portfolio';
import Certifications from './Certifications';

import {
  Wrapper
} from '../../ComponentLibrary/Containers';

const Table = (props) => {

  return (
    <Wrapper Top ZIndex={2}>
      {props.feed === 'about' ?
          <About />
        :
        props.feed === 'portfolio' ?
          <Portfolio />
        :
        props.feed === 'certifications' ?
          <Certifications />
        :
        null
      }
    </Wrapper>
  );
};

export default Table;