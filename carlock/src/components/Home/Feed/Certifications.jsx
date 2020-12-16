import React, { useState } from 'react'

import CertCard from '../Cards/CertCard';

import {
  Row,
  Column
} from '../../ComponentLibrary/Layout';
import {
  cert_udemy1,
  cert_udemy2,
  cert_udemy3,
  cert_pdx,
  hackathon_achievement
} from '../../../assets/images';

const Certifications = (props) => {
  const [certs, setCerts] = useState([
    {
      key: 0,
      title: 'HTML5 and CSS3 Fundamentals',
      image: cert_udemy1,
    },
    {
      key: 1,
      title: 'Full Stack React, Redux, Node.js & Express',
      image: cert_udemy2,
    },
    {
      key: 2,
      title: 'The Web Developer Bootcamp',
      image: cert_udemy3,
    },
    {
      key: 3,
      title: 'Python-Based Developer Bootcamp',
      image: cert_pdx,
    },
    {
      key: 4,
      title: '2020 Hackathon, Team Tahoe',
      image: hackathon_achievement,
    }
  ])

  return (
    <Row>
      {certs.map((cert, index) => {

        return (
          <Column key={cert.key} scalar={1} align="center">
            <CertCard 
              key={cert.key}
              cert={cert}
            />
          </Column>
        )
      })
      }
    </Row>
  );
};

export default Certifications;