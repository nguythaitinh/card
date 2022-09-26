import { StyleSheet } from 'react-native';
import { ScaledSizes } from '@metacraft/ui';

interface MintSizes {
	responsiveHeadings: ScaledSizes;
}

export const mintSizes: MintSizes = {
	responsiveHeadings: [45, 45, 38, 30],
};

export const mintStyle = StyleSheet.create({
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
