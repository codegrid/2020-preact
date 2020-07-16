import { h, render } from "preact";
import { setup, styled, css } from "goober";

setup(h);

const appStyle = css({
  backgroundColor: "#eee",
  padding: "20px",
});

const Button = styled("button")`
  background: dodgerblue;
  color: white;
  width: ${Math.random() * 200}px;
  height: ${Math.random() * 100}px;
  border: none;

  &:focus,
  &:hover {
    color: gold;
  }
`;

const App = () => (
  <div class={appStyle}>
    <Button>Hover me!</Button>
  </div>
);

render(<App />, document.body);
