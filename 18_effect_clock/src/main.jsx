import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

const Clock = ({ data }) => (
  <div>{new Date(data.now).toLocaleTimeString(data.locale)}</div>
);

const App = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <Clock data={{ locale: "ja-JP", now }} />;
};

render(<App />, document.body);
