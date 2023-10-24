import { TodoForm, TodoItem } from './components';

const App = () => {
  return (
    <>
      <div className="p-4 w-1/2 flex flex-col items-center justify-center bg-slate-600">
        <TodoForm />
        <TodoItem />
        <TodoItem />
      </div>
    </>
  );
};

export default App;
