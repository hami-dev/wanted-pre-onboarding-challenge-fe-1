import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import Todos from 'pages/todo/Todos';
import Signup from 'pages/auth/Signup';
import Signin from 'pages/auth/Signin';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos/:id" element={<Todos />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signin" element={<Signin />} />
    </Routes>
  );
};

export default RoutesIndex;
