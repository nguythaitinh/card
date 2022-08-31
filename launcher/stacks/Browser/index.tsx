import { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { themeState } from '@metacraft/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buddies from 'components/Buddies';
import TopNavigation from 'components/Home/TopNavigation';
import CardGame from 'screens/CardGame';
import Home from 'screens/Home';
import { useSnapshot } from 'utils/hook';

import { linking, navigationRef, RootParamList, screenOptions } from './shared';

const Stack = createStackNavigator<RootParamList>();

export const BrowserStack: FC = () => {
	const theme = useSnapshot(themeState);
	const { sizes } = theme;

	const containerStyle: ViewStyle = {
		flex: 1,
		paddingTop: sizes.topNavigation,
	};

	return (
		<NavigationContainer ref={navigationRef} linking={linking} theme={theme}>
			<View style={containerStyle}>
				<TopNavigation />
				<View style={styles.innerContainer}>
					<View style={styles.screenContainer}>
						<Stack.Navigator screenOptions={screenOptions}>
							<Stack.Screen name="Home" component={Home} />
							<Stack.Screen name="CardGame" component={CardGame} />
						</Stack.Navigator>
					</View>
					<Buddies width={sizes.leftNavigation} />
				</View>
			</View>
		</NavigationContainer>
	);
};

export default BrowserStack;

export const styles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		maxWidth: 1280,
		margin: 'auto',
	},
	screenContainer: {
		flex: 1,
		backgroundColor: 'red',
	},
});
