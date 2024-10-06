import { useTodoList } from "./context/TodoContext";
import styles from "./TodoItem.module.scss";

function TodoItem({ item, index }) {
  const { handleCheckedChange, handleDeletClick } = useTodoList();
  return (
    <li className={styles.todoList}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheckedChange(index)}
      />
      <p style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.value}
      </p>
      <button
        className={styles.todoDeletButton}
        type="button"
        onClick={() => handleDeletClick(index)}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
