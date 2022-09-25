import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';

import { useSnapshot } from '../../../utils/hook/alias';

import BannerSection from './sections/BannerSections';

export const MintScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);

	return (
		<ScrollView style={styles.container}>
			<BannerSection dimensions={windowDimensions} />
		</ScrollView>
	);
};

export default MintScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#241414',
	},
});
