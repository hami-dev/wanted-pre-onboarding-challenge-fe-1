import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import Main from 'pages/Main';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default RoutesIndex;
