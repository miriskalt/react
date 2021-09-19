import React from "react";
import "./styles.css";
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
