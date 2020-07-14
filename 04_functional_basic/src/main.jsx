import { h, render } from "preact";
import { Header } from "./header.jsx";

const App = () => (
  <div>
    <Header author="leader22" />
    <Header />
  </div>
);

render(<App />, document.body);
