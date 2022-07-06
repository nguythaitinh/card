import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home';

import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BrowserStack: FC = () => {
	return (
		<NavigationContainer ref={navigationRef} linking={linking}>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BrowserStack;
