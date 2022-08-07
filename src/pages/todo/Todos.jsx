import React from 'react';
import styled from 'styled-components';

import {useParams} from 'react-router-dom';

import Container from 'components/common/Container';
import TodoList from 'components/todos/TodoList';
import TodoDetail from 'components/todos/TodoDetail';

const Todos = () => {
  const params = useParams();

  return (
    <Container title="TODO" width="720">
      <Section>
        <TodoList />
        {params?.id && <TodoDetail />}
      </Section>
    </Container>
  );
};

export default Todos;

const Section = styled.section`
  width: 720px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
`;
