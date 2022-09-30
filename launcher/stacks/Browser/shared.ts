import {
	createNavigationContainerRef,
	LinkingOptions,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';

export const screenOptions: StackNavigationOptions = {
	headerShown: false,
	animationEnabled: false,
};

export type HomeParamList = {
	Dashboard: undefined;
};

export type GameParamList = {
	id: string;
};

export type MarketplaceParamList = {
	Dashboard: undefined;
	DetailCard: {
		id: string;
	};
};

export type MintParamList = {
	Dashboard: undefined;
	DetailPack: {
		id: string;
	};
};

export type RootParamList = {
	Game: NavigatorScreenParams<GameParamList>;
	Home: NavigatorScreenParams<HomeParamList>;
	Marketplace: NavigatorScreenParams<MarketplaceParamList>;
	Mint: NavigatorScreenParams<MintParamList>;
	AuthResponse: undefined;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['https://stormgate.io'],
	config: {
		screens: {
			Home: {
				path: '/',
				screens: {
					Dashboard: '/',
				},
			},
			Marketplace: {
				path: '/marketplace',
				screens: {
					Dashboard: '/',
					DetailCard: '/detail/:id',
				},
			},
			Mint: {
				path: '/mint',
				screens: {
					Dashboard: '/',
					DetailPack: '/:id',
				},
			},
			AuthResponse: '/authreponse',
			Game: '/game/:id',
		},
	},
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (
	name: keyof RootParamList,
	params?: RootParamList[keyof RootParamList],
): void => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name as never, params as never);
	}
};
