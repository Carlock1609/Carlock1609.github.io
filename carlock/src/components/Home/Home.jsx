import React from 'react';

import Navbar from '../Navbar';
import Header from './Header';
import About from './About';

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

const Home = (props) => {

  return (
    <Background>
      <Navbar />

      <MainWrapper>
        <Header />
        <About />
      </MainWrapper>
    </Background>
  );
};

export default Home;