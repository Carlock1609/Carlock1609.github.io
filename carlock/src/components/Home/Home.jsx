import React from 'react';

import Header from './Header';
import Feed from './Feed/Feed';
import Navbar from '../Navbar';

import {
  Background,
  MainWrapper,
} from '../ComponentLibrary/Containers';

const Home = (props) => {

  return (
    <Background>
      <Navbar />
      
      <MainWrapper>
        <Header />
        <Feed />
      </MainWrapper>
    </Background>
  );
};

export default Home;