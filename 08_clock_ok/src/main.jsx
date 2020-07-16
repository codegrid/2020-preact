import { h, render } from "preact";

const Clock = ({ data }) => (
  <div>{new Date(data.now).toLocaleTimeString(data.locale)}</div>
);

const data = {
  locale: "en-US",
  now: Date.now(),
};
render(<Clock data={data} />, document.body);

setInterval(() => {
  const data = {
    locale: "en-US",
    now: Date.now(),
  };
  render(<Clock data={data} />, document.body);
}, 1000);
