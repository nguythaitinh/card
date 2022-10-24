import React, { FC, Fragment, useRef } from 'react';
import {
	Image,
	ImageBackground,
	ScaledSize,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
	AnimateDirections,
	BindDirections,
	Hyperlink,
	modalActions,
	Text,
} from '@metacraft/ui';
import Accordion from 'components/Marketplace/Accordion';
import Card from 'components/Marketplace/Card';
import resources from 'launcher/utils/resources';
import { PackStats, Rarity } from 'screens/Mint/shared';
import { iStyles } from 'utils/styles';

import Popup from '../../Popup';

interface Props {
	dimensions: ScaledSize;
	pack: PackStats;
	onPurchase?: (pack: PackStats, volume: number) => void;
}

export const PackDetailSection: FC<Props> = ({
	dimensions,
	pack,
	onPurchase,
}) => {
	// const scaledWidth = Math.min(
	// 	iStyles.contentContainer.maxWidth / dimensions.width,
	// 	1,
	// );

	const progressBarInner = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		width: (600 / 694) * 100 + '%',
		borderRadius: 10,
		backgroundColor: '#dabe8c',
	} as ViewStyle;

	const containerRef = useRef<View>(null);

	const showPopup = () => {
		modalActions.show({
			id: 'Successful Buying',
			component: () => <Popup dimensions={dimensions} />,
			bindingDirection: BindDirections.Inner,
			animateDirection: AnimateDirections.BottomRight,
			bindingRef: containerRef,
			maskActiveOpacity: 0.9,
			maskStyle: {
				backgroundColor: 'rgb(17, 9, 9)',
			},
		});
	};

	return (
		<View style={[iStyles.contentContainer, { paddingVertical: 100 }]}>
			<View style={styles.container}>
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
							<Text style={{ textAlign: 'center', paddingVertical: 15 }}>
								Legendary is the highest level of... with enhanced chance
								receiving higher rarity card
							</Text>
							<Text>{pack.sugarId}</Text>
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
									600/694
								</Text>
							</View>
							{[1, 5, 10].map((amount) => {
								return (
									<View key={amount} style={{ marginTop: 20, width: '100%' }}>
										<TouchableOpacity
											onPress={() => onPurchase?.(pack, amount)}
										>
											<ImageBackground
												source={resources.marketplace.buyButtonBackground}
												style={{
													flexDirection: 'row',
													alignItems: 'center',
													paddingVertical: 13,
													paddingHorizontal: 30,
												}}
											>
												<Text>{amount} Card</Text>
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
									</View>
								);
							})}
							<View style={{ marginTop: 15, opacity: 0.5 }}>
								<Text style={{ fontWeight: '300', fontSize: 12 }}>
									<Hyperlink title="Connect Wallet" /> to buy
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.rowContainer}>
					<View style={styles.innerContainer}>
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
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PackDetailSection;

const styles = StyleSheet.create({
	container: {},
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
