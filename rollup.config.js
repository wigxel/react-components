import resolve from 'rollup-plugin-node-resolve';
// import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svg from 'rollup-plugin-svg';
import babel from 'rollup-plugin-babel';

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile = NODE_ENV === "production" ? "./dist/prod.js" : "./dist/dev.js";

export default {
  input: 'main.js',
  output: {
    file: outputFile,
    format: 'cjs',
    exports: 'named'
  },
  external: id => /^react|lodash|styled-components/.test(id),
  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    svg(),
    // terser(),
  ]
};