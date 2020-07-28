import { h } from "preact";

export const Clock = ({ data }) => (
  <div>{new Date(data.now).toLocaleTimeString(data.locale)}</div>
);
