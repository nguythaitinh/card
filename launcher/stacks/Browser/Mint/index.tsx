import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MintScreen from '../../../screens/Mint';
import DetailScreen from '../../../screens/Mint/Detail';
import { MintParamList, screenOptions } from '../shared';

const Stack = createStackNavigator<MintParamList>();

export const MintStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="Dashboard" component={MintScreen} />
			<Stack.Screen name="DetailPack" component={DetailScreen} />
		</Stack.Navigator>
	);
};

export default MintStack;
