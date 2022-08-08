import React from 'react';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';

const TodoItem = ({todo}) => {
  const navigate = useNavigate();

  const onClickTodoItem = () => {
    navigate(`/todos/${todo.id}`);
  };
  return (
    <Wrapper onClick={onClickTodoItem}>
      <Title>{todo.title}</Title>
      <Content> {todo.content}</Content>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  border: 1px solid ${({theme}) => theme.lightgray};
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  ${({theme}) => theme.fonts.subTitle};
`;

const Content = styled.div`
  ${({theme}) => theme.fonts.body};
`;
