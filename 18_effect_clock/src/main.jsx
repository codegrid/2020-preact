import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

import { Clock } from "./clock.jsx";

const App = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <Clock data={{ locale: "ja-JP", now }} />;
};

render(<App />, document.body);
