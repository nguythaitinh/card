import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameDashboard from 'screens/Game/Dashboard';
import GameDuel from 'screens/Game/Duel';

import { GameParamList, screenOptions } from '../shared';

const Stack = createStackNavigator<GameParamList>();

export const GameStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={GameDashboard} />
			<Stack.Screen name="Duel" component={GameDuel} />
		</Stack.Navigator>
	);
};

export default GameStack;
