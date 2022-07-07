import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'components/Button';

import GameInvitations from './GameInvitations';

export const HomeDashboard: FC = () => {
	return (
		<View style={styles.container}>
			<Button
				outline
				title="PLAY"
				style={styles.playButton}
				titleStyle={styles.playTitle}
			/>
			<GameInvitations />
		</View>
	);
};

export default HomeDashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	playButton: {
		top: 50,
		left: 50,
		width: 150,
	},
	playTitle: {
		fontSize: 32,
		fontWeight: '600',
	},
});
