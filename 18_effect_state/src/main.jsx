import { h, render } from "preact";

import { GoodEffectState, BadEffectState } from "./effect.jsx";

const App = () => (
  <div>
    <h3>Good</h3>
    <GoodEffectState />
    <hr />
    <h3>Bad</h3>
    <BadEffectState />
  </div>
);

render(<App />, document.body);
