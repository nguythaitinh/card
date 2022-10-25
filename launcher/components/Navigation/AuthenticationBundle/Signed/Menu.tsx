import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Hyperlink, modalActions, Text } from '@metacraft/ui';
import { signOut } from 'utils/lib/auth';
import { noSelect } from 'utils/styles';

const styles = StyleSheet.create({
	container: {
		...noSelect,
		minWidth: 120,
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		paddingVertical: 8,
		paddingHorizontal: 12,
		borderRadius: 18,
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.025)',
	},
	heading: {
		fontSize: 11,
		color: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
		marginVertical: 6,
	},
	hyperLink: {
		fontSize: 11,
		textAlign: 'center',
		marginVertical: 6,
	},
});

export const SignedMenu: FC = () => {
	const innerSignOut = async () => {
		await signOut();
		modalActions.hide('signedOptions');
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Signed Menu</Text>
			<Hyperlink
				style={styles.hyperLink}
				onPress={innerSignOut}
				title="Sign Out"
			/>
		</View>
	);
};

export default SignedMenu;
