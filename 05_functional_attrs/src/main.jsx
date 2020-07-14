import { h, render } from "preact";
import { Paragraph } from "./paragraph.jsx";

const App = () => (
  <div class="container">
    <Paragraph>Hey this is my texts...</Paragraph>
    <Paragraph bold={true}>Hey this is my important texts!</Paragraph>
  </div>
);

render(<App />, document.body);
