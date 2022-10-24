import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import Buddies from 'components/Buddies';
import CompactLayout from 'components/layouts/Compact';

export const LauncherScreen: FC = () => {
	return (
		<CompactLayout contentContainerStyle={styles.contentContainer}>
			<View style={styles.innerContainer}>
				<Text>Launcher</Text>
			</View>
			<Buddies width={280} />
		</CompactLayout>
	);
};

export default LauncherScreen;

const styles = StyleSheet.create({
	contentContainer: {
		width: '100%',
		maxWidth: 1600,
		marginHorizontal: 'auto',
		flexDirection: 'row',
	},
	innerContainer: {
		flex: 1,
		paddingTop: 60,
	},
});
