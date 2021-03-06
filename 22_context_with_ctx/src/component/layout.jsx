import { h } from "preact";
import { css } from "goober";

import { Header } from "./header.jsx";
import { Section1, Section2, Section3 } from "./section.jsx";
import { Footer } from "./footer.jsx";

export const Layout = () => (
  <div class={wrapStyle}>
    <Header />
    <main class={mainStyle}>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
    <Footer />
  </div>
);

const wrapStyle = css`
  background-color: #eee;
`;

const mainStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  padding: 30px;
`;
