import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MintScreen from 'launcher/screens/Mint';

import { MintParamList, screenOptions } from '../shared';

const Stack = createStackNavigator<MintParamList>();

export const MintStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={MintScreen} />
		</Stack.Navigator>
	);
};

export default MintStack;
