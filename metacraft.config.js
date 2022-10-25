const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const compatible = (configs, { modules }) => {
	const { webpack } = modules;
	const bufferPlugin = { Buffer: ['buffer', 'Buffer'] };

	configs.plugins.push(new webpack.ProvidePlugin(bufferPlugin));
	configs.ignoreWarnings = [/Failed to parse source map/];
	configs.resolve.fallback = {
		crypto: require.resolve('crypto-browserify'),
		stream: require.resolve('stream-browserify'),
		util: require.resolve('util'),
		assert: require.resolve('assert'),
		fs: false,
		process: false,
		path: false,
		zlib: false,
	};

	return configs;
};

const setEnvironments = (configs, internal) => {
	const { webpack } = internal.modules;
	const { DefinePlugin } = webpack;
	const env = internal.configs.env();
	const gitBranch = process.env.gitBranch || 'dev';
	const isProduction = internal.configs.isProduction(env);

	configs.plugins[0] = new DefinePlugin({
		process: { env: {} },
		gitBranch: JSON.stringify(gitBranch),
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
