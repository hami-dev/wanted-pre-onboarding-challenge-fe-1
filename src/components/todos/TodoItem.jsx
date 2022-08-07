import React from 'react';
import styled from 'styled-components';

const TodoItem = ({todo}) => {
  return (
    <div>
      {todo.title} / {todo.content}
    </div>
  );
};

export default TodoItem;
