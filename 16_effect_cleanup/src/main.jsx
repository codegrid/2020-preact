import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const App = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onResize = ({ clientX, clientY }) =>
      setPoint({ x: clientX, y: clientY });
    window.addEventListener("mousemove", onResize);
    return () => window.removeEventListener("mousemove", onResize);
  }, []);

  return (
    <div>
      x: {point.x} / y: {point.y}
    </div>
  );
};

render(<App />, document.body);
