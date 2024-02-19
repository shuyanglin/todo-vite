import { useState } from "react";
import { Todo } from "./Todo";

type EditTodoFormProps = {
  todo: Todo;
  editTodo: (todo: Todo, newTodo: Todo) => void;
};

function EditTodoForm({ todo, editTodo }: EditTodoFormProps) {
  const [value, setValue] = useState(todo.task);
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const newTodo: Todo = {
      id: todo.id,
      task: value,
      isEditing: false,
    };

    editTodo(todo, newTodo);
  }
  return (
    <form className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button onClick={handleSubmit} className="todo-btn">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
