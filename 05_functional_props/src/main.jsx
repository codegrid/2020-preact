import { h, render } from "preact";
import { Props } from "./props.jsx";

const App = () => (
  <div>
    <Props
      string={"Hello, again!"}
      number={41}
      bool={true}
      arr={["alice", "bob"]}
      obj={{ foo: { bar: { baz: 1 } } }}
      func={() => console.log("😺")}
    />
  </div>
);

render(<App />, document.body);
