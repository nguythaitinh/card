import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Buddies: FC = () => {
	return (
		<View style={styles.container}>
			<Text>BuddyPanel</Text>
		</View>
	);
};

export default Buddies;

const styles = StyleSheet.create({
	container: {
		padding: 12,
	},
});
