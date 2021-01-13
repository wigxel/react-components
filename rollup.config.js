import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import svg from "rollup-plugin-svg";

const NODE_ENV = "production";

export default {
	external: (id) => {
		return /^(react|react-dom|lodash|styled-components)/.test(id);
	},
	input: {
		"main": "src/main.js",
		"alert": "src/components/alert.js",
		"cards": "src/components/cards/index.js",
		"form": "src/components/forms/index.js",
		"lists": "src/components/lists/index.js",
		"layout": "src/components/layouts/index.js",
		"buttons": "src/components/buttons/index.js",
		"typography": "src/components/typography/index.js",
		"special": "src/components/special/index.js",
		"utils": "src/libs/utils.js"
	},
	output: [
		{
			dir: "./lib/",
			format: "cjs",
			exports: "named",
			globals: {
	      "styled-components": "styled"
	    }
		},
		// {
		// 	dir: "./dist/es",
		// 	format: "esm",
		// 	exports: "named",
		// },
	],
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
