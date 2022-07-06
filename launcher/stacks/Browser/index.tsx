import { FC } from 'react';
import {
	DefaultTheme,
	NavigationContainer,
	Theme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home';
import { useSnapshot } from 'utils/hook';
import { themeState } from 'utils/state/theme';

import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BrowserStack: FC = () => {
	const { colors } = useSnapshot(themeState);
	const navigationTheme: Theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: colors.bg,
		},
	};

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={linking}
			theme={navigationTheme}
		>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default BrowserStack;
