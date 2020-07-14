const fs = require("fs").promises;
const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel").default;

module.exports = (async () => {
  const demoItems = await fs.readdir(".");
  const needToBuildItems = demoItems
    // Only directory starts with 01_xxx, 10_xxx, ...etc
    .filter((n) => /^\d\d_/.test(n))
    // 01_xxx and 02_xxx does not need to build
    .filter((n) => !/^0[1|2]_/.test(n));

  return needToBuildItems.map((n) => ({
    input: `${n}/src/main.jsx`,
    output: {
      dir: `${n}/dist`,
      name: "main.js",
      format: "iife",
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              pragma: "h",
              pragmaFrag: "Fragment",
            },
          ],
        ],
      }),
      resolve({ browser: true }),
      commonjs(),
    ],
  }));
})();
