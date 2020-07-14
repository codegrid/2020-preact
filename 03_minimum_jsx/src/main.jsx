import { h, render } from "preact";

const App = () => (
  <div>
    <h1>Hello Preact!</h1>
    <p>Minimum code using JSX.</p>
  </div>
);

render(<App />, document.body);
