import { useTodoList } from "./context/TodoContext";

function TodoInput() {
  const { inputValue, handleInputChange, handleAddClick } = useTodoList();
  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="button" onClick={handleAddClick}>
        등록
      </button>
    </>
  );
}

export default TodoInput;
