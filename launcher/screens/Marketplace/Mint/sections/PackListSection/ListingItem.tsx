import React, { FC, useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Hoverable, Text } from '@metacraft/ui';

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
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const progressBarInner = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		width: (packRemaining / packTotal) * 100 + '%',
		borderRadius: 10,
		backgroundColor: '#dabe8c',
	} as ViewStyle;

	const packQuant = { color: isHovered ? '#d0c5a4' : '#7b705e' };

	return (
		<Hoverable
			onHoverIn={() => setIsHovered(true)}
			onHoverOut={() => setIsHovered(false)}
		>
			<View>
				<Card animationFlipDisable />
				<View style={styles.contentContainer}>
					<View style={styles.packInfo}>
						<Text style={styles.packTitle} responsiveSizes={[16]}>
							{packRarity}
							{''} Pack
						</Text>
						<Text style={packQuant}>
							{packRemaining}/{packTotal}
						</Text>
						<View style={styles.progressBarContainer}>
							<View style={progressBarInner} />
						</View>
						<Text>USDC {price}</Text>
					</View>
				</View>
			</View>
		</Hoverable>
	);
};

export default ListingItem;

const styles = StyleSheet.create({
	contentContainer: {
		paddingTop: 15,
		paddingHorizontal: 15,
	},
	packInfo: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'flex-end',
		alignContent: 'center',
	},
	packTitle: {
		fontWeight: '500',
		flex: 1,
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
});
