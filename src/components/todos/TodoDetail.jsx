import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import {useParams, useNavigate} from 'react-router-dom';
import {useQuery, useMutation} from '@tanstack/react-query';

import {Todos} from 'api/Todos';
import {rqStore} from 'App';
import {todoStore} from 'pages/todo/Todos';

import Button from 'components/common/Button';
import ButtonWrapper from 'components/common/ButtonWrapper';

const TodoDetail = () => {
  const navigate = useNavigate();
  const {setEditTodo, isEditTodo} = useContext(todoStore);
  const {queryClient} = useContext(rqStore);

  const params = useParams();
  const [todoData, setTodoData] = useState(null);

  const deleteMutation = useMutation((id) => Todos.deleteTodo(id));

  const onClickDelete = () => {
    deleteMutation.mutate(params.id, {
      onSuccess: () => {
        queryClient.invalidateQueries('todos');
        navigate('/');
      },
    });
  };

  useEffect(() => {
    if (!params.id) {
      return;
    }
    const getData = async () => {
      const res = await Todos.getTodoById(params.id);
      setTodoData(res.data.data);
    };

    if (!isEditTodo) {
      getData();
    }
  }, [params, isEditTodo]);

  if (!todoData) return null;

  return (
    <Wrapper>
      <Title>title: {todoData.title}</Title>
      <Content>content: {todoData.content}</Content>
      <ButtonWrapper align="flex-start">
        <Button
          type="button"
          className="large"
          onClick={() => {
            setEditTodo(true);
          }}
        >
          수정하기
        </Button>
        <Button className="large" onClick={onClickDelete}>
          삭제하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TodoDetail;

const Wrapper = styled.div`
  padding: 10px;

  div {
    margin-bottom: 0 10px;
  }
`;

const Title = styled.div`
  ${({theme}) => theme.fonts.subTitle};
`;

const Content = styled.div`
  ${({theme}) => theme.fonts.body};
`;
