import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

import {Todos} from 'api/Todos';

import {todoStore} from 'pages/todo/Todos';
import {Utils} from 'utils';

import TodoItem from 'components/todos/TodoItem';
import Button from 'components/common/Button';
import ButtonWrapper from 'components/common/ButtonWrapper';

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
      <ButtonWrapper direction="column">
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
        <Button
          type="button"
          className="textButton grayText"
          onClick={() => {
            Utils.removeLocalStorage('token');
            window.alert('로그아웃되어 로그인 페이지로 이동합니다.');
            navigate('/auth/signin');
          }}
        >
          유저 로그아웃 하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoList;

const Wrapper = styled.div`
  border-right: 1px solid ${({theme}) => theme.lightgray};
  padding-right: 20px;
`;
