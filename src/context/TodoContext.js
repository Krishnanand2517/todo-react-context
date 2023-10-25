import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 84,
            todoMsg: "Radhe Radhe",
            isComplete: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);