import React from 'react';

export function SayHello() {
  return (
    <div>
      <h2>This is 'SayHello' component.</h2>
      <button type="button" onClick={() => alert('Hello!')}>
        Say Hello
      </button>
    </div>
  );
}

export default SayHello;
