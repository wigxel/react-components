import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import svg from "rollup-plugin-svg";

const NODE_ENV = "production";

export default {
	input: [
		"src/main.js",
		"src/components/alert.js",
		"src/components/cards/cards.js",
		"src/components/forms/form.js",
		"src/components/lists/lists.js",
		"src/components/layouts/layout.js",
		"src/components/buttons/buttons.js",
		"src/components/typography/type.js",
		"src/components/special/special.js",
	],
	output: [
		{
			dir: "./lib/",
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
