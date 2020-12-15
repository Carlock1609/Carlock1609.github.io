import React, { useState } from 'react';

import TableHeader from './TableHeader';
import Table from './Table';

const Feed = (props) => {
  // about, portfolio, certifications
  const [feed, setFeed] = useState('certifications');

  return (
    <>
      <TableHeader
        setFeed={setFeed}
        feed={feed}
      />
      <Table 
        feed={feed}
      />
    </>
  );
};

export default Feed;