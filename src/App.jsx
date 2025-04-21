import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const newTodo = { id: crypto.randomUUID(), title, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const changeTodo = (id, title, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, completed };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <main className="main">
        <h1>React Todo </h1>
        <span>Streamline Your Day, the React Way!</span>
        <hr />

        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
        />
        <hr />
        <TodoCreate createTodo={createTodo} />
      </main>
    </>
  );
}

export default App;
