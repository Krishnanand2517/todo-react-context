import { useState } from 'react';
import { useTodo } from '../context';

const TodoForm = () => {
    const [todoMsg, setTodoMsg] = useState("");

    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo({
            id: Date.now(),
            todoMsg,
            isComplete: false
        });
        setTodoMsg("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                placeholder="Your task..."
                className="w-full px-3 py-1.5 border border-black/10 bg-white/20 rounded-l-lg outline-none duration-150"
            />
            <button type="submit" className="px-3 py-1 bg-green-600 text-white shrink-0 rounded-r-lg">
                Add
            </button>
        </form>
    );
};

export default TodoForm;