import React, { FC, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	AnimateDirections,
	AppState,
	appState,
	BindDirections,
	modalActions,
} from '@metacraft/ui';
import { useRoute } from '@react-navigation/native';
import ScrollLayout from 'components/layouts/Scroll';
import { packMap } from 'screens/Mint/shared';
import { useSnapshot, useWalletSugar } from 'utils/hook';

import PackDetail from './PackageDetail';
import PurchaseSuccessModal from './PurchaseSuccessModal';

export const DetailScreen: FC = () => {
	const route = useRoute();
	const { id } = route.params as { id: string };
	const pack = packMap[id];
	const { windowDimensions } = useSnapshot<AppState>(appState);
	const sugar = useWalletSugar(pack.sugarId);
	const containerRef = useRef<View>(null);

	const onPurchase = async () => {
		const result = await sugar.mintNft();

		if (result?.nft) {
			modalActions.show({
				id: 'Successful Buying',
				component: () => (
					<PurchaseSuccessModal
						dimensions={windowDimensions}
						nft={result.nft}
					/>
				),
				bindingDirection: BindDirections.Inner,
				animateDirection: AnimateDirections.BottomRight,
				bindingRef: containerRef,
				maskActiveOpacity: 0.9,
				maskStyle: {
					backgroundColor: 'rgb(17, 9, 9)',
				},
			});
		}
	};

	return (
		<ScrollLayout contentContainerStyle={styles.container}>
			<PackDetail pack={pack} sugar={sugar} onPurchase={onPurchase} />
		</ScrollLayout>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0d0712',
	},
});
