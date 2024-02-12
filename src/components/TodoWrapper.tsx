import { useState } from "react";
import TodoRow from "./TodoRow";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

type Todo = {
  id: string;
  task: string;
  isEditing: boolean;
};

function TodoWrapper() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  console.log(todos);

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
    const newTodos = todos.slice();
    const index = todos.indexOf(todo);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function toggleIsEditing(todo: Todo) {
    const newTodos = todos.slice();
    const index = todos.indexOf(todo);
    const newTodo: Todo = {
      id: todo.id,
      task: todo.task,
      isEditing: true,
    };
    newTodos.splice(index, 1, newTodo);
    setTodos(newTodos);
  }

  function editTodo(todo: Todo, newTask: string) {
    const newTodos = todos.slice();
    const index = todos.indexOf(todo);
    const newTodo: Todo = {
      id: todo.id,
      task: newTask,
      isEditing: false,
    };
    newTodos.splice(index, 1, newTodo);
    setTodos(newTodos);
  }
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <TodoRow
        todos={todos}
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggleIsEditing={toggleIsEditing}
      />
    </div>
  );
}

export default TodoWrapper;
