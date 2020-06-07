import React from 'react';
import Logo from '../images/spacex_logo_black.png';

import Launches from '../components/Launches';
import StatusKeys from '../components/StatusKeys';

const Frontpage = () => {
  return (
    <>
      <img
        src={Logo}
        alt="spacex logo"
        style={{ width: 300, margin: 'auto', display: 'block' }}
      />
      <StatusKeys />
      <Launches />
    </>
  );
};

export default Frontpage;
