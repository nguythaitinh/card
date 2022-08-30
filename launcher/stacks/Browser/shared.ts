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

export type CardParamList = {
	id: string;
};

export type RootParamList = {
	CardGame: NavigatorScreenParams<CardParamList>;
	Home: NavigatorScreenParams<HomeParamList>;
	AuthResponse: undefined;
};

export const linking: LinkingOptions<RootParamList> = {
	prefixes: ['https://stormgate.io'],
	config: {
		screens: {
			CardGame: '/card/:id',
			Home: {
				path: '/',
				screens: {
					Dashboard: '/',
				},
			},
			AuthResponse: '/authreponse',
		},
	},
};

export const navigationRef = createNavigationContainerRef<RootParamList>();

export const navigate = (
	name: keyof RootParamList,
	params?: RootParamList[keyof RootParamList],
): void => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params);
	}
};
