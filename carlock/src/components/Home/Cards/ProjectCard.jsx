import React from 'react'

import {
  Text
} from '../../ComponentLibrary/Typography';
import {
  Image
} from '../../ComponentLibrary/Assets';
import {
  ProjectWrapper
} from './Cards.styles';

const ProjectCard = (props) => {

  return (
    <ProjectWrapper>
      <Image
        card
        size={350}
        radius={5}
        image={props.project.image}
      ></Image>
      <Text 
        align="center" 
        underline 
        indentTop={7} 
        size={18} 
        weight="500" 
        color="white"
      >
        {props.project.title}
      </Text>
      <Text 
        indentLeft={10} 
        indentTop={10}
        indentRight={10}
        indentBottom={10}
        color="white"
      >
        {props.project.description}
      </Text>
    </ProjectWrapper>
  );
};

export default ProjectCard;