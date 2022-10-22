import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { navigationHeight } from 'components/Navigation/shared';
import { iStyles } from 'utils/styles';

export const InternalNavigation: FC = () => {
	return (
		<View style={styles.container}>
			<View style={iStyles.contentContainer} />
		</View>
	);
};

export default InternalNavigation;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#21150f',
		height: navigationHeight.local,
	},
});
