import { use } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function Todos() {
  const fetchData = async (): Promise<Todo[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return res.json();
  };

  const data = use(fetchData());

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <p>{todo.title}</p>
          <span>{todo.completed}</span>
        </li>
      ))}
    </ul>
  );
}
