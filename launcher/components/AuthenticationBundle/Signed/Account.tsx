import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Avatar from 'components/Avatar';
import Text from 'components/Text';
import { shortenAddress } from 'utils/helper';
import { Profile } from 'utils/types';

import { styles } from './internal';

interface Props {
	profile: Profile;
	onPress?: () => void;
	onAvatarPress?: () => void;
}

export const Account: FC<Props> = ({ profile, onPress, onAvatarPress }) => {
	const { address, name, avatarUrl } = profile;

	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<View style={styles.infoContainer}>
				<Text style={styles.primaryText}>{name}</Text>
				<Text style={styles.secondaryText}>
					{shortenAddress(address as string)}
				</Text>
			</View>
			<Avatar
				imageUri={avatarUrl}
				characters={address}
				onPress={onAvatarPress}
			/>
		</TouchableOpacity>
	);
};

export default Account;
