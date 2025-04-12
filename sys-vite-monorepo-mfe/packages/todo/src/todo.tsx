import { TodoCreator } from './todo-creator';
import { TodoList } from './todo-list';
import './todo.css';

const Todo = () => {
  return (
    <section className="todo">
      <TodoCreator />
      <TodoList />
    </section>
  );
};

export default Todo;
