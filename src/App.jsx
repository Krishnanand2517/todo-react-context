import { TodoContextProvider } from './context';
import { useState, useEffect } from 'react';
import { TodoForm, TodoItem } from './components';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) =>
      (prevTodo.id === id) ? { ...prevTodo, isComplete: !prevTodo.isComplete } : prevTodo
    ));
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));

    if (todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleComplete }}>
      <div className="p-4 w-1/2 flex flex-col items-center justify-center bg-slate-600">
        <TodoForm />
        <TodoItem />
        <TodoItem />
      </div>
    </TodoContextProvider>
  );
};

export default App;
