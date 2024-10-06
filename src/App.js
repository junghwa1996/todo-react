import TodoApp from "./components/todo/TodoApp";
import { TodoProvider } from "./components/todo/context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
