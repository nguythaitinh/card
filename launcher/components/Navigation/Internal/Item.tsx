import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import { NavigationConfig, navigationHeight } from '../shared';

interface Props {
	item: NavigationConfig;
}

export const NavigationItem: FC<Props> = ({ item }) => {
	return (
		<View style={styles.container}>
			<Text>{item.title}</Text>
		</View>
	);
};

export default NavigationItem;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 9,
		paddingHorizontal: 9,
		height: navigationHeight.local,
		justifyContent: 'center',
	},
});
