import { h, render } from "preact";
import { useRef, useEffect, useLayoutEffect } from "preact/hooks";

const App = () => {
  const ref1 = useRef(null);
  useEffect(() => {
    console.log("useEffect() start");
    window.waitSync(1000);
    ref1.current.textContent = "Hello from useEffect!";
    console.log("useEffect() end");
  });

  const ref2 = useRef(null);
  useLayoutEffect(() => {
    console.log("useLayoutEffect() start");
    window.waitSync(1000);
    ref2.current.textContent = "Hello from useLayoutEffect!";
    console.log("useLayoutEffect() end");
  });

  return (
    <div>
      {console.log("render()")}
      <div ref={ref1}>🔥🔥🔥</div>
      <div ref={ref2}>🔥🔥🔥</div>
    </div>
  );
};

render(<App />, document.body);
