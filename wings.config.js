const splitBundle = (configs) => {
	configs.entry = {
		app: {
			...configs.entry.app,
			dependOn: 'react-core',
		},
		'react-core': {
			import: [
				'react',
				'react-dom',
				'react-native',
				'react-art',
				'@react-native-community/async-storage',
			],
		},
	};

	return configs;
};

const setEnvironments = (configs, { webpack, wingsConfig }) => {
	const { DefinePlugin } = webpack;
	const env = wingsConfig.env();
	const isProduction = wingsConfig.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
	});

	return configs;
};

module.exports = {
	webpackConfigs: [setEnvironments, splitBundle],
	moduleAlias: () => {
		return {
			global: {
				'react-native': 'react-native-web',
			},
		};
	},
};
