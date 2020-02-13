import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      className={props.data.done ? 'todo-done' : ''}
      onClick={() => props.toggleClear(props.data.x)}
    >
      <p>{props.data.task}</p>
    </div>
  );
};

export default Todo;