import React, { FC } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '@metacraft/ui';
import resources from 'launcher/utils/resources';

import Card from '../../../../../components/Marketplace/Card';

interface Props {
	packRarity: string;
	packTotal: number;
	packRemaining: number;
	price: number;
}

export const ListingItem: FC<Props> = ({
	packRarity,
	packTotal,
	packRemaining,
	price,
}) => {
	const progressBarInner = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		width: (packRemaining / packTotal) * 100 + '%',
		borderRadius: 10,
		backgroundColor: '#dabe8c',
	} as ViewStyle;

	return (
		<View style={styles.container}>
			<Card animationFlipDisable />
			<View style={styles.contentContainer}>
				<View style={styles.packInfo}>
					<Text style={styles.packTitle} responsiveSizes={[16]}>
						{packRarity}
						{''} Pack
					</Text>
					<Text style={styles.packQuant}>
						{packRemaining}/{packTotal}
					</Text>
					<View style={styles.progressBarContainer}>
						<View style={progressBarInner} />
					</View>
					<View style={styles.priceContainer}>
						<Image
							source={resources.marketplace.coinUsd}
							style={styles.coinIcon}
						/>
						<Text>USDC {price}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ListingItem;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginHorizontal: 20,
		width: 200,
	},
	contentContainer: {
		paddingTop: 15,
	},
	packInfo: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		alignContent: 'center',
	},
	packTitle: {
		fontWeight: '500',
	},
	packQuant: {
		color: '#7b705e',
	},
	progressBarContainer: {
		position: 'relative',
		marginVertical: 10,
		width: '100%',
		height: 10,
		borderRadius: 10,
		backgroundColor: '#4d4a44',
	},
	packPrice: {
		textAlign: 'center',
	},
	priceContainer: {
		width: '100%',
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
