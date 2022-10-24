import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { AppState, appState } from '@metacraft/ui';
import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js';
import { useRoute } from '@react-navigation/native';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import ScrollLayout from 'components/layouts/Scroll';
import { packMap, PackStats } from 'screens/Mint/shared';
import { useSnapshot } from 'utils/hook';

import BannerSection from './sections/BannerSection';
import PackDetailSection from './sections/PackDetailSection';

export const DetailScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);
	const { connect, publicKey, signMessage, signTransaction } = useWallet();
	const { connection } = useConnection();
	const route = useRoute();
	const { id } = route.params as { id: string };
	const pack = packMap[id];

	const onPurchase = useCallback(
		async (pack: PackStats, amount: number): Promise<void> => {
			const metaplex = Metaplex.make(connection).use(
				walletAdapterIdentity({
					publicKey,
					signMessage,
					signTransaction,
				}),
			);

			const candyMachine = await metaplex.candyMachinesV2().findByAddress({
				address: new PublicKey(pack.sugarId),
			});

			const result = await metaplex.candyMachinesV2().mint({
				candyMachine,
				newOwner: publicKey as never,
			});

			console.log(result, '<--');
		},
		[connect, connection, publicKey, signMessage],
	);

	return (
		<ScrollLayout style={styles.container}>
			<BannerSection dimensions={windowDimensions} />
			<PackDetailSection
				dimensions={windowDimensions}
				pack={pack}
				onPurchase={onPurchase}
			/>
		</ScrollLayout>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#241414',
	},
});
