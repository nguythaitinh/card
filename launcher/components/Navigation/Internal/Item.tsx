import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '@metacraft/ui';

import { NavigationConfig, navigationHeight } from '../shared';

interface Props {
	item: NavigationConfig;
	onNavigate?: (item: NavigationConfig) => void;
}

export const NavigationItem: FC<Props> = ({ item, onNavigate }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => onNavigate?.(item)}
		>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
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
	title: {
		color: '#cdc8b5',
	},
});
