import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';

import { useSnapshot } from '../../utils/hook/alias';

import BannerSection from './sections/BannerSection';
import PackDetailSection from './sections/PackDetailSection';

export const DetailScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<BannerSection dimensions={windowDimensions} />
			<PackDetailSection dimensions={windowDimensions} />
		</ScrollView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#241414',
	},
});
