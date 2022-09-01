import { StyleSheet } from 'react-native';
import { ScaledSizes } from '@metacraft/ui';

interface MarketplaceSizes {
	responsiveHeadings: ScaledSizes;
}

export const marketplaceSizes: MarketplaceSizes = {
	responsiveHeadings: [35, 35, 30, 25],
};

export const marketplaceStyle = StyleSheet.create({
	heading: {
		fontWeight: '600',
		color: '#fff',
		textAlign: 'center',
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});
