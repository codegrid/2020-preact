import { h, render } from "preact";

import { GoodError, BadError } from "./error.jsx";

const App = () => (
  <div>
    <h3>Good</h3>
    <GoodError />
    <hr />
    <h3>Bad</h3>
    <BadError />
  </div>
);

render(<App />, document.body);
