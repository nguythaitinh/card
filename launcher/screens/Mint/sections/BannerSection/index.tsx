import React, { FC } from 'react';
import { ImageBackground, ScaledSize, StyleSheet, View } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { ScaledSizes, Text } from '@metacraft/ui';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

const { Realm } = stormIcons;

interface Props {
	dimensions: ScaledSize;
}

export const BannerSection: FC<Props> = () => {
	return (
		<ImageBackground
			style={[iStyles.contentContainer, styles.container, { height: 678 }]}
			source={resources.mint.keyVisual}
		>
			<View style={styles.contentContainer}>
				<Text style={styles.heading} responsiveSizes={responsiveHeadings}>
					Get Genesis NFT Card
				</Text>
				<Text style={styles.intro}>
					The very first and one of the largest Genesis card minting of{' '}
					<Text style={styles.bold}>2,373 Genenis NFTs</Text> where you can get
					unique chance to purchase and own those NFTs. Choose a Pack and get
					one of the most valuable Genesis NFT ever!
				</Text>
			</View>
		</ImageBackground>
	);
};

export default BannerSection;

const responsiveHeadings: ScaledSizes = [40, 38, 32, 24];

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 70,
		paddingBottom: 20,
		marginBottom: 10,
	},
	contentContainer: {
		position: 'relative',
		alignItems: 'center',
	},
	heading: {
		color: '#fff',
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 28,
		textShadow: '0 0 5px black',
	},
	intro: {
		maxWidth: 800,
		fontSize: 18,
		textAlign: 'center',
		textShadow: '0 0 10px black',
	},
	bold: {
		fontWeight: '500',
	},
});
