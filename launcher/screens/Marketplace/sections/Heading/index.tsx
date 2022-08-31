import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { UnderRealmIcon } from 'components/Marketplace/visuals/UnderRealmIcon';
import resources from 'utils/resources';

import { marketplaceSizes } from '../../shared';

export const HeadingSection: FC = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.background}
				source={resources.marketplace.headingBackground}
			/>
			<View style={styles.contentContainer}>
				<UnderRealmIcon style={styles.icon} />
				<View style={styles.titleContainer}>
					<Text
						style={styles.title}
						responsiveSizes={marketplaceSizes.responsiveHeadings}
					>
						Marketplace
					</Text>
				</View>
			</View>
		</View>
	);
};

export default HeadingSection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 150,
		paddingBottom: 30,
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	contentContainer: {
		position: 'relative',
		alignItems: 'center',
	},
	icon: {
		opacity: 0.8,
	},
	titleContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		justifyContent: 'center',
	},
	title: {
		fontWeight: '600',
		color: '#fff',
	},
});
