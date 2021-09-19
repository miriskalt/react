import React from "react";
import "./styles.css";
import TodoForm from "./components/todoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Winch Cleaning", "Anchorlight LED Upgrade", "Radio installation"]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo]
    }));
  };

  deleteTodo = (value) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== value)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

const Todo = (props) => (
  <li onClick={() => props.deleteTodo(props.todo)}>{props.todo}</li>
);

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <Todo todo={todo} key={todo} deleteTodo={props.deleteTodo} />
    ))}
  </ul>
);

export default App;
