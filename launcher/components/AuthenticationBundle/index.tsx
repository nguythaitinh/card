import { FC } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSnapshot } from 'utils/hook';
import { AccountState, accountState } from 'utils/state/account';
import { ThemeState, themeState } from 'utils/state/theme';

import Signed from './Signed';
import SignIn from './SignIn';

const commandSize = 32;
const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginRight: 12,
	},
	loadingContainer: {
		width: commandSize,
		height: commandSize,
		marginRight: 4,
		borderRadius: commandSize / 2,
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const AuthenticationBundle: FC = () => {
	const { profile, loading } = useSnapshot<AccountState>(accountState);
	const { sizes } = useSnapshot<ThemeState>(themeState);
	const containerStyle = [
		styles.container,
		{ height: sizes.topNavigationSize },
	];

	return (
		<View style={containerStyle}>
			{loading ? (
				<View style={styles.loadingContainer}>
					<ActivityIndicator size={commandSize - 6} />
				</View>
			) : profile?.address ? (
				<Signed profile={profile} />
			) : (
				<SignIn />
			)}
		</View>
	);
};

export default AuthenticationBundle;
