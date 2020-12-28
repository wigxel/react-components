module.exports = {
	stories: [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx)"
	],
	addons: [
	 "@storybook/addon-links",
	 "@storybook/addon-knobs",
		{
			name: "@storybook/addon-essentials",
			options: {
				backgrounds: false,
			}
		}]
}