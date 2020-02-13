// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.list.map(data => (
        <Todo
          toggleClear={props.toggleClear}
          key={data.id}
          data={data}
        />
      ))}
    </div>
  );
};

export default TodoList;