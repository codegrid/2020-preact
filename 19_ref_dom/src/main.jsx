import { h, render } from "preact";
import { useRef } from "preact/hooks";

const App = () => {
  const elRef = useRef(null);
  const onClick = () => elRef.current && elRef.current.focus();

  return (
    <div>
      <input ref={elRef} />
      <button onClick={onClick}>Focus!</button>
    </div>
  );
};

render(<App />, document.body);
