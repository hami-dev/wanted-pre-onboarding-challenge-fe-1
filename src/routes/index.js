import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import Main from 'pages/Main';
import Signup from 'pages/auth/Signup';
import Signin from 'pages/auth/Signin';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signin" element={<Signin />} />
    </Routes>
  );
};

export default RoutesIndex;
