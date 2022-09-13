import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '@metacraft/ui';

import Separator from '../../../../components/icons/underRealm/Separator';
import Card from '../../../../components/Marketplace/Card';
import { marketplaceSizes, marketplaceStyle } from '../../shared';

interface Props {
	style?: ViewStyle;
}

export const BoxSellingSection: FC<Props> = ({ style }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.titleContainer}>
				<Text
					style={marketplaceStyle.heading}
					responsiveSizes={marketplaceSizes.responsiveHeadings}
				>
					Box box box
				</Text>
				<Separator style={styles.separatorStyle} size={550} />
				<Text style={styles.subtitle} responsiveSizes={[18, 18, 16, 14]}>
					Subtitle text
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'center',
					marginVertical: 25,
				}}
			>
				<Card animationFlipDisable={true} />
				<Card animationHoveredDisable={true} />
				<Card animationFlipDisable={true} animationHoveredDisable={true} />
				<Card imageSource="https://picsum.photos/200/300" />
				<Card />
			</View>
		</View>
	);
};

export default BoxSellingSection;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 100,
		paddingBottom: 30,
	},
	titleContainer: {
		alignItems: 'center',
	},
	separatorStyle: {
		opacity: 0.2,
	},
	subtitle: {
		color: '#fff',
		opacity: 0.5,
	},
});
