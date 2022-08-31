import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

export const LauncherHome: FC = () => {
	return (
		<View style={styles.container}>
			<Text>Dashboard</Text>
		</View>
	);
};

export default LauncherHome;

const styles = StyleSheet.create({
	container: {},
});
