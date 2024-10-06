import { useTodoList } from "./context/TodoContext";

function TodoItem({ item, index }) {
  const { handleCheckedChange, handleDeletClick } = useTodoList();
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheckedChange(index)}
      />
      <p style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.value}
      </p>
      <button type="button" onClick={() => handleDeletClick(index)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
