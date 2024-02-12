import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import TodoRow from "./TodoRow";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();

type Todo = {
  id: string;
  task: string;
};

function TodoWrapper() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  console.log(todos);

  function addTodo(task: string) {
    const id: string = uuidv4();
    const todo: Todo = {
      id: id,
      task: task,
    };
    setTodos([...todos, todo]);
  }

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <TodoRow todos={todos} />
      {/* <EditTodoForm /> */}
    </div>
  );
}

export default TodoWrapper;
