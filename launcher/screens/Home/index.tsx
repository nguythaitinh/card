import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { DimensionState, dimensionState } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';
import { useSnapshot } from 'utils/hook';
import { iStyles } from 'utils/styles';

import BattlefieldSetupSection from './sections/BattlefieldSetup';
import CardExplainSection from './sections/CardExplain';
import ElementalInteractionSection from './sections/ElementalInteraction';
import GameIntroSection from './sections/GameIntro';
import HeadingSection from './sections/Heading';

export const HomeScreen: FC = () => {
	const { windowSize, responsiveLevel } =
		useSnapshot<DimensionState>(dimensionState);

	return (
		<ScrollLayout
			contentContainerStyle={[iStyles.contentContainer, styles.container]}
		>
			<HeadingSection />
			<GameIntroSection
				dimension={windowSize}
				responsiveLevel={responsiveLevel}
			/>
			<BattlefieldSetupSection dimension={windowSize} />
			<CardExplainSection
				dimension={windowSize}
				responsiveLevel={responsiveLevel}
			/>
			<ElementalInteractionSection responsiveLevel={responsiveLevel} />
		</ScrollLayout>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
	},
});
