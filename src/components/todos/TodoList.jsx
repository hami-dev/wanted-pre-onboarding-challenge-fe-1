import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

import {Todos} from 'api/Todos';

import {todoStore} from 'pages/todo/Todos';

import TodoItem from 'components/todos/TodoItem';
import Button from 'components/common/Button';

const TodoList = () => {
  const navigate = useNavigate();
  const {setCreateTodo, setEditTodo} = useContext(todoStore);

  const {isLoading, data = []} = useQuery(['todos'], () => Todos.getTodo(), {
    refetchOnWindowFocus: false,
  });

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

      <Button
        type="button"
        className="large blue"
        onClick={() => {
          setEditTodo(false);
          setCreateTodo(true);
          navigate('/');
        }}
      >
        새 TODO 등록하기
      </Button>
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  padding-bottom: 50px;
`;
