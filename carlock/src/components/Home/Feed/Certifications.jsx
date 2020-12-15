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
} from '../../../assets/images';

const Certifications = (props) => {
  const [certs, setCerts] = useState([
    {
      key: 0,
      title: 'HTML5 and CSS3 Fundamentals',
      image: cert_udemy1,
    },
    {
      key: 0,
      title: 'Full Stack React, Redux, Node.js & Express',
      image: cert_udemy2,
    },
    {
      key: 0,
      title: 'The Web Developer Bootcamp',
      image: cert_udemy3,
    },
    {
      key: 0,
      title: 'Python-Based Developer Bootcamp',
      image: cert_pdx,
    },
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