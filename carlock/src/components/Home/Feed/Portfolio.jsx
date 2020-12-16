import React, { useState } from 'react';

import ProjectCard from '../Cards/ProjectCard';

import {
  Row,
  Column
} from '../../ComponentLibrary/Layout';
import {
  clique,
  mht,
  ctj,
  project_ant,
  zoom_fit
} from '../../../assets/images';

const Portfolio = (props) => {
  const [projects, setProjects] = useState([
    {
      key: 0,
      title: 'Project ANT',
      description: 'The first platform developed for personalized and goal-oriented freelancing.Projects linked to long term career development instead of temporary gigs. A personalized learning path for skills building and portfolio crafting. A digital portfolio section that will showcase your skills and highlight your achievements to make you stand out to recruiters, employers, and collaborators.',
      image: project_ant
    },
    {
      key: 1,
      title: 'Zoom Fit',
      description: 'ZoomFit was our solution to maintaining fitness and social interactions in our lives during the shelter in place. I worked on the Frontend team for this project. We were also able to have a functional Backend with the amount of time we had.',
      image: zoom_fit
    },
    {
      key: 2,
      title: 'Contact Tracing Journal',
      description: "is being created to trace any contact with COVID-19 and to keep track of every place you have been, or any contact you might have come to. The idea is from a friend who created an actual paper-back contact journal. I am making this application to improve upon that and give it more functionality.",
      image: ctj
    },
    {
      key: 3,
      title: 'Murder Hornet Tracker',
      description: 'is a user-friendly Web application to try and get ahead of a possible Murder Hornet outbreak. Unlike the official .gov website for tracking the Murder Hornets, they only have the ability to receive the location and your contact info, nothing is displayed. This is where MurderHornetTracking comes in.',
      image: mht
    },
    {
      key: 4,
      title: 'CLIQUE',
      description: 'is a Social Media Website built for Photographers and Creators/Influencers looking for an easier way to Connect, Collaborate and to Create Content.',
      image: clique,
      link: 'http://www.findcliques.com/users/login/'
    },
  ])

  return (
    <Row>
      {projects.map((project, index) => {

        return (
          <Column 
            align="center" 
            key={project.key}
          >
            <ProjectCard 
              project={project}
            />
          </Column>
        )
      })
      }
    </Row>
  );
};

export default Portfolio;