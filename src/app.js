import React from "react";
import "./styles.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        "Winch Cleaning",
        "LED Upgrade",
        "Radio installation",
        "Cockpit cleaning",
        "AIS compatibilty"
      ]
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
        <header>
          <h1>Todos</h1>
        </header>

        <main>
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <TodoForm addTodo={this.addTodo} />
        </main>
        <footer>
          <img
            id="footerMotivation"
            src="https://thumbs.dreamstime.com/b/rough-sea-coast-rocky-empty-beach-north-portugal-typical-sky-rain-90817303.jpg"
            alt="Make dreams come true!"
            width="500"
            height="300"
          />
        </footer>
      </div>
    );
  }
}

export default App;
