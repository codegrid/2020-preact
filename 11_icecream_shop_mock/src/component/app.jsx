import { h } from "preact";
import { css } from "goober";

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

export const App = () => (
  <main class={mainStyle}>
    <header>
      <h1 class={headStyle}>IcecreamShop🍦🍨</h1>
    </header>
    <div class={containerStyle}>
      <section class={itemStyle}>
        <h2>Order</h2>
        <div class={pickerWrapStyle}>
          {flavorsList.map((f) => (
            <div
              key={f}
              class={pickerStyle(f === "mintcream")}
              style={{ backgroundColor: f }}
            ></div>
          ))}
        </div>
        <div class={actionStyle}>
          <button class={actionButtonStyle}>Add</button>
          <button class={actionButtonStyle}>Delete</button>
        </div>
        <div class={actionStyle}>
          <label>
            <input type="radio" name="serve" checked /> with Cone 🍦
          </label>
          <label>
            <input type="radio" name="serve" /> with Cup 🍨
          </label>
        </div>
      </section>
      <section class={itemStyle}>
        <h2>Preview</h2>
        <pre class={previewStyle}>
          {JSON.stringify(
            {
              flavors: ["mintcream", "chocolate"],
              withCone: true,
            },
            null,
            2
          )}
        </pre>
      </section>
    </div>
    <div class={orderStyle}>
      <button class={orderButtonStyle}>Order👌</button>
    </div>
  </main>
);

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

const itemStyle = css({
  backgroundColor: "#fff",
  padding: "16px",
});

const pickerWrapStyle = css({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  margin: "32px auto",
});

const pickerStyle = (props) =>
  css({
    width: "80px",
    height: "80px",
    boxSizing: "border-box",
    border: props ? "4px dashed hotpink" : "none",
  });

const actionStyle = css({
  display: "flex",
  justifyContent: "center",
  margin: "32px auto 0",
});

const actionButtonStyle = css({
  margin: "8px",
  width: "100px",
  fontSize: "1.2rem",
});

const previewStyle = css({
  margin: "32px auto",
  padding: "8px",
  backgroundColor: "#eee",
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
