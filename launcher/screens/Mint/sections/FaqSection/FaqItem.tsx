import React, { FC, useState } from 'react';
import { Image, LayoutRectangle, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import Accordion from '../../../../components/Marketplace/Accordion';
import { idleLayout } from '../../../../utils/helper';
import resources from '../../../../utils/resources';

export const FaqItem: FC = () => {
	const [layout, setLayout] = useState<LayoutRectangle>(idleLayout);
	const ratioTop = 71 / 1160;
	const ratioBottom = 33 / 1160;

	return (
		<View
			style={styles.container}
			onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}
		>
			<Image
				source={resources.marketplace.faq.middle}
				style={{
					// width: layout.width,
					position: 'absolute',
					top: layout.width * ratioTop,
					bottom: layout.width * ratioBottom,
					left: 0,
					right: 0,
				}}
				resizeMode="repeat"
			/>
			<Image
				source={resources.marketplace.faq.top}
				style={{
					height: layout.width * ratioTop,
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
				}}
			/>
			<Image
				source={resources.marketplace.faq.bottom}
				style={{
					height: layout.width * ratioBottom,
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
				}}
			/>
			<Accordion
				title={
					<Text responsiveSizes={[18]} style={styles.title}>
						How to claim?
					</Text>
				}
				content="Hmmm?"
			/>
		</View>
	);
};

export default FaqItem;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		marginBottom: 20,
		padding: 30,
		marginHorizontal: 15,
	},
	title: {
		paddingBottom: 10,
		paddingLeft: 10,
		color: '#beafa6',
	},
});
