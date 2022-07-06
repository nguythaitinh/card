import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from 'components/Avatar';
import { shortenAddress } from 'utils/helper';
import { Profile } from 'utils/types';

export interface BuddyProps {
	index: number;
	item: Profile;
}

export const BuddyItem: FC<BuddyProps> = ({ item }) => {
	const { name, address } = item;

	return (
		<View style={styles.container}>
			<Avatar size={avatarSize} imageUri={item.avatarUrl} />
			<View style={styles.onlineCircle} />
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{name || shortenAddress(address || '')}</Text>
				<Text style={styles.onlineText}>Online</Text>
			</View>
		</View>
	);
};

export default BuddyItem;

const avatarSize = 32;
const circleSize = 10;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: 6,
	},
	onlineCircle: {
		position: 'absolute',
		top: avatarSize - circleSize / 2,
		left: avatarSize - circleSize,
		width: circleSize,
		height: circleSize,
		borderRadius: circleSize / 2,
		backgroundColor: '#8eda42',
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.4)',
	},
	infoContainer: {
		flex: 1,
		paddingLeft: 8,
	},
	name: {
		fontSize: 13,
		color: 'rgba(255, 255, 255, 0.4)',
		marginTop: 3,
	},
	onlineText: {
		color: 'rgba(255, 255, 255, 0.2)',
		fontSize: 11,
		fontWeight: '300',
		opacity: 0.72,
	},
});
