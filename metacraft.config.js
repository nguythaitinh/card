const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const compatible = (configs, { modules }) => {
	const { webpack } = modules;
	configs.resolve.fallback = {
		assert: require.resolve('assert'),
		stream: require.resolve('stream-browserify'),
		buffer: require.resolve('buffer'),
		crypto: false,
	};

	configs.plugins.push(
		new webpack.ProvidePlugin({
			Buffer: ['buffer', 'Buffer'],
		}),
	);

	return configs;
};

const setEnvironments = (configs, internal) => {
	const { webpack } = internal.modules;
	const { DefinePlugin } = webpack;
	const env = internal.configs.env();
	const isProduction = internal.configs.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		__DEV__: !isProduction,
		ENV: JSON.stringify(env),
	});

	return configs;
};

const copyAssets = (configs) => {
	configs.plugins.push(
		new CopyPlugin({
			patterns: [
				{
					from: resolve(process.cwd(), 'assets/'),
					to: './',
					filter: (uri) => {
						return !(uri.endsWith('.ejs') || uri.endsWith('.sass'));
					},
				},
			],
		}),
	);

	return configs;
};

const externals = (configs) => {
	configs.externals = {
		rxjs: 'rxjs',
		react: 'React',
		lodash: '_',
		'amazon-cognito-identity-js': 'AmazonCognitoIdentity',
		'react-dom': 'ReactDOM',
		'react-art': 'ReactART',
		'@blocto/sdk': 'BloctoSDK',
		'@solana/web3.js': 'solanaWeb3',
	};

	return configs;
};

const splitBundle = (configs) => {
	configs.entry = {
		app: {
			...configs.entry.app,
			dependOn: ['rn-libs'],
		},
		'rn-libs': {
			import: [
				'react-native',
				'react-native-reanimated',
				'react-native-gesture-handler',
				'@react-native-async-storage/async-storage',
				'@react-navigation/native',
				'@react-navigation/stack',
			],
		},
	};

	return configs;
};

module.exports = {
	useBabel: true,
	publicPath: () => process.env.PUBLIC_URL || '/',
	keepPreviousBuild: () => true,
	buildId: () => 'app',
	webpackMiddlewares: [
		compatible,
		setEnvironments,
		copyAssets,
		externals,
		splitBundle,
	],
	moduleAlias: {
		global: {
			'react-native': 'react-native-web',
		},
	},
};
