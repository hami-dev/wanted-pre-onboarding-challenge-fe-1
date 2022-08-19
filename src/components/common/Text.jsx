import React from 'react';
import styled, {css} from 'styled-components';

const Text = ({children, type}) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

export default Text;

const Wrapper = styled.div`
  ${({type}) =>
    type === 'error' &&
    css`
      ${({theme}) => theme.fonts.description}
      color: ${({theme}) => theme.red};
      margin-bottom: 15px;
    `}

  ${({type}) =>
    type === 'text' &&
    css`
      ${({theme}) => theme.fonts.description}
    `}
`;
