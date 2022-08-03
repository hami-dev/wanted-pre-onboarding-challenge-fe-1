import React, {forwardRef} from 'react';
import styled from 'styled-components';

const Input = ({className, type, placeholder, ...props}, ref) => {
  return (
    <Wrapper>
      <CustomInput className={className} type={type} placeholder={placeholder} ref={ref} {...props} />
    </Wrapper>
  );
};

export default forwardRef(Input);

const Wrapper = styled.div`
  border: 1px solid ${({theme}) => theme.lightgray};
  margin-bottom: 10px;
`;

const CustomInput = styled.input`
  width: 100%;
  background-color: none;
  border: none;
  outline: none;
  padding: 10px;
`;
