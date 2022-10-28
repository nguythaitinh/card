import React, { FC } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { ScaledSizes, Text } from '@metacraft/ui';
import { useNavigation } from '@react-navigation/native';
import UnderRealmLogo from 'components/Home/visuals/UnderRealmLogo';
import UnderRealmButton from 'components/Marketplace/Button';
import resources from 'utils/resources';

const HeadingSection: FC = () => {
	const navigation = useNavigation();

	return (
		<ImageBackground
			source={resources.home.headingBackground}
			style={styles.container}
		>
			<UnderRealmLogo />
			<View style={styles.headLineContainer}>
				<Text style={styles.headLine} responsiveSizes={responsiveHeadline}>
					Free-to-play Strategy Trading Card game
				</Text>
				<Text style={styles.headLine} responsiveSizes={responsiveHeadline}>
					built by community
				</Text>
			</View>
			<View style={styles.actionButtonContainer}>
				<UnderRealmButton
					style={styles.actionButton}
					onPress={() => navigation.navigate('Mint' as never)}
				>
					<Text style={styles.actionButtonText}>Mint</Text>
				</UnderRealmButton>
				<UnderRealmButton style={styles.actionButton}>
					<Text style={styles.actionButtonText}>Alpha Subscribe</Text>
				</UnderRealmButton>
			</View>
		</ImageBackground>
	);
};

export default HeadingSection;

const responsiveHeadline = [50, 40, 35, 30] as ScaledSizes;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: 100,
		paddingHorizontal: 15,
	},
	headLineContainer: {
		alignItems: 'center',
	},
	headLine: {
		textAlign: 'center',
		fontWeight: '500',
		fontFamily: 'Volkhov',
		color: '#fff',
		textShadow: '0 0 5px black',
	},
	actionButtonContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 40,
	},
	actionButton: {
		width: 250,
		margin: 10,
	},
	actionButtonText: {
		textAlign: 'center',
		fontSize: 16,
		textShadow: '0 0 10px black',
	},
});
