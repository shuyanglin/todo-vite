import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoWrapper() {
  return (
    <div className="TodoWrapper">
      <TodoForm />
      <Todo />
      <EditTodoForm />
    </div>
  );
}

export default TodoWrapper;
