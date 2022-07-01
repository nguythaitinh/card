module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'@babel/plugin-transform-react-jsx',
			{
				runtime: 'automatic',
			},
		],
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
