import { h, render } from "preact";

import { GoodError, BadError } from "./error.jsx";
import { Counter } from "./counter.jsx";

const App = () => (
  <div>
    <Counter />
    <hr />
    <GoodError />
    <BadError />
  </div>
);

render(<App />, document.body);
