import "./App.css";
import { useState } from "react";
import TodoRows from "./components/TodoRows";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./components/Todo";
uuidv4();

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  function addTodo(task: string) {
    const id: string = uuidv4();
    const todo: Todo = {
      id: id,
      task: task,
      isEditing: false,
    };
    setTodos([...todos, todo]);
  }

  function removeTodo(todo: Todo) {
    const newTodos = todos.filter((t) => t != todo);
    setTodos(newTodos);
  }

  function editTodo(todo: Todo, newTodo: Todo) {
    const newTodos = todos.slice();
    const index = todos.indexOf(todo);
    newTodos.splice(index, 1, newTodo);
    setTodos(newTodos);
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <TodoRows
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggleIsEditing={editTodo}
      />
    </div>
  );
}

export default App;
