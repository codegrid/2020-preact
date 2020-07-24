import { h, render } from "preact";
import { useState } from "preact/hooks";

import { GoodRender, BadRender } from "./render.jsx";

const App = () => (
  <div>
    <h3>Good</h3>
    <GoodRender />
    <hr />
    <h3>Bad</h3>
    <BadRender />
  </div>
);

render(<App />, document.body);
