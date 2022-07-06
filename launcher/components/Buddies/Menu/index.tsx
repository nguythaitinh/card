import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import MenuItem from './Item';

export const BuddyMenu: FC = () => {
	return (
		<View style={styles.container}>
			<MenuItem title="Send Invite" />
			<MenuItem style={styles.lastMenuItem} title="Send Message" />
		</View>
	);
};

export default BuddyMenu;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.08)',
		borderRadius: 24,
	},
	lastMenuItem: {
		borderColor: 'transparent',
	},
});
