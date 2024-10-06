import { useTodoList } from "./context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoList();
  return (
    <ul>
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
