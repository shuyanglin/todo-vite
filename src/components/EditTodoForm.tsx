import { useState } from "react";

function EditTodoForm() {
  const [value, setValue] = useState("");
  return (
    <form className="TodoForm">
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
