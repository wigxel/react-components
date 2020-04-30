import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import svg from "rollup-plugin-svg";

const NODE_ENV = "production";

export default {
	input: [
		"main.js",
		"components/alert.js",
		"components/layouts/layout.js",
		"components/cards/cards.js",
		"components/forms/form.js",
		"components/buttons/buttons.js",
		"components/typography/type.js",
		"components/lists/lists.js",
	],
	output: [
		{
			dir: "./dist/",
			format: "cjs",
			exports: "named",
		},
		// {
		// 	dir: "./dist/es",
		// 	format: "esm",
		// 	exports: "named",
		// },
	],
	external: (id) => {
		return /^(react|lodash|styled-components)/.test(id);
	},
	plugins: [
		babel({
			exclude: "node_modules/**",
		}),
		resolve(),
		commonjs(),
		svg(),
		terser(),
	],
};
