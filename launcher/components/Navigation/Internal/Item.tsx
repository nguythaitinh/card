import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import { NavigationConfig } from '../shared';

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
	container: {},
});
