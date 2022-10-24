import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';
import { iStyles } from 'utils/styles';

export const HomeScreen: FC = () => {
	return (
		<ScrollLayout contentContainerStyle={iStyles.contentContainer}>
			<Text>HomeScreen</Text>
		</ScrollLayout>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {},
});
