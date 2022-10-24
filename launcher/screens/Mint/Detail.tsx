import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	AnimateDirections,
	AppState,
	appState,
	BindDirections,
	modalActions,
} from '@metacraft/ui';
import {
	CandyMachineV2,
	Metaplex,
	NftWithToken,
	walletAdapterIdentity,
} from '@metaplex-foundation/js';
import { useRoute } from '@react-navigation/native';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import ScrollLayout from 'components/layouts/Scroll';
import { packMap } from 'screens/Mint/shared';
import { useSnapshot } from 'utils/hook';

import BannerSection from './sections/BannerSection';
import PackDetailSection from './sections/PackDetailSection';
import Popup from './Popup';

export const DetailScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);
	const { connect, publicKey, signMessage, signTransaction } = useWallet();
	const mplRef = useRef<Metaplex>();
	const sugarRef = useRef<CandyMachineV2>();
	const { connection } = useConnection();
	const route = useRoute();
	const { id } = route.params as { id: string };
	const pack = packMap[id];
	const containerRef = useRef<View>(null);
	const [isLoading, setIsLoading] = useState(false);

	const showPopup = (nft: NftWithToken) => {
		modalActions.show({
			id: 'Successful Buying',
			component: () => <Popup dimensions={windowDimensions} nft={nft} />,
			bindingDirection: BindDirections.Inner,
			animateDirection: AnimateDirections.BottomRight,
			bindingRef: containerRef,
			maskActiveOpacity: 0.9,
			maskStyle: {
				backgroundColor: 'rgb(17, 9, 9)',
			},
		});
	};

	const onPurchase = useCallback(
		async (candyMachine: CandyMachineV2, amount: number): Promise<void> => {
			const result = await mplRef.current?.candyMachinesV2().mint({
				candyMachine,
				newOwner: publicKey as never,
			});

			result?.nft && showPopup(result.nft);
			console.log(result, '<--');
		},
		[connect, connection, publicKey, signMessage],
	);

	useEffect(() => {
		const injectRefs = async () => {
			setIsLoading(true);

			const address = new PublicKey(pack.sugarId);
			const walletAdapter = walletAdapterIdentity({
				publicKey,
				signMessage,
				signTransaction,
			});
			const metaplex = await Metaplex.make(connection).use(walletAdapter);
			const sugar = await metaplex.candyMachinesV2().findByAddress({ address });

			setIsLoading(false);
			mplRef.current = metaplex;
			sugarRef.current = sugar;
		};

		injectRefs();
	}, [pack.sugarId, connection, publicKey, signMessage, signTransaction]);

	return (
		<ScrollLayout contentContainerStyle={styles.container}>
			<BannerSection dimensions={windowDimensions} />
			<PackDetailSection
				isLoading={isLoading}
				pack={pack}
				onPurchase={onPurchase}
				candyMachine={sugarRef.current}
			/>
		</ScrollLayout>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0d0712',
	},
});
