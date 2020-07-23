import { h } from "preact";
import { useState } from "preact/hooks";
import { css } from "goober";

import { Order } from "./order.jsx";
import { Preview } from "./preview.jsx";

const flavorsList = [
  "mintcream",
  "lemonchiffon",
  "wheat",
  "plum",
  "lime",
  "skyblue",
  "tomato",
  "green",
  "chocolate",
  "maroon",
];

export const App = () => {
  const [currentFlavorIdx] = useState(2);
  const [flavors] = useState([flavorsList[2], null, null]);
  const [withCone] = useState(true);

  return (
    <main class={mainStyle}>
      <header>
        <h1 class={headStyle}>IcecreamShop🍦🍨</h1>
      </header>
      <div class={containerStyle}>
        <Order
          {...{
            flavorsList,
            currentFlavorIdx,
            withCone,
          }}
        />
        <Preview flavors={flavors} withCone={withCone} />
      </div>
      <div class={orderStyle}>
        <button
          class={orderButtonStyle}
          onClick={() => console.log("My order is", { flavors, withCone })}
        >
          Order👌
        </button>
      </div>
    </main>
  );
};

const mainStyle = css({
  width: "800px",
  margin: "0 auto",
  padding: "16px",
});

const headStyle = css({
  textAlign: "center",
});

const containerStyle = css({
  display: "grid",
  gridTemplateColumns: "60% 40%",
  gap: "16px",
});

const orderStyle = css({
  margin: "32px auto",
  textAlign: "center",
});

const orderButtonStyle = css({
  margin: "8px",
  width: "200px",
  fontSize: "1.4rem",
});
