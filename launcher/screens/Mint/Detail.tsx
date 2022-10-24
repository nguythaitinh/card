import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';
import { useRoute } from '@react-navigation/native';
import { packMap, PackStats } from 'screens/Mint/shared';
import { useSnapshot } from 'utils/hook';

import BannerSection from './sections/BannerSection';
import PackDetailSection from './sections/PackDetailSection';

export const DetailScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);
	const route = useRoute();
	const { id } = route.params as { id: string };
	const pack = packMap[id];

	const onPurchase = (pack: PackStats, amount: number) => {
		console.log(pack, amount);
	};

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<BannerSection dimensions={windowDimensions} />
			<PackDetailSection
				dimensions={windowDimensions}
				pack={pack}
				onPurchase={onPurchase}
			/>
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
