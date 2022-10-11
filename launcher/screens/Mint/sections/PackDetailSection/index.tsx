import React, { FC, useRef } from 'react';
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
	modalActions,
	Text,
} from '@metacraft/ui';
import resources from 'launcher/utils/resources';

import Card from '../../../../components/Marketplace/Card';
import { iStyles } from '../../../../utils/styles';
import Popup from '../../Popup';
interface Props {
	dimensions: ScaledSize;
}

export const PackDetailSection: FC<Props> = ({ dimensions }) => {
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
								Silver Pack
							</Text>
						</ImageBackground>
						<Text style={{ textAlign: 'center', paddingVertical: 15 }}>
							Legendary is the highest level of... with enhanced chance
							receiving higher rarity card
						</Text>
						<View
							style={[
								styles.container,
								{ width: '100%', alignItems: 'center' },
							]}
						>
							<View style={styles.progressBarContainer}>
								<View style={progressBarInner} />
							</View>
							<Text style={{ marginLeft: 20, color: '#ddd2af' }}>600/694</Text>
						</View>
						<View style={{ marginTop: 20, width: '100%' }}>
							<TouchableOpacity onPress={showPopup}>
								<ImageBackground
									source={resources.marketplace.buyButtonBackground}
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										paddingVertical: 13,
										paddingHorizontal: 30,
									}}
								>
									<Text>1 Card</Text>
									<Image
										source={resources.marketplace.buyButtonDash}
										style={{ width: 86, height: 2, marginLeft: 10 }}
									/>
									<View style={styles.priceContainer}>
										<Image
											source={resources.marketplace.coinUsd}
											style={styles.coinIcon}
										/>
										<Text>USDC 18</Text>
									</View>
								</ImageBackground>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 20, width: '100%' }}>
							<TouchableOpacity>
								<ImageBackground
									source={resources.marketplace.buyButtonBackground}
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										paddingVertical: 13,
										paddingHorizontal: 30,
									}}
								>
									<Text>1 Card</Text>
									<Image
										source={resources.marketplace.buyButtonDash}
										style={{ width: 86, height: 2, marginLeft: 10 }}
									/>
									<View style={styles.priceContainer}>
										<Image
											source={resources.marketplace.coinUsd}
											style={styles.coinIcon}
										/>
										<Text>USDC 18</Text>
									</View>
								</ImageBackground>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 20, width: '100%' }}>
							<TouchableOpacity>
								<ImageBackground
									source={resources.marketplace.buyButtonBackground}
									style={{
										flexDirection: 'row',
										alignItems: 'center',
										paddingVertical: 13,
										paddingHorizontal: 30,
									}}
								>
									<Text>1 Card</Text>
									<Image
										source={resources.marketplace.buyButtonDash}
										style={{ width: 86, height: 2, marginLeft: 10 }}
									/>
									<View style={styles.priceContainer}>
										<Image
											source={resources.marketplace.coinUsd}
											style={styles.coinIcon}
										/>
										<Text>USDC 18</Text>
									</View>
								</ImageBackground>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default PackDetailSection;

const styles = StyleSheet.create({
	container: {
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
});
