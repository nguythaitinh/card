import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';

import { useSnapshot } from '../../utils/hook/alias';

import BannerSection from './sections/BannerSection';
import PackListSection from './sections/PackListSection';

export const MintScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);

	return (
		<ScrollView style={styles.container}>
			<BannerSection dimensions={windowDimensions} />
			<PackListSection />
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
