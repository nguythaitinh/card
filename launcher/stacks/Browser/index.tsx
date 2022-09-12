import { FC } from 'react';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GameScreen from '../../screens/Game';
import HomeScreen from '../../screens/Home';
import MarketplaceScreen from '../../screens/Marketplace';
import DetailCardScreen from '../../screens/Marketplace/DetailCard';
import { useSnapshot } from '../../utils/hook';

import {
	linking,
	MarketplaceParamList,
	navigationRef,
	RootParamList,
	screenOptions,
} from './shared';

const Stack = createStackNavigator<RootParamList>();
const MarketplaceStack = createStackNavigator<MarketplaceParamList>();

const MarketplaceStackScreen: FC = () => {
	return (
		<MarketplaceStack.Navigator screenOptions={screenOptions}>
			<MarketplaceStack.Screen name="Dashboard" component={MarketplaceScreen} />
			<MarketplaceStack.Screen name="DetailCard" component={DetailCardScreen} />
		</MarketplaceStack.Navigator>
	);
};

export const BrowserStack: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<NavigationContainer ref={navigationRef} linking={linking} theme={theme}>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Marketplace" component={MarketplaceStackScreen} />
				<Stack.Screen name="Game" component={GameScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BrowserStack;
