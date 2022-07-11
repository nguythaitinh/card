import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSnapshot } from 'utils/hook';
import { LiveState, liveState } from 'utils/state/live';
import { liveActions } from 'utils/state/live';
import { GameInvitation } from 'utils/types/graphql';

import GameInvitationItem from './Item';

export const GameInvitations: FC = () => {
	const { gameInvites } = useSnapshot<LiveState>(liveState);

	const onAccept = ({ id }: GameInvitation) => {
		liveActions.acceptGameInvitation(id);
	};

	return (
		<View style={styles.container}>
			{gameInvites.map((invite, i) => {
				return <GameInvitationItem key={i} item={invite} onAccept={onAccept} />;
			})}
		</View>
	);
};

export default GameInvitations;

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
});
