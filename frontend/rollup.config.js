import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "./src/main.jsx", // adjust this path if necessary
  output: {
    file: "./dist/bundle.js", // adjust this path if necessary
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
  ],
};
