module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	plugins: ["simple-import-sort"],
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"react/react-in-jsx-scope": "off",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
	},
};
