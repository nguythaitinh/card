import { StyleSheet } from 'react-native';

const commandSize = 32;
const dotSize = 8;

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginLeft: 6,
		padding: 4,
	},
	infoContainer: {
		flex: 1,
		paddingLeft: 8,
		justifyContent: 'flex-end',
	},
	inlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	inlineIcon: {
		marginRight: 2,
	},
	primaryText: {
		color: '#FFFFFF',
		fontWeight: '300',
		lineHeight: 16,
	},
	secondaryText: {
		color: 'rgba(255, 255, 255, 0.46)',
		fontSize: 11,
		fontWeight: '300',
	},
	commandContainer: {
		width: commandSize,
		height: commandSize,
		borderRadius: commandSize / 2,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	onlineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	onlineDot: {
		width: dotSize,
		height: dotSize,
		borderRadius: dotSize / 2,
		backgroundColor: '#8eda42',
	},
	onlineText: {
		fontSize: 11,
		color: '#8eda42',
		marginLeft: 4,
	},
});
