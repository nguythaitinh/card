const lazyImports = require('metro-react-native-babel-preset/src/configs/lazy-imports');

module.exports = {
	comments: false,
	compact: true,
	presets: ['@babel/preset-env', '@babel/preset-typescript'],
	plugins: [
		'@babel/plugin-syntax-flow',
		'@babel/plugin-transform-flow-strip-types',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-syntax-export-default-from',
		[
			'@babel/plugin-proposal-object-rest-spread',
			{ loose: true, useBuiltIns: true },
		],
		['@babel/plugin-proposal-class-properties', { loose: false }],
		['@babel/plugin-proposal-optional-chaining', { loose: true }],
		['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
		['@babel/plugin-transform-runtime', { helpers: true, regenerator: true }],
		['@babel/plugin-transform-template-literals', { loose: true }],
		['@babel/plugin-transform-destructuring', { useBuiltIns: true }],
		[
			'@babel/plugin-transform-modules-commonjs',
			{
				strict: false,
				strictMode: false,
				lazy: (importSpecifier) => lazyImports.has(importSpecifier),
				allowTopLevelThis: true,
			},
		],
		/* <- react */
		['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
		'@babel/plugin-transform-react-jsx-self',
		'@babel/plugin-transform-react-jsx-source',
		'@babel/plugin-transform-react-display-name',
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					components: './launcher/components',
					stacks: './launcher/stacks',
					screens: './launcher/screens',
					utils: './launcher/utils',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
};
