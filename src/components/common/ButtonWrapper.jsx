import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = ({children, direction}) => {
  return <Wrapper direction={direction}>{children}</Wrapper>;
};

export default ButtonWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;
