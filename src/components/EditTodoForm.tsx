import { useState } from "react";
import { Todo } from "./Todo";

type EditTodoFormProps = {
  todo: Todo;
  editTodo: (todo: Todo, newTask: string) => void;
};

function EditTodoForm({ todo, editTodo }: EditTodoFormProps) {
  const [value, setValue] = useState(todo.task);
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    editTodo(todo, value);
  }
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
