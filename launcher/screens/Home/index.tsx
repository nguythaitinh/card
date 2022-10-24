import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';

export const HomeScreen: FC = () => {
	return (
		<ScrollLayout>
			<Text>HomeScreen</Text>
		</ScrollLayout>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {},
});
