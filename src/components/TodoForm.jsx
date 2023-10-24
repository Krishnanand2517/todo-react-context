const TodoForm = () => {
    return (
        <div className="flex">
            <form>
                <input className="p-2 rounded-lg" type="text" />
                <button className="bg-blue-300 p-2 rounded-lg">Add</button>
            </form>
        </div>
    );
};

export default TodoForm;