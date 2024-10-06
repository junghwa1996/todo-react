import { useTodoList } from "./context/TodoContext";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.scss";

function TodoList() {
  const { todoList } = useTodoList();
  return (
    <ul className={styles.todoListBox}>
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} index={index} />
      ))}
    </ul>
  );
}

export default TodoList;
