import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.scss";

function TodoApp() {
  return (
    <div className={styles.todoApp}>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoApp;
