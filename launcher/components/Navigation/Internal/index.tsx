import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { navigationHeight } from 'components/Navigation/shared';
import { iStyles } from 'utils/styles';

export const InternalNavigation: FC = () => {
	return (
		<View style={styles.container}>
			<View style={iStyles.contentContainer}>
				<Text>InternalNavigation</Text>
			</View>
		</View>
	);
};

export default InternalNavigation;

const styles = StyleSheet.create({
	container: {
		height: navigationHeight.local,
	},
});
