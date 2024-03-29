import EditTodoForm from "./EditTodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "./Todo";

type TodoProps = {
  todos: Array<Todo>;
  removeTodo: (todo: Todo) => void;
  editTodo: (todo: Todo, newTodo: Todo) => void;
};

function TodoRows({ todos, removeTodo, editTodo }: TodoProps) {
  return (
    <>
      {todos.map((todo: Todo) => {
        return todo.isEditing ? (
          <EditTodoForm todo={todo} editTodo={editTodo} />
        ) : (
          <div className="Todo">
            <p>{todo.task}</p>
            <div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() =>
                  editTodo(todo, {
                    id: todo.id,
                    task: todo.task,
                    isEditing: true,
                  })
                }
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => removeTodo(todo)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoRows;
