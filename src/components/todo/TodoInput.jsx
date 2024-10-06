import { useTodoList } from "./context/TodoContext";
import styles from "./TodoInput.module.scss";

function TodoInput() {
  const { inputValue, handleInputChange, handleAddClick } = useTodoList();
  return (
    <div className={styles.todoInputBox}>
      <input
        className={styles.todoInput}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="오늘의 할일을 입력해주세요"
      />
      <button
        className={styles.todoAddButton}
        type="button"
        onClick={handleAddClick}
      >
        등록
      </button>
    </div>
  );
}

export default TodoInput;
