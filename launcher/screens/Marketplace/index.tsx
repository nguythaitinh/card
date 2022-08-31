import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from '@metacraft/ui';
import CompactLayout from 'components/layouts/Compact';
import { iStyles } from 'utils/styles';

import HeadingSection from './sections/Heading';

const BrowserMarketplace: FC = () => {
	return (
		<CompactLayout>
			<ScrollView contentContainerStyle={iStyles.contentContainer}>
				{/*<HeadingSection />*/}
				<Text style={styles.text}>Marketplace</Text>
			</ScrollView>
		</CompactLayout>
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
