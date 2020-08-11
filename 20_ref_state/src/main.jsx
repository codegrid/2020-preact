import { h, render } from "preact";
import { useRef, useState } from "preact/hooks";

const App = () => {
  const countRef = useRef(0);
  const [, forceUpdate] = useState(0);

  const increment = () => countRef.current++;
  const update = () => forceUpdate((v) => v + 1);

  return (
    <div>
      <p>{countRef.current}</p>
      <button onClick={increment}>+1</button>
      <button onClick={update}>Update</button>
    </div>
  );
};

render(<App />, document.body);
