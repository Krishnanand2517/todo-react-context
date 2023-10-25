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
      <div className="bg-slate-700 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
