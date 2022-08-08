import React, {useState, useEffect, useMemo, useContext} from 'react';
import styled from 'styled-components';

import {useParams, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';

import {Todos} from 'api/Todos';
import {rqStore} from 'App';
import {todoStore} from 'pages/todo/Todos';

import Button from 'components/common/Button';
import Input from 'components/common/Input';

const TodoInput = () => {
  const params = useParams();
  const [todoData, setTodoData] = useState(null);

  const navigate = useNavigate();
  const {setCreateTodo, setEditTodo, isEditTodo} = useContext(todoStore);
  const {queryClient} = useContext(rqStore);

  const defaultValues = useMemo(() => {
    return {title: todoData?.title || '', content: todoData?.content || ''};
  }, [todoData]);

  const {register, handleSubmit, reset} = useForm({reValidateMode: 'onChange', mode: 'onChange', defaultValues});

  const createMutation = useMutation((data) => Todos.createTodo(data));
  const modifyMutation = useMutation(({id, Parameter}) => Todos.updateTodo({id, Parameter}));

  const refetchData = () => {
    queryClient.invalidateQueries('todos');
    setCreateTodo(false);
    setEditTodo(false);
    navigate('/');
  };

  const onSubmit = (data) => {
    // 등록
    if (!isEditTodo) {
      createMutation.mutate(data, {
        onSuccess: () => {
          refetchData();
        },
        onError: (error) => {
          window.alert('TODO 등록 오류 발생');
          console.log('error', error);
        },
      });
    }

    // 수정
    if (isEditTodo) {
      modifyMutation.mutate(
        {id: params.id, Parameter: data},
        {
          onSuccess: () => {
            refetchData();
          },
          onError: (error) => {
            window.alert('TODO 수정 중 오류 발생');
            console.log('error', error);
          },
        },
      );
    }
  };

  useEffect(() => {
    const getData = async () => {
      const res = await Todos.getTodoById(params.id);
      setTodoData(res.data.data);
    };

    if (isEditTodo) {
      getData();
    }
  }, [params, isEditTodo]);

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="todo title" {...register('title')} />
        <Input type="text" placeholder="todo content" {...register('content')} />
        <Button type="submit">{isEditTodo ? '수정하기' : '등록하기'}</Button>
      </form>
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  padding: 0 10px;
`;
