import React from 'react';
import styled from 'styled-components';

const Container = ({children, title}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 30px;
`;

const Title = styled.div`
  ${({theme}) => theme.fonts.title}
  margin-bottom: 20px;
`;
