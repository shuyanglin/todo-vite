function EditTodoForm() {
  return (
    <form className="TodoForm">
      <input
        type="text"
        onChange={(e) => console.log(e.target.value)}
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
