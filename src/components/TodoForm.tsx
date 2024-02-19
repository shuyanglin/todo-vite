import { useState } from "react";

type TodoFormProps = {
  addTodo: (value: string) => void;
};

function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (value == "") return;
    addTodo(value);
    setValue("");
  }

  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleSubmit} className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
