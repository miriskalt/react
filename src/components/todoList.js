import React from "react";
const Todo = (props) => (
  <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);

const TodoList = (props) => (
  <ul type="square">
    {props.todos.map((todo) => (
      <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
    ))}
  </ul>
);

export default TodoList;
