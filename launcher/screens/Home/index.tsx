import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { DimensionState, dimensionState } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';
import { useSnapshot } from 'utils/hook';
import { iStyles } from 'utils/styles';

import GameIntroSection from './sections/GameIntro';
import HeadingSection from './sections/Heading';

export const HomeScreen: FC = () => {
	const { windowSize } = useSnapshot<DimensionState>(dimensionState);

	return (
		<ScrollLayout
			contentContainerStyle={[iStyles.contentContainer, styles.container]}
		>
			<HeadingSection />
			<GameIntroSection dimension={windowSize} />
		</ScrollLayout>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
	},
});
