import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from '@metacraft/ui';

import { styles } from './internal';

export const DetailCard: FC = () => {
	return (
		<View style={styles.overlay}>
			<Text>DetailCard</Text>
		</View>
	);
};

export default DetailCard;
