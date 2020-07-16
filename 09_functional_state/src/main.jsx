import { h, render } from "preact";
import { useState } from "preact/hooks";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <hr />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

render(<Counter />, document.body);
