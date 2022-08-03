import React from 'react';
import styled from 'styled-components';

const Button = ({children, type, disabled, className, onClick}) => {
  return (
    <Wrapper type={type} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  //
  cursor: pointer;
  padding: 10px;

  &.textButton {
    border: none;
    background-color: transparent;
  }
`;
