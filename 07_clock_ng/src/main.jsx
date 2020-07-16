import { h, render } from "preact";

const Clock = ({ data }) => (
  <div>{new Date(data.now).toLocaleTimeString(data.locale)}</div>
);

const data = {
  locale: "en-US",
  now: Date.now(),
};
// Why not working?
setInterval(() => (data.now = Date.now()), 1000);

render(<Clock data={data} />, document.body);
