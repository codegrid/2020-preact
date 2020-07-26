import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";

import { GoodEffect, BadEffect } from "./effect.jsx";

const App = () => (
  <div>
    <h3>Good</h3>
    <GoodEffect />
    <hr />
    <h3>Bad</h3>
    <BadEffect />
  </div>
);

render(<App />, document.body);
