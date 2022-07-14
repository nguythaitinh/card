import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ModalConfigs } from '@cocrafts/metacraft-ui';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { CardDuelHistory } from 'utils/types/graphql';

interface Props {
	config: ModalConfigs;
}

export const GamePlaying: FC<Props> = ({ config }) => {
	const history = config.context as CardDuelHistory;

	return (
		<View style={styles.container}>
			<Avatar
				style={styles.avatar}
				size={42}
				imageUri={history.opponent?.avatarUrl as string}
			/>
			<View style={styles.innerContainer}>
				<Text style={styles.message}>
					You are on a match with {history.opponent?.name}, would you like to
					continue it?
				</Text>
				<View style={styles.commandContainer}>
					<Button outline title="Cancel" style={styles.buttonContainer} />
					<Button outline title="Resume" style={styles.buttonContainer} />
				</View>
			</View>
		</View>
	);
};

export default GamePlaying;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.08)',
		borderRadius: 24,
		width: 300,
		margin: 20,
	},
	avatar: {
		margin: 12,
	},
	message: {
		color: '#DEDEDE',
	},
	innerContainer: {
		flex: 1,
		padding: 12,
		paddingLeft: 0,
	},
	commandContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 14,
	},
	buttonContainer: {
		marginLeft: 12,
	},
});