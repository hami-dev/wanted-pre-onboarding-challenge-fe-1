import React, {useState} from 'react';
import styled from 'styled-components';

import {useQuery} from '@tanstack/react-query';

import {Todos} from 'api/Todos';

import TodoItem from 'components/todos/TodoItem';

const TodoList = () => {
  const {isLoading, isError, data} = useQuery(['todoList'], Todos.getTodo);

  return (
    <Wrapper>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          {data.data.data.map((item) => (
            <TodoItem todo={item} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  background-color: lightblue;
`;
