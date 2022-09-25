import React, { FC } from 'react';
import { Image, ScaledSize, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import resources from '../../../../utils/resources';
import { iStyles } from '../../../../utils/styles';
import { marketplaceSizes, marketplaceStyle } from '../../shared';

interface Props {
	dimensions: ScaledSize;
}

export const BannerSection: FC<Props> = ({ dimensions }) => {
	const scaledWidth = Math.min(
		dimensions.width,
		iStyles.contentContainer.maxWidth,
	);

	const height = Math.max((scaledWidth / 63) * 25, 250);

	return (
		<View style={[styles.container, { height }]}>
			<Image
				source={resources.marketplace.mintBanner}
				style={marketplaceStyle.background}
			/>
			<View style={styles.contentContainer}>
				<Text
					style={marketplaceStyle.heading}
					responsiveSizes={marketplaceSizes.responsiveHeadings}
				>
					Get Genesis NFT Card
				</Text>
			</View>
		</View>
	);
};

export default BannerSection;

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
});
