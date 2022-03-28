import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    dir: "build",
    entryFileNames: "index.js",
    format: "es",
    sourcemap: true,
    indent: false,
  },
  plugins: [resolve(), commonjs()],
};
