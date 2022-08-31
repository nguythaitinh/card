import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import HeadingSection from './sections/Heading';

const BrowserMarketplace: FC = () => {
	return (
		<View style={styles.container}>
			<ScrollView>
				{/* <HeadingSection /> */}
				<Text style={styles.text}>Marketplace</Text>
			</ScrollView>
		</View>
	);
};

export default BrowserMarketplace;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		color: '#fff',
	},
});
