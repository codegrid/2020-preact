import { h } from "preact";

export const Header = ({ author = "unknown" }) => {
  return (
    <header>
      <h1>Hello, Preact!</h1>
      <p>Author is {author}.</p>
    </header>
  );
};
