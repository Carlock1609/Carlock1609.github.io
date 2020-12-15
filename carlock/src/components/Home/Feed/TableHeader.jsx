import React from 'react';

import {
  Text
} from '../../ComponentLibrary/Typography';
import { 
  Wrapper
} from '../../ComponentLibrary/Containers';
import { 
  FeedWrapper,
  FeedItem,
  Bar
} from '../Home.styles';

const TableHeader = (props) => {

  return (
    <Wrapper Bottom ZIndex={1} noPadding>
      <FeedWrapper>
        <FeedItem
          onClick={(e) => props.setFeed('about')}
          selected={props.feed === 'about'}
        >
          <Text 
            size={18} 
            color="white"
          >
            About
          </Text>
          <Bar
            selected={props.feed === 'about'}
          ></Bar>
        </FeedItem>
        <FeedItem
          onClick={(e) => props.setFeed('portfolio')}
          selected={props.feed === 'portfolio'}
        >
          <Text 
            size={18} 
            color="white"
          >
            Portfolio
          </Text>
          <Bar
            selected={props.feed === 'portfolio'}
          ></Bar>
        </FeedItem>
        <FeedItem
          onClick={(e) => props.setFeed('certificates')}
          selected={props.feed === 'certificates'}
        >
          <Text 
            size={18} 
            color="white"
          >
            Certificates
          </Text>
          <Bar
            selected={props.feed === 'certificates'}
          ></Bar>
        </FeedItem>
      </FeedWrapper>
    </Wrapper>
  );
};

export default TableHeader;