import { StyleSheet } from 'react-native';
import { ScaledSizes } from '@metacraft/ui';

export const headingSize = [35] as ScaledSizes;

export const sharedStyle = StyleSheet.create({
	heading: {
		fontFamily: 'Volkhov',
		fontWeight: '600',
		color: '#fff',
		marginBottom: 15,
		textAlign: 'center',
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
	},
});
