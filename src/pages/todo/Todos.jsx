import React, {useMemo, useState} from 'react';
import styled from 'styled-components';

import {useParams} from 'react-router-dom';

import Container from 'components/common/Container';
import TodoList from 'components/todos/TodoList';
import TodoDetail from 'components/todos/TodoDetail';
import TodoInput from 'components/todos/TodoInput';

const todoStore = React.createContext();
const {Provider} = todoStore;

const Todos = () => {
  const params = useParams();
  const [isCreateTodo, setCreateTodo] = useState(false);
  const [isEditTodo, setEditTodo] = useState(false);

  const value = {isCreateTodo, setCreateTodo, isEditTodo, setEditTodo};

  return (
    <Provider value={value}>
      <Container title="TODO" width="720">
        <Section>
          <TodoList />
          {useMemo(() => {
            return (
              <>
                {params?.id && !isEditTodo && !isCreateTodo && <TodoDetail />}
                {(isCreateTodo || isEditTodo) && <TodoInput />}
              </>
            );
          }, [params, isEditTodo, isCreateTodo])}
        </Section>
      </Container>
    </Provider>
  );
};

export default Todos;
export {todoStore};

const Section = styled.section`
  width: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;
