import { FC } from 'react';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardGame from 'screens/CardGame';
import Home from 'screens/Home';
import Marketplace from 'screens/Marketplace';
import { useSnapshot } from 'utils/hook';

import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BrowserStack: FC = () => {
	const theme = useSnapshot(themeState);

	return (
		<NavigationContainer ref={navigationRef} linking={linking} theme={theme}>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="CardGame" component={CardGame} />
				<Stack.Screen name="Marketplace" component={Marketplace} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BrowserStack;
