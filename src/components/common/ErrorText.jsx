import React from 'react';
import styled from 'styled-components';

const ErrorText = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ErrorText;

const Wrapper = styled.div`
  ${({theme}) => theme.fonts.description}
  color: ${({theme}) => theme.red};
  margin-bottom: 15px;
`;
