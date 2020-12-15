import React from 'react';

import {
  Row,
  Column,
  Space
} from '../../ComponentLibrary/Layout';
import { 
  Text
} from '../../ComponentLibrary/Typography';
import {
  Image
} from '../../ComponentLibrary/Assets';
import {
  ProjectItem
} from '../Home.styles';
import {
  clique,
  mht,
  ctj,
  project_ant,
  zoom_fit
} from '../../../assets/images';

const Portfolio = (props) => {

  return (
    <Row>
      <Column align="center">
        <ProjectItem>
          <Image
            size={250}
            radius={10}
            image={project_ant}
          ></Image>
          <Text underline indentTop={7} size={18} weight="500" color="white">
            Project ANT
          </Text>
          <Text color="white">
          The first platform developed for personalized and goal-oriented freelancing.Projects linked to long term career development instead of temporary gigs. A personalized learning path for skills building and portfolio crafting. A digital portfolio section that will showcase your skills and highlight your achievements to make you stand out to recruiters, employers, and collaborators.
          </Text>
        </ProjectItem>
      </Column>
      <Column align="center">
        <ProjectItem>
          <Image
            size={250}
            radius={10}
            image={zoom_fit}
          ></Image>
          <Text underline indentTop={7} size={18} weight="500" color="white">
            Zoom Fit
          </Text>
          <Text color="white">
            ZoomFit was our solution to maintaining fitness and social interactions in our lives during the shelter in place. I worked on the Frontend team for this project. We were also able to have a functional Backend with the amount of time we had.
          </Text>
        </ProjectItem>
      </Column>
      <Column align="center">
        <ProjectItem>
          <Image
            size={250}
            radius={10}
            image={ctj}
          ></Image>
          <Text underline indentTop={7} size={18} weight="500" color="white">
            Contact Tracing Journal
          </Text>
          <Text color="white">
            is being created to trace any contact with COVID-19 and to
          keep track of every place you have been, or any contact you might have
          come to. The idea is from a friend who created an actual paper-back
          contact journal. I am making this application to improve upon that and
          give it more functionality.
          </Text>
        </ProjectItem>
      </Column>
      <Column align="center">
        <ProjectItem>
          <Image
            size={250}
            radius={10}
            image={mht}
          ></Image>
          <Text underline indentTop={7} size={18} weight="500" color="white">
            Murder Hornet Tracker
          </Text>
          <Text color="white">
          is a user-friendly Web application to try and get ahead of a
        possible Murder Hornet outbreak. Unlike the official .gov website for
        tracking the Murder Hornets, they only have the ability to receive the
        location and your contact info, nothing is displayed. This is where
        MurderHornetTracking comes in.
          </Text>
        </ProjectItem>
      </Column>
      <Column align="center">
        <ProjectItem>
          <Image
            size={250}
            radius={10}
            image={clique}
          ></Image>
          <Text underline indentTop={7} size={18} weight="500" color="white">
            CLIQUE
          </Text>
          <Text color="white">
          is a Social Media Website built for Photographers and
        Creators/Influencers looking for an easier way to Connect, Collaborate
        and to Create Content.
          </Text>
        </ProjectItem>
      </Column>
    </Row>
  );
};

export default Portfolio;