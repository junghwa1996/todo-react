import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const useTodoList = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, { value: inputValue, checked: false }]);
      setInputValue("");
    }
  };

  const handleDeletClick = (index) => {
    const newTodoList = todoList.filter((_, i) => index !== i);
    setTodoList(newTodoList);
  };

  const handleCheckedChange = (index) => {
    const newTodoList = todoList.map((item, i) => {
      if (index === i) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        inputValue,
        handleInputChange,
        handleAddClick,
        handleDeletClick,
        handleCheckedChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
