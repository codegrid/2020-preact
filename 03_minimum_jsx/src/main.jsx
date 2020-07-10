import { h, Component, render } from "https://unpkg.com/preact?module";

const App = () => (
  <div>
    <h1>Hello Preact!</h1>
    <p>Minimum code using JSX.</p>
  </div>
);

render(<App />, document.body);
