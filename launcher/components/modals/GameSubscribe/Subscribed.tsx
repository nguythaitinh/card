import React, { FC } from 'react';
import {
	Image,
	Linking,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { Text } from '@metacraft/ui';

export const Subscribed: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>
				You have successfully subscribed to the Alpha Launch
			</Text>
			<Text style={styles.message}>
				Thank you for your interests in Under Realm!
			</Text>
			<View style={styles.blockContainer}>
				<View style={styles.tweetContainer}>
					<Text style={[styles.message, { marginRight: 16 }]}>Tweet this:</Text>
					<TouchableOpacity
						style={styles.command}
						onPress={() =>
							Linking.openURL(
								'https://twitter.com/intent/tweet?text=I%27ve%20subscribed%20to&url=https%3A%2F%2Fstormgate.io%2F&via=StormgateIO',
							)
						}
					>
						<Image
							style={styles.twitterImage}
							source={{
								uri: 'https://stormgate.io/external/twitter-share-button-icon.png',
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.followContainer}>
				<Text style={styles.message}>
					Follow our community for quick updates:
				</Text>
				<View style={styles.commandContainer}>
					<TouchableOpacity
						style={styles.command}
						onPress={() => Linking.openURL('https://discord.gg/sXcz9Em4AR')}
					>
						<Text>Discord</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.command}
						onPress={() => Linking.openURL('https://twitter.com/StormgateIO')}
					>
						<Text>Twitter</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Subscribed;

const styles = StyleSheet.create({
	container: {
		maxWidth: 650,
		paddingTop: 100,
		paddingBottom: 50,
		paddingHorizontal: 80,
	},
	heading: {
		color: '#CFCDB3',
		fontSize: 24,
		lineHeight: 32,
		fontWeight: '400',
		textAlign: 'center',
		marginBottom: 20,
	},
	message: {
		fontSize: 18,
		fontWeight: '200',
		color: '#ffffff',
		textAlign: 'center',
	},
	blockContainer: {
		marginVertical: 20,
	},
	tweetContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
	},
	commandContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
		marginTop: 12,
	},
	command: {
		marginHorizontal: 8,
	},
	twitterImage: {
		width: 100,
		height: 32,
	},
	followContainer: {
		marginTop: 32,
		marginBottom: 8,
	},
});
