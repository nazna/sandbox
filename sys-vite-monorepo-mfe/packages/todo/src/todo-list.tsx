export const TodoList = () => {
  return (
    <ul className="list">
      <li>
        <input type="checkbox" id="todo-1" />
        <label htmlFor="todo-1">Buy a bread</label>
      </li>
      <li>
        <input type="checkbox" id="todo-2" />
        <label htmlFor="todo-2">Buy a coffee</label>
      </li>
      <li>
        <input type="checkbox" id="todo-3" />
        <label htmlFor="todo-3">Research todo list design</label>
      </li>
    </ul>
  );
};
