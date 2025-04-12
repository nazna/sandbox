import { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
