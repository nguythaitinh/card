import React, { FC, Fragment } from 'react';
import {
	ActivityIndicator,
	Image,
	ImageBackground,
	Linking,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Hyperlink, modalActions, Text } from '@metacraft/ui';
import { CandyMachineV2, toBigNumber } from '@metaplex-foundation/js';
import { useWallet } from '@solana/wallet-adapter-react';
import Accordion from 'components/Marketplace/Accordion';
import Card from 'components/Marketplace/Card';
import SignInOptions from 'components/modals/SignInOptions';
import resources from 'launcher/utils/resources';
import { PackStats, Rarity } from 'screens/Mint/shared';
import { iStyles } from 'utils/styles';

interface Props {
	isLoading?: boolean;
	pack: PackStats;
	candyMachine?: CandyMachineV2;
	onPurchase?: (candyMachine: CandyMachineV2, volume: number) => void;
}

export const PackDetailSection: FC<Props> = ({
	isLoading,
	pack,
	candyMachine,
	onPurchase,
}) => {
	const { connected, disconnect } = useWallet();
	const progressBarInner =
		candyMachine &&
		({
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			width:
				(candyMachine?.itemsRemaining.toNumber() /
					candyMachine?.itemsAvailable.toNumber()) *
					100 +
				'%',
			borderRadius: 10,
			backgroundColor: '#dabe8c',
		} as ViewStyle);

	const onConnectWalletPress = (): void => {
		modalActions.show({
			id: 'signInOptions',
			component: SignInOptions,
			maskActiveOpacity: 0.8,
			context: { web3Only: true },
		});
	};

	return (
		<View style={[iStyles.contentContainer, styles.container]}>
			<View style={styles.rowContainer}>
				<View style={styles.innerContainer}>
					<Card
						size={350}
						animationFlipDisable={true}
						animationHoveredDisable={true}
					/>
				</View>
				<View style={styles.innerContainer}>
					<View style={{ width: 350, alignItems: 'center' }}>
						<ImageBackground
							source={resources.marketplace.titleSeparator}
							style={{ width: '100%', paddingVertical: 15 }}
						>
							<Text
								responsiveSizes={[20]}
								style={[styles.title, { textAlign: 'center' }]}
							>
								{pack.title} Pack
							</Text>
						</ImageBackground>
						<Text style={{ width: '100%', paddingVertical: 15 }}>
							Number of Card/Pack: 1 Card
						</Text>
						{/* <Text>{pack.sugarId}</Text> */}
						{isLoading ? (
							<ActivityIndicator size="large" />
						) : (
							<Fragment>
								<View
									style={[
										styles.rowContainer,
										{ width: '100%', alignItems: 'center' },
									]}
								>
									<View style={styles.progressBarContainer}>
										<View style={progressBarInner} />
									</View>
									<Text style={{ marginLeft: 20, color: '#ddd2af' }}>
										{`${candyMachine?.itemsRemaining}/${candyMachine?.itemsAvailable}`}
									</Text>
								</View>
								{candyMachine &&
								candyMachine.itemsRemaining > toBigNumber(0) ? (
									[1].map((amount) => {
										return (
											<View
												key={amount}
												style={{ marginTop: 20, width: '100%' }}
											>
												<TouchableOpacity
													disabled={!connected}
													onPress={() => onPurchase?.(candyMachine, amount)}
												>
													<ImageBackground
														source={resources.marketplace.buyButtonBackground}
														style={styles.buttonBackground}
													>
														<Text>{amount} Pack</Text>
														<Image
															source={resources.marketplace.buyButtonDash}
															style={{ width: 86, height: 2, marginLeft: 10 }}
														/>
														<View style={styles.priceContainer}>
															<Image
																source={resources.marketplace.coinUsd}
																style={styles.coinIcon}
															/>
															<Text>USDC {amount * pack.unitPrice}</Text>
														</View>
													</ImageBackground>
												</TouchableOpacity>
												{!connected && (
													<View
														style={{
															position: 'absolute',
															left: 0,
															top: 0,
															right: 0,
															bottom: 0,
															opacity: 0.5,
															backgroundColor: '#000',
														}}
													/>
												)}
											</View>
										);
									})
								) : (
									<Text
										responsiveSizes={[25]}
										style={{ marginTop: 15, fontWeight: '600' }}
									>
										SOLD OUT
									</Text>
								)}
							</Fragment>
						)}

						<View style={{ marginTop: 15, opacity: 0.5 }}>
							{connected ? (
								<Text style={{ fontWeight: '300', fontSize: 12 }}>
									<Hyperlink title="Disconnect Wallet" onPress={disconnect} />
								</Text>
							) : (
								<Text style={{ fontWeight: '300', fontSize: 12 }}>
									<Hyperlink
										title="Connect Wallet"
										onPress={onConnectWalletPress}
									/>{' '}
									to buy
								</Text>
							)}
						</View>
						<View style={{ width: 350 }}>
							<Text responsiveSizes={[20]} style={styles.title}>
								Rarity Rate
							</Text>
							<View style={styles.stripeSeparator} />
							{Object.keys(pack.rarity).map((item) => (
								<View
									style={[
										styles.rowContainer,
										{ justifyContent: 'space-between', paddingVertical: 5 },
									]}
									key={item}
								>
									<Text style={styles.rarityTitle}>{item}</Text>
									<Text style={styles.rarityValue}>{`${
										pack.rarity[item as Rarity]
									}%`}</Text>
								</View>
							))}
						</View>
					</View>
				</View>
			</View>
			<View style={styles.rowContainer}>
				<View style={styles.innerContainer}>
					<View style={{ width: 350 }}>
						<Accordion
							title={
								<Fragment>
									<Text responsiveSizes={[20]} style={styles.title}>
										Information
									</Text>
									<View style={[styles.stripeSeparator, { width: 350 }]} />
								</Fragment>
							}
						>
							<Hyperlink
								title="Check this Candy Machine information on Solscan"
								onPress={() =>
									Linking.openURL(`https://solscan.io/account/${pack.sugarId}`)
								}
							/>
						</Accordion>
					</View>
				</View>
				<View style={styles.innerContainer}>
					<View style={{ width: 350 }} />
				</View>
			</View>
		</View>
	);
};

export default PackDetailSection;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 100,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	innerContainer: {
		marginHorizontal: 40,
		marginBottom: 20,
		alignItems: 'center',
	},
	title: {
		color: '#cdc8b5',
		paddingVertical: 10,
		fontWeight: '500',
	},
	progressBarContainer: {
		position: 'relative',
		marginVertical: 10,
		flex: 1,
		height: 10,
		borderRadius: 10,
		backgroundColor: '#4d4a44',
	},
	buttonBackground: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 13,
		paddingHorizontal: 30,
	},
	packPrice: {
		textAlign: 'center',
	},
	priceContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	coinIcon: {
		width: 15,
		height: 15,
		marginRight: 10,
	},
	stripeSeparator: {
		width: '100%',
		height: 3,
		backgroundColor: '#3e2c26',
		marginBottom: 10,
	},
	rarityTitle: {
		fontWeight: '300',
		color: '#6a6158',
	},
	rarityValue: {
		fontWeight: '300',
		color: '#cdc8b5',
	},
});
