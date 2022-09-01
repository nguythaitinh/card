import { Platform, StyleSheet } from 'react-native';

export const iStyles = StyleSheet.create({
	contentContainer: {
		width: '100%',
		maxWidth: 1600,
		marginHorizontal: 'auto',
	},
});

export const noUserSelect = Platform.select({
	web: { userSelect: 'none' },
	default: {},
});
