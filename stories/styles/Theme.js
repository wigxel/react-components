const Generic = {
	colors: {
		primary: "#705DF5",
		accent: "#FFAA00",
		danger: "#E56464",
		grey: "#878787",
		greylight: "#848484",
		navbar: "#FDFDFD",
	},
	padding: {
		6: "2rem",
		12: "2.5rem",
	},
	alert: {
		custom: { bg: "beige", text: "dodgerblue" }
	},
	activity: {
		bgColor: "#fff",
		borderColor: "#848484",
		hoverColor: "whitesmoke",
	},
	check: {
		// labelBg: "#705DF5"
	}
}

const Light = {
	bgcolorinverse: "#cdbfde",
	bgcolor: "#fff",
	color: "#2d2e2e",
	border: "none",
	heading: "#222222",
	paragraph: Generic.grey,
	whitesmoke: "#F0F0F9",
	skeleton: {
		from: "#eee",
		to: "whitesmoke"
	},
	...Generic,
	radio: { }
}

const Dark = {
	bgcolorinverse: "#f0c8c2",
	bgcolor: "#2d2e2e",
	color: "#fff",
	border: "none",
	heading: "#fff",
	paragraph: Light.whitesmoke,
	skeleton: {
		from: "#3d3e3e",
		to: "#2d2e2e"
	},
	...Generic
}

export { Light, Dark }
