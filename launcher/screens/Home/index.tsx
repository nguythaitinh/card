import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { themeState } from '@metacraft/ui';
import TopNavigation from 'components/Home/TopNavigation';
import { useSnapshot } from 'utils/hook';

export const LauncherHome: FC = () => {
	const { colors, sizes } = useSnapshot(themeState);

	return (
		<View style={styles.container}>
			<TopNavigation />
		</View>
	);
};

export default LauncherHome;

const styles = StyleSheet.create({
	container: {},
});
