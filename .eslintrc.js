module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		ecmaFeatures: { jsx: true },
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'simple-import-sort',
		'prettier',
	],
	extends: [
		'eslint:recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		'@typescript-eslint/no-var-requires': 'off',

		'react/jsx-uses-react': 1,
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					[
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
					], // Node.js builtins
					['^react', 'valtio', '^@?\\w'], // Packages. `react` related packages come first.
					['^\\u0000'], // Side effect imports.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports. Put `..` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Other relative imports. Put same-folder imports and `.` last.
					['^.+\\.s?css$'], // Style imports.
				],
			},
		],

		'react-hooks/rules-of-hooks': 'error',

		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				trailingComma: 'all',
				singleQuote: true,
				tabWidth: 2,
			},
		],
	},
	settings: {
		react: { version: 'detect' },
	},
	ignorePatterns: [
		'launcher/utils/types/graphql.ts',
		'game/assets/scripts/lib/graphql.ts',
	],
	env: {
		node: true,
	},
	globals: {
		module: true,
		require: true,
		document: true,
		ethereum: true,
	},
};
