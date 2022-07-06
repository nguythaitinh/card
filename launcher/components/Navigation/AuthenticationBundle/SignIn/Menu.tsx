import { FC, Fragment, useCallback } from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { modalActions } from '@cocrafts/metacraft-ui';
import {
	WalletAdapterProps,
	WalletReadyState,
} from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import Button from 'components/Button';
import Hyperlink from 'components/Hyperlink';
import Text from 'components/Text';
import { googleSignIn } from 'utils/lib/auth';
import { accountActions } from 'utils/state/account';

const walletIconSize = 18;
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		paddingVertical: 8,
		borderRadius: 18,
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.025)',
	},
	heading: {
		fontSize: 11,
		color: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
		marginVertical: 6,
	},
	separator: {
		marginVertical: 12,
		borderTopWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.05)',
	},
	hyperLink: {
		fontSize: 11,
		textAlign: 'center',
		marginVertical: 6,
	},
	walletIcon: {
		marginLeft: 4,
		width: walletIconSize,
		height: walletIconSize,
	},
	buttonContainer: {
		marginVertical: 4,
		marginHorizontal: 12,
	},
	buttonTitleContainer: {
		flex: 1,
		paddingVertical: 10,
	},
	buttonTitle: {
		flex: 1,
		paddingVertical: 6,
		color: '#FFFFFF',
		textAlign: 'center',
	},
	disabledTitle: {
		color: 'rgba(255, 255, 255, 0.1)',
	},
});

export const Menu: FC = () => {
	const {
		publicKey,
		wallet,
		signMessage,
		connected,
		select,
		disconnect,
		wallets,
	} = useWallet();

	const selectWallet = useCallback(
		async (adapter: WalletAdapterProps) => {
			if (adapter.readyState === WalletReadyState.Installed) {
				await select(adapter.name);
			} else {
				await Linking.openURL(adapter.url);
			}
		},
		[select],
	);

	const disconnectWallet = useCallback(async () => {
		await disconnect();
	}, [disconnect]);

	const signInWallet = useCallback(async () => {
		await accountActions.walletSigIn({ publicKey, signMessage });
		modalActions.hide('signInOptions');
	}, [select, wallet, publicKey, signMessage]);

	const signInGoogle = useCallback(async () => {
		modalActions.hide('signInOptions');
		await googleSignIn();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Simple Sign-In</Text>
			<Button
				outline
				style={styles.buttonContainer}
				title="Sign-In with Google"
				onPress={signInGoogle}
			/>
			<View style={styles.separator} />
			<Text style={styles.heading}>Wallet Sign-In</Text>
			{wallet && connected ? (
				<Fragment>
					<Button
						outline
						style={styles.buttonContainer}
						title={`Sign-In with ${wallet.adapter.name}`}
						onPress={signInWallet}
					/>
					<Hyperlink
						titleStyle={styles.hyperLink}
						title={`Disconnect ${wallet.adapter.name}`}
						onPress={disconnectWallet}
					/>
				</Fragment>
			) : (
				wallets.map(({ readyState, adapter }, i) => {
					const isReady = readyState === WalletReadyState.Installed;
					const titleStyle = [
						styles.buttonTitle,
						!isReady && styles.disabledTitle,
					];

					return (
						<Button
							key={i}
							outline
							style={styles.buttonContainer}
							onPress={() => selectWallet?.(adapter)}
						>
							<Text style={titleStyle}>{adapter.name}</Text>
						</Button>
					);
				})
			)}
		</View>
	);
};

export default Menu;
