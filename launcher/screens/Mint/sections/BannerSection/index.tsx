import React, { FC } from 'react';
import { ImageBackground, ScaledSize, StyleSheet, View } from 'react-native';
import { ScaledSizes, Text } from '@metacraft/ui';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

interface Props {
	dimensions: ScaledSize;
}

export const BannerSection: FC<Props> = () => {
	return (
		<ImageBackground
			style={[iStyles.contentContainer, styles.container, { height: 724 }]}
			source={resources.mint.keyVisual}
		>
			<View style={styles.contentContainer}>
				<Text style={styles.heading} responsiveSizes={responsiveHeadings}>
					Get Genesis NFT Card
				</Text>
			</View>
		</ImageBackground>
	);
};

export default BannerSection;

const responsiveHeadings: ScaledSizes = [45, 45, 38, 30];

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
		fontWeight: '600',
		color: '#fff',
		textAlign: 'center',
	},
});
