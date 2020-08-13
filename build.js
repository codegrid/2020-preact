const fs = require("fs").promises;
const path = require("path");
const chokidar = require("chokidar");
const { build } = require("esbuild");

const listNeedToBuildItems = async () => {
  const demoItems = await fs.readdir(".");
  const needToBuildItems = demoItems
    // Only directory starts with 01_xxx, 10_xxx, ...etc
    .filter((n) => /^\d\d_/.test(n))
    // 01_xxx and 02_xxx does not need to build
    .filter((n) => !/^0[1|2]_/.test(n));

  return needToBuildItems;
};

const buildItem = async (item) => {
  await build({
    entryPoints: [path.resolve(item, "src", "main.jsx")],
    outfile: path.resolve(item, "dist", "main.js"),
    bundle: true,
    jsxFactory: "h",
  });
  console.log(`✅ ${item}`);
};

const buildAll = async () => {
  console.log("Building all items...");
  const needToBuildItems = await listNeedToBuildItems();

  await Promise.all(needToBuildItems.map((item) => buildItem(item)));
  console.log("All done ✨");
};

const watchAll = async () => {
  console.log("Watching all items to change...");
  const needToBuildItems = await listNeedToBuildItems();

  const watcher = chokidar.watch(
    needToBuildItems.map((item) => path.resolve(item, "src"))
  );

  watcher.on("change", (p) => {
    // p is absolute path
    const [, item] = p.split(__dirname)[1].split("/");
    buildItem(item);
  });
};

(async () => {
  const watch = process.argv.includes("--watch");
  if (watch) return watchAll();

  await buildAll();
})();
