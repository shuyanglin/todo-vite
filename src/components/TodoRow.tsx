import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
type TodoProps = {
  todos: Array<Todo>;
};

type Todo = {
  id: string;
  task: string;
};

function TodoRow({ todos }: TodoProps) {
  return (
    <>
      {todos.map((todo: Todo) => {
        return (
          <div className="Todo">
            <p>{todo.task}</p>
            <div>
              <FontAwesomeIcon icon={faPenToSquare} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoRow;
