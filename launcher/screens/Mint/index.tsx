import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';

import { useSnapshot } from '../../utils/hook/alias';

import BannerSection from './sections/BannerSection';
import FaqSection from './sections/FaqSection';
import PackListSection from './sections/PackListSection';
import WhyBuyNftSection from './sections/WhyBuyNftSection';

export const MintScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<BannerSection dimensions={windowDimensions} />
			<PackListSection />
			<WhyBuyNftSection dimensions={windowDimensions} />
			<FaqSection />
		</ScrollView>
	);
};

export default MintScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#241414',
	},
});
