import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Hoverable } from '@metacraft/ui';

import { NavigationConfig } from './shared';

interface Props {
	config: NavigationConfig;
	onPress?: (config: NavigationConfig) => void;
}

export const NavigationItem: FC<Props> = ({ config, onPress }) => {
	return (
		<Hoverable style={styles.container}>
			<TouchableOpacity onPress={() => onPress?.(config)}>
				<Text style={styles.title}>{config.title}</Text>
			</TouchableOpacity>
		</Hoverable>
	);
};

export default NavigationItem;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 14,
	},
	title: {
		color: '#FFFFFF',
		fontSize: 13,
		fontWeight: '600',
	},
});
