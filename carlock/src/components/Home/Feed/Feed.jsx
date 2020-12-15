import React, { useState } from 'react';

import TableHeader from './TableHeader';
import Table from './Table';

const Feed = (props) => {
  // about, portfolio, certificates
  const [feed, setFeed] = useState('about');

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