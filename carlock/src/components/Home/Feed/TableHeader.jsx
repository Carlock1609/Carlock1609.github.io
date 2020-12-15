import React from 'react';

import {
  Text
} from '../../ComponentLibrary/Typography';
import { 
  Wrapper
} from '../../ComponentLibrary/Containers';
import { 
  FeedWrapper,
  FeedItem
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
        </FeedItem>
        <FeedItem
          onClick={(e) => props.setFeed('certifications')}
          selected={props.feed === 'certifications'}
        >
          <Text 
            size={18} 
            color="white"
          >
            Certifications
          </Text>
        </FeedItem>
      </FeedWrapper>
    </Wrapper>
  );
};

export default TableHeader;