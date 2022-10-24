import { FC } from 'react';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import { useSnapshot } from 'utils/hook';

import GameStack from './Game';
import MarketplaceStack from './Marketplace';
import MintStack from './Mint';
import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BrowserStack: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<NavigationContainer ref={navigationRef} linking={linking} theme={theme}>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Game" component={GameStack} />
				<Stack.Screen name="Marketplace" component={MarketplaceStack} />
				<Stack.Screen name="Mint" component={MintStack} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BrowserStack;
