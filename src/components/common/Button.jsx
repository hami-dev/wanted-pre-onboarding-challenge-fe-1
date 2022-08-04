import React from 'react';
import styled, {css} from 'styled-components';

const Button = ({children, type, disabled, className, onClick, style}) => {
  return (
    <Wrapper type={type} disabled={disabled} className={className} onClick={onClick} customStyle={style}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button`
  border: none;
  border-radius: 12px;

  cursor: pointer;
  padding: 10px;

  &.wide {
    width: 100%;
  }

  &.small {
    padding: 5px 10px;
  }

  &.large {
    padding: 10px 20px;
  }

  &.blue {
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.blue};
  }

  &.gray {
    color: ${({theme}) => theme.black};
    background-color: ${({theme}) => theme.gray};
  }

  &.textButton {
    border: none;
    background-color: transparent;
  }

  &.grayText {
    color: ${({theme}) => theme.gray};
  }

  &:disabled {
    color: ${({theme}) => theme.gray};
    background-color: ${({theme}) => theme.lightgray};
  }

  ${({customStyle}) => customStyle}
`;
